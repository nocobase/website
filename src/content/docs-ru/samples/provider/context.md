# Глобальный контекст

Часто нам нужно хранить некоторые данные в глобальном контексте, чтобы иметь доступ к ним из любого места, например, темы, права доступа и т.д.

## Описание примера

Мы хотим реализовать плагин переключения функций, который будет управлять включением или выключением определенных функций.

Полный код примера из этого документа можно найти в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-context).

## Инициализация плагина

Мы будем следовать инструкциям из документации [Создание первого плагина](/development/your-fisrt-plugin). Если у вас еще нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-provider-context
yarn pm enable @nocobase-sample/plugin-provider-context
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по ссылке [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы увидеть, что плагин установлен и активирован.

## Реализация функционала

Для реализации контекста необходимо использовать функционал `Context` из React.

### Шаг 1: Создание контекста

```tsx | pure
import { useRequest } from '@nocobase/client';
import { Spin } from 'antd';
import React, { FC, createContext, ReactNode } from 'react';

const FeaturesContext = createContext<Record<string, boolean>>({});

const mockRequest = () => new Promise((resolve) => {
  resolve({ data: { feature1: true, feature2: false } })
})

export const FeaturesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { loading, data } = useRequest<{ data: Record<string, boolean> }>(mockRequest);

  if (loading) return <Spin />;

  return <FeaturesContext.Provider value={data.data}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => React.useContext(FeaturesContext);

export const useFeature = (feature: string) => {
  const features = useFeatures();
  return features[feature];
}
```

Важно не забыть отрендерить `children`.

Что касается конфигурации и данных `features`, вы можете обратиться к примеру [Страница конфигурации формы плагина](/plugin-samples/plugin-settings/form). В данном случае мы будем использовать только Mock-данные.

### Шаг 2: Регистрация в системе

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`, чтобы зарегистрировать компонент `FeaturesProvider` в системе.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { FeaturesProvider } from './FeaturesProvider';

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)
  }
}

export default PluginProviderContextClient;
```

### 3. Доступ к данным контекста

В местах, где необходимо получить доступ к данным контекста, можно использовать методы `useFeatures` и `useFeature`.

Однако здесь также есть два случая: использование внутри текущего плагина и использование в других плагинах.

#### 3.1 Использование внутри текущего плагина

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`, добавив тестовую страницу для проверки данных контекста.

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

import { FeaturesProvider, useFeature } from './FeaturesProvider';

const TestPage = () => {
  const feature1 = useFeature('feature1');
  const feature2 = useFeature('feature2');

  return (
    <div>
      <h1>Feature1: {feature1 ? 'Enabled' : 'Disabled'}</h1>
      <h1>Feature2: {feature2 ? 'Enabled' : 'Disabled'}</h1>
    </div>
  );
};

export class PluginProviderContextClient extends Plugin {
  async load() {
    this.app.addProvider(FeaturesProvider)

    this.app.router.add(`admin.features-test`, {
      path: '/admin/features-test',
      Component: TestPage,
    })
  }
}

export default PluginProviderContextClient;
```

Затем переходим по адресу [http://localhost:13000/admin/features-test](http://localhost:13000/admin/features-test), чтобы увидеть данные контекста.

![img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg](https://static-docs.nocobase.com/img_v3_02av_51b7cb08-1b42-42f4-b553-49b4e3f217bg.jpg)

#### 3.2 Использование в других плагинах

Если необходимо использовать данные в других плагинах, нужно экспортировать методы `useFeatures` и `useFeature`.

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-provider-context/src/index.ts`:

```tsx | pure
export { useFeatures, useFeature } from './FeaturesProvider';
```

Затем можно использовать методы `useFeatures` и `useFeature`.

```tsx | pure
import { useFeature } from '@nocobase-sample/plugin-provider-context/client';
```

Обратите внимание, что здесь используется `'@nocobase-sample/plugin-provider-context/client'`, а не `'@nocobase-sample/plugin-provider-context'`.

## Упаковка и загрузка в производственную среду

Согласно документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем упаковать плагин и загрузить его в производственную среду.

Если вы клонировали исходный код, сначала необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если вы используете проект, созданный с помощью `create-nocobase-app`, выполните следующую команду:

```bash
yarn build @nocobase-sample/plugin-provider-context --tar
```

После этого файл архива плагина будет находиться по пути `storage/tar/@nocobase-sample/plugin-provider-context.tar.gz`. Затем установите его, [загрузив через административный интерфейс](/welcome/getting-started/plugin).
