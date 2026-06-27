---
title: "NocoBase v1.6.31: Adicionar todas as chaves de localidade en-US ausentes"
description: "Nota de lançamento da v1.6.31"
---

### 🚀 Melhorias

- **[Workflow]** Adicionar todas as chaves de localização en-US que estavam faltando ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Tratar células de string vazias durante a importação de campos para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie

- **[client]**
  - A tabela de registro de seleção de associação não filtrava registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh

  - Dados de associação não eram enviados ao expor campos de associação em subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh

  - Campos de ordenação arrastável não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh

- **[Workflow]** Corrigir limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher

- **[Bloco: Painel de ações]** Ler o nome base da rota a partir do scanner para adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66

- **[Workflow: Nó manual]** Corrigir erro de renderização ao exibir item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher

- **[Workflow: Aprovação]** Corrigir escopo dos responsáveis por delegação e adicionar a outros responsáveis por @mytharcher
