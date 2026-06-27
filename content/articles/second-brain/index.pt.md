---
title: "Como a Second-Brain construiu um sistema de IA para instituições financeiras com NocoBase"
description: "A empresa de IA Second-Brain, sediada em Hong Kong, usou o NocoBase para superar desafios de alta segurança e ciclos curtos, construindo um sistema de IA para empresas financeiras, alcançando entrega eficiente e acúmulo de capacidades."
---

## A Escolha Crítica de uma Startup de IA

A [Second-Brain](http://www.dbl-brain.com/) é uma startup de IA com sede em Hong Kong, fundada por uma equipe com experiência em finanças e consultoria. Eles são especializados na construção de sistemas de tomada de decisão baseados em IA para empresas.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

Em ambientes empresariais B2B, a parte mais difícil de construir sistemas de IA não são os modelos em si — mas os dados confusos e fragmentados por trás deles. Políticas internas, fluxos de trabalho e registros de negócios geralmente existem em silos, em formatos inconsistentes e, às vezes, até se contradizem. Sem limpar e estruturar esses dados, a IA simplesmente não consegue gerar insights significativos.

Para permitir que a IA "entenda" uma empresa, o primeiro passo da Second-Brain é construir uma camada fundamental que consolide o conhecimento empresarial proprietário, incluindo regras e regulamentos internos, processos de negócios e padrões de conformidade externos.

Ao desenvolver um sistema de conhecimento de IA para um cliente bancário, a Second-Brain encontrou desafios significativos de entrega:

* Suporte a **centenas de páginas** com controle de permissão intrincado
* Implantação totalmente offline **sem acesso a serviços online**
* **Prazo de entrega apertado** sem compromisso com a experiência do usuário

Com um forte foco em modelos de IA e design de produto vertical, a Second-Brain precisava de uma espinha dorsal de sistema que fosse **flexível, auto-hospedada e rápida de implementar** — com suporte poderoso para modelagem e configuração de dados.

## Por que o NocoBase?

Quando o projeto começou, a Second-Brain analisou cuidadosamente várias plataformas low-code e no-code. Isso incluiu várias ferramentas SaaS e projetos de código aberto, tanto nacionais quanto internacionais. No entanto, problemas com opções de implantação, licenciamento ou controle de código significavam que elas não conseguiam atender às rígidas necessidades do cliente para implantação offline e segurança da informação.

Em um determinado momento, eles até consideraram voltar a uma "abordagem tradicional": desenvolver todo o front-end e back-end internamente. Este método oferecia grande controle e ajudava a proteger a propriedade intelectual (PI). Mas com um prazo de entrega apertado e altas expectativas do cliente, esse caminho era muito caro e arriscado.

Exatamente quando a equipe estava lutando com essa decisão, eles descobriram o NocoBase.

A equipe foi atraída pela arquitetura e princípios do NocoBase: **ele não depende de SaaS, oferece flexibilidade e é customizável, extensível e entregável**. Sua natureza de código aberto permitiu que a Second-Brain obtivesse uma compreensão profunda de como o NocoBase funciona, ajudando-os a responder rapidamente ao feedback do cliente.

No final, a Second-Brain escolheu o NocoBase como a plataforma fundamental para seu sistema e começou a construir e entregar o projeto. O verdadeiro desafio não foi apenas escolher a ferramenta, mas como usá-la para construir um sistema de aplicação de IA complexo e orientado a dados e entregá-lo rapidamente.

## Implementação do Projeto: Desafios e Soluções

Este projeto não se tratava apenas de construir uma plataforma tradicional de gerenciamento de conhecimento — tratava-se de criar uma base de conhecimento confiável e de longo prazo que a IA pudesse realmente entender e usar.

O objetivo era limpar, classificar e modelar regulamentos internos e regras de negócios não estruturados, e então expô-los por meio de APIs padronizadas para acesso pelo modelo de IA. Isso exigia capacidades avançadas em modelagem de dados, organização e design de interface.

Como o cliente opera no setor financeiro, a segurança era primordial. **Toda a implantação tinha que ser executada totalmente offline, e cada atualização tinha que passar por um processo de aprovação e transferência fisicamente isolado.**

Assim que o NocoBase se mostrou tecnicamente viável, a Second-Brain avançou com a arquitetura da solução e a seleção de tecnologia, eventualmente ganhando a licitação e impulsionando o projeto.

O NocoBase serviu como a espinha dorsal do sistema, permitindo que a equipe:

* **Transformasse documentos e políticas regulatórias em dados estruturados e padronizados** que os modelos de IA pudessem consumir

![Transformar documentos e políticas regulatórias em dados estruturados e padronizados](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Alimentasse a infraestrutura de dados por trás do módulo de perguntas e respostas de IA**, permitindo:
  * Perguntas e respostas do dia a dia e consultas relacionadas a políticas
  * Consultas de negócios abrangendo vários conjuntos de dados
  * Análises voltadas para a gestão que entregam conclusões estruturadas

![Alimentar a infraestrutura de dados por trás do módulo de perguntas e respostas de IA](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **Suportar fluxos de trabalho de IA com ferramentas internas** como:Pré-processamento de documentos (por exemplo, converter PDFs, arquivos Word ou imagens em texto extraível)

  ![Pré-processamento de documentos](https://static-docs.nocobase.com/4-sdv8mt.png)

  Gerando pares de perguntas e respostas a partir de corpora selecionados para enriquecer conjuntos de dados de ajuste fino.![Gerando pares de perguntas e respostas](https://static-docs.nocobase.com/5-hb6nly.png)
* **Construir um plugin ECharts personalizado para visualizar relacionamentos** entre regras e regulamentos como um grafo de conhecimento.

![Plugin ECharts](https://static-docs.nocobase.com/6-qalqnu.png)

## A Arquitetura de Plugins: Uma Surpresa Agradável

Ao lidar com requisitos rigorosos de segurança, **o design baseado em plugins do NocoBase provou ser um divisor de águas tanto para implantação quanto para colaboração**.

A Second-Brain modularizou os recursos principais em plugins individuais — então, toda vez que o sistema precisava ser atualizado, eles podiam enviar apenas os plugins atualizados para aprovação. Isso tornou muito mais fácil cumprir o processo de revisão do cliente e reduziu drasticamente as despesas gerais de varreduras de segurança e testes. Foi um ajuste ideal para instituições financeiras com controle rígido sobre atualizações de software.

Os benefícios não pararam por aí. **A abordagem de plugin também aumentou a velocidade de desenvolvimento da equipe.**

Levou cerca de duas semanas para criar o primeiro plugin enquanto descobria a estrutura e o modelo ideais. Mas depois disso, novos plugins podiam ser clonados e personalizados em uma fração do tempo.

Eles agora desenvolveram quase 20 plugins cobrindo vários módulos como visualização de grafos, gerenciamento de permissões e limpeza de dados. Isso construiu uma biblioteca de ativos reutilizáveis para entregas futuras.

## Insights da Linha de Frente do Uso no Mundo Real

Ao longo do processo de entrega, a Second-Brain compartilhou várias conclusões importantes de trabalhar com o NocoBase em produção.

**1. Estabilidade**

Mesmo com iterações frequentes, o NocoBase manteve uma forte consistência de versão. **O sistema nunca ficou indisponível devido a uma atualização** — um fator crítico ao trabalhar com clientes do setor financeiro.

> "O NocoBase tem sido impressionantemente consistente entre as versões. Não encontramos nenhuma falha durante atualizações entre versões — o que, honestamente, é bastante raro." — Zhengxing Yang, Líder Técnico na Second-Brain

**2. Colaboração**

A Second-Brain teve uma colaboração tranquila e responsiva com a equipe técnica do NocoBase durante todo o ciclo de entrega. De correções de bugs a solicitações de recursos, cada resposta foi oportuna e útil.

Este modelo de trabalho "código aberto, mas nunca sozinho" foi um facilitador chave em um projeto de alto risco e alta segurança.

Embora o projeto esteja agora concluído, suas ferramentas e abordagem continuam a moldar como o cliente opera hoje.

## Conclusão

A Second-Brain entregou um sistema de IA complexo e de alta segurança com uma equipe enxuta. Ao confiar no NocoBase para lidar com a base do sistema, a equipe ficou livre para canalizar sua energia na construção de capacidades de IA que realmente importavam.

É exatamente isso que o NocoBase pretende fazer: **libertar as equipes do desenvolvimento repetitivo de sistemas, para que possam se concentrar em trabalhos criativos e de alto impacto que geram valor real para os negócios**.

Em indústrias com demandas rigorosas de segurança e requisitos complexos, este projeto mostra como uma plataforma no-code e low-code verdadeiramente flexível pode redefinir o que é possível na entrega de sistemas empresariais.

**Leitura relacionada:**

* [Como a Marca Nº 1 de Gravadores de Voz com IA Construiu Seus Sistemas Internos](https://www.nocobase.com/en/blog/plaud)
* [Além das Planilhas: Gerenciamento de Dados de Funcionários da Classmethod com NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Como uma Fábrica de Móveis Construiu Seu Próprio ERP — Sem Necessidade de Codificação](https://www.nocobase.com/en/blog/olmon)
* [De Designer a Construtor: A Transformação Digital da L&A com NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Como a KIGLAND Escalou a Produção de Máscaras de Anime Personalizadas com Ferramentas de Código Aberto](https://www.nocobase.com/en/blog/kigland)
* [Como um Escritório de Advocacia com Mais de 400 Advogados Simplifica o Gerenciamento de Comissões com NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
