import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import registerComponent from './components'
import './styles/font.scss'
import './styles/spacing.scss'
import anime from './libs/animejs'
import directives from './libs/directives'
import VueMeta from 'vue-meta'
import VueScreenSize from 'vue-screen-size'
import './libs/matomo'
import vuetwemoji from 'vue-twemoji'

Vue.use(vuetwemoji, [{
  baseUrl: 'https://twemoji.maxcdn.com/', //can set to local folder of emojis. default: https://twemoji.maxcdn.com/
  extension: '.png', //.svg, .png
  className: 'emoji', //custom className for image output
  size: '36x36' //image size
}])
Vue.use(VueScreenSize)
Vue.use(VueMeta)

registerComponent(Vue)
anime.install(Vue)
directives.install(Vue)
Vue.config.productionTip = false

Vue.prototype.$cursor = Vue.observable({ type: "blank"})
// Vue.prototype.$cursor.type = binding.value
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

Vue.prototype.$w = window

Vue.set(window, 'isVertical', false)
window.waitResize = false
window.addEventListener(
  'resize',
  () => {
    if(window.waitResize == false){
      window.isVertical = window.innerHeight > window.innerWidth
      window.isHorizontal = window.innerHeight <= window.innerWidth
      window.waitResize = true
      setTimeout(() => {
        window.waitResize = false
      }, 100);
    }
  }
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
