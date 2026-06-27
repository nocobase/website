---
title: "Atualizações Semanais do NocoBase: Suporte para abrir pop-ups de links no campo readPretty"
description: "As atualizações desta semana incluem: suporte para abrir pop-ups de links no campo readPretty, suporte para acionar manualmente fluxos de trabalho e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Nesta semana, lançamos a [versão NocoBase 1.4.0](https://www.nocobase.com/en/blog/nocobase-1-4-0), que traz vários novos recursos e melhorias, incluindo gerenciamento simplificado de plugins, funções de notificação aprimoradas, sincronização de dados do usuário e gerenciador de backup.**

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Data de lançamento: 28/11/2024*

### 🚀 Melhorias

- **[cliente]**

  - exportar hook essencial ([#5702](https://github.com/nocobase/nocobase/pull/5702)) por @mytharcher
  - plugin de campo de região da China removido dos plugins integrados ([#5693](https://github.com/nocobase/nocobase/pull/5693)) por @katherinehhh
- **[Workflow: Evento de pré-ação]** remover log de aviso no interceptador de requisições por @mytharcher

### 🐛 Correções de Bugs

- **[cli]** Modo daemon não exclui arquivos sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) por @chenos
- **[cliente]**

  - Corrige problema de campos de associação se afetando mutuamente quando vários campos de associação têm a mesma coleção de destino ([#5744](https://github.com/nocobase/nocobase/pull/5744)) por @katherinehhh
  - Corrige problema de alinhamento da caixa de seleção em subtabela ([#5735](https://github.com/nocobase/nocobase/pull/5735)) por @katherinehhh
  - Corrige problema de exibição do campo de chave estrangeira no seletor de dados ([#5734](https://github.com/nocobase/nocobase/pull/5734)) por @katherinehhh
  - Corrige ajuste do feedbackLayout para melhorar a mensagem de validação em subtabela ([#5700](https://github.com/nocobase/nocobase/pull/5700)) por @katherinehhh
- **[servidor]** Carregar plugins na ordem de dependência ([#5706](https://github.com/nocobase/nocobase/pull/5706)) por @chenos
- **[Bloco: Mapa]** Corrige erro ao alterar níveis de zoom no Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) por @katherinehhh
- **[Fonte de dados: Principal]** Corrige inferência de nome de campo em coleção de visualização ([#5729](https://github.com/nocobase/nocobase/pull/5729)) por @chareice
- **[Gerenciador de arquivos]** quando o endpoint não está vazio, forcePathStyle é definido como true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) por @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Data de lançamento: 03/12/2024*

### 🚀 Melhorias

- **[cliente]** Usar ícones com significados mais precisos para inicializadores de bloco ([#5757](https://github.com/nocobase/nocobase/pull/5757)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige casos E2E com base nos ícones alterados ([#5768](https://github.com/nocobase/nocobase/pull/5768)) por @mytharcher
  - Corrige campo de seleção para exibir em branco quando os dados estão vazios ([#5762](https://github.com/nocobase/nocobase/pull/5762)) por @katherinehhh
- **[banco de dados]** Corrige atualização de valores de associação hasOne/belongsTo sem chave estrangeira ([#5754](https://github.com/nocobase/nocobase/pull/5754)) por @chareice
- **[Gerenciador de fonte de dados]** Corrige exibição incorreta da chave de origem ([#5771](https://github.com/nocobase/nocobase/pull/5771)) por @katherinehhh
- **[Workflow: Evento de ação personalizada]**

  - Permite que todos os papéis acionem evento de ação personalizada em fontes de dados externas por @mytharcher
  - Corrige fonte de dados padrão como principal por @mytharcher
  - Corrige erro de fonte de dados quando não corresponde por @mytharcher
  - Corrige gatilho de ação personalizada não acionando em associação por @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Data de lançamento: 04/12/2024*

### 🚀 Melhorias

- **[cli]** otimiza o comando pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) por @chenos

### 🐛 Correções de Bugs

- **[Mobile]** Corrige campo de entrada de data ausente na operação de filtro no mobile ([#5786](https://github.com/nocobase/nocobase/pull/5786)) por @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Data de lançamento: 04/12/2024*

### 🐛 Correções de Bugs

- **[Workflow]** Corrige tag de workflow assíncrono desaparecida na tabela de workflow ([#5787](https://github.com/nocobase/nocobase/pull/5787)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Data de lançamento: 28/11/2024*

### 🚀 Melhorias

- **[Mobile]** otimiza tema compacto para mobile ([#5723](https://github.com/nocobase/nocobase/pull/5723)) por @katherinehhh

### 🐛 Correções de Bugs

- **[Visualização de dados]** Corrige o problema de obter fuso horário de `context` incorretamente ([#5743](https://github.com/nocobase/nocobase/pull/5743)) por @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Data de lançamento: 28/11/2024*

### 🚀 Melhorias

- **[cliente]** suporta componente de entrada de variável para usar componente personalizado quando `nullable` está definido como `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrige problema de barra de rolagem quando a tabela tem poucas colunas com tamanho médio ([#5745](https://github.com/nocobase/nocobase/pull/5745)) por @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Data de lançamento: 02/12/2024*

### 🚀 Melhorias

- **[cliente]** Suporta campos de arquivo anexo em formulários públicos ([#5749](https://github.com/nocobase/nocobase/pull/5749)) por @katherinehhh
- **[cli]** Reinicia o processo quando plugins são adicionados ou removidos ([#5761](https://github.com/nocobase/nocobase/pull/5761)) por @chenos
- **[Calendário]** Suporta criação rápida de agendamento clicando na data no bloco de calendário ([#5733](https://github.com/nocobase/nocobase/pull/5733)) por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]** Corrige problema de largura do campo em subtabela no layout horizontal ([#5763](https://github.com/nocobase/nocobase/pull/5763)) por @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Data de lançamento: 03/12/2024*

### 🐛 Correções de Bugs

- **[cliente]** Corrige seletor de registro não exibindo itens selecionados ao selecionar entre páginas ([#5770](https://github.com/nocobase/nocobase/pull/5770)) por @katherinehhh
- **[Mobile]** Corrige campo de entrada de data ausente na operação de filtro no mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) por @katherinehhh
- **[Workflow]** Corrige variável não aparecendo no modal de teste de nós ([#5766](https://github.com/nocobase/nocobase/pull/5766)) por @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Data de lançamento: 03/12/2024*

### 🎉 Novos Recursos

- **[cliente]**

  - Suporta ativar abertura de pop-ups de link no campo readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) por @katherinehhh
  - Suporta ação de associar e desassociar em bloco de associação ([#5695](https://github.com/nocobase/nocobase/pull/5695)) por @katherinehhh
- **[servidor]** Adiciona gerenciador de auditoria ([#5601](https://github.com/nocobase/nocobase/pull/5601)) por @chenzhizdt
- **[Workflow]** suporta acionamento manual de workflow ([#5664](https://github.com/nocobase/nocobase/pull/5664)) por @mytharcher
- **[Workflow: Evento de pré-ação]** suporta acionamento manual de workflow por @mytharcher

### 🚀 Melhorias

- **[cliente]**

  - implementa carregamento sob demanda para componentes de front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) por @gchust
  - Melhora o desempenho de renderização de página e suporta funcionalidade de keep-alive de página ([#5515](https://github.com/nocobase/nocobase/pull/5515)) por @zhangzhonghe
- **[Campo de coleção: Ordenar]** adiciona descrição do plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) por @mytharcher
- **[Incorporar NocoBase]** Melhora o desempenho de renderização de página por @zhangzhonghe

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige problemas onde variáveis não podem ser usadas corretamente em blocos de fonte de dados de terceiros ([#5782](https://github.com/nocobase/nocobase/pull/5782)) por @zhangzhonghe
  - Corrige o problema onde os valores do campo de associação estão vazios em modelos de bloco. Corrige o problema onde o escopo de dados do bloco usando variáveis não funciona corretamente em fontes de dados de terceiros ([#5777](https://github.com/nocobase/nocobase/pull/5777)) por @zhangzhonghe
  - Corrige o problema onde as props dinâmicas do componente não funcionam com lazy loading ([#5776](https://github.com/nocobase/nocobase/pull/5776)) por @gchust
  - corrigiu a mensagem de aviso no React ao carregar hooks dinamicamente no ambiente de desenvolvimento ([#5758](https://github.com/nocobase/nocobase/pull/5758)) por @gchust
- **[Visualização de dados]** Corrige o problema onde os componentes de campo de filtro de blocos de gráfico não renderizam ([#5769](https://github.com/nocobase/nocobase/pull/5769)) por @2013xile

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
