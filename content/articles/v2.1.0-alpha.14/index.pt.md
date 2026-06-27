---
title: "NocoBase v2.1.0-alpha.14: Adicionar a capacidade de invocar subagentes para funcionários de IA"
description: "Nota de lançamento da v2.1.0-alpha.14"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Adiciona a capacidade de invocar subagentes para funcionários de IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock

- **[IA: Servidor MCP]** Fornece uma API de consulta de coleção de dados genérica, chamável via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

### 🚀 Melhorias

- **[indefinido]**
  - Adiciona sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

  - Reduz o ruído de log durante a inicialização do servidor ao silenciar comandos unzip para LibreOffice e Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

- **[Mecanismo de fluxo]** Adiciona novas APIs para construção de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust

- **[Workflow]** Altera o tamanho do interruptor de ativação para pequeno ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

- **[Funcionários de IA]** Otimiza prompts para deepseek ao lidar com tipos de arquivo não suportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock

- **[Ação: Solicitação personalizada]** Adiciona modelos de ação para solicitação personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx

- **[Workflow: JavaScript]** Adiciona `isolated-vm` como mecanismo de execução JavaScript padrão para o nó JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
Referência: [Nó JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Correções de Bugs

- **[servidor]**
  - Adiciona verificação de serviço para evitar que o status do aplicativo seja atualizado por uma instância não ativa ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

  - Suporte para obter o aplicativo de destino pelo nome do host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile

- **[cliente]**
  - Campo de relacionamento de subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - Os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Corrigido o problema em que a cópia dos campos associados na tabela não era exibida corretamente na primeira renderização. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx

  - Corrigida mensagem de confirmação secundária incorreta ao fechar popup multinível após modificar dados do formulário. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust

  - Corrige o problema em que espaço na expressão de variável fazia o rótulo não ser exibido ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher

- **[mecanismo de fluxo]**
  - Corrige menus de configurações cortados em popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust

  - Corrigido um problema em que os itens de menu não podiam ser selecionados quando a largura do componente de UI no estado de configuração era muito pequena. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust

  - Adiciona snippets JS para item de configuração de formulário e item de detalhes ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx

- **[Workflow: nó de e-mail]** Corrige validação para campos de variável ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher

- **[Campo de coleção: Ordenar]** correção(campo-ordenar): impede falha quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Funcionários de IA]**
  - Corrige o problema em que os funcionários de IA não conseguiam usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock

  - Corrige o problema em que o LLM ainda tentava carregar habilidades após a ferramenta getSkill ser desabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock

  - Corrigido o problema de comportamento anormal de pesquisa na web ao usar o LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

  - Adiciona verificação de propriedade à API de conversa de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock

- **[Bloco: GridCard]** Corrigido o problema de que o botão não é atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Workflow]**
  - Corrige regra de validação incorreta da instrução de condição ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher

  - Corrige o problema em que o modo do gatilho de coleção não podia ser definido como "criar ou atualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]** Corrige lista de permissões de ação para atualizações de mensagens no aplicativo para evitar atualizações não autorizadas por não proprietários. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher

- **[Gerenciador de fonte de dados]** Otimizada a nomenclatura de ferramentas MCP e reduzidas respostas redundantes da API para evitar consumo excessivo do contexto de conversa de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile

- **[Workflow: nó SQL]** Corrige problema de segurança no nó SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher

- **[Visualização de dados]** Ao usar filtros baseados em variáveis, os gráficos falham ao resolver valores de variáveis corretamente na renderização inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

- **[Workflow: Aprovação]**
  - Adiciona tolerância a falhas quando o workflow é excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher

  - Adiciona tolerância a falhas para ausência de `latestRound` por @mytharcher

  - Corrige limite de versão de migrações legadas para evitar erro ao iniciar na implantação da versão mais recente por @mytharcher

- **[Gerenciador de e-mail]** nenhuma confirmação de fechamento é exibida após o e-mail ser enviado por @jiannx
