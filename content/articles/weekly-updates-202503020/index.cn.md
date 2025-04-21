汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/cn/blog/v1.6.2)

*发布时间：2025-03-12*

#### 🐛 修复

- **[client]** 表单日期字段日期范围，最大日期可选范围少一天 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
- **[通知：站内信]** 避免错误的接收人配置导致查询出全部用户 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[工作流：人工处理节点]**

  - 修复遗漏表前缀和 schema 的迁移脚本 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
  - 调整迁移脚本版本范围限制为 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

### [v1.6.3](https://www.nocobase.com/cn/blog/v1.6.3)

*发布时间：2025-03-14*

#### 🎉 新特性

- **[企业微信]** 支持自定义登录按钮提示 by @2013xile

#### 🐛 修复

- **[client]**

  - 修复图片中特殊字符导致不显示的问题 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - 子表格切换分页数后新增数据页码显示错误 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - Logo 的样式与之前的不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
- **[工作流：人工处理节点]** 修复迁移脚本报错 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[数据可视化]** 添加自定义筛选字段时会出现已移除字段 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[文件管理器]** 修复文件管理一些问题 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[操作：自定义请求]** 自定义请求的服务端权限校验错误 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[数据源管理]** 角色管理中切换数据源没有加载对应数据表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[操作：批量编辑]** 修复批量编辑提交时未能触发工作流的问题 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[工作流：自定义操作事件]** 移除 E2E 测试中的 `only` by @mytharcher
- **[工作流：审批]**

  - 修复审批表单中关系数据未展示的问题 by @mytharcher
  - 修复外部数据源审批时的报错 by @mytharcher

### [v1.6.4](https://www.nocobase.com/cn/blog/v1.6.4)

*发布时间：2025-03-15*

#### 🎉 新特性

- **[client]** 级联选择组件添加数据范围设置 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 优化

- **[utils]** 将 `md5` 方法移到通用包 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 修复

- **[client]** 在树区块中，取消选中时，数据区块的数据没有被清空 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[文件管理器]** 无法删除 s3 文件存储的文件 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[工作流]** 在数据选择器中移除绑定工作流的配置按钮 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[文件存储：S3 (Pro)]** 修复 s3 pro 的签名 url 无法访问的问题 by @chenos
- **[工作流：审批]** 避免审批流程表格中由于没有发起人时的页面崩溃 by @mytharcher

### [v1.6.5](https://www.nocobase.com/cn/blog/v1.6.5)

*发布时间：2025-03-17*

#### 🚀 优化

- **[文件管理器]** 简化生成文件 URL 的逻辑和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[文件存储：S3 (Pro)]** 优化生成文件 URL 的方法 by @mytharcher
- **[备份管理器]** 允许在相同版本的预发布和发布版本之间恢复备份 by @gchust

#### 🐛 修复

- **[client]**

  - 富文本字段清空后提交时数据未删除 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 页面右上角图标的颜色不会随主题变化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 点击筛选表单的重置按钮无法清除网格卡片区块的筛选条件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工处理节点]**

  - 修复迁移脚本 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 修改迁移脚本确保执行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修复区块的筛选组件中工作流标题项 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 修复 id 列不存在时迁移脚本报错 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - 避免历史表被关系字段同步出来 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[工作流：聚合查询节点]** 修复对聚合结果为 null 时取整报错 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[工作流]** 不统计已删除的工作流的待办 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[备份管理器]** 默认的备份设置不存在时服务器无法启动 by @gchust
- **[工作流：审批]**

  - 修复审批表单中文件字段报错问题 by @mytharcher
  - 基于钩子事件修复待办任务数量 by @mytharcher

### [v1.6.6](https://www.nocobase.com/cn/blog/v1.6.6)

*发布时间：2025-03-18*

#### 🎉 新特性

- **[client]** 支持长文本字段作为关系字段的标题字段 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[工作流：聚合查询节点]** 支持为聚合结果配置精度选项 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 优化

- **[文件存储：S3 (Pro)]** 将文案“访问 URL 基础”改为“基础 URL” by @zhangzhonghe

#### 🐛 修复

- **[evaluators]** 将表达式计算保留小数调整回 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[文件管理器]** URL 转义 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[数据源：主数据库]** 无法创建 MySQL 视图 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[工作流]** 修复历史遗留任务数量工作流删除后统计错误 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[嵌入 NocoBase]** 页面显示空白 by @zhangzhonghe
- **[备份管理器]**

  - 通过多应用模板创建子应用时备份中的上传文件未被正确还原 by @gchust
  - 还原 MySQL 数据库备份时由于 GTID 集合重叠导致的失败 by @gchust
- **[工作流：审批]**

  - 将退回的审批单据列入待办 by @mytharcher
  - 修复审批过程表格中发起人查看按钮消失的问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/cn/blog/v1.7.0-beta.2)

*发布时间：2025-03-13*

#### 🎉 新特性

- **[client]**

  - 表格区块支持配置隐藏最左侧序号和选择列（默认显示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 支持在联动规则配置可选项字段选项 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 联动规则支持配置时间字段的日期范围 (min/max) ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[区块：操作面板]** 支持操作面板按钮标题换行或省略 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

#### 🐛 修复

- **[client]**

  - 子表格切换分页数后新增数据页码显示错误 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - Logo 的样式与之前的不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 子表格删除记录的时候多选字段值错误且选项缺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 表单日期字段日期范围，最大日期可选范围少一天 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - 使用“$anyOf”操作符时，联动规则无效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 使用链接按钮打开的弹窗，数据不更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[操作：批量编辑]** 修复批量编辑提交时未能触发工作流的问题 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[数据可视化]** 添加自定义筛选字段时会出现已移除字段 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[数据源管理]** 角色管理中切换数据源没有加载对应数据表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[操作：自定义请求]** 自定义请求的服务端权限校验错误 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[文件管理器]** 修复文件管理一些问题 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[通知：站内信]**

  - 避免错误的接收人配置导致查询出全部用户 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
  - 在站内信列表中，将背景颜色与消息卡片的颜色区分开，以提升视觉层次感和可读性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
- **[工作流：人工处理节点]**

  - 调整迁移脚本版本范围限制为 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - 修复遗漏表前缀和 schema 的迁移脚本 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/cn/blog/v1.7.0-beta.3)

*发布时间：2025-03-14*

#### 🎉 新特性

- **[企业微信]** 支持自定义登录按钮提示 by @2013xile

#### 🚀 优化

- **[数据可视化]** 使用 `x-settings` 替换已废弃的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 修复

- **[client]** 修复图片中特殊字符导致不显示的问题 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
- **[工作流：人工处理节点]** 修复迁移脚本报错 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[工作流：自定义操作事件]** 移除 E2E 测试中的 `only` by @mytharcher
- **[工作流：审批]**

  - 修复外部数据源审批时的报错 by @mytharcher
  - 修复审批表单中关系数据未展示的问题 by @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/cn/blog/v1.7.0-beta.4)

*发布时间：2025-03-15*

#### 🎉 新特性

- **[client]** 级联选择组件添加数据范围设置 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 优化

- **[utils]** 将 `md5` 方法移到通用包 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 修复

- **[client]** 在树区块中，取消选中时，数据区块的数据没有被清空 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[文件管理器]** 无法删除 s3 文件存储的文件 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[工作流]** 在数据选择器中移除绑定工作流的配置按钮 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[文件存储：S3 (Pro)]** 修复 s3 pro 的签名 url 无法访问的问题 by @chenos
- **[工作流：审批]** 避免审批流程表格中由于没有发起人时的页面崩溃 by @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/cn/blog/v1.7.0-beta.5)

*发布时间：2025-03-18*

#### 🎉 新特性

- **[client]** 支持表格行内操作仅显示图标，鼠标悬停显示操作名称 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 优化

- **[文件管理器]** 简化生成文件 URL 的逻辑和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[文件存储：S3 (Pro)]**

  - 将文案“访问 URL 基础”改为“基础 URL” by @zhangzhonghe
  - 优化生成文件 URL 的方法 by @mytharcher
- **[备份管理器]** 允许在相同版本的预发布和发布版本之间恢复备份 by @gchust

#### 🐛 修复

- **[client]**

  - 页面右上角图标的颜色不会随主题变化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 富文本字段清空后提交时数据未删除 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 点击筛选表单的重置按钮无法清除网格卡片区块的筛选条件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工处理节点]**

  - 修复迁移脚本 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 修改迁移脚本确保执行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修复区块的筛选组件中工作流标题项 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 避免历史表被关系字段同步出来 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
  - 修复 id 列不存在时迁移脚本报错 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
- **[工作流]** 不统计已删除的工作流的待办 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[工作流：聚合查询节点]** 修复对聚合结果为 null 时取整报错 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[嵌入 NocoBase]** 页面显示空白 by @zhangzhonghe
- **[备份管理器]** 默认的备份设置不存在时服务器无法启动 by @gchust
- **[工作流：审批]**

  - 修复审批表单中文件字段报错问题 by @mytharcher
  - 基于钩子事件修复待办任务数量 by @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/cn/blog/v1.7.0-beta.6)

*发布时间：2025-03-19*

#### 🎉 新特性

- **[client]** 支持长文本字段作为关系字段的标题字段 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[工作流：聚合查询节点]** 支持为聚合结果配置精度选项 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🐛 修复

- **[evaluators]** 将表达式计算保留小数调整回 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[工作流]** 修复历史遗留任务数量工作流删除后统计错误 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[数据源：主数据库]** 无法创建 MySQL 视图 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[文件管理器]** URL 转义 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[备份管理器]**

  - 还原 MySQL 数据库备份时由于 GTID 集合重叠导致的失败 by @gchust
  - 通过多应用模板创建子应用时备份中的上传文件未被正确还原 by @gchust
- **[工作流：审批]**

  - 修复审批过程表格中发起人查看按钮消失的问题 by @mytharcher
  - 将退回的审批单据列入待办 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/cn/blog/v1.7.0-alpha.2)

*发布时间：2025-03-15*

#### 🎉 新特性

- **[client]**

  - 级联选择组件添加数据范围设置 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038
  - 表格区块支持配置隐藏最左侧序号和选择列（默认显示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 支持在联动规则配置可选项字段选项 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 联动规则支持配置时间字段的日期范围 (min/max) ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[acl]** 支持用户角色并集 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[区块：操作面板]** 支持操作面板按钮标题换行或省略 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh
- **[plugin-demo-platform]** 设置 "/new" 路由的 skipAuthCheck 为 true。 by @sheldon66
- **[企业微信]** 支持自定义登录按钮提示 by @2013xile

#### 🚀 优化

- **[utils]**

  - 将 `md5` 方法移到通用包 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher
  - 桌面端页面自适应移动端样式 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[client]** 在 router.add 中添加 skipAuthCheck，防止在访问公共页面时重定向到登录页。 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
- **[数据可视化]** 使用 `x-settings` 替换已废弃的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 修复

- **[client]**

  - 在树区块中，取消选中时，数据区块的数据没有被清空 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
  - 修复图片中特殊字符导致不显示的问题 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - 子表格切换分页数后新增数据页码显示错误 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - 移动端浏览器中，页面内容显示不全 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - Logo 的样式与之前的不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 表单日期字段日期范围，最大日期可选范围少一天 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - 使用“$anyOf”操作符时，联动规则无效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 子表格删除记录的时候多选字段值错误且选项缺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 使用链接按钮打开的弹窗，数据不更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[acl]** 修复角色并集下关系字段不显示 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[文件管理器]**

  - 无法删除 s3 文件存储的文件 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
  - 修复文件管理一些问题 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[工作流]** 在数据选择器中移除绑定工作流的配置按钮 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[工作流：人工处理节点]**

  - 修复迁移脚本报错 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
  - 调整迁移脚本版本范围限制为 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - 修复遗漏表前缀和 schema 的迁移脚本 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
- **[权限控制]**

  - 修复角色不生效 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
  - 通用的操作数据范围为自己的数据时，若表无创建人字段会报错。 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
- **[WEB 客户端]** 将所有使用 ctx.state.currentRole（单角色）的地方替换为 ctx.state.currentRoles（支持多角色）。 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[操作：批量编辑]** 修复批量编辑提交时未能触发工作流的问题 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[数据源管理]** 角色管理中切换数据源没有加载对应数据表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[数据可视化]** 添加自定义筛选字段时会出现已移除字段 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[通知：站内信]**

  - 在站内信列表中，将背景颜色与消息卡片的颜色区分开，以提升视觉层次感和可读性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
  - 避免错误的接收人配置导致查询出全部用户 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[操作：自定义请求]** 自定义请求的服务端权限校验错误 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[认证：API 密钥]** API keys 插件角色列表移除 union ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[区块：模板]** 移动端页面区块另存为模板不正确 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
- **[工作流：自定义操作事件]** 移除 E2E 测试中的 `only` by @mytharcher
- **[文件存储：S3 (Pro)]** 修复 s3 pro 的签名 url 无法访问的问题 by @chenos
- **[工作流：审批]**

  - 避免审批流程表格中由于没有发起人时的页面崩溃 by @mytharcher
  - 修复审批表单中关系数据未展示的问题 by @mytharcher
  - 修复外部数据源审批时的报错 by @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/cn/blog/v1.7.0-alpha.3)

*发布时间：2025-03-18*

#### 🎉 新特性

- **[client]** 支持表格行内操作仅显示图标，鼠标悬停显示操作名称 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 优化

- **[文件管理器]** 简化生成文件 URL 的逻辑和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[文件存储：S3 (Pro)]**

  - 将文案“访问 URL 基础”改为“基础 URL” by @zhangzhonghe
  - 优化生成文件 URL 的方法 by @mytharcher
- **[备份管理器]** 允许在相同版本的预发布和发布版本之间恢复备份 by @gchust

#### 🐛 修复

- **[client]**

  - 联动规则中字段列表没有显示全部可选字段 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - 页面右上角图标的颜色不会随主题变化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 富文本字段清空后提交时数据未删除 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 表单默认值输入框样式不正确 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
  - 点击筛选表单的重置按钮无法清除网格卡片区块的筛选条件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工处理节点]**

  - 修改迁移脚本确保执行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修复迁移脚本 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 修复区块的筛选组件中工作流标题项 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 修复 id 列不存在时迁移脚本报错 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - 避免历史表被关系字段同步出来 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[工作流]** 不统计已删除的工作流的待办 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[变量和密钥]** 变量与密钥弹窗界面按钮不显示 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[工作流：聚合查询节点]** 修复对聚合结果为 null 时取整报错 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[嵌入 NocoBase]** 页面显示空白 by @zhangzhonghe
- **[备份管理器]** 默认的备份设置不存在时服务器无法启动 by @gchust
- **[工作流：审批]**

  - 修复审批表单中文件字段报错问题 by @mytharcher
  - 基于钩子事件修复待办任务数量 by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
