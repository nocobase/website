### 🎉 新特性

- **[Office 文件预览]** 基于微软在线预览支持预览 Office 相关文件 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher

### 🚀 优化

- **[client]** 选中菜单后不自动关闭菜单 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612

- **[通知：站内信]** 站内信消息从 SSE 改为 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher

- **[工作流]** 减少准备执行计划时加载节点结果的数量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher

- **[认证：钉钉]** 在钉钉客户端中将导航栏标题设置为空，而不是显示 "Loading..." by @2013xile

### 🐛 修复

- **[client]**
  - 修复树表格无法展开的问题 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe

  - 修复表格行拖拽排序不符合预期的问题 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu

  - 修复解析字段默认值时出现死循环的问题 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe

  - date field display issue  in association field data selector popup of filter form ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh

- **[工作流：HTTP 请求节点]** 修复竞态问题 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher

- **[工作流]** 修复 MySQL 下保存执行记录时大整型 ID 字段的问题 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher

- **[操作：导出记录]** 修复导出 Excel 时多层关系字段格式不正确的问题。 ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie

- **[数据源：外部 SQL Server]** 修复外部数据源 MSSQL datetime（无时区）字段存储格式不一致 by @aaaaaajie

- **[工作流：审批]** 修复基于外部数据源的审批表单中指派人选择报错问题 by @mytharcher

