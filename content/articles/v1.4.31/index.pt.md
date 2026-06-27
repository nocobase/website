---
title: "NocoBase v1.4.31: otimizar componente de filtro no formulário de filtro para corresponder às configurações filtráveis"
description: "Nota de lançamento da v1.4.31"
---

### 🚀 Melhorias

- **[client]** Otimizar o componente de filtro no formulário de filtro para corresponder às configurações de filtro ([#6110](https://github.com/nocobase/nocobase/pull/6110)) por @katherinehhh

- **[Gerenciador de arquivos]** Permitir excluir arquivos quando o registro do arquivo (anexo) for excluído ([#6127](https://github.com/nocobase/nocobase/pull/6127)) por @mytharcher

### 🐛 Correções de Bugs

- **[database]**
  - Corrigir filtro por campo uuid ([#6138](https://github.com/nocobase/nocobase/pull/6138)) por @chareice

  - Corrigir atualização de coleção sem chaves primárias ([#6124](https://github.com/nocobase/nocobase/pull/6124)) por @chareice

- **[client]**
  - A página de gerenciamento de fonte de dados está reportando um erro ([#6141](https://github.com/nocobase/nocobase/pull/6141)) por @zhangzhonghe

  - Quando as condições da regra de vinculação envolvem campos de associação que não estão exibidos, a regra de vinculação do botão se torna ineficaz ([#6140](https://github.com/nocobase/nocobase/pull/6140)) por @zhangzhonghe

  - Corrigir exibição incorreta de variável no formulário de adição rápida de campo de associação ([#6119](https://github.com/nocobase/nocobase/pull/6119)) por @katherinehhh

  - O conteúdo não é exibido no popup de adição rápida ([#6123](https://github.com/nocobase/nocobase/pull/6123)) por @zhangzhonghe

  - Corrigir o problema em que os blocos de campo de associação não solicitam dados ([#6125](https://github.com/nocobase/nocobase/pull/6125)) por @zhangzhonghe

  - Corrigir regras de vinculação em subtabela/subformulário afetando blocos em popups de campo de associação ([#5543](https://github.com/nocobase/nocobase/pull/5543)) por @katherinehhh

- **[Campo de coleção: divisões administrativas da China]** corrigir permissão acl com chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) por @chareice

- **[Workflow]** Corrigir SQL gerado incorretamente ([#6128](https://github.com/nocobase/nocobase/pull/6128)) por @mytharcher

- **[Campo de coleção: Muitos para muitos (array)]** Corrigir o problema em que a atualização de campos muitos para muitos (array) em um subformulário não está funcionando ([#6136](https://github.com/nocobase/nocobase/pull/6136)) por @2013xile

- **[Mobile]** Corrigir seleção no modo somente leitura clicável e problema de estouro de texto no mobile ([#6130](https://github.com/nocobase/nocobase/pull/6130)) por @katherinehhh
