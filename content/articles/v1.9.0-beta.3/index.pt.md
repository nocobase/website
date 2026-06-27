---
title: "NocoBase v1.9.0-beta.3: Suporte para configurar segredo de autenticação independente para sub-aplicativos"
description: "Nota de lançamento da v1.9.0-beta.3"
---

### 🎉 Novas Funcionalidades

- **[Gerenciador de múltiplos aplicativos]** Suporte para configurar segredo de autenticação independente para sub-aplicativos ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher

- **[Fluxo de trabalho: CC]** Adicionar nó CC ao fluxo de trabalho ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Adicionar inicializador para gatilho por @mytharcher

### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Otimizar tamanho da fonte para página de mensagens móveis ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe

- **[Fluxo de trabalho]** Converter operandos para string antes da comparação de strings no cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher

- **[Gerenciador de múltiplos aplicativos]**
  - Adicionar opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

  - Adicionar opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

- **[Campo de coleção: Código]** Adicionar configuração de indentação por @mytharcher

- **[Autenticação: DingTalk]** Suporte para configurar o protocolo e número da porta da URL de callback por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**
  - problema onde campos de anexo não podiam ser selecionados como variáveis na regra de vinculação ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe

  - erro ao atribuir valores no bloco de lista usando campo de ordenação kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh

  - Colapso de filtro: Filtro não é acionado durante a inicialização da página após definir valores padrão para campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe

  - atribuição de valor falha no formulário de edição quando tanto valor quanto opções são definidos para campo de seleção ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh

  - Ação de popup: Exibição da página não atende às expectativas após alternar abas ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe

  - Título da aba do navegador não é sincronizado ao alternar entre submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe

  - Corrigir o problema onde componentes de seleção suspensa são bloqueados pelo teclado no iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe

- **[acl]** Corrigir erro ao excluir uma função no modo de união de funções que inclui a função raiz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie

- **[Autenticação]** Corrigir o problema onde a página de login não pode rolar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe

- **[Gerenciador de múltiplos aplicativos]** Corrigir opções de autenticação em posição inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Corrigir problema de BigInt timestamp em formato string causando problema no dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher

- **[Ação: Solicitação personalizada]** problema de análise de variável na URL durante navegação de rota após sucesso da solicitação personalizada ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh

- **[Bloco: Kanban]** corrigir problemas de UI de subtabela no Kanban e adicionar suporte para configuração de largura de coluna Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh

- **[Fluxo de trabalho: Aprovação]**
  - Adicionar `try/catch` na migração ao atualizar esquema de UI por @mytharcher

  - Corrigir bugs de bloco e associação por @mytharcher

  - Recarregar associação no registro por @mytharcher

  - Para evitar erro quando usuário não existe por @mytharcher
