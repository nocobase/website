---
title: "NocoBase v2.0.0-alpha.36: Otimizar os estilos da barra de ferramentas para as abas de página"
description: "Nota de lançamento da v2.0.0-alpha.36"
---

### 🚀 Melhorias

- **[flow-engine]** Otimização dos estilos da barra de ferramentas para abas de página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[flow-engine]**
  - Corrigido um problema em que variáveis em campos de associação de subformulário não eram resolvidas corretamente quando o campo era modificado via interface do usuário. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust

  - Erro no formulário de edição para registros com chave primária múltipla ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust

  - Corrigido um problema em que certas configurações para a ação "Abrir Visualização" não eram aplicadas, garantindo que a ação agora funcione conforme o esperado para todas as configurações especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust

- **[client]**
  - Corrigido seletor de campo de coleção que não conseguia selecionar a coleção corretamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh

  - Não era possível ocultar a coluna de ações do bloco de tabela ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust

  - Suporte para selecionar o objeto de variável inteiro no prompt do funcionário de IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust

- **[Usuários]** Atualização incorreta de índice quando nomes de campos usam estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
