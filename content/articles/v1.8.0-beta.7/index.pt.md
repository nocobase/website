---
title: "NocoBase v1.8.0-beta.7: Suporte para cópia com um clique do conteúdo do campo de texto"
description: "Nota de lançamento da v1.8.0-beta.7"
---

### 🎉 Novas Funcionalidades

- **[Cópia de texto]** Suporte para copiar o conteúdo de campos de texto com um clique ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[cliente]**
  - O seletor de campos de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

  - Após criar o campo de relação reversa, a opção "Criar campo de relação reversa na tabela de dados de destino" nas configurações do campo de associação não estava marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie

- **[Controle de acesso]** Corrigido um problema em que o aplicativo bloqueava a entrada quando não existia uma função padrão ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie

- **[Workflow: Nó de loop]** Corrigida a execução do ramo do loop quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Gerenciador de fontes de dados]** As alterações de escopo agora entram em vigor imediatamente para todas as funções relacionadas. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie

- **[Workflow: Evento de ação personalizada]** Corrigida a variável de URL de redirecionamento que não era analisada por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigida a variável do gatilho ao filtrar por tipo por @mytharcher

  - Corrigidas as estatísticas de tarefas pendentes que não eram atualizadas quando a execução era cancelada por @mytharcher
