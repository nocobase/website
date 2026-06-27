---
title: "NocoBase v1.9.23: permite selecionar ID para campos de importação"
description: "Nota de lançamento da v1.9.23"
---

### 🚀 Melhorias

- **[auth]** Corrigido [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) por @2013xile

- **[Ação: Importar registros]** permitir seleção de ID para campos de importação ([#8132](https://github.com/nocobase/nocobase/pull/8132)) por @katherinehhh

### 🐛 Correções de Bugs

- **[servidor]** Corrigido um problema em que workflows acionados não eram adicionados à fila de processamento após a importação de dados, garantindo que os workflows sejam executados conforme esperado imediatamente após a importação ([#8121](https://github.com/nocobase/nocobase/pull/8121)) por @mytharcher
