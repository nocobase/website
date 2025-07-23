### 🎉 新特性

- **[工作流：并行分支节点]** 为并行分支节点增加“全部执行”的模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher

- **[Redis 消息队列适配器]** 新增基于 Redis 的事件队列适配器 by @mytharcher

### 🚀 优化

- **[server]** 内存队列适配器并发支持未满载时继续处理新任务 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher

- **[database]** 当数据量超过阈值时，自动启用简易分页模式 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie

- **[工作流：人工处理节点]** storePopupContext 支持保存默认的上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe

- **[Redis 消息队列适配器]** Redis 队列适配器并发支持未满载时继续处理新任务 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复 子表单联动规则中缺失当前对象变量的问题 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh

  - 数据选择器设置标题字段无效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe

  - 修复 Markdown 字段在详情视图中未正确渲染为 Markdown 的问题。 ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie

  - 字段变更后，依赖该字段的关系字段没有清空值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe

  - 修复历史数据中日期字段使用废弃的日期变量时显示异常的问题 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh

- **[database]**
  - 修复当数据库表命名风格导致自动开启简单分页模式失效问题。 ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie

  - 修复 PostgreSQL 大数据量导出 XLSX 时的报错 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie

  - 表格区块设置mssql外部数据源默认主键排序，读取列表报错 ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie

- **[auth]** 修复子应用配置中 `secret` 为空，无法登录的问题 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile

- **[数据源管理]** 修复修改外部数据源导致属性重置 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie

- **[操作：批量编辑]** 数据选择器中无法进行批量编辑和批量更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe

- **[工作流]** 修复错误的依赖版本 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher

- **[数据源：外部 Oracle]** 修复修改外部数据源导致属性重置 by @aaaaaajie

- **[工作流：审批]** Link 按钮链接地址为当前页面的弹窗，点击打开会显示 404 by @zhangzhonghe

- **[邮件管理]** 邮件与标签关系表在mysql下异常 by @jiannx

