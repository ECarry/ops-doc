const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  lang: 'zh-CN',
  title: '运维面试宝典',
  description: '无限进步',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
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
            link: '/middleware/ansible'
          },
          {
            text: 'Docker',
            link: '/middleware/docker'
          },

          {
            text: 'Jenkins',
            link: '/middleware/jenkins'
          },
          {
            text: 'Nginx',
            link: '/middleware/nginx'
          },
          {
            text: 'Zabbix',
            link: '/middleware/zabbix'
          }
        ],
      },
      {
        text: '数据库',
        children: [
          {
            text: 'Linux 基础',
            link: '/iinux/base'
          },
          {
            text: 'Shell',
            link: '/iinux/shell'
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
