### 🎉 新功能

* **[AI 员工]** 新增 OrcaRouter 作为 LLM 提供商。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 优化

- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 修复

- **[client-v2]**

  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
- **[文件管理器]**

  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 修复 V2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile
- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile
