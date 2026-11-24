### 🐛 修复

- **[client-v2]**
  - 缩小了手机窄屏下详情区块和网格卡片中横向只读字段的间距，多行文本也更紧凑。 ([#11673](https://github.com/nocobase/nocobase/pull/11673))

  - 修复现代页面先以浏览模式打开，再开启 UI Editor 添加区块后，刷新时区块消失的问题。 ([#11672](https://github.com/nocobase/nocobase/pull/11672))

- **[文件管理器]** 修复刷新外部数据源或读取带有其他关联的记录时可能报错的问题。 ([#11698](https://github.com/nocobase/nocobase/pull/11698))

- **[自定义变量]** 修复配置徽章聚合变量时，多行文本筛选条件无法输入内容的问题。 ([#11688](https://github.com/nocobase/nocobase/pull/11688))

- **[AI 员工]** 修复登录页和双因素验证页提前请求 AI 员工列表及未读数的问题。 ([#11691](https://github.com/nocobase/nocobase/pull/11691))

- **[通知管理]** 工作流提供无效的用户接收人配置时，通知会停止发送，并在发送日志中提示如何更正。 ([#11680](https://github.com/nocobase/nocobase/pull/11680))

- **[表单草稿]** 浏览器读取或保存本地草稿失败时，仍可正常打开、填写和提交表单。 ([#11671](https://github.com/nocobase/nocobase/pull/11671))

