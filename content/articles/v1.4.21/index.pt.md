---
title: "NocoBase v1.4.21: Suporte a regras de vinculação no bloco de detalhes para ocultar (valor reservado)"
description: "Nota de lançamento da v1.4.21"
---

### 🚀 Melhorias

- **[client]** Suporte a regras de vinculação no bloco de detalhes para ocultar (valor reservado) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]**
  - Corrige caminho público ausente nos caminhos de arquivos de ícone ([#6034](https://github.com/nocobase/nocobase/pull/6034)) por @chenos

  - Corrige o problema em que as regras de vinculação de formulário falham quando dependem de valores de campos de subtabelas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe

  - Corrige campo incorreto da variável 'Registro atual' em subdetalhes ([#6030](https://github.com/nocobase/nocobase/pull/6030)) por @zhangzhonghe

- **[Gerenciador de Backup]** Corrige falha no download do backup quando o env API_BASE_PATH não é /api por @gchust
