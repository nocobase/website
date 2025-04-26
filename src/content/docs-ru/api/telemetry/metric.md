# Metric

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `Metric`.

#### Сигнатура

- `constructor(options?: MetricOptions)`

#### Типы

```ts
export type MetricOptions = {
  meterName?: string;
  version?: string;
  readerName?: string | string[];
};
```

#### Подробная информация

| Свойство      | Тип                   | Описание                          | Значение по умолчанию     |
| ------------- | --------------------- | --------------------------------- | ------------------------- |
| `meterName`   | `string`              | Идентификатор `meter`            | `nocobase-meter`          |
| `version`     | `string`              |                                   | Текущая версия NocoBase   |
| `readerName`  | `string` \| `string[]`| Идентификаторы зарегистрированных `MetricReader`, которые нужно включить |                         |

### `init()`

Инициализация `MetricProvider`.

#### Сигнатура

- `init(): void`

### `registerReader()`

Регистрация `MetricReader`.

#### Сигнатура

- `registerReader(name: string, reader: GetMetricReader)`

#### Типы

```ts
import { MetricReader } from '@opentelemetry/sdk-metrics';

type GetMetricReader = () => MetricReader;
```

#### Подробная информация

| Параметр    | Тип                 | Описание                           |
| ----------- | -------------------- | ---------------------------------- |
| `name`      | `string`             | Уникальный идентификатор `MetricReader` |
| `processor` | `() => MetricReader` | Метод получения `MetricReader`     |

### `addView()`

Добавление `View`. См. <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#configure-metric-views" target="_blank">Configure Metric Views</a>.

#### Сигнатура

- `addView(...view: View[])`

#### Типы

```ts
import { View } from '@opentelemetry/sdk-metrics';
```

### `getMeter()`

Получение `Meter`.

#### Сигнатура

- `getMeter(name?: string, version?: string)`

#### Подробная информация

| Параметр   | Тип      | Описание               | Значение по умолчанию     |
| ---------- | -------- | ---------------------- | ------------------------- |
| `name`     | `string` | Идентификатор `meter` | `nocobase-meter`          |
| `version`  | `string` |                        | Текущая версия NocoBase   |

### `start()`

Запуск `MetricReader`.

#### Сигнатура

- `start(): void`

### `shutdown()`

Остановка `MetricReader`.

#### Сигнатура

- `shutdown(): Promise<void>`