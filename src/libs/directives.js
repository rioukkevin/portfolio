export default {
  install(Vue){
    Vue.directive('uppercase', {
      bind: function (el) {
        el.style.textTransform = 'uppercase';
      }
    })
  }
}