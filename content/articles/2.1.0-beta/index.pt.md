---
title: "Anunciando NocoBase 2.1-beta"
description: "Grande atualização de IA: desde integração CLI e construção com IA até NocoBase Skills, desenvolvimento de plugins de IA e Funcionários de IA aprimorados—cobrindo todo o ciclo de vida de construção, extensão e operação de sistemas de negócios. Construa e execute sistemas de negócios reais mais rapidamente com IA."
---

Este documento se aplica ao NocoBase 2.1.0-beta.24 e versões posteriores.

Esta é uma grande atualização **centrada em capacidades de IA**. Esta versão permite que você traga Agentes de IA para o NocoBase — abrangendo integração com CLI, construção assistida por IA, Agentes de IA aprimorados e um plugin de desenvolvimento de IA — cobrindo todo o fluxo, desde a configuração do ambiente até a construção do sistema e colaboração de negócios. Também continuamos a aprimorar o suporte a páginas V2 e as capacidades principais.

## O que há de novo

### NocoBase CLI se torna o ponto de entrada oficial para Agentes de IA

Nesta versão, a CLI do NocoBase (`nb`) é o ponto de entrada principal para os Agentes de IA se conectarem ao NocoBase.

A CLI é usada para inicializar, conectar e gerenciar aplicações NocoBase em um workspace local. Ela cobre dois cenários:

- Conectar a uma aplicação NocoBase existente e salvá-la como um ambiente CLI
- Instalar uma nova aplicação NocoBase via Docker, npm ou Git e, em seguida, salvá-la como um ambiente CLI

![Assistente visual da CLI do NocoBase](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Quer você queira integrar IA a um sistema existente ou criar uma nova aplicação do zero, é possível lidar com a inicialização e o gerenciamento contínuo através da CLI.

Para equipes, a CLI fornece um ponto de entrada padrão que os Agentes de IA podem entender e operar — inicialização do ambiente, configuração de conexão e gerenciamento de tempo de execução compartilham o mesmo fluxo.

Documentação relacionada:

- [Guia de integração de Agentes de IA](https://docs.nocobase.com/ai/quick-start)
- [Referência de comandos da CLI do NocoBase](https://docs.nocobase.com/api/cli/)

### Construção assistida por IA: substitua a configuração manual pela conversa

A construção assistida por IA é uma das experiências principais desta versão. Você pode descrever suas necessidades de negócio em linguagem natural, e a IA ajuda a completar a modelagem de dados, configuração de páginas, definição de permissões e orquestração de fluxos de trabalho.

Comparada com a construção low-code tradicional, a construção assistida por IA tem várias vantagens claras:

- Uma barreira de entrada mais baixa — você não precisa conhecer todos os conceitos de configuração antecipadamente
- Um caminho mais curto da descrição do requisito ao protótipo funcional
- A configuração de dados, UI e fluxo de trabalho pode ser concluída pela IA de forma contínua

Por exemplo: "projete um modelo de dados de CRM para mim", "crie uma página de gerenciamento de clientes para mim" ou "orquestre um fluxo de trabalho que deduza automaticamente o estoque após a criação de um pedido" — tudo isso pode ser tratado pela IA dentro do escopo das capacidades do NocoBase.

Documentação relacionada:

- [Início rápido da construção assistida por IA](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills cobrem todo o fluxo de construção

Para ajudar a IA a entender verdadeiramente o sistema de configuração do NocoBase, esta versão traz um conjunto de pacotes de conhecimento de domínio que podem ser instalados em Agentes de IA — os NocoBase Skills.

Skills são wrappers padronizados de conhecimento e operação organizados em torno dos principais domínios de capacidade do NocoBase, ajudando a IA a entender com mais precisão modelos de objetos, estruturas de configuração e limites de execução.

Atualmente, fornecemos 8 Skills que cobrem todo o fluxo de construção:

- [Gerenciamento de ambiente](https://docs.nocobase.com/ai-builder/env-bootstrap) — verificações de ambiente, instalação/implantação, atualização e solução de problemas
- [Modelagem de dados](https://docs.nocobase.com/ai-builder/data-modeling) — criar e gerenciar tabelas, campos e relações
- [Construção de UI](https://docs.nocobase.com/ai-builder/ui-builder) — criar e editar páginas, blocos, popups e reações de interação
- [Gerenciamento de fluxo de trabalho](https://docs.nocobase.com/ai-builder/workflow) — criar, editar, ativar e diagnosticar fluxos de trabalho
- [Configuração de permissões](https://docs.nocobase.com/ai-builder/acl) — gerenciar funções, políticas de permissão, vinculações de usuários e avaliação de riscos
- [Soluções](https://docs.nocobase.com/ai-builder/dsl-reconciler) — construir sistemas de negócios inteiros em massa a partir de YAML (ainda em beta, com estabilidade limitada)
- [Gerenciamento de plugins](https://docs.nocobase.com/ai-builder/plugin-manage) — visualizar, ativar e desativar plugins
- [Gerenciamento de publicação](https://docs.nocobase.com/ai-builder/publish) — publicação entre ambientes, backup/restauração e migração

Com Skills, a IA pode entender com mais precisão o sistema de configuração do NocoBase e fornecer assistência mais inteligente ao construir e gerenciar sistemas.

**Nota**: Os NocoBase Skills ainda estão sendo ativamente aprimorados. Os NocoBase Skills também são instalados automaticamente quando você instala e inicializa a CLI do NocoBase, portanto, na maioria dos casos, você não precisa instalá-los separadamente.

Documentação relacionada:

- [NocoBase Skills](https://github.com/nocobase/skills)

### Plugin de desenvolvimento de IA

Esta versão preenche as capacidades fundamentais necessárias para o desenvolvimento de plugins de IA, para que a IA possa participar não apenas na construção de aplicações, mas também no desenvolvimento de plugins personalizados.

Isso se manifesta em três áreas principais:

- Um pipeline de build unificado `rsbuild/rspack`, consolidando o desenvolvimento de plugins e o sistema de build do frontend
- Uma capacidade `client-v2` e um sistema de roteamento `/v2/` voltados para o desenvolvimento de IA, preparando o terreno para o desenvolvimento de plugins client da próxima geração
- Skills de desenvolvimento de plugins de IA que ajudam a IA a entender melhor a estrutura do plugin, a organização do código e os padrões de implementação

A preparação em torno do `client-v2` inclui:

- `@nocobase/app` expõe a entrada `client-v2`
- O kernel fornece um pacote `@nocobase/client-v2` com componentes base, utilitários e definições de tipo
- Cada plugin recebe um diretório `/src/client-v2`
- Uma nova rota `/v2/` é adicionada
- O kernel está migrando gradualmente para V2
- Os plugins estão migrando gradualmente para V2

Um pipeline de build unificado reduz o custo do desenvolvimento e depuração de plugins frontend. A implementação gradual do `client-v2` também dá à IA uma estrutura alvo mais estável para gerar e manter o código do plugin.

Na prática: você pode descrever um requisito de plugin em linguagem natural, e a IA ajuda a gerar o código frontend e backend, tabelas de dados, APIs, configuração de permissões e conteúdo de i18n.

**Nota**: O desenvolvimento de plugins de IA é apenas para novos plugins do estilo `client-v2`. Forneceremos documentação de migração e Skills para a transição de plugins `client-v1` para `client-v2`, para ajudá-lo a trazer plugins existentes para o novo sistema.

Documentação relacionada:

- [Início rápido do plugin de desenvolvimento de IA](https://docs.nocobase.com/ai-dev/)
- [Desenvolvimento de plugins](https://docs.nocobase.com/plugin-development/)

### Aprimoramentos nos Agentes de IA

A construção assistida por IA responde "como uso IA para construir um sistema"; os Agentes de IA respondem "como faço a IA trabalhar dentro do sistema para resolver problemas de negócio concretos".

Os Agentes de IA existiam em versões anteriores, mas nesta versão, as capacidades relacionadas foram aprimoradas e o kernel de IA foi consolidado:

- [Suporte a MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Novo Atlas de Agentes de IA](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), desempenhando uma função de líder de equipe e despachando outros Agentes de IA para concluir tarefas com base na intenção do usuário
- [Nó de fluxo de trabalho do Agente de IA](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Ferramenta de pesquisa web baseada em LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Nova ferramenta de consulta agregada e ferramenta de geração de relatórios](https://docs.nocobase.com/ai-employees/scenarios/business-report) para produzir relatórios de análise de negócios

Essas melhorias levam a extensibilidade, orquestração e capacidades de execução dos Agentes de IA dentro dos sistemas de negócios a um novo patamar. Os Agentes de IA podem entender o contexto de negócio atual, invocar skills para executar tarefas específicas, participar de fluxos de trabalho automatizados e combinar informações externas para fornecer análise e saída.

Se sua equipe precisa trazer colaboração inteligente, análise automatizada e execução de tarefas para seus sistemas de negócios, esta é também uma das direções mais notáveis nesta atualização.

Documentação relacionada:

- [Agentes de IA](https://docs.nocobase.com/ai-employees/)

### Adaptação 2.0 e novos recursos

Além da IA, esta versão continua a migrar módulos de recursos importantes para 2.0, ao mesmo tempo que lança novos recursos para cenários de negócios reais.

Novos recursos

- [Campo de assinatura manuscrita](https://docs.nocobase.com/data-sources/field-signature/)
- [Ação de item JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptação 2.0

- [Solicitação personalizada](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Bloco de filtro em árvore](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Bloco de calendário](https://docs.nocobase.com/data-sources/calendar/)
- [Bloco Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
