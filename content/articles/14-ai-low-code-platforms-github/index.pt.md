---
title: "14 Plataformas Low-Code com IA no GitHub que Vale a Pena Acompanhar"
description: "Selecionamos 14 plataformas low-code populares com IA no GitHub — abrangendo workflows, agentes, construção de sistemas e bancos de dados inteligentes — para ajudar você a construir sistemas mais inteligentes e escaláveis."
---

📝 Nota: Este artigo foi atualizado pela última vez em 21 de janeiro de 2026. Atualizamos as informações regularmente para garantir que você tenha as últimas novidades! 😊

Recentemente, me deparei com um comentário muito direto no Reddit:

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *"Essas plataformas de IA sem código não vão durar um ano. Se a IA é realmente tão poderosa, não deveria ainda depender de arrastar blocos de workflow para construir funcionalidades."*

A visão é afiada, mas este comentário foi postado há oito meses. Olhando para trás agora, essas ferramentas não desapareceram. Muitas se tornaram mais maduras, e novos projetos continuam a aparecer.

Há alguns dias, também revisamos uma lista das [ferramentas de IA sem código open-source mais populares no GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools). Com base em estrelas, atividade da comunidade e maturidade de funcionalidades, muitos projetos não só estão ativos como continuam evoluindo com capacidades de IA mais fortes.

Alguns usuários do Reddit ainda argumentam que a maioria das ferramentas low-code de IA está em um estágio inicial e que certos chamados agentes de IA são simplesmente ferramentas de automação conectadas a um LLM.

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 Ei, você está lendo o blog da NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code com IA mais extensível para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

Pela nossa observação, o ecossistema low-code tem progredido de forma constante. Muitas plataformas já suportam cenários de negócios reais através de modelagem de dados, lógica de workflow, extensões de plugins e colaboração orientada por IA.

Para este artigo, exploramos o tópico low-code do GitHub e identificamos quatorze plataformas que já integraram IA de maneiras práticas. Nós as organizamos em três categorias: construtores de sistemas de negócios, ferramentas de workflow de agentes e aplicações baseadas em tabelas de dados.

Antes de entrar nos detalhes, você pode usar a tabela de comparação a seguir para uma visão geral clara de como essas quatorze ferramentas se posicionam e aplicam IA.👇

**Tabela de Comparação (Recursos de IA × Posicionamento da Ferramenta)**

| Ferramenta | Categoria            | Como a IA é Usada                              | Workflow Extensível | Suporta Modelagem/UI | Suporte a Tabelas/Dados | Capacidade Interdomínio          |
| ---------- | -------------------- | ---------------------------------------------- | ------------------- | -------------------- | ----------------------- | -------------------------------- |
| NocoBase   | Aplicações de Negócio | IA gera modelos de dados, páginas, lógica      | ✅ Plugins + Automação | ✅ Completo          | ✅                      | ⭐ Forte (Dados + Sistema + Fluxo) |
| ToolJet    | Aplicações de Negócio | AI Copilot gera páginas/scripts de API         | ⚠️ Fluxos Leves     | ✅                   | ⚠️                    | Médio                           |
| Appsmith   | Aplicações de Negócio | IA gera SQL e lógica de formulários            | ⚠️                  | ✅                   | ⚠️                    | Médio                           |
| Budibase   | Aplicações de Negócio | IA preenche campos, gera texto de formulário   | ⚠️                  | ✅                   | ⚠️                    | Fraco                           |
| refine     | Aplicações de Negócio | IA gera lógica e código CRUD                   | ❌                   | ✅ (foco em código)  | ❌                      | Não                             |
| n8n        | Workflow/Agente      | Tarefas de IA, chamadas de API                 | ✅                   | ❌                   | ❌                      | Não                             |
| Dify       | Workflow/Agente      | Agentes, base de conhecimento, chamada de ferramentas | ✅                   | ❌                   | ⚠️                    | Não                             |
| Flowise    | Workflow/Agente      | RAG, cadeias LLM visuais                       | ⚠️                  | ❌                   | ⚠️                    | Não                             |
| Kestra     | Workflow/Agente      | IA gera workflows YAML                         | ✅                   | ❌                   | ❌                      | Não                             |
| Node-RED   | Workflow/IoT         | Nós de IA + automação de dispositivos/eventos  | ⚠️                  | ❌                   | ❌                      | Não                             |
| Sim        | Workflow/Agente      | Workflows colaborativos multi-agente           | ⚠️                  | ❌                   | ❌                      | Não                             |
| NocoDB     | Tabelas de Dados     | Preenchimento por IA, campos inteligentes, insights | ⚠️                  | ❌                   | ✅                      | Fraco                           |
| Teable     | Tabelas de Dados     | Chat de IA e relatórios gerados automaticamente | ⚠️                  | ❌                   | ✅                      | Fraco                           |
| Onlook     | UI com IA            | IA gera UI/componentes/código React            | ❌                   | ⚠️ (foco em UI)    | ❌                      | Especializado (foco em UI)      |

## **Construtores de Aplicações de Negócio com IA**

Essas ferramentas não usam IA apenas para responder perguntas ou acionar workflows — a IA está diretamente envolvida na construção da própria aplicação.

Elas ajudam os usuários a criar rapidamente modelos de dados, formulários, páginas, permissões e sistemas de negócios internos, sendo ideais para CRM, aprovações, ERP, painéis de administração e plataformas de entrada de dados.

### **NocoBase**

⭐️ Estrelas: 20k

Site: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**Visão Geral**:

NocoBase começou como uma plataforma low-code open-source construída sobre uma arquitetura orientada a modelos de dados e um sistema de plugins.

Na versão 2.0, permite que a IA participe tanto da construção do sistema quanto da operação diária. Ela pode escrever e executar JavaScript dentro da plataforma para lógica complexa e automação, e workers de IA podem ser colocados em qualquer parte do sistema para melhorar a experiência geral.

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**Estágio de construção**

Workers de IA podem gerar modelos de dados, relações de campos, estruturas de página e lógica básica a partir de linguagem natural. Tarefas que antes exigiam várias etapas de configuração se tornam mais simples. Com a assistência da IA, um sistema de negócios pode tomar forma muito mais rápido, melhorando enormemente a eficiência do desenvolvimento.

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**Estágio de uso**

A IA pode consultar e interpretar dados do sistema e fornecer insights ou sugestões relevantes, como preencher formulários, resumir informações de clientes ou apoiar tarefas de pesquisa.

**Público-alvo**: Equipes que constroem sistemas de negócios — equipes de TI internas, equipes de produto B2B, integradores de sistemas.

**Casos de uso**: CRM, workflows de aprovação, gerenciamento de projetos, sistemas de pedidos e ativos, com suporte a plugins para automação e modelagem orientada por IA.

### **ToolJet**

⭐️ Estrelas: 37k

Site: [https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub: [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**Visão Geral**: ToolJet é há muito tempo uma ferramenta produtiva para construir aplicações empresariais internas. Com a IA adicionada, o fluxo de desenvolvimento se torna ainda mais eficiente. O AI Copilot gera layouts de página, lógica de componentes e interações básicas a partir de linguagem natural, o que elimina a necessidade de os desenvolvedores alternarem entre componentes, scripts e APIs. Esse fluxo de trabalho de descrever e gerar reduz o trabalho manual de configuração e script e ajuda as equipes a construir ferramentas internas de forma mais focada e econômica.

**Público-alvo**: Equipes de engenharia, operações ou dados que precisam de painéis internos rapidamente.

**Casos de uso**: Painéis administrativos, ferramentas internas, aplicações baseadas em API onde a IA pode ajudar a escrever SQL, gerar layouts ou scripts.

### **Appsmith**

⭐️ Estrelas: 38k

Site: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**Visão Geral**: Appsmith é uma plataforma low-code open-source projetada para desenvolvimento de ferramentas internas, oferecendo um sistema de componentes robusto, conexões confiáveis de fontes de dados e capacidades CRUD bem desenvolvidas. Com a IA introduzida, a experiência de desenvolvimento se torna mais suave. A IA gera consultas SQL, lógica de validação de formulários e scripts básicos a partir de linguagem natural e pode completar a configuração comum de páginas automaticamente. Isso reduz a necessidade de alternar entre código e configurações de componentes e acelera o desenvolvimento de ferramentas internas, ao mesmo tempo que reduz a barreira para aplicações focadas em dados.

**Público-alvo**: Desenvolvedores front-end, construtores de ferramentas de dados, equipes que criam sistemas CRUD.

**Casos de uso**: Painéis de consulta, ferramentas administrativas internas, utilitários de banco de dados — por exemplo, linguagem natural → IA gera SQL → saída em tabela.

### **Budibase**

⭐️ Estrelas: 27k

Site: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**Visão Geral**: Budibase é uma plataforma low-code open-source projetada para aplicações de negócios internas. Ela se concentra em modelagem de dados, criação de formulários e workflows básicos, atendendo às necessidades de pequenas e médias empresas. Com a IA adicionada, o Budibase aprimora o processo de construção auxiliando em tarefas rotineiras.

A IA ajuda a gerar conteúdo de campos, preencher dados e criar layouts de página simples, reduzindo o trabalho repetitivo na configuração de formulários e entrada de dados. Embora ainda tenha suporte limitado para lógica complexa, a IA torna o Budibase mais eficiente para sistemas leves, ferramentas de formulário internas e aplicações de entrada de dados.

**Público-alvo**: Equipes pequenas e médias, sistemas internos leves, entusiastas de no-code.

**Casos de uso**: Aplicações de formulário, ferramentas de escritório internas, plataformas de entrada de dados. A IA ajuda a preencher campos ou criar dados de amostra, mas o suporte a lógica complexa é limitado.

### **Refine**

⭐️ Estrelas: 33k

Site: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**Visão Geral**: Refine é um framework baseado em React para construir painéis administrativos e ferramentas internas. Ele lida bem com fluxos CRUD comuns, roteamento, permissões e conexões de dados. Os desenvolvedores podem descrever a interface ou funcionalidade em linguagem natural, e a IA gera o layout, as interações e o código básico como um projeto React pronto para uso.

**Público-alvo**: Desenvolvedores front-end e equipes de tecnologia que precisam de flexibilidade em vez de ferramentas de arrastar e soltar.

**Casos de uso**: Painéis administrativos e ferramentas de dados onde o controle em nível de código é necessário, mas a velocidade de desenvolvimento ainda é importante. Não inclui modelagem de backend.

## **Orquestração de Workflow / Agente de IA**

Essas ferramentas se destacam porque a IA não está apenas gerando conteúdo — ela participa ativamente da execução dos workflows. A IA pode chamar ferramentas, acionar ações e impulsionar a automação de negócios.

Pense nelas como mecanismos de workflow aprimorados por IA ou plataformas de execução de agentes, em vez de construtores completos de sistemas de negócios low-code.

Elas se destacam em automação e execução, mas geralmente carecem de modelagem de dados complexa, sistemas de permissão ou capacidades de construção de UI/páginas.

### **n8n**

⭐️ Estrelas: 157k

Site: [https://n8n.io/](https://n8n.io/)

GitHub: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**Visão Geral**: n8n é uma plataforma de automação low-code open-source que conecta sistemas, APIs e serviços através de uma interface visual. Com nós de IA adicionados, o n8n pode permitir que LLMs analisem dados, gerem conteúdo, tomem decisões e chamem APIs externas dentro de um workflow, em vez de apenas seguir regras predefinidas.

**Público-alvo**: Equipes de operações, engenheiros de suporte, especialistas em automação, PMEs.

**Casos de uso**: Geração automatizada de conteúdo, sincronização de dados, respostas de e-mail, workflows de decisão assistidos por IA (por exemplo, IA responde a um cliente → registra no banco de dados → envia e-mail).

### **Dify**

⭐️ Estrelas: 119k

Site: [https://dify.ai/](https://dify.ai/)

GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**Visão Geral**: Dify é uma plataforma open-source para construir aplicações de IA e Agentes. Ela oferece gerenciamento de modelos, bases de conhecimento, orquestração conversacional e integração de ferramentas. Com essas capacidades, o Dify suporta raciocínio de múltiplas etapas, chamadas de API, acesso a dados e construção visual de workflows de Agentes, para que as equipes possam transitar suavemente da conversa para ações do sistema.

**Público-alvo**: Equipes de produto e desenvolvedores que constroem assistentes de IA, bots de conhecimento ou protótipos.

**Casos de uso**: Chatbots com base de conhecimento, tratamento automatizado de tickets, agentes de IA executando ações de API.

### **Flowise**

⭐️ Estrelas: 47k

Site: [https://flowiseai.com/](https://flowiseai.com/)

GitHub: [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**Visão Geral**: Flowise é uma plataforma visual low-code open-source para construir agentes de IA e workflows LLM. Ela oferece um construtor visual, rastreamento de execução, integrações de API e SDK e implantação local. Com capacidades de IA incluídas, o Flowise suporta agentes de múltiplas etapas, uso de ferramentas e recuperação de conhecimento. As equipes podem projetar colaboração humano-IA e lógica de workflow simplesmente arrastando e conectando nós.

**Público-alvo**: Desenvolvedores de IA, equipes de protótipo, startups em estágio inicial.

**Casos de uso**: Perguntas e respostas com conhecimento, chatbots leves, demonstrações de raciocínio de múltiplas etapas — não adequado para sistemas de negócios completos.

### **Kestra**

⭐️ Estrelas: 23k

Site: [https://kestra.io/](https://kestra.io/)

GitHub: [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**Visão Geral**: Kestra é uma plataforma open-source para orquestração e agendamento de tarefas, projetada para workflows visuais, planos de execução e monitoramento. Ela suporta geração de workflows YAML assistida por IA, chamadas de modelo e lógica condicional. Os usuários podem criar cadeias de tarefas complexas com linguagem natural ou modelos e rastrear a execução com logs detalhados.

**Público-alvo**: Engenheiros de dados, desenvolvedores backend, equipes de DevOps.

**Casos de uso**: Tarefas agendadas geradas por IA, pipelines de dados, cadeias de tarefas de API — focado em execução backend.

### **Node-RED**

⭐️ Estrelas: 22k

Site: [https://nodered.org/](https://nodered.org/)

GitHub: [https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**Visão Geral**: Node-RED é uma ferramenta de fluxo visual orientada a eventos que conecta dispositivos, serviços e APIs através de nós para construir lógica de automação e pipelines de dados. A plataforma oferece uma variedade de nós de IA para inferência de modelos, geração de conteúdo, análise de informações e tomada de decisão condicional. Os fluxos podem executar ações mais flexíveis com base nas saídas do modelo. Os nós também podem se integrar com dispositivos IoT, webhooks ou eventos do sistema para criar workflows de processamento de ponta a ponta.

**Público-alvo**: Engenheiros de automação, desenvolvedores de hardware, equipes de casa inteligente/IoT.

**Casos de uso**: Câmera detecta movimento → IA toma decisão → aciona interruptor; anomalia em dispositivo → análise de IA → envia alerta.

### **Sim**

⭐️ Estrelas: 18k

Site: [https://www.sim.ai/](https://www.sim.ai/)

GitHub: [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**Visão Geral**: Sim é uma plataforma open-source para construir workflows colaborativos multi-agente. Ela organiza modelos, ferramentas e etapas de tarefas através de uma interface visual. A plataforma suporta cooperação multi-modelo, invocação de ferramentas, decomposição de tarefas e execução de fluxo. Os agentes podem se comunicar, dividir o trabalho e completar raciocínio ou ações dentro do mesmo workflow. Os usuários podem configurar funções, capacidades e cadeias de tarefas conforme necessário para gerar sistemas multi-agente executáveis.

**Público-alvo**: Equipes de IA construindo agentes com múltiplas funções, startups de assistentes inteligentes.

**Casos de uso**: Assistentes de IA, geração automatizada de relatórios, execução inteligente de tarefas — embora não tão maduro quanto n8n ou Dify.

## **IA + Planilhas Inteligentes / Ferramentas de Banco de Dados**

Essas ferramentas não focam na execução de workflows ou sistemas de negócios completos — seu valor central está em tornar dados e planilhas mais inteligentes.

Aqui, a IA é usada principalmente para gerar, completar, consultar e analisar dados — não para lidar com lógica de negócios complexa.

Elas podem ser vistas como "Airtable / Notion Database aprimorados com IA", ideais para equipes orientadas a dados, operações de conteúdo ou gerenciamento de conhecimento — em vez de sistemas de negócios pesados ou automação de workflows.

### **NocoDB**

⭐️ Estrelas: 59k

Site: [https://nocodb.com/](https://nocodb.com/)

GitHub: [https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**Visão Geral**: Uma alternativa open-source ao Airtable que fornece configuração de campos, gerenciamento de visualizações e automação básica. Seus recursos de IA suportam geração de conteúdo, conclusão de dados, análise de tabelas e sugestões inteligentes.

**Público-alvo**: Equipes que gerenciam dados estruturados — equipes de operações, grupos de colaboração interna, usuários de CRM leve.

**Casos de uso**: Repositórios de conteúdo, tabelas de clientes, gerenciamento de inventário, planilhas de colaboração em equipe. Os recursos de IA incluem sugestões de campos, geração de conteúdo, preenchimento automático e insights inteligentes para análise de dados.

### **Teable**

⭐️ Estrelas: 20k

Site: [https://teable.ai/](https://teable.ai/)

GitHub: [https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**Visão Geral**: Uma plataforma de gerenciamento de dados semelhante ao Airtable com suporte para tipos de campo, visualizações e colaboração em equipe. Seus recursos de IA podem gerar conteúdo de tabela através de conversa, processar dados, criar relatórios e executar comandos baseados em texto, com modelos trabalhando diretamente dentro da tabela.

**Público-alvo**: Usuários do Airtable/Notion ou equipes que precisam de colaboração de dados com assistência alimentada por IA.

**Casos de uso**: Gerenciamento de conteúdo, data warehouse leve, tabelas de projetos de equipe. Suporta interação de dados conversacional — como consultar registros via linguagem natural, gerar dados de tabela em massa ou criar relatórios automaticamente.

## **Ferramentas Que Não se Encaixam Totalmente nas Categorias Acima**

Durante nossa pesquisa, também encontramos ferramentas que não se enquadram completamente em nenhuma das três categorias principais — como **Onlook**.

⭐️ Estrelas: 23k

Site: [https://onlook.com/](https://onlook.com/)

GitHub: [https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

O que torna o Onlook diferente é que sua capacidade central são "interfaces de UI geradas por IA".

Você pode descrever uma página em linguagem natural ou fornecer um wireframe, e a plataforma produzirá a estrutura da página e o layout dos componentes. Ela gera código React, gerencia estilos e relações de layout e oferece edição visual para que você possa refinar a interface e ajustar a hierarquia dos componentes. A ferramenta é projetada para construção de interfaces com design assistido por IA, situando-se entre uma ferramenta de design e uma plataforma low-code de front-end.

## **Considerações Finais**

Costumávamos construir sistemas escrevendo código. Depois vieram as interfaces de arrastar e soltar. Agora, cada vez mais pessoas estão começando a descrever como um sistema deve funcionar — e deixar a IA ajudar a construí-lo.

> *"A IA não remove o trabalho — ela apenas move o trabalho."*

O verdadeiro desafio não é mais se estamos usando IA, mas se podemos integrar profundamente a IA com lógica de negócios, dados e workflows, e torná-la parte do próprio sistema.

A IA está passando de uma ferramenta de conversa para uma ferramenta de construção. Ainda não é perfeita, mas a direção é clara.
No futuro, os sistemas podem não ser "desenvolvidos" — eles podem ser descritos. E começaremos a partir de problemas reais de negócios, não apenas de um editor de código.

Se você leu até aqui e sente a mesma mudança acontecendo, sinta-se à vontade para compartilhar esta lista com outras pessoas que se importam com **IA × low-code**.👍

**Leitura relacionada:**

* [Top 11 Ferramentas de IA No-Code Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 Projetos de Agentes de IA Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [Top 20 Projetos de IA Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 Projetos MCP Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 Aplicações Web Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 Ferramentas de Desenvolvedor Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Projetos Low-Code Open Source que Mais Crescem no GitHub em 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
