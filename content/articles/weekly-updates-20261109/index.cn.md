汇总一周产品更新日志，最新发布可前往[我们的博客](https://nocode.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.41

*发布日期: 2026-11-08*

### 🚀 优化

- **[部门]** 部门和部门角色关联表新增仅结构迁移选项，可保留目标环境已有记录。 ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 修复

- **[client-v2]** 修复 v2 关联下拉选择和级联选择使用字符串结果的公式字段作为标签时，部分文本搜索失效的问题。 ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
- **[文件管理器]** 修复 v2 文件管理器因缺少 JPEG2000 图片解码资源导致 PDF 预览空白的问题。 ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher

### v2.2.40

*发布日期: 2026-11-04*

### 🐛 修复

- **[文件管理器]** 修复切换附件或关闭预览后打开另一文件时，音频预览仍播放之前文件的问题 ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[备份管理器]** 修复大文件备份下载缺少反馈的问题，使用短期凭证通过浏览器直接下载。 ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust

### v2.2.39

*发布日期: 2026-11-04*

### 🐛 修复

- **[数据源管理]** 修复外部数据源数据表列表在同一字段设置多个筛选条件时查不出数据的问题。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[认证：API 密钥]** 修复系统使用「仅角色并集」时 API 密钥获得创建者其他角色权限的问题，API 密钥现在始终遵循绑定角色的权限和数据范围。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang
- **[工作流]** 修复工作流 v2 新增数据和更新数据节点无法配置密码字段赋值的问题。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[通知管理]** 修复工作流通知节点无法搜索或选择第一页之后的通知渠道的问题。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[AI 员工]** 修复 AI 员工读取 JavaScript 区块内容时提示工具执行被中断的问题 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.21

*发布日期: 2026-11-08*

### 🚀 优化

- **[部门]** 部门和部门角色关联表新增仅结构迁移选项，可保留目标环境已有记录。 ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 修复

- **[client-v2]**
  - 修复旧版和 v2 客户端在窄屏下打开个人资料或修改密码后，顶部悬浮工具栏遮挡表单的问题。 ([#11347](https://github.com/nocobase/nocobase/pull/11347)) by @zhouyanliang
  - 修复 v2 关联下拉选择和级联选择使用字符串结果的公式字段作为标签时，部分文本搜索失效的问题。 ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
- **[备份管理器]** 修复大文件备份下载缺少反馈的问题，使用短期凭证通过浏览器直接下载。 ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust
- **[文件管理器]**
  - 修复 v2 文件管理器因缺少 JPEG2000 图片解码资源导致 PDF 预览空白的问题。 ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher
  - 修复切换附件或关闭预览后打开另一文件时，音频预览仍播放之前文件的问题 ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[通知管理]** 修复工作流通知节点无法搜索或选择第一页之后的通知渠道的问题。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[数据源管理]** 修复外部数据源数据表列表在同一字段设置多个筛选条件时查不出数据的问题。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[工作流]** 修复工作流 v2 新增数据和更新数据节点无法配置密码字段赋值的问题。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[AI 员工]** 修复 AI 员工读取 JavaScript 区块内容时提示工具执行被中断的问题 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang
- **[认证：API 密钥]** 修复系统使用「仅角色并集」时 API 密钥获得创建者其他角色权限的问题，API 密钥现在始终遵循绑定角色的权限和数据范围。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

### v2.3.0-beta.20

*发布日期: 2026-11-03*

### 🐛 修复

- **[数据表: SQL]** 修复 SQL 表预览在查询结果包含 JSON/JSONB 对象或数组时渲染崩溃的问题 ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji
- **[历史记录]** 修复历史记录区块在隐藏或当前角色无查看权限时，表单提交后仍会请求历史数据的问题 by @hongboji
- **[数据源：外部 Oracle]** 修复外部 Oracle 数据源的表主键为 IDENTITY 列时，表同步未识别主键与自增属性、导致新增记录提示主键不能为空的问题 by @hongboji
- **[飞书 / Lark]** 修复飞书消息模板保存不生效：消息字段绑定在模板列之外，保存时被静默丢弃 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.17

*发布日期: 2026-11-08*

### 🚀 优化

- **[部门]** 部门和部门角色关联表新增仅结构迁移选项，可保留目标环境已有记录。 ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 修复

- **[client-v2]**
  - 修复 v2 关联下拉选择和级联选择使用字符串结果的公式字段作为标签时，部分文本搜索失效的问题。 ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
  - 修复旧版和 v2 客户端在窄屏下打开个人资料或修改密码后，顶部悬浮工具栏遮挡表单的问题。 ([#11347](https://github.com/nocobase/nocobase/pull/11347)) by @zhouyanliang
- **[通知管理]** 修复工作流通知节点无法搜索或选择第一页之后的通知渠道的问题。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
- **[数据源管理]** 修复外部数据源数据表列表在同一字段设置多个筛选条件时查不出数据的问题。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
- **[文件管理器]**
  - 修复 v2 文件管理器因缺少 JPEG2000 图片解码资源导致 PDF 预览空白的问题。 ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher
  - 修复切换附件或关闭预览后打开另一文件时，音频预览仍播放之前文件的问题 ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang
- **[认证：API 密钥]** 修复系统使用「仅角色并集」时 API 密钥获得创建者其他角色权限的问题，API 密钥现在始终遵循绑定角色的权限和数据范围。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang
- **[工作流]** 修复工作流 v2 新增数据和更新数据节点无法配置密码字段赋值的问题。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
- **[AI 员工]** 修复 AI 员工读取 JavaScript 区块内容时提示工具执行被中断的问题 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang
- **[备份管理器]** 修复大文件备份下载缺少反馈的问题，使用短期凭证通过浏览器直接下载。 ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust

### v2.4.0-alpha.16

*发布日期: 2026-11-03*

### 🐛 修复

- **[数据表: SQL]** 修复 SQL 表预览在查询结果包含 JSON/JSONB 对象或数组时渲染崩溃的问题 ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji
- **[历史记录]** 修复历史记录区块在隐藏或当前角色无查看权限时，表单提交后仍会请求历史数据的问题 by @hongboji
- **[数据源：外部 Oracle]** 修复外部 Oracle 数据源的表主键为 IDENTITY 列时，表同步未识别主键与自增属性、导致新增记录提示主键不能为空的问题 by @hongboji
- **[飞书 / Lark]** 修复飞书消息模板保存不生效：消息字段绑定在模板列之外，保存时被静默丢弃 by @chenzhizdt
