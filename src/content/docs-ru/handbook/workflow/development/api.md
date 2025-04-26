# API Справочник

## Серверная часть

Доступные API в структуре серверного пакета показаны в следующем коде:

```ts
import PluginWorkflowServer, {
  Trigger,
  Instruction,
  EXECUTION_STATUS,
  JOB_STATUS,
} from '@nocobase/plugin-workflow';
```

### `PluginWorkflowServer`

Класс плагина для рабочих процессов.

Обычно в любом месте приложения, где можно получить экземпляр приложения `app`, вызывается `app.pm.get<PluginWorkflowServer>(PluginWorkflowServer)`, чтобы получить экземпляр плагина рабочих процессов (далее он будет обозначаться как `plugin`).

#### `registerTrigger()`

Регистрация нового типа триггера.

**Сигнатура**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger)`

**Параметры**

| Параметр | Тип                          | Описание           |
| -------- | ---------------------------- | ------------------ |
| `type`   | `string`                     | Идентификатор типа триггера |
| `trigger` | `typeof Trigger \| Trigger` | Тип триггера или его экземпляр |

**Пример**

```ts
import PluginWorkflowServer, { Trigger } from '@nocobase/plugin-workflow';

function handler(this: MyTrigger, workflow: WorkflowModel, message: string) {
  // trigger workflow
  this.workflow.trigger(workflow, { data: message.data });
}

class MyTrigger extends Trigger {
  messageHandlers: Map<number, WorkflowModel> = new Map();
  on(workflow: WorkflowModel) {
    const messageHandler = handler.bind(this, workflow);
    // listen some event to trigger workflow
    process.on(
      'message',
      this.messageHandlers.set(workflow.id, messageHandler),
    );
  }

  off(workflow: WorkflowModel) {
    const messageHandler = this.messageHandlers.get(workflow.id);
    // remove listener
    process.off('message', messageHandler);
  }
}

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin =
      this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // register trigger
    workflowPlugin.registerTrigger('myTrigger', MyTrigger);
  }
}
```

#### `registerInstruction()`

**Регистрация нового типа узла**

**Сигнатура**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction)`

**Параметры**

| Параметр         | Тип                                  | Описание       |
| ---------------- | ------------------------------------- | -------------- |
| `type`          | `string`                              | Идентификатор типа инструкции |
| `instruction`   | `typeof Instruction \| Instruction`   | Тип инструкции или ее экземпляр |

**Пример**

```ts
import PluginWorkflowServer, { Instruction, JOB_STATUS } from '@nocobase/plugin-workflow';

class LogInstruction extends Instruction {
  run(node, input, processor) {
    console.log('my instruction runs!');
    return {
      status: JOB_STATUS.RESOVLED,
    };
  },
};

export default class MyPlugin extends Plugin {
  load() {
    // get workflow plugin instance
    const workflowPlugin = this.app.pm.get<PluginWorkflowServer>(PluginWorkflowServer);

    // register instruction
    workflowPlugin.registerInstruction('log', LogInstruction);
  }
}
```

#### `trigger()`

**Вызов определенного рабочего процесса**

Основное применение — в пользовательских триггерах, когда необходимо запустить соответствующий рабочий процесс при обнаружении определенного пользовательского события.

**Сигнатура**

`trigger(workflow: Workflow, context: any)`

**Параметры**

| Параметр   | Тип              | Описание                  |
| ---------- | ----------------- | ------------------------- |
| `workflow` | `WorkflowModel`  | Объект рабочего процесса, который нужно запустить |
| `context`  | `object`         | Данные контекста, передаваемые при запуске |

:::info{title=Подсказка}
`context` в настоящее время является обязательным параметром. Если его не предоставить, рабочий процесс не будет запущен.
:::

**Пример**

```ts
import { Trigger } from '@nocobase/plugin-workflow';

class MyTrigger extends Trigger {
  timer: NodeJS.Timeout;

  on(workflow) {
    // register event
    this.timer = setInterval(() => {
      // trigger workflow
      this.plugin.trigger(workflow, { date: new Date() });
    }, workflow.config.interval ?? 60000);
  }
}
```

#### `resume()`

**Восстановление ожидания рабочего процесса с использованием задачи узла**

- Лишь те рабочие процессы, которые находятся в состоянии ожидания (`EXECUTION_STATUS.STARTED`), могут быть восстановлены.
- Лишь те задачи узлов, которые находятся в состоянии ожидания (`JOB_STATUS.PENDING`), могут быть восстановлены.

**Сигнатура**

`resume(job: JobModel)`

**Параметры**

| Параметр | Тип        | Описание                |
| -------- | ---------- | ----------------------- |
| `job`    | `JobModel` | Обновленный объект задачи |

:::info{title=Подсказка}
Передаваемый объект задачи обычно является обновленным, и обычно его состояние (`status`) обновляется до значения, отличного от `JOB_STATUS.PENDING`, иначе задача продолжит ожидать.
:::

**Пример**

**Подробности см. в [источнике](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99).**

### `Trigger`

Базовый класс триггера, предназначенный для расширения пользовательских типов триггеров.

| Параметр          | Тип                                                        | Описание                   |
| ----------------- | ----------------------------------------------------------- | -------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Trigger` | Конструктор                |
| `on?`            | `(workflow: WorkflowModel): void`                           | Обработчик события после включения рабочего процесса |
| `off?`           | `(workflow: WorkflowModel): void`                           | Обработчик события после отключения рабочего процесса |

Методы `on`/`off` используются для регистрации/отмены регистрации прослушивания событий при включении/отключении рабочего процесса. В качестве параметра передается экземпляр рабочего процесса, соответствующий триггеру, и может быть выполнен необходимый обработчик в зависимости от соответствующей конфигурации. Для некоторых типов триггеров, которые уже глобально слушают события, эти методы можно не реализовывать. Например, в триггере по расписанию можно зарегистрировать таймер в методе `on` и отменить его в методе `off`.

### `Instruction`

**Базовый класс типа инструкции, предназначенный для расширения пользовательских типов инструкций.**

| Параметр          | Тип                                                            | Описание                               |
| ----------------- | --------------------------------------------------------------- | -------------------------------------- |
| `constructor`     | `(public readonly workflow: PluginWorkflowServer): Instruction` | Конструктор                           |
| `run`            | `Runner`                                                       | Логика выполнения при первом входе в узел |
| `resume?`        | `Runner`                                                       | Логика выполнения при возобновлении выполнения после прерывания |
| `getScope?`      | `(node: FlowNodeModel, data: any, processor: Processor): any`   | Получение локальных переменных для создания ветвления для соответствующего узла |

**Связанные типы**

```ts
export type Job =
  | {
      status: JOB_STATUS[keyof JOB_STATUS];
      result?: unknown;
      [key: string]: unknown;
    }
  | JobModel
  | null;

export type InstructionResult = Job | Promise<Job>;

export type Runner = (
  node: FlowNodeModel,
  input: JobModel,
  processor: Processor,
) => InstructionResult;

export class Instruction {
  run: Runner;
  resume?: Runner;
}
```

`getScope` можно посмотреть в реализации [циклического узла](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-loop/src/server/LoopInstruction.ts#L83), чтобы предоставить содержимое локальных переменных для ветвления.

### `EXECUTION_STATUS`

Константы состояний плана выполнения рабочего процесса, используемые для идентификации текущего состояния соответствующего плана выполнения.

| Константа                          | Описание                 |
| ----------------------------------- | ------------------------ |
| `EXECUTION_STATUS.QUEUEING`        | В очереди                |
| `EXECUTION_STATUS.STARTED`         | В процессе               |
| `EXECUTION_STATUS.RESOLVED`        | Успешно завершено        |
| `EXECUTION_STATUS.FAILED`          | Неудача                  |
| `EXECUTION_STATUS.ERROR`           | Ошибка выполнения        |
| `EXECUTION_STATUS.ABORTED`         | Прервано                 |
| `EXECUTION_STATUS.CANCELED`        | Отменено                 |
| `EXECUTION_STATUS.REJECTED`        | Отклонено                |
| `EXECUTION_STATUS.RETRY_NEEDED`    | Не удалось выполнить, требуется повторная попытка |

Кроме первых трех, все остальные представляют состояние неудачи, но могут использоваться для описания различных причин неудачи.

### `JOB_STATUS`

Константы состояний задачи узла рабочего процесса, используемые для идентификации текущего состояния соответствующей задачи узла. Состояния, созданные узлом, также влияют на состояние всего плана выполнения.

| Константа            | Описание                                       |
| --------------------- | ---------------------------------------------- |
| `JOB_STATUS.PENDING`  | Ожидание: выполнение достигло этого узла, но инструкция требует приостановки и ожидания |
| `JOB_STATUS.RESOLVED` | Успешно завершено                              |
| `JOB_STATUS.FAILED`   | Неудача: выполнение этого узла не удовлетворило настройки конфигурации |
| `JOB_STATUS.ERROR`    | Ошибка: во время выполнения этого узла произошла непойманная ошибка |
| `JOB_STATUS.ABORTED`  | Остановлено: этот узел был остановлен другой логикой после приостановки |
| `JOB_STATUS.CANCELED` | Отменено: этот узел был отменен человеком после приостановки |
| `JOB_STATUS.REJECTED` | Отклонено: этот узел был отклонен человеком после приостановки |
| `JOB_STATUS.RETRY_NEEDED` | Не удалось выполнить, требуется повторная попытка |

## Клиентская часть

Доступные API в структуре клиентского пакета показаны в следующем коде:

```ts
import PluginWorkflowClient, {
  Trigger,
  Instruction,
} from '@nocobase/plugin-workflow/client';
```

### `PluginWorkflowClient`

#### `registerTrigger()`

**Регистрация панели конфигурации для типа триггера.**

**Сигнатура**

`registerTrigger(type: string, trigger: typeof Trigger | Trigger): void`

**Параметры**

| Параметр | Тип                          | Описание                                 |
| -------- | ----------------------------- | ---------------------------------------- |
| `type`   | `string`                      | Идентификатор типа триггера, совпадающий с тем, который используется при регистрации |
| `trigger` | `typeof Trigger \| Trigger`  | Тип триггера или его экземпляр          |

#### `registerInstruction()`

Регистрация панели конфигурации для типа узла.

**Сигнатура**

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**Параметры**

| Параметр         | Тип                                  | Описание                               |
| ---------------- | ------------------------------------- | -------------------------------------- |
| `type`          | `string`                              | Идентификатор типа инструкции, совпадающий с тем, который используется при регистрации |
| `instruction`   | `typeof Instruction \| Instruction`   | Тип инструкции или ее экземпляр       |

**Пример**

Для более подробного примера и дополнительной информации, обратитесь к исходному коду, например, [здесь](https://github.com/nocobase/nocobase/blob/main/packages/plugins/%40nocobase/plugin-workflow-manual/src/server/actions.ts#L99).

`registerInstruction(type: string, instruction: typeof Instruction | Instruction): void`

**Параметры**

| Параметр         | Тип                                  | Описание                               |
| ---------------- | ------------------------------------- | -------------------------------------- |
| `type`          | `string`                              | Идентификатор типа узла, совпадающий с тем, который используется при регистрации |
| `instruction`   | `typeof Instruction \| Instruction`   | Тип узла или его экземпляр           |

### `Trigger`

Базовый класс триггера, предназначенный для расширения пользовательских типов триггеров.

| Параметр         | Тип                                                             | Описание                               |
| ---------------- | ---------------------------------------------------------------- | -------------------------------------- |
| `title`         | `string`                                                         | Название типа триггера               |
| `fieldset`      | `{ [key: string]: ISchema }`                                     | Коллекция конфигурационных полей триггера |
| `scope?`        | `{ [key: string]: any }`                                         | Коллекция объектов, которые могут быть использованы в схеме конфигурации |
| `components?`   | `{ [key: string]: React.FC }`                                    | Коллекция компонентов, которые могут быть использованы в схеме конфигурации |
| `useVariables?` | `(config: any, options: UseVariableOptions) => VariableOptions` | Функция получения значений контекста триггера |

- Если `useVariables` не установлен, это означает, что данный тип триггера не предоставляет функцию получения значений, и данные контекста триггера не могут быть выбраны в узлах рабочего процесса.

### `Instruction`

Базовый класс инструкции, предназначенный для расширения пользовательских типов узлов.

| Параметр                 | Тип                                                    | Описание                                                                           |
| ------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `group`                  | `string`                                                | Идентификатор группы типа узла, возможные варианты: `'control'`/`'collection'`/`'manual'`/`'extended'` |
| `fieldset`               | `Record<string, ISchema>`                               | Коллекция конфигурационных полей узла                                          |
| `scope?`                 | `Record<string, Function>`                              | Коллекция объектов, которые могут быть использованы в схеме конфигурации         |
| `components?`            | `Record<string, React.FC>`                              | Коллекция компонентов, которые могут быть использованы в схеме конфигурации      |
| `Component?`             | `React.FC`                                              | Пользовательский компонент для рендеринга узла                                  |
| `useVariables?`          | `(node, options: UseVariableOptions) => VariableOption` | Метод, предоставляющий варианты переменных для узла                              |
| `useScopeVariables?`     | `(node, options?) => VariableOptions`                   | Метод, предоставляющий варианты локальных переменных для ветвления               |
| `useInitializers?`       | `(node) => SchemaInitializerItemType`                   | Метод, предоставляющий варианты инициализаторов                                  |
| `isAvailable?`           | `(ctx: NodeAvailableContext) => boolean`                | Метод, определяющий доступность узла                                           |

**Связанные типы**

```ts
export type NodeAvailableContext = {
  workflow: object;
  upstream: object;
  branchIndex: number;
};
```

- `useVariables` Если этот метод не установлен, это означает, что данный тип узла не предоставляет функцию получения значений, и результаты данного типа узла не могут быть выбраны в узлах рабочего процесса. Если результат одиночен (не подлежит выбору), достаточно вернуть статический контент, который выражает соответствующую информацию (см.: [исходный код узла вычисления](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/calculation.tsx#L68)). Если результат может быть выбран (например, свойство объекта), можно создать соответствующий компонент выбора (см.: [исходный код узла добавления данных](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L41)).

- `Component` Пользовательский компонент для рендеринга узла, который позволяет полностью заменить стандартный рендеринг узла при необходимости. Это полезно, если стандартный рендеринг не удовлетворяет требованиям, например, для предоставления дополнительных кнопок или других интерактивных элементов для начального узла ветвления (см.: [исходный код параллельной ветви](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow-parallel/src/client/ParallelInstruction.tsx)).

- `useInitializers` Используется для предоставления методов инициализации блоков, например, вручную созданных узлов можно инициализировать блоки пользователей на основе предыдущих узлов. Если этот метод предоставлен, он будет доступен при инициализации блоков в интерфейсе настройки ручного узла (см.: [исходный код узла добавления данных](https://github.com/nocobase/nocobase/blob/main/packages/plugins/@nocobase/plugin-workflow/src/client/nodes/create.tsx#L71)).

- `isAvailable` Основано на проверке возможности использования узла в текущем окружении (например, текущем рабочем процессе, предыдущих узлах и индексе текущей ветви).
