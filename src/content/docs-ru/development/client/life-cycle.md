# Жизненный цикл плагина

## Жизненный цикл

Ниже приведено определение класса `Plugin`, из которого видно, что он предоставляет три метода жизненного цикла: `afterAdd`, `beforeLoad` и `load`.

```typescript
export class Plugin<T = <em>any</em>> {
  constructor(
    protected options: T,
    protected app: Application,
  ) {}

  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}
```

### `afterAdd`

- Время вызова: сразу после добавления и инициализации плагина
- Назначение: используется для загрузки других плагинов

```typescript
class Demo1Plugin extends Plugin {}
class Demo2Plugin extends Plugin {}

class MyPlugin extends Plugin {
  async afterrAdd() {
    // 加载其他插件
    this.app.pluginManager.add(Demo1Plugin);
    this.app.pluginManager.add(Demo2Plugin);
  }
}

export default MyPlugin;
```

### `beforeLoad`

- Время вызова: после добавления всех плагинов, но перед выполнением метода `load`
- Назначение: используется для обработки специальной логики, которая должна быть выполнена до вызова `load`

### `load`

- Время вызова: после того, как все плагины завершили выполнение метода `beforeLoad`
- Назначение: большинство операций и вызовов методов экземпляра `app` должны выполняться в рамках этого жизненного цикла

```typescript
class MyPlugin extends Plugin {
  async load() {
    // 添加路由
    this.app.router.add();

    // 添加全局组件
    this.app.addComponents({});

    //  添加插件配置页
    this.app.pluginSettingsManager({});

    // ...
  }
}

export default MyPlugin;
```

Общий порядок выполнения следующий:

`app.mount()/app.getRootComponent()` -> `pluginList.forEach(plugin.afterAdd)` -> `pluginList.forEach(plugin.beforeLoad)` -> `pluginList.forEach(plugin.load)`

Для жизненных циклов одного типа порядок выполнения в списке плагинов не имеет значения.

## Менеджер плагинов

- Назначение: управление плагинами (добавление, удаление, изменение, запрос)
- Сценарии использования: когда плагины имеют потребность в разделении или объединении
- Метод экземпляра: `app.pluginManager`
- Подробное описание API: [Управление плагинами](https://www.baidu.com)

### Получение плагина

Мы можем получить экземпляр соответствующего плагина через `app.pluginManager.get`, а затем изменять атрибуты экземпляра плагина или вызывать методы на этом экземпляре.

```typescript
import { DemoPlugin } from 'my-demo-plugin';

class MyPlugin extends Plugin {
  async load() {
    // Получение экземпляра через класс
    const demoPluginInstance = this.pm.get(DemoPlugin);

    // Если при добавлении было передано имя (name), то можно получить экземпляр по строке имени (name)
    const demoPluginInstance = this.pm.get('DemoPlugin');

    // Обработка экземпляра ...
  }
}
```

Если нужно получить внутри компонента, можно использовать `usePlugin()`.。

```typescript
import { usePlugin } from '@nocobase/client';
const Demo = () => {
  const myPlugin = usePlugin(MyPlugin); // Получение экземпляра через класс.

  const myPlugin = usePlugin('MyPlugin'); // Получение экземпляра по имени.
};
```

### Добавление плагина

Мы можем добавить плагин напрямую или передать второй параметр, например, `name`, чтобы другие плагины могли получить его.

В большинстве случаев нет необходимости использовать эту возможность, если только плагин не нужно разделить на несколько частей.。

```typescript
class MyPlugin extends Plugin {
  // Обратите внимание, что это должно быть внутри жизненного цикла afterAdd.
  async afterrAdd() {
    this.app.pluginManager.add(DemoPlugin);
    this.app.pluginManager.add(DemoPlugin, { name: 'DemoPlugin' });
  }
}
```
