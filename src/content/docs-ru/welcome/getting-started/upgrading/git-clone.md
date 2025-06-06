# Обновление установки из исходного кода Git

## 1. Перейдите в каталог проекта NocoBase

```bash
cd my-nocobase-app
```

## 2. Получите последние изменения кода

```bash
git pull
```

## 3. Удаление кэша и старых зависимостей (опционально)

Если обычный процесс обновления завершился неудачно, можно попробовать очистить кэш и зависимости, а затем переустановить их:

```bash
# Удаление кэша NocoBase
yarn nocobase clean
# Удаление зависимостей
yarn rimraf -rf node_modules
```

## 4. Обновите зависимости

```bash
yarn install
```

## 5. Выполните команду обновления

```bash
yarn nocobase upgrade
```

## 6. Запустите NocoBase

Для среды разработки:

```bash
yarn dev
```

Для рабочей среды:

```bash
# Сборка
yarn build
# Запуск
yarn start
```