---
title: "NocoBase v2.1.0-alpha.38: Corrigido um problema onde as variáveis de registro do pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação"
description: "Nota de lançamento da v2.1.0-alpha.38"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema em que variáveis de registro do pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

  - Corrigido um problema em que os valores de campo JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

- **[mecanismo de fluxo]** Corrigida mensagem de erro incorreta no console do navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust

- **[Fluxo de trabalho: JavaScript]** Corrigido o carregamento do pacote de tempo de execução QuickJS do JavaScript do fluxo de trabalho em builds de produção. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher

- **[Ação: Importar registros]** Corrigido o problema em que o registro importado em campos do tipo data mostrava a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Ação: Importar registros Pro]** corrigido o tratamento de fuso horário para importações xlsx pro por @mytharcher

- **[Ação: Exportar registros Pro]** Corrigido o problema em que um erro era lançado ao exportar anexo do campo de URL de anexo por @mytharcher
