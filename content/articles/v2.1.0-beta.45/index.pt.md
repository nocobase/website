---
title: "NocoBase v2.1.0-beta.45: Aplicativo gerenciado e gerenciamento de plugins aprimorados na CLI"
description: "Nota de lançamento da v2.1.0-beta.45"
---

### 🎉 Novas Funcionalidades

- **[undefined]** Melhorias no gerenciamento de aplicativos gerenciados e plugins na CLI, incluindo tratamento de ambiente com reconhecimento de appPath, importação de plugins, sincronização de plugins licenciados e atualizações na documentação relacionada. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
  Referência: [Documentação da CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Guia rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloco: Gantt]** Adicionada uma opção para blocos Gantt focarem no dia atual por padrão. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
- **[IdP: OAuth]** Adicionado suporte base para login único (SSO) de aplicativos em implantações multi-aplicativo. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[App SSO]** Adicionado um plugin App SSO para login automático entre aplicações. por @2013xile
- **[Multi-espaço]** Adicionado suporte ao cliente v2 para o plugin multi-espaço, incluindo alternância e gerenciamento de espaços. por @jiannx
- **[Supervisor de aplicativos]** Adicionadas configurações de App SSO para sub-aplicações. por @2013xile

### 🚀 Melhorias

- **[servidor]** O cliente moderno agora é servido sob `/v/` em vez de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
- **[ai]** Atualizada a versão do `xlsx` para evitar problemas de segurança. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) por @mytharcher
- **[Filtro multi-palavra-chave]** Migrado o filtro multi-palavra-chave para o cliente v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Workflow]** Removido o acoplamento de transação do histórico de workflow da execução do workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
- **[Modelos de UI]** Migrados os modelos de UI para o cliente v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Departamentos]** Adicionada uma página de configurações v2 para gerenciar departamentos, membros de departamento e atribuições de usuário a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Auth: SAML 2.0]** Os redirecionamentos de login SAML/CAS agora seguem o prefixo do cliente moderno. por @Molunerfinn
- **[Ação: Importar registros Pro]** Atualizada a versão do `xlsx` para evitar problemas de segurança. por @mytharcher
- **[Workflow: Subfluxo]** Removido o acoplamento de transação do histórico de workflow das instruções de subfluxo. por @mytharcher
- **[Auth: OIDC]** O redirecionamento de login OIDC agora segue o prefixo do cliente moderno. por @Molunerfinn
- **[Workflow: Aprovação]** Removido o acoplamento de transação do histórico de workflow das instruções de workflow de aprovação. por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que campos vinculados ocultos ainda mantinham valores antigos. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) por @zhangzhonghe
  - Corrigido o erro ao salvar um campo de relação em árvore em um modelo de formulário referenciado. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) por @zhangzhonghe
- **[cliente-v2]**
  - Corrigido o problema em que colunas da tabela v2 se tornavam invisíveis quando a largura personalizada da coluna era definida como 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Ajustados todos os seletores de campo de relação para limitar os campos de associação a no máximo dois níveis. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
- **[Ação: Importar registros]** Corrigido o problema de registros importados receberem valores de classificação duplicados. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) por @2013xile
- **[Mecanismo de fluxo]** Corrigido um problema em que converter um bloco de modelo de referência para cópia resultava em erro. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) por @gchust
- **[Coleção: SQL]** Bloqueado o acesso de coleções SQL a metadados PostgreSQL sensíveis. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Workflow]** Corrigida a execução duplicada de workflow em workers concorrentes. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) por @mytharcher
- **[Bloco: Mapa]** Corrigido um problema em que os valores do campo de mapa eram convertidos incorretamente ao alternar entre os modos de exibição de texto e mapa em páginas de detalhes. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) por @hongboji
- **[Workflow: Evento de ação personalizada]** Corrigida a ausência da ação de gatilho de workflow na lista de botões do painel de ações da bancada de trabalho. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
- **[Funcionários de IA]**
  - Os nós de funcionários de IA em workflows agora podem usar o modelo padrão. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Erros brutos do provedor de LLM foram ocultados das mensagens do frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) por @cgyrock
- **[Gerenciador de fonte de dados]** Corrigida a localização de campos multi-espaço no gerenciador de fonte de dados v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
- **[Fonte de dados: API REST]** Corrigidas falhas de compilação na declaração do plugin de fonte de dados REST API causadas por incompatibilidade nas declarações de tipo do cliente-v2 do gerenciador de fonte de dados. por @katherinehhh
- **[Política de senha]** Corrigidas falhas de login que mascaravam o erro real com "argumento #1 tipo não suportado undefined" quando o erro subjacente não possui código de status. por @Molunerfinn
- **[Workflow: Aprovação]** Corrigido o problema em que títulos de campo personalizados não eram exibidos nos detalhes do formulário de aprovação. por @zhangzhonghe
