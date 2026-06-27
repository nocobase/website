---
title: "NocoBase v2.2.0-beta.2: Adicionado formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA"
description: "Nota de lançamento da v2.2.0-beta.2"
---

### 🎉 Novas Funcionalidades

- **[Funcionários de IA]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) por @cgyrock
- **[IA: Base de conhecimento]** Adicionado um formulário de configuração de armazenamento vetorial externo para bases de conhecimento de IA. por @cgyrock
- **[Gerenciador de e-mail]** Migrado o cliente do Gerenciador de e-mail para v2. por @jiannx

### 🚀 Melhorias

- **[cli]**

  - Otimizadas as verificações de compatibilidade para diferentes formatos de número de versão. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) por @chenos
  - Adicionado suporte para atualizar habilidades para uma versão específica. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) por @chenos
  - Melhorada a redação dos prompts de configuração de inicialização. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) por @chenos
- **[undefined]**

  - Adicionado um cenário de conversa de controle de versão à página de visão geral do AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) por @Molunerfinn
    Referência: [Guia de início rápido do AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Melhorada a documentação de controle de versão com notas sobre salvamento automático de versão no AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) por @cgyrock
    Referência: [Controle de versão](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Melhorada a experiência de edição de metadados do workflow, suportando edição de descrição no pop-up de detalhes e preenchendo automaticamente os metadados do workflow de origem ao duplicar workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) por @mytharcher
- **[Ação: Importar registros]** Melhorados os diálogos de detalhes de erro de importação e tarefas assíncronas para que mensagens de erro longas possam ser visualizadas completamente sem quebrar o layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) por @katherinehhh
- **[Ferramenta de teste de tradução]** Adicionada uma página de configurações client-v2 para a ferramenta de teste de tradução. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) por @jiannx
- **[Ação: Importar registros Pro]** Melhorados os diálogos de importação para que mensagens de erro longas possam ser visualizadas completamente, e o modo de processamento pode ser selecionado diretamente no menu de configurações v2. por @katherinehhh

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os campos em subformulários horizontais eram muito estreitos para exibir dados. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) por @zhangzhonghe
- **[client-v2]** Corrigido o problema em que as páginas v2 podiam continuar carregando após o login. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) por @zhangzhonghe
- **[cli]** Adicionada detecção da versão do Node.js para o ambiente de execução nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) por @chenos
- **[Ação: Importar registros]** Alterados os arquivos de importação enviados para armazenamento em disco para reduzir a pressão de memória durante importações de grandes volumes de dados. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Corrigidos IDs de requisição incorretos nos logs do worker de tarefas assíncronas. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) por @2013xile
- **[Workflow]**

  - Corrigido o tratamento de timeout do workflow para que execuções abortadas e suas tarefas pendentes possam ser atualizadas atomicamente. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) por @mytharcher
  - Corrigido o problema em que o campo "última atualização por" do workflow não era atualizado após alterações nos nós do workflow. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) por @mytharcher
- **[Gerenciador de fonte de dados]**

  - Corrigida a gaveta de edição de campo em branco causada por re-renderizações repetidas na página "Configurar campos" da fonte de dados externa v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) por @katherinehhh
  - Corrigido o problema em que excluir a categoria de coleção atual no gerenciador de fonte de dados v1 podia deixar a aba "Todas as coleções" vazia. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) por @katherinehhh
- **[Gerenciador de backup]** Corrigida uma vulnerabilidade de segurança em que nomes de esquema PostgreSQL inseguros podiam ser aceitos durante a restauração de backup. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) por @2013xile
- **[Workflow: Nó SQL]** Corrigido o problema em que a migração de variáveis de template legadas do workflow SQL era ignorada para alguns usuários de versão beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) por @mytharcher
- **[Bloco: Kanban]** Corrigido o suporte a URL para Calendário e outros pop-ups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) por @jiannx
- **[Funcionários de IA]**

  - Corrigido o problema em que anexos colados no diálogo do funcionário de IA não podiam ser removidos. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) por @cgyrock
  - Corrigida a perda de configuração de mensagem em nós LLM do workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) por @cgyrock
- **[Gerenciador de arquivos]** Corrigida a falta de texto de fonte chinesa/CID em algumas visualizações de PDF após a mudança para pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) por @mytharcher
- **[Documentação da API]** Corrigida a falha de construção do arquivo de declaração do plugin de documentação da API. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) por @katherinehhh
- **[Ação: Importar registros Pro]** Evitada a análise de arquivos grandes no nó de requisição antes da importação Pro criar uma tarefa assíncrona. por @mytharcher
- **[Controle de versão]** Ajustada a posição da entrada de atalho superior do controle de versão para que apareça ao lado do editor de UI nos layouts administrativos legado e v2. por @cgyrock
- **[Workflow: Aprovação]** Corrigido o problema em que dados relacionados não eram exibidos nos formulários de aprovação v2. por @zhangzhonghe
