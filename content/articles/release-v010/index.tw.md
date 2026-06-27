---
title: "NocoBase 0.10：第二季度的新功能"
description: "NocoBase 0.10 改進了關聯欄位元件，支援多個元件切換，並新增了快速建立關聯資料功能，提供兩種快速建立模式及其他更新。"
---

## 第二季新功能

- 關聯欄位元件改進，支援多種元件切換
  - 選擇
  - 記錄選擇器
  - 子表單/子詳情
  - 子表格
  - 檔案管理員
  - 標題（唯讀）
- 快速建立關聯資料，支援兩種快速建立模式
  - 在下拉選單中新增，根據標題欄位快速建立新記錄
  - 在彈出視窗中新增，配置複雜的新增表單
- 複製操作，支援兩種模式
  - 直接複製
  - 複製到表單中並繼續填寫
- 表單資料模板
- 過濾資料範圍支援變數
- 列表區塊
- 網格卡片區塊
- 行動用戶端外掛
- 使用者認證外掛，支援不同的認證方式
  - 電子郵件/密碼
  - 簡訊
  - OIDC
  - SAML
- 工作流程節點
  - 手動節點升級，支援從現有集合新增和編輯
  - 迴圈節點
  - 聚合節點
- 檔案管理員
  - 提供檔案集合模板
  - 提供檔案管理員元件

## 升級應用程式

### 升級 Docker Compose

無變更，升級請參考 [升級 Docker Compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### 升級 Git 原始碼

v0.10 有重大的依賴項升級，為防止升級原始碼時出錯，需要在升級前刪除以下目錄

```bash
# 移除 .umi 快取
yarn rimraf -rf "./**/{.umi,.umi-production}"
# 刪除編譯後的檔案
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# 移除依賴項
yarn rimraf -rf node_modules
```

更多詳情請參閱 [升級 Git 原始碼](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone)

### 升級 create-nocobase-app

建議使用 `yarn create` 重新下載新版本並修改 `.env` 配置，更多詳情請參閱 [主要版本升級指南](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## 即將棄用及潛在的不相容變更

### 子表格欄位元件

與新版本不相容，需要移除並重新指派區塊欄位（僅 UI 重新指派）

### 附件上傳 API 變更

除了內建的附件表格外，使用者也可以自訂檔案集合，附件的上傳 API 已從 `/api/attachments:upload` 變更為 `/api/<file-collection>:create`，上傳功能已棄用，但在 v0.10 中仍相容，未來將會移除。

### signin/signup API 變更

NocoBase 核心提供更強大的 [auth 模組](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth)，使用者登入、註冊、驗證及登出 API 變更如下：

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

注意：上述 users 介面已棄用，在 v0.10 中仍相容，但將在下一個主要版本中移除。

### 日期欄位篩選調整

如果先前在資料範圍中配置了日期相關的篩選，需要刪除並重新配置。

## 第三方外掛升級指南

### 依賴項升級

主要依賴項包括

- `react` 升級至 v18
- `react-dom` 升級至 v18
- `react-router` 升級至 v6.11
- `umi` 升級至 v4
- `dumi` 升級至 v2

`package.json` 中的依賴項應變更為最新版本，例如：

```diff
{
  "devDependencies": {
+   "react": "^18",
+   "react-dom": "^18",
+   "react-router-dom": "^6.11.2",
-   "react": "^17",
-   "react-dom": "^17",
-   "react-router-dom": "^5",
  }
}
```

### 程式碼變更

由於 react-router 已升級，相關程式碼也需要變更，主要變更包括

### Layout 元件

Layout 元件需要使用 `<Outlet />` 取代 `props.children`。

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

如果使用 `React.cloneElement` 渲染路由元件，需要像這樣變更：

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

將路由元件變更為從 `useOutletContext` 取得值

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### 重新導向

`<Redirect>` 變更為 `<Navigate replace />`。

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` 變更為 `useHistory`。

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` 變更為 `useLocation`。

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` 變更為 `useSearchParams()`。

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

以下所有路徑在 v6 中都是有效的路由路徑：

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

以下 RegExp 風格的路由路徑在 v6 中無效：

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

更多 API 變更，請參閱 [react-router@6](https://reactrouter.com/en/main/upgrading/v5)。
