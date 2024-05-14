module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-sort-imports',
    'prettier-plugin-astro-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  attributeGroups: ['$CODE_GUIDE'],
}
