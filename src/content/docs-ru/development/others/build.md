# Сборка

## Настройка пользовательской конфигурации сборки

Если вы хотите настроить конфигурацию сборки, вы можете создать файл `build.config.ts` в корневом каталоге плагина со следующим содержимым:

```js
import { defineConfig } from '@nocobase/build';

export default defineConfig({
  modifyViteConfig: (config) => {
    // vite используется для сборки клиентского кода из `src/client`

    // Измените конфигурацию Vite, подробнее можно узнать здесь: https://vitejs.dev/guide/
    return config;
  },
  modifyTsupConfig: (config) => {
    // tsup используется для сборки серверного кода из `src/server`

    // Измените конфигурацию tsup, подробнее можно узнать здесь: https://tsup.egoist.dev/#using-custom-configuration
    return config;
  },
  beforeBuild: (log) => {
    // Функция обратного вызова перед началом сборки, можно выполнять некоторые операции перед началом сборки
  },
  afterBuild: (log: PkgLog) => {
    // Функция обратного вызова после завершения сборки, можно выполнять некоторые операции после завершения сборки
  },
});
```

## Пример плагина

- [@nocobase/plugin-sample-custom-build](#)
