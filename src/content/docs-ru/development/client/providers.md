# Компонент Provider

В клиентском приложении NocoBase компоненты Provider определяются во внешнем слое, и основная структура выглядит следующим образом:

```tsx | pure
<Router>
  {' '}
  {/* Провайдер контекста маршрутизации */}
  <ProviderA>
    <ProviderB>
      {/* Другие пользовательские компоненты Provider - открывающий тег */}
      <Routes />
      {/* Другие пользовательские компоненты Provider - закрывающий тег */}
    </ProviderB>
  </ProviderA>
</Router>
```

Поскольку провайдеры определены во внешнем слое, их назначение включает:

- Предоставление глобально общего контекста (Context), что требует рендеринга `props.children`
- Отображение глобального содержимого, что также требует рендеринга `props.children`
- Перехват логики, при котором `props.children` рендерится на основе условий

## Предоставление глобально общего контекста

Используйте `createContext` для определения контекста и `useContext` для получения доступа к созданному контексту.

```tsx
import { Plugin, Application } from '@nocobase/client';
import { createContext, useContext } from 'react';

const MyContext = createContext({ color: null });

const HomePage = () => {
  // 读取 context 值
  const { color } = useContext(MyContext);
  return <div>Цвет: {color}</div>;
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyContext.Provider, { value: { color: 'blue' } });
    this.app.router.add('home', {
      path: '/',
      Component: HomePage,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```

## 提供全局内容展示

```tsx
import { Plugin, Application } from '@nocobase/client';

// Создаем компонент, обращая внимание на рендеринг `children`
const MyProvider = (props) => {
  const { children, name } = props;
  return (
    <div>
      <div>Отображение глобального контента - {name}</div>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider, { name: 'NocoBase' });

    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Домашняя страница</div>,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```

## 拦截作用

```tsx
import { Plugin, Application } from '@nocobase/client';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

// 创建一个组件，注意对 children 的渲染
const MyProvider = (props) => {
  const { children, name } = props;
  const location = useLocation();
  if (location.pathname === '/about') {
    return (
      <div>
        Содержимое было перехвачено, возвращаемся. <Link to={'/'}>Главная страница</Link>
      </div>
    );
  }
  return (
    <div>
      <div>Привет {name}</div>
      <Link to={'/'}>Главное</Link>, <Link to={'/about'}>О нас</Link>
      {children}
    </div>
  );
};

class PluginSampleProvider extends Plugin {
  async load() {
    this.app.addProvider(MyProvider);
    this.app.router.add('home', {
      path: '/',
      Component: () => <div>Домашняя страница</div>,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
    initialEntries: ['/'],
  },
  plugins: [PluginSampleProvider],
});

export default app.getRootComponent();
```
