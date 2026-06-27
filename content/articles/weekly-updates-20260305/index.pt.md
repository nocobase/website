---
title: "Atualizações Semanais｜Funcionários de IA Agora Suportam Pesquisa de Documentos Internos com Múltiplas Palavras-chave"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 27 de fevereiro a 5 de março de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Data de lançamento: 04/03/2026*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido erro de chat do funcionário de IA enquanto a base de conhecimento estava ativada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
- **[Mecanismo de Fluxo]** corrigir erro de destruição de SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Controle de Acesso]** Instância do banco de dados usada ao definir metadados ACL está incorreta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Fluxo de Trabalho: Aprovação]** Corrige o problema em que o resultado da consulta não era exibido devido a nós filtrados por tipo por @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Data de lançamento: 03/03/2026*

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige o problema em que o componente CollectionField não renderizava no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - Corrigido um problema em que o bloco de dados não era atualizado ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
- **[banco de dados]** Corrige falha na verificação de expressão regular personalizada de campo no v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[mecanismo de fluxo]** Corrigido um problema em que ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[Fluxo de Trabalho: Aprovação]** Adicionado parâmetro ausente para evitar que associações não sejam atualizadas ao enviar nova aprovação por @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Data de lançamento: 01/03/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Atualizar prompt do usuário no chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Correções de Bugs

- **[servidor]** Resolver problema de cache anexando hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[Funcionários de IA]** Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
- **[Fluxo de Trabalho: Evento de ação personalizada]** Corrige o problema em que o fluxo de trabalho de ação personalizada trava ao ser executado como subfluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
  - Corrige o problema em que um erro é lançado ao executar o fluxo de trabalho de aprovação manualmente por @mytharcher
  - Corrige erro lançado causado pelo valor de `dataAfter` ausente quando adicionado ou delegado por @mytharcher
  - Corrige o problema em que o parâmetro appends filtrava por ACL por @mytharcher
  - Corrige problema de ACL onde o valor de associação não deve ser criado ou atualizado quando o usuário não tem permissão por @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Data de lançamento: 27/02/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Suporte para pesquisar documentos internos com múltiplas palavras-chave e ler múltiplos documentos em uma única chamada de ferramenta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Melhorias

- **[cliente]** suporte para configuração de resumo para tabela ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[Incorporar NocoBase]** Fornecer API sanitize para filtrar valores de associação em ação ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Correções de Bugs

- **[Visualização de Dados]** corrigir i18n para texto de entrada do plugin de gráfico ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Fluxo de Trabalho: JavaScript]** Corrigir casos de teste que não passam no windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Funcionários de IA]** Resolver problema onde a mensagem de IA renderiza com comprimento 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Impressão de modelo]** Corrige o problema em que a API ACL mudou, mas não foi adaptada ao plugin por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
- **[Gerenciador de e-mail]** Corrigir análise do formato de ID de conteúdo de imagem por @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Data de lançamento: 26/02/2026*

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido erro de conversa de IA ao usar banco de dados MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Data de lançamento: 04/03/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Atualizar prompt do usuário no chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige o problema em que o componente CollectionField não renderizava no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - Corrigido um problema em que o bloco de dados não era atualizado ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
- **[mecanismo de fluxo]** Corrigido um problema em que ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[banco de dados]** Corrige falha na verificação de expressão regular personalizada de campo no v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[servidor]** Resolver problema de cache anexando hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[Controle de Acesso]** Instância do banco de dados usada ao definir metadados ACL está incorreta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Funcionários de IA]**

  - Corrigido erro de chat do funcionário de IA enquanto a base de conhecimento estava ativada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
  - Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
- **[Mecanismo de Fluxo]** corrigir erro de destruição de SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Fluxo de Trabalho: Evento de ação personalizada]** Corrige o problema em que o fluxo de trabalho de ação personalizada trava ao ser executado como subfluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Corrige o problema em que o resultado da consulta não era exibido devido a nós filtrados por tipo por @mytharcher
  - Adicionado parâmetro ausente para evitar que associações não sejam atualizadas ao enviar nova aprovação por @mytharcher
  - Corrige o problema em que um erro é lançado ao executar o fluxo de trabalho de aprovação manualmente por @mytharcher
  - Corrige erro lançado causado pelo valor de `dataAfter` ausente quando adicionado ou delegado por @mytharcher
  - Corrige problema de ACL onde o valor de associação não deve ser criado ou atualizado quando o usuário não tem permissão por @mytharcher
  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
  - Corrige o problema em que o parâmetro appends filtrava por ACL por @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Data de lançamento: 27/02/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Suporte para pesquisar documentos internos com múltiplas palavras-chave e ler múltiplos documentos em uma única chamada de ferramenta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Melhorias

- **[cliente]** suporte para configuração de resumo para tabela ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[Funcionários de IA]** Atualizar prompt do usuário no chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Incorporar NocoBase]** Fornecer API sanitize para filtrar valores de associação em ação ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Resolver problema onde a mensagem de IA renderiza com comprimento 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Visualização de Dados]** corrigir i18n para texto de entrada do plugin de gráfico ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Fluxo de Trabalho: JavaScript]** Corrigir casos de teste que não passam no windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Impressão de modelo]** Corrige o problema em que a API ACL mudou, mas não foi adaptada ao plugin por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
- **[Gerenciador de e-mail]** Corrigir análise do formato de ID de conteúdo de imagem por @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Data de lançamento: 26/02/2026*

### 🚀 Melhorias

- **[Funcionários de IA]** Atualizar prompt do usuário no chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido erro de conversa de IA ao usar banco de dados MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Data de lançamento: 26/02/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Suporte para pesquisar documentos internos com múltiplas palavras-chave e ler múltiplos documentos em uma única chamada de ferramenta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Melhorias

- **[Funcionários de IA]** Atualizar prompt do usuário no chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]** No celular, fechar o menu primeiro e depois realizar o salto de página ([#8699](https://github.com/nocobase/nocobase/pull/8699)) por @zhangzhonghe
- **[IA LLM: GigaChat]** Corrigido plugin GigaChat não funcionando na versão 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) por @cgyrock
- **[Funcionários de IA]**

  - Corrigido erro de conversa de IA ao usar banco de dados MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock
  - Unificar entrada de arquivo para APIs chatGPT usando ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) por @cgyrock
  - Corrigir erro do agente de IA quando o usuário envia nova mensagem sem confirmar a execução da ferramenta ([#8697](https://github.com/nocobase/nocobase/pull/8697)) por @cgyrock
- **[IA: Base de Conhecimento]** Corrigido erro de inicialização do plugin de base de conhecimento de IA. por @cgyrock
- **[Gerenciador de e-mail]** Erro de renderização de imagem por @jiannx
