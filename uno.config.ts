import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'button-action': 'flex flex-inline gap-2 items-center justify-center px-3 py-0.5 rounded hover:color-$vp-c-brand-2 hover:bg-$vp-c-default-soft',
    'border-base': 'border-color-$vp-c-divider',
    'text-brand': 'color-$vp-c-brand-1',
    'text-brand-yellow': 'color-$vp-c-yellow-1',
    'text-brand-red': 'color-$vp-c-red-1',
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    'c': 'grid inline-grid',
    // single utility alias
    'r': 'text-red-600 fw700 text-xl',
    'dr': 'text-red-500 underline decoration-double',
    'w': 'decoration-red500	decoration-2 underline-offset-3 underline decoration-wavy',
    // Cornell Notes shortcuts
    'cornell-container': 'grid grid-cols-3 gap-8 m-8 p-4 bg-$vp-c-bg-soft rounded-lg',
    'cornell-cues': 'border-r border-$vp-c-divider pr-4',
    'cornell-notes': 'border-r border-$vp-c-divider pr-4',
    'cornell-summary': 'pl-4',
    'cornell-cue-item': 'p-2 mb-2 bg-$vp-c-bg-soft rounded cursor-pointer transition-all duration-300 hover:bg-$vp-c-brand-soft',
    'cornell-section': 'mb-8 p-4 bg-$vp-c-bg rounded',
    'cornell-title': 'text-lg font-bold mb-4',
    'cornell-subtitle': 'font-semibold mb-2',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      unit: 'em',
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'font-mono',
    'mb0!',
    'no-underline!',
  ],
})
