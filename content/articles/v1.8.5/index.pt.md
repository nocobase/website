---
title: "NocoBase v1.8.5: Adicionar mais interfaces calculáveis"
description: "Nota de lançamento da v1.8.5"
---

### 🚀 Melhorias

- **[Campo de coleção: Fórmula]** Adicionar mais interfaces calculáveis ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher

- **[Workflow]** Usar registro em log em vez de lançar erro quando a execução não deve ocorrer devido ao status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher

- **[Workflow: Aprovação]** Suporte para excluir aprovação quando dados relacionados são excluídos por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Problema onde campos de anexo não podiam ser selecionados como variáveis em regras de vinculação ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe

  - Corrigir o problema onde componentes de seleção suspensa são bloqueados pelo teclado no iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe

  - Atribuição de valor falha no formulário de edição quando tanto valor quanto opções são definidos para o campo de seleção ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh

  - Colapso de filtro: O filtro não é acionado durante a inicialização da página após definir valores padrão para campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe

  - Erro ao atribuir valores em bloco de lista usando campo de ordenação kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh

  - O título da aba do navegador não é sincronizado ao alternar entre submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe

  - Ação pop-up: A exibição da página não atende às expectativas após alternar abas ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe

- **[acl]** Corrigir erro ao excluir uma função no modo de união de funções que inclui a função raiz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie

- **[Gerenciador de múltiplos aplicativos]** Corrigir opções de autenticação em posição inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher

- **[Autenticação]** Corrigir o problema onde a página de login não pode rolar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe

- **[Workflow: Aprovação]** Corrigir associações ao enviar aprovação por @mytharcher
