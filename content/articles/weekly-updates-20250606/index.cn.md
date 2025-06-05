汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**本周我们发布了 [NocoBase 1.7.0 版本](https://www.nocobase.com/cn/blog/nocobase-1-7-0)，该版本强化权限机制，优化系统性能，插件开源，从多方面提升功能实用性和用户体验。**

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/cn/blog/v1.6.35)

*发布时间：2025-05-29*

#### 🎉 新特性

- **[undefined]**
  - 新增 gitpod 的支持，可以一键启动开发环境 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612

#### 🚀 优化

- **[client]**
  - 优化表单 Tab 键的交互 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 菜单链接支持配置是否在新窗口打开 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 弹出二次确认对话框之前先验证字段必填项 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh

#### 🐛 修复

- **[client]**

  - 关系字段下拉请求数据未分页，调整为按 200 条分页 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 修复拖拽表格行时高亮位置不正确的问题 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 区块拖拽调整宽度失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
  - 字段赋值组件多语言不生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 报错信息无法正确被复制 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
- **[数据表字段：Markdown(Vditor)]** 修复 markdown-vditor 组件缩放后宽度异常 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流：审批]** 修复翻译内容 by @mytharcher

### [v1.6.36](https://www.nocobase.com/cn/blog/v1.6.36)

*发布时间：2025-05-29*

#### 🚀 优化

- **[认证：OIDC]** 按邮箱绑定用户时忽略大小写 by @2013xile

### [v1.6.37](https://www.nocobase.com/cn/blog/v1.6.37)

*发布时间：2025-05-30*

#### 🐛 修复

- **[client]**

  - 修复筛选按钮下拉列表的字段顺序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 修复编辑表单中子表格联动规则在清空关系字段后触发请求，未使用表单实时值计算值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 修复子表格中使用当前对象关系字段值作为变量值时，当关系字段值为空会发起请求的问题 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
- **[主题编辑器]** 隐藏主题切换选项，和修复弹窗样式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[工作流：审批]** 修复转签加签时带关系条件的人员范围查询报错问题 by @mytharcher

### [v1.6.38](https://www.nocobase.com/cn/blog/v1.6.38)

*发布时间：2025-06-03*

#### 🐛 修复

- **[client]**

  - 修复在弹窗中创建的区块，其数据表错误的问题 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 修复子页面中筛选表单默认值无效的问题 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 修复角色数据表自定义范围中外部数据源无法展开关系表字段的问题 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 修复“省略超出长度的内容”选项对关系字段无效的问题 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 修复单行文本字段阅读模式下，值会显示成一个数组的问题 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
- **[用户认证]** 因清理过期token导致的性能问题 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[文件管理器]** 修复阿里云 OSS 超时配置项 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[工作流：自定义操作事件]** 修复工作台的初始化按钮 by @mytharcher
- **[认证：OIDC]** 登录按钮标题的本地化翻译不生效 by @2013xile

### [v1.7.1](https://www.nocobase.com/cn/blog/v1.7.1)

*发布时间：2025-06-04*

#### 🎉 新特性

- **[数据可视化]** 在图表转换配置中支持乘法和除法 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark

#### 🚀 优化

- **[公开表单]** 支持使用 URL 参数作为变量 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher

#### 🐛 修复

- **[client]** 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
- **[工作流：人工处理节点]** 修复外部数据源导致初始化区块报错的问题 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/cn/blog/v1.8.0-beta.1)

*发布时间：2025-06-04*

#### 🎉 新特性

- **[undefined]** 新增"输入框复制按钮"插件，为单行文本字段提供一键复制功能 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612
- **[工作流]** 增加工作流分类管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher

#### 🚀 优化

- **[client]** 菜单链接支持配置是否在新窗口打开 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
- **[操作：导入记录 Pro]** 导入 xlsx 性能优化 by @aaaaaajie
- **[认证：OIDC]** 按邮箱绑定用户时忽略大小写 by @2013xile
- **[工作流：审批]** 从工作流插件导入工作流相关表，避免重写 by @mytharcher

#### 🐛 修复

- **[client]**

  - 添加字段和按钮后需要刷新页面才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe
  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
  - 修复在弹窗中创建的区块，其数据表错误的问题 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 为关系字段设置默认值时，无法选中变量 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe
  - 修复单行文本字段阅读模式下，值会显示成一个数组的问题 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
  - 修复角色数据表自定义范围中外部数据源无法展开关系表字段的问题 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 修复“省略超出长度的内容”选项对关系字段无效的问题 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 修复子页面中筛选表单默认值无效的问题 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 修复下拉关系字段组件新增数据时，首次打开弹窗输入内容会自动关闭弹窗的问题 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh
  - 修复子表格中使用当前对象关系字段值作为变量值时，当关系字段值为空会发起请求的问题 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
  - 修复筛选按钮下拉列表的字段顺序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 表单验证规则折叠面板收起后数据丢失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh
  - 修复联动规则设置多选下拉字段选项范围时已选值被清空的问题 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh
  - 修复编辑表单中子表格联动规则在清空关系字段后触发请求，未使用表单实时值计算值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 关系数据请求未分页，调整为按 200 条分页 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 联动规则中操作符从 ‘is between’ 切换回 ‘is’ 后，日期选择器未切换组件 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh
  - 修复拖拽表格行时高亮位置不正确的问题 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
- **[用户认证]** 因清理过期token导致的性能问题 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[工作流]** 修复筛选工作流时报错的问题 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher
- **[文件管理器]** 修复阿里云 OSS 超时配置项 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[主题编辑器]** 隐藏主题切换选项，和修复弹窗样式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[工作流：自定义操作事件]** 修复工作台的初始化按钮 by @mytharcher
- **[认证：OIDC]** 登录按钮标题的本地化翻译不生效 by @2013xile
- **[工作流：审批]** 修复转签加签时带关系条件的人员范围查询报错问题 by @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/cn/blog/v1.8.0-beta.2)

*发布时间：2025-06-04*

#### 🚀 优化

- **[模板打印]** 添加更多日志。 by @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/cn/blog/v1.8.0-beta.3)

*发布时间：2025-06-04*

#### 🎉 新特性

- **[数据可视化]** 在图表转换配置中支持乘法和除法 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark

#### 🚀 优化

- **[公开表单]** 支持使用 URL 参数作为变量 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher

#### 🐛 修复

- **[client]** 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
- **[工作流：人工处理节点]** 修复外部数据源导致初始化区块报错的问题 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/cn/blog/v1.8.0-alpha.1)

*发布时间：2025-06-04*

#### 🎉 新特性

- **[undefined]**

  - 新增gitpod的支持，可以一键启动开发环境，快速开始开发 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612
  - 新增"输入框复制按钮"插件，为单行文本字段提供一键复制功能 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612
- **[数据可视化]** 在图表转换配置中支持乘法和除法 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark
- **[工作流]** 增加工作流分类管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher
- **[邮件管理]** 支持批量发送 by @jiannx

#### 🚀 优化

- **[client]**

  - 优化日期范围筛选组件样式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh
  - 菜单链接支持配置是否在新窗口打开 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 解决表单隐藏控件也捕获了tab键的问题，极大提高了表单操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 弹出二次确认对话框之前先验证字段必填项 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh
- **[公开表单]** 支持使用 URL 参数作为变量 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher
- **[操作：导入记录 Pro]** 导入 xlsx 性能优化 by @aaaaaajie
- **[模板打印]** 添加更多日志。 by @sheldon66
- **[认证：OIDC]** 按邮箱绑定用户时忽略大小写 by @2013xile
- **[工作流：审批]** 从工作流插件导入工作流相关表，避免重写 by @mytharcher
- **[邮件管理]** 批量发送功能完善 by @jiannx

#### 🐛 修复

- **[client]**

  - 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
  - 修复在弹窗中创建的区块，其数据表错误的问题 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 修复单行文本字段阅读模式下，值会显示成一个数组的问题 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
  - 修复筛选按钮下拉列表的字段顺序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 添加字段和按钮后需要刷新页面才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe
  - 修复“省略超出长度的内容”选项对关系字段无效的问题 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 修复下拉关系字段组件新增数据时，首次打开弹窗输入内容会自动关闭弹窗的问题 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh
  - 修复子表格中使用当前对象关系字段值作为变量值时，当关系字段值为空会发起请求的问题 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
  - 表单验证规则折叠面板收起后数据丢失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh
  - 修复子页面中筛选表单默认值无效的问题 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 字段赋值组件多语言不生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 修复角色数据表自定义范围中外部数据源无法展开关系表字段的问题 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 联动规则中操作符从 ‘is between’ 切换回 ‘is’ 后，日期选择器未切换组件 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh
  - 修复编辑表单中子表格联动规则在清空关系字段后触发请求，未使用表单实时值计算值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 修复联动规则设置多选下拉字段选项范围时已选值被清空的问题 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh
  - 修复拖拽表格行时高亮位置不正确的问题 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 修复表单标签隐藏冒号设置无效的问题 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh
  - 关系数据请求未分页，调整为按 200 条分页 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 修复错误弹窗里的复制按钮复制出来是[object Object]的问题 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
  - 为关系字段设置默认值时，无法选中变量 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe
  - 区块拖拽调整宽度失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
- **[工作流：人工处理节点]** 修复外部数据源导致初始化区块报错的问题 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher
- **[用户认证]** 因清理过期token导致的性能问题 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[文件管理器]** 修复阿里云 OSS 超时配置项 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[工作流]** 修复筛选工作流时报错的问题 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher
- **[主题编辑器]** 隐藏主题切换选项，和修复弹窗样式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[数据表字段：Markdown(Vditor)]** 修复 markdown-vditor 组件缩放后宽度异常 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流：自定义操作事件]** 修复工作台的初始化按钮 by @mytharcher
- **[认证：OIDC]** 登录按钮标题的本地化翻译不生效 by @2013xile
- **[工作流：审批]** 修复转签加签时带关系条件的人员范围查询报错问题 by @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/cn/blog/v1.8.0-alpha.2)

*发布时间：2025-06-04*

#### 🐛 修复

- **[client]** 修复区块模板中因重复接口请求而导致的字段不显示问题 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
