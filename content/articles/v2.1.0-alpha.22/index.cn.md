### 🎉 新特性

- **[工作流]** 为节点创建增加用于检查的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher

### 🚀 优化

- **[cli]** 为请求日志和审计日志增加 CLI 请求来源标记 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile

- **[权限控制]** 为权限管理 Skill 增加新的 API 适配 AI 模式 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y

- **[工作流：审批]**
  - 为创建审批节点增加类型验证 by @mytharcher

  - 为审批记录表的列增加索引，以优化列表和提交操作的性能 by @mytharcher

### 🐛 修复

- **[client]** 关系字段隐藏排序开关 ([#9220](https://github.com/nocobase/nocobase/pull/9220)) by @jiannx

- **[database]** 修复 decimal 字段设置验证规则后可能拒绝有效数字输入的问题 ([#9204](https://github.com/nocobase/nocobase/pull/9204)) by @2013xile

- **[AI 员工]** 修复 AI 员工选中表单的附件URL字段值丢失问题 ([#9216](https://github.com/nocobase/nocobase/pull/9216)) by @cgyrock

- **[用户]** 修复个人资料编辑中动态配置字段未加载最新用户数据的问题 ([#9205](https://github.com/nocobase/nocobase/pull/9205)) by @2013xile

- **[数据源管理]** 修复外部数据源排序字段的分组排序无法清空的问题 ([#9203](https://github.com/nocobase/nocobase/pull/9203)) by @2013xile

