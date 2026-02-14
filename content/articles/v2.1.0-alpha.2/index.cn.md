### 🎉 新特性

- **[工作流：审批]** 为审批相关 API 增加权限控制 by @mytharcher

- **[认证：钉钉]** 支持通过 `unionId` 绑定用户 by @2013xile

### 🚀 优化

- **[AI: 知识库]** 优化构建产物，缩小AI知识库插件的包体积 by @cgyrock

- **[多空间]** 多空间权限控制接入acl by @jiannx

- **[操作：导出记录 Pro]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 by @katherinehhh

- **[工作流：审批]**
  - 移除对 JS Field 的支持 by @zhangzhonghe

  - 简化查询参数，并提升查询性能 by @mytharcher

  - 增加对 API 的访问控制，以避免通过 API 越权操作数据 by @mytharcher

  - 为发起人数据范围增加迁移后的修复逻辑 by @mytharcher

- **[认证：钉钉]** 默认使用 `userid` 关联用户，并保持已有认证器使用手机号的兼容性 by @2013xile

### 🐛 修复

- **[多空间]**
  - 添加迁移脚本移除空间字段中 x-ready-pretty by @jiannx

  - 关联数据添加时关联空间 by @jiannx

  - 空间选择器颜色跟着主题 by @jiannx

  - 空间字段删除read-pretty属性 by @jiannx

- **[字段组件：掩码]** 修复掩码字段配置弹窗里面无法正确加载全部用户角色的问题。 by @gchust

- **[操作：导入记录 Pro]**
  - 修复异步导入触发的工作流事件延迟执行的问题 by @mytharcher

  - 修复导入结果的统计数字和消息翻译 by @mytharcher

- **[AI: 知识库]** 修复构建后系统无法启动问题 by @cgyrock

- **[数据源：REST API]** 为请求上下文增加容错，避免方法不存在时的报错 by @mytharcher

- **[工作流：自定义操作事件]** 修复触发自定义操作工作流时参数和载荷数据不正确的问题 by @mytharcher

- **[操作：导出记录 Pro]** 修复主应用未启用导入/导出专业版插件时，子应用执行异步导入/导出任务报错问题 by @cgyrock

- **[工作流：Webhook 触发器]**
  - 修复子应用中 webhook 请求返回 404 错误的问题 by @mytharcher

  - 修复未配置请求体解析时触发器数据中该数据缺失的问题 by @mytharcher

- **[工作流：子流程]** 修复工作流链接的路由路径 by @mytharcher

- **[模板打印]**
  - 修复模板打印按钮模板配置页字段列表显示异常的问题 by @katherinehhh

  - 字段相同 key 导致渲染错误 by @jiannx

  - 修复配置模板弹窗被遮挡的问题 by @zhangzhonghe

  - 模板打印的配置模板弹窗移除底部按钮 by @katherinehhh

  - 复了联合角色时打印按钮权限逻辑错误 by @jiannx

  - 支持空间字段 by @jiannx

  - 2.0版本里显示空间字段 by @jiannx

- **[文件存储：S3 (Pro)]** 修复文件重命名模式不起作用的问题 by @mytharcher

- **[数据可视化：ECharts]** 修复 ECharts 拼写错误 by @heziqiang

- **[工作流：审批]**
  - 修复审批中的数据被删除后导致的接口报错 by @mytharcher

  - 修复保存前模式下手动执行报错的问题 by @mytharcher

  - 修复“数据保存前”模式下，审批记录弹窗中审批数据的关系字段不展示的问题 by @mytharcher

  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher

  - 修复“我的申请”详情弹窗中字段值丢失的问题 by @mytharcher

  - 修复 1.x 审批记录弹窗报错的问题 by @mytharcher

  - 修复列表 API 加载时由于追加 JSON 字段导致的性能问题（MySQL） by @mytharcher

  - 修复加载详情数据时使用了错误的 id 参数 by @mytharcher

  - 修复并发提交导致流程被重复恢复执行的问题 by @mytharcher

  - 修复由于缺失依赖导致的构建错误 by @mytharcher

  - 修复错误的参数导致的加载数据错误问题 by @mytharcher

  - 修复分支模式的审批未能正确退回至指定节点的问题 by @mytharcher

  - 修复已有人员范围的工作流禁用后，对用户增加角色时的报错问题 by @mytharcher

  - 修复由于缺失 `ValueBlock.Result` 组件注入导致的值区块内容不展示的问题 by @mytharcher

  - 修复审批任务卡片字段不显示的问题 by @zhangzhonghe

  - 修复筛选字段在待办中心无法正常使用的问题 by @mytharcher

- **[邮件管理]**
  - 修复会话链 by @jiannx

  - 修复outlook回复链路偶尔断开 by @jiannx

  - 选中文本时正文不折叠。修复附件下载失败 by @jiannx

  - 修复多个用户间相同邮箱邮件问题，性能优化 by @jiannx

  - add filters to the management by @jiannx

  - 显示回复全部按钮和数据范围支持筛选子邮件 by @jiannx

  - 修复邮箱配置弹窗被遮挡的问题 by @zhangzhonghe

- **[企业微信]** 修复用户缺少手机号时不能自动注册的问题 by @2013xile

- **[迁移管理]** 修复迁移异常后打印异常对象所包含sql过大容易卡死进程的问题 by @cgyrock

