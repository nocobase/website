---
title: "NocoBase v1.7.0-beta.17: Suporte para atualizar dados em outros blocos de dados após atualizar dados em um bloco"
description: "Nota de lançamento da v1.7.0-beta.17"
---

### 🎉 Novas Funcionalidades

- **[Departamentos]** Tornar os plugins de Departamento, URL de Anexo e mensagem de resposta do Workflow gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

- **[Ação: Atualização em lote]** Suporte para atualizar dados em outros blocos de dados após atualizar dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

### 🚀 Melhorias

- **[Workflow]** Suporte para URL fixa de pop-up para tarefas do workflow ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Ao alternar para o menu de grupo, não deve pular para uma página que já foi ocultada no menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

  - O formulário de filtro não deve exibir o aviso "Alterações não salvas" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - Corrigir o problema de imagens de pré-visualização sendo obscurecidas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe

  - No formulário de filtro, quando o botão de filtro é clicado, se houver campos que não passaram na validação, a filtragem ainda é acionada ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - Opção "permitir múltiplos" não funcionando para campo de relação ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - No bloco de formulário, o valor padrão da configuração do campo será exibido primeiro como a string da variável original e depois desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

- **[Campo de coleção: Anexo(URL)]** permitir apenas coleções de arquivos com acesso público por URL ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh

- **[Armazenamento de arquivos: S3(Pro)]**
  - Configurações individuais de baseurl e público, melhorar a UX de configuração de armazenamento S3 Pro por @jiannx

  - Organizar idioma por @jiannx

- **[Workflow: Aprovação]** Suporte para URL fixa para itens de aprovação no centro de tarefas por @mytharcher

- **[Gerenciador de migração]** a opção de pular backup automático se torna inválida se o pop-up de variável de ambiente aparecer durante a migração por @gchust
