### 🎉 新特性

- **[undefined]** 新增在线文档 AI 助手，支持经过验证的官方文档引用和实时处理进度 ([#10328](https://github.com/nocobase/nocobase/pull/10328)) by @hongboji

- **[AI 员工]** 新增 DeepSeek V4 Flash 和 V4 Pro Responses API 支持，包括推理续调、原生联网搜索、引用解析和模型级联网搜索控制 ([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock

- **[多空间]** 为 v1 和 v2 的空间切换器及空间管理新增按空间显示名称的防抖搜索 by @jiannx

- **[认证：LDAP]** 新增 LDAP 用户同步配置的客户端 v2 支持。 by @chenzhizdt

### 🚀 优化

- **[cli]** `nb api resource create` 的 `--values` 支持传 JSON 数组，一次请求创建多条记录。 ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
参考文档：[nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)
- **[undefined]**
  - 完善 LDAP 和钉钉用户同步文档，并补充所有支持语言的翻译。 ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
参考文档：[钉钉](docs/docs/cn/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/cn/users-permissions/sync/sources/ldap.md)
  - 新增 LDAP 和钉钉用户数据同步文档，包括权限配置、事件接收模式、同步字段、部门负责人和故障排查。 ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
参考文档：[钉钉同步](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/dingtalk.md), [LDAP 同步](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/ldap.md)
- **[lock-manager]** 新增本地锁租约续期能力，并确保通过 tryAcquire 获取的锁在复用和异常场景下安全释放 ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx

- **[工作流]** 新版客户端待办中心按工作流分组展示，并统一各类待办的工作流筛选行为。 ([#10374](https://github.com/nocobase/nocobase/pull/10374)) by @mytharcher

- **[区块：树]** 树筛选区块现已支持配置默认排序。 ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

- **[Redis 分布式锁适配器]** 新增 Redis 锁租约续期能力，并确保可复用锁句柄在竞争和异常场景下安全释放 by @jiannx

- **[工作流：审批]** 新版客户端审批待办支持按工作流分组，审批时间线与旧版体验保持一致。 by @mytharcher

### 🐛 修复

- **[cli-v1]** CDN 回源时保持文档 AI 服务请求路径不变 ([#10383](https://github.com/nocobase/nocobase/pull/10383)) by @hongboji

- **[client-v2]**
  - 修复 Client V2 页面未显示响应提示的问题，包括操作前事件返回的错误消息 ([#10376](https://github.com/nocobase/nocobase/pull/10376)) by @mytharcher

  - 修复英文环境下移动端选择字段搜索时显示中文的问题 ([#10367](https://github.com/nocobase/nocobase/pull/10367)) by @zhangzhonghe

  - 修复筛选表单在 UI 编辑模式下自动刷新数据的问题 ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe

  - 修复表单字段联动规则操作中错误列出 JS item 的问题 ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust

  - v2 筛选表单中的树形关系字段默认使用级联选择 ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe

  - 修复 `/v` 路由下切换到无页面配置权限的角色后页面仍处于编辑态的问题 ([#10359](https://github.com/nocobase/nocobase/pull/10359)) by @jiannx

  - 修复移动端单选关联字段再次点击已选记录后无法清空的问题 ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe

  - 修复筛选表单无法直接添加中国行政区字段的问题 ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe

  - v2 区块使用的外部数据源不可用时，显示本地化提示并支持重试。 ([#10336](https://github.com/nocobase/nocobase/pull/10336)) by @katherinehhh

- **[client]** 修复左侧菜单长标题显示不全和配置工具栏位置偏移的问题 ([#10380](https://github.com/nocobase/nocobase/pull/10380)) by @zhangzhonghe

- **[flow-engine]** 修复浏览器窗口较矮时下拉菜单内容显示不全的问题 ([#10379](https://github.com/nocobase/nocobase/pull/10379)) by @zhangzhonghe

- **[undefined]**
  - 修复 `nb plugin import` 无法导入 `yarn build --tar` 打包的插件，并修正插件开发文档中失效的示例代码与脚手架结构说明。 ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn

  - 修复 `nb plugin import` 无法导入 `yarn build --tar` 打包的插件，并修正插件开发文档中失效的示例代码与脚手架结构说明。 ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn

- **[工作流]**
  - 修复工作流执行记录页面标题，并为不存在的工作流增加工作流列表链接 ([#10360](https://github.com/nocobase/nocobase/pull/10360)) by @mytharcher

  - 在选择触发器类型前禁用工作流执行模式选项。 ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn

- **[区块：地图]** 修复地图显示点位数据时区域圈选无法双击结束，以及高德地图持续加载的问题 ([#10373](https://github.com/nocobase/nocobase/pull/10373)) by @jiannx

- **[UI 布局]**
  - 修复移动端页面出现在桌面端导航中的问题 ([#10375](https://github.com/nocobase/nocobase/pull/10375)) by @zhangzhonghe

  - 修复无界面配置权限的角色仍能看到移动端 UI Editor 的问题 ([#10341](https://github.com/nocobase/nocobase/pull/10341)) by @zhangzhonghe

- **[文件管理器]**
  - 修复单值字段选择已有文件时需要额外提交的问题 ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe

  - 修复子应用中的 Logo 等本地存储文件在稳定 URL 重定向后无法加载的问题 ([#10358](https://github.com/nocobase/nocobase/pull/10358)) by @mytharcher

  - 修复在文件之间切换时视频预览内容不更新的问题 ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流任务恢复过程重复投递执行已结束或已超时任务的问题。 ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher

- **[通知：站内信]** 修复站内信消息模板表单显示工作流画布变量、而非页面实际提供的变量的问题。 ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn

- **[数据表字段：Markdown(Vditor)]** 修复 v2 详情区块中 Markdown HTML 预览在暗黑主题下显示异常的问题。 ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh

- **[操作：导入记录]** 修复 v2 导入弹窗中拖入文件无法导入的问题。 ([#10350](https://github.com/nocobase/nocobase/pull/10350)) by @katherinehhh

- **[用户]**
  - 修复在 UI 编辑模式下提交表单时可能跳过必填字段校验的问题 ([#10371](https://github.com/nocobase/nocobase/pull/10371)) by @jiannx

  - V2 新建用户或修改密码失败时展示后端错误信息。 ([#10364](https://github.com/nocobase/nocobase/pull/10364)) by @katherinehhh

- **[工作流：JSON 计算]** 修复 JSON 查询任务丢失结构化解析错误并显示 `[object Object]` 的问题 ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher

- **[AI 员工]** 修复 AI 员工流式输出长回复时，其他闲置浏览器标签页内存暴涨至数 GB 的问题 ([#10352](https://github.com/nocobase/nocobase/pull/10352)) by @cgyrock

- **[区块：树]** 修复树筛选字段权限及关联树表展开状态，并修正详情区块筛选后的分页总数。 ([#10361](https://github.com/nocobase/nocobase/pull/10361)) by @jiannx

- **[操作：打印]** 修复 V1 页面缺少打印操作模型注册的问题。 ([#10347](https://github.com/nocobase/nocobase/pull/10347)) by @katherinehhh

- **[操作：导出记录]**
  - 修复 Export V2 中调整关系字段后拖拽排序导致页面崩溃的问题。 ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh

  - 修复按多个关系字段筛选后表格导出报错的问题 ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe

- **[备份管理器]** 还原备份期间持续显示加载提示 ([#10343](https://github.com/nocobase/nocobase/pull/10343)) by @zhangzhonghe

- **[验证]** Verification 列表新增刷新按钮 ([#10340](https://github.com/nocobase/nocobase/pull/10340)) by @zhangzhonghe

- **[区块：看板]** 修复重新打开看板卡片详情抽屉后已配置内容丢失的问题 ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx

- **[通知管理]** 修复未保存语言记录时翻译测试页面报错的问题，并支持在新增通知渠道时自定义渠道标识 ([#10311](https://github.com/nocobase/nocobase/pull/10311)) by @jiannx

- **[数据表字段：加密]** 修复集合包含加密字段时批量导入报错 `model.changed is not a function` 的问题 by @cgyrock

- **[操作：导入记录 Pro]**
  - 修复异步导入的记录未关联当前空间的问题 by @jiannx

  - 优化导入结果统计文案，明确区分新增记录数与更新记录数 by @mytharcher

- **[工作流：Webhook 触发器]** 修复未填写请求头时手动执行 Webhook 工作流返回 400 错误的问题 by @mytharcher

- **[工作流：审批]**
  - 修复审批详情中子表格列宽与发起表单不一致的问题 by @zhangzhonghe

  - 新版待办中心中的异常审批工作流现在会被禁用，并显示配置异常提示。 by @mytharcher

  - 修复审批退回到任意前置节点时目标节点列表为空的问题 by @zhangzhonghe

  - 修复相关审批区块在撤回或退回后不刷新的问题 by @zhangzhonghe

  - 为 Client V2 相关审批区块增加数据范围筛选 by @zhangzhonghe

- **[审计日志]** 修复 V2 审计日志 Role 列显示原始翻译表达式的问题。 by @katherinehhh

