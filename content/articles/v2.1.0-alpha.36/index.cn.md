### 🎉 新特性

- **[Markdown]** Markdown 区块支持 client v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx

- **[区块：列表]** 列表区块支持 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 优化

- **[flow-engine]** 关闭事件流配置页面时如果存在未保存的数据则显示未保存的提示信息。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

- **[cli]** 将 NocoBase CLI 的安装与管理交互流程迁移到 Inquirer，改进提示体验，并修复相关的安装、技能管理和 Docker 运行时问题。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos

- **[数据源管理]** 优化数据建模接口，支持用 AI 创建评论表，配置外部数据源的关系字段，配置字段验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile

- **[区块：网格卡片]** 更新网格卡片插件支持 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx

- **[区块：iframe]** 新增 iframe 区块的 v2 支持。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 修复

- **[client]**
  - 修复子表格中关系字段设置为仅展示后刷新不显示或不可点击的问题。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx

  - 为表单提交动作补充“提交成功后”设置项。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx

- **[client-v2]** 修复表格中关系字段标题字段选项列表为空的问题 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh

- **[flow-engine]** 修复子模型菜单中关系字段子菜单状态不稳定的问题 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx

- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher

- **[数据表字段：手写签名]** 移动端签名框显示异常 by @chenzhizdt

