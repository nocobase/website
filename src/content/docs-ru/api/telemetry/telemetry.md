# Telemetry

## Обзор

`Telemetry` — это модуль телеметрии NocoBase, инкапсулированный на основе <a href="https://opentelemetry.io">OpenTelemetry</a>. Поддерживает регистрацию инструментов метрик (Metric) и трассировки (Trace) из экосистемы OpenTelemetry.

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `Telemetry`.

#### Сигнатура

- `constructor(options?: TelemetryOptions)`

#### Типы

```ts
export interface TelemetryOptions {
  serviceName?: string;
  version?: string;
  trace?: TraceOptions;
  metric?: MetricOptions;
}
```

#### Подробная информация

| Свойство      | Тип             | Описание                                                                                                                        | Значение по умолчанию     |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `serviceName` | `string`        | Необязательно, см. <a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a> | `nocobase`                |
| `version`     | `string`        | Необязательно, см. <a href="https://opentelemetry.io/docs/specs/semconv/resource/#service" target="_blank">Semantic Conventions</a> | Необязательно, текущая версия NocoBase |
| `trace`       | `TraceOptions`  | Необязательно, см. [Trace](./trace.md)                                                                                          |
| `metric`      | `MetricOptions` | Необязательно, см. [Metric](./metric.md)                                                                                        |

### `init()`

Регистрация инструментария, инициализация `Trace`, `Metric`.

#### Сигнатура

- `init(): void`

### `start()`

Запуск процессоров данных для `Trace`, `Metric`, например, экспорт в Prometheus.

#### Сигнатура

- `start(): void`

### `shutdown()`

Остановка процессоров данных для `Trace`, `Metric`.

#### Сигнатура

- `shutdown(): Promise<void>`

### `addInstrumentation()`

Добавление библиотек инструментария.

#### Сигнатура

- `addInstrumentation(...instrumentation: InstrumentationOption[])`