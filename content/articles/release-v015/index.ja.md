## 機能

![プラグイン設定マネージャー](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## 重大な変更

### プラグイン構成ページの登録 API

以前は、プラグイン構成ページは `SettingsCenterProvider` を使用して登録されていましたが、今やプラグインを通じて登録する必要があります。

* ケース 1: 元のページにタブが 1 つだけ

ページにタブが 1 つだけある場合、新しいバージョンのタブは削除され、ページのタイトルとアイコンのみが残ります。

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

これを以下のように変更する必要があります:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // 新しいプラグインの場合、このパラメータを渡す必要はありません
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

`tab1`の `Hello Tab` が削除されます。

`aclSnippet` パラメータ `pm.hello.tab1` は、元の `settings` オブジェクトのキーに対応します:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // ここでの `hello` は `pm.hello.tab1` の `hello` に対応
      tabs: {
        tab1: {
          // ここでの `tab1` は `pm.hello.tab1` の `tab1` に対応
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* ケース 2: 元のページに複数のタブがある場合

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

これを以下のように変更する必要があります:

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
      Component: HelloPluginSettingPage2,
    });
  }
}
```

プラグイン設定マネージャーに対応するルーティング情報を取得します

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

プラグイン設定ページ内部にリンクのジャンプがある場合は、それに応じて変更する必要があります。例えば:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// これは以下のように変更できます
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

詳細については、[プラグイン設定マネージャー](https://docs.nocobase.com/development/client)を参照してください。

## チェンジログ

完全なチェンジログについては、[Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md)を参照してください。