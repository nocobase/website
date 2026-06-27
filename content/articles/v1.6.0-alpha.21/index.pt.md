---
title: "NocoBase v1.6.0-alpha.21: corrige erro do aplicativo quando a configuração de restrição de IP não existe"
description: "Nota de lançamento da v1.6.0-alpha.21"
---

### 🎉 Novas Funcionalidades

- **[Restrição de IP]** Corrige erro do aplicativo quando a configuração de restrição de IP não existe. por @sheldon66

### 🐛 Correções de Bugs

- **[auth]** Atualiza a lógica do middleware de autenticação do cliente para evitar falha na atualização do token devido à concorrência. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66
