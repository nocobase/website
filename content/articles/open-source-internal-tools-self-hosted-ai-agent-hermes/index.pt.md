---
title: "5 Ferramentas Internas de Código Aberto para Usar com o Hermes Agent"
description: "Saiba como NocoBase, Appsmith, Budibase, Directus e Baserow podem funcionar com o Hermes Agent para melhorar a construção, configuração e manutenção de ferramentas internas."
---

Agentes de IA não são mais populares apenas em cenários de desenvolvimento.

Além de ferramentas como Claude Code e OpenClaw, o Hermes Agent também começou a receber mais atenção recentemente.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[No Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/), um usuário mencionou que, após testar várias ferramentas de Agente, incluindo OpenClaw, Nanobot e Nanoclaw, ele ainda preferiu o Hermes Agent no final. Ele mantém as capacidades realmente necessárias sem sobrecarga desnecessária. Para cenários como modelos locais, servidores auto-hospedados, acesso SSH e operações baseadas em Telegram, também se encaixa em uma configuração mais leve e controlável.

> 💡Leia mais:
>
> [Como o OpenClaw pode ser usado em negócios reais? 5 ferramentas open source recomendadas](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [Depois de usar o Claude Code, você precisa destas 6 ferramentas open source](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

Para equipes que já estão planejando construir sistemas de negócios auto-hospedados ou ferramentas internas, o Hermes Agent é uma escolha forte se o Agente de IA precisar ser usado dentro de sistemas de negócios reais para lidar com consultas de dados, configuração de sistema, manutenção de fluxos de trabalho e execução de tarefas.

A plataforma de ferramentas internas fornece a base para o sistema de negócios, enquanto o Hermes funciona como um Agente auto-hospedado que ajuda as equipes a consultar, configurar e manter sistemas com linguagem natural, e capturar operações repetíveis como Skills reutilizáveis.

---

💬 Ei, você está lendo o blog da NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code com IA mais extensível para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

Este artigo foca em plataformas de ferramentas internas como NocoBase, Appsmith, Budibase, Directus e Baserow, e explica como elas podem ser usadas com o Hermes Agent em diferentes cenários.

Primeiro, aqui está uma tabela das ferramentas abordadas neste artigo, os sistemas de negócios comuns para os quais são adequadas e as capacidades que o Hermes Agent pode adicionar.


| Ferramenta | Sistemas de negócios / ferramentas internas recomendados                                                                                                             | O que o Hermes Agent pode adicionar                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase   | CRM, ERP, sistemas de aprovação, sistemas de tickets, gerenciamento de projetos, gerenciamento de fornecedores, gerenciamento de ativos, backends operacionais e outros sistemas de negócios | Usar linguagem natural para planejar modelos de dados, configurar páginas e permissões, manter fluxos de trabalho e capturar módulos de negócios de alta frequência como Skills reutilizáveis |
| Appsmith   | Painéis administrativos, dashboards de dados, backends de atendimento ao cliente, painéis de revisão, ferramentas operacionais, interfaces de gerenciamento de banco de dados | Esclarecer estruturas de página, organizar lógica de consulta e filtro, explicar relações entre componentes e fontes de dados e reutilizar templates comuns de páginas administrativas |
| Budibase   | Sistemas de formulários, fluxos de trabalho de aprovação, solicitações de funcionários, service desks de TI, aplicativos de fluxo de trabalho operacional, ferramentas de fluxo de trabalho interno | Esclarecer campos de formulário, nós de aprovação e transições de status, gerar templates de fluxo de trabalho e capturar Skills de tratamento de solicitações |
| Directus   | Backends de banco de dados, gerenciamento de API, sistemas de gerenciamento de conteúdo, plataformas de gerenciamento de dados estruturados, backends de operações de dados | Explicar estruturas de dados, organizar relacionamentos de campos, suportar consultas em linguagem natural e capturar fluxos de trabalho de gerenciamento de dados e manutenção de conteúdo |
| Baserow    | Bancos de dados baseados em tabelas, CRM leve, listas de fornecedores, planos de conteúdo, tabelas de progresso de projetos, listas de inventário | Planejar estruturas de tabela e visualizações, organizar regras de filtro, gerar campos de categoria e status e reutilizar templates de aplicativos leves |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Site oficial: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star: 22.6k

### Introdução

NocoBase é uma plataforma open source de no-code / low-code com IA para construir sistemas de negócios internos empresariais e backends administrativos.

Em seu núcleo, o NocoBase ajuda as equipes a construir sistemas de negócios de longo prazo através de modelos de dados, configuração de páginas, gerenciamento de permissões, fluxos de trabalho e extensões de plugins. Esses sistemas geralmente mudam com o tempo: campos precisam ser ajustados, páginas precisam ser otimizadas, permissões precisam ser redefinidas e fluxos de trabalho de aprovação e notificação precisam ser atualizados à medida que o negócio muda.

O NocoBase é bem adequado para esses sistemas de longo prazo, enquanto o Hermes Agent pode participar ainda mais na construção, configuração e manutenção do sistema.

Em termos de capacidades de IA, o NocoBase já fornece AI Employees, AI Skills, CLI, MCP e suporte relacionado. AI Employees podem atuar como assistentes inteligentes dentro do sistema e ajudar com consultas de dados, geração de conteúdo, tratamento de tarefas e muito mais. AI Skills ajudam Agentes externos a entender como o NocoBase é configurado e o que eles podem ou não operar. O CLI permite que Agentes executem instalação, criação, modificação e outras operações através de comandos. O MCP fornece um ponto de entrada mais padrão para ferramentas de IA externas se conectarem ao NocoBase.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### O que pode fazer com o Hermes?

Depois que o Hermes é conectado ao NocoBase, ele pode entender o sistema de configuração do NocoBase através dos NocoBase Skills e executar criação, modificação, implantação e outras operações através do NocoBase CLI.

**1. Criar módulos de negócios com linguagem natural**

Por exemplo, ao criar um módulo de gerenciamento de renovação de clientes, você pode primeiro deixar o Hermes organizar as estruturas de dados para clientes, contratos, registros de renovação, tarefas de acompanhamento e muito mais. Em seguida, ele pode planejar as páginas de lista, páginas de detalhes, dashboards e permissões básicas.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Ajudar a manter permissões e fluxos de trabalho**

Por exemplo, se a regra é "vendedores só podem ver os clientes que possuem, supervisores podem ver os clientes de sua equipe e finanças pode ver os valores dos contratos", o Hermes pode transformar essa descrição de negócio em lógica de configuração de permissão e fluxo de trabalho mais específica.

**3. Capturar operações de alta frequência como Skills**

Após concluir um módulo de CRM, fluxo de trabalho de aprovação ou gerenciamento de fornecedores pela primeira vez, o Hermes pode capturar práticas como nomenclatura de campos, estrutura de página e regras de permissão. Elas podem então ser reutilizadas ao construir módulos semelhantes posteriormente.

### Exemplo de instrução de tarefa

```text
Ajude-me a criar um módulo de gerenciamento de renovação de clientes no NocoBase.

Ele precisa incluir informações do cliente, data de expiração do contrato, status de renovação, responsável, registros de acompanhamento e um fluxo de trabalho de aprovação.

Para permissões:
Vendedores só podem ver os clientes que possuem.
Supervisores de vendas podem ver os clientes da equipe.
Finanças pode ver valores de contrato e status de pagamento.
Administradores podem ver e editar todo o conteúdo.

Para fluxos de trabalho:
Gerar automaticamente um lembrete de renovação 30 dias antes da expiração do contrato.
Quando o valor da renovação exceder 100.000 yuans, é necessária a aprovação do supervisor e das finanças.
Após a aprovação, atualizar o status de renovação e gerar a próxima tarefa de acompanhamento.

Após a conclusão, organize este processo de construção do módulo em um Skill reutilizável, para que possa ser usado posteriormente para criar módulos de gerenciamento de fornecedores, gerenciamento de contratos ou gerenciamento de projetos.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Recursos relacionados

Documentação: [https://docs.nocobase.com/](https://docs.nocobase.com/)

Documentação de IA: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Site oficial: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star: 39.9k

### Introdução

Appsmith é uma plataforma low-code open source usada principalmente para construir aplicativos internos, como painéis administrativos, dashboards de dados, backends de suporte ao cliente, ferramentas de revisão e ferramentas de TI. Ela pode se conectar a bancos de dados, APIs e serviços de terceiros, e construir rapidamente interfaces para equipes internas através de componentes de arrastar e soltar, configuração de consultas e extensões JavaScript.

O Appsmith fornece Appsmith AI, que pode adicionar consultas de IA, geração de texto, classificação, sumarização e outras capacidades aos aplicativos. Ele também pode construir interações de IA em torno de dados internos. O Appsmith também está desenvolvendo Appsmith Agents para trazer capacidades de IA para as ferramentas e sistemas que as equipes usam diariamente.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### O que pode fazer com o Hermes?

O Appsmith constrói páginas específicas e interfaces de operação de dados, enquanto o Hermes ajuda as equipes a transformar requisitos de linguagem natural em estruturas de página, lógica de consulta e regras de operação mais claras.

1. Planejar interfaces administrativas internas

Por exemplo, ao construir um painel de tratamento de exceções de pedidos, você pode primeiro pedir ao Hermes para esclarecer quais campos devem ser exibidos, quais filtros são necessários, quais botões de ação são necessários e como a página deve ser dividida em seções. O Appsmith pode então cuidar da construção da interface específica e da conexão de dados.

2. Organizar lógica de consulta e filtro

Um problema comum com ferramentas internas não é se uma página existe, mas se a lógica de dados por trás da página é clara. O Hermes pode ajudar as equipes a transformar descrições como "quais pedidos quero ver", "como as exceções devem ser identificadas" e "quais registros devem ser priorizados" em condições de consulta e regras de operação.

3. Capturar templates de páginas administrativas

Backends de suporte ao cliente, painéis de revisão, dashboards operacionais e páginas de consulta financeira geralmente aparecem repetidamente. O Hermes pode capturar campos comuns, layouts de componentes, filtros e lógica de operação como Skills, para que páginas semelhantes possam ser reutilizadas posteriormente.

### Exemplo de instrução de tarefa

```text
Ajude-me a planejar um painel de tratamento de exceções de pedidos, que será construído posteriormente no Appsmith.

A página precisa exibir pedidos anormais, nomes de clientes, valores de pedidos, responsáveis, motivos da exceção, status de processamento e o registro de comunicação mais recente.

Os filtros incluem:
Região.
Valor do pedido.
Status de processamento.
Responsável.
Tipo de exceção.

Para operações:
A equipe operacional pode atualizar o status de processamento.
Supervisores podem atribuir responsáveis em lote.
Finanças só pode visualizar valores de pedidos e status de pagamento.

Por favor, organize a estrutura da página, a lógica de consulta de dados e o layout dos componentes, e capture-os como um template de página de ferramenta interna reutilizável.
```

### Recursos relacionados

Documentação: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Site oficial: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star: 28k

### Introdução

Budibase é uma plataforma operacional open source usada principalmente para construir aplicativos internos, fluxos de trabalho de automação e Agentes de IA. Ela é mais focada em cenários de negócios baseados em processos, como solicitações de funcionários, tratamento de aprovações, service desks de TI, roteamento de formulários, atualizações de dados e automação operacional.

O Budibase suporta geração de código, geração de tabelas de banco de dados e criação de fluxos de trabalho de automação alimentados por grandes modelos de linguagem. Os Budibase Agents também estão sendo desenvolvidos, permitindo que as equipes definam o comportamento do Agente através de linguagem natural e o conectem a dados e APIs internos.

### O que pode fazer com o Hermes?

O Budibase é mais adequado para aplicativos baseados em formulários, aprovações e fluxos de trabalho. O Hermes pode ajudar as equipes a esclarecer regras no estágio inicial do design do fluxo de trabalho e capturar métodos de tratamento de solicitações de alta frequência posteriormente.

1. Esclarecer formulários e fluxos de trabalho de aprovação

Para processos como solicitações de equipamentos, reembolso de despesas, suporte ao cliente e aprovação de contratos, o Hermes pode primeiro ajudar as equipes a detalhar campos, nós de aprovação, condições de gatilho e regras de notificação. O Budibase pode então cuidar da construção do aplicativo real.

2. Gerar templates de tratamento de fluxo de trabalho

Muitas solicitações internas seguem padrões de tratamento fixos. O Hermes pode organizar fluxos de trabalho como "funcionário envia uma solicitação, supervisor aprova, o departamento relevante trata, status é atualizado e o solicitante é notificado" em templates para reutilização rápida posteriormente.

3. Capturar regras de operação

Aplicativos baseados em fluxo de trabalho geralmente precisam mudar à medida que as regras organizacionais mudam. O Hermes pode registrar sequências de aprovação, métodos de tratamento de exceções, responsabilidades de funções e regras de notificação, transformando-os em Skills reutilizáveis.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Exemplo de instrução de tarefa

```text
Ajude-me a projetar um processo de solicitação de equipamentos para funcionários, que será construído posteriormente no Budibase.

O processo inclui:
O funcionário envia uma solicitação de equipamento.
O supervisor aprova.
O TI confirma o estoque.
Após a aprovação, o status do equipamento é atualizado.
O sistema notifica o solicitante para retirar o equipamento.

Os campos do formulário incluem:
Solicitante.
Departamento.
Tipo de equipamento.
Descrição do propósito.
Horário previsto para retirada.
Status de aprovação.
Responsável.

Por favor, organize os campos do formulário, nós de aprovação, transições de status e regras de notificação, e capture este processo de solicitação de equipamento como um Skill reutilizável.
```

### Recursos relacionados

Documentação: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Site oficial: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star: 35.9k

### Introdução

Directus é uma API em tempo real e backend de aplicativo para gerenciar conteúdo de banco de dados SQL. Ele pode gerar APIs REST / GraphQL e uma interface administrativa sobre bancos de dados existentes. Ele suporta PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL e outros bancos de dados, bem como implantação local, implantação privada e serviços em nuvem.

Em termos de capacidades de IA, o Directus fornece Directus MCP, que permite que ferramentas de IA como Claude e ChatGPT leiam, criem e gerenciem dados do Directus. O Directus MCP segue o sistema de permissão existente, portanto, as ações de acesso e modificação da IA precisam passar pela mesma camada de autenticação e autorização.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### O que pode fazer com o Hermes?

O Directus é mais focado em backends de dados e gerenciamento de API. Quando o Hermes é usado com o Directus, o foco não é gerar páginas, mas ajudar as equipes a entender estruturas de dados, consultar dados de negócios e capturar ações comuns de gerenciamento de dados.

1. Explicar estruturas de dados

Para bancos de dados existentes, os usuários de negócios geralmente não entendem como os campos se relacionam. O Hermes pode ajudar a organizar coleções, campos, relacionamentos e limites de permissão, tornando a estrutura de dados mais fácil de entender.

2. Auxiliar com consultas e organização de dados

Por exemplo, ao consultar fornecedores, contratos, pagamentos, status de conteúdo, registros de clientes e informações semelhantes, o Hermes pode transformar requisitos de linguagem natural em lógica de consulta de dados mais específica.

3. Capturar ações de gerenciamento de dados

Ações como revisão de conteúdo, manutenção de perfis de fornecedores, organização de dados de clientes e verificação de status de contratos geralmente se repetem. O Hermes pode organizar esses processos de operação de dados em Skills, para que possam ser executados pelas mesmas regras posteriormente.

### Exemplo de instrução de tarefa

```text
Ajude-me a organizar a estrutura de dados de fornecedores no Directus.

Ela precisa distinguir:
Informações básicas do fornecedor.
Contatos.
Registros de contrato.
Status de pagamento.
Status de cooperação.
Registro de comunicação mais recente.

Por favor, explique como essas coleções devem ser relacionadas e organize um processo de verificação de status de fornecedor.

Posteriormente, espero usar linguagem natural para consultar:
Quais contratos de fornecedores estão prestes a expirar.
Quais fornecedores têm status de pagamento anormal.
Quais fornecedores não atualizaram registros de comunicação por mais de 30 dias.

Por favor, capture este método de organização e consulta de dados como um Skill reutilizável.
```

### Recursos relacionados

Documentação: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

Documentação do MCP: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Site oficial: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star: 4.9k

### Introdução

Baserow é uma plataforma no-code open source que pode ser usada para construir bancos de dados, aplicativos, automações e Agentes de IA. É frequentemente visto como uma alternativa open source ao Airtable. Ele suporta implantação em nuvem e auto-hospedada, e é adequado para gerenciar dados estruturados e aplicativos de negócios leves.

O Baserow 2.0 introduziu o assistente de IA Kuma, que pode criar bancos de dados, escrever fórmulas e construir automações com linguagem natural. Ele também fornece campos de IA, um construtor de automação, pesquisa no espaço de trabalho e outras capacidades.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### O que pode fazer com o Hermes?

O Baserow é mais adequado para construir aplicativos leves começando com dados baseados em tabelas. Quando usado com o Baserow, o Hermes pode ajudar as equipes a passar de "organizar tabelas" para "capturar hábitos de gerenciamento de dados".

1. Criar estruturas de tabela e visualizações

Para listas de clientes, listas de fornecedores, planos de conteúdo, progresso de projetos, registros de inventário e casos de uso semelhantes, o Hermes pode primeiro planejar estruturas de tabela, campos e visualizações com base em descrições de negócios. O Baserow então cuida do gerenciamento de dados.

2. Organizar filtros e regras de classificação

Aplicativos leves geralmente dependem de diferentes visualizações. O Hermes pode transformar regras de negócios como "pendente de revisão", "em cooperação", "prestes a expirar" e "alta prioridade" em condições de filtro e configurações de visualização.

3. Capturar templates de aplicativos leves

Se uma equipe usa frequentemente o Baserow para gerenciar dados de negócios semelhantes, o Hermes pode capturar estruturas de campo, regras de visualização e categorias de status como Skills, e então reutilizá-los ao criar novas tabelas posteriormente.

### Exemplo de instrução de tarefa

```text
Ajude-me a planejar uma tabela de gerenciamento de fornecedores, que será criada posteriormente no Baserow.

Os campos incluem:
Nome do fornecedor.
Pessoa de contato.
Informações de contato.
Status de cooperação.
Data de expiração do contrato.
Status de pagamento.
Responsável.
Horário da comunicação mais recente.
Observações.

Três visualizações precisam ser criadas:
Fornecedores pendentes de revisão.
Fornecedores em cooperação.
Fornecedores com contratos prestes a expirar.

Por favor, projete condições de filtro para cada visualização e capture esta estrutura de tabela de fornecedores e regras de visualização como um Skill reutilizável, para que seja mais fácil criar tabelas de clientes, tabelas de canais ou tabelas de parceiros posteriormente.
```

### Recursos relacionados

Documentação: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. Se essas plataformas já têm capacidades de IA, por que o Hermes ainda é necessário?

A IA integrada nessas plataformas geralmente é melhor para concluir tarefas específicas dentro do produto, como gerar páginas, SQL, lógica de formulário ou configurações de componentes.

O valor do Hermes reside na auto-hospedagem, memória de longo prazo e acúmulo de Skills. Ele é mais adequado para lembrar regras de negócios, hábitos de permissão e métodos de configuração de sistema em várias tarefas e conversas.

### 2. Quais plataformas de ferramentas internas funcionam melhor com o Hermes?

Plataformas mais adequadas para o Hermes são plataformas de sistema de negócios de longo prazo que requerem manutenção contínua, como NocoBase, Budibase, Appsmith, Directus e Baserow.

Entre elas, o NocoBase é mais adequado para manter sistemas de negócios completos. O Appsmith é mais adequado para interfaces internas e painéis de dados. O Budibase é mais adequado para formulários e fluxos de trabalho. Directus e Baserow são mais adequados para cenários de gerenciamento de dados.

### 3. Para que tipo de equipes o Hermes Agent é adequado?

O Hermes é mais adequado para equipes que já usam ferramentas auto-hospedadas, valorizam a segurança dos dados, precisam manter sistemas de negócios a longo prazo e desejam que a IA se lembre de hábitos de configuração e capture experiência operacional.

### 4. Por que os Agentes de IA auto-hospedados são importantes para ferramentas internas empresariais?

Porque as ferramentas internas geralmente contêm dados de negócios confidenciais, como clientes, pedidos, contratos, aprovações, funcionários e finanças.

Quando um Agente de IA precisa acessar esses dados e participar de operações do sistema, as equipes prestarão mais atenção a onde os dados são armazenados, como as permissões são controladas, como as operações são revisadas e como a memória de longo prazo é gerenciada. Agentes auto-hospedados são mais adequados para equipes que exigem um controle mais forte.

Existem muitos produtos de Agente de IA, mas se sua equipe já está usando plataformas de ferramentas internas open source e deseja trazer Agentes de IA para sistemas internos empresariais de uma forma mais segura e controlável, o Hermes Agent vale a pena tentar. Se este artigo foi útil, sinta-se à vontade para compartilhá-lo com amigos que estão acompanhando Agentes de IA auto-hospedados e a construção de ferramentas internas.


**Leitura relacionada**

* [OpenClaw e 5 Ferramentas Open-Source para Monitorar Fluxos de Trabalho de Negócios](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Quais Ferramentas Open-Source Funcionam Bem com OpenCode? 5 Projetos para Experimentar](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Construindo Ferramentas Internas com Codex: 6 Projetos Open-Source para Desenvolvedores](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Depois do Claude Code: 6 Ferramentas Open-Source que Você Deve Conhecer](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Ferramentas Open-Source de IA e No-Code para Desenvolvimento de Software Empresarial](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Plataformas de Agente de IA Open-Source para Construir Ferramentas Internas](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [Os Melhores CRMs Auto-Hospedados de Nível Empresarial com Suporte a RBAC, IA e API Aberta](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Melhores Ferramentas Open-Source para Substituir Middleware de Integração Personalizado](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Substituir Excel por NocoBase ou Airtable? Uma Comparação Custo por Custo](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Maneiras de Construir Rapidamente Aplicativos Web a partir de Dados do Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Não Apenas PostgreSQL: Comparando 5 Plataformas No-Code/Low-Code com Suporte a Banco de Dados Externo](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Guia de Seleção de Ferramentas de Gerenciamento de Projetos Open Source, Edição 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
