import { h } from 'vue'
import Theme from 'vitepress/theme'
import PwaLayout from './PwaLayout.vue'

import './styles/index.scss'

import 'uno.css'

export default {
  ...Theme,
  Layout() {
    return h(PwaLayout)
  },
}
