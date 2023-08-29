import CarouselUi from './CarouselUi/index'
import CarItem from './CarouselUi/Item';
import SelectorUi from './Selector/index'
import TreeMenu from './TreeMenu/index'
import MenuItem from './TreeMenu/MenuItem'
import SubMenu from './TreeMenu/SubMenu'
import ReSubMenu from './TreeMenu/ReSubMenu'
import MagnifierUi from './Magnifier/index'
import StarsUi from './StarsUi/index'
import ModalUi from './Modal/index'
import Transfer from './Transfer/Transfer'
import MyButton from './MyButton'
import InputUi from './InputUi'
import ButtonUi from './ButtonUi'

let MyUiComponents = {
    CarouselUi,
    CarItem,
    SelectorUi,
    TreeMenu,
    MenuItem,
    SubMenu,
    ReSubMenu,
    MagnifierUi,
    StarsUi,
    ModalUi,
    Transfer,
    MyButton,
    InputUi,
    ButtonUi
};


/*
* 自定义全局组件
* 自定义组件名
*
* app.component(组件名, 组件本身)
* */
MyUiComponents.install = function (app, options) {
    for (let comp in MyUiComponents) {
        app.component(comp, MyUiComponents[comp]);
    }
}

export default MyUiComponents
