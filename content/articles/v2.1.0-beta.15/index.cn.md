### 🎉 新特性

- **[区块：看板]** 看板区块 v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx

- **[认证：OIDC]** 支持自定义字段映射 by @chenzhizdt

- **[钉钉]** 钉钉：支持通知、钉钉内自动登录、用户同步。 by @chenzhizdt

### 🚀 优化

- **[build]** 知识库支持通过zip批量上传文件 ([#9206](https://github.com/nocobase/nocobase/pull/9206)) by @cgyrock

- **[ai]** AI 员工和知识库增加支持的可上传文件类型（.xlsx, .xls, .csv, .md, .json） ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock

- **[工作流]** 优化执行计划列表的查询性能 ([#9214](https://github.com/nocobase/nocobase/pull/9214)) by @mytharcher

- **[AI: 知识库]** 知识库支持通过zip批量上传文件 by @cgyrock

- **[工作流：审批]** 为审批记录表的列增加索引，以优化列表和提交操作的性能 by @mytharcher

### 🐛 修复

- **[database]** 修复 decimal 字段设置验证规则后可能拒绝有效数字输入的问题 ([#9204](https://github.com/nocobase/nocobase/pull/9204)) by @2013xile

- **[client]**
  - 修复添加标签页按钮过于贴近右侧边缘的问题 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe

  - 修复集合使用非主键唯一标识时，弹窗关联区块和弹窗记录变量使用了错误记录标识的问题 ([#9191](https://github.com/nocobase/nocobase/pull/9191)) by @2013xile

  - 修复添加记录后新增表单默认值配置不生效的问题。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust

- **[data-source-manager]**
  - 修复可为空字段同步问题 ([#9189](https://github.com/nocobase/nocobase/pull/9189)) by @2013xile

  - 修复外部数据源重新同步时百分比字段被重置为数值 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx

- **[AI 员工]**
  - 修复 AI 员工选中表单的附件URL字段值丢失问题 ([#9216](https://github.com/nocobase/nocobase/pull/9216)) by @cgyrock

  - 修复 AI 员工填表单时无法填写关联字段值的问题 ([#9182](https://github.com/nocobase/nocobase/pull/9182)) by @cgyrock

- **[用户]** 修复个人资料编辑中动态配置字段未加载最新用户数据的问题 ([#9205](https://github.com/nocobase/nocobase/pull/9205)) by @2013xile

- **[日历]** 不将日历操作注册到其他块 ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx

- **[部门]** 修复重复同步部门时无法更新部门排序的问题 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile

- **[工作流：JavaScript 节点]** 修复 `node:vm` 模式下执行脚本的安全问题 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[数据源管理]** 修复外部数据源排序字段的分组排序无法清空的问题 ([#9203](https://github.com/nocobase/nocobase/pull/9203)) by @2013xile

- **[多空间]** 修复空间权限校验未找到数据表报错 by @jiannx

- **[AI: 知识库]** 修复删除知识库文档时未同步向量库问题 by @cgyrock

- **[工作流：审批]** 修复审批转签和加签搜索无法检索前 200 条之外用户的问题 by @zhangzhonghe

- **[企业微信]** 修复企业微信同步部门时未同步部门排序的问题 by @2013xile

