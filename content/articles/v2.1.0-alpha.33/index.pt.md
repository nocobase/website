---
title: "NocoBase v2.1.0-alpha.33: adicionar variável de idioma do usuário atual na v2"
description: "Nota de lançamento da v2.1.0-alpha.33"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adiciona variável de idioma do usuário atual no v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

  - Adiciona suporte a regras de vinculação para itens de menu de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe

### 🚀 Melhorias

- **[client-v2]** Filtra menus v1 no layout v2 e exibe apenas menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe

- **[Departamentos]** Otimiza o estilo da lista de departamentos adicionando ícones e ajustando espaçamentos ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Correções de Bugs

- **[build]** Corrige falha na compilação de plugins quando o código do cliente v1 importa a entrada `/client-v2` de outro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn

- **[client]**
  - Corrige um problema intermitente onde as regras de vinculação de botões de ação não surtiam efeito. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust

  - Oculta o componente de subtabela para campos de associação "para muitos" na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh

- **[Gerenciador de coleção gráfica]** Corrige erro no filtro de ação de atualização do layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh

- **[Bloco: Árvore]** Melhora as configurações do bloco de filtro de árvore e corrige associação não suportada, fallback do campo de título e comportamento de redefinição de pesquisa. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx
