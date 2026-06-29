### 🚀 优化

- **[cli]** 支持 OAuth 设备授权模式 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

- **[client-v2]** 支持配置 js block 是否显示区块卡片。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust

- **[flow-engine]** 让 RunJS 通过资源 API 更新数据后关闭弹窗时，相关数据区块自动刷新 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust

- **[表单草稿]** 迁移表单草稿插件至 client v2。 ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 修复

- **[client-v2]**
  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh

  - 修复界面配置模式下刷新页面时短暂闪现暂无页面提示的问题。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh

  - 修复 v2 表单提交成功后跳转链接无法引用已保存响应结果记录的问题。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh

  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh

  - 修复 v2 表格行操作按钮导致行高变化的问题。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx

  - 修复表格区块配置的拖拽排序字段被删除后运行报错的问题，并支持清空拖拽排序字段配置。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx

- **[flow-engine]**
  - 修复移动端半窗内容过长时无法滚动的问题 ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe

  - 修复 runjs 中 ctx.openView 部分参数不生效的问题。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust

- **[cli]** cli 支持 pnpm 和 yarn 方式的更新 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos

- **[client]** 修改了一些文案错误。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn

- **[前端流引擎]** 修复 flow surfaces api 无法正确创建移动端页面的问题。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust

- **[AI 员工]**
  - 修复 AI 数据源卡片列表在不同视口宽度下不能自适应的问题。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock

  - 修复异常工具调用记录在后续对话中重复发送，导致 AI 员工回复失败的问题。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock

- **[备份管理器]** 修复 v2 备份管理器设置页标签异常加粗、与其他设置页样式不一致的问题。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh

- **[区块：iframe]** 修复普通用户查看 v2 iframe HTML 模式区块时报 403 的问题。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx

- **[数据源：外部 NocoBase]** 修复 NocoBase 外部数据源在连接配置包含运行时对象时加载失败的问题 by @2013xile

- **[AI: 知识库]** 修复版本控制和知识库文档列表在内容较长或视口高度不足时的布局溢出问题。 by @cgyrock

- **[迁移管理]** 修复数据库同步表的迁移规则处理问题 by @2013xile

- **[历史记录]**
  - 修复部分数据表的历史记录可能无法保存变更的问题 by @2013xile

  - 修复启用记录历史后外部 NocoBase 数据源加载失败的问题 by @2013xile

- **[应用监管器]** 修复 Client V2 应用监管 Applications 标签页注册错误 by @2013xile

- **[企业微信]** 修复在 Client V2 中启用企业微信插件后切换路由菜单时页面短暂白屏的问题 by @2013xile

