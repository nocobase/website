---
title: "NocoBase v1.7.0-beta.14: Módulo de localização adicionado"
description: "Nota de lançamento da v1.7.0-beta.14"
---

### 🎉 Novas Funcionalidades

- **[Armazenamento de esquema UI]** Adicionado módulo de localização para UISchema, permitindo traduções personalizadas para título e descrição do esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

### 🚀 Melhorias

- **[utils]** Adicionar extensão de duração para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher

- **[client]**
  - Suporte para pesquisa de campo no componente Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher

  - Adicionar API `trim` para `Input` e `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher

- **[Workflow]** Otimizar lógica de salvamento de job ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher

- **[Manipulador de erros]** Suporte para título personalizado no componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66

- **[Restrição de IP]** Atualizar conteúdo da mensagem de restrição de IP. por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]** Suporte para variáveis globais na configuração de armazenamento por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Os campos de relacionamento no formulário de filtro reportam erro após a página ser atualizada porque x-data-source não é carregado ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe

  - Problema de dados com bloco Gantt em coleção de árvore ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh

  - Área em branco entre o título da página de configuração do modelo de bloco e o menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust

  - Regra com condição 'any' não funciona quando a lista de condições está vazia ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh

  - Propriedade x-disabled não funcionando em campos de formulário ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh

  - Falha na análise de variável quando os parâmetros da URL contêm caracteres chineses ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh

  - Problema de exibição do rótulo do campo para evitar truncamento por dois pontos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh

- **[Ação: Exportar registros]** Parâmetros de filtro ausentes ao exportar dados após alterar a paginação ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh

- **[Usuários]** Problema com a análise do esquema do formulário de perfil do usuário ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile

- **[Mobile]** Campo de seleção única com filtro 'contains' no mobile não suporta seleção múltipla ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh

- **[Controle de acesso]** Corrigir lógica de cálculo de união de funções ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie

- **[Bloco: template]** Modificar e excluir os mesmos campos do template e do bloco, após criar um bloco a partir do template, pode causar erros de renderização ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust

- **[Gerenciador de e-mail]**
  - Corrigir falta de await para próxima chamada. por @jiannx

  - Corrigir permissão de gerenciamento de e-mail que não permite visualizar lista de e-mails por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]**
  - Corrigir falta de await para próxima chamada. por @jiannx

  - Lançar erro para o usuário ao fazer upload de logo para armazenamento S3 Pro (definido como padrão) por @mytharcher

- **[Workflow: Aprovação]** Corrigir `updatedAt` alterado após migração por @mytharcher

- **[Gerenciador de migração]** O horário de criação do log de migração é exibido incorretamente em alguns ambientes por @gchust
