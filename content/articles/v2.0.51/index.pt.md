---
title: "NocoBase v2.0.51: Correção no comportamento de validação obrigatória para formulários de aprovação"
description: "Nota de lançamento da v2.0.51"
---

### 🚀 Melhorias

- **[Workflow: Aprovação]** Corrige o comportamento de validação de campos obrigatórios em formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema em que o código JS não podia mais ser editado após um campo JS ser definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust

  - Corrigido um problema em que as atribuições de campos de subtabela não surtiam efeito nas regras de vinculação de campos. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust

  - Corrige o problema em que as abas de página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe

  - Corrigido um problema em que o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust

- **[Política de senhas]** Corrigido um problema em que usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile

- **[Ação: Importar registros Pro]** Corrige o problema em que a verificação de duplicidade em campos de data sempre falhava por @mytharcher

- **[Workflow: Aprovação]** Corrige o problema em que o drawer de seleção de registro fica oculto na configuração do workflow de aprovação por @zhangzhonghe
