---
title: "NocoBase 0.19：應用程式流程優化"
description: "NocoBase 0.19 引入了遙測、應用程式備份與還原、命令列優化以及多種核心改進，以增強安裝、啟動和升級流程。"
---

## 新功能

### 遙測（Telemetry）

* 開發文檔：[https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* 核心 API：[https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Prometheus 插件：[https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### 應用程式備份與還原

* 插件文檔：[https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## 核心優化

### 命令列優化

對於 NocoBase 0.19 及以上版本，插件自定義命令必須放置在插件的 `src/server/commands/*.ts` 目錄中，內容如下：

```
export default function(app) {
  app.command('custom1').action();
}
```

命令列的執行流程：

![命令列的執行流程](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Command 的特殊配置

* `ipc()` 當應用程式運行時，命令列透過 ipc 發送命令來操作正在運行的應用程式實例；當未配置 ipc() 時，將建立一個新的應用程式實例，然後執行操作（不會干擾正在運行的應用程式實例）
* `auth()` 執行資料庫驗證，如果資料庫配置錯誤，此命令將不會被執行。
* `preload()` 是否預先載入應用程式配置，即執行 app.load()

可以根據命令的實際使用情況進行配置，範例如下：

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### 安裝流程優化

![安裝流程優化](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### 啟動流程優化

![啟動流程優化](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### 升級流程優化

![升級流程優化](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

升級遷移分為 beforeLoad、afterSync 和 afterLoad：

* beforeLoad：在每個模組載入之前執行，分為三個階段：
  * 載入核心模組之前
  * 載入預設插件之前
  * 載入其他插件之前
* afterSync：在資料表配置與資料庫同步之後執行，分為三個階段：
  * 核心表與資料庫同步之後
  * 預設插件表與資料庫同步之後
  * 其他插件表與資料庫同步之後
* afterLoad：僅在應用程式完全載入後執行。

```
export default class extends Migration {
  // 何時執行遷移
  on = 'beforeLoad';
  // 僅在符合以下應用版本號時執行。
  appVersion = '<=0.13.0-alpha.5';
  // 僅在符合以下插件版本號時執行。
  pluginVersion = '<=0.13.0-alpha.5';
  // 升級腳本。
  async up() {}
}
```

### 新增 create-migration 命令

建立一個遷移檔案

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  套件名稱
  --on [on]    選項包括 beforeLoad、afterSync 和 afterLoad
  -h, --help   顯示命令說明
```

範例

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

將在插件套件 `@nocobase/plugin-client` 的 `src/server/migrations` 中生成一個遷移檔案 `20240107173313-update-ui.ts`，初始內容如下：

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### 插件的約定目錄結構

```
|- /plugin-sample-hello
  |- /dist             # 插件編譯後的目錄
  |- /src              # 插件的原始碼
    |- /client
      |- plugin.ts
      |- index.ts      # 客戶端入口點
    |- /locale         # 前後端共享多語言檔案的約定目錄
    |- /swagger        # Swagger 文檔的約定目錄
    |- /server
      |- collections   # 插件資料表配置的約定目錄
      |- commands      # 自定義命令的約定目錄
      |- migrations    # 遷移檔案的約定目錄
      |- plugin.ts     # 插件類別
      |- index.ts      # 伺服器端入口點
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

測試流程優化

提供了更友善的 `createMockServer()` 和 `startMockServer()` 方法來編寫測試案例：

* `createMockServer()` 快速建立並啟動一個應用程式。
* `startMockServer()` 快速啟動一個應用程式（無需重新安裝）。

```
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## 重大變更

### Collections、commands、migrations 配置變更為約定目錄

範例 1：透過 importCollections 載入的 Collections，直接刪除程式碼，collections 配置檔案必須放置在 `src/server/collections` 目錄中。

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

範例 2：透過 this.db.import 載入的 Collections，直接刪除程式碼，collections 配置檔案必須放置在 `src/server/collections` 目錄中

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

範例 3：透過 db.collection() 定義的 Collection，建議放置在 `src/server/collections` 目錄中。

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新增一個 `src/server/collections/examples.ts` 檔案，內容如下：

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

範例 4：移除 db.addMigrations()，將遷移檔案放置在 `src/server/migrations` 目錄中。

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

範例 5：自定義命令列

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

新增一個 `src/server/collections/echo.ts` 檔案，內容如下：

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
