---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: suporte para variáveis personalizadas, ouvintes de eventos de clique em linhas de tabela e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Data de lançamento: 2025-10-17*

### 🐛 Correções de Bugs

- **[database]** Corrige erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[Workflow: Approval]**

  - Corrige o problema de timeout de transação causado por transações que não revertem corretamente quando ocorrem erros de banco de dados após o envio da aprovação por @mytharcher
  - Corrige o problema onde variáveis não são analisadas no formulário de envio de aprovação por @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Data de lançamento: 2025-10-16*

### 🐛 Correções de Bugs

- **[client]** Corrige o problema de pop-ups de ícone de aba serem obscurecidos ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Data de lançamento: 2025-10-22*

### 🚀 Melhorias

- **[client]** Para obter um tipo MIME mais preciso do arquivo, use o pacote `mime` para detectar o tipo MIME do arquivo no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
- **[Fonte de dados: Principal]** Refatora a lógica de localização para mensagens de erro e trata dentro do plugin de tratamento de erros ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile
- **[Workflow]** Adiciona opção `keepBranch` ao deletar nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
- **[Workflow: Approval]** Refatora a configuração de branch para se adaptar às mudanças do kernel por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - corrige erro ao limpar campo de data no bloco de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh
  - corrige valor padrão de subtabela não funcionando no drawer de formulário de edição ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh
  - Corrige o problema onde imagens não eram exibidas corretamente quando giradas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
  - Corrige o problema de pop-ups de ícone de aba serem obscurecidos ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe
- **[database]** Corrige erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[Fonte de dados: Principal]** Corrige o problema onde metadados não eram sincronizados entre múltiplos nós após criar um campo de associação reversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher
- **[Workflow: Approval]**

  - Corrige o problema de erro no script de migração devido a tabelas inexistentes quando a aplicação não está instalada por @mytharcher
  - Corrige o problema do ID Snowflake não ser gerado devido a hooks ignorados por @mytharcher
- **[Auth: LDAP]** Corrige falha de bind LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Data de lançamento: 2025-10-21*

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema onde a URL não atualizava corretamente após alternar abas dentro de um pop-up, reabrir um pop-up aninhado e depois fechar todos os pop-ups. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) por @gchust
  - corrige valor padrão de subtabela não funcionando no drawer de formulário de edição ([#7631](https://github.com/nocobase/nocobase/pull/7631)) por @katherinehhh
  - corrige erro ao limpar campo de data no bloco de filtro ([#7632](https://github.com/nocobase/nocobase/pull/7632)) por @katherinehhh
- **[Gerenciador de multi-aplicativos (obsoleto)]** Corrige a impossibilidade de desabilitar o antigo multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) por @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Data de lançamento: 2025-10-21*

### 🎉 Novos Recursos

- **[client]** Adicionado suporte para ouvintes de evento de clique em linha de tabela, permitindo que usuários executem ações específicas quando uma linha na tabela é clicada ([#7622](https://github.com/nocobase/nocobase/pull/7622)) por @zhangzhonghe
- **[Workflow: Approval]** Expõe a variável `approvalId` para uso a partir de gatilhos de aprovação por @mytharcher

### 🐛 Correções de Bugs

- **[flow-engine]** Corrige o problema de tradução não surtindo efeito em componentes antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) por @zhangzhonghe
- **[Fonte de dados: Principal]** Corrige o problema onde metadados não eram sincronizados entre múltiplos nós após criar um campo de associação reversa ([#7628](https://github.com/nocobase/nocobase/pull/7628)) por @mytharcher
- **[plugin-demo-platform]** demo suporta parada automática de apps por @jiannx
- **[Multi-app]**

  - migração multi-app não emite hooks por @jiannx
  - proxy multi app suporta cache por @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Data de lançamento: 2025-10-20*

### 🎉 Novos Recursos

- **[Rascunhos de formulário]** Rascunhos de formulário por @chenos

### 🐛 Correções de Bugs

- **[flow-engine]** incapaz de obter o contexto de visualização atual no bloco de referência ([#7620](https://github.com/nocobase/nocobase/pull/7620)) por @gchust
- **[client]** lidar com contexto ausente em usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) por @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Data de lançamento: 2025-10-20*

### 🚀 Melhorias

- **[client]** suporta campos de associação no modelo de campo JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) por @gchust
- **[Funcionários de IA]**

  - Refatorado o Provedor LLM OpenAI em dois provedores separados para suportar as APIs Completions e Responses da OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) por @cgyrock
  - Adicionar novo provedor LLM Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) por @ReLaMi96

### 🐛 Correções de Bugs

- **[Workflow: Approval]**
  - Corrige o problema onde a contagem de tarefas não era atualizada após adicionar um responsável por @mytharcher
  - Corrige o problema de timeout de transação causado por transações que não revertem corretamente quando ocorrem erros de banco de dados após o envio da aprovação por @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Data de lançamento: 2025-10-17*

### 🚀 Melhorias

- **[Funcionários de IA]** Otimização de codificação de IA ([#7614](https://github.com/nocobase/nocobase/pull/7614)) por @cgyrock
- **[Fonte de dados: Principal]** Refatora a lógica de localização para mensagens de erro e trata dentro do plugin de tratamento de erros ([#7582](https://github.com/nocobase/nocobase/pull/7582)) por @2013xile

### 🐛 Correções de Bugs

- **[database]**

  - Define o `search_path` antes de executar instruções SQL usando o método `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) por @2013xile
  - Corrige erro lançado quando o operador `$in` encontra valor `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) por @mytharcher
- **[client]** Corrige o problema de pop-ups de ícone de aba serem obscurecidos ([#7607](https://github.com/nocobase/nocobase/pull/7607)) por @zhangzhonghe
- **[Workflow: Approval]** Corrige o problema onde variáveis não são analisadas no formulário de envio de aprovação por @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Data de lançamento: 2025-10-16*

### 🎉 Novos Recursos

- **[Bloco: Referência]** Adiciona um plugin experimental "Bloco de referência", que permite reutilizar blocos existentes por referência ou cópia. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) por @gchust

### 🐛 Correções de Bugs

- **[Visualização de dados]** Corrige o problema onde o gráfico não pode ser exibido devido ao timeout do registro de evento ([#7608](https://github.com/nocobase/nocobase/pull/7608)) por @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Data de lançamento: 2025-10-15*

### 🚀 Melhorias

- **[Visualização de dados]** Atualiza plugin-data-vi 2.0, corrige alguns problemas e otimiza a UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) por @heziqiang

### 🐛 Correções de Bugs

- **[Workflow: Approval]** Corrige o problema do ID Snowflake não ser gerado devido a hooks ignorados por @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Data de lançamento: 2025-10-15*

### 🎉 Novos Recursos

- **[client]** Adiciona suporte para variáveis personalizadas ([#7585](https://github.com/nocobase/nocobase/pull/7585)) por @zhangzhonghe

### 🚀 Melhorias

- **[Funcionários de IA]** adiciona botão de minimizar para caixa de chat no layout móvel ([#7595](https://github.com/nocobase/nocobase/pull/7595)) por @cgyrock

### 🐛 Correções de Bugs

- **[server]** Preserva field.targetKey ao copiar campos de referência ([#7599](https://github.com/nocobase/nocobase/pull/7599)) por @chenos
- **[Funcionários de IA]** corrige problema de layout da caixa de chat no layout móvel ([#7591](https://github.com/nocobase/nocobase/pull/7591)) por @cgyrock
