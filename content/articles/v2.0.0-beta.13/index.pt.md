---
title: "NocoBase v2.0.0-beta.13: Suporte para configurar uma lista de permissões de origem CORS"
description: "Nota de lançamento da v2.0.0-beta.13"
---

### 🚀 Melhorias

- **[servidor]** Suporte para configurar uma lista de permissões de origem CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile

- **[Ação: Exportar registros]** Melhora o escopo dos dados da ação de exportação com base nos registros selecionados ou filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh

- **[Ação: Exportar registros Pro]** Melhora o escopo dos dados da ação de exportação com base nos registros selecionados ou filtros de recurso por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que o pop-up "Variáveis Personalizadas" ficava oculto ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe

  - Corrige problema ao editar coleção na interface gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh

  - Corrige problema em que as configurações de ordenação de grupos de campos da coleção não surtiam efeito. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh

  - Corrige o problema em que a altura do modal de atalho excedia a altura da janela de visualização ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe

  - Corrige o problema em que as regras de vinculação de botões de linha da tabela afetavam o estado dos botões dentro de formulários pop-up ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe

  - Corrige um problema em que o estado da coluna de ação da tabela era poluído ao alternar páginas. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust

  - Corrige o problema em que o botão "Configurações de Coluna" da tabela não funcionava ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe

  - Corrige um problema em que o pop-up do seletor do campo de associação de arquivo tinha um z-index incorreto, e a configuração do pop-up não podia ser salva corretamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust

- **[mecanismo de fluxo]**
  - Corrige um problema em que as variáveis nos parâmetros de código runjs eram resolvidas antes da execução. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust

  - Corrige um problema em que as variáveis pop-up não podiam ser selecionadas no pop-up de criação rápida do seletor de dados. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust

  - Corrige um problema em que clicar repetidamente no menu de configuração podia abrir múltiplos pop-ups de configuração. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust

- **[Mobile (obsoleto)]** Plugin mobile obsoleto (substituído pelo plugin ui-layout a partir da versão 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

- **[Mecanismo de fluxo]** Corrige um problema em que variáveis contendo hífens não podiam ser analisadas corretamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust

- **[Gerenciador de e-mail]** Corrige o problema em que o pop-up de configuração de e-mail ficava oculto por @zhangzhonghe
