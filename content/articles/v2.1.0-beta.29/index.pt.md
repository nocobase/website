---
title: "NocoBase v2.1.0-beta.29: adicionar opção de limite de intervalo de datas para campos de data em formulários v2"
description: "Nota de lançamento da v2.1.0-beta.29"
---

### 🎉 Novas Funcionalidades

- **[client]** Adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

- **[flow-engine]** Migra `plugin-environment-variables` para client-v2 com uma página de configurações baseada em React e uma variável de tempo de execução `$env` registrada globalmente; adiciona uma entrada client-v2 a `plugin-file-manager` com uma página de configuração de armazenamento baseada em React e campo de upload, ação de upload e visualização baseados em FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema em que o código JS não podia mais ser editado após um campo JS ser definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust

  - Corrige o problema em que as abas da página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe

  - Corrigido um problema em que as atribuições de campo de subtabela não surtiam efeito nas regras de vinculação de campo. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust

  - Corrigido um problema em que o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust

- **[Campo de coleção: Markdown(Vditor)]** corrige dica de ferramenta do campo markdown sendo ocultada no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh

- **[Mobile (obsoleto)]** Corrige popups de mensagem no mobile que não podiam ser fechados ou rolados ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe

- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe

- **[Workflow: Aprovação]** Corrige o problema em que o campo JS aparece nas configurações do processo de aprovação por @zhangzhonghe
