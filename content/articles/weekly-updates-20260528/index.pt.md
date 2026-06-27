---
title: "Atualizações Semanais｜Plugin de Gerenciamento de Backup de Código Aberto"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 22 a 28 de maio de 2026."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Data de lançamento: 2026-05-28*

### 🎉 Novos Recursos

* **[Workflow]** Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do nó inicial ou de um nó especificado. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher

### 🚀 Melhorias

* **[client]** Removida a opção Oculto das configurações de item de menu. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe

### 🐛 Correções de Bugs

* **[client]**
  * Corrigido o problema em que o popup do seletor de data móvel v2 usava a hora atual em vez do valor do formulário. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  * Corrigido o problema em que as configurações de formato do campo de hora não surtiam efeito no v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  * Aumentado o limite de upload de arquivo para o componente de entrada de digitalização v1 para 10 MB. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  * Corrigido o problema em que o estado oculto da vinculação de subformulário não era sincronizado. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  * Corrigido o problema em que uma subtabela em um subformulário não conseguia adicionar uma segunda linha. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  * Corrigido o problema em que as abas da página desapareciam após alternar menus. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
* **[flow-engine]** Corrigido o problema em que as regras de vinculação de ação de tabela eram executadas incorretamente após um formulário ser enviado com sucesso em um popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
* **[Workflow: Evento de ação personalizada]** Corrigido o problema em que botões de ação de tabela personalizada com contextos de múltiplos registros permitiam incorretamente a seleção de workflows de contexto personalizados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
* **[Gerenciador de arquivos]**
  * Corrigida a normalização de nomes de arquivo Unicode durante o upload para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
  * Melhoradas as mensagens de falha na pré-visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [Pré-visualização de Arquivo](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Data de lançamento: 2026-05-26*

### 🐛 Correções de Bugs

* **[build]** Corrigida a saída de ofuscação do servidor de plugins para evitar globais de navegador em bundles de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
* **[Workflow: Nó manual]** Corrigido o problema em que os salvamentos temporários para tarefas de workflow manual não persistiam os valores de formulário enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
* **[Funcionários de IA]** Corrigida a descrição incorreta do nome da ferramenta no prompt de contexto de trabalho. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
* **[Gerenciador de arquivos]** Renderizadas pré-visualizações de PDF com segurança usando PDF.js em vez de renderização bruta de PDF baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
* **[Auth: OIDC]** Corrigido o vazamento de token quando callbacks de login SSO recebiam uma URL de redirecionamento externa. por @2013xile
* **[Workflow: Aprovação]**
  * Corrigido o problema em que a API `<span>jobs:resume</span>` não era suportada por nós de aprovação. por @mytharcher
  * Corrigida a retirada de aprovação para atualizar os dados de negócio enviados, respeitando as permissões de atualização da coleção de origem. por @mytharcher
  * Corrigidas tarefas de aprovação obsoletas quando workflows de aprovação eram encerrados por falhas em nós não relacionados à aprovação. por @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Data de lançamento: 2026-05-22*

### 🎉 Novos Recursos

* **[Gerenciador de backup]** Código aberto do plugin Gerenciador de backup. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos

### 🚀 Melhorias

* **[client]** Otimizadas as configurações de exibição do botão de ação. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[flow-engine]** Adicionado suporte a pesquisa nos menus de configuração de campo v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[Segurança]** Adicionada revisão de segurança de dependências para pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Gerenciador de notificações]** Alterada a estratégia de fila para otimizar o desempenho de envio. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher
* **[IA: Base de conhecimento]** Habilitada a modificação de armazenamento vetorial para bases de conhecimento de IA. por @cgyrock
* **[Workflow: Aprovação]** Melhoradas as aprovações relacionadas com cartões de linha do tempo. por @zhangzhonghe

### 🐛 Correções de Bugs

* **[client]**
  * Corrigido o problema em que os valores selecionados eram limpos quando campos de associação dependentes mudavam na vinculação de escopo de dados. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Corrigido o problema em que um selo de menu ainda exibia um ponto quando seu valor era 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) por @zhangzhonghe
  * Corrigido o problema em que formulários de filtro não podiam usar variáveis do formulário atual. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) por @zhangzhonghe
  * Corrigido o problema em que blocos v2 estreitados se tornavam largura total após sair do modo de edição. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  * Corrigido o estado incorreto do menu de Campo JS em subformulários. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
* **[flow-engine]** Corrigido o problema de seleção múltipla para campos de fonte de dados externa em formulários v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Funcionários de IA]** Corrigido um erro que ocorria quando funcionários de IA acessavam bases de conhecimento somente leitura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
* **[Calendário]** Corrigido o problema em que mais itens no calendário não podiam ser totalmente exibidos. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) por @zhangzhonghe
* **[Ação: Atualização em lote]** Corrigido o problema em que a ação de atualização em massa redefinia o estado de carregamento após uma falha de atualização. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Documentação da API]** Corrigida a documentação da API de coleção para que os parâmetros de consulta não interfiram mais uns nos outros. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx
* **[Workflow]** Adicionado um estado de carregamento para execução manual de workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Gerenciador de migração]** Corrigidas falhas na criação de arquivos de migração ao usar OceanBase. por @2013xile
* **[Armazenamento de arquivos: S3(Pro)]** Corrigido o tratamento de endpoint S3 Pro para que uploads de servidor e pré-visualizações de URL não dupliquem o host do bucket. por @mytharcher
* **[Workflow: Aprovação]** Corrigidos índices duplicados de registro de aprovação quando delegações ocorriam simultaneamente no mesmo trabalho de aprovação. por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Data de lançamento: 2026-05-26*

### 🎉 Novos Recursos

* **[client-v2]** Adicionado um menu Segurança e a página de configurações de Política de token ao admin v2. O centro do usuário agora suporta Alterar senha. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) por @Molunerfinn
* **[cli]** Adicionado suporte para autenticação básica. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) por @chenos
* **[Política de senha]** Migrado o plugin Política de senha para o shell admin client-v2, incluindo as páginas de configurações Política de senha e Usuários bloqueados, e adicionada aplicação de regras no lado do cliente no formulário Alterar senha do centro do usuário. por @Molunerfinn

### 🚀 Melhorias

* **[Visualização de dados]** Adicionado suporte client-v2 para blocos de gráfico. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) por @jiannx
* **[Workflow]** Refatoradas as verificações de disponibilidade de nós assíncronos do workflow. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) por @mytharcher

### 🐛 Correções de Bugs

* **[build]**
  * Ativos de texto em builds de servidor agora são copiados como arquivos em vez de serem convertidos em módulos JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) por @Molunerfinn
  * Corrigida a saída de ofuscação do servidor de plugins para evitar globais de navegador em bundles de runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn
* **[client-v2]** Corrigidos metadados de idioma do navegador para que a página do aplicativo siga o idioma do aplicativo selecionado em vez de ser marcada como inglês. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) por @Molunerfinn
* **[Gerenciador de arquivos]** Renderizadas pré-visualizações de PDF com segurança usando PDF.js em vez de renderização bruta de PDF baseada em iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher
* **[Funcionários de IA]** Corrigida a descrição incorreta do nome da ferramenta no prompt de contexto de trabalho. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock
* **[Workflow: Nó manual]** Corrigido o problema em que os salvamentos temporários para tarefas de workflow manual não persistiam os valores de formulário enviados. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher
* **[Auth: OIDC]** Corrigido o vazamento de token quando callbacks de login SSO recebiam uma URL de redirecionamento externa. por @2013xile
* **[Workflow: Aprovação]**
  * Corrigida a retirada de aprovação para atualizar os dados de negócio enviados, respeitando as permissões de atualização da coleção de origem. por @mytharcher
  * Corrigido o problema em que a API `<span>jobs:resume</span>` não era suportada por nós de aprovação. por @mytharcher
  * Corrigidos índices duplicados de registro de aprovação quando delegações ocorriam simultaneamente no mesmo trabalho de aprovação. por @mytharcher
  * Corrigidas tarefas de aprovação obsoletas quando workflows de aprovação eram encerrados por falhas em nós não relacionados à aprovação. por @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Data de lançamento: 2026-05-22*

### 🎉 Novos Recursos

* **[cli]** Adicionados comandos de criação e restauração de backup. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
* **[Gerenciador de backup]** Código aberto do plugin Gerenciador de backup. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
* **[Editor de tema]** Adicionado suporte ao Editor de tema na interface v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
* **[Autenticação de dois fatores (2FA)]** Adicionado suporte para vinculação, verificação e configuração de TOTP e autenticação de dois fatores a partir do cliente v2. por @Molunerfinn

### 🚀 Melhorias

* **[client]** Otimizadas as configurações de exibição do botão de ação. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[flow-engine]** Adicionado suporte a pesquisa nos menus de configuração de campo v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[cli]** Melhorado o fluxo de autenticação de ambiente. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
* **[Segurança]** Adicionada revisão de segurança de dependências para pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Verificação]** Adicionado suporte client-v2 ao plugin Verificação, incluindo a página de configurações do admin, entrada do centro do usuário e formulários OTP por SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
* **[Autenticação]** Corrigidas as configurações de marca personalizada no cliente v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
* **[Bloco: Mapa]** Adicionado suporte client-v2 para o plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
* **[Marca personalizada]** Adicionado suporte a configurações de marca personalizada no cliente v2. por @zhangzhonghe
* **[IA: Base de conhecimento]** Habilitada a modificação de armazenamento vetorial para bases de conhecimento de IA. por @cgyrock
* **[Workflow: Aprovação]** Adicionado o sinalizador `<span>async</span>` para instruções de aprovação para suportar a nova API de criação de nó na tela do workflow. por @mytharcher

### 🐛 Correções de Bugs

* **[client]**
  * Corrigido o problema em que os valores selecionados eram limpos quando campos de associação dependentes mudavam na vinculação de escopo de dados. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Corrigido o carregamento em modo dev para plugins de armazenamento construídos que dependem de exportações nomeadas de plugins de origem locais. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  * Corrigido o estado incorreto do menu de Campo JS em subformulários. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
  * Corrigido o problema em que blocos v2 estreitados se tornavam largura total após sair do modo de edição. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
* **[client-v2]** Corrigido o registro inconsistente de dependência dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
* **[flow-engine]** Corrigido o problema de seleção múltipla para campos de fonte de dados externa em formulários v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Bloco: iframe]** Corrigido o problema em que o conteúdo do iframe não preenchia a altura configurada do bloco. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
* **[Funcionários de IA]**
  * Corrigido um erro que ocorria quando funcionários de IA acessavam bases de conhecimento somente leitura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  * Corrigido o problema em que os cartões de chamada de ferramenta de IA não apareciam imediatamente quando eventos de ferramenta transmitidos eram divididos. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  * Corrigido um erro que ocorria quando funcionários de IA acessavam bases de conhecimento somente leitura. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
* **[Ação: Exportar registros]** Melhorado o desempenho da configuração de campo quando há muitos campos de associação. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
* **[Ação: Atualização em lote]** Corrigido o problema em que a ação de atualização em massa redefinia o estado de carregamento após uma falha de atualização. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Workflow]** Adicionado um estado de carregamento para execução manual de workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Localização]** Corrigidas as traduções de referência de localização embutidas para tarefas de tradução de IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
* **[Gerenciador de migração]** Corrigidas falhas na criação de arquivos de migração ao usar OceanBase. por @2013xile
* **[Armazenamento de arquivos: S3(Pro)]** Corrigido o tratamento de endpoint S3 Pro para que uploads de servidor e pré-visualizações de URL não dupliquem o host do bucket. por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Data de lançamento: 2026-05-22*

### 🎉 Novos Recursos

* **[cli]** Adicionados comandos de criação e restauração de backup. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
* **[Gerenciador de backup]** Código aberto do plugin Gerenciador de backup. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
* **[Editor de tema]** Adicionado suporte ao Editor de tema na interface v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
* **[Autenticação de dois fatores (2FA)]** Adicionado suporte para vinculação, verificação e configuração de TOTP e autenticação de dois fatores a partir do cliente v2. por @Molunerfinn

### 🚀 Melhorias

* **[cli]** Melhorado o fluxo de autenticação de ambiente. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
* **[flow-engine]** Adicionado suporte a pesquisa nos menus de configuração de campo v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
* **[client]** Otimizadas as configurações de exibição do botão de ação. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
* **[Segurança]** Adicionada revisão de segurança de dependências para pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
* **[Verificação]** Adicionado suporte client-v2 ao plugin Verificação, incluindo a página de configurações do admin, entrada do centro do usuário e formulários OTP por SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
* **[Autenticação]** Corrigidas as configurações de marca personalizada no cliente v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
* **[Bloco: Mapa]** Adicionado suporte client-v2 para o plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
* **[Marca personalizada]** Adicionado suporte a configurações de marca personalizada no cliente v2. por @zhangzhonghe
* **[IA: Base de conhecimento]** Habilitada a modificação de armazenamento vetorial para bases de conhecimento de IA. por @cgyrock
* **[Workflow: Aprovação]** Adicionado o sinalizador `<span>async</span>` para instruções de aprovação para suportar a nova API de criação de nó na tela do workflow. por @mytharcher

### 🐛 Correções de Bugs

* **[client]**
  * Corrigido o carregamento em modo dev para plugins de armazenamento construídos que dependem de exportações nomeadas de plugins de origem locais. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  * Corrigido o problema em que blocos v2 estreitados se tornavam largura total após sair do modo de edição. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
  * Corrigido o problema em que os valores selecionados eram limpos quando campos de associação dependentes mudavam na vinculação de escopo de dados. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  * Corrigido o estado incorreto do menu de Campo JS em subformulários. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
* **[client-v2]** Corrigido o registro inconsistente de dependência dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
* **[flow-engine]** Corrigido o problema de seleção múltipla para campos de fonte de dados externa em formulários v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
* **[Bloco: iframe]** Corrigido o problema em que o conteúdo do iframe não preenchia a altura configurada do bloco. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
* **[Ação: Exportar registros]** Melhorado o desempenho da configuração de campo quando há muitos campos de associação. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
* **[Funcionários de IA]**
  * Corrigido um erro que ocorria quando funcionários de IA acessavam bases de conhecimento somente leitura. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  * Corrigido um erro que ocorria quando funcionários de IA acessavam bases de conhecimento somente leitura. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
  * Corrigido o problema em que os cartões de chamada de ferramenta de IA não apareciam imediatamente quando eventos de ferramenta transmitidos eram divididos. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
* **[Localização]** Corrigidas as traduções de referência de localização embutidas para tarefas de tradução de IA. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
* **[Ação: Atualização em lote]** Corrigido o problema em que a ação de atualização em massa redefinia o estado de carregamento após uma falha de atualização. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
* **[Workflow]** Adicionado um estado de carregamento para execução manual de workflow. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
* **[Gerenciador de migração]** Corrigidas falhas na criação de arquivos de migração ao usar OceanBase. por @2013xile
* **[Armazenamento de arquivos: S3(Pro)]** Corrigido o tratamento de endpoint S3 Pro para que uploads de servidor e pré-visualizações de URL não dupliquem o host do bucket. por @mytharcher
* **[Workflow: Aprovação]** Corrigidos índices duplicados de registro de aprovação quando delegações ocorriam simultaneamente no mesmo trabalho de aprovação. por @mytharcher
