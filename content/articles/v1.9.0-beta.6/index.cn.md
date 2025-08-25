### 🎉 新特性

- **[client]** 为 Input、TextArea、URL 和 InputNumber 组件添加了"自动聚焦"选项，启用后输入框在页面初始渲染时会自动获得焦点 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[异步任务管理器]** 支持通过环境变量和队列进行异步任务服务拆分 ([#7241](https://github.com/nocobase/nocobase/pull/7241)) by @mytharcher
- **[Office 文件预览]** 基于微软在线预览支持预览 Office 相关文件 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[认证：SAML 2.0]** 增加签名相关配置项 by @2013xile
- **[工作流：审批]**

  - 为通知配置增加内联模板类型 by @mytharcher
  - 支持在同一个工作流中使用统一的待办任务标题 by @mytharcher

### 🚀 优化

- **[database]** 优化 ACL Meta 查询性能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[client]**

  - 支持 Select 组件在阅读态时可以展示字符串标识的图标 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
  - 新增“前天”日期变量支持 ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - 优化切换弹窗标签页的性能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
  - 选中菜单后不自动关闭菜单 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[移动端]** 优化移动端弹窗组件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe
- **[工作流]**

  - 将节点选择菜单更新为两列布局，以提升信息密度使用户能同时查看更多选项 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
  - 修复不稳定的测试用例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - 工作流禁用后也展示正常的标题 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
  - 减少准备执行计划时加载节点结果的数量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
- **[授权设置]** 授权设置中，每次拷贝最新InstanceID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx
- **[用户认证]** 使用 token 参数登录成功后，移除 URL token 参数 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[通知：站内信]**

  - 移除通过 `console.log` 输出的 SQL 日志 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile
  - 站内信消息从 SSE 改为 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[Office 文件预览]** 为预览 `.odt` 文件增加支持 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[操作：导入记录 Pro]** 支持通过环境变量和队列对导入导出的服务进行拆分 by @mytharcher
- **[工作流：JavaScript 节点]** 将日志改为使用基础缓存以避免集群模式的问题 by @mytharcher
- **[模板打印]** 支持多对多数组字段 by @jiannx
- **[备份管理器]** 优化 mysql 数据库备份操作性能 by @gchust
- **[认证：钉钉]** 在钉钉客户端中将导航栏标题设置为空，而不是显示 "Loading..." by @2013xile
- **[迁移管理]** 支持通过环境变量和队列拆分创建迁移的后台任务 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复附件 URL 字段的 URL 中包含查询参数时图标展示不正确的问题 ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
  - 修复 联动规则为空判断时,数字0 也视为空的问题 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - 修复链接按钮中文字换行的问题 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
  - 修复表单的多列布局在移动端没有变成单列布局的问题 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - 修复批量删除数据表时的错误 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - 修复单独配置权限时未默认选中已保存数据范围的问题。 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
  - 修复变量原始字符串会随表单提交的问题 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
  - 当在筛选表单中使用变量设置字段默认值，且变量值为空时，输入框中会显示变量的原始字符串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
  - 修复 操作面板鼠标移上去 tooltip 显示 [object Object] 的问题 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - 修复解析字段默认值时出现死循环的问题 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - 修复文件预览在空 URL 时报错的问题 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 修复树表格无法展开的问题 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - 为本地文件预览补全 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - 修复表格行拖拽排序不符合预期的问题 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - 修复筛选表单中关系字段配置数据选择器时弹窗内日期字段展示异常的问题 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
- **[database]** 修复了在读取 Postgres 外部数据表时，会错误包含其他 schema 视图的问题 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[server]** 部分请求没有 `ctx.action`, 导致审计日志中间件报错 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[undefined]** 将新插件加入到预置集合 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[utils]** 修复 parseDate 解析时间变量时区处理错误的问题 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[区块：模板]** 修复了邮件区块在继承模版中不可见的问题 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[移动端]**

  - 修复移动端日期字段显示为错误格式的问题 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
  - 修复移动端审批弹窗中的表单提交的数据不正确的问题 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
  - 修复移动端日期组件使用日期变量限制可选范围时日期显示异常的问题 ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[工作流]**

  - 修复编辑工作流分类时报错和表单数据丢失的问题 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
  - 修复待办中心的页面标题翻译 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
  - 重构添加节点的菜单，并修复其导致的工作流画布渲染的性能问题 ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - 修复获取单条待办项目时的筛选条件错误问题 ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - 修复字段选择框的搜索关键词匹配问题 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - 避免应用停止时调用队列报错 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
  - 修复执行器退出时对 `undefined` 结果的处理 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - 修复 MySQL 下保存执行记录时大整型 ID 字段的问题 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
- **[工作流：邮件发送节点]** 修复邮件节点可能存在恢复执行不正常的问题 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[Office 文件预览]**

  - 修复上传文件至附件 URL 字段报错的问题 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
  - 支持 URL 中包含 `.docx`, `.xlsx` 和 `.pptx` 的文件预览 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[文件管理器]**

  - 移除文件上传大小的上限提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
  - 为文件表增加 `storageId` 字段以支持权限配置 ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
  - 修复上传文件时存储引擎外键的权限问题 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[通知：站内信]**

  - 修复多语言翻译 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
  - 修复接收到站内信消息但未弹出展示的问题 ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[日历]** 修复了日历事件悬停提示框未显示事件标题字段内容，显示为 “[object Object]” 的问题 ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[数据表字段：公式]** 修复公式输入由于变量类型导致无法通过验证的问题 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[工作流：并行分支节点]** 修复 MySQL 下并行分支节点在恢复执行后假死的问题 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[工作流：抄送]** 修复区块无法移除的问题 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[数据可视化]** 图表区块中筛选日期字段设置默认值为日期变量时显示不正确的问题 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[数据表：树]** 修复树表路径同步逻辑 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu
- **[工作流：HTTP 请求节点]** 修复竞态问题 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[工作流：动态表达式计算节点]** 修复旧 API 导致的错误 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[操作：导出记录]** 修复导出 Excel 时多层关系字段格式不正确的问题。 ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[操作：导入记录 Pro]** 导入识别重复记录时，禁止设置关系字段 by @aaaaaajie
- **[数据源：外部 SQL Server]** 修复外部数据源 MSSQL datetime（无时区）字段存储格式不一致 by @aaaaaajie
- **[工作流：自定义操作事件]** 在对多条数据的触发成功后清空选中行 by @mytharcher
- **[工作流：子流程]** 修复子流程假死的问题 by @mytharcher
- **[模板打印]** 多行数据中单选字段打印 by @jiannx
- **[文件存储：S3 (Pro)]**

  - 修复 IAM 授权方式无法上传文件的问题 by @mytharcher
  - 弃用可能造成问题的 `attachmentField` 参数 by @mytharcher
- **[工作流：审批]**

  - 修复加载审批记录中外部数据源数据出现 404 的问题 by @mytharcher
  - 为加签和转签的任务增加标题 by @mytharcher
  - 修复基于外部数据源的审批表单中指派人选择报错问题 by @mytharcher
  - 修复加签时加载用户列表为空的问题 by @mytharcher
  - 修复提交草稿时更新关系字段的问题 by @mytharcher
  - 修复审批原始详情区块中联动规则失效的问题 by @mytharcher
- **[备份管理器]** 备份大量文件时，任务状态可能提前显示为“已成功”，但实际仍在进行中 by @gchust
- **[迁移管理]** 生成迁移文件的时候跳过最新版本 pg_dump 生成的 `\restrict` 和 `\unrestrict` 命令，解决还原报错的问题 by @2013xile
