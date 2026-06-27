---
title: "NocoBase v2.1.0-beta.26: adicionar ações de associar e desassociar ao bloco de associação"
description: "Nota de lançamento da v2.1.0-beta.26"
---

### 🎉 Novas Funcionalidades

- **[client]** adicionar ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh

- **[Visualização de dados]** Adicionar suporte client-v2 para plugins de bloco ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Melhorias

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client-v2]**
  - Corrigir o problema em que algumas páginas v2 falham ao carregar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe

  - Corrigir problemas de posicionamento e placeholder de arrasto de bloco na página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe

- **[client]**
  - Corrigido problema em que as regras de vinculação não eram reexecutadas após a alteração dos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust

  - corrigir campo de opção obrigatório em subtabela não validado corretamente na primeira seleção em dispositivos móveis ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh

  - corrigir ocultação da opção de criação rápida para campo de seleção de associação em subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh

  - Corrigir o problema em que as variáveis de parâmetro de consulta de URL se tornam inválidas após alternar entre páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe

  - corrigir renderização incorreta de dados no bloco de cartão em grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh

- **[server]** validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos

- **[undefined]** Corrigir links quebrados na documentação traduzida e habilitar a detecção de links quebrados por padrão na compilação da documentação. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn

- **[Funcionários de IA]**
  - Corrigir erro de anexo do campo de associação de leitura do nó de funcionário de IA no fluxo de trabalho ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock

  - Corrigir nó de funcionário de IA do fluxo de trabalho não encerrando corretamente após a atribuição de ferramenta. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock

- **[Bloco: Kanban]**
  - Estilo compacto do cartão Kanban melhorado e seleção de template de pop-up de criação rápida otimizada. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx

  - corrigir quebra de palavra única em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh

  - Corrigido uso de parâmetros de recurso de tempo de execução não resolvidos em blocos associados do kanban em contextos de pop-up ou página secundária. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx

- **[Ação: Solicitação personalizada]** atualizar koa para v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos

- **[Campo de coleção: Fórmula]** corrigir campo de fórmula em subtabela v2 não acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

- **[Gerenciador de e-mail]** Corrigida a exibição do título das identidades de e-mail por @jiannx
