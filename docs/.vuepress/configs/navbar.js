const navbar = [
  // NavbarItem
  // NavbarGroup
  {
    text: 'Linux',
    link: '/linux'
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
  {
    text: '正则表达式',
    link: '/reg',
  },
  // 字符串 - 页面文件路径
  {
    text: 'GitHub',
    link: 'https://github.com/ECarry/ops-doc',
  },
]

module.exports = navbar
