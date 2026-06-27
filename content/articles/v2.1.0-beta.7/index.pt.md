---
title: "NocoBase v2.1.0-beta.7: Atualização do prompt do usuário no chatbox de IA"
description: "Nota de lançamento da v2.1.0-beta.7"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Atualização do prompt do usuário no chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que o componente CollectionField não renderizava no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Corrigido um problema em que o bloco de dados não era atualizado ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

- **[mecanismo de fluxo]** Corrigido um problema em que ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[banco de dados]** Corrigida falha na verificação de expressão regular personalizada de campo no v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[servidor]** Resolvido problema de cache ao anexar hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[Controle de acesso]** Instância do banco de dados usada ao definir metadados ACL está incorreta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile

- **[Funcionários de IA]**
  - Corrigido erro no chat do funcionário de IA quando a base de conhecimento estava ativada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock

  - Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

- **[Mecanismo de fluxo]** corrigido erro de destruição SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o problema em que o fluxo de trabalho de ação personalizada travava ao ser executado como subfluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigido o problema em que o resultado da consulta não era exibido devido a nós filtrados por tipo por @mytharcher

  - Adicionado parâmetro ausente para evitar que associações não fossem atualizadas ao enviar nova aprovação por @mytharcher

  - Corrigido o problema em que um erro era lançado ao executar o fluxo de trabalho de aprovação manualmente por @mytharcher

  - Corrigido erro lançado devido à ausência do valor de `dataAfter` quando adicionado ou delegado por @mytharcher

  - Corrigido problema de ACL em que o valor da associação não deveria ser criado ou atualizado quando o usuário não tem permissão por @mytharcher

  - Sanitizados valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher

  - Corrigido o problema em que o parâmetro appends era filtrado pela ACL por @mytharcher
