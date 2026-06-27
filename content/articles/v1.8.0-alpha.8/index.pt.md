---
title: "NocoBase v1.8.0-alpha.8: Suporte para cópia com um clique do conteúdo do campo de texto"
description: "Nota de lançamento da v1.8.0-alpha.8"
---

### 🎉 Novas Funcionalidades

- **[Cópia de texto]** Suporte para copiar conteúdo de campos de texto com um clique ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

- **[Gerenciador de e-mail]** Suporte para excluir e-mail por @jiannx

### 🚀 Melhorias

- **[cliente]**
  - Adicionadas opções "vazio" e "não vazio" às regras de vinculação de campos do tipo caixa de seleção ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh

  - A largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Gerenciador de tarefas assíncronas]** Melhora o desempenho da criação de tarefas durante a exportação ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie

- **[Fluxo de trabalho: Aprovação]** Adicionada opção de campo extra para a lista de reatribuídos por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Perda da casa decimal após alternar o componente de valor de máscara para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Renderização incorreta de Markdown (Vditor) em subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

  - Após criar o campo de relação inversa, a opção "Criar campo de relação inversa na tabela de dados de destino" nas configurações do campo de associação não estava marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie

  - O seletor de campo de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[Controle de acesso]** Corrigido um problema onde o aplicativo bloqueava a entrada quando nenhum papel padrão existia ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie

- **[Gerenciador de fonte de dados]** Alterações de escopo agora entram em vigor imediatamente para todos os papéis relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie

- **[Fluxo de trabalho: Nó de loop]** Corrigido o ramo do loop sendo executado quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigida a variável de URL de redirecionamento não sendo analisada por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Corrigidas estatísticas de tarefas pendentes não atualizadas quando a execução é cancelada por @mytharcher

- **[Gerenciador de e-mail]** Falha ao excluir e-mail por @jiannx

- **[Gerenciador de backup]** Erro de comando desconhecido ao restaurar backups do MySQL na plataforma Windows por @gchust
