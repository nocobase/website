### 🎉 新特性

- **[client]** 支持外部数据源中的 SQL Server BIT 字段 ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie

- **[数据源：外部 SQL Server]** Added support for SQL Server BIT field in external data sources by @aaaaaajie

- **[工作流：审批]** 审批节点结果中增加审批记录变量 by @mytharcher

### 🚀 优化

- **[client]** 网格卡片区块操作栏为空时自动隐藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe

- **[验证]** 移除 `verifiers:listByUser` 接口中响应的认证器配置信息 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

- **[工作流]** 调整 `getCollectionFieldOptions` 方法的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher

- **[工作流：操作前事件]** 调整变量 API by @mytharcher

- **[工作流：审批]** 调整变量 API by @mytharcher

### 🐛 修复

- **[client]**
  - 表格列的文本对齐功能无效 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe

  - 字段赋值：关系字段无法被清空数据 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe

  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher

  - 修复 子表格列字段 style 条件判断无效的问题 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh

  - 筛选表单中，通过关系表字段筛选无效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe

  - 修复公开表单字段默认值中 URL 查询参数变量无效的问题 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh

  - 修复子表格字段切换页面后必填提示不消失的问题 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh

  - 点击筛选按钮报错 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe

- **[database]** 修复 updateOrCreate 和 firstOrCreate 不支持关系更新的问题 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos

- **[工作流]**
  - 修复统计数据被不是主版本的工作流级联删除的问题 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher

  - 修复已执行数在大整型数时检查错误的问题 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher

  - 修复已执行数在大整型数时检查错误的问题 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher

- **[操作：导入记录]** 修复批量导入用户名和密码后无法登录的问题 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie

- **[数据表字段：多对多 (数组)]** 存在 `updatedBy` 字段的时，更新多对多（数组）字段报错 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile

- **[文件管理器]** 修复审批处理中附件字段无法被更新的问题 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher

- **[公开表单]** 公开表单：修复提交表单时报无权限的问题 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

- **[数据表字段：自动编码]** 修复基于字符串的大整数序列计算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher

- **[工作流：审批]**
  - 使用比较代替隐式逻辑以避免类型问题 by @mytharcher

  - 限制只有参与者可以查看审批详情 by @mytharcher

- **[邮件管理]** 邮件删除报错 by @jiannx

