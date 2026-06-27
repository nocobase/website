---
title: "NocoBase v1.9.0-beta.8: Adiciona suporte para personalização de cor do menu lateral"
description: "Nota de lançamento da v1.9.0-beta.8"
---

### 🚀 Melhorias

- **[auth]** Suporte ao uso de `.` em nomes de usuário ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile

- **[client]** Adicionar suporte de localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Workflow: Nó manual]** Suporte para visualizar e retomar tarefas manuais pendentes em workflows desativados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher

- **[Calendário]** Suporte à exibição de mapeamento de localidade para cabeçalhos de calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

- **[Editor de tema]** Adicionar suporte para personalização de cor do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu

- **[Adaptador de fila Redis]** Usar o registrador padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir o problema onde o popup de configuração do ícone do botão está sendo coberto/sobreposto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe

  - Corrigir o problema onde o popover de configuração do ícone do menu está sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

  - Corrigir o problema onde o componente Popover está sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe

- **[Notificação: Mensagem no aplicativo]**
  - Corrigir o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher

  - Corrigir o problema onde mensagens recentes não são exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Workflow]**
  - Corrigir um erro potencial relacionado ao cache de log do workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher

  - Corrigir o problema onde a lógica de assinatura incorreta na fila de tarefas em segundo plano do workflow causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher

- **[Fonte de dados: API REST]** corrigir regras de validação de URL da API REST por @katherinehhh

- **[Criptografia de requisição HTTP]** Corrigir o problema onde os parâmetros da requisição não suportam o tipo nativo URLSearchParams por @mytharcher

- **[Impressão de template]** suporte ao campo chinaRegions por @jiannx

- **[Workflow: Aprovação]**
  - Corrigir o problema onde os campos de fórmula no formulário de aprovação não são atualizados automaticamente por @mytharcher

  - Corrigir o problema onde ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher
