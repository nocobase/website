### 🎉 新特性

- **[工作流：审批]** 支持审批时退回到任意节点 by @mytharcher

### 🚀 优化

- **[client]** 移除文件列表上多余的省略预览浮层 ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher
- **[server]** 在消息队列中使用标准的系统日志 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[database]** 优化了 list API 的统计条数查询，减少资源占用。 ([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie
- **[通知：站内信]** 支持站内信配置消息提示的自动关闭等待时间 ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher
- **[工作流]**

  - 优化工作流准备执行过程，支持使用已加载的节点数据 ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher
  - 使用独立的字段和索引优化获取队列中工作流的查询性能 ([#7448](https://github.com/nocobase/nocobase/pull/7448)) by @mytharcher
  - 调整工作流变量接口，支持预置额外变量列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher
- **[工作流：通知节点]** 支持通知节点测试执行 ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher
- **[工作流：审批]**

  - 支持在自定义通知中使用审批相关变量 by @mytharcher
  - 支持结束节点终止流程后，变更审批状态 by @mytharcher

### 🐛 修复

- **[client]**

  - 联动规则数值字段「不为空」判断错误 ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh
  - 修复 编辑表单区块中，阅读态关系字段在切换为标签组件时渲染失败的问题 ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh
  - 修复公开表单 select/多选/日期/富文本在只读时仍可编辑的问题 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
  - 修复选定日期为最小允许日期时时间选择限制无效的问题 ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh
  - 子表格中附件字段必填校验不生效的问题 ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh
  - 修复在某些场景下，移动端数据选择器弹窗编辑记录时出错的问题 ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe
- **[undefined]** 修复 MySQL 外部数据源中仅按日期字段筛选数据不正确的问题 ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie
- **[database]**

  - 修复了站内消息加载更多时出现的 MySQL 语法错误。 ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie
  - 修复导出 Number 类型字段时的精度问题 ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie
- **[移动端]** 修复移动端不含时区的日期字段未正确显示时分秒 ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh
- **[公开表单]** 修复公开表单字段配置变量作为默认值时未生效的问题 ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh
- **[数据表：树]** 在删除树表之后移除和该表有关的数据库事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile
- **[文件管理器]** 修复文件表的 storage 字段编辑时的报错 ([#7393](https://github.com/nocobase/nocobase/pull/7393)) by @mytharcher
- **[操作：导入记录]**

  - 修复导入xlsx重复数据时报错行数显示错误 ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie
  - 修复了当表的主键为单行文本时导入失败的问题 ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie
- **[工作流]**

  - 补全自动删除工作流的执行状态选项 ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher
  - 修复待办中心路由配置错误导致详情弹窗不显示的问题 ([#7452](https://github.com/nocobase/nocobase/pull/7452)) by @mytharcher
  - 修复待办中心移动端菜单相关问题 ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher
- **[工作流：并行分支节点]** 修复并行分支节点在全部执行模式下状态判断错误导致提前执行完成的问题 ([#7445](https://github.com/nocobase/nocobase/pull/7445)) by @mytharcher
- **[操作：导入记录 Pro]** 修复在 xlsx 导入中使用字符串主键时更新结果不符合预期的问题 by @aaaaaajie
- **[工作流：自定义操作事件]** 修复自定义操作事件初始化后不能直接手动执行的问题 by @mytharcher
- **[工作流：子流程]** 修复子流程重复恢复执行的问题 by @mytharcher
- **[工作流：审批]**

  - 修复审批完成通知中状态文本未翻译的问题 by @mytharcher
  - 对非当前审批人，不展示流程表格中的对应查看按钮 by @mytharcher
  - 补充审批完成通知中自定义模板的状态变量 by @mytharcher
