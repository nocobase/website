---
title: "NocoBase v1.6.23: Otimizar a lógica interna do comando `nocobase upgrade`"
description: "Nota de lançamento da v1.6.23"
---

### 🚀 Melhorias

- **[cli]** Otimização da lógica interna do comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

- **[Impressão de modelo]** Substituído o controle de ação da fonte de dados pelo controle de acesso baseado em função do cliente. por @sheldon66

### 🐛 Correções de Bugs

- **[cli]** Atualização automática do package.json durante o upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos

- **[client]**
  - Filtro ausente para dados já associados ao adicionar dados de associação ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh

  - Regra de vinculação do botão 'Adicionar Filho' na tabela em árvore sem o 'registro atual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh

- **[Ação: Importar registros]** Corrigidas as exceções de importação e exportação que ocorriam ao definir permissões de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie

- **[Bloco: Gantt]** Sobreposição de meses no cabeçalho do calendário do gráfico de Gantt na visualização mensal ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh

- **[Ação: Exportar registros Pro]**
  - Botão de exportação Pro perdendo parâmetros de filtro após ordenar coluna da tabela por @katherinehhh

  - Corrigidas as exceções de importação e exportação que ocorriam ao definir permissões de campo. por @aaaaaajie

- **[Armazenamento de arquivos: S3(Pro)]** Corrigidos os dados de resposta do arquivo enviado por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Corrigido o pré-carregamento dos campos de associação para registros por @mytharcher
