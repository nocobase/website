## 新增

### 认证插件：LDAP 认证

支持用户使用 LDAP 服务器账号密码登录 NocoBase，详情参考 [认证：LDAP](https://docs-cn.nocobase.com/handbook/auth-ldap) 文档。

![](https://static-docs.nocobase.com/202405191513995.png)

### 工作流插件：自定义操作事件

当常规的增删改操作无法满足需求时，可以使用工作流的自定义操作事件，自行编排数据处理逻辑，详情参考 [工作流 / 自定义操作事件](https://docs-cn.nocobase.com/handbook/workflow/plugins/custom-action-trigger) 文档。

![](https://static-docs.nocobase.com/202405191515770.png)

### 表格区块支持固定表格列

![](https://static-docs.nocobase.com/202405191512587.png)

### 弹窗里支持添加甘特图、看板区块

![](https://static-docs.nocobase.com/202405191512280.png)

### 详情区块支持联动规则

详情区块中的联动规则允许配置字段的显示与隐藏。

![](https://static-docs.nocobase.com/202405191513781.png)

### 工作流 HTTP 请求节点支持 `application/www-x-form-urlencoded` 格式数据

![](https://static-docs.nocobase.com/202405191514472.png)

### 工作流 HTTP 请求节点输入框支持字符串模板

![](https://static-docs.nocobase.com/202405191514748.png)

### 插件开发示例

查看 [插件示例](https://docs-cn.nocobase.com/plugin-samples) 文档

![20240520160633](https://static-docs.nocobase.com/20240520160633.png)

## 优化

### 改进「配置操作」交互

下拉菜单里所有操作统一显示在一个列表中，不再区分“启用操作”和“自定义”。

* 只能添加一次的操作：这些操作保留 Switch 效果。
* 可以重复添加的操作：这些操作不再使用 Switch 交互，可以多次添加。
* 合并功能相似的操作
  * “添加” 和 “添加记录”
  * “提交” 和 “保存数据”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### 工作流 HTTP 请求节点结果数据格式统一为：

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### 重新梳理工作流使用手册文档

![20240520160527](https://static-docs.nocobase.com/20240520160527.png)

## 修复

### 日志插件的日志列表只显示当前应用内容

当存在多个应用程序时：

* 日志插件仅显示当前应用程序的日志文件列表；
* 工作流程和自定义请求文件夹放置在应用程序文件夹内。

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

其他主要修复内容有：

* 图表在使用日期字段为维度查询聚合数据时，没有按客户端时区转换。[fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* 视图刷新不良，同步数据库视图后必须要退出去重进才会刷新。[fix: collection fields should refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* 树表表格区块添加子节点的时候不收起所有节点。[fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* 数据表标题字段设置失效。[fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* bigint 字段阅读状态下数值精度丢失。[fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* 子应用停止后，打开的日志文件没有关闭。[fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* 工作流聚合节点关系数据模式选择 bug. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* 工作流 HTTP 请求节点同步模式下忽略错误选项无效。[fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* 工作流 HTTP 请求节点变量输入框溢出。[fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* 特殊字符导致工作流 HTTP 请求节点挂起。[fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* 修复主题编辑器中设置 marginBlock 之后会影响表单字段间距的问题。[fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* 修复点击页面右上角的“许可证”选项时跳转错误的问题。[PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* 修复当把筛选表单保存为区块模板后，字段的操作符无效的问题。[PR #4390](https://github.com/nocobase/nocobase/pull/4390)
