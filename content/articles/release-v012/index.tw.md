---
title: "NocoBase 0.12：全新的插件建置工具"
description: "NocoBase 0.12 引入了全新的插件建置工具，以實現無縫的生產環境使用，更新了安裝方式，並將 @nocobase/app-client 和 @nocobase/app-server 合併為 @nocobase-app。"
---

## 新功能

* 全新的插件建置工具。建置完成的插件將可直接在正式環境中使用，無需二次建置。

## 應用程式升級

### Docker 安裝升級

無變動，請參考 [Docker 映像升級指南](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) 進行升級。

### 原始碼安裝升級

插件建置工具已全新升級，拉取新原始碼後需清除快取。

```
git pull # 拉取新原始碼。
yarn clean # 清除快取。
```

更多詳情請參閱 [Git 原始碼升級指南](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone)。

### create-nocobase-app 安裝升級

透過 `yarn create` 重新下載新版本並更新 .env 配置，更多詳情請參閱 [主要版本升級指南](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app)。

## 不相容的變更

### @nocobase/app-client 與 @nocobase/app-server 合併為 @nocobase-app

透過 create-nocobase-app 安裝的應用程式不再有 packages/app 目錄，packages/app 中的自訂程式碼需移至自訂插件中。

### 應用程式的 dist/client 路徑已變更

如果您自行配置 nginx，則需要進行類似的調整：

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### 第三方插件需要重新建置

請參考下方的第三方插件升級指南。

## 第三方插件升級指南

### 插件目錄必須同時包含 `src/client` 與 `src/server` 目錄。

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

具體範例程式碼可參考：[sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### 插件的多語言檔案放置於 `src/locale` 目錄

無論前端或後端，多語言翻譯檔案皆放置於 `src/locale` 目錄，因此插件無需自行載入多語言套件。

### 插件依賴項目的調整

插件的依賴項目分為自身依賴與全域依賴。全域依賴會直接全域使用，不會被打包進插件產品中；而自身依賴則會被打包進產品中。插件建置完成後，在正式環境中即可即插即用，無需安裝依賴或二次建置。插件依賴項目的調整包括：

* 將 `@nocobase/*` 相關套件放入 `peerDependencies`，並指定版本號為 `0.x`；
* 將其他依賴放入 `devDependencies`，而非 `dependencies`，因為插件在建置後會提取正式環境所需的所有依賴。

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### 插件的輸出路徑已從 `lib` 變更為 `dist`

dist 目錄結構：

```
|- dist
  |- client       # 客戶端，umd
    |- index.js
    |- index.d.ts
  |- server       # 伺服器端，cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # 多語言套件
  |- node_modules # 伺服器端依賴
```

其他相關調整包括：

package.json 中 main 參數的調整：

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
