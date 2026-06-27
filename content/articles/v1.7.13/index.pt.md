---
title: "NocoBase v1.7.13: Largura do contêiner do logotipo se adapta ao tipo de conteúdo"
description: "Nota de lançamento da v1.7.13"
---

### 🚀 Melhorias

- **[client]** Largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Workflow: Aprovação]** Adicionar opção de campo extra para lista de reatribuídos por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Mensagem de validação obrigatória na subtabela persiste ao trocar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - Perda da casa decimal após alternar o componente de valor de mask para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Renderização incorreta de Markdown (Vditor) na subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

- **[Campo de coleção: Sequência]** Corrigir cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Gerenciador de backup]** Erro de comando desconhecido ao restaurar backups MySQL na plataforma Windows por @gchust
