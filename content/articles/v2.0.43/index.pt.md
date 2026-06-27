---
title: "NocoBase v2.0.43: Melhoria no desempenho da lista de execução"
description: "Nota de lançamento da v2.0.43"
---

### 🚀 Melhorias

- **[Workflow]** Melhora o desempenho da lista de execução ([#9214](https://github.com/nocobase/nocobase/pull/9214)) por @mytharcher

- **[Workflow: Aprovação]** Adiciona índices nas colunas de registros de aprovação para melhorar o desempenho nas ações de listagem e envio por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Corrigido um problema em que campos decimais com validação podiam rejeitar entradas numéricas válidas ([#9204](https://github.com/nocobase/nocobase/pull/9204)) por @2013xile

- **[Usuários]** Corrigido o problema em que campos configurados dinamicamente em Editar perfil não carregavam os dados de usuário mais recentes ([#9205](https://github.com/nocobase/nocobase/pull/9205)) por @2013xile

- **[Funcionários de IA]** Corrigido o problema de valores ausentes no campo de URL para anexos em seleções de formulário de funcionários de IA. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) por @cgyrock

- **[Gerenciador de fontes de dados]** Corrigido um problema em que a ordenação agrupada em campos de ordenação de fontes de dados externas não podia ser limpa ([#9203](https://github.com/nocobase/nocobase/pull/9203)) por @2013xile
