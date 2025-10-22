汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/cn/blog/v1.8.31)

*发布时间：2025-10-17*

### 🐛 修复

- **[database]** 修复 `$in` 操作符的值为 `null` 时的报错问题 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[工作流：审批]**

  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher
  - 修复提交审批表单中部分变量未被解析的问题 by @mytharcher

### [v1.8.30](https://www.nocobase.com/cn/blog/v1.8.30)

*发布时间：2025-10-16*

### 🐛 修复

- **[client]** 修复标签页图标弹窗被遮挡的问题 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/cn/blog/v1.9.0-beta.13)

*发布时间：2025-10-22*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/cn/blog/v2.0.0-alpha.19)

*发布时间：2025-10-21*

### 🐛 修复

- **[client]**

  - 修复了在弹窗中切换标签页，再次打开二级弹窗并关闭所有弹窗后，页面 URL 未正确更新的问题。 ([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust
  - 修复编辑弹窗中子表格默认值失效的问题 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  - 修复筛选区块中日期字段清除时报错的问题 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
- **[多应用管理器（已废弃）]** 修复不能禁用旧的多应用管理 ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/cn/blog/v2.0.0-alpha.17)

*发布时间：2025-10-21*

### 🎉 新特性

- **[client]** 增加对表格行点击事件监听的支持，使用户可以在点击表格中的某一行时执行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
- **[工作流：审批]** 审批触发器中开放审批单据编号变量以供使用 by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复 antd 组件的翻译不生效的问题 ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
- **[数据源：主数据库]** 修复创建反向关系字段后，多节点未同步元数据的问题 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[plugin-demo-platform]** demo 支持自动关闭应用 by @jiannx
- **[多应用]**

  - 多应用数据迁移不触发 hooks by @jiannx
  - 多应用代理支持缓存 by @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/cn/blog/v2.0.0-alpha.16)

*发布时间：2025-10-20*

### 🎉 新特性

- **[plugin-form-drafts]** 表单草稿 by @chenos

### 🐛 修复

- **[flow-engine]** 引用区块中无法获取当前视图相关变量 ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust
- **[client]** 修复 usePlugin 缺失上下文时的错误 ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/cn/blog/v2.0.0-alpha.15)

*发布时间：2025-10-20*

### 🚀 优化

- **[client]** JS field model 支持关系字段 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust
- **[AI 员工]**

  - 重构了 OpenAI LLM Provider，将其拆分为两个独立的 Provider，以分别支持 OpenAI 的 Completions 和 Responses API。 ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock
  - 添加新的 LLM 提供商 Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

### 🐛 修复

- **[工作流：审批]**
  - 修复加签后待办数字未更新的问题 by @mytharcher
  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/cn/blog/v2.0.0-alpha.14)

*发布时间：2025-10-17*

### 🚀 优化

- **[AI 员工]** AI 写代码功能优化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock
- **[数据源：主数据库]** 重构字段验证规则错误提示的本地化逻辑, 在错误处理插件中处理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

### 🐛 修复

- **[database]**

  - 使用 `runSQL` 方法执行 SQL 前先设置 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile
  - 修复 `$in` 操作符的值为 `null` 时的报错问题 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[client]** 修复标签页图标弹窗被遮挡的问题 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe
- **[工作流：审批]** 修复提交审批表单中部分变量未被解析的问题 by @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/cn/blog/v2.0.0-alpha.13)

*发布时间：2025-10-16*

### 🎉 新特性

- **[区块：引用]** 新增实验性质的"引用区块"插件，支持以引用和复制的方式复用已有的区块。 ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

### 🐛 修复

- **[数据可视化]** 修复因事件注册超时导致图表无法显示的问题 ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/cn/blog/v2.0.0-alpha.10)

*发布时间：2025-10-15*

### 🚀 优化

- **[数据可视化]** 更新插件数据 VI 2.0 版，修复了一些问题并优化了用户界面。 ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

### 🐛 修复

- **[工作流：审批]** 修复由于跳过 hooks 没有生成 Snowflake ID 的问题 by @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/cn/blog/v2.0.0-alpha.9)

*发布时间：2025-10-15*

### 🎉 新特性

- **[client]** 添加对自定义变量的支持 ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

### 🚀 优化

- **[AI 员工]** 在移动端布局中为聊天框添加最小化按钮 ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

### 🐛 修复

- **[server]** 保留复制引用字段时的 field.targetKey 值 ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
- **[AI 员工]** 修复了移动端布局界面中 AI 员工对话框的布局问题 ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock
