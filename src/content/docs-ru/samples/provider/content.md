# Глобальное отображение контента

Мы можем использовать `Provider` для глобального отображения контента.

## Описание примера

Мы хотим реализовать функцию объявления: если сервер возвращает информацию об объявлении, мы будем показывать это объявление в верхней части страницы.

Полный код примера из этого документа можно найти в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-provider-content).

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

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
yarn pm create @nocobase-sample/plugin-provider-content
yarn pm enable @nocobase-sample/plugin-provider-content
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по ссылке [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы увидеть, что плагин установлен и активирован.

## Реализация функционала

### Шаг 1: Добавление компонента `Provider`

Компонент `Provider` является обычным React-компонентом, но важно помнить, что нужно отрендерить его `children`.

我们新建 `packages/plugins/@nocobase-sample/plugin-provider-content/src/client/TopAnnouncement.tsx`

```tsx | pure
import React, { FC, ReactNode } from 'react';
import { Alert, Affix, AlertProps } from 'antd';
import { useRequest } from '@nocobase/client';

const mockRequest = () => new Promise((resolve) => {
  Math.random() > 0.5 ?
    resolve({ data: { message: 'This is an important message.', type: 'info' } }) :
    resolve({ data: undefined })
})

export const TopAnnouncement: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, loading } = useRequest<{ data: { message: string; type: AlertProps['type'] } }>(mockRequest)

  const onClose = () => {
    console.log('onClose')
  }

  return (
    <>
      {
        !loading && !!data.data && <Affix offsetTop={0} style={{ zIndex: 1010 }}>
          <Alert
            message={data.data.message}
            type={data.data.type}
            style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
            closable
            onClose={onClose}
          />
        </Affix>
      }
      {children}
    </>
  );
};
```

Что касается настройки и данных объявления, вы можете обратиться к примеру [Страница конфигурации формы плагина](/plugin-samples/plugin-settings/form). В данном случае мы будем использовать только Mock-данные.

Важно не забыть отрендерить `children`.

### Шаг 2: Регистрация в системе

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-provider-content/src/index.ts`, чтобы зарегистрировать компонент `TopAnnouncement` в системе.

```tsx | pure
import { Plugin } from '@nocobase/client';
import { TopAnnouncement } from './TopAnnouncement';

export class PluginProviderContentClient extends Plugin {
  async load() {
    this.app.addProvider(TopAnnouncement)
  }
}

export default PluginProviderContentClient;
```

Затем переходим по адресу [http://localhost:13000](http://localhost:13000), и мы увидим, что объявление отображается в верхней части страницы.

![img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg](https://static-docs.nocobase.com/img_v3_02av_cd3c7f37-0c5b-4c9c-b10e-e413af409ccg.jpg)

## Упаковка и загрузка в производственную среду

Согласно документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем упаковать плагин и загрузить его в производственную среду.

Если вы клонировали исходный код, сначала необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина. 

```bash
yarn build
```

Если вы используете проект, созданный с помощью `create-nocobase-app`, выполните следующую команду:

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

После этого файл архива плагина будет находиться в каталоге `storage/tar/@nocobase-sample/plugin-provider-content.tar.gz`. Загрузите его через интерфейс администрирования в соответствии с инструкциями по [загрузке плагина](/welcome/getting-started/plugin).
```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду напрямую:

```bash
yarn build @nocobase-sample/plugin-provider-content --tar
```

После этого вы увидите файл `storage/tar/@nocobase-sample/plugin-provider-content.tar.gz`. Затем установите его, [загрузив через административный интерфейс](/welcome/getting-started/plugin).