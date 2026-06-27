---
title: "NocoBase v1.7.0-beta.32: Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem"
description: "Nota de lançamento da v1.7.0-beta.32"
---

### 🎉 Novas Funcionalidades

- **[client]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtro de múltiplas palavras-chave]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impressão de modelo]** Adiciona suporte para impressão em lote na impressão de modelos. por @sheldon66

### 🚀 Melhorias

- **[Workflow]** Adiciona todas as chaves de localidade en-US ausentes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - componente em cascata no modal não carregando dados de associação inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - dados de associação não enviados ao expor campos de associação no subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - campos de ordenação arrastáveis não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - variáveis do formulário atual ausentes no escopo de dados da tabela do seletor de dados ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - tabela de registros de seleção de associação não filtrando registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
- **[database]** trata células de string vazias durante a importação de campos para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[Workflow: Nó manual]** Corrige erro de renderização ao exibir item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Gerenciador de arquivos]** Corrige tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
- **[Bloco: Painel de ações]** Lê o nome base da rota a partir do scanner para adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Integração de IA]** Conteúdo não exibido ao alternar entre as páginas de configuração do serviço LLM e configuração de validação ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Workflow]** Corrige limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Workflow: Aprovação]** Corrige escopo de responsáveis para delegação e adição a outros responsáveis por @mytharcher
- **[Gerenciador de backup]** Corrige erro de tipo na compilação por @mytharcher
