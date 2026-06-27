---
title: "NocoBase v2.0.57: Corrigida a saída de ofuscação do servidor de plugins para evitar globais do navegador em pacotes de tempo de execução Node.js"
description: "Nota de lançamento da v2.0.57"
---

### 🐛 Correções de Bugs

- **[build]** Corrigida a saída de ofuscação do plugin do servidor para evitar globais do navegador em pacotes de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn

- **[Workflow: Nó manual]** Corrigidos salvamentos temporários para tarefas manuais do workflow que não persistiam valores de formulário enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher

- **[Funcionários de IA]** Corrigida descrição incorreta do nome da ferramenta no prompt de contexto de trabalho ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock

- **[Gerenciador de arquivos]** Renderização segura de visualizações de PDF com PDF.js em vez de renderização bruta baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher

- **[Autenticação: OIDC]** Corrigido vazamento de token quando callbacks de login SSO recebem uma URL de redirecionamento externa por @2013xile

- **[Workflow: Aprovação]**
  - Corrigido o problema em que a API `jobs:resume` não era suportada pelo nó de aprovação por @mytharcher

  - Corrigido o cancelamento de aprovação para atualizar dados de negócios enviados, respeitando as permissões de atualização da coleção de origem. por @mytharcher

  - Corrigidas tarefas de aprovação obsoletas quando workflows de aprovação são encerrados por falhas em nós não relacionados à aprovação. por @mytharcher
