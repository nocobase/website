---
title: "Atualizações Semanais｜Suporte para colar arquivos no chat de IA"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 22 a 28 de janeiro de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Data de lançamento: 2026-01-25*

### 🚀 Melhorias

- **[Visualizador de Arquivos do Office]** Adicionar mais tipos de arquivo para visualização no Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - corrigir campo nanoid não regenerado após envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corrigir mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
- **[banco de dados]**

  - Corrigir erros ao filtrar com o operador `empty` após recarregar uma coleção ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
  - corrigir: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[Gerenciador de arquivos]** Corrigir o problema onde o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Fonte de dados: Principal]** Corrigido um problema onde a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição `onDelete: 'restrict'` do campo de associação ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Bloco: iframe]** Corrigir o erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Workflow: Webhook]** Corrigir o problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher
- **[Impressão de modelo]** Corrigida lógica de permissão incorreta do botão de impressão quando as funções eram unidas. por @jiannx
- **[Workflow: Aprovação]**

  - Corrigir o problema onde a concorrência faz com que a execução seja retomada repetidamente por @mytharcher
  - Corrigir o problema onde retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher
- **[Gerenciador de migração]** Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Data de lançamento: 2026-01-29*

### 🐛 Correções de Bugs

- **[cliente]** Corrigir problemas conhecidos relacionados à filtragem ([#8514](https://github.com/nocobase/nocobase/pull/8514)) por @zhangzhonghe
- **[Funcionários de IA]** Corrigir o problema onde o sistema não inicia após a construção ([#8523](https://github.com/nocobase/nocobase/pull/8523)) por @cgyrock
- **[IA: Base de conhecimento]** Corrigir o problema onde o sistema não inicia após a construção por @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Data de lançamento: 2026-01-27*

### 🎉 Novos Recursos

- **[cliente]** adicionar componente de campo de subtabela (edição em popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
- **[Workflow]** Adicionar API para mover nó ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### 🚀 Melhorias

- **[cliente]**

  - evitar re-renderização completa da tabela ao atualizar uma célula ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh
  - Melhorar o subformulário para-muitos para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8458](https://github.com/nocobase/nocobase/pull/8458)) por @katherinehhh
- **[Gerenciador de arquivos]** Adicionar visualizador extensível para o gerenciador de arquivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher
- **[Workflow]** Alterar o caminho da rota das subpáginas do workflow, para que todas as páginas do workflow fiquem sob o prefixo `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir hora duplicada no valor DateTime do filtro ([#8506](https://github.com/nocobase/nocobase/pull/8506)) por @zhangzhonghe
  - Corrigido um problema que impedia o uso de variáveis de formulário para atribuir valores em regras de vinculação para campos de subformulário para-muitos de vários níveis. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) por @gchust
  - Corrigir um problema onde os dados não eram atualizados após alterações em popups de vários níveis e entre blocos. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) por @gchust
  - corrigir problema onde os dados de subdetalhe no modo somente leitura não podiam ser exibidos corretamente no formulário de edição ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh
  - corrigir lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
  - corrigir parâmetros de filtro incorretos para o campo Select de relação na subtabela editável ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh
- **[mecanismo de fluxo]** corrigir problema FilterByTK quando filterTargetKey é um array de elemento único na fonte de dados externa ([#8522](https://github.com/nocobase/nocobase/pull/8522)) por @katherinehhh
- **[Funcionários de IA]** corrigir problemas de configuração de campo selecionável inconsistente entre modelagem de IA e gerenciamento de fonte de dados ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock
- **[Gerenciador de e-mail]** corpo não recolhe quando o texto é selecionado. corrigir falha no download do anexo por @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Data de lançamento: 2026-01-25*

### 🚀 Melhorias

- **[Visualizador de Arquivos do Office]** Adicionar mais tipos de arquivo para visualização no Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher

### 🐛 Correções de Bugs

- **[banco de dados]** Corrigir erros ao filtrar com o operador `empty` após recarregar uma coleção ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
- **[Impressão de modelo]** Corrigida lógica de permissão incorreta do botão de impressão quando as funções eram unidas. por @jiannx
- **[Workflow: Aprovação]** Corrigir o problema onde o erro foi lançado no popup de registro de aprovação 1.x por @mytharcher
- **[Gerenciador de migração]** Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Data de lançamento: 2026-01-23*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Suportar colagem de arquivos no chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Melhorias

- **[cliente]**

  - Melhorar o subformulário para-muitos para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh
  - Melhorar os botões de upload e edição para campos de anexo na subtabela para melhor orientar os usuários a clicar em upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh
- **[mecanismo de fluxo]** Melhorar ctx.libs no runjs para suportar carregamento sob demanda e adicionar bibliotecas predefinidas: lodash, math e formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust
- **[Manipulador de erros]** Sanitizar erros de referência SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile
- **[Workflow: Aprovação]** Implementar controle de acesso para APIs para evitar operações de dados não autorizadas por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir o problema onde os popovers do editor de texto rico são obscurecidos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe
  - Corrigir hora duplicada no valor DateTime do filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe
  - corrigir campo nanoid não regenerado após envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corrigir mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
  - filtrar lista para remover duplicatas ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx
  - Corrigir o problema onde o menu de configuração não é exibido no Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
- **[banco de dados]**

  - corrigir: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[servidor]** Corrigir versão de `mathjs` em dependências comuns ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[mecanismo de fluxo]** Corrigir um problema onde fechar um popup incorporado causava um erro após abrir consecutivamente a configuração de regras de vinculação e o popup de configuração de fluxo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust
- **[Fonte de dados: Principal]** Corrigido um problema onde a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição `onDelete: 'restrict'` do campo de associação ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Gerenciador de tarefas assíncronas]** Corrigir o problema onde o workflow acionado por importação assíncrona atrasava a execução ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Bloco: iframe]** Corrigir o erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Modelos de UI]** Corrigir um problema onde blocos de modelo de referência não podiam definir escopos de dados através das configurações de fluxo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust
- **[Gerenciador de arquivos]** Corrigir o problema onde o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Ação: Importar registros Pro]** Corrigir o problema onde o workflow acionado por importação assíncrona atrasava a execução por @mytharcher
- **[Workflow: Webhook]** Corrigir o problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher
- **[Impressão de modelo]** remover botões de rodapé da configuração do modelo de impressão por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir o problema onde retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher
  - Corrigir o problema onde a concorrência faz com que a execução seja retomada repetidamente por @mytharcher
  - Corrigir o problema onde os campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Data de lançamento: 2026-01-27*

### 🎉 Novos Recursos

- **[Workflow]** Adicionar API para mover nó ([#8507](https://github.com/nocobase/nocobase/pull/8507)) por @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Data de lançamento: 2026-01-26*

### 🎉 Novos Recursos

- **[servidor]** Refatorar o supervisor de aplicativos para suportar gerenciamento de vários aplicativos em diferentes cenários ([#8043](https://github.com/nocobase/nocobase/pull/8043)) por @2013xile
- **[cliente]** adicionar componente de campo de subtabela (edição em popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) por @katherinehhh
- **[Funcionários de IA]** Suportar colagem de arquivos no chat de IA ([#8487](https://github.com/nocobase/nocobase/pull/8487)) por @heziqiang

### 🚀 Melhorias

- **[cliente]**

  - Melhorar os botões de upload e edição para campos de anexo na subtabela para melhor orientar os usuários a clicar em upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) por @katherinehhh
  - Melhorar o subformulário para-muitos para inicializar com um item padrão e evitar a criação de registros quando deixado vazio ([#8473](https://github.com/nocobase/nocobase/pull/8473)) por @katherinehhh
- **[mecanismo de fluxo]** Melhorar ctx.libs no runjs para suportar carregamento sob demanda e adicionar bibliotecas predefinidas: lodash, math e formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) por @gchust
- **[servidor]** Suportar configuração de uma lista de permissões de origem CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Gerenciador de arquivos]** Adicionar visualizador extensível para o gerenciador de arquivos ([#8501](https://github.com/nocobase/nocobase/pull/8501)) por @mytharcher
- **[Visualizador de Arquivos do Office]** Adicionar mais tipos de arquivo para visualização no Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) por @mytharcher
- **[Manipulador de erros]** Sanitizar erros de referência SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile
- **[Ação: Exportar registros]** Melhorar o escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh
- **[Ação: Exportar registros Pro]** Melhorar o escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso por @katherinehhh
- **[Workflow: Aprovação]** Implementar controle de acesso para APIs para evitar operações de dados não autorizadas por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir hora duplicada no valor DateTime do filtro ([#8484](https://github.com/nocobase/nocobase/pull/8484)) por @zhangzhonghe
  - corrigir campo nanoid não regenerado após envio do formulário ([#8491](https://github.com/nocobase/nocobase/pull/8491)) por @katherinehhh
  - Corrigir o problema onde os popovers do editor de texto rico são obscurecidos ([#8443](https://github.com/nocobase/nocobase/pull/8443)) por @zhangzhonghe
  - filtrar lista para remover duplicatas ([#8431](https://github.com/nocobase/nocobase/pull/8431)) por @jiannx
  - Corrigir mensagem de validação obrigatória duplicada ao limpar um campo em cascata ([#8476](https://github.com/nocobase/nocobase/pull/8476)) por @katherinehhh
  - Corrigir o problema onde o menu de configuração não é exibido no Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
  - corrigir problema onde os dados de subdetalhe no modo somente leitura não podiam ser exibidos corretamente no formulário de edição ([#8469](https://github.com/nocobase/nocobase/pull/8469)) por @katherinehhh
  - Corrigir o problema onde o popup "Variáveis Personalizadas" é obscurecido ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe
  - corrigir problema onde as configurações de ordenação de grupo de campos de coleção não surtiam efeito. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - Corrigir o problema onde o botão "Configurações de Coluna" da tabela não funciona ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corrigir um problema onde o popup do seletor do campo de associação de arquivo tinha um z-index incorreto, e a configuração do popup não podia ser salva corretamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust
  - corrigir problema ao editar coleção na interface gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
- **[banco de dados]**

  - Corrigir erros ao filtrar com o operador `empty` após recarregar uma coleção ([#8496](https://github.com/nocobase/nocobase/pull/8496)) por @2013xile
  - corrigir: atualização profunda de associações aninhadas ([#8492](https://github.com/nocobase/nocobase/pull/8492)) por @chenos
- **[servidor]** Corrigir versão de `mathjs` em dependências comuns ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[mecanismo de fluxo]**

  - Corrigir um problema onde fechar um popup incorporado causava um erro após abrir consecutivamente a configuração de regras de vinculação e o popup de configuração de fluxo de eventos. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) por @gchust
  - Corrigir um problema onde clicar repetidamente no menu de configuração podia abrir vários popups de configuração. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust
  - Corrigir um problema onde as variáveis nos parâmetros de código runjs eram resolvidas antes da execução. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust
  - Corrigir um problema onde as variáveis de popup não podiam ser selecionadas no popup de criação rápida do seletor de dados. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust
- **[Funcionários de IA]** corrigir problemas de configuração de campo selecionável inconsistente entre modelagem de IA e gerenciamento de fonte de dados ([#8488](https://github.com/nocobase/nocobase/pull/8488)) por @cgyrock
- **[Fonte de dados: Principal]** Corrigido um problema onde a exclusão de registros de um bloco de tabela de associação muitos-para-muitos não respeitava a restrição `onDelete: 'restrict'` do campo de associação ([#8493](https://github.com/nocobase/nocobase/pull/8493)) por @2013xile
- **[Bloco: iframe]** Corrigir o erro ao adicionar variáveis agregadas ao Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Corrigir o problema onde o workflow acionado por importação assíncrona atrasava a execução ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir o problema onde o nome do arquivo obtido do corpo da requisição se tornava uma string decodificada inesperadamente ([#8481](https://github.com/nocobase/nocobase/pull/8481)) por @mytharcher
- **[Modelos de UI]** Corrigir um problema onde blocos de modelo de referência não podiam definir escopos de dados através das configurações de fluxo de eventos. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) por @gchust
- **[Móvel (obsoleto)]** Plugin móvel obsoleto (substituído pelo plugin ui-layout a partir da versão 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos
- **[Ação: Importar registros Pro]** Corrigir o problema onde o workflow acionado por importação assíncrona atrasava a execução por @mytharcher
- **[Workflow: Webhook]** Corrigir o problema onde os dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher
- **[Impressão de modelo]**

  - Corrigida lógica de permissão incorreta do botão de impressão quando as funções eram unidas. por @jiannx
  - remover botões de rodapé da configuração do modelo de impressão por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir o problema onde os campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe
  - Corrigir o problema onde retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher
  - Corrigir o problema onde a concorrência faz com que a execução seja retomada repetidamente por @mytharcher
  - Corrigir o problema onde o erro foi lançado no popup de registro de aprovação 1.x por @mytharcher
- **[Gerenciador de e-mail]**

  - Corrigir o problema onde o popup de configuração de e-mail é obscurecido por @zhangzhonghe
  - Corrigido o problema de e-mails na mesma caixa de correio entre vários usuários e desempenho otimizado por @jiannx
- **[Gerenciador de migração]** Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
