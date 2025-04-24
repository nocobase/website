# Рендеринг Schema

## Основные компоненты

Компоненты, связанные с рендерингом Schema, включают:

- `<SchemaComponentProvider />` — предоставляет контекст, необходимый для рендеринга schema.
- `<SchemaComponentOptions />` — используется для расширения components и scopes (необязательно).
- `<SchemaComponent />` — используется для рендеринга schema, должен находиться внутри `<SchemaComponentProvider />`.

Основное использование выглядит следующим образом:

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

const schema = {
  type: 'void',
  name: 'hello',
  'x-component': 'Hello',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

Подробное описание API см. в [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component).

## Что такое scope?

Scope — это переменные или функции, доступные внутри schema. Например, чтобы функция `t()` корректно отображала заголовок (title), её необходимо зарегистрировать в scope.

```tsx | pure
<SchemaComponent
  scope={{ t }}
  schema={{
    title: '{{t("Hello")}}',
  }}
>
```

## Регистрация components и scopes

`SchemaComponentProvider`, `SchemaComponentOptions` и `SchemaComponent` могут регистрировать components и scopes. Различия заключаются в следующем:

- `SchemaComponentProvider` предоставляет контекст верхнего уровня.
- `SchemaComponentOptions` используется для замены и расширения контекста в локальной области.
- `SchemaComponent` предоставляет контекст для текущей schema.

Например, в следующем примере:

```tsx | pure
<SchemaComponentProvider components={{ ComponentA }}>
  <SchemaComponent components={{ ComponentB }} schema={schema1}>
  <SchemaComponent components={{ ComponentC }} schema={schema2}>
  <SchemaComponentOptions components={{ ComponentD }}>
    <SchemaComponent components={{ ComponentE }} schema={schema3}>
    <SchemaComponent components={{ ComponentF }} schema={schema4}>
  </SchemaComponentOptions>
</SchemaComponentProvider>
```

- В schema1 можно использовать ComponentA, ComponentB
- В schema2 можно использовать ComponentA, ComponentC
- В schema3 можно использовать ComponentA, ComponentD, ComponentE
- В schema4 можно использовать ComponentA, ComponentD, ComponentF

## Использование в Application

В провайдерах клиентского приложения NocoBase встроен компонент SchemaComponentProvider.

```ts
class Application {
  // 默认提供的 Providers
  addDefaultProviders() {
    this.addProvider(SchemaComponentProvider, {
      scopes: this.scopes
      components: this.components,
    });
  }
}
```

Итоговая структура отрендеренных компонентов выглядит следующим образом:

```tsx | pure
<Router>
  {/* Провайдер контекста маршрутизации */}
  <SchemaComponentProvider components={app.components} scopes={app.scopes}>
    {/* Другие пользовательские компоненты Provider - открывающий тег */}
    <Routes />
    {/* Другие пользовательские компоненты Provider - закрывающий тег */}
  </SchemaComponentProvider>
</Router>
```

При использовании внутри приложения не нужно дополнительно оборачивать в `SchemaComponentProvider`, можно сразу использовать `SchemaComponent`.

```tsx
import {
  Application,
  Plugin,
  SchemaComponent,
  SchemaComponentProvider,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Hello, world!</h1>;

const HelloPage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-component': 'Hello',
      }}
    />
  );
};

class PluginHello extends Plugin {
  async load() {
    this.app.addProvider(SchemaComponentProvider, {
      components: this.app.components,
      scopes: this.app.scopes,
    });
    this.app.addComponents({ Hello });
    this.router.add('hello', {
      path: '/',
      Component: HelloPage,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
  },
  plugins: [PluginHello],
});

export default app.getRootComponent();
```

В методах жизненного цикла приложения можно использовать `app.addComponents()` и `app.addScopes()` для расширения глобальных `components` и `scopes`.

```ts
class PluginHello extends Plugin {
  async load() {
    this.app.addComponents({
      // Расширенные компоненты
    });
    this.app.addScopes({
      // Расширенный scope
    });
  }
}
```
