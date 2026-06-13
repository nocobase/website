### 🚀 优化

- **[cli]**
  - 优化不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills 支持指定版本更新 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 修复

- **[client]** 修复水平子表单中字段过窄导致数据不显示的问题 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[数据源管理]**

  - 修复 v1 外部数据源 Configure fields 页面反复重渲染导致字段编辑弹窗内容为空的问题。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修复 v1 数据源管理中删除当前集合分类后，All collections 标签页可能显示为空的问题。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[异步任务管理器]** 修复异步任务 worker 日志中的请求 ID 错误问题 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流：SQL 节点]** 修复部分 beta 版本用户跳过 SQL 工作流历史模板变量迁移的问题。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI 员工]**

  - 修复工作流 LLM节点消息配置丢失问题。 ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - 修复 AI 员工对话框粘贴的附件无法删除问题。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[区块：看板]** 修复日历等弹窗支持URL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[工作流：审批]** 修复 v2 审批表单中关联数据显示不出来的问题 by @zhangzhonghe
