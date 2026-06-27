---
title: "Anunciando NocoBase 2.1.0"
description: "NocoBase 2.1 apresenta uma nova CLI para pessoas e Agentes de IA se conectarem e gerenciarem aplicações. Também aprimora a construção com IA, Skills, desenvolvimento de plugins de IA, Funcionários de IA, colaboração multi-app, gerenciamento de versões, fluxos de trabalho e compatibilidade com 2.0."
---

NocoBase 2.1 é uma grande atualização para **capacidades de IA, multi-app e adaptação ao 2.0**. Apresentamos a CLI do NocoBase, facilitando tanto para pessoas quanto para Agentes de IA se conectarem e gerenciarem aplicações NocoBase. Desde a criação de aplicações e construção assistida por IA até Funcionários de IA aprimorados e um plugin de desenvolvimento de IA, cobre todo o fluxo, desde a integração ao ambiente até a construção do sistema e colaboração de negócios. Também aprimoramos as capacidades multi-app para tornar a interação e colaboração entre aplicações mais fácil. Ao mesmo tempo, adicionamos controle de versão e continuamos a arredondar substancialmente o suporte a páginas 2.0 e capacidades principais — mais blocos, campos, ações e plugins agora suportam 2.0.

## O que há de novo

### Apresentando a CLI do NocoBase

Nesta versão, a CLI do NocoBase (`nb`) é o ponto de entrada principal tanto para usuários comuns quanto para Agentes de IA se conectarem ao NocoBase.

A CLI é usada para inicializar, conectar e gerenciar aplicações NocoBase em um espaço de trabalho local. Ela cobre vários cenários:

- Instalar uma nova aplicação NocoBase via Docker, npm ou Git e, em seguida, salvá-la como um ambiente CLI
- Conectar a uma aplicação NocoBase existente e salvá-la como um ambiente CLI
- Instalar, criar e ativar plugins
- Operar, fazer backup e gerenciar aplicações NocoBase

![Assistente visual da CLI do NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Quer você queira integrar IA a um sistema existente ou criar uma nova aplicação do zero, pode lidar com a inicialização e o gerenciamento contínuo através da CLI.

Para equipes, a CLI fornece um ponto de entrada padrão que os Agentes de IA podem entender e operar — inicialização do ambiente, configuração de conexão e gerenciamento de tempo de execução compartilham o mesmo fluxo.

A versão oficial também adiciona um conjunto de comandos relacionados a operações:

- `nb api`: Chamar a API do NocoBase através da CLI.
- `nb app`: Gerenciar o estado de tempo de execução da aplicação: iniciar, parar, reiniciar, logs e atualizar.
- `nb backup`: Criar um backup e baixá-lo localmente, ou restaurar um arquivo de backup local para um ambiente de destino.
- `nb config`: Gerenciar a configuração padrão da CLI.
- `nb db`: Gerenciar o banco de dados embutido do ambiente selecionado.
- `nb env`: Gerenciar ambientes de projeto NocoBase, o ambiente atual, status, detalhes e comandos de tempo de execução.
- `nb license`: Gerenciar licenças comerciais e plugins licenciados.
- `nb plugin`: Gerenciar plugins do ambiente NocoBase selecionado.
- `nb scaffold`: Gerar um scaffold de desenvolvimento de plugin NocoBase.
- `nb self`: Verificar ou atualizar a própria CLI do NocoBase.
- `nb source`: Gerenciar projetos de origem local: baixar, desenvolver, construir e testar.

Documentação relacionada:

- [Instalar NocoBase com a CLI](https://docs.nocobase.com/quickstart/installation/cli)
- [Guia de integração de Agente de IA](https://docs.nocobase.com/ai/quick-start)
- [Referência de comandos da CLI do NocoBase](https://docs.nocobase.com/api/cli/)

### Construção assistida por IA: substitua a configuração manual por conversa

A construção assistida por IA é uma das experiências principais nesta versão. Você pode descrever suas necessidades de negócios em linguagem natural, e a IA ajuda a concluir a modelagem de dados, configuração de página, configuração de permissões e orquestração de fluxo de trabalho.

Comparada com a construção low-code tradicional, a construção assistida por IA tem várias vantagens claras:

- Uma barreira de entrada mais baixa — você não precisa estar familiarizado com todos os conceitos de configuração antecipadamente
- Um caminho mais curto da descrição do requisito ao protótipo funcional
- Dados, UI e configuração de fluxo de trabalho podem ser concluídos pela IA continuamente

Por exemplo: "projete um modelo de dados de CRM para mim", "crie uma página de gerenciamento de clientes para mim" ou "orquestre um fluxo de trabalho que deduza automaticamente o estoque após a criação de um pedido" — tudo isso pode ser tratado pela IA dentro do escopo das capacidades do NocoBase.

Documentação relacionada:

- [Início rápido da construção assistida por IA](https://docs.nocobase.com/ai-builder/)

### Skills do NocoBase cobrem todo o fluxo de construção

Para ajudar a IA a realmente entender o sistema de configuração do NocoBase, esta versão traz um conjunto de pacotes de conhecimento de domínio que podem ser instalados em Agentes de IA — Skills do NocoBase.

Skills são wrappers padronizados de conhecimento e operação organizados em torno dos principais domínios de capacidade do NocoBase, ajudando a IA a entender com mais precisão modelos de objetos, estruturas de configuração e limites de execução.

Atualmente, fornecemos 8 Skills que cobrem todo o fluxo de construção:

- [Gerenciamento de ambiente](https://docs.nocobase.com/ai-builder/env-bootstrap) — verificações de ambiente, instalar/implantar, atualizar e solucionar problemas
- [Modelagem de dados](https://docs.nocobase.com/ai-builder/data-modeling) — criar e gerenciar tabelas, campos e relações
- [Construção de UI](https://docs.nocobase.com/ai-builder/ui-builder) — criar e editar páginas, blocos, popups e reações de interação
- [Gerenciamento de fluxo de trabalho](https://docs.nocobase.com/ai-builder/workflow) — criar, editar, ativar e diagnosticar fluxos de trabalho
- [Configuração de permissões](https://docs.nocobase.com/ai-builder/acl) — gerenciar funções, políticas de permissão, vínculos de usuário e avaliação de risco
- [Soluções](https://docs.nocobase.com/ai-builder/dsl-reconciler) — construir em massa sistemas de negócios inteiros a partir de YAML (ainda em beta, com estabilidade limitada)
- [Gerenciamento de plugins](https://docs.nocobase.com/ai-builder/plugin-manage) — visualizar, ativar e desativar plugins
- [Gerenciamento de publicação](https://docs.nocobase.com/ai-builder/publish) — publicação entre ambientes, backup/restauração e migração

Com Skills, a IA pode entender com mais precisão o sistema de configuração do NocoBase e fornecer assistência mais inteligente ao construir e gerenciar sistemas.

**Nota**: As Skills do NocoBase ainda estão sendo ativamente aprimoradas. As Skills do NocoBase também são instaladas automaticamente quando você instala e inicializa a CLI do NocoBase, então, na maioria dos casos, você não precisa instalá-las separadamente.

Documentação relacionada:

- [Skills do NocoBase](https://github.com/nocobase/skills)

### Plugin de desenvolvimento de IA

Esta versão preenche as capacidades fundamentais necessárias para o desenvolvimento de plugins de IA, para que a IA possa participar não apenas na construção de aplicações, mas também no desenvolvimento de plugins personalizados.

Isso se manifesta em três áreas principais:

- Um pipeline de construção `rsbuild/rspack` unificado, consolidando o desenvolvimento de plugins e o sistema de construção do frontend
- Uma capacidade `client-v2` e um sistema de roteamento `/v/` voltados para o desenvolvimento de IA, preparando-se para o desenvolvimento de plugins de cliente de próxima geração
- Skills de desenvolvimento de plugins de IA que ajudam a IA a entender melhor a estrutura do plugin, organização do código e padrões de implementação

A preparação em torno do `client-v2` inclui:

- `@nocobase/app` expõe a entrada `client-v2`
- O kernel fornece um pacote `@nocobase/client-v2` com componentes base, utilitários e definições de tipo
- Cada plugin obtém um diretório `/src/client-v2`
- Uma nova rota `/v/` é adicionada — ainda está sendo ativamente aprimorada, disponível para adotantes iniciais
- O kernel está gradualmente migrando para V2
- Os plugins estão gradualmente migrando para V2

Um pipeline de construção unificado reduz o custo do desenvolvimento e depuração de plugins de frontend. A implementação gradual do `client-v2` também dá à IA uma estrutura de destino mais estável para gerar e manter o código do plugin.

Na prática: você pode descrever um requisito de plugin em linguagem natural, e a IA ajuda a gerar o código frontend e backend, tabelas de dados, APIs, configuração de permissões e conteúdo de i18n.

**Nota**: O desenvolvimento de plugins de IA é apenas para novos plugins do estilo `client-v2`. Acompanharemos com documentação de migração e Skills para migrar de plugins `client-v1` para `client-v2`, para ajudá-lo a trazer plugins existentes para o novo sistema.

Documentação relacionada:

- [Início rápido do plugin de desenvolvimento de IA](https://docs.nocobase.com/ai-dev/)
- [Desenvolvimento de plugins](https://docs.nocobase.com/plugin-development/)

### Aprimoramentos dos Funcionários de IA

A construção assistida por IA responde "como uso IA para construir um sistema"; os Funcionários de IA respondem "como deixo a IA trabalhar dentro do sistema para resolver problemas de negócios concretos".

Os Funcionários de IA existiam em versões anteriores, mas nesta versão, as capacidades relacionadas foram aprimoradas e o kernel de IA foi arredondado:

- [Suporte a MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Novo Atlas de Funcionários de IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), desempenhando uma função de líder de equipe e despachando outros Funcionários de IA para concluir tarefas com base na intenção do usuário
- [Nó de fluxo de trabalho de Funcionário de IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Ferramenta de pesquisa na web baseada em LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nova ferramenta de consulta de agregação e ferramenta de geração de relatórios](https://docs.nocobase.com/ai-employees/scenarios/business-report) para produzir relatórios de análise de negócios
- [Nova engenheira de localização Lina](https://docs.nocobase.com/ai-employees/built-in/lina), uma Funcionária de IA embutida do plugin de localização usada para tradução de localização do sistema, suportando escopos de tradução incremental, selecionada e completa

Essas melhorias levam a extensibilidade, orquestração e capacidades de execução dos Funcionários de IA dentro dos sistemas de negócios para o próximo nível. Os Funcionários de IA podem entender o contexto de negócios atual, invocar habilidades para executar tarefas específicas, participar de fluxos de trabalho automatizados e combinar informações externas para fornecer análise e saída.

A versão oficial também adiciona suporte para Funcionários de IA carregarem arquivos de campos de anexo de fluxo de trabalho e lidarem com múltiplas conversas em paralelo, melhorando ainda mais a usabilidade dos Funcionários de IA em processos de negócios reais.

Documentação relacionada:

- [Funcionários de IA](https://docs.nocobase.com/ai-employees/)
- [Lina: Engenheira de localização](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Traduzir termos de localização com Lina e um modelo local HY-MT1.5-1.8B](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Controle de versão

O controle de versão ajuda você a gerenciar melhor as iterações de versão e o histórico de alterações da sua aplicação. Você pode criar, visualizar e restaurar diferentes versões de uma aplicação, facilitando a alternância de versões e a recuperação de problemas durante o desenvolvimento e as operações. **Nota: Este recurso requer a edição Professional ou superior.**

![](https://static-docs.nocobase.com/20260526220510.png)

Documentação relacionada:

- [Controle de versão](https://docs.nocobase.com/ops-management/version-control/)
- [Gerenciador de backup](https://docs.nocobase.com/ops-management/backup-manager/)

### Aprimoramentos multi-app

Nesta versão, fizemos alguns aprimoramentos importantes para implantações multi-app, principalmente em três áreas:

- [Novo bloco de aplicativo e alternador de aplicativo](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), que permitem exibir pontos de entrada para outros sub-aplicativos em uma página, facilitando para os usuários alternarem entre o aplicativo principal e os sub-aplicativos.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Novo login único de aplicativo](https://docs.nocobase.com/multi-app/multi-app/app-sso). Quando um usuário entra em um sub-aplicativo a partir do aplicativo principal, ou alterna entre sub-aplicativos, o sistema tenta automaticamente fazer login no sub-aplicativo de destino usando o usuário atualmente logado. Os usuários não precisam mais reinserir suas credenciais em cada sub-aplicativo.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Chamando APIs de sub-aplicativos](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). Em cenários multi-app, cada sub-aplicativo tem sua própria API independente, distinguida por prefixo de caminho, parâmetros e assim por diante, facilitando a chamada da API de um sub-aplicativo.

Esses aprimoramentos são muito práticos para usuários que executam implantações multi-app, facilitando a troca de dados e a operação em múltiplas aplicações e melhorando a eficiência geral de colaboração de sistemas multi-app.

Documentação relacionada:

- [Bloco de aplicativo e alternador de aplicativo](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [Login único de aplicativo](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Chamando APIs de sub-aplicativos](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Aprimoramentos de fluxo de trabalho

Esta versão aprimora a **controlabilidade e observabilidade** dos fluxos de trabalho:

- Adicionado controle de tempo limite — fluxos de trabalho que executam por muito tempo são automaticamente encerrados (subfluxos também suportam configuração de tempo limite)
- Adicionados campos de criado por e atualizado por
- Adicionado um campo de log aos jobs de nó, facilitando a visualização de logs de nó durante a depuração
- O gatilho Webhook (modo síncrono) retorna um status de resposta 408 em caso de tempo limite

Documentação relacionada:

- [Fluxo de trabalho](https://docs.nocobase.com/workflow/)

### Campo de assinatura manuscrita

Adicionado um campo de assinatura manuscrita que permite desenhar e salvar uma assinatura em um formulário, adequado para aprovações, folhas de confirmação, recibos e cenários semelhantes.

Documentação relacionada:

- [Campo de assinatura manuscrita](https://docs.nocobase.com/data-sources/field-signature/)

### Ação de item JS

Adicionada a ação de item JS, que permite executar lógica personalizada em uma ação escrevendo JS, trabalhando em conjunto com fluxos de eventos para atender a necessidades de interação mais flexíveis.

Documentação relacionada:

- [Ação de item JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### Adaptação ao 2.0 e novos recursos

Além da IA, esta versão continua a migrar módulos de recursos principais para 2.0, ao mesmo tempo que lança novos recursos para cenários de negócios do mundo real.

Novos recursos

- [Campo de assinatura manuscrita](https://docs.nocobase.com/data-sources/field-signature/)
- [Ação de item JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptação ao 2.0

- [Solicitação personalizada](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloco de filtro de árvore](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloco de calendário](https://docs.nocobase.com/data-sources/calendar/)
- [Bloco Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Bloco Gantt](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Bloco de lista](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Bloco de cartão de grade](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Bloco de mapa](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Bloco Markdown](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [Bloco iframe](https://docs.nocobase.com/integration/embed)
- [Bloco de gráfico / Visualização de dados](https://docs.nocobase.com/data-visualization)

## Documentação multilíngue

- Adicionada documentação em indonésio e vietnamita
