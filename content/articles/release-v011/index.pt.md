---
title: "NocoBase 0.11: Novo aplicativo cliente, plugin e roteador"
description: "NocoBase 0.11 apresenta um novo aplicativo cliente, plugin e roteador, com uma atualização para antd v5 e novos plugins para visualização de dados, chaves de API e integração com Google Maps."
---

## Novos recursos

* Novo aplicativo cliente, plugin e roteador
* Atualização do Ant Design para v5
* Novo plugin
  * Visualização de dados
  * Chaves de API
  * Google Maps

## Mudanças incompatíveis

### Novo aplicativo cliente, plugin e roteador

#### Mudanças nos plugins

Antes, você precisava passar um componente e o componente precisava passar `props.children`, por exemplo:

```
const HelloProvider = (props) => {
  // faz alguma lógica
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

agora você precisa mudar para a abordagem de plugin, por exemplo:

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // faz alguma lógica
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

plugins são muito poderosos e podem fazer muitas coisas na fase `load`:

* modificar rotas
* adicionar Componentes
* adicionar Providers
* adicionar Scopes
* carregar outros plugins

#### Mudanças nas rotas

Se você usava `RouteSwitchContext` para modificar a rota antes, agora precisa substituí-lo por um plugin:

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

agora você precisa mudar para a abordagem de plugin, por exemplo:

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

mais detalhes podem ser encontrados em [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### antd atualizado para v5

* Detalhes relacionados ao antd consulte o site oficial [V4 para V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` substituído por `@formily/antd-v5`
