<template>
  <div class="cornell-container">
    <section class="cornell-cues flex flex-col">
      <slot name="cues">
        <h3 class="cornell-title">Cues & Keywords</h3>
      </slot>
    </section>
    <section class="cornell-notes flex flex-col">
      <slot name="notes">
        <h3 class="cornell-title">Notes</h3>
      </slot>
    </section>
    <section class="cornell-summary flex flex-col">
      <slot name="summary">
        <h3 class="cornell-title">Summary</h3>
      </slot>
    </section>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for basic slot layout
</script>

<style scoped>
@media (max-width: 900px) {
  .cornell-container {
    grid-template-columns: 1fr;
  }
  .cornell-cues,
  .cornell-notes,
  .cornell-summary {
    border: none !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .cornell-cues,
  .cornell-notes {
    margin-bottom: 1.5rem;
  }
}
</style> 