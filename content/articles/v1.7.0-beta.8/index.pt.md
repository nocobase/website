---
title: "NocoBase v1.7.0-beta.8: Suporte a variáveis de ambiente na URL do botão de link"
description: "Nota de lançamento da v1.7.0-beta.8"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a configurações de estilo de campo para tamanho da fonte, peso da fonte e estilo da fonte ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh

- **[Variáveis e segredos]** suporte a variáveis de ambiente na URL do botão de link ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

### 🚀 Melhorias

- **[client]** suporte a correspondência difusa para campos selecionados no botão de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh

- **[Workflow: nó de e-mail]** Adicionar descrição da configuração do campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66

- **[Cliente WEB]** adicionar prompt de confirmação secundária para Limpar Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh

- **[Notificação: E-mail]** Adicionar descrição da configuração do campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66

- **[Gerenciador de e-mail]** suporte a reautorização e seleção automática da conta ao enviar um e-mail por @jiannx

### 🐛 Correções de Bugs

- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[cliente]**
  - a altura da subtabela no formulário é definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

  - erro de envio do campo de hora no locale chinês (sintaxe de entrada inválida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh

  - transparência do botão de ação causando problema de exibição de configuração ao passar o mouse ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

- **[Autenticação]**
  - Aparar opções do autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

- **[Bloco: Mapa]**
  - problema de gerenciamento de chave do bloco de mapa causando falhas na requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

  - campos de chave secreta não acionando validação no gerenciamento de mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh

- **[Gerenciador de arquivos]** Incapacidade de acessar arquivos armazenados no COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos

- **[Ação: Exportar registros Pro]** Incapacidade de exportar anexos por @chenos

- **[Gerenciador de backup]** A restauração pode causar erros de execução do workflow por @gchust

- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar a configuração de notificação. por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir erro na tabela de processo quando o job é excluído por @mytharcher

  - Corrigir erro lançado ao adicionar resultado do nó de consulta por @mytharcher

  - Corrigir falha causada por usuário nulo por @mytharcher
