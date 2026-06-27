---
title: "NocoBase v2.1.0-beta.12: Adicionar uma ferramenta de busca web baseada em LLM para funcionários de IA"
description: "Nota de lançamento da v2.1.0-beta.12"
---

### 🎉 Novos Recursos

- **[client]**
  - adicionar variáveis JS ao fluxo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

  - adicionar ação de item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx

- **[Funcionários de IA]** Adicionar uma ferramenta de busca web baseada em LLM para funcionários de IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🚀 Melhorias

- **[undefined]**
  - Adicionar sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

  - Redução do ruído de log durante a inicialização do servidor ao silenciar comandos unzip para LibreOffice e Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

- **[client]**
  - suporte para definir estilos de campo através de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx

  - Otimizar o layout horizontal das ações do formulário ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

- **[Workflow: JavaScript]** Adicionar `isolated-vm` como mecanismo de execução JavaScript padrão para o nó JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
Referência: [Nó JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**
  - Alterar tamanho do interruptor de ativação para pequeno ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

  - Adicionar variável para o parâmetro de tamanho da página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Funcionários de IA]** Otimizar prompts para deepseek ao lidar com tipos de arquivo não suportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock

- **[Ação: Solicitação personalizada]** adicionar modelos de ação para solicitação personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx

- **[Campo de coleção: divisões administrativas da China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx

- **[Workflow: Subfluxo]** Adicionar lógica defensiva para evitar travamentos do workflow quando ocorrer uma exceção por @mytharcher

- **[Workflow: Aprovação]** Corrigir problema de desempenho causado por campo JSON ao carregar lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido um problema onde uma mensagem de confirmação de alterações não salvas incorreta aparecia para a ação de edição em massa ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust

  - Corrigido um problema onde um pop-up de confirmação secundária incorreta aparecia ao enviar o formulário após criar um registro através de uma subtabela em pop-up. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust

  - Corrigido o problema onde ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

  - campo de relacionamento em subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx

  - os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx

  - Corrigido o problema onde a cópia dos campos associados na tabela não era exibida corretamente na primeira renderização. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx

  - Corrigida mensagem de confirmação secundária incorreta ao fechar pop-up multinível após modificar dados do formulário. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust

  - Corrigir o problema onde espaço na expressão de variável fazia o rótulo não ser exibido ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher

  - Corrigida a exceção ao adicionar nós filhos à tabela em árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[data-source-manager]** Corrigido um problema onde alguns tipos de campo não eram atualizados corretamente após sincronizar campos do banco de dados ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile

- **[server]**
  - Adicionar verificação de serviço ativo para evitar que o status do aplicativo seja atualizado por uma instância não ativa ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher

  - Evitar manipular sync-message após o aplicativo parar ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

  - Alterar o momento de fechamento do Pub-Sub para `beforeStop`, para evitar que mensagens sejam enviadas ou manipuladas após o banco de dados ser fechado ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[flow-engine]**
  - Corrigir menus de configurações cortados em pop-up ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust

  - Corrigido um problema onde os itens de menu não podiam ser selecionados quando a largura do componente de UI no estado de configuração era muito pequena. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust

  - Adicionar snippets JS para configurar item de formulário e item de detalhes ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx

  - Sincronizar status para a configuração do campo quando o campo do formulário é excluído ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx

- **[database]** Usar aviso em vez de erro quando algum dos parâmetros de appends for inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher

- **[resourcer]** Corrigir um problema onde fontes de dados externas falham ao carregar corretamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile

- **[Funcionários de IA]**
  - Corrigir falha no upload de documentos do funcionário de IA sob acesso de subcaminho com APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

  - Corrigido o problema ao usar modelos deepseek ou minmax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock

  - Corrigido o problema onde abortar o raciocínio dos funcionários de IA causava a queda do serviço ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

  - Corrigido o problema de comportamento anormal da busca web ao usar o Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

  - Adicionar verificação de propriedade à API de conversa de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock

  - Ajustar o espaçamento entre os componentes do cartão de ferramenta na Conversa de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock

- **[Workflow: Nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do workflow para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta, e adicionado log de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Campo de coleção: Ordenação]** fix(field-sort): prevenir travamento quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765

- **[Bloco: GridCard]** Corrigido o problema onde o botão não é atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx

- **[Notificação: Mensagem no aplicativo]** Corrigir lista de permissões de ação para atualizações de mensagens no aplicativo para evitar atualizações não autorizadas por não proprietários. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher

- **[Workflow: Nó SQL]** Corrigir problema de segurança no nó SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher

- **[Visualização de dados]**
  - Ao usar filtros baseados em variáveis, os gráficos falham ao resolver os valores das variáveis corretamente na renderização inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

  - corrigida a estatística de dados anormal do gráfico da função raiz após ativar o plugin de espaço ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx

- **[Ação: Importar registros]** corrigido o problema de falha na importação após abrir plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx

- **[Workflow: JavaScript]** Corrigir problemas de segurança ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher

- **[Ação: Exportar registros]** Limitar configuração de importação e exportação de campos relacionados de múltiplas camadas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx

- **[Variáveis personalizadas]** pular notificação de autenticação ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

- **[Localização]** prevenir requisição localizationTexts:missing na negação de permissão ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro lançado ao disparar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Ação: Importar registros Pro]**
  - limitar configuração de importação e exportação de campos relacionados de múltiplas camadas por @jiannx

  - Corrigir o problema onde a opção "Acionar workflow" não funciona quando não está marcada por @mytharcher

- **[Fonte de dados: Oracle externo]** Corrigir um erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir limite de versão de migrações legadas para evitar erro lançado ao iniciar na implantação da versão mais recente por @mytharcher

  - Adicionar tolerância a falhas no workflow excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher

  - Corrigir problemas de tradução, seleção de nó e destino de retorno no botão de retorno do formulário de aprovação v2 por @zhangzhonghe

  - Adicionar tolerância a falhas para quando não há `latestRound` por @mytharcher

- **[Gerenciador de e-mail]**
  - Corrigida assinatura sendo sobrescrita ao usar modelos por @jiannx

  - nenhuma confirmação de fechamento é exibida após o e-mail ser enviado por @jiannx
