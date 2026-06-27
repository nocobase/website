---
title: "NocoBase v2.1.0-alpha.1: Melhoria na interface de atribuição de campos de data/hora para suportar seleção de datas/horas relativas"
description: "Nota de lançamento da v2.1.0-alpha.1"
---

### 🎉 Novas Funcionalidades

- **[Ação: Edição em lote]** edição em lote 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) por @jiannx

### 🚀 Melhorias

- **[cliente]**
  - Melhora a interface de atribuição de campos de data/hora para suportar a seleção de datas/horas relativas. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) por @gchust

  - Suporta especificar o campo de título para campos de associação ao atribuir um campo. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) por @gchust

  - Tabela 2.0 suporta ordenação por arrastar e soltar ([#8540](https://github.com/nocobase/nocobase/pull/8540)) por @jiannx

  - Move as configurações de atribuição de campo e valor padrão para a configuração no nível do formulário. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) por @chenos

- **[Localização]** cria automaticamente chaves i18n ausentes ([#8588](https://github.com/nocobase/nocobase/pull/8588)) por @jiannx

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** Corrige um problema onde o submenu do campo de filtro não podia ser expandido quando uma palavra-chave de pesquisa estava presente. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) por @gchust

- **[cliente]**
  - Corrige um problema onde atribuir um único registro a um campo de relação muitos-para-muitos produzia resultados incorretos. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) por @gchust

  - analisa data usando o seletor de data e adiciona validação de força de senha, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) por @jiannx

  - Corrige o problema de espaçamento causado por ações vinculadas ocultas na coluna de ação da tabela ([#8646](https://github.com/nocobase/nocobase/pull/8646)) por @zhangzhonghe

  - corrige erro de sintaxe de resolução quando o item markdown renderiza Liquid inválido ([#8637](https://github.com/nocobase/nocobase/pull/8637)) por @katherinehhh

  - Corrige requisições de análise desnecessárias do backend para propriedades de campos para-muitos no bloco de formulário. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) por @gchust

  - Corrige o problema onde `Action.Modal` não podia ser fechado após alguma interação ([#8642](https://github.com/nocobase/nocobase/pull/8642)) por @mytharcher

  - corrige a falta de formato de número para campos de fórmula numérica e configurações de formato de data para campos de fórmula de data ([#8625](https://github.com/nocobase/nocobase/pull/8625)) por @katherinehhh

  - corrige renderização incompleta da borda superior no primeiro item do formulário ([#8623](https://github.com/nocobase/nocobase/pull/8623)) por @katherinehhh

  - Corrige problema onde o campo de anexo de associação limpo não é salvo após o envio no formulário de edição ([#8616](https://github.com/nocobase/nocobase/pull/8616)) por @katherinehhh

  - corrige dados filtrados incorretos no dropdown de associação quando o campo de título é uma chave estrangeira ([#8619](https://github.com/nocobase/nocobase/pull/8619)) por @katherinehhh

  - corrige incapacidade de restaurar dados selecionados no componente de campo seletor de registro após edição ([#8610](https://github.com/nocobase/nocobase/pull/8610)) por @katherinehhh

  - Corrige opções do componente de campo não atualizadas em tempo real quando o campo de associação alterna o padrão ([#8611](https://github.com/nocobase/nocobase/pull/8611)) por @katherinehhh

- **[utils]** Corrige problema de segurança do mecanismo avaliador `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) por @mytharcher

- **[Funcionários de IA]**
  - Corrige um problema onde os links de citação de pesquisas web de IA não eram exibidos na caixa de chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) por @cgyrock

  - corrige erro de parâmetros da API OpenAI ([#8633](https://github.com/nocobase/nocobase/pull/8633)) por @cgyrock

- **[Gerenciador de arquivos]** corrige problema onde o componente de campo de arquivo ainda pode abrir o diálogo do seletor quando desabilitado ([#8617](https://github.com/nocobase/nocobase/pull/8617)) por @katherinehhh
