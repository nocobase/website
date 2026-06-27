---
title: "NocoBase v2.0.58: Adicionada uma API de administrador para reexecutar execuções de fluxo de trabalho iniciadas a partir do início ou de um nó especificado"
description: "Nota de lançamento da v2.0.58"
---

### 🎉 Novas Funcionalidades

- **[Workflow]** Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do início ou de um nó específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher

### 🚀 Melhorias

- **[client]** Removida a opção Oculto das configurações de itens de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigida a sincronização do valor do popup do seletor de data no mobile ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh

  - Corrigida a preservação do formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh

  - Aumentado o limite de upload de imagens na entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh

  - Corrigida a sincronização do estado oculto para vinculação de subformulário ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh

  - Corrigido problema onde a subtabela em subformulário não conseguia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh

  - Corrigido desaparecimento das abas da página após alternar menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe

- **[flow-engine]** Corrigido um problema onde as regras de vinculação de ações de tabela eram executadas incorretamente após um formulário ser enviado com sucesso em um popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust

- **[Workflow: Evento de ação personalizada]** Corrigido o problema onde botões de tabela de ação personalizada com contexto de múltiplos registros permitiam incorretamente a seleção de workflows de contexto personalizado. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher

- **[Gerenciador de arquivos]**
  - Corrigida a normalização de nomes de arquivos Unicode durante uploads para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher

  - Melhoradas as mensagens de falha na pré-visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
Referência: [Pré-visualização de Arquivos](docs/docs/en/file-manager/file-preview/index.md)
