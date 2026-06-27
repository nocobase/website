---
title: "NocoBase v1.8.8: Adicionar modo \"Todos liquidados\" para nó paralelo"
description: "Nota de lançamento da v1.8.8"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Nó paralelo]** Adicionado modo "Todos resolvidos" para nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher

- **[Adaptador de fila Redis]** Adicionado adaptador Redis para fila de eventos por @mytharcher

### 🚀 Melhorias

- **[servidor]** Tornar fila de memória concorrente disponível quando o processamento de itens não está completo ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher

- **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie

- **[Workflow: Nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe

- **[Adaptador de fila Redis]** Tornar fila concorrente disponível quando o processamento de itens não está completo para o adaptador Redis por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - variável de objeto atual ausente em regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh

  - Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe

  - Corrigido problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie

  - Após alterações de campo, os campos de associação que dependem deste campo não tiveram seus valores limpos ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe

  - problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh

- **[banco de dados]**
  - Resolver falha de paginação simples automática causada pela convenção de nomenclatura de tabelas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie

  - Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie

  - Corrigido problema onde a ordenação padrão por chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL em bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie

- **[auth]** Corrigido o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile

- **[Gerenciador de fonte de dados]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie

- **[Ação: Edição em lote]** Incapacidade de realizar edição em lote e atualização em lote no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe

- **[Workflow]** Corrigida versão errada de dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher

- **[Fonte de dados: Oracle externo]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção por @aaaaaajie

- **[Workflow: Aprovação]** A URL do botão Link aponta para um popup na página atual, mas clicar mostra um erro 404 por @zhangzhonghe

- **[Gerenciador de e-mail]** a relação entre mensagens e rótulos da coleção é excepcional sob mysql por @jiannx
