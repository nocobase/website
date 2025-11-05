### 🎉 新特性

- **[client]** 子表格支持分页展示数据 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 优化

- **[undefined]** 更新图表插件英文文档 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

- **[telemetry]** 增加在线子应用数量等遥测指标 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[工作流]** 支持工作流中的数据区块使用一致的详情区块配置菜单 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

- **[多应用管理器（已废弃）]** 支持子应用异步排队启动 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

- **[数据可视化]** 添加图表日期时间格式化选项 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

- **[工作流：审批]** 在转签和加签时通知新的审批人 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复了变量相关组件中枚举类型的标签未正确显示为对应语言的问题。 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - 修复设置前端字段验证后，同时设置必填时，必填标志缺失的问题 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - 修复表单中非时区日期清除异常问题 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - 修复联动规则设置的必填字段不能正常工作的问题 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - 修复筛选表单日期字段删除“指定日期”时日期变为 Invalid Date 的问题 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - 修复 Markdown Vditor 字段必填验证失败的问题 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - 筛选表单关系字段支持配置数据范围 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - 修复子表格中时间字段格式错误问题 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

- **[flow-engine]**
  - 当字段筛选值设置为 false 时，数据范围筛选请求不正确 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - 无法解析子表单当前对象变量的关系字段值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - 修复数据区块最后一页删除数据后分页请求参数不对的问题 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

- **[server]** 使用应用名称隔离发布订阅的频道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher

- **[区块：网格卡片]** 修复列表区块和网格卡片区块数据显示同一条的问题 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[多应用管理器（已废弃）]** 子应用状态遥测指标不能正确收集 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

- **[工作流]**
  - 修复了集群模式下工作流调度器无法正确识别空闲状态的问题，该问题可能导致插件未就绪就开始消费队列事件 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher

  - 修复在服务拆分模式下，手动执行带中断节点的工作流一直等待的问题 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher

- **[工作流：审批]**
  - 修复复制审批工作流时报错的问题 by @mytharcher

  - 并行分支中不再支持创建审批节点，避免流程状态导致的问题 by @mytharcher

- **[邮件管理]**
  - 添加同步日志 by @jiannx

  - 给索引添加迁移脚本 by @jiannx

