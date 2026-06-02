import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/kairo-docs/',

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition 向けアドオン間通信フレームワーク',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/guide/' },
          { text: 'API', link: '/api/kairo-router' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'はじめに',
              items: [
                { text: '概要', link: '/guide/' },
              ],
            },
          ],
          '/api/': [
            {
              text: 'API リファレンス',
              items: [
                { text: 'kairo-router', link: '/api/kairo-router' },
              ],
            },
          ],
        },
        docFooter: { prev: '前のページ', next: '次のページ' },
        outline: { label: 'このページの目次' },
        langMenuLabel: '言語',
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'テーマ',
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Kairo',
      description: 'Inter-addon communication framework for Minecraft Bedrock Edition',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'API', link: '/en/api/kairo-router' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Overview', link: '/en/guide/' },
              ],
            },
          ],
          '/en/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'kairo-router', link: '/en/api/kairo-router' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kairo-js' },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
})
