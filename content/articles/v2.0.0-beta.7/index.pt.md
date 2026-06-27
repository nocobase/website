---
title: "NocoBase v2.0.0-beta.7: adicionar controle de concorrência em nível de processo para o gerenciador de tarefas base"
description: "Nota de lançamento da v2.0.0-beta.7"
---

### 🎉 Novas Funcionalidades

- **[test]** Adiciona controle de concorrência em nível de processo para o gerenciador de tarefas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

- **[AI employees]** Suporte ao modelo Gemini-3 com assinatura de pensamento de chamada de função ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Melhorias

- **[flow-engine]** Adiciona `rowOrder` ao GridModel para garantir ordenação consistente de linhas ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe

- **[AI employees]**
  - Suporte à edição personalizada e atualização automática de prompts do sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang

  - Melhora o tratamento de erros de IA para serviços e modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang

- **[Gerenciador de arquivos]** Adiciona opções de requisição para buscar arquivos OSS no lado do servidor, caso parâmetros ou cabeçalhos adicionais sejam necessários ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema em que um campo de associação ainda podia abrir um popup após alternar do componente seletor de registro para o componente de seleção. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust

  - Corrigido o problema em que as regras de vinculação não eram reexecutadas após alterar a paginação para blocos de detalhes, bloco de formulário de edição e bloco de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust

  - Corrigido um problema em que os campos configurados de sub-tabela/sub-formulário não eram exibidos durante a alternância de componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust

- **[logger]** Corrige a descarte de informações extras de erro ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[Bloco: template (obsoleto)]** Corrigido um problema em que a página de edição de templates herdados (v1) não podia ser acessada. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust

- **[Workflow]**
  - Adiciona ID de instância ao ID Snowflake dos jobs, para evitar conflitos de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

  - Corrige problema de regra de vinculação no bloco de detalhes do nó CC do workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Corrige o problema de falha na página de execução quando o workflow é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Controle de acesso]** Corrige um problema em que a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile

- **[Fonte de dados: API REST]** Adiciona tolerância a falhas para o contexto de requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher
