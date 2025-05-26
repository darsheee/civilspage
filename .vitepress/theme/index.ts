import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import './styles/index.scss'

import 'uno.css'

// Import Chart.js styles
import 'chart.js/auto'

import ChartDemo from '../components/ChartDemo.vue'
import MermaidDiagram from '../components/MermaidDiagram.vue'
import CornellNotes from '../components/CornellNotes.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add any custom slots here if needed
    })
  },
  enhanceApp({ app }) {
    // Register any global components here if needed
    app.component('ChartDemo', ChartDemo)
    app.component('MermaidDiagram', MermaidDiagram)
    app.component('CornellNotes', CornellNotes)
  }
}
