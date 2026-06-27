---
title: "O que fez a principal empresa imobiliária do Japão migrar do Salesforce para o NocoBase de código aberto?"
description: "A HouseWell migrou do Salesforce para o NocoBase, passando de altos custos de longo prazo para um modelo flexível de compra única, de módulos rígidos para uma arquitetura aberta, e evoluindo para desenvolvedora e provedora de soluções do setor."
---

## **Introdução**

Eles tinham opções como Salesforce e Kintone. Então, por que este líder no setor imobiliário do Japão escolheu, no final, uma plataforma de código aberto — a NocoBase?

## **Quem é a HouseWell?**

No Japão, a Century 21 é um nome conhecido. Desde que entrou no mercado japonês em 1983, a Century 21 abriu quase mil lojas em todo o país, tornando-se uma marca líder no setor de agências imobiliárias do Japão.

![Century 21](https://static-docs.nocobase.com/1-cuikzt.PNG)

Dentro dessa enorme rede de franquias, o desempenho de uma empresa realmente se destaca. Por anos, ela tem estado consistentemente entre as melhores da Century 21 Japão, tornando-se uma das franqueadas mais respeitadas e influentes. Essa empresa é a **[HouseWell](https://housewell-group.jp/)**.

![HouseWell](https://static-docs.nocobase.com/2-r5onnn.PNG)

Com sede em Saitama, a HouseWell possui um modelo de negócios muito diversificado. Ela cobre uma ampla gama de áreas, incluindo compra e venda de imóveis, administração de aluguéis, reformas e construção, consultoria de seguros e serviços de TI.

## **RH: A Peça Faltante no Quebra-Cabeça Digital da HouseWell**

A HouseWell cresceu rápido — e sua equipe também, agora com mais de 110 funcionários.

Embora a empresa já tivesse se digitalizado em muitas áreas — usando Salesforce para dados de clientes e fluxos de trabalho de negócios — seus processos de RH e administrativos internos contavam uma história diferente. A maior parte ainda funcionava com formulários de papel e planilhas.

Veja o exemplo dos pedidos de férias. Cerca de 30 são submetidos a cada mês, mas o processo ainda envolve imprimir, assinar e passar papéis entre os departamentos. Atrasos, formulários perdidos e detalhes esquecidos eram comuns — aumentando os custos e frustrando a equipe.

Gerenciar dados de RH — desde estruturas de equipe até mudanças de cargo e planos anuais de contratação — não era melhor. As informações estavam espalhadas em arquivos, sem um sistema claro para rastreá-las ou analisá-las. Essa falta de visibilidade estava atrasando as decisões e enfraquecendo a eficiência da gestão.

À medida que o negócio se expandia, ficou claro que apenas o CRM não conseguia cobrir tudo. O RH também precisava de uma atualização digital.

Então, a HouseWell iniciou uma busca aprofundada por um sistema que pudesse funcionar junto com suas ferramentas existentes — mantendo-se flexível para o futuro.

## **Uma Escolha Cuidadosamente Considerada**

A HouseWell tinha três opções principais em análise, cada uma com seus próprios pontos fortes:

* **Continuar com o Salesforce:** O Salesforce é o CRM número um do mundo. É rico em recursos, usa tecnologia madura, tem um ecossistema forte e possui muitas histórias de sucesso no setor imobiliário.
* **Adotar o Kintone, uma plataforma low-code:** O Kintone é a principal plataforma low-code do Japão. É simples de usar, rápido de implantar e muito conhecido, com uma grande participação de mercado entre as empresas japonesas.
* **Escolher a NocoBase de código aberto:** Como uma plataforma no-code de código aberto, a NocoBase oferece modelagem de dados e personalização de IU altamente flexíveis. Ela também suporta implantação on-premise e um modelo de compra única.

Antes de tomar uma decisão final, a equipe fez uma comparação aprofundada dessas três opções:

### 1. Salesforce: Poderoso, mas com Escopo Limitado

O Salesforce é amplamente reconhecido como uma ferramenta poderosa no setor imobiliário. Ele oferece um rico conjunto de funcionalidades de CRM, processos padronizados e inúmeras integrações de terceiros — tudo bem adequado para grandes empresas que buscam gerenciamento de clientes, análise de dados e automação de vendas.

No entanto, durante uma avaliação mais aprofundada, a equipe da HouseWell encontrou vários desafios práticos:

* **Preocupações com Custos**: O Salesforce era usado principalmente pelas equipes de vendas e investimentos, enquanto outros departamentos tinham pouca necessidade das funções de CRM. Para apoiar as operações administrativas visadas neste projeto, licenças teriam que ser adquiridas para usuários que não precisam realmente dos recursos de CRM, aumentando significativamente os custos gerais.
* **Personalização Limitada**: Embora rico em recursos, as opções de personalização de interface e processo do Salesforce são relativamente limitadas na prática, dificultando a adaptação precisa do sistema às necessidades específicas das diversas áreas de negócios da HouseWell.

### 2.**Kintone: Fácil de Usar, mas Falta Flexibilidade**

Como uma plataforma nativa japonesa, o Kintone tem vantagens claras em facilidade de uso, operação e lançamento rápido de novos processos. Muitas pequenas e médias empresas gostam dele. A HouseWell inicialmente tinha grandes esperanças, mas uma análise mais aprofundada revelou:

* **Módulos Muito Rígidos:** O modelo low-code do Kintone permite a implantação rápida de processos de negócios. No entanto, seus módulos de sistema são bastante padronizados, oferecendo espaço limitado para personalização. Isso dificultou o atendimento às necessidades precisas de cenários de negócios complexos.
* **Escalabilidade Limitada:** A HouseWell planejava integrar seus sistemas de CRM, RH e fluxos de trabalho administrativos posteriormente. A arquitetura fechada do Kintone e suas capacidades limitadas de API mostraram-se uma desvantagem, incapazes de apoiar sua estratégia de longo prazo.

### 3.**NocoBase: Poderosa e Flexível**

Inicialmente, a NocoBase era apenas mais uma opção em sua lista de avaliação. Mas, à medida que a comparação se aprofundava, ela mostrava cada vez mais sua forte flexibilidade e controle.

* Capacidades altamente flexíveis de modelagem de dados e design de interface, que poderiam corresponder quase perfeitamente às necessidades de negócios da HouseWell.
* Um modelo de compra única, sem taxas de assinatura altas e contínuas, mantendo os custos gerais gerenciáveis.
* Fortes capacidades de integração de API, permitindo uma conexão perfeita com sistemas existentes como o Salesforce e fornecendo espaço para futuras integrações de sistemas.
* Completamente open-source, facilitando personalizações profundas e desenvolvimento adicional. Isso também fornece uma base técnica para potencialmente padronizar o sistema para uso externo posteriormente.

Após testes funcionais completos e avaliação de custos, a equipe concluiu que a NocoBase não é apenas altamente flexível em termos de funcionalidade, mas também se destaca em abertura e escalabilidade — tornando-se um sistema que pode evoluir e crescer junto com a empresa.

Após consideração cuidadosa, a HouseWell finalmente escolheu a NocoBase.

## **Da Decisão à Implantação: Como a NocoBase Mudou as Coisas?**

Assim que decidiram pela NocoBase, a equipe da HouseWell rapidamente começou a trabalhar na implementação.

### **Fase Um: Configuração Rápida de um Sistema Administrativo e de RH**

Como primeiro projeto, a HouseWell começou migrando seus processos administrativos e de RH, que eram baseados em papel e ineficientes, para o sistema NocoBase:

* **Digitalização completa do processo de solicitação de férias**

Anteriormente, cerca de 30 pedidos de férias por mês tinham que ser circulados como cópias em papel dentro da empresa. Com a NocoBase, os funcionários simplesmente enviam solicitações através de um formulário online. Os aprovadores recebem notificações instantâneas e podem aprová-los online. Todo o processo é suave e direto, reduzindo muito o erro humano e a perda de informações. Assim que o sistema entrou no ar, esse processo frequente tornou-se quase inteiramente sem papel imediatamente, levando a um claro aumento na eficiência da gestão.

![Digitalização completa do processo de solicitação de férias](https://static-docs.nocobase.com/3-ck72ql.png)

![Digitalização completa do processo de solicitação de férias](https://static-docs.nocobase.com/4-ekoebi.png)

* **Visibilidade mais clara das informações de RH**

Usando os recursos flexíveis de modelagem de dados e personalização da NocoBase, a HouseWell construiu rapidamente módulos para coisas como estrutura organizacional de funcionários, canais de recrutamento e estatísticas de RH. O departamento de RH agora pode ver o status de contratação em tempo real de cada departamento e como os funcionários estão distribuídos em diferentes funções. O panorama geral de RH da empresa tornou-se muito mais claro.

Comparado ao gerenciamento de informações por meio de planilhas e e-mails dispersos anteriormente, os ganhos de eficiência foram substanciais.

![Visibilidade mais clara das informações de RH](https://static-docs.nocobase.com/5-3aw62g.png)

### Fase Dois: Integração de Sistemas e Desenvolvimento do Pacote de Gestão Imobiliária

Antes de adotar a NocoBase, a HouseWell já usava o Salesforce para gerenciamento de clientes, com todos os detalhes dos clientes e registros de transações armazenados lá. À medida que continuavam usando a NocoBase, eles gradualmente perceberam que ela não era apenas adequada para uma gestão flexível de RH, mas também totalmente capaz de suportar o desenvolvimento de sistemas de CRM.

A equipe técnica rapidamente começou a trabalhar na integração do sistema:

* **Aproveitando as poderosas capacidades de API da NocoBase**, eles sincronizaram os dados de clientes existentes do Salesforce, permitindo o compartilhamento contínuo de dados. Essa integração eficiente permitiu que a equipe acessasse tanto as informações do cliente quanto os dados comerciais internos em um só lugar, evitando a entrada duplicada de dados e melhorando a consistência dos dados.
* **Usando os modelos de dados e layouts de página personalizáveis da NocoBase**, a HouseWell está agora desenvolvendo uma nova solução de gestão imobiliária adaptada para o setor, construída com base em sua experiência em gestão de clientes. (Lançamento planejado em breve)

Através deste processo, a NocoBase evoluiu de uma simples "ferramenta complementar" para a plataforma central da HouseWell para criar um sistema de negócios unificado.

### **Feedback Real Após a Implementação**

Após implementar a NocoBase, a equipe da HouseWell compartilhou um feedback claro:

* A flexibilidade do sistema e a personalização da IU atenderam perfeitamente às suas expectativas.
* As capacidades de integração de API superaram suas expectativas, tornando a integração de dados mais suave.
* Os custos gerais foram significativamente reduzidos, tornando-a muito mais econômica para uso a longo prazo.
* A equipe de suporte da NocoBase foi muito ágil, e quaisquer problemas que encontraram foram resolvidos rapidamente.

## **Ambições Maiores: De Usuário do Sistema a Provedor de Soluções**

A HouseWell não está parando apenas na atualização de seus próprios sistemas internos. Aproveitando sua profunda experiência no setor imobiliário, eles planejam usar a NocoBase para criar sistemas de gerenciamento de informações padronizados para o setor. Em seguida, pretendem oferecê-los como soluções replicáveis para outras empresas.

Graças à natureza open-source e ao modelo flexível de compra única da NocoBase, a HouseWell pode personalizá-la e desenvolvê-la livremente. Isso permite que eles adaptem perfeitamente as soluções às necessidades específicas de vários clientes no setor imobiliário.

Este movimento estratégico está transformando a HouseWell de simples usuária de sistemas internos em uma provedora de soluções para todo o setor imobiliário.

Isso não só os ajuda a recuperar rapidamente os custos de desenvolvimento do sistema, mas também abre novas fontes de receita para a empresa, multiplicando o valor de seu investimento em TI.

## **Conclusão**

A escolha da HouseWell pela NocoBase em vez do Salesforce ou Kintone foi muito mais do que uma simples decisão de software — foi um **movimento estratégico preciso e com visão de futuro**:

* **De** altos custos de longo prazo para um modelo de compra única flexível e econômico.
* **De** módulos funcionais rígidos para uma arquitetura aberta altamente personalizável.
* **De** ser um usuário de sistema para se tornar um desenvolvedor e provedor de soluções para o setor.

A história de sucesso da HouseWell nos mostra que **a verdadeira transformação digital está em encontrar uma solução que esteja verdadeiramente alinhada com suas necessidades de negócios e estratégia futura.**

Esperamos que a história da HouseWell inspire outras empresas.

**Leitura relacionada:**

* [Como a Second-Brain construiu um sistema de IA para instituições financeiras com a NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [Como a Marca Nº 1 de Gravadores de Voz com IA Construiu Seus Sistemas Internos](https://www.nocobase.com/en/blog/plaud)
* [Além das Planilhas: Gestão de Dados de Funcionários da Classmethod com a NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Como uma Fábrica de Móveis Construiu Seu Próprio ERP — Sem Necessidade de Codificação](https://www.nocobase.com/en/blog/olmon)
* [De Designer a Construtor: A Transformação Digital da L&A com a NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Como a KIGLAND Escalou a Produção de Máscaras de Anime Personalizadas com Ferramentas Open-Source](https://www.nocobase.com/en/blog/kigland)
