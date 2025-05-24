import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import './styles/index.scss'

import 'uno.css'

// Import Chart.js styles
import 'chart.js/auto'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add any custom slots here if needed
    })
  },
  enhanceApp({ app }) {
    // Register any global components here if needed
  }
}
