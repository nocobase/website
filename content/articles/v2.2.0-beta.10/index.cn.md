### 🎉 新特性

- **[AI 员工]** 新增结构化 AI 使用记录，便于统计使用情况 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile

### 🚀 优化

- **[工作流]** 移除条件节点中基础运算引擎的算术运算操作符 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

- **[数据可视化]** 改进图表事件脚本，支持安全清理自定义事件处理器 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile

- **[数据源管理]** 在 v2 主数据源中新建数据表菜单中隐藏已废弃的数据表模板。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 修复

- **[client-v2]**
  - 修复筛选表单关系字段显示默认操作符配置的问题 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe

  - 修复手机端表格快速编辑和选择字段弹窗底部间距问题 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe

  - 修复筛选表单关系字段设置默认值后无法被清空的问题。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust

  - 修复运行态编辑弹窗切换记录时联动字段状态残留的问题。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh

  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

- **[cli]** 修复了 NocoBase CLI 在镜像仓库回退、内置数据库镜像、环境信息显示和提示默认值初始化方面的问题。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos

- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[数据可视化]** 修复图表重新渲染后点击交互可能失效的问题 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile

- **[AI 员工]** 修复 V2 公开表单页面触发不必要登录态请求的问题 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe

- **[用户认证]** 修复重置密码链接打开后进入登录页的问题 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

- **[数据源管理]** 在 V2 数据表新增字段菜单中隐藏历史的附件字段接口。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh

- **[文件管理器]**
  - 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
参考文档：[本地存储](https://docs.nocobase.com/cn/file-manager/storage/local), [安全指南](https://docs.nocobase.com/cn/security/guide)
  - 修复 v2 数据表管理中缺失 Attachment 字段接口的问题，并修复公开表单文件关系字段上传图片时的预检查权限问题。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh

- **[嵌入 NocoBase]** 修复嵌入 Nocobase 页面时 token 污染的问题。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust

- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh

- **[迁移管理]** 修复迁移后应用可能卡在修复界面的问题 by @2013xile

- **[应用监管器]** 修复启用独立 JWT 密钥后子应用仍接受主应用 token 的问题 by @2013xile

