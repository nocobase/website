---
title: "NocoBase v1.8.0-alpha.9: Adicionar variável de registros de aprovação ao resultado do nó"
description: "Nota de lançamento da v1.8.0-alpha.9"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte ao campo BIT do SQL Server para fontes de dados externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie

- **[Fonte de dados: SQL Server Externo]** Suporte ao campo BIT do SQL Server em fontes de dados externas por @aaaaaajie

- **[Fluxo de trabalho: Aprovação]** Adiciona variável de registros de aprovação ao resultado do nó por @mytharcher

### 🚀 Melhorias

- **[client]** Ocultar automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

- **[Verificação]** Remover opções de verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

- **[Fluxo de trabalho]** Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher

- **[Fluxo de trabalho: Evento pré-ação]** Ajustar API de variáveis por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Ajustar API de variáveis por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Função de alinhamento de texto em colunas de tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe

  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe

  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - Condição de estilo em campos de coluna de subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - Filtragem através de campos de coleção de relacionamento em formulários de filtro é inválida ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

  - Variáveis de parâmetro de consulta de URL não funcionam no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - Mensagem de validação obrigatória em subtabela persiste ao trocar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - Erro ao clicar no botão de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe

- **[database]** suportar atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[Fluxo de trabalho]**
  - Corrigir estatísticas em cascata excluídas por versão de fluxo de trabalho não atual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher

  - Corrigir verificação executada incorretamente em número inteiro grande ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher

  - Corrigir verificação executada incorretamente em número inteiro grande ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher

- **[Ação: Importar registros]** Resolver problema de falha de login após importação em lote de nomes de usuário e senhas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie

- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) gera erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Gerenciador de arquivos]** Corrigir campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher

- **[Formulários públicos]** Formulários públicos: Corrigir problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

- **[Campo de coleção: Sequência]** Corrigir cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher

  - Apenas participantes podem visualizar (obter) detalhes da aprovação por @mytharcher

- **[Gerenciador de e-mail]** Erro ao excluir e-mail por @jiannx
