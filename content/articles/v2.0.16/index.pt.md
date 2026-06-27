---
title: "NocoBase v2.0.16: Corrige campos conectáveis não exibidos ao vincular blocos de dados em fontes de dados externas"
description: "Nota de lançamento da v2.0.16"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema de campos conectáveis não sendo exibidos ao vincular blocos de dados sob fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

  - Corrigida a altura do bloco de tabela sendo inválida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

  - Corrigido o problema de adicionar um bloco de dados ou atualizar a página acionar dupla atualização. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

- **[Modelos de UI]** Corrigidos os erros ao usar o bloco de formulário de edição e o modelo de bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[Rascunhos de formulário]** Corrigido o problema de perda de dados do rascunho do formulário quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Localização]** Entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Ação: Importar registros Pro]** Corrigido o problema de não ser possível fazer múltiplas seleções para campos duplicados na configuração de importação. por @jiannx
