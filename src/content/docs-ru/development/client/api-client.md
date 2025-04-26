# HTTP-запросы

NocoBase предоставляет `APIClient` для выполнения HTTP-запросов. В жизненном цикле плагинов клиентского приложения можно использовать `app.apiClient` для выполнения запросов с клиента. Внутри компонентов можно использовать `useAPIClient()` и `useRequest()`.

## app.apiClient

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const { data } = await this.app.apiClient.request({ url: 'test' });
  }
}
```

---

### apiClient.request()

Обычный запрос, больше информации о использовании можно найти в [request config](https://axios-http.com/docs/req_config) axios.

```ts
class APIClient {
  // Клиентский запрос, поддерживает AxiosRequestConfig и ResourceActionOptions
  request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D> | ResourceActionOptions,
  ): Promise<R>;
}
```

Пример

```ts
const response = await apiClient.request({ url });
```

### apiClient.axios

Экземпляр `AxiosInstance`.

Можно использовать для изменения [настроек по умолчанию](https://axios-http.com/docs/config_defaults) axios.

```ts
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

Также можно использовать для [перехвата запросов или ответов](https://axios-http.com/docs/interceptors).

```ts
// Добавление перехватчика запроса: использование qs для преобразования параметров
axios.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, {
      strictNullHandling: true,
      arrayFormat: 'brackets',
    });
  };
  return config;
});

// Добавление перехватчика запроса: пользовательские заголовки запроса
axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer token123`;
  config.headers['X-Hostname'] = `localhost`;
  config.headers['X-Timezone'] = `+08:00`;
  config.headers['X-Locale'] = 'zh-CN';
  config.headers['X-Role'] = 'admin';
  config.headers['X-Authenticator'] = 'basic';
  config.headers['X-App'] = 'sub1';
  return config;
});

// Добавление перехватчика ответа
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Уведомление об ошибке запроса
    notification.error({
      message: 'Ошибка ответа на запрос',
    });
  },
);
```

### Пользовательские заголовки запросов NocoBase Server

- `X-App`: при наличии нескольких приложений, через `X-App` указывается текущее приложение.
- `X-Locale`: текущий язык.
- `X-Hostname`: hostname клиента.
- `X-Timezone`: часовой пояс клиента.
- `X-Role`: текущая роль.
- `X-Authenticator`: способ аутентификации текущего пользователя.

## useAPIClient()

Внутри компонентов можно использовать `useAPIClient()` для получения экземпляра APIClient текущего приложения. Результат равен `app.apiClient`.

## useRequest()

Управление асинхронными данными, может быть как запрос к данным клиента, так и пользовательская асинхронная функция. Подробное использование см. в ahooks [useRequest()](https://ahooks.js.org/hooks/use-request/index).

```ts
function useRequest<P>(
  service: AxiosRequestConfig<P> | ResourceActionOptions<P> | FunctionService,
  options?: Options<any, any>,
);
```

Пример

```ts
const { data, loading, refresh, run, params } = useRequest({ url: '/users' });

// Поскольку в useRequest передается AxiosRequestConfig, то в run также передается AxiosRequestConfig
run({
  params: {
    pageSize: 20,
  },
});
```

