### 🎉 新特性

- **[AI: 知识库]** 新增需要身份认证的知识库检索接口，以及用于接入远程 NocoBase 知识库的内置 Provider。 by @cgyrock

### 🚀 优化

- **[undefined]** 将根目录包的许可证元数据更正为 Apache-2.0，并将 Node.js 最低版本提升至 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji

- **[通知：站内信]** 修复工作流 v2 通知节点选择站内信或邮箱渠道后前端卡顿的问题 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

- **[钉钉]** 钉钉 ActionCard 按钮链接支持配置为通过外部浏览器打开。 by @chenzhizdt

### 🐛 修复

- **[数据表: SQL]** 限制 SQL 数据表查询 PostgreSQL 系统对象或执行多条语句 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile

- **[区块：评论]** 修复评论区块使用“最后修改人”字段时应显示评论人昵称的问题 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx

- **[AI 员工]**
  - 修复 AI 响应中断后工具调用缺少对应结果而导致 Bedrock 请求报错的问题。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock

  - 修复包含图表的业务分析报告无法打开的问题。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

- **[数据表字段：Markdown(Vditor)]** 修复 Vditor 详情字段默认使用纯文本预览导致 Markdown 图片无法展示的问题，默认改为 HTML 预览。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher

- **[数据源管理]** 修复 v2 数据表编辑器缺少记录唯一标识设置的问题。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh

- **[工作流]** 修复用户相关数据表使用主键作为用户外键时，工作流无法正确选择用户的问题 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher

- **[文件管理器]** 修复 AI 员工工作流节点无法访问 NocoBase 永久文件 URL，以及内部文件被不必要复制到 AI 存储的问题。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock

- **[AI: 知识库]** 知识库上传现已允许选择后端支持的全部文档格式 by @cgyrock

- **[模板打印]** 修复模板打印中稳定文件 URL 的动态图片渲染。 by @hongboji

