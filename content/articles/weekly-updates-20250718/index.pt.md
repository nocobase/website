---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para configurar segredos de autenticação independentes para sub-aplicativos e a adição de um nó CC aos fluxos de trabalho."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Data de lançamento: 2025-07-16*

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige erro: Não é possível resolver 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
  - problema de exibição para campos de associação em regras de vínculo ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
- **[database]** Corrigido erro ao ativar paginação simples para tabelas de fonte de dados externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[Campo de coleção: Ordenação]** seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Adiciona tolerância a falhas para aprovação excluída na lista de registros por @mytharcher
  - Corrige múltiplos níveis de associações ao enviar aprovação por @mytharcher
  - Corrige exceção ao excluir registro por @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Data de lançamento: 2025-07-14*

#### 🚀 Melhorias

- **[Campo de coleção: Fórmula]** Adiciona mais interfaces calculáveis ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Fluxo de trabalho]** Usa registro em log em vez de lançar erro quando a execução não deve ser executada devido ao status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Suporte para excluir aprovação quando dados relacionados são excluídos por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - problema onde campos de anexo não podiam ser selecionados como variáveis na regra de vínculo ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - Corrige o problema onde componentes de seleção suspensa são bloqueados pelo teclado no iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
  - a atribuição de valor falha no formulário de edição quando tanto o valor quanto as opções são definidos para o campo de seleção ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - Colapso de filtro: O filtro não é acionado durante a inicialização da página após definir valores padrão para campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - erro ao atribuir valores no bloco de lista usando o campo de ordenação kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - O título da aba do navegador não é sincronizado ao alternar entre submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Ação pop-up: A exibição da página não atende às expectativas após alternar abas ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
- **[acl]** Corrige erro ao excluir uma função no modo de união de funções que inclui a função raiz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[Gerenciador de múltiplos aplicativos]** Corrige opções de autenticação em posição inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Autenticação]** Corrige o problema onde a página de login não pode rolar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Corrige associações ao enviar aprovação por @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Data de lançamento: 2025-07-13*

#### 🎉 Novos Recursos

- **[Gerenciador de múltiplos aplicativos]** Suporte para configurar segredo de autenticação independente para sub-aplicativos ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Fluxo de trabalho: Cópia (CC)]** Adiciona nó de Cópia (CC) ao fluxo de trabalho ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

#### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Otimiza o tamanho da fonte para a página de mensagens móveis ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Autenticação: DingTalk]** Suporte para configurar o protocolo e o número da porta da URL de retorno por @2013xile

#### 🐛 Correções de Bugs

- **[Notificação: Mensagem no aplicativo]** Corrige timestamp BigInt em formato de string que causa problema no dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Para evitar erro quando o usuário não existe por @mytharcher
  - Recarrega associação no registro por @mytharcher
  - Adiciona `try/catch` na migração ao atualizar o esquema de IU por @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Data de lançamento: 2025-07-11*

#### 🚀 Melhorias

- **[Gerenciador de múltiplos aplicativos]** Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Ação: Solicitação personalizada]** problema de análise de variável na URL durante a navegação de rota após sucesso da solicitação personalizada ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Data de lançamento: 2025-07-10*

#### 🎉 Novos Recursos

- **[Fluxo de trabalho: Aprovação]** Adiciona inicializador para gatilho por @mytharcher

#### 🚀 Melhorias

- **[Gerenciador de múltiplos aplicativos]** Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Fluxo de trabalho]** Converte operandos para string antes da comparação de strings no cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Campo de coleção: Código]** Adiciona configuração de indentação por @mytharcher

#### 🐛 Correções de Bugs

- **[database]** Corrigido um problema onde campos de visualizações não eram exibidos em blocos. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Bloco: Kanban]** corrige problemas de IU de subtabela no Kanban e adiciona suporte para configuração de largura da coluna Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Corrige bugs de bloco e associação por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Data de lançamento: 2025-07-14*

#### 🎉 Novos Recursos

- **[Gerenciador de múltiplos aplicativos]** Suporte para configurar segredo de autenticação independente para sub-aplicativos ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Fluxo de trabalho: Cópia (CC)]** Adiciona nó de Cópia (CC) ao fluxo de trabalho ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Adiciona inicializador para gatilho por @mytharcher

#### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Otimiza o tamanho da fonte para a página de mensagens móveis ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Fluxo de trabalho]** Converte operandos para string antes da comparação de strings no cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Gerenciador de múltiplos aplicativos]**

  - Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
  - Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Campo de coleção: Código]** Adiciona configuração de indentação por @mytharcher
- **[Autenticação: DingTalk]** Suporte para configurar o protocolo e o número da porta da URL de retorno por @2013xile

#### 🐛 Correções de Bugs

- **[client]**

  - problema onde campos de anexo não podiam ser selecionados como variáveis na regra de vínculo ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - erro ao atribuir valores no bloco de lista usando o campo de ordenação kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - Colapso de filtro: O filtro não é acionado durante a inicialização da página após definir valores padrão para campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - a atribuição de valor falha no formulário de edição quando tanto o valor quanto as opções são definidos para o campo de seleção ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - Ação pop-up: A exibição da página não atende às expectativas após alternar abas ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
  - O título da aba do navegador não é sincronizado ao alternar entre submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Corrige o problema onde componentes de seleção suspensa são bloqueados pelo teclado no iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
- **[acl]** Corrige erro ao excluir uma função no modo de união de funções que inclui a função raiz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[Autenticação]** Corrige o problema onde a página de login não pode rolar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Gerenciador de múltiplos aplicativos]** Corrige opções de autenticação em posição inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrige timestamp BigInt em formato de string que causa problema no dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Ação: Solicitação personalizada]** problema de análise de variável na URL durante a navegação de rota após sucesso da solicitação personalizada ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh
- **[Bloco: Kanban]** corrige problemas de IU de subtabela no Kanban e adiciona suporte para configuração de largura da coluna Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Adiciona `try/catch` na migração ao atualizar o esquema de IU por @mytharcher
  - Corrige bugs de bloco e associação por @mytharcher
  - Recarrega associação no registro por @mytharcher
  - Para evitar erro quando o usuário não existe por @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Data de lançamento: 2025-07-10*

#### 🐛 Correções de Bugs

- **[client]**

  - A exibição do campo de caixa de seleção está incorreta na coleção de campos de associação dentro do formulário ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corrige o problema onde clicar em botões não abre pop-ups ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[database]** Corrigido um problema onde campos de visualizações não eram exibidos em blocos. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Fluxo de trabalho: Nó manual]** Corrige erro lançado ao usar variável ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Impressão de modelo]** adiciona script de migração para o campo rootDataType por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige branch aprovada não executada quando não há responsável por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Data de lançamento: 2025-07-15*

#### 🎉 Novos Recursos

- **[Gerenciador de múltiplos aplicativos]** Suporte para configurar segredo de autenticação independente para sub-aplicativos ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher
- **[Fluxo de trabalho: Cópia (CC)]** Adiciona nó de Cópia (CC) ao fluxo de trabalho ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Adiciona inicializador para gatilho por @mytharcher

#### 🚀 Melhorias

- **[Campo de coleção: Fórmula]** Adiciona mais interfaces calculáveis ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Fluxo de trabalho]**

  - Usa registro em log em vez de lançar erro quando a execução não deve ser executada devido ao status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
  - Converte operandos para string antes da comparação de strings no cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Otimiza o tamanho da fonte para a página de mensagens móveis ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe
- **[Gerenciador de múltiplos aplicativos]**

  - Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
  - Adiciona opções de banco de dados e autorização para sub-aplicativo ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher
- **[Campo de coleção: Código]** Adiciona configuração de indentação por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Suporte para excluir aprovação quando dados relacionados são excluídos por @mytharcher
- **[Autenticação: DingTalk]** Suporte para configurar o protocolo e o número da porta da URL de retorno por @2013xile

#### 🐛 Correções de Bugs

- **[client]**

  - problema onde campos de anexo não podiam ser selecionados como variáveis na regra de vínculo ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe
  - Colapso de filtro: O filtro não é acionado durante a inicialização da página após definir valores padrão para campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe
  - problema de exibição para campos de associação em regras de vínculo ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
  - a atribuição de valor falha no formulário de edição quando tanto o valor quanto as opções são definidos para o campo de seleção ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh
  - erro ao atribuir valores no bloco de lista usando o campo de ordenação kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh
  - Ação pop-up: A exibição da página não atende às expectativas após alternar abas ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe
  - O título da aba do navegador não é sincronizado ao alternar entre submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe
  - Corrige o problema onde componentes de seleção suspensa são bloqueados pelo teclado no iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe
  - A exibição do campo de caixa de seleção está incorreta na coleção de campos de associação dentro do formulário ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corrige o problema onde clicar em botões não abre pop-ups ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[acl]** Corrige erro ao excluir uma função no modo de união de funções que inclui a função raiz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie
- **[database]** Corrigido um problema onde campos de visualizações não eram exibidos em blocos. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie
- **[Gerenciador de múltiplos aplicativos]** Corrige opções de autenticação em posição inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrige timestamp BigInt em formato de string que causa problema no dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher
- **[Autenticação]** Corrige o problema onde a página de login não pode rolar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe
- **[Ação: Solicitação personalizada]** problema de análise de variável na URL durante a navegação de rota após sucesso da solicitação personalizada ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh
- **[Bloco: Kanban]** corrige problemas de IU de subtabela no Kanban e adiciona suporte para configuração de largura da coluna Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh
- **[Fluxo de trabalho: Nó manual]** Corrige erro lançado ao usar variável ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Impressão de modelo]** adiciona script de migração para o campo rootDataType por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Corrige associações ao enviar aprovação por @mytharcher
  - Corrige exceção ao excluir registro por @mytharcher
  - Corrige branch aprovada não executada quando não há responsável por @mytharcher
  - Para evitar erro quando o usuário não existe por @mytharcher
  - Corrige bugs de bloco e associação por @mytharcher
  - Adiciona `try/catch` na migração ao atualizar o esquema de IU por @mytharcher
  - Recarrega associação no registro por @mytharcher
