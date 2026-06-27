---
title: "NocoBase v2.0.0-alpha.33: Adicionar suporte a paginação na tabela secundária"
description: "Nota de lançamento da v2.0.0-alpha.33"
---

### 🎉 Novas Funcionalidades

- **[client]** adicionar suporte a paginação na tabela secundária ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

### 🚀 Melhorias

- **[undefined]** atualizar a documentação em inglês do plugin de gráficos ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang

- **[telemetry]** Adicionar métricas de telemetria para número de sub-aplicações online, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile

- **[Workflow]** Suportar bloco de dados no workflow para usar o menu de configurações de detalhes consolidado ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

- **[Gerenciador de multi-aplicativos (obsoleto)]** Habilitada inicialização assíncrona para sub-aplicações usando uma fila ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile

- **[Visualização de dados]** adicionar opções de formato de hora para dados de gráfico ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang

- **[Workflow: Aprovação]** Adicionar notificação para delegado e responsável adicionado por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde os rótulos de tipos enum em componentes relacionados a variáveis não eram exibidos no idioma correto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust

  - Corrigir indicador de campo obrigatório ausente após definir validação de frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh

  - corrigir problema ao limpar data sem fuso horário no formulário de edição ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh

  - Corrigir validação de campo obrigatório para regras de vinculação ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe

  - resolver problema de Data Inválida ao excluir Data Especificada no filtro… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh

  - Corrigir falha de validação obrigatória para o campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh

  - Adicionar configuração de escopo de dados para campos de relacionamento em formulários de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe

  - corrigir problema de formato de hora em campos de tabela secundária ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh

- **[flow-engine]**
  - quando o valor do filtro de campo é definido como falso, a requisição com escopo de dados está incorreta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust

  - não é possível resolver o valor do campo de associação da variável do objeto atual do subformulário ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust

  - corrigir: resolver problema de parâmetro de requisição de página após excluir dados na última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh

- **[server]** Isolar canal Pub-Sub por nome de aplicativo ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher

- **[Bloco: GridCard]** corrigir problema de duplicação de dados entre bloco de lista e grid card ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh

- **[Gerenciador de multi-aplicativos (obsoleto)]** Coleção incorreta para métrica de status de sub-aplicação ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile

- **[Workflow]**
  - Resolvido um problema onde o despachante de workflow em modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar a consumo desnecessário de eventos de fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher

  - Corrigir um problema onde, no modo de divisão de serviço, executar manualmente um workflow contendo um nó de interrupção permanecia travado em status pendente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir erro lançado ao duplicar workflow de aprovação por @mytharcher

  - Criar nós de aprovação em ramificações paralelas não é mais suportado para evitar problemas causados pelo status do processo por @mytharcher

- **[Gerenciador de e-mail]**
  - adicionar logs de sincronização por @jiannx

  - adicionar migração para índices por @jiannx
