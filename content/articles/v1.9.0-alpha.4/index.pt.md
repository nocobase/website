---
title: "NocoBase v1.9.0-alpha.4: Suporte para configurar limite de tamanho do corpo da requisição via variável de ambiente"
description: "Nota de lançamento da v1.9.0-alpha.4"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Suporte para configurar o limite de tamanho do corpo da requisição via variável de ambiente ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[cliente]** Blocos de tabela suportam adicionar um botão 'Configurações de coluna' para configurar a ordem e visibilidade das colunas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
- **[Visualizador de Arquivos do Office]** Suporte para visualizar arquivos do Office via visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Fonte de dados: Principal]**

  - suporte para ler tabelas da fonte de dados principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
- **[Fluxo de trabalho: Nó paralelo]** Adicionado modo "Todos resolvidos" para nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Autenticação: SAML 2.0]** Suporte para redirecionamento automático para a URL SSO quando o usuário não está autenticado por @2013xile
- **[Adaptador de fila Redis]** Adicionado adaptador Redis para fila de eventos por @mytharcher

### 🚀 Melhorias

- **[cliente]** Não fechar menu automaticamente após seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[servidor]** Tornar a fila de memória concorrente disponível ao processar itens não cheios ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[Notificação: Mensagem no aplicativo]** Alterar mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Fluxo de trabalho]**

  - Reduzir a quantidade de jobs a carregar ao preparar a execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
  - Adicionar constante do tipo json para variável de teste ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
- **[Integração de IA]** Remover `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Fluxo de trabalho: Cálculo JSON]** Tornar nó de consulta JSON testável por @mytharcher
- **[Adaptador de fila Redis]** Tornar fila concorrente disponível ao processar itens não cheios para adaptador Redis por @mytharcher
- **[Autenticação: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como uma string vazia em vez de exibir "Carregando…" por @2013xile

### 🐛 Correções de Bugs

- **[utils]** manipulação incorreta de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[cliente]**

  - Corrigir item de visualização de arquivo em URL nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Adicionar URL completa ao arquivo local ao visualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corrigir problema onde tabela em árvore não pode ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corrigir comportamento inesperado na ordenação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corrigir problema de loop infinito ao analisar valores padrão de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Problema de exibição do campo de data no popup do seletor de dados de campo de associação do formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
  - pesquisa difusa não funcionando no campo de associação de seleção ao usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - variável de objeto atual ausente em regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Corrigir problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - Após alterações de campo, os campos de associação que dependem deste campo não limparam seus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
- **[banco de dados]**

  - Resolver falha de paginação simples automática causada pela convenção de nomenclatura de tabelas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corrigir problema onde a ordenação padrão por chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL no bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
- **[autenticação]** Corrigir o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir permissão do campo de armazenamento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Fluxo de trabalho]**

  - Corrigir resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corrigir problema de ID BigInt no MySQL ao salvar job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
  - Corrigir versão errada da dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Fluxo de trabalho: Nó de requisição HTTP]** Corrigir bug de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Ação: Exportar registros]** Corrigida formatação incorreta de campos relacionais aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Gerenciador de fontes de dados]** Corrigido preservar atributos de fonte de dados externa na configuração da coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Ação: Edição em lote]** Incapaz de realizar edição em lote e atualização em lote no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Fonte de dados: Oracle externa]** Corrigido preservar atributos de fonte de dados externa na configuração da coleção por @aaaaaajie
- **[Fonte de dados: SQL Server externo]** Corrigir formato de armazenamento inconsistente para campos datetime (sem fuso horário) do MSSQL de fontes de dados externas por @aaaaaajie
- **[Fluxo de trabalho: Subfluxo]** Corrigir fluxo suspenso por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro lançado pelo seletor de responsável dentro de fonte de dados externa por @mytharcher
  - A URL do botão Link aponta para um popup na página atual, mas clicar nele mostra um erro 404 por @zhangzhonghe
- **[Gerenciador de e-mail]**

  - adicionar campo rawId para otimização de desempenho por @jiannx
  - atributo ref em html causa exceção de renderização por @jiannx
  - a relação entre mensagens e labels é excepcional sob mysql por @jiannx
