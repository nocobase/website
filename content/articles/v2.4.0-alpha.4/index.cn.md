### 🎉 新特性

- **[AI: 知识库]** 新增需要身份认证的知识库检索接口，以及用于接入远程 NocoBase 知识库的内置 Provider。 by @cgyrock

### 🚀 优化

- **[通知：站内信]** 修复工作流 v2 通知节点选择站内信或邮箱渠道后前端卡顿的问题 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 修复

- **[server]** 修复应用在未部署的环境中被意外启动的问题 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile

- **[数据表字段：Markdown(Vditor)]** 修复 Vditor 详情字段默认使用纯文本预览导致 Markdown 图片无法展示的问题，默认改为 HTML 预览。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher

- **[AI 员工]**
  - 修复 AI 员工的知识库提示词缺少检索内容占位符时可能重复查询知识库的问题，并在保存配置时提供明确的校验引导。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock

  - 修复 AI 响应中断后工具调用缺少对应结果而导致 Bedrock 请求报错的问题。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock

- **[区块：评论]** 修复评论区块使用“最后修改人”字段时应显示评论人昵称的问题 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx

- **[数据源管理]** 修复 v2 数据表编辑器缺少记录唯一标识设置的问题。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh

- **[工作流]** 修复用户相关数据表使用主键作为用户外键时，工作流无法正确选择用户的问题 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher

- **[数据表: SQL]** 限制 SQL 数据表查询 PostgreSQL 系统对象或执行多条语句 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile

- **[AI: 知识库]**
  - 修复 AI 知识库的 PGVector 连接测试、ZIP 导入结果展示、文档分段配置继承，以及 Chunk overlap 参数校验问题。 by @cgyrock

  - 知识库上传现已允许选择后端支持的全部文档格式 by @cgyrock

- **[模板打印]** 修复模板打印中稳定文件 URL 的动态图片渲染。 by @hongboji

- **[应用监管器]** 修复应用管理接口响应泄漏子应用身份认证密钥的问题 by @2013xile

