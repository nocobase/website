---
title: "NocoBase 0.15 : Nouveau gestionnaire de paramètres de plugins"
description: "NocoBase 0.15 introduit un nouveau gestionnaire de paramètres de plugins avec une configuration améliorée, des processus d'enregistrement simplifiés et plusieurs mises à jour pour améliorer l'expérience utilisateur."
---

## Fonctionnalités

![Gestionnaire des paramètres du plugin](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Modifications non rétrocompatibles

### API d'enregistrement de la page de configuration du plugin

Auparavant, la page de configuration du plugin était enregistrée via `SettingsCenterProvider` ; désormais, elle doit être enregistrée via le plugin.

* Cas 1 : Un seul onglet sur la page d'origine

Lorsqu'il n'y a qu'un seul onglet sur la page, le nouvel onglet de la version sera supprimé, ne conservant que le titre et l'icône de la page.

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

Il faut maintenant le modifier ainsi :

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Il n'est pas nécessaire de passer ce paramètre s'il s'agit d'un nouveau plugin
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

L'onglet `Hello Tab` de `tab1` est supprimé.

Le paramètre `aclSnippet` `pm.hello.tab1` correspond à la clé de l'objet `settings` d'origine :

```
<SettingsCenterProvider
  settings={{
    hello: {
      // Ce `hello` correspond à `hello` dans `pm.hello.tab1`
      tabs: {
        tab1: {
          // Ici, `tab1` correspond à `tab1` dans `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Cas 2 : Plusieurs onglets sur la page d'origine

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

Il faut maintenant le modifier ainsi :

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

Obtenir les informations de routage correspondant à pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

S'il y a un lien de redirection à l'intérieur de la page de configuration du plugin, il faut le modifier en conséquence, par exemple :

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Cela peut être modifié ainsi
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Pour plus d'informations, consultez le [gestionnaire des paramètres du plugin](https://docs.nocobase.com/development/client).

## Journal des modifications

Pour un journal des modifications complet, veuillez consulter le [Journal des modifications](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
