---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para filtrar fluxos de trabalho por mais campos, adição da variável de ambiente para controlar métodos de saída do log de auditoria e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Data de lançamento: 2025-06-11*

#### 🐛 Correções de Bugs

* **[cliente]** Corrige problemas de erro de bloco ([#7048](https://github.com/nocobase/nocobase/pull/7048)) por @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Data de lançamento: 2025-06-10*

#### 🎉 Novos Recursos

- **[Logs de auditoria]** Adiciona a variável de ambiente `AUDIT_LOGGER_TRANSPORT` para controlar o método de saída do log de auditoria por @2013xile

#### 🚀 Melhorias

- **[Calendário]** suporte para definir o dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados à permissão ao exibir campos muitos-para-muitos (muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie

#### 🐛 Correções de Bugs

- **[cliente]**

  - problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - opções de campo de seleção não funcionando nas regras de vinculação do formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - Regras de validação do formulário de filtro fazem com que o botão de filtro se torne ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - Corrige campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
- **[Ação: Importar registros]** Corrige falha na importação de tabela filha quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
- **[Visualização de dados]** Campos de grupo de caixas de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Fluxo de trabalho]** Corrige erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Para evitar erro de campo indefinido por @mytharcher
  - Corrige erro de API ao atualizar a página de detalhes por @mytharcher
- **[WeCom]** Adiciona verificação para caminho de callback no middleware do gateway por @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Data de lançamento: 2025-06-09*

#### 🚀 Melhorias

- **[cliente]** Proíbe mover um grupo de menu para dentro de si mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[cliente]**

  - Resolvido um problema onde o bloco falhava ao ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Corrige o problema de erro de parâmetro do bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - A variável de objeto atual é inválida nas regras de vinculação ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
  - Incapaz de limpar o indicador de campo obrigatório da subtabela usando regras de vinculação ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
- **[indefinido]** Remove dependência de banco de dados para possibleTypes, impõe configuração orientada por API por @aaaaaajie
- **[Mobile]** Otimiza problemas de lag no pop-up mobile ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Gerenciador de fonte de dados]** Remove dependência de banco de dados para possibleTypes, impõe configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Ação: Importar registros]** Corrigidos erros que ocorriam durante a edição em lote ao importar dados de tabela em árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Fluxo de trabalho]** Corrige erro de UI quando o fluxo de trabalho não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
- **[Fluxo de trabalho: JavaScript]** Corrige require para caminho relativo por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrige erro lançado quando o fluxo de trabalho é excluído por @mytharcher
  - Recarrega associação de arquivo do snapshot para evitar expiração de URL por @mytharcher
  - Corrige variáveis de gatilho por @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Data de lançamento: 2025-06-07*

#### 🐛 Correções de Bugs

- **[cliente]** Usa escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[banco de dados]** correção: adiciona campos de criador e atualizador ausentes na importação xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[Fluxo de trabalho]** Corrige evento de coleção no modo criar ou atualizar não sendo acionado ao criar sem campo alterado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Ação: Exportar registros Pro]** Corrige o erro que ocorre ao exportar anexos com condições. por @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Data de lançamento: 2025-06-07*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Campos de associação mostram subtabela e subformulário ao passar o mouse no modo read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - regras de vinculação do bloco markdown não funcionam quando acionadas pela ação pop-up ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
- **[Localização]** Resolve erro causado por textos vazios ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Gerenciador de tarefas assíncronas]** Corrigido problema de execução múltipla durante importação assíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Ação: Exportar registros Pro]** Corrigido problema de execução múltipla durante importação assíncrona por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Corrige aprovação delegada não pode continuar quando aprovada por outros por @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Data de lançamento: 2025-06-06*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Suporte para filtrar mais campos do fluxo de trabalho ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - mudar de página na subtabela do bloco de detalhes dentro do modal aciona aviso de alterações não salvas ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
  - título de campo ausente ao definir uma variável no componente de atribuição ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - regras de vinculação de estilo de campo não funcionam ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Data de lançamento: 2025-06-05*

#### 🚀 Melhorias

- **[Ação: Editar em lote]** Usa `filterByTk` em vez de `filter` no modo selecionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Ação: Importar registros Pro]** Otimiza problemas de desempenho ao processar grandes arquivos XLSX (conjuntos de dados de alta linha/coluna), evitando travamentos ou congelamentos do sistema. por @aaaaaajie

#### 🐛 Correções de Bugs

- **[cliente]**

  - título de campo ausente no componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - O último item do menu não pode ser selecionado na lista de mover menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
- **[Fluxo de trabalho]**

  - Corrige filtro não atualizado ao alternar abas de categorias ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corrige estatísticas do fluxo de trabalho não criadas automaticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Data de lançamento: 2025-06-07*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Suporte para filtrar mais campos do fluxo de trabalho ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - regras de vinculação do bloco markdown não funcionam quando acionadas pela ação pop-up ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
  - Campos de associação mostram subtabela e subformulário ao passar o mouse no modo read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - regras de vinculação de estilo de campo não funcionam ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh
  - título de campo ausente ao definir uma variável no componente de atribuição ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - mudar de página na subtabela do bloco de detalhes dentro do modal aciona aviso de alterações não salvas ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Corrigido problema de execução múltipla durante importação assíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Localização]** Resolve erro causado por textos vazios ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Ação: Exportar registros Pro]** Corrigido problema de execução múltipla durante importação assíncrona por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Corrige aprovação delegada não pode continuar quando aprovada por outros por @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Data de lançamento: 2025-06-05*

#### 🚀 Melhorias

- **[Ação: Editar em lote]** Usa `filterByTk` em vez de `filter` no modo selecionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Ação: Importar registros Pro]** Otimiza problemas de desempenho ao processar grandes arquivos XLSX (conjuntos de dados de alta linha/coluna), evitando travamentos ou congelamentos do sistema. por @aaaaaajie

#### 🐛 Correções de Bugs

- **[cliente]**

  - título de campo ausente no componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - O último item do menu não pode ser selecionado na lista de mover menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
- **[Fluxo de trabalho]**

  - Corrige filtro não atualizado ao alternar abas de categorias ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corrige estatísticas do fluxo de trabalho não criadas automaticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Data de lançamento: 2025-06-07*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Suporte para filtrar mais campos do fluxo de trabalho ([#6995](https://github.com/nocobase/nocobase/pull/6995)) por @mytharcher
- **[Gerenciador de e-mail]** suporta o valor de envio padrão em pop-up, suporta pesquisa difusa para destinatários e corrige problemas por @jiannx

#### 🐛 Correções de Bugs

- **[banco de dados]** correção: adiciona campos de criador e atualizador ausentes na importação xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[cliente]**

  - título de campo ausente ao definir uma variável no componente de atribuição ([#7001](https://github.com/nocobase/nocobase/pull/7001)) por @katherinehhh
  - Campos de associação mostram subtabela e subformulário ao passar o mouse no modo read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) por @zhangzhonghe
  - regras de vinculação do bloco markdown não funcionam quando acionadas pela ação pop-up ([#7007](https://github.com/nocobase/nocobase/pull/7007)) por @katherinehhh
  - mudar de página na subtabela do bloco de detalhes dentro do modal aciona aviso de alterações não salvas ([#7004](https://github.com/nocobase/nocobase/pull/7004)) por @katherinehhh
  - regras de vinculação de estilo de campo não funcionam ([#7003](https://github.com/nocobase/nocobase/pull/7003)) por @katherinehhh
- **[Gerenciador de tarefas assíncronas]** Corrigido problema de execução múltipla durante importação assíncrona ([#7006](https://github.com/nocobase/nocobase/pull/7006)) por @aaaaaajie
- **[Localização]** Resolve erro causado por textos vazios ([#7010](https://github.com/nocobase/nocobase/pull/7010)) por @2013xile
- **[Ação: Exportar registros Pro]** Corrigido problema de execução múltipla durante importação assíncrona por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Corrige aprovação delegada não pode continuar quando aprovada por outros por @mytharcher
- **[Gerenciador de e-mail]**

  - múltiplas chaves primárias para a tabela "mailmessagelabels_mailmessages" por @jiannx
  - pop-up de configuração não exibindo por @jiannx
  - pesquisa difusa de e-mail para criar filtros únicos por @jiannx
  - pesquisa difusa de destinatário suporta campos associados por @jiannx
  - adiciona o campo "id" ao mailmessagelabelsMailmessages por @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Data de lançamento: 2025-06-06*

#### 🚀 Melhorias

- **[Ação: Editar em lote]** Usa `filterByTk` em vez de `filter` no modo selecionado ([#6994](https://github.com/nocobase/nocobase/pull/6994)) por @mytharcher
- **[Ação: Importar registros Pro]** Otimiza problemas de desempenho ao processar grandes arquivos XLSX (conjuntos de dados de alta linha/coluna), evitando travamentos ou congelamentos do sistema. por @aaaaaajie

#### 🐛 Correções de Bugs

- **[cliente]**

  - título de campo ausente no componente assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) por @katherinehhh
  - O último item do menu não pode ser selecionado na lista de mover menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) por @zhangzhonghe
  - O conteúdo exibido incorretamente em páginas abertas através de links pop-up ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
- **[Fluxo de trabalho]**

  - Corrige filtro não atualizado ao alternar abas de categorias ([#6989](https://github.com/nocobase/nocobase/pull/6989)) por @mytharcher
  - Corrige estatísticas do fluxo de trabalho não criadas automaticamente ([#6993](https://github.com/nocobase/nocobase/pull/6993)) por @mytharcher
