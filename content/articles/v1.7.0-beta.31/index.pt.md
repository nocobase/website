---
title: "NocoBase v1.7.0-beta.31: Adicionar o log do plugin de importação"
description: "Nota de lançamento da v1.7.0-beta.31"
---

### 🎉 Novas Funcionalidades

- **[client]** regra de vinculação de ações suporta variáveis do 'formulário atual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh

- **[undefined]** Adicionar o log do plugin de importação por @aaaaaajie

- **[Ação: Importar registros]** Adicionar o log do plugin de importação ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie

### 🚀 Melhorias

- **[client]** adicionar mais configurações de tamanho interno para imagem de status de leitura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh

- **[Campo de coleção: Anexo (URL)]** adicionar mais tamanhos internos ao campo de URL de anexo para status de leitura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh

- **[Workflow]** Permitir revisar mais de um rascunho ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - problema de vinculação de botão no bloco de detalhes ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh

  - limpar valor do lado direito quando o operador muda na regra de vinculação ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh

  - avaliação incorreta de operadores para variáveis de data em condições de vinculação ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh

  - operador ausente ao alternar em regras de vinculação ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh

  - incompatibilidade de análise de variáveis com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh

  - melhoria no estilo do componente de valor da regra de vinculação ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh

  - incompatibilidade de análise de variáveis com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh

  - Os campos ocultos ainda são exibidos ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe

- **[database]** Importação falhou devido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie

- **[Visualização de dados]**
  - Blocos de gráfico não são exibidos quando adicionados a popups acionados a partir de ações em nível de bloco ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile

  - Corrigir erro ao filtrar campos m2m aninhados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile

- **[Ação: Exportar registros]**
  - melhorar desempenho ao excluir campos nas configurações de campo de importação/exportação ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh

  - Corrigido exportação de valores vazios em associações aninhadas e url de anexo ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie

  - Corrigir o erro de exportação de textos longos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie

- **[Gerenciador de arquivos]** Corrigir criação de registro de arquivo sem permissão de chave estrangeira ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher

- **[Workflow]** Corrigir navegação de volta não funcionando ao abrir link de popup diretamente no centro de tarefas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher

- **[Ação: Duplicar registro]** modal fecha no primeiro clique de entrada ao editar dados duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh

- **[Bloco: template]** Após salvar como template herdado, erro ao abrir o popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust

- **[Workflow: test kit]** Corrigir casos de teste com falha devido a plugin predefinido obrigatório ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher

- **[Workflow: Evento pós-ação]** Corrigir variável de usuário atuado não acessível no template Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher

- **[Workflow: Nó manual]** Corrigir contagem de números de estatísticas errada nas tarefas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher

- **[Bloco: Painel de ações]** A cor do Painel de ações está incorreta no modo escuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe

- **[Ação: Exportar registros Pro]**
  - melhorar desempenho ao excluir campos nas configurações de campo de importação/exportação pro por @katherinehhh

  - Corrigir o erro de exportação de textos longos. por @aaaaaajie

- **[Workflow: Subfluxo]** Corrigir gatilho indefinido causando travamento da página por @mytharcher

- **[Impressão de template]**
  - Corrigir problema de formatadores não encontrados. por @sheldon66

  - Corrigir formatador não encontrado por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]**
  - Alterar para usar campo de coleção para localizar armazenamento por @mytharcher

  - expiração de url de acesso inválida por @jiannx

- **[Workflow: Aprovação]** Corrigir contagem de números de estatísticas errada nas tarefas por @mytharcher
