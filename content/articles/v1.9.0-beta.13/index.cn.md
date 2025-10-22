### 🚀 优化

- **[client]** 在前端使用 `mime` 包检测文件的 MIME 类型，以获得更准确的类型数据 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[数据源：主数据库]** 重构字段验证规则错误提示的本地化逻辑, 在错误处理插件中处理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

- **[工作流]** 删除节点时增加“保留分支”选项 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[工作流：审批]** 重构分支配置以适配内核变更 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复筛选区块中日期字段清除时报错的问题 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh

  - 修复编辑弹窗中子表格默认值失效的问题 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh

  - 修复预览图片同时旋转和缩放显示不正常的问题 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

  - 修复标签页图标弹窗被遮挡的问题 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

- **[database]** 修复 `$in` 操作符的值为 `null` 时的报错问题 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[数据源：主数据库]** 修复创建反向关系字段后，多节点未同步元数据的问题 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher

- **[工作流：审批]**
  - 修复迁移脚本在未安装应用时由于表不存在的报错问题 by @mytharcher

  - 修复由于跳过 hooks 没有生成 Snowflake ID 的问题 by @mytharcher

- **[认证：LDAP]** 修复含非 ASCII（UTF-8）DN 的 AD 登录失败问题 by @2013xile

