---
title: "NocoBase v1.6.0-alpha.31: compatível com configurações históricas de controle de acesso de botões"
description: "Nota de lançamento da v1.6.0-alpha.31"
---

### 🎉 Novas Funcionalidades

- **[client]** compatibilidade com configurações históricas de controle de acesso a botões ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh

- **[Workflow: Mensagem de resposta]** Suporte para uso em gatilho de ação por @mytharcher

### 🚀 Melhorias

- **[Auth: Chaves de API]** Adicionar teste de configuração de segurança de token para autenticação de chave de API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

- **[Workflow: Nó manual]** Ajustar interface do centro de tarefas do workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

### 🐛 Correções de Bugs

- **[server]** Cache incorreto do navegador após executar o comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust

- **[client]**
  - Problema de contexto de tema no FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh

  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe

- **[auth]** Tratar usuário inexistente com erro 401 e atualizar mensagens de localização ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66

- **[Bloco: template]** Opção "Salvar como template" não exibida no bloco de dados da página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust

- **[Workflow: Nó manual]** Evitar conflito em chave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher

- **[Gerenciador de fonte de dados]** erro ao editar campos em fonte de dados externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh

- **[Editor de tema]** falha na troca de tema após múltiplas trocas consecutivas ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh

- **[Cliente WEB]** Página fica em branco após trocar de função ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie

- **[Workflow: Aprovação]**
  - Evitar que configuração incorreta de destinatários consulte todos os usuários por @mytharcher

  - Corrigir parâmetro de ordem ao adicionar destinatário por @mytharcher

- **[WeCom]** corrigir link de prompt de login e erro de login do dingtalk por @chenzhizdt
