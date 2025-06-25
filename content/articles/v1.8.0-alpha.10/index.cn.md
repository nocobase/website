### 🎉 新特性

- **[数据源管理]** ✨ 支持外部数据源按需加载数据表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie

- **[工作流：HTTP 请求节点]** 支持 `multipart/form-data` 类型的请求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

- **[数据源：外部 SQL Server]** 支持外部数据源按需加载数据表 by @aaaaaajie

### 🐛 修复

- **[client]**
  - URL 查询参数变量为空时，数据范围的条件没有被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe

  - 修复日期字段在含时间格式下的范围约束错误 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh

- **[移动端]** 修复移动端弹窗的层级问题 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe

- **[日历]** 修复日历区块快速创建事项时，表单日期字段异常问题 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

- **[工作流：审批]**
  - 修复变量历史遗留 API 导致的错误 by @mytharcher

  - 修复移动端样式 by @mytharcher

  - 修复审批关联表被删除后的报错 by @mytharcher

- **[邮件管理]** 附件不显示 by @jiannx

