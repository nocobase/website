---
title: "NocoBase 0.15: Manajer Pengaturan Plugin Baru"
description: "NocoBase 0.15 memperkenalkan manajer pengaturan plugin baru dengan konfigurasi plugin yang lebih baik, proses pendaftaran yang disederhanakan, dan beberapa pembaruan untuk meningkatkan pengalaman pengguna."
---

## Fitur

![Manajer pengaturan plugin](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Perubahan yang memecah

### API pendaftaran halaman konfigurasi plugin

Sebelumnya, halaman konfigurasi plugin didaftarkan menggunakan `SettingsCenterProvider`, dan sekarang perlu didaftarkan melalui plugin.

* Kasus 1: Hanya ada satu Tab di halaman asli

Ketika hanya ada satu Tab di halaman, Tab versi baru akan dihapus, hanya menyisakan judul dan ikon halaman.

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab",
              component: HelloPluginSettingPage,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Sekarang perlu diubah menjadi:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Tidak perlu memberikan parameter ini jika plugin baru
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

`Hello Tab` dari `tab1` dihapus.

Parameter `aclSnippet` `pm.hello.tab1` sesuai dengan kunci dari objek `settings` asli:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // `hello` ini sesuai dengan `hello` di `pm.hello.tab1`
      tabs: {
        tab1: {
          // Di sini, `tab1` sesuai dengan `tab1` di `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Kasus 2: Ada beberapa Tab di halaman asli

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab1",
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: "Hello tab2",
              component: HelloPluginSettingPage2,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Sekarang perlu diubah menjadi:

```
import { Outlet } from "react-router-dom";

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add("hello.tab1", {
      title: "Hello tab1",
      Component: HelloPluginSettingPage1,
    });

    this.app.pluginSettingsManager.add("hello.tab2", {
      title: "Hello tab2",
      Component: HelloPluginSettingPage1,
    });
  }
}
```

Dapatkan informasi routing yang sesuai dengan pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Jika ada lompatan tautan di dalam halaman konfigurasi plugin, Anda perlu mengubahnya sesuai, misalnya:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Ini dapat diubah menjadi
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Untuk informasi lebih lanjut, lihat [manajer pengaturan plugin](https://docs.nocobase.com/development/client).

## Catatan perubahan

Untuk catatan perubahan lengkap, silakan merujuk ke [Catatan Perubahan](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
