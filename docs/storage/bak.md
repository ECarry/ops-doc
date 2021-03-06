# 备份容灾

## 什么是备份

在信息技术与数据管理领域，**备份**指将文件系统或数据库系统中的数据加以复制；一旦发生灾难或错误操作时，得以方便及时地恢复系统有效数据和正常运作

在一套备份系统中，通常包括：

- 备份服务器
  - 运行备份软件的载体，一般为 PC 服务器和小型机
- 备份软件
  - 备份系统的核心，备份软件控制生产数据拷贝到存储介质上，并对备份数据进行管理，如：Symantec 的 Backup Exec 和 NetBackup
- 存储设备
  - 备份数据存储的设备，一般为磁盘阵列、物理磁带库或者虚拟磁带库



## 备份策略

- 备份类型： 采用哪种方式进行备份，分为全备份、增量备份、差异备份

- 备份周期：备份作业的频率每天、每月等

- 备份策略选择：

  - 对于操作系统和应用软件，在每一次系统更新或者安装了新的软件后做一次全备

    份

  - 对于关键的应用数据，涉及每天大量的数据更新，但是总数据量不是很大，我们

    可以用户在使用少量数据的时候每天做一个全备份

  - 对于关键应用，且相对数据的总量每天只有少量的数据更新，我们可以在每月或

    每周做一个全备份，在此基础上可以在一系列短一点的间隔上做增量备份

### 备份类型

![image-20220627143454343](./bak.assets/image-20220627143454343.png)
