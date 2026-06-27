---
title: "NocoBase v2.2.0-beta.6: Adicionar suporte para layout móvel"
description: "Nota de lançamento da v2.2.0-beta.6"
---

### 🎉 Novas Funcionalidades

- **[cli]** Suporte a scripts de hook de instalação ([#9824](https://github.com/nocobase/nocobase/pull/9824)) por @chenos
- **[Layout da interface]** Adicionado suporte para layout mobile ([#9641](https://github.com/nocobase/nocobase/pull/9641)) por @zhangzhonghe
- **[Gerenciador de backup]** Suporte a backup e restauração para KingBase como banco de dados principal ([#9791](https://github.com/nocobase/nocobase/pull/9791)) por @2013xile
- **[Multi-portal]** Adicionado plugin Multi-Portal por @zhangzhonghe
- **[Gerenciador de migração]** Suporte a migrações para KingBase como banco de dados principal. por @2013xile

### 🚀 Melhorias

- **[client-v2]**

  - Regras de validação em nível de campo agora são exibidas como regras herdadas somente leitura nas configurações de validação de campo da interface. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) por @katherinehhh
  - Adicionada opção de valor de substituição para configurações de valor de campo. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) por @gchust
- **[undefined]** Melhorias na recuperação e documentação da base de conhecimento de IA. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) por @cgyrock
- **[Mecanismo de fluxo]**

  - O bloco atual agora é adicionado ao contexto do usuário por padrão ao construir funcionários de IA usando a API Flow Surface. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) por @gchust
  - Abertos globais do navegador runjs. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) por @gchust
- **[Workflow]** Estabilizado teste de opções de atualização ([#9773](https://github.com/nocobase/nocobase/pull/9773)) por @mytharcher
- **[Controle de acesso]** Alinhadas as páginas de configurações de Usuários e Permissões v2 com o comportamento da v1, incluindo totais de paginação, comportamento da árvore de departamentos, estilos selecionados e rolagem interna do painel de permissões. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) por @jiannx
- **[Gerenciador de backup]** Tabelas cujo `dataCategory` da coleção está marcado como `'runtime'` agora são excluídas automaticamente dos backups. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) por @cgyrock
- **[IA: Base de conhecimento]** Melhorias na segmentação de documentos da base de conhecimento de IA, gerenciamento de segmentos, testes de acerto e suporte a nós de workflow de documentos. por @cgyrock

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigido problema em que o bloco não era atualizado após alterações nas configurações dos blocos. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) por @gchust
  - Corrigido problema em que botões de gatilho de workflow de ação personalizada enviavam JSON de contexto personalizado sob uma propriedade `values` extra ou como uma string serializada. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) por @mytharcher
  - Corrigido problema em que configurar um valor de campo de associação como valor fixo ou valor padrão não surtia efeito. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) por @gchust
  - Corrigido problema em que fluxos de eventos em colunas de subtabela eram executados incorretamente. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) por @gchust
  - Removido `updateAssociationValues` inesperado de campos de associação ([#9812](https://github.com/nocobase/nocobase/pull/9812)) por @katherinehhh
  - Corrigido problema em que o envio de formulário exibia uma mensagem incorreta quando um subformulário continha uma subtabela. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) por @gchust
- **[ai]**

  - Corrigidas resoluções de dependência LangChain incompatíveis para plugins de IA. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) por @cgyrock
  - Bloqueado `@langchain/openai` para atualizações de nível de patch para pacotes de IA. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) por @cgyrock
- **[app]** Ignorado `currentScript` não relacionado ao inferir caminho público do plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) por @chenos
- **[auth]** Dados de senha criptografada não são mais incluídos nas respostas de status de login ([#9836](https://github.com/nocobase/nocobase/pull/9836)) por @2013xile
- **[Bloco: Gantt]** Corrigido problema em que as configurações de template do popup de tarefa do Gantt não eram aplicadas ou limpas corretamente. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) por @jiannx
- **[Ação: Imprimir]** Corrigida impressão de bloco de detalhes v2 para que blocos de detalhes vazios não imprimam mais a página inteira. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) por @katherinehhh
- **[Templates de interface]** Corrigido contexto padrão incorreto para `ctx.openview`. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) por @gchust
- **[Gerenciador de arquivos]** Corrigidos erros 404 ao enviar arquivos para campos de URL de anexo em fontes de dados externas ([#9809](https://github.com/nocobase/nocobase/pull/9809)) por @2013xile
- **[Ação: Solicitação personalizada]** Corrigido problema em que ações de solicitação personalizada V2 exibiam um erro extra quando as configurações de solicitação não estavam configuradas. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) por @katherinehhh
- **[Workflow]** Corrigida recuperação do despachante de workflow após erros inesperados de despacho. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) por @mytharcher
- **[Funcionários de IA]** Corrigido gatilho de tarefa de atalho de funcionário de IA para que anexos do contexto de trabalho atual sejam incluídos ao executar uma tarefa a partir do perfil de atalho. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) por @cgyrock
- **[Fonte de dados: NocoBase externo]** Ações de upload e armazenamento de arquivos de fonte de dados externa NocoBase são proxyadas pela fonte de dados de upload por @2013xile
- **[IA: Base de conhecimento]**

  - Corrigidas resoluções de dependência LangChain incompatíveis para o plugin de base de conhecimento de IA. por @cgyrock
  - Corrigidas falhas pouco claras ao ativar o plugin de base de conhecimento de IA sem o plugin de IA disponível. por @cgyrock
- **[Multi-espaço]** Corrigido bloqueio de solicitações de recuperação de autenticação por cabeçalhos de multi-espaço obsoletos. por @jiannx
- **[Workflow: Subfluxo]** Corrigidos subfluxos assíncronos para que workflows pai possam retomar após reinicialização do worker ou perda de mapeamento de eventos em memória. por @mytharcher
- **[Workflow: Aprovação]** Corrigido problema em que aprovações relacionadas não carregam ou atualizam corretamente por @zhangzhonghe
- **[Supervisor de aplicativo]** Corrigida falha quando respostas de proxy WebSocket remoto falham por @2013xile
