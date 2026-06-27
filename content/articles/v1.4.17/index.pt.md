---
title: "NocoBase v1.4.17: Suporta o uso da variável \"Registros selecionados da tabela\" em campos de array m2m"
description: "Nota de lançamento da v1.4.17"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte ao uso da variável "Registros selecionados da tabela" em campos de array m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) por @2013xile

### 🚀 Melhorias

- **[undefined]** Habilitar plugin de tema por padrão ([#5957](https://github.com/nocobase/nocobase/pull/5957)) por @zhangzhonghe

- **[Fonte de dados: Principal]** Adicionada validação de conflito de nomes para impedir que usuários criem Coleções com o mesmo nome de Coleções do sistema ([#5962](https://github.com/nocobase/nocobase/pull/5962)) por @chareice

- **[Workflow]** Evitar uso indevido de variáveis de intervalo de datas na maioria dos lugares, exceto no componente de filtro ([#5954](https://github.com/nocobase/nocobase/pull/5954)) por @mytharcher

### 🐛 Correções de Bugs

- **[database]**
  - Corrigido um problema na ação destroy onde filterByTk com parâmetro filter não conseguia excluir dados ([#5976](https://github.com/nocobase/nocobase/pull/5976)) por @chareice

  - Os métodos firstOrCreate e updateOrCreate do repositório perdem contexto ([#5973](https://github.com/nocobase/nocobase/pull/5973)) por @chenos

- **[client]**
  - Corrigido problema ao adicionar um campo de relacionamento um-para-um no formulário ([#5975](https://github.com/nocobase/nocobase/pull/5975)) por @katherinehhh

  - Corrigido problema com atribuição de campo em subtabela ao re-selecionar dados após excluir dados ([#5958](https://github.com/nocobase/nocobase/pull/5958)) por @katherinehhh

  - Corrigido erro no bloco de tabela causado por dados contendo campos chamados 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) por @zhangzhonghe

- **[Fonte de dados: Principal]** Corrigidos problemas de suporte legado com o campo unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) por @chareice

- **[Workflow]** Corrigido erro no bloco de subdetalhes ao lançar exceção na configuração da interface do nó manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) por @mytharcher
