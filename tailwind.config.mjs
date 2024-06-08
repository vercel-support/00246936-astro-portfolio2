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
        display: [
          '"Righteous"',
          '"Lilita One"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      spacing: {},
      colors: {
        darkBlue: {
          DEFAULT: '#060047',
          50: '#D5D1FF',
          100: '#B0A8FF',
          200: '#6052FF',
          300: '#1400F5',
          400: '#0D009E',
          500: '#060047',
          600: '#050038',
          700: '#030029',
          800: '#03001F',
          900: '#01000F',
          950: '#000005',
        },
        darkTeal: {
          50: '#DFF1F6',
          100: '#BBE2EC',
          200: '#78C5D9',
          300: '#38AAC7',
          400: '#257083',
          500: '#123740',
          600: '#0F2C34',
          700: '#0B2228',
          800: '#071418',
          900: '#030A0C',
          950: '#020708',
        },
        turquoise: {
          50: '#E0F8FF',
          100: '#C7F2FF',
          200: '#8AE4FF',
          300: '#52D7FF',
          400: '#14C8FF',
          500: '#00A7D9',
          600: '#0085AD',
          700: '#006685',
          800: '#004257',
          900: '#00232E',
          950: '#001014',
        },
        lightTurquoise: {
          50: '#FAFFFF',
          100: '#FAFFFF',
          200: '#F5FFFF',
          300: '#F0FEFF',
          400: '#EBFEFF',
          500: '#E3FEFF',
          600: '#85FBFF',
          700: '#24F8FF',
          800: '#00BBC2',
          900: '#005E61',
          950: '#002C2E',
        },
        cement: {
          50: '#FDFDFC',
          100: '#FBFBF8',
          200: '#FAFAF5',
          300: '#F6F6EF',
          400: '#F4F4EB',
          500: '#F1F1E6',
          600: '#CFCFAA',
          700: '#ADAD6C',
          800: '#797944',
          900: '#3B3B21',
          950: '#1D1D10',
        },
        brickRed: {
          300: '#DD6B3D',
          500: '#D75228',
          700: '#A03D0A',
        },
        slateBlue: {
          300: '#61DAFB',
          400: '#06B6D4',
          500: '#2A3D93',
        },
        mediumGreen: {
          500: '#5FA04E',
        },
      },
      outlineOffset: {
        n1: '-1px',
        n2: '-2px',
        n3: '-4px',
        n4: '-8px',
        n5: '-16px',
        n6: '-32px',
      },
      boxShadow: {
        'strong-inner': 'inset 0 0 3px 1px rgba(30, 41, 59, 0.5)',
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
