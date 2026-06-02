import { defineConfig } from 'vitepress'

const classesJa = [
  { text: 'AddonActivateAfterEvent', link: '/api/addon-activate-after-event' },
  { text: 'AddonDeactivateBeforeEvent', link: '/api/addon-deactivate-before-event' },
  { text: 'AddonEventRegistry', link: '/api/addon-event-registry' },
  { text: 'KairoAfterEvents', link: '/api/kairo-after-events' },
  { text: 'KairoApiRegistry', link: '/api/kairo-api-registry' },
  { text: 'KairoBeforeEvents', link: '/api/kairo-before-events' },
  { text: 'KairoContext', link: '/api/kairo-context' },
  { text: 'KairoCustomCommandRegistry', link: '/api/kairo-custom-command-registry' },
  { text: 'KairoRouter', link: '/api/kairo-router' },
  { text: 'KairoStartupBeforeEvent', link: '/api/kairo-startup-before-event' },
]

const interfacesJa = [
  { text: 'Disposable', link: '/api/disposable' },
  { text: 'KairoRegistry', link: '/api/kairo-registry' },
  { text: 'Subscribable', link: '/api/subscribable' },
]

const typesJa = [
  { text: 'AfterHookContext', link: '/api/after-hook-context' },
  { text: 'BeforeHookContext', link: '/api/before-hook-context' },
  { text: 'CancelledResult', link: '/api/cancelled-result' },
  { text: 'HookOptions', link: '/api/hook-options' },
  { text: 'HookRollbackContext', link: '/api/hook-rollback-context' },
]

const errorsJa = [
  { text: 'AfterHookExecutionError', link: '/api/after-hook-execution-error' },
  { text: 'ApiNotFoundError', link: '/api/api-not-found-error' },
  { text: 'BeforeHookExecutionError', link: '/api/before-hook-execution-error' },
  { text: 'HandlerExecutionError', link: '/api/handler-execution-error' },
  { text: 'ProtocolError', link: '/api/protocol-error' },
  { text: 'RequestTimeoutError', link: '/api/request-timeout-error' },
]

const apiSidebarJa = [
  { text: '@kairo-js/router', link: '/api/' },
  { text: 'クラス', items: classesJa },
  { text: 'インターフェース', items: interfacesJa },
  { text: '型', items: typesJa },
  { text: 'エラー', items: errorsJa },
]

const toEn = (items: { text: string; link: string }[]) =>
  items.map(item => ({ text: item.text, link: item.link.replace('/api/', '/en/api/') }))

const apiSidebarEn = [
  { text: '@kairo-js/router', link: '/en/api/' },
  { text: 'Classes', items: toEn(classesJa) },
  { text: 'Interfaces', items: toEn(interfacesJa) },
  { text: 'Types', items: toEn(typesJa) },
  { text: 'Errors', items: toEn(errorsJa) },
]

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
          { text: 'API', link: '/api/' },
        ],
        sidebar: {
          '/guide/': [
            { text: 'はじめに', items: [{ text: 'はじめに', link: '/guide/' }] },
          ],
          '/api/': apiSidebarJa,
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
          { text: 'API', link: '/en/api/' },
        ],
        sidebar: {
          '/en/guide/': [
            { text: 'Introduction', items: [{ text: 'Getting Started', link: '/en/guide/' }] },
          ],
          '/en/api/': apiSidebarEn,
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/kairo-js' }],
    footer: { message: 'Released under the MIT License.' },
  },
})
