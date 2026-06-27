---
title: "Atualizações Semanais: Adicionar Controle de Concorrência em Nível de Processo ao Gerenciador de Tarefas Base"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 15 a 22 de janeiro de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Data de lançamento: 21/01/2026*

### 🐛 Correções de Bugs

- **[servidor]** Corrige a versão do `mathjs` nas dependências comuns ([#8475](https://github.com/nocobase/nocobase/pull/8475)) por @mytharcher
- **[cliente]** Corrige o problema em que o menu de configuração não era exibido no Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Corrige o problema em que o fluxo de trabalho acionado por importação assíncrona atrasava a execução ([#8478](https://github.com/nocobase/nocobase/pull/8478)) por @mytharcher
- **[Ação: Importar registros Pro]** Corrige o problema em que o fluxo de trabalho acionado por importação assíncrona atrasava a execução por @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Data de lançamento: 20/01/2026*

### 🚀 Melhorias

- **[servidor]** Suporte para configurar uma lista de permissões de origem CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Manipulador de erros]** Sanitizar erros de referência SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**

  - corrige problema em que as configurações de ordenação do grupo de campos da coleção não surtiam efeito. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - corrige problema ao editar coleção na interface gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
  - Corrige o problema em que o botão "Configurações de Coluna" da tabela não funcionava ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corrige o problema em que as regras de vinculação dos botões de linha da tabela afetavam o estado dos botões dentro de formulários pop-up ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
- **[Mobile (obsoleto)]** Plugin mobile obsoleto (substituído pelo plugin ui-layout a partir da versão 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Data de lançamento: 15/01/2026*

### 🚀 Melhorias

- **[avaliadores]** Atualiza a versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrige problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - corrige dados de seleção em cascata não limpos após envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - Adiciona tolerância a falhas para o esquema de ação, para evitar travamento da página ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corrige problema com o botão de envio onde pular a validação obrigatória não funcionava quando a confirmação estava ativada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Corrige erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Fluxo de trabalho]** Corrige o problema em que o ID do esquema não era atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Data de lançamento: 19/01/2026*

### 🚀 Melhorias

- **[servidor]** Suporte para configurar uma lista de permissões de origem CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) por @2013xile
- **[Ação: Exportar registros]** Melhora o escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso ([#8442](https://github.com/nocobase/nocobase/pull/8442)) por @katherinehhh
- **[Ação: Exportar registros Pro]** Melhora o escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige o problema em que o pop-up "Variáveis Personalizadas" ficava obscurecido ([#8463](https://github.com/nocobase/nocobase/pull/8463)) por @zhangzhonghe
  - corrige problema ao editar coleção na interface gráfica ([#8451](https://github.com/nocobase/nocobase/pull/8451)) por @katherinehhh
  - corrige problema em que as configurações de ordenação do grupo de campos da coleção não surtiam efeito. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) por @katherinehhh
  - Corrige o problema em que a altura do modal de atalho excedia a altura da janela de visualização ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe
  - Corrige o problema em que as regras de vinculação dos botões de linha da tabela afetavam o estado dos botões dentro de formulários pop-up ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
  - Corrige um problema em que o estado da coluna de ação da tabela era poluído ao alternar páginas. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust
  - Corrige o problema em que o botão "Configurações de Coluna" da tabela não funcionava ([#8441](https://github.com/nocobase/nocobase/pull/8441)) por @zhangzhonghe
  - Corrige um problema em que o pop-up do seletor do campo de associação de arquivo tinha um z-index incorreto, e a configuração do pop-up não podia ser salva corretamente. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) por @gchust
- **[mecanismo-de-fluxo]**

  - Corrige um problema em que as variáveis nos parâmetros de código runjs eram resolvidas antes da execução. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) por @gchust
  - Corrige um problema em que as variáveis pop-up não podiam ser selecionadas no pop-up de criação rápida do seletor de dados. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) por @gchust
  - Corrige um problema em que clicar repetidamente no menu de configuração podia abrir múltiplos pop-ups de configuração. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) por @gchust
- **[Mobile (obsoleto)]** Plugin mobile obsoleto (substituído pelo plugin ui-layout a partir da versão 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) por @chenos
- **[Mecanismo de fluxo]** Corrige um problema em que variáveis contendo hífens não podiam ser analisadas corretamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust
- **[Gerenciador de e-mail]** Corrige o problema em que o pop-up de configuração de e-mail ficava obscurecido por @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Data de lançamento: 16/01/2026*

### 🚀 Melhorias

- **[Mecanismo de fluxo]** Suporte para resolver valores de campos no registro do formulário atual, mesmo que não estejam adicionados ao formulário de edição. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]** Corrige as etapas do fluxo de evento dinâmico sendo executadas duas vezes ao abrir um pop-up através de um clique de botão. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust
- **[Impressão de modelo]** exibe campos de espaço na versão 2.0 por @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Data de lançamento: 15/01/2026*

### 🚀 Melhorias

- **[avaliadores]** Atualiza a versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[cliente]** Editor de texto rico suporta ajuste de tamanho de fonte, ajuste de tamanho de imagem e quebras de linha suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx
- **[Funcionários de IA]** Altera o resultado do chamador de fluxo de trabalho para `execution.output`, usando explicitamente o nó de saída, o resultado pode ser estável ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Adiciona tolerância a falhas para o esquema de ação, para evitar travamento da página ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corrige a configuração do campo de título desaparecendo após definir a URL do anexo e depois alterar para outro campo no item do formulário ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh
  - corrige o campo de título i não atualizando quando o campo de associação é definido como modo somente leitura no formulário de criação ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh
- **[Mecanismo de fluxo]** Corrige um problema em que a resolução de variáveis estava incorreta quando filterByTk era um array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust
- **[Impressão de modelo]** suporta campo de espaço por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Data de lançamento: 16/01/2026*

### 🐛 Correções de Bugs

- **[Mecanismo de fluxo]** Corrige um problema em que variáveis contendo hífens não podiam ser analisadas corretamente. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) por @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Data de lançamento: 16/01/2026*

### 🎉 Novos Recursos

- **[teste]** adiciona controle de concorrência em nível de processo para o gerenciador de tarefas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

### 🚀 Melhorias

- **[cliente]**

  - Editor de texto rico suporta ajuste de tamanho de fonte, ajuste de tamanho de imagem e quebras de linha suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx
  - Suporte para especificar quando executar o fluxo de evento. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
  - Melhora o desempenho da renderização da lista do gerenciador de plugins alterando para css webkit nativo para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher
- **[avaliadores]** Atualiza a versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher
- **[cli]** suporta configuração de URL base CDN via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos
- **[mecanismo-de-fluxo]** Adiciona `rowOrder` ao GridModel para garantir ordenação consistente de linhas ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe
- **[Mecanismo de fluxo]** Suporte para resolver valores de campos no registro do formulário atual, mesmo que não estejam adicionados ao formulário de edição. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust
- **[Funcionários de IA]**

  - Otimiza o botão de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Altera o resultado do chamador de fluxo de trabalho para `execution.output`, usando explicitamente o nó de saída, o resultado pode ser estável ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher
  - Oculta o builder ai na lista de entrada.<br/> Otimiza o fluxo de integração LLM.<br/> Atualiza documentos sobre o modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
  - Suporta Anthropic e Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang
- **[Notificação: Mensagem no aplicativo]** Corrige problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige o problema em que a altura do modal de atalho excedia a altura da janela de visualização ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe
  - Corrige o problema em que as regras de vinculação dos botões de linha da tabela afetavam o estado dos botões dentro de formulários pop-up ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe
  - Corrige um problema em que o estado da coluna de ação da tabela era poluído ao alternar páginas. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust
  - Adiciona tolerância a falhas para o esquema de ação, para evitar travamento da página ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher
  - corrige o campo de título i não atualizando quando o campo de associação é definido como modo somente leitura no formulário de criação ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh
  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - corrige a configuração do campo de título desaparecendo após definir a URL do anexo e depois alterar para outro campo no item do formulário ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh
  - corrige problema com o botão de envio onde pular a validação obrigatória não funcionava quando a confirmação estava ativada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - corrige problema de resolução onde a configuração de layout no bloco de cartão de grade não surtia efeito ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - corrige dados de seleção em cascata não limpos após envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - corrige prevenção de atribuição quando caracteres chineses são inseridos no campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
  - resolve problema com o botão de envio aparecendo no pop-up de seleção de arquivo do campo de associação um-para-um ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - corrige lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
- **[mecanismo-de-fluxo]** Corrige as etapas do fluxo de evento dinâmico sendo executadas duas vezes ao abrir um pop-up através de um clique de botão. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust
- **[Mecanismo de fluxo]** Corrige um problema em que a resolução de variáveis estava incorreta quando filterByTk era um array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust
- **[Gerenciador de arquivos]** Corrige o problema em que a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Campo de coleção: Muitos para muitos (array)]** Corrige erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Fluxo de trabalho]**

  - Corrige o problema em que o ID do esquema não era atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
  - Adiciona ID de instância ao ID Snowflake dos jobs, para evitar problema de conflito de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
- **[Bloco: modelo (obsoleto)]** Corrigido um problema em que a página de edição para modelos herdados (v1) não podia ser acessada. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust
- **[Fonte de dados: API REST]** Adiciona tolerância a falhas para o contexto de requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher
- **[Multi-espaço]**

  - Espaço relacionado ao adicionar dados associados por @jiannx
  - Cor do seletor de espaço segue o tema por @jiannx
- **[Impressão de modelo]**

  - Corrige problema de pop-up de configuração de modelo obscurecido por @zhangzhonghe
  - suporta campo de espaço por @jiannx
  - exibe campos de espaço na versão 2.0 por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]** Corrige o problema em que o modo de renomeação de arquivo não funcionava por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema em que o registro incorreto era carregado devido a parâmetros errados por @mytharcher
  - Corrige o bloco de valor não exibido causado pela falta do componente `ValueBlock.Result` por @mytharcher
- **[Gerenciador de e-mail]**

  - corrige cadeia de conversação por @jiannx
  - Adiciona filtragem à página de gerenciamento por @jiannx
