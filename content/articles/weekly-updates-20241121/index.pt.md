---
title: "Atualizações Semanais do NocoBase: Otimizar estilo mobile"
description: "As atualizações desta semana incluem: otimizar estilo mobile, suporte para configurar formulário de cadastro, ajustar largura padrão da coluna no bloco de tabela e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Esta semana fizemos ajustes no lançamento de versões. As atualizações de versão subsequentes incluirão três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Data de lançamento: 2024-11-14*

### 🐛 Correções de Bugs

- **[client]** Corrige problema que impedia a limpeza do título da regra de vinculação durante a edição ([#5644](https://github.com/nocobase/nocobase/pull/5644)) por @katherinehhh
- **[Comentários]** Corrige configuração de escopo de dados não funcionando no bloco de comentários por @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Data de lançamento: 2024-11-19*

### 🐛 Correções de Bugs

- **[client]**

  - Corrige verificação de permissão de campo não afetada pelo contexto do campo de associação ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh
  - Corrige regra de vinculação salvando alterações de valor vazio como valor vazio estático ([#5667](https://github.com/nocobase/nocobase/pull/5667)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema de recuperar registros em uma coleção de associação com campos muitos para muitos (array) causando um erro ([#5661](https://github.com/nocobase/nocobase/pull/5661)) por @2013xile
- **[Bloco: Gantt]** Corrige modelo de bloco gantt chamando incorretamente o bloco de calendário ao adicionar ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh
- **[Visualização de dados]** Corrige o problema de transformações de dados não funcionarem no tooltip em gráficos de eixo duplo ([#5649](https://github.com/nocobase/nocobase/pull/5649)) por @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Data de lançamento: 2024-11-14*

### 🎉 Novos Recursos

- **[Autenticação]** Permite configurar campos de nome de usuário e e-mail do formulário de cadastro ([#5639](https://github.com/nocobase/nocobase/pull/5639)) por @2013xile
- **[Workflow]** suporta chave de união em evento de coleção ([#5627](https://github.com/nocobase/nocobase/pull/5627)) por @mytharcher

### 🚀 Melhorias

- **[client]** ajusta largura padrão da coluna para 100 no bloco de tabela ([#5625](https://github.com/nocobase/nocobase/pull/5625)) por @katherinehhh
- **[Gerenciador de notificações]** atualiza ícone de notificação no aplicativo para ícone de sino ([#5638](https://github.com/nocobase/nocobase/pull/5638)) por @sheldon66
- **[Bloco: Painel de ação]** adiciona suporte para configuração de altura do bloco no painel de ação ([#5628](https://github.com/nocobase/nocobase/pull/5628)) por @katherinehhh
- **[Mobile]** Estilo: otimiza estilo mobile: reduz espaçamento de campos e melhora a compacidade da exibição de campos ([#5605](https://github.com/nocobase/nocobase/pull/5605)) por @katherinehhh

### 🐛 Correções de Bugs

- **[build]** Corrige o problema de falha ao construir o plugin se contiver arquivo .less ([#5646](https://github.com/nocobase/nocobase/pull/5646)) por @gchust
- **[client]** Corrige alinhamento da coluna fixa à direita na tabela ([#5636](https://github.com/nocobase/nocobase/pull/5636)) por @katherinehhh
- **[Workflow: Nó de loop]** corrige verificação de condição incorreta no nó de loop ([#5634](https://github.com/nocobase/nocobase/pull/5634)) por @mytharcher
- **[Gerenciador de notificações]** corrige template não compilado na api de notificação ([#5630](https://github.com/nocobase/nocobase/pull/5630)) por @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Data de lançamento: 2024-11-14*

### 🚀 Melhorias

- **[client]** ajusta algumas api do core do client e corrige aviso ([#5651](https://github.com/nocobase/nocobase/pull/5651)) por @mytharcher
- **[Mobile]** substitui certos componentes por componente mobile ([#5590](https://github.com/nocobase/nocobase/pull/5590)) por @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Data de lançamento: 2024-11-15*

### 🐛 Correções de Bugs

- **[client]** reverte modificação das props `openSize` no botão de ação ([#5656](https://github.com/nocobase/nocobase/pull/5656)) por @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Data de lançamento: 2024-11-16*

### 🐛 Correções de Bugs

- **[client]**

  - corrige correspondência de tipo de arquivo quando arquivo ou propriedade é nulo ([#5659](https://github.com/nocobase/nocobase/pull/5659)) por @mytharcher
  - Corrige contagem de paginação não atualizando após excluir dados na subtabela ([#5648](https://github.com/nocobase/nocobase/pull/5648)) por @katherinehhh
- **[Workflow]** corrige nó desaparecendo após adicionar condição sem branch antes dele ([#5658](https://github.com/nocobase/nocobase/pull/5658)) por @mytharcher
- **[Mobile]** problema de estilo ao usar texto longo como campo de título no campo de associação ([#5655](https://github.com/nocobase/nocobase/pull/5655)) por @katherinehhh
- **[Workflow: Evento de ação personalizada]** Corrige erro ao usar campo de URL de anexo com fonte de dados externa por @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Data de lançamento: 2024-11-16*

### 🐛 Correções de Bugs

- **[Mobile]** correção: usa componentes de desktop para selecionar no modo de configuração mobile e corrige erro ao usar variáveis como valores padrão no datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) por @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Data de lançamento: 2024-11-17*

### 🐛 Correções de Bugs

- **[Mobile]** Corrige atribuição de campo para suportar valor de variável como 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) por @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Data de lançamento: 2024-11-18*

### 🐛 Correções de Bugs

- **[build]** Corrige o problema onde yarn dev reporta um erro quando já existem plugins construídos no sistema ([#5671](https://github.com/nocobase/nocobase/pull/5671)) por @gchust
- **[Mobile]** correção: problema de estilo no mobile quando a subtabela está configurada para permitir apenas seleção de dados ([#5670](https://github.com/nocobase/nocobase/pull/5670)) por @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Data de lançamento: 2024-11-19*

### 🚀 Melhorias

- **[Workflow]** suporta registrar variáveis de sistema no client ([#5676](https://github.com/nocobase/nocobase/pull/5676)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrige verificação de permissão de campo não afetada pelo contexto do campo de associação ([#5672](https://github.com/nocobase/nocobase/pull/5672)) por @katherinehhh
- **[Bloco: Gantt]** Corrige modelo de bloco gantt chamando incorretamente o bloco de calendário ao adicionar ([#5673](https://github.com/nocobase/nocobase/pull/5673)) por @katherinehhh
- **[Calendário]** Corrige opções de campo de data ausentes com e sem fuso horário no bloco de calendário ([#5674](https://github.com/nocobase/nocobase/pull/5674)) por @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Data de lançamento: 2024-11-19*

### 🚀 Melhorias

- **[Mobile]** Suporta propriedade dinâmica `hidden` para o componente `Tabs.TabPan` controlar a renderização ([#5687](https://github.com/nocobase/nocobase/pull/5687)) por @zhangzhonghe

### 🐛 Correções de Bugs

- **[client]**
  - Corrige limpeza do valor de entrada de data ao alternar operadores no botão de filtro e enviar campo de data ([#5684](https://github.com/nocobase/nocobase/pull/5684)) por @katherinehhh
  - Corrige condição de regra de vinculação com variável de data não funcionando ([#5675](https://github.com/nocobase/nocobase/pull/5675)) por @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Data de lançamento: 2024-11-19*

### 🎉 Novos Recursos

- **[Adaptador Redis pub sub]** Adiciona plugin adaptador de sincronização Redis por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
