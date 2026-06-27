---
title: "NocoBase v2.1.0-alpha.46: Páginas de configuração de Usuários e Funções e Permissões migradas para v2"
description: "Nota de lançamento da v2.1.0-alpha.46"
---

### 🎉 Novas Funcionalidades

- **[client-v2]** Adicionado `TypedVariableInput` para que os campos de porta SMTP e modo seguro no plugin de e-mail v2 possam aceitar constantes tipadas ou variáveis `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn
- **[Controle de acesso]** Migradas as páginas de configuração de Usuários e Funções e Permissões para a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Melhorias

- **[servidor]** O cliente moderno agora é servido em `/v/` em vez de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
- **[ai]** Atualizada a biblioteca `xlsx` para evitar problemas de segurança. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) por @mytharcher
- **[cliente]** Melhorado o suporte a autocompletar para algumas funções RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[cli]** Melhorada a orientação para inicialização e auto-atualização. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos
- **[indefinido]** Atualizada a documentação do Embed NocoBase para o plugin de código aberto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referência: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Departamentos]** Adicionada uma página de configuração v2 para gerenciar departamentos, membros de departamentos e atribuições de usuários a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Auth: SAML 2.0]** Redirecionamentos de login SAML/CAS agora seguem o prefixo do cliente moderno. por @Molunerfinn
- **[Ação: Importar registros Pro]** Atualizada a biblioteca `xlsx` para evitar problemas de segurança. por @mytharcher
- **[Auth: OIDC]** Redirecionamentos de login OIDC agora seguem o prefixo do cliente moderno. por @Molunerfinn
- **[Workflow: Aprovação]** Ajustadas as regras de validação para configurações de gatilho e nó de aprovação para garantir que campos relacionados à interface existam. por @mytharcher

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigido o problema em que as colunas da tabela v2 ficavam invisíveis quando a largura personalizada da coluna era definida como 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Ajustados todos os seletores de campos de relação para limitar os campos de associação a no máximo dois níveis. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
  - Corrigidos erros ao salvar regras de vinculação de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Corrigido o espaçamento excessivo acima dos blocos em páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
  - Preservados os valores de campo atribuídos. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh
- **[cliente]**

  - Corrigido o erro ao salvar um campo de relação em árvore em um template de formulário referenciado. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) por @zhangzhonghe
  - Corrigido o problema em que os dados do campo de relação selecionado não eram exibidos no celular. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Corrigido o problema em que blocos podiam aparecer incorretamente como excluídos após atualizar a página. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe
  - Corrigido o comportamento incorreto das regras de vinculação de ação de registro em blocos de tabela. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Corrigido o problema em que os campos se tornavam somente leitura quando exibidos novamente após serem ocultados por regras de vinculação. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[flow-engine]**

  - Corrigido o problema em que a página travava ao definir valores de campo para um subformulário. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Corrigido um problema em que o pop-up exibia dados de interface desatualizados após alternar o interruptor do modo de configuração de interface. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
  - Corrigido o problema em que a pesquisa de campo era limpa ao passar o mouse sobre campos de associação. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe
- **[cli]** Corrigido o template nginx para servir assets `.mjs` com o tipo MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[banco de dados]** Corrigido um problema em que a importação de valores de senha numéricos podia falhar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[Coleção: SQL]**

  - Bloqueado o acesso da Coleção SQL a metadados PostgreSQL sensíveis. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigida a localização de campos com múltiplos espaços no gerenciador de fonte de dados v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
- **[Funcionários de IA]**

  - Ocultados erros brutos do provedor LLM das mensagens do frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) por @cgyrock
  - Nós de funcionário de IA no Workflow agora podem usar o modelo padrão. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Corrigida a validação da URL base do provedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Corrigidos erros de `ctx.get` em nós de funcionário de IA no Workflow. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Ação: Duplicar registro]** Corrigido o problema em que o estado do botão não era redefinido quando a submissão de duplicação de registro falhava. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Workflow: Evento de ação personalizada]** Corrigido o problema em que a ação de gatilho do workflow estava faltando na lista de botões do painel de ações da bancada de trabalho. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
- **[Calendário]** Corrigido o problema em que as cores dos eventos do calendário não eram renderizadas a partir do campo de cor configurado em páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Notificação: Mensagem no aplicativo]** Corrigido um risco de injeção de SQL no filtro de timestamp do canal de notificação no aplicativo. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Mecanismo de fluxo]**

  - Corrigido um problema em que arrastar abas de pop-up para reordená-las não funcionava. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Corrigido um problema em que modificar um bloco após duplicar seu template podia afetar inadvertidamente o conteúdo do bloco original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Configurações de licença]** Corrigido o problema em que a página de configurações de licença podia travar por muito tempo quando a verificação de login do pkg estava lenta ou inacessível. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Controle de acesso]** Corrigidas permissões incompletas no primeiro login quando uma função de união era a função padrão. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Bloco: Gantt]** Melhorado o posicionamento da dica de ferramenta do Gantt para evitar cobrir as barras de tarefa e alinhadas as etiquetas de tarefa de forma consistente dentro e fora das barras. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx
- **[Workflow: JavaScript]** Esclarecido que o modo de suporte ao módulo JavaScript do Workflow não é seguro e não representa um limite de permissão. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referência: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Gerenciador de arquivos]** Corrigida a validação do caminho de armazenamento de arquivos local para evitar que caminhos inseguros escapem da raiz de armazenamento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Política de senha]**

  - Corrigidas falhas de login que mascaravam o erro real com "argument #1 unsupported type undefined" quando o erro subjacente não tinha código de status. por @Molunerfinn
  - Corrigido um problema em que a validação da política de senha podia falhar para valores de senha numéricos. por @2013xile
- **[Fonte de dados: API REST]** Corrigidas falhas de compilação da declaração do plugin de fonte de dados REST API causadas por declarações de tipo incompatíveis do gerenciador de fonte de dados client-v2. por @katherinehhh
