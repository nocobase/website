### 🚀 优化

- **[工作流]** 支持使用更多字段筛选工作流 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

- **[邮件管理]** 支持弹窗内的发件默认值，支持收件人模糊搜索，问题修复 by @jiannx

### 🐛 修复

- **[database]** 修复导入xlsx功能缺失的创建人和最后更新人字段 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie

- **[client]**
  - 修复字段赋值组件赋值变量时未显示字段标题 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh

  - 关系字段阅读模式下 hover 时出现子表格和子表单 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe

  - 修复弹窗按钮中的 Markdown 区块联动规则不生效的问题 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh

  - 修复弹窗详情区块子表格翻页触发未保存提示的问题 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh

  - 修复字段样式联动规则设置不生效的问题 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh

- **[异步任务管理器]** 修复异步导入多次执行缺陷 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie

- **[本地化]** 修复词条为空导致的报错 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile

- **[操作：导出记录 Pro]** 修复异步导入多次执行缺陷 by @aaaaaajie

- **[工作流：审批]** 修复转签后其他人通过的审批无法继续的问题 by @mytharcher

- **[邮件管理]**
  - mailmessagelabels_mailmessages 存在重复主键 by @jiannx

  - 设置弹窗不显示 by @jiannx

  - 邮件模糊搜索后做唯一过滤 by @jiannx

  - 收件人模糊搜素支持关联字段 by @jiannx

  - mailmessagelabelsMailmessages 表中添加id字段 by @jiannx

