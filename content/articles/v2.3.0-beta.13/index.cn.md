### 🎉 新特性

- **[AI 员工]**
  - AI 员工对话响应返回引用的知识库文档 ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock

  - 支持将 OpenCode Zen / Go 作为 LLM 服务，自动发送其要求的会话请求头；DeepSeek Flash 系列模型支持图片附件，联网搜索仅对 DeepSeek V4 Pro 开放，避免 Flash 模型静默忽略搜索而返回过时信息 ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

- **[AI: 知识库]** 为 AI 员工对话响应解析引用的知识库文档 by @cgyrock

### 🚀 优化

- **[client-v2]** 表格列快捷编辑：关系字段支持设置数据范围 ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 修复

- **[client-v2]**
  - 修复审批表单中关系字段快速创建弹窗缺少「当前弹窗上级记录」变量的问题 ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe

  - 修复退出登录后换账号登录会显示 404 页面的问题 ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe

  - 修复审批表单子表格中的附件和文件关系字段修改无法保存的问题。 ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher

- **[create-nocobase-app]** 升级 `js-yaml` 和 `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile

- **[client]** 修复工作流人工节点表单在同一行排列多个字段时布局报错或无法保留的问题。 ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher

- **[工作流]** 修复数据库同步时未创建 jobs 状态与 ID 联合索引的问题。 ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher

- **[工作流：聚合查询节点]** 修复聚合查询节点通过对多关联选择关系表后无法选择聚合字段的问题。 ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher

- **[区块：网格卡片]** 修复网格卡片简单分页切换无效的问题，并使每页数量选项与配置的列数保持倍数关系 ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx

- **[操作：批量更新]** 修复批量更新操作提交数据表选项字段中已不存在的配置值的问题。 ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx

- **[迁移管理]** 将 `decompress` 升级为 `@xhmikosr/decompress` 11.1.4 by @2013xile

