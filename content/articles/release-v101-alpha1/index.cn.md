## 新特性

### 区块支持高度设置（[#4441](https://github.com/nocobase/nocobase/pull/4441)）

![](https://static-docs.nocobase.com/20240603115253.gif)

参考文档：

* [区块高度](https://docs-cn.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### 链接操作：跳转到指定 URL（[#4506](https://github.com/nocobase/nocobase/pull/4506)）

支持在 URL 或 Search parametrs 上传递变量。

<video controls="" height="280" width="100%"></video>

参考文档：

* [链接操作](https://docs-cn.nocobase.com/handbook/ui/actions/types/link)

### 新增 “URL 查询参数” 变量（[#4506](https://github.com/nocobase/nocobase/pull/4506)）

该变量仅在页面 URL 中存在查询字符串时可用，与 [链接操作](https://docs-cn.nocobase.com/handbook/ui/actions/types/link) 结合使用效果更佳。

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

参考文档：

* [URL 查询参数](https://docs-cn.nocobase.com/handbook/ui/variables#url-%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0)
* [链接操作](https://docs-cn.nocobase.com/handbook/ui/actions/types/link)

### Iframe支持变量（[#4512](https://github.com/nocobase/nocobase/pull/4512)）

![](https://static-docs.nocobase.com/20240603114711.png)

![](https://static-docs.nocobase.com/20240603114750.png)

参考文档：

* [iframe 区块](https://docs-cn.nocobase.com/handbook/block-iframe)

### 文件存储支持配置文件大小和文件类型（[#4118](https://github.com/nocobase/nocobase/pull/4118)）

![](https://static-docs.nocobase.com/20240603115303.png)

参考文档：

* [文件存储引擎](https://docs-cn.nocobase.com/handbook/file-manager/storage)

### 工作流：变量节点支持选择变量的中间层级数据对象作为变量的值

![](https://static-docs.nocobase.com/20240531211727.png)

### URL 字段支持预览（[#4559](https://github.com/nocobase/nocobase/pull/4559)）

暂时只支持图片类型的预览。

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### 数据可视化：支持“URL 查询参数”和“当前角色”变量（[#4586](https://github.com/nocobase/nocobase/pull/4586)）

![](https://static-docs.nocobase.com/202406071148997.png)

![](https://static-docs.nocobase.com/202406071149567.png)

## 优化

### 导入导出功能优化 ([#4468](https://github.com/nocobase/nocobase/pull/4468))

提升导入导出功能的稳定性，增加导入导出的限制至 2000 条记录。支持扩展自定义字段类型的导入导出逻辑。

![](https://static-docs.nocobase.com/20240611112948.png)

### 通过禁用日期变量选项，来避免产生误操作（[#4452](https://github.com/nocobase/nocobase/pull/4452)）

日期的变量除了 current time 是时刻（字符串），其他的都是时段（数组），可以用于筛选，但并不能直接作为默认值。

![](https://static-docs.nocobase.com/20240527150429.png)

### 联动规则赋值交互优化 ([#4492](https://github.com/nocobase/nocobase/pull/4492))

多选字段不出现赋值选项，单选字段选了赋值后再多选字段，将清空配置。

![](https://static-docs.nocobase.com/20240603143309.png)

### 调整表格区块的操作栏的右上角图标（[#4538](https://github.com/nocobase/nocobase/pull/4538)）

![](https://static-docs.nocobase.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

细化前端捕获错误的组件级别，避免因前端错误导致整个页面不可用。

![](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### 支持在前端报错时收集相关信息并快捷下载日志（[#4524](https://github.com/nocobase/nocobase/pull/4524)）

![](https://static-docs.nocobase.com/202406041224009.png)

### 其他

* 修改用户名长度限制为 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* 不隐藏外键字段（[#4499](https://github.com/nocobase/nocobase/pull/4499)）

## 修复

### 配置权限弹窗中的数据范围中不应该支持“当前表单”和“当前弹窗记录”变量（[#4484](https://github.com/nocobase/nocobase/pull/4484)）

![](https://static-docs.nocobase.com/20240527145519.png)

### 支持直接选择变量的值作为关系字段的默认值（[#4439](https://github.com/nocobase/nocobase/pull/4439)）

![](https://static-docs.nocobase.com/20240603121447.png)

### 修复多次添加“自定义请求”操作时报错的问题（[#4458](https://github.com/nocobase/nocobase/pull/4458)）

![](https://static-docs.nocobase.com/20240603115234.png)

### 其它

* 修复表单提交后，子表格中的内容没有被清空的问题。（[#4475](https://github.com/nocobase/nocobase/pull/4475)）
* 修复在子表格中使用“当前对象”变量异常的问题。（[#4521](https://github.com/nocobase/nocobase/pull/4521)）
* 修复表单中的地图字段缺少“地图默认缩放级别”选项的问题。（[#4527](https://github.com/nocobase/nocobase/pull/4527)）
* 修复在弹窗中使用区块模板添加区块不显示的问题。（[#4531](https://github.com/nocobase/nocobase/pull/4531)）
* 修复表单数据模板的样式问题。（[#4536](https://github.com/nocobase/nocobase/pull/4536)）
* 工作流：运算节点表达式输入框样式丢失问题。（[#4513](https://github.com/nocobase/nocobase/pull/4513)）
* 工作流：人工节点自定义表单创建字段类型错误问题。（[#4519](https://github.com/nocobase/nocobase/pull/4519)）
* 工作流：自定义操作事件触发权限问题。（[#4522](https://github.com/nocobase/nocobase/pull/4522)）
* 工作流：预加载关系字段配置对多数据源支持层级深度不够的问题。（[#4526](https://github.com/nocobase/nocobase/pull/4526)）
* `json-templates` 库拼串错误问题。（[#4525](https://github.com/nocobase/nocobase/pull/4525)）
* 文件管理器：腾讯云上传和删除报错的问题。（[#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537)）
* 表单联动规则赋值数字字段值为0.00时显示[object Object]。（[#4482](https://github.com/nocobase/nocobase/pull/4482)）
* 子表格缺失添加按钮控制项。（[#4498](https://github.com/nocobase/nocobase/pull/4498)）
* 表格编辑表单中提交按钮缺失联动规则配置项。（[#4515](https://github.com/nocobase/nocobase/pull/4515)）
* 数据可视化：修复设置图表筛选字段默认值时，字段组件消失的问题。（[#4509](https://github.com/nocobase/nocobase/pull/4509)）
* 用户认证：修复新建的密码认证，注册页面找不到的问题。（[#4556](https://github.com/nocobase/nocobase/pull/4556)）
* 本地化：修复翻译菜单，页面标题没有同步翻译的问题。（[#4557](https://github.com/nocobase/nocobase/pull/4557)）
* 地图：修复高德地图配置正确但提示密钥错误的问题。（[#4574](https://github.com/nocobase/nocobase/pull/4574)）
