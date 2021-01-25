import path from 'path'
import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

const config: UserConfig = {
  alias: {
    '/~/': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    Vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    // https://github.com/antfu/vite-plugin-icons
    ViteIcons({
      scale: 1.1,
      defaultStyle: 'vertical-align: middle;',
    }),
    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  optimizeDeps: {
    include: ['mitt', 'image-js'],
  },
}

export default config
