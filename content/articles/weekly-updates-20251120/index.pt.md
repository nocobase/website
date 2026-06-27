---
title: "Atualizações Semanais do NocoBase: Adicionar funcionário de IA para configurar gráfico"
description: "A atualização desta semana inclui: adicionar funcionário de IA para configurar gráfico, otimizar o estilo da barra de ferramentas para evitar que ícones fiquem obscurecidos e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Data de lançamento: 2025-11-19*

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Evento de ação personalizada]** Corrige o erro causado ao ouvir eventos de fonte de dados externa inexistentes por @mytharcher
- **[Impressão de modelo]** analisa as variáveis no filtro por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige um problema onde condições de corrida que ocorrem durante o processamento de aprovação simultânea por vários aprovadores podiam fazer com que um nó do fluxo de trabalho fosse executado mais de uma vez por @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Data de lançamento: 2025-11-18*

### 🐛 Correções de Bugs

- **[cliente]** Corrige o problema onde a regra de vinculação para o formulário de aprovação não estava funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
- **[servidor]** Corrige um problema no modo de divisão de serviço onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
- **[Fluxo de trabalho]**

  - Corrige o erro causado ao ouvir eventos de fonte de dados externa inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Usa eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviço ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrige o namespace do idioma de localidade que deve ser usado, para mostrar o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Controle de acesso]** Problema de snippets de operação de associação não estarem surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema onde o tamanho da página do canal de notificação de carregamento não é grande o suficiente, e faz com que a lista não seja carregada completamente por @mytharcher
  - Corrige o problema onde a regra de vinculação para o formulário de aprovação não estava funcionando por @zhangzhonghe
  - Corrige o formato da data nos cartões da lista de aprovação no centro de tarefas para exibir a data e hora completas por @mytharcher
  - Corrige um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Data de lançamento: 2025-11-19*

### 🐛 Correções de Bugs

- **[cliente]** Corrigido um problema onde o título e a descrição não eram exibidos no bloco JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) por @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Data de lançamento: 2025-11-19*

### 🎉 Novos Recursos

- **[Visualização de dados]** adiciona funcionário de IA para configurar gráfico ([#7815](https://github.com/nocobase/nocobase/pull/7815)) por @heziqiang

### 🚀 Melhorias

- **[mecanismo de fluxo]**

  - Suporta ouvir evento de alteração de árvore de modelos de fluxo no mecanismo de fluxo. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) por @gchust
  - melhora a resolução da variável de registro atual, tornando a abertura do diálogo mais rápida ([#7895](https://github.com/nocobase/nocobase/pull/7895)) por @gchust
  - Otimizou a estrutura da API de bibliotecas de terceiros no contexto runjs e adicionou suporte para a biblioteca de ícones Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) por @gchust
- **[banco de dados]** Refatorou o plugin de criptografia de campo para aumentar a segurança, suportando geração e rotação de chaves de aplicação e chaves de criptografia por campo. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) por @cgyrock
- **[Campo de coleção: Criptografia]** Otimizou o plugin de criptografia de campo para suportar recuperação de dados com IVs independentes por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema onde blocos ocultos ainda ocupavam espaço na página. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) por @gchust
  - Corrige o problema onde o botão de redefinir no botão de filtro limpa as condições padrão ([#7903](https://github.com/nocobase/nocobase/pull/7903)) por @zhangzhonghe
  - corrige verificação de permissão incorreta para campos de subformulário em novos formulários ([#7902](https://github.com/nocobase/nocobase/pull/7902)) por @katherinehhh
- **[servidor]** Corrige um problema no modo de divisão de serviço onde mensagens de fila não inscritas não podiam ser publicadas ([#7875](https://github.com/nocobase/nocobase/pull/7875)) por @mytharcher
- **[Fluxo de trabalho]**

  - Corrige o erro causado ao ouvir eventos de fonte de dados externa inexistentes ([#7855](https://github.com/nocobase/nocobase/pull/7855)) por @mytharcher
  - Usa eventQueue em vez do backgroundJob compartilhado para evitar que a fila compartilhada seja consumida incorretamente no modo de divisão de serviço ([#7871](https://github.com/nocobase/nocobase/pull/7871)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrige o namespace do idioma de localidade que deve ser usado, para mostrar o conteúdo correto da tradução ([#7877](https://github.com/nocobase/nocobase/pull/7877)) por @mytharcher
- **[Controle de acesso]** Problema de snippets de operação de associação não estarem surtindo efeito ([#7876](https://github.com/nocobase/nocobase/pull/7876)) por @2013xile
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrige o erro causado ao ouvir eventos de fonte de dados externa inexistentes por @mytharcher
- **[Comentários]** corrige problema quando comentários citados no bloco de comentários falham ao exibir por @katherinehhh
- **[Impressão de modelo]** analisa as variáveis no filtro por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige um problema onde condições de corrida que ocorrem durante o processamento de aprovação simultânea por vários aprovadores podiam fazer com que um nó do fluxo de trabalho fosse executado mais de uma vez por @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Data de lançamento: 2025-11-18*

### 🚀 Melhorias

- **[mecanismo de fluxo]** Otimiza o estilo da barra de ferramentas para evitar que ícones sejam obscurecidos ([#7883](https://github.com/nocobase/nocobase/pull/7883)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** Corrigido o problema onde os dados de permissão ACL não são recarregados após logout e login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) por @gchust
- **[cliente]** corrige problemas na configuração de itens de formulário ([#7867](https://github.com/nocobase/nocobase/pull/7867)) por @katherinehhh
- **[Visualização de dados]** Usa o modo de depuração de recurso sql apenas durante a pré-visualização do gráfico ([#7893](https://github.com/nocobase/nocobase/pull/7893)) por @heziqiang
- **[Multi-espaço]** usuários associados a multi-espaço por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema onde o tamanho da página do canal de notificação de carregamento não é grande o suficiente, e faz com que a lista não seja carregada completamente por @mytharcher
  - Corrige um problema de desempenho que ocorria ao consultar a lista de registros de aprovação durante o envio da aprovação por @mytharcher
  - Corrige o formato da data nos cartões da lista de aprovação no centro de tarefas para exibir a data e hora completas por @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Data de lançamento: 2025-11-17*

### 🚀 Melhorias

- **[cliente]** Adapta Componentes para Dispositivos Móveis ([#7870](https://github.com/nocobase/nocobase/pull/7870)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema onde a configuração padrão do campo JS não usava a configuração do modo de exibição. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) por @gchust
  - Corrige o problema onde modelos duplicados não aparecem, causado por arrastar e depois excluir um modelo referenciado ([#7847](https://github.com/nocobase/nocobase/pull/7847)) por @zhangzhonghe
  - Corrigido o problema sobre não ser capaz de definir o valor padrão do campo de data no modelo de bloco de formulário de filtro. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) por @gchust
  - Corrige o problema onde a regra de vinculação para o formulário de aprovação não estava funcionando ([#7858](https://github.com/nocobase/nocobase/pull/7858)) por @zhangzhonghe
  - Corrigido o problema onde operações de edição rápida no bloco de tabela não atualizam os dados corretamente. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) por @gchust
  - Corrige problema onde o campo de texto rico não pode inserir valor padrão e o campo de seleção múltipla não pode selecionar múltiplas opções como valor padrão. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) por @gchust
- **[Gerenciador de multi-aplicativos (obsoleto)]** Após um sub-aplicativo parar, publica uma mensagem de sincronização para notificar outros nós a pararem o sub-aplicativo correspondente ([#7849](https://github.com/nocobase/nocobase/pull/7849)) por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o problema onde a regra de vinculação para o formulário de aprovação não estava funcionando por @zhangzhonghe
- **[Gerenciador de e-mail]** Erro de atualização do ShadowHtml por @jiannx
