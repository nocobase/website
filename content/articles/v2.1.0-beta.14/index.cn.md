### 🎉 新特性

- **[日历]** 日历区块 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

- **[AI 员工]** 完善 AI 员工对上传文档解析能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

- **[区块：树]** 新增树筛选区块 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx

- **[邮件管理]** gmail 支持邮件别名发送 by @jiannx

### 🚀 优化

- **[undefined]**
  - 新增阿拉伯语指南及导航翻译 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

  - 同步环境变量与集群模式文档的多语言版本，保持与最新中文内容一致。 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

  - 新增阿拉伯语文档首页翻译 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765

  - 在 README.zh-CN.md 中添加目录 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765

  - 为法语 README 添加目录 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane

  - 文档：新增 get-started 入门页面的阿拉伯语翻译 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765

- **[logger]** 请求日志增加 `referer` 信息 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[client]** 添加表单必填校验开关 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

- **[database]** 优化 repository count 查询，仅在存在 include 关联时启用 distinct。 ([#9094](https://github.com/nocobase/nocobase/pull/9094)) by @mytharcher

- **[部门]** 在界面中显示部门表的 `parentId` 外键字段 ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

- **[AI 员工]** AI 员工选择区块后把表单附件填充到发送框附件上传区域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[工作流：人工处理节点]** 对工作流待办相关表使用简单分页模式，以优化列表性能表现 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[工作流：审批]** 对 `approvals` 和 `approvalRecords` 表使用简单分页模式，以优化列表性能表现 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复字段赋值修改子表格里的值后出现数据污染的问题。 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust

  - 修复页面配置模式下标签页高度和宽度异常的问题 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe

  - 修复字段值配置里关系字段组件不正确的问题。 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust

  - 修复单选字段在字段规则配置中可选项为空 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - 修复子表格默认值配置不生效的问题。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

  - 子表格添加多对多报错 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx

  - 修复子表格的数据选择按钮打开的弹窗中无法正确解析上级项变量值的问题。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust

- **[data-source-manager]**
  - 修复数据库同步后 sequence 字段可能被改成 string 的问题 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile

  - 修复文件表字段同步时误删 `preview` 字段的问题 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile

- **[database]** 修复递归树预加载和分组排序初始化中的 SQL 注入风险 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile

- **[undefined]** 修复自定义资源区块在资源不存在时的渲染报错问题 ([#9095](https://github.com/nocobase/nocobase/pull/9095)) by @Molunerfinn

- **[utils]** 为服务端发送 HTTP 请求增加安全控制，以避免可能的 SSRF 隐患 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env)
- **[flow-engine]**
  - 修复外部数据源多对一字段无法在表格区块中添加 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx

  - 修复页面可见性切换时 observer 随机报错的问题 ([#9067](https://github.com/nocobase/nocobase/pull/9067)) by @zhangzhonghe

- **[数据源：主数据库]** 修复连接数据库视图时集合名称与数据库视图名称不一致导致的字段同步失败问题 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile

- **[文件管理器]** 当预览 URL 缺失时返回 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

- **[部门]**
  - 修复保存用户部门后主部门未同步或同步错误的问题 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

  - 修复部门管理中的部门列表未按 `sort` 字段顺序显示的问题 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile

- **[工作流：JavaScript 节点]** 修复 `node:vm` 模式下执行脚本的安全问题 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[数据表: SQL]** 修复 SQL 数据表更新时缺少 SQL 校验的问题 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile

- **[数据可视化]** 修复图表区块在聚合查询中排序未使用度量和维度别名的问题 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile

- **[通知：站内信]** 修复接收人组件工作不正常的问题 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[AI 员工]** 修复 google-gen-ai 的 LLM 服务 baseURL 配置不生效问题 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[通知管理]** 修复站内信通知在工作流场景下的发送性能问题，降低同步发送路径阻塞 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

- **[权限控制]** 修复 ACL 下使用空数组清空关联值可能不生效的问题 ([#9059](https://github.com/nocobase/nocobase/pull/9059)) by @2013xile

- **[数据表字段：代码]** 修正代码字段的 UI 类型 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile

- **[邮件管理]** 移除邮件发送成功后的表单关闭提示 by @jiannx

