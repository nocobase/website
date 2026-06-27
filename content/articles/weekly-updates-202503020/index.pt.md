---
title: "Atualizações Semanais do NocoBase: Otimize as colunas e operações do bloco de tabela"
description: "As atualizações desta semana incluem: suporte para ocultar a coluna de índice em blocos de tabela, configuração de opções de campo selecionável em regras de vinculação e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Data de lançamento: 2025-03-12*

#### 🐛 Correções de Bugs

- **[cliente]** Seleção de intervalo de campo de data exclui a data máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
- **[Notificação: Mensagem no aplicativo]** Evitar que a configuração de destinatários errados consulte todos os usuários ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
- **[Fluxo de trabalho: Nó manual]**

  - Corrigir migração que perdeu o prefixo da tabela e a lógica do schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
  - Alterar limite de versão da migração para `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Data de lançamento: 2025-03-14*

#### 🎉 Novos Recursos

- **[WeCom]** Permite definir um tooltip personalizado para o botão de login por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir caractere especial na URL da imagem que impedia a exibição ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
  - Número de página incorreto ao adicionar dados após a alteração do tamanho da página da subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - O estilo do logotipo está inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]** Corrigir erro lançado na migração ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Ação: Solicitação personalizada]** Erro de validação de permissão no lado do servidor da solicitação personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Gerenciador de fonte de dados]** Alternar fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Ação: Edição em lote]** Corrigir fluxo de trabalho que não pode ser acionado no envio de edição em massa ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Remover `only` no caso de teste E2E por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir dados de associação não exibidos no formulário de aprovação por @mytharcher
  - Corrigir erro lançado ao aprovar em fonte de dados externa por @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Data de lançamento: 2025-03-15*

#### 🎉 Novos Recursos

- **[cliente]** Componente de Seleção em Cascata Adicionar Configuração de Escopo de Dados ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

#### 🚀 Melhorias

- **[utils]** Mover `md5` para utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]** No bloco de árvore, quando desmarcado, os dados no bloco de dados não estão sendo limpos ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
- **[Gerenciador de arquivos]** Não é possível excluir arquivos armazenados no S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
- **[Fluxo de trabalho]** Remover botão de configurações de fluxo de trabalho vinculado do seletor de dados ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Resolver problema com URLs assinadas S3 Pro inacessíveis por @chenos
- **[Fluxo de trabalho: Aprovação]** Evitar travamento da página quando não há solicitante na tabela do processo de aprovação por @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Data de lançamento: 2025-03-17*

#### 🚀 Melhorias

- **[Gerenciador de arquivos]** Simplificar a lógica de geração de URL de arquivo e a API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Alterar para uma maneira simples de gerar URL de arquivo por @mytharcher
- **[Gerenciador de backup]** Permitir restaurar backup entre versão de pré-lançamento e versão de lançamento da mesma versão por @gchust

#### 🐛 Correções de Bugs

- **[cliente]**

  - campo de texto rico não limpando dados no envio ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - Clicar no botão de redefinição no formulário de filtro não pode limpar as condições de filtragem do bloco de cartão de grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]**

  - Corrigir migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Alterar nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corrigir campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Corrigir erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
  - Evitar coleção sincronizada a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
- **[Fluxo de trabalho: Nó de agregação]** Corrigir arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Fluxo de trabalho]** Não contar tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro de campo de associação de arquivo no formulário do processo por @mytharcher
  - Corrigir contagem de tarefas com base em hooks por @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Data de lançamento: 2025-03-18*

#### 🎉 Novos Recursos

- **[cliente]** suportar campos de texto longo como campos de título para campo de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
- **[Fluxo de trabalho: Nó de agregação]** Suportar configurar precisão para resultado de agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🚀 Melhorias

- **[Armazenamento de arquivos: S3(Pro)]** Alterar o texto 'Access URL Base' para 'Base URL' por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[avaliadores]** Reverter casas decimais de arredondamento para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Gerenciador de arquivos]** codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Fonte de dados: Principal]** Não é possível criar uma view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Fluxo de trabalho]** Corrigir contagem de tarefas legadas após exclusão do fluxo de trabalho ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Incorporar NocoBase]** Página exibe em branco por @zhangzhonghe
- **[Gerenciador de backup]**

  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do modelo de backup por @gchust
  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Alterar aprovação retornada como a fazer por @mytharcher
  - Corrigir botão de ação ausente na tabela do processo por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Data de lançamento: 2025-03-13*

#### 🎉 Novos Recursos

- **[cliente]**

  - bloco de tabela suporta ocultar a coluna de índice (visível por padrão) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh
  - suportar configurar opções de campo selecionáveis em regras de vinculação ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh
  - suportar escopo de data (mín/máx) para campos de tempo em regras de vinculação ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh
- **[Bloco: Painel de ações]** suportar quebra de linha para título da ação no painel de ações ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**

  - número de página incorreto ao adicionar dados após a alteração do tamanho da página da subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - O estilo do logotipo está inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
  - valor do campo de seleção múltipla muda e perda de opção ao excluir registros da subtabela ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
  - seleção de intervalo de campo de data exclui a data máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - Dados não atualizando em janelas pop-up abertas através de botões de Link ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
- **[Ação: Edição em lote]** Corrigir fluxo de trabalho que não pode ser acionado no envio de edição em massa ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Gerenciador de fonte de dados]** Alternar fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Ação: Solicitação personalizada]** Erro de validação de permissão no lado do servidor da solicitação personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Gerenciador de arquivos]** Corrigir alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]**

  - Evitar que a configuração de destinatários errados consulte todos os usuários ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
  - Diferenciar a cor de fundo da lista de mensagens no aplicativo dos cartões de mensagem para melhorar a hierarquia visual e a legibilidade. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66
- **[Fluxo de trabalho: Nó manual]**

  - Alterar limite de versão da migração para `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher
  - Corrigir migração que perdeu o prefixo da tabela e a lógica do schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Data de lançamento: 2025-03-14*

#### 🎉 Novos Recursos

- **[WeCom]** Permite definir um tooltip personalizado para o botão de login por @2013xile

#### 🚀 Melhorias

- **[Visualização de dados]** Substituir `x-designer` obsoleto por `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir caractere especial na URL da imagem que impedia a exibição ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrigir erro lançado na migração ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Remover `only` no caso de teste E2E por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro lançado ao aprovar em fonte de dados externa por @mytharcher
  - Corrigir dados de associação não exibidos no formulário de aprovação por @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Data de lançamento: 2025-03-15*

#### 🎉 Novos Recursos

- **[cliente]** Componente de Seleção em Cascata Adicionar Configuração de Escopo de Dados ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

#### 🚀 Melhorias

- **[utils]** Mover `md5` para utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]** No bloco de árvore, quando desmarcado, os dados no bloco de dados não estão sendo limpos ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
- **[Gerenciador de arquivos]** Não é possível excluir arquivos armazenados no S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
- **[Fluxo de trabalho]** Remover botão de configurações de fluxo de trabalho vinculado do seletor de dados ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Resolver problema com URLs assinadas S3 Pro inacessíveis por @chenos
- **[Fluxo de trabalho: Aprovação]** Evitar travamento da página quando não há solicitante na tabela do processo de aprovação por @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Data de lançamento: 2025-03-18*

#### 🎉 Novos Recursos

- **[cliente]** Suportar ações de tabela inline com modo apenas ícone, mostrar nome da ação ao passar o mouse ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

#### 🚀 Melhorias

- **[Gerenciador de arquivos]** Simplificar a lógica de geração de URL de arquivo e a API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Alterar o texto 'Access URL Base' para 'Base URL' por @zhangzhonghe
  - Alterar para uma maneira simples de gerar URL de arquivo por @mytharcher
- **[Gerenciador de backup]** Permitir restaurar backup entre versão de pré-lançamento e versão de lançamento da mesma versão por @gchust

#### 🐛 Correções de Bugs

- **[cliente]**

  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - campo de texto rico não limpando dados no envio ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - Clicar no botão de redefinição no formulário de filtro não pode limpar as condições de filtragem do bloco de cartão de grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]**

  - Corrigir migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Alterar nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corrigir campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Evitar coleção sincronizada a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
  - Corrigir erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
- **[Fluxo de trabalho]** Não contar tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Fluxo de trabalho: Nó de agregação]** Corrigir arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Incorporar NocoBase]** Página exibe em branco por @zhangzhonghe
- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro de campo de associação de arquivo no formulário do processo por @mytharcher
  - Corrigir contagem de tarefas com base em hooks por @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Data de lançamento: 2025-03-19*

#### 🎉 Novos Recursos

- **[cliente]** suportar campos de texto longo como campos de título para campo de associação ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh
- **[Fluxo de trabalho: Nó de agregação]** Suportar configurar precisão para resultado de agregação ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

#### 🐛 Correções de Bugs

- **[avaliadores]** Reverter casas decimais de arredondamento para 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir contagem de tarefas legadas após exclusão do fluxo de trabalho ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher
- **[Fonte de dados: Principal]** Não é possível criar uma view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie
- **[Gerenciador de arquivos]** codificar url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos
- **[Gerenciador de backup]**

  - Falha na restauração do banco de dados MySQL causada por sobreposição do conjunto GTID por @gchust
  - Arquivos enviados não foram restaurados ao criar sub-aplicativo a partir do modelo de backup por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir botão de ação ausente na tabela do processo por @mytharcher
  - Alterar aprovação retornada como a fazer por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Data de lançamento: 2025-03-15*

#### 🎉 Novos Recursos

- **[cliente]**

  - Componente de Seleção em Cascata Adicionar Configuração de Escopo de Dados ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038
  - bloco de tabela suporta ocultar a coluna de índice (visível por padrão) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh
  - suportar configurar opções de campo selecionáveis em regras de vinculação ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh
  - suportar escopo de data (mín/máx) para campos de tempo em regras de vinculação ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh
- **[acl]** Suportar união de funções de usuário ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie
- **[Bloco: Painel de ações]** suportar quebra de linha para título da ação no painel de ações ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh
- **[plugin-demo-platform]** Definir skipAuthCheck da rota "/new" como true. por @sheldon66
- **[WeCom]** Permite definir um tooltip personalizado para o botão de login por @2013xile

#### 🚀 Melhorias

- **[utils]**

  - Mover `md5` para utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher
  - Adaptação de página desktop para dispositivos móveis ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe
- **[cliente]** Adicionar skipAuthCheck ao router.add para evitar redirecionamento para login em páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66
- **[Visualização de dados]** Substituir `x-designer` obsoleto por `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]**

  - No bloco de árvore, quando desmarcado, os dados no bloco de dados não estão sendo limpos ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe
  - Corrigir caractere especial na URL da imagem que impedia a exibição ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher
  - número de página incorreto ao adicionar dados após a alteração do tamanho da página da subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh
  - O conteúdo não é exibido completamente em navegadores móveis ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe
  - O estilo do logotipo está inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe
  - seleção de intervalo de campo de data exclui a data máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh
  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - valor do campo de seleção múltipla muda e perda de opção ao excluir registros da subtabela ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
  - Dados não atualizando em janelas pop-up abertas através de botões de Link ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
- **[acl]** Corrigido o problema em que os campos de relacionamento não são exibidos sob a união de funções. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie
- **[Gerenciador de arquivos]**

  - Não é possível excluir arquivos armazenados no S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos
  - Corrigir alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher
- **[Fluxo de trabalho]** Remover botão de configurações de fluxo de trabalho vinculado do seletor de dados ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]**

  - Corrigir erro lançado na migração ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher
  - Alterar limite de versão da migração para `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher
  - Corrigir migração que perdeu o prefixo da tabela e a lógica do schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
- **[Controle de acesso]**

  - Corrigido que alternar funções não surtia efeito. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie
  - Erro quando o escopo de dados é definido como dados próprios e a tabela não possui um campo de criador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie
- **[Cliente WEB]** Substituir todas as instâncias de ctx.state.currentRole (função única) por ctx.state.currentRoles (suporta múltiplas funções). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie
- **[Ação: Edição em lote]** Corrigir fluxo de trabalho que não pode ser acionado no envio de edição em massa ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher
- **[Gerenciador de fonte de dados]** Alternar fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh
- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile
- **[Notificação: Mensagem no aplicativo]**

  - Diferenciar a cor de fundo da lista de mensagens no aplicativo dos cartões de mensagem para melhorar a hierarquia visual e a legibilidade. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66
  - Evitar que a configuração de destinatários errados consulte todos os usuários ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66
- **[Ação: Solicitação personalizada]** Erro de validação de permissão no lado do servidor da solicitação personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh
- **[Autenticação: Chaves de API]** Remoção da união da lista de funções do plugin de chaves de API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie
- **[Bloco: template]** Comportamento incorreto de "Salvar como template" no cliente móvel ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust
- **[Fluxo de trabalho: Evento de ação personalizada]** Remover `only` no caso de teste E2E por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Resolver problema com URLs assinadas S3 Pro inacessíveis por @chenos
- **[Fluxo de trabalho: Aprovação]**

  - Evitar travamento da página quando não há solicitante na tabela do processo de aprovação por @mytharcher
  - Corrigir dados de associação não exibidos no formulário de aprovação por @mytharcher
  - Corrigir erro lançado ao aprovar em fonte de dados externa por @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Data de lançamento: 2025-03-18*

#### 🎉 Novos Recursos

- **[cliente]** Suportar ações de tabela inline com modo apenas ícone, mostrar nome da ação ao passar o mouse ([#6451](https://github.com/nocobase/nocobase/pull/6451)) por @katherinehhh

#### 🚀 Melhorias

- **[Gerenciador de arquivos]** Simplificar a lógica de geração de URL de arquivo e a API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Alterar o texto 'Access URL Base' para 'Base URL' por @zhangzhonghe
  - Alterar para uma maneira simples de gerar URL de arquivo por @mytharcher
- **[Gerenciador de backup]** Permitir restaurar backup entre versão de pré-lançamento e versão de lançamento da mesma versão por @gchust

#### 🐛 Correções de Bugs

- **[cliente]**

  - campos ausentes na configuração da regra de vinculação ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh
  - A cor dos ícones no canto superior direito da página não muda com o tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) por @zhangzhonghe
  - campo de texto rico não limpando dados no envio ([#6486](https://github.com/nocobase/nocobase/pull/6486)) por @katherinehhh
  - Estilo de entrada incorreto para configuração de valor padrão do formulário ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust
  - Clicar no botão de redefinição no formulário de filtro não pode limpar as condições de filtragem do bloco de cartão de grade ([#6475](https://github.com/nocobase/nocobase/pull/6475)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]**

  - Alterar nome da migração para garantir reexecução ([#6487](https://github.com/nocobase/nocobase/pull/6487)) por @mytharcher
  - Corrigir migração ([#6484](https://github.com/nocobase/nocobase/pull/6484)) por @mytharcher
  - Corrigir campo de título do fluxo de trabalho no filtro ([#6480](https://github.com/nocobase/nocobase/pull/6480)) por @mytharcher
  - Corrigir erro de migração quando a coluna id não existe ([#6470](https://github.com/nocobase/nocobase/pull/6470)) por @chenos
  - Evitar coleção sincronizada a partir de campos ([#6478](https://github.com/nocobase/nocobase/pull/6478)) por @mytharcher
- **[Fluxo de trabalho]** Não contar tarefas quando o fluxo de trabalho é excluído ([#6474](https://github.com/nocobase/nocobase/pull/6474)) por @mytharcher
- **[Variáveis e segredos]** Botões não estão sendo exibidos no drawer de criar novas variáveis ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust
- **[Fluxo de trabalho: Nó de agregação]** Corrigir arredondamento em resultado nulo ([#6473](https://github.com/nocobase/nocobase/pull/6473)) por @mytharcher
- **[Incorporar NocoBase]** Página exibe em branco por @zhangzhonghe
- **[Gerenciador de backup]** Não é possível iniciar o servidor quando faltam configurações de backup padrão por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro de campo de associação de arquivo no formulário do processo por @mytharcher
  - Corrigir contagem de tarefas com base em hooks por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
