# Расширенное руководство

> В качестве примера добавим диаграмму ECharts. Полный код можно найти в плагине `@nocobase/plugin-sample-add-custom-charts`.

## Создание нового плагина

Следуя шагам [руководства по разработке плагинов](https://docs.nocobase.com/development/your-fisrt-plugin), создайте новый плагин. Добавьте зависимости `echarts`, `echarts-for-react`, `@nocobase/plugin-data-visualization`. Внешние зависимости поместите в раздел `devDependencies` файла `package.json`.

```bash
yarn pm create @nocobase/plugin-sample-add-custom-charts
npx lerna add echarts --scope=@nocobase/plugin-sample-add-custom-charts --dev
npx lerna add echarts-for-react --scope=@nocobase/plugin-sample-add-custom-charts --dev
```

```typescript
// package.json

{
  "name": "@nocobase/plugin-sample-add-custom-charts",
  "version": "0.14.0-alpha.7",
  "main": "dist/server/index.js",
  "devDependencies": {
    "echarts": "^5.4.3",
    "echarts-for-react": "^3.0.2"
  },
  "peerDependencies": {
    "@nocobase/client": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/plugin-data-visualization": "0.x"
  }
}
```

## Компонент ECharts React

В отличие от G2Plot, где каждая диаграмма является отдельным компонентом, в ECharts используется один и тот же компонент, и различные диаграммы отображаются путем передачи различных параметров. Поскольку компонент, предоставляемый `echarts-for-react`, является `PureComponent`, нам нужно обернуть его, чтобы превратить в `FunctionComponent`.

```typescript
// client/echarts/react-echarts.tsx

import React, { useEffect } from 'react';
import ReactEChartsComponent, { EChartsInstance, EChartsReactProps } from 'echarts-for-react';

export const ReactECharts = (props: EChartsReactProps['option']) => {
  const echartRef = React.useRef<EChartsInstance>();
  useEffect(() => {
    echartRef.current?.resize();
  });
  return <ReactEChartsComponent option={props} ref={(e) => (echartRef.current = e)} />;
};
```

Компонент, предоставляемый `echarts-for-react`, при первой отрисовке не выполняет `resize`. В то же время, при настройке диаграмм в плагине визуализации NocoBase может потребоваться решить, отображать ли компонент на основе текущей конфигурации, что может привести к тому, что компонент не будет отображаться корректно. Поэтому здесь мы будем вручную вызывать `resize` при каждом обновлении. Ссылка: [https://github.com/apache/echarts/issues/8855](https://github.com/apache/echarts/issues/8855)

## Расширение класса `Chart`

Перед началом этой части ознакомьтесь с [руководством по разработке](../dev/index.md), чтобы узнать больше об API.

### Шаг первый

Поскольку ECharts — это библиотека диаграмм, и мы можем одновременно добавлять несколько диаграмм, мы расширим базовый класс `Chart`, создав класс `ECharts`, чтобы реализовать некоторые общие базовые методы.

```typescript
// client/echarts/echarts.ts

import { Chart } from '@nocobase/plugin-data-visualization/client';

export class ECharts extends Chart {
  constructor({
    name,
    title,
    series,
    config,
  }: {
    name: string;
    title: string;
    series: any;
    config?: ChartProps['config'];
  }) {
    super({
      name,
      title,
      component: ReactECharts,
      config: ['xField', 'yField', 'seriesField', ...(config || [])],
    });
    this.series = series;
  }
}
```

ECharts в основном настраивается через параметр `series` для конфигурирования различных графиков. Поэтому, основываясь на конструкторе базового класса, мы можем добавить параметр `series`, а также передать ранее определенный компонент `ReactECharts`. Параметр `config` по умолчанию устанавливает `xField`, `yField`, `seriesField`, чтобы наша визуализация по умолчанию выглядела так, как показано на рисунке.

![](https://static-docs.nocobase.com/9a1ff5ff7c9f409978292f0d771b4358.png)

### Шаг второй

Поскольку большинство часто используемых графиков требуют настройки полей оси X, оси Y и поля категорий, мы сначала реализуем универсальный интерфейс `init`, который будет использоваться для инициализации конфигурации графика по умолчанию. Если график требует инициализации других параметров конфигурации, метод `init` можно переопределить при наследовании. В реализации мы можем использовать метод `infer` из класса `Chart`, чтобы на основе конфигурации метрик и измерений вывести значения полей по умолчанию.

```typescript
init: ChartType['init'] = (fields, { measures, dimensions }) => {
  const { xField, yField, seriesField } = this.infer(fields, {
    measures,
    dimensions,
  });
  return {
    general: {
      xField: xField?.value,
      yField: yField?.value,
      seriesField: seriesField?.value,
    },
  };
};
```

### Шаг третий

Далее реализуем метод `getProps`. Основная задача этого метода — получить конфигурацию, связанную с графиком, и преобразовать её в атрибуты, соответствующие компоненту диаграммы ECharts. Здесь также можно добавить некоторые скрытые настройки по умолчанию, которые не нужно выставлять напрямую. Основной код реализации приведён ниже для справки.

```typescript
getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const { xField, yField, seriesField } = general;
    const xLabel = fieldProps[xField]?.label;
    const yLabel = fieldProps[yField]?.label;
    let seriesName = [yLabel];
    if (seriesField) {
      seriesName = Array.from(new Set(data.map((row: any) => row[seriesField]))).map((value) => value || 'null');
    }
    return deepmerge(
      {
        legend: {
          data: seriesName,
        },
        tooltip: {
          data: seriesName,
        },
        dataset: [
          {
            dimensions: [xField, ...(seriesField ? seriesName : [yField])],
            source: data,
          },
          {
            transform: [
              {
                type: 'data-visualization:transform',
                config: { fieldProps },
              },
              {
                type: 'data-visualization:toSeries',
                config: { xField, yField, seriesField },
              },
            ],
          },
        ],
        series: seriesName.map((name) => ({
          name,
          datasetIndex: 1,
          ...this.series,
        })),
        xAxis: {
          name: xLabel,
          type: 'category',
        },
        yAxis: {
          name: yLabel,
        },
        animation: false,
      },
      advanced,
    );
  }
```

Здесь логика кода в основном заключается в получении исходных данных, конфигурации диаграммы, метаданных полей и настроек преобразования данных, после чего они обрабатываются в необходимый формат для рендеринга компонента. В ECharts обработка данных может быть реализована путем регистрации `transform`, подробнее можно узнать в документации ECharts.

### Шаг четвертый

Далее реализуем единый метод получения справочной документации `getReference`. Поскольку параметры графиков ECharts находятся на одной странице, определим его следующим образом.

```typescript
getReference() {
    return {
      title: 'ECharts',
      link: 'https://echarts.apache.org/en/option.html',
    };
  }
```

## Определение диаграмм

Имея класс `ECharts`, определение диаграмм становится довольно простым. Для часто используемых двумерных диаграмм большая часть общей логики уже реализована в классе `ECharts`, и её не нужно дополнительно расширять — можно использовать сразу.

```typescript
new ECharts({
  name: 'line',
  title: 'Line Chart',
  series: { type: 'line' },
});

new ECharts({
  name: 'column',
  title: 'Column Chart',
  series: { type: 'bar' },
});

new ECharts({
  name: 'area',
  title: 'Area Chart',
  series: { type: 'line', areaStyle: {} },
});
```

Можно также расширить некоторые настройки визуализации.

```typescript
new ECharts({
  name: 'line',
  title: 'Line Chart',
  series: { type: 'line' },
  config: [
    {
      property: 'booleanField',
      name: 'smooth',
      title: 'isSmooth',
    },
  ],
});
```

Для некоторых диаграмм общие методы могут не подходить, и мы можем дополнительно их расширить.

Столбчатая диаграмма:

```typescript
export class Bar extends ECharts {
  constructor() {
    super({
      name: 'bar',
      title: 'Bar Chart',
      series: { type: 'bar' },
    });
    this.config = [
      {
        property: 'yField',
        title: 'xField',
      },
      {
        property: 'xField',
        title: 'yField',
      },
      'seriesField',
    ];
  }

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    const props = super.getProps({ data, general, advanced, fieldProps });
    const xLabel = fieldProps[general.xField]?.label;
    const yLabel = fieldProps[general.yField]?.label;
    props.xAxis = {
      ...props.xAxis,
      type: 'value',
      name: yLabel,
    };
    props.yAxis = {
      ...props.yAxis,
      type: 'category',
      name: xLabel,
    };
    return props;
  }
}

new Bar();
```

Круговая диаграмма:

```typescript
export class Pie extends ECharts {
  constructor() {
    super({
      name: 'pie',
      title: 'Pie Chart',
      series: { type: 'pie' },
    });
    this.config = [
      {
        property: 'field',
        name: 'angleField',
        title: 'angleField',
        required: true,
      },
      {
        property: 'field',
        name: 'colorField',
        title: 'colorField',
        required: true,
      },
    ];
  }

  init: ChartType['init'] = (fields, { measures, dimensions }) => {
    const { xField, yField } = this.infer(fields, { measures, dimensions });
    return {
      general: {
        colorField: xField?.value,
        angleField: yField?.value,
      },
    };
  };

  getProps({ data, general, advanced, fieldProps }: RenderProps) {
    return deepmerge(
      {
        legend: {},
        tooltip: {},
        dataset: [
          {
            dimensions: [general.colorField, general.angleField],
            source: data,
          },
          {
            transform: {
              type: 'data-visualization:transform',
              config: { fieldProps },
            },
          },
        ],
        series: {
          name: fieldProps[general.angleField]?.label,
          datasetIndex: 1,
          ...this.series,
        },
      },
      advanced,
    );
  }
}

new Pie();
```

## Добавление диаграмм

```typescript
// client/index.ts
import DataVisualizationPlugin from '@nocobase/plugin-data-visualization/client';

export class PluginSampleAddCustomChartClient extends Plugin {
  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
    const plugin = this.app.pm.get(DataVisualizationPlugin);
    plugin.charts.addGroup('ECharts', [
      new ECharts(),
      // ...
      // ...
    ]);
  }

  // You can get and modify the app instance here
  async load() {}
}
```