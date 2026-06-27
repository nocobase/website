---
title: "NocoBase v2.1.0-beta.6: Suporte à pesquisa de documentos integrados com múltiplas palavras-chave e leitura de múltiplos documentos em uma única chamada de ferramenta"
description: "Nota de lançamento da v2.1.0-beta.6"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Suporte à pesquisa de documentos internos com múltiplas palavras-chave e leitura de vários documentos em uma única chamada de ferramenta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Melhorias

- **[cliente]** Suporte à configuração de resumo para tabela ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos

- **[Funcionários de IA]** Atualização do prompt do usuário no chat de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

- **[Incorporar NocoBase]** Fornecer API de sanitização para filtrar valores de associação em ações ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Resolver problema onde a mensagem da IA renderizava com comprimento 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang

- **[Visualização de dados]** Corrigir i18n para o texto de entrada do gráfico do plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang

- **[Fluxo de trabalho: JavaScript]** Corrigir casos de teste que não passavam no Windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher

- **[Impressão de modelo]** Corrigir problema onde a API ACL foi alterada mas não adaptada ao plugin por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Sanitizar valores de associação em ações de aprovação para evitar qualquer manipulação de dados além da permissão por @mytharcher

- **[Gerenciador de e-mail]** Corrigir análise do formato do ID de conteúdo da imagem por @jiannx
