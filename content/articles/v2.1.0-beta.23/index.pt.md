---
title: "NocoBase v2.1.0-beta.23: Adicionar campos de criado e atualizado por para fluxos de trabalho"
description: "Nota de lançamento da v2.1.0-beta.23"
---

### 🎉 Novas Funcionalidades

- **[Workflow]** Adicionados campos de criado por e atualizado por para workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) por @mytharcher

### 🚀 Melhorias

- **[indefinido]**
  - Melhoria no guia de instalação do AI Agent para evitar que Agentes ignorem o assistente `--ui` e para detectar automaticamente gerenciadores de versão do Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn

  - Atualização da documentação de IA para exigir NocoBase >= 2.1.0-beta.20 e recomendar a versão beta mais recente. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) por @Molunerfinn

- **[client-v2]** Separação do client v2 do client v1 e remoção de sua dependência do client v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[indefinido]** Correção no seletor de idioma que gerava URLs incorretas (ex.: `/cn/es/` em vez de `/es/`) no site de documentação. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn

- **[client]** Definição de altura máxima do popover e salvaguardas de rolagem para que a área de envio permaneça acessível ([#9226](https://github.com/nocobase/nocobase/pull/9226)) por @jiannx

- **[Visualização de dados]** Correção de seletores de campo vazios na configuração de consulta de gráficos em páginas de fluxo ([#9276](https://github.com/nocobase/nocobase/pull/9276)) por @2013xile

- **[Autenticação]** Correção de sessões antigas que permaneciam ativas após a alteração da senha ([#9261](https://github.com/nocobase/nocobase/pull/9261)) por @2013xile
