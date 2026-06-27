---
title: "NocoBase v1.4.0-alpha.20241024133132: Suporte para adicionar grupos em formulários e blocos de detalhes"
description: "Nota de lançamento da v1.4.0-alpha.20241024133132"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte para adicionar grupos em formulários e blocos de detalhes ([#5498](https://github.com/nocobase/nocobase/pull/5498)) por @katherinehhh

- **[Calendário]** plugin-calendar adiciona configurações de visualização padrão e configurações de internacionalização ([#5487](https://github.com/nocobase/nocobase/pull/5487)) por @Cyx649312038

- **[Fonte de dados: KingbaseES]** Suporte para usar o banco de dados Kingbase como fonte de dados principal ou externa (modo pg) por @chareice
Referência: [Fonte de dados - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Melhorias

- **[database]** Suporte para lógica de carregamento estático de plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) por @chareice

- **[client]** Melhora no desempenho de renderização de blocos de tabela (tempo de renderização inicial reduzido em cerca de 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) por @zhangzhonghe

- **[Mobile]** cliente mobile suporta bloco de formulário de filtro ([#5482](https://github.com/nocobase/nocobase/pull/5482)) por @katherinehhh

- **[Gerenciador de backup]**
  - altera a configuração padrão de `Fazer backup de arquivos de armazenamento local` para verdadeiro por @gchust

  - Reverte os dados do banco de dados se a ação de restauração falhar por @gchust

### 🐛 Correções de Bugs

- **[servidor]** O evento afterLoad do aplicativo não era acionado após a instalação ([#5506](https://github.com/nocobase/nocobase/pull/5506)) por @chenos

- **[Formulários públicos]** registro do snippet ACL para formulário público ([#5505](https://github.com/nocobase/nocobase/pull/5505)) por @katherinehhh

- **[Gerenciador de backup]** corrigido: após restaurar um sub aplicativo, o aplicativo principal travava se o sub aplicativo estivesse usando um esquema diferente por @gchust
