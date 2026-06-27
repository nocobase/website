---
title: "NocoBase v1.3.53: Gancho essencial de exportação"
description: "Nota de lançamento da v1.3.53"
---

### 🚀 Melhorias

- **[client]**
  - Exportar hook essencial ([#5702](https://github.com/nocobase/nocobase/pull/5702)) por @mytharcher

  - Plugin de campo de região da China removido dos plugins integrados ([#5693](https://github.com/nocobase/nocobase/pull/5693)) por @katherinehhh

- **[Workflow: Evento de pré-ação]** Remover log de aviso no interceptador de requisições por @mytharcher

### 🐛 Correções de Bugs

- **[cli]** Modo Daemon não exclui arquivos sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) por @chenos

- **[client]**
  - Corrigir problema em que campos de associação se afetam mutuamente quando múltiplos campos de associação têm a mesma coleção alvo ([#5744](https://github.com/nocobase/nocobase/pull/5744)) por @katherinehhh

  - Corrigir problema de alinhamento de caixas de seleção em subtabela ([#5735](https://github.com/nocobase/nocobase/pull/5735)) por @katherinehhh

  - Corrigir problema de exibição do campo de chave estrangeira no seletor de dados ([#5734](https://github.com/nocobase/nocobase/pull/5734)) por @katherinehhh

  - Corrigir ajuste do feedbackLayout para melhorar as mensagens de validação em subtabela ([#5700](https://github.com/nocobase/nocobase/pull/5700)) por @katherinehhh

- **[server]** Carregar plugins na ordem de dependência ([#5706](https://github.com/nocobase/nocobase/pull/5706)) por @chenos

- **[Bloco: Mapa]** Corrigir erro ao alterar níveis de zoom no Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) por @katherinehhh

- **[Fonte de dados: Principal]** Corrigir inferência do nome do campo em coleção de visualização ([#5729](https://github.com/nocobase/nocobase/pull/5729)) por @chareice

- **[Gerenciador de arquivos]** Quando o endpoint não está vazio, forcePathStyle é definido como true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) por @chenos
