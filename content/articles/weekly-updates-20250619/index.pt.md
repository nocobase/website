---
title: "Atualizações Semanais do NocoBase: Suporte ao Preenchimento de Campos de Entrada via Leitura de Código QR"
description: "As atualizações desta semana incluem: suporte para cópia com um clique do conteúdo de campos de texto, configurações de intervalo de sincronização de e-mail e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Data de lançamento: 2025-06-18*

#### 🚀 Melhorias

- **[cliente]** Ocultar automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
- **[Verificação]** Remover opções do verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

#### 🐛 Correções de Bugs

- **[banco de dados]** suportar atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[cliente]**

  - Variáveis de parâmetro de consulta de URL não funcionando no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - Condição de estilo nos campos de coluna de subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - Filtrar através de campos de coleção de relacionamento em formulários de filtro é inválido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) lança um erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Formulários públicos]** Formulários públicos: Corrigir problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Data de lançamento: 2025-06-17*

#### 🚀 Melhorias

- **[cliente]** Largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Fluxo de trabalho: Aprovação]** Adicionar opção de campo extra para lista de reatribuídos por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Mensagem de validação obrigatória na subtabela persiste ao mudar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - Ponto decimal perdido após alternar o componente de valor de máscara para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Renderização incorreta de Markdown (Vditor) na subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
- **[Campo de coleção: Sequência]** Corrigir cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Gerenciador de backup]** Erro de comando desconhecido ao restaurar backups MySQL na plataforma Windows por @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Data de lançamento: 2025-06-16*

#### 🚀 Melhorias

- **[cliente]** adicionar opções "vazio" e "não vazio" às regras de vinculação de campo de caixa de seleção ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]** Após criar o campo de relação inversa, a opção "Criar campo de relação inversa na tabela de dados de destino" nas configurações do campo de associação não estava marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
- **[Gerenciador de fonte de dados]** As alterações de escopo agora entram em vigor imediatamente para todas as funções relacionadas. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Controle de acesso]** Corrigido um problema em que o aplicativo bloqueava a entrada quando nenhuma função padrão existia ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir variável de url de redirecionamento não analisada por @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Data de lançamento: 2025-06-15*

#### 🎉 Novos Recursos

- **[Cópia de texto]** Suporte para cópia com um clique do conteúdo do campo de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[cliente]**

  - Seletor de campo de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
  - Corrigir dica de tamanho de upload ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[Fluxo de trabalho: Nó de loop]** Corrigir execução do ramo de loop quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir estatísticas de tarefas não atualizadas quando a execução é cancelada por @mytharcher
  - Corrigir variável de gatilho ao filtrar por tipo por @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Data de lançamento: 2025-06-12*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir o problema em que as regras de vinculação causam loop infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe
  - Corrigir: usar encadeamento opcional para rejeitar solicitações com segurança no APIClient quando o manipulador pode ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
- **[Visualização de dados]** Exibição incorreta do campo de data entre no filtro do gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
- **[Documentação da API]** Plugins não oficiais do NocoBase falham ao exibir a documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Ação: Importar registros]** Corrigida a importação xlsx para restringir campos de área de texto de aceitar dados formatados como não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Data de lançamento: 2025-06-18*

#### 🚀 Melhorias

- **[cliente]**

  - Ocultar automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
  - Largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Verificação]** Remover opções do verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]**

  - Mensagem de validação obrigatória na subtabela persiste ao mudar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - Condição de estilo nos campos de coluna de subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - Ponto decimal perdido após alternar o componente de valor de máscara para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Variáveis de parâmetro de consulta de URL não funcionando no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - Filtrar através de campos de coleção de relacionamento em formulários de filtro é inválido ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
  - Renderização incorreta de Markdown (Vditor) na subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
- **[banco de dados]** suportar atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) lança um erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Campo de coleção: Sequência]** Corrigir cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Formulários públicos]** Formulários públicos: Corrigir problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Data de lançamento: 2025-06-16*

#### 🚀 Melhorias

- **[cliente]** adicionar opções "vazio" e "não vazio" às regras de vinculação de campo de caixa de seleção ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Adicionar opção de campo extra para lista de reatribuídos por @mytharcher

#### 🐛 Correções de Bugs

- **[Gerenciador de backup]** Erro de comando desconhecido ao restaurar backups MySQL na plataforma Windows por @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Data de lançamento: 2025-06-15*

#### 🎉 Novos Recursos

- **[Cópia de texto]** Suporte para cópia com um clique do conteúdo do campo de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[cliente]**

  - Seletor de campo de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
  - Após criar o campo de relação inversa, a opção "Criar campo de relação inversa na tabela de dados de destino" nas configurações do campo de associação não estava marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
- **[Controle de acesso]** Corrigido um problema em que o aplicativo bloqueava a entrada quando nenhuma função padrão existia ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Fluxo de trabalho: Nó de loop]** Corrigir execução do ramo de loop quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Gerenciador de fonte de dados]** As alterações de escopo agora entram em vigor imediatamente para todas as funções relacionadas. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir variável de url de redirecionamento não analisada por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir variável de gatilho ao filtrar por tipo por @mytharcher
  - Corrigir estatísticas de tarefas não atualizadas quando a execução é cancelada por @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Data de lançamento: 2025-06-12*

#### 🎉 Novos Recursos

- **[Logs de auditoria]** Adicionar a variável de ambiente `AUDIT_LOGGER_TRANSPORT` para controlar o método de saída do log de auditoria por @2013xile

#### 🚀 Melhorias

- **[cliente]** Proibir mover um menu de grupo para dentro de si mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe
- **[Calendário]** suportar configuração do dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** suportar clique para ampliar imagem no modo de visualização Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados à permissão ao exibir campos muitos-para-muitos(muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie
- **[Comentários]** suportar paginação no bloco de comentários por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
  - Corrigir o problema em que as regras de vinculação causam loop infinito ([#7050](https://github.com/nocobase/nocobase/pull/7050)) por @zhangzhonghe
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Corrigir dica de tamanho de upload ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
  - Corrigir: usar encadeamento opcional para rejeitar solicitações com segurança no APIClient quando o manipulador pode ser indefinido ([#7054](https://github.com/nocobase/nocobase/pull/7054)) por @sheldon66
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Corrigir campos não exibidos em modelos de bloco causados por solicitações de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
  - Opções de campo de seleção não funcionando nas regras de vinculação do formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - Regras de validação do formulário de filtro fazem com que o botão de filtro se torne ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - Incapaz de limpar o indicador de campo obrigatório da subtabela usando regras de vinculação ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
  - Corrigir o problema de erro de parâmetro do bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - Resolvido um problema em que o bloco falhava ao ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - Variável de objeto atual é inválida nas regras de vinculação ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
- **[banco de dados]** corrigir: adicionar campos de criador e atualizador ausentes na importação xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) por @aaaaaajie
- **[indefinido]** Remover dependência de banco de dados para possibleTypes, impor configuração orientada por API por @aaaaaajie
- **[Ação: Importar registros]**

  - Corrigida a importação xlsx para restringir campos de área de texto de aceitar dados formatados como não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
  - Corrigir falha na importação de tabela filha quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
  - Corrigidos erros que ocorriam durante a edição em lote ao importar dados de tabela em árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Visualização de dados]**

  - Exibição incorreta do campo de data entre no filtro do gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
  - Campos de grupo de caixa de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Documentação da API]** Plugins não oficiais do NocoBase falham ao exibir a documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Fluxo de trabalho]**

  - Corrigir erro causado por `toJSON()` no gatilho de agendamento ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher
  - Corrigir erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
  - Corrigir erro de UI quando o fluxo de trabalho não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
  - Corrigir evento de coleção no modo criar ou atualizar não sendo acionado ao criar sem campo alterado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Gerenciador de fonte de dados]** Remover dependência de banco de dados para possibleTypes, impor configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Mobile]** Otimizar problemas de lag no pop-up móvel ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Ação: Exportar registros Pro]** Corrigir o erro que ocorre ao exportar anexos com condições. por @aaaaaajie
- **[Fluxo de trabalho: JavaScript]** Corrigir require para caminho relativo por @mytharcher
- **[Impressão de modelo]** Corrigir bug de análise de permissão e adicionar verificação de dados não encontrados. por @sheldon66
- **[Fluxo de trabalho: Aprovação]**

  - Para evitar erro de campo indefinido por @mytharcher
  - Corrigir erro lançado quando o fluxo de trabalho é excluído por @mytharcher
  - Corrigir variáveis de gatilho por @mytharcher
  - Recarregar associação de arquivo do snapshot para evitar expiração de URL por @mytharcher
  - Corrigir erro de API ao atualizar a página de detalhes por @mytharcher
- **[WeCom]** Adicionar verificação de caminho de callback no middleware do gateway por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Data de lançamento: 2025-06-17*

#### 🎉 Novos Recursos

- **[Cópia de texto]** Suporte para cópia com um clique do conteúdo do campo de texto ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe
- **[Gerenciador de e-mail]** suportar exclusão de e-mail por @jiannx

#### 🚀 Melhorias

- **[cliente]**

  - adicionar opções "vazio" e "não vazio" às regras de vinculação de campo de caixa de seleção ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh
  - Largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038
- **[Gerenciador de tarefas assíncronas]** Melhorar o desempenho da criação de tarefas durante a exportação ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Adicionar opção de campo extra para lista de reatribuídos por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Ponto decimal perdido após alternar o componente de valor de máscara para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh
  - Renderização incorreta de Markdown (Vditor) na subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh
  - Após criar o campo de relação inversa, a opção "Criar campo de relação inversa na tabela de dados de destino" nas configurações do campo de associação não estava marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie
  - Seletor de campo de associação não limpa os dados selecionados após o envio ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh
- **[servidor]** Não é possível ler propriedades de undefined (lendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos
- **[Controle de acesso]** Corrigido um problema em que o aplicativo bloqueava a entrada quando nenhuma função padrão existia ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie
- **[Gerenciador de fonte de dados]** As alterações de escopo agora entram em vigor imediatamente para todas as funções relacionadas. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie
- **[Fluxo de trabalho: Nó de loop]** Corrigir execução do ramo de loop quando a condição não é satisfeita ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir variável de url de redirecionamento não analisada por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir estatísticas de tarefas não atualizadas quando a execução é cancelada por @mytharcher
- **[Gerenciador de e-mail]** falha na exclusão de e-mail por @jiannx
- **[Gerenciador de backup]** Erro de comando desconhecido ao restaurar backups MySQL na plataforma Windows por @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Data de lançamento: 2025-06-13*

#### 🎉 Novos Recursos

- **[Gerenciador de e-mail]** suportar configuração de intervalo de sincronização de e-mail por @jiannx

#### 🐛 Correções de Bugs

- **[banco de dados]** tornar o operador eq para campos de string compatível com o tipo número ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[cliente]** Corrigir dica de tamanho de upload ([#7057](https://github.com/nocobase/nocobase/pull/7057)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir variável de gatilho ao filtrar por tipo por @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Data de lançamento: 2025-06-12*

#### 🚀 Melhorias

- **[cliente]**

  - Suporte para preencher campos de entrada via leitura de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - suportar localização para conteúdo do bloco Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Proibir mover um menu de grupo para dentro de si mesmo ([#7005](https://github.com/nocobase/nocobase/pull/7005)) por @zhangzhonghe
- **[Campo de coleção: Muitos para muitos (array)]** Erros relacionados à permissão ao exibir campos muitos-para-muitos(muitos) em tabelas de dados. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) por @aaaaaajie
- **[Calendário]** suportar configuração do dia de início da semana no bloco de calendário ([#7032](https://github.com/nocobase/nocobase/pull/7032)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** suportar clique para ampliar imagem no modo de visualização Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**

  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7052](https://github.com/nocobase/nocobase/pull/7052)) por @katherinehhh
  - Corrigir campos não exibidos em modelos de bloco causados por solicitações de API duplicadas ([#6985](https://github.com/nocobase/nocobase/pull/6985)) por @zhangzhonghe
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Regras de validação do formulário de filtro fazem com que o botão de filtro se torne ineficaz ([#6975](https://github.com/nocobase/nocobase/pull/6975)) por @zhangzhonghe
  - Problema de fechamento automático ao configurar campos no formulário pop-up secundário ([#7042](https://github.com/nocobase/nocobase/pull/7042)) por @katherinehhh
  - Opções de campo de seleção não funcionando nas regras de vinculação do formulário de filtro ([#7035](https://github.com/nocobase/nocobase/pull/7035)) por @katherinehhh
  - Incapaz de limpar o indicador de campo obrigatório da subtabela usando regras de vinculação ([#7022](https://github.com/nocobase/nocobase/pull/7022)) por @zhangzhonghe
  - Corrigir o problema de erro de parâmetro do bloco de filtro ([#6966](https://github.com/nocobase/nocobase/pull/6966)) por @zhangzhonghe
  - Corrigir o problema em que os dados do usuário atual estão vazios ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - Variável de objeto atual é inválida nas regras de vinculação ([#7008](https://github.com/nocobase/nocobase/pull/7008)) por @zhangzhonghe
  - Resolvido um problema em que o bloco falhava ao ler dados de visualização de fontes de dados externas. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) por @aaaaaajie
  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[Visualização de dados]**

  - Exibição incorreta do campo de data entre no filtro do gráfico ([#7051](https://github.com/nocobase/nocobase/pull/7051)) por @katherinehhh
  - Campos de grupo de caixa de seleção em gráficos devem exibir rótulos em vez de valores brutos ([#7033](https://github.com/nocobase/nocobase/pull/7033)) por @2013xile
- **[Ação: Importar registros]**

  - Corrigida a importação xlsx para restringir campos de área de texto de aceitar dados formatados como não string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) por @aaaaaajie
  - Corrigir falha na importação de tabela filha quando campos relacionais estão envolvidos ([#7039](https://github.com/nocobase/nocobase/pull/7039)) por @aaaaaajie
  - Corrigidos erros que ocorriam durante a edição em lote ao importar dados de tabela em árvore XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) por @aaaaaajie
- **[Documentação da API]** Plugins não oficiais do NocoBase falham ao exibir a documentação da API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) por @chenzhizdt
- **[Fluxo de trabalho]**

  - Corrigir erro causado por `toJSON()` no gatilho de agendamento ([#7037](https://github.com/nocobase/nocobase/pull/7037)) por @mytharcher
  - Corrigir erro lançado na ação de execução manual quando o gatilho não está configurado corretamente ([#7036](https://github.com/nocobase/nocobase/pull/7036)) por @mytharcher
  - Corrigir erro de UI quando o fluxo de trabalho não existe ([#7023](https://github.com/nocobase/nocobase/pull/7023)) por @mytharcher
  - Corrigir evento de coleção no modo criar ou atualizar não sendo acionado ao criar sem campo alterado ([#7015](https://github.com/nocobase/nocobase/pull/7015)) por @mytharcher
- **[Mobile]** Otimizar problemas de lag no pop-up móvel ([#7029](https://github.com/nocobase/nocobase/pull/7029)) por @zhangzhonghe
- **[Gerenciador de fonte de dados]** Remover dependência de banco de dados para possibleTypes, impor configuração orientada por API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) por @aaaaaajie
- **[Ação: Exportar registros Pro]** Corrigir o erro que ocorre ao exportar anexos com condições. por @aaaaaajie
