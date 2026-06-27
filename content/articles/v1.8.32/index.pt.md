---
title: "NocoBase v1.8.32: Métodos para Otimizar o Carregamento de Recursos Localizados"
description: "Nota de Lançamento da v1.8.32"
---

### 🚀 Melhorias

- **[servidor]** Otimizar o método de carregamento de recursos l10n para evitar bloqueio do event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) por @2013xile

- **[cache]** Evitar sobrecarga de desempenho causada pela clonagem de filtros Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) por @2013xile

- **[Ação: Importar registros]** Mensagens de erro aprimoradas quando cabeçalhos de tabela estão ausentes ([#7656](https://github.com/nocobase/nocobase/pull/7656)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - corrigir erro ao limpar campo de data no bloco de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh

  - evitar quebra de palavra no rótulo do formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) por @katherinehhh

  - corrigir valor padrão da subtabela não funcionando no drawer de edição de formulário ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh

- **[Campo de coleção: divisões administrativas da China]** Falha na importação de dados quando a cidade e a área têm o mesmo nome ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Workflow]**
  - Corrigir o problema em que, após excluir um nó que inicia uma ramificação, a chave do primeiro nó mantido dentro da ramificação era alterada incorretamente para um novo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

  - Corrigir erro do logger lançado quando a aplicação é interrompida ([#7639](https://github.com/nocobase/nocobase/pull/7639)) por @mytharcher

- **[Gerenciador de arquivos]** Corrigir o problema de arquivos `.msg` não serem enviados corretamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Fonte de dados: Principal]** Corrigir o problema em que os metadados não eram sincronizados entre vários nós após criar um campo de associação reversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir o problema de tradução do texto de status em notificações de conclusão de aprovação, usando o idioma padrão do sistema para tradução quando o usuário não definiu uma preferência de idioma por @mytharcher

  - Corrigir o problema em que a contagem de tarefas não era atualizada após adicionar um responsável por @mytharcher
