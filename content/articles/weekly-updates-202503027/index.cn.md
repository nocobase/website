汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/cn/blog/v1.6.7)

*发布时间：2025-03-20*

#### 🚀 优化

- **[工作流：邮件发送节点]** 增加安全字段配置描述。 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[通知：电子邮件]** 增加安全字段配置描述。 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[日历]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 修复

- **[client]** 时间字段在中文语言下提交时报错 invalid input syntax for type time ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
- **[文件管理器]** COS 存储的文件无法访问 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[区块：地图]** 地图管理中密钥必填校验失败 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[WEB 客户端]** 路由管理表格中的路径与实际路径不一样 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[操作：导出记录 Pro]** 无法导出附件 by @chenos
- **[工作流：审批]**

  - 修复空用户造成页面崩溃 by @mytharcher
  - 修复审批人界面配置添加查询节点时的页面崩溃 by @mytharcher

### [v1.6.8](https://www.nocobase.com/cn/blog/v1.6.8)

*发布时间：2025-03-22*

#### 🐛 修复

- **[server]** Upgrade 命令可能造成工作流报错 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[client]** 表单中的子表格高度会随主表单高度一同设置 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
- **[用户认证]**

  - X-Authenticator 缺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
  - 移除认证器配置项前后的空格、换行符 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
- **[区块：地图]** 地图区块 密钥管理中不可见字符导致的密钥请求失败的问题 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
- **[备份管理器]** 还原过程中可能引起工作流执行报错 by @gchust
- **[企业微信]** 获取通知配置时需要解析环境变量和密钥 by @2013xile

### [v1.6.9](https://www.nocobase.com/cn/blog/v1.6.9)

*发布时间：2025-03-23*

#### 🐛 修复

- **[client]** 操作按钮透明状态导致 hover 时按钮 setting 显示异常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

### [v1.6.10](https://www.nocobase.com/cn/blog/v1.6.10)

*发布时间：2025-03-25*

#### 🐛 修复

- **[client]**

  - 添加链接页面时，无法使用“当前用户”变量 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - field assignment with null value is ineffective ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - `yarn doc` 命令报错 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 筛选表单中，移除下拉单选字段的“允许多选”选项 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - 关系字段的数据范围联动不生效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
- **[数据表：树]** 树表插件的迁移脚本问题 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[操作：自定义请求]** 无法下载utf8编码的文件 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/cn/blog/v1.7.0-beta.7)

*发布时间：2025-03-19*

#### 🚀 优化

- **[日历]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 修复

- **[client]**

  - 添加子记录按钮设置只显示图标不生效 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
  - 联动规则字段默认设置为 隐藏保留值 不生效 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
- **[区块：操作面板]** 移动端操作面板按钮权限隐藏后的排版问题 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[WEB 客户端]** 路由管理表格中的路径与实际路径不一样 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/cn/blog/v1.7.0-beta.8)

*发布时间：2025-03-23*

#### 🎉 新特性

- **[client]** 支持字段 Style 设置 font-size、font-weight、font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[变量和密钥]** 支持链接按钮的 URL 中使用环境变量 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

#### 🚀 优化

- **[client]** 支持筛选按钮中选择字段的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[工作流：邮件发送节点]** 增加安全字段配置描述。 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[WEB 客户端]** 增加 Clear Cache 操作的二次确认提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[通知：电子邮件]** 增加安全字段配置描述。 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[邮件管理]** 支持重新授权和发件时自动选中账号 by @jiannx

#### 🐛 修复

- **[server]** Upgrade 命令可能造成工作流报错 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[client]**

  - 表单中的子表格高度会随主表单高度一同设置 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - 时间字段在中文语言下提交时报错 invalid input syntax for type time ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - 操作按钮透明状态导致 hover 时按钮 setting 显示异常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
- **[用户认证]**

  - 移除认证器配置项前后的空格、换行符 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator 缺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[区块：地图]**

  - 地图区块 密钥管理中不可见字符导致的密钥请求失败的问题 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - 地图管理中密钥必填校验失败 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[文件管理器]** COS 存储的文件无法访问 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[操作：导出记录 Pro]** 无法导出附件 by @chenos
- **[备份管理器]** 还原过程中可能引起工作流执行报错 by @gchust
- **[企业微信]** 获取通知配置时需要解析环境变量和密钥 by @2013xile
- **[工作流：审批]**

  - 修复审批流程表格因执行记录删除后报错 by @mytharcher
  - 修复审批人界面配置添加查询节点时的页面崩溃 by @mytharcher
  - 修复空用户造成页面崩溃 by @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/cn/blog/v1.7.0-beta.9)

*发布时间：2025-03-25*

#### 🎉 新特性

- **[acl]** 支持用户角色并集 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[client]**

  - 支持数据表预置字段扩展 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  - 支持扩展前端筛选操作符 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[验证]** 支持用户绑定不同的身份验证类型，如短信、TOTP 认证器等，并在必要的场景下验证身份。支持开发和扩展身份验证方式。 ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  参考文档：[验证](https://docs-cn.nocobase.com/handbook/verification)
- **[日历]** 支持看板、日历、公式字段插件可选字段的扩展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
- **[区块：模板]** 新增 `区块：模板` 插件，为区块提供基于继承机制的模板的功能。 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[plugin-demo-platform]** 设置 "/new" 路由的 skipAuthCheck 为 true。 by @sheldon66
- **[双因素身份认证 (2FA)]** 新插件：双因素身份认证（2FA）和验证：TOTP 认证器 by @2013xile
  参考文档：[双因素身份认证 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[验证：TOTP 认证器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 优化

- **[client]**

  - 在 router.add 中添加 skipAuthCheck，防止在访问公共页面时重定向到登录页。 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
  - Ant design 相关依赖升级至 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust
- **[utils]** 桌面端页面自适应移动端样式 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[公开表单]** 公开表单页面标题，显示为创建时设置的标题 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[文件管理器]**

  - 后端添加生成preview地址代码 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - 调整存储引擎类型的 API 并增加插件的接口 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[区块：模板]** 支持从页面数据区块直接另存为区块模板 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[工作流]** 将绑定工作流的按钮配置转移到插件中 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 表格行按钮拖拽排序缺陷 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
  - 添加链接页面时，无法使用“当前用户”变量 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 关系字段的数据范围联动不生效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - 筛选表单中，移除下拉单选字段的“允许多选”选项 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - `yarn doc` 命令报错 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 联动规则中字段列表没有显示全部可选字段 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - 移动端浏览器中，页面内容显示不全 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - 使用“$anyOf”操作符时，联动规则无效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
  - 时间字段在筛选表单中格式化异常 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - 表单默认值输入框样式不正确 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
- **[utils]** 已知桌面端响应式的 BUG ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[acl]** 修复角色并集下关系字段不显示 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[数据表：树]** 树表插件的迁移脚本问题 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[操作：自定义请求]** 无法下载utf8编码的文件 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[变量和密钥]** 变量与密钥弹窗界面按钮不显示 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[WEB 客户端]** 将所有使用 ctx.state.currentRole（单角色）的地方替换为 ctx.state.currentRoles（支持多角色）。 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[权限控制]**

  - 通用的操作数据范围为自己的数据时，若表无创建人字段会报错。 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
  - 修复角色不生效 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
- **[区块：模板]**

  - 页面数据区块另存为模板菜单不显示 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
  - 移动端页面区块另存为模板不正确 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
  - 访问公开表单会重定向到登录界面 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[认证：API 密钥]** API keys 插件角色列表移除 union ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[区块：分步表单]** 提交按钮默认和高亮情况下颜色一样 by @jiannx
- **[工作流：审批]** “发起新申请”弹窗的样式问题 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/cn/blog/v1.7.0-alpha.4)

*发布时间：2025-03-23*

#### 🎉 新特性

- **[client]**

  - 支持长文本字段作为关系字段的标题字段 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
  - 支持字段 Style 设置 font-size、font-weight、font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[变量和密钥]** 支持链接按钮的 URL 中使用环境变量 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh
- **[工作流：聚合查询节点]** 支持为聚合结果配置精度选项 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 优化

- **[client]** 支持筛选按钮中选择字段的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[通知：电子邮件]** 增加安全字段配置描述。 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[工作流：邮件发送节点]** 增加安全字段配置描述。 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[日历]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038
- **[WEB 客户端]** 增加 Clear Cache 操作的二次确认提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[邮件管理]** 支持重新授权和发件时自动选中账号 by @jiannx

#### 🐛 修复

- **[client]**

  - 操作按钮透明状态导致 hover 时按钮 setting 显示异常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
  - 时间字段在中文语言下提交时报错 invalid input syntax for type time ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - 表单中的子表格高度会随主表单高度一同设置 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - 联动规则字段默认设置为 隐藏保留值 不生效 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
  - 添加子记录按钮设置只显示图标不生效 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
- **[server]** Upgrade 命令可能造成工作流报错 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[utils]** 已知桌面端响应式的 BUG ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[evaluators]** 将表达式计算保留小数调整回 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[用户认证]**

  - 移除认证器配置项前后的空格、换行符 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator 缺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[区块：地图]**

  - 地图区块 密钥管理中不可见字符导致的密钥请求失败的问题 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - 地图管理中密钥必填校验失败 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[文件管理器]**

  - COS 存储的文件无法访问 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
  - URL 转义 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[WEB 客户端]** 路由管理表格中的路径与实际路径不一样 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[区块：操作面板]** 移动端操作面板按钮权限隐藏后的排版问题 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[数据源：主数据库]** 无法创建 MySQL 视图 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[工作流]** 修复历史遗留任务数量工作流删除后统计错误 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[操作：导出记录 Pro]** 无法导出附件 by @chenos
- **[备份管理器]**

  - 通过多应用模板创建子应用时备份中的上传文件未被正确还原 by @gchust
  - 还原过程中可能引起工作流执行报错 by @gchust
  - 还原 MySQL 数据库备份时由于 GTID 集合重叠导致的失败 by @gchust
- **[企业微信]** 获取通知配置时需要解析环境变量和密钥 by @2013xile
- **[工作流：审批]**

  - 修复审批流程表格因执行记录删除后报错 by @mytharcher
  - 将退回的审批单据列入待办 by @mytharcher
  - 修复审批人界面配置添加查询节点时的页面崩溃 by @mytharcher
  - 修复审批过程表格中发起人查看按钮消失的问题 by @mytharcher
  - “发起新申请”弹窗的样式问题 by @zhangzhonghe

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
