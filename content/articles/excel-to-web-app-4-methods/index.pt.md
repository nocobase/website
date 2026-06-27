---
title: "4 Maneiras de Criar Rapidamente Aplicativos Web a partir de Dados do Excel"
description: "Este artigo compara quatro formas comuns de transformar dados do Excel em aplicativos web e explica em qual estágio de negócios cada abordagem se encaixa melhor e onde seus limites aparecem."
---

Muitas empresas não começam com sistemas formais para seus processos internos.

Ao revisarmos casos de clientes recentemente, notamos um padrão muito comum. Nos estágios iniciais de um negócio, ou antes que os sistemas internos estejam totalmente implementados, muitas empresas dependem do Excel para gerenciar clientes, rastrear pedidos, acompanhar projetos, lidar com aprovações e manter registros de inventário.

💡Leia mais: [Como construir rapidamente um sistema para substituir o Excel? (Guia completo)](https://www.nocobase.com/en/blog/how-to-quickly-build-a-real-system-to-replace-excel)

Mas, à medida que mais e mais dados de negócios e lógica de fluxo de trabalho são colocados em planilhas, as limitações do Excel gradualmente se tornam mais difíceis de ignorar. Muitas planilhas que eram originalmente usadas apenas para manutenção de registros acabam começando a assumir parte do papel de ferramentas de CRM, ERP, ticketing ou gerenciamento de projetos.

É exatamente por isso que transformar fluxos de trabalho baseados em Excel em aplicações web se tornou uma necessidade prática para cada vez mais empresas. Ainda assim, diferentes abordagens se adequam a diferentes estágios de negócio, envolvem diferentes níveis de esforço de implementação e oferecem diferentes níveis de flexibilidade a longo prazo. Nas seções a seguir, examinaremos várias abordagens comuns e veremos qual delas pode se adequar melhor ao seu estágio atual.

💡Caso em destaque: [Do Papel ao Digital: Como Este Fabricante Médico Escolheu a NocoBase](https://www.nocobase.com/en/blog/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase)

**Antes de entrarmos em detalhes, a tabela abaixo fornece uma visão geral rápida das 4 abordagens abordadas neste artigo.**


| Dimensão             | Método 1: Plataforma no-code                                                    | Método 2: Plataforma de dados online                                               | Método 3: Ferramentas de geração por IA                                                         | Método 4: Planilhas online                             |
| -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Foco principal       | Sistema de negócios                                                               | Estrutura de dados                                                               | Protótipos de aplicativos / páginas                                                                | Arquivo de planilha                                          |
| Objetivo principal   | Transformar Excel em um sistema formal                                               | Mover dados online e estruturá-los primeiro, depois construir aplicativos gradualmente           | Criar rapidamente demonstrações, protótipos ou aplicativos leves                                 | Suportar edição colaborativa online                      |
| Capacidades típicas | Modelagem de dados, construção de páginas, permissões, fluxos de trabalho, extensões de plugins       | Tabelas relacionadas, visualizações, formulários, automação leve                         | Geração de páginas por linguagem natural, scaffolding front-end e back-end, iteração rápida | Compartilhamento, colaboração, comentários, filtragem básica         |
| Ferramentas representativas | NocoBase, Appsmith, Budibase, ToolJet                                         | Airtable, Feishu Bitable, Baserow                                            | Lovable, Bolt, v0                                                                     | Excel para a web, Google Sheets, WPS Online Sheets       |
| Melhor para         | Cenários de negócios formais como CRM, ERP, ticketing e gerenciamento de projetos | O estágio de transição do Excel para um sistema mais estruturado                  | Validação de protótipos, demonstrações internas, experimentação rápida                           | Colaboração leve e compartilhamento de curto prazo          |
| Pontos fortes       | Altamente extensível e bem adequado para uso a longo prazo                           | Mais rápido para começar e útil para organizar dados primeiro                    | Mais rápido para lançar e menor custo para testar ideias                                   | Fácil de aprender e a transição mais leve a partir do Excel          |
| Limitações          | Requer algum trabalho inicial para organizar a estrutura de dados e os processos           | Bom para transição, mas nem sempre adequado para operações de negócios complexas | Nem sempre adequado para permissões complexas ou manutenção de longo prazo                  | Ainda é uma planilha em sua essência, não uma aplicação formal |

---

💬 Ei, você está lendo o blog da NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, alimentada por IA, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---


## Método 1: Use uma plataforma no-code extensível para transformar o Excel em um sistema de negócios formal

### Ideia central

O núcleo desta abordagem é atualizar os dados de negócios já armazenados no Excel para uma aplicação web real, em vez de continuar dependendo de planilhas como a principal forma de executar o negócio.

Ferramentas típicas para esta abordagem incluem plataformas no-code ou low-code que suportam construção de aplicativos, modelagem de dados, configurações de permissão e extensões de fluxo de trabalho, como NocoBase, Appsmith, Budibase e ToolJet.

Este artigo usa o NocoBase como exemplo principal porque ele é projetado para construir aplicações empresariais, ferramentas internas e muitos tipos de sistemas de negócios. Ele também suporta implantação privada, extensões baseadas em plugins e crescimento do sistema a longo prazo.

Ao contrário de muitas ferramentas que geram páginas diretamente de planilhas, o NocoBase é construído em torno de uma abordagem orientada por modelo de dados. A estrutura de dados e a apresentação da página são separadas. Você define o modelo de dados primeiro, depois decide como as páginas devem aparecer. A vantagem é que, à medida que o negócio continua a crescer, a equipe não precisa ficar presa ao Excel. Seja para otimizar a estrutura do banco de dados, adicionar relacionamentos entre tabelas ou conectar-se a outras fontes de dados como MySQL, PostgreSQL, MongoDB, REST API ou GraphQL, o sistema pode continuar se expandindo.

Se este tipo de plataforma também incluir capacidades nativas de IA, torna-se ainda mais útil para atualizações de negócios posteriores. O funcionário de IA do NocoBase não é apenas uma interface de chat. Ele pode entender o contexto com base na página, dados e estrutura de tabela atuais, e então executar ações reais como consultar dados, preencher formulários e atualizar registros. Isso pode ser especialmente valioso para tarefas de operações, atendimento ao cliente, análise de dados ou fluxos de trabalho repetitivos.

> Links relacionados
>
> Site oficial do NocoBase: [https://www.nocobase.com/](https://www.nocobase.com/)
>
> Documentação do NocoBase: [https://docs.nocobase.com/](https://docs.nocobase.com/)

### Equipes adequadas

* Já usam Excel para gerenciar clientes, pedidos, projetos, tickets ou fluxos de aprovação
* Querem fazer upgrade gradualmente com base nas planilhas existentes, em vez de reconstruir tudo do zero
* Esperam adicionar permissões, fluxos de trabalho, automação ou colaboração entre equipes posteriormente
* Têm requisitos de segurança de dados, implantação privada ou escalabilidade de longo prazo
* Têm capacidade básica de implementação ou estão dispostos a organizar a estrutura de negócios primeiro

### Abordagem de implementação

**1. Comece criando tabelas e campos** Divida os dados de clientes, pedidos, projetos, tickets, aprovações e outros do Excel em tabelas separadas, depois defina os tipos de campo e os relacionamentos entre as tabelas.

![nocobase1.png](https://static-docs.nocobase.com/nocobase1-dymi39.png)

![nocobase2.png](https://static-docs.nocobase.com/nocobase2-mek7bh.png)

**2. Em seguida, importe os dados do Excel para essas tabelas** Assim que a estrutura da tabela estiver pronta, importe os dados existentes do Excel para que os registros que estavam espalhados pelas planilhas sejam colocados em tabelas e campos devidamente estruturados.

**3. Configure páginas de lista, formulário e detalhes** Após os dados estarem no sistema, configure páginas de lista, páginas de formulário e páginas de detalhes para que os registros possam ser visualizados, adicionados, editados e mantidos.

![nocobase3.png](https://static-docs.nocobase.com/nocobase3-r25mgk.png)

**4. Configure funções e permissões** Assim que as páginas estiverem utilizáveis, defina o acesso ao menu, as permissões de ação e o escopo de dados por função, para que diferentes usuários possam ver conteúdos diferentes e lidar com dados diferentes.

![nocobase4.png](https://static-docs.nocobase.com/nocobase4-uyjo0g.png)

**5. Adicione fluxos de trabalho e capacidades de extensão** Em seguida, adicione fluxos de status, lembretes automáticos, tratamento de processos, notificações e quaisquer APIs, bancos de dados ou capacidades de IA que você possa querer conectar posteriormente, para que o sistema possa realmente começar a apoiar as operações diárias do negócio.

![nocobase5.png](https://static-docs.nocobase.com/nocobase5-wu14im.png)

![nocobase6.png](https://static-docs.nocobase.com/nocobase6-qkjbcs.png)

### Limitações de uso

* Geralmente requer mais trabalho inicial, pois você precisa organizar a estrutura de dados e os processos de negócios primeiro
* Não requer codificação pesada, mas alguém ainda precisa entender modelos de dados, estrutura de páginas e lógica de permissão
* É mais adequado para uso de médio e longo prazo, não para construir rapidamente uma página temporária
* O software em si pode não ser o maior custo. Em muitos casos, o custo real vem da implementação, design de processos, migração e manutenção contínua

🎉 [Tutorial do NocoBase 2.0](https://docs.nocobase.com/tutorials/v2/) já está disponível. Usando um sistema de ticketing como exemplo, ele mostra como construir um sistema de negócios completo do zero.


## Método 2: Mova os dados para uma plataforma de dados online primeiro, depois construa aplicativos gradualmente

### Ideia central

A ideia por trás desta abordagem é primeiro mover os dados espalhados pelas planilhas para uma plataforma online e estruturada, e depois construir visualizações, recursos de colaboração e fluxos de trabalho leves em torno desses dados. Funciona como uma camada de transição entre o Excel e um sistema de negócios mais completo. Você começa organizando os dados claramente, depois decide se deve continuar evoluindo para uma aplicação mais completa posteriormente.

Ferramentas adequadas para esta abordagem geralmente incluem plataformas de dados online que suportam gerenciamento no estilo de planilha, configurações de campo, múltiplas visualizações e automação básica, como Airtable, Baserow, Coda e Smartsheet.
💡Leia mais: [NocoBase vs Airtable: Uma Alternativa Open-Source Flexível e Personalizável](https://www.nocobase.com/en/blog/nocobase-vs-airtable)

Para muitas equipes que já usam ferramentas de colaboração online, o Airtable geralmente é um lugar fácil para começar. Por um lado, ele mantém uma experiência no estilo de planilha, então a curva de aprendizado é relativamente baixa. Por outro, também oferece campos, visualizações, registros vinculados e automação leve, o que o torna uma boa opção para muitos cenários de negócios mais leves que eram tratados anteriormente no Excel.

Pode ser usado para organizar e manter informações de clientes, progresso de projetos, cronogramas de campanhas, gerenciamento de conteúdo, acompanhamento de leads, ticketing simples, registros operacionais e dados semelhantes. Ele também suporta diferentes visualizações, formulários, comentários e automação básica além disso. Para organizações que ainda não estão prontas para construir sistemas complexos, mas já querem tornar os dados do Excel mais estruturados e colaborativos online, ferramentas como essa geralmente são suficientes.

> Links relacionados
>
> Site oficial do Airtable: [https://www.airtable.com/](https://www.airtable.com/)
>
> Documentação do Airtable: [https://support.airtable.com/](https://support.airtable.com/)

### Equipes adequadas

Já usam Excel para gerenciar clientes, pedidos, projetos ou dados operacionais, mas estão principalmente com dificuldades de compartilhamento e manutenção
Querem mover dados online e estruturá-los primeiro, depois adicionar páginas ou fluxos de trabalho gradualmente
Precisam de gerenciamento de campos mais claro, visualizações filtradas e métodos de colaboração do que o Excel pode oferecer
Querem validar uma estrutura de negócios a baixo custo antes de decidir se devem migrar para uma solução mais sistemática
Atualmente se importam mais com a velocidade de adoção e eficiência da colaboração do que construir um sistema completo de uma só vez

### Abordagem de implementação

**1. Primeiro importe os dados do Excel para o Airtable**
Mova seus dados existentes de clientes, pedidos, projetos, tickets ou operacionais para o Airtable, para que as informações que antes estavam espalhadas em arquivos locais se tornem tabelas online compartilhadas que várias pessoas podem manter juntas.

![airtable1.png](https://static-docs.nocobase.com/airtable1-h2b0rl.png)![]()

**2. Em seguida, organize campos, visualizações e relacionamentos entre tabelas**

Após a importação, você geralmente precisará limpar os nomes dos campos, tipos de dados e relacionamentos básicos primeiro, depois configurar visualizações como Grade, Kanban, Calendário, Galeria ou Formulário para diferentes usuários ou casos de uso. Isso ajuda os dados a irem além de um arquivo de planilha e se tornarem uma estrutura mais adequada para colaboração online.

![airtable2.png](https://static-docs.nocobase.com/airtable2-vbqvnb.png)

**3. Adicione colaboração e fluxos de trabalho leves conforme necessário**
Assim que a estrutura de dados estiver relativamente estável, você pode continuar adicionando comentários, lembretes, automações simples, aprovações leves ou páginas de Interface, permitindo que a plataforma suporte gradualmente mais colaboração e operações diárias.


### Limitações de uso

Mais adequado para o estágio de transição de colocar dados online e estruturá-los, mas nem sempre adequado para operações de negócios complexas
À medida que permissões, fluxos de trabalho e relacionamentos entre tabelas se tornam mais complexos, os limites da própria plataforma se tornam mais visíveis
Útil para reunir dados primeiro, mas nem sempre suficiente para suportar a operação contínua de um sistema completo
Se você precisar posteriormente conectar bancos de dados, APIs, módulos de negócios ou controles de permissão mais granulares, outra etapa de upgrade geralmente ainda é necessária

## Método 3: Use ferramentas de IA para gerar aplicativos ou páginas diretamente

### Ideia central

Esta abordagem não começa organizando completamente estruturas de dados, permissões e fluxos de trabalho. Em vez disso, usa linguagem natural para gerar rapidamente páginas, protótipos ou aplicativos simples, facilitando a validação de ideias e a experimentação a um custo inicial menor.

Ferramentas típicas nesta categoria incluem Lovable, Bolt e v0. Elas são mais adequadas para transformar rapidamente uma ideia em uma página ou aplicativo que pode ser visualizado, clicado e revisado. Lovable, por exemplo, é uma ferramenta representativa nesta categoria. É particularmente útil para gerar rapidamente protótipos de aplicativos web, páginas e ferramentas leves através de linguagem natural. Com base em descrições de texto, pode gerar interfaces front-end e também pode trabalhar com recursos de back-end, banco de dados e autenticação para ajudar a criar uma primeira versão do aplicativo e suportar alterações e publicação posteriores.

### Equipes adequadas

* Precisam criar rapidamente uma demonstração, protótipo ou versão de apresentação interna
* Ainda estão explorando requisitos, e muitos recursos ou fluxos de trabalho não estão totalmente definidos
* Querem validar a estrutura da página, design de interação ou direção do produto primeiro
* Se importam mais com velocidade do que construir uma arquitetura de sistema completa desde o início
* Têm espaço para experimentação e podem aceitar uma reconstrução ou migração posterior

### Abordagem de implementação

**1. Use linguagem natural para gerar a primeira versão da página ou estrutura do aplicativo** Comece descrevendo claramente a necessidade em linguagem natural, como uma página de gerenciamento de clientes, um painel de acompanhamento de projetos ou uma ferramenta interna simples, e gere a primeira versão diretamente.

![Lovable1.png](https://static-docs.nocobase.com/Lovable1-wt4dfd.png)

**2. Em seguida, continue refinando campos, interações e lógica** Assim que a primeira versão for gerada, continue adicionando formulários, botões, estrutura de página e interações básicas passo a passo para que se aproxime do cenário real que você deseja validar ou apresentar.

**3. Finalmente, use para validação, demonstrações ou testes de curto prazo** Se o objetivo é apenas validação de protótipo, propostas de projeto, páginas leves ou uma versão online de curto prazo, isso geralmente é suficiente. Em muitos casos, o valor real dessas ferramentas é que elas ajudam as equipes a entrar em discussão e teste muito mais rápido.

![Lovable2.png](https://static-docs.nocobase.com/Lovable2-yex95o.png)

### Limitações de uso

* Mais adequado para protótipos, demonstrações e experimentação rápida, mas nem sempre para uso em produção complexo
* A geração de páginas é muito rápida, mas estruturas de dados, sistemas de permissão e lógica de fluxo de trabalho geralmente ainda precisam de trabalho de acompanhamento substancial
* É fácil criar a interface e a interação primeiro, mas isso não significa que a estrutura subjacente está pronta para operação de longo prazo
* Se o produto posteriormente precisar suportar permissões complexas, relacionamentos entre tabelas, design de banco de dados ou manutenção de longo prazo, geralmente ainda precisa ser redesenhado

💡Leia mais: [Comparação e Casos de Uso de 6 Ferramentas de Desenvolvimento com Suporte a RBAC](https://www.nocobase.com/en/blog/6-developer-tools-with-rbac-support)

* Para muitas organizações, esta abordagem é mais adequada para exploração e validação iniciais do que para servir diretamente como a forma final do sistema

> Links relacionados
>
> Site oficial do Lovable: [https://lovable.dev/](https://lovable.dev/)
>
> Documentação do Lovable: [https://docs.lovable.dev/](https://docs.lovable.dev/)

## Método 4: Use planilhas online para compartilhamento e colaboração

### Ideia central

O objetivo desta abordagem não é transformar o Excel em um aplicativo ou sistema, mas sim mover as planilhas para online e continuar usando-as para compartilhamento, edição e colaboração.

Ferramentas típicas nesta categoria incluem Microsoft Excel para a web, Google Sheets e WPS Online Sheets. Estas são essencialmente planilhas online. O trabalho ainda gira em torno do próprio arquivo de planilha, mas acontece em um ambiente online em vez de local.

Este artigo usa o Google Sheets como exemplo. É mais adequado para cenários que ainda não exigem transformação completa em nível de sistema, mas já precisam de melhor suporte para acesso compartilhado e colaboração online. Para equipes que já estão acostumadas com o Excel, esta abordagem requer quase nenhum reaprendizado e muito pouco redesenho estrutural, então o custo de mudança é menor.

💡Leia mais: [As 8 Melhores Alternativas ao Google Sheets com Análise Completa de Custo e Capacidade](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)

Pode suportar co-edição online, links compartilhados, comentários, filtragem simples e controle de acesso básico. Também é uma opção prática para mover planilhas de manutenção de rotina para online, para que as equipes possam continuar colaborando mais facilmente.

### Equipes adequadas

* Principalmente precisam que várias pessoas compartilhem e editem a mesma planilha ao mesmo tempo
* Estão enfrentando principalmente problemas como arquivos sendo passados, confusão de versões e atualizações inconsistentes
* Ainda não têm uma necessidade clara de construção de sistema formal
* Têm lógica de negócios relativamente simples focada em registro, resumo e manutenção
* Se importam mais com baixas barreiras e usabilidade imediata do que com extensibilidade de longo prazo ou capacidade do sistema

### Abordagem de implementação

**1. Importe arquivos Excel locais para um ambiente online** Mova os arquivos Excel que estavam originalmente armazenados localmente ou em uma unidade compartilhada para um espaço de trabalho online, para que a equipe possa acessá-los e mantê-los a partir de um ponto de entrada compartilhado.

![Google Sheets1.png](https://static-docs.nocobase.com/Google%20Sheets1-22ps4j.png)

**2. Use compartilhamento, permissões e comentários para colaborar** Substitua anexos de e-mail e atualizações de versão repetidas por compartilhamento online, edição por várias pessoas, discussões em comentários e sincronização em tempo real, para que os problemas de colaboração mais imediatos sejam resolvidos primeiro.

![Google Sheets2.png](https://static-docs.nocobase.com/Google%20Sheets2-zr1r6p.png)

**3. Adicione métodos básicos de gerenciamento conforme necessário** A partir daí, você pode organizar ainda mais a planilha através de planilhas, configurações simples de permissão, filtragem e visualizações, tornando mais fácil para várias pessoas manterem juntas.

![Google Sheets3.png](https://static-docs.nocobase.com/Google%20Sheets3-ipg6jg.png)

### Limitações de uso

* Ainda é uma planilha em sua essência, não uma aplicação web formal
* Mais adequado para colaboração leve e compartilhamento online do que para lidar com processos de negócios complexos
* Pode resolver problemas de controle de versão e colaboração primeiro, mas pode não resolver problemas mais profundos relacionados a permissões, fluxos de trabalho ou estrutura do sistema
* Para muitas organizações, este é o primeiro passo mais leve, mas geralmente não é o destino final na mudança do Excel para sistemas

> Links relacionados
>
> Site oficial do Google Sheets: [https://workspace.google.com/products/sheets/](https://workspace.google.com/products/sheets/)
>
> Documentação do Google Sheets: [https://support.google.com/docs/?hl=en](https://support.google.com/docs/?hl=en)

## FAQ

### 1. As permissões do Excel não são detalhadas o suficiente. Para o que devemos migrar?

Se você já precisa definir quem pode visualizar, editar ou aprovar, então pode ser hora de fazer um upgrade diretamente e usar uma plataforma como **NocoBase** para construir CRM, ticketing, aprovação ou sistemas de gerenciamento interno.

### 2. As ferramentas de geração de aplicativos por IA são adequadas para sistemas de negócios formais?

Elas são mais adequadas para protótipos, demonstrações, MVPs ou experimentação inicial, e não são ideais como a solução final para sistemas de negócios complexos. Se você simplesmente deseja criar uma primeira versão rapidamente, ferramentas como **Lovable** podem funcionar bem.

### 3. Se várias planilhas do Excel precisam manter relacionamentos entre si, qual método é mais adequado?

Se seus dados já foram divididos em tabelas de clientes, tabelas de pedidos, tabelas de projetos e tabelas de tickets, e esses relacionamentos precisam ser mantidos continuamente, então planilhas comuns geralmente não são mais suficientes. Nesse caso, uma plataforma orientada por modelo de dados como **NocoBase** é mais adequada para gerenciamento estruturado em nível de sistema.

### 4. Em que ponto os usuários do Excel devem começar a considerar a migração para um sistema real?

Assim que o Excel começar a lidar com colaboração de várias pessoas, controle de permissão, mudanças de status e relacionamentos entre tabelas, geralmente é um sinal de que vale a pena considerar um upgrade. Se o fluxo de trabalho já está próximo de cenários de CRM, ERP, ticketing ou gerenciamento de projetos, então uma plataforma no-code extensível como **NocoBase** pode ser um próximo passo adequado.

### 5. Se os requisitos ainda não estão claros, qual ferramenta é o lugar mais seguro para começar?

Se o objetivo atual é simplesmente organizar dados online e estruturá-los primeiro, então **Airtable** ou **Feishu Bitable** geralmente seriam um ponto de partida melhor.

**O Excel ainda é uma ferramenta eficaz para muitas equipes no trabalho diário. Mas, à medida que as necessidades de negócios continuam a crescer, as planilhas sozinhas muitas vezes se tornam menos capazes de suportar o fluxo de trabalho completo. Nessa situação, introduzir ferramentas ou sistemas mais adequados geralmente é a escolha mais prática. Esperamos que este artigo lhe dê uma referência útil e sinta-se à vontade para compartilhá-lo com outras pessoas que estão pensando sobre o mesmo problema.**


**Leitura relacionada:**

* [Não Apenas PostgreSQL: Comparando 5 Plataformas No-Code/Low-Code com Suporte a Banco de Dados Externo](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Guia de Seleção de Ferramentas de Gerenciamento de Projetos Open Source, Edição 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [Como Construir um CRM Personalizado com PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 Projetos de IA no GitHub para Observar em 2026: Não Apenas OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
* [Melhor CRM de IA Open Source: NocoBase vs Twenty vs Krayin](https://www.nocobase.com/en/blog/best-ai-crm-open-source-nocobase-twenty-krayin)
* [Top 3 ERPs Open Source com IA no GitHub: NocoBase vs Odoo vs ERPNext](https://www.nocobase.com/en/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)
* [5 Ferramentas de Gerenciamento de Projetos com IA Open Source Mais Populares no GitHub](https://www.nocobase.com/en/blog/5-most-popular-open-source-ai-project-management-tools-on-github)
* [6 Melhores Sistemas de Ticketing com IA Open Source](https://www.nocobase.com/en/blog/6-best-open-source-ai-ticketing-systems)
* [4 Ferramentas de Gerenciamento de Dados Open Source para Sistemas de Negócios](https://www.nocobase.com/en/blog/4-open-source-data-management-tools-for-business-systems)
