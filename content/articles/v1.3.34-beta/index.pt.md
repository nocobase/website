---
title: "NocoBase v1.3.34-beta: Melhorias na Configuração de Campos do Formulário de Filtro"
description: "Nota de lançamento da v1.3.34-beta"
---

### 🎉 Novas Funcionalidades

- **[test]** Campos de associação em formulários de filtro agora suportam configurar se a seleção múltipla é permitida ([#5451](https://github.com/nocobase/nocobase/pull/5451)) por @zhangzhonghe

- **[client]** Adicionada uma variável chamada "Objeto pai" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) por @zhangzhonghe
Referência: [Objeto pai](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido problema em que variáveis de parâmetros de busca da URL não eram interpretadas ([#5454](https://github.com/nocobase/nocobase/pull/5454)) por @zhangzhonghe

  - Corrigido bug de limpeza de dados ao selecionar dados de associação com escopo de dados em subtabelas aninhadas ([#5441](https://github.com/nocobase/nocobase/pull/5441)) por @katherinehhh

  - Corrigida cor de fundo da linha selecionada na tabela ([#5445](https://github.com/nocobase/nocobase/pull/5445)) por @mytharcher

- **[Bloco: Mapa]** Removida configuração de nível de zoom para campos de mapa em colunas de tabela ([#5457](https://github.com/nocobase/nocobase/pull/5457)) por @katherinehhh

- **[Gerenciador de arquivos]** Corrigida chamada do hook de regra de armazenamento em campos somente leitura ([#5447](https://github.com/nocobase/nocobase/pull/5447)) por @mytharcher

- **[Fonte de dados: Principal]** Corrigida falha em caso e2e devido a alteração de componente ([#5437](https://github.com/nocobase/nocobase/pull/5437)) por @mytharcher
