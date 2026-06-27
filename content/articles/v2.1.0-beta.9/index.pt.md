---
title: "NocoBase v2.1.0-beta.9: Corrige o problema de que as tabelas do sistema não podem ser selecionadas em regras personalizadas"
description: "Nota de lançamento da v2.1.0-beta.9"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - corrigida a altura inválida do bloco de tabela ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

  - Corrigido o problema em que adicionar um bloco de dados ou atualizar a página acionava atualizações duplicadas. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

  - Corrigida a exibição de campos conectáveis ao vincular blocos de dados em fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

- **[Modelos de UI]** Corrigidos os erros ao usar o bloco de formulário de edição e o modelo de bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[Rascunhos de formulário]** Corrigido o problema em que os dados do rascunho do formulário eram perdidos quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Localização]** entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Ação: Importar registros Pro]** Corrigido o problema em que não era possível fazer múltiplas seleções para campos duplicados na configuração de importação. por @jiannx

- **[Gerenciador de e-mail]** ajustes nos destinatários de resposta e responder a todos, corrigindo falha na adição de campos de tabela e outros problemas por @jiannx

- **[Gerenciador de migração]** Corrigido o problema em que as tabelas do sistema não podiam ser selecionadas em regras personalizadas por @cgyrock
