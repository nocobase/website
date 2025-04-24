# Скрипты обновления

В процессе обновления и развития плагина могут возникать определённые несовместимые изменения. Эти несовместимые изменения можно обработать с помощью написания файлов миграций (migration), которые будут запускаться командой `nocobase upgrade`. Соответствующий процесс выглядит следующим образом:

<img src="./image-2.png" style="max-width: 800px; width: 800px;">

Миграции обновлений делятся на три типа: beforeLoad, afterSync и afterLoad:

- **beforeLoad**: Выполняется до загрузки всех модулей, разделено на три этапа:
  - Перед загрузкой ядра.
  - Перед загрузкой preset-плагинов.
  - Перед загрузкой других плагинов.
  
- **afterSync**: Выполняется после синхронизации конфигурации таблиц с базой данных, разделено на три этапа:
  - После синхронизации ядра с базой данных.
  - После синхронизации таблиц preset-плагинов с базой данных.
  - После синхронизации таблиц других плагинов с базой данных.

- **afterLoad**: Выполняется после полной загрузки приложения.

## Создание файла миграции

Создание файла миграции с помощью команды **create-migration**.

```bash
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Пример:

```bash
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor     
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

В пакете плагина @nocobase/plugin-client в каталоге src/server/migrations будет создан файл миграции с именем **20240107173313-update-ui.ts**, начальное содержимое которого выглядит следующим образом:

```ts
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.19.0-alpha.3';

  async up() {
    // coding
  }
}
```

## Запуск миграции (migration)

Миграция запускается с помощью команды `nocobase upgrade`.

```bash
$ yarn nocobase upgrade
```

## Тестирование миграции

```ts
import { createMockServer, MockServer } from '@nocobase/test';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['my-plugin'], // Плагин
      version: '0.18.0-alpha.5', // Версия до обновления
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    await app.runCommand('upgrade');
    // coding...
  });
});
```