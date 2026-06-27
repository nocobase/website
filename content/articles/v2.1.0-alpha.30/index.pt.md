---
title: "NocoBase v2.1.0-alpha.30: Corrige o problema de erros ocasionais quando o funcionário de IA usa o modelo DeepSeek v4"
description: "Nota de lançamento da v2.1.0-alpha.30"
---

### 🚀 Melhorias

- **[indefinido]** Adicionar notificação de falha do Feishu para fluxos de trabalho de lançamento manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) por @Molunerfinn
- **[IdP: OAuth]** Sessões OAuth agora usam as mesmas configurações de expiração da política de token do sistema ([#9345](https://github.com/nocobase/nocobase/pull/9345)) por @2013xile

### 🐛 Correções de Bugs

- **[client-v2]** Corrigido o carregamento de plugins remotos para que URLs de plugin que já terminam com `.js` não sejam resolvidos para caminhos duplicados `.js.js`. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) por @Molunerfinn
- **[cli]** Corrigidas opções booleanas do CLI para que possam ser desabilitadas com flags negadas ([#9337](https://github.com/nocobase/nocobase/pull/9337)) por @2013xile
- **[Funcionários de IA]**

  - Corrigido o problema de erros ocasionais ao usar o modelo DeepSeek v4 pelo funcionário de IA ([#9348](https://github.com/nocobase/nocobase/pull/9348)) por @cgyrock
  - Corrigido o problema do nó de funcionário de IA no fluxo de trabalho limpar habilidades após trocar de funcionários de IA ([#9342](https://github.com/nocobase/nocobase/pull/9342)) por @cgyrock
- **[Fonte de dados: Principal]** Evitar travamento quando campos estiverem indefinidos durante o carregamento da coleção ([#9174](https://github.com/nocobase/nocobase/pull/9174)) por @saraTabbane
- **[Modelos de UI]** Corrigido um problema onde a lista de modelos popup falhava ao carregar corretamente os modelos disponíveis. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) por @gchust
- **[Bloco: Kanban]** Corrigidos blocos associados do kanban usando parâmetros de recurso de tempo de execução não resolvidos em contextos de popup ou página secundária. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrigido o problema onde filtros e outros parâmetros de consulta agora funcionam na API de listagem de fluxos de trabalho de aprovação disponíveis por @mytharcher
