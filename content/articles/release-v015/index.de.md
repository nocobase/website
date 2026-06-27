---
title: "NocoBase 0.15: Neuer Plugin-Einstellungsmanager"
description: "NocoBase 0.15 führt einen neuen Plugin-Einstellungsmanager ein, der verbesserte Plugin-Konfiguration, optimierte Registrierungsprozesse und mehrere Aktualisierungen zur Verbesserung der Benutzererfahrung bietet."
---

## Funktionen

![Plugin-Einstellungsmanager](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Bahnbrechende Änderungen

### API zur Registrierung von Plugin-Konfigurationsseiten

Bisher wurde die Plugin-Konfigurationsseite mit `SettingsCenterProvider` registriert. Jetzt muss sie über das Plugin registriert werden.

* Fall 1: Es gibt nur einen Tab auf der ursprünglichen Seite

Wenn die Seite nur einen Tab hat, wird der Tab in der neuen Version gelöscht, sodass nur der Titel und das Symbol der Seite übrig bleiben.

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hallo",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hallo Tab",
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

Jetzt muss es geändert werden zu:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hallo",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Bei einem neuen Plugin muss dieser Parameter nicht übergeben werden
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

Der `Hallo Tab` von `tab1` wird gelöscht.

Der `aclSnippet`-Parameter `pm.hello.tab1` entspricht dem Schlüssel des ursprünglichen `settings`-Objekts:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // Dieses `hello` entspricht `hello` in `pm.hello.tab1`
      tabs: {
        tab1: {
          // Hier entspricht `tab1` dem `tab1` in `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Fall 2: Es gibt mehrere Tabs auf der ursprünglichen Seite

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hallo",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hallo Tab1",
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: "Hallo Tab2",
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

Jetzt muss es geändert werden zu:

```
import { Outlet } from "react-router-dom";

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hallo",
      icon: "ApiOutlined",
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add("hello.tab1", {
      title: "Hallo Tab1",
      Component: HelloPluginSettingPage1,
    });

    this.app.pluginSettingsManager.add("hello.tab2", {
      title: "Hallo Tab2",
      Component: HelloPluginSettingPage1,
    });
  }
}
```

Routing-Informationen des pluginSettingsManager abrufen

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Wenn es innerhalb der Plugin-Konfigurationsseite einen Link-Sprung gibt, muss dieser entsprechend geändert werden, z.B.:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Dies kann geändert werden zu
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Weitere Informationen finden Sie im [Plugin-Einstellungsmanager](https://docs.nocobase.com/development/client).

## Änderungsprotokoll

Ein vollständiges Änderungsprotokoll finden Sie im [Änderungsprotokoll](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
