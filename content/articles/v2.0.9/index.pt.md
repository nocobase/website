---
title: "NocoBase v2.0.9: Corrige o problema em que o componente CollectionField não renderizava no componente DefaultValue"
description: "Nota de lançamento da v2.0.9"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que o componente CollectionField não era renderizado no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Corrigido um problema em que o bloco de dados não era atualizado ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

- **[banco de dados]** Corrigida falha na verificação de expressão regular personalizada de campo na v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[mecanismo de fluxo]** Corrigido um problema em que ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[Fluxo de Trabalho: Aprovação]** Adicionado parâmetro ausente para evitar que associações não sejam atualizadas ao enviar nova aprovação por @mytharcher
