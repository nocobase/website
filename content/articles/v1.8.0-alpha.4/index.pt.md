---
title: "NocoBase v1.8.0-alpha.4: Suporte para filtrar mais campos do fluxo de trabalho"
description: "Nota de lançamento da v1.8.0-alpha.4"
---

### 🚀 Melhorias

- **[Workflow]** Suporte para filtrar mais campos do workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

- **[Gerenciador de e-mail]** suporta o valor de envio padrão em pop-up, suporta pesquisa difusa para destinatários e corrige problemas por @jiannx

### 🐛 Correções de Bugs

- **[database]** correção: adiciona campos de criador e atualizador ausentes na importação de xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie

- **[client]**
  - título do campo ausente ao definir uma variável no componente de atribuição ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh

  - Campos de associação mostram sub-tabela e sub-formulário ao passar o mouse no modo read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe

  - regras de vinculação do bloco markdown não funcionando quando acionadas por ação pop-up ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh

  - mudar de página na sub-tabela do bloco de detalhes dentro de modal aciona aviso de alterações não salvas ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh

  - regras de vinculação de estilo de campo não funcionando ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh

- **[Gerenciador de tarefas assíncronas]** Corrigido problema de execução múltipla durante importação assíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie

- **[Localização]** Resolve erro causado por textos vazios ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile

- **[Ação: Exportar registros Pro]** Corrigido problema de execução múltipla durante importação assíncrona por @aaaaaajie

- **[Workflow: Aprovação]** Corrige aprovação delegada que não podia continuar quando aprovada por outros por @mytharcher

- **[Gerenciador de e-mail]**
  - múltiplas chaves primárias para a tabela "mailmessagelabels_mailmessages" por @jiannx

  - pop-up de configuração não exibindo por @jiannx

  - pesquisa difusa de e-mail para criar filtros únicos por @jiannx

  - pesquisa difusa de destinatário suporta campos associados por @jiannx

  - adiciona o campo "id" ao mailmessagelabelsMailmessages por @jiannx
