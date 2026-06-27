---
title: "NocoBase v2.0.0-alpha.65: adicionar controle de concorrência em nível de processo para o gerenciador de tarefas base"
description: "Nota de lançamento da v2.0.0-alpha.65"
---

### 🎉 Novas Funcionalidades

- **[test]** adicionar controle de concorrência em nível de processo para o gerenciador de tarefas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock

### 🚀 Melhorias

- **[client]**
  - O editor de texto rico suporta ajuste de tamanho da fonte, ajuste de tamanho da imagem e quebras de linha suaves ([#8401](https://github.com/nocobase/nocobase/pull/8401)) por @jiannx

  - Suporte para especificar quando executar o fluxo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust

  - Melhorar o desempenho da renderização da lista do gerenciador de plugins alterando para CSS nativo do webkit para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

- **[avaliadores]** Atualizar versão do math.js para suportar mais funções ([#8411](https://github.com/nocobase/nocobase/pull/8411)) por @mytharcher

- **[cli]** suportar configuração da URL base do CDN via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos

- **[mecanismo-de-fluxo]** Adicionar `rowOrder` ao GridModel para garantir ordenação consistente das linhas ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe

- **[Mecanismo de fluxo]** Suportar a resolução de valores de campos no registro do formulário atual, mesmo que não tenham sido adicionados ao formulário de edição. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) por @gchust

- **[Funcionários de IA]**
  - Otimizar botão de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang

  - Alterar resultado do chamador de fluxo de trabalho para `execution.output`, usando explicitamente o nó de saída o resultado pode ser estável ([#8423](https://github.com/nocobase/nocobase/pull/8423)) por @mytharcher

  - Ocultar builder ai na lista de entrada.<br/> Otimizar fluxo de integração LLM.<br/> Atualizar documentação sobre o modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang

  - Suportar Anthropic e Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang

- **[Notificação: Mensagem no aplicativo]** Corrigir problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir o problema onde a altura do modal de atalho excede a altura da janela de visualização ([#8437](https://github.com/nocobase/nocobase/pull/8437)) por @zhangzhonghe

  - Corrigir o problema onde as regras de vinculação de botões de linha da tabela afetam o estado dos botões dentro de formulários pop-up ([#8434](https://github.com/nocobase/nocobase/pull/8434)) por @zhangzhonghe

  - Corrigir um problema onde o estado da coluna de ação da tabela era poluído ao alternar páginas. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) por @gchust

  - Adicionar tolerância a falhas para o esquema de ação, para evitar travamento da página ao clicar no botão de ação ([#8420](https://github.com/nocobase/nocobase/pull/8420)) por @mytharcher

  - corrigir o campo de título i não atualiza quando o campo de associação está definido como modo somente leitura no formulário de criação ([#8413](https://github.com/nocobase/nocobase/pull/8413)) por @katherinehhh

  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos

  - corrigir configuração do campo de título desaparecendo após definir URL de anexo e depois alterar para outro campo no item do formulário ([#8418](https://github.com/nocobase/nocobase/pull/8418)) por @katherinehhh

  - corrigir problema com o botão de envio onde a validação obrigatória ignorada não funciona quando a confirmação está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh

  - corrigir problema de resolução onde a configuração de layout no bloco de cartão de grade não surte efeito ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh

  - corrigir dados de seleção em cascata não limpos após envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh

  - corrigir impedir atribuição quando caracteres chineses são inseridos no campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh

  - resolver problema com o botão de envio aparecendo no pop-up de seleção de arquivo do campo de associação um-para-um ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh

  - corrigir lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh

- **[mecanismo-de-fluxo]** Corrigir etapas do fluxo de eventos dinâmicos executando duas vezes ao abrir um pop-up através de um clique de botão. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) por @gchust

- **[Mecanismo de fluxo]** Corrigir um problema onde a resolução de variável estava incorreta quando filterByTk era um array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) por @gchust

- **[Gerenciador de arquivos]** Corrigir o problema onde a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Campo de coleção: Muitos para muitos (array)]** Corrigir erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock

- **[Fluxo de trabalho]**
  - Corrigir o problema onde o ID do esquema não é atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

  - Adicionar ID da instância ao ID Snowflake dos jobs, para evitar problema de conflito de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher

- **[Bloco: template (obsoleto)]** Corrigido um problema onde a página de edição para templates herdados (v1) não podia ser acessada. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust

- **[Fonte de dados: API REST]** Adicionar tolerância a falhas para o contexto da requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher

- **[Multi-espaço]**
  - Espaço relacionado ao adicionar dados associados por @jiannx

  - Cor do seletor de espaço segue o tema por @jiannx

- **[Impressão de template]**
  - Corrigir problema de pop-up de configuração de template obscurecido por @zhangzhonghe

  - suportar campo de espaço por @jiannx

  - exibir campos de espaço na versão 2.0 por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]** Corrigir o problema onde o modo de renomeação de arquivo não funciona por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir o problema onde o registro incorreto era carregado devido a parâmetros errados por @mytharcher

  - Corrigir bloco de valor não exibido devido à falta do componente `ValueBlock.Result` por @mytharcher

- **[Gerenciador de e-mail]**
  - corrigir cadeia de conversa por @jiannx

  - 管理页面添加筛选 por @jiannx
