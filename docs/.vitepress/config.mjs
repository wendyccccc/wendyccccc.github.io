import { defineConfig } from 'vitepress'
import nav from './theme/configs/nav';
import socialLinks from './theme/configs/socialLinks';
import search from './theme/configs/search';
import sidebar from './theme/configs/sidebar';

// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
import path from 'node:path';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: { // 設定別名
        '@': path.resolve(__dirname, '../'), // docs 當根目錄
        '@vitepress': path.resolve(__dirname), // .vitepress 目錄
        '@components': path.resolve(__dirname, '../', 'components'),
        '@data': path.resolve(__dirname, '../', 'data'),
        '@hooks': path.resolve(__dirname, '../', 'hooks'),
        '@pages': path.resolve(__dirname, '../', 'pages')
      }
    }
  },
  // vite: {
  // plugins: [
  //   AutoImport({
  //     include: [
  //       /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
  //       /\.vue$/,
  //       /\.vue\?vue/, // .vue
  //       /\.md$/ // .md
  //     ],
  //     // global imports to register
  //     imports: [ // presets
  //       'vue',
  //       { // custom
  //         '@vueuse/core': [
  //           // named imports
  //           'useMouse', // import { useMouse } from '@vueuse/core',
  //           // alias
  //           ['useFetch', 'useMyFetch']
  //         ],
  //         'axios': [
  //           // default imports
  //           ['default', 'axios']
  //         ],
  //         'vue': ['PropType', 'defineProps', 'InjectionKey', 'Ref']
  //       }
  //     ],
  //     dirs: [],
  //     dts: './types/auto-imports.d.ts', // typescript 宣告檔案位置
  //     vueTemplate: false,
  //     eslintrc: {
  //       enabled: false, // Default `false`
  //       filepath: './.eslintrc-auto-import.json',
  //       globalsPropValue: true
  //     }
  //   }),
  // Components({
  //   dirs: ['./components'], // 指定components位置 預設是'src/components'
  //   dts: './types/components.d.ts', // .d.ts生成位置
  //   extensions: ['vue'],
  //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  //   directoryAsNamespace: true, // 允許子目錄作為命名空間
  //   resolvers: [] // 解析規則
  // })
  // ]
  // },
  base: '/',
  title: "Wendyyy",
  description: "Wendy's work and life records",
  rewrites: {
    'pages/(.*)': '(.*)'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
    search,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Wendy'
    },
    outline: {
      level: [2, 4],
      label: '目錄：'
    },

    lastUpdated: {
      text: 'Last Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    notFound: { // 404
      title: 'Page Not Found',
      quote: '請檢查網址或目前頁面不開放觀看，使用下方按鈕回到首頁。',
      linkText: '回到首頁'
    }
  }
})
