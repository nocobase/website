---
title: "NocoBase v1.9.0-alpha.15: Usar o registrador padrão do sistema para fila de mensagens"
description: "Nota de lançamento da v1.9.0-alpha.15"
---

### 🚀 Melhorias

- **[auth]** Suporte ao uso de `.` em nomes de usuário ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[server]** Uso do registrador padrão do sistema para a fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[snowflake-id]** Alteração dos IDs de tabelas do sistema com chaves primárias auto-incrementais, mas sem identificadores únicos, para IDs de 53 bits no estilo Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Calendário]** Suporte ao mapeamento de localidade para exibição nos cabeçalhos do calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Workflow: Nó manual]** Suporte para visualizar e retomar tarefas manuais pendentes dentro de workflows desabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Editor de tema]** Adicionado suporte para personalização da cor do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de fila Redis]** Uso do registrador padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema em que o popup de configuração do ícone do botão estava sendo coberto/sobreposto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Corrigido o problema em que o componente Popover estava sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - Campos select/multiselect/date/richtext em modo somente leitura ainda estavam editáveis em formulários públicos ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Workflow]**

  - Corrigido o problema em que a lógica de inscrição incorreta na fila de tarefas em segundo plano do workflow causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
  - Corrigido um erro potencial relacionado ao cache de logs do workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigido o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
- **[Fonte de dados: API REST]** corrigidas as regras de validação de URL da API REST por @katherinehhh
- **[Criptografia de requisição HTTP]** Corrigido o problema em que os parâmetros da requisição não suportavam o tipo nativo URLSearchParams por @mytharcher
- **[Impressão de modelo]** suporte ao campo chinaRegions por @jiannx
- **[Gerenciador de e-mail]** Corrigido o problema de assunto com lixo eletrônico por @jiannx
