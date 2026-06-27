---
title: "NocoBase v2.1.0-beta.47: Adaptado ao novo plugin de controle de versão"
description: "Nota de lançamento da v2.1.0-beta.47"
---

### 🎉 Novas Funcionalidades

- **[undefined]** Adicionados comandos proxy de alto nível para nginx e caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
- **[Gerenciador de backup]** Adaptado ao novo plugin de controle de versão. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Controle de versão]** Adicionado plugin de controle de versão. por @cgyrock

### 🚀 Melhorias

- **[Gerenciador de fonte de dados]** Adicionada gestão de permissões de fonte de dados client-v2 e alinhadas as gavetas de seleção de permissões relacionadas. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
- **[Coleção: Conectar a dados externos (FDW)]** Melhorada a paridade de modelos de coleção V2 para coleções SQL e coleções de dados externos, incluindo confirmação SQL, gerenciamento de servidores de banco de dados externos e ordenação de modelos. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Impressão de modelo]** Atualizados metadados de coleção de modelo de impressão para classificação de backup de controle de versão. por @cgyrock
- **[Histórico de registro]** Atualizados metadados de coleção de histórico de registro para classificação de backup de controle de versão. por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Atualizados metadados de coleção de aprovação de fluxo de trabalho para classificação de backup de controle de versão. por @cgyrock
- **[Logs de auditoria]** Atualizados metadados de coleção de logger de auditoria para classificação de backup de controle de versão. por @cgyrock
- **[Gerenciador de e-mail]** Atualizados metadados de coleção de gerenciador de e-mail para classificação de backup de controle de versão. por @cgyrock
- **[Supervisor de aplicativo]** Atualizados metadados de coleção de supervisor de aplicativo para classificação de backup de controle de versão. por @cgyrock

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrigidos campos JSON exibindo células em branco para valores de objeto em visualizações de detalhes client-v2. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Corrigidos campos de opção traduzindo incorretamente rótulos de opção simples em ambientes localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
- **[Manipulador de erros]** Reduzidos logs de erro excessivos para requisições não autenticadas de rotina sem token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) por @2013xile
- **[Bloco: Lista]** Corrigido estado obsoleto de vinculação de ação de linha em blocos de lista quando ações dependem do registro atual. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) por @katherinehhh
- **[Gerenciador de fonte de dados]** Melhoradas mensagens de erro no gerenciador de fonte de dados V2 quando operações de coleção, campo, sincronização e carregamento de tabela falham. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
- **[Funcionários de IA]** Corrigido botão ausente do assistente Dara nas configurações de gráfico client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
- **[IA: Base de conhecimento]** Corrigidos caminhos ausentes em URLs de arquivos da base de conhecimento S3. por @cgyrock
- **[Ação: Importar registros Pro]** Corrigido texto ilegível ao importar arquivos XLSX com strings compartilhadas UTF-8 divididas entre blocos de streaming. por @mytharcher
- **[Histórico de registro]** Corrigido histórico de registro ausente para alterações em fontes de dados externas. por @2013xile
