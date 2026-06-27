---
title: "NocoBase v2.0.45: Corrigido o problema em que as variáveis no prompt do sistema de funcionários de IA não surtiam efeito"
description: "Nota de lançamento da v2.0.45"
---

### 🚀 Melhorias

- **[Workflow: JavaScript]** Atualização das imagens Docker, workflows de CI e da dependência do sandbox JavaScript do workflow para compatibilidade com Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido o problema em que variáveis no prompt do sistema dos funcionários de IA não surtiam efeito ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[Configurações de licença]** Atualização da mensagem de sucesso ao salvar a licença ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Ação: Importar registros]** Corrigido o problema em que a importação de xlsx falhava e gerava erro de cabeçalho não correspondente ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[Ação: Importar registros Pro]** Corrigido o problema em que a importação de xlsx falhava e gerava erro de cabeçalho não correspondente por @mytharcher

- **[IA: Base de conhecimento]** Corrigido o problema em que a exclusão de documentos da base de conhecimento não excluía os dados vetoriais associados por @cgyrock
