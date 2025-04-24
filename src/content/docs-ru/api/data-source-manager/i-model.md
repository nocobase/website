# IModel

`IModel` Интерфейс определяет базовые свойства и методы объекта модели.

```typescript
export interface IModel {
  toJSON: () => any;
}
```

## API

### toJSON()

Преобразование объекта модели в формат JSON.
