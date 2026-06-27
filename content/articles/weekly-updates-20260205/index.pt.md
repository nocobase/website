---
title: "Atualizações Semanais｜Otimizações e Correções de Bugs"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 29 de janeiro a 5 de fevereiro de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Data de lançamento: 02/02/2026*

### 🚀 Melhorias

- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuário, preservando a compatibilidade com autenticadores existentes que dependem do celular por @2013xile

### 🐛 Correções de Bugs

- **[Workflow: Aprovação]** Corrigir problema de desempenho causado pelo campo JSON no carregamento de lista (MySQL) por @mytharcher
- **[WeCom]** Corrigir um problema em que os usuários não podiam ser registrados automaticamente quando o celular estava ausente por @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Data de lançamento: 02/02/2026*

### 🚀 Melhorias

- **[client]** Suporte para desabilitar parâmetros de appends padrão redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

### 🐛 Correções de Bugs

- **[Workflow]** Adicionar tolerância a falhas para o componente de seleção de registro de coleção, para evitar erro quando a coleção é excluída ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Gerenciador de arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar caminho de acesso fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Workflow: Subfluxo]** Corrigir caminho da rota do link do workflow por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Data de lançamento: 05/02/2026*

### 🎉 Novos Recursos

- **[Auth: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[client]** Ajustar a configuração de largura da coluna para seleção suspensa em subtabela editável inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** Adicionada uma opção de configuração para definir o modo de edição padrão nas configurações do componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038
- **[Multi-espaço]** Controle de permissão de multi-espaço acessa acl por @jiannx
- **[IA: Base de conhecimento]** Saída de build otimizada para reduzir o tamanho do pacote plugin-ai-knowledge-base. por @cgyrock

### 🐛 Correções de Bugs

- **[client]**

  - Corrigir um problema em que o uso do "Criação Rápida" do seletor de registro de associação no formulário de edição sobrescrevia os dados existentes do formulário. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust
  - Corrigir problemas de espaço vazio no layout Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe
  - Corrigir necessidade de atualização de página para adicionar registro filho após habilitar tabela em árvore ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh
  - Corrigir largura da coluna não atualizando na subtabela (edição inline); entrada de texto multilinha não redimensionando com a largura da coluna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh
  - Corrigir um problema em que o menu "Formulário (Adicionar novo)" era exibido incorretamente no popup de ação "Criar novo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust
- **[flow-engine]**

  - Corrigir um problema em que algumas bibliotecas de terceiros não podiam ser importadas corretamente em blocos JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust
  - Corrigir um problema em que o envio do formulário após alternar páginas não atualizava a página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust
- **[Modelos de UI]** Corrigir erro ao reabrir e enviar um modelo de popup salvo para o formulário "Adicionar novo" do campo de associação. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust
- **[Campo de coleção: Anexo(URL)]** Corrigir configuração de exibição do nome do arquivo do campo de URL de anexo não funcionando no formulário de edição ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh
- **[Funcionários de IA]** Corrigir um problema em que o nó LLM falha ao enviar mensagens ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile
- **[Ação: Importar registros]** Corrigir a vulnerabilidade da ação de importação ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher
- **[Workflow: Evento de ação personalizada]** Corrigir o problema em que os parâmetros e o payload estavam incorretos ao acionar workflow personalizado por @mytharcher
- **[Multi-espaço]**

  - adicionar script de migração para remover x-ready-pretty no campo de espaço por @jiannx
  - remover o atributo read-pretty para campo de espaço por @jiannx
- **[Workflow: Aprovação]** Corrigir problema de desempenho causado pelo campo JSON no carregamento de lista (MySQL) por @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Data de lançamento: 02/02/2026*

### 🎉 Novos Recursos

- **[flow-engine]** suporte env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) por @chenos

### 🚀 Melhorias

- **[acl]** acl adiciona método generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) por @jiannx
- **[client]** Suporte para desabilitar parâmetros de appends padrão redundantes para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile
- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuário, preservando a compatibilidade com autenticadores existentes que dependem do celular por @2013xile

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema em que o fluxo de eventos falhava ao aplicar ao atualizar blocos de destino em popups. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) por @gchust
  - Corrigir problema em que os dados da página eram atualizados incorretamente após abrir e fechar o popup pela primeira vez. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) por @gchust
  - Corrigido um problema que fazia o bloco de dados ser atualizado repetidamente após enviar um formulário. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) por @gchust
  - corrigir campo nanoid não regenerando valor padrão após envio de criação ([#8538](https://github.com/nocobase/nocobase/pull/8538)) por @katherinehhh
  - corrigir exibição incorreta ao definir valores padrão para modelo de campo cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) por @katherinehhh
- **[flow-engine]** Corrigido carregamento incorreto de algumas bibliotecas ESM no runjs devido à classificação incorreta como módulos AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) por @gchust
- **[Gerenciador de arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar caminho de acesso fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher
- **[Workflow]** Adicionar tolerância a falhas para o componente de seleção de registro de coleção, para evitar erro quando a coleção é excluída ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher
- **[Funcionários de IA]** Corrigir a exceção que ocorre quando as ferramentas são chamadas automaticamente durante a modelagem de dados de IA ([#8532](https://github.com/nocobase/nocobase/pull/8532)) por @cgyrock
- **[Ação: Importar registros Pro]** Corrigir números de contagem no resultado da importação e tradução de mensagens por @mytharcher
- **[Workflow: Subfluxo]** Corrigir caminho da rota do link do workflow por @mytharcher
- **[Impressão de modelo]** corrigir problema de exibição da lista de campos na configuração da ação de impressão de modelo por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigir erro ao adicionar função a usuário se o workflow de públicos estiver desabilitado por @mytharcher
  - Adicionar tolerância a falhas no workflow excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
- **[WeCom]** Corrigir um problema em que os usuários não podiam ser registrados automaticamente quando o celular estava ausente por @2013xile
