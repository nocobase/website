---
title: "NocoBase v2.0.20: Corrige o problema onde eventos de ciclo de vida enviados pelo worker causam a parada do aplicativo servidor"
description: "Nota de lançamento da v2.0.20"
---

### 🐛 Correções de Bugs

- **[servidor]** Corrigido o problema em que eventos do ciclo de vida enviados pelo worker faziam com que o servidor de aplicação parasse ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[Gerenciador de fonte de dados]** Corrigido o problema em que a coleção criada pelo funcionário de IA sempre perdia os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Ação: Importar registros Pro]** Corrigido erro de SES causado por importação preguiçosa por @mytharcher

- **[Impressão de modelo]** Corrigido erro de impressão de coleção SQL por @jiannx

- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx
