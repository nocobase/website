---
title: "NocoBase v1.4.4: Correções de Bugs"
description: "Nota de Lançamento da v1.4.4"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problema com campos de fonte de dados externa não sendo exibidos no bloco de tabela ([#5825](https://github.com/nocobase/nocobase/pull/5825)) por @katherinehhh

  - Corrige problema de exibição para campos herdados na configuração de formulário ([#5822](https://github.com/nocobase/nocobase/pull/5822)) por @katherinehhh

  - Corrige campos herdados que não aparecem na lista de campos e não podem ser sobrescritos ([#5800](https://github.com/nocobase/nocobase/pull/5800)) por @katherinehhh

- **[Visualização de dados]** Corrige o problema ao formatar campos de data com fuso horário no MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) por @2013xile

- **[Fluxo de trabalho]**
  - Corrige transação entre fontes de dados que causa erro no evento de coleção ([#5818](https://github.com/nocobase/nocobase/pull/5818)) por @mytharcher

  - Corrige tipo de data ausente na configuração de agendamento baseada em campo de data ([#5816](https://github.com/nocobase/nocobase/pull/5816)) por @mytharcher

- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema onde a atualização de campos m2m array em coleção de relação única não surte efeito ([#5820](https://github.com/nocobase/nocobase/pull/5820)) por @2013xile

- **[Calendário]**
  - Corrige erro ao clicar em uma data em branco no calendário ([#5803](https://github.com/nocobase/nocobase/pull/5803)) por @katherinehhh

  - Corrige o problema onde fechar um popup aberto através do 'Bloco de Calendário' faz todos os popups fecharem ([#5793](https://github.com/nocobase/nocobase/pull/5793)) por @zhangzhonghe

- **[Formulários públicos]** Corrige caminho de escaneamento de código QR incorreto em formulário público de sub-aplicação ([#5799](https://github.com/nocobase/nocobase/pull/5799)) por @katherinehhh
