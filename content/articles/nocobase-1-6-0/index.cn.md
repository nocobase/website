## 新特性

### 集群模式

企业版可通过相关插件支持集群模式部署，应用以集群模式运行时，可以通过多个实例和使用多核模式来提高应用的对并发访问处理的性能。

![20241231010814](https://static-docs.nocobase.com/20241231010814.png)

参考文档：[集群部署](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### 密码策略

为所有用户设置密码规则，密码有效期和密码登录安全策略，管理锁定用户。

![](https://static-docs.nocobase.com/202412281329313.png)

参考文档：[密码策略和用户锁定](https://docs-cn.nocobase.com/handbook/password-policy)

### Token 安全策略

Token 安全策略是一种用于保护系统安全和体验的功能配置。它包括了三个主要配置项：“会话有效期”、“Token 有效周期” 和 “过期 Token 刷新时限” 。

![20250105111821-2025-01-05-11-18-24](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

参考文档：[Token 安全策略](https://docs-cn.nocobase.com/handbook/token-policy)

### IP 限制

NocoBase 支持管理员对用户访问 IP 设置白名单或黑名单，以限制未授权的外部网络连接或阻止已知的恶意 IP 地址，降低安全风险。同时支持管理员查询访问拒绝日志，识别风险 IP。

![2025-01-23-10-07-34-20250123100733](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

参考文档：[IP 限制](https://docs-cn.nocobase.com/handbook/IP-restriction)

### 变量和密钥

集中配置和管理环境变量和密钥，用于敏感数据存储、配置数据重用、环境配置隔离等。

![1ee6c3fa09533b19f4d6038f53b06006.png](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

参考文档：[变量和密钥](https://docs-cn.nocobase.com/handbook/environment-variables)

### 迁移管理

用于将应用配置从一个应用环境迁移到另一个应用环境。

![20250107105005](https://static-docs.nocobase.com/20250107105005.png)

参考文档：

- [迁移管理](https://docs-cn.nocobase.com/handbook/migration-manager)

- [发布管理](https://docs-cn.nocobase.com/handbook/release-management)

### 路由管理

* **菜单数据独立并改名为路由**：菜单数据从 UI Schema 中拆分出来，改名为**路由**，分为 `desktopRoutes` 和 `mobileRoutes` 两张表，分别对应桌面端路由和移动端路由。
* **菜单前端优化，支持折叠与响应式**：菜单在前端实现了**折叠**与**响应式**适配，提升了使用体验。

![20250107115449](https://static-docs.nocobase.com/20250107115449.png)

参考文档：[路由管理](https://docs-cn.nocobase.com/handbook/routes)

### 角色和权限

* 支持配置更多的操作按钮权限，包括弹窗、链接、扫码、触发工作流
  ![b0a7905d9fd4beaaf21592b1f56fe752.png](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
* 支持配置标签页权限

  ![4fd3a5144a2301638b9f24b033d33add.png](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### 用户管理

支持配置用户个人资料表单

![171e5a4c61033afb237c9ae1a3d89000.png](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### 工作流

在全局工具栏中增加流程待办中心入口，并实时提示人工节点、审批的相关待办任务数量。

![855c58536f9fd29ae353dd19b3aff73f.png](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### 工作流：自定义操作事件

支持全局和批量数据触发自定义操作事件。

![106ae1296d180718799eb6d7f423805c.png](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### 工作流：审批

* 支持转签、加签。![审批节点_界面配置_操作表单区块](https://static-docs.nocobase.com/20241226232013.png)
* 支持审批人在提交审批时修改申请内容。![审批节点_界面配置_操作表单_修改审批内容字段](https://static-docs.nocobase.com/20241226232124.png)
* 支持在审批界面中配置审批基础信息区块。
* 优化审批发起和待办区块的样式和交互，同时也在全局的流程待办中心中内置。![待办中心-审批](https://static-docs.nocobase.com/20250310161203.png)
* 不再区分发起审批的位置，审批中心区块可以发起和处理所有审批。

### 工作流：JSON 变量映射节点

新增用于将上游节点结果中的 JSON 数据映射为变量的专用节点。

![创建节点](https://static-docs.nocobase.com/20250113173635.png)

参考文档：[JSON 变量映射](https://docs-cn.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### 扩展能力提升及插件示例


| 扩展项                 | 插件示例                                                        |
| ---------------------- | --------------------------------------------------------------- |
| 数据表预置字段扩展     | @nocobase-sample/plugin-data-source-main-custom-preset-fields   |
| 日历颜色字段可选项扩展 | @nocobase-sample/plugin-calendar-register-color-field           |
| 日历标题字段可选项扩展 | @nocobase-sample/plugin-calendar-register-title-field           |
| 公式可选项字段扩展     | @nocobase-sample/plugin-field-formula-register-expression-field |
| 看板分组字段扩展       | @nocobase-sample/plugin-kanban-register-group-field             |
| 筛选操作符扩展         | @nocobase-sample/plugin-register-filter-operator                |
| 文件存储扩展           | @nocobase-sample/plugin-file-storage-demo                       |

## 不兼容变更

### Token 安全策略更新

1.6 版本新增了 [Token 安全策略](https://docs-cn.nocobase.com/handbook/token-policy)，Auth 认证检查未通过时，将返回 401 错误并跳转至登录页。此行为与之前版本有所不同。如需跳过检查，可参考以下示例进行处理：

前端请求

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

后端中间件

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### 单元测试函数 agent.login 由同步改为异步

由于认证流程需要进行一些异步操作，测试函数 login 改为异步, 示例：

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### 提供全新的用户中心设置项的扩展 API

API

```ts
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

示例

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
