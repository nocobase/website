## 新增

### 认证插件：LDAP 认证

支持用户使用 LDAP 服务器账号密码登录 NocoBase，详情参考 [认证：LDAP](/handbook/auth-ldap) 文档。

![](https://static-docs.nocobase.com/202405191513995.png)

### 工作流插件：自定义操作事件

当常规的增删改操作无法满足需求时，可以使用工作流的自定义操作事件，自行编排数据处理逻辑，详情参考 [工作流 / 自定义操作事件](/handbook/workflow/plugins/custom-action-trigger) 文档。

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

查看 [插件示例](/plugin-samples) 文档

![20240520160633](https://static-docs.nocobase.com/20240520160633.png)

## 优化

### 改进「配置操作」交互

下拉菜单里所有操作统一显示在一个列表中，不再区分“启用操作”和“自定义”。

- 只能添加一次的操作：这些操作保留 Switch 效果。
- 可以重复添加的操作：这些操作不再使用 Switch 交互，可以多次添加。
- 合并功能相似的操作
  - “添加” 和 “添加记录”
  - “提交” 和 “保存数据”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### 工作流 HTTP 请求节点结果数据格式统一为：

```js
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```


```
