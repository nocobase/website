---
title: "NocoBase v2.1.0-beta.44: Corrigido o problema em que os dados do campo de relação selecionados não eram exibidos no celular"
description: "Nota de lançamento da v2.1.0-beta.44"
---

### 🚀 Melhorias

- **[Workflow: Aprovação]** Ajustadas as regras de validação para configurações de gatilho e nós de aprovação, garantindo que campos relacionados à interface existam. por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os dados do campo de relação selecionado não eram exibidos no celular. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
- **[client-v2]**

  - Corrigidos erros ao salvar regras de vinculação de menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) por @zhangzhonghe
  - Corrigido espaçamento excessivo acima dos blocos em páginas v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) por @zhangzhonghe
- **[flow-engine]** Corrigido o problema em que a página travava ao definir valores de campo para um subformulário. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
- **[Funcionários de IA]**

  - Corrigida a validação da URL base do provedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
  - Corrigidos erros de `ctx.get` em nós de workflow de funcionários de IA. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) por @cgyrock
- **[Notificação: Mensagem no aplicativo]** Corrigido um risco de injeção de SQL no filtro de timestamp do canal de notificação no aplicativo. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Ação: Duplicar registro]** Corrigido o problema em que o estado do botão não era redefinido quando a submissão de duplicação de registro falhava. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) por @katherinehhh
- **[Calendário]** Corrigido o problema em que as cores dos eventos do calendário não eram renderizadas a partir do campo de cor configurado em páginas v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) por @jiannx
- **[Mecanismo de fluxo]**

  - Corrigido um problema em que modificar um bloco após duplicar seu modelo poderia afetar inadvertidamente o conteúdo do bloco original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
  - Corrigido um problema em que arrastar abas de pop-up para reordená-las não funcionava. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
