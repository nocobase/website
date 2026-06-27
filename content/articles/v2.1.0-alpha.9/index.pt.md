---
title: "NocoBase v2.1.0-alpha.9: Permite adicionar funcionários de IA no pop-up de subtabelas"
description: "Nota de lançamento da v2.1.0-alpha.9"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Permite adicionar funcionários de IA no pop-up de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile

- **[IA: Servidor MCP]** Adiciona um novo plugin de servidor MCP para permitir a construção de sistemas NocoBase e suporte a fluxos de trabalho de negócios. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

### 🚀 Melhorias

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Correções de Bugs

- **[banco de dados]** Corrige o problema de validação no lado do servidor para campos de data ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile

- **[cliente]**
  - Corrige a exibição de campos conectáveis ao vincular blocos de dados sob fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe

  - Corrige o problema em que adicionar um bloco de dados ou atualizar a página acionava atualizações duplicadas. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust

  - Corrige o problema em que os valores padrão de alguns campos não eram aplicados após atualizar a página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust

  - Corrige a altura inválida do bloco de tabela ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx

- **[Localização]**
  - Exceção de permissão de interface para textos de localização ausentes ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx

  - Entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx

- **[Rascunhos de formulários]** Corrige o problema em que os dados do rascunho do formulário eram perdidos quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust

- **[Modelos de UI]** Corrige os erros ocorridos ao usar o modelo de bloco de formulário de edição e bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust

- **[IA: Base de conhecimento]** Impede que o banco de dados vetorial e o armazenamento vetorial em uso sejam excluídos. por @cgyrock

- **[Ação: Importar registros Pro]** Corrige o problema em que não era possível fazer múltiplas seleções para campos duplicados na configuração de importação. por @jiannx

- **[Gerenciador de e-mail]** Ajustes nos destinatários de resposta e responder a todos, corrigindo falha na adição de campos de tabela e outros problemas por @jiannx

- **[Gerenciador de migração]** Corrige o problema em que as tabelas do sistema não podiam ser selecionadas em regras personalizadas por @cgyrock
