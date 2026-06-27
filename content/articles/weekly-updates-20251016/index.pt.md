---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Adicionar variável \"Tipo de dispositivo atual\", Melhorar função de pesquisa web do plugin-ai"
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Data de lançamento: 2025-10-15*

### 🚀 Melhorias

* **[Workflow: Aprovação]** Refatorar a configuração de branch para se adaptar às mudanças do kernel por @mytharcher

### 🐛 Correções de Bugs

* **[Workflow: Aprovação]** Corrigir o problema de erros no script de migração devido a tabelas inexistentes quando o aplicativo não está instalado por @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Data de lançamento: 2025-10-14*

### 🚀 Melhorias

* **[cliente]** Para obter um tipo MIME de arquivo mais preciso, usar o pacote `mime` para detectar o tipo MIME de arquivo no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
* **[Workflow]**
  * Suporte para limitar o número máximo de nós em um workflow através de variáveis de ambiente ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
  * Adicionar opção `keepBranch` ao excluir nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
* **[Workflow: Nó de loop]** Suporte para limitar o número máximo de ciclos para nós de loop através de variáveis de ambiente ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Workflow: Aprovação]** Adicionar botão de impressão ao popup de detalhes em blocos de aprovação personalizados por @mytharcher

### 🐛 Correções de Bugs

* **[cliente]**
  * Corrigir o problema em que as imagens não eram exibidas corretamente quando giradas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
  * Corrigir o problema em que a falta de propriedades dinâmicas no componente `AssignedField` causava erros de upload de arquivo nos nós "Criar registro" ou "Atualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
* **[Formulários públicos]** Corrigir o problema em que as regras de upload para campos de arquivo em formulários públicos estavam incorretas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher
* **[Calendário]** corrigir problema de consulta de dados causado por identificador único no bloco de calendário ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh
* **[Auth: LDAP]** Corrigir falha de bind do LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Data de lançamento: 2025-10-11*

### 🐛 Correções de Bugs

* **[servidor]** Erro de migração de chave primária ([#7568](https://github.com/nocobase/nocobase/pull/7568)) por @2013xile
* **[Calendário]** corrigir problema de consulta de dados causado por identificador único no bloco de calendário ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Data de lançamento: 2025-10-14*

### 🎉 Novos Recursos

* **[Funcionários de IA]** Melhorar a função de pesquisa web do plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

### 🚀 Melhorias

* **[cliente]** Para obter um tipo MIME de arquivo mais preciso, usar o pacote `mime` para detectar o tipo MIME de arquivo no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher
* **[mecanismo-de-fluxo]**
  * suporte para variável de popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust
  * Melhorar a experiência de edição de código com snippets mais ricos e conclusões de código sensíveis ao contexto para vários cenários ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust
  * Fluxos de trabalho automáticos padronizados para serem acionados consistentemente pelo evento "beforeRender", garantindo operação previsível e unificada entre processos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust
* **[Workflow]** Adicionar opção `keepBranch` ao excluir nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher
* **[Visualização de dados]** Expandir tipos de gráfico; Otimizar UI e experiência interativa. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang
* **[Workflow: Aprovação]** Refatorar a configuração de branch para se adaptar às mudanças do kernel por @mytharcher

### 🐛 Correções de Bugs

* **[cliente]**
  * Corrigir problemas de exibição anormal de página ao alternar a paginação da tabela ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe
  * Não é possível configurar o valor do campo de atribuição para as ações `Atualizar` e `Atualização em massa` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust
  * Corrigir o problema em que as imagens não eram exibidas corretamente quando giradas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher
* **[Workflow: Aprovação]** Corrigir o problema de erros no script de migração devido a tabelas inexistentes quando o aplicativo não está instalado por @mytharcher
* **[Auth: LDAP]** Corrigir falha de bind do LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Data de lançamento: 2025-10-13*

### 🎉 Novos Recursos

* **[cliente]** Adicionar variável "Tipo de dispositivo atual" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) por @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Data de lançamento: 2025-10-11*

### 🐛 Correções de Bugs

* **[servidor]** Erro de migração de chave primária ([#7568](https://github.com/nocobase/nocobase/pull/7568)) por @2013xile
* **[indefinido]** A correspondência de caminho de rota suporta novos múltiplos aplicativos ([#7570](https://github.com/nocobase/nocobase/pull/7570)) por @jiannx
* **[Funcionários de IA]** Corrigir erros na ferramenta de modelagem de dados do funcionário de IA ao usar ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) por @cgyrock
