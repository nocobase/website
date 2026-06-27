---
title: "NocoBase 0.11 : Nouvelle application client, plugin et routeur"
description: "NocoBase 0.11 introduit une nouvelle application client, un plugin et un routeur, avec une mise à jour vers antd v5 et de nouveaux plugins pour la visualisation de données, les clés API et l'intégration Google Maps."
---

## Nouvelles fonctionnalités

* Nouvelle application cliente, plugin et routeur
* Mise à niveau d'Ant Design vers v5
* Nouveau plugin
  * Visualisation de données
  * Clés API
  * Google Maps

## Changements incompatibles

### Nouvelle application cliente, plugin et routeur

#### Modifications des plugins

Avant, vous deviez passer un composant et ce composant devait transmettre `props.children`, par exemple :

```
const HelloProvider = (props) => {
  // faire une logique
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

maintenant, vous devez passer à la méthode plugin, par exemple :

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // faire une logique
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

les plugins sont très puissants et peuvent faire beaucoup de choses pendant la phase `load` :

* modifier les routes
* ajouter des composants
* ajouter des fournisseurs
* ajouter des portées
* charger d'autres plugins

#### Modifications des routes

Si vous utilisiez auparavant `RouteSwitchContext` pour modifier la route, vous devez maintenant le remplacer par un plugin :

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

maintenant, vous devez passer à la méthode plugin, par exemple :

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

plus de détails peuvent être trouvés dans [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### Mise à niveau d'antd vers v5

* Les détails liés à antd sont à consulter sur le site officiel [V4 vers V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` est remplacé par `@formily/antd-v5`
