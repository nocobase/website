---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para modelos de bloco em formulários de processo de aprovação, melhorias nos fluxos de trabalho e correções de bugs."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Data de lançamento: 27/03/2025*

#### 🚀 Melhorias

- **[cliente]**

  - Otimizar mensagem de erro 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Suportar apenas arquivos de texto simples para visualização ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
- **[Campo de coleção: Sequência]** suportar a definição de sequência como campo de título para bloco de calendário ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Suportar pular validador nas configurações por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - problema com a exibição do campo de data na filtragem de escopo de dados ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - A opção 'Conteúdo excedente com reticências' requer uma atualização de página para que o estado de alternância entre em vigor ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - Incapacidade de abrir outro modal dentro de um modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
- **[Documentação da API]** Página de documento da API não pode rolar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Fluxo de trabalho]** Garantir que a chave do fluxo de trabalho seja gerada antes de salvar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
- **[Fluxo de trabalho: Evento pós-ação]** Registros múltiplos em ação em massa devem disparar várias vezes ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Autenticação]** Problema de localização para campos da página de cadastro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Formulários públicos]** problema com o título da página do formulário público exibindo 'Carregando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Data de lançamento: 27/03/2025*

#### 🐛 Correções de Bugs

- **[Bloco: Formulário multi-etapas]**

  - o botão de envio tem a mesma cor no estado padrão e destacado por @jiannx
  - corrigido o bug em que a redefinição do formulário é inválida quando o campo está associado a outro campo por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrigir valores do formulário de aprovação para enviar por @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Data de lançamento: 28/03/2025*

#### 🚀 Melhorias

- **[Gerenciador de tarefas assíncronas]** otimizar botões de importação/exportação no Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos
- **[Ação: Exportar registros Pro]** otimizar botões de importação/exportação no Pro por @katherinehhh
- **[Gerenciador de migração]** permitir pular backup e restauração automáticos para migração por @gchust

#### 🐛 Correções de Bugs

- **[cliente]** conflito de vinculação entre campos de associação com o mesmo nome em diferentes sub-tabelas dentro do mesmo formulário ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh
- **[Ação: Edição em lote]** Clique no botão de edição em lote, configure a janela pop-up e abra-a novamente; a janela pop-up fica em branco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Data de lançamento: 29/03/2025*

#### 🐛 Correções de Bugs

- **[Calendário]** dados ausentes em datas limite na visualização de calendário semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh
- **[Auth: OIDC]** Ocorre um redirecionamento incorreto quando o caminho de callback é a string 'null' por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrigir configuração do nó de aprovação incorreta após alteração do esquema por @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Data de lançamento: 01/04/2025*

#### 🚀 Melhorias

- **[banco de dados]**

  - Adicionar opção de trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher
  - Adicionar opção de trim para campo de string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher
- **[Gerenciador de arquivos]** Adicionar opção de trim para campos de texto da coleção de armazenamentos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher
- **[Fluxo de trabalho]** Melhorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Suportar o uso de modelo de bloco para o formulário do processo de aprovação por @mytharcher

#### 🐛 Correções de Bugs

- **[banco de dados]** Evitar alterações no campo "datetimeNoTz" quando o valor não for alterado ao atualizar registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher
- **[cliente]**

  - campo de associação (seleção) exibindo N/A ao expor campos de coleção relacionada ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh
  - Corrigir propriedade `disabled` não funcionando quando `SchemaInitializerItem` tem `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher
  - problema em cascata: 'O valor de xxx não pode estar no formato de array' ao excluir e reselecionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Problema de filtragem por campos em uma coleção de associação com um campo muitos para muitos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile
- **[Formulários públicos]** Permissões de visualização incluem list e get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos
- **[Autenticação]** atribuição de token em `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile
- **[Fluxo de trabalho]** Corrigir exibição incorreta da opção de sincronização ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher
- **[Bloco: Mapa]** a validação do gerenciamento de mapa não deve passar com entrada de espaço ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir variáveis do cliente para usar no formulário de aprovação por @mytharcher
  - Corrigir modo de branch quando `endOnReject` configurado como `true` por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Data de lançamento: 27/03/2025*

#### 🎉 Novos Recursos

- **[cliente]** Suportar configuração de variável após o envio, permitindo redirecionamento com o ID de dados atual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** Vditor suporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

#### 🚀 Melhorias

- **[cliente]**

  - Suportar apenas arquivos de texto simples para visualização ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
  - Otimizar mensagem de erro 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Restringir ações disponíveis para diferentes propriedades de campo em regras de vinculação ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh
- **[Gerenciador de arquivos]** Ajustar API `getFileData` do armazenamento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher
- **[Controle de acesso]** Otimizar a ordem e o estilo da troca de função ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie
- **[Campo de coleção: Sequência]** suportar a definição de sequência como campo de título para bloco de calendário ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Fluxo de trabalho]** Dividir colunas executadas em tabelas de estatísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Dividir colunas executadas em tabelas de estatísticas por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Dividir colunas executadas em tabelas de estatísticas por @mytharcher
  - Suportar pular validador nas configurações por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Versões mais antigas de navegadores exibirão uma página em branco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe
  - A opção 'Conteúdo excedente com reticências' requer uma atualização de página para que o estado de alternância entre em vigor ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - problema com a exibição do campo de data na filtragem de escopo de dados ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - Incapacidade de abrir outro modal dentro de um modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
  - A ação Salvar como modelo falhará se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - O menu superior da página está exibindo em branco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe
  - atribuição de campo com valor nulo é ineficaz ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
- **[Fluxo de trabalho]**

  - Garantir que a chave do fluxo de trabalho seja gerada antes de salvar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
  - Corrigir erro lançado ao configurar opções de exclusão automática ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher
- **[Formulários públicos]** problema com o título da página do formulário público exibindo 'Carregando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh
- **[Mobile]** Ajustar o tamanho da fonte exibida no telefone para 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe
- **[Variáveis e segredos]** botão de filtro de ícone ausente, contagem de filtro não exibindo e dados não atualizando após filtrar ao alternar páginas ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh
- **[Autenticação]** Problema de localização para campos da página de cadastro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Documentação da API]** Página de documento da API não pode rolar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento pós-ação]** Registros múltiplos em ação em massa devem disparar várias vezes ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Bloco: modelo]**

  - regras de vinculação do bloco de formulário não foram sincronizadas corretamente do modelo ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust
  - menu duplicado Salvar como modelo no bloco de detalhes ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust
- **[Fluxo de trabalho: Aprovação]** Corrigir valores do formulário de aprovação para enviar por @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Data de lançamento: 27/03/2025*

#### 🐛 Correções de Bugs

- **[Bloco: Formulário multi-etapas]** o botão de envio tem a mesma cor no estado padrão e destacado por @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Data de lançamento: 28/03/2025*

#### 🎉 Novos Recursos

- **[Bloco: Painel de ação]** adicionar um callback onScanSuccess para lidar com digitalizações bem-sucedidas e sair da interface da câmera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

#### 🚀 Melhorias

- **[Gerenciador de tarefas assíncronas]** otimizar botões de importação/exportação no Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos
- **[Ação: Exportar registros Pro]** otimizar botões de importação/exportação no Pro por @katherinehhh
- **[Gerenciador de migração]** permitir pular backup e restauração automáticos para migração por @gchust

#### 🐛 Correções de Bugs

- **[cliente]** conflito de vinculação entre campos de associação com o mesmo nome em diferentes sub-tabelas dentro do mesmo formulário ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh
- **[Calendário]** dados ausentes em datas limite na visualização de calendário semanal ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh
- **[Controle de acesso]** Atribuição de função atual incorreta durante o login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie
- **[Ação: Edição em lote]** Clique no botão de edição em lote, configure a janela pop-up e abra-a novamente; a janela pop-up fica em branco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe
- **[Bloco: Formulário multi-etapas]** corrigido o bug em que a redefinição do formulário é inválida quando o campo está associado a outro campo por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrigir configuração do nó de aprovação incorreta após alteração do esquema por @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Data de lançamento: 01/04/2025*

#### 🚀 Melhorias

- **[banco de dados]**

  - Adicionar opção de trim para campo de texto ([#6603](https://github.com/nocobase/nocobase/pull/6603)) por @mytharcher
  - Adicionar opção de trim para campo de string ([#6565](https://github.com/nocobase/nocobase/pull/6565)) por @mytharcher
- **[cliente]** suportar a configuração da visibilidade dos dois-pontos nos rótulos dos campos do formulário com base no layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) por @katherinehhh
- **[Gerenciador de arquivos]** Adicionar opção de trim para campos de texto da coleção de armazenamentos ([#6604](https://github.com/nocobase/nocobase/pull/6604)) por @mytharcher
- **[Fluxo de trabalho]** Melhorar código ([#6589](https://github.com/nocobase/nocobase/pull/6589)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Suportar o uso de modelo de bloco para o formulário do processo de aprovação por @mytharcher

#### 🐛 Correções de Bugs

- **[banco de dados]**

  - Evitar alterações no campo "datetimeNoTz" quando o valor não for alterado ao atualizar registro ([#6588](https://github.com/nocobase/nocobase/pull/6588)) por @mytharcher
  - Ao excluir registros um-para-muitos, tanto `filter` quanto `filterByTk` são passados e `filter` inclui um campo de associação, o `filterByTk` é ignorado ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile
- **[cliente]**

  - Corrigir propriedade `disabled` não funcionando quando `SchemaInitializerItem` tem `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) por @mytharcher
  - problema em cascata: 'O valor de xxx não pode estar no formato de array' ao excluir e reselecionar ([#6585](https://github.com/nocobase/nocobase/pull/6585)) por @katherinehhh
  - campo de associação (seleção) exibindo N/A ao expor campos de coleção relacionada ([#6582](https://github.com/nocobase/nocobase/pull/6582)) por @katherinehhh
  - botões de enviar e atualizar não exibindo o modo somente ícone corretamente ([#6592](https://github.com/nocobase/nocobase/pull/6592)) por @katherinehhh
- **[Formulários públicos]** Permissões de visualização incluem list e get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) por @chenos
- **[Autenticação]** atribuição de token em `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Problema de filtragem por campos em uma coleção de associação com um campo muitos para muitos (array) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) por @2013xile
- **[Fluxo de trabalho]** Corrigir exibição incorreta da opção de sincronização ([#6595](https://github.com/nocobase/nocobase/pull/6595)) por @mytharcher
- **[Bloco: Mapa]** a validação do gerenciamento de mapa não deve passar com entrada de espaço ([#6575](https://github.com/nocobase/nocobase/pull/6575)) por @katherinehhh
- **[Auth: OIDC]** Ocorre um redirecionamento incorreto quando o caminho de callback é a string 'null' por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir variáveis do cliente para usar no formulário de aprovação por @mytharcher
  - Corrigir modo de branch quando `endOnReject` configurado como `true` por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Data de lançamento: 25/03/2025*

#### 🎉 Novos Recursos

- **[cliente]** Suportar configuração de variável após o envio, permitindo redirecionamento com o ID de dados atual ([#6465](https://github.com/nocobase/nocobase/pull/6465)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** Vditor suporta S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) por @zhangzhonghe

#### 🚀 Melhorias

- **[cliente]**

  - Suportar apenas arquivos de texto simples para visualização ([#6563](https://github.com/nocobase/nocobase/pull/6563)) por @mytharcher
  - Otimizar mensagem de erro 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) por @chenos
  - Restringir ações disponíveis para diferentes propriedades de campo em regras de vinculação ([#6548](https://github.com/nocobase/nocobase/pull/6548)) por @katherinehhh
- **[Fluxo de trabalho]** Dividir colunas executadas em tabelas de estatísticas ([#6534](https://github.com/nocobase/nocobase/pull/6534)) por @mytharcher
- **[Mobile]** Adaptar o estilo do pop-up de notificação para dispositivos móveis ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Campo de coleção: Sequência]** suportar a definição de sequência como campo de título para bloco de calendário ([#6562](https://github.com/nocobase/nocobase/pull/6562)) por @katherinehhh
- **[Gerenciador de arquivos]** Ajustar API `getFileData` do armazenamento ([#6553](https://github.com/nocobase/nocobase/pull/6553)) por @mytharcher
- **[Controle de acesso]** Otimizar a ordem e o estilo da troca de função ([#6555](https://github.com/nocobase/nocobase/pull/6555)) por @aaaaaajie
- **[Formulários públicos]** definir o título da página do formulário público para o título configurado na criação ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Dividir colunas executadas em tabelas de estatísticas por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Suportar pular validador nas configurações por @mytharcher
  - Dividir colunas executadas em tabelas de estatísticas por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Versões mais antigas de navegadores exibirão uma página em branco ([#6571](https://github.com/nocobase/nocobase/pull/6571)) por @zhangzhonghe
  - Incapacidade de abrir outro modal dentro de um modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) por @zhangzhonghe
  - A opção 'Conteúdo excedente com reticências' requer uma atualização de página para que o estado de alternância entre em vigor ([#6520](https://github.com/nocobase/nocobase/pull/6520)) por @zhangzhonghe
  - problema com a exibição do campo de data na filtragem de escopo de dados ([#6564](https://github.com/nocobase/nocobase/pull/6564)) por @katherinehhh
  - O menu superior da página está exibindo em branco ([#6551](https://github.com/nocobase/nocobase/pull/6551)) por @zhangzhonghe
  - A ação Salvar como modelo falhará se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - Incapacidade de usar a variável 'Usuário Atual' ao adicionar uma página de link ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - atribuição de campo com valor nulo é ineficaz ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
  - A ação Salvar como modelo falhará se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
  - Remover a opção 'Permitir seleção múltipla' de campos de seleção única suspensa em formulários de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - A vinculação de intervalo de dados do campo relacional não é eficaz ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
  - Erro no comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - problema de arrastar e soltar do botão de linha da tabela ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh
- **[Mobile]** Ajustar o tamanho da fonte exibida no telefone para 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) por @zhangzhonghe
- **[Fluxo de trabalho]**

  - Corrigir erro lançado ao configurar opções de exclusão automática ([#6560](https://github.com/nocobase/nocobase/pull/6560)) por @mytharcher
  - Garantir que a chave do fluxo de trabalho seja gerada antes de salvar ([#6567](https://github.com/nocobase/nocobase/pull/6567)) por @mytharcher
- **[Variáveis e segredos]** botão de filtro de ícone ausente, contagem de filtro não exibindo e dados não atualizando após filtrar ao alternar páginas ([#6568](https://github.com/nocobase/nocobase/pull/6568)) por @katherinehhh
- **[Formulários públicos]** problema com o título da página do formulário público exibindo 'Carregando...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) por @katherinehhh
- **[Documentação da API]** Página de documento da API não pode rolar ([#6566](https://github.com/nocobase/nocobase/pull/6566)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento pós-ação]** Registros múltiplos em ação em massa devem disparar várias vezes ([#6559](https://github.com/nocobase/nocobase/pull/6559)) por @mytharcher
- **[Bloco: modelo]**

  - menu duplicado Salvar como modelo no bloco de detalhes ([#6558](https://github.com/nocobase/nocobase/pull/6558)) por @gchust
  - regras de vinculação do bloco de formulário não foram sincronizadas corretamente do modelo ([#6550](https://github.com/nocobase/nocobase/pull/6550)) por @gchust
- **[Autenticação]** Problema de localização para campos da página de cadastro ([#6556](https://github.com/nocobase/nocobase/pull/6556)) por @2013xile
- **[Ação: Solicitação personalizada]** Incapacidade de baixar arquivos codificados em UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile
- **[Coleção: Árvore]** Problema de migração para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Bloco: Formulário multi-etapas]** o botão de envio tem a mesma cor no estado padrão e destacado por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrigir valores do formulário de aprovação para enviar por @mytharcher
