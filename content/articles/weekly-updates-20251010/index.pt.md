---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "A atualização desta semana inclui: melhorias e correções no fluxo de trabalho, otimização da funcionalidade de arrastar e soltar, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Data de lançamento: 02/10/2025*

### 🚀 Melhorias

- **[cliente]** Suporte para girar imagem ao visualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
- **[Fluxo de trabalho]** Dividir a lógica relacionada ao despacho em um despachante independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que os submenus da barra lateral não destacavam corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
- **[Fluxo de trabalho: Nó de loop]** Corrigido o problema em que o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Fluxo de trabalho]**
  - Corrigido o problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  - Corrigido o problema em que a condição da lista de fluxos de trabalho estava incorreta ao carregar o contexto de campo associado na configuração do fluxo de trabalho vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  - Corrigido o problema em que tarefas agendadas baseadas em campos de data não eram acionadas após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Data de lançamento: 09/10/2025*

### 🚀 Melhorias

* **[servidor]** Adicionar tratamento do ciclo de vida de desligamento gracioso para a aplicação ([#7536](https://github.com/nocobase/nocobase/pull/7536)) por @mytharcher
* **[Fluxo de trabalho: Nó de loop]** Suporte para limitar o número máximo de ciclos para nós de loop através de variáveis de ambiente ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Fluxo de trabalho]** Suporte para limitar o número máximo de nós em um fluxo de trabalho através de variáveis de ambiente ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
* **[Fluxo de trabalho: Aprovação]** Adicionar botão de impressão ao popup de detalhes em blocos de aprovação personalizados por @mytharcher

### 🐛 Correções de Bugs

* **[Gerenciador de e-mail]** Exceção de reautorização por @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Data de lançamento: 09/10/2025*

### 🐛 Correções de Bugs

* **[cliente]** Corrigido o problema em que a falta de propriedades dinâmicas no componente `AssignedField` causava erros de upload de arquivo nos nós "Criar registro" ou "Atualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
* **[Formulários públicos]** Corrigido o problema em que as regras de upload para campos de arquivo em formulários públicos estavam incorretas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Data de lançamento: 30/09/2025*

### 🎉 Novos Recursos

* **[cliente]**
  * Blocos de tabela suportam adicionar um botão 'Configurações de coluna' para configurar a ordem e visibilidade das colunas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
  * Suporte para regra de validação de campo ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
* **[Fonte de dados: Principal]**
  * Suporte para ler tabelas da fonte de dados principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
  * Suporte para exibir tabelas definidas por plugin na fonte de dados principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

### 🚀 Melhorias

* **[cliente]** Suporte para girar imagem ao visualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
* **[snowflake-id]** Alterar os IDs de tabelas do sistema com chaves primárias auto-incremento, mas sem identificadores únicos, para IDs de 53 bits semelhantes a Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
* **[Fluxo de trabalho]** Dividir a lógica relacionada ao despacho em um despachante independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher
* **[Adaptador de fila RabbitMQ]** melhorar o manuseio da conexão RabbitMQ e a lógica de processamento de mensagens por @sdp-ncd
* **[Gerenciador de e-mail]**
  * suporta sincronização em lote por @jiannx
  * editor rico suporta redimensionamento de imagem por @jiannx

### 🐛 Correções de Bugs

* **[cliente]**
  * Corrigido um problema em que o botão "Configurações de coluna" carregava colunas da tabela dentro do diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  * Corrigido o problema em que os submenus da barra lateral não destacavam corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
* **[Fluxo de trabalho]**
  * Corrigido o problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  * Corrigido o problema em que a condição da lista de fluxos de trabalho estava incorreta ao carregar o contexto de campo associado na configuração do fluxo de trabalho vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  * Corrigido o problema em que tarefas agendadas baseadas em campos de data não eram acionadas após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
* **[Fluxo de trabalho: Nó de loop]** Corrigido o problema em que o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
* **[Gerenciador de e-mail]**
  * Assunto de e-mail de lixo eletrônico por @jiannx
  * assunto de lixo eletrônico por @jiannx
  * editor rico suporta quebras de linha suaves por @jiannx
  * Suporta o mesmo e-mail para várias pessoas por @jiannx
  * desempenho ideal da lista de mensagens de e-mail por @jiannx
  * após selecionar linhas, definir "Lido" e "Não lido" por @jiannx
  * adicionar campo rawId para otimização de desempenho por @jiannx
  * atributo ref em html causa exceção de renderização por @jiannx
  * conteúdo de sub-e-mail não pode ser filtrado por @jiannx
  * suportar ressincronização por @jiannx
  * Distinguir manualmente entre encaminhamento e resposta por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Data de lançamento: 10/10/2025*

### 🐛 Correções de Bugs

- **[servidor]** Erro de migração de chave primária ([#7563](https://github.com/nocobase/nocobase/pull/7563)) por @2013xile
- **[cliente]**
  - Corrigido o problema de não atualizar os dados após enviar o formulário ([#7560](https://github.com/nocobase/nocobase/pull/7560)) por @zhangzhonghe
  - Corrigido o problema em que a falta de propriedades dinâmicas no componente `AssignedField` causava erros de upload de arquivo nos nós "Criar registro" ou "Atualizar registro" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) por @mytharcher
- **[Calendário]** corrigir problema de consulta de dados causado por identificador único no bloco de calendário ([#7562](https://github.com/nocobase/nocobase/pull/7562)) por @katherinehhh
- **[Bloco: template (obsoleto)]** Corrigido um problema em que solicitações desnecessárias para modelos de bloco eram acionadas ao abrir ou fechar modais ([#7561](https://github.com/nocobase/nocobase/pull/7561)) por @gchust
- **[Formulários públicos]** Corrigido o problema em que as regras de upload para campos de arquivo em formulários públicos estavam incorretas ([#7553](https://github.com/nocobase/nocobase/pull/7553)) por @mytharcher
- **[Gerenciador de múltiplos aplicativos (obsoleto)]** Corrigir validação de porta antes da migração de dados de múltiplos aplicativos ([#7540](https://github.com/nocobase/nocobase/pull/7540)) por @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Data de lançamento: 05/10/2025*

### 🚀 Melhorias

* **[mecanismo de fluxo]** Otimizar funcionalidade de arrastar e soltar ([#7526](https://github.com/nocobase/nocobase/pull/7526)) por @zhangzhonghe
* **[Fluxo de trabalho: Nó de loop]** Suporte para limitar o número máximo de ciclos para nós de loop através de variáveis de ambiente ([#7543](https://github.com/nocobase/nocobase/pull/7543)) por @mytharcher
* **[Fluxo de trabalho]** Suporte para limitar o número máximo de nós em um fluxo de trabalho através de variáveis de ambiente ([#7542](https://github.com/nocobase/nocobase/pull/7542)) por @mytharcher
* **[Fluxo de trabalho: Aprovação]** Adicionar botão de impressão ao popup de detalhes em blocos de aprovação personalizados por @mytharcher

### 🐛 Correções de Bugs

* **[cliente]** Corrigido um problema em que a ação "Executar" no editor de código não estava funcionando, garantindo que os usuários agora possam executar o código corretamente. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) por @gchust
* **[Funcionários de IA]** Corrigir o erro na página de configuração de permissões do funcionário de IA ([#7548](https://github.com/nocobase/nocobase/pull/7548)) por @2013xile
* **[Fluxo de trabalho]** Corrigir o problema em que adicionar um fluxo de trabalho na configuração do botão de fluxo de trabalho vinculado causava o congelamento do aplicativo após clicar ([#7541](https://github.com/nocobase/nocobase/pull/7541)) por @mytharcher
* **[Gerenciador de e-mail]** Exceção de reautorização por @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Data de lançamento: 30/09/2025*

### 🚀 Melhorias

* **[Fluxo de trabalho]** Dividir a lógica relacionada ao despacho em um despachante independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Correções de Bugs

* **[Fluxo de trabalho]**
  * Corrigido o problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  * Corrigido o problema em que tarefas agendadas baseadas em campos de data não eram acionadas após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Data de lançamento: 30/09/2025

### 🚀 Melhorias

- **[servidor]** Adicionar tratamento do ciclo de vida de desligamento gracioso para a aplicação ([#7536](https://github.com/nocobase/nocobase/pull/7536)) por @mytharcher
