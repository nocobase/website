---
title: "NocoBase v1.9.0-beta.5: Suporte para configurar limite de tamanho do corpo da requisição via variável de ambiente"
description: "Nota de lançamento da v1.9.0-beta.5"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Suporte para configurar o limite de tamanho do corpo da requisição via variável de ambiente ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie

- **[Fluxo de trabalho: nó paralelo]** Adicionar modo "Todos resolvidos" para nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher

- **[Autenticação: SAML 2.0]** Suporte para redirecionamento automático para a URL SSO quando o usuário não está autenticado por @2013xile

- **[Adaptador de fila Redis]** Adicionar adaptador Redis para fila de eventos por @mytharcher

- **[Fluxo de trabalho: nó de cálculo de data]** Suporte para executar teste do nó por @mytharcher

### 🚀 Melhorias

- **[servidor]** Tornar a fila de memória concorrente disponível quando os itens em processamento não estão completos ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher

- **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie

- **[cliente]** Seletor de Cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe

- **[Integração de IA]** Remover `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher

- **[Fluxo de trabalho: nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe

- **[Fluxo de trabalho]**
  - Adicionar constante do tipo json para variável de teste ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher

  - Usar registro em log em vez de lançar erro quando a execução não deve ocorrer devido ao status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher

  - Tornar a comparação compatível para valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

- **[Campo de coleção: Fórmula]** Adicionar mais interfaces calculáveis ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher

- **[Adaptador de fila Redis]** Tornar a fila concorrente disponível quando os itens em processamento não estão completos para o adaptador Redis por @mytharcher

- **[Fluxo de trabalho: Cálculo JSON]** Tornar o nó de consulta JSON testável por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Suporte para excluir aprovação quando os dados relacionados são excluídos por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - pesquisa difusa não funciona no campo de seleção de associação ao usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh

  - variável de objeto atual ausente nas regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh

  - Após alterações no campo, os campos de associação que dependem deste campo não tiveram seus valores limpos ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe

  - Corrigir problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie

  - Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe

  - Evitar que campos não associados sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher

  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe

  - regras de estilo não funcionam na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh

  - problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh

  - problema de exibição para campos de associação em regras de vinculação ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh

  - Corrigir erro: Can't resolve 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe

- **[banco de dados]**
  - Resolver falha na paginação simples automática causada pela convenção de nomenclatura de tabelas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie

  - Corrigir problema onde a ordenação padrão da chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL no bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie

  - Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie

  - Corrigido erro ao ativar paginação simples para tabelas de fonte de dados externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie

- **[autenticação]** Corrigir o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile

- **[Fluxo de trabalho]** Corrigir versão errada da dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher

- **[Ação: Edição em lote]** Incapacidade de realizar edição em lote e atualização em lote no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe

- **[Gerenciador de fonte de dados]** Corrigida preservação de atributos de fonte de dados externa na configuração da coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie

- **[Campo de coleção: Ordenação]** seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh

- **[Fonte de dados: Oracle externa]** Corrigida preservação de atributos de fonte de dados externa na configuração da coleção por @aaaaaajie

- **[Fluxo de trabalho: Subfluxo]** Corrigir erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir múltiplos níveis de associações ao enviar aprovação por @mytharcher

  - A URL do botão Link aponta para um popup na página atual, mas clicar nele mostra um erro 404 por @zhangzhonghe

  - Corrigir associações ao enviar aprovação por @mytharcher

  - Adicionar tolerância a falhas para aprovação excluída na lista de registros por @mytharcher

  - Corrigir exceção ao excluir registro por @mytharcher

- **[Gerenciador de e-mail]** a coleção de relacionamento de mensagens e rótulos é excepcional sob mysql por @jiannx
