汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/cn/blog/v1.6.11)

*发布时间：2025-03-27*

#### 🚀 优化

- **[client]**

  - 优化 502 错误提示 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 仅支持纯文本文件预览 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
- **[数据表字段：自动编码]** 支持使用 sequence 作为日历区块的标题字段 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[工作流：审批]** 支持审批处理按钮跳过表单验证的设置 by @mytharcher

#### 🐛 修复

- **[client]**

  - 数据范围中筛选日期字段显示异常 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 选项“省略超出长度的内容”需要刷新页面，开关的状态才生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 在弹窗中无法再次打开弹窗 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
- **[API 文档]** API 文档页面不能滚动 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流]** 确保创建工作流之前 key 已生成 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[工作流：操作后事件]** 多行记录的批量操作需要触发多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[用户认证]** 注册页面字段的本地化问题 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[公开表单]** 公开表单页面标题不应该显示 Loading... ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

### [v1.6.12](https://www.nocobase.com/cn/blog/v1.6.12)

*发布时间：2025-03-27*

#### 🐛 修复

- **[区块：分步表单]**

  - 提交按钮默认和高亮情况下颜色一样 by @jiannx
  - 修复当字段与其他表单字段存在关联时，表单重置无效 by @jiannx
- **[工作流：审批]** 修复审批表单提交值的问题 by @mytharcher

### [v1.6.13](https://www.nocobase.com/cn/blog/v1.6.13)

*发布时间：2025-03-28*

#### 🚀 优化

- **[异步任务管理器]** 优化 Pro 导入导出按钮异步逻辑 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[操作：导出记录 Pro]** 优化 Pro 导入导出按钮 by @katherinehhh
- **[迁移管理]** 允许执行迁移时跳过自动备份还原 by @gchust

#### 🐛 修复

- **[client]** 同一表单中不同关系字段的同名关系字段的联动互相影响 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[操作：批量编辑]** 点击批量编辑按钮，配置完弹窗再打开，弹窗是空白的 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/cn/blog/v1.6.14)

*发布时间：2025-03-29*

#### 🐛 修复

- **[日历]** 日历区块以周为视图时，边界日期不显示数据 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[认证：OIDC]** 回调路径是字符串'null'时导致跳转不正确 by @2013xile
- **[工作流：审批]** 修复审批节点界面配置变更后数据未同步的问题 by @mytharcher

### [v1.6.15](https://www.nocobase.com/cn/blog/v1.6.15)

*发布时间：2025-04-01*

#### 🚀 优化

- **[database]**

  - 为多行文本类型字段增加去除首尾空白字符的选项 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 为单行文本增加自动去除首尾空白字符的选项 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[文件管理器]** 为存储引擎表的文本字段增加去除首尾空白字符的选项 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[工作流]** 优化代码 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[工作流：审批]** 支持审批表单使用区块模板 by @mytharcher

#### 🐛 修复

- **[database]** 避免“日期时间（无时区）”字段在值未变动的更新时触发值改变 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
- **[client]**

  - 关系字段（select）放出关系表字段时默认显示 N/A ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 修复 `SchemaInitializerItem` 配置了 `items` 时 `disabled` 属性无效的问题 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - 级联组件删除后重新选择时出现 'The value of xxx cannot be in array format' ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 主表筛选带有多对多（数组）字段的关联表中的字段报错的问题 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[公开表单]** 查看权限包括 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[用户认证]** `AuthProvider` 中的 token 赋值 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[工作流]** 修复同步选项展示问题 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[区块：地图]** 地图管理必填校验不应通过空格输入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[工作流：审批]**

  - 修复审批表单中的前端变量 by @mytharcher
  - 修复分支模式下配置拒绝则结束时的流程问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/cn/blog/v1.7.0-beta.10)

*发布时间：2025-03-27*

#### 🎉 新特性

- **[client]** 提交成功后支持变量配置，支持带参数数跳转详情页 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** Vditor 支持 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 优化

- **[client]**

  - 仅支持纯文本文件预览 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 优化 502 错误提示 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 限制联动规则字段属性中不同字段可选的 Action ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[文件管理器]** 调整存储引擎的 `getFileData` 方法 API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[权限控制]** 优化切换角色顺序和样式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[数据表字段：自动编码]** 支持使用 sequence 作为日历区块的标题字段 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[工作流]** 将统计数据列拆分为独立表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[工作流：自定义操作事件]** 将统计数据列拆分为独立表 by @mytharcher
- **[工作流：审批]**

  - 将统计数据列拆分为独立表 by @mytharcher
  - 支持审批处理按钮跳过表单验证的设置 by @mytharcher

#### 🐛 修复

- **[client]**

  - 旧版本的浏览器，页面会显示空白 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 选项“省略超出长度的内容”需要刷新页面，开关的状态才生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 数据范围中筛选日期字段显示异常 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 在弹窗中无法再次打开弹窗 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 页面顶部菜单显示空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - 字段赋值对字段进行“空值”赋值无效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
- **[工作流]**

  - 确保创建工作流之前 key 已生成 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
  - 修复配置自动删除选项时报错问题 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
- **[公开表单]** 公开表单页面标题不应该显示 Loading... ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[移动端]** 调整在手机上显示的字体大小为 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[变量和密钥]** 变量密钥筛选按钮缺少 icon、筛选后不显示筛选个数、筛选后切换页面变量密钥数据不刷新 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[用户认证]** 注册页面字段的本地化问题 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[API 文档]** API 文档页面不能滚动 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流：操作后事件]** 多行记录的批量操作需要触发多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[区块：模板]**

  - 表单联动规则未正确从模板同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
  - 详情区块存在重复的另存为模板菜单 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
- **[工作流：审批]** 修复审批表单提交值的问题 by @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/cn/blog/v1.7.0-beta.11)

*发布时间：2025-03-27*

#### 🐛 修复

- **[区块：分步表单]** 提交按钮默认和高亮情况下颜色一样 by @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/cn/blog/v1.7.0-beta.12)

*发布时间：2025-03-28*

#### 🎉 新特性

- **[区块：操作面板]** 添加一个 onScanSuccess 回调函数，用于处理扫描成功事件并退出相机界面。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

#### 🚀 优化

- **[异步任务管理器]** 优化 Pro 导入导出按钮异步逻辑 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[操作：导出记录 Pro]** 优化 Pro 导入导出按钮 by @katherinehhh
- **[迁移管理]** 允许执行迁移时跳过自动备份还原 by @gchust

#### 🐛 修复

- **[client]** 同一表单中不同关系字段的同名关系字段的联动互相影响 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[日历]** 日历区块以周为视图时，边界日期不显示数据 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[权限控制]** 设置当前登录角色不正确 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie
- **[操作：批量编辑]** 点击批量编辑按钮，配置完弹窗再打开，弹窗是空白的 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe
- **[区块：分步表单]** 修复当字段与其他表单字段存在关联时，表单重置无效 by @jiannx
- **[工作流：审批]** 修复审批节点界面配置变更后数据未同步的问题 by @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/cn/blog/v1.7.0-beta.13)

*发布时间：2025-04-01*

#### 🚀 优化

- **[database]**

  - 为多行文本类型字段增加去除首尾空白字符的选项 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 为单行文本增加自动去除首尾空白字符的选项 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[client]** 表单字段标题支持根据布局设置显示或隐藏冒号 ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh
- **[文件管理器]** 为存储引擎表的文本字段增加去除首尾空白字符的选项 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[工作流]** 优化代码 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[工作流：审批]** 支持审批表单使用区块模板 by @mytharcher

#### 🐛 修复

- **[database]**

  - 避免“日期时间（无时区）”字段在值未变动的更新时触发值改变 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
  - 删除一对多记录时，同时传递 `filter` 和 `filterByTk` 参数，`filter` 包含关系字段时，`filterByTk` 参数失效 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile
- **[client]**

  - 修复 `SchemaInitializerItem` 配置了 `items` 时 `disabled` 属性无效的问题 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - 级联组件删除后重新选择时出现 'The value of xxx cannot be in array format' ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  - 关系字段（select）放出关系表字段时默认显示 N/A ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 提交、刷新按钮设置 仅显示图标不起作用 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh
- **[公开表单]** 查看权限包括 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[用户认证]** `AuthProvider` 中的 token 赋值 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[数据表字段：多对多 (数组)]** 主表筛选带有多对多（数组）字段的关联表中的字段报错的问题 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[工作流]** 修复同步选项展示问题 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[区块：地图]** 地图管理必填校验不应通过空格输入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[认证：OIDC]** 回调路径是字符串'null'时导致跳转不正确 by @2013xile
- **[工作流：审批]**

  - 修复审批表单中的前端变量 by @mytharcher
  - 修复分支模式下配置拒绝则结束时的流程问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/cn/blog/v1.7.0-alpha.10)

*发布时间：2025-03-25*

#### 🎉 新特性

- **[client]** 提交成功后支持变量配置，支持带参数数跳转详情页 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** Vditor 支持 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 优化

- **[client]**

  - 仅支持纯文本文件预览 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 优化 502 错误提示 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 限制联动规则字段属性中不同字段可选的 Action ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[工作流]** 将统计数据列拆分为独立表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[移动端]** 适配通知弹窗移动端的样式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[数据表字段：自动编码]** 支持使用 sequence 作为日历区块的标题字段 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[文件管理器]** 调整存储引擎的 `getFileData` 方法 API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[权限控制]** 优化切换角色顺序和样式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[公开表单]** 公开表单页面标题，显示为创建时设置的标题 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[工作流：自定义操作事件]** 将统计数据列拆分为独立表 by @mytharcher
- **[工作流：审批]**

  - 支持审批处理按钮跳过表单验证的设置 by @mytharcher
  - 将统计数据列拆分为独立表 by @mytharcher

#### 🐛 修复

- **[client]**

  - 旧版本的浏览器，页面会显示空白 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 在弹窗中无法再次打开弹窗 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 选项“省略超出长度的内容”需要刷新页面，开关的状态才生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 数据范围中筛选日期字段显示异常 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 页面顶部菜单显示空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 添加链接页面时，无法使用“当前用户”变量 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 字段赋值对字段进行“空值”赋值无效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 筛选表单中，移除下拉单选字段的“允许多选”选项 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - 关系字段的数据范围联动不生效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - `yarn doc` 命令报错 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 表格行按钮拖拽排序缺陷 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
- **[移动端]** 调整在手机上显示的字体大小为 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[工作流]**

  - 修复配置自动删除选项时报错问题 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
  - 确保创建工作流之前 key 已生成 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[变量和密钥]** 变量密钥筛选按钮缺少 icon、筛选后不显示筛选个数、筛选后切换页面变量密钥数据不刷新 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[公开表单]** 公开表单页面标题不应该显示 Loading... ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[API 文档]** API 文档页面不能滚动 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流：操作后事件]** 多行记录的批量操作需要触发多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[区块：模板]**

  - 详情区块存在重复的另存为模板菜单 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
  - 表单联动规则未正确从模板同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
- **[用户认证]** 注册页面字段的本地化问题 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[操作：自定义请求]** 无法下载utf8编码的文件 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[数据表：树]** 树表插件的迁移脚本问题 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[区块：分步表单]** 提交按钮默认和高亮情况下颜色一样 by @jiannx
- **[工作流：审批]** 修复审批表单提交值的问题 by @mytharcher
