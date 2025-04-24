# APIClient

## Обзор

`APIClient` инкапсулирован на основе <a href="https://axios-http.com/" target="_blank">`axios`</a> и используется для выполнения HTTP-запросов к операциям ресурсов NocoBase на стороне клиента.

### Основное использование

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const res = await this.app.apiClient.request({
      // ...
    });
  }
}
```

## Свойства экземпляра

### `axios`

Экземпляр `axios`, который предоставляет доступ к API `axios`, например, `apiClient.axios.interceptors`.

### `auth`

Класс авторизации клиента, см. [Auth](./auth.md).

### `storage`

客户端存储类，参考 [Storage](./storage.md).

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `APIClient`.

#### Сигнатура

- `constructor(instance?: APIClientOptions)`

#### Типы

```ts
interface ExtendedOptions {
  authClass?: any;
  storageClass?: any;
}

export type APIClientOptions =
  | AxiosInstance
  | (AxiosRequestConfig & ExtendedOptions);
```

### `request()`

Инициирует HTTP-запрос.

#### Сигнатура

- `request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D> | ResourceActionOptions): Promise<R>`

#### Типы

```ts
type ResourceActionOptions<P = any> = {
  resource?: string;
  resourceOf?: any;
  action?: string;
  params?: P;
};
```

#### 详细信息

##### AxiosRequestConfig

Общие параметры запроса axios. См. <a href="https://axios-http.com/docs/req_config" target="_blank">Request Config</a>.

```ts
const res = await apiClient.request({ url: '' });
```

##### ResourceActionOptions

Параметры запроса операций с ресурсами NocoBase.

```ts
const res = await apiClient.request({
  resource: 'users',
  action: 'list',
  params: {
    pageSize: 10,
  },
});
```

| Свойство       | Тип      | Описание                                                                                             |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `resource`      | `string` | 1. Имя ресурса, например, `a`<br />2. Имя связанного объекта ресурса, например, `a.b`                |
| `resourceOf`    | `any`    | Когда `resource` является именем связанного объекта ресурса, это значение представляет собой первичный ключ ресурса. Например, для `a.b` это будет первичный ключ `a`. |
| `action`        | `string` | Название операции                                                                                     |
| `params`        | `any`    | Объект параметров запроса; основные параметры URL, тело запроса помещается в `params.values`          |
| `params.values` | `any`    | Объект тела запроса                                                                                   |

### `resource()`

Получение объекта методов операций с ресурсами NocoBase.

```ts
const resource = apiClient.resource('users');

await resource.create({
  values: {
    username: 'admin',
  },
});

const res = await resource.list({
  page: 2,
  pageSize: 20,
});
```

#### Сигнатура

- `resource(name: string, of?: any, headers?: AxiosRequestHeaders): IResource`

#### Типы

```ts
export interface ActionParams {
  filterByTk?: any;
  [key: string]: any;
}

type ResourceAction = (params?: ActionParams) => Promise<any>;

export type IResource = {
  [key: string]: ResourceAction;
};
```

#### Подробная информация

| Имя параметра | Тип                  | Описание                                                                                             |
| ------------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| `name`        | `string`             | 1. Название ресурса, например, `a`<br />2. Имя связанного объекта ресурса, например, `a.b`           |
| `of`          | `any`                | Когда `resource` является именем связанного объекта ресурса, это значение представляет собой первичный ключ ресурса. Например, для `a.b` это будет первичный ключ `a`. |
| `headers`     | `AxiosRequestHeaders`| HTTP-заголовки, которые будут использоваться при последующих запросах операций с ресурсом.            |