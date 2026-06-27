---
title: "Grande Atualização! NocoBase V1.0 Lançada Oficialmente"
description: "Descubra as principais atualizações do NocoBase V1.0, incluindo novos recursos, plugins e melhorias significativas de desempenho. Saiba como este lançamento marco aprimora a estabilidade, segurança e funcionalidade para desenvolvedores. Obtenha insights detalhados sobre o novo editor de temas, melhorias na visualização de dados e o changelog completo. Entenda o processo de atualização, especialmente se você usa plugins SSO, e explore o impacto dessas mudanças em seus projetos."
---

## Marco V1.0

Após 3 anos de desenvolvimento, o NocoBase atingiu sua primeira grande atualização de versão, transitando da versão 0.x para a 1.0. Isso marca um marco significativo.

* Durante a fase 0.x: A API principal e os recursos passaram por mudanças rápidas, com cada nova versão potencialmente introduzindo alterações incompatíveis.
* Durante a fase 1.x: A API principal se estabilizou, e o NocoBase focará em adicionar novos plugins, otimizar a segurança e melhorar o desempenho, mantendo a estabilidade.

## Novos Recursos

* O editor de temas pode configurar o preenchimento de páginas e modais, espaçamento entre blocos e raio dos cantos dos blocos.
* Ao adicionar blocos, as coleções suportam filtragem.
* Registros de relacionamento suportam ordenação.
* Interatividade melhorada da visualização de dados.
* Suporte para adicionar blocos de gráficos em dispositivos móveis.
* Blocos de filtro de gráficos suportam a definição do escopo de dados do campo.
* Adiciona mais variáveis, [veja detalhes](https://docs.nocobase.com/handbook/ui/variables).
* Blocos de qualquer coleção podem ser adicionados em pop-ups.
* Fluxos de trabalho: "Evento pós-ação" pode ser acionado por botões dentro de blocos de associação.
* Atualização automática dos dados no contêiner pai quando os dados mudam dentro de um pop-up.
* Melhorias significativas de desempenho em blocos de tabela.
* Aumento substancial na cobertura de testes.

## Novos Plugins

* Campo: Markdown (Vditor)
  * Usado para armazenar Markdown e renderizá-lo usando o editor Vditor, suporta sintaxe Markdown comum e suporta upload de imagens, gravações, etc. Também permite renderização instantânea, onde o que você vê é o que você obtém.
* Comentários
  * Fornece modelo de coleção de comentários e bloco para adicionar funcionalidade de comentários para qualquer coleção.

## Registro de Alterações Completo

* feat(plugin-workflow): refresh the list after sync #4177
* feat(plugin-workflow): show workflow key as tooltip on title #4178
* test(plugin-workflow): add test cases #4199
* chore: api cache control header #4203
* feat: load vditor dep from local #4190
* test: input number separator test #4204
* fix: number field shuold support separator setting #4197
* fix(plugin-workflow): refine experience #4195
* chore: optimize warning wordings of import & export #4196
* refactor: external data source collection manager #4193
* fix: env bug #4191
* fix: empty operator with association field #4189
* chore: add e2e #4184
* fix: vditor version #4183
* refactor: form data template locale improve #4188
* test: add automated testing #4098
* chore: data source logger instance #4181
* chore: get database instance in relation repository #4179
* chore: add e2e for variables #4152
* chore: define collection debug message #4176
* chore: unsupportedFields in view collection #4155
* feat: add plugin-field-markdown-vditor #4065
* fix: bulk edit form acl action error #4166
* fix: auto create uuid foreign key in relation field #4160
* fix(plugin-fm): fix confusing size limit hint #4153
* fix(users): improve users:updateProfile #4162
* fix(client): get api url #4161
* feat: remove plugin-ui-routes-storage #4140
* fix: lock cytoscape version #4158
* refactor: collection template support presetFieldsDisabled #4159
* fix: grid schema #4157
* client unit test #4150
* fix: update belongs to many association that target key is not primary key #4146
* refactor: form data template locale improve #4148
* fix(database): column name in array field #4110
* test: refresh on action e2e test #4147
* fix(custom-request): support configuring content type #4144
* chore: deprecate the current record variable from the form #4063
* feat(Theme): add some tokens #4137
* fix(client): fix some warnings #4143
* style: tableActionColumn style improve #4138
* fix: actionBar style improve #4123
* chore: warning message if on delete conflict #4141
* fix(plugin-workflow-manual): allow pass node when no assignee #4139
* chore: datasource manager api #4124
* fix(plugin-workflow-manual): fix assignees parsing bug #4125
* fix: load association field in collection #4122
* perf: remove all Skeleton animation #4113
* test: add e2e #4121
* chore(data-vi): adjust api #4116
* fix: scheduleEventTrigger #4114
* feat(plugin-workflow): add checker for intervally dispatching #4119
* feat: add filterOtherRecordsCollection for DataBlockInitializer #4117
* refactor: optimize CollectionField #4111
* fix: improve sort field migration #4112
* fix: field component #4102
* fix: association select support add mode #4108
* fix: createdBy & updatedBy target option #4109
* fix(linkage-rule): linkage rule support empty condiction #4103
* fix: add SanitizedCollectionProvider #4100
* fix: tree collection target error #4105
* fix: add ClearCollectionFieldContext #4101
* feat: improve form block #4099
* chore: migrate sortable options to sort field #4011
* feat: support sort option in appends #4056
* feat(data-vi): allows pie chart to accept negative numbers, fix T-4075 #4094
* fix(data-vi): number becomes string after precision transformation #4092
* fix: encode url params #4055
* test(plugin-workflow): add test case for duplicated triggering schedule workflow #3817
* perf(LinkageRules): solve lagging problems #4090
* fix(subTable): should not display Allow add new data option #4086
* fix: missing fields #4083
* fix: table select pagination error #4078
* fix: reset page when setting block data scope #4081
* fix: custom request role list #4074
* fix: parse iso week #4068
* fix(sourceId): avoid error #4077
* fix(sql-collection): can’t select interface when setting fields #4079
* fix: load with source field #4075
* fix: deletion of operation linkage rules does not take effect in real time #4058
* fix(core): fix round bug in formula evaluator #4070
* test: add e2e for data loading mode #4069
* fix(filterForm): avoid duplicate names #4071
* chore: optimize block title #4040
* fix: sync default value in view #4067
* fix(defaultValue): fix the issue of default values disappearing after refreshing the page #4066
* refactor: gantt block #4059
* fix: sub-table big field should support variable default value #4062
* chore(Theme): set the default font size of the Compact theme to 16 #4064
* test: add e2e for actions #4053
* fix(variable): missing variables and invalid translations #4054
* test: add backend unit tests #4000
* fix: improve card item #4036
* chore(acl): disable register association fields actions #4014
* fix(variable): fix parent record variable reporting errors in data scope #4039
* test(e2e): add assertions on field values #4034
* feat(Variable): add a new variable #4025
* feat: run e2e with pro plugins #3890
* fix: bug #4038
* fix: array operator with camel case field #4032
* fix: scopeKeyOptions should be obtained in real-time #4029
* fix(addText): should use FormItemSchemaToolbar instead of BlockSchema… #3963
* feat: register once hook in datasource manager #4024
* fix: snippets #4030
* fix: vitest single bug #4031
* feat(data-vi): improved user experiences (refer to pr) #4013
* test: add frontend unit test #3991
* feat: support Others option in popup #4015
* fix(collection-manager): no refresh after override the field #4022
* chore: add export & import warnings #4027
* refactor: third party data source support sort field grouped sorting edit #4023
* fix(plugin-acl): pm.acl.roles snippet #4026
* test: association name block e2e test #4021
* fix: get api url #4020
* fix(Sub-details): the initializer button is not displayed when the field value is empty #4019
* fix: initializer use useAassociationName #4018
* fix(auth): cas login bug when use subdirectory deployment #4017
* fix(TreeTable): add child error #4008
* fix: remove active field should not clear value #4012
* fix(plugin-acl): datasource roles snippet #4016
* fix: after selecting all, bulk update prompts for unselected data #4010
* refactor: tree table is not enabled by default #4001
* feat(plugin-workflow-action-trigger): support association actions to trigger #4007
* Update application.ts #4006
* fix: tag filed setting #4009
* fix(users): remove phone validation due to incorrect check of foreign phone numebrs #4005
* fix: association block action permission verification failed #3994
* refactor: fields for table sorting cannot select sorting fields with scopekey #3984
* fix(Form): invalid parentRecord #3998
* fix(plugin-workflow): adjust locale #3993
* fix: sub -table support allowSelectExistingRecord setting #4004
* fix(auth): sign up page not found when entering with url directly #4002
* chore(database): set null value when field is unique and value is empty string #3997
* chore(gateway): report error with cause message #3999
* chore(error-handler): display message cause the error #3996
* fix: restore with table name in camel case #3995
* refactor(plugin-workflow): adjust comments #3990
* fix: gantt collapse & expand #3982
* fix(BulkForm): should be required when switching to ‘Changed to’ #3965
* fix: move action #3985
* refactor: sort field should not has defaultValue #3986
* chore: update class names of plugins #3981
* feat(plugin-workflow-sync): add sync when multi-app-share-collection enabled #3969
* fix(localization): incorrect locale when first entering #3968
* chore: adjust and add api comments #3951
* refactor: select options configuration #3964
* fix(GridCard): set the count of columns displayed in a row #3960
* refactor: only numerical formula fields support format #3962
* chore(plugin-workflow): add comments #3959
* chore: remove legacy formula plugins #3939
* fix(LinkageRules): should be effective immediately #3958
* fix(Picker): should display Allow add new data option #3957
* fix(connect-data-blocks): should immediately show in the drop-down menu #3953
* fix: left menu title modify #3956
* fix: template list provider bug #3950
* refactor: nanoid &uuid autoFill #3955
* feat: getParentJsonSchema in ui schema repository #3690
* fix: save uuid & nano id field value with sequelize validation #3952
* fix: throughCollection support fuzzy search #3949
* fix: getSourceKeyByAssocation #3947
* fix(RichText): unify style #3946
* fix(connectDataBlocks): should add FilterBlockProvider to Grid #3944
* chore: add appVersion to Schema #3936
* fix: collectionFieldInterfaceSelect #3945
* fix: fix sourceId of templates #3941
* fix(collection manager): collection manager primarykey & nanoid & uuid suport index setting #3943
* fix(plugin-formula-field): fix component context #3937
* fix: nanoid availableTypes #3942
* fix: automatically generate default values #3940
* fix: formula field caluation error #3938
* fix: formula field support format #3928
* refactor: unify tab initailizer naming #3932
* fix: add zIndex to Lightbox overlay style #3934
* fix(Table): fix the problem that the content of the association field is not displayed #3930
* fix(evaluators): fix array flatten #3931
* refactor: main data source view collection support filterTargetKey #3818
* fix: formula field calculation error #3929
* fix: load view collection belongs to association with source options #3912
* fix: edit form unchanged should not appear unSaveed warning when cloas modal #3920
* fix(Collapse): fix error for chinaRegions #3925
* fix: number display format #3924
* fix(defaultValue): should immediate effect when set default value #3923
* feat: action support refreshDataBlockRequest configuration #3882
* refactor: formBlockProvider & detailBlockProvider #3898
* feat(data-vi): allows to add charts for mobile client #3922
* chore: add API comments #3919
* fix: fix Pagination #3921
* test(plugin-error-handler): middleware #3909
* fix: update plugin #3895
* fix: gantt block pagination #3918
* fix: source id null #3917
* fix(Table): fix Pagination #3916
* fix: get the correct sourceId #3897
* fix(DataScope): fix no immediate effect issue after saving #3910
* fix: select field options initialValue #3911
* fix: external link click #3908
* fix(inputNumber): loss of accuracy in inputNumber #3902
* feat(plugin-workflow-action-trigger): add global action events #3883
* docs: add api comment #3868
* fix: vitest config bug #3907
* fix: table fixed bug #3901
* fix: list data undefined error #3905
* fix: lazy render bug #3886
* fix: sort params missing #3906
* refactor: change useProps to x-use-component-props #3853
* fix(withDynamicSchemaProps): change deep merge to shallow merge #3899
* fix: history block add print button, click print button to report error #3900
* fix: tar bug #3891
* chore: return bigInt as string type #3887
* feat(data-vi): data scope for chart filter fields #3894
* feat: adjust menu of add new #3884
* fix(plugin-custom-request): fix edit button dialog #3893
* fix: fieldNames missing when setting data scope #3892
* fix: deps check error when dev add production plugin #3848
* fix: workflow tabs not exists #3889
* fix: association field support data scope linkage #3888
* fix: templateBlockProvider support association field append #3866
* chore: main datasource api #3880
* feat: run vitest with coverage #3802
* fix: avoid duplicate menu keys #3885
* fix(data-vi): dual axes chart displays abnormally #3881
* fix: reject update when filter is empty object #3777
* chore: update field with primary key attribute #3852
* refactor: uuid & nanoid support default value configuration #3830
* feat: table performance #3791
* fix: setFormValueChanged undefined #3879
* fix(client): fix diabled in filter dynamic component #3874
* fix(plugin-workflow-parallel): fix locale #3876
* fix(formula-field): formula field set form value change #3873
* fix: formBlockProvider block display #3877
* refactor(plugin-workflow): change to #3871
* fix: kanban card modal display abnormal #3863
* fix: filterTargetKey only support view collection #3872

## Alterações nos Plugins

Os seguintes plugins não são mais fornecidos como versão de código aberto (usuários que os utilizam em ambientes de produção, por favor, entrem em contato conosco para atualizações):

* @nocobase/plugin-auth-cas: Autentica identidade via protocolo CAS.
* @nocobase/plugin-auth-odic: Autentica identidade via protocolo OIDC (OpenID Connect).
* @nocobase/plugin-auth-saml: Autentica identidade via SAML 2.0.

Os seguintes plugins foram descontinuados e serão removidos em versões futuras:

* @nocobase/plugin-audit-logs: Descontinuado, temporariamente não removido, não será instalado na nova versão.
* @nocobase/plugin-snapshot-field: Descontinuado, temporariamente não removido, não será instalado na nova versão.
* @nocobase/plugin-charts: Use @nocobase/plugin-data-visualization em seu lugar.
* @nocobase/plugin-excel-formula-field: Use @nocobase/plugin-field-formula em seu lugar.
* @nocobase/plugin-math-formula-field: Use @nocobase/plugin-field-formula em seu lugar.
* @nocobase/plugin-ui-routes-storage: Descontinuado, as rotas do frontend podem ser estendidas diretamente no frontend.

Para a lista completa de plugins, consulte: [https://www.nocobase.com/plugins.html](https://www.nocobase.com/plugins.html)

## Comentários de Código

Para fornecer uma melhor experiência de desenvolvimento, adicionamos comentários a algumas APIs especiais:

* `@internal`: Normalmente usado para identificar detalhes de implementação interna ou métodos que não são projetados para uso público, mas existem para uso interno no código.
* `@experimental`: Usado para identificar recursos ou APIs experimentais. Essas APIs ainda estão em fases de desenvolvimento e teste, podem sofrer alterações significativas ou até serem removidas ou substituídas em versões futuras.
* `@deprecated`: Usado para identificar recursos, métodos ou APIs obsoletos no código. Embora ainda estejam disponíveis, podem ser removidos em versões futuras, ou pode haver soluções alternativas melhores disponíveis.

## Acordo de Licença

O NocoBase é licenciado sob dupla licença AGPL-3.0 e licenças comerciais. Para detalhes, consulte o [Acordo de Licença NocoBase](https://cn.nocobase.com/agreement-cn.html).

## Guia de Atualização

* Sempre faça backup do seu banco de dados antes de atualizar! Sempre faça backup do seu banco de dados! Sempre faça backup do seu banco de dados!
* Você também pode fazer backup de todo o código do projeto.

Como os plugins SSO Auth: CAS, Auth: OIDC, Auth: SAML foram removidos do código aberto, a atualização será dividida em dois casos.

### Se você não está usando plugins SSO

Siga o [método convencional](https://docs.nocobase.com/welcome/getting-started/upgrading) para atualizar.

### Se você está usando plugins SSO

Siga estes passos para atualizar:

#### 1. Atualize a Aplicação

Consulte a [Visão Geral de Atualização do NocoBase](https://docs.nocobase.com/welcome/getting-started/upgrading) e atualize o NocoBase para a versão mais recente.

Se você habilitou anteriormente os plugins CAS, OIDC, SAML, verá os seguintes prompts durante a atualização:

Prompt do terminal de atualização de linha de comando:

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Prompt da interface da versão Docker:

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. Remover Plugins ou Obter a Versão 1.0 do Plugin?

***Se você escolher remover os plugins e continuar a atualização:***

Remova os plugins de acordo com os prompts

```
# Aplicação principal
yarn pm remove cas oidc saml --force
# Se for uma sub-aplicação, adicione o parâmetro --app
yarn pm remove cas oidc saml --force --app=sub-app1
```

Continue a atualização

```
yarn nocobase upgrade
```

***Se você escolher atualizar os plugins para a versão 1.0***

Entre em contato com a equipe NocoBase para obter a versão 1.0 dos plugins e continue com a atualização.

#### 3. Processo de Atualização dos Plugins CAS, OIDC, SAML

Neste ponto, a interface da aplicação não está mais acessível, então precisamos atualizar manualmente.

1. Faça login com sua conta em [service.nocobase.com](https://service.nocobase.com/) para baixar a versão mais recente dos plugins.
2. Descompacte os plugins no diretório especificado
   * Plugin CAS descompacte em `./storage/plugins/@nocobase/plugin-auth-cas`
   * Plugin OIDC descompacte em `./storage/plugins/@nocobase/plugin-auth-oidc`
   * Plugin SAML descompacte em `./storage/plugins/@nocobase/plugin-auth-saml`
3. Atualize a aplicação
   * Para a versão Docker, basta reiniciar o contêiner
   * Para a versão de código fonte ou create-nocobase-app
     1. Baixe as dependências `yarn install`
     2. Execute o comando de atualização `yarn nocobase upgrade`
     3. Reinicie a aplicação
