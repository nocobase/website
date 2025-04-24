# Расширение типов диаграмм

## Обзор

NocoBase использует <a href="https://g2plot.antv.antgroup.com/" target="_blank">Ant Design Charts</a> в качестве библиотеки диаграмм по умолчанию, которая включает часто используемые типы диаграмм. Помимо встроенных типов диаграмм, NocoBase также поддерживает расширение для добавления новых типов диаграмм или интеграцию с другими библиотеками диаграмм, такими как ECharts. Этот раздел в основном посвящен тому, как расширить новый тип диаграммы.

## Определение диаграммы

В плагине визуализации каждый тип диаграммы определяется классом. Этот класс должен реализовывать интерфейс [ChartType](#charttype). Для удобства понимания и разработки мы предоставляем базовый класс [Chart](#chart), который частично реализует интерфейс `ChartType`. В большинстве случаев расширяемый тип диаграммы может просто наследовать класс `Chart` и дополнить его соответствующими методами.

```ts
class CustomChart extends Chart {
  constructor({ name, title, Component, config }: ChartProps) {
    // ...
  }

  init(
    fields: FieldOption[],
    {
      measures,
      dimensions,
    }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
  ) {
    // ...
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    // ...
  }

  getReference() {
    // ...
  }
}
```

### Информация о диаграмме

Основная информация о типе диаграммы включает:

| Параметр    | Описание                           |
| ----------- | ---------------------------------- |
| `name`      | Идентификатор                      |
| `title`     | Отображаемый заголовок             |
| `Component` | Компонент, используемый для отрисовки диаграммы |
| `config`    | Базовая форма конфигурации визуализации |

<img src="https://static-docs.nocobase.com/202404192352571.png"/>

Пример:

```ts
new CustomChart({
  name: 'custom',
  title: 'Custom Chart',
  Component: CustomChart,
  config: ['xField', 'yField', 'seriesField'],
});
```

Чтобы узнать конкретное использование, обратитесь к [Chart](#chart).

### Инициализация конфигурации диаграммы

Когда пользователь выбирает диаграмму, мы можем захотеть инициализировать параметры конфигурации диаграммы на основе настроек запроса данных пользователя, чтобы уменьшить количество ручных операций по настройке.  
Каждый раз, когда пользователь выбирает диаграмму, внутри плагина будет предпринята попытка вызвать метод `init()` класса диаграммы, передавая все поля текущей таблицы данных и текущие настройки метрик и измерений. Метод `init()` может использовать эти параметры для выполнения логики инициализации конфигурации диаграммы.  
Внутри класса `Chart` реализован метод `infer()`, который можно использовать для простого вывода начальных настроек полей оси X, оси Y и категорий.  

Пример:

```ts
init(
  fields: FieldOption[],
  {
    measures,
    dimensions,
  }: { measures: MeasureProps[]; dimensions: DimensionProps[] },
) {
  const { xField, yField, seriesField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
}
```

### Получение атрибутов компонента диаграммы

После получения данных конфигурации диаграммы, настроенных пользователем, может потребоваться дополнительная обработка перед тем, как передать их в качестве атрибутов компоненту для отрисовки диаграммы. Метод `getProps()` принимает данные диаграммы, конфигурацию диаграммы и информацию о соответствующих полях в качестве параметров. Мы можем обработать эти параметры и вернуть окончательные атрибуты, которые будут переданы в компонент диаграммы.

Например, для диаграммы «Статистика»:

```ts
getProps({ data, fieldProps, general, advanced }: RenderProps) {
  const record = data[0] || {};
  const field = general?.field;
  const props = fieldProps[field];
  return {
    value: record[field],
    formatter: props?.transformer,
    ...general,
    ...advanced,
  };
}
```

### Получение справочной информации о компоненте диаграммы

Метод `getReference()` в основном используется для получения справочной документации по типу текущей диаграммы.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

## Добавление диаграммы

После определения класса диаграммы нам также необходимо добавить экземпляр класса в плагин визуализации данных. При выборе диаграммы она отображается в группах, по умолчанию группа диаграммы — «Встроенная» (Built-in).

<img src="https://static-docs.nocobase.com/202404201042045.png"/>

Мы можем добавить группу диаграмм или добавить диаграмму в существующую группу.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', [...]);

    // Set a group of charts,
    // can be used for overriding an exist group
    plugin.charts.setGroup('custom', [...]);

    // Append a chart to an exist group
    // The name of the chart is required to be unique in a group
    plugin.charts.add('Built-in', new CustomChart({
      // ...
    }));
  }
}
```

См. [ChartGroup](#chartgroup)

## Примеры

- [src/client/chart/g2plot](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/g2plot)

- [src/client/chart/antd](https://github.com/nocobase/nocobase/tree/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/antd)

- [Пример интеграции ECharts](../step-by-step/index.md)

## API

### ChartGroup

#### `addGroup()`

Добавляет группу диаграмм.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    // Add a group of charts
    plugin.charts.addGroup('custom', [...]);
  }
}
```

**Сигнатура**

- `addGroup(name: string, charts: ChartType[])`

**Подробная информация**

| Параметр | Тип          | Описание             |
| -------- | ------------- | -------------------- |
| `name`   | `string`      | Уникальный идентификатор группы диаграмм |
| `charts` | `ChartType[]` | Массив диаграмм     |

#### `add()`

Добавляет диаграмму в существующую группу.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization';

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);

    plugin.charts.add(
      'Built-in',
      new CustomChart({
        // ...
      }),
    );
  }
}
```

**Сигнатура**

- `add(group: string, chart: ChartType)`

**Подробная информация**

| Параметр | Тип         | Описание             |
| -------- | ----------- | -------------------- |
| `group`  | `string`    | Уникальный идентификатор группы диаграмм |
| `chart`  | `ChartType` | Диаграмма           |

#### `setGroup()`

Устанавливает группу диаграмм, перезаписывая существующие диаграммы.

```typescript
import DataVisualization from '@nocobase/plugin-data-visualization'

class CustomChartsPlugin extends Plugin {
  async load() {
    const plugin = this.app.pm.get(DataVisualization);
    // Set a group of charts,
    // can be used for overriding an exist group
    plugin.charts.setGroup('custom', [...]);
  }
}
```

**Сигнатура**

- `setGroup(name: string, charts: ChartType[])`

**Подробная информация**

| Параметр | Тип          | Описание             |
| -------- | ------------- | -------------------- |
| `name`   | `string`      | Уникальный идентификатор группы диаграмм |
| `charts` | `ChartType[]` | Массив диаграмм     |

### Chart

#### `constructor()`

Конструктор, создающий новый экземпляр `Chart`.

**Сигнатура**

- `constructor({ name, title, Component, config }: ChartProps)`

**Типы**

```ts
export type ChartProps = {
  name: string;
  title: string;
  Component: React.FC<any>;
  config?: Config[];
};

export type FieldConfigProps = Partial<{
  name: string;
  title: string;
  required: boolean;
  defaultValue: any;
}>;
export type ConfigProps =
  | FieldConfigProps
  | AnySchemaProperties
  | (() => AnySchemaProperties);
export type Config =
  | (ConfigProps & {
      property?: string;
    })
  | string;
```

**Подробная информация**

| Свойство    | Тип                  | Описание                     |
| ----------- | --------------------- | ---------------------------- |
| `name`      | `string`              | Идентификатор типа диаграммы |
| `title`     | `string`              | Заголовок для отображения диаграммы |
| `Component` | `React.FC<any>`       | Компонент отрисовки диаграммы |
| `config`    | [`Config[]`](#config) | Необязательно. Форма конфигурации визуализации диаграммы |

##### Config

`config` поддерживает несколько способов записи, которые можно комбинировать:

1. Конфигурация полей UI Schema. Если вы хотите использовать поля, уже настроенные в разделе «Конфигурация данных», вы можете использовать `x-reactions': '{{ useChartFields }}'`.

```ts
{
  xField: {
    title: 'xField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

2. Использование предопределённой UI Schema.

Например: `config: ['field']`

Соответственно генерируется

```typescript
{
  field: {
    title: 'Field',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
  }
}
```

3. Использование предопределенной UI Schema, но с заменой некоторых значений свойств, где `property` является идентификатором предопределенной UI Schema..

```typescript
config: [
  {
    property: 'field',
    name: 'angleField',
    title: 'angleField',
    defaultValue: 'default',
  },
];
```

Соответственно генерируется

```typescript
{
  angleField: {
    title: 'angleField',
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-reactions': '{{ useChartFields }}',
    required,
    defaultValue: 'default'
  }
}
```

Все предопределенные UI Schema можно найти в <a href="https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-data-visualization/src/client/chart/configs.ts" target="_blank">`/src/client/chart/config.ts`</a>.  
Также можно добавить новые предопределенные UI Schema с помощью метода [`addConfigs()`](#addconfigs).

#### `addConfigs()`

Добавляет предопределенные UI Schema для форм конфигурации визуализации диаграмм.

```ts
// Add
const booleanField = ({
  name,
  title,
  defaultValue = false,
}: FieldConfigProps) => {
  return {
    [name || 'field']: {
      'x-content': lang(title || 'Field'),
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      default: defaultValue,
    },
  };
};
chart.addConfigs({ booleanField });

// Usage
new Chart({
  config: [
    'booleanField',
    {
      property: 'booleanField',
      name: 'customBooleanField',
      title: 'Custom Boolean Field',
      defaultValue: true,
    },
  ],
});
```

**Сигнатура**

- `addConfigs(configs: { [key: string]: (props: FieldConfigProps) => AnySchemaProperties })`

**Типы**

```ts
export type FieldConfigProps = Partial<{
  name: string;
  title: string;
  required: boolean;
  defaultValue: any;
}>;
```

**Подробная информация**

`addConfigs()` принимает объект, где `key` является уникальным идентификатором конфигурации, а значение — методом получения предопределенной UI Schema. Этот метод принимает заменяемые параметры и возвращает соответствующую конфигурацию полей UI Schema.

##### FieldProps

| Свойство       | Тип      | Описание     |
| -------------- | --------- | ------------ |
| `name`         | `string`  | Имя поля     |
| `title`        | `string`  | Заголовок поля |
| `required`     | `boolean` | Обязательно ли для заполнения |
| `defaultValue` | `any`     | Значение по умолчанию |

#### `init()`

Инициализация конфигурации диаграммы при выборе диаграммы.

**Сигнатура**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

**Типы**

```ts
export type FieldOption = {
  value: string;
  label: string;
  key: string;
  alias?: string;
  name?: string;
  type?: string;
  interface?: string;
  uiSchema?: ISchema;
  target?: string;
  targetFields?: FieldOption[];
};

export type MeasureProps = {
  field: string | string[];
  aggregation?: string;
  alias?: string;
};

export type DimensionProps = {
  field: string | string[];
  alias?: string;
  format?: string;
};
```

**Подробная информация**

| Параметр           | Тип             | Описание                     |
| ------------------ | --------------- | ---------------------------- |
| `fields`           | `FieldOption[]` | Свойства полей текущей таблицы данных |
| `query.measures`   | `MeasureProps[]`| Конфигурация полей измерений |
| `query.dimensions` | `DimensionProps`| Конфигурация полей размерностей |

#### `infer()`

Вывод начальной конфигурации диаграммы.

```ts
// pie chart
init(fields, { measures, dimensions }) {
  const { xField, yField } = this.infer(fields, { measures, dimensions });
  return {
    general: {
      colorField: xField?.value,
      angleField: yField?.value,
    },
  };
};
```

**Сигнатура**

```ts
infer: (fields: FieldOption[], query: {
  measures?: MeasureProps[];
  dimensions?: DimensionProps[];
}) => {
  xField: FieldOption;
  yField: FieldOption;
  seriesField: FieldOption;
  colorField: FieldOption;
  yFields: FieldOption[];
}
```

**Подробная информация**

| Свойство      | Тип            | Описание        |
| ------------- | --------------- | --------------- |
| `xField`      | `FieldOption`   | Поле оси X      |
| `yField`      | `FieldOption`   | Поле оси Y      |
| `seriesField` | `FieldOption`   | Поле категории  |
| `colorField`  | `FieldOption`   | Поле цвета      |
| `yFields`     | `FieldOption[]` | Несколько полей оси Y |

#### `getProps()`

Преобразует данные диаграммы и метаданные конфигурации диаграммы в свойства, необходимые для компонента отрисовки диаграммы.

**Сигнатура**

- `getProps({ data, general, advanced, fieldProps }: RenderProps)`

**Типы**

```ts
export type RenderProps = {
  data: Record<string, any>[];
  general: any;
  advanced: any;
  fieldProps: {
    [field: string]: {
      label: string;
      transformer: Transformer;
      interface: string;
    };
  };
};
```

| Свойство      | Тип                              | Описание                                 |
| ------------- | --------------------------------- | ---------------------------------------- |
| `data`        | `Record<string, any>[]`          | Исходные данные диаграммы                |
| `general`     | `any`                            | Конфигурация формы визуализации диаграммы |
| `advanced`    | `any`                            | Конфигурация диаграммы в формате JSON    |
| `fieldProps`  | `{ [field: string]: FieldProps }`| Информация о полях таблицы данных, которая может использоваться для обработки отображения графики |

##### FieldProps

| Свойство      | Тип          | Описание                   |
| ------------- | ------------ | -------------------------- |
| `label`       | `string`     | Отображаемая метка поля    |
| `transformer` | `Transformer`| Функция преобразования значений поля |
| `interface`   | `string`     | Интерфейс поля             |

#### `getReference()`

Получает информацию о справочной документации компонента диаграммы.

```ts
getReference() {
  return {
    title: this.title,
    link: `https://ant.design/components/${this.name}`,
  };
}
```

**Сигнатура**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```

### ChartType

#### `name`

- `string`. Идентификатор типа диаграммы.

#### `title`

- `string`. Заголовок для отображения диаграммы.

#### `Component`

- `React.FC<any>`. Компонент отрисовки диаграммы.

#### `schema`

- `ISchema`. UI Schema конфигурации визуализации диаграммы.

#### `init()`

Метод инициализации конфигурации диаграммы.

**Сигнатура**

```ts
init?: (
  fields: FieldOption[],
  query: {
    measures?: MeasureProps[];
    dimensions?: DimensionProps[];
  },
) => {
  general?: any;
  advanced?: any;
};
```

#### `getProps()`

Обработка и получение свойств компонента диаграммы.

**Сигнатура**

- `getProps(props: RenderProps): any`

#### `getReference()`

Получение информации о справочной документации компонента диаграммы.

**Сигнатура**

```ts
getReference?: () => {
  title: string;
  link: string;
};
```
