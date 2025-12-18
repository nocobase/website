### 🎉 新特性

- **[client]** 创建数据表时可以更改预设 id 字段类型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

### 🚀 优化

- **[client]**

  - 调整表格列宽配置方式改为选项选择 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  - 优化数据选择器样式并设置maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  - 配置项优化（区块、字段、操作） ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
- **[错误处理器]** SQL 语法错误时，不对外暴露数据库原始提示，避免暴露数据库类型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[区块：地图]** 地图字段显示模式为文本时支持超出省略设置 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
- **[工作流]** 支持在工作流的复制（版本）过程中，使用已复制的工作流中使用旧的配置信息来生成新的配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
- **[权限控制]** 不允许给用户设置 root 角色 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复角色拥有新建权限时新建表单中的提交按钮未显示问题 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  - 修复子表格/子表单从已有数据选择时，未选中项提交导致数据被清空的问题 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  - 修复新增表单配置中出现数据范围设置的问题 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  - 标签页的事件流无法保存 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  - 修复标签页隐藏后仍占用间距的问题 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  - 修复关系选择记录器中已选项被错误过滤的问题 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  - 修复表单中 tableoid 字段渲染错误的问题 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
- **[server]**

  - 更新 license-kit 至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  - 支持外部数据源使用 Snowflake ID  (53 bits) 类型字段 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
- **[区块：地图]** 修复菜单切换后地图缩略等级显示不正确的问题 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
- **[工作流]** 修复手动执行时，选择数据组件的加载列表展示不全的问题 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[数据可视化]** 修复图表 SQL 模式选择外部数据源的问题；<br/>修复图表区块请求时展示 loading 的问题；<br/> 修复初始空图表取消配置回滚后报错的问题； ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
- **[AI 员工]** 修复 AI 对话记录文本不换行的问题 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
- **[授权设置]**

  - 修复 plugin-license ts 构建异常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - 授权优化，添加提示信息 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[文件管理器]** 修复预览 OSS 中的 `.txt` 文件时，中文内容显示为乱码的问题 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[数据源：外部 SQL Server]** 修复 `encrypt` 和 `trustServerCertificate` 选项不可用的问题 by @2013xile
- **[数据表：连接外部数据（FDW）]** 修复大写表名表加载失败的问题 by @2013xile
- **[工作流：审批]** 修复无关的审批待办任务被错误的修改状态为“未处理”的问题 by @mytharcher
