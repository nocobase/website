# Структура каталога плагина

Вы можете быстро создать пустой плагин с помощью команды `yarn pm create my-plugin`. Структура каталога будет следующей:

```bash
|- /my-plugin
  |- /src
    |- /client      # Клиентский код плагина
    |- /server      # Серверный код плагина
  |- client.d.ts
  |- client.js
  |- package.json   # Информация о пакете плагина
  |- server.d.ts
  |- server.js
  |- build.config.ts # Или `build.config.js`, используется для изменения конфигурации сборки и реализации пользовательской логики
```

Инструкции по `/src/server` см. в разделе [Сервер](./server), а инструкции по `/src/client` см. в разделе [Клиент](./client).

Если вы хотите настроить конфигурацию сборки, вы можете создать файл `config.js` в корневом каталоге со следующим содержимым:

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // Vite используется для сборки клиентского кода из `src/client`

    // Измените конфигурацию Vite, подробнее см.: https://vitejs.dev/guide/
    return config
  },
  modifyTsupConfig: (config) => {
    // Tsup используется для сборки серверного кода из `src/server`

    // Измените конфигурацию tsup, подробнее см.: https://tsup.egoist.dev/#using-custom-configuration
    return config
  },
  beforeBuild: (log) => {
    // Функция обратного вызова перед началом сборки, можно выполнять операции перед началом сборки
  },
  afterBuild: (log: PkgLog) => {
    // Функция обратного вызова после завершения сборки, можно выполнять операции после завершения сборки
  };
});
```