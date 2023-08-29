import guideComponent from './Guide.vue'
import {createApp, watch} from 'vue'

function guideBox (option) {
    const guideBoxApp = createApp(guideComponent, option);

    showGuideBox(guideBoxApp, {
        handleGuide: option.handleGuide,
    });
}

function showGuideBox (app, { handleGuide }) {
    const oFragment = document.createDocumentFragment();
    const vm = app.mount(oFragment);
    document.body.appendChild(oFragment);

    vm.setVisible(true);

    watch(vm.state, (state) => {
        if (!state.visible) {
            typeof handleGuide === 'function' && handleGuide(state.type);
            hideGuideBox(app);
        }
    })
}


function hideGuideBox (app) {
    app.unmount();
}

export default guideBox;