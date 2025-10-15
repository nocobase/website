汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/cn/blog/v1.8.29)

*发布时间：2025-10-15*

### 🚀 优化

* **[工作流：审批]** 重构分支配置以适配内核变更 by @mytharcher

### 🐛 修复

* **[工作流：审批]** 修复迁移脚本在未安装应用时由于表不存在的报错问题 by @mytharcher

### [v1.8.28](https://www.nocobase.com/cn/blog/v1.8.28)

*发布时间：2025-10-14*

### 🚀 优化

* **[client]** 在前端使用 `mime` 包检测文件的 MIME 类型，以获得更准确的类型数据 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
* **[工作流]**
  * 支持通过环境变量限制一个工作流中的最大节点数 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
  * 删除节点时增加“保留分支”选项 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
* **[工作流：循环节点]** 支持通过环境变量限制循环节点的最大循环次数 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[工作流：审批]** 为自定义审批区块的详情弹窗增加打印按钮 by @mytharcher

### 🐛 修复

* **[client]**
  * 修复预览图片同时旋转和缩放显示不正常的问题 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
  * 修复 AssignedField 组件未实现动态属性导致的新增、更新节点上传文件错误问题 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[公开表单]** 修复公开表单中的文件字段上传规则不正确的问题 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher
* **[日历]** 修复日历区块数据表设置唯一标识后详情数据查询错误问题 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh
* **[认证：LDAP]** 修复含非 ASCII（UTF-8）DN 的 AD 登录失败问题 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/cn/blog/v1.9.0-beta.12)

*发布时间：2025-10-11*

### 🐛 修复

* **[server]** 主键迁移脚本报错 ([#7568](https://github.com/nocobase/nocobase/pull/7568)) by @2013xile
* **[日历]** 修复日历区块数据表设置唯一标识后详情数据查询错误问题 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/cn/blog/v2.0.0-alpha.8)

*发布时间：2025-10-14*

### 🎉 新特性

* **[AI 员工]** 改进AI插件的联网搜索功能 ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

### 🚀 优化

* **[client]** 在前端使用 `mime` 包检测文件的 MIME 类型，以获得更准确的类型数据 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
* **[flow-engine]**
  * 支持弹窗变量 ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust
  * 优化代码编辑器的体验， 增加更多代码片段，动态展示不同场景的代码补全 ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust
  * 将自动流程规范化，统一通过 “beforeRender” 事件触发，确保流程运行的一致性和可预期性。 ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust
* **[工作流]** 删除节点时增加“保留分支”选项 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
* **[数据可视化]** 扩展图表类型；优化用户界面和交互体验。 ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang
* **[工作流：审批]** 重构分支配置以适配内核变更 by @mytharcher

### 🐛 修复

* **[client]**
  * 修复切换表格分页时，页面显示异常的问题 ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe
  * 无法为`批量更新`和`更新`操作配置赋值字段 ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust
  * 修复预览图片同时旋转和缩放显示不正常的问题 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
* **[工作流：审批]** 修复迁移脚本在未安装应用时由于表不存在的报错问题 by @mytharcher
* **[认证：LDAP]** 修复含非 ASCII（UTF-8）DN 的 AD 登录失败问题 by @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/cn/blog/v2.0.0-alpha.7)

*发布时间：2025-10-13*

### 🎉 新特性

* **[client]** 新增“当前设备类型”变量 ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/cn/blog/v2.0.0-alpha.6)

*发布时间：2025-10-11*

### 🐛 修复

* **[server]** 主键迁移脚本报错 ([#7568](https://github.com/nocobase/nocobase/pull/7568)) by @2013xile
* **[undefined]** 路由路径匹配支持新多应用 ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx
* **[AI 员工]** 修复AI员工建模工具在使用chatGPT-4o时的异常。 ([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock
