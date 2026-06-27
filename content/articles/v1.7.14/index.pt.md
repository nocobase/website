---
title: "NocoBase v1.7.14: Ocultar automaticamente a barra de ações do bloco de cartão de grade quando vazia"
description: "Nota de lançamento da v1.7.14"
---

### 🚀 Melhorias

- **[client]** Ocultar automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

- **[Verificação]** Remover opções de verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

### 🐛 Correções de Bugs

- **[database]** Suporte a atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[client]**
  - Variáveis de parâmetro de consulta de URL não funcionando no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - Condição de estilo nos campos de coluna de subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - Filtragem através de campos de coleção de relacionamento em formulários de filtro é inválida ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) gera um erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Formulários públicos]** Formulários públicos: Corrigir problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
