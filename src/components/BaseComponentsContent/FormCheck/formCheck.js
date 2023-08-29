import {onMounted, reactive, toRaw, watch} from 'vue'
// import * as os from 'os'

export default class FormCheck {
    constructor (submitBtn, {
        formData,
        validators,
        pass,
        noPass,
        handleSubmit
    }) {
        FormCheck.formData = reactive(formData);
        this.submitBtn = submitBtn;
        this.validators = validators;
        this.pass = pass;
        this.noPass = noPass;
        this.handleSubmit = handleSubmit;
        this.result = {};

        this.init()
    }

    init() {
        this.addWatcher()
        onMounted(this.bindEvent);
    }

    bindEvent = () => {
        const oSubmitBtn = document.querySelector(this.submitBtn);
        oSubmitBtn.addEventListener('click', this.handleSubmitClick.bind(this), false);
    }

    addWatcher () {
        for (let key in FormCheck.formData) {
            if (this.validators[key]) {
                this.addResult(key)
                watch(() => FormCheck.formData[key], (newValue) => {
                    const { reg, msg } = this.validators[key](newValue);

                    if (!reg) {
                        this.setResult(key, false)
                        this.noPass(key, newValue, msg)
                        return;
                    }

                    this.setResult(key, true)
                    this.pass(key, newValue);
                })
            }
        }
    }

    addResult (key) {
        this.result[key] = false;
    }

    setResult (key, bool) {
        this.result[key] = bool;
    }

    handleSubmitClick () {
        const falseIndex = Object.values(this.result).findIndex(item => !item);

        if (falseIndex !== -1) {
            const key = Object.keys(this.result)[falseIndex];
            const { msg } = this.validators[key](FormCheck.formData[key]);
            this.noPass(key, FormCheck.formData[key], msg);

            return;
        }

        this.handleSubmit(toRaw(FormCheck.formData));
    }

    static create (submitBtn, {
        formData,
        validators,
        pass,
        noPass,
        handleSubmit
    }) {
        new FormCheck(
            submitBtn, {
                formData,
                validators,
                pass,
                noPass,
                handleSubmit
            }
        );

        return FormCheck.formData;
    }
}