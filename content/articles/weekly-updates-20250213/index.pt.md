---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "As atualizações desta semana incluem: otimizações para dispositivos móveis, melhorias nos fluxos de trabalho e correções de bugs."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Na semana passada, lançamos a [versão NocoBase 1.5.0](https://www.nocobase.com/en/blog/nocobase-1-5-0), que traz otimizações principais, importação/exportação de dados em larga escala, gerenciamento de e-mail, impressão de modelos e muitos outros novos recursos.**

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Data de lançamento: 06/02/2025*

#### 🐛 Correções de Bugs

- **[cliente]**
  - Tradução incorreta para o título de `Sub-formulário(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) por @gchust
  - Quando o campo do subformulário está definido como 'Oculto (valor reservado)', suas variáveis de valor padrão não funcionam corretamente ([#6165](https://github.com/nocobase/nocobase/pull/6165)) por @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Data de lançamento: 06/02/2025*

#### 🚀 Melhorias

- **[Mobile]** Ocultar cabeçalho da página de configuração mobile quando não há permissão de configuração ([#6171](https://github.com/nocobase/nocobase/pull/6171)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[Fluxo de trabalho: nó de notificação]** Garantido que as notificações sejam enviadas corretamente quando a entrada do usuário contém sintaxe semelhante ao Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) por @sheldon66
- **[Fluxo de trabalho: nó manual]** Corrigido valores de formulário não analisados no envio do botão do terminal ([#6160](https://github.com/nocobase/nocobase/pull/6160)) por @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Data de lançamento: 07/02/2025*

#### 🐛 Correções de Bugs

- **[cliente]**
  - O pop-up aberto ao clicar no campo belongsToArray está buscando dados incorretos ([#6173](https://github.com/nocobase/nocobase/pull/6173)) por @zhangzhonghe
  - Operador de campo de hora definido como "entre" no formulário de filtro, mas o componente não mudou para o seletor de intervalo de hora ([#6170](https://github.com/nocobase/nocobase/pull/6170)) por @katherinehhh
  - O formulário de edição pop-up do bloco Kanban e calendário não mostrava "Alterações não salvas" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) por @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Data de lançamento: 10/02/2025*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Adicionar carregamento à ação de duplicar ([#6179](https://github.com/nocobase/nocobase/pull/6179)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido erro lançado nas configurações de campo do nó de criação ([#6187](https://github.com/nocobase/nocobase/pull/6187)) por @mytharcher
  - A opção de configuração 'Permitir Seleção Múltipla' para campos de associação não é exibida em Formulários de Filtro ([#6174](https://github.com/nocobase/nocobase/pull/6174)) por @zhangzhonghe
  - Campo permanece oculto após ser ocultado por regras de vinculação ([#6182](https://github.com/nocobase/nocobase/pull/6182)) por @zhangzhonghe
- **[utils]** otimizar a lógica de leitura de armazenamento/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) por @chenos
- **[Notificação: Mensagem no aplicativo]** Corrigir: Adicionar filtro de usuário ao timestamp da mensagem e subconsultas de título na API da lista de canais para garantir o isolamento de dados. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) por @deepure
- **[Gerenciador de backup]** Arquivos não foram copiados do backup para a pasta de uploads durante a restauração em modo tolerante por @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Data de lançamento: 11/02/2025*

#### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Adicionar teste para recuperar o título e timestamp da mensagem mais recente em canais no aplicativo. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) por @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Data de lançamento: 12/02/2025*

#### 🐛 Correções de Bugs

- **[cliente]**
  - Bloco não atualiza após navegação de página ([#6200](https://github.com/nocobase/nocobase/pull/6200)) por @zhangzhonghe
  - Bloco de formulário não exibido ao adicionar um formulário de criação através de uma ação pop-up em uma linha de tabela ([#6190](https://github.com/nocobase/nocobase/pull/6190)) por @katherinehhh
  - Configuração de altura do bloco de tabela não aplicada quando não há dados ([#6192](https://github.com/nocobase/nocobase/pull/6192)) por @katherinehhh
- **[Ação: Solicitação personalizada]**
  - Valor incorreto da variável 'Registro atual' no botão de solicitação personalizada ([#6196](https://github.com/nocobase/nocobase/pull/6196)) por @zhangzhonghe
  - Compatibilidade do botão de solicitação personalizada com variáveis legadas ([#6194](https://github.com/nocobase/nocobase/pull/6194)) por @zhangzhonghe
- **[Visualização de dados]** Blocos de gráfico não são exibidos quando adicionados aos pop-ups do painel de ação ([#6198](https://github.com/nocobase/nocobase/pull/6198)) por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Data de lançamento: 11/02/2025*

#### 🚀 Melhorias

- **[Gerenciador de backup]** Remover modo tolerante da interface do usuário por @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Data de lançamento: 07/02/2025*

#### 🎉 Novos Recursos

- **[Restrição de IP]** Corrigido erro do aplicativo quando a configuração de restrição de IP não existe. por @sheldon66

#### 🐛 Correções de Bugs

- **[auth]** Atualizar lógica do middleware de autenticação do cliente para evitar falha na atualização do token devido à concorrência. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Data de lançamento: 07/02/2025*

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir opção "Selecionar de dados existentes" ainda aparecendo ao desabilitar "Permitir múltiplos" no subformulário de relação muitos-para-muitos ([#6167](https://github.com/nocobase/nocobase/pull/6167)) por @katherinehhh
- **[Gerenciador de fonte de dados]** Usar loginWithJti para atualizar casos de teste relacionados à autenticação e prevenir erros. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) por @sheldon66
- **[Cliente WEB]** Permissões de rota anormais após atualização ([#6177](https://github.com/nocobase/nocobase/pull/6177)) por @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Data de lançamento: 11/02/2025*

#### 🎉 Novos Recursos

- **[Localização]** Localização para rotas de desktop e mobile ([#6180](https://github.com/nocobase/nocobase/pull/6180)) por @2013xile

#### 🚀 Melhorias

- **[cliente]** Título da página padrão usando o título da rota ([#6188](https://github.com/nocobase/nocobase/pull/6188)) por @zhangzhonghe
- **[Gerenciador de fonte de dados]** Modificar o login da função de teste para ser assíncrono e atualizar os casos de teste relevantes. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) por @sheldon66
- **[Fluxo de trabalho: Evento de ação personalizada]** Atualizar os casos de teste relevantes para usar login assíncrono. por @sheldon66
- **[Fluxo de trabalho: Aprovação]** Atualizar os casos de teste relevantes para usar login assíncrono. por @sheldon66

#### 🐛 Correções de Bugs

- **[Cliente WEB]** Remover título da aba da página padrão ([#6178](https://github.com/nocobase/nocobase/pull/6178)) por @zhangzhonghe

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter NocoBase

[**Página Inicial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
