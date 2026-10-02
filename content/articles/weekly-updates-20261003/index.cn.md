汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.20

*发布日期: 2026-09-30*

### 🎉 新特性

- **[AI 员工]** AI 员工对话响应返回引用的知识库文档 ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
- **[AI: 知识库]** 为 AI 员工对话响应解析引用的知识库文档 by @cgyrock

### 🐛 修复

- **[create-nocobase-app]** 升级 `js-yaml` 和 `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
- **[sdk]** 将 axios 升级至 1.20.0 ([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile
- **[client-v2]** 修复审批表单中关系字段快速创建弹窗缺少「当前弹窗上级记录」变量的问题 ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
- **[区块：看板]** 修复在看板中添加 AI 员工操作时区块闪动的问题。 ([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 axios 1.20.0 升级导致的类型构建失败 by @2013xile
- **[数据源：外部 Oracle]** 修复 axios 1.20.0 升级暴露的类型错误 by @2013xile
- **[工作流：审批]** 修复审批发起后详情中已隐藏的字段标题重新显示且字段值为空的问题 by @zhangzhonghe

### v2.2.19

*发布日期: 2026-09-29*

### 🎉 新特性

- **[AI 员工]** 支持将 OpenCode Zen / Go 作为 LLM 服务，自动发送其要求的会话请求头；DeepSeek Flash 系列模型支持图片附件，联网搜索仅对 DeepSeek V4 Pro 开放，避免 Flash 模型静默忽略搜索而返回过时信息 ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

### 🚀 优化

- **[client-v2]** 表格列快捷编辑：关系字段支持设置数据范围 ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 修复

- **[client-v2]** 修复退出登录后换账号登录会显示 404 页面的问题 ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
- **[操作：批量更新]** 修复批量更新操作提交数据表选项字段中已不存在的配置值的问题。 ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
- **[工作流]** 修复数据库同步时未创建 jobs 状态与 ID 联合索引的问题。 ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher

### v2.2.18

*发布日期: 2026-09-25*

### 🐛 修复

- **[client]** 修复工作流人工节点表单在同一行排列多个字段时布局报错或无法保留的问题。 ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
- **[client-v2]** 修复审批表单子表格中的附件和文件关系字段修改无法保存的问题。 ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
- **[区块：网格卡片]** 修复网格卡片简单分页切换无效的问题，并使每页数量选项与配置的列数保持倍数关系 ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
- **[工作流：聚合查询节点]** 修复聚合查询节点通过对多关联选择关系表后无法选择聚合字段的问题。 ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
- **[迁移管理]** 将 `decompress` 升级为 `@xhmikosr/decompress` 11.1.4 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.13

*发布日期: 2026-09-30*

### 🎉 新特性

- **[AI 员工]**

  - AI 员工对话响应返回引用的知识库文档 ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
  - 支持将 OpenCode Zen / Go 作为 LLM 服务，自动发送其要求的会话请求头；DeepSeek Flash 系列模型支持图片附件，联网搜索仅对 DeepSeek V4 Pro 开放，避免 Flash 模型静默忽略搜索而返回过时信息 ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock
- **[AI: 知识库]** 为 AI 员工对话响应解析引用的知识库文档 by @cgyrock

### 🚀 优化

- **[client-v2]** 表格列快捷编辑：关系字段支持设置数据范围 ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 修复

- **[client-v2]**

  - 修复审批表单中关系字段快速创建弹窗缺少「当前弹窗上级记录」变量的问题 ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
  - 修复退出登录后换账号登录会显示 404 页面的问题 ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
  - 修复审批表单子表格中的附件和文件关系字段修改无法保存的问题。 ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
- **[create-nocobase-app]** 升级 `js-yaml` 和 `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
- **[client]** 修复工作流人工节点表单在同一行排列多个字段时布局报错或无法保留的问题。 ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
- **[工作流]** 修复数据库同步时未创建 jobs 状态与 ID 联合索引的问题。 ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher
- **[工作流：聚合查询节点]** 修复聚合查询节点通过对多关联选择关系表后无法选择聚合字段的问题。 ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
- **[区块：网格卡片]** 修复网格卡片简单分页切换无效的问题，并使每页数量选项与配置的列数保持倍数关系 ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
- **[操作：批量更新]** 修复批量更新操作提交数据表选项字段中已不存在的配置值的问题。 ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
- **[迁移管理]** 将 `decompress` 升级为 `@xhmikosr/decompress` 11.1.4 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.9

*发布日期: 2026-09-30*

### 🎉 新特性

- **[AI 员工]**

  - AI 员工对话响应返回引用的知识库文档 ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
  - 支持将 OpenCode Zen / Go 作为 LLM 服务，自动发送其要求的会话请求头；DeepSeek Flash 系列模型支持图片附件，联网搜索仅对 DeepSeek V4 Pro 开放，避免 Flash 模型静默忽略搜索而返回过时信息 ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock
- **[AI: 知识库]** 为 AI 员工对话响应解析引用的知识库文档 by @cgyrock

### 🚀 优化

- **[client-v2]** 表格列快捷编辑：关系字段支持设置数据范围 ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 修复

- **[sdk]** 将 axios 升级至 1.20.0 ([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile
- **[client-v2]**

  - 修复审批表单中关系字段快速创建弹窗缺少「当前弹窗上级记录」变量的问题 ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
  - 修复审批表单子表格中的附件和文件关系字段修改无法保存的问题。 ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
  - 修复退出登录后换账号登录会显示 404 页面的问题 ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
- **[client]** 修复工作流人工节点表单在同一行排列多个字段时布局报错或无法保留的问题。 ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
- **[create-nocobase-app]** 升级 `js-yaml` 和 `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
- **[工作流：聚合查询节点]** 修复聚合查询节点通过对多关联选择关系表后无法选择聚合字段的问题。 ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
- **[区块：网格卡片]** 修复网格卡片简单分页切换无效的问题，并使每页数量选项与配置的列数保持倍数关系 ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
- **[工作流]** 修复数据库同步时未创建 jobs 状态与 ID 联合索引的问题。 ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher
- **[操作：批量更新]** 修复批量更新操作提交数据表选项字段中已不存在的配置值的问题。 ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
- **[区块：看板]** 修复在看板中添加 AI 员工操作时区块闪动的问题。 ([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 axios 1.20.0 升级导致的类型构建失败 by @2013xile
- **[迁移管理]** 将 `decompress` 升级为 `@xhmikosr/decompress` 11.1.4 by @2013xile
- **[数据源：外部 Oracle]** 修复 axios 1.20.0 升级暴露的类型错误 by @2013xile
- **[工作流：审批]** 修复审批发起后详情中已隐藏的字段标题重新显示且字段值为空的问题 by @zhangzhonghe
