---
title: "Sistema de Tickets com IA Construído com NocoBase 2.0"
description: "Uma solução de tickets com IA mais extensível quando os sistemas prontos para uso são insuficientes."
---

Sistema de tickets com IA construído no NocoBase 2.0, pronto para implantar e estender.

Introdução: [https://www.nocobase.com/en/solutions/ticketing-v2](https://www.nocobase.com/en/solutions/ticketing-v2)

Documentação: [https://v2.docs.nocobase.com/en/solution/ticket-system/](https://v2.docs.nocobase.com/en/solution/ticket-system/)

![ticketing.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(1)-x5nrzk.png)

## Construído para Mudanças

Em cenários de suporte ao cliente, operações de TI, manutenção de equipamentos e service desk interno, o sistema de tickets é uma parte fundamental das operações empresariais.

No entanto, na prática, muitas equipes enfrentam os mesmos desafios:

* As solicitações de tickets vêm de todos os lugares: formulários, e-mails e ferramentas de atendimento ao cliente, cada um tratado separadamente
* A classificação e atribuição de tickets dependem muito do esforço manual, levando a baixa eficiência e erros frequentes
* Os SLAs existem no papel, mas são difíceis de rastrear e aplicar na prática
* Os mesmos problemas continuam recorrendo, enquanto a experiência e as soluções não se acumulam ao longo do tempo

**É possível construir uma solução de tickets que possa ser lançada rapidamente e ainda evoluir à medida que os requisitos de negócios mudam?**

Este é o problema central que a **solução de tickets com IA do NocoBase** foi projetada para resolver.

## Limitações dos Sistemas de Tickets Tradicionais

Com base em nossa pesquisa, a maioria das equipes acaba escolhendo uma das seguintes opções:

### SaaS de Tickets

As soluções SaaS de tickets são rápidas de adotar e vêm com um rico conjunto de recursos, mas suas limitações são claras:

* Flexibilidade limitada na personalização de fluxos de trabalho e campos
* Os recursos de IA são, em sua maioria, superficiais, em vez de profundamente integrados
* Os dados e a lógica de negócios não estão totalmente sob o controle da equipe
* Os custos continuam aumentando à medida que a organização cresce

### Sistema de Tickets Interno

Essa abordagem parece oferecer máxima flexibilidade, mas na prática:

* O desenvolvimento inicial leva muito tempo e requer um investimento significativo
* A manutenção contínua depende inteiramente dos desenvolvedores originais
* Qualquer alteração no fluxo de trabalho requer trabalho de desenvolvimento adicional
* É difícil transformar a experiência acumulada em um sistema reutilizável e produtizado

## Princípios de Design

Nosso posicionamento é uma arquitetura de tickets extensível, configurável e nativa em IA.

O objetivo é ajudar as empresas a construir sistemas de tickets flexíveis, escaláveis e totalmente autocontrolados a um custo menor, permitindo que os sistemas se adaptem continuamente às necessidades de negócios em evolução, em vez de serem limitados por capacidades rígidas.

### Modelo de Dados Extensível

Usamos um modelo de dados em forma de T:

![Modelo de dados em forma de T.png](https://static-docs.nocobase.com/screenshot-20260108-130433-9gm35a.png)

* Tabela mestre de tickets: lida com capacidades compartilhadas, como fluxos de trabalho de status, responsáveis, prioridades, SLAs e histórico de comunicação
* Tabelas de extensão de negócios: projetadas para diferentes casos de uso, incluindo:
  * Tickets de suporte de TI
  * Tickets de manutenção de equipamentos
  * Reclamações e feedback de clientes
  * Solicitações administrativas internas

Este design traz várias vantagens importantes:

* Novos tipos de ticket podem ser adicionados sem alterar o fluxo de trabalho principal
* Cada cenário de negócios pode ter seus próprios campos e layouts de página
* A lógica principal permanece consistente, mantendo os custos de extensão extremamente baixos

Como resultado, esta solução é adequada para ambientes empresariais com vários departamentos e linhas de negócios.

### Recebimento Unificado de Tickets

No NocoBase, os tickets podem ser criados por meio de vários canais:

* Formulários externos ou internos
* E-mails analisados automaticamente
* APIs e webhooks
* Entrada manual por equipes de suporte ao cliente ou operações

O sistema então padroniza tudo, lidando com:

* Identificação da fonte
* Detecção de duplicatas
* Enriquecimento básico de dados

Como resultado, todas as solicitações são trazidas para um único fluxo de trabalho de tickets unificado, em vez de ficarem dispersas em diferentes ferramentas e sistemas.

![E-mails.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(3)-xzkr06.png)

### Atribuição com IA

No NocoBase, a IA vai além das respostas automatizadas e desempenha um papel ativo em todo o processo de tratamento de tickets:

* Compreender a intenção e a urgência do ticket
* Avaliar a prioridade usando regras e dados históricos
* Atribuir tickets de forma inteligente com base nas habilidades dos membros da equipe e na carga de trabalho atual
* Fornecer aos agentes sugestões de resposta e contexto relevante

A IA não foi projetada para substituir pessoas. Seu propósito é reduzir o custo do julgamento manual, permitindo que as equipes se concentrem em decisões que realmente exigem envolvimento humano.

![IA.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(4)-q39am4.png)

### SLA

Sem a aplicação de SLA, os tickets inevitavelmente se transformam em nada mais do que uma lista de tarefas.

Nesta solução:

* Diferentes prioridades (P0-P3) podem ser configuradas com diferentes metas de SLA
* O tempo de resposta e o tempo de resolução são rastreados automaticamente
* Violações de SLA acionam notificações ou fluxos de trabalho de escalonamento
* As métricas de SLA podem ser usadas diretamente para relatórios e análises retrospectivas

![SLA.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(5)-04o2xf.png)

### Base de Conhecimento

Um sistema de tickets bem projetado naturalmente evolui para um sistema de conhecimento ao longo do tempo.

Na solução NocoBase:

* Os processos de resolução de tickets são automaticamente capturados como entradas de conhecimento
* Quando novos tickets são criados, o sistema recomenda soluções semelhantes
* A IA ajuda a gerar resumos, refinar o conteúdo e oferecer suporte a vários idiomas
* Esta base de conhecimento, por sua vez, melhora continuamente a eficiência do tratamento de tickets

![Base de Conhecimento.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(6)-bu5gpu.png)

Difere das Soluções Tradicionais


| Dimensão             | SaaS de Tickets Tradicional | Sistemas Internos           | Solução de Tickets NocoBase  |
| -------------------- | --------------------------- | --------------------------- | ---------------------------- |
| Tempo para lançar    | Rápido                      | Lento                       | Rápido                       |
| Personalização       | Limitada                    | Alta                        | Alta                         |
| Custo de extensão    | Alto                        | Alto                        | Baixo                        |
| Integração de IA     | Básica e complementar       | Requer desenvolvimento personalizado | Nativa e profundamente integrada |
| Dados e implantação  | Parcialmente controlados    | Totalmente controlados      | Totalmente controlados       |

## Instalação e Uso

Consulte a documentação e escolha a opção que melhor se adequa à sua edição do NocoBase e ao seu conhecimento técnico.

[https://v2.docs.nocobase.com/cn/solution/ticket-system/installation](https://v2.docs.nocobase.com/cn/solution/ticket-system/installation?utm_source=chatgpt.com)

## Roadmap

A solução de tickets do NocoBase ainda está evoluindo, e algumas capacidades ainda não estão totalmente disponíveis na versão atual. Continuaremos a melhorar e estender a solução com base em casos de uso reais e feedback da comunidade.

No próximo período, planejamos focar nas seguintes áreas:

* **Suporte a vários idiomas**: expandindo a cobertura de idiomas para equipes globais
* **Melhorias na documentação**: fornecendo documentação detalhada para fluxos de trabalho e módulos principais para tornar o sistema mais fácil de entender e usar

Se você encontrar algum problema ao usar o sistema, ou tiver sugestões sobre seus recursos ou design, convidamos você a compartilhar seu feedback no fórum da comunidade NocoBase.

Revisamos ativamente esse feedback e o usamos como uma contribuição importante para iterações futuras.

Fórum: [https://forum.nocobase.com](https://forum.nocobase.com)

Você também é bem-vindo para experimentar a solução completa de tickets em nosso ambiente de demonstração: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)
