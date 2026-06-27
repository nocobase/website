---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para configurar o limite de tamanho do corpo da requisição via variável de ambiente, suporte para visualizar arquivos do Office através da pré-visualização ao vivo da Microsoft e outras melhorias."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Data de lançamento: 31/07/2025*

#### 🎉 Novos Recursos

- **[Visualizador de Arquivos do Office]** Suporte para visualizar arquivos do Office através da pré-visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Não fechar o menu automaticamente após a seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Notificação: Mensagem no aplicativo]** Alterar mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Fluxo de trabalho]** Reduzir a quantidade de jobs a carregar ao preparar a execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Autenticação: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como uma string vazia em vez de exibir "Carregando…" por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir problema onde a tabela em árvore não pode ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corrigir comportamento inesperado na ordenação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corrigir problema de loop infinito ao analisar valores padrão de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Corrigir problema de exibição de campo de data no popup do seletor de dados ao configurar campos de relação no formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[Fluxo de trabalho: Nó de requisição HTTP]** Corrigir bug de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir problema de ID BigInt no MySQL ao salvar job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Ação: Exportar registros]** Corrigida a formatação incorreta de campos de relação aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Fonte de dados: SQL Server externo]** Corrigir formato de armazenamento inconsistente para campos datetime (sem fuso horário) do MSSQL de fontes de dados externas por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Corrigir erro lançado pela seleção de responsável dentro de fonte de dados externa por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Data de lançamento: 01/08/2025*

#### 🎉 Novos Recursos

- **[servidor]** Suporte para configurar o limite de tamanho do corpo da requisição via variável de ambiente ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[cliente]** Blocos de tabela suportam adicionar um botão 'Configurações de coluna' para configurar a ordem e visibilidade das colunas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
- **[Visualizador de Arquivos do Office]** Suporte para visualizar arquivos do Office através da pré-visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Fonte de dados: Principal]**

  - suporte para ler tabelas da fonte de dados principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
- **[Fluxo de trabalho: Nó paralelo]** Adicionar modo "Todos resolvidos" para nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Autenticação: SAML 2.0]** Suporte para redirecionamento automático para a URL SSO quando o usuário não está autenticado por @2013xile
- **[Adaptador de fila Redis]** Adicionar adaptador Redis para fila de eventos por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Não fechar o menu automaticamente após a seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[servidor]** Tornar a fila de memória concorrente disponível ao processar itens não cheios ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[Notificação: Mensagem no aplicativo]** Alterar mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Fluxo de trabalho]**

  - Reduzir a quantidade de jobs a carregar ao preparar a execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
  - Adicionar constante de tipo json para variável de teste ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
- **[Integração de IA]** Remover `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Fluxo de trabalho: Cálculo JSON]** Tornar o nó de consulta JSON testável por @mytharcher
- **[Adaptador de fila Redis]** Tornar a fila concorrente disponível ao processar itens não cheios para o adaptador Redis por @mytharcher
- **[Autenticação: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como uma string vazia em vez de exibir "Carregando…" por @2013xile

#### 🐛 Correções de Bugs

- **[utils]** Manipulação incorreta de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[cliente]**

  - Corrigir item de pré-visualização de arquivo em url nula ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Adicionar URL completa ao arquivo local ao pré-visualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corrigir problema onde a tabela em árvore não pode ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Corrigir comportamento inesperado na ordenação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - Corrigir problema de loop infinito ao analisar valores padrão de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Problema de exibição de campo de data no popup do seletor de dados de campo de relação do formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
  - pesquisa difusa não funcionando no campo de relação de seleção ao usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - variável de objeto atual ausente em regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Corrigir problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - Após alterações de campo, os campos de associação que dependem deste campo não limparam seus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
- **[banco de dados]**

  - Resolver falha de paginação simples automática causada pela convenção de nomenclatura de tabela. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corrigir problema onde a ordenação padrão por chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL no bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
- **[autenticação]** Corrigir o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir permissão de campo de armazenamento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Fluxo de trabalho]**

  - Corrigir resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corrigir problema de ID BigInt no MySQL ao salvar job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
  - Corrigir versão errada da dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Fluxo de trabalho: Nó de requisição HTTP]** Corrigir bug de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Ação: Exportar registros]** Corrigida a formatação incorreta de campos de relação aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Gerenciador de fonte de dados]** Corrigido preservar atributos de fonte de dados externa na configuração da coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Ação: Edição em lote]** Incapaz de realizar edição em lote e atualização em lote no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Fonte de dados: Oracle externo]** Corrigido preservar atributos de fonte de dados externa na configuração da coleção por @aaaaaajie
- **[Fonte de dados: SQL Server externo]** Corrigir formato de armazenamento inconsistente para campos datetime (sem fuso horário) do MSSQL de fontes de dados externas por @aaaaaajie
- **[Fluxo de trabalho: Subfluxo]** Corrigir fluxo suspenso por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro lançado pela seleção de responsável dentro de fonte de dados externa por @mytharcher
  - A URL do botão Link aponta para um popup na página atual, mas clicar nele mostra um erro 404 por @zhangzhonghe
- **[Gerenciador de email]**

  - adicionar campo rawId para otimização de desempenho por @jiannx
  - atributo ref em html causa exceção de renderização por @jiannx
  - a coleção de relacionamento de mensagens e labels é excepcional sob mysql por @jiannx
