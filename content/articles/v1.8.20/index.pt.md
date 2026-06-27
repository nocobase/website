---
title: "NocoBase v1.8.20: Ajuste da API de variáveis do fluxo de trabalho para suportar a pré-definição de uma lista adicional de variáveis"
description: "Nota de lançamento da v1.8.20"
---

### 🚀 Melhorias

- **[Workflow]** Ajustar a API de variáveis do workflow para suportar a pré-definição de uma lista adicional de variáveis ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher

- **[Workflow: Aprovação]**
  - Suporte ao uso de variáveis relacionadas à aprovação em notificações personalizadas por @mytharcher

  - Suporte à atualização do status de aprovação após o nó final encerrar a execução por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde, em certos cenários, editar um registro no popup do seletor de registros móvel causava um erro ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe

  - Validação de campo obrigatório não funcionando para campos de anexo em subtabela ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh

  - Corrigido o problema onde o ícone era exibido incorretamente quando a URL no campo de URL do anexo continha parâmetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher

- **[database]**
  - Corrigido um erro de sintaxe MySQL que ocorria ao carregar mais mensagens no aplicativo. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie

  - Corrigido problema de precisão para campos Numéricos exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie

- **[undefined]** Corrigido problema com filtragem por campo de data apenas em fonte externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie

- **[Ação: Importar registros]** Corrigido problema onde a importação falhava quando a chave primária da tabela era um texto de linha única ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie

- **[Workflow]**
  - Completar as opções para excluir automaticamente o status de execução do workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher

  - Corrigir problemas relacionados ao menu móvel nas tarefas do workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher

- **[Ação: Importar registros Pro]** Corrigido resultado de atualização inesperado ao usar chave primária de string na importação xlsx. por @aaaaaajie
