---
title: "NocoBase 0.11: Ứng dụng khách, plugin và bộ định tuyến mới"
description: "NocoBase 0.11 giới thiệu ứng dụng khách, plugin và bộ định tuyến mới, cùng với bản cập nhật lên antd v5 và các plugin mới cho trực quan hóa dữ liệu, khóa API và tích hợp Google Maps."
---

## Tính năng mới

* Ứng dụng client, plugin và router mới
* Nâng cấp Ant Design lên v5
* Plugin mới
  * Trực quan hóa dữ liệu
  * Khóa API
  * Bản đồ Google

## Thay đổi không tương thích

### Ứng dụng client, plugin và router mới

#### Thay đổi về Plugin

Trước đây bạn phải truyền một component và component đó cần truyền `props.children`, ví dụ:

```
const HelloProvider = (props) => {
  // thực hiện một số logic
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

bây giờ bạn cần chuyển sang cách dùng plugin, ví dụ:

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // thực hiện một số logic
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

Plugin rất mạnh mẽ và có thể thực hiện nhiều việc trong giai đoạn `load`:

* Sửa đổi route
* Thêm Components
* Thêm Providers
* Thêm Scopes
* Tải các plugin khác

#### Thay đổi về Route

Nếu trước đây bạn dùng `RouteSwitchContext` để sửa đổi route, thì bây giờ bạn cần thay thế bằng plugin:

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

bây giờ bạn cần chuyển sang cách dùng plugin, ví dụ:

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

Thông tin chi tiết có thể xem tại [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### Nâng cấp antd lên v5

* Chi tiết liên quan đến antd xem tại trang web chính thức [V4 to V5](https://ant.design/docs/react/migration-v5)
* Thay thế `@formily/antd` bằng `@formily/antd-v5`
