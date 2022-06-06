const sidebar = {
  'linux': [
    {
      text: 'Linux 基础',
      link: '/linux/base.md'
    },
    {
      text: 'shell',
      link: '/linux/shell.md'
    },
    {
      text: '面试',
      link: '/linux/interview.md'
    },
  ],
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
        '/devops/monitor/zabbix.md',
        '/devops/monitor/prometheus.md',
        '/devops/monitor/grafana.md'

      ]
    }
  ]
}

module.exports = sidebar



