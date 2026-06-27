---
title: "Atualizações Semanais｜Adicionar Guardas de Compatibilidade de Comandos de API Dinâmica"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 28 de maio a 04 de junho de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Data de lançamento: 03/06/2026*

### 🚀 Melhorias

- **[client]** Suporte aprimorado de preenchimento automático para algumas funções RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[undefined]** Documentação do Embed NocoBase atualizada para o plugin de código aberto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referência: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrigido o problema em que a página travava ao definir valores de campo para um subformulário. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Corrigido um problema em que o pop-up exibia dados de UI desatualizados após alternar o interruptor do modo de configuração de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
- **[client]**

  - Corrigido comportamento incorreto da regra de vinculação de ação de registro em blocos de tabela. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Corrigido o problema em que os dados do campo de relação selecionados não eram exibidos no celular. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Corrigido o problema em que os campos se tornavam somente leitura quando exibidos novamente após serem ocultados por regras de vinculação. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Corrigido o template nginx para servir assets `.mjs` com o tipo MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[database]** Corrigido um problema em que a importação de valores de senha numéricos podia falhar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[AI employees]** Corrigida a validação da URL base do provedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
- **[Flow engine]**

  - Corrigido um problema em que arrastar abas de pop-up para reordená-las não funcionava. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Corrigido um problema em que modificar um bloco após duplicar seu template podia afetar inadvertidamente o conteúdo do bloco original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Notification: In-app message]** Corrigido um risco de injeção de SQL no filtro de timestamp do canal de notificação no aplicativo. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[License settings]** Corrigido o problema em que a página de configurações de licença podia travar por muito tempo quando a verificação de login do pkg estava lenta ou inacessível. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Workflow: JavaScript]** Esclarecido que o modo de suporte do módulo JavaScript do Workflow é inseguro e não é um limite de permissão. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referência: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Corrigidas permissões incompletas no primeiro login quando uma função de união era a função padrão. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[File manager]** Corrigida a validação do caminho de armazenamento de arquivo local para evitar que caminhos inseguros escapem da raiz de armazenamento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Password policy]** Corrigido um problema em que a validação da política de senha podia falhar para valores de senha numéricos. por @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Data de lançamento: 29/05/2026*

### 🚀 Melhorias

- **[AI employees]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global em formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock

### 🐛 Correções de Bugs

- **[client]** Corrigida a largura do badge na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[AI employees]** Corrigido o problema em que os botões de atalho de IA obtinham um contexto de bloco vazio após a remoção de blocos de tabela referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[Migration manager]** Corrigidos os diffs de migração do PostgreSQL para que colunas herdadas filhas não sejam descartadas quando uma coluna local se torna herdada. por @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Data de lançamento: 28/05/2026*

### 🐛 Correções de Bugs

* **[ai]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de chamada de ferramenta do modelo Ollama e evitar lançamentos upstream afetados. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
* **[flow-engine]** Corrigido o nível de log incorreto do frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
* **[Collection: Tree]** Corrigidas mensagens de erro pouco claras quando as consultas falhavam devido a relações pai-filho circulares em dados de árvore. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
* **[AI: Knowledge base]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de chamada de ferramenta do modelo Ollama e evitar lançamentos upstream afetados. por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Data de lançamento: 03/06/2026*

### 🚀 Melhorias

- **[Workflow: Approval]** Regras de validação ajustadas para configurações de gatilho e nó de aprovação para garantir que campos relacionados à UI existam. por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os dados do campo de relação selecionados não eram exibidos no celular. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
- **[client-v2]**

  - Corrigidos erros ao salvar regras de vinculação de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Corrigido espaçamento excessivo acima dos blocos em páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
- **[flow-engine]** Corrigido o problema em que a página travava ao definir valores de campo para um subformulário. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
- **[AI employees]**

  - Corrigida a validação da URL base do provedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Corrigidos erros `ctx.get` em nós de workflow de funcionários de IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Notification: In-app message]** Corrigido um risco de injeção de SQL no filtro de timestamp do canal de notificação no aplicativo. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Action: Duplicate record]** Corrigido o problema em que o estado do botão não era redefinido quando o envio do registro duplicado falhava. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Calendar]** Corrigido o problema em que as cores dos eventos do calendário não eram renderizadas a partir do campo de cor configurado em páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Flow engine]**

  - Corrigido um problema em que modificar um bloco após duplicar seu template podia afetar inadvertidamente o conteúdo do bloco original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
  - Corrigido um problema em que arrastar abas de pop-up para reordená-las não funcionava. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Data de lançamento: 02/06/2026*

### 🎉 Novos Recursos

- **[client-v2]** Adicionado `TypedVariableInput` para que os campos de porta SMTP e modo seguro do plugin de e-mail v2 possam aceitar uma constante tipada ou uma variável `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
- **[Access control]** Migradas as páginas de configurações de Usuários e Funções e Permissões para v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Melhorias

- **[undefined]** Documentação do Embed NocoBase atualizada para o plugin de código aberto ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referência: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Suporte aprimorado de preenchimento automático para algumas funções RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[cli]** Melhoradas as orientações de inicialização e auto-atualização ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que os blocos podiam ser exibidos incorretamente como excluídos após atualizar a página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - Corrigido comportamento incorreto da regra de vinculação de ação de registro em bloco de tabela. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - (regra de vinculação) corrigido o problema em que os campos se tornavam somente leitura quando exibidos após serem ocultados ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Corrigido o template nginx para servir assets `.mjs` com o tipo MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[database]** Corrigido um problema em que a importação de valores de senha numéricos podia falhar ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[flow-engine]**

  - Corrigido um problema em que o pop-up exibia dados de UI desatualizados após alternar o interruptor do modo de configuração de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
  - Corrigido o problema em que a pesquisa de campo era limpa ao passar o mouse sobre campos de associação ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
- **[client-v2]** preservar valores de campo atribuídos ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
- **[File manager]** Corrigida a validação do caminho de armazenamento de arquivo local para evitar que caminhos inseguros escapem da raiz de armazenamento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Block: Gantt]** Melhorado o posicionamento do tooltip do gantt para evitar cobrir as barras de tarefas e alinhadas as etiquetas das tarefas consistentemente dentro e fora das barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
- **[Access control]** Corrigidas permissões incompletas no primeiro login quando a função de união é a padrão ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[License settings]** Corrigido o problema em que a página de configurações de licença travava por muito tempo quando a verificação de login do pkg estava lenta ou inacessível ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Workflow: JavaScript]** Esclarecido que o modo de suporte do módulo JavaScript do Workflow é inseguro e não é um limite de permissão ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referência: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** Corrigido um problema em que a validação da política de senha podia falhar para valores de senha numéricos por @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Data de lançamento: 30/05/2026*

### 🎉 Novos Recursos

- **[client-v2]** Suporte para atribuição de valor de campo em ações de envio de formulário ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
- **[Office File Previewer]** Migrado o plugin de visualização de arquivos do Office para o cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn

### 🚀 Melhorias

- **[Notification manager]** Migrados os plugins relacionados a notificações para v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]** Corrigida a largura do badge na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
- **[Block: Gantt]** Corrigido o caminho da pasta compartilhada do gantt v2 e adicionado listras zebradas. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[License settings]** Adicionado suporte client-v2 para configurações de licença e injeção de licença comercial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Workflow: Custom action event]** Corrigidas opções duplicadas de "Acionar workflow" em menus de ação de bloco v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
- **[AI employees]** Corrigido o problema em que os botões de atalho de IA obtinham um contexto de bloco vazio após a remoção de blocos de tabela referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
- **[plugin-commercial]** Adicionados componentes de licença comercial client-v2 e entrada de status de licença na barra superior. por @jiannx
- **[Migration manager]** Corrigidos os diffs de migração do PostgreSQL para que colunas herdadas filhas não sejam descartadas quando uma coluna local se torna herdada. por @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Data de lançamento: 29/05/2026*

### 🎉 Novos Recursos

- **[cli]** Adicionadas proteções de compatibilidade de comando de API dinâmica ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
- **[client-v2]**

  - Suporte para páginas v2 incorporadas e páginas de formulário público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Reescrita da página do Gerenciador de Plugins client-v2 em uma UI responsiva baseada em cartões com filtro de categoria, pesquisa, ativar/desativar/remover, Ativação em massa e um modal de detalhes do plugin; também tornar a página do Gerenciador de Plugins client-v1 responsiva em telas estreitas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[Workflow]**

  - Adicionado controle de tempo limite para workflows, suporte para abortar automaticamente a execução com tempo limite excedido se a opção de tempo limite estiver definida ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do início ou de um nó especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[Block: Gantt]** Adicionado suporte v2 para o bloco Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Workflow: Webhook]** Adicionado status de resposta 408 para workflow de webhook com tempo limite excedido (modo síncrono) por @mytharcher
- **[Workflow: Subflow]** Suporte para configuração de tempo limite no workflow por @mytharcher
- **[Auth: OIDC]** Migrado `plugin-auth-oidc` para admin v2; botão de login, formulário de configurações de admin e redirecionamento automático SSO agora funcionam sob v2. por @Molunerfinn
- **[Workflow: Approval]** Suporte para configuração de tempo limite no workflow por @mytharcher
- **[Auth: LDAP]** Adicionada entrada de cliente v2 para que o autenticador LDAP renderize seu formulário de login e configurações de admin em aplicativos v2. por @Molunerfinn

### 🚀 Melhorias

- **[client-v2]**

  - Adicionada configuração de seleção de linha de tabela v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - Suporte para cores de ação do painel de ações ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Removida a opção Ocultar da configuração do menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Removida a opção Ocultar das configurações do item de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** Fluxo de atualização de aplicativo simplificado ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[AI employees]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global em formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[IP restriction]** Adicionado um cliente v2 para o plugin de restrição de IP. por @Molunerfinn

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrigido o nível de log incorreto do frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corrigidos menus em cascata instáveis ao digitar em caixas de pesquisa ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corrigido um problema em que as regras de vinculação de ação de tabela eram executadas incorretamente após um formulário ser enviado com sucesso em um pop-up. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de execução de ferramenta Ollama e evitar lançamentos upstream afetados ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Corrigidas as abas de login do sub-aplicativo renderizando templates de tradução brutos e impedido que a gaveta de edição do método de autenticação v2 descarte valores de campo ao enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Melhorado o desempenho da página do gerenciador de plugins usando CSS line-clamp em vez de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
- **[client]**

  - Corrigido preservar formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Corrigido estado oculto de sincronização para vinculação de subformulário ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - Aumentado o limite de upload de imagem de entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corrigido valor do pop-up do seletor de data móvel de sincronização ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corrigido o desaparecimento das abas da página após alternar menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - Corrigido problema em que a subtabela no subformulário não podia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Aumentado o limite de upload de imagem de entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
- **[Collection: Tree]** Corrigido o erro causado por dados pai-filho circulares em coleções de árvore ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Workflow: Custom action event]**

  - Corrigido o problema em que botões de ação personalizada de tabela com contexto de múltiplos registros permitiam incorretamente que workflows de contexto personalizado fossem selecionados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
  - Filtrar opções de vinculação de workflow de ação personalizada pela coleção do bloco atual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[File manager]**

  - Mensagens de falha de visualização de PDF melhoradas e requisitos CORS documentados para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Corrigida a normalização de nome de arquivo Unicode durante uploads de arquivo para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[AI: Knowledge base]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de execução de ferramenta Ollama e evitar lançamentos upstream afetados por @cgyrock
- **[Template print]** Corrigidos erros de conversão de PDF de impressão de template que não eram retornados ao cliente corretamente por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Data de lançamento: 29/05/2026*

### 🎉 Novos Recursos

- **[client-v2]**

  - Suporte para atribuição de valor de campo em ações de envio de formulário ([#9570](https://github.com/nocobase/nocobase/pull/9570)) por @katherinehhh
  - Suporte para páginas v2 incorporadas e páginas de formulário público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Adicionado um menu de Segurança e a página de configurações de Política de Token ao admin v2; o centro do usuário agora suporta Alterar senha. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
  - Reescrita da página do Gerenciador de Plugins client-v2 em uma UI responsiva baseada em cartões com filtro de categoria, pesquisa, ativar/desativar/remover, Ativação em massa e um modal de detalhes do plugin; também tornar a página do Gerenciador de Plugins client-v1 responsiva em telas estreitas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[cli]**

  - Adicionadas proteções de compatibilidade de comando de API dinâmica ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
  - Suporte para autenticação básica ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
- **[Office File Previewer]** Migrado o plugin de visualização de arquivos do Office para o cliente v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) por @Molunerfinn
- **[Workflow]**

  - Adicionado controle de tempo limite para workflows, suporte para abortar automaticamente a execução com tempo limite excedido se a opção de tempo limite estiver definida ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do início ou de um nó especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[IdP: OAuth]** Adicionado suporte base para login único de aplicativo em implantações multi-aplicativo ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[Block: Gantt]** Adicionado suporte v2 para o bloco Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[App SSO]** Adicionado um plugin App SSO para login automático entre aplicativos por @2013xile
- **[Password policy]** Migrado plugin-password-policy para o shell admin client-v2 com as páginas de configurações de Política de senha / Usuários bloqueados e aplicação de regras do lado do cliente no formulário de alteração de senha do centro do usuário. por @Molunerfinn
- **[Workflow: Webhook]** Adicionado status de resposta 408 para workflow de webhook com tempo limite excedido (modo síncrono) por @mytharcher
- **[Workflow: Subflow]** Suporte para configuração de tempo limite no workflow por @mytharcher
- **[Auth: OIDC]** Migrado `plugin-auth-oidc` para admin v2; botão de login, formulário de configurações de admin e redirecionamento automático SSO agora funcionam sob v2. por @Molunerfinn
- **[Workflow: Approval]** Suporte para configuração de tempo limite no workflow por @mytharcher
- **[App supervisor]** Adicionadas configurações de App SSO para sub-aplicativos por @2013xile
- **[Auth: LDAP]** Adicionada entrada de cliente v2 para que o autenticador LDAP renderize seu formulário de login e configurações de admin em aplicativos v2. por @Molunerfinn

### 🚀 Melhorias

- **[client-v2]**

  - adicionada configuração de seleção de linha de tabela v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - suporte para cores de ação do painel de ações ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Removida a opção Ocultar da configuração do menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Removida a opção Ocultar das configurações do item de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** Fluxo de atualização de aplicativo simplificado ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Notification manager]** Migrados os plugins relacionados a notificações para v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) por @Molunerfinn
- **[AI employees]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global em formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Workflow]** Refatoradas as verificações de disponibilidade de nó assíncrono do workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher
- **[Data visualization]** Adicionado suporte client v2 para blocos de gráfico. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
- **[IP restriction]** Adicionado um cliente v2 para o plugin de restrição de IP. por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]**

  - Corrigida a largura do badge na barra de navegação superior ([#9607](https://github.com/nocobase/nocobase/pull/9607)) por @zhangzhonghe
  - Aumentado o limite de upload de imagem de entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - Corrigido o desaparecimento das abas da página após alternar menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - Corrigido problema em que a subtabela no subformulário não podia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - Corrigido preservar formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - Corrigido valor do pop-up do seletor de data móvel de sincronização ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corrigido estado oculto de sincronização para vinculação de subformulário ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
- **[flow-engine]**

  - Corrigido o nível de log incorreto do frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corrigidos menus em cascata instáveis ao digitar em caixas de pesquisa ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corrigido um problema em que as regras de vinculação de ação de tabela eram executadas incorretamente após um formulário ser enviado com sucesso em um pop-up. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de execução de ferramenta Ollama e evitar lançamentos upstream afetados ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Corrigidas as abas de login do sub-aplicativo renderizando templates de tradução brutos e impedido que a gaveta de edição do método de autenticação v2 descarte valores de campo ao enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Melhorado o desempenho da página do gerenciador de plugins usando CSS line-clamp em vez de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
  - Corrigidos metadados de idioma do navegador para que a página do aplicativo siga o idioma do aplicativo selecionado em vez de ser marcada como Inglês. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
- **[build]**

  - Assets de texto em builds de servidor agora são copiados como arquivos em vez de serem convertidos em módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  - Corrigida a saída de ofuscação do servidor de plugin para evitar globais de navegador em pacotes de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
- **[Block: Gantt]** Corrigido o caminho da pasta compartilhada do gantt v2 e adicionado listras zebradas. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) por @jiannx
- **[License settings]** Adicionado suporte client-v2 para configurações de licença e injeção de licença comercial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) por @jiannx
- **[Workflow: Custom action event]**

  - Corrigidas opções duplicadas de "Acionar workflow" em menus de ação de bloco v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) por @zhangzhonghe
  - Filtrar opções de vinculação de workflow de ação personalizada pela coleção do bloco atual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
  - Corrigido o problema em que botões de ação personalizada de tabela com contexto de múltiplos registros permitiam incorretamente que workflows de contexto personalizado fossem selecionados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
- **[Collection: Tree]** Corrigido o erro causado por dados pai-filho circulares em coleções de árvore ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[File manager]**

  - Mensagens de falha de visualização de PDF melhoradas e requisitos CORS documentados para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
  - Renderizar visualizações de PDF com segurança usando PDF.js em vez de renderização de PDF bruta baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
  - Corrigida a normalização de nome de arquivo Unicode durante uploads de arquivo para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[AI employees]**

  - Corrigido o problema em que os botões de atalho de IA obtinham um contexto de bloco vazio após a remoção de blocos de tabela referenciados. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) por @cgyrock
  - corrigida descrição incorreta do nome da ferramenta no prompt de contexto de trabalho ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
- **[Workflow: Manual node]** Corrigidos salvamentos temporários para tarefas de workflow manual que não persistiam os valores de formulário enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
- **[plugin-commercial]** Adicionados componentes de licença comercial client-v2 e entrada de status de licença na barra superior. por @jiannx
- **[AI: Knowledge base]** Dependências do LangChain fixadas em versões estáveis para evitar falhas de execução de ferramenta Ollama e evitar lançamentos upstream afetados por @cgyrock
- **[Migration manager]** Corrigidos os diffs de migração do PostgreSQL para que colunas herdadas filhas não sejam descartadas quando uma coluna local se torna herdada. por @hongboji
- **[Template print]** Corrigidos erros de conversão de PDF de impressão de template que não eram retornados ao cliente corretamente por @jiannx
- **[Auth: OIDC]** Corrigido vazamento de token quando callbacks de login SSO recebem uma URL de redirecionamento externa por @2013xile
- **[Workflow: Approval]**

  - Corrigido o problema em que a API `jobs:resume` não é suportada pelo nó de aprovação por @mytharcher
  - Corrigido o cancelamento de aprovação para atualizar dados de negócios enviados, respeitando as permissões de atualização da coleção de origem. por @mytharcher
  - Corrigidas tarefas de aprovação obsoletas quando workflows de aprovação são encerrados por falhas de nós não relacionados à aprovação. por @mytharcher
