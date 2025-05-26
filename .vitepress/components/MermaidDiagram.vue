<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import mermaid from 'mermaid'

const props = defineProps<{
  diagram: string
  id?: string
}>()

const diagramRef = ref<HTMLElement | null>(null)
const uniqueId = ref(`mermaid-${Math.random().toString(36).substr(2, 9)}`)

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'inherit',
})

const renderDiagram = async () => {
  if (!diagramRef.value) return
  
  try {
    const { svg } = await mermaid.render(uniqueId.value, props.diagram)
    diagramRef.value.innerHTML = svg
  } catch (error) {
    console.error('Error rendering Mermaid diagram:', error)
    if (diagramRef.value) {
      diagramRef.value.innerHTML = `<div class="error">Error rendering diagram: ${error}</div>`
    }
  }
}

onMounted(() => {
  renderDiagram()
})

watch(() => props.diagram, () => {
  renderDiagram()
})
</script>

<template>
  <div class="mermaid-diagram" ref="diagramRef"></div>
</template>

<style scoped>
.mermaid-diagram {
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
}

.error {
  color: red;
  padding: 1rem;
  border: 1px solid red;
  border-radius: 4px;
}
</style> 