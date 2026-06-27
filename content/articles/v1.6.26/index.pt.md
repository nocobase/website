---
title: "NocoBase v1.6.26: Bloco Iframe suporta configuração do atributo allow"
description: "Nota de lançamento da v1.6.26"
---

### 🎉 Novos Recursos

- **[Bloco: iframe]** Bloco iframe agora suporta a configuração do atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

- **[Impressão de modelo]** Recurso: Suporte a opções `{ label, value }` do tipo Select na impressão de modelos. por @sheldon66

### 🐛 Correções de Bugs

- **[client]**
  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - Múltiplas mensagens de erro exibidas quando uma regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - Problema ao configurar regras de vinculação em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - Corrigido o problema em que subcampos de campo um-para-muitos não podiam ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - Problema de estilo na barra de paginação da subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

  - Seletor de tabela no formulário de filtro com estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

- **[database]**
  - Corrigida associação "pertence a" não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

  - Corrigidos casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

- **[Campo de coleção: Anexo (URL)]** Campos de anexo (URL) não devem permitir configuração de valor em regra de vinculação ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

- **[Fluxo de trabalho: Evento de ação personalizada]** Problema de vinculação de ação de fluxo de trabalho acionada por @katherinehhh
