const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')

module.exports = {
  lang: 'zh-CN',
  title: '运维宝典',
  description: '无限进步',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    lastUpdatedText: '上次更新',
    docsRepo: 'https://github.com/ECarry/ops-doc',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
    editLinkText: '在 GitHub 上编辑此页',
    editLinkPattern: ':repo/edit/:branch/:path',
    navbar: require('./navbar'),
    sidebar: require('./sidebar')
  })
}
