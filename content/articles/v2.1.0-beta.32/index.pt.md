---
title: "NocoBase v2.1.0-beta.32: Adicione um novo funcionário de IA, a Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização"
description: "Nota de lançamento da v2.1.0-beta.32"
---

### 🎉 Novas Funcionalidades

- **[indefinido]** Adicionar um novo funcionário de IA, Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
Referência: [Gerenciamento de Localização](https://docs.nocobase.com/system-management/localization)<br>[Lina: Engenheira de Localização](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Usar Lina e o HY-MT1.5-1.8B local para traduzir entradas de localização](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Armazenamento de arquivos: S3(Pro)]** Suporte para upload de arquivos via armazenamento S3 Pro no gerenciador de arquivos v2. por @Molunerfinn

### 🚀 Melhorias

- **[build]** Adicionada cobertura de regressão para impedir que `deleteServerFiles` remova artefatos de build `client` e `client-v2` em caminhos Windows e POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn

- **[client]** Excluir registros já associados no diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh

- **[Gerenciador de arquivos]** Plugins de armazenamento de terceiros agora podem registrar seu próprio formulário de tipo de armazenamento na página de configurações do gerenciador de arquivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn

- **[IA: Base de conhecimento]** O identificador único para uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que não era possível selecionar opções para o campo de seleção de associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust

  - Corrigido o problema em que as configurações do sistema apareciam vazias após o envio ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe

  - Corrigidas requisições duplicadas de tabela quando formulários de filtro possuem valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe

  - Corrigido um problema em que o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de evento de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust

  - Corrigidas regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx

  - Corrigido erro ao alterar o campo de título do campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh

- **[client-v2]**
  - Corrigido o problema em que a página ficava em branco após o diálogo de ativação do plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe

  - Corrigida a falha de páginas do admin v1 ao referenciar módulos de plugin v2 em builds de produção. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn

- **[cli-v1]** Corrigidas falhas de inicialização de desenvolvimento em aplicativos criados com create-nocobase-app causadas pela resolução do caminho do cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn

- **[servidor]** correção(gerenciador-de-arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher

- **[Departamentos]** corrigido conflito de tradução entre os botões adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh

- **[Bloco: Markdown]** Corrigido o problema de erro no bloco Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe

- **[Workflow]** correção: restaurar texto de ajuda em diálogos de vinculação de workflow FlowModel para eventos de operação e ação personalizada ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher

- **[Funcionários de IA]** Corrigida a exigência de inserção de chave no teste de voo do Ollama ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock

- **[Workflow: Aprovação]**
  - Corrigido índice duplicado de registro de aprovação ao delegar tarefas de aprovação. por @mytharcher

  - Corrigido layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe

- **[Gerenciador de backup]** Corrigido um problema em que os backups falhavam com um erro quando os arquivos não podiam ser encontrados. por @gchust
