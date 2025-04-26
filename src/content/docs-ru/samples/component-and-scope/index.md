# Регистрация и использование Component и Scope

## Описание сценария

Необходимость регистрации Component и Scope объясняется двумя основными причинами:

### Причина 1: UI Schema должна храниться на сервере

Фронтенд-страницы NocoBase рендерятся на основе [UI Schema](/development/client/ui-schema/what-is-ui-schema), которая, в свою очередь, хранится в базе данных. Поскольку она не может содержать ссылочных типов атрибутов, мы можем хранить значения таких атрибутов, как `x-component`, `x-decorator`, `x-use-component-props`, `x-use-decorator-props`, только в виде строк. Соответствующие Component и Scope регистрируются в NocoBase, чтобы при рендеринге страницы можно было найти нужный Component или Scope по строковому значению.

Напротив, для UI Schema, которые не нужно хранить в базе данных, можно напрямую использовать ссылочные типы атрибутов. Например, при разработке локальной [страницы конфигурации плагина](/plugin-samples/plugin-settings/form), значения таких атрибутов, как `x-component` и `x-use-component-props`, могут быть указаны как ссылочные типы.

```ts
const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': MyComponent,
  'x-use-component-props': useMyComponentProps,
}
```

### Причина 2: Требования расширяемости

Component используется как в UI Schema, так и в маршрутах. В обоих случаях возникает необходимость переопределения определенных компонентов для достижения целей кастомизации. Например:

```ts
class AuthPlugin extends Plugin {
  async load() {
    this.app.addComponents({ LoginPage })
    this.app.router.add('auth.signin', {
      path: '/signin',
      Component: 'SignInPage',
    })
  }
}
```

Предположим, что кто-то хочет заменить страницу входа в систему. Для этого есть два варианта.

#### Вариант 1: Замена маршрута

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.router.add('auth.login', {
      path: '/login',
      Component: CustomLoginPage,
    })
  }
}
```

#### Вариант 2: Прямая замена Component

```ts
class CustomPlugin extends Plugin {
  async load() {
    this.app.addComponent({ LoginPage: CustomLoginPage })
  }
}
```

Подводя итог, если у нас нет этих двух сценариев, нам не нужно регистрировать Component и Scope — мы можем напрямую использовать атрибуты ссылочного типа.

## Глобальная и локальная регистрация

Component и Scope могут быть зарегистрированы как глобально, так и локально.

### Глобальная регистрация

Для глобальной регистрации необходимо использовать методы [app.addComponents()](https://client.docs.nocobase.com/core/application/application#appaddcomponents) и [app.addScopes()](https://client.docs.nocobase.com/core/application/application#appaddscopes). Например:

```ts
class MyPlugin extends Plugin {
  async load() {
    this.app.addComponents({ MyComponent })
    this.app.addScopes({ MyScope })
  }
}
```

### Локальная регистрация

Для локальной регистрации необходимо использовать атрибуты `components` и `scope` компонентов [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) и [SchemaComponentOptions](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponentoptions). Например:

```tsx | pure
<SchemaComponentProvider components={{ Hello }} scope={{ useDeleteProps }}>
  <SchemaComponent schema={schema} components={{ World }} scope={{ useSubmitProps }} />
</SchemaComponentProvider>
```

`SchemaComponentProvider` может быть вложен многократно, и внутренние `SchemaComponent` будут наследовать внешние `components` и `scope`.


Для вышеуказанных сценариев мы предоставляем следующие примеры:

- [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global)
- [Локальная регистрация Component и Scope](/plugin-samples/component-and-scope/local)

Сценарий переопределения можно изучить в примере маршрутизации [Замена страницы](/plugin-samples/router/replace-page).
