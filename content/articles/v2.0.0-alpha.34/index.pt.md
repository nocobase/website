---
title: "NocoBase v2.0.0-alpha.34: Correções de Bugs"
description: "Nota de Lançamento da v2.0.0-alpha.34"
---

### 🚀 Melhorias

- **[database]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigido um problema em que os botões de ação no bloco de tabela não eram atualizados corretamente após a troca de páginas, garantindo que sua funcionalidade corresponda aos dados da página atual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust

- **[client]**
  - Corrigir "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe

  - corrigir reticências do campo de título do campo de associação não aplicadas ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh

  - regra de vinculação da ação de atualização de registro não está funcionando ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust

- **[database]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile

- **[Mobile (obsoleto)]** Corrigir o problema em que o popup do valor padrão do campo de data no mobile não permite selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
