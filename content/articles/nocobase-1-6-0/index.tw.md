---
title: "NocoBase v1.6.0 正式發布"
description: "集群模式部署、安全策略優化與遷移管理器，帶來效能、安全性與使用者體驗的全面提升。"
---

## 新功能

### 叢集模式

企業版支援透過相關外掛進行叢集模式部署。當應用程式以叢集模式運行時，可以利用多個實例與多核心處理能力，提升處理並發存取時的效能。

![叢集模式截圖](https://static-docs.nocobase.com/20241231010814.png)

參考：[部署 - 叢集模式](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### 密碼策略

為所有使用者建立密碼策略，包含密碼複雜度規則、有效期限以及登入安全策略，並提供鎖定帳號的管理功能。

![密碼策略截圖](https://static-docs.nocobase.com/202412281329313.png)

參考：[密碼策略](https://docs.nocobase.com/handbook/password-policy)

### Token 策略

Token 安全策略是一項旨在保護系統安全並提升使用者體驗的功能配置。它包含三個主要配置項目：「會話有效期」、「Token 有效期限」以及「過期 Token 刷新限制」。

![Token 策略截圖](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

參考：[Token 策略](https://docs.nocobase.com/handbook/token-policy)

### IP 限制

NocoBase 允許管理員為使用者存取設定 IP 允許清單或黑名單，以限制未經授權的外部網路連線或封鎖已知的惡意 IP 位址，從而降低安全風險。同時也支援查詢存取拒絕日誌，以識別高風險 IP。

![IP 限制截圖](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

參考：[IP 限制](https://docs.nocobase.com/handbook/IP-restriction)

### 變數與機密

提供環境變數與機密的集中配置與管理，用於敏感資料儲存、配置重用、環境隔離等場景。

![環境變數截圖](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

參考：[變數與機密](https://docs.nocobase.com/handbook/environment-variables)

### 遷移管理員

此功能允許您將應用程式配置從一個環境遷移到另一個環境。

![遷移管理員截圖](https://static-docs.nocobase.com/20250107105005.png)

參考：

- [遷移管理員](https://docs.nocobase.com/handbook/migration-manager)
- [版本管理](https://docs.nocobase.com/handbook/release-management)

### 路由管理

- **選單資料分離並重新命名為路由**：選單資料已與 UI Schema 解耦，並重新命名為「路由」。它分為 desktopRoutes 和 mobileRoutes 兩個資料表，分別對應桌面端和行動端路由。
- **前端選單最佳化，支援折疊與響應式**：前端選單現在支援折疊功能與響應式設計，以提供更佳的使用者體驗。

![路由管理截圖](https://static-docs.nocobase.com/20250107115449.png)

參考：[路由](https://docs.nocobase.com/handbook/routes)

### 角色與權限

- 支援配置操作權限。
  ![角色與權限截圖 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- 支援配置分頁權限。

![角色與權限截圖 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### 使用者管理

支援自訂使用者個人資料表單。

![使用者管理截圖](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### 工作流程

全域工具欄中新增了工作流程待辦中心的入口，為人工節點和待審批任務提供即時通知。

![工作流程截圖](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### 工作流程：自訂操作事件

支援在全域和批次操作中觸發自訂操作事件。

![自訂操作事件截圖](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### 工作流程：審批

- 支援轉移審批責任以及新增額外審批人。
  ![審批表單截圖](https://static-docs.nocobase.com/20241226232013.png)
- 允許審批人在提交審批時修改申請內容。
  ![審批修改截圖](https://static-docs.nocobase.com/20241226232124.png)
- 支援在審批介面中配置基本資訊區塊。
- 最佳化了發起審批與檢視待辦任務的樣式與互動，這些改進也已整合至全域流程待辦中心。
  ![審批待辦中心截圖](https://static-docs.nocobase.com/20250310161203.png)
- 不再區分發起審批的位置；審批中心區塊可以發起並處理所有審批。

### 工作流程：JSON 變數映射節點

新增了一個專用節點，用於將上游節點結果中的 JSON 資料映射到變數中。

![JSON 變數映射節點截圖](https://static-docs.nocobase.com/20250113173635.png)

參考：[JSON 變數映射](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### 功能擴展與外掛範例


| 擴展項目                         | 外掛範例                                                      |
| -------------------------------- | ------------------------------------------------------------- |
| 資料來源自訂預設欄位             | @nocobase-sample/plugin-data-source-main-custom-preset-fields |
| 日曆註冊顏色欄位                 | @nocobase-sample/plugin-calendar-register-color-field         |
| 日曆註冊標題欄位                 | @nocobase-sample/plugin-calendar-register-title-field         |
| 公式註冊表達式欄位               | @nocobase-sample/plugin-field-formula-register-expression-field |
| 看板註冊分組欄位                 | @nocobase-sample/plugin-kanban-register-group-field           |
| 註冊篩選運算符                   | @nocobase-sample/plugin-register-filter-operator              |
| 檔案儲存擴展                     | @nocobase-sample/plugin-file-storage-demo                     |

## 重大變更

### 更新 Token 策略

在 1.6 版本中，引入了新的 [Token 策略](https://docs.nocobase.com/handbook/token-policy)。當認證失敗時，將返回 401 錯誤並重新導向至登入頁面。此行為與先前版本不同。若要繞過檢查，請參考以下範例：

前端請求：

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

後端中介軟體：

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

### 單元測試函數 agent.login 從同步改為非同步

由於認證過程中需要執行多項非同步操作，測試函數 login 現在是非同步的。範例：

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

### 使用者中心設定項目的新擴展 API

API：

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

範例：

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
