### 🎉 新特性

- **[工作流：审批]** 支持“数据保存前”的触发模式 by @mytharcher

### 🚀 优化

- **[server]** 增加 Gateway 层日志 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

- **[工作流：通知节点]** 通知节点增加“忽略失败”选项，以支持发送失败时继续执行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复操作面板中的扫描二维码无法配置联动规则 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh

  - 修复弹窗内 iframe 区块联动规则失效问题 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh

- **[database]** 跳过 MySQL JSON 列的默认值同步处理 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile

- **[工作流]**
  - 修复在服务拆分模式下，工作流内存等待队列处理不当导致部分工作流不执行的问题 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher

  - 修复创建延迟启动的执行计划的状态初始值 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher

  - 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

- **[权限控制]** 修复 `resourceManager` 的中间件顺序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[工作流：人工处理节点]** 修复工作流停用后人工处理任务从待办中心消失的问题 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher

- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[工作流：审批]**
  - 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher

  - 修复语言翻译 by @mytharcher

