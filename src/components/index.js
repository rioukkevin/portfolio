// component register
// Ant
import Button from 'ant-design-vue/lib/button'
import Icon from 'ant-design-vue/lib/icon'
import Row from 'ant-design-vue/lib/row'
import Col from 'ant-design-vue/lib/col'
import Divider from 'ant-design-vue/lib/divider'
import Affix from 'ant-design-vue/lib/affix'
import Timeline from 'ant-design-vue/lib/timeline'
import Input from 'ant-design-vue/lib/input'
import Notifications from 'ant-design-vue/lib/notification'
// Homemade
import KTile from './core/Tile'
import KDetail from './core/Detail'
import KCursor from './core/Cursor'
import KLogo from './core/Logo'

import KUnicorn from './data/Unicorn'
import KFooter from './data/Footer'
import KWho from './data/Who'
import KProject from './data/Project'
import KMusic from './data/Music'
import KPalette from './data/Palette'
import KXp from './data/Xp'


export default function (Vue) {
  // Ant
  Vue.component('a-button', Button)
  Vue.component('a-icon', Icon)
  Vue.component('a-row', Row)
  Vue.component('a-col', Col)
  Vue.component('a-divider', Divider)
  Vue.component('a-affix', Affix)
  Vue.use(Timeline)
  Vue.use(Input)
  Vue.use(Notifications)
  Vue.prototype.$notification = Notifications
  // HomeMade
  Vue.component('k-tile', KTile)
  Vue.component('k-cursor', KCursor)
  Vue.component('k-detail', KDetail)
  Vue.component('k-logo', KLogo)

  Vue.component('k-unicorn', KUnicorn)
  Vue.component('k-xp', KXp)
  Vue.component('k-footer', KFooter)
  Vue.component('k-who', KWho)
  Vue.component('k-project', KProject)
  Vue.component('k-music', KMusic)
  Vue.component('k-palette', KPalette)
}