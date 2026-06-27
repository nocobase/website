---
title: "NocoBase 0.19: Otimização do processo de aplicação"
description: "NocoBase 0.19 introduz telemetria, backup e restauração de aplicações, otimizações de linha de comando e várias melhorias no kernel para aprimorar os processos de instalação, inicialização e atualização."
---

## Novos recursos

### Telemetria

* Documentação de desenvolvimento: [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* API do Kernel: [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Plugin Prometheus: [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Backup e restauração de aplicativos

* Documentação do plugin: [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Otimizações do kernel

### Otimizações da linha de comando

Para NocoBase 0.19 e superior, os comandos personalizados do plugin devem ser colocados no diretório `src/server/commands/*.ts` do plugin com o seguinte conteúdo:

```
export default function(app) {
  app.command('custom1').action();
}
```

O fluxo de execução da linha de comando:

![O fluxo de execução da linha de comando](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Configuração especial do Command

* `ipc()` Quando o aplicativo está em execução, a linha de comando envia comandos via ipc para operar a instância do aplicativo em execução. Quando `ipc()` não está configurado, uma nova instância do aplicativo será criada e então a operação será executada (não interferirá na instância do aplicativo em execução).
* `auth()` realiza a verificação do banco de dados. Se a configuração do banco de dados estiver incorreta, este comando não será executado.
* `preload()` indica se deve pré-carregar a configuração do aplicativo, ou seja, executar `app.load()`.

Isso pode ser configurado de acordo com o uso real do comando. Exemplos são os seguintes:

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Otimização do processo de instalação

![Otimização do processo de instalação](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Otimização do processo de inicialização

![Otimização do processo de inicialização](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Otimização do processo de atualização

![Otimização do processo de atualização](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

As migrações de atualização são categorizadas em beforeLoad, afterSync e afterLoad:

* beforeLoad: Executado antes do carregamento de cada módulo, dividido em três estágios:
  * Antes de carregar os módulos do kernel
  * Antes de carregar os plugins predefinidos
  * Antes de carregar outros plugins
* afterSync: Executado após a sincronização das configurações da tabela de dados com o banco de dados, dividido em três estágios:
  * Após sincronizar as tabelas do kernel com o banco de dados
  * Após sincronizar as tabelas dos plugins predefinidos com o banco de dados
  * Após sincronizar as tabelas de outros plugins com o banco de dados
* afterLoad: Executado somente após o carregamento completo do aplicativo.

```
export default class extends Migration {
  // Quando realizar a migração
  on = 'beforeLoad';
  // Executar somente quando o seguinte número de versão do aplicativo for atendido.
  appVersion = '<=0.13.0-alpha.5';
  // Executar somente quando o seguinte número de versão do plugin for atendido.
  pluginVersion = '<=0.13.0-alpha.5';
  // Script de atualização.
  async up() {}
}
```

### Adicionar o comando create-migration

Cria um arquivo de migração

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Exemplo

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Um arquivo de migração será gerado em `src/server/migrations` do pacote do plugin `@nocobase/plugin-client` como `20240107173313-update-ui.ts` com o seguinte conteúdo inicial:

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### Diretórios baseados em convenção do plugin

```
|- /plugin-sample-hello
  |- /dist             # Diretório para o plugin compilado
  |- /src              # Código fonte do plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Ponto de entrada do lado do cliente
    |- /locale         # Diretório convencional para arquivos multilíngues compartilhados entre frontend e backend
    |- /swagger        # Diretório convencional para documentação Swagger
    |- /server
      |- collections   # Diretório convencional para configurações de tabela de dados do plugin
      |- commands      # Diretório convencional para comandos personalizados
      |- migrations    # Diretório convencional para arquivos de migração
      |- plugin.ts     # Classe do plugin
      |- index.ts      # Ponto de entrada do lado do servidor
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Otimização do processo de teste

Forneceu métodos `createMockServer()` e `startMockServer()` mais amigáveis para escrever casos de teste:

* `createMockServer()` Cria e inicia rapidamente um aplicativo.
* `startMockServer()` Inicia rapidamente um aplicativo (sem reinstalar).

```
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Mudanças de última hora (Breaking changes)

### Alteração da configuração de Collections, comandos e migrações para diretórios baseados em convenção

Exemplo 1: Collections carregadas por importCollections, o código é deletado diretamente, e o arquivo de configuração das collections deve ser colocado no diretório `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Exemplo 2: Collections carregadas através de this.db.import, o código é deletado diretamente, o arquivo de configuração das collections deve ser colocado no diretório `src/server/collections`

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Exemplo 3: Uma collection definida por db.collection() é recomendada para ser colocada no diretório `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Adicione um novo arquivo `src/server/collections/examples.ts` com o seguinte conteúdo:

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Exemplo 4: Remova db.addMigrations() e coloque o arquivo de migração no diretório `src/server/migrations`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Exemplo 5: Personalizando a linha de comando

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Adicione um novo arquivo `src/server/collections/echo.ts` com o seguinte conteúdo:

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
