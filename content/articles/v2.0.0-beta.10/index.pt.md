---
title: "NocoBase v2.0.0-beta.10: Otimizar botão de entrada de IA"
description: "Nota de lançamento da v2.0.0-beta.10"
---

### 🚀 Melhorias

- **[cliente]** Suporte para especificar quando executar o fluxo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
- **[Funcionários de IA]**

  - Otimizar botão de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Ocultar construtor de IA na lista de entrada.<br/> Otimizar fluxo de integração LLM.<br/> Atualizar documentação sobre o modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
- **[Notificação: Mensagem no aplicativo]** Corrigir problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - componente de entrada de número não exibe valor ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - corrigir dados de seleção em cascata não limpos após envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - corrigir problema no botão de envio onde a validação obrigatória ignorada não funciona quando a confirmação está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - resolver problema do botão de envio aparecendo no popup de seleção de arquivos do campo de associação um-para-um ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - corrigir problema onde a configuração de layout no bloco de cartão em grade não surte efeito ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - corrigir prevenção de atribuição quando caracteres chineses são inseridos no campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Corrigir erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Multi-espaço]**

  - Espaço relacionado ao adicionar dados associados por @jiannx
  - Cor do seletor de espaço segue o tema por @jiannx
