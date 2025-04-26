# Библиотека компонентов Schema

## Компоненты-обертки

- BlockItem
- FormItem
- CardItem

## Макеты

- Page
- Grid
- Tabs
- Space

## Компоненты полей

Компоненты полей обычно не используются отдельно, а применяются внутри компонентов отображения данных.

- CollectionField: универсальный компонент
- Cascader
- Checkbox
- ColorSelect
- DatePicker
- Filter
- Formula
- IconPicker
- Input
- InputNumber
- Markdown
- Password
- Percent
- Radio
- RecordPicker
- RichText
- Select
- TimePicker
- TreeSelect
- Upload

## Компоненты отображения данных

Должны использоваться в сочетании с компонентами полей.

- Calendar
- Form
- Kanban
- Table
- TableV2

## Операции (компоненты с событием onClick)

- Action
- Action.Drawer
- Action.Modal
- ActionBar: используется для разметки операций
- Menu

## Прочее

- G2plot
- Markdown.Void

## Сценарии использования `x-designer` и `x-initializer`

`x-designer` активируется, когда `x-decorator` или `x-component` являются одним из следующих компонентов:

- BlockItem
- CardItem
- FormItem
- Table.Column
- Tabs.TabPane

`x-initializer` активируется, когда `x-decorator` или `x-component` являются одним из следующих компонентов:

- ActionBar
- BlockItem
- CardItem
- FormItem
- Grid
- Table
- Tabs