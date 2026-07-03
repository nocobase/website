### 🐛 修复

- **[cli]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，创建版本事件发布失败的问题。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock

- **[client-v2]**
  - 修复 v2 Markdown 渲染和编辑中的 iframe 清理问题。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh

  - 修复路由弹窗新建表单丢失预填字段值的问题，例如日历 V2 的开始日期和结束日期。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx

  - 修复 V2 表格数据范围中 URL 查询参数缺失时导致表格数据无法查询的问题。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx

  - 无法通过 ctx.setFormValues 设置多行文本字段值。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust

- **[AI 员工]**
  - 修复下划线数据库命名环境中 AI checkpoint 清理失败的问题。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock

  - 修复 AI 员工工作流节点在循环中前一次工具调用后无法正确恢复后续节点的问题。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock

- **[文件管理器]** 隐藏文件管理器的附件列表接口，请求该接口时返回 404。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher

- **[工作流]** 修复工作流执行记录中节点结果可能一直显示加载中的问题。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher

- **[备份管理器]**
  - 修复 PostgreSQL 和 Kingbase 备份恢复命令在路径或参数包含空格、特殊字符时执行异常的问题。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock

  - 修复新建备份文件无法上传至云存储的问题。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust

- **[数据可视化]** 修复图表区块在关闭弹窗时会触发不必要的刷新的问题。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust

- **[UI 模板]** 修复子表单错误的显示字段模板菜单的问题。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust

- **[移动端（已废弃）]** 修复 v1 桌面端响应式布局中查看详情和选择字段弹出方式不正确的问题 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe

- **[版本控制]** 修复部分 RabbitMQ 服务不允许队列名包含 `:` 和 `@` 时，版本控制创建版本失败的问题。 by @cgyrock

- **[工作流：审批]** 修复无配置权限时打开审批详情可能报错的问题 by @zhangzhonghe

