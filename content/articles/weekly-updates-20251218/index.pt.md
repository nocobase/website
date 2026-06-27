---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Ao criar uma coleção, o tipo de campo de id predefinido pode ser alterado, e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Data de lançamento: 2025-12-17*

### 🚀 Melhorias

- **[servidor]** Adiciona tolerância a falhas quando instâncias de aplicativo ausentes causam erros ao buscar mensagens de manutenção do aplicativo ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile
- **[Manipulador de erros]** Não expõe mensagens de erro brutas do banco de dados em erros de sintaxe SQL, para evitar revelar o tipo de banco de dados ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile
- **[Fluxo de trabalho]** Suporte ao uso de configuração legada para criar um novo em fluxo de trabalho duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher

### 🐛 Correções de bugs

- **[Fluxo de trabalho]** Corrige o problema de que apenas um registro é exibido na lista de registros para execução manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher
- **[Coleção: Conectar a dados externos (FDW)]** Corrige erros de gatilho ao conectar a tabelas com nomes em maiúsculas por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o status de registros de aprovação não relacionados é alterado incorretamente para `UNPROCESSED` pela ação de aprovação por @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Data de lançamento: 2025-12-16*

### 🚀 Melhorias

- **[acl]** Suporte à API `acl.registerSnippet` para mesclar configuração de snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher
- **[Controle de acesso]** Não permite atribuir a função root a usuários ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Correções de bugs

- **[Configurações de licença]**

  - corrige exceção de compilação ts do plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx
  - otimização de licença e adição de informações de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx
- **[Gerenciador de arquivos]** Corrige o problema de visualização de arquivo `.txt` no OSS com charset incorreto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher
- **[Ação: Importar registros]** Aguarda sincronizadamente a conclusão dos eventos `afterCreate` acionados pela importação. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile
- **[Coleção: Conectar a dados externos (FDW)]** Corrige problema de falha ao carregar tabelas com nomes em maiúsculas por @2013xile
- **[Fonte de dados: SQL Server externo]** Corrige problemas em que as opções `encrypt` e `trustServerCertificate` não estão disponíveis por @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Data de lançamento: 2025-12-12*

### 🚀 Melhorias

- **[Fluxo de trabalho]**
  - Adiciona lógica de tolerância a falhas para dados ausentes na preparação do processador, para evitar travamento na execução ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher
  - Usa carregamento lento para dados de associação na tela do fluxo de trabalho para melhorar o desempenho ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher

### 🐛 Correções de bugs

- **[acl]** Corrige o problema em que a API `acl.can` retorna `null` quando a função é `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrige o problema de a lista de tarefas manuais estar usando API incorreta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher
- **[Criptografia de solicitação HTTP]** Usa colchetes para formato de array na análise qs por @chenos
- **[Fluxo de trabalho: Aprovação]** Corrige o problema de erro ao cancelar uma execução quando seu fluxo de trabalho é excluído por @mytharcher
- **[Gerenciador de migração]** Corrige um problema em que as quebras de linha nos dados eram perdidas durante a migração. por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Data de lançamento: 2025-12-17*

### 🚀 Melhorias

- **[servidor]** Adiciona tolerância a falhas quando instâncias de aplicativo ausentes causam erros ao buscar mensagens de manutenção do aplicativo ([#8196](https://github.com/nocobase/nocobase/pull/8196)) por @2013xile
- **[Bloco: Lista]** Adiciona botão Link para blocos de Tabela, Lista e Cartão de Grade ([#8194](https://github.com/nocobase/nocobase/pull/8194)) por @katherinehhh

### 🐛 Correções de bugs

- **[cliente]** Corrige um problema em que selecionar "Não" para um filtro de caixa de seleção ainda aplicava o filtro "Sim". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) por @gchust
- **[Gerenciador de migração]** Corrige descrição de migração ausente e define a hora atual como padrão por @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Data de lançamento: 2025-12-17*

### 🎉 Novos recursos

- **[cliente]** Ao criar uma coleção, o tipo de campo de id predefinido pode ser alterado ([#8129](https://github.com/nocobase/nocobase/pull/8129)) por @cgyrock

### 🚀 Melhorias

- **[cliente]**

  - altera a largura da coluna da tabela para usar opções selecionáveis ([#8188](https://github.com/nocobase/nocobase/pull/8188)) por @katherinehhh
  - melhora os estilos do recordPicker com maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) por @katherinehhh
  - otimiza as opções de configuração (Blocos, Campos, Ações) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) por @katherinehhh
- **[Manipulador de erros]** Não expõe mensagens de erro brutas do banco de dados em erros de sintaxe SQL, para evitar revelar o tipo de banco de dados ([#8195](https://github.com/nocobase/nocobase/pull/8195)) por @2013xile
- **[Bloco: Mapa]** suporta reticências de estouro de texto para campo de mapa no modo de exibição de texto ([#8189](https://github.com/nocobase/nocobase/pull/8189)) por @katherinehhh
- **[Fluxo de trabalho]** Suporte ao uso de configuração legada para criar um novo em fluxo de trabalho duplicado ([#8165](https://github.com/nocobase/nocobase/pull/8165)) por @mytharcher
- **[Controle de acesso]** Não permite atribuir a função root a usuários ([#8180](https://github.com/nocobase/nocobase/pull/8180)) por @2013xile

### 🐛 Correções de bugs

- **[cliente]**

  - corrige o botão de envio não exibido no formulário de criação quando a função tem permissão de criação ([#8190](https://github.com/nocobase/nocobase/pull/8190)) por @katherinehhh
  - impede que dados existentes de subtabela/subformulário sejam limpos ao enviar sem selecionar nenhum item ([#8172](https://github.com/nocobase/nocobase/pull/8172)) por @katherinehhh
  - impede que a configuração de Escopo de dados apareça na configuração do formulário de criação ([#8176](https://github.com/nocobase/nocobase/pull/8176)) por @katherinehhh
  - Falha ao salvar o fluxo de eventos da guia ([#8168](https://github.com/nocobase/nocobase/pull/8168)) por @chenos
  - remove espaçamento extra após a guia ser ocultada ([#8167](https://github.com/nocobase/nocobase/pull/8167)) por @chenos
  - corrige filtragem incorreta de opções selecionadas no seletor de registro de associação ([#8151](https://github.com/nocobase/nocobase/pull/8151)) por @katherinehhh
  - Corrige problema de renderização do campo tableoid no bloco de formulário ([#8177](https://github.com/nocobase/nocobase/pull/8177)) por @katherinehhh
- **[servidor]**

  - Atualiza license-kit para a versão mais recente ([#8173](https://github.com/nocobase/nocobase/pull/8173)) por @jiannx
  - Suporte a campos Snowflake ID (53 bits) para fontes de dados externas ([#8185](https://github.com/nocobase/nocobase/pull/8185)) por @2013xile
- **[Bloco: Mapa]** corrige nível de zoom do mapa incorreto após alternância de menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) por @katherinehhh
- **[Fluxo de trabalho]** Corrige o problema de que apenas um registro é exibido na lista de registros para execução manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) por @mytharcher
- **[Visualização de dados]** Resolve problema sobre o modo SQL selecionar fonte de dados externa; <br/>Resolve problema sobre o estado de carregamento do bloco de gráfico durante a busca de dados; <br/> Resolve problema sobre o bloco de gráfico vazio cancelar configuração; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) por @heziqiang
- **[Funcionários de IA]** Resolve problema sobre quebra de linha de mensagem de IA ([#8096](https://github.com/nocobase/nocobase/pull/8096)) por @heziqiang
- **[Configurações de licença]**

  - corrige exceção de compilação ts do plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) por @jiannx
  - otimização de licença e adição de informações de aviso ([#7993](https://github.com/nocobase/nocobase/pull/7993)) por @jiannx
- **[Gerenciador de arquivos]** Corrige o problema de visualização de arquivo `.txt` no OSS com charset incorreto ([#8161](https://github.com/nocobase/nocobase/pull/8161)) por @mytharcher
- **[Fonte de dados: SQL Server externo]** Corrige problemas em que as opções `encrypt` e `trustServerCertificate` não estão disponíveis por @2013xile
- **[Coleção: Conectar a dados externos (FDW)]** Corrige problema de falha ao carregar tabelas com nomes em maiúsculas por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o status de registros de aprovação não relacionados é alterado incorretamente para `UNPROCESSED` pela ação de aprovação por @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Data de lançamento: 2025-12-12*

### 🚀 Melhorias

- **[acl]** Suporte à API `acl.registerSnippet` para mesclar configuração de snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) por @mytharcher
- **[cliente]** suporta formatação de número para campos de porcentagem ([#8123](https://github.com/nocobase/nocobase/pull/8123)) por @katherinehhh
- **[mecanismo de fluxo]** suporta ocultar menu de configuração de etapa dinamicamente ([#7924](https://github.com/nocobase/nocobase/pull/7924)) por @gchust
- **[Bloco: GridCard]** Otimiza estilos do bloco Grid Card para um layout mais compacto ([#8152](https://github.com/nocobase/nocobase/pull/8152)) por @katherinehhh
- **[Funcionários de IA]** Habilitada funcionalidade de edição para prompts de sistema do assistente de IA integrado.<br/>Prompt de sistema otimizado para o assistente de IA Nathan.<br/>Corrigido um problema com o servidor falhando ao ler arquivos estáticos. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) por @heziqiang
- **[Fluxo de trabalho]**

  - Adiciona lógica de tolerância a falhas para dados ausentes na preparação do processador, para evitar travamento na execução ([#8156](https://github.com/nocobase/nocobase/pull/8156)) por @mytharcher
  - Usa carregamento lento para dados de associação na tela do fluxo de trabalho para melhorar o desempenho ([#8142](https://github.com/nocobase/nocobase/pull/8142)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** Desabilita a análise de variáveis no campo Markdown por padrão no modo readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) por @katherinehhh

### 🐛 Correções de bugs

- **[mecanismo de fluxo]** Corrige download de arquivo incorreto para anexos ([#8154](https://github.com/nocobase/nocobase/pull/8154)) por @katherinehhh
- **[cliente]**

  - corrige dropdown de campo de associação sendo desabilitado quando o campo de opções existe ([#8153](https://github.com/nocobase/nocobase/pull/8153)) por @katherinehhh
  - Corrigido um problema em que inserir texto em chinês limpava as opções existentes ao usar operadores de múltipla seleção em campo de seleção única no bloco de formulário de filtro. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) por @gchust
  - Corrigido um problema em que alternar campos de rótulo fazia com que as configurações de pop-up fossem perdidas. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) por @gchust
- **[acl]** Corrige o problema em que a API `acl.can` retorna `null` quando a função é `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) por @mytharcher
- **[banco de dados]** `filterByTk` agora suporta arrays ao consultar coleções com múltiplas chaves de destino de filtro ([#7986](https://github.com/nocobase/nocobase/pull/7986)) por @chenos
- **[Ação: Importar registros]** Aguarda sincronizadamente a conclusão dos eventos `afterCreate` acionados pela importação. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) por @2013xile
- **[Campo de coleção: Sequência]** Melhora a robustez do plugin-field-sequence ao lidar com o comando de reparo ([#8139](https://github.com/nocobase/nocobase/pull/8139)) por @cgyrock
- **[Fluxo de trabalho: Nó manual]** Corrige o problema de a lista de tarefas manuais estar usando API incorreta ([#8144](https://github.com/nocobase/nocobase/pull/8144)) por @mytharcher
- **[Criptografia de solicitação HTTP]** Usa colchetes para formato de array na análise qs por @chenos
- **[Fluxo de trabalho: Aprovação]** Corrige o problema de erro ao cancelar uma execução quando seu fluxo de trabalho é excluído por @mytharcher
- **[Gerenciador de migração]** Corrige um problema em que as quebras de linha nos dados eram perdidas durante a migração. por @cgyrock
