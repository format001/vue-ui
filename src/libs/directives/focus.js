export default {
    mounted (el, bindings, vnNode, prevNode) {
        const oSelectorInput = el.getElementsByClassName('selector-input')[0],
            oSelectorMenu = el.getElementsByClassName('selector-menu')[0];

        const oInput = oSelectorInput.getElementsByTagName('input')[0],
            oPlaceHolder = oSelectorInput.getElementsByTagName('label')[0],
            oIcon = oSelectorInput.getElementsByTagName('span')[0];

        oInput.addEventListener('focus', function () {
            oPlaceHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-search';

            setTimeout(() => {
                oSelectorMenu.style.display = 'block';
            }, 200);
        }, false);

        oInput.addEventListener('blur', function () {
            oIcon.className = 'iconfont icon-arrow-down'

            setTimeout(() => {
                oSelectorMenu.style.display = 'none';

                if (this.value.length === 0) {
                    oPlaceHolder.style.display = 'block';
                }
            }, 200);
        }, false);
    }
}