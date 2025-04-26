# DataSourceManager

`DataSourceManager` — это класс для управления несколькими экземплярами `dataSource`.

## API

### add()
Добавляет экземпляр `dataSource`.

#### Сигнатура

- `add(dataSource: DataSource, options: any = {}): Promise<void>`

### use()

Добавляет глобальный middleware к экземпляру `dataSource`.

### middleware()

Получает middleware текущего экземпляра `dataSourceManager`, который может использоваться для обработки HTTP-запросов.

### afterAddDataSource()

Хук функции, вызываемый после добавления нового `dataSource`.

#### Сигнатура

- `afterAddDataSource(hook: DataSourceHook)`

```typescript
type DataSourceHook = (dataSource: DataSource) => void;
```

### registerDataSourceType()

Регистрирует тип источника данных и его класс.

#### Сигнатура

- `registerDataSourceType(type: string, dataSourceClass: typeof DataSource)`

### getDataSourceType()

Получает класс источника данных.

#### Сигнатура

- `getDataSourceType(type: string): typeof DataSource`

### buildDataSourceByType()

Создает экземпляр источника данных на основе зарегистрированного типа и параметров экземпляра.

#### Сигнатура

- `buildDataSourceByType(type: string, options: any): DataSource`