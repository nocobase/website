---
title: "NocoBase v2.1.0-alpha.11: adicionar ação de item JS"
description: "Nota de lançamento da v2.1.0-alpha.11"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionar ação de item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx

- **[Funcionários de IA]** Adicionada capacidade SKILLS aos funcionários de IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock

- **[Gerenciador de fonte de dados]** Suporte para carregamento sob demanda de ferramentas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

### 🚀 Melhorias

- **[flow-engine]** Melhorar a validação de esquema para a API de construção de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[client]** Otimizar o layout horizontal das ações do formulário ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

- **[app]** Adicionar um fluxo de trabalho de desenvolvimento baseado em Rsbuild para client-v1, mantendo a compatibilidade com o desenvolvimento local de plugins e a topologia atual `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn

- **[Campo de coleção: divisões administrativas da China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx

- **[Workflow]** Adicionar validação para todos os gatilhos e nós ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher

- **[Workflow: Aprovação]** Corrigir problema de desempenho causado por campo JSON ao carregar lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Sincronizar status para a configuração do campo quando o campo do formulário é excluído ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx

- **[resourcer]** Corrigir problema onde fontes de dados externas falham ao carregar corretamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile

- **[database]** Usar aviso em vez de erro quando algum parâmetro de appends for inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher

- **[server]** Alterar o momento de fechamento do Pub-Sub para `beforeStop`, para evitar que mensagens sejam enviadas ou manipuladas após o fechamento do banco de dados ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[Variáveis personalizadas]** pular notificação de autenticação ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

- **[Funcionários de IA]** Corrigir casos de teste com falha no módulo de IA do pacote principal. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock

- **[Localização]** impedir requisição localizationTexts:missing quando a permissão é negada ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Ação: Importar registros Pro]** Corrigir problema onde a opção "Acionar workflow" não funciona quando não está marcada por @mytharcher

- **[Fonte de dados: Oracle externo]** Corrigir erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile

- **[Workflow: Aprovação]** Corrigir problemas de tradução, seleção de nó e retorno de destino no botão de retorno do formulário de aprovação v2 por @zhangzhonghe
