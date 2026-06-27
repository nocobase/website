---
title: "NocoBase v2.0.0-beta.6: Simplifique parâmetros na consulta e melhore o desempenho"
description: "Nota de lançamento da v2.0.0-beta.6"
---

### 🚀 Melhorias

- **[Workflow: Aprovação]** Simplificar parâmetros na consulta e melhorar o desempenho por @mytharcher

### 🐛 Correções de Bugs

- **[sdk]** Melhorar a implementação de compartilhamento de tokens ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos

- **[client]** Corrigir campos de associação de fontes de dados externas que não carregam dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh

- **[Workflow: Nó de Loop]** Corrigir o problema em que o nó com falha em um ramo condicional não consegue passar o status para o nó de ramificação superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher

- **[Controle de Acesso]** Permitir que campos de associação sejam associados usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile

- **[Workflow: Webhook]** Corrigir o problema em que o erro 404 é lançado ao enviar POST para a URL do webhook em sub-aplicativos por @mytharcher

- **[Gerenciador de E-mail]** Corrigir o link de resposta do Outlook que ocasionalmente desconectava por @jiannx
