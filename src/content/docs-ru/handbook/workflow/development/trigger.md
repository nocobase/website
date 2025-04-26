# Расширение типов триггеров

Каждый рабочий процесс должен быть настроен с определенным триггером, который служит входом для запуска выполнения процесса.

Типы триггеров обычно представляют конкретные события системы. В течение жизненного цикла приложения любая часть, предоставляющая события, которые можно подписаться, может быть использована для определения типов триггеров. Например, получение запросов, операции с таблицами данных, задачи по расписанию и т.д.

Типы триггеров регистрируются в таблице триггеров плагина на основе строковых идентификаторов. Встроенные триггеры в плагин рабочих процессов включают:

- `'collection'`: триггер на операции с таблицами данных;
- `'schedule'`: триггер на задачи по расписанию;
- `'action'`: триггер на события после выполнения операции;

Расширенные типы триггеров должны обеспечивать уникальность идентификаторов, а также реализовывать подписку и отмену подписки на конкретные события на серверной стороне и реализацию интерфейса конфигурации на клиентской стороне.

## Серверная часть

Любой триггер должен наследоваться от базового класса `Trigger` и реализовать методы `on` и `off`, которые используются для подписки и отмены подписки на конкретные системные события. В методе `on` необходимо подписаться на событие и вызвать `this.workflow.trigger()` в обработчике события для фактического запуска события. В методе `off` нужно выполнить очистку подписок.

`this.workflow` — это экземпляр плагина рабочих процессов, передаваемый в конструктор базового класса `Trigger`.

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // register event
    this.timer = setInterval(() => {
      // trigger workflow
      this.workflow.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }

  off(workflow) {
    // unregister event
    clearInterval(this.timer);
  }
}
```

После этого в плагине для расширения рабочих процессов необходимо зарегистрировать экземпляр триггера в движке рабочих процессов:

```ts
import WorkflowPlugin from '@nocobase/plugin-workflow';

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;

    // register trigger
    workflowPlugin.registerTrigger('interval', MyTrigger);
  }
}
```

После запуска и загрузки серверной части триггеры типа `'interval'` могут быть добавлены и выполнены.

## Клиентская часть

Клиентская часть в основном предоставляет интерфейсы конфигурации для требуемых параметров каждого типа триггера. Каждый тип триггера также должен быть зарегистрирован в плагине рабочих процессов с соответствующими конфигурационными типами.

Например, для триггера типа «по расписанию», необходимо определить интерфейс конфигурации, включающий параметр интервала (`interval`):

```ts
import { Trigger } from '@nocobase/workflow/client';

class MyTrigger extends Trigger {
  title = 'Interval timer trigger';
  // fields of trigger config
  fieldset = {
    interval: {
      type: 'number',
      title: 'Interval',
      name: 'config.interval',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      default: 60000,
    },
  };
}
```

Затем в расширенном плагине необходимо зарегистрировать этот тип триггера в экземпляре плагина рабочих процессов:

```ts
import { Plugin } from '@nocobase/client';
import WorkflowPlugin from '@nocobase/plugin-workflow/client';

import MyTrigger from './MyTrigger';

export default class extends Plugin {
  // You can get and modify the app instance here
  async load() {
    const workflow = this.app.pm.get(WorkflowPlugin) as WorkflowPlugin;
    workflow.registerTrigger('interval', MyTrigger);
  }
}
```

После этого новый тип триггера станет виден в интерфейсе конфигурации рабочих процессов.

:::info{title=Подсказка}
Идентификатор типа триггера, зарегистрированный на клиентской стороне, должен совпадать с идентификатором на серверной стороне, иначе это приведет к ошибкам.
:::

Другие детали определения типа триггера см. в разделе [Справочник API рабочих процессов](./api#pluginregisterTrigger).。
