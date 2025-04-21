### 🎉 新特性

- **[client]**
  - 级联选择组件添加数据范围设置 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

  - 表格区块支持配置隐藏最左侧序号和选择列（默认显示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - 支持在联动规则配置可选项字段选项 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - 联动规则支持配置时间字段的日期范围 (min/max) ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[acl]** 支持用户角色并集 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[区块：操作面板]** 支持操作面板按钮标题换行或省略 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

- **[plugin-demo-platform]** 设置 "/new" 路由的 skipAuthCheck 为 true。 by @sheldon66

- **[企业微信]** 支持自定义登录按钮提示 by @2013xile

### 🚀 优化

- **[utils]**
  - 将 `md5` 方法移到通用包 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

  - 桌面端页面自适应移动端样式 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[client]** 在 router.add 中添加 skipAuthCheck，防止在访问公共页面时重定向到登录页。 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

- **[数据可视化]** 使用 `x-settings` 替换已废弃的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

### 🐛 修复

- **[client]**
  - 在树区块中，取消选中时，数据区块的数据没有被清空 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe

  - 修复图片中特殊字符导致不显示的问题 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher

  - 子表格切换分页数后新增数据页码显示错误 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - 移动端浏览器中，页面内容显示不全 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe

  - Logo 的样式与之前的不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - 表单日期字段日期范围，最大日期可选范围少一天 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - 使用“$anyOf”操作符时，联动规则无效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - 子表格删除记录的时候多选字段值错误且选项缺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - 使用链接按钮打开的弹窗，数据不更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[acl]** 修复角色并集下关系字段不显示 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[文件管理器]**
  - 无法删除 s3 文件存储的文件 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos

  - 修复文件管理一些问题 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[工作流]** 在数据选择器中移除绑定工作流的配置按钮 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher

- **[工作流：人工处理节点]**
  - 修复迁移脚本报错 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher

  - 调整迁移脚本版本范围限制为 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - 修复遗漏表前缀和 schema 的迁移脚本 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

- **[权限控制]**
  - 修复角色不生效 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie

  - 通用的操作数据范围为自己的数据时，若表无创建人字段会报错。 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

- **[WEB 客户端]** 将所有使用 ctx.state.currentRole（单角色）的地方替换为 ctx.state.currentRoles（支持多角色）。 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[操作：批量编辑]** 修复批量编辑提交时未能触发工作流的问题 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[数据源管理]** 角色管理中切换数据源没有加载对应数据表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[数据可视化]** 添加自定义筛选字段时会出现已移除字段 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[通知：站内信]**
  - 在站内信列表中，将背景颜色与消息卡片的颜色区分开，以提升视觉层次感和可读性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

  - 避免错误的接收人配置导致查询出全部用户 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

- **[操作：自定义请求]** 自定义请求的服务端权限校验错误 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[认证：API 密钥]** API keys 插件角色列表移除 union ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[区块：模板]** 移动端页面区块另存为模板不正确 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

- **[工作流：自定义操作事件]** 移除 E2E 测试中的 `only` by @mytharcher

- **[文件存储：S3 (Pro)]** 修复 s3 pro 的签名 url 无法访问的问题 by @chenos

- **[工作流：审批]**
  - 避免审批流程表格中由于没有发起人时的页面崩溃 by @mytharcher

  - 修复审批表单中关系数据未展示的问题 by @mytharcher

  - 修复外部数据源审批时的报错 by @mytharcher

