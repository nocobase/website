---
title: "NocoBase v1.6.25: Adicionar ci de publicação para kit de licença"
description: "Nota de lançamento da v1.6.25"
---

### 🎉 Novas Funcionalidades

- **[indefinido]** adicionar ci de publicação para kit de licença ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

- **[Visualização de dados: ECharts]** Adicionar configuração "Inverter eixo Y" para gráficos de barras por @2013xile

### 🚀 Melhorias

- **[utils]** Aumentar a altura da lista de campos do botão de filtro e ordenar/categorizar os campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

- **[client]** otimizar o estilo do botão adicionar em subtabela e alinhar o paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

- **[Gerenciador de arquivos]** Adicionar opção de timeout OSS com padrão de 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Política de senha]** Alterar expiração padrão de senha para nunca expirar por @2013xile

- **[WeCom]** Priorizar e-mail corporativo sobre e-mail pessoal ao atualizar o e-mail do usuário por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - No bloco de recolhimento, clicar no botão limpar na caixa de pesquisa de campo de relação não deve excluir o intervalo de dados ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe

  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - Proibir mover menus antes ou depois das abas da página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

  - Bloco de tabela exibe dados duplicados ao filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe

  - No formulário de filtro, alternar o operador do campo e depois atualizar a página causa um erro ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe

- **[database]**
  - Evitar erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

  - adicionar unavailableActions à coleção sql e coleção de visualização ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh

- **[create-nocobase-app]** Corrigir temporariamente problema com mariadb fazendo downgrade para 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos

- **[Autenticação]** Não permitir alterar o nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Impressão de modelo]** Corrigir: Lógica de validação de permissão correta para prevenir ações não autorizadas. por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]** expiração da url de acesso inválida por @jiannx

- **[Bloco: Árvore]** Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias por @zhangzhonghe
