# Trace

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `Trace`.

#### Сигнатура

- `constructor(options?: TraceOptions)`

#### Типы

```ts
export type TraceOptions = {
  tracerName?: string;
  version?: string;
  processorName?: string | string[];
};
```

#### Подробная информация

| Свойство         | Тип                   | Описание                                | Значение по умолчанию     |
| ---------------- | --------------------- | --------------------------------------- | ------------------------- |
| `traceName`      | `string`              | Идентификатор trace                     | `nocobase-trace`          |
| `version`        | `string`              |                                         | Текущая версия NocoBase   |
| `processorName`  | `string` \| `string[]`| Идентификатор зарегистрированного `SpanProcessor`, который нужно включить |                         |

### `init()`

Инициализация `NodeTracerProvider`.

#### Сигнатура

- `init(): void`

### `registerProcessor()`

Регистрация `SpanProcessor`.

#### Сигнатура

- `registerProcessor(name: string, processor: GetSpanProcessor)`

#### Типы

```ts
import { SpanProcessor } from '@opentelemetry/sdk-trace-base';

type GetSpanProcessor = () => SpanProcessor;
```

#### Подробная информация

| Параметр    | Тип                  | Описание                          |
| ----------- | --------------------- | --------------------------------- |
| `name`      | `string`              | Уникальный идентификатор `SpanProcessor` |
| `processor` | `() => SpanProcessor` | Метод получения `SpanProcessor`   |

### `getTracer()`

Получение `Tracer`.

#### Сигнатура

- `getTracer(name?: string, version?: string)`

#### Подробная информация

| Параметр   | Тип      | Описание       | Значение по умолчанию     |
| ---------- | -------- | -------------- | ------------------------- |
| `name`     | `string` | Идентификатор trace | `nocobase-trace`          |
| `version`  | `string` |                | Текущая версия NocoBase   |

### `start()`

Запуск `SpanProcessor`.

#### Сигнатура

- `start(): void`

### `shutdown()`

Остановка `SpanProcessor`.

#### Сигнатура

- `shutdown(): Promise<void>`