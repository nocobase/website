---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Suporte para arrastar ações de colunas de tabela, adicionar fonte de dados SQL para gráficos e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Data de lançamento: 2025-11-12*

### 🐛 Correções de Bugs

- **[client]** Corrige o problema em que modelos duplicados não apareciam, causado por arrastar e depois excluir um modelo referenciado ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
- **[utils]** Habilita a mesclagem de objetos na estratégia de interseção ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
- **[Visualização de dados: ECharts]** corrige problema com a configuração labelType do ECharts por @heziqiang
- **[Gerenciador de e-mail]** sincroniza status de leitura do Microsoft mail sem timestamp por @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Data de lançamento: 2025-11-10*

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Aprovação]** Corrige um problema em que os campos da coleção principal não eram excluídos ao recarregar dados de associação por @mytharcher
- **[Gerenciador de e-mail]** Corrige o problema de imagens reservadas e sincronização no Outlook por @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Data de lançamento: 2025-11-10*

### 🚀 Melhorias

- **[Controle de acesso]** Otimiza a lógica de controle de permissão para operações de campos de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Fluxo de trabalho: JavaScript]** Corrige uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, impedindo a exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher
- **[Auth: OIDC]** Aumenta o tempo limite da solicitação por @2013xile

### 🐛 Correções de Bugs

- **[servidor]** Corrige um problema em que, após ativar o modo de divisão de serviço, processos workers enviando mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[client]** corrige problema de página seguinte vazia no bloco de detalhes de paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
- **[Fluxo de trabalho]**

  - Adiciona `workflowId` como dado de identidade para logs do fluxo de trabalho ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
  - Corrige o problema em que o plugin de fluxo de trabalho ainda consumia o evento da fila quando não estava no modo worker sob o modo de divisão de serviço ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
- **[Usuários]** Atualização de índice incorreta quando os nomes dos campos usam o estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile
- **[Fluxo de trabalho: Variável personalizada]** Corrige erro lançado quando não há configuração no nó de variável por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Data de lançamento: 2025-11-12*

### 🎉 Novos Recursos

- **[client]** Suporte para arrastar ações de coluna de tabela ([#7842](https://github.com/nocobase/nocobase/pull/7842)) por @zhangzhonghe
- **[Visualização de dados]** adiciona fonte de dados SQL para gráficos ([#7830](https://github.com/nocobase/nocobase/pull/7830)) por @heziqiang

### 🚀 Melhorias

- **[client]** Adicionado suporte para a biblioteca Day.js no contexto de script RunJS, permitindo manipulações de data e hora mais fáceis. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) por @gchust

### 🐛 Correções de Bugs

- **[utils]**

  - Corrige o erro "Invalid filter item type" no botão de filtro ([#7838](https://github.com/nocobase/nocobase/pull/7838)) por @zhangzhonghe
  - Habilita a mesclagem de objetos na estratégia de interseção ([#7840](https://github.com/nocobase/nocobase/pull/7840)) por @chenos
  - Corrige o erro 'Unrecognized operation' no fluxo de eventos ([#7835](https://github.com/nocobase/nocobase/pull/7835)) por @zhangzhonghe
- **[client]**

  - Corrigido um problema em que as regras de vinculação para botões de ação de linha em um bloco de tabela não eram reexecutadas após os dados da linha serem atualizados, garantindo que as regras sejam agora reaplicadas corretamente quando ocorrem alterações. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) por @gchust
  - Corrigidos os erros ao visualizar código no editor de código se o código contiver sintaxe jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) por @gchust
- **[undefined]** Corrige o problema de estilo incorreto na página inicial da documentação do plugin no modo escuro. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) por @gchust
- **[Gerenciador de arquivos]** corrige problemas de configuração de campo no bloco de tabela ([#7843](https://github.com/nocobase/nocobase/pull/7843)) por @katherinehhh
- **[Funcionários de IA]** Oculta o botão de chat do funcionário de IA nas páginas v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) por @cgyrock
- **[Visualização de dados: ECharts]** corrige problema com a configuração labelType do ECharts por @heziqiang
- **[Gerenciador de e-mail]**

  - corrige bugs de rascunho por @jiannx
  - sincroniza status de leitura do Microsoft mail sem timestamp por @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Data de lançamento: 2025-11-11*

### 🚀 Melhorias

- **[client]**

  - adiciona versão da informação da página ao contexto do mecanismo de fluxo ([#7826](https://github.com/nocobase/nocobase/pull/7826)) por @gchust
  - melhora o Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) por @katherinehhh
  - adapta ao campo tableoid no 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) por @katherinehhh
- **[Visualização de dados]** atualiza dicas de alerta e anotações de modelo de código de eventos ([#7814](https://github.com/nocobase/nocobase/pull/7814)) por @heziqiang
- **[Controle de acesso]** Otimiza a lógica de controle de permissão para operações de campos de associação ([#7800](https://github.com/nocobase/nocobase/pull/7800)) por @2013xile
- **[Auth: OIDC]** Aumenta o tempo limite da solicitação por @2013xile

### 🐛 Correções de Bugs

- **[servidor]** Corrige um problema em que, após ativar o modo de divisão de serviço, processos workers enviando mensagens através da fila de mensagens causavam erros ([#7797](https://github.com/nocobase/nocobase/pull/7797)) por @mytharcher
- **[client]**

  - a variável da coleção atual não deve ser selecionável no seletor de variáveis do componente de filtro ([#7818](https://github.com/nocobase/nocobase/pull/7818)) por @gchust
  - Corrige o erro 'value.replace is not a function' no campo de relacionamento do formulário de filtro ([#7824](https://github.com/nocobase/nocobase/pull/7824)) por @zhangzhonghe
  - Corrige parâmetros incorretos no callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) por @zhangzhonghe
- **[mecanismo de fluxo]** Corrige o problema em que as alterações no fluxo de eventos só entravam em vigor após atualizar a página. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) por @gchust
- **[Fluxo de trabalho]** Corrige o problema em que o plugin de fluxo de trabalho ainda consumia o evento da fila quando não estava no modo worker sob o modo de divisão de serviço ([#7820](https://github.com/nocobase/nocobase/pull/7820)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrige um problema em que os campos da coleção principal não eram excluídos ao recarregar dados de associação por @mytharcher
- **[Gerenciador de e-mail]** Corrige o problema de imagens reservadas e sincronização no Outlook por @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Data de lançamento: 2025-11-10*

### 🚀 Melhorias

- **[mecanismo de fluxo]** Otimiza os estilos da barra de ferramentas para as abas da página ([#7795](https://github.com/nocobase/nocobase/pull/7795)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]**

  - Corrigido um problema em que as variáveis nos campos de associação de subformulário não eram resolvidas corretamente quando o campo era modificado através da interface do usuário. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) por @gchust
  - erro no formulário de edição para registros com múltiplas chaves primárias ([#7798](https://github.com/nocobase/nocobase/pull/7798)) por @gchust
  - Corrigido um problema em que certas configurações para a ação "Abrir Visualização" não eram aplicadas, garantindo que a ação agora funcione conforme o esperado para todas as configurações especificadas. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) por @gchust
- **[client]**

  - Corrige campo seletor de coleção incapaz de selecionar a coleção corretamente ([#7794](https://github.com/nocobase/nocobase/pull/7794)) por @katherinehhh
  - não é possível ocultar a coluna de ações do bloco de tabela ([#7804](https://github.com/nocobase/nocobase/pull/7804)) por @gchust
  - suporta selecionar o objeto de variável inteiro no prompt do funcionário de IA ([#7791](https://github.com/nocobase/nocobase/pull/7791)) por @gchust
- **[Usuários]** Atualização de índice incorreta quando os nomes dos campos usam o estilo snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) por @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Data de lançamento: 2025-11-06*

### 🚀 Melhorias

- **[mecanismo de fluxo]** suporta operação atrasada no modelo de fluxo ([#7786](https://github.com/nocobase/nocobase/pull/7786)) por @gchust
- **[Fluxo de trabalho: JavaScript]** Corrige uma vulnerabilidade de segurança causada pela passagem de funções de nível superior para o ambiente de execução, impedindo a exploração que poderia conceder acesso ao contexto de execução superior por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - corrige problema de página seguinte vazia no bloco de detalhes de paginação simples ([#7784](https://github.com/nocobase/nocobase/pull/7784)) por @katherinehhh
  - corrige largura da ação da tabela e jsColumn não aplicada ([#7777](https://github.com/nocobase/nocobase/pull/7777)) por @katherinehhh
  - o escopo de dados do bloco não está funcionando se definido pelo fluxo de eventos da página ([#7788](https://github.com/nocobase/nocobase/pull/7788)) por @gchust
- **[Fluxo de trabalho]** Adiciona `workflowId` como dado de identidade para logs do fluxo de trabalho ([#7789](https://github.com/nocobase/nocobase/pull/7789)) por @mytharcher
- **[Fluxo de trabalho: Variável personalizada]** Corrige erro lançado quando não há configuração no nó de variável por @mytharcher
- **[Gerenciador de e-mail]** coleção MailMessages adiciona índices por @jiannx
