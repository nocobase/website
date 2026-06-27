---
title: "NocoBase 0.15：全新的插件設定管理員"
description: "NocoBase 0.15 引入了全新的插件設定管理員，提供更完善的插件配置、簡化的註冊流程，以及多項更新以提升使用者體驗。"
---

## 功能特色

![外掛設定管理員](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## 重大變更

### 外掛設定頁面註冊 API

先前，外掛設定頁面是透過 `SettingsCenterProvider` 註冊，現在需要改由外掛來註冊。

* 情況一：原始頁面只有一個分頁

當頁面只有一個分頁時，新版會刪除該分頁，僅保留頁面的標題與圖示。

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

現在需要改為：

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // 如果是新外掛，則不需要傳遞此參數
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

`tab1` 的 `Hello Tab` 已被刪除。

`aclSnippet` 參數 `pm.hello.tab1` 對應原始 `settings` 物件的鍵值：

```
<SettingsCenterProvider
  settings={{
    hello: {
      // 此處的 `hello` 對應 `pm.hello.tab1` 中的 `hello`
      tabs: {
        tab1: {
          // 此處的 `tab1` 對應 `pm.hello.tab1` 中的 `tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* 情況二：原始頁面有多個分頁

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

現在需要改為：

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

取得 pluginSettingsManager 對應的路由資訊

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

如果外掛設定頁面內部有連結跳轉，需要相應修改，例如：

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// 可改為
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

更多資訊請參閱[外掛設定管理員](https://docs.nocobase.com/development/client)。

## 更新日誌

完整的更新日誌請參閱 [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md)。
