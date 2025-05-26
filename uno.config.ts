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
    // Cornell Notes custom shortcuts
    'cornell-header': 'grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 border-green-600 dark:border-green-400 p-4 bg-green-50 dark:bg-green-900',
    'cornell-label': 'font-semibold text-gray-700 dark:text-gray-200',
    'cornell-value': 'flex-1 border-b border-green-400 dark:border-green-600 pb-0.5',
    'cornell-notes': 'md:w-2/3 border-b md:border-b-0 md:border-r-2 border-green-200 dark:border-green-700 p-6',
    'cornell-summary': 'md:w-1/3 p-6 bg-green-50 dark:bg-green-900 border-t md:border-t-0 md:border-l-2 border-green-200 dark:border-green-700 flex flex-col justify-between',
    'cornell-section': 'space-y-6 text-base',
    'cornell-title': 'text-lg font-bold mb-4 text-green-700 dark:text-green-300',
    'cornell-highlight': 'font-semibold text-blue-600 dark:text-blue-300',
    'cornell-note-entry': 'border-b-2 border-green-400 dark:border-green-600 last:border-none',
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
