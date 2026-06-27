---
title: "NocoBase v2.0.0-alpha.64: Suporte ao modelo Gemini-3 com assinatura de pensamento de chamada de função"
description: "Nota de lançamento da v2.0.0-alpha.64"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Suporte ao modelo Gemini-3 com assinatura de pensamento de chamada de função ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Melhorias

- **[Funcionários de IA]**
  - Melhoria no tratamento de erros de IA para serviços e modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang

  - Suporte à edição personalizada e atualização automática de prompts do sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang

- **[Gerenciador de arquivos]** Adicionar opções de requisição para buscar arquivos OSS no lado do servidor, caso parâmetros ou cabeçalhos adicionais sejam necessários ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Correções de Bugs

- **[logger]** Corrigir descarte de informações extras de erro ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock

- **[cliente]**
  - Corrigido um problema em que um campo de associação ainda podia abrir um popup após alternar do componente seletor de registro para o componente de seleção. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust

  - Corrigido o problema em que as regras de vinculação não eram reexecutadas após alterar a paginação para bloco de detalhes, bloco de formulário de edição e bloco de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust

  - Corrigido um problema em que os campos configurados de sub-tabela/sub-formulário não eram exibidos durante a alternância de componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust

- **[Workflow]**
  - Corrigir problema de regra de vinculação no bloco de detalhes do nó CC do workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe

  - Corrigir o problema de falha na página de execução quando o workflow é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher

- **[Controle de acesso]** Corrigir um problema em que a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
