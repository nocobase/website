汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/cn/blog/v1.7.14)

*发布时间：2025-06-18*

#### 🚀 优化

- **[client]** 网格卡片区块操作栏为空时自动隐藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[验证]** 移除 `verifiers:listByUser` 接口中响应的认证器配置信息 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 修复

- **[database]** 修复 updateOrCreate 和 firstOrCreate 不支持关系更新的问题 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[client]**

  - 修复公开表单字段默认值中 URL 查询参数变量无效的问题 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 修复 子表格列字段 style 条件判断无效的问题 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 筛选表单中，通过关系表字段筛选无效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
- **[数据表字段：多对多 (数组)]** 存在 `updatedBy` 字段的时，更新多对多（数组）字段报错 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[公开表单]** 公开表单：修复提交表单时报无权限的问题 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/cn/blog/v1.7.13)

*发布时间：2025-06-17*

#### 🚀 优化

- **[client]** Logo 容器宽度根据内容类型自适应（图片固定 168px，文本自动宽度） ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[工作流：审批]** 为转签、加签的人员选择列表增加额外字段显示的配置项 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复子表格字段切换页面后必填提示不消失的问题 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 修复金额字段组件从掩码改为数字后小数点丢失的问题 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - 修复子表格中 Markdown（Vditor）字段组件渲染不正确的问题 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[数据表字段：自动编码]** 修复基于字符串的大整数序列计算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[备份管理器]** windows 平台下，还原 MySQL 应用时提示无法识别的命令错误 by @gchust

### [v1.7.12](https://www.nocobase.com/cn/blog/v1.7.12)

*发布时间：2025-06-16*

#### 🚀 优化

- **[client]** checkbox 字段联动条件判断支持 "为空”和“不为空” ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

#### 🐛 修复

- **[client]** 创建反向关系字段后，编辑关系字段设置项“在目标数据表里创建反向关系字段”未勾选 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[数据源管理]** 修改权限的数据范围后，相关角色同步生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[权限控制]** 修复了在没有默认角色时无法进入应用的问题 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[工作流：自定义操作事件]** 修复操作成功后配置中的重定向链接变量未解析的问题 by @mytharcher

### [v1.7.11](https://www.nocobase.com/cn/blog/v1.7.11)

*发布时间：2025-06-15*

#### 🎉 新特性

- **[文本复制]** 支持一键复制文本字段内容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 修复

- **[client]**

  - 关系字段数据选择器提交后未清空选中数据 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - 修复上传组件的大小提示文字 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[工作流：循环节点]** 修复循环分支在条件未满足时仍然执行的问题 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[工作流：审批]**

  - 修复待办统计在执行计划取消后未更新的问题 by @mytharcher
  - 修复触发器变量中按类型过滤的缺陷 by @mytharcher

### [v1.7.10](https://www.nocobase.com/cn/blog/v1.7.10)

*发布时间：2025-06-12*

#### 🐛 修复

- **[client]**

  - 修复联动规则卡死的问题 ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe
  - 修复：在 APIClient 中添加可选链以避免 handler 未定义时报错 ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
- **[数据可视化]** 修复图表区块中筛选表单的日期字段设置为“介于”时组件未正确显示的问题 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
- **[API 文档]** 非 NocoBase 官方插件无法展示API文档 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[操作：导入记录]** 导入 xlsx 禁止多行文本字段插入非字符串格式数据 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/cn/blog/v1.8.0-beta.9)

*发布时间：2025-06-18*

#### 🚀 优化

- **[client]**

  - 网格卡片区块操作栏为空时自动隐藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
  - Logo 容器宽度根据内容类型自适应（图片固定 168px，文本自动宽度） ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[验证]** 移除 `verifiers:listByUser` 接口中响应的认证器配置信息 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 修复

- **[client]**

  - 修复子表格字段切换页面后必填提示不消失的问题 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 修复 子表格列字段 style 条件判断无效的问题 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 修复金额字段组件从掩码改为数字后小数点丢失的问题 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - 修复公开表单字段默认值中 URL 查询参数变量无效的问题 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 筛选表单中，通过关系表字段筛选无效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - 修复子表格中 Markdown（Vditor）字段组件渲染不正确的问题 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[database]** 修复 updateOrCreate 和 firstOrCreate 不支持关系更新的问题 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[数据表字段：多对多 (数组)]** 存在 `updatedBy` 字段的时，更新多对多（数组）字段报错 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[数据表字段：自动编码]** 修复基于字符串的大整数序列计算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[公开表单]** 公开表单：修复提交表单时报无权限的问题 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/cn/blog/v1.8.0-beta.8)

*发布时间：2025-06-16*

#### 🚀 优化

- **[client]** checkbox 字段联动条件判断支持 "为空”和“不为空” ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
- **[工作流：审批]** 为转签、加签的人员选择列表增加额外字段显示的配置项 by @mytharcher

#### 🐛 修复

- **[备份管理器]** windows 平台下，还原 MySQL 应用时提示无法识别的命令错误 by @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/cn/blog/v1.8.0-beta.7)

*发布时间：2025-06-15*

#### 🎉 新特性

- **[文本复制]** 支持一键复制文本字段内容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 修复

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[client]**

  - 关系字段数据选择器提交后未清空选中数据 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - 创建反向关系字段后，编辑关系字段设置项“在目标数据表里创建反向关系字段”未勾选 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[权限控制]** 修复了在没有默认角色时无法进入应用的问题 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[工作流：循环节点]** 修复循环分支在条件未满足时仍然执行的问题 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[数据源管理]** 修改权限的数据范围后，相关角色同步生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[工作流：自定义操作事件]** 修复操作成功后配置中的重定向链接变量未解析的问题 by @mytharcher
- **[工作流：审批]**

  - 修复触发器变量中按类型过滤的缺陷 by @mytharcher
  - 修复待办统计在执行计划取消后未更新的问题 by @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/cn/blog/v1.8.0-beta.6)

*发布时间：2025-06-12*

#### 🎉 新特性

- **[审计日志]** 添加环境变量 `AUDIT_LOGGER_TRANSPORT` 来控制日志输出方式 by @2013xile

#### 🚀 优化

- **[client]** 禁止将一个分组菜单移动到自己内部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[日历]** 支持设置日历区块的周起始日（周日或周一） ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** Markdown（vditor）字段查看模式，支持图片点击放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复数据表中 many-to-many(many) 字段的权限错误 ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[评论]** 评论区块支持分页功能 by @katherinehhh

#### 🐛 修复

- **[client]**

  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
  - 修复联动规则卡死的问题 ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修复上传组件的大小提示文字 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
  - 修复：在 APIClient 中添加可选链以避免 handler 未定义时报错 ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
  - 修复筛选表单中联动规则设置下拉选项字段的 options 不生效问题 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 筛选表单的验证规则会导致筛选按钮无效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 用联动规则无法清除子表格的必填标志 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
  - 修复筛选区块参数错误的问题 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 修复了区块读取外部数据源视图数据时报错的问题。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 在联动规则中使用“当前对象”变量无效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
- **[database]** 修复导入xlsx功能缺失的创建人和最后更新人字段 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[undefined]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 by @aaaaaajie
- **[操作：导入记录]**

  - 导入 xlsx 禁止多行文本字段插入非字符串格式数据 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie
  - 修复子表导入关联字段报错的问题 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
  - 修复导入XLSX树表格数据时批量编辑报错 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[数据可视化]**

  - 修复图表区块中筛选表单的日期字段设置为“介于”时组件未正确显示的问题 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
  - 复选框字段在图表中应该显示标签值而不是原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[API 文档]** 非 NocoBase 官方插件无法展示API文档 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[工作流]**

  - 修复定时任务由于 `toJSON()` 导致的错误 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher
  - 修复触发器未正确配置时手动执行的报错 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
  - 修复工作流不存在时的页面报错 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
  - 修复数据表事件在新增或更新模式时，新增的数据不包含改变的字段导致不触发的问题 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[数据源管理]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[移动端]** 优化移动端弹窗卡顿的问题 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[操作：导出记录 Pro]** 修复在带条件导出附件时报错。 by @aaaaaajie
- **[工作流：JavaScript 节点]** 修复相对路径引入包失败的问题 by @mytharcher
- **[模板打印]** 修复权限解析错误并添加数据未找到的检查。 by @sheldon66
- **[工作流：审批]**

  - 避免未找到字段报错 by @mytharcher
  - 修复工作流删除之后报错的问题 by @mytharcher
  - 修复触发器提供的变量 by @mytharcher
  - 审批详情中重新加载文件数据以避免链接失效 by @mytharcher
  - 修复刷新审批内容详情页时 API 报错 by @mytharcher
- **[企业微信]** 网关中间件增加回调路径判断 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/cn/blog/v1.8.0-alpha.8)

*发布时间：2025-06-17*

#### 🎉 新特性

- **[文本复制]** 支持一键复制文本字段内容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe
- **[邮件管理]** 支持邮件删除 by @jiannx

#### 🚀 优化

- **[client]**

  - checkbox 字段联动条件判断支持 "为空”和“不为空” ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
  - Logo 容器宽度根据内容类型自适应（图片固定 168px，文本自动宽度） ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[异步任务管理器]** 优化导出创建任务响应慢 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[工作流：审批]** 为转签、加签的人员选择列表增加额外字段显示的配置项 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复金额字段组件从掩码改为数字后小数点丢失的问题 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - 修复子表格中 Markdown（Vditor）字段组件渲染不正确的问题 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
  - 创建反向关系字段后，编辑关系字段设置项“在目标数据表里创建反向关系字段”未勾选 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
  - 关系字段数据选择器提交后未清空选中数据 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[权限控制]** 修复了在没有默认角色时无法进入应用的问题 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[数据源管理]** 修改权限的数据范围后，相关角色同步生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[工作流：循环节点]** 修复循环分支在条件未满足时仍然执行的问题 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[工作流：自定义操作事件]** 修复操作成功后配置中的重定向链接变量未解析的问题 by @mytharcher
- **[工作流：审批]** 修复待办统计在执行计划取消后未更新的问题 by @mytharcher
- **[邮件管理]** 邮件删除失败 by @jiannx
- **[备份管理器]** windows 平台下，还原 MySQL 应用时提示无法识别的命令错误 by @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/cn/blog/v1.8.0-alpha.7)

*发布时间：2025-06-13*

#### 🎉 新特性

- **[邮件管理]** 支持邮件同步间隔设置 by @jiannx

#### 🐛 修复

- **[database]** string 类型字段的 eq 操作符兼容 number 类型 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[client]** 修复上传组件的大小提示文字 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[工作流：审批]** 修复触发器变量中按类型过滤的缺陷 by @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/cn/blog/v1.8.0-alpha.5)

*发布时间：2025-06-12*

#### 🚀 优化

- **[client]**

  - 支持在输入框中扫码填充数据 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 支持Markdown 中使用 {{t 'xxx'}} 进行本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 禁止将一个分组菜单移动到自己内部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[数据表字段：多对多 (数组)]** 修复数据表中 many-to-many(many) 字段的权限错误 ([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[日历]** 支持设置日历区块的周起始日（周日或周一） ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** Markdown（vditor）字段查看模式，支持图片点击放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

#### 🐛 修复

- **[client]**

  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 筛选表单的验证规则会导致筛选按钮无效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 修复二级弹窗配置表单字段时自动关闭弹窗的问题 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修复筛选表单中联动规则设置下拉选项字段的 options 不生效问题 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 用联动规则无法清除子表格的必填标志 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
  - 修复筛选区块参数错误的问题 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 修复当前用户数据为空的问题 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 在联动规则中使用“当前对象”变量无效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
  - 修复了区块读取外部数据源视图数据时报错的问题。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[数据可视化]**

  - 修复图表区块中筛选表单的日期字段设置为“介于”时组件未正确显示的问题 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
  - 复选框字段在图表中应该显示标签值而不是原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[操作：导入记录]**

  - 导入 xlsx 禁止多行文本字段插入非字符串格式数据 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie
  - 修复子表导入关联字段报错的问题 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
  - 修复导入XLSX树表格数据时批量编辑报错 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[API 文档]** 非 NocoBase 官方插件无法展示API文档 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[工作流]**

  - 修复定时任务由于 `toJSON()` 导致的错误 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher
  - 修复触发器未正确配置时手动执行的报错 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
  - 修复工作流不存在时的页面报错 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
  - 修复数据表事件在新增或更新模式时，新增的数据不包含改变的字段导致不触发的问题 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[移动端]** 优化移动端弹窗卡顿的问题 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[数据源管理]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[操作：导出记录 Pro]** 修复在带条件导出附件时报错。 by @aaaaaajie
