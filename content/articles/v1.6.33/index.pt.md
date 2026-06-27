---
title: "NocoBase v1.6.33: Construir a imagem docker completa"
description: "Nota de lançamento da v1.6.33"
---

### 🚀 Melhorias

- **[indefinido]** Construir a imagem Docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos

- **[cliente]** Otimizar o problema de páginas ficando cada vez mais lentas com o uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe

- **[Calendário]** Suporte a botão de atualização configurável no bloco de calendário ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir localidades en-US com base nas chaves zh-CN por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Suporte para realizar todas as tarefas pendentes no centro de tarefas do fluxo de trabalho por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Erro de renderização causado por formato de estilo inválido ao adicionar campo de associação ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh

  - Verificação incorreta de valor vazio para campo de associação toMany em regra de vinculação ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Campo markdown (Vditor) não se adaptando ao tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh

- **[Coleção: Árvore]** Evitar atualizações incorretas de prefixos de caminho semelhantes durante atualizações de caminho ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile

- **[Gerenciador de arquivos]**
  - Corrigir regra de correspondência de pré-visualização ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher

  - Corrigir injeção de coleção do cliente e parâmetro de upload ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher

  - Corrigir URL de pré-visualização em arquivos não-imagem ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher

- **[Fluxo de trabalho: Nó de e-mail]** Tratar campo 'to' indefinido e melhorar o processamento de destinatários de e-mail. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66

- **[Fluxo de trabalho: Evento de ação personalizada]**
  - Corrigir execução incorreta do botão após alguns cliques por @mytharcher

  - Corrigir manipulador de erro que não podia ser correspondido por classe por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Corrigir cálculo de anexos de associação por @mytharcher
