---
title: "NocoBase v2.1.0-beta.38: Adicionar proteções de compatibilidade de comandos de API dinâmica"
description: "Nota de lançamento da v2.1.0-beta.38"
---

### 🎉 Novas Funcionalidades

- **[cli]** Adicionar proteções de compatibilidade para comandos dinâmicos da API ([#9613](https://github.com/nocobase/nocobase/pull/9613)) por @chenos
- **[client-v2]**

  - Suporte para páginas v2 incorporadas e páginas de formulário público v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) por @zhangzhonghe
  - Reescrever a página do gerenciador de plugins do client-v2 em uma interface responsiva baseada em cartões com filtro por categoria, busca, ativar/desativar/remover, ativação em lote e um modal de detalhes do plugin; também tornar a página do gerenciador de plugins do client-v1 responsiva em telas estreitas. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) por @Molunerfinn
- **[Workflow]**

  - Adicionar controle de tempo limite para workflows, suporte para abortar automaticamente execuções que excederam o tempo limite se a opção de timeout estiver configurada ([#9363](https://github.com/nocobase/nocobase/pull/9363)) por @mytharcher
  - Adicionada uma API de administrador para reexecutar execuções de workflow iniciadas a partir do início ou de um nó específico. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) por @mytharcher
- **[Bloco: Gantt]** Adicionado suporte v2 para o bloco Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) por @jiannx
- **[Workflow: Webhook]** Adicionar status de resposta 408 para webhook de workflow com tempo limite (modo síncrono) por @mytharcher
- **[Workflow: Subfluxo]** Suporte à configuração de tempo limite no workflow por @mytharcher
- **[Auth: OIDC]** Migrar `plugin-auth-oidc` para o admin v2; botão de login, formulário de configurações do admin e redirecionamento automático SSO agora funcionam no v2. por @Molunerfinn
- **[Workflow: Aprovação]** Suporte à configuração de tempo limite no workflow por @mytharcher
- **[Auth: LDAP]** Adicionar entrada de cliente v2 para que o autenticador LDAP renderize seu formulário de login e configurações de admin em aplicativos v2. por @Molunerfinn

### 🚀 Melhorias

- **[client-v2]**

  - adicionar configuração de seleção de linhas da tabela v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) por @katherinehhh
  - suportar cores de ações do painel de ações ([#9612](https://github.com/nocobase/nocobase/pull/9612)) por @katherinehhh
  - Remover a opção Oculto da configuração do menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) por @zhangzhonghe
- **[client]** Remover a opção Oculto das configurações do item de menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) por @zhangzhonghe
- **[cli]** simplificar o fluxo de atualização do aplicativo ([#9587](https://github.com/nocobase/nocobase/pull/9587)) por @chenos
- **[Funcionários de IA]** Melhorado o campo URL Base do LLM para que possa usar variáveis de escopo global nos formulários de criação e edição. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) por @cgyrock
- **[Restrição de IP]** Adicionar um cliente v2 para o plugin de restrição de IP. por @Molunerfinn

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]**

  - Corrigido o nível de log incorreto no frontend. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) por @gchust
  - Corrigir menus em cascata instáveis ao digitar em campos de busca ([#9473](https://github.com/nocobase/nocobase/pull/9473)) por @zhangzhonghe
  - Corrigido um problema onde as regras de vinculação de ações da tabela eram executadas incorretamente após um formulário ser submetido com sucesso em um popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) por @gchust
- **[ai]** Fixadas dependências do LangChain em versões estáveis para evitar falhas na execução de ferramentas Ollama e evitar lançamentos upstream afetados ([#9604](https://github.com/nocobase/nocobase/pull/9604)) por @cgyrock
- **[client-v2]**

  - Corrigir as abas de login do sub-aplicativo renderizando modelos de tradução brutos e evitar que o drawer de edição do método de autenticação v2 perca valores de campo ao enviar. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) por @Molunerfinn
  - Melhorar o desempenho da página do gerenciador de plugins usando CSS line-clamp em vez de antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) por @Molunerfinn
- **[client]**

  - corrigir preservação do formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
  - corrigir sincronização do estado oculto para vinculação de subformulário ([#9594](https://github.com/nocobase/nocobase/pull/9594)) por @katherinehhh
  - aumentar o limite de upload de imagem na entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - corrigir sincronização do valor do popup do seletor de data móvel ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - Corrigir abas de página desaparecendo após alternar menus ([#9583](https://github.com/nocobase/nocobase/pull/9583)) por @zhangzhonghe
  - corrigir problema onde a subtabela no subformulário não conseguia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - aumentar o limite de upload de imagem na entrada de digitalização ([#9580](https://github.com/nocobase/nocobase/pull/9580)) por @katherinehhh
  - corrigir sincronização do valor do popup do seletor de data móvel ([#9582](https://github.com/nocobase/nocobase/pull/9582)) por @katherinehhh
  - corrigir problema onde a subtabela no subformulário não conseguia adicionar uma segunda linha ([#9586](https://github.com/nocobase/nocobase/pull/9586)) por @katherinehhh
  - corrigir preservação do formato de hora para campos de hora v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) por @katherinehhh
- **[Coleção: Árvore]** Corrigir o erro causado por dados circulares pai-filho em coleções de árvore ([#9603](https://github.com/nocobase/nocobase/pull/9603)) por @zhangzhonghe
- **[Workflow: Evento de ação personalizada]**

  - Corrigido botões de ação personalizada da tabela com contexto de múltiplos registros permitindo incorretamente a seleção de workflows de contexto personalizados. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) por @mytharcher
  - Filtrar opções de vinculação de workflow de ação personalizada pela coleção do bloco atual. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) por @mytharcher
- **[Gerenciador de arquivos]**

  - Melhoradas as mensagens de falha na pré-visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [Pré-visualização de Arquivos](docs/docs/en/file-manager/file-preview/index.md)
  - Melhoradas as mensagens de falha na pré-visualização de PDF e documentados os requisitos de CORS para armazenamento externo. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) por @mytharcher
    Referência: [Pré-visualização de Arquivos](docs/docs/en/file-manager/file-preview/index.md)
  - Corrigida a normalização de nomes de arquivos Unicode durante o upload para evitar a geração de chaves de objeto com caracteres de controle. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) por @mytharcher
- **[IA: Base de conhecimento]** Fixadas dependências do LangChain em versões estáveis para evitar falhas na execução de ferramentas Ollama e evitar lançamentos upstream afetados por @cgyrock
- **[Impressão de modelo]** Corrigidos erros de conversão de PDF na impressão de modelo que não eram retornados corretamente ao cliente por @jiannx
