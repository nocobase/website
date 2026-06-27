---
title: "NocoBase v1.7.0-beta.19: Suporte a variáveis no lado esquerdo das condições das regras de vinculação"
description: "Nota de lançamento da v1.7.0-beta.19"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte a variáveis no lado esquerdo das condições de regras de vinculação ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh

- **[Workflow: nó de cálculo de data]** Adicionada função `changeTimezone` para alterar o valor do fuso horário para formatação por @mytharcher

### 🚀 Melhorias

- **[client]**
  - suporte a registros de tabela selecionados em requisição personalizada ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh

  - Adicionada API de atraso para cenários que abrem sem atraso ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

### 🐛 Correções de Bugs

- **[database]** Corrigido erro de build do CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

- **[client]**
  - Corrigido erro ao passar o mouse sobre bloco de template referenciado na configuração do nó de aprovação ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - Problema de exibição das descrições de campo no workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh

  - Corrigido locale para componente de upload ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - Campo de associação personalizado não exibindo configurações do componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - Regras de vinculação com compatibilidade para dados legados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh

  - Carregamento preguiçoso de componente de UI ausente causando erro de renderização ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Adicionado componente nativo Password ao HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

- **[Workflow: nó manual]** Corrigida constante de status de tarefa manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Ação: Importar registros]** corrigido erro ao importar campo de hora xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Workflow: evento de ação personalizada]** Corrigidos casos de teste por @mytharcher

- **[Gerenciador de backup]** erro de timeout ao tentar restaurar um backup não criptografado com senha por @gchust
