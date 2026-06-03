import { defineConfig } from 'vitepress'

// ---- @kairo-js/router ----
const routerClassItems = [
  { text: 'AddonActivateAfterEvent', link: 'addon-activate-after-event' },
  { text: 'AddonDeactivateBeforeEvent', link: 'addon-deactivate-before-event' },
  { text: 'KairoAfterEvents', link: 'kairo-after-events' },
  { text: 'KairoBeforeEvents', link: 'kairo-before-events' },
  { text: 'KairoContext', link: 'kairo-context' },
  { text: 'KairoCustomCommandRegistry', link: 'kairo-custom-command-registry' },
  { text: 'KairoRouter', link: 'kairo-router' },
  { text: 'KairoStartupBeforeEvent', link: 'kairo-startup-before-event' },
]
const routerInterfaceItems = [
  { text: 'AddonEventRegistration', link: 'addon-event-registry' },
  { text: 'AfterHookContext', link: 'after-hook-context' },
  { text: 'ApiHandlerContext', link: 'api-handler-context' },
  { text: 'ApiRegistration', link: 'kairo-api-registry' },
  { text: 'BeforeHookContext', link: 'before-hook-context' },
  { text: 'CanceledResult', link: 'canceled-result' },
  { text: 'Disposable', link: 'disposable' },
  { text: 'HookOptions', link: 'hook-options' },
  { text: 'HookRollbackContext', link: 'hook-rollback-context' },
  { text: 'KairoRegistry', link: 'kairo-registry' },
  { text: 'Subscribable', link: 'subscribable' },
]
const routerTypeItems = [
  { text: 'DeepReadonly', link: 'deep-readonly' },
  { text: 'ProtocolStage', link: 'protocol-stage' },
]
const routerErrorItems = [
  { text: 'AfterHookExecutionError', link: 'after-hook-execution-error' },
  { text: 'ApiNotFoundError', link: 'api-not-found-error' },
  { text: 'BeforeHookExecutionError', link: 'before-hook-execution-error' },
  { text: 'HandlerExecutionError', link: 'handler-execution-error' },
  { text: 'ProtocolError', link: 'protocol-error' },
  { text: 'RequestTimeoutError', link: 'request-timeout-error' },
]

// ---- @kairo-js/properties ----
const propsEnumItems = [
  { text: 'MinecraftModule', link: 'minecraft-module' },
  { text: 'SupportedTag', link: 'supported-tag' },
]
const propsInterfaceItems = [
  { text: 'AddonHeader', link: 'addon-header' },
  { text: 'AddonMetadata', link: 'addon-metadata' },
  { text: 'AddonProperties', link: 'addon-properties' },
  { text: 'EngineVersion', link: 'engine-version' },
  { text: 'MinecraftDependency', link: 'minecraft-dependency' },
  { text: 'SemVer', link: 'semver' },
]
const propsTypeItems = [
  { text: 'AddonDependencies', link: 'addon-dependencies' },
  { text: 'MinecraftModuleType', link: 'minecraft-module-type' },
  { text: 'SupportedTagType', link: 'supported-tag-type' },
]

// ---- @kairo-js/utils ----
const utilsClassItems = [
  { text: 'SeedRandom', link: 'seed-random' },
  { text: 'SemVerUtils', link: 'sem-ver-utils' },
]
const utilsInterfaceItems = [
  { text: 'Random', link: 'random' },
  { text: 'ValidateFunction', link: 'validate-function' },
]
const utilsFunctionItems = [
  { text: 'compile', link: 'compile' },
  { text: 'safeJsonParse', link: 'safe-json-parse' },
  { text: 'toError', link: 'to-error' },
  { text: 'validateTimestamp', link: 'validate-timestamp' },
]

function prefixed(items: { text: string; link: string }[], base: string) {
  return items.map(({ text, link }) => ({ text, link: `${base}${link}` }))
}

function makeSidebar(
  locale: string,
  labels: {
    guide: string; guideIndex: string
    apiRef: string
    classes: string; interfaces: string; types: string
    errors: string; enumerations: string; functions: string
  },
) {
  const p = (sub: string) => locale ? `/${locale}/${sub}/` : `/${sub}/`
  const routerBase = p('api')
  const propsBase  = p('api/properties')
  const utilsBase  = p('api/utils')
  const guideLink  = p('guide')

  return [
    {
      text: labels.guide,
      items: [{ text: labels.guideIndex, link: guideLink }],
    },
    { text: labels.apiRef, link: routerBase },
    {
      text: '@kairo-js/router',
      items: [
        { text: '@kairo-js/router', link: `${routerBase}router` },
        { text: labels.classes,      collapsed: false, items: prefixed(routerClassItems,     routerBase) },
        { text: labels.interfaces,   collapsed: false, items: prefixed(routerInterfaceItems, routerBase) },
        { text: labels.types,        collapsed: false, items: prefixed(routerTypeItems,      routerBase) },
        { text: labels.errors,       collapsed: false, items: prefixed(routerErrorItems,     routerBase) },
      ],
    },
    {
      text: '@kairo-js/properties',
      items: [
        { text: '@kairo-js/properties', link: propsBase },
        { text: labels.enumerations, collapsed: false, items: prefixed(propsEnumItems,      propsBase) },
        { text: labels.interfaces,   collapsed: false, items: prefixed(propsInterfaceItems, propsBase) },
        { text: labels.types,        collapsed: false, items: prefixed(propsTypeItems,      propsBase) },
      ],
    },
    {
      text: '@kairo-js/utils',
      items: [
        { text: '@kairo-js/utils', link: utilsBase },
        { text: labels.classes,    collapsed: false, items: prefixed(utilsClassItems,     utilsBase) },
        { text: labels.interfaces, collapsed: false, items: prefixed(utilsInterfaceItems, utilsBase) },
        { text: labels.functions,  collapsed: false, items: prefixed(utilsFunctionItems,  utilsBase) },
      ],
    },
  ]
}

export default defineConfig({
  base: '/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Kairo',
      description: 'Inter-addon communication framework for Minecraft Bedrock Edition',
      themeConfig: {
        sidebar: makeSidebar('', {
          guide: 'Guide', guideIndex: 'Getting Started',
          apiRef: 'API Reference',
          classes: 'Classes', interfaces: 'Interfaces',
          types: 'Types', errors: 'Errors',
          enumerations: 'Enumerations', functions: 'Functions',
        }),
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition 向けアドオン間通信フレームワーク',
      themeConfig: {
        sidebar: makeSidebar('ja', {
          guide: 'ガイド', guideIndex: 'はじめに',
          apiRef: 'API リファレンス',
          classes: 'クラス', interfaces: 'インターフェース',
          types: '型', errors: 'エラー',
          enumerations: '列挙型', functions: '関数',
        }),
        docFooter: { prev: '前のページ', next: '次のページ' },
        outline: { label: 'このページの目次' },
        langMenuLabel: '言語', returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー', darkModeSwitchLabel: 'テーマ',
      },
    },
    zh: {
      label: '简体中文', lang: 'zh-CN', link: '/zh/',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition 的跨附加包通信框架',
      themeConfig: {
        sidebar: makeSidebar('zh', {
          guide: '指南', guideIndex: '入门',
          apiRef: 'API 参考',
          classes: '类', interfaces: '接口',
          types: '类型', errors: '错误',
          enumerations: '枚举', functions: '函数',
        }),
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '本页目录' },
        langMenuLabel: '语言', returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单', darkModeSwitchLabel: '主题',
      },
    },
    ko: {
      label: '한국어', lang: 'ko', link: '/ko/',
      title: 'Kairo',
      description: 'Minecraft Bedrock Edition을 위한 애드온 간 통신 프레임워크',
      themeConfig: {
        sidebar: makeSidebar('ko', {
          guide: '가이드', guideIndex: '시작하기',
          apiRef: 'API 레퍼런스',
          classes: '클래스', interfaces: '인터페이스',
          types: '타입', errors: '오류',
          enumerations: '열거형', functions: '함수',
        }),
        docFooter: { prev: '이전 페이지', next: '다음 페이지' },
        outline: { label: '이 페이지의 목차' },
        langMenuLabel: '언어', returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴', darkModeSwitchLabel: '테마',
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/kairo-js' }],
    footer: { message: 'Released under the MIT License.' },
  },
})
