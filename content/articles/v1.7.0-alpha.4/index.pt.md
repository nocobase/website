---
title: "NocoBase v1.7.0-alpha.4: Suporte a campos de texto longo como campos de título para campo de associação"
description: "Nota de lançamento da v1.7.0-alpha.4"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Suporte a campos de texto longo como campos de título para campos de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

  - Suporte a configurações de estilo de campo para tamanho da fonte, peso da fonte e estilo da fonte ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh

- **[Variáveis e segredos]** Suporte a variáveis de ambiente na URL de botões de link ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

- **[Workflow: Nó de Agregação]** Suporte para configurar precisão do resultado da agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🚀 Melhorias

- **[client]** Suporte a correspondência difusa para campos selecionados no botão de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh

- **[Notificação: Email]** Adicionar descrição da configuração do campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66

- **[Workflow: nó de e-mail]** Adicionar descrição da configuração do campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66

- **[Calendário]** Plugin de calendário com configurações opcionais para ativar ou desativar a criação rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

- **[Cliente WEB]** Adicionar prompt de confirmação secundária para Limpar Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh

- **[Gerenciador de e-mail]** Suporte a reautorização e seleção automática da conta ao enviar um e-mail por @jiannx

### 🐛 Correções de Bugs

- **[client]**
  - Transparência do botão de ação causando problema de exibição de configuração ao passar o mouse ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

  - Erro de envio de campo de hora no locale chinês (sintaxe de entrada inválida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh

  - Altura da subtabela no formulário definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

  - Campo oculto por padrão com valor retido na regra de vinculação não funcionando ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh

  - Botão adicionar filho não exibindo modo apenas ícone ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh

- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[utils]** Bug conhecido de 'responsivo para desktop' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe

- **[avaliadores]** Reverter casas decimais arredondadas para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Autenticação]**
  - Aparar opções do autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

- **[Bloco: Mapa]**
  - Problema de gerenciamento de chave do bloco de mapa causando falhas de requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

  - Campos de chave secreta não acionando validação no gerenciamento de mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh

- **[Gerenciador de arquivos]**
  - Incapacidade de acessar arquivos armazenados no COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos

  - Codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Cliente WEB]** O caminho na tabela de gerenciamento de rotas é diferente do caminho real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe

- **[Bloco: Painel de ações]** Problema de layout no painel de ações móvel após ocultar botões devido ao controle de permissão ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh

- **[Fonte de dados: Principal]** Incapacidade de criar uma view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Workflow]** Corrigir contagem de tarefas legadas após exclusão do workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Ação: Exportar registros Pro]** Incapacidade de exportar anexos por @chenos

- **[Gerenciador de backup]**
  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do template de backup por @gchust

  - Restauração pode causar erros de execução do workflow por @gchust

  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust

- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar configuração de notificação. por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir erro na tabela de processo quando o job é excluído por @mytharcher

  - Alterar aprovação retornada como pendente por @mytharcher

  - Corrigir erro lançado ao adicionar resultado do nó de consulta por @mytharcher

  - Corrigir botão de ação ausente na tabela de processo por @mytharcher

  - Problema de estilo com o diálogo pop-up 'Aplicar novo' por @zhangzhonghe
