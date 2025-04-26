# Замена страницы

## Описание сценария

Необходимо изменить макет существующей страницы или полностью заменить её содержимое.

## Описание примера

Нам нужно настроить макет страниц входа и регистрации. В данный момент там находится только одна форма, но мы хотим изменить её на двухколоночный макет: слева будет изображение, а справа — форма.

Полный код примера из этого документа можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page).

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## Инициализация плагина

Следуя инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin), если у вас еще нет проекта, вы можете сначала создать его. Если у вас уже есть проект или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-replace-page
yarn pm enable @nocobase-sample/plugin-replace-page
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и активирован.

## Реализация функционала

### 1. Анализ требований и исходного кода

Страницы входа и регистрации регистрируются с помощью [плагина Auth](/handbook/auth/dev/api#route). Он регистрирует следующие маршруты:

- Макет Auth  
  - name: `auth`  
  - path: `-`  
  - component: `AuthLayout`

- Страница входа  
  - name: `auth.signin`  
  - path: `/signin`  
  - component: `SignInPage`

- Страница регистрации 
  - name: `auth.signup`  
  - path: `/signup`  
  - component: `SignUpPage`

В этом случае `AuthLayout` является макетом для всех страниц входа и регистрации. Мы можем заменить `AuthLayout`, чтобы реализовать пользовательский макет.

Чтобы понять, как это сделать, нужно обратиться к исходному коду оригинального [AuthLayout](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-auth/src/client/pages/AuthLayout.tsx).

```tsx | pure
export function AuthLayout() {
  const { data } = useSystemSettings();

  return (
    <div
      style={{
        maxWidth: 320,
        margin: '0 auto',
        paddingTop: '20vh',
      }}
    >
      <h1>{data?.data?.title}</h1>
      <AuthenticatorsContextProvider>
        <Outlet />
      </AuthenticatorsContextProvider>
      <div
        className={css`
          position: absolute;
          bottom: 24px;
          width: 100%;
          left: 0;
          text-align: center;
        `}
      >
        <PoweredBy />
      </div>
    </div>
  );
}
```

Исходный код в целом довольно прост. Нам нужно реализовать двухколоночный макет: слева будет изображение, а справа — форма для входа и регистрации. Для этого можно либо скопировать существующий `AuthLayout` и поместить его в правую колонку, либо просто импортировать оригинальный `AuthLayout`, а затем добавить изображение в левую часть.

### 2. Реализация пользовательского компонента AuthLayout

Создадим файл `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/AuthLayout.tsx` со следующим содержимым:

```tsx | pure
import React from 'react';
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { PoweredBy, css, useSystemSettings } from '@nocobase/client';
import { AuthenticatorsContextProvider } from '@nocobase/plugin-auth/client'

import authImg from './auth-image.jpg'

export function CustomAuthLayout() {
  const { data } = useSystemSettings();

  return <Row style={{ height: '100%' }}>
    <Col xs={{ span: 0 }} md={{ span: 12 }}>
      <img src={authImg} style={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        display: 'block',
        verticalAlign: 'middle'
      }} />
    </Col>
    <Col xs={{ span: 24 }} md={{ span: 12 }}>
      <div
        style={{
          maxWidth: 320,
          margin: '0 auto',
          paddingTop: '20vh',
        }}
      >
        <h1>{data?.data?.title}</h1>
        <AuthenticatorsContextProvider>
          <Outlet />
        </AuthenticatorsContextProvider>
        <div
          className={css`
          position: absolute;
          bottom: 24px;
          width: 100%;
          left: 0;
          text-align: center;
        `}
        >
          <PoweredBy />
        </div>
      </div>
    </Col>
  </Row>
}
```

Затем поместите фоновое изображение слева [auth-image.jpg](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-replace-page/src/client/auth-image.jpg) в каталог `packages/plugins/@nocobase-sample/plugin-replace-page/src/client`.

Таким образом, мы реализовали страницу входа с двухколоночным макетом.


### 3. Замена `AuthLayout` на `CustomAuthLayout`

Далее нам нужно импортировать `CustomAuthLayout` в файл `packages/plugins/@nocobase-sample/plugin-replace-page/src/client/index.tsx` и использовать его.

У нас есть два способа заменить `AuthLayout`: один через [переопределение маршрута](/development/client/router#расширение-обычных-страниц), а другой через [переопределение компонента](/development/client/ui-schema/rendering#регистрация-components-и-scopes).

#### Переопределение через маршрут

Как упоминалось ранее, имя маршрута для `AuthLayout` — это `auth`. Мы можем выполнить замену через маршрут:

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginReplacePageClient extends Plugin {
  async load() {
    this.app.router.add('auth', {
      Component: CustomAuthLayout,
    })
  }
}

export default PluginReplacePageClient;
```

Первым параметром метода `router.add()` является имя маршрута, и если маршрут добавляется повторно, он заменит существующий маршрут.

#### Способ переопределения компонента

```ts
import { Plugin } from '@nocobase/client';
import { CustomAuthLayout } from './AuthLayout';

export class PluginChangePageClient extends Plugin {
  async load() {
   this.app.addComponents({ AuthLayout: CustomAuthLayout })
  }
}
```

Следует отметить, что этот метод переопределения работает только с маршрутами, зарегистрированными с использованием *строкового Component*, например, [исходный код плагина auth](https://github.com/nocobase/nocobase/blob/cff530acac45cc615291c344b4a26c7bc7f410dc/packages/plugins/%40nocobase/plugin-auth/src/client/index.tsx#L47) выглядит следующим образом:

```ts
this.app.router.add('auth', {
  Component: 'AuthLayout',
})

this.app.addComponents({ AuthLayout })
```

Если исходный код плагина auth зарегистрирован следующим образом, то его нельзя будет переопределить:

```ts
this.app.router.add('auth', {
  Component: AuthLayout,
})
```

Затем выходим из системы и переходим по адресу [http://localhost:13000/signin](http://localhost:13000/signin), чтобы увидеть, что макет страницы входа уже изменен.

![20240512200917](https://static-docs.nocobase.com/20240512200917.png)

## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-replace-page --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-replace-page.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).
