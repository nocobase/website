# Настройщики SchemaSettings

После активации конфигурации пользовательского интерфейса (UI), при наведении курсора на определенный блок, поле или действие, отображается соответствующая панель инструментов Schema. Кнопка настроек на этой панели представляет собой настройщик текущей Schema.

![Alt text](https://static-docs.nocobase.com/3f37519ddd9ba1a99f1fdbfe32b4a454.png)

## Встроенные настройщики

<img src="./image-4.png" />

## Добавление пунктов в существующие настройщики

Рекомендуется использовать метод `schemaSettingsManager.addItem()` для добавления пунктов настроек. Подробная конфигурация item описана в [SchemaSettings Item API](#).

```ts
class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem(
      'mySettings', // Пример существующих настроек схемы (schema settings)
      'customItem',
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

<code src="./demos/schema-settings-manager-add-item/index.tsx"></code>

## Добавление нового настройщика

Подробные параметры SchemaSettings можно найти в [SchemaSettingsOptions API](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings#new-schemasettingsoptions).

```ts
const mySettings = new SchemaSettings({
  // Должен быть уникальным идентификатором.
  name: 'mySettings',
  // Пункт выпадающего меню
  items: [
    {
      name: 'edit',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### Добавление в методе load плагина

Рекомендуется использовать `schemaSettingsManager.add()`, чтобы добавить новый настройщик в приложение.

```ts
class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // Регистрация глобальных компонентов
    this.app.addComponents({ CardItem, HomePage });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: Добавить логику связанных настроек.
            return {
              title: 'Edit',
              onClick() {
                // todo
              },
            };
          },
        },
      ],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}
```

### Как использовать недавно добавленный настройщик

Добавленный SchemaSettings может использоваться в параметре `x-settings` схемы (Schema). Однако не все компоненты поддерживают `x-settings`. Обычно его нужно использовать совместно с такими обертывающими компонентами, как BlockItem, FormItem или CardItem. В пользовательских компонентах также можно использовать `useSchemaSettingsRender()` для самостоятельной обработки рендеринга `x-settings`.

#### Текущие компоненты Schema, поддерживающие `x-settings`

В большинстве случаев `x-settings` необходимо использовать вместе с обертывающими компонентами, такими как BlockItem, FormItem или CardItem. Например:

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

<code src="./demos/schema-settings-manager-add/index.tsx"></code>

#### Как добавить поддержку параметра `x-settings` в пользовательский компонент

Если такие обертывающие компоненты, как BlockItem, FormItem или CardItem, не удовлетворяют требованиям, можно использовать `useSchemaSettingsRender()` для обработки рендеринга `x-settings`.

<code src="./demos/use-schema-settings-render/index.tsx"></code>

В большинстве случаев настройки размещаются на панели инструментов Schema (SchemaToolbar). Поэтому, чтобы обеспечить поддержку `x-settings`, можно также косвенно добавить поддержку через параметр `x-toolbar`. Подробнее о применении см. в разделе [Панель инструментов Schema](/development/client/ui-schema/toolbar).

<code src="./demos/schema-toolbar-basic/button.tsx"></code>

## Как реализовать настройки для Schema?

С помощью `useSchemaSettings()` можно получить `Designable` текущей Schema, а затем использовать `Designable` для работы со схемой. Наиболее часто используемые API:

- `dn.insertAdjacent()`
- `dn.getSchemaAttribute()`
- `dn.shallowMerge()`
- `dn.deepMerge()`
- `dn.findOne()`
- `dn.find()`
- `dn.remove()`
- `dn.remove()`

Для получения дополнительных деталей см.:

- [Конструктор Designable](/development/client/ui-schema/designable)
- [API Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)

<code src="./demos/schema-settings-basic/index.tsx"></code>

## Справочник по API

- [SchemaSettingsManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings-manager)
- [SchemaSettings](https://client.docs-cn.nocobase.com/core/ui-schema/schema-settings)
- [Designable](https://client.docs-cn.nocobase.com/core/ui-schema/designable)