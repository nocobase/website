### 🎉 新特性

- **[IdP: OAuth]** 新增 IdP: OAuth 插件，支持 MCP 服务通过 OAuth 认证 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

- **[AI 员工]** 定时清除AI会话Checkpoint数据 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock

- **[应用监管器]** 应用列表支持筛选<br />启动和停止增加二次确认<br />应用状态按环境名排序 by @2013xile

### 🚀 优化

- **[server]** 改进 pm add 逻辑 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos

- **[client]** 支持关闭弹窗二次确认提示。 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust

- **[undefined]** 在保持 v1 不变的前提下，新增 client-v2 独立入口，并使用 rsbuild 独立打包。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn

- **[工作流]**
  - 修复优雅停机时内存中的事件未能完全处理的问题 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

  - 为执行记录列表增加筛选功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher

- **[异步任务管理器]** 异步任务增加支持worker发送异常消息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

- **[工作流：审批]** 当触发器中未配置数据表时，禁止配置审批人的界面 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复非管理员无法清除关联字段值 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx

  - 修复子表格中的“选择数据”弹窗第二次打开时无法正确加载的问题。 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust

- **[resourcer]** 避免 `filterByTk` 参数数组超过 100 个时被自动转换成对象 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile

- **[server]** 修复工作进程发送应用生命周期事件导致服务实例停止的问题 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher

- **[数据源管理]** 修复AI员工创建的数据表总是缺少”创建人“、”修改人“字段的问题 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock

- **[AI 员工]**
  - 修复LLM服务指定的URL在调用文本嵌入模型时不生效的问题 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock

  - 修复AI插件升级迁移脚本中可能出现的变量未定义错误 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock

- **[操作：导入记录 Pro]**
  - 修复由于重复读取文件流导致超过约 30 列的文件导入报错的问题 by @mytharcher

  - 修复同步模式下导入报错的问题 by @mytharcher

  - 修复子应用中处理导入后 `beforeStop` 事件未触发的问题 by @mytharcher

  - 修复异步导入出错后异步任务不结束的问题 by @cgyrock

  - 修复懒加载导致的 SES 错误 by @mytharcher

- **[模板打印]** 修复 sql 数据表打印报错 by @jiannx

- **[工作流：审批]** 修复加签时的并发问题 by @mytharcher

- **[邮件管理]** 修复邮件不存在时页面报错 by @jiannx

- **[迁移管理]** 修复上传迁移时，目标环境不存在新建表而抛错导致中断迁移的问题 by @Andrew1989Y

