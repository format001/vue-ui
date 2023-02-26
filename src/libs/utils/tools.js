export function getStyle (el, prop) {
    return parseInt(window.getComputedStyle(el, null)[prop]);
}

// offsetLeft/offsetTop只认父级的定位元素，
// 如果父级有定位元素，就认父级，如果没有，就一直往上找，直到body
//  offsetParent
// 返回有定位的父级 -> 哪一个祖先级是有定位的
export function getElemDocPosition(el) {
    var parent = el.offsetParent,
        offsetLeft = el.offsetLeft,
        offsetTop = el.offsetTop;

    while (parent) {
        offsetLeft += parent.offsetLeft;
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return {
        left: offsetLeft,
        top: offsetTop
    }
}