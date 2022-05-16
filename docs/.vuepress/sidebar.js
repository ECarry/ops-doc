const sidebar = {
  '/devops': [
    {
      text: 'DevOps 流程',
      link: '/devops/index.md'
    },
    {
      text: '容器',
      collapsible: true,
      children: [
        '/devops/container/docker.md',
        '/devops/container/kubernetes.md',
        '/devops/container/interview.md',
      ]
    },
    {
      text: 'CI/CD',
      collapsible: true,
      children: [
        '/devops/cicd/gitlab.md',
        '/devops/cicd/jenkins.md'
      ]
    },
    {
      text: '自动化运维工具',
      collapsible: true,
      children: [
        '/devops/automate/ansible.md'
      ]
    },
    {
      text: '监控',
      collapsible: true,
      children: [
        '/devops/monitor/zabbix.md'
      ]
    }
  ]
}

module.exports = sidebar

