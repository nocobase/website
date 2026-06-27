---
title: "NocoBase v2.1.0-alpha.17: refatoração da CLI do NocoBase"
description: "Nota de lançamento da v2.1.0-alpha.17"
---

### 🎉 Novas Funcionalidades

- **[cli]** Refatoração do NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos

- **[Funcionários de IA]** Melhoria na capacidade dos funcionários de IA de analisar documentos enviados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Melhorias

- **[indefinido]**
  - Sincronização da documentação traduzida sobre variáveis de ambiente e modo cluster com as últimas atualizações em chinês. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher

  - Documentação: adicionada tradução para árabe das páginas introdutórias de início rápido ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765

  - Adicionada tradução para árabe da página inicial da documentação ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765

- **[logger]** Adicionada informação de `referer` aos logs de requisição ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile

- **[cliente]** Adicionado interruptor de verificação de obrigatoriedade em formulários ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx

- **[Workflow: Nó manual]** Uso de `simplePagination` nas coleções relacionadas a tarefas do workflow para melhor desempenho de listagem ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher

- **[Funcionários de IA]** Após seleção de bloco por funcionário de IA, preenchimento do anexo do formulário na área de upload ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock

- **[Workflow: Aprovação]** Uso de `simplePagination` nas coleções `approvals` e `approvalRecords` para melhor desempenho de listagem por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema de opções vazias em campos de seleção única na configuração de regras de campo ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx

  - Corrigido um problema onde o componente de campo de associação estava incorreto nas configurações de valor de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust

  - Corrigidas configurações incorretas de valor padrão para subtabelas em formulários. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust

- **[utils]** Adicionado controle de segurança para envio de requisições HTTP do servidor, para evitar possível SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
Referência: [Variáveis de ambiente](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Nó de loop]** Corrigidas validações de nós do workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Corrigido o problema onde o componente de seleção de destinatário não funcionava corretamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher

- **[IdP: OAuth]** Corrigido o acesso OAuth para requisições regulares de API ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile

- **[Funcionários de IA]**
  - Corrigida a ordenação de consultas agregadas descartada pelo ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile

  - Corrigido o problema onde as configurações de baseURL do serviço LLM google-gen-ai não surtiam efeito ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock

- **[Gerenciador de e-mail]** Removido o prompt de fechamento do formulário após o envio bem-sucedido do e-mail por @jiannx
