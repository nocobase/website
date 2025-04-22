## 新機能

* 新しいクライアントアプリケーション、プラグイン、およびルーター
* Ant Designをv5にアップグレード
* 新しいプラグイン
  * データビジュアライゼーション
  * APIキー
  * Googleマップ

## 互換性のない変更

### 新しいクライアントアプリケーション、プラグイン、およびルーター

#### プラグインの変更

以前はコンポーネントを渡し、コンポーネントは`props.children`を渡す必要がありました。例えば：

```
const HelloProvider = (props) => {
  // 何かのロジックを実行
  return <div>{props.children}</div>;
};

export default HelloProvider;
```

今はプラグイン方式に変更する必要があります。例えば：

```
+import { Plugin } from '@nocobase/client'

const HelloProvider = (props) => {
  // 何かのロジックを実行
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

プラグインは非常に強力で、`load`フェーズでは多くのことができます：

* ルートを修正
* コンポーネントを追加
* プロバイダーを追加
* スコープを追加
* 他のプラグインをロード

#### ルーティングの変更

以前に`RouteSwitchContext`を使用してルートを変更していた場合、プラグインに置き換える必要があります：

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

今はプラグイン方式に変更する必要があります。例えば：

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

詳細については、[packages/core/client/src/application/index.md](https://github.com/nocobase/nocobase/blob/main/packages/core/client/src/application/index.md)を参照してください。

### antdをv5にアップグレード

* antdに関する詳細は公式ウェブサイトの[V4からV5](https://ant.design/docs/react/migration-v5)を参照してください。
* `@formily/antd`を`@formily/antd-v5`に置き換えてください。
