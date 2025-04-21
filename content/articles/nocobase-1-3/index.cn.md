从 v1.3 开始，NocoBase 提供两个关键分支：**main** 和 **next**。

* **main** 分支，beta 版本，专注于缺陷修复，确保为用户提供一个稳定的版本；
* **next** 分支，alpha 版本，包含一些正式未发布的新特性，这个版本不稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

本次 1.3 beta 的新特性包括：

## 内核

### 支持通过 URL 打开弹窗

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4"></video>

参考文档：

- [弹窗](https://docs-cn.nocobase.com/handbook/ui/pop-up)

### 支持页面方式打开弹窗

弹窗操作的打开方式新增「页面」方式

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

参考文档：

- [弹窗](https://docs-cn.nocobase.com/handbook/ui/pop-up)

### 字段支持配置样式属性

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

参考文档：

- [字段设置 / 样式](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown、Iframe HTML 支持 handlebars 模板引擎

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

参考文档：

- [Markdown handlebars 模板引擎](https://docs-cn.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [iframe html handlebars 模板引擎](https://docs-cn.nocobase.com/handbook/block-iframe#handlebars)

### 支持动态配置字段组件

![](https://static-docs.nocobase.com/20240807092556.png)

参考文档：

- [字段配置项 / 字段组件](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [插件示例 / 有值字段组件](https://docs.nocobase.com/plugin-samples/field/value)

## 插件

### REST API 数据源

![20240721171420](https://static-docs.nocobase.com/20240721171420.png)

参考文档：

- [数据源 / REST API 数据源](https://docs-cn.nocobase.com/handbook/data-source-rest-api)

### MSSQL 外部数据源

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

参考文档：

- [数据源 / 外部数据库 / 外部 MSSQL](https://docs-cn.nocobase.com/handbook/data-source-external-mssql)

### 移动端 V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

参考文档：

- [移动端](https://docs-cn.nocobase.com/handbook/mobile)

### 多对多（数组）

![many-to-many(array) field configuration](https://static-docs.nocobase.com/202407051108180.png)

参考文档：

- [多对多（数组）](https://docs-cn.nocobase.com/handbook/field-m2m-array)

### 认证：企业微信

![](https://static-docs.nocobase.com/202406272115805.png)

参考文档：

- [认证：企业微信](https://docs-cn.nocobase.com/handbook/wecom/auth)

### 工作流：日期计算节点

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

参考文档：

- [工作流：日期计算节点](https://docs-cn.nocobase.com/handbook/workflow-date-calculation)

## 重要变更

### 环境变量 `DB_TIMEZONE` 更改为 `TZ`

新增 `TZ` 环境变量，用于设置应用的时区，默认为操作系统时区。旧的 `DB_TIMEZONE` 仍保持兼容，但已废弃。

参考文档：

- [环境变量 / TZ](https://docs-cn.nocobase.com/welcome/getting-started/env#tz)
