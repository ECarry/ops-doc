const navbar = [
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
    link: '/devops'
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
]

module.exports = navbar
