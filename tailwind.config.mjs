/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ addVariant }) {
      addVariant('script-none', '@media (scripting: none)')
      addVariant('script-initial', '@media (scripting: initial-only)')
      addVariant('script-enabled', '@media (scripting: enabled)')
    }),
  ],
}
