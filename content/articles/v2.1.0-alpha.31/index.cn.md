### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

- **[AI 员工]** 工作流 AI 员工节点支持从附件字段加载文件 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock

- **[数据可视化]** 新增区块插件的 client-v2 支持 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 优化

- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

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

