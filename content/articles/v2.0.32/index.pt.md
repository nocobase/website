---
title: "NocoBase v2.0.32: Adicionar índice ao README"
description: "Nota de lançamento da v2.0.32"
---

### 🚀 Melhorias

- **[indefinido]** Adicionar sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

### 🐛 Correções de Bugs

- **[cliente]**
  - campo de relação de subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Corrigido o problema em que ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

- **[servidor]** Adicionar verificação de serviço ativo para evitar que o status do aplicativo seja atualizado por uma instância não ativa ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

- **[Funcionários de IA]**
  - Corrigido o problema ao usar modelos deepseek ou minmax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock

  - Corrigido o problema em que abortar o raciocínio dos funcionários de IA causava a queda do serviço ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

- **[Fluxo de trabalho: nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do fluxo de trabalho para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta e adicionado registro de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Campo de coleção: Ordenação]** correção(campo-ordenação): evitar falha quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Bloco: GridCard]** Corrigido o problema de o botão não ser atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Fluxo de trabalho: Aprovação]**
  - Adicionar tolerância a falhas quando o fluxo de trabalho é excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher

  - Adicionar tolerância a falhas para quando não há `latestRound` por @mytharcher
