### 🚀 优化

- **[client]**

  - 新增“前天”日期变量支持 ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - 优化切换弹窗标签页的性能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
- **[工作流]**

  - 修复不稳定的测试用例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - 待办卡片中的工作流标题，即使对应版本禁用后也不再展示删除线 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
- **[Office 文件预览]** 为预览 `.odt` 文件增加支持 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[备份管理器]** 优化 mysql 数据库备份操作性能 by @gchust

### 🐛 修复

- **[client]**

  - 修复表单的多列布局在移动端没有变成单列布局的问题 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - 修复批量删除数据表时的错误 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - 修复单独配置权限时未默认选中已保存数据范围的问题。 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
- **[工作流]**

  - 重构添加节点的菜单，并修复其导致的工作流画布渲染的性能问题 ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - 修复获取单条待办项目时的筛选条件错误问题 ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - 修复字段选择框的搜索关键词匹配问题 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - 避免应用停止时调用队列报错 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
- **[通知：站内信]** 修复接收到站内信消息但未弹出展示的问题 ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[移动端]** 修复移动端日期组件使用日期变量限制可选范围时日期显示异常的问题 ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[文件管理器]** 为文件表增加 `storageId` 字段以支持权限配置 ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
- **[工作流：并行分支节点]** 修复 MySQL 下并行分支节点在恢复执行后假死的问题 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[工作流：抄送]** 修复区块无法移除的问题 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[Office 文件预览]** 支持 URL 中包含 `.docx`, `.xlsx` 和 `.pptx` 的文件预览 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[数据可视化]** 图表区块中筛选日期字段设置默认值为日期变量时显示不正确的问题 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[工作流：审批]**

  - 修复审批原始详情区块中联动规则失效的问题 by @mytharcher
  - 修复提交草稿时更新关系字段的问题 by @mytharcher
