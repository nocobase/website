# Маршрутизация страниц и расширения

## Введение

Клиент NocoBase расширяет страницы через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager) и [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager), например:

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    this.router.add('hello', {
      path: '/',
      Component: () => <div>Привет, NocoBase!</div>,
    });

    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello',
      icon: 'ApiOutlined',
      Component: () => <div>Привет, страница настроек!</div>,
    });
  }
}
```

Можно использовать метод `app.router.getRoutes()`, чтобы просмотреть все зарегистрированные страницы.

```tsx | pure
import { Application, Plugin } from '@nocobase/client';
import React from 'react';

class PluginHello extends Plugin {
  async load() {
    console.log(this.app.router.getRoutes());
  }
}
```

## Существующие маршруты страниц

После начальной установки NocoBase зарегистрированы следующие маршруты страниц:

| Название       | Путь               | Компонент           | Описание |
| -------------- | ------------------ | ------------------- |---------|
| admin          | /admin/\*          | AdminLayout         | Страница администрирования  |
| admin.page     | /admin/:name       | AdminDynamicPage    | Динамически создаваемые страницы |
| admin.settings | /admin/settings/\* | AdminSettingsLayout | Страница настройки плагинов  |
| admin.pm.list  | /admin/pm/list/\* | PluginManager       | Страница управления плагинами  |

### AdminLayout

```ts
router.add('admin', {
  path: '/admin/*',
  Component: AdminLayout,
});
```

### AdminDynamicPage

```ts
router.add('admin.page', {
  path: '/admin/:name',
  Component: AdminDynamicPage,
});
```

Динамические страницы управляются через меню, добавляя пункт меню -> добавление страницы.

![](https://static-docs.nocobase.com/9204957c39f644cfbf23eef3cbdc7eca.png)

### AdminSettingsLayout

```typescript
router.add('admin.settings', {
  path: '/admin/settings/*',
  Component: AdminSettingsLayout,
});
```

Страница настройки плагинов

![](https://static-docs.nocobase.com/ea22826eba4fd38d68a5a52fd68e7719.png)

Меню и вкладки страницы настройки плагинов регистрируются через `app.pluginSettingsManager`.

## Расширение страниц

- Динамические страницы Schema добавляются через `добавление пункта меню` -> `страница`
- Обычные страницы добавляются через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager)
- Страницы настроек плагинов добавляются через [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager)

### Динамические страницы Schema

Добавляется через `добавление пункта меню` -> `страница`

### Расширение обычных страниц

Расширение маршрутов страниц осуществляется через [app.router.add()](https://client.docs.nocobase.com/core/application/router-manager)

```typescript
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application, Plugin } from '@nocobase/client';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>, <Link to={'/about'}>About</Link>
      </div>
      <Outlet />
    </div>
  );
};

class MyPlugin extends Plugin {
    async load() {
        this.app.router.add('root', {
          element: <Layout />,
        });

        this.app.router.add('root.home', {
          path: '/',
          element: <Home />,
        });

        this.app.router.add('root.about', {
          path: '/about',
          element: <About />,
        });
    }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [MyPlugin]
});


export default app.getRootComponent();
```

### 插件设置页扩展

插件设置页通过 [app.pluginSettingsManager.add()](https://client.docs.nocobase.com/core/application/plugin-settings-manager) 添加。

```tsx | pure
import { Plugin } from '@nocobase/client';
import React from 'react';

const HelloSettingPage = () => <div>Hello Setting page</div>;

export class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add('hello', {
      title: 'Hello', // Установите заголовок и название меню для страницы настроек
      icon: 'ApiOutlined', // Установить иконку для меню страницы
      Component: HelloSettingPage,
    });
  }
}
```

Использование многоуровневых маршрутов

```tsx | pure
import { Outlet } from 'react-router-dom';

const pluginName = 'hello';

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(pluginName, {
      title: 'HelloWorld',
      icon: '',
      Component: Outlet, // Можно не передавать, по умолчанию используется компонент `Outlet`
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo1`, {
      title: 'Demo1 Page',
      Component: () => <div>Содержимое страницы Demo1</div>,
    });

    this.app.pluginSettingsManager.add(`${pluginName}.demo2`, {
      title: 'Demo2 Page',
      Component: () => <div>Содержимое страницы Demo2</div>,
    });
  }
}
```
