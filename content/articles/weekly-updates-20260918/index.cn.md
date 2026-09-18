汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.14

*发布日期: 2026-09-16*

### 🚀 优化

- **[企业微信]** 支持配置企微同步邮箱类型，统一全量同步与增量回调的邮箱字段映射。 by @chenzhizdt

### 🐛 修复

- **[server]** 防止通过自定义请求 URL 泄露敏感环境变量 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
- **[数据表字段：自动编码]** 修复自动编码字段配置多个字符集的随机字符模式时校验失败的问题。 ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
- **[文件管理器]** 将 v2 附件和附件（URL）卡片的删除按钮移至右上角，减少预览时误删附件。 ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
- **[AI 员工]** 修复当数据表的角色权限配置了基于当前用户的数据范围时，AI 员工数据查询工具查不到任何记录的问题 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
- **[工作流：审批]** 顺序会签中排队等待的审批人不再显示审批处理按钮，并展示等待提示。 by @mytharcher

### v2.2.12

*发布日期: 2026-09-11*

### 🐛 修复

- **[client-v2]** 修复工作流查询节点条件中无法使用超过三层变量的问题 ([#10494](https://github.com/nocobase/nocobase/pull/10494)) by @mytharcher
- **[工作流]** 修复 MySQL 8.3 以上工作流列表参数失效的问题 ([#10486](https://github.com/nocobase/nocobase/pull/10486)) by @mytharcher

### v2.2.11

*发布日期: 2026-09-11*

### 🐛 修复

- **[Office 文件预览]** 修复 Office 文件预览文件 URL 使用错误的问题 ([#10496](https://github.com/nocobase/nocobase/pull/10496)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.10

*发布日期: 2026-09-15*

### 🐛 修复

- **[client-v2]** 修复工作流查询节点条件中无法使用超过三层变量的问题 ([#10494](https://github.com/nocobase/nocobase/pull/10494)) by @mytharcher
- **[工作流]** 修复 MySQL 8.3 以上工作流列表参数失效的问题 ([#10486](https://github.com/nocobase/nocobase/pull/10486)) by @mytharcher
- **[Office 文件预览]** 修复 Office 文件预览文件 URL 使用错误的问题 ([#10496](https://github.com/nocobase/nocobase/pull/10496)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.6

*发布日期: 2026-09-15*

### 🚀 优化

- **[utils]** 新增环境变量，支持禁止服务端直接请求或重定向到纯 IP 地址 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
- **[client-v2]** 提升 V2 表单在 iOS 上的二维码扫码可靠性。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 修复

- **[server]**

  - 防止通过自定义请求 URL 泄露敏感环境变量 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
  - 修复子应用部署环境不可用时错误显示准备中的问题 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
- **[client-v2]**

  - 修复工作流查询节点条件中无法使用超过三层变量的问题 ([#10494](https://github.com/nocobase/nocobase/pull/10494)) by @mytharcher
  - 修复移动端筛选表单点击折叠无效果的问题 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  - 修复筛选表单自定义单选框和复选框的选项值无法连续输入的问题 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  - 修复 v2 更新数据动作中已配置字段被删除后字段设置无法打开的问题。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  - 修复进入配置页面时整页刷新的问题 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  - 在工作流新增、更新节点的字段赋值中隐藏服务端不支持的内置日期变量。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  - V2 历史字段赋值配置中的已删除字段展示统一的删除提示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
- **[AI 员工]** 修复当数据表的角色权限配置了基于当前用户的数据范围时，AI 员工数据查询工具查不到任何记录的问题 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
- **[Office 文件预览]** 修复 Office 文件预览文件 URL 使用错误的问题 ([#10496](https://github.com/nocobase/nocobase/pull/10496)) by @mytharcher
- **[工作流：延时节点]** 修复延时节点的时长变量校验，并在变量解析结果无效时直接报错，避免异常等待。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
- **[工作流]** 修复 MySQL 8.3 以上工作流列表参数失效的问题 ([#10486](https://github.com/nocobase/nocobase/pull/10486)) by @mytharcher
- **[权限控制]** 修复角色权限中勾选深层菜单时未自动选中全部上级菜单的问题 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
- **[数据源管理]** 修复 v2 关系字段编辑时反向字段选项未保持勾选的问题。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
- **[前端流引擎]** 修复非管理员用户在表单联动规则、引用模板及脚本中的变量解析问题。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
- **[工作流：审批]** 修复审批草稿编辑保存后申请卡片仍显示旧内容的问题 by @zhangzhonghe
- **[应用监管器]** 修复滚动更新或切换部署环境后子应用无法访问的问题 by @2013xile
