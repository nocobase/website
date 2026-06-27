---
title: "NocoBase v2.0.0-alpha.48: Adicionar bloco de mapa 2.0"
description: "Nota de lançamento da v2.0.0-alpha.48"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Mapa]** adicionado bloco de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh

- **[Auth: OIDC]** Suporte ao redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🐛 Correções de Bugs

- **[client]**
  - Evitado erro ao abrir configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher

  - Corrigido erro ao adicionar registros filhos em bloco de tabela de árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh

  - Corrigido problema de exibição quando o campo markdown é truncado no modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh

  - Corrigidos resultados de pesquisa incompletos no seletor em cascata ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh

  - Corrigido problema onde o estado da aba da página e a rota não correspondiam ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe

  - Corrigido seletor remoto que não exibia o rótulo correto para valores não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[database]** Corrigido: remoção do processamento UTC na conversão de tempo para campos apenas de hora para evitar deslocamentos causados por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[Workflow]**
  - Corrigido problema onde execuções preparadas não eram enviadas para a fila antes da parada ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Corrigido problema onde alguns menus de tarefas do workflow não eram exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Corrigido problema onde o link da tarefa levava a uma página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

- **[Visualização de dados]** Configurações de campos de filtro para coleções de fontes de dados externas não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

- **[Gerenciador de fonte de dados]** Corrigida falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Ação: Importar registros]** Corrigido problema ao importar dados em tabela de árvore ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock

- **[Workflow: Nó manual]** Corrigido problema onde a contagem de tarefas manuais não estava correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigida ausência de dados do solicitante no contexto da execução após o usuário reenviar por @mytharcher

  - Corrigido problema onde o comentário no resultado da tarefa era nulo após o usuário enviar aprovação com comentário por @mytharcher
