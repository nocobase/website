汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.17

*发布日期: 2026-09-24*

### 🐛 修复

- **[client-v2]**

  - 修复：子表格设置为禁用后，行内字段仍可编辑的问题 ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
  - 修复表格快捷编辑中多选下拉收起时弹层被关闭、以及下拉选项遮住提交按钮的问题。 ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
- **[部门]** 限制部门用户目录仅对有权限的角色开放 ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[工作流]** 修复工作流用户选择器搜索仅过滤已加载用户的问题，改为通过 API 搜索。 ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[区块：看板]** 修复现代客户端看板在无筛选条件时，通过顶部按钮新增数据后未自动刷新的问题。 ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[邮件管理]** 修复循环邮件回复关系阻塞邮件同步的问题 by @jiannx

### v2.2.16

*发布日期: 2026-09-21*

### 🐛 修复

- **[权限控制]** 修复现代客户端角色设置中点击系统权限勾选框右侧空白区域会误切换权限的问题。 ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[区块：评论]** 修复评论专用的编辑、删除、引用并回复操作错误出现在表格行操作配置菜单中的问题。 ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[工作流：审批]** 修复数据保存前触发的审批在退回、重新提交并通过后，业务数据未正确保存的问题。 by @mytharcher

### v2.2.15

*发布日期: 2026-09-19*

### 🚀 优化

- **[数据源管理]** v2 数据源管理中添加关系字段时，外键支持像 v1 一样从所属数据表的已有字段中下拉选择。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh

### 🐛 修复

- **[flow-engine]** 修复 V2 表单数字精度校验未拦截超出小数位数限制的值的问题。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[client-v2]** 修复 v2 子表格添加字段前后行高不一致的问题。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[文件管理器]** 支持知识库文档下载复用文件管理器的统一下载处理逻辑。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
- **[数据源管理]**

  - 修复 v2 数据源管理中编辑已有反向字段的关系字段时提交报错的问题。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - 修复 v2 数据源编辑器为已有关系字段补建反向字段时，反向关系类型为空导致无法提交的问题。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - 修复 v2 数据源设置中删除字段后，再添加同名字段时错误提示字段名称已存在的问题。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[AI 员工]**

  - 固定 AI 会话的时间上下文，改善前端工具执行完成后继续对话时的提示词缓存复用率。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - 修复知识库开关关闭且检索字段为空时，AI 员工配置无法保存的问题 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
- **[工作流]** 修复 v2 工作流更新节点重新打开后多关系字段赋值消失的问题；关系选择改为保存关联键，并按键加载记录用于回显。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[AI: 知识库]** 优化知识库文档删除操作，使用展示文件名和本地化按钮的模态确认框，并统一使用文件管理器的文档下载逻辑。 by @cgyrock
- **[工作流：审批]** 修复 V2 原生页面中点击相关审批区块的审批任务无法打开审批弹窗的问题。 by @mytharcher
- **[企业微信]** 修复 Origin 末尾带斜杠时，企微授权及回调地址出现重复斜杠的问题。 by @chenzhizdt

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.12

*发布日期: 2026-09-24*

### 🐛 修复

- **[client-v2]**

  - 修复表格快捷编辑中多选下拉收起时弹层被关闭、以及下拉选项遮住提交按钮的问题。 ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
  - 修复：子表格设置为禁用后，行内字段仍可编辑的问题 ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
- **[区块：看板]** 修复现代客户端看板在无筛选条件时，通过顶部按钮新增数据后未自动刷新的问题。 ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[工作流]** 修复工作流用户选择器搜索仅过滤已加载用户的问题，改为通过 API 搜索。 ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[部门]** 限制部门用户目录仅对有权限的角色开放 ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[邮件管理]** 修复循环邮件回复关系阻塞邮件同步的问题 by @jiannx

### v2.3.0-beta.11

*发布日期: 2026-09-20*

### 🚀 优化

- **[数据源管理]** v2 数据源管理中添加关系字段时，外键支持像 v1 一样从所属数据表的已有字段中下拉选择。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh
- **[企业微信]** 支持配置企微同步邮箱类型，统一全量同步与增量回调的邮箱字段映射。 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 v2 子表格添加字段前后行高不一致的问题。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[flow-engine]** 修复 V2 表单数字精度校验未拦截超出小数位数限制的值的问题。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[server]** 防止通过自定义请求 URL 泄露敏感环境变量 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
- **[文件管理器]**

  - 支持知识库文档下载复用文件管理器的统一下载处理逻辑。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
  - 将 v2 附件和附件（URL）卡片的删除按钮移至右上角，减少预览时误删附件。 ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
- **[工作流]** 修复 v2 工作流更新节点重新打开后多关系字段赋值消失的问题；关系选择改为保存关联键，并按键加载记录用于回显。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[区块：评论]** 修复评论专用的编辑、删除、引用并回复操作错误出现在表格行操作配置菜单中的问题。 ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[数据源管理]**

  - 修复 v2 数据源管理中编辑已有反向字段的关系字段时提交报错的问题。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - 修复 v2 数据源编辑器为已有关系字段补建反向字段时，反向关系类型为空导致无法提交的问题。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - 修复 v2 数据源设置中删除字段后，再添加同名字段时错误提示字段名称已存在的问题。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[AI 员工]**

  - 修复知识库开关关闭且检索字段为空时，AI 员工配置无法保存的问题 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
  - 固定 AI 会话的时间上下文，改善前端工具执行完成后继续对话时的提示词缓存复用率。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - 修复当数据表的角色权限配置了基于当前用户的数据范围时，AI 员工数据查询工具查不到任何记录的问题 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
- **[数据表字段：自动编码]** 修复自动编码字段配置多个字符集的随机字符模式时校验失败的问题。 ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
- **[权限控制]** 修复现代客户端角色设置中点击系统权限勾选框右侧空白区域会误切换权限的问题。 ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[AI: 知识库]** 优化知识库文档删除操作，使用展示文件名和本地化按钮的模态确认框，并统一使用文件管理器的文档下载逻辑。 by @cgyrock
- **[工作流：审批]**

  - 修复数据保存前触发的审批在退回、重新提交并通过后，业务数据未正确保存的问题。 by @mytharcher
  - 顺序会签中排队等待的审批人不再显示审批处理按钮，并展示等待提示。 by @mytharcher
  - 修复 V2 原生页面中点击相关审批区块的审批任务无法打开审批弹窗的问题。 by @mytharcher
- **[企业微信]** 修复 Origin 末尾带斜杠时，企微授权及回调地址出现重复斜杠的问题。 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.8

*发布日期: 2026-09-24*

### 🐛 修复

- **[client-v2]**

  - 修复：子表格设置为禁用后，行内字段仍可编辑的问题 ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
  - 修复表格快捷编辑中多选下拉收起时弹层被关闭、以及下拉选项遮住提交按钮的问题。 ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
- **[工作流]** 修复工作流用户选择器搜索仅过滤已加载用户的问题，改为通过 API 搜索。 ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[Portal 管理]** 修复工作流任务中心页面缺少顶部导航栏的问题 ([#10535](https://github.com/nocobase/nocobase/pull/10535)) by @zhangzhonghe
- **[部门]** 限制部门用户目录仅对有权限的角色开放 ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[区块：看板]** 修复现代客户端看板在无筛选条件时，通过顶部按钮新增数据后未自动刷新的问题。 ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[邮件管理]** 修复循环邮件回复关系阻塞邮件同步的问题 by @jiannx

### v2.4.0-alpha.7

*发布日期: 2026-09-20*

### 🚀 优化

- **[数据源管理]** v2 数据源管理中添加关系字段时，外键支持像 v1 一样从所属数据表的已有字段中下拉选择。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh
- **[企业微信]** 支持配置企微同步邮箱类型，统一全量同步与增量回调的邮箱字段映射。 by @chenzhizdt

### 🐛 修复

- **[client-v2]** 修复 v2 子表格添加字段前后行高不一致的问题。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[flow-engine]** 修复 V2 表单数字精度校验未拦截超出小数位数限制的值的问题。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[区块：评论]** 修复评论专用的编辑、删除、引用并回复操作错误出现在表格行操作配置菜单中的问题。 ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[权限控制]** 修复现代客户端角色设置中点击系统权限勾选框右侧空白区域会误切换权限的问题。 ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[工作流]** 修复 v2 工作流更新节点重新打开后多关系字段赋值消失的问题；关系选择改为保存关联键，并按键加载记录用于回显。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[AI 员工]**

  - 固定 AI 会话的时间上下文，改善前端工具执行完成后继续对话时的提示词缓存复用率。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - 修复知识库开关关闭且检索字段为空时，AI 员工配置无法保存的问题 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
- **[文件管理器]**

  - 支持知识库文档下载复用文件管理器的统一下载处理逻辑。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
  - 将 v2 附件和附件（URL）卡片的删除按钮移至右上角，减少预览时误删附件。 ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
- **[数据源管理]**

  - 修复 v2 数据源编辑器为已有关系字段补建反向字段时，反向关系类型为空导致无法提交的问题。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - 修复 v2 数据源管理中编辑已有反向字段的关系字段时提交报错的问题。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - 修复 v2 数据源设置中删除字段后，再添加同名字段时错误提示字段名称已存在的问题。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[数据表字段：自动编码]** 修复自动编码字段配置多个字符集的随机字符模式时校验失败的问题。 ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
- **[AI: 知识库]** 优化知识库文档删除操作，使用展示文件名和本地化按钮的模态确认框，并统一使用文件管理器的文档下载逻辑。 by @cgyrock
- **[工作流：审批]**

  - 顺序会签中排队等待的审批人不再显示审批处理按钮，并展示等待提示。 by @mytharcher
  - 修复 V2 原生页面中点击相关审批区块的审批任务无法打开审批弹窗的问题。 by @mytharcher
  - 修复数据保存前触发的审批在退回、重新提交并通过后，业务数据未正确保存的问题。 by @mytharcher
- **[企业微信]**

  - 解决 `develop` 与 `next` 合并冲突，并保留双方的 URL 处理逻辑。 by @chenzhizdt
  - 修复 Origin 末尾带斜杠时，企微授权及回调地址出现重复斜杠的问题。 by @chenzhizdt
