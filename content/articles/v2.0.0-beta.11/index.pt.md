---
title: "NocoBase v2.0.0-beta.11: Editor de texto rico suporta ajuste de tamanho de fonte, ajuste de tamanho de imagem e quebras de linha suaves"
description: "Nota de lançamento da v2.0.0-beta.11"
---

### 🚀 Melhorias

- **[avaliadores]** Atualizada a versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[cliente]** Editor de rich text agora suporta ajuste de tamanho da fonte, ajuste de tamanho da imagem e quebras de linha suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx

- **[Funcionários de IA]** Alterado o resultado do chamador de fluxo de trabalho para `execution.output`. Ao usar explicitamente o nó de saída, o resultado pode ser estável ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Adicionada tolerância a falhas para o esquema de ação, evitando que a página trave ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - Corrigido o desaparecimento da configuração do campo de título após definir a URL do anexo e depois alterar para outro campo no item do formulário ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh

  - Corrigido o campo de título que não atualiza quando o campo de associação é configurado como modo somente leitura no formulário de criação ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh

- **[Mecanismo de fluxo]** Corrigido um problema onde a resolução de variáveis estava incorreta quando filterByTk era um array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust

- **[Impressão de modelo]** Suporte ao campo de espaço por @jiannx
