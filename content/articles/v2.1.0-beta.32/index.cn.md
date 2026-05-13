### 🎉 新特性

- **[undefined]** 新增 AI 员工：本地化工程师 Lina, 辅助完成本地化翻译 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
参考文档：[本地化管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：本地化工程师](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻译本地化词条](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
- **[文件存储：S3 (Pro)]** 支持在 v2 文件管理器中通过 S3 Pro 存储上传文件。 by @Molunerfinn

### 🚀 优化

- **[build]** 补充了 `deleteServerFiles` 的回归测试，确保在 Windows 和 POSIX 路径场景下不会误删 `client` 和 `client-v2` 构建产物。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn

- **[client]** 一对多关系表格区块的关联操作中，弹窗选择区块应排除已关联数据 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh

- **[文件管理器]** 第三方存储插件现在可以在 v2 的文件管理器设置页注册自定义的存储类型表单。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn

- **[AI: 知识库]** 支持在创建知识库时指定其唯一键 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复字段赋值里关系字段选择字段无法选择常量字段的问题。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust

  - 修复系统设置提交后页面显示为空的问题 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe

  - 修复筛选表单有默认值时表格初始化重复请求的问题 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe

  - 修复表格区块事件流行数据取消选择时设置目标区块数据范围不正确的问题。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust

  - 修复 V2 联动规则支持字段设置可选项 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx

  - 修复 v2 表格中关系字段修改标题字段时报错的问题 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh

- **[client-v2]**
  - 修复启用插件弹窗后方页面变空白的问题 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe

  - 修复 v1 后台页面在生产构建下引用 v2 插件模块时崩溃的问题。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn

- **[cli-v1]** 修复通过 create-nocobase-app 创建的应用在开发启动时因 app-dev 客户端路径解析错误导致构建失败的问题。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn

- **[server]** fix(file-manager): 对本地/公开存储中有风险内容的文件强制下载 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher

- **[部门]** 修复 Users & Permissions 设置中添加用户和添加部门按钮翻译相互影响的问题 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh

- **[Markdown]** 修复 v2 Markdown 区块报错的问题 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe

- **[工作流]** 修复：补回 FlowModel 工作流绑定弹窗中操作类事件与自定义操作事件的提示文案 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher

- **[AI 员工]** 修复 Ollama 试运行无需 Key 却要求输入的问题 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock

- **[工作流：审批]**
  - 修复审批转签时审批记录索引重复的问题。 by @mytharcher

  - 修复移动端审批表单布局显示不正确的问题 by @zhangzhonghe

- **[备份管理器]** 修复备份时因为文件无法找到而失败报错的问题。 by @gchust

