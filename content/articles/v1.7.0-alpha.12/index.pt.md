---
title: "NocoBase v1.7.0-alpha.12: Atualização de dependências e remoção do suporte a SQLite"
description: "Nota de lançamento da v1.7.0-alpha.12"
---

### 🚀 Melhorias

- **[cli]** Otimização da lógica interna do comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

- **[create-nocobase-app]** Atualização de dependências e remoção do suporte a SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Mobile]** Otimização da velocidade de abertura do popup do seletor de data no mobile ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe

- **[Bloco: template]** Suporte para converter bloco de template em bloco normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust

- **[Gerenciador de arquivos]** Exposição da API de utilitários ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Editor de temas]** Permitir definir a largura da barra lateral na configuração do tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos

- **[Workflow]** Adição de tipos de data ao conjunto de tipos de variáveis ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

- **[Impressão de template]** Substituição do controle de ação da fonte de dados pelo controle de acesso baseado em função do cliente. por @sheldon66

### 🐛 Correções de Bugs

- **[client]**
  - Problema de exibição com regras de vínculo em dados de associação multinível ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh

  - Botão 'Adicionar Filho' na tabela em árvore com regra de vínculo faltando 'registro atual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

  - Problema ao atualizar blocos de dados após envio bem-sucedido ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe

  - Problema do botão de recolher no menu esquerdo ser obscurecido pela janela pop-up do workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - Problema dos ícones da barra de navegação superior no mobile serem difíceis de excluir ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Exibição incorreta do valor para "Habilitar coluna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh

  - Condição de campo de data/hora não funcionando em regras de vínculo ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh

  - Restrições de opção de ação ausentes ao reabrir regras de vínculo ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Campos obrigatórios ocultos por regras de vínculo não devem afetar o envio do formulário ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

  - Filtro ausente para dados já associados ao adicionar dados de associação ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

- **[server]** appVersion gerado incorretamente pelo create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[cli]** Atualização automática do package.json no upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[build]** Correção de erro lançado no comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Bloco: Gantt]** Bloco de gráfico de Gantt com meses sobrepostos no cabeçalho do calendário para visualização mensal ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Ação: Importar registros]** Correção das exceções de importação e exportação que ocorrem ao definir permissões de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloco: template]** Templates de bloco não podem ser usados em ambiente MySQL ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust

- **[Workflow]** Correção de erro lançado ao executar evento agendado em subfluxo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Suporte para execução no modo de múltiplos registros por @mytharcher

- **[Ação: Exportar registros Pro]**
  - Correção das exceções de importação e exportação que ocorrem ao definir permissões de campo. por @aaaaaajie

  - Botão de exportação Pro perdendo parâmetros de filtro após ordenar coluna da tabela por @katherinehhh

- **[Armazenamento de arquivos: S3(Pro)]**
  - Correção dos dados de resposta do arquivo enviado por @mytharcher

  - Adição da lógica multer para upload no lado do servidor por @mytharcher

- **[Workflow: Aprovação]** Correção do pré-carregamento de campos de associação para registros por @mytharcher
