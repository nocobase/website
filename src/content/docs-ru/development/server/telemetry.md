# Телеметрия

:::warning{title=Экспериментальный}
:::

Модуль телеметрии (Telemetry) NocoBase основан на <a href="https://opentelemetry.io/" target="_blank">OpenTelemetry</a>. В этой статье описывается, как использовать модуль телеметрии для сбора данных трассировки (Trace) и метрик (Metric), чтобы улучшить наблюдаемость (Observability) системы NocoBase.

:::info{title=Важно}
Для запуска сбора телеметрических данных в NocoBase необходимо настроить переменную окружения `TELEMETRY_ENABLED=true` перед запуском. Дополнительные настройки см. здесь: [Переменные окружения - Телеметрия](../../welcome/getting-started/env.md#telemetry_enabled).
:::

## Инструментирование (Instrumentation)

### Метрики

```ts
const meter = app.telemetry.metric.getMeter();
const counter = meter.createCounter('event_counter', {});
counter.add(1);
```

Ссылки:

- <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter" target="_blank">https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-meter</a>

### Трассировка (Trace)

```ts
const tracer = app.telemetry.trace.getTracer();
tracer.startActiveSpan();
tracer.startSpan();
```

Ссылки:

- <a href="https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer" target="_blank">https://opentelemetry.io/docs/instrumentation/js/manual/#acquiring-a-tracer</a>

### Библиотеки инструментов

```ts
import { Plugin } from '@nocobase/server';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

class InstrumentationPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.addInstrumentation(getNodeAutoInstrumentations());
    });
  }
}
```

:::warning{title=Важно}
Модуль телеметрии в NocoBase инициализируется на этапе `app.beforeLoad`. Подробнее: [Жизненный цикл](../life-cycle.md). Поэтому не все библиотеки инструментации подходят для использования в NocoBase.  
Например, <a href="https://www.npmjs.com/package/@opentelemetry/instrumentation-koa" target="_blank">instrumentation-koa</a> необходимо подключать до создания экземпляра `Koa`. Однако, хотя `Application` NocoBase основан на `Koa`, модуль телеметрии инициализируется уже после создания экземпляра `Application`, поэтому данная библиотека не может быть использована.
:::

Ссылки:

- <a href="https://opentelemetry.io/docs/instrumentation/js/libraries/" target="_blank">https://opentelemetry.io/docs/instrumentation/js/libraries/</a>

## Сбор данных

### Метрики

```ts
import { Plugin } from '@nocobase/server';
import {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} from '@opentelemetry/sdk-metrics';

class MetricReaderPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.metric.registerReader(
        'console',
        () =>
          new PeriodicExportingMetricReader({
            exporter: new ConsoleMetricExporter(),
          }),
      );
    });
  }
}
```

### Трассировка (Trace)

```ts
import { Plugin } from '@nocobase/server';
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
} from '@opentelemetry/sdk-trace-base';

class TraceSpanProcessorPlugin extends Plugin {
  afterAdd() {
    this.app.on('beforeLoad', (app) => {
      app.telemetry.trace.registerProcessor(
        'console',
        () => new BatchSpanProcessor(new ConsoleSpanExporter()),
      );
    });
  }
}
```

Ссылки:

- <a href="https://opentelemetry.io/docs/instrumentation/js/exporters" target="_blank">https://opentelemetry.io/docs/instrumentation/js/exporters</a>
