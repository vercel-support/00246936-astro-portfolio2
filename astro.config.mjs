import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import markdoc from '@astrojs/markdoc'
import qwikdev from '@qwikdev/astro'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://earley.info',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }),
    markdoc(),
    icon(),
    qwikdev(),
  ],
})
