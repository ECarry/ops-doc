const sidebar = {
  '/linux': [
    {
      text: 'Linux 学习面试',
      link: '/linux/index.md'
    },
    {
      text: 'Linux 基础',
      collapsible: true,
      children: [
        '/linux/base/base.md'
      ]
    },
    {
      text: 'shell',
      collapsible: true,
      children: [
        '/linux/shell/shell.md'
      ]
    },
    {
      text: '三剑客',
      collapsible: true,
      children: [
        '/linux/gas/grep.md',
        '/linux/gas/sed.md',
        '/linux/gas/awk.md'
      ]
    },
    {
      text: '面试',
      collapsible: true,
      children: [
        '/linux/interview/interview.md'
      ]
    }
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



