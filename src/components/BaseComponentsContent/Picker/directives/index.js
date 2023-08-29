export default {
  mounted (el, binding) {

    function documentHandler (e) {
      if (el.contains(e.target)) {
        return false;
      }

      binding.value(e);

      // if (binding.expression) {
      //   binding.value(e);
      // }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler, true);
  },
  unmounted (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__, true);
    delete el.__vueClickOutside__;
  },
};
