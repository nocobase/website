### 🚀 优化

- **[database]** 支持从环境变量配置连接池的选项 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher

- **[工作流]**
  - 排除 JSON 字段加载以改进执行计划列表加载性能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher

  - 为节点测试运行增加日志 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher

- **[工作流：审批]** 将时间线中的时间调整为绝对时间 by @mytharcher

### 🐛 修复

- **[utils]** 修复使用 Exact day 变量过滤 DateOnly 或 Datetime (without time zone) 字段时筛选错误的问题 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh

- **[cli]**
  - 下载插件异常时 undefined 报错 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx

  - 安装插件时授权文案调整 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx

- **[client]**
  - 对基于 'x-acl-action' 的表单配置项容错 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher

  - 在连接视图中设置字段显示名称（displayName）未生效的问题 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie

  - 工作流人工节点的 UI 配置，设置联动规则不能选择当前表单变量 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe

- **[工作流]** 修复循环引用导致的报错 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher

- **[plugin-commercial]**
  - 开发模式不显示授权弹窗 by @jiannx

  - 临时关闭授权校验弹窗 by @jiannx

  - 调整授权校验逻辑，支持泛域名匹配 by @jiannx

- **[密码策略]** 支持永久锁定用户 by @2013xile

- **[工作流：子流程]** 修复集群模式下的问题 by @mytharcher

- **[工作流：审批]**
  - 补充表单的布局配置项 by @mytharcher

  - 从申请列表的筛选项中移除不可筛选的字段 by @mytharcher

