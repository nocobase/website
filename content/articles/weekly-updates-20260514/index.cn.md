汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/cn/blog/v2.0.52)

*发布日期：2026-05-13*

### 🎉 新特性

- **[client]**
  - v2 增加当前用户语言变量 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - v2 表单中日期字段增加日期范围限制设置项 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

### 🚀 优化

- **[client]** 一对多关系表格区块的关联操作中，弹窗选择区块应排除已关联数据 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[部门]** 优化部门列表样式，增加图标并调整间距 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh
- **[AI: 知识库]** 支持在创建知识库时指定其唯一键 by @cgyrock

### 🐛 修复

- **[client]**

  - 修复旧默认值配置无法被移除的问题。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修复字段赋值里关系字段选择字段无法选择常量字段的问题。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - 修复表格区块事件流行数据取消选择时设置目标区块数据范围不正确的问题。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - 修复筛选表单有默认值时表格初始化重复请求的问题 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - 修复 V2 联动规则支持字段设置可选项 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
  - 修复 v2 表格中关系字段修改标题字段时报错的问题 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - 修复操作按钮联动规则偶现不生效的问题。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - 修复 v2 子表格中的对多关系字段组件列表出现子表格组件的问题 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[server]** fix(file-manager): 对本地/公开存储中有风险内容的文件强制下载 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI 员工]** 修复 Ollama 试运行无需 Key 却要求输入的问题 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[可视化数据表管理]** 修复 Graphical interface 自动布局报错 “to do update action, filter or filterByTk is required” ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[工作流]** 修复：补回 FlowModel 工作流绑定弹窗中操作类事件与自定义操作事件的提示文案 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[部门]** 修复 Users & Permissions 设置中添加用户和添加部门按钮翻译相互影响的问题 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** 修复 markdown 字段在表单水平布局时提示信息被遮挡的问题 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB 客户端]** 修复使用翻译后的路由类型筛选不到数据的问题 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[工作流：审批]**

  - 修复审批处理设置中显示 JS field 的问题 by @zhangzhonghe
  - 修复移动端审批表单布局显示不正确的问题 by @zhangzhonghe
  - 修复审批转签时审批记录索引重复的问题。 by @mytharcher
- **[备份管理器]** 修复备份时因为文件无法找到而失败报错的问题。 by @gchust

### [v2.0.51](https://www.nocobase.com/cn/blog/v2.0.51)

*发布日期：2026-05-10*

### 🚀 优化

- **[工作流：审批]** 修复审批表单必填校验的交互问题 by @zhangzhonghe

### 🐛 修复

- **[client]**

  - 修复 JS field 改为只读后 js 代码无法再次被修改的问题。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修复字段联动规则中子表格字段赋值不生效的问题。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - 修复路由管理页的配置不和页面标签页的配置同步的问题 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修复新增弹窗关系字段默认值弹窗不正确的问题。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[密码策略]** 修复永久锁定用户在服务重启后登录限制可能失效的问题 by @2013xile
- **[操作：导入记录 Pro]** 修复识别重复检查针对日期字段时总是失败的问题 by @mytharcher
- **[工作流：审批]** 修复审批工作流配置中选择记录抽屉被遮挡的问题 by @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/cn/blog/v2.0.50)

*发布日期：2026-05-09*

### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 优化

- **[undefined]** 跳过 pkg.nocobase.com 发布中的已发布版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复 v2 Flow 表单中数据表字段校验提示未翻译的问题 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - 修复表单区块中设置为 `隐藏并保留值` 的字段在页面编辑模式下不显示的问题，并恢复在字段赋值中为这类字段设置值的输入能力 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修复 AttachmentURL 字段在缺少文件元数据时下载文件名异常的问题。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修复 v2 表格批量触发工作流在跳转到其他 tab 后返回原 tab 时选中状态不同步，且返回后可再次勾选记录的问题 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - 修复筛选表单无法折叠的问题 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修复 v1 子表格联动规则错误改变字段必填样式的问题 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修复网格卡片区块更新数据后刷新未正确显示数据的问题 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - 修复子表格中选项字段必填在移动端需选择两次才生效的问题 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修复缓存页面切换后 URL 查询参数变量失效的问题 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - 修复 v2 DividerItem 未适配主题的问题 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修复 v2 子表格中关系字段下拉选项组件错误显示快捷编辑配置项的问题 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修复区表单值改变时联动规则不自动运行的问题。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修复自定义下拉多选筛选标量字段时报错的问题 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
- **[server]** 验证插件包名称 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[数据源管理]** 修复角色权限配置中外部数据源自定义范围允许编辑删除所有数据的问题 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[数据源：主数据库]** 修复启用表前缀时导入数据库表后错误使用带前缀表名的问题 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[通知：站内信]** 修复收到实时站内信后通知列表未及时刷新的问题 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[区块：看板]** 修复 v1 看板区块长文本字段中单个单词被换行的问题 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[数据表字段：公式]** 修复 v2 子表格中公式字段未触发自动计算值的问题 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/cn/blog/v2.1.0-beta.32)

*发布日期：2026-05-13*

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

### [v2.1.0-beta.30](https://www.nocobase.com/cn/blog/v2.1.0-beta.30)

*发布日期：2026-05-12*

### 🎉 新特性

- **[client]**
  - 页面菜单项支持配置联动规则 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  - v2 增加当前用户语言变量 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 优化

- **[client-v2]** v2 布局中过滤掉 v1 的菜单，只显示 v2 菜单 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[undefined]** nb cli 支持 session 级 current env ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
- **[AI 员工]** AI 员工支持多个会话并行处理 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
- **[部门]** 优化部门列表样式，增加图标并调整间距 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 修复

- **[build]** 修复 v1 client 构建在引用其他插件 `/client-v2` 入口时报错的问题。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - 修复 v2 子表格中的对多关系字段组件列表出现子表格组件的问题 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
  - 修复操作按钮联动规则偶现不生效的问题。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
- **[可视化数据表管理]** 修复 Graphical interface 自动布局报错 “to do update action, filter or filterByTk is required” ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[区块：树]** 优化树筛选区块设置，并修复不支持的关联记录入口、标题字段缺失提示以及关闭搜索后的重置行为。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/cn/blog/v2.1.0-beta.29)

*发布日期：2026-05-10*

### 🎉 新特性

- **[client]** v2 表单中日期字段增加日期范围限制设置项 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[flow-engine]** 将 `plugin-environment-variables` 迁移到 client-v2，提供基于 React 的设置页与全局注册的 `$env` 运行时变量；为 `plugin-file-manager` 新增 client-v2 入口，提供基于 React 的存储配置页面以及基于 FlowModel 的上传字段、上传动作和预览能力。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🐛 修复

- **[client]**

  - 修复 JS field 改为只读后 js 代码无法再次被修改的问题。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修复路由管理页的配置不和页面标签页的配置同步的问题 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修复字段联动规则中子表格字段赋值不生效的问题。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - 修复新增弹窗关系字段默认值弹窗不正确的问题。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[数据表字段：Markdown(Vditor)]** 修复 markdown 字段在表单水平布局时提示信息被遮挡的问题 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[移动端（已废弃）]** 修复移动端消息弹窗无法关闭和滑动的问题 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[WEB 客户端]** 修复使用翻译后的路由类型筛选不到数据的问题 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[工作流：审批]** 修复审批处理设置中显示 JS field 的问题 by @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/cn/blog/v2.1.0-beta.27)

*发布日期：2026-05-09*

### 🎉 新特性

- **[server]** AI 员工可以通过 Bash 命令检索内置文档 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[AI 员工]** 工作流 AI 员工节点支持从附件字段加载文件 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 优化

- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[区块：看板]** 优化 v2 详情字段间距一致性，并使看板卡片和列间距更好地适配主题设置。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[AI 员工]** 优化 Nathan 的 RunJS 编辑工具，并减少长 AI 对话中的卡顿 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
- **[工作流：审批]** 修复审批表单必填校验的交互问题 by @zhangzhonghe

### 🐛 修复

- **[flow-engine]** 修复 v2 Flow 表单中数据表字段校验提示未翻译的问题 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - 修复筛选表单无法折叠的问题 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修复自定义下拉多选筛选标量字段时报错的问题 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - 修复 AttachmentURL 字段在缺少文件元数据时下载文件名异常的问题。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修复 v2 DividerItem 未适配主题的问题 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修复 v1 子表格联动规则错误改变字段必填样式的问题 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修复表单区块中设置为 `隐藏并保留值` 的字段在页面编辑模式下不显示的问题，并恢复在字段赋值中为这类字段设置值的输入能力 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修复 v2 表格批量触发工作流在跳转到其他 tab 后返回原 tab 时选中状态不同步，且返回后可再次勾选记录的问题 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
- **[client-v2]**

  - 修复字段值配置中选择关系字段报错的问题。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修复应用启动后会闪一下 404 页面的问题 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
- **[server]** 修复子应用 OAuth 发现请求被错误路由为主应用请求的问题 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
- **[数据源：主数据库]** 修复启用表前缀时导入数据库表后错误使用带前缀表名的问题 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[通知：站内信]** 修复收到实时站内信后通知列表未及时刷新的问题 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[数据源管理]** 修复角色权限配置中外部数据源自定义范围允许编辑删除所有数据的问题 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI: MCP 服务器]** 修复 MCP 服务器打包时运行时依赖未包含的问题 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[前端流引擎]** 修复 AI 搭建的区块转换成引用模板后无法再转换成复制模板。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[操作：导入记录 Pro]** 修复识别重复检查针对日期字段时总是失败的问题 by @mytharcher
- **[密码策略]** 修复永久锁定用户在服务重启后登录限制可能失效的问题 by @2013xile
- **[工作流：审批]** 修复审批工作流配置中选择记录抽屉被遮挡的问题 by @zhangzhonghe
- **[备份管理器]** 修复 pg 数据库 schema 适配的问题 by @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/cn/blog/v2.1.0-beta.26)

*发布日期：2026-05-08*

### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[数据可视化]** 新增区块插件的 client-v2 支持 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 优化

- **[undefined]** 跳过 pkg.nocobase.com 发布中的已发布版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 修复

- **[client-v2]**

  - 修复部分 v2 页面加载远程插件失败的问题 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  - 修复 v2 页面区块拖拽时占位高亮和落点错误的问题 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
- **[client]**

  - 修复区表单值改变时联动规则不自动运行的问题。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修复子表格中选项字段必填在移动端需选择两次才生效的问题 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修复 v2 子表格中关系字段下拉选项组件错误显示快捷编辑配置项的问题 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修复缓存页面切换后 URL 查询参数变量失效的问题 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - 修复网格卡片区块更新数据后刷新未正确显示数据的问题 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
- **[server]** 验证插件包名称 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[undefined]** 修复多语言文档中的死链，并默认开启文档构建时的死链检测。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[AI 员工]**

  - 修复工作流 AI 员工节点读取关系字段附件报错问题 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修复工作流 AI 员工节点指定使用工具后无法正常结束节点调用 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[区块：看板]**

  - 优化看板卡片紧凑样式，优化快速创建弹窗模板选择。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修复 v1 看板区块长文本字段中单个单词被换行的问题 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
  - 修复弹窗或二级页面中关联看板区块使用未解析运行时资源参数的问题。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[操作：自定义请求]** 升级 koa 到 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[数据表字段：公式]** 修复 v2 子表格中公式字段未触发自动计算值的问题 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[邮件管理]** 修复邮箱别名标题显示问题 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/cn/blog/v2.1.0-alpha.34)

*发布日期：2026-05-12*

### 🚀 优化

- **[AI 员工]** AI 员工支持多个会话并行处理 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/cn/blog/v2.1.0-alpha.33)

*发布日期：2026-05-11*

### 🎉 新特性

- **[client]**
  - v2 增加当前用户语言变量 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - 页面菜单项支持配置联动规则 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

### 🚀 优化

- **[client-v2]** v2 布局中过滤掉 v1 的菜单，只显示 v2 菜单 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[部门]** 优化部门列表样式，增加图标并调整间距 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 修复

- **[build]** 修复 v1 client 构建在引用其他插件 `/client-v2` 入口时报错的问题。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - 修复操作按钮联动规则偶现不生效的问题。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - 修复 v2 子表格中的对多关系字段组件列表出现子表格组件的问题 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[可视化数据表管理]** 修复 Graphical interface 自动布局报错 “to do update action, filter or filterByTk is required” ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[区块：树]** 优化树筛选区块设置，并修复不支持的关联记录入口、标题字段缺失提示以及关闭搜索后的重置行为。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/cn/blog/v2.1.0-alpha.32)

*发布日期：2026-05-10*

### 🎉 新特性

- **[client]** v2 表单中日期字段增加日期范围限制设置项 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[flow-engine]** 将 `plugin-environment-variables` 迁移到 client-v2，提供基于 React 的设置页与全局注册的 `$env` 运行时变量；为 `plugin-file-manager` 新增 client-v2 入口，提供基于 React 的存储配置页面以及基于 FlowModel 的上传字段、上传动作和预览能力。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 优化

- **[undefined]** nb cli 支持 session 级 current env ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 修复

- **[client]**

  - 修复新增弹窗关系字段默认值弹窗不正确的问题。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
  - 修复 JS field 改为只读后 js 代码无法再次被修改的问题。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修复路由管理页的配置不和页面标签页的配置同步的问题 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修复字段联动规则中子表格字段赋值不生效的问题。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
- **[数据表字段：Markdown(Vditor)]** 修复 markdown 字段在表单水平布局时提示信息被遮挡的问题 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB 客户端]** 修复使用翻译后的路由类型筛选不到数据的问题 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[移动端（已废弃）]** 修复移动端消息弹窗无法关闭和滑动的问题 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[工作流：审批]** 修复审批处理设置中显示 JS field 的问题 by @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/cn/blog/v2.1.0-alpha.30)

*发布日期：2026-05-09*

### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh
- **[AI 员工]** 工作流 AI 员工节点支持从附件字段加载文件 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[数据可视化]** 新增区块插件的 client-v2 支持 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 优化

- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[undefined]** 跳过 pkg.nocobase.com 发布中的已发布版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[区块：看板]** 优化 v2 详情字段间距一致性，并使看板卡片和列间距更好地适配主题设置。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[工作流：审批]** 修复审批表单必填校验的交互问题 by @zhangzhonghe

### 🐛 修复

- **[client]**

  - 修复筛选表单无法折叠的问题 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修复 v2 表格批量触发工作流在跳转到其他 tab 后返回原 tab 时选中状态不同步，且返回后可再次勾选记录的问题 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - 修复表单区块中设置为 `隐藏并保留值` 的字段在页面编辑模式下不显示的问题，并恢复在字段赋值中为这类字段设置值的输入能力 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修复 v2 DividerItem 未适配主题的问题 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修复 AttachmentURL 字段在缺少文件元数据时下载文件名异常的问题。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修复自定义下拉多选筛选标量字段时报错的问题 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - 修复区表单值改变时联动规则不自动运行的问题。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修复 v1 子表格联动规则错误改变字段必填样式的问题 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修复网格卡片区块更新数据后刷新未正确显示数据的问题 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - 修复子表格中选项字段必填在移动端需选择两次才生效的问题 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修复 v2 子表格中关系字段下拉选项组件错误显示快捷编辑配置项的问题 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修复缓存页面切换后 URL 查询参数变量失效的问题 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
- **[flow-engine]** 修复 v2 Flow 表单中数据表字段校验提示未翻译的问题 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[server]**

  - 修复子应用 OAuth 发现请求被错误路由为主应用请求的问题 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  - 验证插件包名称 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[client-v2]**

  - 修复字段值配置中选择关系字段报错的问题。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修复应用启动后会闪一下 404 页面的问题 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  - 修复 v2 页面区块拖拽时占位高亮和落点错误的问题 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  - 修复部分 v2 页面加载远程插件失败的问题 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
- **[undefined]** 修复多语言文档中的死链，并默认开启文档构建时的死链检测。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[通知：站内信]** 修复收到实时站内信后通知列表未及时刷新的问题 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[数据源管理]** 修复角色权限配置中外部数据源自定义范围允许编辑删除所有数据的问题 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI: MCP 服务器]** 修复 MCP 服务器打包时运行时依赖未包含的问题 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[数据源：主数据库]** 修复启用表前缀时导入数据库表后错误使用带前缀表名的问题 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[前端流引擎]** 修复 AI 搭建的区块转换成引用模板后无法再转换成复制模板。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[AI 员工]**

  - 修复工作流 AI 员工节点读取关系字段附件报错问题 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修复工作流 AI 员工节点指定使用工具后无法正常结束节点调用 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[操作：自定义请求]** 升级 koa 到 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[区块：看板]**

  - 优化看板卡片紧凑样式，优化快速创建弹窗模板选择。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修复 v1 看板区块长文本字段中单个单词被换行的问题 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[数据表字段：公式]** 修复 v2 子表格中公式字段未触发自动计算值的问题 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[操作：导入记录 Pro]** 修复识别重复检查针对日期字段时总是失败的问题 by @mytharcher
- **[密码策略]** 修复永久锁定用户在服务重启后登录限制可能失效的问题 by @2013xile
- **[工作流：审批]** 修复审批工作流配置中选择记录抽屉被遮挡的问题 by @zhangzhonghe
- **[邮件管理]** 修复邮箱别名标题显示问题 by @jiannx
- **[备份管理器]** 修复 pg 数据库 schema 适配的问题 by @Andrew1989Y
