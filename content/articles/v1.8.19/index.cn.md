### 🎉 新特性

- **[工作流：审批]** 为通知配置增加内联模板类型 by @mytharcher

### 🚀 优化

- **[client]** 支持 Select 组件在阅读态时可以展示字符串标识的图标 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher

- **[database]** 优化 ACL Meta 查询性能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie

- **[移动端]** 优化移动端弹窗组件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

### 🐛 修复

- **[database]** 修复了在读取 Postgres 外部数据表时，会错误包含其他 schema 视图的问题 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie

- **[区块：模板]** 修复了邮件区块在继承模版中不可见的问题 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust

- **[操作：导入记录 Pro]** 导入识别重复记录时，禁止设置关系字段 by @aaaaaajie

- **[工作流：审批]** 修复加签时加载用户列表为空的问题 by @mytharcher

- **[迁移管理]** 生成迁移文件的时候跳过最新版本 pg_dump 生成的 `\restrict` 和 `\unrestrict` 命令，解决还原报错的问题 by @2013xile

