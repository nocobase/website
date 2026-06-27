---
title: "NocoBase v2.0.0-beta.18: suporte a env.ESM_CDN_BASE_URL"
description: "Nota de lançamento da v2.0.0-beta.18"
---

### 🎉 Novos Recursos

- **[flow-engine]** Suporte a env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

### 🚀 Melhorias

- **[acl]** acl adiciona método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx

- **[client]** Suporte para desabilitar parâmetros padrão redundantes de appends para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuário, mantendo compatibilidade com autenticadores existentes que dependem de mobile por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde o fluxo de eventos falhava ao aplicar ao atualizar blocos de destino em popups. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust

  - Corrigido problema onde os dados da página eram atualizados incorretamente após abrir e fechar o popup pela primeira vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust

  - Corrigido um problema que causava a atualização repetida do bloco de dados após enviar um formulário. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust

  - Corrigido campo nanoid que não regenerava o valor padrão após o envio da criação ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh

  - Corrigida exibição incorreta ao definir valores padrão para o modelo de campo cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh

- **[flow-engine]** Corrigido carregamento incorreto de algumas bibliotecas ESM no runjs devido à classificação incorreta como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust

- **[Gerenciador de Arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar caminho de acesso fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Workflow]** Adicionada tolerância a falhas para o componente de seleção de registro de coleção, para evitar erro quando a coleção é excluída ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[Funcionários de IA]** Corrigida a exceção que ocorre quando ferramentas são chamadas automaticamente durante a modelagem de dados de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock

- **[Ação: Importar Registros Pro]** Corrigidos números de contagem no resultado da importação e tradução de mensagens por @mytharcher

- **[Workflow: Subfluxo]** Corrigido caminho da rota do link do workflow por @mytharcher

- **[Impressão de modelo]** corrigido problema de exibição da lista de campos na configuração da ação de impressão de modelo por @katherinehhh

- **[Workflow: Aprovação]**
  - Corrigido erro ao adicionar função a usuário se o workflow de públicos estiver desabilitado por @mytharcher

  - Adicionada tolerância a falhas no workflow excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher

- **[WeCom]** Corrigido um problema onde usuários não podiam ser registrados automaticamente quando o mobile estava ausente por @2013xile
