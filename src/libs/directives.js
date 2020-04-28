export default {
  install(Vue){
    Vue.directive('uppercase', {
      bind: function (el) {
        el.style.textTransform = 'uppercase';
      }
    })

    Vue.directive('twemoji', {
      bind: function (el) {
        const oldHtml = el.innerHTML
        let newHtml = Vue.prototype.$twemoji.parse(oldHtml, function (emoji) {
          return 'https://abs.twimg.com/emoji/v2/72x72/'+emoji+'.png'
        })
        el.innerHTML = newHtml
      }
    })

    Vue.prototype.$cursor = Vue.observable({ type: "blank"})
    Vue.directive('cursor', {
      bind: function (el, binding) {
        let enter = function(){
          Vue.prototype.$cursor.type = binding.value
        }
        el.addEventListener('mouseenter', enter)
        let leave = function(){
          Vue.prototype.$cursor.type = 'blank'
        }
        el.addEventListener('mouseleave', leave)
      }
    })
  }
}