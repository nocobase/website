# Быстрое начало работы

## 1. Создание компонента Schema

Через настройку `x-component` отрендерить зарегистрированные компоненты.

Задействованные темы:

- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Рендеринг Schema](/development/client/ui-schema/rendering)
- [Расширение компонентов Schema](/development/client/ui-schema/extending)

<code src="./demos/demo1.tsx"></code>

## 2. Добавление компонента Schema на страницу

Через настройку `x-initializer` вставить новый компонент в соседнюю позицию уже существующей Schema.

Задействованные темы:

- [Конструктор Designable](#)
- [Протокол UI Schema — параметр x-initializer](#)
- [Инициализатор Schema (SchemaInitializer)](#)

<code src="./demos/demo2.tsx"></code>

## 3. Добавление панели инструментов конструктора для Schema

Через настройку `x-settings` предоставить конфигуратор параметров для компонента Schema. Панель инструментов конструктора по умолчанию включает функцию перетаскивания.

Задействованные темы:

- [Протокол UI Schema — параметр x-settings](#)
- [Конфигуратор SchemaSettings](#)
- [Перемещение существующих узлов Schema методом перетаскивания](#)

<code src="./demos/demo3.tsx"></code>