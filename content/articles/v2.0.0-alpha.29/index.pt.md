---
title: "NocoBase v2.0.0-alpha.29: Corrigir ordem dos middlewares do `resourceManager`"
description: "Nota de lançamento da v2.0.0-alpha.29"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Resolvido um problema em que a variável de campo de associação no formulário atual não podia ser identificada corretamente, garantindo o processamento preciso de dados em formulários. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust

  - Resolvido um problema em que atribuir um array como valor ou valor padrão a um campo "toOne" resultava em um erro. Isso garante o tratamento adequado dos resultados da resolução de variáveis, melhorando a estabilidade e precisão do sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust

- **[Controle de acesso]** Corrigida a ordem dos middlewares do `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile
