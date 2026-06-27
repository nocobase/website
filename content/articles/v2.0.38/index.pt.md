---
title: "NocoBase v2.0.38: Melhora a capacidade dos funcionários de IA de analisar documentos carregados"
description: "Nota de lançamento da v2.0.38"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Melhora a capacidade dos funcionários de IA de analisar documentos enviados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Melhorias

- **[logger]** Adiciona informação de `referer` aos logs de requisição ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile

- **[indefinido]** Sincroniza a documentação traduzida sobre variáveis de ambiente e modo cluster com as atualizações mais recentes em chinês. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher

- **[Funcionários de IA]** Após a seleção de bloco do funcionário de IA, preenche o anexo do formulário na área de upload ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock

- **[Workflow: Nó manual]** Usa `simplePagination` nas coleções relacionadas a tarefas do workflow para melhor desempenho da lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher

- **[Workflow: Aprovação]** Usa `simplePagination` nas coleções `approvals` e `approvalRecords` para melhor desempenho da lista por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que as opções opcionais de campos de seleção única na configuração de regras de campo estavam vazias ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx

  - Corrige a configuração incorreta de valores padrão para subtabelas em formulários. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust

- **[Notificação: Mensagem no aplicativo]** Corrige o problema em que o componente de seleção de destinatário não funcionava corretamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher

- **[Funcionários de IA]** Corrige o problema em que as configurações de baseURL do serviço LLM do google-gen-ai não surtiam efeito ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock

- **[Gerenciador de e-mail]** Remove o prompt de fechamento do formulário após o e-mail ser enviado com sucesso por @jiannx
