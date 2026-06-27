---
title: "Atualizações Semanais do NocoBase: Melhorias no desempenho de renderização de blocos de tabela e mais"
description: "Atualizações Semanais do NocoBase 2024-10-31"
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

O NocoBase é atualmente atualizado com dois branches: `main` e `next`.

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão alfa, incluindo alguns novos recursos não lançados. Esta versão pode não ser completamente estável e é adequada para desenvolvedores ou testadores experimentarem novos recursos com antecedência ou realizarem testes de compatibilidade.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Data de lançamento: 2024-10-24*

### 🐛 Correções de Bugs

- **[cliente]**

  - problema de paginação no bloco de lista com coleção de paginação simples ([#5500](https://github.com/nocobase/nocobase/pull/5500)) por @katherinehhh
  - No modo não-config, exibir apenas a coleção atual no formulário de edição. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) por @katherinehhh
- **[Fluxo de trabalho: nó de requisição HTTP]** corrige problema de espaço em branco especial ao colar conteúdo na textarea de variável ([#5497](https://github.com/nocobase/nocobase/pull/5497)) por @mytharcher
- **[Departamentos]** Corrige o problema de verificação incorreta de permissões de fonte de dados externa sob a função de departamento por @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Data de lançamento: 2024-10-24*

### 🐛 Correções de Bugs

- **[cliente]** Corrige o problema em que blocos de filtro não podem ser adicionados no popup ([#5502](https://github.com/nocobase/nocobase/pull/5502)) por @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Data de lançamento: 2024-10-25*

### 🎉 Novos Recursos

- **[Auth: OIDC]** Adiciona uma opção para permitir pular verificação SSL por @2013xile

### 🚀 Melhorias

- **[cliente]** exibir checkbox desabilitado e não marcado para campos não selecionados ([#5503](https://github.com/nocobase/nocobase/pull/5503)) por @katherinehhh

### 🐛 Correções de Bugs

- **[banco de dados]** Corrige o problema em que os operadores de string "contém" e "não contém" não tratam corretamente valores `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) por @2013xile
- **[cliente]** Corrige regra de vinculação para avaliar corretamente variáveis de parâmetro de URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) por @katherinehhh
- **[Bloco: Mapa]** Corrigido o problema em que alguns mapas são exibidos incorretamente quando múltiplos mapas existem devido a múltiplas chamadas ao método `load` do AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) por @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Data de lançamento: 2024-10-27*

### 🚀 Melhorias

- **[Controle de acesso]** Otimizar desempenho para tabelas grandes no acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) por @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Data de lançamento: 2024-10-28*

### 🐛 Correções de Bugs

- **[Coleção: Árvore]** Corrige o problema em que os caminhos dos nós não são atualizados ao desassociar filhos ([#5522](https://github.com/nocobase/nocobase/pull/5522)) por @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Data de lançamento: 2024-10-24*

### 🎉 Novos Recursos

- **[cliente]** Suporte para adicionar grupos em formulários e blocos de detalhes ([#5498](https://github.com/nocobase/nocobase/pull/5498)) por @katherinehhh
- **[Calendário]** plugin-calendar adiciona configurações de visualização padrão e configurações de internacionalização ([#5487](https://github.com/nocobase/nocobase/pull/5487)) por @Cyx649312038
- **[Fonte de dados: KingbaseES]** Suporte para usar banco de dados Kingbase como fonte de dados principal ou externa (modo pg) por @chareice
  Referência: [Fonte de dados - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Melhorias

- **[banco de dados]** Suporte para lógica de carregamento estático de plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) por @chareice
- **[cliente]** Melhorar desempenho de renderização de blocos de tabela (tempo de primeira renderização reduzido em cerca de 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) por @zhangzhonghe
- **[Mobile]** cliente mobile suporta bloco de formulário de filtro ([#5482](https://github.com/nocobase/nocobase/pull/5482)) por @katherinehhh
- **[Gerenciador de backup]**

  - alterar configuração padrão `Fazer backup de arquivos de armazenamento local` para verdadeiro por @gchust
  - Reverter os dados do banco de dados se a ação de restauração falhar por @gchust

### 🐛 Correções de Bugs

- **[servidor]** O evento afterLoad do App não era acionado após a instalação ([#5506](https://github.com/nocobase/nocobase/pull/5506)) por @chenos
- **[Formulários públicos]** registro de snippet ACL para formulário público ([#5505](https://github.com/nocobase/nocobase/pull/5505)) por @katherinehhh
- **[Gerenciador de backup]** corrigido que após restaurar sub aplicativo, o aplicativo principal trava se o sub aplicativo estava usando esquema diferente por @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Data de lançamento: 2024-10-24*

### 🎉 Novos Recursos

- **[Bloco: Painel de ação]** Adicionar configuração de título para bloco de painel de ação ([#5492](https://github.com/nocobase/nocobase/pull/5492)) por @Cyx649312038

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, oferecendo controle total e escalabilidade infinita. Ela capacita equipes a se adaptarem rapidamente às mudanças enquanto reduz significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Página Inicial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
