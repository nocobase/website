---
title: "Atualizações Semanais do NocoBase: Suporte à união de funções de usuário"
description: "As atualizações desta semana incluem: suporte a variáveis de ambiente em URLs de botões de link, campos de texto longo habilitados como campos de título para campos de associação e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Data de lançamento: 2025-03-20*

#### 🚀 Melhorias

- **[Workflow: nó de e-mail]** Adicionar descrição da configuração do campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Notificação: E-mail]** Adicionar descrição da configuração do campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Calendário]** Plugin de calendário com configurações opcionais para ativar ou desativar a criação rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

#### 🐛 Correções de Bugs

- **[cliente]** erro de envio de campo de hora no locale chinês (sintaxe de entrada inválida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
- **[Gerenciador de arquivos]** Incapacidade de acessar arquivos armazenados no COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
- **[Bloco: Mapa]** campos de chave secreta não acionando validação no gerenciamento de mapas ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Cliente WEB]** O caminho na tabela de gerenciamento de rotas é diferente do caminho real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe
- **[Ação: Exportar registros Pro]** Incapacidade de exportar anexos por @chenos
- **[Workflow: Aprovação]**

  - Corrigir falha causada por usuário nulo por @mytharcher
  - Corrigir erro lançado ao adicionar resultado de nó de consulta por @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Data de lançamento: 2025-03-22*

#### 🐛 Correções de Bugs

- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[cliente]** a altura da subtabela no formulário é definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
- **[Autenticação]**

  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
  - Aparar opções do autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
- **[Bloco: Mapa]** problema de gerenciamento de chaves do bloco de mapa causando falhas de requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
- **[Gerenciador de backup]** A restauração pode causar erros de execução do workflow por @gchust
- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar a configuração de notificação. por @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Data de lançamento: 2025-03-23*

#### 🐛 Correções de Bugs

- **[cliente]** transparência do botão de ação causando problema de exibição de configuração ao passar o mouse ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Data de lançamento: 2025-03-25*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Incapacidade de usar a variável 'Usuário Atual' ao adicionar uma página de link ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - Atribuição de valor "nulo" a campos é ineficaz ([#6549](https://github.com/nocobase/nocobase/pull/6549)) por @katherinehhh
  - Erro no comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - Remover a opção 'Permitir seleção múltipla' de campos de seleção única suspensa em formulários de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - O vínculo de intervalo de dados do campo relacional não é eficaz ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
- **[Coleção: Árvore]** Problema de migração para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Ação: Requisição personalizada]** Incapacidade de baixar arquivos codificados em UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Data de lançamento: 2025-03-19*

#### 🚀 Melhorias

- **[Calendário]** Plugin de calendário com configurações opcionais para ativar ou desativar a criação rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

#### 🐛 Correções de Bugs

- **[cliente]**

  - botão adicionar filho não exibindo modo apenas ícone ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh
  - campo de regra de vínculo oculto por padrão com valor retido não funcionando ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh
- **[Bloco: Painel de ações]** problema de layout no painel de ações móvel após ocultar botões devido ao controle de permissão ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh
- **[Cliente WEB]** O caminho na tabela de gerenciamento de rotas é diferente do caminho real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Data de lançamento: 2025-03-23*

#### 🎉 Novos Recursos

- **[cliente]** Suportar configurações de Estilo de campo para tamanho da fonte, peso da fonte e estilo da fonte ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh
- **[Variáveis e segredos]** suportar variáveis de ambiente na URL do botão de link ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

#### 🚀 Melhorias

- **[cliente]** suportar correspondência difusa para campos selecionados no botão de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh
- **[Workflow: nó de e-mail]** Adicionar descrição da configuração do campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Cliente WEB]** adicionar prompt de confirmação secundária para Limpar Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh
- **[Notificação: E-mail]** Adicionar descrição da configuração do campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Gerenciador de e-mail]** suportar reautorização e seleção automática da conta ao enviar um e-mail por @jiannx

#### 🐛 Correções de Bugs

- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[cliente]**

  - a altura da subtabela no formulário é definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
  - erro de envio de campo de hora no locale chinês (sintaxe de entrada inválida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
  - transparência do botão de ação causando problema de exibição de configuração ao passar o mouse ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh
- **[Autenticação]**

  - Aparar opções do autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
- **[Bloco: Mapa]**

  - problema de gerenciamento de chaves do bloco de mapa causando falhas de requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
  - campos de chave secreta não acionando validação no gerenciamento de mapas ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Gerenciador de arquivos]** Incapacidade de acessar arquivos armazenados no COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
- **[Ação: Exportar registros Pro]** Incapacidade de exportar anexos por @chenos
- **[Gerenciador de backup]** A restauração pode causar erros de execução do workflow por @gchust
- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar a configuração de notificação. por @2013xile
- **[Workflow: Aprovação]**

  - Corrigir erro na tabela de processo quando o job é excluído por @mytharcher
  - Corrigir erro lançado ao adicionar resultado de nó de consulta por @mytharcher
  - Corrigir falha causada por usuário nulo por @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Data de lançamento: 2025-03-25*

#### 🎉 Novos Recursos

- **[acl]** Suportar união de funções de usuário ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie
- **[cliente]**

  - suportar a extensão de campos predefinidos em coleções ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
  - Suportar extensão de operadores de filtro do frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
- **[Verificação]** Suportar vinculação de vários tipos de verificação pelo usuário, como SMS e autenticadores TOTP, e verificação de identidade em cenários necessários. Permitir desenvolvimento e extensão de métodos de verificação. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
  Referência: [Verificação](https://docs.nocobase.com/handbook/verification)
- **[Calendário]** Suporte para a extensão de campos opcionais para plugins de Kanban, Calendário e Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh
- **[Bloco: template]** Adicionar plugin `Bloco: template`, fornecendo suporte a template para blocos baseado em mecanismo de herança. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust
- **[plugin-demo-platform]** Definir skipAuthCheck da rota "/new" como true. por @sheldon66
- **[Autenticação de dois fatores (2FA)]** Novos plugins: Autenticação de dois fatores e Verificação: Autenticador TOTP por @2013xile
  Referência: [Autenticação de dois fatores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificação: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Melhorias

- **[cliente]**

  - Adicionar skipAuthCheck ao router.add para evitar redirecionamento para login em páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66
  - Atualizar dependências relacionadas ao ant design para 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) por @gchust
- **[utils]** Adaptação de página desktop para dispositivos móveis ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe
- **[Formulários públicos]** definir o título da página do formulário público como o título configurado no momento da criação ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh
- **[Gerenciador de arquivos]**

  - adicionar código backend para gerar url de pré-visualização de arquivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx
  - Alterar api de tipo de armazenamento e adicionar api de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
- **[Bloco: template]** Suportar salvar bloco de dados como template de bloco a partir da página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust
- **[Workflow]** Mover configurações de workflow vinculado para o plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - problema de arrastar e soltar botão de linha da tabela ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh
  - Incapacidade de usar a variável 'Usuário Atual' ao adicionar uma página de link ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe
  - O vínculo de intervalo de dados do campo relacional não é eficaz ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe
  - Remover a opção 'Permitir seleção múltipla' de campos de seleção única suspensa em formulários de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe
  - Erro no comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust
  - campos ausentes na configuração da regra de vínculo ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh
  - Conteúdo não é totalmente exibido em navegadores móveis ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe
  - Ao usar o operador '$anyOf', a regra de vínculo é inválida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe
  - formatação incorreta do campo de hora no formulário de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh
  - Estilo de entrada incorreto para configuração de valor padrão do formulário ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust
- **[utils]** Bug conhecido de 'responsividade desktop' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe
- **[acl]** Corrigido o problema em que os campos de relacionamento não são exibidos sob a união de funções. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie
- **[Coleção: Árvore]** Problema de migração para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile
- **[Ação: Requisição personalizada]** Incapacidade de baixar arquivos codificados em UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile
- **[Variáveis e segredos]** Botões não estão sendo mostrados no drawer de criar novas variáveis ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust
- **[Cliente WEB]** Substituir todas as instâncias de ctx.state.currentRole (função única) por ctx.state.currentRoles (suporta múltiplas funções). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie
- **[Controle de acesso]**

  - Erro quando o escopo de dados é definido como dados próprios e a tabela não possui um campo de criador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie
  - Corrigido que alternar funções não surtia efeito. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie
- **[Bloco: template]**

  - Opção Salvar como template não foi mostrada no bloco de dados da página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust
  - Comportamento incorreto de Salvar como template no cliente móvel ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust
  - Exigir login ao acessar formulário público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust
- **[Auth: Chaves de API]** Remoção da união da lista de funções do plugin de chaves de API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie
- **[Bloco: Formulário de múltiplas etapas]** o botão de envio tem a mesma cor em seu estado padrão e destacado por @jiannx
- **[Workflow: Aprovação]** Problema de estilo com o diálogo pop-up 'Aplicar novo' por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Data de lançamento: 2025-03-23*

#### 🎉 Novos Recursos

- **[cliente]**

  - suportar campos de texto longo como campos de título para campo de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
  - Suportar configurações de Estilo de campo para tamanho da fonte, peso da fonte e estilo da fonte ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh
- **[Variáveis e segredos]** suportar variáveis de ambiente na URL do botão de link ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh
- **[Workflow: Nó de agregação]** Suportar configurar precisão para resultado de agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🚀 Melhorias

- **[cliente]** suportar correspondência difusa para campos selecionados no botão de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh
- **[Notificação: E-mail]** Adicionar descrição da configuração do campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66
- **[Workflow: nó de e-mail]** Adicionar descrição da configuração do campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66
- **[Calendário]** Plugin de calendário com configurações opcionais para ativar ou desativar a criação rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038
- **[Cliente WEB]** adicionar prompt de confirmação secundária para Limpar Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh
- **[Gerenciador de e-mail]** suportar reautorização e seleção automática da conta ao enviar um e-mail por @jiannx

#### 🐛 Correções de Bugs

- **[cliente]**

  - transparência do botão de ação causando problema de exibição de configuração ao passar o mouse ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh
  - erro de envio de campo de hora no locale chinês (sintaxe de entrada inválida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh
  - a altura da subtabela no formulário é definida junto com a altura do formulário ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh
  - campo de regra de vínculo oculto por padrão com valor retido não funcionando ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh
  - botão adicionar filho não exibindo modo apenas ícone ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh
- **[servidor]** O comando de atualização pode causar erros no workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust
- **[utils]** Bug conhecido de 'responsividade desktop' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe
- **[avaliadores]** Reverter casas decimais arredondadas para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Autenticação]**

  - Aparar opções do autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile
  - X-Authenticator ausente ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos
- **[Bloco: Mapa]**

  - problema de gerenciamento de chaves do bloco de mapa causando falhas de requisição devido a caracteres invisíveis ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh
  - campos de chave secreta não acionando validação no gerenciamento de mapas ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh
- **[Gerenciador de arquivos]**

  - Incapacidade de acessar arquivos armazenados no COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos
  - codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Cliente WEB]** O caminho na tabela de gerenciamento de rotas é diferente do caminho real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe
- **[Bloco: Painel de ações]** problema de layout no painel de ações móvel após ocultar botões devido ao controle de permissão ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh
- **[Fonte de dados: Principal]** Incapacidade de criar uma visão MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Workflow]** Corrigir contagem de tarefas legadas após exclusão do workflow ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Ação: Exportar registros Pro]** Incapacidade de exportar anexos por @chenos
- **[Gerenciador de backup]**

  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do template de backup por @gchust
  - A restauração pode causar erros de execução do workflow por @gchust
  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust
- **[WeCom]** Resolver variáveis de ambiente e segredos ao recuperar a configuração de notificação. por @2013xile
- **[Workflow: Aprovação]**

  - Corrigir erro na tabela de processo quando o job é excluído por @mytharcher
  - Alterar aprovação retornada como tarefa pendente por @mytharcher
  - Corrigir erro lançado ao adicionar resultado de nó de consulta por @mytharcher
  - Corrigir botão de ação ausente na tabela de processo por @mytharcher
  - Problema de estilo com o diálogo pop-up 'Aplicar novo' por @zhangzhonghe

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
