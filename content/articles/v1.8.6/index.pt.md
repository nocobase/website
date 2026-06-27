---
title: "NocoBase v1.8.6: Correções de Bugs"
description: "Nota de Lançamento da v1.8.6"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige erro: Não é possível resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

  - Problema de exibição para campos de associação em regras de vínculo ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh

- **[banco de dados]** Corrigido erro ao ativar paginação simples para tabelas de fontes de dados externas ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[Campo de coleção: Ordenação]** seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Fluxo de trabalho: Aprovação]**
  - Adiciona tolerância a falhas para aprovação excluída na lista de registros por @mytharcher

  - Corrige múltiplos níveis de associações ao enviar aprovação por @mytharcher

  - Corrige exceção ao excluir registro por @mytharcher
