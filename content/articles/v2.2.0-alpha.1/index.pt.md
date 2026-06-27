---
title: "NocoBase v2.2.0-alpha.1: Suporte a entrada por escaneamento para campos de texto"
description: "Nota de lançamento da v2.2.0-alpha.1"
---

### 🎉 Novos Recursos

- **[client-v2]** Suporte a entrada por escaneamento para campos de texto ([#9599](https://github.com/nocobase/nocobase/pull/9599)) por @katherinehhh
- **[undefined]** Adicionados comandos proxy de nível superior para nginx e caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) por @chenos
- **[Gerenciador de tarefas assíncronas]** Adicionado suporte ao cliente v2 para a ação da barra superior do gerenciador de tarefas assíncronas. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) por @jiannx
- **[Gerenciador de backup]**

  - Adicionado suporte ao runtime do cliente v2 para o plugin do gerenciador de backup. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) por @katherinehhh
  - Adaptado ao novo plugin de controle de versão ([#9563](https://github.com/nocobase/nocobase/pull/9563)) por @cgyrock
- **[Fonte de dados: NocoBase externo]** Adicionado um plugin de fonte de dados: NocoBase externo por @2013xile
- **[Controle de versão]** Adicionado plugin de controle de versão por @cgyrock

### 🚀 Melhorias

- **[client-v2]**

  - Adicionado suporte para desabilitar seleção múltipla em campos de associação de seleção popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) por @katherinehhh
  - Melhorada a renderização de blocos v2 quando uma fonte de dados externa configurada está desabilitada, prevenindo erros de renderização e mostrando um placeholder mais claro no Editor de UI. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) por @katherinehhh
- **[Variáveis e segredos]** Variáveis de ambiente (`$env`) agora podem ser selecionadas por seletores de variáveis baseados em flow-engine no runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) por @Molunerfinn
- **[Gerenciador de arquivos]** Adicionado suporte a `subPath` de upload interno para o gerenciador de arquivos. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) por @mytharcher
- **[Gerenciador de fontes de dados]** Adicionado gerenciamento de permissões de fonte de dados client-v2 e alinhadas as gavetas do seletor de permissões relacionadas. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) por @jiannx
- **[Coleção: Conectar a dados estrangeiros (FDW)]** Melhorada a paridade de templates de coleção V2 para coleções SQL e coleções de dados estrangeiros, incluindo confirmação SQL, gerenciamento de servidores de banco de dados estrangeiros e ordenação de templates. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) por @katherinehhh
- **[Impressão de template]** Atualizados metadados de coleção de template de impressão para classificação de backup de controle de versão. por @cgyrock
- **[Histórico de registro]** Atualizados metadados de coleção de histórico de registro para classificação de backup de controle de versão. por @cgyrock
- **[Workflow: Aprovação]** Atualizados metadados de coleção de aprovação de workflow para classificação de backup de controle de versão. por @cgyrock
- **[Logs de auditoria]** Atualizados metadados de coleção de log de auditoria para classificação de backup de controle de versão. por @cgyrock
- **[Gerenciador de e-mail]** Atualizados metadados de coleção do gerenciador de e-mail para classificação de backup de controle de versão. por @cgyrock
- **[Supervisor de aplicativo]** Atualizados metadados de coleção do supervisor de aplicativo para classificação de backup de controle de versão. por @cgyrock

### 🐛 Correções de Bugs

- **[database]** Corrigido o problema de campos de senha não serem hashados durante atualizações em lote. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) por @mytharcher
- **[client]** Corrigido o problema de ações de linha da subtabela popup ocultarem todo o campo da subtabela quando a ação é ocultada por regras de vinculação ([#9717](https://github.com/nocobase/nocobase/pull/9717)) por @katherinehhh
- **[client-v2]**

  - Corrigido o problema de campos JSON em visualizações de exibição do cliente v2 renderizando células em branco para valores de objeto. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) por @katherinehhh
  - Corrigido o problema de campos de opção V2 traduzindo incorretamente rótulos de opção simples em ambientes localizados. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) por @katherinehhh
- **[Bloco: Mapa]**

  - Corrigido o problema do DrawingManager indisponível no bloco do Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) por @katherinehhh
  - Corrigido o problema de campos de geometria de mapa ausentes no menu de adicionar campo do gerenciador de fontes de dados v2 após habilitar o plugin de mapa. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) por @katherinehhh
- **[Calendário]** Corrigido um problema onde blocos de Detalhes e Edição não podiam ser adicionados nas gavetas de detalhes do bloco de calendário v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) por @jiannx
- **[Gerenciador de fontes de dados]**

  - Corrigida a exibição desatualizada do campo de título ao reabrir a gaveta de configuração de campo da fonte de dados v2 após alterar o campo de título. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) por @katherinehhh
  - Melhoradas as mensagens de erro do gerenciador de fontes de dados V2 quando operações de coleção, campo, sincronização e carregamento de tabela falham. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) por @katherinehhh
- **[Funcionários de IA]**

  - Melhorados os prompts de consulta de dados do funcionário de IA para carregar a habilidade necessária antes de usar ferramentas de consulta. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) por @cgyrock
  - Corrigido o botão ausente do assistente Dara nas configurações de gráfico do client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) por @cgyrock
- **[Bloco: Lista]** Corrigido o estado de vinculação de ação de linha desatualizado em blocos de lista quando as ações dependem do registro atual. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) por @katherinehhh
- **[Manipulador de erros]** Reduzidos logs de erro ruidosos para requisições normais não autenticadas sem token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) por @2013xile
- **[Ação: Importar registros Pro]** Corrigido texto ilegível ao importar arquivos XLSX com strings compartilhadas UTF-8 divididas entre chunks de streaming. por @mytharcher
- **[IA: Base de conhecimento]** Corrigidos caminhos ausentes em URLs de arquivos da base de conhecimento S3. por @cgyrock
- **[Histórico de registro]** Corrigido histórico de registro ausente para alterações de fonte de dados externa por @2013xile
