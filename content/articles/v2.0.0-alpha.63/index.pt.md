---
title: "NocoBase v2.0.0-alpha.63: Redimensionamento automático de textarea no formulário de tarefa de edição de IA"
description: "Nota de lançamento da v2.0.0-alpha.63"
---

### 🚀 Melhorias

- **[client]**
  - Evita a re-renderização completa da tabela ao atualizar uma célula ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh

  - Redimensionamento automático da área de texto no formulário de edição de tarefa de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang

- **[Workflow: Aprovação]**
  - Adiciona lógica de reparo para sincronização de públicos após migração por @mytharcher

  - Simplifica parâmetros na consulta e melhora o desempenho por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema em que as permissões de campo e ação não eram recalculadas após a paginação nos blocos de detalhes, lista e formulário. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust

  - Corrige campos de associação de fontes de dados externas que não carregavam dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh

- **[sdk]** Melhora a implementação de compartilhamento de token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos

- **[Controle de acesso]** Permite que campos de associação se associem usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile

- **[Workflow: Nó de loop]** Corrige o problema em que o nó com falha em uma ramificação de condição não conseguia passar o status para o nó de ramificação superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher

- **[Workflow: Webhook]** Corrige o problema em que um erro 404 era lançado ao enviar POST para a URL do webhook em sub-aplicativos por @mytharcher

- **[Workflow: Aprovação]** Corrige erro de build causado por dependências ausentes por @mytharcher

- **[Gerenciador de e-mail]** Corrige link de resposta do Outlook que ocasionalmente desconectava por @jiannx
