---
title: "NocoBase v1.6.17: Suporte para pesquisar campo no componente Filtro"
description: "Nota de lançamento da v1.6.17"
---

### 🚀 Melhorias

- **[utils]** Adicionar extensão de duração para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[client]**
  - Suporte para pesquisar campo no componente Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Adicionar API `trim` para `Input` e `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

- **[Error handler]** Suporte para título personalizado no componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Restrição de IP]** Atualizar conteúdo da mensagem de restrição de IP. por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]** Suporte para variáveis globais na configuração de armazenamento por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - regra com condição 'any' não funciona quando a lista de condições está vazia ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - problema de dados com bloco Gantt em coleção em árvore ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - Os campos de relacionamento no formulário de filtro reportam erro após a página ser atualizada porque x-data-source não é carregado ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - falha na análise de variável quando os parâmetros da URL contêm caracteres chineses ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

- **[Usuários]** Problema ao analisar o esquema do formulário de perfil do usuário ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Mobile]** campo de seleção única com filtro 'contém' no mobile não suporta seleção múltipla ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Ação: Exportar registros]** parâmetros de filtro ausentes ao exportar dados após alterar a paginação ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Gerenciador de e-mail]** corrigir permissão de gerenciamento de e-mail que não permite visualizar a lista de e-mails por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]** Lançar erro para o usuário ao fazer upload do logotipo para o armazenamento S3 Pro (definido como padrão) por @mytharcher

- **[Workflow: Aprovação]** Corrigir `updatedAt` alterado após migração por @mytharcher

- **[Gerenciador de migração]** hora de criação do log de migração exibida incorretamente em alguns ambientes por @gchust
