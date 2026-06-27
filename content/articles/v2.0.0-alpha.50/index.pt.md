---
title: "NocoBase v2.0.0-alpha.50: Suporte à configuração de múltiplos arquivos no componente de upload de anexos"
description: "Nota de lançamento da v2.0.0-alpha.50"
---

### 🚀 Melhorias

- **[client]**

  - Suporte à configuração de múltipla seleção no componente de upload de anexos ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh
  - Exibir opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - Exibir opções recolhidas ao passar o mouse no componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh
- **[Funcionários de IA]** Adicionar campo de provedor ausente ao formulário de Adicionar LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang
- **[Workflow]** Adicionar contexto de fonte de dados "principal" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido problema em que "N/A" era exibido após desabilitar a múltipla seleção na seleção de registros de associação muitos-para-muitos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh
  - Corrigido o problema de oscilação da caixa de seleção suspensa da regra de vinculação ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Corrigido um problema em que alternar um campo de data para um campo de hora na ação de filtro causava um erro de renderização. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust
  - Corrigido um problema em que o menu do registro atual aparecia ao adicionar um bloco de comentário. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust
  - Corrigida falha ao excluir registro no bloco de seletor de registros ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh
  - Corrigido um problema em que o estilo padrão do campo JS no bloco de detalhes estava incorreto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust
  - Corrigido problema em que o bloco de tabela em árvore não conseguia expandir nós filhos ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh
  - Corrigido problema de arrastar coluna de subtabela não funcionando ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh
  - Corrigido problema de largura de coluna de subtabela não aplicada ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh
  - Resolvido um problema que causava erros ao carregar dados para campos de associação em janelas pop-up, garantindo uma exibição e funcionalidade de dados mais suaves. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust
  - Corrigido problema de estilo do popover do campo de exibição markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh
  - Corrigido um problema em que os títulos padrão dos pop-ups de ação de editar e criar novo estavam incorretos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust
  - Corrigido bug de carregamento lento em Variable.Input, que fazia com que o menu de opções de variáveis fosse renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - Corrigido um problema em que a variável de registro do pop-up atual não podia ser resolvida corretamente em pop-up aberto por campo de associação. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust
- **[acl]** Corrigido um problema em que as meta informações do ACL estavam incorretas quando os escopos de permissão de fonte de dados externa usavam variáveis relacionadas ao usuário atual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[mecanismo de fluxo]**

  - Corrigida falha ao salvar registro de comentário após edição ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh
  - Corrigido um problema em que os blocos de dados não eram atualizados ao fechar um pop-up clicando no botão de envio do formulário dentro do pop-up. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust
- **[Editor de tema]** Habilitar alternador de tema em dispositivos móveis ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Gerenciador de múltiplos aplicativos (obsoleto)]** Configurações de nível de log não aplicadas a sub-aplicativos ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigidos erros ao atualizar senhas para fontes de dados externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock
- **[Ação: Importar registros]** Corrigido o problema em que um erro era lançado quando um campo no xlsx de importação tinha valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Workflow]** Corrigido o problema em que a fila era fechada antes da publicação de mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Comentários]**

  - Corrigida falha ao excluir registro no bloco de comentário por @katherinehhh
  - Corrigida exibição de aviso quando o bloco de comentário é usado em uma coleção que não é de comentário por @katherinehhh
- **[Multi-espaço]** Dispositivos móveis suportam troca de espaço por @jiannx
- **[Workflow: Subfluxo]** Corrigido o problema em que o workflow selecionado exibia "N/A" quando a contagem de workflows era maior que 200 por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigido erro lançado ao criar bloco de informações de aprovação por @mytharcher
  - Adicionada migração para evitar erro de registro duplicado ao adicionar índice por @mytharcher
  - Corrigido o problema em que a ação de impressão não funcionava ao atualizar a página com modal aberto por @mytharcher
