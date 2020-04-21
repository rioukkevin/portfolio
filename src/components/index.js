// component register
// Ant
import Button from 'ant-design-vue/lib/button'
import Icon from 'ant-design-vue/lib/icon'
import Row from 'ant-design-vue/lib/row'
import Col from 'ant-design-vue/lib/col'
import Input from 'ant-design-vue/lib/input'
// Homemade
import KTile from './core/Tile'
import KDetail from './core/Detail'
import KCursor from './core/Cursor'

import KLogo from './common/Logo'

import KFooter from './data/Footer'
import KWho from './data/Who'
import KProject from './data/Project'
import KProjectList from './data/Projects'
import KMusic from './data/Music'
import KPalette from './data/Palette'
import KXp from './data/Xp'


export default function (Vue) {
  // Ant
  Vue.component('a-button', Button)
  Vue.component('a-icon', Icon)
  Vue.component('a-row', Row)
  Vue.component('a-col', Col)
  Vue.use(Input)
  // HomeMade
  Vue.component('k-tile', KTile)
  Vue.component('k-cursor', KCursor)
  Vue.component('k-detail', KDetail)
  Vue.component('k-logo', KLogo)

  Vue.component('k-xp', KXp)
  Vue.component('k-footer', KFooter)
  Vue.component('k-who', KWho)
  Vue.component('k-project', KProject)
  Vue.component('k-project-list', KProjectList)
  Vue.component('k-music', KMusic)
  Vue.component('k-palette', KPalette)
}