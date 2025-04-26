# Application

## Конструктор

### `constructor()`

Создайте экземпляр приложения.

**Сигнатура**

- `constructor(options: ApplicationOptions)`

**Пример**

```ts
const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});
```

## Методы

### use()

Добавить Providers. Встроенные Providers включают:

- APIClientProvider
- I18nextProvider
- AntdConfigProvider
- SystemSettingsProvider
- PluginManagerProvider
- SchemaComponentProvider
- SchemaInitializerProvider
- BlockSchemaComponentProvider
- AntdSchemaComponentProvider
- ACLProvider
- RemoteDocumentTitleProvider

### render()

Отрисовать компонент App

```ts
import { Application } from '@nocobase/client';

export const app = new Application({
  apiClient: {
    baseURL: process.env.API_BASE_URL,
  },
  dynamicImport: (name: string) => {
    return import(`../plugins/${name}`);
  },
});

export default app.render();
```
