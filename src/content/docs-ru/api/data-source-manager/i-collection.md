# ICollection

`ICollection` Это интерфейс модели данных, который содержит информацию о названии модели, полях, связях и других атрибутах.

```typescript
export interface ICollection {
  repository: IRepository;

  updateOptions(options: any): void;

  setField(name: string, options: any): IField;

  removeField(name: string): void;

  getFields(): Array<IField>;

  getField(name: string): IField;

  [key: string]: any;
}
```

## Члены

### repository

Экземпляр `Repository`, к которому принадлежит `ICollection`.

## API

### updateOptions()

Обновление атрибутов `Collection`.

#### Сигнатура

- `updateOptions(options: any): void`

### setField()

Установка поля в `Collection`.

#### Сигнатура

- `setField(name: string, options: any): IField`

### removeField()

Удаление поля из `Collection`.

#### Сигнатура

- `removeField(name: string): void`

### getFields()

Получение всех полей `Collection`.

#### Сигнатура

- `getFields(): Array<IField>`

### getField()

Получение поля `Collection` по его имени.

#### Сигнатура

- `getField(name: string): IField`