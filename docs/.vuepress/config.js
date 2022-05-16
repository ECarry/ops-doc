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
    backToTopPlugin(),
    docsearchPlugin({
      // 配置项
    }),
    gitPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    lastUpdatedText: '上次更新',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    navbar: [
      // NavbarItem
      {
        text: 'Home',
        link: '/',
      },
      // NavbarGroup
      {
        text: 'Linux',
        children: [
          {
            text: 'Linux 基础',
            link: '/linux/base'
          },
          {
            text: 'Shell',
            link: '/linux/shell'
          }
        ],
      },
      {
        text: 'DevOps',
        children: [
          {
            text: 'Ansible',
            link: '/devops/ansible'
          },
          {
            text: 'Jenkins',
            link: '/devops/jenkins'
          },
          {
            text: 'Nginx',
            link: '/devops/nginx'
          },
          {
            text: '容器',
            link: '/devops/container'
          },
          {
            text: 'Zabbix',
            link: '/devops/zabbix'
          }
        ],
      },
      {
        text: '数据库',
        children: [
          {
            text: 'MySQL',
            link: '/DB/mysql'
          },
          {
            text: 'Redis',
            link: '/db/redis'
          }
        ],
      },
      {
        text: '网络基础',
        link: '/network',
      },
      // 字符串 - 页面文件路径
      {
        text: 'GitHub',
        link: 'https://github.com/ECarry/ops-doc',
      },
    ],
  })
}
