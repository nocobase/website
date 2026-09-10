汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.10

*发布日期: 2026-09-10*

### 🚀 优化

- **[utils]** 新增环境变量，支持禁止服务端直接请求或重定向到纯 IP 地址 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
- **[client-v2]** 提升 V2 表单在 iOS 上的二维码扫码可靠性。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 修复

- **[client-v2]** 在工作流新增、更新节点的字段赋值中隐藏服务端不支持的内置日期变量。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
- **[server]** 修复子应用部署环境不可用时错误显示准备中的问题 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
- **[工作流：延时节点]** 修复延时节点的时长变量校验，并在变量解析结果无效时直接报错，避免异常等待。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
- **[应用监管器]** 修复滚动更新或切换部署环境后子应用无法访问的问题 by @2013xile

### v2.2.9

*发布日期: 2026-09-09*

### 🐛 修复

- **[client-v2]**

  - 修复 v2 更新数据动作中已配置字段被删除后字段设置无法打开的问题。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  - V2 历史字段赋值配置中的已删除字段展示统一的删除提示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  - 修复移动端筛选表单点击折叠无效果的问题 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  - 支持在 v2 表单中将对多关联展示字段显示为只读子表格。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - 修复 V2 表单父级关系使用下拉选择时，嵌套关系字段显示为空的问题。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  - 修复 v2 字段配置中反向关系类型可被修改的问题。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - 修复筛选表单自定义单选框和复选框的选项值无法连续输入的问题 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  - 修复进入配置页面时整页刷新的问题 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
- **[cli]** 历史本地上传文件地址默认仅登录用户可访问，并提供显式开启公开访问的兼容开关。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[数据源管理]** 修复 v2 关系字段编辑时反向字段选项未保持勾选的问题。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
- **[前端流引擎]** 修复非管理员用户在表单联动规则、引用模板及脚本中的变量解析问题。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
- **[权限控制]** 修复角色权限中勾选深层菜单时未自动选中全部上级菜单的问题 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
- **[区块：看板]** 修复了看板中新创建的记录无法立即显示的问题。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[工作流：审批]** 修复审批草稿编辑保存后申请卡片仍显示旧内容的问题 by @zhangzhonghe

### v2.2.8

*发布日期: 2026-09-08*

### 🚀 优化

- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[server]** 修复应用在未部署的环境中被意外启动的问题 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[数据源管理]** 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点超时时可能错误中止工作流、未遵循“出现异常时继续执行”配置的问题。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[AI 员工]** 修复 AI 员工的知识库提示词缺少检索内容占位符时可能重复查询知识库的问题，并在保存配置时提供明确的校验引导。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
- **[AI: 知识库]** 修复 AI 知识库的 PGVector 连接测试、ZIP 导入结果展示、文档分段配置继承，以及 Chunk overlap 参数校验问题。 by @cgyrock
- **[应用监管器]** 修复应用管理接口响应泄漏子应用身份认证密钥的问题 by @2013xile
- **[钉钉]** 统一钉钉通知的接收人选择控件。 by @chenzhizdt

### v2.2.7

*发布日期: 2026-09-05*

### 🎉 新特性

- **[AI: 知识库]** 新增需要身份认证的知识库检索接口，以及用于接入远程 NocoBase 知识库的内置 Provider。 by @cgyrock

### 🚀 优化

- **[undefined]** 将根目录包的许可证元数据更正为 Apache-2.0，并将 Node.js 最低版本提升至 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
- **[通知：站内信]** 修复工作流 v2 通知节点选择站内信或邮箱渠道后前端卡顿的问题 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx
- **[钉钉]** 钉钉 ActionCard 按钮链接支持配置为通过外部浏览器打开。 by @chenzhizdt

### 🐛 修复

- **[数据表: SQL]** 限制 SQL 数据表查询 PostgreSQL 系统对象或执行多条语句 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[区块：评论]** 修复评论区块使用“最后修改人”字段时应显示评论人昵称的问题 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[AI 员工]**

  - 修复 AI 响应中断后工具调用缺少对应结果而导致 Bedrock 请求报错的问题。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
  - 修复包含图表的业务分析报告无法打开的问题。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock
- **[数据表字段：Markdown(Vditor)]** 修复 Vditor 详情字段默认使用纯文本预览导致 Markdown 图片无法展示的问题，默认改为 HTML 预览。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[数据源管理]** 修复 v2 数据表编辑器缺少记录唯一标识设置的问题。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[工作流]** 修复用户相关数据表使用主键作为用户外键时，工作流无法正确选择用户的问题 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[文件管理器]** 修复 AI 员工工作流节点无法访问 NocoBase 永久文件 URL，以及内部文件被不必要复制到 AI 存储的问题。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
- **[AI: 知识库]** 知识库上传现已允许选择后端支持的全部文档格式 by @cgyrock
- **[模板打印]** 修复模板打印中稳定文件 URL 的动态图片渲染。 by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.9

*发布日期: 2026-09-10*

### 🚀 优化

- **[utils]** 新增环境变量，支持禁止服务端直接请求或重定向到纯 IP 地址 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
- **[client-v2]** 提升 V2 表单在 iOS 上的二维码扫码可靠性。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh
- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**

  - 在工作流新增、更新节点的字段赋值中隐藏服务端不支持的内置日期变量。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  - 修复进入配置页面时整页刷新的问题 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  - 修复 v2 更新数据动作中已配置字段被删除后字段设置无法打开的问题。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  - V2 历史字段赋值配置中的已删除字段展示统一的删除提示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  - 修复筛选表单自定义单选框和复选框的选项值无法连续输入的问题 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  - 支持在 v2 表单中将对多关联展示字段显示为只读子表格。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - 修复 V2 表单父级关系使用下拉选择时，嵌套关系字段显示为空的问题。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  - 修复 v2 字段配置中反向关系类型可被修改的问题。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - 修复移动端筛选表单点击折叠无效果的问题 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
- **[server]** 修复子应用部署环境不可用时错误显示准备中的问题 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
- **[cli]** 历史本地上传文件地址默认仅登录用户可访问，并提供显式开启公开访问的兼容开关。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[工作流：延时节点]** 修复延时节点的时长变量校验，并在变量解析结果无效时直接报错，避免异常等待。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
- **[数据源管理]**

  - 修复 v2 关系字段编辑时反向字段选项未保持勾选的问题。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
  - 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[权限控制]** 修复角色权限中勾选深层菜单时未自动选中全部上级菜单的问题 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
- **[区块：看板]** 修复了看板中新创建的记录无法立即显示的问题。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[前端流引擎]** 修复非管理员用户在表单联动规则、引用模板及脚本中的变量解析问题。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
- **[工作流：审批]** 修复审批草稿编辑保存后申请卡片仍显示旧内容的问题 by @zhangzhonghe
- **[应用监管器]** 修复滚动更新或切换部署环境后子应用无法访问的问题 by @2013xile

### v2.3.0-beta.8

*发布日期: 2026-09-07*

### 🎉 新特性

- **[AI: 知识库]** 新增需要身份认证的知识库检索接口，以及用于接入远程 NocoBase 知识库的内置 Provider。 by @cgyrock

### 🚀 优化

- **[通知：站内信]** 修复工作流 v2 通知节点选择站内信或邮箱渠道后前端卡顿的问题 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 修复

- **[server]** 修复应用在未部署的环境中被意外启动的问题 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[AI 员工]**

  - 修复 AI 员工的知识库提示词缺少检索内容占位符时可能重复查询知识库的问题，并在保存配置时提供明确的校验引导。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  - 修复 AI 响应中断后工具调用缺少对应结果而导致 Bedrock 请求报错的问题。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
- **[数据表字段：Markdown(Vditor)]** 修复 Vditor 详情字段默认使用纯文本预览导致 Markdown 图片无法展示的问题，默认改为 HTML 预览。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[数据表: SQL]** 限制 SQL 数据表查询 PostgreSQL 系统对象或执行多条语句 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[区块：评论]** 修复评论区块使用“最后修改人”字段时应显示评论人昵称的问题 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[工作流]** 修复用户相关数据表使用主键作为用户外键时，工作流无法正确选择用户的问题 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[数据源管理]** 修复 v2 数据表编辑器缺少记录唯一标识设置的问题。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点超时时可能错误中止工作流、未遵循“出现异常时继续执行”配置的问题。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[AI: 知识库]**

  - 知识库上传现已允许选择后端支持的全部文档格式 by @cgyrock
  - 修复 AI 知识库的 PGVector 连接测试、ZIP 导入结果展示、文档分段配置继承，以及 Chunk overlap 参数校验问题。 by @cgyrock
- **[模板打印]** 修复模板打印中稳定文件 URL 的动态图片渲染。 by @hongboji
- **[应用监管器]** 修复应用管理接口响应泄漏子应用身份认证密钥的问题 by @2013xile
- **[钉钉]** 统一钉钉通知的接收人选择控件。 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.5

*发布日期: 2026-09-09*

### 🚀 优化

- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**

  - 支持在 v2 表单中将对多关联展示字段显示为只读子表格。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - 修复 v2 字段配置中反向关系类型可被修改的问题。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - 修复 V2 表单父级关系使用下拉选择时，嵌套关系字段显示为空的问题。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
- **[cli]** 历史本地上传文件地址默认仅登录用户可访问，并提供显式开启公开访问的兼容开关。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点超时时可能错误中止工作流、未遵循“出现异常时继续执行”配置的问题。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[数据源管理]** 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[区块：看板]** 修复了看板中新创建的记录无法立即显示的问题。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[钉钉]** 统一钉钉通知的接收人选择控件。 by @chenzhizdt

### v2.4.0-alpha.4

*发布日期: 2026-09-06*

### 🎉 新特性

- **[AI: 知识库]** 新增需要身份认证的知识库检索接口，以及用于接入远程 NocoBase 知识库的内置 Provider。 by @cgyrock

### 🚀 优化

- **[通知：站内信]** 修复工作流 v2 通知节点选择站内信或邮箱渠道后前端卡顿的问题 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 修复

- **[server]** 修复应用在未部署的环境中被意外启动的问题 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[数据表字段：Markdown(Vditor)]** 修复 Vditor 详情字段默认使用纯文本预览导致 Markdown 图片无法展示的问题，默认改为 HTML 预览。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[AI 员工]**

  - 修复 AI 员工的知识库提示词缺少检索内容占位符时可能重复查询知识库的问题，并在保存配置时提供明确的校验引导。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  - 修复 AI 响应中断后工具调用缺少对应结果而导致 Bedrock 请求报错的问题。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
- **[区块：评论]** 修复评论区块使用“最后修改人”字段时应显示评论人昵称的问题 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[数据源管理]** 修复 v2 数据表编辑器缺少记录唯一标识设置的问题。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[工作流]** 修复用户相关数据表使用主键作为用户外键时，工作流无法正确选择用户的问题 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[数据表: SQL]** 限制 SQL 数据表查询 PostgreSQL 系统对象或执行多条语句 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[AI: 知识库]**

  - 修复 AI 知识库的 PGVector 连接测试、ZIP 导入结果展示、文档分段配置继承，以及 Chunk overlap 参数校验问题。 by @cgyrock
  - 知识库上传现已允许选择后端支持的全部文档格式 by @cgyrock
- **[模板打印]** 修复模板打印中稳定文件 URL 的动态图片渲染。 by @hongboji
- **[应用监管器]** 修复应用管理接口响应泄漏子应用身份认证密钥的问题 by @2013xile
