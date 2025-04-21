汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/cn/blog/v1.5.17)

*发布时间：2025-02-27*

#### 🐛 修复

- **[client]**

  - 无评论表时点击创建评论区块报错 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 点击树区块节点时报错 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 点击左侧菜单后，子页面被异常关闭 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 当表达式的值为空时，不清空字段的值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
- **[数据表字段：自动编码]** 修复自动编号字段在只读模式下未禁用 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[文件管理器]** 修复继承表的迁移问题 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
- **[权限控制]** 配置数据表权限，使用多对多字段作为数据范围筛选条件，响应的数据记录不正确 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[区块：看板]** 弹窗中看板区块使用弹窗记录变量过滤数据不正确 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[区块：树]** 点击树区块节点时报错 by @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/cn/blog/v1.5.18)

*发布时间：2025-02-27*

#### 🐛 修复

- **[区块：操作面板]** 设置操作面板的高度无效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/cn/blog/v1.5.19)

*发布时间：2025-03-01*

#### 🐛 修复

- **[client]** 关系字段阅读模式下hover时出现新增按钮 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[操作：导出记录 Pro]** 导出附件按钮setting多了添加区块 by @katherinehhh
- **[操作：导入记录 Pro]** 关系区块导入按钮的识别重复记录依据字段下拉无内容 by @katherinehhh

### [v1.5.20](https://www.nocobase.com/cn/blog/v1.5.20)

*发布时间：2025-03-03*

#### 🐛 修复

- **[client]** 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
- **[区块：地图]** 地图字段不显示配置项 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[自定义品牌]** 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon by @zhangzhonghe
- **[模板打印]** 模板打印插件和备份管理器插件都开启时，无法上传本地备份还原应用 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/cn/blog/v1.6.0-beta.15)

*发布时间：2025-02-27*

#### 🐛 修复

- **[client]**

  - 无评论表时点击创建评论区块报错 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 拖动菜单之后，位置不对 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
- **[工作流：自定义操作事件]** 修复编译错误 by @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/cn/blog/v1.6.0-beta.16)

*发布时间：2025-03-04*

#### 🎉 新特性

- **[client]** 时间字段支持格式化 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

#### 🚀 优化

- **[server]** 更新 koa 至 2.15.4；更新 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[工作流]** 后置节点结果加载以提升执行记录画布性能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

#### 🐛 修复

- **[auth]** 在 WebSocket 授权过程中避免刷新令牌。 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[client]**

  - 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 关系字段阅读模式下hover时出现新增按钮 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[devtools]** 确保仅在 req.ip 不为 undefined 时，设置 X-Forwarded-For 头部。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[区块：地图]** 地图字段不显示配置项 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[移动端]** 页面报错：Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[用户]** 用户权限管理表格在首次加载页面时，有一个报错的 UI 一闪而过 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[区块：操作面板]** 设置操作面板的高度无效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[操作：导入记录 Pro]** 关系区块导入按钮的识别重复记录依据字段下拉无内容 by @katherinehhh
- **[操作：导出记录 Pro]** 导出附件按钮setting多了添加区块 by @katherinehhh
- **[工作流：自定义操作事件]** 修复自定义操作事件已绑定工作流的旧按钮的迁移脚本 by @mytharcher
- **[自定义品牌]** 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon by @zhangzhonghe
- **[模板打印]** 模板打印插件和备份管理器插件都开启时，无法上传本地备份还原应用 by @gchust
- **[工作流：审批]**

  - 修复 `.toJSON()` 导致的错误 by @mytharcher
  - 修复由于版本号设置导致迁移脚本未执行 by @mytharcher
  - 修复旧区块的迁移脚本 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/cn/blog/v1.6.0-alpha.29)

*发布时间：2025-02-27*

#### 🎉 新特性

- **[client]** 支持为按钮配置权限 ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh
- **[区块：模板]** 新增 `区块：模板` 插件，为区块提供基于继承机制的模板的功能。 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[工作流：自定义操作事件]** 触发工作流按钮支持权限控制 by @katherinehhh

#### 🚀 优化

- **[client]**

  - 升级 react types 定义 ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust
  - 用户个人中心扩展改进 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
- **[文件管理器]**

  - URL 字段长度增加为 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - 后端添加生成preview地址代码 ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx
  - 文件上传时生成的文件名由随机改成文件名加随机后缀。 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
  - 后端添加生成preview地址代码 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - 调整存储引擎类型的 API 并增加插件的接口 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
  - 调整存储引擎类型的 API 并增加插件的接口 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[区块：操作面板]** 优化移动端样式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe
- **[工作流]** 在工作流画布的节点上隐藏节点 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
- **[文件存储：S3 (Pro)]**

  - 基于主仓库的变更调整存储引擎的 API by @mytharcher
  - 支持thumbnailRule选项配置 by @jiannx
- **[备份管理器]** 允许还原备份到缺少部分插件的应用 by @gchust

#### 🐛 修复

- **[devtools]** 确保仅在 req.ip 不为 undefined 时，设置 X-Forwarded-For 头部。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[client]**

  - 拖动菜单之后，位置不对 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
  - 无评论表时点击创建评论区块报错 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 点击树区块节点时报错 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 点击左侧菜单后，子页面被异常关闭 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 当表达式的值为空时，不清空字段的值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
  - 富文本字段组件无法删除清空所有内容 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
  - 无法将页面移动到分组中 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe
  - 跳过 CurrentUserProvider 中的认证错误。 ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
  - 修复逐个上传文件后之前的文件消失的问题 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
  - 修复邮件通道配置表单中输入标签的字符编码错误。 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - 修复上传多个文件后文件丢失的问题 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - 筛选表单字段的 Picker 与格式设置不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 在禁用状态下正确展示 `<Variable.TextArea />` 组件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
- **[create-nocobase-app]** `create-nocobase-app` 后 `yarn dev` 网页端报错 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust
- **[auth]** 当令牌是 API 密钥时跳过用户身份验证检查。 ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66
- **[cli]** 优化 nocobase upgrade 命令行 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos
- **[文件管理器]**

  - 修复继承表的迁移问题 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修复文件表 `path` 列的类型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - 升级 AWS SDK 版本以修复 MinIO 上传问题 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[区块：模板]** 访问公开表单会重定向到登录界面 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[权限控制]** 配置数据表权限，使用多对多字段作为数据范围筛选条件，响应的数据记录不正确 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[区块：看板]** 弹窗中看板区块使用弹窗记录变量过滤数据不正确 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[数据表字段：自动编码]** 修复自动编号字段在只读模式下未禁用 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[工作流：测试工具包]** 修复新功能相关的 E2E 测试用例 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher
- **[公开表单]** 公开表单里跳过 Auth 检查 ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos
- **[用户认证]** 移除 AdminProvider 不必要的 NavigateIfNotSignIn  组件。 ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66
- **[工作流]**

  - 修复工作流画布的样式细节 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - 支持修改密码时触发用户表的工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[工作流：自定义操作事件]**

  - 修复编译错误 by @mytharcher
  - 修复 E2E 测试用例 by @mytharcher
  - 修复触发工作流初始化器 by @mytharcher
  - 修复编译错误 by @mytharcher
- **[工作流：操作前事件]** 修复响应消息节点的错误消息不显示的问题 by @mytharcher
- **[工作流：JavaScript 节点]** 支持导入 NocoBase 的模块 by @mytharcher
- **[邮件管理]** 公开邮件消息表和邮件接口导致的弹出表单数据丢失 by @jiannx
- **[文件存储：S3 (Pro)]**

  - 升级 AWS SDK 版本以修复 MinIO 上传问题 by @mytharcher
  - 设置强制路径式（访问）的默认值为 虚拟主机式 by @jiannx
- **[区块：分步表单]** 分步排序异常 by @jiannx
- **[区块：树]** 点击树区块节点时报错 by @zhangzhonghe
- **[备份管理器]** 在"从本地备份还原"操作弹窗中，点击删除图标不会清空文件列表 by @gchust
- **[工作流：审批]**

  - 修复由于版本号设置导致迁移脚本未执行 by @mytharcher
  - 修复新功能相关的 E2E 测试用例 by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
