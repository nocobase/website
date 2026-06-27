---
title: "NocoBase 0.15: Novo gerenciador de configurações de plugins"
description: "NocoBase 0.15 apresenta um novo gerenciador de configurações de plugins com configuração aprimorada de plugins, processos de registro simplificados e várias atualizações para melhorar a experiência do usuário."
---

## Funcionalidades

![Gerenciador de configurações do plugin](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Mudanças significativas

### API de registro da página de configuração do plugin

Anteriormente, a página de configuração do plugin era registrada usando `SettingsCenterProvider`, e agora precisa ser registrada através do plugin.

* Caso 1: Há apenas uma aba na página original

Quando há apenas uma aba na página, a nova versão excluirá a aba, mantendo apenas o título e o ícone da página.

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

Agora precisa ser alterado para:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Não é necessário passar este parâmetro se for um novo plugin
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

A `Hello Tab` de `tab1` foi excluída.

O parâmetro `aclSnippet` `pm.hello.tab1` corresponde à chave do objeto `settings` original:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // Este `hello` corresponde a `hello` em `pm.hello.tab1`
      tabs: {
        tab1: {
          // Aqui, `tab1` corresponde a `tab1` em `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Caso 2: Há várias abas na página original

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

Agora precisa ser alterado para:

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

Obtenha as informações de roteamento correspondentes ao pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Se houver um link de navegação interno na página de configuração do plugin, é necessário alterá-lo adequadamente, por exemplo:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Isso pode ser alterado para
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Para mais informações, consulte o [gerenciador de configurações do plugin](https://docs.nocobase.com/development/client).

## Registro de alterações

Para um registro de alterações completo, consulte [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
