---
title: "NocoBase v1.6.38: Correções de Bugs"
description: "Nota de Lançamento da v1.6.38"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que blocos criados em pop-ups tinham coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe

  - Corrigido o problema em que os valores padrão do formulário de filtro eram inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe

  - Incapacidade de expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh

  - Corrigido o problema em que a opção 'Conteúdo excedente com reticências' era ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe

  - Corrigido o problema em que os valores de campos de texto de linha única eram exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe

- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile

- **[Gerenciador de arquivos]** Corrigida a configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o inicializador para a bancada de trabalho perdido por @mytharcher

- **[Auth: OIDC]** Texto do botão de login não estava sendo localizado por @2013xile
