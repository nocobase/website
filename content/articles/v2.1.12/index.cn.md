### 🚀 优化

- **[flow-engine]** 让 RunJS 通过资源 API 更新数据后关闭弹窗时，相关数据区块自动刷新 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
- **[client-v2]** 支持配置 JS block 是否显示区块卡片。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust

### 🐛 修复

- **[client-v2]**

  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  - 修复 v2 表格行操作按钮导致行高变化的问题。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  - 修复 v2 表单提交成功后跳转链接无法引用已保存响应结果记录的问题。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  - 修复表格区块配置的拖拽排序字段被删除后运行报错的问题，并支持清空拖拽排序字段配置。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
- **[client]** 修改了一些文案错误。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
- **[flow-engine]** 修复 runjs 中 ctx.openView 部分参数不生效的问题。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
- **[cli]** cli 支持 pnpm 和 yarn 方式的更新 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
- **[AI 员工]**

  - 修复 AI 数据源卡片列表在不同视口宽度下不能自适应的问题。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  - 修复异常工具调用记录在后续对话中重复发送，导致 AI 员工回复失败的问题。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
- **[区块：iframe]** 修复普通用户查看 v2 iframe HTML 模式区块时报 403 的问题。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
- **[AI: 知识库]** 修复版本控制和知识库文档列表在内容较长或视口高度不足时的布局溢出问题。 by @cgyrock
- **[迁移管理]** 修复数据库同步表的迁移规则处理问题 by @2013xile
- **[历史记录]** 修复部分数据表的历史记录可能无法保存变更的问题 by @2013xile
