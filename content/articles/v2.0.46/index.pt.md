---
title: "NocoBase v2.0.46: Correções de Bugs"
description: "Nota de Lançamento da v2.0.46"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema em que os valores padrão não eram aplicados ao readicionar um registro após ele ter sido removido de uma subtabela. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

  - Definida altura máxima do popover e salvaguardas de rolagem para que a área de envio permaneça acessível ([#9226](https://github.com/nocobase/nocobase/pull/9226)) por @jiannx

- **[Autenticação]** Corrigidas sessões antigas que permaneciam ativas após a alteração da senha ([#9261](https://github.com/nocobase/nocobase/pull/9261)) por @2013xile

- **[Fonte de dados: MariaDB externo]** Corrigida falha em caso de teste devido à importação incorreta de módulo por @mytharcher
