汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**本周我们发布了 [NocoBase 1.8.0 版本](https://www.nocobase.com/cn/blog/nocobase-1-8-0)，该版本完善认证流程，支持自定义统计变量与邮件管理升级，优化工作流体验与移动端交互。**

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/cn/blog/v1.8.1)

*发布时间：2025-07-09*

#### 🐛 修复

- **[client]**

  - 表单中关系字段表中的勾选字段显示不正确 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修复点击按钮无法打开弹窗的问题 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[工作流：人工处理节点]** 修复使用节点变量时的报错 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[模板打印]** rootDataType字段添加迁移脚本 by @jiannx
- **[工作流：审批]** 修复通过分支在没有审批人的时候未执行的问题 by @mytharcher

### [v1.7.20](https://www.nocobase.com/cn/blog/v1.7.20)

*发布时间：2025-07-07*

#### 🐛 修复

- **[client]**

  - 字段变更后，依赖该字段的数据范围应自动清空已选值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修复设置表格列宽度无效的问题 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修复复制按钮弹窗中，筛选表单报错的问题 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
  - 修复了保存一对一关系字段报错问题 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
- **[undefined]** 修复 e2e CI 文件 ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[文件管理器]**

  - 修复 mimetype 类型检测 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
  - 修复 ESM 引起的编译错误 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
- **[公开表单]** 修复公开表单中 Date Only 字段选择日期失败的问题 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[工作流]** 修复移动端需要多次左滑才能返回上一页的问题 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[数据可视化]** 表格分页器问题 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[工作流：审批]**

  - 修复撤回后关系数据不全的问题 by @mytharcher
  - 移除因更新 schema 造成超时的事务 by @mytharcher
  - 修复审批被删除后的页面报错 by @mytharcher
  - 修复提交审批修改关系字段的参数 by @mytharcher

### [v1.7.19](https://www.nocobase.com/cn/blog/v1.7.19)

*发布时间：2025-07-03*

#### 🚀 优化

- **[database]** 支持从环境变量配置连接池的选项 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 排除 JSON 字段加载以改进执行计划列表加载性能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 为节点测试运行增加日志 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[多应用管理器]** 多应用管理支持筛选操作 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流：审批]** 将时间线中的时间调整为绝对时间 by @mytharcher

#### 🐛 修复

- **[client]**

  - 在连接视图中设置字段显示名称（displayName）未生效的问题 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 修复详情区块中子表格设置背景颜色时样式重复的问题 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 工作流人工节点的 UI 配置，设置联动规则不能选择当前表单变量 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - 修复 编辑表单中子表格的关系字段设置的默认值覆盖已有数据的问题 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - 修复表单中的 Markdown 字段未能实时显示 $nForm 变量内容 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - 对基于 'x-acl-action' 的表单配置项容错 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** 修复使用 Exact day 变量过滤 DateOnly 或 Datetime (without time zone) 字段时筛选错误的问题 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[工作流]** 修复循环引用导致的报错 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[密码策略]** 支持永久锁定用户 by @2013xile
- **[工作流：子流程]** 修复集群模式下的问题 by @mytharcher
- **[工作流：审批]**

  - 从申请列表的筛选项中移除不可筛选的字段 by @mytharcher
  - 补充表单的布局配置项 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/cn/blog/v1.9.0-beta.1)

*发布时间：2025-07-07*

#### 🎉 新特性

- **[server]** 新增用于处理队列消息的事件队列 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 优化

- **[工作流]** 将公用组件移动到基础插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 字段变更后，依赖该字段的数据范围应自动清空已选值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修复设置表格列宽度无效的问题 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修复复制按钮弹窗中，筛选表单报错的问题 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
  - 修复了保存一对一关系字段报错问题 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
- **[undefined]** 修复 e2e CI 文件 ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[日历]** 日历区块周起始日默认为周一 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh
- **[工作流]** 修复移动端需要多次左滑才能返回上一页的问题 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[文件管理器]**

  - 修复 ESM 引起的编译错误 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
  - 修复 mimetype 类型检测 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
- **[工作流：人工处理节点]** 修复引入错误的变量 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher
- **[公开表单]** 修复公开表单中 Date Only 字段选择日期失败的问题 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[工作流：审批]**

  - 移除因更新 schema 造成超时的事务 by @mytharcher
  - 修复撤回后关系数据不全的问题 by @mytharcher
  - 修复审批被删除后的页面报错 by @mytharcher
  - 修复提交审批修改关系字段的参数 by @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/cn/blog/v1.8.0-beta.13)

*发布时间：2025-07-03*

#### 🎉 新特性

- **[client]**

  - 支持外部数据源中的 SQL Server BIT 字段 ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
  - 支持自定义聚合变量 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
    参考文档：[自定义变量](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** 支持商业授权 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[数据源管理]** ✨ 支持外部数据源按需加载数据表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[授权设置]** 添加授权设置和下载商业插件前授权校验 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx
- **[用户认证]** 支持“忘记密码”的功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  参考文档：[忘记密码](https://docs-cn.nocobase.com/handbook/auth/user#%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81)
- **[操作：批量更新]** 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe
- **[数据源：外部 SQL Server]**

  - 支持外部数据源中的 SQL Server BIT 字段 by @aaaaaajie
  - 支持外部数据源按需加载数据表 by @aaaaaajie
- **[自定义变量]** 支持自定义聚合变量 by @zhangzhonghe
  参考文档：[自定义变量](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[邮件管理]**

  - 支持邮件删除 by @jiannx
  - 支持邮件同步间隔设置 by @jiannx
  - 支持批量发送 by @jiannx

#### 🚀 优化

- **[client]**

  - 支持在输入框中扫码填充数据 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 根据设备类型而非页面宽度来判断是否显示移动端组件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe
  - 支持Markdown 中使用 {{t 'xxx'}} 进行本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 根据设备类型而非页面宽度来判断是否显示移动端布局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe
- **[异步任务管理器]** 优化导出创建任务响应慢 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[移动端]** 适配通知弹窗移动端的样式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[邮件管理]**

  - 支持同主题内邮件单独回复和转发 by @jiannx
  - 重构基于schema实现邮件发送，支持ai by @jiannx
  - 支持弹窗内的发件默认值，支持收件人模糊搜索，问题修复 by @jiannx
  - 批量发送功能完善 by @jiannx
  - 功能完善及问题修复 by @jiannx

#### 🐛 修复

- **[cli]**

  - 安装插件时授权文案调整 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
  - 下载插件异常时 undefined 报错 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
- **[client]**

  - 清空徽标值后，界面没有更新 ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe
  - 点击筛选按钮报错 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
  - 修复当前用户数据为空的问题 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 通过弹窗链接打开的页面，内容显示的不对 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
  - 将其他属性传递给组件 Variable.Input。 ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
- **[database]** string 类型字段的 eq 操作符兼容 number 类型 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[build]** 修复plugin-workflow-javascript前端运行，process undefine 错误 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[数据可视化]** 表格分页器问题 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[数据源管理]** 修复了按需加载数据源与表前缀配置冲突导致的 “ConnectionManager.getConnection was called after the connection manager was closed” 错误。 ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
- **[plugin-service-platform]** 调整授权文案 by @jiannx
- **[自定义变量]** 清空徽标值后，界面没有更新 by @zhangzhonghe
- **[邮件管理]**

  - 附件不显示 by @jiannx
  - 邮件删除报错 by @jiannx
  - 邮件删除失败 by @jiannx
  - 设置弹窗不显示 by @jiannx
  - 回复抽屉不显示 by @jiannx
  - 收件人模糊搜素支持关联字段 by @jiannx
  - mailmessagelabelsMailmessages 表中添加id字段 by @jiannx
  - 邮件模糊搜索后做唯一过滤 by @jiannx
  - mailmessagelabels_mailmessages 存在重复主键 by @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/cn/blog/v1.8.0-beta.12)

*发布时间：2025-07-03*

#### 🚀 优化

- **[database]** 支持从环境变量配置连接池的选项 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 排除 JSON 字段加载以改进执行计划列表加载性能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 为节点测试运行增加日志 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[多应用管理器]** 多应用管理支持筛选操作 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流：审批]** 将时间线中的时间调整为绝对时间 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复表单中的 Markdown 字段未能实时显示 $nForm 变量内容 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - 修复详情区块中子表格设置背景颜色时样式重复的问题 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 工作流人工节点的 UI 配置，设置联动规则不能选择当前表单变量 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - 在连接视图中设置字段显示名称（displayName）未生效的问题 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 修复 编辑表单中子表格的关系字段设置的默认值覆盖已有数据的问题 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - 对基于 'x-acl-action' 的表单配置项容错 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** 修复使用 Exact day 变量过滤 DateOnly 或 Datetime (without time zone) 字段时筛选错误的问题 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[工作流]** 修复循环引用导致的报错 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[密码策略]** 支持永久锁定用户 by @2013xile
- **[工作流：子流程]** 修复集群模式下的问题 by @mytharcher
- **[工作流：审批]**

  - 从申请列表的筛选项中移除不可筛选的字段 by @mytharcher
  - 补充表单的布局配置项 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/cn/blog/v1.9.0-alpha.1)

*发布时间：2025-07-07*

#### 🎉 新特性

- **[server]** 新增用于处理队列消息的事件队列 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 优化

- **[工作流]** 将公用组件移动到基础插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 字段变更后，依赖该字段的数据范围应自动清空已选值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修复设置表格列宽度无效的问题 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修复了保存一对一关系字段报错问题 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
  - 修复复制按钮弹窗中，筛选表单报错的问题 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
- **[undefined]** 修复 e2e CI 文件 ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[文件管理器]**

  - 修复 ESM 引起的编译错误 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
  - 修复 mimetype 类型检测 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
- **[公开表单]** 修复公开表单中 Date Only 字段选择日期失败的问题 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[日历]** 日历区块周起始日默认为周一 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh
- **[工作流：人工处理节点]** 修复引入错误的变量 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher
- **[工作流]** 修复移动端需要多次左滑才能返回上一页的问题 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[工作流：审批]**

  - 修复提交审批修改关系字段的参数 by @mytharcher
  - 修复审批被删除后的页面报错 by @mytharcher
  - 修复撤回后关系数据不全的问题 by @mytharcher
- **[邮件管理]**

  - 选择行后，支持设置已读未读 by @jiannx
  - 子邮件内容无法被筛选 by @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/cn/blog/v1.8.0-alpha.14)

*发布时间：2025-07-04*

#### 🐛 修复

- **[工作流：审批]** 移除因更新 schema 造成超时的事务 by @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/cn/blog/v1.8.0-alpha.13)

*发布时间：2025-07-03*

#### 🚀 优化

- **[邮件管理]** 支持同主题内邮件单独回复和转发 by @jiannx

#### 🐛 修复

- **[client]**

  - 修复详情区块中子表格设置背景颜色时样式重复的问题 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 修复表单中的 Markdown 字段未能实时显示 $nForm 变量内容 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
- **[数据可视化]** 表格分页器问题 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[数据源管理]** 修复了按需加载数据源与表前缀配置冲突导致的 “ConnectionManager.getConnection was called after the connection manager was closed” 错误。 ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
