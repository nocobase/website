---
title: "NocoBase v2.1.0-alpha.32: adicionar opção de limite de intervalo de datas para campos de data em formulários v2"
description: "Nota de lançamento da v2.1.0-alpha.32"
---

### 🎉 Novas Funcionalidades

- **[client]** adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

- **[flow-engine]** Migrar `plugin-environment-variables` para client-v2 com uma página de configurações baseada em React e uma variável de tempo de execução `$env` registrada globalmente; adicionar uma entrada client-v2 a `plugin-file-manager` com uma página de configuração de armazenamento baseada em React e campo de upload, ação de upload e visualização baseados em FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🚀 Melhorias

- **[undefined]** suporta env atual com escopo de sessão no nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust

  - Corrigido um problema onde o código JS não podia mais ser editado após um campo JS ser definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust

  - Corrigido o problema onde as abas de página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe

  - Corrigido um problema onde as atribuições de campo de subtabela não surtiam efeito nas regras de vinculação de campo. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust

- **[Campo de coleção: Markdown(Vditor)]** corrige dica de ferramenta do campo markdown sendo oculta no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh

- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe

- **[Mobile (obsoleto)]** Corrige popups de mensagem no mobile que não podiam ser fechados ou rolados ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe

- **[Workflow: Aprovação]** Corrige o problema onde o campo JS aparece nas configurações do processo de aprovação por @zhangzhonghe
