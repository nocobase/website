---
title: "NocoBase 2.0: Conheça Seus Funcionários de IA"
description: "Agora, é hora de apresentar oficialmente o NocoBase 2.0-alpha!"
---

NocoBase 1.0-alpha foi lançada em 28 de abril de 2024, marcando o início da nossa jornada comercial.
No último ano, recebemos feedback de milhares de usuários, contribuições de código de desenvolvedores ao redor do mundo e pedidos comerciais de centenas de empresas em mais de 50 países.

Agradecemos sinceramente a cada usuário, contribuidor e cliente pagante pela sua confiança e apoio.

Durante os últimos seis meses, enquanto iterávamos e melhorávamos continuamente a versão 1.x, também dedicamos um tempo significativo para pensar, discutir e desenvolver a próxima geração do NocoBase.

Agora, é hora de apresentar oficialmente o **NocoBase 2.0-alpha!**

## Funcionários de IA

O ano passado testemunhou avanços rápidos em IA, com grandes modelos demonstrando capacidades notáveis - até mesmo surpreendentes - em muitos domínios.

Como usuários intensivos de IA, trouxemos a IA diretamente para o NocoBase 2.0 na forma de **Funcionários de IA** - colegas inteligentes que trabalham dentro do seu sistema.

Os Funcionários de IA no NocoBase **não são chatbots**, nem agentes isolados.

Eles são **integrados perfeitamente** ao seu sistema de negócios, capazes de entender o contexto e executar tarefas diretamente.

* Eles aparecem onde você precisar deles - ao lado de suas tabelas e formulários - prontos para ajudar.
* Eles podem resumir e-mails, analisar dados, organizar conteúdo não estruturado e preencher formulários automaticamente, projetar modelos de dados ou até mesmo escrever código JavaScript.
* Eles recuperam automaticamente dados contextuais e estruturas de página para execução inteligente de tarefas.
* Cada um possui habilidades, ferramentas e bases de conhecimento únicas.
* Você pode criar um número ilimitado de Funcionários de IA para formar sua própria equipe de IA.

[Saiba mais sobre Funcionários de IA](https://v2.docs.nocobase.com/ai-employees)

[Experimente a Demonstração](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Um Novo Sistema de Páginas 2.0

Embora o NocoBase sempre tenha sido baseado em plugins, a versão 1.x tinha limitações ao lidar com interações dinâmicas, layouts flexíveis ou lógica personalizada no frontend.

Era difícil alcançar tais requisitos sem um custo significativo.

O NocoBase 2.0 introduz um **sistema de páginas completamente reestruturado**, projetado para suportar necessidades de frontend personalizadas e complexas de forma eficiente.

### RUNJS

**RunJS** fornece uma maneira leve de estender e personalizar a lógica ou o estilo da interface do usuário - sem criar plugins ou modificar o código-fonte.

Dentro do designer de páginas, você pode escrever JavaScript diretamente para:

* Personalizar o conteúdo renderizado (campos, blocos, colunas, itens, etc.)
* Definir interações personalizadas (ações de botão, gatilhos de eventos)
* Combinar com dados contextuais para comportamentos dinâmicos

O RunJS é suportado em:

* Bloco JS
* Ação JS
* Campo JS
* Item JS
* Regras de vinculação
* Fluxos de eventos

[Saiba mais sobre RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Fluxo de Eventos

No NocoBase 1.x, o sistema de regras de vinculação permitia uma orquestração de lógica limitada, restrita a um único bloco.

O NocoBase 2.0 introduz o **Fluxo de Eventos**, uma grande melhoria na configuração da lógica do frontend.

Um Fluxo de Eventos consiste em:

* **Eventos de gatilho**, como antes de renderizar, ao clicar ou na mudança de valor
* **Condições de gatilho**
* **Etapas de ação**, como mostrar notificações, atualizar blocos de destino ou executar JavaScript

[Saiba mais sobre Fluxo de Eventos](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Layout de Grade

Na versão 1.x, blocos e campos usavam um layout de arrasto flexível de largura total, o que limitava a precisão e a estética.

O NocoBase 2.0 introduz um **novo sistema de layout de grade**, permitindo que cada elemento se alinhe com unidades de grade para um controle mais refinado.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Blocos e Modais Reutilizáveis

No 1.x, os recursos de cópia/referência para blocos eram limitados e propensos a erros, e modais inteiros não podiam ser referenciados.

O NocoBase 2.0 redefine completamente isso - permitindo **referência e duplicação flexíveis** de blocos e modais, reduzindo drasticamente o esforço de configuração.

[Saiba mais sobre Referências e Cópias de Blocos](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[Saiba mais sobre Referências de Modais](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Experiência Aprimorada de Blocos

Com base no feedback dos usuários, o NocoBase 2.0 traz muitos refinamentos para os componentes de bloco.

Por exemplo, as tabelas agora suportam **edição inline** diretamente nas células - sem necessidade de pop-up.

Mais melhorias estão a caminho.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Melhor Desempenho

O NocoBase 2.0 oferece um desempenho de frontend significativamente melhorado em comparação com o 1.x.

## FlowEngine

O novo sistema de páginas no 2.0 é alimentado pelo **FlowEngine** - um mecanismo de frontend low-code de próxima geração que combina **Modelos** e **Fluxos**.

Ele simplifica a lógica do frontend, melhora a reutilização e aumenta a capacidade de manutenção.

Ao aproveitar a natureza configurável do Fluxo, ele traz orquestração no-code para componentes de frontend e lógica de negócios.

Desenvolver frontends de plugins no 1.x frequentemente envolvia desafios complexos. Com o FlowEngine, estes agora são bastante simplificados.

[Saiba mais sobre o FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Aplicação e Multi-Espaço

A versão 1.x suportava capacidade básica de multi-aplicação, mas todos os aplicativos compartilhavam um único processo e não podiam ser monitorados ou gerenciados individualmente.

O NocoBase 2.0 introduz **uma arquitetura Multi-App e Multi-Espaço completamente nova**.

* **Plugin Multi-App** *(em desenvolvimento)*
  Permite a criação e gerenciamento dinâmicos de vários aplicativos independentes sem implantações separadas.
  Cada aplicativo é executado como uma instância independente com seu próprio banco de dados, plugins e configuração - em processos isolados ou compartilhados.
  O aplicativo pai pode monitorar e gerenciar o uso de recursos e o status dos sub-aplicativos, ideal para cenários multi-inquilinos.
* **Plugin Multi-Espaço**
  Permite isolamento lógico dentro de uma única instância - perfeito para cenários como multi-filiais ou multi-fábricas.
  A lógica de negócios, fluxos de trabalho e configurações permanecem consistentes, enquanto os dados permanecem completamente isolados.

[Saiba mais sobre Multi-Espaço](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Nova Visualização de Dados

O plugin de gráficos 1.x era baseado no Ant Design Charts e ECharts, adequado para casos simples, mas limitado para visualizações complexas, interativas ou vinculadas.

O NocoBase 2.0 introduz um **novo Plugin de Visualização de Dados** construído inteiramente no ECharts, suportando:

* Modo de configuração visual
* Modos SQL e JSON
* Interação orientada a eventos
* Vinculação de múltiplos gráficos e drill-down

E se SQL ou JSON parecer muito complexo - seu Funcionário de IA **Nathan** pode ajudar.

[Saiba mais sobre Visualização de Dados](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Sincronizando Estrutura do Banco de Dados & Alterando Tipos de Campo

Na versão 1.x, tabelas e campos só podiam ser criados através do Gerenciador de Fonte de Dados do NocoBase e os tipos de campo não podiam ser alterados posteriormente.

O NocoBase 2.0 agora permite:

* Sincronizar tabelas e campos existentes do seu banco de dados principal
* Alterar tipos de campo após a criação

Isso significa que você pode usar diretamente um esquema de banco de dados existente como sua fonte de dados principal.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Plugins Adicionais

### Histórico de Registros

O plugin Histórico de Registros rastreia automaticamente as alterações de dados - inserções, atualizações, exclusões - salvando snapshots e diffs para fins de auditoria e reversão.

[Saiba mais sobre Histórico de Registros](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Rascunhos de Formulários

O plugin Rascunhos de Formulários salva automaticamente os dados do rascunho enquanto os usuários preenchem formulários, evitando perda acidental.

### Novo Gerenciador de E-mail

Reconstruído com o FlowEngine, o novo Gerenciador de E-mail integra perfeitamente os Funcionários de IA para resumir, analisar e compor e-mails.

Ele também introduz salvamento automático de rascunhos e outras melhorias.

[Saiba mais sobre o Gerenciador de E-mail](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Atualizando do 1.x para o 2.0

Atualizar do 1.x para o 2.0 é simples - basta seguir o [guia oficial](https://v2.docs.nocobase.com/get-started/upgrading/docker).

No entanto, observe que o **NocoBase 2.0 está atualmente em alpha**, então espere alguma instabilidade.

Graças à **arquitetura desacoplada entre UI e dados** do NocoBase, seus aplicativos 1.x existentes permanecerão completamente intactos.

Ao criar novas páginas, agora você pode escolher entre os tipos **v1** e **v2** - selecione v2 para acessar os novos recursos do NocoBase 2.0.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
