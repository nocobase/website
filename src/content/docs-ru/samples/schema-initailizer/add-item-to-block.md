# Добавление элемента в существующий `Add block`

## Описание сценария

В NocoBase есть множество кнопок `Add block`, которые используются для добавления блоков на интерфейс. Однако существующие типы блоков не всегда удовлетворяют всем потребностям, и нам нужно добавить новый элемент в существующий `Add block`, чтобы создавать новый тип блока.

## Описание примера

Мы создадим новый тип блока на основе компонента [Carousel](https://ant.design/components/carousel) из ant-design, а затем добавим этот новый тип блока в существующий `Add block`.

Полный код примера из этого документа можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-initiaizer-item-to-block).

TODO: Продемонстрировать результат

## Инициализация плагина

Следуя инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin), если у вас еще нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-add-initializer-item-to-block
yarn pm enable @nocobase-sample/plugin-add-initializer-item-to-block
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и активирован.

## Реализация функционала

### 1. Реализация нового типа блока

Сначала создадим файл `packages/plugins/@nocobase-sample/plugin-add-initializer-item-to-block/src/client/CarouselBlock.tsx` со следующим содержимым:

### 2. Определение элемента Initializer

### 3. Добавление на страницу Add block

### 4. Добавление в диалоговое окно Add block


## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-add-initializer-item-to-block --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-add-initializer-item-to-block.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).
