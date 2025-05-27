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
    'cornell-container': 'max-w-4xl mx-auto bg-white border-2 border-black shadow-lg',
    'cornell-header': 'border-b-3 border-black p-4 bg-blue-50',
    'cornell-header-row': 'grid grid-cols-3 gap-8 text-base',
    'cornell-label': 'font-semibold mr-2',
    'cornell-value': 'flex-1 border-b border-black h-6 flex items-end',
    'cornell-main': 'min-h-[500px] border-b-3 border-black',
    'cornell-row': 'flex border-b-2 border-gray-400',
    'cornell-cue': 'w-1/4 border-r-3 border-black p-3 bg-gray-50 font-medium text-base',
    'cornell-note': 'w-3/4 p-3 bg-white text-base space-y-1 [&>ul]:space-y-0.5 [&>ul>li]:leading-tight',
    'cornell-summary': 'border-t-3 border-black p-4 bg-green-50',
    'cornell-summary-title': 'text-base font-bold text-center mb-3 pb-2 border-b-2 border-green-600',
    'cornell-summary-text': 'text-base text-gray-800 leading-relaxed space-y-2',
    // Cornell Notes custom shortcuts
    'cornell-cues': 'border-r border-$vp-c-divider pr-4',
    'cornell-notes': 'border-r border-$vp-c-divider pr-4',
    'cornell-note-title': 'font-medium',
    'cornell-section-title': 'text-sm font-bold text-center mb-3 pb-2 border-b-2 border-green-600',
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
