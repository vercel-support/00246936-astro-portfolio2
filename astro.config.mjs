import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import markdoc from '@astrojs/markdoc'
import qwikdev from '@qwikdev/astro'
import icon from 'astro-icon'
import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), markdoc(), db(), icon(), qwikdev()],
})
