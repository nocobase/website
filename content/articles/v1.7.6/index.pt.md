---
title: "NocoBase v1.7.6: Correções de Bugs"
description: "Nota de Lançamento da v1.7.6"
---

### 🚀 Melhorias

- **[client]** Impedir mover um menu de grupo para dentro de si mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde o bloco não conseguia ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Corrigido o problema de erro de parâmetro do bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - Variável do objeto atual é inválida em regras de vinculação ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

  - Incapacidade de limpar o indicador de campo obrigatório de subtabela usando regras de vinculação ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

- **[undefined]** Remover dependência de banco de dados para possibleTypes, forçar configuração orientada por API por @aaaaaajie

- **[Mobile]** Otimizar problemas de lag em popups móveis ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Gerenciador de fonte de dados]** Remover dependência de banco de dados para possibleTypes, forçar configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Ação: Importar registros]** Corrigidos erros que ocorriam durante a edição em lote ao importar dados de tabela em árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Workflow]** Corrigir erro de UI quando workflow não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

- **[Workflow: JavaScript]** Corrigir require para caminho relativo por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir erro lançado quando workflow é excluído por @mytharcher

  - Recarregar associação de arquivo a partir do snapshot para evitar expiração de URL por @mytharcher

  - Corrigir variáveis de gatilho por @mytharcher
