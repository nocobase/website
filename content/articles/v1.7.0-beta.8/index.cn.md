### 🎉 新特性

- **[client]** 支持字段 Style 设置 font-size、font-weight、font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh

- **[变量和密钥]** 支持链接按钮的 URL 中使用环境变量 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

### 🚀 优化

- **[client]** 支持筛选按钮中选择字段的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh

- **[工作流：邮件发送节点]** 增加安全字段配置描述。 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66

- **[WEB 客户端]** 增加 Clear Cache 操作的二次确认提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh

- **[通知：电子邮件]** 增加安全字段配置描述。 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66

- **[邮件管理]** 支持重新授权和发件时自动选中账号 by @jiannx

### 🐛 修复

- **[server]** Upgrade 命令可能造成工作流报错 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust

- **[client]**
  - 表单中的子表格高度会随主表单高度一同设置 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh

  - 时间字段在中文语言下提交时报错 invalid input syntax for type time ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh

  - 操作按钮透明状态导致 hover 时按钮 setting 显示异常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

- **[用户认证]**
  - 移除认证器配置项前后的空格、换行符 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile

  - X-Authenticator 缺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos

- **[区块：地图]**
  - 地图区块 密钥管理中不可见字符导致的密钥请求失败的问题 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh

  - 地图管理中密钥必填校验失败 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh

- **[文件管理器]** COS 存储的文件无法访问 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos

- **[操作：导出记录 Pro]** 无法导出附件 by @chenos

- **[备份管理器]** 还原过程中可能引起工作流执行报错 by @gchust

- **[企业微信]** 获取通知配置时需要解析环境变量和密钥 by @2013xile

- **[工作流：审批]**
  - 修复审批流程表格因执行记录删除后报错 by @mytharcher

  - 修复审批人界面配置添加查询节点时的页面崩溃 by @mytharcher

  - 修复空用户造成页面崩溃 by @mytharcher

