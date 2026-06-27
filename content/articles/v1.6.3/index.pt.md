---
title: "NocoBase v1.6.3: Permite definir uma dica personalizada para o botão de login"
description: "Nota de lançamento da v1.6.3"
---

### 🎉 Novas Funcionalidades

- **[WeCom]** Permite definir um tooltip personalizado para o botão de login por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Caractere especial na URL da imagem impedia a exibição ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher

  - Número de página incorreto ao adicionar dados após alteração do tamanho da página da subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - Estilo do logotipo inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

- **[Workflow: Nó manual]** Corrige erro lançado na migração ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher

- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Gerenciador de arquivos]** Corrige alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Ação: Requisição personalizada]** Erro de validação de permissão no servidor em requisição personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Gerenciador de fontes de dados]** Trocar a fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Ação: Edição em lote]** Corrige workflow que não pode ser acionado no envio de edição em lote ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Remove `only` no caso de teste E2E por @mytharcher

- **[Workflow: Aprovação]**
  - Corrige dados de associação não exibidos no formulário de aprovação por @mytharcher

  - Corrige erro lançado ao aprovar em fonte de dados externa por @mytharcher
