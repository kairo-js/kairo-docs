import { defineConfig } from 'vitepress'

// --- item lists (text + relative link suffix) ---

const classItems = [
  { text: 'AddonActivateAfterEvent', link: 'addon-activate-after-event' },
  { text: 'AddonDeactivateBeforeEvent', link: 'addon-deactivate-before-event' },
  { text: 'AddonEventRegistry', link: 'addon-event-registry' },
  { text: 'KairoAfterEvents', link: 'kairo-after-events' },
  { text: 'KairoApiRegistry', link: 'kairo-api-registry' },
  { text: 'KairoBeforeEvents', link: 'kairo-before-events' },
  { text: 'KairoContext', link: 'kairo-context' },
  { text: 'KairoCustomCommandRegistry', link: 'kairo-custom-command-registry' },
  { text: 'KairoRouter', link: 'kairo-router' },
  { text: 'KairoStartupBeforeEvent', link: 'kairo-startup-before-event' },
]

const interfaceItems = [
  { text: 'Disposable', link: 'disposable' },
  { text: 'KairoRegistry', link: 'kairo-registry' },
  { text: 'Subscribable', link: 'subscribable' },
]

const typeItems = [
  { text: 'AfterHookContext', link: 'after-hook-context' },
  { text: 'BeforeHookContext', link: 'before-hook-context' },
  { text: 'CancelledResult', link: 'cancelled-result' },
  { text: 'HookOptions', link: 'hook-options' },
  { text: 'HookRollbackContext', link: 'hook-rollback-context' },
]

const errorItems = [
  { text: 'AfterHookExecutionError', link: 'after-hook-execution-error' },
  { text: 'ApiNotFoundError', link: 'api-not-found-error' },
  { text: 'BeforeHookExecutionError', link: 'before-hook-execution-error' },
  { text: 'HandlerExecutionError', link: 'handler-execution-error' },
  { text: 'ProtocolError', link: 'protocol-error' },
  { text: 'RequestTimeoutError', link: 'request-timeout-error' },
]

// prefix a list of { text, link } with a locale path like '/api/' or '/en/api/'
function prefixed(items: { text: string; link: string }[], base: string) {
  return items.map(({ text, link }) => ({ text, link: `${base}${link}` }))
}

function makeSidebar(
  locale: string,
  labels: {
    guide: string
    guideIndex: string
    apiRef: string
    classes: string
    interfaces: string
    types: string
    errors: string
  },
) {
  const base = locale ? `/${locale}/api/` : '/api/'
  const guideLink = locale ? `/${locale}/guide/` : '/guide/'
  const moduleLink = locale ? `/${locale}/api/` : '/api/'

  return [
    {
      text: labels.guide,
      items: [{ text: labels.guideIndex, link: guideLink }],
    },
    {
      text: labels.apiRef,
      items: [
        { text: '@kairo-js/router', link: moduleLink },
        { text: labels.classes, collapsed: false, items: prefixed(classItems, base) },
        { text: labels.interfaces, collapsed: false, items: prefixed(interfaceItems, base) },
        { text: labels.types, collapsed: false, items: prefixed(typeItems, base) },
        { text: labels.errors, collapsed: false, items: prefixed(errorItems, base) },
      ],
    },
  ]
}

export default defineConfig({
  base: '/',

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition 向けアドオン間通信フレームワーク',
      themeConfig: {
        sidebar: makeSidebar('', {
          guide: 'ガイド',
          guideIndex: 'はじめに',
          apiRef: 'API リファレンス',
          classes: 'クラス',
          interfaces: 'インターフェース',
          types: '型',
          errors: 'エラー',
        }),
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
        sidebar: makeSidebar('en', {
          guide: 'Guide',
          guideIndex: 'Getting Started',
          apiRef: 'API Reference',
          classes: 'Classes',
          interfaces: 'Interfaces',
          types: 'Types',
          errors: 'Errors',
        }),
      },
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition을 위한 애드온 간 통신 프레임워크',
      themeConfig: {
        sidebar: makeSidebar('ko', {
          guide: '가이드',
          guideIndex: '시작하기',
          apiRef: 'API 레퍼런스',
          classes: '클래스',
          interfaces: '인터페이스',
          types: '타입',
          errors: '오류',
        }),
        docFooter: { prev: '이전 페이지', next: '다음 페이지' },
        outline: { label: '이 페이지의 목차' },
        langMenuLabel: '언어',
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
        darkModeSwitchLabel: '테마',
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/kairo-js' }],
    footer: { message: 'Released under the MIT License.' },
  },
})
