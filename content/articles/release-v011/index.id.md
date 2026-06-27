---
title: "NocoBase 0.11: Aplikasi klien baru, plugin, dan router"
description: "NocoBase 0.11 memperkenalkan aplikasi klien baru, plugin, dan router, dengan pembaruan ke antd v5 dan plugin baru untuk visualisasi data, kunci API, dan integrasi Google Maps."
---

## Fitur baru

* Aplikasi klien baru, plugin, dan router
* Peningkatan Ant Design ke v5
* Plugin baru
  * Visualisasi data
  * Kunci API
  * Google Map

## Perubahan yang tidak kompatibel

### Aplikasi klien baru, plugin, dan router

#### Perubahan plugin

sebelumnya Anda harus melewatkan sebuah komponen dan komponen tersebut harus melewatkan `props.children`, contoh:

```
const HelloProvider = (props) => {
  // lakukan sesuatu logika
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

sekarang Anda perlu mengubah ke cara plugin, contoh:

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // lakukan sesuatu logika
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

plugin sangat kuat dan dapat melakukan banyak hal pada fase `load`:

* memodifikasi rute
* menambahkan Komponen
* menambahkan Provider
* menambahkan Scopes
* memuat plugin lain

#### Perubahan routing

jika Anda sebelumnya menggunakan `RouteSwitchContext` untuk memodifikasi rute, sekarang Anda perlu menggantinya dengan plugin:

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

sekarang Anda perlu mengubah ke cara plugin, contoh:

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

detail lebih lanjut dapat ditemukan di [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### antd upgrade ke v5

* detail terkait antd lihat situs web resmi [V4 ke V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` diganti dengan `@formily/antd-v5`
