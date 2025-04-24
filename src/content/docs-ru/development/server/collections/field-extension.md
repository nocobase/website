# Расширение полей

В NocoBase структура Collection Field включает в себя:

<img src="./collection-field.svg" />

## Расширение типов полей (Field Type)

Например, расширение поля типа пароль `type: 'password'`

```ts
export class MyPlugin extends Plugin {
  beforeLoad() {
    this.db.registerFieldTypes({
      password: PasswordField,
    });
  }
}

export class PasswordField extends Field {
  get dataType() {
    return DataTypes.STRING;
  }
}
```

- [Посмотреть больше реализаций встроенных типов полей можно здесь](https://github.com/nocobase/nocobase/tree/main/packages/core/database/src/fields)
- Также можно посмотреть полный пример плагина [packages/samples/shop-modeling](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-modeling)

## Расширение компонентов полей (Field Component)

Дополнительная документация по расширениям:

- [Расширение компонентов схемы](/development/client/ui-schema-designer/extending-schema-components)
- [Библиотека компонентов схемы](/development/client/ui-schema-designer/component-library)

## Расширение интерфейса полей (Field Interface)

- [Посмотреть встроенные интерфейсы полей можно здесь](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/collection-manager/interfaces)