---
title: "NocoBase 0.11: Neue Client-Anwendung, Plugin und Router"
description: "NocoBase 0.11 führt eine neue Client-Anwendung, ein Plugin und einen Router ein, mit einem Update auf antd v5 und neuen Plugins für Datenvisualisierung, API-Schlüssel und Google Maps-Integration."
---

## Neue Funktionen

* Neue Client-Anwendung, Plugin und Router
* Ant Design Upgrade auf v5
* Neues Plugin
  * Datenvisualisierung
  * API-Schlüssel
  * Google Maps

## Inkompatible Änderungen

### Neue Client-Anwendung, Plugin und Router

#### Plugin-Änderungen

Bisher musste eine Komponente übergeben werden, und die Komponente musste `props.children` weiterreichen, zum Beispiel:

```
const HelloProvider = (props) => {
  // etwas Logik ausführen
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

Jetzt muss auf die Plugin-Methode umgestellt werden, zum Beispiel:

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // etwas Logik ausführen
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

Plugins sind sehr leistungsfähig und können in der `load`-Phase viele Dinge erledigen:

* Routen ändern
* Komponenten hinzufügen
* Provider hinzufügen
* Scopes hinzufügen
* Andere Plugins laden

#### Routen-Änderungen

Wenn zuvor `RouteSwitchContext` zum Ändern der Route verwendet wurde, muss dies jetzt durch ein Plugin ersetzt werden:

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

Jetzt muss auf die Plugin-Methode umgestellt werden, zum Beispiel:

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

Weitere Details finden Sie in [packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)

### antd Upgrade auf v5

* Antd-bezogene Details finden Sie auf der offiziellen Website [V4 zu V5](https://ant.design/docs/react/migration-v5)
* `@formily/antd` wird durch `@formily/antd-v5` ersetzt
