---
title: "Atualizações Semanais｜Permite adicionar funcionários de IA no pop-up de subtabelas"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 13 a 19 de março de 2026."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Data de lançamento: 2026-03-18*

### 🚀 Melhorias

- **[Workflow]** Corrigido o problema em que o desligamento gracioso não drenava todos os eventos ([#8894](https://github.com/nocobase/nocobase/pull/8894)) por @mytharcher

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido problema com URL especificada para serviço LLM não surtindo efeito em chamadas de modelo de incorporação de texto. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) por @cgyrock
- **[Ação: Importar registros Pro]** Corrigido evento `beforeStop` no sub aplicativo não sendo acionado por @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Data de lançamento: 2026-03-17*

### 🎉 Novos Recursos

- **[Funcionários de IA]**

  - Limpeza programada de dados de checkpoint de conversa de IA. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) por @cgyrock
  - Permite adicionar funcionários de IA no pop-up de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
- **[Supervisor de aplicativos]** Suporte a filtragem na lista de aplicativos<br />Adicionadas caixas de diálogo de confirmação para ações de iniciar e parar<br />Ordenar entradas de status do aplicativo por nome do ambiente por @2013xile

### 🚀 Melhorias

- **[servidor]** Melhorar lógica de adição de pm ([#8875](https://github.com/nocobase/nocobase/pull/8875)) por @chenos
- **[cliente]** Suporte para exibir mensagem de confirmação antes de fechar pop-up. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) por @gchust
- **[Gerenciador de tarefas assíncronas]** Tarefas assíncronas foram adicionadas para suportar workers em mensagens de erro de postagem ([#8849](https://github.com/nocobase/nocobase/pull/8849)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que o pop-up “Selecionar registro” na subtabela falhava ao carregar corretamente quando aberto pela segunda vez. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) por @gchust
- **[Funcionários de IA]** Corrigidos potenciais erros de variável indefinida em scripts de migração de atualização do plugin de IA. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) por @cgyrock
- **[Ação: Importar registros Pro]** Corrigido o problema em que as tarefas assíncronas não terminam após um erro ocorrer na importação assíncrona por @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Data de lançamento: 2026-03-14*

### 🚀 Melhorias

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que os valores padrão de alguns campos não surtiam efeito após atualizar a página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
- **[banco de dados]** Corrigido o problema de validação no lado do servidor para campos de data ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[Localização]** Exceção de permissão de interface localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
- **[IA: Base de conhecimento]** Impedir que o banco de dados vetorial e o armazenamento vetorial em uso sejam excluídos. por @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Data de lançamento: 2026-03-12*

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir campos conectáveis não sendo exibidos ao vincular blocos de dados sob fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
  - corrigida altura do bloco de tabela sendo inválida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
  - Corrigido o problema em que adicionar um bloco de dados ou atualizar a página acionava atualizações duplas. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
- **[Modelos de UI]** Corrigidos os erros ocorridos ao usar o bloco de formulário de edição e o modelo de bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[Rascunhos de formulário]** Corrigido o problema em que os dados do rascunho do formulário eram perdidos quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Localização]** Entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Ação: Importar registros Pro]** Corrigido o problema em que múltiplas seleções não podiam ser feitas para campos duplicados na configuração importada. por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Data de lançamento: 2026-03-12*

### 🐛 Correções de Bugs

- **[cliente]**

  - corrigida altura do bloco de tabela sendo inválida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
  - Corrigido o problema em que adicionar um bloco de dados ou atualizar a página acionava atualizações duplas. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
  - Corrigir campos conectáveis não sendo exibidos ao vincular blocos de dados sob fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
- **[Modelos de UI]** Corrigidos os erros ocorridos ao usar o bloco de formulário de edição e o modelo de bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[Rascunhos de formulário]** Corrigido o problema em que os dados do rascunho do formulário eram perdidos quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Localização]** Entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Ação: Importar registros Pro]** Corrigido o problema em que múltiplas seleções não podiam ser feitas para campos duplicados na configuração importada. por @jiannx
- **[Gerenciador de e-mail]** Ajustes de destinatários de resposta e responder a todos, corrigindo falha na adição de campo de tabela e outros problemas por @jiannx
- **[Gerenciador de migração]** Corrigido o problema em que as tabelas do sistema não podiam ser selecionadas em regras personalizadas por @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Data de lançamento: 2026-03-14*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Permite adicionar funcionários de IA no pop-up de subtabelas ([#8873](https://github.com/nocobase/nocobase/pull/8873)) por @2013xile
- **[IA: Servidor MCP]** Adicionar um novo plugin de servidor MCP para permitir a construção de sistemas NocoBase e suporte a fluxos de trabalho de negócios. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) por @2013xile

### 🚀 Melhorias

- **[indefinido]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) por @gaston98765

### 🐛 Correções de Bugs

- **[banco de dados]** Corrigido o problema de validação no lado do servidor para campos de data ([#8867](https://github.com/nocobase/nocobase/pull/8867)) por @2013xile
- **[cliente]**

  - Corrigir campos conectáveis não sendo exibidos ao vincular blocos de dados sob fontes de dados externas ([#8848](https://github.com/nocobase/nocobase/pull/8848)) por @zhangzhonghe
  - Corrigido o problema em que adicionar um bloco de dados ou atualizar a página acionava atualizações duplas. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) por @gchust
  - Corrigido o problema em que os valores padrão de alguns campos não surtiam efeito após atualizar a página. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) por @gchust
  - corrigida altura do bloco de tabela sendo inválida ([#8842](https://github.com/nocobase/nocobase/pull/8842)) por @jiannx
- **[Localização]**

  - Exceção de permissão de interface localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) por @jiannx
  - Entradas não encontradas não serão enviadas no estado de não edição da página. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) por @jiannx
- **[Rascunhos de formulário]** Corrigido o problema em que os dados do rascunho do formulário eram perdidos quando o pop-up era aberto várias vezes. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) por @gchust
- **[Modelos de UI]** Corrigidos os erros ocorridos ao usar o bloco de formulário de edição e o modelo de bloco de detalhes. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) por @gchust
- **[IA: Base de conhecimento]** Impedir que o banco de dados vetorial e o armazenamento vetorial em uso sejam excluídos. por @cgyrock
- **[Ação: Importar registros Pro]** Corrigido o problema em que múltiplas seleções não podiam ser feitas para campos duplicados na configuração importada. por @jiannx
- **[Gerenciador de e-mail]** Ajustes de destinatários de resposta e responder a todos, corrigindo falha na adição de campo de tabela e outros problemas por @jiannx
- **[Gerenciador de migração]** Corrigido o problema em que as tabelas do sistema não podiam ser selecionadas em regras personalizadas por @cgyrock
