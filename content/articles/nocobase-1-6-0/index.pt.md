---
title: "NocoBase v1.6.0 Lançado Oficialmente"
description: "Implantação em modo cluster, otimização de políticas de segurança e Gerenciador de Migração, resultando em uma melhoria abrangente no desempenho, segurança e experiência do usuário."
---

## Novos Recursos

### Modo Cluster

A edição Enterprise suporta implantação em modo cluster por meio de plugins relevantes. Quando o aplicativo é executado em modo cluster, ele pode aproveitar várias instâncias e processamento multi-core para melhorar seu desempenho no tratamento de acesso simultâneo.

![Captura de tela do Modo Cluster](https://static-docs.nocobase.com/20241231010814.png)

Referência: [Implantação - Modo Cluster](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Política de Senha

Uma política de senha é estabelecida para todos os usuários, incluindo regras para complexidade de senha, períodos de validade e estratégias de segurança de login, juntamente com o gerenciamento de contas bloqueadas.

![Captura de tela da Política de Senha](https://static-docs.nocobase.com/202412281329313.png)

Referência: [Política de Senha](https://docs.nocobase.com/handbook/password-policy)

### Política de Token

A Política de Segurança de Token é uma configuração de função projetada para proteger a segurança do sistema e melhorar a experiência do usuário. Ela inclui três itens principais de configuração: "validade da sessão", "período de validade do token" e "limite de renovação de token expirado".

![Captura de tela da Política de Token](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Referência: [Política de Token](https://docs.nocobase.com/handbook/token-policy)

### Restrição de IP

O NocoBase permite que administradores configurem uma lista de permissão ou bloqueio de IP para acesso de usuários, a fim de restringir conexões de rede externas não autorizadas ou bloquear endereços IP maliciosos conhecidos, reduzindo assim os riscos de segurança. Também suporta a consulta de logs de negação de acesso para identificar IPs de risco.

![Captura de tela da Restrição de IP](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Referência: [Restrição de IP](https://docs.nocobase.com/handbook/IP-restriction)

### Variáveis e Segredos

Configuração e gerenciamento centralizados de variáveis de ambiente e segredos são fornecidos para armazenamento de dados confidenciais, reutilização de configuração, isolamento de ambiente e muito mais.

![Captura de tela de Variáveis de Ambiente](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Referência: [Variáveis e Segredos](https://docs.nocobase.com/handbook/environment-variables)

### Gerenciador de Migração

Este recurso permite migrar configurações de aplicativo de um ambiente para outro.

![Captura de tela do Gerenciador de Migração](https://static-docs.nocobase.com/20250107105005.png)

Referência:

- [Gerenciador de Migração](https://docs.nocobase.com/handbook/migration-manager)
- [Gerenciamento de Versão](https://docs.nocobase.com/handbook/release-management)

### Gerenciamento de Rotas

- **Dados de Menu Separados e Renomeados para Rotas**: Os dados do menu foram desacoplados do UI Schema e renomeados como "rotas". Eles são divididos em duas tabelas, desktopRoutes e mobileRoutes, que correspondem às rotas de desktop e mobile, respectivamente.
- **Otimização do Menu Frontend com Suporte a Recolhimento e Responsividade**: O menu frontend agora suporta funcionalidade de recolhimento e design responsivo para uma experiência de usuário aprimorada.

![Captura de tela do Gerenciamento de Rotas](https://static-docs.nocobase.com/20250107115449.png)

Referência: [Rotas](https://docs.nocobase.com/handbook/routes)

### Papéis e Permissões

- Suporta configuração de permissões de ação.
  ![Captura de tela de Papéis e Permissões 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Suporta configuração de permissões de abas.

![Captura de tela de Papéis e Permissões 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Gerenciamento de Usuários

Suporta personalização de formulários de perfil de usuário.

![Captura de tela do Gerenciamento de Usuários](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Workflow

Uma entrada para o centro de tarefas do workflow foi adicionada à barra de ferramentas global, fornecendo notificações em tempo real para nós manuais e tarefas de aprovação pendentes.

![Captura de tela do Workflow](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Workflow: Eventos de Ação Personalizada

Suporta acionamento de eventos de ação personalizada tanto globalmente quanto em ações em lote.

![Captura de tela de Eventos de Ação Personalizada](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Workflow: Aprovação

- Suporta transferência de responsabilidades de aprovação e adição de aprovadores extras.
  ![Captura de tela do Formulário de Aprovação](https://static-docs.nocobase.com/20241226232013.png)
- Permite que aprovadores modifiquem o conteúdo da aplicação ao enviar uma aprovação.
  ![Captura de tela de Modificação de Aprovação](https://static-docs.nocobase.com/20241226232124.png)
- Suporta configuração de um bloco de informações básicas dentro da interface de aprovação.
- Otimiza o estilo e a interação de iniciar aprovações e visualizar tarefas pendentes, com essas melhorias também integradas ao centro de tarefas global do processo.
  ![Captura de tela do Centro de Tarefas de Aprovação](https://static-docs.nocobase.com/20250310161203.png)
- Não distingue mais o local onde a aprovação é iniciada; o bloco do centro de aprovação pode iniciar e processar todas as aprovações.

### Workflow: Nó de Mapeamento de Variáveis JSON

Um novo nó dedicado foi adicionado para mapear dados JSON de resultados de nós upstream em variáveis.

![Captura de tela do Nó de Mapeamento de Variáveis JSON](https://static-docs.nocobase.com/20250113173635.png)

Referência: [Mapeamento de Variáveis JSON](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Aprimoramentos de Capacidade e Exemplos de Plugins


| Extensão                         | Exemplo de Plugin                                                  |
| --------------------------------- | --------------------------------------------------------------- |
| Campos Predefinidos Personalizados da Fonte de Dados  | @nocobase-sample/plugin-data-source-main-custom-preset-fields   |
| Campo de Cor de Registro do Calendário     | @nocobase-sample/plugin-calendar-register-color-field           |
| Campo de Título de Registro do Calendário     | @nocobase-sample/plugin-calendar-register-title-field           |
| Campo de Expressão de Registro de Fórmula | @nocobase-sample/plugin-field-formula-register-expression-field |
| Campo de Grupo de Registro do Kanban       | @nocobase-sample/plugin-kanban-register-group-field             |
| Operador de Filtro de Registro          | @nocobase-sample/plugin-register-filter-operator                |
| Extensão de Armazenamento de Arquivos            | @nocobase-sample/plugin-file-storage-demo                       |

## Mudanças de Quebra

### Atualização para a Política de Token

Na versão 1.6, uma nova [Política de Token](https://docs.nocobase.com/handbook/token-policy) foi introduzida. Quando a autenticação falha, um erro 401 será retornado junto com um redirecionamento para a página de login. Esse comportamento difere das versões anteriores. Para ignorar a verificação, consulte os seguintes exemplos:

Requisição Frontend:

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

Middleware Backend:

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### Função de Teste Unitário agent.login Alterada de Síncrona para Assíncrona

Devido a várias operações assíncronas necessárias no processo de autenticação, a função de teste login agora é assíncrona. Exemplo:

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### Nova API de Extensão para Itens de Configurações do Centro do Usuário

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Exemplo:

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
