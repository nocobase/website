# Router

## API

### 初始化

```tsx | pure
const app = new Application({
  router: {
    type: 'browser', // Значение по умолчанию для `type` — это `browser`.
  },
});

// or
const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});
```

### 添加路由

#### 基础用法

```tsx | pure
import { RouteObject } from 'react-router-dom';
const app = new Application();

const Hello = () => {
  return <div>Hello</div>;
};

// Первый параметр — это имя, второй параметр — `RouteObject`.
app.router.add('root', {
  path: '/',
  element: <Hello />,
});

app.router.add('root', {
  path: '/',
  Component: Hello,
});
```

#### Поддерживается, если Component является строкой.

```tsx | pure
// зарегистрировать Hello
app.addComponents({
  Hello,
});

// Component — это строка `Hello`.
app.router.add('root', {
  path: '/',
  Component: 'Hello',
});
```

#### 嵌套路由

```tsx | pure
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/home">Главная</Link>
      <Link to="/about">О нас</Link>

      <Outlet />
    </div>
  );
};

const Home = () => {
  return <div>Главное</div>;
};

const About = () => {
  return <div>О нас</div>;
};

app.router.add('root', {
  element: <Layout />,
});
app.router.add('root.home', {
  path: '/home',
  element: <Home />,
});
app.router.add('root.about', {
  path: '/about',
  element: <About />,
});
```

Он будет отрендерен в следующем виде:

```tsx | pure
{
  element: <Layout />,
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
}
```

### Удалить маршрут

```tsx | pure
// Передайте имя для удаления.
app.router.remove('root.home');
app.router.remove('hello');
```

#### Изменение маршрута в плагине

```tsx | pure
class MyPlugin extends Plugin {
  async load() {
    // add route
    this.app.router.add('hello', {
      path: '/hello',
      element: <div>Привет</div>,
    });

    // remove route
    this.app.router.remove('world');
  }
}
```

## Пример

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Application } from '@nocobase/client';

const Home = () => <h1>Главное</h1>;
const About = () => <h1>О нас</h1>;

const Layout = () => {
  return (
    <div>
      <div>
        <Link to={'/'}>Главное</Link>, <Link to={'/about'}>О нас</Link>
      </div>
      <Outlet />
    </div>
  );
};

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
});

app.router.add('root', {
  element: <Layout />,
});

app.router.add('root.home', {
  path: '/',
  element: <Home />,
});

app.router.add('root.about', {
  path: '/about',
  element: <About />,
});

export default app.getRootComponent();
```
