## New Features

### Cluster Mode

The Enterprise edition supports cluster mode deployment via relevant plugins. When the application runs in cluster mode, it can leverage multiple instances and multi-core processing to improve its performance in handling concurrent access.

![Cluster Mode Screenshot](https://static-docs.nocobase.com/20241231010814.png)

Reference: [Deployment - Cluster Mode](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Password Policy

A password policy is established for all users, including rules for password complexity, validity periods, and login security strategies, along with the management of locked accounts.

![Password Policy Screenshot](https://static-docs.nocobase.com/202412281329313.png)

Reference: [Password Policy](https://docs.nocobase.com/handbook/password-policy)

### Token Policy

The Token Security Policy is a function configuration designed to protect system security and enhance user experience. It includes three main configuration items: "session validity," "token effective period," and "expired token refresh limit."

![Token Policy Screenshot](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Reference: [Token Policy](https://docs.nocobase.com/handbook/token-policy)

### IP Restriction

NocoBase allows administrators to set up an IP allowlist or blacklist for user access to restrict unauthorized external network connections or block known malicious IP addresses, thereby reducing security risks. It also supports querying access denial logs to identify risky IPs.

![IP Restriction Screenshot](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Reference: [IP Restriction](https://docs.nocobase.com/handbook/IP-restriction)

### Variables and Secrets

Centralized configuration and management of environment variables and secrets are provided for sensitive data storage, configuration reuse, environment isolation, and more.

![Environment Variables Screenshot](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Reference: [Variables and Secrets](https://docs.nocobase.com/handbook/environment-variables)

### Migration Manager

This feature allows you to migrate application configurations from one environment to another.

![Migration Manager Screenshot](https://static-docs.nocobase.com/20250107105005.png)

Reference:

- [Migration Manager](https://docs.nocobase.com/handbook/migration-manager)
- [Release Management](https://docs.nocobase.com/handbook/release-management)

### Route Management

- **Menu Data Separated and Renamed to Routes**: The menu data has been decoupled from the UI Schema and renamed as "routes." It is divided into two tables, desktopRoutes and mobileRoutes, which correspond to desktop and mobile routes respectively.
- **Frontend Menu Optimization with Collapse and Responsive Support**: The frontend menu now supports collapse functionality and responsive design for an improved user experience.

![Route Management Screenshot](https://static-docs.nocobase.com/20250107115449.png)

Reference: [Routes](https://docs.nocobase.com/handbook/routes)

### Roles and Permissions

- Supports configuration of action permissions.
  ![Roles and Permissions Screenshot 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Supports configuration of tab permissions.

![Roles and Permissions Screenshot 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### User Management

Supports customization of user profile forms.

![User Management Screenshot](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Workflow

An entry for the workflow to-do center has been added to the global toolbar, providing real-time notifications for manual nodes and pending approval tasks.

![Workflow Screenshot](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Workflow: Custom Action Events

Supports triggering custom action events both globally and in batch actions.

![Custom Action Events Screenshot](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Workflow: Approval

- Supports transferring approval responsibilities and adding extra approvers.
  ![Approval Form Screenshot](https://static-docs.nocobase.com/20241226232013.png)
- Allows approvers to modify the application content when submitting an approval.
  ![Approval Modification Screenshot](https://static-docs.nocobase.com/20241226232124.png)
- Supports configuration of a basic information block within the approval interface.
- Optimizes the style and interaction of initiating approvals and viewing pending tasks, with these improvements also integrated into the global process to-do center.
  ![Approval To-do Center Screenshot](https://static-docs.nocobase.com/20250310161203.png)
- No longer distinguishes the location where the approval is initiated; the approval center block can both initiate and process all approvals.

### Workflow: JSON Variable Mapping Node

A new dedicated node has been added to map JSON data from upstream node results into variables.

![JSON Variable Mapping Node Screenshot](https://static-docs.nocobase.com/20250113173635.png)

Reference: [JSON Variable Mapping](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Capability Enhancements and Plugin Examples


| Extension                         | Plugin Example                                                  |
| --------------------------------- | --------------------------------------------------------------- |
| Data Source Custom Preset Fields  | @nocobase-sample/plugin-data-source-main-custom-preset-fields   |
| Calendar Register Color Field     | @nocobase-sample/plugin-calendar-register-color-field           |
| Calendar Register Title Field     | @nocobase-sample/plugin-calendar-register-title-field           |
| Formula Register Expression Field | @nocobase-sample/plugin-field-formula-register-expression-field |
| Kanban Register Group Field       | @nocobase-sample/plugin-kanban-register-group-field             |
| Register Filter Operator          | @nocobase-sample/plugin-register-filter-operator                |
| File Storage Extension            | @nocobase-sample/plugin-file-storage-demo                       |

## Breaking Changes

### Update to Token Policy

In version 1.6, a new [Token Policy](https://docs.nocobase.com/handbook/token-policy) was introduced. When authentication fails, a 401 error will be returned along with a redirection to the login page. This behavior differs from previous versions. To bypass the check, refer to the following examples:

Frontend Request:

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

Backend Middleware:

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

### Unit Test Function agent.login Changed from Synchronous to Asynchronous

Due to several asynchronous operations required in the authentication process, the test function login is now asynchronous. Example:

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

### New Extension API for User Center Settings Items

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Example:

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
