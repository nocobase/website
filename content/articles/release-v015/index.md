## Features

![Plugin settings manager](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Breaking changes

### Plugin configuration page registration API

Previously, the plugin configuration page was registered using `SettingsCenterProvider`, and now it needs to be registered through the plugin.

* Case 1: There is only one Tab on the original page

When there is only one Tab on the page, the new version of the Tab will be deleted, leaving only the title and icon of the page.

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

Now it needs to be changed to:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // It is not necessary to pass this parameter if it is a new plugin
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

The `Hello Tab` of `tab1` is deleted.

`aclSnippet` parameter `pm.hello.tab1` corresponds to the key of the original `settings` object:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // This `hello` corresponds to `hello` in `pm.hello.tab1`
      tabs: {
        tab1: {
          // Here, `tab1` corresponds to `tab1` in `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Case 2: There are multiple Tabs on the original page

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

Now it needs to be changed to:

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

Get the routing information corresponding to the pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

If there is a link jump inside the plugin configuration page, you need to change it accordingly, for example:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// This can be changed to
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

For more information, see the [plugin settings manager](https://docs.nocobase.com/development/client).

## Changelog

For a complete changelog, please refer to [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
