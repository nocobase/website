---
title: "Atualizações Semanais｜Suporte a IA para Funcionários com Processamento Paralelo de Múltiplas Conversas"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 7 a 14 de maio de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Data de lançamento: 2026-05-13*

### 🎉 Novos Recursos

- **[client]**
  - Adiciona variável de idioma do usuário atual na v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh
  - Adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh

### 🚀 Melhorias

- **[client]** Exclui registros já associados na caixa de diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Departamentos]** Otimiza o estilo da lista de departamentos adicionando ícones e ajustando espaçamento ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh
- **[IA: Base de conhecimento]** O identificador único para uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que as configurações de valor padrão legadas não podiam ser removidas. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) por @gchust
  - Corrigido o problema em que não era possível selecionar opções para o campo de seleção da associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corrigido um problema em que o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de evento de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - Corrige requisições duplicadas de tabela quando formulários de filtro têm valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Corrigidas regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
  - corrige erro ao alterar o campo de título do campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
  - Corrigido um problema intermitente em que as regras de vinculação do botão de ação falhavam ao entrar em vigor. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
  - oculta o componente de subtabela para campos de associação muitos-para-muitos na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
- **[server]** correção(gerenciador-de-arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Funcionários IA]** Corrigido teste de voo do Ollama exigindo entrada de chave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Gerenciador de coleção gráfica]** corrige erro de filtro de ação de atualização no layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Fluxo de trabalho]** correção: restaurar texto de ajuda em diálogos de vinculação de fluxo de trabalho FlowModel para eventos de ação personalizada e operação ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Departamentos]** corrige conflito de tradução entre os botões adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** corrige dica de ferramenta do campo markdown sendo ocultada no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema em que o campo JS aparece nas configurações do processo de aprovação por @zhangzhonghe
  - Corrige o layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe
  - Corrige índice de registro de aprovação duplicado ao delegar tarefas de aprovação. por @mytharcher
- **[Gerenciador de backup]** Corrigido um problema em que os backups falhavam com um erro quando os arquivos não podiam ser encontrados. por @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Data de lançamento: 2026-05-10*

### 🚀 Melhorias

- **[Fluxo de trabalho: Aprovação]** Corrige o comportamento de validação de campo obrigatório para formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema em que o código JS não podia mais ser editado depois que um campo JS era definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corrigido um problema em que as atribuições de campo de subtabela não surtiam efeito nas regras de vinculação de campo. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
  - Corrige o problema em que as abas da página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corrigido um problema em que o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
- **[Política de senha]** Corrigido um problema em que usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile
- **[Ação: Importar registros Pro]** Corrige o problema em que a verificação de duplicidade no campo de data sempre falha por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que a gaveta de seleção de registro fica obscurecida na configuração do fluxo de trabalho de aprovação por @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Data de lançamento: 2026-05-09*

### 🎉 Novos Recursos

- **[client]** adiciona ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Cópia de texto]** suporta opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Melhorias

- **[undefined]** pular versões já publicadas no pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn
- **[client]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]** Corrigidas mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[client]**

  - Corrigidos campos `Oculto (valor reservado)` em blocos de formulário para que permaneçam visíveis no modo Editor de IU e restaurado o suporte de entrada de valor para atribuí-los em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - Corrige nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - Corrigido o gatilho de fluxo de trabalho em massa da tabela v2 para que a seleção de linha permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
  - Corrige formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corrige o problema em que as regras de vinculação da subtabela v1 alteram incorretamente os estilos de campo obrigatório ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - corrige renderização incorreta de dados no bloco de cartão de grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
  - corrige campo de opção obrigatório na subtabela não validado corretamente na primeira seleção no celular ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - Corrige o problema em que as variáveis de parâmetro de consulta de URL se tornam inválidas após alternar páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
  - corrige adaptação do DividerItem ao tema na v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - corrige ocultar opção de criação rápida para campo de seleção de associação na subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corrigidas regras de vinculação que não foram reexecutadas após a alteração dos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - Corrige o erro ao filtrar campos escalares com filtros personalizados de múltipla seleção ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
- **[server]** validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[Gerenciador de fonte de dados]** impedir edição e exclusão de todos os registros em permissões de escopo personalizadas para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[Fonte de dados: Principal]** Corrigidas tabelas de banco de dados importadas usando o nome de tabela prefixado errado quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Notificação: Mensagem no aplicativo]** Corrigido um problema em que a lista de mensagens no aplicativo não era atualizada após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Bloco: Kanban]** corrige quebra de palavra única em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
- **[Campo de coleção: Fórmula]** corrige campo de fórmula na subtabela v2 não acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Data de lançamento: 2026-05-13*

### 🎉 Novos Recursos

- **[undefined]** Adiciona um novo funcionário IA, Engenheira de Localização Lina, para auxiliar em tarefas de tradução de localização ([#9434](https://github.com/nocobase/nocobase/pull/9434)) por @2013xile
  Referência: [Gerenciamento de Localização](https://docs.nocobase.com/system-management/localization)<br>[Lina: Engenheira de Localização](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Use Lina e local HY-MT1.5-1.8B para traduzir entradas de localização](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Armazenamento de arquivos: S3(Pro)]** Suporta upload de arquivos via armazenamento S3 Pro no gerenciador de arquivos v2. por @Molunerfinn

### 🚀 Melhorias

- **[build]** Adicionada cobertura de regressão para evitar que `deleteServerFiles` remova artefatos de build `client` e `client-v2` em caminhos Windows e POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) por @Molunerfinn
- **[client]** Exclui registros já associados na caixa de diálogo de seleção de associação do bloco de tabela um-para-muitos ([#9448](https://github.com/nocobase/nocobase/pull/9448)) por @katherinehhh
- **[Gerenciador de arquivos]** Plugins de armazenamento de terceiros agora podem registrar seu próprio tipo de formulário de armazenamento na página de configurações do gerenciador de arquivos v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) por @Molunerfinn
- **[IA: Base de conhecimento]** O identificador único para uma base de conhecimento é configurável no momento da criação por @cgyrock

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que não era possível selecionar opções para o campo de seleção da associação. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) por @gchust
  - Corrige o problema em que as configurações do sistema aparecem vazias após o envio ([#9458](https://github.com/nocobase/nocobase/pull/9458)) por @zhangzhonghe
  - Corrige requisições duplicadas de tabela quando formulários de filtro têm valores padrão ([#9423](https://github.com/nocobase/nocobase/pull/9423)) por @zhangzhonghe
  - Corrigido um problema em que o escopo de dados do bloco de destino era definido incorretamente ao desmarcar dados de linha em um fluxo de evento de bloco de tabela. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) por @gchust
  - Corrigidas regras de vinculação V2 para suportar a definição de opções selecionáveis para campos ([#9399](https://github.com/nocobase/nocobase/pull/9399)) por @jiannx
  - corrige erro ao alterar o campo de título do campo de associação no bloco de tabela v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) por @katherinehhh
- **[client-v2]**

  - Corrige o problema em que a página fica em branco atrás da caixa de diálogo de ativação do plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) por @zhangzhonghe
  - Corrige falha nas páginas de administração v1 quando referenciam módulos de plugin v2 em builds de produção. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) por @Molunerfinn
- **[cli-v1]** Corrigidas falhas de inicialização de desenvolvimento em aplicativos criados com create-nocobase-app causadas pela resolução do caminho do cliente app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) por @Molunerfinn
- **[server]** correção(gerenciador-de-arquivos): forçar download de arquivos de conteúdo ativo no armazenamento local/público ([#9437](https://github.com/nocobase/nocobase/pull/9437)) por @mytharcher
- **[Departamentos]** corrige conflito de tradução entre os botões adicionar usuário e adicionar departamento nas configurações de Usuários e Permissões ([#9456](https://github.com/nocobase/nocobase/pull/9456)) por @katherinehhh
- **[Bloco: Markdown]** Corrige o problema de erro de relatório do bloco Markdown v2 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) por @zhangzhonghe
- **[Fluxo de trabalho]** correção: restaurar texto de ajuda em diálogos de vinculação de fluxo de trabalho FlowModel para eventos de ação personalizada e operação ([#9447](https://github.com/nocobase/nocobase/pull/9447)) por @mytharcher
- **[Funcionários IA]** Corrigido teste de voo do Ollama exigindo entrada de chave ([#9450](https://github.com/nocobase/nocobase/pull/9450)) por @cgyrock
- **[Fluxo de trabalho: Aprovação]**

  - Corrige índice de registro de aprovação duplicado ao delegar tarefas de aprovação. por @mytharcher
  - Corrige o layout do formulário de aprovação em dispositivos móveis por @zhangzhonghe
- **[Gerenciador de backup]** Corrigido um problema em que os backups falhavam com um erro quando os arquivos não podiam ser encontrados. por @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Data de lançamento: 2026-05-12*

### 🎉 Novos Recursos

- **[client]**
  - Adiciona suporte a regras de vinculação para itens de menu de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe
  - adiciona variável de idioma do usuário atual na v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh

### 🚀 Melhorias

- **[client-v2]** Filtrar menus v1 no layout v2 e mostrar apenas menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
- **[undefined]** suporta env atual com escopo de sessão no nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos
- **[Funcionários IA]** Funcionário IA suporta processamento paralelo de múltiplas conversas ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock
- **[Departamentos]** otimiza o estilo da lista de departamentos adicionando ícones e ajustando espaçamento ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Correções de Bugs

- **[build]** Corrige falha de build do plugin quando o código do cliente v1 importa a entrada `/client-v2` de outro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[client]**

  - oculta o componente de subtabela para campos de associação muitos-para-muitos na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
  - Corrigido um problema intermitente em que as regras de vinculação do botão de ação falhavam ao entrar em vigor. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
- **[Gerenciador de coleção gráfica]** corrige erro de filtro de ação de atualização no layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Bloco: Árvore]** Configurações de bloco de filtro de árvore melhoradas e corrigidas associação não suportada, fallback de campo de título e comportamento de redefinição de pesquisa. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Data de lançamento: 2026-05-10*

### 🎉 Novos Recursos

- **[client]** adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh
- **[mecanismo-de-fluxo]** Migrar `plugin-environment-variables` para client-v2 com uma página de configurações baseada em React e uma variável de tempo de execução `$env` registrada globalmente; adicionar uma entrada client-v2 para `plugin-file-manager` com uma página de configuração de armazenamento baseada em React e campo de upload, ação de upload e visualização baseados em FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema em que o código JS não podia mais ser editado depois que um campo JS era definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corrige o problema em que as abas da página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corrigido um problema em que as atribuições de campo de subtabela não surtiam efeito nas regras de vinculação de campo. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
  - Corrigido um problema em que o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
- **[Campo de coleção: Markdown(Vditor)]** corrige dica de ferramenta do campo markdown sendo ocultada no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Mobile (obsoleto)]** Corrige popups de mensagem do celular que não podiam ser fechados ou rolados ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o campo JS aparece nas configurações do processo de aprovação por @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Data de lançamento: 2026-05-09*

### 🎉 Novos Recursos

- **[server]** Funcionários IA podem pesquisar documentação empacotada com comandos Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) por @2013xile
- **[Funcionários IA]** Nó de funcionário IA do fluxo de trabalho suporta carregar arquivos de campos de anexo. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
- **[Cópia de texto]** suporta opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh

### 🚀 Melhorias

- **[client]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher
- **[Bloco: Kanban]** Consistência de espaçamento de campo de detalhe v2 melhorada e espaçamento de cartão kanban e coluna melhor adaptado às configurações de tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
- **[Funcionários IA]** Ferramentas de edição RunJS do Nathan melhoradas e redução de lag durante longas conversas de chat IA ([#9311](https://github.com/nocobase/nocobase/pull/9311)) por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o comportamento de validação de campo obrigatório para formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]** Corrigidas mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[client]**

  - Corrige formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corrige o erro ao filtrar campos escalares com filtros personalizados de múltipla seleção ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
  - Corrige nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - corrige adaptação do DividerItem ao tema na v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - Corrige o problema em que as regras de vinculação da subtabela v1 alteram incorretamente os estilos de campo obrigatório ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - Corrigidos campos `Oculto (valor reservado)` em blocos de formulário para que permaneçam visíveis no modo Editor de IU e restaurado o suporte de entrada de valor para atribuí-los em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - Corrigido o gatilho de fluxo de trabalho em massa da tabela v2 para que a seleção de linha permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
- **[client-v2]**

  - Corrigido erro ao selecionar campos de associação nas configurações de campo. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Corrige o problema em que uma página 404 pisca após o aplicativo iniciar ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
- **[server]** Corrigidas requisições de descoberta OAuth de sub-aplicativo sendo roteadas como requisições do aplicativo principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
- **[Fonte de dados: Principal]** Corrigidas tabelas de banco de dados importadas usando o nome de tabela prefixado errado quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Notificação: Mensagem no aplicativo]** Corrigido um problema em que a lista de mensagens no aplicativo não era atualizada após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Gerenciador de fonte de dados]** impedir edição e exclusão de todos os registros em permissões de escopo personalizadas para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[IA: Servidor MCP]** Corrigido empacotamento do servidor MCP para que dependências de tempo de execução sejam incluídas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
- **[Mecanismo de fluxo]** Corrigido um problema em que blocos gerados por IA não podiam ser convertidos de modelos de referência de volta para modelos duplicados. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Ação: Importar registros Pro]** Corrige o problema em que a verificação de duplicidade no campo de data sempre falha por @mytharcher
- **[Política de senha]** Corrigido um problema em que usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que a gaveta de seleção de registro fica obscurecida na configuração do fluxo de trabalho de aprovação por @zhangzhonghe
- **[Gerenciador de backup]** corrige adaptação de schema pg por @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Data de lançamento: 2026-05-08*

### 🎉 Novos Recursos

- **[client]** adiciona ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Visualização de dados]** Adiciona suporte client-v2 para plugins de bloco ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Melhorias

- **[undefined]** pular versões já publicadas no pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn

### 🐛 Correções de Bugs

- **[client-v2]**

  - Corrige o problema em que algumas páginas v2 falham ao carregar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
  - Corrige os problemas de placeholder de arrastar e posição de soltar do bloco de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
- **[client]**

  - Corrigidas regras de vinculação que não foram reexecutadas após a alteração dos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - corrige campo de opção obrigatório na subtabela não validado corretamente na primeira seleção no celular ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - corrige ocultar opção de criação rápida para campo de seleção de associação na subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corrige o problema em que as variáveis de parâmetro de consulta de URL se tornam inválidas após alternar páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
  - corrige renderização incorreta de dados no bloco de cartão de grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
- **[server]** validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[undefined]** Corrigir links quebrados na documentação traduzida e habilitar detecção de links quebrados por padrão na build da documentação. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
- **[Funcionários IA]**

  - Corrige erro de leitura de anexo de campo de associações pelo nó de funcionário IA no fluxo de trabalho ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Corrige nó de funcionário IA do fluxo de trabalho não terminando corretamente após a atribuição da ferramenta. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
- **[Bloco: Kanban]**

  - Estilo compacto do cartão Kanban melhorado e seleção de template de popup de criação rápida otimizada. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - corrige quebra de palavra única em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
  - Corrigidos blocos associados kanban usando parâmetros de recurso de tempo de execução não resolvidos em contextos de popup ou página secundária. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) por @jiannx
- **[Ação: Requisição personalizada]** atualizar koa para v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Campo de coleção: Fórmula]** corrige campo de fórmula na subtabela v2 não acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
- **[Gerenciador de e-mail]** Corrigido a exibição do título das identidades de e-mail por @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Data de lançamento: 2026-05-12*

### 🚀 Melhorias

- **[Funcionários IA]** Funcionário IA suporta processamento paralelo de múltiplas conversas ([#9344](https://github.com/nocobase/nocobase/pull/9344)) por @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Data de lançamento: 2026-05-11*

### 🎉 Novos Recursos

- **[client]**
  - adiciona variável de idioma do usuário atual na v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) por @katherinehhh
  - Adiciona suporte a regras de vinculação para itens de menu de página ([#9304](https://github.com/nocobase/nocobase/pull/9304)) por @zhangzhonghe

### 🚀 Melhorias

- **[client-v2]** Filtrar menus v1 no layout v2 e mostrar apenas menus v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) por @zhangzhonghe
- **[Departamentos]** otimiza o estilo da lista de departamentos adicionando ícones e ajustando espaçamento ([#9435](https://github.com/nocobase/nocobase/pull/9435)) por @katherinehhh

### 🐛 Correções de Bugs

- **[build]** Corrige falha de build do plugin quando o código do cliente v1 importa a entrada `/client-v2` de outro plugin. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) por @Molunerfinn
- **[client]**

  - Corrigido um problema intermitente em que as regras de vinculação do botão de ação falhavam ao entrar em vigor. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) por @gchust
  - oculta o componente de subtabela para campos de associação muitos-para-muitos na subtabela v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) por @katherinehhh
- **[Gerenciador de coleção gráfica]** corrige erro de filtro de ação de atualização no layout automático da interface gráfica ([#9421](https://github.com/nocobase/nocobase/pull/9421)) por @katherinehhh
- **[Bloco: Árvore]** Configurações de bloco de filtro de árvore melhoradas e corrigidas associação não suportada, fallback de campo de título e comportamento de redefinição de pesquisa. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) por @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Data de lançamento: 2026-05-10*

### 🎉 Novos Recursos

- **[client]** adiciona opção de limite de intervalo de datas para campos de data em formulários v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) por @katherinehhh
- **[mecanismo-de-fluxo]** Migrar `plugin-environment-variables` para client-v2 com uma página de configurações baseada em React e uma variável de tempo de execução `$env` registrada globalmente; adicionar uma entrada client-v2 para `plugin-file-manager` com uma página de configuração de armazenamento baseada em React e campo de upload, ação de upload e visualização baseados em FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) por @Molunerfinn

### 🚀 Melhorias

- **[undefined]** suporta env atual com escopo de sessão no nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) por @chenos

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema em que o popup de valor padrão para campos de associação no formulário de criação era exibido incorretamente. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) por @gchust
  - Corrigido um problema em que o código JS não podia mais ser editado depois que um campo JS era definido como somente leitura. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) por @gchust
  - Corrige o problema em que as abas da página v2 não sincronizam imediatamente após salvar as configurações ([#9396](https://github.com/nocobase/nocobase/pull/9396)) por @zhangzhonghe
  - Corrigido um problema em que as atribuições de campo de subtabela não surtiam efeito nas regras de vinculação de campo. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) por @gchust
- **[Campo de coleção: Markdown(Vditor)]** corrige dica de ferramenta do campo markdown sendo ocultada no layout de formulário horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) por @katherinehhh
- **[Cliente WEB]** Corrige filtragem de tipo de rota ao usar rótulos traduzidos ([#9425](https://github.com/nocobase/nocobase/pull/9425)) por @zhangzhonghe
- **[Mobile (obsoleto)]** Corrige popups de mensagem do celular que não podiam ser fechados ou rolados ([#9424](https://github.com/nocobase/nocobase/pull/9424)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o campo JS aparece nas configurações do processo de aprovação por @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Data de lançamento: 2026-05-09*

### 🎉 Novos Recursos

- **[client]** adiciona ações de associar e desassociar ao bloco de associação ([#9366](https://github.com/nocobase/nocobase/pull/9366)) por @katherinehhh
- **[Cópia de texto]** suporta opção "Exibir botão de cópia" para campo de texto somente leitura ([#9394](https://github.com/nocobase/nocobase/pull/9394)) por @katherinehhh
- **[Funcionários IA]** Nó de funcionário IA do fluxo de trabalho suporta carregar arquivos de campos de anexo. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) por @cgyrock
- **[Visualização de dados]** Adiciona suporte client-v2 para plugins de bloco ([#9297](https://github.com/nocobase/nocobase/pull/9297)) por @zhangzhonghe

### 🚀 Melhorias

- **[client]** Permitir atribuir valor de campo para campo de sequência ([#9397](https://github.com/nocobase/nocobase/pull/9397)) por @mytharcher
- **[undefined]** pular versões já publicadas no pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) por @Molunerfinn
- **[Bloco: Kanban]** Consistência de espaçamento de campo de detalhe v2 melhorada e espaçamento de cartão kanban e coluna melhor adaptado às configurações de tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige o comportamento de validação de campo obrigatório para formulários de aprovação por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**

  - Corrige formulários de filtro que não podiam ser recolhidos ([#9386](https://github.com/nocobase/nocobase/pull/9386)) por @zhangzhonghe
  - Corrigido o gatilho de fluxo de trabalho em massa da tabela v2 para que a seleção de linha permaneça consistente após redirecionar entre abas e as linhas possam ser selecionadas novamente após retornar ([#9388](https://github.com/nocobase/nocobase/pull/9388)) por @jiannx
  - Corrigidos campos `Oculto (valor reservado)` em blocos de formulário para que permaneçam visíveis no modo Editor de IU e restaurado o suporte de entrada de valor para atribuí-los em Atribuição de campo ([#9373](https://github.com/nocobase/nocobase/pull/9373)) por @jiannx
  - corrige adaptação do DividerItem ao tema na v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) por @katherinehhh
  - Corrige nomes de arquivo de download incorretos para campos AttachmentURL quando os metadados do arquivo estão ausentes. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) por @mytharcher
  - Corrige o erro ao filtrar campos escalares com filtros personalizados de múltipla seleção ([#9387](https://github.com/nocobase/nocobase/pull/9387)) por @zhangzhonghe
  - Corrigidas regras de vinculação que não foram reexecutadas após a alteração dos valores do formulário. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) por @gchust
  - Corrige o problema em que as regras de vinculação da subtabela v1 alteram incorretamente os estilos de campo obrigatório ([#9364](https://github.com/nocobase/nocobase/pull/9364)) por @zhangzhonghe
  - corrige renderização incorreta de dados no bloco de cartão de grade após atualização e recarregamento ([#9351](https://github.com/nocobase/nocobase/pull/9351)) por @katherinehhh
  - corrige campo de opção obrigatório na subtabela não validado corretamente na primeira seleção no celular ([#9352](https://github.com/nocobase/nocobase/pull/9352)) por @katherinehhh
  - corrige ocultar opção de criação rápida para campo de seleção de associação na subtabela v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) por @katherinehhh
  - Corrige o problema em que as variáveis de parâmetro de consulta de URL se tornam inválidas após alternar páginas em cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) por @zhangzhonghe
- **[mecanismo-de-fluxo]** Corrigidas mensagens de validação de campo de tabela de dados não traduzidas em formulários de fluxo v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) por @jiannx
- **[server]**

  - Corrigidas requisições de descoberta OAuth de sub-aplicativo sendo roteadas como requisições do aplicativo principal ([#9383](https://github.com/nocobase/nocobase/pull/9383)) por @2013xile
  - validar nomes de pacotes de plugins antes de operações no sistema de arquivos ([#9367](https://github.com/nocobase/nocobase/pull/9367)) por @chenos
- **[client-v2]**

  - Corrigido erro ao selecionar campos de associação nas configurações de campo. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) por @gchust
  - Corrige o problema em que uma página 404 pisca após o aplicativo iniciar ([#9365](https://github.com/nocobase/nocobase/pull/9365)) por @zhangzhonghe
  - Corrige os problemas de placeholder de arrastar e posição de soltar do bloco de página v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) por @zhangzhonghe
  - Corrige o problema em que algumas páginas v2 falham ao carregar plugins remotos ([#9369](https://github.com/nocobase/nocobase/pull/9369)) por @zhangzhonghe
- **[undefined]** Corrigir links quebrados na documentação traduzida e habilitar detecção de links quebrados por padrão na build da documentação. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) por @Molunerfinn
- **[Notificação: Mensagem no aplicativo]** Corrigido um problema em que a lista de mensagens no aplicativo não era atualizada após receber notificações em tempo real ([#9409](https://github.com/nocobase/nocobase/pull/9409)) por @mytharcher
- **[Gerenciador de fonte de dados]** impedir edição e exclusão de todos os registros em permissões de escopo personalizadas para fontes de dados externas ([#9395](https://github.com/nocobase/nocobase/pull/9395)) por @katherinehhh
- **[IA: Servidor MCP]** Corrigido empacotamento do servidor MCP para que dependências de tempo de execução sejam incluídas ([#9401](https://github.com/nocobase/nocobase/pull/9401)) por @2013xile
- **[Fonte de dados: Principal]** Corrigidas tabelas de banco de dados importadas usando o nome de tabela prefixado errado quando um prefixo de tabela está habilitado ([#9403](https://github.com/nocobase/nocobase/pull/9403)) por @2013xile
- **[Mecanismo de fluxo]** Corrigido um problema em que blocos gerados por IA não podiam ser convertidos de modelos de referência de volta para modelos duplicados. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) por @gchust
- **[Funcionários IA]**

  - Corrige erro de leitura de anexo de campo de associações pelo nó de funcionário IA no fluxo de trabalho ([#9377](https://github.com/nocobase/nocobase/pull/9377)) por @cgyrock
  - Corrige nó de funcionário IA do fluxo de trabalho não terminando corretamente após a atribuição da ferramenta. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) por @cgyrock
- **[Ação: Requisição personalizada]** atualizar koa para v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) por @chenos
- **[Bloco: Kanban]**

  - Estilo compacto do cartão Kanban melhorado e seleção de template de popup de criação rápida otimizada. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) por @jiannx
  - corrige quebra de palavra única em campo de texto longo do bloco kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) por @katherinehhh
- **[Campo de coleção: Fórmula]** corrige campo de fórmula na subtabela v2 não acionado para cálculo automático ([#9354](https://github.com/nocobase/nocobase/pull/9354)) por @katherinehhh
- **[Ação: Importar registros Pro]** Corrige o problema em que a verificação de duplicidade no campo de data sempre falha por @mytharcher
- **[Política de senha]** Corrigido um problema em que usuários bloqueados permanentemente podiam fazer login após uma reinicialização do serviço por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que a gaveta de seleção de registro fica obscurecida na configuração do fluxo de trabalho de aprovação por @zhangzhonghe
- **[Gerenciador de e-mail]** Corrigido a exibição do título das identidades de e-mail por @jiannx
- **[Gerenciador de backup]** corrige adaptação de schema pg por @Andrew1989Y
