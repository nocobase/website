---
title: "NocoBase v1.8.0-beta.11: Suporte a requisições `multipart/form-data`"
description: "Nota de lançamento da v1.8.0-beta.11"
---

### 🎉 Novas Funcionalidades

- **[Workflow: nó de requisição HTTP]** Suporte a requisições `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

### 🚀 Melhorias

- **[Workflow]**
  - Otimização do estilo mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher

  - Ajuste na API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher

- **[Formulários públicos]** Otimização do desempenho dos componentes de data em formulários públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe

- **[Workflow: evento pré-ação]** Ajuste na API de variáveis por @mytharcher

- **[Workflow: Aprovação]** Ajuste na API de variáveis por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Limitação de intervalo incorreta em campos de data com hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh

  - Quando as variáveis do parâmetro de consulta da URL estão vazias, as condições de escopo de dados não são removidas ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe

- **[Workflow]**
  - Correção dos parâmetros ao carregar registros em tarefas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher

  - Correção na verificação executada incorretamente em números inteiros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher

  - Correção na exclusão em cascata de estatísticas por versão de workflow não atual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher

- **[Mobile]** Correção do problema de z-index em popups mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe

- **[Cliente WEB]** Correção do problema onde blocos sob páginas não eram exibidos após definir permissões de menu por função ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie

- **[Calendário]** Problema no campo de data no formulário de criação rápida do bloco de calendário ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

- **[Ação: Importar registros]** Resolução do problema de falha de login após importação em lote de nomes de usuário e senhas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie

- **[Workflow: Aprovação]**
  - Correção do erro lançado quando a coleção relacionada à aprovação é excluída por @mytharcher

  - Correção dos estilos mobile por @mytharcher

  - Correção do nome da variável do solicitante no gatilho por @mytharcher

  - Apenas participantes podem visualizar (obter) detalhes da aprovação por @mytharcher

  - Correção da API de variáveis legadas que lançava erro por @mytharcher
