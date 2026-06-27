---
title: "NocoBase v1.6.20: Torne os plugins de Departamento, URL de Anexo e mensagem de resposta do Workflow gratuitos"
description: "Nota de lançamento da v1.6.20"
---

### 🎉 Novas Funcionalidades

- **[Departamentos]** Torne os plugins de Departamento, URL de Anexo e mensagem de resposta do Workflow gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

### 🐛 Correções de Bugs

- **[client]**
  - O formulário de filtro não deve exibir o aviso "Alterações não salvas" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - A opção "permitir múltiplos" não está funcionando para campos de relação ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - No formulário de filtro, ao clicar no botão de filtro, se houver campos que não passaram na validação, a filtragem ainda é acionada ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - Alternar para o menu de grupo não deve pular para uma página que já foi ocultada no menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

- **[Armazenamento de arquivos: S3(Pro)]**
  - Organizar idioma por @jiannx

  - Configurações individuais de baseurl e público, melhoria na UX de configuração de armazenamento S3 Pro por @jiannx

- **[Gerenciador de migração]** a opção de pular backup automático se torna inválida se o popup de variável de ambiente aparecer durante a migração por @gchust
