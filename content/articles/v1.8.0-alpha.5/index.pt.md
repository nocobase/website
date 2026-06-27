---
title: "NocoBase v1.8.0-alpha.5: Suporte ao preenchimento de campos de entrada via leitura de código QR"
description: "Nota de lançamento da v1.8.0-alpha.5"
---

### 🚀 Melhorias

- **[client]**
  - Suporte ao preenchimento de campos de entrada via leitura de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh

  - Suporte à localização para o conteúdo do bloco Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh

  - Proibido mover um menu de grupo para dentro dele mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados à permissão ao exibir campos muitos-para-muitos(muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

- **[Calendário]** Suporte à configuração do dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Suporte ao clique para ampliar imagem no modo de visualização Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]**
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

  - Corrigido problema de campos não exibidos em modelos de bloco causado por requisições de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Regras de validação do formulário de filtro fazem o botão de filtro se tornar ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Opções de campo de seleção não funcionando nas regras de vinculação do formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - Incapacidade de limpar o indicador de campo obrigatório de subtabela usando regras de vinculação ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

  - Corrigido problema de erro de parâmetro no bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - Corrigido problema onde os dados do usuário atual estão vazios ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe

  - Variável de objeto atual inválida nas regras de vinculação ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

  - Resolvido problema onde o bloco falhava ao ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Uso de escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

- **[Visualização de dados]**
  - Exibição incorreta do campo de data "entre" no filtro de gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

  - Campos de grupo de caixas de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Ação: Importar registros]**
  - Corrigida importação xlsx para restringir campos textarea de aceitar dados em formato não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

  - Corrigida falha na importação de tabela filha quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

  - Corrigidos erros que ocorriam durante a edição em lote ao importar dados de tabela em árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Documentação da API]** Plugins oficiais não-NocoBase falham ao exibir documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Workflow]**
  - Corrigido erro causado por `toJSON()` no gatilho de agendamento ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher

  - Corrigido erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

  - Corrigido erro de UI quando o workflow não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

  - Corrigido evento de coleção no modo "ao criar ou atualizar" que não disparava ao criar sem campo alterado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher

- **[Mobile]** Otimizados problemas de lag no pop-up mobile ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Gerenciador de fonte de dados]** Removida dependência de banco de dados para possibleTypes, aplicada configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Ação: Exportar registros Pro]** Corrigido o erro que ocorre ao exportar anexos com condições. por @aaaaaajie
