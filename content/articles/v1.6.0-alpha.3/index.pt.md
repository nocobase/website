---
title: "NocoBase v1.6.0-alpha.3: Remover componentes Formily da tabela"
description: "Nota de lançamento da v1.6.0-alpha.3"
---

### 🚀 Melhorias

- **[client]** Remover componentes do Formily da tabela para melhorar o desempenho ao alternar a paginação da tabela ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que os campos não eram exibidos após serem adicionados em um subformulário ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe

  - Corrigido o problema em que alterar o valor de um campo de associação no bloco de detalhes não era atualizado imediatamente ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe

  - Corrigido o problema em que clicar em links não abria um pop-up quando 'Ativar link' era ativado pela primeira vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe

  - Impedir múltiplas chamadas de API ao fechar o pop-up ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe

  - Corrigido o problema em que o login móvel redirecionava para a página desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe

  - Corrigido o alinhamento do botão de ação de configuração para ser alinhado à esquerda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh

- **[build]** Corrigido o cache incorreto dos arquivos js do frontend após a compilação do plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust
