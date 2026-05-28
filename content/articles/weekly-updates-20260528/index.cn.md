汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/cn/blog/v2.0.58)

*发布日期：2026-05-28*

### 🎉 新特性

- **[工作流]** 新增管理员 API，用于从头节点或指定节点重新执行已开始的工作流执行。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 优化

- **[client]** 移除菜单项设置中的隐藏选项 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 修复

- **[client]**

  - 修复 v2 移动端日期弹窗使用当前时间而不是表单值的问题 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修复 v2 时间字段格式设置后不生效问题 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 提高v1扫描输入组件文件上传上限 到10MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修复子表单字段通过联动规则显示后提交仍被过滤的问题 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - 修复 v2 子表单中子表格无法添加第二条数据的问题 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修复切换菜单后页面标签页消失的问题 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
- **[flow-engine]** 修复弹窗中表单提交成功后表格操作联动规则执行错误的问题。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[工作流：自定义操作事件]** 修复自定义操作事件表格按钮在多行数据上下文下仍可选择自定义上下文工作流的问题。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
- **[文件管理器]**

  - 修复文件上传时 Unicode 文件名被错误二次解码的问题，避免生成包含控制字符的对象 key。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
  - 优化 PDF 预览失败提示，并补充外部存储 CORS 配置说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考文档：[文件预览](docs/docs/cn/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/cn/blog/v2.0.57)

*发布日期：2026-05-26*

### 🐛 修复

- **[build]** 修复插件服务端混淆产物在 Node.js 运行时注入浏览器全局变量的问题。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[工作流：人工处理节点]** 修复工作流人工任务暂存后未持久化已填写表单内容的问题。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[AI 员工]** 修复表格上下文提示词中错误的数据查询工具名称 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[文件管理器]** 使用 PDF.js 安全渲染 PDF 预览，避免通过 iframe 直接加载原始 PDF。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
- **[认证：OIDC]** 修复 SSO 登录回调收到外部跳转地址时可能泄露 Token 的问题 by @2013xile
- **[工作流：审批]**

  - 修复 `jobs:resume` 接口未被审批节点支持的问题 by @mytharcher
  - 修复审批撤回时提交的业务数据更新，并遵循业务表更新权限控制。 by @mytharcher
  - 修复审批流因非审批节点失败终止后，审批待办记录和统计数字悬空的问题。 by @mytharcher

### [v2.0.56](https://www.nocobase.com/cn/blog/v2.0.56)

*发布日期：2026-05-22*

### 🎉 新特性

- **[备份管理器]** 开源备份管理器插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 优化

- **[client]** 优化操作按钮显示设置 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[flow-engine]** v2 字段配置菜单现在支持搜索字段 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[undefined]**

  - 为依赖变更添加 Pull Request 安全检查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[通知管理]** 调整队列策略以优化发送性能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[AI: 知识库]** 开放 AI 知识库的向量存储修改功能 by @cgyrock
- **[工作流：审批]** 相关审批现在以时间线卡片展示 by @zhangzhonghe

### 🐛 修复

- **[client]**

  - 修复 v2 关系字段通过数据范围联动时，依赖的关系字段变更后未清空已选值的问题 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修复菜单徽章值为 0 时仍显示小红点的问题 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - 修复筛选表单无法使用当前表单变量的问题 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - 修复 v2 区块退出编辑模式后缩窄宽度丢失的问题 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  - 修复子表单里 JS Field 菜单状态不正确的问题。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
- **[flow-engine]** 修复外部数据源字段配置为多选字段后，在 v2 表单中无法进行多选的问题 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[AI 员工]** 修复 AI 员工使用只读知识库时报错问题 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
- **[日历]** 修复日历展开更多日程时显示不全的问题 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[操作：批量更新]** 修复批量更新插件在更新失败后未重置 loading 状态的问题 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[API 文档]** 修复 Collection API 文档中的查询参数相互影响问题 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[工作流]** 为手动执行工作流增加加载状态。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[迁移管理]** 修复使用 OceanBase 时创建迁移文件失败的问题 by @2013xile
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 端点处理逻辑，避免服务端上传和 URL 预览重复拼接 bucket 子域名。 by @mytharcher
- **[工作流：审批]** 修复同一审批任务并发转签时审批记录索引重复的问题。 by @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.37](https://www.nocobase.com/cn/blog/v2.1.0-beta.37)

*发布日期：2026-05-26*

### 🎉 新特性

- **[client-v2]** v2 admin 新增「安全」父菜单和「Token 策略」设置页；用户中心支持「修改密码」。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
- **[cli]** 支持 basic auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[密码策略]** 将密码策略插件迁移到新的 client-v2 管理后台，提供密码策略与已锁定用户两个设置页，并在用户中心的修改密码表单中接入客户端密码规则校验。 by @Molunerfinn

### 🚀 优化

- **[数据可视化]** 图表区块支持 client v2。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[工作流]** 重构工作流异步节点可用性检查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 修复

- **[build]**

  - 服务端构建中的文本资源现在会作为文件复制，不再被转换成 JavaScript 模块。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修复插件服务端混淆产物在 Node.js 运行时注入浏览器全局变量的问题。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[client-v2]** 修复页面语言元信息，使应用页面跟随当前应用语言，而不是固定标记为英文。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
- **[文件管理器]** 使用 PDF.js 安全渲染 PDF 预览，避免通过 iframe 直接加载原始 PDF。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
- **[AI 员工]** 修复表格上下文提示词中错误的数据查询工具名称 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[工作流：人工处理节点]** 修复工作流人工任务暂存后未持久化已填写表单内容的问题。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[认证：OIDC]** 修复 SSO 登录回调收到外部跳转地址时可能泄露 Token 的问题 by @2013xile
- **[工作流：审批]**

  - 修复审批撤回时提交的业务数据更新，并遵循业务表更新权限控制。 by @mytharcher
  - 修复 `jobs:resume` 接口未被审批节点支持的问题 by @mytharcher
  - 修复同一审批任务并发转签时审批记录索引重复的问题。 by @mytharcher
  - 修复审批流因非审批节点失败终止后，审批待办记录和统计数字悬空的问题。 by @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/cn/blog/v2.1.0-beta.36)

*发布日期：2026-05-22*

### 🎉 新特性

- **[cli]** 添加 backup create 和  backup restore 命令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
- **[备份管理器]** 开源备份管理器插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
- **[主题编辑器]** 主题编辑器现已支持 v2 界面 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[双因素身份认证 (2FA)]** 新版客户端现在可以绑定、验证和配置 TOTP 与两步验证。 by @Molunerfinn

### 🚀 优化

- **[client]** 优化操作按钮显示设置 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[flow-engine]** v2 字段配置菜单现在支持搜索字段 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[cli]** 改进 env auth 流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
- **[undefined]**

  - 为依赖变更添加 Pull Request 安全检查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[验证]** 为「验证」插件新增 v2 客户端（管理设置页、用户中心入口、短信验证码表单等）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[用户认证]** 自定义品牌设置现在可以在 v2 客户端中正常生效 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
- **[区块：地图]** 为地图插件新增 v2 客户端支持。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[自定义品牌]** 自定义品牌设置现已支持 v2 客户端 by @zhangzhonghe
- **[AI: 知识库]** 开放 AI 知识库的向量存储修改功能 by @cgyrock
- **[工作流：审批]** 为审批节点增加 `async` 类型标识，以适配工作流画布新增节点的新 API by @mytharcher

### 🐛 修复

- **[client]**

  - 修复 v2 关系字段通过数据范围联动时，依赖的关系字段变更后未清空已选值的问题 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修复开发模式下已构建 storage 插件依赖本地源码插件命名导出时加载失败的问题。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修复子表单里 JS Field 菜单状态不正确的问题。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
  - 修复 v2 区块退出编辑模式后缩窄宽度丢失的问题 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
- **[client-v2]** 修复 dnd-kit 依赖注册不一致的问题。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
- **[flow-engine]** 修复外部数据源字段配置为多选字段后，在 v2 表单中无法进行多选的问题 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[区块：iframe]** 修复 iframe 设置区块高度后内容未撑满区块的问题 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[AI 员工]**

  - 修复 AI 员工使用只读知识库时报错问题 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  - 修复工具调用流式事件被拆分时，AI 工具调用卡片无法即时显示的问题 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  - 修复 AI 员工使用只读知识库时报错问题 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
- **[操作：导出记录]** 修复数据表关系字段较多时导出按钮的字段配置点击卡顿的问题 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[操作：批量更新]** 修复批量更新插件在更新失败后未重置 loading 状态的问题 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[工作流]** 为手动执行工作流增加加载状态。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[本地化]** 修复 AI 翻译任务中内建词条参考翻译的取值问题 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[迁移管理]** 修复使用 OceanBase 时创建迁移文件失败的问题 by @2013xile
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 端点处理逻辑，避免服务端上传和 URL 预览重复拼接 bucket 子域名。 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/cn/blog/v2.1.0-alpha.40)

*发布日期：2026-05-22*

### 🎉 新特性

- **[cli]** 添加 backup create 和  backup restore 命令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
- **[备份管理器]** 开源备份管理器插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
- **[主题编辑器]** 主题编辑器现已支持 v2 界面 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[双因素身份认证 (2FA)]** 新版客户端现在可以绑定、验证和配置 TOTP 与两步验证。 by @Molunerfinn

### 🚀 优化

- **[cli]** 改进 env auth 流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
- **[flow-engine]** v2 字段配置菜单现在支持搜索字段 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[client]** 优化操作按钮显示设置 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[undefined]**

  - 为依赖变更添加 Pull Request 安全检查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[验证]** 为「验证」插件新增 v2 客户端（管理设置页、用户中心入口、短信验证码表单等）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[用户认证]** 自定义品牌设置现在可以在 v2 客户端中正常生效 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
- **[区块：地图]** 为地图插件新增 v2 客户端支持。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[自定义品牌]** 自定义品牌设置现已支持 v2 客户端 by @zhangzhonghe
- **[AI: 知识库]** 开放 AI 知识库的向量存储修改功能 by @cgyrock
- **[工作流：审批]** 为审批节点增加 `async` 类型标识，以适配工作流画布新增节点的新 API by @mytharcher

### 🐛 修复

- **[client]**

  - 修复开发模式下已构建 storage 插件依赖本地源码插件命名导出时加载失败的问题。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修复 v2 区块退出编辑模式后缩窄宽度丢失的问题 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  - 修复 v2 关系字段通过数据范围联动时，依赖的关系字段变更后未清空已选值的问题 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修复子表单里 JS Field 菜单状态不正确的问题。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
- **[client-v2]** 修复 dnd-kit 依赖注册不一致的问题。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
- **[flow-engine]** 修复外部数据源字段配置为多选字段后，在 v2 表单中无法进行多选的问题 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[区块：iframe]** 修复 iframe 设置区块高度后内容未撑满区块的问题 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[操作：导出记录]** 修复数据表关系字段较多时导出按钮的字段配置点击卡顿的问题 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[AI 员工]**

  - 修复 AI 员工使用只读知识库时报错问题 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  - 修复 AI 员工使用只读知识库时报错问题 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  - 修复工具调用流式事件被拆分时，AI 工具调用卡片无法即时显示的问题 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
- **[本地化]** 修复 AI 翻译任务中内建词条参考翻译的取值问题 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[操作：批量更新]** 修复批量更新插件在更新失败后未重置 loading 状态的问题 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[工作流]** 为手动执行工作流增加加载状态。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[迁移管理]** 修复使用 OceanBase 时创建迁移文件失败的问题 by @2013xile
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 端点处理逻辑，避免服务端上传和 URL 预览重复拼接 bucket 子域名。 by @mytharcher
- **[工作流：审批]** 修复同一审批任务并发转签时审批记录索引重复的问题。 by @mytharcher
