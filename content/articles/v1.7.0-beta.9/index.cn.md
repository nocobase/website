### 🎉 新特性

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
### 🚀 优化

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

### 🐛 修复

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

