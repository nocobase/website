---
title: "NocoBase 0.20: Suporte para Múltiplas Fontes de Dados"
description: "NocoBase 0.20 introduz suporte para múltiplas fontes de dados, ajustes no gerenciamento de coleções, chaves primárias não-ID, interfaces de usuário e permissões aprimoradas, e novos nós de fluxo de trabalho para maior flexibilidade e desempenho."
---

## Novos Recursos

### Suporte a Múltiplas Fontes de Dados

Adicionado o plugin ”[Gerenciador de Fontes de Dados](https://docs.nocobase.com/handbook/data-source-manager)”, usado para gerenciar todas as coleções e campos das fontes de dados. O plugin Gerenciador de Fontes de Dados fornece uma interface centralizada para gerenciar fontes de dados e não oferece a capacidade de acessar as fontes de dados. Ele precisa ser usado em conjunto com vários plugins de fonte de dados. As fontes de dados atualmente suportadas incluem:

* [Banco de Dados Principal](https://docs.nocobase.com/handbook/data-source-main): Banco de dados principal do NocoBase, suportando bancos de dados relacionais como MySQL, PostgreSQL, SQLite, etc.
* [Fonte de Dados MySQL Externa](https://docs.nocobase.com/handbook/data-source-external-mysql): Acessar um banco de dados MySQL existente como fonte de dados.
* [Fonte de Dados MariaDB Externa](https://docs.nocobase.com/handbook/data-source-external-mariadb): Acessar um banco de dados MariaDB existente como fonte de dados.
* [Fonte de Dados PostgreSQL Externa](https://docs.nocobase.com/handbook/data-source-external-postgres): Acessar um banco de dados PostgreSQL existente como fonte de dados.

Além disso, mais fontes de dados podem ser estendidas, podendo ser tipos comuns de bancos de dados ou plataformas que fornecem APIs (SDKs).

![Gerenciador de Fontes de Dados](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Ajuste no Gerenciamento de Coleções

Moveu o original “Gerenciador de Coleções” para “Fonte de Dados > Banco de Dados Principal > Configuração”.

![Configuração do Banco de Dados Principal](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Suporte para Campos Não-ID como Chave Primária e Restrições de Relacionamento

Ao criar uma coleção, você pode optar por não criar um campo ID.

![Campos Predefinidos](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Campos inteiros podem ser usados como chaves primárias.

![Campos inteiros podem ser usados como chaves primárias](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Campos de texto de linha única também podem ser usados como chaves primárias.

![Campos de texto de linha única também podem ser usados como chaves primárias](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

As restrições de relacionamento suportam a seleção de outros campos com índice Único definido como campos não-chave primária.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Ajuste na Ordenação por Arrastar e Soltar

Adicionado um campo do tipo “Ordenação”. Os campos de ordenação não são mais gerados automaticamente ao criar coleções e precisam ser criados manualmente.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Ao selecionar um campo como grupo, o agrupamento será feito antes da ordenação.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Ao ativar a ordenação por arrastar e soltar no bloco de tabela, você precisa selecionar o campo de ordenação.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Ao criar um bloco Kanban, você precisa selecionar o campo de ordenação.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Ajuste nas Interfaces de Usuário e Permissão

Adicionada interface de gerenciamento de usuários e unificado o gerenciamento de usuários e funções sob um único menu.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Ajustada a interface de gerenciamento de funções para facilitar o gerenciamento de funções associadas a usuários, permissões, departamentos, etc.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Movido o original “Permissões de Ação” para a aba “Fonte de Dados”.

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin de Departamento

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Organize usuários por departamentos, defina relações hierárquicas, vincule funções para controlar permissões e use departamentos como variáveis em fluxos de trabalho e expressões.

### Fluxo de Trabalho: Aprovação

O plugin de aprovação fornece tipos de fluxo de trabalho dedicados (gatilhos) “Iniciar Aprovação” e nós de “Aprovação” para este processo. Combinado com as tabelas de dados personalizadas e blocos personalizados exclusivos do NocoBase, vários cenários de aprovação podem ser rápida e flexivelmente criados e gerenciados.

Configuração de aprovação

![Configuração de Aprovação](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Processo de aprovação

![Processo de Aprovação](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Mais detalhes podem ser encontrados na documentação: [Aprovação de Fluxo de Trabalho](https://docs.nocobase.com/handbook/workflow-approval)

### Fluxo de Trabalho: Nó de Finalização de Processo

Este nó finaliza imediatamente a execução atual do fluxo de trabalho quando executado e termina com o status configurado no nó. É tipicamente usado para controle de fluxo lógico específico, para sair do fluxo de trabalho atual após atender certas condições lógicas, sem continuar com o processamento subsequente. Pode ser comparado ao comando return em linguagens de programação, usado para sair da função atualmente em execução.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Mais detalhes podem ser encontrados na documentação: [Nó de Finalização de Processo](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Fluxo de Trabalho: Nó de Variável Personalizada

Variáveis podem ser declaradas no fluxo de trabalho ou valores podem ser atribuídos a variáveis declaradas anteriormente, tipicamente usado para armazenar dados temporários no fluxo de trabalho. É adequado para cenários onde os resultados do cálculo precisam ser armazenados para uso posterior fora do branch (como loops, paralelismo, etc.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Mais detalhes podem ser encontrados na documentação: [Nó de Variável Personalizada](https://docs.nocobase.com/handbook/workflow-variable)

### Fluxo de Trabalho: Interceptador de Requisição

O plugin interceptador de requisição fornece um mecanismo para interceptar operações em formulários, onde o evento de interceptação é acionado após a operação de formulário correspondente ser submetida e antes de ser processada. Se um nó “Finalizar Processo” for executado no fluxo de processo subsequente após o acionamento, ou se outros nós falharem na execução (erros ou outras execuções incompletas), a operação do formulário será interceptada; caso contrário, a operação agendada será executada normalmente. Pode ser usado para validação de negócios ou verificações lógicas para aprovar ou interceptar operações de criação, atualização e exclusão submetidas pelo cliente.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Mais detalhes podem ser encontrados na documentação: [Interceptador de Requisição](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Fluxo de Trabalho: Nó de Mensagem de Resposta

O nó de mensagem de resposta é usado para fornecer feedback ao cliente com mensagens personalizadas em tipos específicos de fluxos de trabalho (como interceptação de requisição e eventos de formulário).

Configuração do nó

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Mensagem de aviso

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Mais detalhes podem ser encontrados na documentação: [Nó de Mensagem de Resposta](https://docs.nocobase.com/handbook/workflow-response-message)

## Mudanças Incompatíveis

### APIs com Nomes Conflitantes

Nesta mudança de kernel, algumas APIs da nova versão entram em conflito com os nomes da versão antiga. Essas APIs conflitantes da versão antiga serão mantidas nesta versão, mas serão uniformemente sufixadas com `_deprecated`.


| API Original                         | API Obsoleta                     | Nova API                                                                                                    |
| ------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                   | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                        | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                   | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager                 | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Se você está usando as APIs relacionadas acima, você tem duas maneiras de mudar:

* Substituição simples: Substitua a API original pela que tem o sufixo `_deprecated`, por exemplo, substitua `useCollection()` por `useRecord_deprecated()`.
* Use a nova API de acordo com a nova documentação: Embora os nomes das novas APIs sejam os mesmos das APIs antigas, há diferenças nos parâmetros e valores de retorno. Você precisa consultar a nova documentação

para ajustar o código correspondente.

### Outras APIs que Requerem Ajuste

* `registerTemplate()` mudou para `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` mudou para `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` mudou para `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` mudou para `useCollectionManager_deprecated()`
* Estender coleções usando `ExtendCollectionsProvider`
* `RecordProvider` requer a passagem explícita do parâmetro parent quando necessário

## Exemplos de Mudança

### Extensão de Template de Coleção

#### Definição

Anteriormente definido como um objeto, agora precisa ser alterado para uma classe. Por exemplo:

Antes:

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

Agora:

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

As propriedades do objeto original tornam-se membros da classe.

#### Registro

Anteriormente registrado através de `registerTemplate`, agora precisa ser registrado através do `dataSourceManager.addCollectionTemplates` do plugin. Por exemplo:

Antes:

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Agora:

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Extensão de Interface de Campo

#### Definição

Anteriormente definido como um objeto, agora precisa ser alterado para uma classe. Por exemplo:

Antes:

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

Agora:

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

As propriedades do objeto original tornam-se membros da classe.

#### Registro

Anteriormente registrado através de `registerField`, agora precisa ser registrado através do `dataSourceManager.addFieldInterfaces` do plugin e não requer a passagem de `CollectionManagerProvider` novamente. Por exemplo:

Antes:

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

Agora:

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Extensão de Grupo de Interface de Campo

Anteriormente registrado através de `registerGroup`, agora precisa ser registrado através do `dataSourceManager.addFieldInterfaceGroups` do plugin. Por exemplo:

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` Mudou para `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Estender Coleções, Use `ExtendCollectionsProvider` em Vez de `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Mudanças no RecordProvider

Anteriormente, quando a propriedade parent não era passada, o valor do último RecordProvider era automaticamente recuperado como parent. Agora, o parent precisa ser passado explicitamente, e quando o parent não é passado, o valor do parent será undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Se não houver bagagem histórica, você também pode usar diretamente CollectionRecordProvider para substituir.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Diferença Entre RecordProvider e CollectionRecordProvider
>
> * RecordProvider está obsoleto e será removido no futuro.
> * RecordProvider carrega o antigo RecordContext, enquanto CollectionRecordProvider não.
