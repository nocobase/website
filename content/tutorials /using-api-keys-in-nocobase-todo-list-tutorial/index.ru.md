Дорогие друзья, добро пожаловать в новый туториал. В этом документе я шаг за шагом покажу вам, как использовать API-ключи в NocoBase для получения данных, на примере "Списка дел", чтобы помочь вам понять каждую деталь. Пожалуйста, внимательно прочитайте следующее содержание и следуйте инструкциям.

![202503032004-todo1](https://static-docs.nocobase.com/202503032004-todo1.gif)

## 1 Понимание концепции API-ключей

Прежде чем мы начнем, важно понять: что такое API-ключ? 

Он работает как входной билет, который проверяет, поступает ли API-запрос от авторизованного пользователя. Когда вы получаете доступ к системе NocoBase через веб-сайт, мобильное приложение или серверный скрипт, этот "секретный ключ" быстро проверяет вашу личность.

В заголовке HTTP-запроса вы увидите формат, подобный этому:

```txt
Authorization: Bearer {API key}
```

Здесь "Bearer" указывает, что за ним следует проверенный API-ключ, который позволяет системе быстро подтвердить права доступа запрашивающей стороны.

На практике API-ключи обычно используются в следующих сценариях:

1.  **Доступ клиентского приложения**: Когда пользователи получают доступ к API через веб-браузер или мобильное приложение, система использует API-ключ для проверки личности пользователя, гарантируя, что только авторизованные пользователи могут получать данные.
2.  **Выполнение автоматизированных задач**: Фоновые запланированные задачи или скрипты используют API-ключи для обеспечения безопасности и авторизации действий по обновлению или логированию.
3.  **Разработка и тестирование**: Разработчики используют API-ключи при отладке и тестировании, чтобы имитировать реальные запросы и убедиться, что интерфейсы отвечают правильно.

Короче говоря, API-ключи не только помогают подтвердить личность запрашивающей стороны, но и отслеживают использование, ограничивают частоту запросов и предотвращают потенциальные угрозы безопасности, тем самым защищая стабильную работу NocoBase.

## 2 Создание [API-ключей](https://docs.nocobase.com/handbook/api-keys) в NocoBase

### 2.1 Активация плагина Аутентификация: [API Keys](https://docs.nocobase.com/handbook/api-keys)

Сначала убедитесь, что встроенный плагин Аутентиыикация:[API Keys] в NocoBase активирован. После активации в центре системных настроек появится новая страница конфигурации для [API keys](https://docs.nocobase.com/handbook/api-keys).

![20250301003106](https://static-docs.nocobase.com/20250301003106.png)

### 2.2 Создание тестовой коллекции "Список дел"

Для тестирования создайте коллекцию с именем `todos` (Список дел) со следующими полями:

-   `id` (идентификатор)
-   `title` (название)
-   `completed` (выполнено)

![20250303175632](https://static-docs.nocobase.com/20250303175632.png)

Затем добавьте несколько примеров дел в коллекцию, например:

-   поесть
-   поспать
-   поиграть в игры

![20250303180044](https://static-docs.nocobase.com/20250303180044.png)

### 2.3 Создание и привязка роли

Поскольку [API keys](https://docs.nocobase.com/handbook/api-keys) привязаны к ролям пользователей, система определяет права доступа на основе роли. Поэтому перед созданием [API key](https://docs.nocobase.com/handbook/api-keys) необходимо создать роль и назначить ей соответствующие разрешения. Рекомендуется создать тестовую роль с названием "To Dos API Role" и назначить все разрешения для коллекции "Список дел" этой роли.

![20250303180247](https://static-docs.nocobase.com/20250303180247.png)

Если роль "To Dos API Role" недоступна при создании [API key](https://docs.nocobase.com/handbook/api-keys), возможно, текущему пользователю не назначена эта роль. В этом случае назначьте эту роль:

![20250303180638](https://static-docs.nocobase.com/20250303180638.png)

После назначения роли обновите страницу и перейдите на страницу управления API-ключами. Нажмите "Добавить API-ключ", и вы увидите роль "To Dos API Role" доступной.

![20250303180612](https://static-docs.nocobase.com/20250303180612.png)
![20250303180936](https://static-docs.nocobase.com/20250303180936.png)

Для более точного управления вы также можете создать специального пользователя "To Dos API User" для входа в систему, тестирования разрешений и управления [API keys](https://docs.nocobase.com/handbook/api-keys). Просто назначьте роль "To Dos API Role" этому пользователю.
![20250304134443](https://static-docs.nocobase.com/20250304134443.png)
![20250304134713](https://static-docs.nocobase.com/20250304134713.png)
![20250304134734](https://static-docs.nocobase.com/20250304134734.png)

### 2.4 Создание и сохранение [API Key](https://docs.nocobase.com/handbook/api-keys)

После нажатия кнопки отправки система отобразит сообщение об успешном создании [API key](https://docs.nocobase.com/handbook/api-keys), и ключ будет показан во всплывающем окне. Обязательно скопируйте и сохраните этот ключ, так как по соображениям безопасности он больше не будет отображаться.

![20250303181130](https://static-docs.nocobase.com/20250303181130.png)

Например, вы можете получить [API key](https://docs.nocobase.com/handbook/api-keys) подобный этому:

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M
```

### 2.5 Примечания

-   Срок действия [API key](https://docs.nocobase.com/handbook/api-keys) зависит от выбранного вами периода при подаче заявки.
-   Генерация и проверка тесно связаны с переменной окружения `APP_KEY`. Не изменяйте ее произвольно, иначе все [API keys](https://docs.nocobase.com/handbook/api-keys) в системе станут недействительными.

## 3 Проверка действительности [API Key](https://docs.nocobase.com/handbook/api-keys)

### 3.1 Использование плагина [API document](https://docs.nocobase.com/handbook/api-doc)

Откройте плагин [API document](https://docs.nocobase.com/handbook/api-doc), где вы можете просмотреть метод запроса, URL, параметры и информацию заголовка для каждого API.

![20250303181522](https://static-docs.nocobase.com/20250303181522.png)
![20250303181704](https://static-docs.nocobase.com/20250303181704.png)

### 3.2 Понимание базовых свойств (Создание, чтение, обновление, удаление) API

Ниже приведены некоторые базовые примеры API, предоставляемые NocoBase:

-   **Запрос списка (list API):**

    ```txt
    GET {baseURL}/{collectionName}:list
    Заголовок запроса:
    - Authorization: Bearer <API key>
    ```
-   **Создание записи (create API):**

    ```txt
    POST {baseURL}/{collectionName}:create

    Заголовок запроса:
    - Authorization: Bearer <API key>

    Тело запроса (в формате JSON), например:
        {
            "title": "123"
        }
    ```
-   **Обновление записи (update API):**

    ```txt
    POST {baseURL}/{collectionName}:update?filterByTk={id}
    Заголовок запроса:
    - Authorization: Bearer <API key>

    Тело запроса (в формате JSON), например:
        {
            "title": "123",
            "completed": true
        }
    ```
-   **Удаление записи (delete API):**

    ```txt
    POST {baseURL}/{collectionName}:destroy?filterByTk={id}
    Заголовок запроса:
    - Authorization: Bearer <API key>
    ```

Здесь `{baseURL}` — это URL вашей системы NocoBase, а `{collectionName}` — имя коллекции. Например, при локальном тестировании, если адрес `localhost:13000`, а имя коллекции `todos`, URL-запроса будет:

```txt
http://localhost:13000/api/todos:list
```

### 3.3 Тестирование с помощью Postman (пример с List API)

Откройте Postman, создайте новый GET-запрос, введите URL запроса выше и добавьте заголовок `Authorization` со значением вашего [API key](https://docs.nocobase.com/handbook/api-keys):

```txt
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M
```

![20250303182744](https://static-docs.nocobase.com/20250303182744.png)
После отправки запроса, если все настроено правильно, вы должны получить ответ, подобный следующему:

```json
{
    "data": [
        {
            "createdAt": "2025-03-03T09:57:36.728Z",
            "updatedAt": "2025-03-03T09:57:36.728Z",
            "completed": null,
            "createdById": 1,
            "id": 1,
            "title": "eat food",
            "updatedById": 1
        }
    ],
    "meta": {
        "count": 1,
        "page": 1,
        "pageSize": 20,
        "totalPage": 1
    }
}
```

Если [API key](https://docs.nocobase.com/handbook/api-keys) не авторизован правильно, вы можете увидеть сообщение об ошибке, подобное этому:

```json
{
    "errors": [
        {
            "message": "Your session has expired. Please sign in again.",
            "code": "INVALID_TOKEN"
        }
    ]
}
```

В таком случае, пожалуйста, проверьте права роли, привязку [API key](https://docs.nocobase.com/handbook/api-keys) и убедитесь, что формат ключа правильный.

### 3.4 Копирование кода запроса из Postman

После успешного тестирования вы можете скопировать код запроса для List API. Например, следующий пример c url-запроса скопирован из Postman:

```txt
curl --location 'http://localhost:13000/api/todos:list' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M'
```

![20250303184912](https://static-docs.nocobase.com/20250303184912.png)
![20250303184953](https://static-docs.nocobase.com/20250303184953.png)

## 4 Отображение списка дел в [Iframe Block](https://docs.nocobase.com/handbook/block-iframe)

Чтобы наглядно продемонстрировать эффект API-запросов, мы можем использовать [Iframe Block](https://docs.nocobase.com/handbook/block-iframe) для отображения списка дел, полученного из NocoBase. Обратитесь к примеру кода ниже:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <h1>Todo List</h1>
    <pre id="result"></pre>

    <script>
        fetch('http://localhost:13000/api/todos:list', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoidG9kb3MiLCJpYXQiOjE3NDA5OTY1ODAsImV4cCI6MzMyOTg1OTY1ODB9.tXF2FCAzFNgZFPXqSBbWAfEvWkQwz0-mtKnmOTZT-5M'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    </script>
</body>
</html>
```

Приведенный выше код встраивает [Iframe Block](https://docs.nocobase.com/handbook/block-iframe), который отображает простой "Список дел". При загрузке он вызывает API для получения дел и показывает ответ (в виде отформатированного JSON) внутри iframe.

Кроме того, следующая анимация демонстрирует динамический процесс запроса:

![202503031918-fetch](https://static-docs.nocobase.com/202503031918-fetch.gif)

## 5 Заключение

С помощью вышеуказанных шагов мы подробно объяснили, как создавать и использовать [API keys](https://docs.nocobase.com/handbook/api-keys) в NocoBase. От активации плагина, создания коллекции и привязки роли до тестирования API и отображения данных в [Iframe Block](https://docs.nocobase.com/handbook/block-iframe) — каждый шаг очень важен. 

Наконец, с помощью DeepSeek была создана простая страница списка дел. Не стесняйтесь изменять и расширять код по мере необходимости.

![202503031942-todo](https://static-docs.nocobase.com/202503031942-todo.gif)

[Код этого примера](https://forum.nocobase.com/t/todo-list-1-0-how-to-using-api-keys/3315) доступен в посте нашего сообщества. Будем рады вашим отзывам и комментариям. Надеемся, что данный документ станет для вас понятным ориентиром! Желаем успешного обучения и продуктивной работы!