---
title: "NocoBase v2.1.0-alpha.7 : Suporte à pesquisa de documentos integrados com várias palavras-chave e leitura de vários documentos em uma única chamada de ferramenta"
description: "Nota de lançamento da v2.1.0-alpha.7"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Suporte à pesquisa de documentos internos com múltiplas palavras-chave e leitura de vários documentos em uma única chamada de ferramenta ([#8718](https://github.com/nocobase/nocobase/pull/8718)) por @2013xile

### 🚀 Melhorias

- **[Funcionários de IA]** Atualização do prompt do usuário na caixa de chat de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]** No mobile, feche o menu primeiro e depois realize o salto de página ([#8699](https://github.com/nocobase/nocobase/pull/8699)) por @zhangzhonghe

- **[IA LLM: GigaChat]** Corrigido o plugin GigaChat que não funcionava na versão 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) por @cgyrock

- **[Funcionários de IA]**
  - Corrigido erro na conversa de IA ao usar banco de dados MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) por @cgyrock

  - Unificação da entrada de arquivos para APIs do chatGPT usando ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) por @cgyrock

  - Corrigido erro do agente de IA quando o usuário envia nova mensagem sem confirmar a execução da ferramenta ([#8697](https://github.com/nocobase/nocobase/pull/8697)) por @cgyrock

- **[IA: Base de conhecimento]** Corrigido erro de inicialização do plugin da base de conhecimento de IA. por @cgyrock

- **[Gerenciador de e-mail]** Erro de renderização de imagem por @jiannx
