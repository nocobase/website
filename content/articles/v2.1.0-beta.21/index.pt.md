---
title: "NocoBase v2.1.0-beta.21: Correções de Bugs"
description: "Nota de Lançamento da v2.1.0-beta.21"
---

### 🐛 Correções de Bugs

- **[client]** Corrigido um problema em que os valores padrão não eram aplicados ao readicionar um registro após ele ter sido removido de uma subtabela. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

- **[Configurações de licença]** Atualizada a mensagem de sucesso ao salvar a licença ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Funcionários de IA]** Corrigido o problema em que as variáveis no prompt do sistema dos funcionários de IA não surtiam efeito ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[Ação: Importar registros]** Corrigido o problema em que a importação de xlsx falhava e gerava o erro de nenhum cabeçalho correspondente ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[IA: Base de conhecimento]** Corrigido o problema em que a exclusão de documentos da base de conhecimento não excluía os dados vetoriais associados por @cgyrock

- **[Ação: Importar registros Pro]** Corrigido o problema em que a importação de xlsx falhava e gerava o erro de nenhum cabeçalho correspondente por @mytharcher
