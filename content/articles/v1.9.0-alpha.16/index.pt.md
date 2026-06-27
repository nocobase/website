---
title: "NocoBase v1.9.0-alpha.16: Suporte para girar imagem durante a visualização"
description: "Nota de lançamento da v1.9.0-alpha.16"
---

### 🚀 Melhorias

- **[client]**
  - Suporte para girar imagem ao visualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher

  - Adicionado suporte de localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Adaptador de fila RabbitMQ]** Melhoria no tratamento de conexão RabbitMQ e na lógica de processamento de mensagens por @sdp-ncd

### 🐛 Correções de bugs

- **[client]**
  - Corrigido o problema em que os submenus da barra lateral não destacavam corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu

  - Corrigido o problema em que o popover de configuração do ícone do menu estava sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

- **[Notificação: Mensagem no aplicativo]** Corrigido o problema em que mensagens recentes não eram exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Fluxo de trabalho]** Corrigido o problema em que a condição da lista de fluxos de trabalho estava incorreta ao carregar o contexto de campo associado na configuração do fluxo de trabalho vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher

- **[Fluxo de trabalho: Nó de loop]** Corrigido o problema em que o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigido o problema em que ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher

  - Corrigido o problema em que os campos de fórmula no formulário de aprovação não eram atualizados automaticamente por @mytharcher
