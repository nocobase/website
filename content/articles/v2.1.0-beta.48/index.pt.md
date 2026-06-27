---
title: "NocoBase v2.1.0-beta.48: Adicionado suporte ao cliente v2 para a ação da barra superior do gerenciador de tarefas assíncronas"
description: "Nota de lançamento da v2.1.0-beta.48"
---

### 🎉 Novas Funcionalidades

- **[client-v2]** Suporte a entrada por escaneamento para campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Adicionado suporte ao cliente v2 para a ação da barra superior do gerenciador de tarefas assíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Gerenciador de backup]** Adicionado suporte ao runtime do cliente v2 para o plugin de gerenciador de backup. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
- **[Fonte de dados: NocoBase externo]** Adicionado um plugin de fonte de dados: NocoBase externo por @2013xile

### 🚀 Melhorias

- **[client-v2]** Adicionado suporte para desabilitar seleção múltipla em campos de associação de popup de seleção v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
- **[Gerenciador de arquivos]** Adicionado suporte a `subPath` para upload interno no gerenciador de arquivos. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) por @mytharcher
- **[Variáveis e segredos]** Variáveis de ambiente (`$env`) agora podem ser selecionadas por seletores de variáveis baseados no flow-engine no runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[database]** Corrigido o problema de campos de senha não serem hashados durante atualizações em lote. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) por @mytharcher
- **[client]** Corrigido o problema de ações de linha em subtabelas de popup ocultarem todo o campo da subtabela quando a ação é ocultada por regras de vinculação ([#9717](https://github.com/nocobase/nocobase/pull/9717)) por @katherinehhh
- **[Funcionários IA]** Melhorados os prompts de consulta de dados dos funcionários IA para carregar a habilidade necessária antes de usar ferramentas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
- **[Gerenciador de fonte de dados]** Corrigida a exibição desatualizada do campo de título ao reabrir a gaveta de configuração de campos da fonte de dados v2 após alterar o campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
- **[Bloco: Mapa]**

  - Corrigido o problema de campos de geometria do mapa estarem ausentes no menu de adicionar campo do gerenciador de fonte de dados v2 após ativar o plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
  - Corrigido o problema do DrawingManager indisponível no bloco do Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) por @katherinehhh
- **[Calendário]** Corrigido um problema onde blocos de Detalhes e Edição não podiam ser adicionados nas gavetas de detalhes do bloco de calendário v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
