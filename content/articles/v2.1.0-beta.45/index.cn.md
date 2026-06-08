### 🎉 新特性

- **[undefined]** 完善 CLI 中托管应用与插件管理能力，包括基于 appPath 的环境处理、插件导入、授权插件同步，以及相关文档更新 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
  参考文档：[CLI 文档](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/api/cli), [快速开始](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/quickstart)
- **[区块：甘特图]** 为甘特图区块新增默认定位到今天的配置项 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
- **[IdP: OAuth]** 增加多应用部署中的应用单点登录基础能力 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[应用单点登录]** 新增用于应用之间自动登录的 App SSO 插件 by @2013xile
- **[多空间]** 为多空间插件新增 client v2 支持，包括空间切换和空间管理 by @jiannx
- **[应用监管器]** 新增子应用的 App SSO 配置 by @2013xile

### 🚀 优化

- **[server]** 新版客户端的访问路径由 `/v2/` 调整为 `/v/` ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** 升级 `xlsx` 的版本以避免安全问题 ([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[多关键词筛选]** 迁移多关键词筛选至 client v2 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[工作流]** 移除工作流执行历史与业务事务的耦合 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
- **[UI 模板]** 将 UI 模板迁移至 client v2 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[部门]** 新增 v2 版部门设置页面，用于管理部门、部门成员和用户所属部门 ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[认证：SAML 2.0]** SAML/CAS 登录跳转改为跟随新版客户端前缀 by @Molunerfinn
- **[操作：导入记录 Pro]** 升级 `xlsx` 的版本以避免安全问题 by @mytharcher
- **[工作流：子流程]** 移除子流程工作流指令中的执行历史事务耦合 by @mytharcher
- **[认证：OIDC]** OIDC 登录跳转改为跟随新版客户端前缀 by @Molunerfinn
- **[工作流：审批]** 移除审批工作流指令中的执行历史事务耦合 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复联动隐藏字段后仍保留旧值的问题 ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe
  - 修复引用表单模板中保存树形关系字段时报错的问题 ([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
- **[client-v2]**
  - 修复 v2 表格自定义列宽设置为 0 时列不可见的问题 ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - 调整所有关系字段选择，限制最多两层的关联字段 ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
- **[操作：导入记录]** 修复导入记录生成重复排序值的问题 ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile
- **[前端流引擎]** 修复将引用模板区块转换成复制时报错的问题 ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust
- **[数据表: SQL]** 禁止 SQL 数据表访问敏感的 PostgreSQL 元数据 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[工作流]** 修复多工作节点并发时工作流执行可能被重复调度的问题 ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher
- **[区块：地图]** 修复详情页地图字段在文本和地图显示模式切换时原始值被错误转换，导致显示异常的问题 ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji
- **[工作流：自定义操作事件]** 修复工作台操作面板按钮列表中缺少触发工作流操作的问题 ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[AI 员工]**
  - 工作流 AI 员工节点可使用默认模型 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - 隐藏前端提示中的原始 LLM 服务商错误 ([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
- **[数据源管理]** 修复 v2 数据源管理中多空间字段的本地化显示问题 ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[数据源：REST API]** 修复数据源管理器 client-v2 类型声明不一致时，REST API 数据源插件声明构建失败的问题 by @katherinehhh
- **[密码策略]** 修复登录失败时真实错误被 "argument #1 unsupported type undefined" 覆盖的问题（当底层错误没有状态码时） by @Molunerfinn
- **[工作流：审批]** 修复审批表单详情中不显示自定义字段标题的问题 by @zhangzhonghe
