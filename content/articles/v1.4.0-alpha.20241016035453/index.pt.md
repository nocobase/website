---
title: "NocoBase v1.4.0-alpha.20241016035453: Adicionar Campo de Anexo (URL)"
description: "Nota de lançamento da v1.4.0-alpha.20241016035453"
---

### 🎉 Novas Funcionalidades

- **[sdk]** Permite armazenar informações do cliente no sessionStorage ao definir a variável de ambiente `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) por @2013xile
- **[Campo de coleção: Anexo (URL)]** Adiciona campo Anexo (URL) por @katherinehhh

### 🚀 Melhorias

- **[client]**

  - otimização da depuração remota ([#5394](https://github.com/nocobase/nocobase/pull/5394)) por @chenos
  - otimização de estilo para centralizar ícone quando botões de ação usam apenas ícone ([#5413](https://github.com/nocobase/nocobase/pull/5413)) por @katherinehhh
  - fechamento automático do popup de mensagem ao atualizar registro ([#5408](https://github.com/nocobase/nocobase/pull/5408)) por @katherinehhh
- **[Workflow: Nó de requisição HTTP]** Suporte para SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) por @chenos

### 🐛 Correções de Bugs

- **[Formulários públicos]** Corrige problema ao clicar em configurações no formulário público ([#5392](https://github.com/nocobase/nocobase/pull/5392)) por @katherinehhh
- **[client]**

  - Corrige problema de não exibir o valor na caixa de entrada de valor padrão ([#5400](https://github.com/nocobase/nocobase/pull/5400)) por @zhangzhonghe
  - Corrige erro de não encontrar o campo de associação quando regras de vinculação são definidas para a subtabela ([#5402](https://github.com/nocobase/nocobase/pull/5402)) por @zhangzhonghe
  - corrige visualização incorreta de miniatura quando o tipo de arquivo não é suportado por padrão ([#5401](https://github.com/nocobase/nocobase/pull/5401)) por @mytharcher
- **[Localização]** Corrige problema onde traduções no plugin de localização não surtiam efeito após publicação ([#5416](https://github.com/nocobase/nocobase/pull/5416)) por @2013xile
