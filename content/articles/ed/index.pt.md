---
title: "NocoBase como Fundação Tecnológica da ED: De Sistemas Internos a Produtos Comerciais"
description: "A ED construiu sua base tecnológica no NocoBase, reduzindo os ciclos de entrega em um terço, acelerando testes e lançamentos, e garantindo maior estabilidade tanto em sistemas internos quanto em produtos comerciais."
---

## **Introdução**

> Uma curiosidade da nossa jornada: no nosso processo de pré-venda, frequentemente combinamos o NocoBase com IA para entregar provas de conceito em velocidade recorde. Os clientes ficam frequentemente surpresos quando, após nos encontrarem na segunda-feira, retornam na quarta-feira e veem um protótipo totalmente funcional. A reação usual é: *"Qual é a mágica?"* Quando revelamos o NocoBase, sempre cria um momento de surpresa — e curiosidade.
>
> **—— Fabio Farzat, CEO da ED**

## **Sobre a ED**

A [ED](https://ed.dev.br/) é uma empresa de tecnologia brasileira com **mais de 130 profissionais em 16 estados**. Há anos, a equipe entrega e dá suporte a sistemas críticos para grandes empresas nos setores de seguros, mercado de capitais, utilities e setor público.

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

No lado da entrega, a ED possui certificação **ISO 9001** (abrangendo processos de gestão de software, projetos e infraestrutura) e alcançou o **CMMI-DEV Nível 3**, refletindo padrões reconhecidos internacionalmente e maturidade sustentável em engenharia.

Organizacionalmente, a ED está classificada no Top 10 do "Great Place to Work" do Brasil há quatro anos consecutivos — atingindo o pico no 1º lugar e atualmente ocupando o 6º. Este reconhecimento destaca a capacidade da ED de atrair e reter os melhores talentos, garantindo profissionalismo e estabilidade em cada projeto.

Com sua escala, sistemas de qualidade rigorosos e ampla base de clientes, a ED é reconhecida como uma provedora líder de serviços de tecnologia empresarial no Brasil. Hoje, está acelerando os esforços em **plataformas modernas e soluções baseadas em IA** para ajudar os clientes a se prepararem para o futuro.

## **Pontos de Dor e Decisão**

Na entrega diária de projetos, a equipe de engenharia da ED enfrentava repetidamente o mesmo desafio: **ciclos intermináveis de desenvolvimento CRUD e integração**. Seja para sistemas internos ou projetos voltados para o cliente, eles precisavam construir rapidamente camadas de gerenciamento de dados, gerar APIs, lidar com importação/exportação e ainda garantir segurança e escalabilidade. Cada vez significava começar do zero — consumindo tempo e recursos significativos e, em última análise, desacelerando a inovação.

Para sair desse ciclo, a ED compilou **uma lista de requisitos de nível empresarial**:

* **Segurança** — controle de acesso, isolamento de dados, garantia de conformidade
* **Desempenho** — tempos de resposta rápidos mesmo sob conjuntos de dados de grande escala
* **Escalabilidade** — adaptação flexível em diversos projetos e ambientes de clientes
* **Observabilidade** — operações transparentes para monitoramento e solução de problemas

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

O que eles precisavam era mais do que apenas uma ferramenta de arrastar tabelas. Eles estavam procurando uma plataforma que pudesse suportar modelos de dados completos, impor tipos fortes e estruturas relacionais, e gerar APIs automaticamente.

Após avaliar múltiplas soluções de mercado, a ED escolheu, em última análise, o **NocoBase**. Provas de conceito internas mostraram que o NocoBase não apenas atendia a todos os itens de sua lista de verificação, mas também oferecia maior flexibilidade e eficiência no uso real.

## **Cenários de Implementação**

Após concluir a prova de conceito, a ED rapidamente implantou o NocoBase em seus sistemas de negócios principais e gradualmente o estendeu para múltiplos cenários.

### **Cenário 1: Produto Comercial – [AssistFlow](https://assistflow.com.br/)**

Ao contrário da maioria das empresas que usam o NocoBase apenas para sistemas internos, a ED construiu uma plataforma comercial externa diretamente sobre ele — o **[AssistFlow](https://assistflow.com.br/)**. O AssistFlow permite que empresas criem rapidamente agentes inteligentes que operam perfeitamente em múltiplos canais de mídia social, suportando interações multimodais com texto, voz, imagens e arquivos. Além do atendimento ao cliente, também se estende a vendas, RH, suporte técnico e muito mais.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

Neste produto comercial, todo o módulo de configuração e interface de gerenciamento são alimentados pelo NocoBase. Isso significa que a equipe não precisa redesenhar a lógica do frontend; em vez disso, eles podem modelar e configurar diretamente no NocoBase para fornecer aos clientes capacidades de gerenciamento flexíveis e escaláveis.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**Destaques do AssistFlow:**

* **Integração rápida** — Crie e lance um agente inteligente em apenas 5 minutos, sem necessidade de codificação
* **Integração multicanal** — Suporta WhatsApp, Teams, Slack, Telegram, Facebook, Instagram, LinkedIn e muito mais
* **Interação multimodal** — Lida com texto, voz, imagens e arquivos para atender a diversas necessidades de negócios
* **Ampla aplicabilidade** — Abrange atendimento ao cliente, vendas, marketing, RH e suporte técnico
* **Automação e integração** — APIs integradas permitem conexões perfeitas com sistemas existentes e simplificam fluxos de trabalho
* **Seguro e controlável** — Suporta implantação em nuvem privada para atender aos requisitos de segurança e conformidade de nível empresarial

### **Cenário 2: Plataforma de Gerenciamento de Projetos**

Construída para suportar o ciclo de vida completo dos projetos de entrega ao cliente da ED. Tarefas que antes exigiam múltiplas rodadas de desenvolvimento — como operações CRUD e lógica de permissão — agora podem ser concluídas em uma única etapa através de modelagem de dados simples, configuração de frontend e APIs geradas automaticamente.

![Plataforma de Gerenciamento de Projetos](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **Cenário 3: Sistema de Chamados**

Um sistema de suporte e solicitação de serviços voltado para o exterior, totalmente alimentado pela camada de dados e interface do NocoBase. Os clientes podem enviar e acompanhar chamados diretamente, enquanto os fluxos de trabalho de backend são acionados automaticamente para lidar com cada solicitação.

![Sistema de Chamados](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **Cenário 4: Sistema de Gerenciamento de Fornecedores**

Neste sistema, os fornecedores podem enviar faturas, que acionam automaticamente fluxos de trabalho de aprovação de pagamento. Com os recursos de modelagem de dados e fluxo de trabalho do NocoBase, todo o processo é automatizado e totalmente rastreável.

## **Resultados**

Com o NocoBase, a ED alcançou melhorias significativas tanto na velocidade quanto na qualidade da entrega:

* **Ciclos de entrega mais curtos** — Módulos que antes exigiam 2 a 3 iterações de 15 dias cada agora podem ser concluídos em apenas uma iteração
* **Testes e lançamento mais rápidos** — A maioria dos recursos requer apenas testes funcionais diretos, sem as camadas complexas típicas do desenvolvimento tradicional
* **Maior estabilidade de produção** — Lançamentos mais suaves e maior confiança da equipe

Os engenheiros da ED acreditam que o NocoBase transformou a forma como eles constroem. A modelagem visual, o CRUD automatizado, os fluxos de trabalho flexíveis e as APIs geradas automaticamente libertaram os desenvolvedores do trabalho repetitivo, permitindo que eles se concentrem diretamente nos resultados de negócios. Os ciclos de feedback de QA e usuários se tornaram muito mais curtos, permitindo que os projetos cheguem à produção mais rapidamente.

Hoje, o NocoBase se tornou a espinha dorsal tecnológica da ED: alimentando sistemas internos, formando a base de produtos comerciais externos e suportando quase todas as entregas do dia a dia. Mais importante ainda, essa mágica de "reunião na segunda, protótipo na quarta" não é apenas o ponto de partida da surpresa e confiança do cliente — ela também representa um novo paradigma de entrega.

## **Perspectivas**

Para equipes de tecnologia em todo o mundo, a experiência da ED mostra que o NocoBase não apenas atende aos requisitos de nível empresarial — segurança, desempenho, escalabilidade e observabilidade — mas também permite iterações mais rápidas, mudando o foco de tarefas repetitivas para inovação e criação de valor.

No Brasil, a ED já remodelou seu modelo de entrega com o NocoBase. Em seguida, eles pretendem levar essa abordagem para mais indústrias e organizações, juntamente com o NocoBase.

**Mais Histórias de Clientes:**

* [Resposta em Subsegundo em Escala: Classact executa NocoBase no Kubernetes](https://www.nocobase.com/en/blog/classact)
* [Fábrica Digital da BIEL Crystal: Alimentando 1,85 Bilhões de Unidades por Ano](https://www.nocobase.com/en/blog/bielcrystal)
* [Como a Distinct HealthCare usa o NocoBase para construir um sistema de cuidados personalizados e de longo prazo](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Uma Jornada Sem Código Dentro da SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [O que fez a principal imobiliária do Japão trocar o Salesforce pelo NocoBase de código aberto?](https://www.nocobase.com/en/blog/century-21)
* [Como a Second-Brain construiu um sistema de IA para instituições financeiras com o NocoBase](https://www.nocobase.com/en/blog/second-brain)
