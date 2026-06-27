---
title: "NocoBase v1.6.0-beta.16: campo de hora suporta formato de hora"
description: "Nota de lançamento da v1.6.0-beta.16"
---

### 🎉 Novas Funcionalidades

- **[client]** campo de hora suporta formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

### 🚀 Melhorias

- **[server]** Atualização do koa para 2.15.4; atualização do @koa/cors para 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile

- **[Workflow]** Carregamento preguiçoso do resultado do job para melhor desempenho ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

### 🐛 Correções de Bugs

- **[auth]** Evitar renovar o token durante a autorização WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66

- **[client]**
  - Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe

  - botão "adicionar novo" aparece ao passar o mouse no modo somente leitura do campo de associação ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh

- **[devtools]** Garantir que o cabeçalho X-Forwarded-For seja definido apenas se req.ip não for undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66

- **[Bloco: Mapa]** Configurações do campo de mapa estão ausentes/não visíveis ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe

- **[Mobile]** Erro na página: Não é possível ler propriedades de null (lendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe

- **[Usuários]** Uma UI de erro aparece brevemente quando a tabela de gerenciamento de permissões do usuário carrega pela primeira vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe

- **[Bloco: Painel de ações]** Definir a altura do painel de ações é inválido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

- **[Ação: Importar registros Pro]** botão de importação do bloco de associação na detecção de registros duplicados não mostra dados no dropdown do campo por @katherinehhh

- **[Ação: Exportar registros Pro]** remover opção 'adicionar bloco' nas configurações do botão de anexo de exportação por @katherinehhh

- **[Workflow: Evento de ação personalizada]** Corrigir migração para botões legados vinculados ao workflow de ação personalizada por @mytharcher

- **[Marca personalizada]** Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento por @zhangzhonghe

- **[Impressão de modelo]** Falha ao restaurar do local quando os plugins de impressão de modelo e gerenciador de backup estavam ambos habilitados por @gchust

- **[Workflow: Aprovação]**
  - Corrigir erro causado por `.toJSON()` por @mytharcher

  - Corrigir migração não executada devido ao número da versão por @mytharcher

  - Corrigir migração para blocos legados por @mytharcher
