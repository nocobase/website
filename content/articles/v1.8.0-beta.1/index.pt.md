---
title: "NocoBase v1.8.0-beta.1: Adicionar gerenciamento de categorias de fluxo de trabalho"
description: "Nota de lançamento da v1.8.0-beta.1"
---

### 🎉 Novos Recursos

- **[indefinido]** Adicionar novo plugin "Botão de Copiar Entrada" para campos de texto de linha única ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612

- **[Workflow]** Adicionar gerenciamento de categorias de workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher

### 🚀 Melhorias

- **[cliente]** suporte para configurar se links de menu abrem em nova janela ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh

- **[Ação: Importar registros Pro]** Otimizar desempenho de importação xlsx por @aaaaaajie

- **[Auth: OIDC]** Ignorar maiúsculas/minúsculas ao corresponder usuário por e-mail por @2013xile

- **[Workflow: Aprovação]** Importar coleções de workflow do plugin de workflow para evitar duplicação por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Campos e ações só entram em vigor após atualizar a página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe

  - Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe

  - Corrigir o problema onde blocos criados em pop-ups têm coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe

  - Não é possível selecionar variáveis ao definir valores padrão para campos de associação ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe

  - Corrigir o problema onde valores de campo de texto de linha única são exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe

  - incapaz de expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh

  - Corrigir o problema onde a opção 'Conteúdo de estouro com reticências' é ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe

  - Corrigir problema onde valores padrão do formulário de filtro são inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe

  - problema onde o pop-up do campo de associação de seleção fecha na primeira entrada ao adicionar novos dados ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh

  - campo de associação em subtabela disparando requisição quando variável de iteração tem valor vazio ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh

  - Corrigir a ordem dos campos na lista suspensa do botão de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe

  - dados das regras de validação de formulário perdidos ao recolher painel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh

  - valores selecionados são redefinidos ao atualizar opções de menu suspenso de múltipla escolha via regras de vinculação ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh

  - variável de vinculação de subtabela busca dados de associação ao limpar em vez de usar valor do formulário ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh

  - paginar dados suspensos do campo de associação com tamanho de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh

  - seletor de data não atualizado após alternar de "está entre" de volta para "é" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh

  - Posição de destaque incorreta ao arrastar linhas da tabela ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos

- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile

- **[Workflow]** Corrigir erro lançado ao filtrar workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher

- **[Gerenciador de arquivos]** Corrigir configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher

- **[Editor de tema]** Ocultar opção de troca de tema e corrigir estilo de pop-up ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe

- **[Workflow: Evento de ação personalizada]** Corrigir inicializador para workbench perdido por @mytharcher

- **[Auth: OIDC]** Texto do botão de login não sendo localizado por @2013xile

- **[Workflow: Aprovação]** Corrigir erro ao consultar escopo de responsáveis com condição de associação por @mytharcher
