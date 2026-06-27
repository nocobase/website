---
title: "NocoBase v2.0.0-alpha.25: Experiência de codificação AI otimizada"
description: "Nota de lançamento da v2.0.0-alpha.25"
---

### 🚀 Melhorias

- **[servidor]** Adicionar log do gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile

- **[mecanismo de fluxo]** Suporte para definir contexto de variáveis na definição de etapas do fluxo ([#7674](https://github.com/nocobase/nocobase/pull/7674)) por @gchust

- **[Visualização de dados]**
  - adicionar dica para executar consulta antes de configurar opções do gráfico ([#7685](https://github.com/nocobase/nocobase/pull/7685)) por @heziqiang

  - atualizar dados do gráfico ao clicar no botão de pré-visualização global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) por @heziqiang

- **[Funcionários de IA]** Experiência de codificação com IA otimizada, incluindo o uso de funcionário de IA para revisar, diagnosticar e corrigir código. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) por @cgyrock

- **[Gerenciador de fonte de dados]** Ajustar a ordem das colunas de tipo de campo e interface, e adicionar uma etapa de confirmação ao fazer modificações. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) por @2013xile

- **[Fluxo de trabalho]** Completar a configuração do fluxo de trabalho vinculado para o botão de ação de atualização de registro ([#7668](https://github.com/nocobase/nocobase/pull/7668)) por @mytharcher

- **[Gerenciador de múltiplos aplicativos (obsoleto)]** melhorar o supervisor de aplicativos ([#7661](https://github.com/nocobase/nocobase/pull/7661)) por @chenos

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema onde os usuários não conseguiam definir valores padrão para campos exibidos em modo somente leitura. Isso garante uma configuração de campo mais suave quando os campos não são editáveis. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) por @gchust

  - Corrigir problemas conhecidos com regras de vinculação de subformulários ([#7698](https://github.com/nocobase/nocobase/pull/7698)) por @zhangzhonghe

  - O menu de campos do bloco js não pode ser carregado no bloco de formulário de filtro ([#7690](https://github.com/nocobase/nocobase/pull/7690)) por @gchust

- **[mecanismo de fluxo]** seleção incorreta de contexto do registro pop-up atual ao editar o escopo de dados de um campo associado dentro de um formulário de edição ([#7675](https://github.com/nocobase/nocobase/pull/7675)) por @gchust

- **[Fluxo de trabalho: Nó manual]** Corrigir o problema onde tarefas manuais desaparecem após o fluxo de trabalho ser desabilitado ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher

- **[Funcionários de IA]** Corrigido um problema onde blocos com recursos de API associados não buscavam os dados correspondentes quando selecionados. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) por @cgyrock

- **[Fluxo de trabalho]** Corrigir o problema onde, após excluir um nó que inicia a ramificação, a chave do primeiro nó retido dentro da ramificação era incorretamente alterada para um novo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

- **[Campo de coleção: divisões administrativas da China]** A importação de dados falha quando a cidade e a área têm o mesmo nome ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Gerenciador de arquivos]** Corrigir o problema de arquivos `.msg` não serem enviados corretamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Mecanismo de fluxo]** não é possível resolver variáveis na ação de campos de conjunto de vinculação ([#7684](https://github.com/nocobase/nocobase/pull/7684)) por @gchust

- **[Visualização de dados]** usar a API sql:runById para buscar dados de consulta na inicialização ([#7677](https://github.com/nocobase/nocobase/pull/7677)) por @heziqiang

- **[Fluxo de trabalho: Aprovação]** Corrigir o problema de tradução do texto de status nas notificações de conclusão de aprovação, usando o idioma padrão do sistema para tradução quando o usuário não definiu uma preferência de idioma por @mytharcher
