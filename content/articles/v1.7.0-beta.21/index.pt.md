---
title: "NocoBase v1.7.0-beta.21: Atualização de dependências e remoção do suporte a SQLite"
description: "Nota de lançamento da v1.7.0-beta.21"
---

### 🚀 Melhorias

- **[create-nocobase-app]** Atualização de dependências e remoção do suporte a SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Mobile]** Otimização da velocidade de abertura do popup do seletor de data no mobile ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe

- **[Bloco: template]** Suporte para converter bloco de template em bloco normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust

- **[Editor de tema]** Permitir definir a largura da barra lateral na configuração do tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos

- **[Gerenciador de arquivos]** Expor API de utilitários ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Workflow]** Adicionar tipos de data ao conjunto de tipos de variáveis ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

- **[Impressão de template]** Substituído o controle de ação da fonte de dados pelo controle de acesso baseado em função do cliente. por @sheldon66

### 🐛 Correções de Bugs

- **[client]**
  - Problema ao atualizar blocos de dados após envio bem-sucedido ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe

  - Filtro ausente para dados já associados ao adicionar dados de associação ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

  - Problema do botão de recolher no menu esquerdo ser obscurecido pela janela pop-up do workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - Regra de vinculação do botão 'Adicionar Filho' na tabela em árvore sem o 'registro atual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

  - Condição de campo de data/hora não funcionando nas regras de vinculação ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh

  - Problema de dificuldade em excluir ícones da barra de navegação superior no mobile ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Exibição incorreta do valor para "Habilitar coluna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh

  - Campos obrigatórios ocultos por regras de vinculação não devem afetar o envio do formulário ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

  - Conversão de variáveis nas condições de regras de vinculação de sub-tabela/sub-formulário ([#6702](https://github.com/nocobase/nocobase/pull/6702)) por @katherinehhh

  - Botão de exportação exibido sem permissão de exportação ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Restrições de opções de ação ausentes ao reabrir regras de vinculação ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Problema de alternância do seletor no campo de data do botão de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - Após conectar por chave estrangeira, clicar para acionar filtragem resulta em condições de filtro vazias ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

- **[cli]** Atualização automática do package.json ao fazer upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[server]** appVersion gerada incorretamente pelo create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[build]** Correção de erro lançado no comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Bloco: Gantt]** Bloco de gráfico de Gantt com meses sobrepostos no cabeçalho do calendário na visualização mensal ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Ação: Importar registros]** Correção das exceções de importação e exportação que ocorrem ao definir permissões de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloco: template]** Templates de bloco não podem ser usados em ambiente MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust

- **[Workflow]** Correção de erro lançado ao executar evento agendado em subfluxo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Visualização de dados]** Opções de campo Enum vazias no bloco de filtro ([#6706](https://github.com/nocobase/nocobase/pull/6706)) por @2013xile

- **[Ação: Solicitação personalizada]** Garantir que os dados da solicitação personalizada sejam JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) por @chenos

- **[Ação: Exportar registros Pro]**
  - Correção das exceções de importação e exportação que ocorrem ao definir permissões de campo. por @aaaaaajie

  - Botão de exportação Pro perdendo parâmetros de filtro após ordenar coluna da tabela por @katherinehhh

- **[Workflow: Evento de ação personalizada]** Suporte para execução no modo de múltiplos registros por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]**
  - Adicionar lógica multer para upload no lado do servidor por @mytharcher

  - Correção dos dados de resposta do arquivo enviado por @mytharcher

- **[Workflow: Aprovação]** Correção do pré-carregamento de campos de associação para registros por @mytharcher
