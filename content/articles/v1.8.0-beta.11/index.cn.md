### 🎉 新特性

- **[工作流：HTTP 请求节点]** 支持 `multipart/form-data` 类型的请求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

### 🚀 优化

- **[工作流]**
  - 优化移动端样式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher

  - 调整 `getCollectionFieldOptions` 方法的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher

- **[公开表单]** 优化公开表单中日期组件的性能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe

- **[工作流：操作前事件]** 调整变量 API by @mytharcher

- **[工作流：审批]** 调整变量 API by @mytharcher

### 🐛 修复

- **[client]**
  - 修复日期字段在含时间格式下的范围约束错误 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh

  - URL 查询参数变量为空时，数据范围的条件没有被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe

- **[工作流]**
  - 修复待办中心加载记录的参数 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher

  - 修复已执行数在大整型数时检查错误的问题 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher

  - 修复统计数据被不是主版本的工作流级联删除的问题 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher

- **[移动端]** 修复移动端弹窗的层级问题 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe

- **[WEB 客户端]** 修复设置角色菜单权限后页面下区块不显示的问题 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie

- **[日历]** 修复日历区块快速创建事项时，表单日期字段异常问题 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

- **[操作：导入记录]** 修复批量导入用户名和密码后无法登录的问题 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie

- **[工作流：审批]**
  - 修复审批关联表被删除后的报错 by @mytharcher

  - 修复移动端样式 by @mytharcher

  - 修复审批触发器中申请人变量名的问题 by @mytharcher

  - 限制只有参与者可以查看审批详情 by @mytharcher

  - 修复变量历史遗留 API 导致的错误 by @mytharcher

