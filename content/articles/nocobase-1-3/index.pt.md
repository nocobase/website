---
title: "NocoBase 1.3: Fonte de dados REST API, mobile v2 e mais recursos"
description: "NocoBase 1.3 apresenta fontes de dados REST API e MSSQL, suporte para abrir pop-ups via URL, configuração dinâmica de componentes de campo, versão mobile aprimorada, autenticação WeCom, arrays muitos-para-muitos e um novo nó de cálculo de data em workflows."
---

A partir da versão 1.3, o NocoBase oferece dois ramos principais: **main** e **next**.

- O ramo **main** (versão beta) foca em correções de bugs, garantindo uma versão estável para os usuários.
- O ramo **next** (versão alfa) contém alguns novos recursos ainda não lançados. Esta versão é instável e é destinada a desenvolvedores ou testadores que desejam experimentar novos recursos antecipadamente ou realizar testes de compatibilidade.

Os novos recursos na versão beta 1.3 incluem:

## Core

### Suporte para abrir pop-ups via URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Documentação de referência:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Suporte para abrir pop-ups como página

Uma nova opção "página" foi adicionada para operações de pop-up.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Documentação de referência:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Campos suportam configuração de atributos de estilo

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Documentação de referência:

- [Configurações de campo / Estilo](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown e iframe HTML suportam o mecanismo de template Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Documentação de referência:

- [Mecanismo de template Handlebars para Markdown](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Mecanismo de template Handlebars para iframe HTML](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Suporte para configurar dinamicamente componentes de campo

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Documentação de referência:

- [Configurações de campo / Componente de campo](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Exemplos de plugins / Componente de campo com valor](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### Fonte de dados REST API

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Documentação de referência:

- [Fonte de dados / Fonte de dados REST API](https://docs.nocobase.com/handbook/data-source-rest-api)

### Fonte de dados externa MSSQL

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Documentação de referência:

- [Fonte de dados / Banco de dados externo / MSSQL externo](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Documentação de referência:

- [Mobile](https://docs.nocobase.com/handbook/mobile)

### Muitos-para-muitos (array)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Documentação de referência:

- [Muitos-para-muitos (array)](https://docs.nocobase.com/handbook/field-m2m-array)

### Autenticação: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Documentação de referência:

- [Autenticação: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Workflow: Nó de cálculo de data

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Documentação de referência:

- [Workflow: Nó de cálculo de data](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Mudanças importantes

### Variável de ambiente `DB_TIMEZONE` alterada para `TZ`

A nova variável de ambiente `TZ` foi adicionada para definir o fuso horário da aplicação, com o padrão sendo o fuso horário do sistema operacional. A antiga `DB_TIMEZONE` permanece compatível, mas está obsoleta.

Referência:

- [Variável de ambiente / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
