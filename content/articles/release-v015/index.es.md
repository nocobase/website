---
title: "NocoBase 0.15: Nuevo administrador de configuraciones de complementos"
description: "NocoBase 0.15 presenta un nuevo administrador de configuraciones de complementos con una configuración de complementos mejorada, procesos de registro simplificados y varias actualizaciones para mejorar la experiencia del usuario."
---

## Funcionalidades

![Gestor de ajustes del plugin](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Cambios de última hora

### API de registro de página de configuración del plugin

Anteriormente, la página de configuración del plugin se registraba usando `SettingsCenterProvider`, y ahora debe registrarse a través del plugin.

* Caso 1: Solo hay una pestaña en la página original

Cuando solo hay una pestaña en la página, la nueva versión eliminará la pestaña, dejando solo el título y el icono de la página.

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

Ahora debe cambiarse a:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // No es necesario pasar este parámetro si es un plugin nuevo
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

La `Hello Tab` de `tab1` se elimina.

El parámetro `aclSnippet` `pm.hello.tab1` corresponde a la clave del objeto `settings` original:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // Este `hello` corresponde a `hello` en `pm.hello.tab1`
      tabs: {
        tab1: {
          // Aquí, `tab1` corresponde a `tab1` en `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Caso 2: Hay varias pestañas en la página original

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

Ahora debe cambiarse a:

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

Obtener la información de enrutamiento correspondiente a pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Si hay un salto de enlace dentro de la página de configuración del plugin, debe cambiarse en consecuencia, por ejemplo:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Esto se puede cambiar a
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Para más información, consulte el [gestor de ajustes del plugin](https://docs.nocobase.com/development/client).

## Registro de cambios

Para ver el registro de cambios completo, consulte [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
