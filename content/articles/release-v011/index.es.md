---
title: "NocoBase 0.11: Nueva aplicación cliente, plugin y enrutador"
description: "NocoBase 0.11 presenta una nueva aplicación cliente, plugin y enrutador, con una actualización a antd v5 y nuevos plugins para visualización de datos, claves API e integración con Google Maps."
---

## Nuevas funcionalidades

* Nueva aplicación cliente, plugin y enrutador
* Actualización de Ant Design a v5
* Nuevo plugin
  * Visualización de datos
  * Claves API
  * Mapa de Google

## Cambios incompatibles

### Nueva aplicación cliente, plugin y enrutador

#### Cambios en plugins

Antes tenías que pasar un componente y el componente necesitaba pasar `props.children`, por ejemplo:

```
const HelloProvider = (props) => {
  // hacer alguna lógica
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

ahora debes cambiar al enfoque de plugin, por ejemplo:

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // hacer alguna lógica
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

Los plugins son muy potentes y pueden hacer muchas cosas en la fase `load`:

* Modificar rutas
* Añadir Componentes
* Añadir Providers
* Añadir Scopes
* Cargar otros plugins

#### Cambios en el enrutamiento

Si antes usabas `RouteSwitchContext` para modificar la ruta, ahora debes reemplazarlo con un plugin:

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

ahora debes cambiar al enfoque de plugin, por ejemplo:

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

Puedes encontrar más detalles en [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### Actualización de antd a v5

* Los detalles relacionados con antd se pueden consultar en el sitio web oficial [V4 a V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` se reemplaza por `@formily/antd-v5`
