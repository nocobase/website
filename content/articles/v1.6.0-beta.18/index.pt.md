---
title: "NocoBase v1.6.0-beta.18: Adicionar teste de configuração de segurança de token para autenticação de chave de API"
description: "Nota de lançamento da v1.6.0-beta.18"
---

### 🚀 Melhorias

- **[Auth: Chaves de API]** Adicionar teste de configuração de segurança de token para autenticação por chave de API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

### 🐛 Correções de Bugs

- **[servidor]** Cache incorreto do navegador após executar o comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust

- **[auth]** Tratar usuário inexistente com erro 401 e atualizar mensagens de localização ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66

- **[Cliente WEB]** Página fica em branco após alternar papéis ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie

- **[Editor de temas]** Alternância de tema falha após várias alternâncias consecutivas ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh

- **[Fluxo de Trabalho: Aprovação]**
  - Corrigir parâmetro de ordem ao adicionar responsável por @mytharcher

  - Evitar que configuração incorreta de responsáveis consulte todos os usuários por @mytharcher

- **[WeCom]** Corrigir link do prompt de login e erro de login do DingTalk por @chenzhizdt
