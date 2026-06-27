---
title: "NocoBase v1.9.33: Suporte à configuração do método de renomeação de arquivos"
description: "Nota de lançamento da v1.9.33"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a componentes de manutenção definidos por plugins quando o aplicativo entra em estado de manutenção ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock

- **[Gerenciador de arquivos]** Suporte à configuração do método de renomeação de arquivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW

- **[Armazenamento de arquivos: S3(Pro)]** Adicionada opção de modo de renomeação para armazenamento S3 Pro por @mytharcher

### 🚀 Melhorias

- **[Gerenciador de migrações]** Verificações de migração aprimoradas, suporte a download de SQL, formatação de logs e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[database]**
  - Incluir escopo de tabela intermediária ao consultar relacionamentos m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile

  - Corrigir `appends` de objeto no `OptionsParser` e aumentar `arrayLimit` para parâmetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

- **[client]** Corrigir o problema de erro lançado nas configurações do bloco de formulário de filtro do campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** Corrigir idioma ao cancelar tarefa em segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher

- **[Gerenciador de arquivos]** Corrigir o problema de erro ao enviar arquivo maior que 5MB para AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher

- **[Workflow]** Corrigida a invalidação de eventos do banco de dados após atualizar a fonte de dados externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock

- **[Coleção: Árvore]** Atualizar caminhos após criar em lote nós de coleção em árvore ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile

- **[Fonte de dados: PostgreSQL externo]** Corrigida a invalidação de eventos do banco de dados após atualizar a fonte de dados externa por @cgyrock

- **[Fonte de dados: Oracle externo]** Corrigida a invalidação de eventos do banco de dados após atualizar a fonte de dados externa por @cgyrock
