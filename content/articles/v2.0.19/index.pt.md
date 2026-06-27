---
title: "NocoBase v2.0.19: Corrige o problema em que o desligamento gracioso não drenava todos os eventos"
description: "Nota de lançamento da v2.0.19"
---

### 🚀 Melhorias

- **[Workflow]** Corrigido o problema em que o desligamento gracioso não drenava todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido o problema em que a URL especificada para o serviço LLM não surtia efeito nas chamadas do modelo de incorporação de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

- **[Ação: Importar registros Pro]** Corrigido o evento `beforeStop` no sub-aplicativo que não era acionado por @mytharcher
