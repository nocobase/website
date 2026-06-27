---
title: "NocoBase v1.4.11: Otimizar itens de configuração de componentes"
description: "Nota de lançamento da v1.4.11"
---

### 🚀 Melhorias

- **[client]** Mais componentes agora suportam o item de configuração 'Transbordamento com reticências' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) por @zhangzhonghe

- **[database]** Adicionado `firstOrCreate` e `updateOrCreate` ao repositório de relações ([#5894](https://github.com/nocobase/nocobase/pull/5894)) por @chareice

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido parâmetro `x-data-source` ausente no template de requisição duplicada para bloco de fonte de dados externa ([#5882](https://github.com/nocobase/nocobase/pull/5882)) por @katherinehhh

  - Corrigido problema de barra de rolagem horizontal em tabela dentro de plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) por @katherinehhh

  - Corrigido problema onde opções extras 'N/A' apareciam às vezes em menus suspensos de campos de associação ([#5878](https://github.com/nocobase/nocobase/pull/5878)) por @zhangzhonghe

  - Corrigido problema de criação de visualização no PG, resolvendo erro ao selecionar visualizações entre esquemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) por @katherinehhh

  - Corrigido problema com estilos de grupo em blocos de formulário quando o layout está definido como horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) por @katherinehhh

- **[Usuários]**
  - Corrigido problema onde o formulário não era redefinido após adicionar ou editar um usuário no gerenciamento de usuários. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) por @2013xile

  - Corrigido problema onde as configurações de paginação eram redefinidas após editar e enviar perfis de usuário no gerenciamento de usuários após uma troca de página ou alteração no tamanho da página. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) por @2013xile

- **[Gerenciador de fontes de dados]** Corrigido problemas de filtragem com a Collection de fonte de dados externa ([#5890](https://github.com/nocobase/nocobase/pull/5890)) por @chareice

- **[Formulários públicos]** Corrigido problema onde a alternância de tema global afetava o tema da página de pré-visualização de formulário público ([#5883](https://github.com/nocobase/nocobase/pull/5883)) por @katherinehhh
