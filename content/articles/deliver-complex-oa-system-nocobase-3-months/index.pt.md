---
title: "Como Entregar um Sistema OA Complexo em 3 Meses com NocoBase"
description: "Uma equipe entregou um sistema OA complexo usando NocoBase em apenas 3 meses, cobrindo módulos de finanças, administração e gestão orçamentária, alcançando uma redução de 75% no tempo enquanto explorava a integração com IA."
---

**Nota de Confidencialidade**

Para proteger a privacidade e a segurança da organização e de seus clientes, este estudo de caso é apresentado anonimamente. Todos os detalhes são baseados em uma implementação real.

## Contexto e Restrições

O projeto foi liderado por uma equipe experiente em sistemas de gestão empresarial e indústrias com processos pesados, como a petroquímica. Eles estavam familiarizados com ambientes onde os requisitos são complexos, estão em constante evolução e as restrições operacionais são rigorosas.

Historicamente, eles dependiam do desenvolvimento personalizado tradicional. Um projeto de escopo semelhante normalmente levaria quase um ano, da análise de requisitos à entrega.

---

💬 Olá, você está lendo o blog da NocoBase. A NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, com inteligência artificial, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. →[ Explore a NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

Desta vez, o cliente introduziu um conjunto de restrições inegociáveis:

* **Isolamento de Rede**: O sistema deveria funcionar inteiramente dentro de uma rede interna, fisicamente desconectada da internet
* **Soberania de Dados**: Todos os dados devem permanecer totalmente sob o controle da organização
* **Modelo de Implantação**: Apenas a implantação auto-hospedada / on-premise era aceitável

Ao mesmo tempo, o sistema ainda precisava suportar fluxos de trabalho complexos, grandes volumes de dados e integração com sistemas existentes.

A equipe precisava de uma base que pudesse satisfazer requisitos rigorosos de segurança, ao mesmo tempo que permitisse **entrega rápida, iteração contínua e extensibilidade de longo prazo**.

Eles escolheram a **NocoBase**.

## Solução e Implementação

### 1. Digitalizando Fluxos de Trabalho Administrativos e Financeiros

A primeira fase focou nos cenários mais críticos e frequentemente utilizados: processos administrativos e financeiros.

Anteriormente, esses processos dependiam fortemente de formulários em papel e encaminhamento manual. A equipe os migrou gradualmente para um sistema unificado.

Eles construíram quase **60 módulos** cobrindo operações administrativas diárias.

Isso não foi um esforço simples de "digitalização de formulários". Em vez disso, a equipe reestruturou os fluxos de trabalho:

* mapeou as dependências entre os processos
* converteu regras offline implícitas em lógica explícita do sistema
* transformou a tomada de decisão manual em regras de negócio configuráveis
* esclareceu os caminhos de colaboração entre departamentos

Usando os recursos de modelagem de dados e fluxo de trabalho da NocoBase, esses processos complexos foram transformados em uma operação estável e orientada pelo sistema.

### 2. Incorporando o Controle Orçamentário nos Fluxos de Trabalho

Anteriormente, a gestão orçamentária era feita no Excel, fragmentada entre departamentos e revisada apenas após os gastos.

A equipe redesenhou isso incorporando a lógica orçamentária diretamente nos processos de negócios, como viagens, aprovações e reembolsos.

Após a implementação:

* **Executivos** ganharam visibilidade em tempo real da execução geral do orçamento
* **Chefes de departamento** podiam acompanhar o uso dinamicamente
* **Funcionários** podiam validar os limites orçamentários no momento da submissão da solicitação

A gestão orçamentária mudou de **relatórios posteriores** para:

* pré-controle
* aplicação durante o processo
* validação em tempo real

Isso foi possibilitado pela capacidade da NocoBase de integrar a lógica de negócios diretamente nos fluxos de trabalho.

### 3. Automatizando a Integração Financeira com o ERP

Para processamento de reembolsos e finanças, a equipe integrou o sistema com o **ERP Yonyou** através de plugins personalizados.

Usando um mecanismo de transformação embutido, o sistema convertia automaticamente os dados de negócios (solicitações de viagem, adiantamentos, dados fiscais, etc.) em registros financeiros compatíveis com os requisitos do ERP.

O mecanismo lidava com lógica contábil complexa, incluindo:

* divisão de ICMS/IPI
* compensação de dívidas de funcionários
* mapeamento de contas específicas por departamento

Uma vez processados, os comprovantes financeiros eram gerados automaticamente e enviados para o razão geral.

Isso substituiu a entrada manual de aproximadamente **1.400 registros financeiros por mês**.

O principal desafio não foi a integração da API em si, mas a estruturação da lógica de negócios.

Usando os [modelos de dados](https://docs.nocobase.com/data-sources) e a [arquitetura de plugins](https://docs.nocobase.com/plugins/) da NocoBase, a equipe transformou regras contábeis manuais em lógica de nível de sistema, permitindo uma automação estável de ponta a ponta.

### 4. Integração de Sistemas e Identidade Unificada

Para suportar a expansão futura do sistema, a equipe primeiro estabeleceu um [sistema de identidade](https://docs.nocobase.com/auth-verification/auth/) unificado:

* integrado com serviços de autenticação existentes
* usou a NocoBase como a camada centralizada de gerenciamento de usuários
* garantiu a consistência dos dados do usuário entre os sistemas

Para comunicação, um sistema de mensagens instantâneas (IM) privado foi introduzido:

* notificações de aprovação e tarefas eram enviadas diretamente para o IM
* os usuários podiam acessar as tarefas sem fazer login repetidamente no sistema
* navegação com um clique da mensagem para a página de aprovação

Isso reduziu significativamente o tempo de resposta e melhorou a eficiência operacional.

### 5. Iteração em um Ambiente Sem Conexão com a Internet (Air-Gapped)

O projeto foi implantado em um ambiente totalmente isolado.

Para manter a eficiência do desenvolvimento, a equipe adotou uma abordagem híbrida:

* o desenvolvimento e os testes eram feitos externamente
* as configurações validadas eram implantadas na rede interna

Usando o mecanismo de migração de configuração da NocoBase, o sistema podia ser implantado como um todo, sem necessidade de re-desenvolvimento repetido dentro do ambiente isolado.

Isso permitiu [ciclos de iteração semanais ou até mais rápidos](https://docs.nocobase.com/ops-management/migration-manager/), apesar das restrições de segurança rigorosas.

## Cronograma de Entrega

O projeto progrediu da seguinte forma:

* **Início de Setembro**: Início do projeto
* **Meados de Outubro**: Requisitos da Fase 1 finalizados
* **Meados de Novembro**: Primeiro lote de módulos administrativos lançado
* **Meados de Dezembro**: Lançamento completo dos sistemas administrativo e financeiro

Dada a complexidade, o escopo da integração e as restrições de implantação, essa velocidade de entrega foi significativamente mais rápida do que os projetos empresariais típicos.

## Preparando-se para a Integração de IA

Após a primeira fase, o cliente começou a explorar as capacidades de IA:

* **Automação de faturas**: Reconhecimento baseado em OCR e validação de conformidade
* **Recuperação de conhecimento**: Vetorização de documentos internos e construção de uma base de conhecimento privada

A equipe está atualmente experimentando a integração de modelos privados leves na NocoBase.

Com a arquitetura de plugins e os recursos de IA do NocoBase 2.0, a IA pode ser gradualmente incorporada aos fluxos de trabalho e estruturas de dados existentes, tornando-a prática em cenários de negócios reais.

## Resultado

Da confirmação dos requisitos à implantação completa dos sistemas administrativo e financeiro, todo o projeto foi concluído em **3 meses**, representando uma **redução de 75% no tempo de entrega**.

Isso não apenas reduziu o custo de desenvolvimento, mas também permitiu que a equipe lidasse com vários projetos complexos em paralelo.

Este caso destaca um ponto-chave:

Em ambientes empresariais complexos, o sucesso depende não apenas da plataforma, mas também da capacidade de:

* estruturar fluxos de trabalho complexos
* integrar sistemas de forma eficaz
* formalizar a lógica de negócios

A NocoBase fornece a base que torna isso possível.

Ela permite que equipes experientes entreguem mais rápido, adaptem-se continuamente e evoluam os sistemas ao longo do tempo, mesmo sob restrições rigorosas.

A equipe planeja se juntar ao [ecossistema de parceiros da NocoBase](https://www.nocobase.com/en/partner) e replicar este modelo de entrega em mais projetos empresariais.

**Mais Histórias de Clientes:**

* [Estudo de Caso: Digitalizando Fluxos de Trabalho de Fabricação Médica com a NocoBase](https://www.nocobase.com/en/blog/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase)
* [Fornecedor de Software Aumenta Eficiência de Entrega em 70% com a NocoBase](https://www.nocobase.com/en/blog/software-vendor-boosts-delivery-efficiency-with-nocobase)
* [Destaque da Comunidade: Construindo um ERP do Mundo Real com a NocoBase](https://www.nocobase.com/en/blog/an-erp-built-with-nocobase)
* [Por Dentro: Como uma Equipe de 8 Pessoas Entrega na Velocidade Empresarial](https://www.nocobase.com/en/blog/shenzhen-chuanglianyun-tech-development-methodology)
* [Construiu uma Plataforma de P&D Multimodal de IA em Dias — com a NocoBase](https://www.nocobase.com/en/blog/ai-multimodal-platform)
* [NocoBase na Rússia: Soluções Digitais Multicenário em Ação](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase Entra nas Salas de Aula Universitárias Alemãs](https://www.nocobase.com/en/blog/university-course)
* [NocoBase como Base Tecnológica da ED: De Sistemas Internos a Produtos Comerciais](https://www.nocobase.com/en/blog/ed)
