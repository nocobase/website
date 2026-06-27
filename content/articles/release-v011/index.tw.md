---
title: "NocoBase 0.11：全新的客戶端應用程式、插件與路由器"
description: "NocoBase 0.11 引入了全新的客戶端應用程式、插件與路由器，並更新至 antd v5，同時新增了資料視覺化、API 金鑰與 Google Maps 整合等插件。"
---

## 新功能

* 新的客戶端應用程式、插件與路由器
* Ant Design 升級至 v5
* 新插件
  * 資料視覺化
  * API 金鑰
  * Google 地圖

## 不相容的變更

### 新的客戶端應用程式、插件與路由器

#### 插件變更

過去你必須傳遞一個元件，且該元件需要傳遞 `props.children`，例如：

```
const HelloProvider = (props) => {
  // 執行某些邏輯
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

現在你需要改用插件的方式，例如：

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // 執行某些邏輯
  return <div>
    {props.children}
  </div>;
}

+ export class HelloPlugin extends Plugin {
+   async load() {
+     this.app.addProvider(HelloProvider);
+   }
+ }

- export default HelloProvider;
+ export default HelloPlugin;
```

插件功能非常強大，可以在 `load` 階段執行許多操作：

* 修改路由
* 新增元件
* 新增提供者
* 新增作用域
* 載入其他插件

#### 路由變更

如果你之前使用 `RouteSwitchContext` 來修改路由，現在需要改用插件來取代：

```
import { RouteSwitchContext } from '@nocobase/client';

const HelloProvider = () => {
  const { routes, ...others } = useContext(RouteSwitchContext);
  routes[1].routes.unshift({
    path: '/hello',
    component: Hello,
  });

  return (
    <div>
      <RouteSwitchContext.Provider value={{ ...others, routes }}>
        {props.children}
      </RouteSwitchContext.Provider>
    </div>
  );
};
```

現在你需要改用插件的方式，例如：

```
- import { RouteSwitchContext } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

const HelloProvider = (props) => {
-  const { routes, ...others } = useContext(RouteSwitchContext);
-  routes[1].routes.unshift({
-    path: '/hello',
-    component: Hello,
-  });

  return <div>
-   <RouteSwitchContext.Provider value={{ ...others, routes }}>
      {props.children}
-   </RouteSwitchContext.Provider>
  </div>
}

+ export class HelloPlugin extends Plugin {
+  async load() {
+    this.app.router.add('admin.hello', {
+       path: '/hello',
+       Component: Hello,
+    });
+    this.app.addProvider(HelloProvider);
+  }
+ }
+ export default HelloPlugin;
```

更多詳細資訊請參閱 [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### antd 升級至 v5

* antd 相關詳細資訊請參閱官方網站 [V4 到 V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` 替換為 `@formily/antd-v5`
