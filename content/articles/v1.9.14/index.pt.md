---
title: "NocoBase v1.9.14: Suporte ao redirecionamento automático para a URL SSO quando não autenticado"
description: "Nota de lançamento da v1.9.14"
---

### 🎉 Novas Funcionalidades

- **[Auth: OIDC]** Suporte ao redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🚀 Melhorias

- **[client]** Uso de chaves triplas (`{{{` e `}}}`) para variáveis no conteúdo da mensagem, para evitar que variáveis sejam escapadas pelo Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) por @mytharcher

- **[Campo de coleção: Markdown(Vditor)]** Ajuste da largura do conteúdo em tela cheia do vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) por @katherinehhh

### 🐛 Correções de Bugs

- **[database]** Correção: remoção do processamento UTC na conversão de tempo para campos somente de hora para evitar deslocamentos causados por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu

- **[client]** Correção no select remoto que não exibia o rótulo correto para valores não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh

- **[Workflow]**
  - Correção do problema em que execuções preparadas não eram enviadas para a fila antes da parada ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher

  - Correção do problema em que o link da tarefa direcionava para página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher

  - Correção do problema em que alguns menus de tarefas do workflow não eram exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher

  - Correção da contagem de tarefas não exibida devido ao uso incorreto do provedor ([#7968](https://github.com/nocobase/nocobase/pull/7968)) por @mytharcher

- **[Workflow: Nó manual]** Correção do problema em que a contagem de tarefas manuais não estava correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher

- **[Visualização de dados]**
  - As configurações de campos de filtro para coleções de fontes de dados externas não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile

  - Resolução do problema em que a consulta do gráfico não suportava o escopo de dados ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) por @2013xile

- **[Gerenciador de fonte de dados]** Corrigida a falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock

- **[Ação: Importar registros]** Corrigido o problema ao importar dados em tabela hierárquica ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
