---
title: "Atualizações Semanais｜Adicione uma ferramenta de busca na web baseada em LLM para funcionários de IA"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 3 a 9 de abril de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Data de lançamento: 2026-04-09*

### 🎉 Novos Recursos

- **[Gerenciador de migração]** suporte ao comando de migração por @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Data de lançamento: 2026-04-08*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Adicionar uma ferramenta de pesquisa web baseada em LLM para funcionários de IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde uma mensagem de confirmação de alterações não salvas incorreta aparecia para a ação de edição em massa ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Corrigido um problema onde um pop-up de confirmação secundária incorreto aparecia ao enviar o formulário após criar um registro através de uma subtabela em pop-up. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
- **[gerenciador-de-fonte-de-dados]** Corrigido um problema onde alguns tipos de campo não eram atualizados corretamente após sincronizar campos do banco de dados ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[Funcionários de IA]** Corrigir falha no upload de documentos de funcionários de IA sob acesso de subcaminho com APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Data de lançamento: 2026-04-04*

### 🚀 Melhorias

- **[indefinido]** Adicionar sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765

### 🐛 Correções de Bugs

- **[cliente]**

  - campo de relacionamento do subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Corrigido o problema onde ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
- **[servidor]** Adicionar verificação de serviço para evitar que o status do aplicativo seja atualizado por uma instância que não está servindo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigido o problema ao usar modelos deepseek ou minmax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
  - Corrigido o problema onde abortar o raciocínio dos funcionários de IA fazia o serviço travar ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
- **[Fluxo de trabalho: nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do fluxo de trabalho para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta e adicionado log de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Campo de coleção: Ordenar]** corrigir(campo-ordenação): evitar travamento quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Bloco: GridCard]** Corrigido o problema de que o botão não é atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Adicionar tolerância a falhas no fluxo de trabalho excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Adicionar tolerância a falhas para quando não há `latestRound` por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Data de lançamento: 2026-04-09*

### 🎉 Novos Recursos

- **[Gerenciador de migração]** suporte ao comando de migração por @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Data de lançamento: 2026-04-08*

### 🎉 Novos Recursos

- **[cliente]**

  - adicionar variáveis js ao fluxo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx
  - adicionar ação de item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx
- **[Funcionários de IA]** Adicionar uma ferramenta de pesquisa web baseada em LLM para funcionários de IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

### 🚀 Melhorias

- **[indefinido]**

  - Adicionar sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765
  - Ruído de log reduzido durante a inicialização do servidor ao silenciar comandos unzip para LibreOffice e Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925
- **[cliente]**

  - suporte para definir estilos de campo através de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
  - Otimizar o layout horizontal das ações do formulário ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx
- **[Fluxo de trabalho: JavaScript]** Adicionar `isolated-vm` como mecanismo de execução JavaScript padrão para o nó JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referência: [Nó JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Fluxo de trabalho]**

  - Alterar o tamanho do interruptor ativado para pequeno ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher
  - Adicionar variável para o parâmetro de tamanho da página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Funcionários de IA]** Otimizar prompts para deepseek ao lidar com tipos de arquivo não suportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Ação: Requisição personalizada]** adicionar modelos de ação para requisição personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
- **[Campo de coleção: divisões administrativas da China]** campo-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx
- **[Fluxo de trabalho: Subfluxo]** Adicionar lógica defensiva para evitar que o fluxo de trabalho trave quando ocorrer uma exceção por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir problema de desempenho causado por campo JSON ao carregar a lista de registros de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde uma mensagem de confirmação de alterações não salvas incorreta aparecia para a ação de edição em massa ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Corrigido um problema onde um pop-up de confirmação secundária incorreto aparecia ao enviar o formulário após criar um registro através de uma subtabela em pop-up. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
  - Corrigido o problema onde ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
  - campo de relacionamento do subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Corrigido o problema onde a cópia dos campos associados na tabela não era exibida corretamente na primeira renderização. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
  - Corrigida mensagem de confirmação secundária incorreta ao fechar pop-up multinível após modificar dados do formulário. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
  - Corrigir o problema onde espaço na expressão de variável fazia o rótulo não ser exibido ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
  - Corrigida a exceção ao adicionar nós filhos à tabela em árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[gerenciador-de-fonte-de-dados]** Corrigido um problema onde alguns tipos de campo não eram atualizados corretamente após sincronizar campos do banco de dados ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[servidor]**

  - Adicionar verificação de serviço para evitar que o status do aplicativo seja atualizado por uma instância que não está servindo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
  - Evitar manipular mensagem de sincronização após o aplicativo ser parado ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
  - Alterar o momento de fechamento do Pub-Sub para `beforeStop`, para evitar que mensagens sejam enviadas ou manipuladas após o banco de dados ser fechado ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher
- **[mecanismo-de-fluxo]**

  - Corrigir menus de configurações cortados no pop-up ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
  - Corrigido um problema onde os itens de menu não podiam ser selecionados quando a largura do componente de UI no estado de configuração era muito pequena. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
  - Adicionar snippets js para configurar item de formulário e item de detalhes ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
  - Sincronizar status para a configuração do campo quando o campo do formulário é excluído ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx
- **[banco de dados]** Usar aviso em vez de erro quando algum dos parâmetros de appends for inválido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher
- **[resourcer]** Corrigir um problema onde fontes de dados externas falham ao carregar corretamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile
- **[Funcionários de IA]**

  - Corrigir falha no upload de documentos de funcionários de IA sob acesso de subcaminho com APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock
  - Corrigido o problema ao usar modelos deepseek ou minmax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
  - Corrigido o problema onde abortar o raciocínio dos funcionários de IA fazia o serviço travar ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
  - Corrigido o problema de comportamento anormal da pesquisa web ao usar o modelo Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock
  - Adicionar verificação de propriedade à API de conversa de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
  - Ajustar o espaçamento entre os componentes do cartão de ferramentas na Conversa de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Fluxo de trabalho: nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do fluxo de trabalho para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta e adicionado log de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Campo de coleção: Ordenar]** corrigir(campo-ordenação): evitar travamento quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Bloco: GridCard]** Corrigido o problema de que o botão não é atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Notificação: Mensagem no aplicativo]** Corrigir lista de permissões de ação para atualizações de mensagens no aplicativo para evitar atualizações não autorizadas por não proprietários. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Fluxo de trabalho: nó SQL]** Corrigir problema de segurança no nó SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Visualização de dados]**

  - Ao usar filtros baseados em variáveis, os gráficos falham ao resolver os valores das variáveis corretamente na renderização inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile
  - corrigidas as estatísticas de dados anormais do gráfico da função raiz após ativar o plugin de espaço ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Ação: Importar registros]** corrigido o problema de falha na importação após abrir plugin-espaço ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Fluxo de trabalho: JavaScript]** Corrigir problemas de segurança ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Ação: Exportar registros]** Limitar configuração de importação e exportação de campos relacionados de múltiplas camadas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Variáveis personalizadas]** pular notificação de autenticação ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos
- **[Localização]** impedir requisição localizationTexts:missing na negação de permissão ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos
- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro lançado ao disparar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Ação: Importar registros Pro]**

  - limitar configuração de importação e exportação de campos relacionados de múltiplas camadas por @jiannx
  - Corrigir o problema onde a opção "Acionar fluxo de trabalho" não funciona quando não está marcada por @mytharcher
- **[Fonte de dados: Oracle externo]** Corrigir um erro que ocorre ao carregar a fonte de dados Oracle externa por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir limite de versão de migrações legadas para evitar erro lançado ao iniciar na implantação da versão mais recente por @mytharcher
  - Adicionar tolerância a falhas no fluxo de trabalho excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Corrigir tradução, seleção de nó e problemas de destino de retorno no botão de retorno do formulário de aprovação v2 por @zhangzhonghe
  - Adicionar tolerância a falhas para quando não há `latestRound` por @mytharcher
- **[Gerenciador de e-mail]**

  - Corrigida assinatura sendo sobrescrita ao usar modelos por @jiannx
  - nenhuma confirmação de fechamento é exibida após o e-mail ser enviado por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Data de lançamento: 2026-04-07*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Adicionar a capacidade de invocar subagentes para funcionários de IA ([#8935](https://github.com/nocobase/nocobase/pull/8935)) por @cgyrock
- **[IA: Servidor MCP]** Fornece uma API de consulta de coleção de dados genérica, chamável via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) por @2013xile

### 🚀 Melhorias

- **[indefinido]**

  - Adicionar sumário ao README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) por @gaston98765
  - Ruído de log reduzido durante a inicialização do servidor ao silenciar comandos unzip para LibreOffice e Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925
- **[Mecanismo de fluxo]** Adicionar novas APIs para construção de UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) por @gchust
- **[Fluxo de trabalho]** Alterar o tamanho do interruptor ativado para pequeno ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher
- **[Funcionários de IA]** Otimizar prompts para deepseek ao lidar com tipos de arquivo não suportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Ação: Requisição personalizada]** adicionar modelos de ação para requisição personalizada ([#8890](https://github.com/nocobase/nocobase/pull/8890)) por @jiannx
- **[Fluxo de trabalho: JavaScript]** Adicionar `isolated-vm` como mecanismo de execução JavaScript padrão para o nó JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referência: [Nó JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Correções de Bugs

- **[servidor]**

  - Adicionar verificação de serviço para evitar que o status do aplicativo seja atualizado por uma instância que não está servindo ([#8959](https://github.com/nocobase/nocobase/pull/8959)) por @mytharcher
  - Suporte para obter o aplicativo de destino pelo nome do host ([#8978](https://github.com/nocobase/nocobase/pull/8978)) por @2013xile
- **[cliente]**

  - campo de relacionamento do subformulário falhou ao salvar ([#9004](https://github.com/nocobase/nocobase/pull/9004)) por @jiannx
  - os subformulários dos campos não exibem dados ([#9008](https://github.com/nocobase/nocobase/pull/9008)) por @jiannx
  - Corrigido o problema onde a cópia dos campos associados na tabela não era exibida corretamente na primeira renderização. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
  - Corrigida mensagem de confirmação secundária incorreta ao fechar pop-up multinível após modificar dados do formulário. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
  - Corrigir o problema onde espaço na expressão de variável fazia o rótulo não ser exibido ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
- **[mecanismo-de-fluxo]**

  - Corrigir menus de configurações cortados no pop-up ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
  - Corrigido um problema onde os itens de menu não podiam ser selecionados quando a largura do componente de UI no estado de configuração era muito pequena. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
  - Adicionar snippets js para configurar item de formulário e item de detalhes ([#8974](https://github.com/nocobase/nocobase/pull/8974)) por @jiannx
- **[Fluxo de trabalho: nó de e-mail]** Corrigir validação para campos de variável ([#9047](https://github.com/nocobase/nocobase/pull/9047)) por @mytharcher
- **[Campo de coleção: Ordenar]** corrigir(campo-ordenação): evitar travamento quando o atributo scopeKey é indefinido ([#9019](https://github.com/nocobase/nocobase/pull/9019)) por @gaston98765
- **[Funcionários de IA]**

  - Corrigir o problema onde os funcionários de IA não conseguiam usar habilidades ([#9023](https://github.com/nocobase/nocobase/pull/9023)) por @cgyrock
  - Corrigir o problema onde o LLM ainda tenta carregar habilidades após a ferramenta getSkill ser desabilitada ([#9013](https://github.com/nocobase/nocobase/pull/9013)) por @cgyrock
  - Corrigido o problema de comportamento anormal da pesquisa web ao usar o modelo Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock
  - Adicionar verificação de propriedade à API de conversa de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
- **[Bloco: GridCard]** Corrigido o problema de que o botão não é atualizado quando o grid card é atualizado ([#9021](https://github.com/nocobase/nocobase/pull/9021)) por @jiannx
- **[Fluxo de trabalho]**

  - Corrigir regra de validação incorreta da instrução de condição ([#9017](https://github.com/nocobase/nocobase/pull/9017)) por @mytharcher
  - Corrigir o problema onde o modo do gatilho de coleção não podia ser definido como "criar ou atualizar" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigir lista de permissões de ação para atualizações de mensagens no aplicativo para evitar atualizações não autorizadas por não proprietários. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Gerenciador de fonte de dados]** Nomenclatura de ferramentas MCP otimizada e redução de respostas de API redundantes para evitar consumo excessivo do contexto de conversa de IA ([#9000](https://github.com/nocobase/nocobase/pull/9000)) por @2013xile
- **[Fluxo de trabalho: nó SQL]** Corrigir problema de segurança no nó SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Visualização de dados]** Ao usar filtros baseados em variáveis, os gráficos falham ao resolver os valores das variáveis corretamente na renderização inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Adicionar tolerância a falhas no fluxo de trabalho excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Adicionar tolerância a falhas para quando não há `latestRound` por @mytharcher
  - Corrigir limite de versão de migrações legadas para evitar erro lançado ao iniciar na implantação da versão mais recente por @mytharcher
- **[Gerenciador de e-mail]** nenhuma confirmação de fechamento é exibida após o e-mail ser enviado por @jiannx
