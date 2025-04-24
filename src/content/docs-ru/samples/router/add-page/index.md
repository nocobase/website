# Добавление страниц

## Описание сценария

Добавление новых страниц для персонализированного отображения контента.

## Описание примера

В этом примере мы добавим 4 страницы:

- `/about`: страница "О нас", предназначенная для отображения информации о системе. Доступна без входа в систему.
- `/admin/data-view`: страница с дашбордом данных, доступ к которой возможен только после авторизации.
- `/admin/material-manage`: центр управления материалами, включающий управление изображениями и видео. Это родительская страница маршрута:
  - `/admin/material-manage/image`: управление изображениями.
  - `/admin/material-manage/video`: управление видео.

Мы не будем углубляться в разработку контента, а сосредоточимся на демонстрации того, как добавить новые страницы.

Полный код примера из этого документа можно найти в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-page).

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
yarn pm create @nocobase-sample/plugin-add-page
yarn pm enable @nocobase-sample/plugin-add-page
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по ссылке [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы увидеть, что плагин установлен и активирован.

## Реализация функционала

### Шаг 1: Добавление страницы `/about`

Согласно руководству по разработке плагинов, разделу [Маршрутизация страниц и расширения](/development/client/router), нам нужно изменить файл `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx`:

```ts
import React, { useEffect } from 'react';
import { Plugin, useDocumentTitle } from '@nocobase/client';

const AboutPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('About');
  }, [])

  return <div>About Page</div>;
}

export class PluginAddPageClient extends Plugin {
  async load() {
    this.app.router.add('about', {
      path: '/about',
      Component: AboutPage,
    })
  }
}

export default PluginAddPageClient;
```

Где первый параметр метода `router.add()` — это имя страницы, которое используется только для операций CRUD и иерархической вложенности. Второй параметр — это конфигурация страницы, где `path` указывает путь к странице, а `Component` определяет компонент страницы.

`useDocumentTitle()` используется для изменения заголовка страницы.

Затем перейдите по адресу [http://localhost:13000/about](http://localhost:13000/about), чтобы увидеть, что на странице отображается текст `About Page`.

![20240512200508](https://static-docs.nocobase.com/20240512200508.png)

### Шаг 2: Добавление страницы `/admin/data-view`

Согласно документации раздела [Существующие маршруты страниц](/development/client/router#已有页面路由), маршрут `/admin/*` соответствует имени `admin`. Если нужно добавить новую страницу внутри этого маршрута, можно использовать префикс `admin.`, например, `admin.`dataView`。

```tsx | pure
// ...
const DataViewPage = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('DataView');
  }, [])

  return <div>DataView</div>
};

export class PluginAddPageClient extends Plugin {
  async load() {
    // ...
    this.app.router.add('admin.dataView', {
      path: '/admin/data-view',
      Component: DataViewPage,
    })
  }
}

export default PluginAddPageClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/data-view](http://localhost:13000/admin/data-view), чтобы увидеть, что на странице отображается `DataView`. Если вы выйдете из системы и попытаетесь снова получить доступ к этой странице, вас перенаправит на страницу входа.

![20240512200555](https://static-docs.nocobase.com/20240512200555.png)

### Шаг 3: Добавление `/admin/material-manage` и его подстраниц

Мы можем создать файл `packages/plugins/@nocobase-sample/plugin-add-page/src/client/MaterialPage.tsx` со следующим содержимым:

```tsx | pure
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDocumentTitle } from '@nocobase/client';

export const MaterialPage = () => {
  return <div>
    <h1>Material Page</h1>
    <ul>
      <li>
        <Link to="video">Video</Link>
      </li>
      <li>
        <Link to="img">Img</Link>
      </li>
    </ul>
    <Outlet />
  </div>
}

export const MaterialVideo = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Video');
  }, [])

  return <div>Material Video</div>
}
export const MaterialImg = () => {
  const { setTitle } = useDocumentTitle();

  useEffect(() => {
    setTitle('Material Img');
  }, [])

  return <div>Material Img</div>;
}
```

Затем в `packages/plugins/@nocobase-sample/plugin-add-page/src/client/index.tsx` импортируйте и используйте:

```ts
// ...
import { MaterialImg, MaterialPage, MaterialVideo } from './MaterialPage';

export class PluginAddPageClient extends Plugin {
  async load() {
    // ...

    this.app.router.add('admin.material', {
      path: '/admin/material',
      Component: MaterialPage,
    })

    this.app.router.add('admin.material.video', {
      path: '/admin/material/video',
      Component: MaterialVideo,
    })

    this.app.router.add('admin.material.img', {
      path: '/admin/material/img',
      Component: MaterialImg,
    })
  }
}
```

Если `MaterialPage` как родительская страница не требует настройки макета, то атрибут `Component` может быть опущен.

```ts
this.app.router.add('admin.material', {
  path: '/admin/material',
})
```

Затем мы переходим по адресу [http://localhost:13000/admin/material](http://localhost:13000/admin/material), и на странице уже будет отображаться `Material Page`, а при нажатии на ссылки `Video` и `Img` можно переключаться на соответствующие страницы.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/3.mp4" type="video/mp4">
</video>

## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-add-page --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-add-page.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).
