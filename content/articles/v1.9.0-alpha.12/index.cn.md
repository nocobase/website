### 🎉 新特性

- **[client]** 支持字段验证规则 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie

- **[工作流：审批]**
  - 为通知配置增加内联模板类型 by @mytharcher

  - 支持在同一个工作流中使用统一的待办任务标题 by @mytharcher

### 🚀 优化

- **[database]** 优化 ACL Meta 查询性能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie

- **[client]** 支持 Select 组件在阅读态时可以展示字符串标识的图标 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher

- **[移动端]** 优化移动端弹窗组件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

- **[工作流]** 将节点选择菜单更新为两列布局，以提升信息密度使用户能同时查看更多选项 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher

- **[授权设置]** 授权设置中，每次拷贝最新InstanceID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

- **[通知：站内信]** 移除通过 `console.log` 输出的 SQL 日志 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

- **[用户认证]** 使用 token 参数登录成功后，移除 URL token 参数 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile

- **[模板打印]** 支持多对多数组字段 by @jiannx

### 🐛 修复

- **[database]** 修复了在读取 Postgres 外部数据表时，会错误包含其他 schema 视图的问题 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie

- **[client]**
  - 修复 联动规则为空判断时,数字0 也视为空的问题 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh

  - 修复“列设置”按钮会加载弹窗中的表格列的问题 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612

  - 修复链接按钮中文字换行的问题 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher

- **[server]** 部分请求没有 `ctx.action`, 导致审计日志中间件报错 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile

- **[区块：模板]** 修复了邮件区块在继承模版中不可见的问题 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust

- **[工作流：邮件发送节点]** 修复邮件节点可能存在恢复执行不正常的问题 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher

- **[移动端]**
  - 修复移动端日期字段显示为错误格式的问题 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh

  - 修复移动端审批弹窗中的表单提交的数据不正确的问题 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe

- **[工作流]**
  - 修复编辑工作流分类时报错和表单数据丢失的问题 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher

  - 修复待办中心的页面标题翻译 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher

- **[Office 文件预览]** 修复上传文件至附件 URL 字段报错的问题 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher

- **[通知：站内信]** 修复多语言翻译 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher

- **[数据表字段：公式]** 修复公式输入由于变量类型导致无法通过验证的问题 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher

- **[文件管理器]** 移除文件上传大小的上限提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher

- **[日历]** 修复了日历事件悬停提示框未显示事件标题字段内容，显示为 “[object Object]” 的问题 ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh

- **[操作：导入记录 Pro]** 导入识别重复记录时，禁止设置关系字段 by @aaaaaajie

- **[工作流：自定义操作事件]** 在对多条数据的触发成功后清空选中行 by @mytharcher

- **[模板打印]** 多行数据中单选字段打印 by @jiannx

- **[文件存储：S3 (Pro)]**
  - 弃用可能造成问题的 `attachmentField` 参数 by @mytharcher

  - 修复 IAM 授权方式无法上传文件的问题 by @mytharcher

- **[工作流：审批]**
  - 修复加载审批记录中外部数据源数据出现 404 的问题 by @mytharcher

  - 修复加签时加载用户列表为空的问题 by @mytharcher

- **[备份管理器]** 备份大量文件时，任务状态可能提前显示为“已成功”，但实际仍在进行中 by @gchust

- **[迁移管理]** 生成迁移文件的时候跳过最新版本 pg_dump 生成的 `\restrict` 和 `\unrestrict` 命令，解决还原报错的问题 by @2013xile

