---
title: "NocoBase v2.1.0-alpha.10: Limpeza programada de dados de checkpoint de conversas de IA"
description: "Nota de lançamento da v2.1.0-alpha.10"
---

### 🎉 Novas Funcionalidades

- **[IdP: OAuth]** Adicionado um novo IdP: plugin OAuth para permitir que serviços MCP autentiquem via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) por @2013xile

- **[Funcionários de IA]** Limpeza programada dos dados de checkpoint de conversas de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock

- **[Supervisor de aplicativos]** Suporte a filtros na lista de aplicativos<br />Adicionadas caixas de diálogo de confirmação para ações de iniciar e parar<br />Ordenar entradas de status do aplicativo por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[servidor]** Melhoria na lógica do comando pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos

- **[cliente]** Suporte para exibir mensagem de confirmação antes de fechar o popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust

- **[indefinido]** Adicionada uma entrada dedicada client-v2 e construída independentemente com rsbuild, mantendo a v1 inalterada. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) por @Molunerfinn

- **[Workflow]**
  - Corrigido o problema em que o desligamento gracioso não drenava todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

  - Adicionada filtragem na lista de execuções ([#8914](https://github.com/nocobase/nocobase/pull/8914)) por @mytharcher

- **[Gerenciador de tarefas assíncronas]** Tarefas assíncronas agora suportam workers no envio de mensagens de erro ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

- **[Workflow: Aprovação]** Evitar configurar a interface de aprovadores quando nenhuma coleção estiver configurada no gatilho por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema em que não administradores não conseguiam limpar valores de campos associados ([#8904](https://github.com/nocobase/nocobase/pull/8904)) por @jiannx

  - Corrigido o problema em que o popup "Selecionar registro" na subtabela falhava ao carregar corretamente na segunda abertura. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust

- **[resourcer]** Impedir que o array do parâmetro `filterByTk` seja automaticamente convertido em um objeto quando exceder 100 itens ([#8908](https://github.com/nocobase/nocobase/pull/8908)) por @2013xile

- **[servidor]** Corrigido o problema em que eventos do ciclo de vida enviados pelo worker causavam a parada do aplicativo em serviço ([#8906](https://github.com/nocobase/nocobase/pull/8906)) por @mytharcher

- **[Gerenciador de fontes de dados]** Corrigido o problema em que a coleção criada pelo funcionário de IA sempre faltava os campos `createBy` e `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) por @cgyrock

- **[Funcionários de IA]**
  - Corrigido o problema com a URL especificada para o serviço LLM não surtindo efeito nas chamadas do modelo de embedding de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock

  - Corrigidos potenciais erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock

- **[Ação: Importar registros Pro]**
  - Corrigido o problema em que colunas acima de ~30 causavam erro de importação, devido à leitura duplicada do stream por @mytharcher

  - Corrigido o problema em que um erro era lançado ao importar no modo síncrono por @mytharcher

  - Corrigido o evento `beforeStop` no sub aplicativo não sendo disparado por @mytharcher

  - Corrigido o problema em que tarefas assíncronas não terminavam após um erro ocorrer na importação assíncrona por @cgyrock

  - Corrigida a importação lenta que causava erro SES por @mytharcher

- **[Impressão de modelo]** Corrigido erro de impressão de coleção SQL por @jiannx

- **[Workflow: Aprovação]** Corrigido problema de concorrência ao adicionar um responsável por @mytharcher

- **[Gerenciador de e-mail]** Corrigido erro de página quando o e-mail não existe por @jiannx

- **[Gerenciador de migração]** Corrigido o problema em que a migração era interrompida devido a um erro causado pelo ambiente de destino não ter a nova tabela criada durante o processo de migração de upload. por @Andrew1989Y
