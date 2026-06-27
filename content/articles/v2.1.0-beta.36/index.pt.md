---
title: "NocoBase v2.1.0-beta.36: Editor de temas agora disponível na interface v2"
description: "Nota de lançamento da v2.1.0-beta.36"
---

### 🎉 Novas Funcionalidades

- **[cli]** adicionar comandos de criação e restauração de backup ([#9541](https://github.com/nocobase/nocobase/pull/9541)) por @chenos
- **[Gerenciador de backup]** plugin de gerenciador de backup de código aberto ([#9550](https://github.com/nocobase/nocobase/pull/9550)) por @chenos
- **[Editor de tema]** O editor de tema agora está disponível na interface v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) por @zhangzhonghe
- **[Autenticação de dois fatores (2FA)]** TOTP e autenticação de dois fatores agora podem ser vinculados, verificados e configurados a partir do cliente v2. por @Molunerfinn

### 🚀 Melhorias

- **[cliente]** otimizar configurações de exibição do botão de ação ([#9510](https://github.com/nocobase/nocobase/pull/9510)) por @katherinehhh
- **[mecanismo de fluxo]** Os menus de configuração de campo V2 agora suportam pesquisa de campos ([#9489](https://github.com/nocobase/nocobase/pull/9489)) por @zhangzhonghe
- **[cli]** melhorar o fluxo de autenticação env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) por @chenos
- **[indefinido]**

  - Adicionar revisão de segurança de dependência para pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) por @zhangzhonghe
- **[Verificação]** Adicionar cliente v2 ao plugin de Verificação (página de configurações de administrador, entrada no centro do usuário, formulários OTP de SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) por @Molunerfinn
- **[Autenticação]** As configurações de marca personalizada agora funcionam corretamente no cliente v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) por @zhangzhonghe
- **[Bloco: Mapa]** Adicionado suporte ao cliente v2 para o plugin de mapa. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) por @jiannx
- **[Marca personalizada]** As configurações de marca personalizada agora estão disponíveis no cliente v2 por @zhangzhonghe
- **[IA: Base de conhecimento]** Habilitada a modificação do armazenamento vetorial para bases de conhecimento de IA por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Adicionar sinalizador `async` para instrução de aprovação, para adaptar a nova API de criação de nós na tela do fluxo de trabalho por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - corrigir limpeza de valores selecionados quando campos de associação dependentes mudam no vínculo de escopo de dados ([#9551](https://github.com/nocobase/nocobase/pull/9551)) por @katherinehhh
  - Corrigido o carregamento em modo dev para plugins de armazenamento integrados que dependem de exportações nomeadas de plugins de origem local. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) por @Molunerfinn
  - Corrigido estado incorreto do menu de campo JS em subformulários. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) por @gchust
  - Corrigir o problema em que blocos v2 estreitos se tornam largura total após sair do modo de edição ([#9529](https://github.com/nocobase/nocobase/pull/9529)) por @zhangzhonghe
- **[cliente-v2]** Corrigido registro inconsistente de dependência dnd-kit. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) por @jiannx
- **[mecanismo de fluxo]** corrigir problema de seleção múltipla para campos de fonte de dados externa no formulário v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) por @katherinehhh
- **[Bloco: iframe]** corrigir conteúdo do iframe não preenchendo a altura configurada do bloco ([#9540](https://github.com/nocobase/nocobase/pull/9540)) por @katherinehhh
- **[Funcionários de IA]**

  - Corrigir erro quando funcionário de IA acessa base de conhecimento somente leitura ([#9539](https://github.com/nocobase/nocobase/pull/9539)) por @cgyrock
  - Corrigido cartões de chamada de ferramenta de IA não aparecendo imediatamente quando eventos de ferramenta transmitidos são divididos ([#9534](https://github.com/nocobase/nocobase/pull/9534)) por @2013xile
  - Corrigir erro quando funcionário de IA acessa base de conhecimento somente leitura ([#9538](https://github.com/nocobase/nocobase/pull/9538)) por @cgyrock
- **[Ação: Exportar registros]** melhorar o desempenho da configuração de campo com muitos campos de associação ([#9524](https://github.com/nocobase/nocobase/pull/9524)) por @katherinehhh
- **[Ação: Atualização em lote]** corrigir estado de carregamento da ação de atualização em lote redefinido após falha na atualização ([#9509](https://github.com/nocobase/nocobase/pull/9509)) por @katherinehhh
- **[Fluxo de trabalho]** Adicionar estado de carregamento para execução manual do fluxo de trabalho. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) por @mytharcher
- **[Localização]** Corrigido traduções de referência internas para tarefas de tradução de IA ([#9531](https://github.com/nocobase/nocobase/pull/9531)) por @2013xile
- **[Gerenciador de migração]** Corrigido falhas na criação de arquivos de migração ao usar OceanBase por @2013xile
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir manipulação de endpoint S3 Pro para que uploads de servidor e visualizações de URL não dupliquem o host do bucket. por @mytharcher
