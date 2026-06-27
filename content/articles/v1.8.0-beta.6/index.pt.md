---
title: "NocoBase v1.8.0-beta.6: Adicionar variável de ambiente para controlar o método de saída do log de auditoria"
description: "Nota de lançamento da v1.8.0-beta.6"
---

### 🎉 Novos Recursos

- **[Registros de auditoria]** Adicionada a variável de ambiente `AUDIT_LOGGER_TRANSPORT` para controlar o método de saída do log de auditoria por @2013xile

### 🚀 Melhorias

- **[cliente]** Impedir mover um menu de grupo para dentro dele mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

- **[Calendário]** Suporte para definir o dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh

- **[Campo de coleção: Markdown(Vditor)]** Suporte para clicar e ampliar imagem no modo de visualização Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados a permissão ao exibir campos muitos-para-muitos(muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

- **[Comentários]** Suporte para paginação no bloco de comentários por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]**
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh

  - Corrigido o problema onde regras de vínculo causavam loop infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Corrigida dica de tamanho de upload ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher

  - Correção: uso de encadeamento opcional para rejeitar requisições com segurança no APICliente quando o manipulador pode ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh

  - Corrigido problema de campos não exibidos em modelos de bloco causado por requisições de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe

  - Opções de campo de seleção não funcionando em regras de vínculo de formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh

  - Regras de validação do formulário de filtro tornam o botão de filtro ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe

  - Incapacidade de limpar o indicador de campo obrigatório de subtabela usando regras de vínculo ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe

  - Corrigido problema de erro de parâmetro do bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe

  - Resolvido problema onde o bloco falhava ao ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie

  - Uso de escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher

  - Variável de objeto atual é inválida em regras de vínculo ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe

- **[banco de dados]** correção: adicionados campos de criador e atualizador ausentes na importação xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie

- **[indefinido]** Removida dependência de banco de dados para possibleTypes, impor configuração orientada por API por @aaaaaajie

- **[Ação: Importar registros]**
  - Corrigida importação xlsx para restringir campos textarea de aceitar dados em formato não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

  - Corrigida falha na importação de tabela filha quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie

  - Corrigidos erros ocorridos durante edição em lote ao importar dados de tabela árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie

- **[Visualização de dados]**
  - Exibição incorreta do campo de data "entre" no filtro de gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh

  - Campos de grupo de caixas de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile

- **[Documentação da API]** Plugins oficiais não-NocoBase falham ao exibir documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt

- **[Fluxo de trabalho]**
  - Corrigido erro causado por `toJSON()` no gatilho agendado ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher

  - Corrigido erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher

  - Corrigido erro de interface quando o fluxo de trabalho não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher

  - Corrigido evento de coleção no modo criar ou atualizar não disparando ao criar sem campo alterado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher

- **[Gerenciador de fonte de dados]** Removida dependência de banco de dados para possibleTypes, impor configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie

- **[Mobile]** Otimizados problemas de lag em pop-ups móveis ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe

- **[Ação: Exportar registros Pro]** Corrigido o erro que ocorre ao exportar anexos com condições. por @aaaaaajie

- **[Fluxo de trabalho: JavaScript]** Corrigido require para caminho relativo por @mytharcher

- **[Impressão de modelo]** Corrigido bug de análise de permissão e adicionada verificação de dados não encontrados. por @sheldon66

- **[Fluxo de trabalho: Aprovação]**
  - Para evitar erro de campo indefinido por @mytharcher

  - Corrigido erro lançado quando o fluxo de trabalho é excluído por @mytharcher

  - Corrigidas variáveis de gatilho por @mytharcher

  - Recarregar associação de arquivo do snapshot para evitar expiração de URL por @mytharcher

  - Corrigido erro de API ao atualizar página de detalhes por @mytharcher

- **[WeCom]** Adicionada verificação para caminho de callback no middleware de gateway por @2013xile
