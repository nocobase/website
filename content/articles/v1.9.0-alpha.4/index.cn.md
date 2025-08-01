### 🎉 新特性

- **[server]** 支持通过环境变量配置请求体大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273)) by @aaaaaajie
- **[client]** 表格区块支持添加“列设置”按钮，可以配置表格列的顺序和显隐 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
- **[Office 文件预览]** 基于微软在线预览支持预览 Office 相关文件 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[数据源：主数据库]**

  - 主数据源支持读表功能 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
- **[工作流：并行分支节点]** 为并行分支节点增加“全部执行”的模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher
- **[认证：SAML 2.0]** 支持用户未认证时，自动跳转到 SSO登录页 by @2013xile
- **[Redis 消息队列适配器]** 新增基于 Redis 的事件队列适配器 by @mytharcher

### 🚀 优化

- **[client]** 选中菜单后不自动关闭菜单 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[server]** 内存队列适配器并发支持未满载时继续处理新任务 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher
- **[database]** 当数据量超过阈值时，自动启用简易分页模式 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie
- **[通知：站内信]** 站内信消息从 SSE 改为 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[工作流]**

  - 减少准备执行计划时加载节点结果的数量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
  - 为测试节点的变量增加 JSON 常量类型 ([#7274](https://github.com/nocobase/nocobase/pull/7274)) by @mytharcher
- **[AI 集成]** 移除调用 `saveJob` 的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) by @mytharcher
- **[工作流：人工处理节点]** storePopupContext 支持保存默认的上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe
- **[工作流：JSON 计算]** JSON 计算节点支持可测试 by @mytharcher
- **[Redis 消息队列适配器]** Redis 队列适配器并发支持未满载时继续处理新任务 by @mytharcher
- **[认证：钉钉]** 在钉钉客户端中将导航栏标题设置为空，而不是显示 "Loading..." by @2013xile

### 🐛 修复

- **[utils]** 修复 parseDate 解析时间变量时区处理错误的问题 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[client]**

  - 修复文件预览在空 URL 时报错的问题 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 为本地文件预览补全 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - 修复树表格无法展开的问题 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - 修复表格行拖拽排序不符合预期的问题 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - 修复解析字段默认值时出现死循环的问题 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - 修复筛选表单中关系字段配置数据选择器时弹窗内日期字段展示异常的问题 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
  - 修复下拉关系字段使用 formula 作为标题时未按模糊匹配查询的问题 ([#7280](https://github.com/nocobase/nocobase/pull/7280)) by @katherinehhh
  - 修复 子表单联动规则中缺失当前对象变量的问题 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh
  - 修复 Markdown 字段在详情视图中未正确渲染为 Markdown 的问题。 ([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie
  - 字段变更后，依赖该字段的关系字段没有清空值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe
  - 修复历史数据中日期字段使用废弃的日期变量时显示异常的问题 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh
  - 数据选择器设置标题字段无效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe
- **[database]**

  - 修复当数据库表命名风格导致自动开启简单分页模式失效问题。 ([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie
  - 修复 PostgreSQL 大数据量导出 XLSX 时的报错 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie
  - 表格区块设置mssql外部数据源默认主键排序，读取列表报错 ([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie
- **[auth]** 修复子应用配置中 `secret` 为空，无法登录的问题 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile
- **[文件管理器]** 修复上传文件时存储引擎外键的权限问题 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[工作流]**

  - 修复执行器退出时对 `undefined` 结果的处理 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - 修复 MySQL 下保存执行记录时大整型 ID 字段的问题 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
  - 修复错误的依赖版本 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher
- **[工作流：HTTP 请求节点]** 修复竞态问题 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[操作：导出记录]** 修复导出 Excel 时多层关系字段格式不正确的问题。 ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[数据源管理]** 修复修改外部数据源导致属性重置 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie
- **[操作：批量编辑]** 数据选择器中无法进行批量编辑和批量更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe
- **[数据源：外部 Oracle]** 修复修改外部数据源导致属性重置 by @aaaaaajie
- **[数据源：外部 SQL Server]** 修复外部数据源 MSSQL datetime（无时区）字段存储格式不一致 by @aaaaaajie
- **[工作流：子流程]** 修复子流程假死的问题 by @mytharcher
- **[工作流：审批]**

  - 修复基于外部数据源的审批表单中指派人选择报错问题 by @mytharcher
  - Link 按钮链接地址为当前页面的弹窗，点击打开会显示 404 by @zhangzhonghe
- **[邮件管理]**

  - 添加rawId字段，用于性能优化 by @jiannx
  - html中ref属性导致渲染异常 by @jiannx
  - 邮件与标签关系表在mysql下异常 by @jiannx
