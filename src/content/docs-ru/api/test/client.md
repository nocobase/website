# Client

## Обзор

NocoBase использует <a href="https://vitest.dev/" target="_blank">Vitest</a> для тестирования клиентской части. Пакет `@nocobase/test/client` предоставляет удобные методы для написания клиентских тестов.

## API

### `defineConfig()`

Получение конфигурации Vitest.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `sleep()`

Задержка выполнения на определенное время.

```ts
sleep(5000);
```

#### Сигнатура

- `sleep: (timeout?: number) => Promise<unknown>`

#### Подробная информация

| Имя параметра | Тип      | Описание             |
| -------------- | --------- | -------------------- |
| `timeout`      | `number`  | Время задержки (мс) |

### @testing-library/react

Используется для тестирования React-компонентов. См. <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank">React Testing Library</a>.

### @testing-library/user-event

Используется для симуляции действий пользователя. См. <a href="https://testing-library.com/docs/user-event/intro/" target="_blank">User Interactions</a>.

```ts
import { userEvent } from '@nocobase/test/client';

await userEvent.click();
```
