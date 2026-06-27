---
title: "NocoBase v1.6.8: Correções de Bugs"
description: "Nota de Lançamento da v1.6.8"
---

### 🐛 Correções de Bugs

- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[cliente]** A altura da subtabela no formulário é definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

- **[Autenticação]**
  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

  - Opções do autenticador ajustadas ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

- **[Bloco: Mapa]** Problema de gerenciamento de chave do bloco de mapa causando falhas na requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

- **[Gerenciador de backup]** A restauração pode causar erros de execução do workflow por @gchust

- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar a configuração de notificação. por @2013xile
