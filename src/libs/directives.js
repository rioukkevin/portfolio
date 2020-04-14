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
        let newHtml = Vue.prototype.$twemoji.parse(oldHtml, function (emoji, options) {
          // eslint-disable-next-line no-console
          console.log('TOTO',oldHtml, options, emoji)
          return 'https://abs.twimg.com/emoji/v2/72x72/'+emoji+'.png'
        })
        el.innerHTML = newHtml
      }
    })
  }
}