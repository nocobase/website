---
title: "NocoBase v2.0.14: Verificações de migração aprimoradas, suporte a download de SQL, formatação de logs e visibilidade do processo de execução"
description: "Nota de lançamento da v2.0.14"
---

### 🚀 Melhorias

- **[Gerenciador de migrações]** Melhorias nas verificações de migração, suporte a download de SQL, formatação de logs e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que campos personalizados no formulário de Filtro não renderizavam o tipo correto de entrada de valor ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe

  - Corrigido o problema em que o botão de recolher do formulário de filtro v2 parava de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe

  - Corrigido o problema em que a página de gerenciamento de template de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust

  - Dados de sub formulário e sub tabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos

- **[Controle de acesso]** Usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos

- **[Templates de UI]**
  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust

  - Corrigido o problema em que registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust

- **[Workflow: Aprovação]**
  - Corrigido o problema em que os responsáveis não seguiam a ordem configurada no nó por @mytharcher

  - Corrigidos rótulos não traduzidos nos detalhes do processamento de aprovação por @zhangzhonghe

- **[Gerenciador de migrações]**
  - Corrigido erro de compilação por @mytharcher

  - Corrigida a descrição de migração ausente e definido o horário atual como padrão por @cgyrock

  - Corrigido um possível congelamento do processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock

  - Ajustado o diretório temporário para storage, para suportar uso em modo cluster por @mytharcher
