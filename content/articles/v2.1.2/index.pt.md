---
title: "NocoBase v2.1.2: Adicionado formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA"
description: "Nota de lançamento da v2.1.2"
---

### 🎉 Novas Funcionalidades

- **[Agentes de IA]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[IA: Base de conhecimento]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. por @cgyrock

### 🚀 Melhorias

- **[indefinido]**

  - Adicionado um cenário de controle de versão ao início rápido do construtor de IA ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referência: [Início Rápido do Construtor de IA](https://docs.nocobase.com/en/ai-builder)
  - Melhorada a documentação de controle de versão com orientação de revisão automática do construtor de IA. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
- **[cli]** Esclarecida a redação da configuração inicial ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[Ação: Importar registros]** Melhorados os diálogos de erro de importação e tarefas assíncronas para que mensagens de erro longas possam ser lidas completamente sem quebrar o layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Ação: Importar registros Pro]** Melhorados os diálogos de importação para que mensagens de erro longas permaneçam legíveis e o modo de processamento v2 possa ser selecionado diretamente no menu de configurações. por @katherinehhh

### 🐛 Correções de Bugs

- **[client-v2]** Corrigido o problema em que páginas v2 podiam continuar carregando após o login ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Exigir Node.js 22 para nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Gerenciador de arquivos]** Corrigida a pré-visualização de PDFs com texto CJK/CID ausente após a mudança para pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
