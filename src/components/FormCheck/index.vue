<template>
    <div class="form-wrapper">
        <p>
            <input
                type="text"
                v-model="formData.realName"
                placeholder="RealName"
            />
        </p>
        <p>
            <input
                type="number"
                v-model="formData.age"
                placeholder="Age"
            />
        </p>
        <p>
            <input
                type="text"
                v-model="formData.userName"
                placeholder="UserName"
            />
        </p>
        <p>
            <input
                type="password"
                v-model="formData.password"
                placeholder="Password"
            />
        </p>
        <p>
            <input
                type="radio"
                v-model="formData.gender"
                value="male"
                checked="true"
            /> Male
            <input
                type="radio"
                v-model="formData.gender"
                value="female"
            /> Female
        </p>
        <p>
            <select
                v-model="formData.occupation"
            >
                <option value="">Please choose...</option>
                <option value="teacher">Teacher</option>
                <option value="police">Police</option>
            </select>
        </p>
        <p>
            <input
                type="checkbox"
                v-model="formData.hobbies"
                value="music"
            /> Music
            <input
                type="checkbox"
                v-model="formData.hobbies"
                value="travel"
            /> Travel
            <input
                type="checkbox"
                v-model="formData.hobbies"
                value="football"
            /> Football
            <input
                type="checkbox"
                v-model="formData.hobbies"
                value="basketball"
            /> Basketball
        </p>
        <p>
        <textarea
            v-model="formData.intro"
            cols="30"
            rows="2"
            placeholder="Self Introduction"
        ></textarea>
        </p>
        <button id="submitBtn" @click="btnClick">Submit</button>
    </div>
</template>

<script setup>
import FormCheck from './formCheck'
import {reactive, toRaw, watch} from 'vue'


// const data = {
//     realName: '',
//     age: 0,
//     userName: '',
//     password: '',
//     gender: 'male',
//     occupation: '',
//     hobbies: [],
//     intro: ''
// }

// 策略 strategy
const validators = {
    realName: (value) => ({
        reg: value.length >= 2 && value.length <= 10,
        msg: 'RealName: 2-10'
    }),
    age: (value) => ({
        reg: !isNaN(Number(value)) && Number(value) <= 150,
        msg: 'Age: type number and max 150'
    }),
    userName: (value) => ({
        reg: value.length >= 6,
        msg: 'Username: min 6'
    }),
    password: (value) => ({
        reg: value.length >= 6,
        msg: 'Password: min 6'
    }),
    gender: null,
    occupation: (value) => ({
        reg: value.length > 0,
        msg: 'Occupation: one must be selected'
    }),
    hobbies: (value) => ({
        reg: value.length > 0,
        msg: 'Hobbies: must select one'
    }),
    intro: (value) => ({
        reg: value.length >= 10,
        msg: 'Introduction: min 10'
    }),
}

let formData = reactive({
    realName: '',
    age: 0,
    userName: '',
    password: '',
    gender: 'male',
    occupation: '',
    hobbies: [],
    intro: ''
});

let result = {};

for (let key in formData) {
    if (validators[key]) {
        addResult(key)
        watch(() => formData[key], (newValue) => {
            const {reg, msg} = validators[key](newValue);

            if (!reg) {
                setResult(key, false)
                noPass(key, newValue, msg)
                return;
            }

            setResult(key, true)
            pass(key, newValue);
        })
    }
}

function btnClick () {
    const falseIndex = Object.values(result).findIndex(item => !item);

    if (falseIndex !== -1) {
        const key = Object.keys(result)[falseIndex];
        const formDataValue =  formData[key];

        const { msg } = validators[key](formDataValue);
        noPass(key, formDataValue, msg);

        return;
    }

    console.log(toRaw(formData))
}

function pass (key, value) {
    console.log('pass: ', key, value);
}

function noPass (key, value, error) {
    console.log('noPass: ', key, value, error);
}

function addResult (key) {
    result[key] = false;
}

function setResult (key, bool) {
    result[key] = bool;
}

// const formData = FormCheck.create('#submitBtn', {
//     formData: data,
//     validators,
//     pass (key, value) {
//         console.log('pass: ', key, value);
//     },
//     noPass (key, value, error) {
//         console.log('noPass: ', key, value, error);
//     },
//     handleSubmit (formData) {
//         console.log(formData);
//     }
// });
</script>

<style scoped lang="scss">
.form-wrapper {
    font-size: .2rem;
}

</style>