---
title: "NocoBase v1.6.0-alpha.18: Suporte a restrição de IP"
description: "Nota de lançamento da v1.6.0-alpha.18"
---

### 🎉 Novas Funcionalidades

- **[Cliente WEB]** Suporte à configuração de permissões para abas de página e adição de página de gerenciamento de rotas ([#5955](https://github.com/nocobase/nocobase/pull/5955)) por @zhangzhonghe
Referência: [Rotas](https://docs.nocobase.com/handbook/routes)
- **[Restrição de IP]** Suporte à restrição de IP. por @sheldon66
Referência: [Restrição de IP](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Melhorias

- **[servidor]**
  - mover AesEncryptor para o núcleo ([#6132](https://github.com/nocobase/nocobase/pull/6132)) por @chenos

  - 1. Adicionar middleware do servidor para extrair o endereço IP do cliente.<br />2. Resolver problemas de recarregamento infinito quando um IP é bloqueado.<br />3. Adicionar o cabeçalho HTTP `X-Forwarded-For` no proxy para permitir encaminhamento para depuração local. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) por @sheldon66

### 🐛 Correções de Bugs

- **[Autenticação]** Atualizar regras de migração para tokens emitidos e configuração de política de tokens. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) por @sheldon66
