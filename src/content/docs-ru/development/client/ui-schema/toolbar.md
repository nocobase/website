# Панель инструментов SchemaToolbar

После активации конфигурации пользовательского интерфейса (UI), при наведении курсора на определенный блок, поле или действие, отображается соответствующая панель инструментов Schema.

![Alt text](https://static-docs.nocobase.com/e6d327da8e85d6548529e1051d06c31a.png)

Компоненты панели инструментов включают:

- Заголовок (по умолчанию пустой),
- Элемент управления перетаскиванием для обеспечения возможности перетаскивания (по умолчанию доступен),
- Инициализатор (по умолчанию пустой),
- Настройщик (по умолчанию пустой).

```tsx | pure
<SchemaToolbar
  title="Заголовок"
  draggable
  initialize={'myInitializer'}
  settings={'mySettings'}
/>
```

## Использование

Компонент `SchemaToolbar` используется в параметре `x-toolbar`, например:

```ts
// Использование встроенного SchemaToolbar
{
  'x-toolbar': 'SchemaToolbar',
  'x-toolbar-props': {},
}
// Пользовательский SchemaToolbar
{
  'x-toolbar': 'MySchemaToolbar',
  'x-toolbar-props': {},
}
```

## Компоненты Schema, поддерживающие `x-toolbar`

- `BlockItem` (обертывающий компонент, обычно используется в `x-decorator`),
- `CardItem` (обертывающий компонент, обычно используется в `x-decorator`),
- `FormItem` (обертывающий компонент, обычно используется в `x-decorator`),
- `Action` (компонент кнопки действий, используется в `x-component`).

Если в схеме (schema) для параметров `x-component` или `x-decorator` используются вышеупомянутые компоненты и настроено значение `x-settings`, то параметр `x-toolbar` может быть пропущен. По умолчанию будет использоваться встроенный `SchemaToolbar` для рендеринга.

<code src="./demos/schema-toolbar-basic/index.tsx"></code>

Также можно создать пользовательскую панель инструментов.

<code src="./demos/schema-toolbar-basic/custom.tsx"></code>

Используется в сетке (Grid). Схемы внутри строк и столбцов будут наследовать `x-initializer` сетки.

<code src="./demos/schema-toolbar-basic/grid.tsx"></code>

## Добавление поддержки `x-toolbar` для пользовательских компонентов

<code src="./demos/schema-toolbar-basic/button.tsx"></code>