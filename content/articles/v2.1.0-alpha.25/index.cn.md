### 🎉 新特性

- **[工作流：审批]** 支持删除审批草稿 by @mytharcher

### 🚀 优化

- **[undefined]** 更新 AI 文档的 NocoBase 版本要求为 >= 2.1.0-beta.20，并推荐升级到 beta 最新版本。 ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn

- **[AI 员工]** 更新 AI 员工快捷任务配置使用和工作流 AI 员工节点配置相同的技能设置组件 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock

### 🐛 修复

- **[client]**
  - 修复子表格里的记录被移除后再次添加记录时默认值不生效的问题。 ([#9192](https://github.com/nocobase/nocobase/pull/9192)) by @gchust

  - 关联字段的选择弹框中过滤非必要的可选区块 ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx

- **[操作：导入记录]** 修复导入 xlsx 文件时失败且提示表头不匹配的错误的问题 ([#9253](https://github.com/nocobase/nocobase/pull/9253)) by @mytharcher

- **[授权设置]** 更新license保存成功消息 ([#9251](https://github.com/nocobase/nocobase/pull/9251)) by @jiannx

- **[AI 员工]** 修复 AI 员工系统提示词中的变量不生效问题 ([#9256](https://github.com/nocobase/nocobase/pull/9256)) by @cgyrock

- **[IdP: OAuth]** 修复 OAuth CLI 登录失败的问题，并限制动态注册只能使用本地回调地址 ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile

- **[AI: 知识库]** 修复删除知识库文档后关联向量数据没有同步删除的问题 by @cgyrock

- **[操作：导入记录 Pro]** 修复导入 xlsx 文件时失败且提示表头不匹配的错误的问题 by @mytharcher

