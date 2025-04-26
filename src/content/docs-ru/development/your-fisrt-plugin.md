# Написание первого плагина

Прежде чем начать, необходимо установить NocoBase:

- [Установка через create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app)
- [Установка из исходного кода Git](/welcome/getting-started/installation/git-clone)

После установки NocoBase мы можем приступить к разработке плагинов.

## Создание плагина

С помощью CLI можно быстро создать пустой плагин. Команда выглядит следующим образом:

```bash
yarn pm create @my-project/plugin-hello
```

Каталог плагина `./packages/plugins/@my-project/plugin-hello` имеет следующую структуру:

```bash
|- /packages/plugins/@my-project/plugin-hello
  |- /src
    |- /client      # Клиентский код плагина
    |- /server      # Серверный код плагина
  |- client.d.ts
  |- client.js
  |- package.json   # Информация о пакете плагина
  |- server.d.ts
  |- server.js
```

Чтобы просмотреть только что добавленный плагин, перейдите в интерфейс менеджера плагинов. Адрес по умолчанию: http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/b04d16851fc1bbc2796ecf8f9bc0c3f4.png" />

Если созданный плагин не отображается в менеджере плагинов, его можно добавить вручную с помощью команды `pm add`.

```bash
yarn pm add @my-project/plugin-hello
```

## Написание плагина

Создайте файл коллекции в плагине, например, `./src/server/collections/hello.ts`, с следующим содержимым:

```ts
import { defineCollection } '@nocobase/database';

export default defineCollection({
  name: 'hello',
  fields: [{ type: 'string', name: 'name' }],
});
```

Измените файл `./src/server/plugin.ts`, содержимое должно быть следующим:

```ts
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    // 这是一段示例，表示将 hello 表的所有操作对外公开
    this.app.acl.allow('hello', '*', 'public');
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginHelloServer;
```

## Активация плагина

**С помощью команды:**

```bash
yarn pm enable @my-project/plugin-hello
```

**Через интерфейс:**

Перейдите на страницу менеджера плагинов, найдите только что добавленный плагин и нажмите "Активировать".  
Страница менеджера плагинов доступна по адресу: http://localhost:13000/admin/pm/list/local/

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/7b7df26a8ecc32bb1ebc3f99767ff9f9.png" />

:::info{title="Важно"}
Коллекции, настроенные в плагине, автоматически синхронизируются с базой данных при активации плагина, создавая соответствующие таблицы и поля. Если плагин уже активирован, для синхронизации изменений в таблицах необходимо использовать команду обновления: `yarn nocobase upgrade`.
:::

## Отладка плагина

Если приложение не запущено, сначала необходимо запустить его.

```bash
# для разработки
yarn dev

# для продакшена
yarn build
yarn start
```

Вставить данные в таблицу `hello` плагина.

```bash
curl --location --request POST 'http://localhost:13000/api/hello:create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Hello world"
}'
```

Просмотр данных таблицы `hello`

```bash
curl --location --request GET 'http://localhost:13000/api/hello:list'
```

## Сборка и упаковка плагина

Если вы клонировали исходный код и создали плагин в репозитории исходного кода, необходимо выполнить команду `yarn build` для полной сборки, иначе могут возникнуть ошибки типов.

```bash
yarn build @my-project/plugin-hello --tar

# Пошагово
```bash
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

Упакованный плагин по умолчанию сохраняется по пути: `storage/tar/@my-project/plugin-hello.tar.gz`

## Загрузка в другое приложение NocoBase

Поддерживается только в версии v0.14 и выше.

<img src="https://nocobase.oss-cn-beijing.aliyuncs.com/8aa8a511aa8c1e87a8f7ee82cf8a1359.gif" />
