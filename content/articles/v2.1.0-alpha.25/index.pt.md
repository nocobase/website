---
title: "NocoBase v2.1.0-alpha.25: Suporte para excluir aprovação em rascunho"
description: "Nota de lançamento da v2.1.0-alpha.25"
---

### 🎉 Novos Recursos

- **[Workflow: Aprovação]** Suporte para excluir rascunho de aprovação por @mytharcher

### 🚀 Melhorias

- **[indefinido]** Atualizar documentação da IA para exigir NocoBase >= 2.1.0-beta.20 e recomendar a versão beta mais recente. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn

- **[Funcionários de IA]** Atualizar configuração de tarefa de atalho do funcionário de IA para usar o mesmo componente de configurações de habilidades da configuração do nó de funcionário de IA no workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema em que os valores padrão não eram aplicados ao readicionar um registro após ele ter sido removido de uma subtabela. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

  - Filtrar blocos opcionais não essenciais na caixa de pop-up de seleção de campos relacionados ([#9224](https://github.com/nocobase/nocobase/pull/9224)) por @jiannx

- **[Ação: Importar registros]** Corrigido o problema em que a importação de xlsx falhava e gerava erro de cabeçalho não correspondente ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[Configurações de licença]** Atualizar mensagem de sucesso ao salvar licença ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Funcionários de IA]** Corrigido o problema em que as variáveis no prompt do sistema dos funcionários de IA não surtiam efeito ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[IdP: OAuth]** Corrigidas falhas de login via CLI OAuth e restrito o registro dinâmico a URLs de callback locais ([#9248](https://github.com/nocobase/nocobase/pull/9248)) por @2013xile

- **[IA: Base de conhecimento]** Corrigido problema em que a exclusão de documentos da base de conhecimento não excluía os dados vetoriais associados por @cgyrock

- **[Ação: Importar registros Pro]** Corrigido o problema em que a importação de xlsx falhava e gerava erro de cabeçalho não correspondente por @mytharcher
