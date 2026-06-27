---
title: "NocoBase v2.0.0-beta.21: suporte à configuração de campos do campo de coleção de associação no bloco de formulário"
description: "Nota de lançamento da v2.0.0-beta.21"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte para configurar campos do campo de coleção associada em bloco de formulário ([#8578](https://github.com/nocobase/nocobase/pull/8578)) por @katherinehhh

- **[Ação: Duplicar registro]** adicionar ação de duplicação 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) por @katherinehhh

- **[Workflow]** Suporte para copiar, colar e mover nós por arrastar e soltar na tela do workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) por @mytharcher

### 🚀 Melhorias

- **[flow-engine]** Melhorar autocompletar e dicas de código no editor de código do modelo JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) por @gchust

- **[Workflow: Aprovação]** Remover suporte para campos JS por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir um possível erro de renderização "read hidden" no modo não-config. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) por @gchust

  - corrigir subtabela (edição inline) ainda exibindo colunas em modo de edição após alternar para visualização somente leitura no formulário de edição ([#8589](https://github.com/nocobase/nocobase/pull/8589)) por @katherinehhh

- **[Flow engine]** Corrigir um problema onde usar um template de bloco no modo "Duplicar" causava popup vazio ao clicar em algum botão de ação do bloco. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) por @gchust

- **[Bloco: Mapa]** Corrigir opções de configuração duplicadas 'Salvar como template' no bloco de mapa ([#8584](https://github.com/nocobase/nocobase/pull/8584)) por @katherinehhh
