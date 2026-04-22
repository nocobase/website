### 🎉 新特性

- **[认证：OIDC]** 支持自定义字段映射 by @chenzhizdt

- **[钉钉]** 钉钉：支持通知、钉钉内自动登录、用户同步。 by @chenzhizdt

### 🚀 优化

- **[ai]** AI 员工和知识库增加支持的可上传文件类型（.xlsx, .xls, .csv, .md, .json） ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock

- **[undefined]** 新增阿拉伯语指南及导航翻译 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

### 🐛 修复

- **[data-source-manager]** 修复外部数据源重新同步时百分比字段被重置为数值 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx

- **[client]**
  - 修复添加记录后新增表单默认值配置不生效的问题。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust

  - 修复添加标签页按钮过于贴近右侧边缘的问题 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe

- **[部门]** 修复重复同步部门时无法更新部门排序的问题 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile

- **[数据源：主数据库]** 修复连接数据库视图时集合名称与数据库视图名称不一致导致的字段同步失败问题 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile

- **[工作流：JavaScript 节点]** 修复 `node:vm` 模式下执行脚本的安全问题 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[AI: 知识库]** 修复删除知识库文档时未同步向量库问题 by @cgyrock

- **[企业微信]** 修复企业微信同步部门时未同步部门排序的问题 by @2013xile

