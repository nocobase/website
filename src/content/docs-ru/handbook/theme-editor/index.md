# Редактор тем

> Функция текущей темы реализована на основе версии antd 5.x, поэтому перед чтением этой статьи рекомендуется ознакомиться с концепциями, связанными с [настройкой темы](https://ant.design/docs/react/customize-theme-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98).

## Введение

Простыми словами, этот плагин используется для изменения стилей всей клиентской части приложения. В настоящее время поддерживаются редактирование глобальных [SeedToken](https://ant.design/docs/react/customize-theme-cn#seedtoken), [MapToken](https://ant.design/docs/react/customize-theme-cn#maptoken), [AliasToken](https://ant.design/docs/react/customize-theme-cn#aliastoken), а также переключение в [темную](https://ant.design/docs/react/customize-theme-cn#%E4%BD%BF%E7%94%A8%E9%A2%84%E8%AE%BE%E7%AE%97%E6%B3%95) и [компактную](https://ant.design/docs/react/customize-theme-cn#%E4%BD%BF%E7%94%A8%E9%A2%84%E8%AE%BE%E7%AE%97%E6%B3%95) темы. В будущем возможно появление поддержки настройки темы на [уровне компонентов](https://ant.design/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E5%8F%98%E9%87%8F-component-token).

## Инструкция по использованию

### Включение плагина темы

Сначала обновите NocoBase до последней версии (v0.11.1 или выше), затем на странице управления плагинами найдите карточку "Редактор тем", нажмите кнопку "Включить" в правом нижнем углу карточки и дождитесь обновления страницы.

![20240409132838](https://static-docs.nocobase.com/20240409132838.png)

### Переход на страницу настройки темы

После включения нажмите кнопку настроек в левом нижнем углу карточки, и вы будете перенаправлены на страницу редактирования темы. По умолчанию доступны четыре варианта тем: "Тема по умолчанию", "Темная тема", "Компактная тема" и "Компактная темная тема".

![20240409133020](https://static-docs.nocobase.com/20240409133020.png)

## Добавление новой темы

Нажмите кнопку "Добавить новую тему", выберите "Создать полностью новую тему", после чего справа на странице откроется "Редактор тем". Поддерживаются настройки "Цветов", "Размеров", "Стилей" и других параметров. После редактирования введите название темы и нажмите "Сохранить" для завершения добавления новой темы.

![20240409133147](https://static-docs.nocobase.com/20240409133147.png)

## Применение новой темы

Наведите курсор на правый верхний угол страницы, где находится возможность переключения тем. Нажмите на неё, чтобы переключиться на другую тему, например, на только что созданную.

![20240409133247](https://static-docs.nocobase.com/20240409133247.png)

## Редактирование существующей темы

Нажмите кнопку "Редактировать" в левом нижнем углу карточки, и, как при добавлении новой темы, справа на странице откроется "Редактор тем". После внесения изменений нажмите "Сохранить", чтобы завершить редактирование темы.

![20240409134413](https://static-docs.nocobase.com/20240409134413.png)

## Доступные варианты переключения тем для пользователей

Новая тема по умолчанию доступна для переключения пользователями. Если вы не хотите, чтобы пользователи могли переключаться на определенную тему, можно отключить переключатель "Доступна для выбора пользователями" в правом нижнем углу карточки темы. В этом случае пользователи не смогут выбрать эту тему.

![20240409133331](https://static-docs.nocobase.com/20240409133331.png)

## Установка темы по умолчанию (тема по умолчанию не может быть удалена)

В исходном состоянии темой по умолчанию является "Тема по умолчанию". Если вы хотите установить другую тему как тему по умолчанию, включите переключатель "Тема по умолчанию" в правом нижнем углу карточки. Таким образом, при первом открытии страницы пользователь увидит именно эту тему.

![20240409133409](https://static-docs.nocobase.com/20240409133409.png)

## Удаление темы

Нажмите кнопку "Удалить" внизу карточки, затем подтвердите удаление, нажав соответствующую кнопку в появившемся диалоговом окне.

![20240409133435](https://static-docs.nocobase.com/20240409133435.png)