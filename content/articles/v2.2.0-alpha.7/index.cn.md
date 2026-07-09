### 🎉 新特性

- **[AI 员工]** 新增结构化 AI 使用记录，便于统计使用情况 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile

- **[工作流：审批]** 为 v2 页面新增审批发起和待办区块 by @zhangzhonghe

### 🚀 优化

- **[client-v2]**
  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

- **[AI 员工]** 优化 AI 员工网页搜索，减少不必要的模型推理，并更好地使用各 Provider 的思考控制参数。 ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock

- **[数据可视化]** 改进图表事件脚本，支持安全清理自定义事件处理器 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile

- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

- **[数据源管理]** 在 v2 主数据源中新建数据表菜单中隐藏已废弃的数据表模板。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

- **[区块：评论]** 改进评论提交按钮配置，并修复相关的评论和用户表单提交问题。 ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

### 🐛 修复

- **[client-v2]**
  - 修复 `__webpack_public_path__` 以不带尾随 `/` 的形式注入时客户端运行时静态资源基础路径归一化不一致的问题，并补充了该边界场景的测试覆盖。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos

  - 修复 v2 扫码录入在 Safari 中选择上传二维码图片时识别失败的问题。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh

  - 修复筛选表单关系字段显示默认操作符配置的问题 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe

  - 修复手机端表格快速编辑和选择字段弹窗底部间距问题 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe

  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh

  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust

  - 修复 v2 工作流已执行版本只读状态下仍可修改字段赋值的问题。 ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh

- **[cli]** 修复了 NocoBase CLI 在镜像仓库回退、内置数据库镜像、环境信息显示和提示默认值初始化方面的问题。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos

- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[数据表：树]** 修复树路径集合创建时将内部字段模型元数据传入集合配置的问题。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock

- **[公开表单]** 修复关闭 UI Editor 后公开表单仍可配置的问题 ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe

- **[前端流引擎]** 修复使用本地 AI agent 配置联动规则可能触发渲染错误。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust

- **[用户认证]** 修复重置密码链接打开后进入登录页的问题 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile

- **[工作流]**
  - 修复工作流 v2 条件操作数默认保持单行显示，并在所选变量路径过长时正确换行。 ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn

  - 修复工作流结果文案未翻译和抄送配置弹窗过宽的问题 ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe

  - 修复 workflow v2 任务中心的显示和详情加载问题 ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe

- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh

- **[文件管理器]**
  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
参考文档：[本地存储](docs/docs/cn/file-manager/storage/local.md), [安全指南](docs/docs/cn/security/guide.md)
  - 修复 v2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh

- **[嵌入 NocoBase]** 修复嵌入 Nocobase 页面时 token 污染的问题。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust

- **[AI 员工]** 修复 V2 公开表单页面触发不必要登录态请求的问题 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe

- **[AI: 知识库]** 为 AI 知识库工作流创建文档节点增加覆盖选项，支持替换相同标识的已有文档。 by @cgyrock

- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh

- **[plugin-service-platform]** 禁用服务平台的插件下载接口。 by @jiannx

- **[工作流：子流程]** 修复子流程节点配置选择框按工作流标题搜索不生效的问题。 by @mytharcher

- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile

- **[工作流：审批]**
  - 修复审批人排序和旧版配置入口显示问题 by @zhangzhonghe

  - 修复配置审批工作流条件时报错的问题 by @zhangzhonghe

  - 修复 v2 审批任务详情弹窗缺少已处理审批信息的问题 by @zhangzhonghe

  - 修复 workflow v2 任务中心审批任务的表单和操作问题 by @zhangzhonghe

- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile

