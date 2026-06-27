---
title: "NocoBase v1.8.4: Suporte para configurar segredo de autenticação independente para sub-aplicativos"
description: "Nota de lançamento da v1.8.4"
---

### 🎉 Novas Funcionalidades

- **[Gerenciador de múltiplos aplicativos]** Suporte para configurar segredo de autenticação independente para sub-aplicativos ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher

- **[Fluxo de trabalho: CC]** Adicionar nó CC ao fluxo de trabalho ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Otimizar tamanho da fonte para página de mensagens móveis ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe

- **[Autenticação: DingTalk]** Suporte para configurar o protocolo e número da porta da URL de retorno por @2013xile

### 🐛 Correções de Bugs

- **[Notificação: Mensagem no aplicativo]** Corrigir timestamp BigInt em formato de string causando problema no dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Evitar erro quando usuário não existe por @mytharcher

  - Recarregar associação no registro por @mytharcher

  - Adicionar `try/catch` na migração ao atualizar esquema de UI por @mytharcher
