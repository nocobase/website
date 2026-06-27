---
title: "Os 18 Principais Projetos Open Source de Agentes de IA com Mais Estrelas no GitHub"
description: "Este artigo analisa os 18 principais projetos open source de Agentes de IA no GitHub por número de estrelas, examinando suas características e casos de uso para ajudá-lo a escolher e implementar de forma eficaz."
---

📝 Nota: Este artigo foi atualizado pela última vez em 21 de janeiro de 2026. Atualizamos regularmente as informações para garantir que você tenha as últimas novidades! 😊

✨ Confira nossa seleção atualizada de 2026 dos projetos de IA open-source no GitHub: [https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

Há cerca de um mês, me deparei com um post muito discutido no [Hacker News](https://news.ycombinator.com/item?id=44450160) — “[Stop Building AI Agents](https://decodingml.substack.com/p/stop-building-ai-agents)”

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

No post, o autor compartilhou uma experiência pessoal: ele construiu uma "equipe de pesquisa" com o CrewAI: três agentes, cinco ferramentas, coordenação perfeita no papel. Mas na prática, o pesquisador ignorou o raspador web, o resumidor esqueceu de usar a ferramenta de citação e o coordenador desistiu completamente ao processar documentos mais longos. Era um plano bonito desmoronando de maneiras espetaculares.

O fluxograma abaixo foi criado pelo autor após inúmeras rodadas de depuração e tentativas fracassadas, resumindo seu guia de decisão para **Devo usar um Agente**.

![Devo usar um Agente](https://static-docs.nocobase.com/2-45bvv4.png)

Fonte da imagem: https://decodingml.substack.com/p/stop-building-ai-agents

O artigo destilou um princípio importante: **agentes funcionam melhor em processos instáveis onde os humanos permanecem no ciclo para supervisão** — nesses cenários, as capacidades exploratórias e criativas de um agente geralmente superam um fluxo de trabalho rígido.

* **Cenários recomendados:** assistente de ciência de dados (geração automática de SQL, criação de visualizações, exploração de tendências de dados); parceiro de escrita criativa (brainstorming de ideias, refinamento de texto); assistente de refatoração de código (sugestão de otimizações, detecção de problemas potenciais). Nestes casos, os humanos podem avaliar continuamente os resultados e corrigir desvios.
* **Não recomendado para:** automação empresarial de missão crítica (processos de negócio chave que não podem arriscar instabilidade de decisões orientadas por LLM); tomada de decisão de alto risco (finanças, diagnóstico médico, conformidade legal — áreas que exigem lógica determinística).

![cenários](https://static-docs.nocobase.com/3-ba22w7.png)

Fonte da imagem: https://decodingml.substack.com/p/stop-building-ai-agents

Se você leu o acima e ainda acredita que seu cenário de negócio é adequado para construir um agente, este artigo irá guiá-lo pelos **18 principais projetos open-source de ****[agentes](https://github.com/topics/agent)**** no GitHub por número de estrelas**. Para cada um, analisaremos seus pontos fortes e limitações sob três perspectivas — visão geral do projeto, recursos principais e casos de uso — ajudando você a maximizar o valor dos agentes nos contextos certos.

---

💬 Ei, você está lendo o blog da NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, com inteligência artificial, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

💡 Você também pode gostar de nossas seleções anteriores de projetos populares do GitHub (alguns projetos aparecem em múltiplos temas):

* [Top 20 Projetos de IA Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 Projetos MCP Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 40 Ferramentas de Desenvolvedor Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)

## Nº 1: Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* Estrelas GitHub: 110k
* GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Site: [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**Visão Geral:**

**Dify** é uma plataforma de desenvolvimento de aplicações LLM open-source que combina uma interface visual intuitiva, fluxos de trabalho RAG, capacidades de agente, gerenciamento de modelos e observabilidade full-stack. Ela permite que desenvolvedores construam, depurem e implantem aplicações de IA rapidamente.

**Recursos Principais:**

* **Orquestração Visual de Fluxo de Trabalho:** Construtor de arrastar e soltar que permite aos desenvolvedores projetar e testar fluxos de trabalho de IA complexos diretamente em uma tela, incluindo prompts, chamadas de modelo e encadeamento de tarefas.
* **Suporte a Pipeline RAG:** Ingere documentos em múltiplos formatos (ex.: PDF, PPT), extrai conteúdo automaticamente e constrói pipelines de recuperação para geração aumentada por conhecimento.
* **Ecossistema Abrangente de Modelos & Editor de Prompt:** Compatível com GPT, Mistral, Llama3 e todos os modelos compatíveis com a API OpenAI. Oferece gerenciamento unificado de modelos e ajuste de prompt, simplificando a troca de modelos e a comparação de desempenho.

**Casos de Uso:**

* Construção de sistemas inteligentes de atendimento ao cliente e QA
* Integração com bases de conhecimento empresariais
* Implantação rápida de ferramentas de geração de conteúdo

## Nº 2: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* Estrelas GitHub: 64.3k
* GitHub: [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Site: [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**Visão Geral:**

**Lobe Chat** é uma plataforma de chat e aplicação multi-modelo open-source com forte foco em UX. Suporta voz, reconhecimento visual, entrada multimodal, um mercado de plugins, otimização para dispositivos móveis e gerenciamento de múltiplos usuários.

**Recursos Principais:**

* **Suporte Multimodal & Plugins:** Lida com conversas por voz, reconhecimento e geração de imagens, e pode estender a funcionalidade através de um mercado de plugins para suportar diversas necessidades de interação.
* **Plataforma de Índice de Agentes:** Índice orientado pela comunidade onde os usuários podem navegar, adicionar ou enviar assistentes personalizados para facilitar a extensão e reutilização.
* **Integração Unificada de Modelos:** Fornece uma interface de API unificada e arquitetura modular para conectar-se facilmente a provedores de modelo como OpenAI, Anthropic, Gemini e Ollama, tornando a migração e atualização de plataforma perfeitas.

**Casos de Uso:**

* Construção rápida de aplicações de chat de IA multimodais e de alta interação
* Implantação de assistentes específicos de domínio

## Nº 3: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* Estrelas GitHub: 62.1k
* GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Site: [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**Visão Geral:**

**RAGFlow** é um mecanismo RAG open-source focado em compreensão profunda de documentos, projetado para fornecer serviços de QA e agente de alta qualidade e explicáveis para empresas e indivíduos. Pode processar formatos de documentos complexos e fornecer respostas baseadas em citações com gerenciamento visual de blocos.

**Recursos Principais:**

* **Compreensão Profunda de Documentos:** Excelente na análise de conteúdo não estruturado como PDF, Word, PPT, Excel e imagens, extraindo blocos de informação pesquisáveis para garantir que o conteúdo gerado seja factual e verificável.
* **QA RAG com Rastreamento de Citações:** Combina recuperação vetorial com LLMs para gerar respostas citadas, ao mesmo tempo que permite ajustes manuais nos blocos de recuperação para melhorar a precisão.
* **Implantação e Integração Flexíveis:** Oferece implantação com Docker Compose e integração com vários LLMs.

**Casos de Uso:**

* Construção de sistemas de QA e assistentes de conhecimento orientados por documentos
* Implementação de auditoria de conteúdo e rastreamento de citações
* Implantação de aplicações RAG que lidam com estruturas de arquivos complexas

## Nº 4: OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* Estrelas GitHub: 62k
* GitHub: https://github.com/All-Hands-AI/OpenHands
* Site: https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**Visão Geral:**

**OpenHands** é construído em torno da ideia de que a IA deve "escrever menos código, fazer mais" — oferecendo capacidades como edição de código, execução de comandos, navegação na web e chamadas de API.

Como um projeto open-source licenciado sob MIT, o OpenHands pode ser implantado localmente via Docker ou acessado através do SaaS OpenHands Cloud, que inclui créditos de uso iniciais para testes rápidos. Com atualizações contínuas, o OpenHands evoluiu para uma plataforma de IA abrangente focada em desenvolvedores, agora apresentando um controlador de agente universal, colaboração multi-agente, gerenciamento de múltiplas sessões e execução segura em sandbox.

**Recursos Principais:**

* **Capacidades Gerais de Agente Desenvolvedor:** Os agentes podem realizar tarefas como modificar código, executar comandos, navegar na web e chamar APIs, imitando os fluxos de trabalho de desenvolvedores humanos.
* **Colaboração Multi-Agente & Gerenciamento de Sessão:** Suporta múltiplos agentes trabalhando juntos, com componentes de gerenciamento de sessão integrados (Session, EventStream, AgentController) para divisão de tarefas ou resolução colaborativa de problemas.
* **Execução Segura em Sandbox:** Código e comandos são executados em ambientes isolados (ex.: contêineres Docker) para garantir segurança e minimizar riscos ao sistema host.

**Casos de Uso:**

* Auxiliar desenvolvedores com tarefas rotineiras de codificação
* Automatizar pipelines de teste e implantação
* Prototipagem rápida e desenvolvimento de ferramentas

## Nº 5: MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* Estrelas GitHub: 57.8k
* GitHub: https://github.com/FoundationAgents/MetaGPT
* Site: https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**Visão Geral:**

MetaGPT é um framework de colaboração multi-agente inspirado no conceito de simular uma "empresa de software". Ele transforma requisitos em linguagem natural em um fluxo de trabalho completo — desde histórias de usuário e análise competitiva até design de API e documentação. Sua filosofia central é "Código = SOP(Equipe)", transformando procedimentos operacionais padrão (SOPs) em etapas acionáveis em funções como gerentes de produto, arquitetos e engenheiros.

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**Recursos Principais:**

* **Colaboração Multi-Papel de Agentes:** Inclui agentes integrados para funções como gerente de produto, arquiteto, gerente de projeto e engenheiro, simulando uma equipe do mundo real executando projetos orientados por SOP.
* **Processos Orientados por SOP:** Guia cada agente com procedimentos operacionais padrão para decomposição de tarefas, execução estruturada e redução de desvios ou alucinações.
* **Programação em Linguagem Natural:** Os usuários podem descrever seus requisitos em linguagem simples, e o MetaGPT gerará histórias de usuário, estruturas de dados, interfaces de API e designs de arquitetura correspondentes.

**Casos de Uso:**

* Geração automática de propostas de projetos de software
* Prototipagem rápida de fluxos de trabalho de equipe colaborativa
* Exploração de otimização e automação de desenvolvimento de software orientada por IA

## Nº 6: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* Estrelas GitHub: 56k
* GitHub: [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**Visão Geral:**

**LLMs-from-scratch** é um projeto educacional que constrói um modelo de linguagem de grande porte do zero, ajudando desenvolvedores a entender os princípios fundamentais e o processo de treinamento dos LLMs.

👉 [Veja a introdução completa e os casos de uso para mais detalhes.](https://www.nocobase.com/en/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## Nº 7: Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* Estrelas GitHub: 47k
* GitHub: https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**Visão Geral:**

**Huginn** é uma ferramenta de automação open-source que permite aos usuários executar agentes em seus próprios servidores para coletar informações da web e acionar ações com base em condições — como enviar notificações por e-mail ou monitorar palavras-chave. Projetado com o controle de dados em mente, o Huginn manteve atividade comunitária de longo prazo graças ao seu sistema de agentes auto-hospedado, amigável à privacidade e extensível.

**Recursos Principais:**

* **Plataforma de Agentes Web Auto-Hospedada:** Os usuários implantam agentes em seus próprios servidores, processam dados de forma autônoma e garantem total privacidade e controle.
* **Mecanismo de Regras Evento-Ação:** Suporta gatilhos condicionais que executam automaticamente ações como enviar notificações, executar scripts ou fazer chamadas HTTP quando eventos web específicos ocorrem.
* **Mecanismo de Agente Extensível:** Vem com muitos agentes integrados e suporta a adição de agentes personalizados através de gems Huginn Agent.

**Casos de Uso:**

* Monitoramento de informações e alertas
* Raspagem de dados e fluxos de trabalho automatizados
* Construção de ferramentas de automação personalizadas

## Nº 8: Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* Estrelas GitHub: 43.8k
* GitHub: https://github.com/unslothai/unsloth
* Site: https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**Visão Geral:**

**Unsloth** é um kit de ferramentas open-source projetado para ajuste fino de LLMs (como OpenAI gpt-oss, Qwen3, Llama 4) com foco em maior eficiência e otimização de memória. Construído sobre a arquitetura Triton da OpenAI, acelera significativamente a velocidade de treinamento enquanto reduz o uso de memória GPU.

**Recursos Principais:**

* **Ajuste Fino Otimizado para Memória:** Fornece um aumento de velocidade de 1,5 a 2,2× para ajuste fino de LLMs populares, reduzindo o uso de memória GPU em até 70-80%.
* **Fluxo de Trabalho Fácil em Notebook:** Os usuários simplesmente adicionam um conjunto de dados e clicam em "Executar Tudo" para concluir o ajuste fino do modelo rapidamente.
* **Ampla Compatibilidade de Modelos:** Suporta ajuste fino de LLMs incluindo Llama, Gemma, Qwen e mais.

**Casos de Uso:**

* Ajuste fino rápido de LLMs para pesquisa ou prototipagem de produtos
* Educação e treinamento
* Cenários que exigem alta eficiência de memória, como implantação em dispositivos com recursos limitados

## Nº 9: Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* Estrelas GitHub: 38.1k
* GitHub: https://github.com/mem0ai/mem0
* Site: https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**Visão Geral:**

**Mem0** é um sistema de gerenciamento de memória de longo prazo construído especificamente para agentes de IA, abordando o problema comum de "esquecimento" na IA. Ao introduzir uma camada de memória unificada, permite que os agentes persistam preferências do usuário e contexto histórico entre sessões e aplicações, possibilitando interações personalizadas e contínuas.

Em testes de benchmark LOCOMO, o Mem0 superou o OpenAI Memory com cerca de 26% mais precisão, 91% menor latência de resposta e 90% menor uso de tokens. É ideal para cenários como bots de atendimento ao cliente, assistentes de IA e sistemas autônomos onde a continuidade do contexto é essencial.

**Recursos Principais:**

* **Arquitetura de Memória em Múltiplos Níveis:** Suporta camadas de memória em nível de usuário, sessão e agente para armazenamento estruturado de informações.
* **Alto Desempenho & Eficiência de Custo:** Melhora a precisão enquanto reduz significativamente a latência e o consumo de tokens, fornecendo suporte de memória de longo prazo com menos recursos.
* **Processamento Local com Foco em Privacidade:** Todos os dados podem ser processados e armazenados localmente, dando aos usuários controle total sobre suas informações.

**Casos de Uso:**

* **Bots de Atendimento ao Cliente:** Reter preferências e histórico do usuário para melhorar a relevância das respostas
* **Assistentes de IA:** Manter memória de tarefas e persona entre sessões para interações mais naturais e coerentes
* **Sistemas Médicos & de Aconselhamento:** Preservar o contexto para melhorar a qualidade do serviço e o feedback preciso

## Nº 10: ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* Estrelas GitHub: 37.5k
* GitHub: https://github.com/2noise/ChatTTS
* Site: https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**Visão Geral:**

**ChatTTS** é um sistema de texto-para-fala open-source otimizado especificamente para tarefas conversacionais, suportando cenários com múltiplos falantes com foco em expressão natural e emocionalmente rica. Para evitar uso indevido, o projeto incorpora uma pequena quantidade de ruído de alta frequência no modelo treinado e reduz a qualidade do arquivo, com planos de implementar mecanismos de detecção para orientar ainda mais o uso ético.

**Recursos Principais:**

* **TTS Otimizado para Conversação:** Especialmente ajustado para cenários de diálogo, suportando conversas com múltiplos papéis e ritmo natural.
* **Controle de Prosódia de Granulação Fina:** Gerencia precisamente elementos prosódicos como risadas, pausas e palavras de preenchimento, tornando a fala sintetizada mais vívida e realista.

**Casos de Uso:**

* Construção de bots de voz realistas ou sistemas interativos de diálogo.
* Ferramentas de dublagem de personagens e prática de idiomas em produtos educacionais.
* Assistência de áudio para criação de conteúdo de voz e geração automatizada de podcasts.

## Nº 11: Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* Estrelas GitHub: 36.6k
* GitHub: https://github.com/alibaba/arthas
* Site: https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**Visão Geral:**

**Arthas** é uma ferramenta de diagnóstico Java open-source da Alibaba e, desde seu lançamento, tornou-se uma solução de referência para desenvolvedores Java solucionarem problemas em ambientes de produção. Projetada para anexar dinamicamente a aplicações de produção sem modificar código ou reiniciar servidores, permite que desenvolvedores executem comandos de depuração, inspecionem rastreamentos de pilha ou definam pontos de interrupção, melhorando muito a eficiência e a segurança na resolução de problemas de produção.

**Recursos Principais:**

* **Anexo Dinâmico:** Injeta Arthas em uma aplicação JVM de produção em execução sem reinicializações ou alterações de código para iniciar a depuração e o monitoramento instantaneamente.
* **Diagnóstico Interativo Baseado em CLI:** Fornece comandos como `stack`, `trace`, `watch` e `monitor` para visualizar instantaneamente pilhas de execução, contagens de chamadas de método, métricas de desempenho e muito mais.

**Casos de Uso:**

* Resolução rápida de incidentes de produção.
* Análise de gargalos de desempenho.
* Investigação de problemas em testes de regressão.

## Nº 12: AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* Estrelas GitHub: 34.7k
* GitHub: https://github.com/reworkd/AgentGPT
* Site: https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**Visão Geral:**

**AgentGPT** é um projeto open-source que permite aos usuários configurar e implantar agentes de IA diretamente no navegador, sem configuração complexa. Com uma interface amigável, basta inserir um objetivo, e o agente irá "pensar-agir-aprender" para realizá-lo.

**Recursos Principais:**

* **Configuração de Agente no Navegador:** Defina objetivos e nomes diretamente na interface web para iniciar agentes, reduzindo as barreiras de implantação.
* **Execução Orientada a Objetivos:** Os agentes planejam autonomamente subtarefas, executam-nas, fornecem feedback e otimizam sua abordagem.
* **Configuração Automatizada de Ambiente:** CLI integrada configura variáveis de ambiente, banco de dados (MySQL), backend (FastAPI) e frontend (Next.js) para implantação com um clique.

**Casos de Uso:**

* Assistentes inteligentes focados em tarefas.
* Ferramentas de validação de protótipos.
* Plataformas de aprendizado e demonstração.

## Nº 13: Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* Estrelas GitHub: 31.3k
* GitHub: https://github.com/CherryHQ/cherry-studio
* Site: https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**Visão Geral:**

**Cherry Studio**, lançado em dezembro de 2024, é uma plataforma conjunta de assistente de codificação de IA da CSDN, GitCode e Huawei Cloud CodeArts IDE. Visa fornecer uma matriz completa de assistentes de IA para desenvolvedores, suportando interação em linguagem natural, refatoração de código em nível de projeto e suporte ao desenvolvimento full-stack.

**Recursos Principais:**

* **Matriz de Assistentes de IA:** Inclui mais de 300 modelos de assistentes de IA específicos para a indústria, com a opção de criar assistentes personalizados, cobrindo áreas desde escrita até programação.
* **Agregação Multi-Modelo:** Alterne livremente entre modelos em nuvem como OpenAI e Gemini ou modelos locais, e compare saídas de múltiplos modelos em paralelo.
* **Edição Visual de Agentes:** Escolha entre assistentes predefinidos no "Mercado de Agentes" ou crie agentes personalizados, com otimização de prompt assistida por IA.

**Casos de Uso:**

* Assistência de código em nível de projeto.
* Soluções específicas para a indústria.
* Geração de código orientada por conhecimento.

## Nº 14: Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* Estrelas GitHub: 31.3k
* GitHub: https://github.com/khoj-ai/khoj
* Site: https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**Visão Geral:**

**Khoj** é um assistente pessoal de "segundo cérebro" open-source que integra documentos de múltiplas fontes em uma base de conhecimento, permitindo busca semântica para QA e lembretes inteligentes. Suporta a criação de agentes personalizados para tarefas agendadas, entrega de conteúdo ou respostas conversacionais em tempo real.

**Recursos Principais:**

* **Integração de Conhecimento Multi-Fonte:** Importa conteúdo de PDF, Markdown, Notion, GitHub e mais para uma base de conhecimento unificada.
* **Busca Semântica e Notificações:** Recupera conteúdo de documentos usando consultas em linguagem natural, com notificações push agendadas e lembretes por e-mail.
* **Suporte a Agentes Multi-Plataforma:** Funciona no desktop, como plugin do Obsidian, web, Emacs, WhatsApp e mais.

**Casos de Uso:**

* Assistente pessoal de gerenciamento de conhecimento.
* Sistemas automatizados de lembretes.
* Experiências de integração entre ferramentas.

## Nº 15: AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* Estrelas GitHub: 28.6k
* GitHub: https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Site: https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**Visão Geral:**

**AIHawk** é um agente de IA open-source licenciado sob AGPL focado em automatizar candidaturas a empregos. Ele raspa listas de empregos e usa modelos de linguagem para gerar materiais de candidatura personalizados, ajudando os usuários a se candidatar de forma eficiente.

**Recursos Principais:**

* **Candidaturas Automatizadas a Empregos:** Raspa sites de empregos e gera materiais de candidatura otimizados.
* **Arquitetura Open-Source Extensível:** Desenvolvedores podem personalizar o comportamento ou adicionar plugins.
* **Extensão para Plataforma Comercial:** Evoluiu para a plataforma laboro.co, oferecendo serviços hospedados e recursos expandidos de automação de recrutamento.

**Casos de Uso:**

* Assistente automático de candidatura a empregos.
* Pesquisa em automação de processos de recrutamento.
* Ferramentas de integração com plataformas de recrutamento.

## Nº 16: FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* Estrelas GitHub: 25.5k
* GitHub: https://github.com/labring/FastGPT
* Site: https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**Visão Geral:**

**FastGPT** é projetado como uma "plataforma de construção de agentes de IA", permitindo que desenvolvedores construam aplicações de IA complexas usando fluxos de trabalho visuais e bases de conhecimento, sem configuração tediosa.

**Recursos Principais:**

* **Orquestração Visual de Fluxo de Trabalho:** Interface de arrastar e soltar suportando nós de diálogo, chamadas HTTP, RPA, ramificações condicionais e mais.
* **Suporte a Base de Conhecimento & RAG:** Importa múltiplos formatos de arquivo (txt, md, pdf, etc.), com recuperação vetorial e híbrida para QA e automação orientadas por conhecimento.
* **Compatibilidade Multi-Modelo & API:** Integra-se com OpenAI, Claude e outros; fornece interfaces compatíveis com OpenAPI para fácil incorporação em sistemas existentes.

**Casos de Uso:**

* Construção rápida de bots de QA inteligentes (ex.: assistentes de atendimento ao cliente).
* Fluxos de trabalho de análise de documentos e sumarização automatizada.
* Manipulação automatizada de tarefas com integração de API externa.

## Nº 17: GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* Estrelas GitHub: 22.9k
* GitHub: https://github.com/assafelovic/gpt-researcher
* Site: https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**Visão Geral:**

**GPT Researcher** é um framework de agente de IA especializado em tarefas de pesquisa profunda. Pode planejar automaticamente fluxos de trabalho de pesquisa, raspar informações, gerar relatórios de pesquisa e produzir conteúdo com citações, oferecendo alta qualidade de relatório e personalização.

**Recursos Principais:**

* **Pesquisa Paralela de Agentes:** Um agente planejador cria perguntas de pesquisa, enquanto múltiplos agentes executores coletam e resumem informações em paralelo para maior eficiência e confiabilidade.
* **Geração de Relatórios Factuais:** Organiza e cita conteúdo automaticamente, produzindo relatórios de pesquisa estruturados e objetivos com fontes.

**Casos de Uso:**

* Escrever relatórios de análise competitiva ou pesquisa técnica rapidamente.
* Criação automatizada de esboços de pesquisa acadêmica ou resumos de contexto.
* Construção de agentes de conhecimento específicos de domínio para agregação de conhecimento empresarial.

## Nº 18: CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* Estrelas GitHub: 22.4k
* GitHub: https://github.com/CopilotKit/CopilotKit
* Site: https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**Visão Geral:**

**CopilotKit** é um framework open-source para integrar perfeitamente copilotos de IA em aplicações — seja como chat incorporado, áreas de texto inteligentes ou interfaces de agente completas. Fornece componentes de UI React e uma arquitetura headless para incorporação flexível.

**Recursos Principais:**

* **Suporte a React & UI Headless:** Componentes de UI plug-and-play ou implantações headless apenas com API.
* **Integração de Contexto da Aplicação:** Conecta lógica, estado e contexto do usuário da aplicação aos agentes de IA para funcionalidades mais personalizadas.
* **Desacoplamento Modelo-Arquitetura:** Funciona independentemente de modelos específicos ou frameworks de agentes, permitindo upgrades na pilha de IA sem afetar a experiência do usuário.

**Casos de Uso:**

* Assistentes de IA incorporados.
* Ferramentas de IA personalizadas.
* Experiências interativas multimodais.

## Nota Final

Agentes são excelentes em exploração, mas têm dificuldade em seguir regras estritas.

Os 18 projetos de agentes open-source acima são tanto uma caixa de ferramentas quanto um lembrete: selecionar os cenários certos e projetar limites razoáveis é a chave para maximizar o valor dos agentes.

Se este artigo te inspirou, sinta-se à vontade para compartilhá-lo com outras pessoas que estão explorando agentes de IA. 👍

**Leitura relacionada:**

* [Top 20 Projetos de IA Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 Projetos MCP Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 Aplicações Web Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 Ferramentas de Desenvolvedor Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Projetos Low-Code Open Source de Crescimento Mais Rápido no GitHub em 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 Projetos CRM Open Source com Mais Estrelas no GitHub](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
