---
title: "NocoBase v2.1.0-alpha.24: Ajuste na interação de configuração de habilidades/ferramentas para instrução do funcionário de IA"
description: "Nota de lançamento da v2.1.0-alpha.24"
---

### 🚀 Melhorias

- **[indefinido]** Melhorar o guia de instalação do Agente de IA para evitar que Agentes ignorem o assistente `--ui` e detectar automaticamente gerenciadores de versão do Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) por @Molunerfinn

- **[Funcionários de IA]**
  - Ajustar a interação de configuração de habilidade/ferramenta para instrução de funcionário de IA ([#9232](https://github.com/nocobase/nocobase/pull/9232)) por @cgyrock

  - Remover o modelo recomendado na configuração do serviço LLM ([#9228](https://github.com/nocobase/nocobase/pull/9228)) por @cgyrock

- **[Workflow: JavaScript]** Atualizar imagens Docker, workflows de CI e a dependência do sandbox JavaScript do workflow para compatibilidade com Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[indefinido]** Corrigir o seletor de idioma que gerava URLs incorretas (ex.: `/cn/es/` em vez de `/es/`) no site de documentação. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) por @Molunerfinn

- **[Funcionários de IA]**
  - Corrigir o erro na API para buscar a lista de funcionários de IA ([#9241](https://github.com/nocobase/nocobase/pull/9241)) por @cgyrock

  - Refinar o comportamento de delegação de tarefas do Atlas e atualizar o Viz para usar o workflow de relatórios de negócios para solicitações de relatórios ([#9229](https://github.com/nocobase/nocobase/pull/9229)) por @2013xile
