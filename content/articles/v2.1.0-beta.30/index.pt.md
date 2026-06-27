---
title: "NocoBase v2.1.0-beta.30: Adiciona suporte a regras de vinculação para itens de menu de página"
description: "Nota de lançamento da v2.1.0-beta.30"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adicionar suporte a regras de vinculação para itens de menu de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe

  - adicionar variável de idioma do usuário atual no v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

### 🚀 Melhorias

- **[client-v2]** Filtrar menus v1 no layout v2 e exibir apenas menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe

- **[undefined]** suportar ambiente atual com escopo de sessão no nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos

- **[Funcionários de IA]** Funcionário de IA suporta processamento paralelo de múltiplas conversas ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock

- **[Departamentos]** otimizar estilo da lista de departamentos adicionando ícones e ajustando espaçamento ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Correções de Bugs

- **[build]** Corrigir falha na construção do plugin quando o código do cliente v1 importa a entrada `/client-v2` de outro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn

- **[client]**
  - ocultar componente de subtabela para campos de associação muitos-para-muitos na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh

  - Corrigido um problema intermitente onde as regras de vinculação do botão de ação falhavam ao entrar em vigor. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust

- **[Gerenciador de coleção gráfica]** corrigir erro de filtro de ação de atualização no layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh

- **[Bloco: Árvore]** Configurações aprimoradas do bloco de filtro de árvore e corrigidas associação não suportada, fallback de campo de título e comportamento de redefinição de pesquisa. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx
