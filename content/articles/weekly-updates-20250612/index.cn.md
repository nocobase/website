汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/cn/blog/v1.7.9)

*发布时间：2025-06-11*

#### 🐛 修复

- **[client]** 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh

### [v1.7.8](https://www.nocobase.com/cn/blog/v1.7.8)

*发布时间：2025-06-10*

#### 🎉 新特性

- **[审计日志]** 添加环境变量 `AUDIT_LOGGER_TRANSPORT` 来控制日志输出方式 by @2013xile

#### 🚀 优化

- **[日历]** 支持设置日历区块的周起始日（周日或周一） ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复数据表中 many-to-many(many) 字段的权限错误 ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

#### 🐛 修复

- **[client]**

  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修复筛选表单中联动规则设置下拉选项字段的 options 不生效问题 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 筛选表单的验证规则会导致筛选按钮无效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
- **[操作：导入记录]** 修复子表导入关联字段报错的问题 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
- **[数据可视化]** 复选框字段在图表中应该显示标签值而不是原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[工作流]** 修复触发器未正确配置时手动执行的报错 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
- **[工作流：审批]**

  - 避免未找到字段报错 by @mytharcher
  - 修复刷新审批内容详情页时 API 报错 by @mytharcher
- **[企业微信]** 网关中间件增加回调路径判断 by @2013xile

### [v1.7.6](https://www.nocobase.com/cn/blog/v1.7.6)

*发布时间：2025-06-09*

#### 🚀 优化

- **[client]** 禁止将一个分组菜单移动到自己内部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

#### 🐛 修复

- **[client]**

  - 修复了区块读取外部数据源视图数据时报错的问题。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 修复筛选区块参数错误的问题 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 在联动规则中使用“当前对象”变量无效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
  - 用联动规则无法清除子表格的必填标志 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
- **[undefined]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 by @aaaaaajie
- **[移动端]** 优化移动端弹窗卡顿的问题 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[数据源管理]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[操作：导入记录]** 修复导入XLSX树表格数据时批量编辑报错 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[工作流]** 修复工作流不存在时的页面报错 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
- **[工作流：JavaScript 节点]** 修复相对路径引入包失败的问题 by @mytharcher
- **[工作流：审批]**

  - 修复工作流删除之后报错的问题 by @mytharcher
  - 审批详情中重新加载文件数据以避免链接失效 by @mytharcher
  - 修复触发器提供的变量 by @mytharcher

### [v1.7.5](https://www.nocobase.com/cn/blog/v1.7.5)

*发布时间：2025-06-07*

#### 🐛 修复

- **[client]** 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[database]** 修复导入xlsx功能缺失的创建人和最后更新人字段 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[工作流]** 修复数据表事件在新增或更新模式时，新增的数据不包含改变的字段导致不触发的问题 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[操作：导出记录 Pro]** 修复在带条件导出附件时报错。 by @aaaaaajie

### [v1.7.4](https://www.nocobase.com/cn/blog/v1.7.4)

*发布时间：2025-06-07*

#### 🐛 修复

- **[client]**

  - 关系字段阅读模式下 hover 时出现子表格和子表单 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - 修复弹窗按钮中的 Markdown 区块联动规则不生效的问题 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
- **[本地化]** 修复词条为空导致的报错 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[异步任务管理器]** 修复异步导入多次执行缺陷 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[操作：导出记录 Pro]** 修复异步导入多次执行缺陷 by @aaaaaajie
- **[工作流：审批]** 修复转签后其他人通过的审批无法继续的问题 by @mytharcher

### [v1.7.3](https://www.nocobase.com/cn/blog/v1.7.3)

*发布时间：2025-06-06*

#### 🚀 优化

- **[工作流]** 支持使用更多字段筛选工作流 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

#### 🐛 修复

- **[client]**
  - 修复弹窗详情区块子表格翻页触发未保存提示的问题 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
  - 修复字段赋值组件赋值变量时未显示字段标题 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 修复字段样式联动规则设置不生效的问题 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh

### [v1.7.2](https://www.nocobase.com/cn/blog/v1.7.2)

*发布时间：2025-06-05*

#### 🚀 优化

- **[操作：批量编辑]** 在选择模式下使用 `filterByTk` 代替 `filter` 作为筛选参数 ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[操作：导入记录 Pro]** 优化导入xlsx文件在处理超大数据量（高行列数）时的内存耗尽，系统卡死或崩溃 by @aaaaaajie

#### 🐛 修复

- **[client]**

  - 修复字段赋值组件中字段标题未显示的问题 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 移动菜单的列表中，选不到最后一个菜单 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
- **[工作流]**

  - 修复筛选组件在切换分组选项卡时不更新的问题 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修复工作流统计数据未自动生成的问题 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/cn/blog/v1.8.0-beta.5)

*发布时间：2025-06-07*

#### 🚀 优化

- **[工作流]** 支持使用更多字段筛选工作流 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复弹窗按钮中的 Markdown 区块联动规则不生效的问题 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
  - 关系字段阅读模式下 hover 时出现子表格和子表单 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - 修复字段样式联动规则设置不生效的问题 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh
  - 修复字段赋值组件赋值变量时未显示字段标题 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 修复弹窗详情区块子表格翻页触发未保存提示的问题 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
- **[异步任务管理器]** 修复异步导入多次执行缺陷 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[本地化]** 修复词条为空导致的报错 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[操作：导出记录 Pro]** 修复异步导入多次执行缺陷 by @aaaaaajie
- **[工作流：审批]** 修复转签后其他人通过的审批无法继续的问题 by @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/cn/blog/v1.8.0-beta.4)

*发布时间：2025-06-05*

#### 🚀 优化

- **[操作：批量编辑]** 在选择模式下使用 `filterByTk` 代替 `filter` 作为筛选参数 ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[操作：导入记录 Pro]** 优化导入xlsx文件在处理超大数据量（高行列数）时的内存耗尽，系统卡死或崩溃 by @aaaaaajie

#### 🐛 修复

- **[client]**

  - 修复字段赋值组件中字段标题未显示的问题 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 移动菜单的列表中，选不到最后一个菜单 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
- **[工作流]**

  - 修复筛选组件在切换分组选项卡时不更新的问题 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修复工作流统计数据未自动生成的问题 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/cn/blog/v1.8.0-alpha.4)

*发布时间：2025-06-07*

#### 🚀 优化

- **[工作流]** 支持使用更多字段筛选工作流 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher
- **[邮件管理]** 支持弹窗内的发件默认值，支持收件人模糊搜索，问题修复 by @jiannx

#### 🐛 修复

- **[database]** 修复导入xlsx功能缺失的创建人和最后更新人字段 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[client]**

  - 修复字段赋值组件赋值变量时未显示字段标题 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 关系字段阅读模式下 hover 时出现子表格和子表单 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - 修复弹窗按钮中的 Markdown 区块联动规则不生效的问题 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
  - 修复弹窗详情区块子表格翻页触发未保存提示的问题 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
  - 修复字段样式联动规则设置不生效的问题 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh
- **[异步任务管理器]** 修复异步导入多次执行缺陷 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[本地化]** 修复词条为空导致的报错 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[操作：导出记录 Pro]** 修复异步导入多次执行缺陷 by @aaaaaajie
- **[工作流：审批]** 修复转签后其他人通过的审批无法继续的问题 by @mytharcher
- **[邮件管理]**

  - mailmessagelabels_mailmessages 存在重复主键 by @jiannx
  - 设置弹窗不显示 by @jiannx
  - 邮件模糊搜索后做唯一过滤 by @jiannx
  - 收件人模糊搜素支持关联字段 by @jiannx
  - mailmessagelabelsMailmessages 表中添加id字段 by @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/cn/blog/v1.8.0-alpha.3)

*发布时间：2025-06-06*

#### 🚀 优化

- **[操作：批量编辑]** 在选择模式下使用 `filterByTk` 代替 `filter` 作为筛选参数 ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[操作：导入记录 Pro]** 优化导入xlsx文件在处理超大数据量（高行列数）时的内存耗尽，系统卡死或崩溃 by @aaaaaajie

#### 🐛 修复

- **[client]**

  - 修复字段赋值组件中字段标题未显示的问题 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 移动菜单的列表中，选不到最后一个菜单 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
  - 通过弹窗链接打开的页面，内容显示的不对 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
- **[工作流]**

  - 修复筛选组件在切换分组选项卡时不更新的问题 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修复工作流统计数据未自动生成的问题 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher
