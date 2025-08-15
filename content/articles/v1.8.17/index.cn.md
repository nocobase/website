### 🎉 新特性

- **[工作流：审批]** 支持在同一个工作流中使用统一的待办任务标题 by @mytharcher

### 🚀 优化

- **[用户认证]** 使用 token 参数登录成功后，移除 URL token 参数 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile

- **[模板打印]** 支持多对多数组字段 by @jiannx

### 🐛 修复

- **[移动端]** 修复移动端审批弹窗中的表单提交的数据不正确的问题 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe

- **[工作流]** 修复待办中心的页面标题翻译 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher

- **[日历]** 修复了日历事件悬停提示框未显示事件标题字段内容，显示为 “[object Object]” 的问题 ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh

- **[通知：站内信]** 修复多语言翻译 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher

- **[文件管理器]** 移除文件上传大小的上限提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher

- **[文件存储：S3 (Pro)]**
  - 弃用可能造成问题的 `attachmentField` 参数 by @mytharcher

  - 修复 IAM 授权方式无法上传文件的问题 by @mytharcher

