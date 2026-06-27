---
title: "NocoBase v1.7.0-alpha.2: suporte à configuração de opções de campo selecionáveis em regras de vinculação"
description: "Nota de lançamento da v1.7.0-alpha.2"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Componente de Seleção em Cascata adiciona configuração de escopo de dados ([#6386](https://github.com/nocobase/nocobase/pull/6386)) por @Cyx649312038

  - Bloco de tabela suporta ocultar a coluna de índice (visível por padrão) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh

  - Suporte à configuração de opções de campos selecionáveis em regras de vinculação ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh

  - Suporte à configuração de escopo de data (mín/máx) para campos de tempo em regras de vinculação ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh

- **[acl]** Suporte à união de funções de usuário ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie

- **[Bloco: Painel de ações]** suporte a quebra de linha para título de ação no painel de ações ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

- **[plugin-demo-platform]** Define skipAuthCheck da rota "/new" como true. por @sheldon66

- **[WeCom]** Permite definir um tooltip personalizado para o botão de login por @2013xile

### 🚀 Melhorias

- **[utils]**
  - Move `md5` para utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) por @mytharcher

  - Adaptação de página desktop para dispositivos móveis ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe

- **[client]** Adiciona skipAuthCheck ao router.add para evitar redirecionamento para login em páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66

- **[Visualização de dados]** Substitui `x-designer` obsoleto por `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - No bloco de árvore, ao desmarcar, os dados no bloco de dados não estão sendo limpos ([#6460](https://github.com/nocobase/nocobase/pull/6460)) por @zhangzhonghe

  - Corrige caractere especial em URL de imagem que impedia a exibição ([#6459](https://github.com/nocobase/nocobase/pull/6459)) por @mytharcher

  - Número de página incorreto ao adicionar dados após alteração do tamanho da página da subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - Conteúdo não é exibido completamente em navegadores móveis ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe

  - O estilo do logotipo está inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

  - Seleção de intervalo de campo de data exclui a data máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh

  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe

  - Valor do campo de seleção múltipla muda e opções são perdidas ao excluir registros da subtabela ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh

  - Dados não atualizando em janelas pop-up abertas via botões de Link ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe

- **[acl]** Corrigido o problema em que campos de relacionamento não são exibidos sob a união de funções. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie

- **[Gerenciador de arquivos]**
  - Incapacidade de excluir arquivos armazenados no S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) por @chenos

  - Corrige alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Workflow]** Remove botão de configurações de workflow vinculado do seletor de dados ([#6455](https://github.com/nocobase/nocobase/pull/6455)) por @mytharcher

- **[Workflow: Nó manual]**
  - Corrige erro lançado na migração ([#6445](https://github.com/nocobase/nocobase/pull/6445)) por @mytharcher

  - Altera limite de versão da migração para `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

  - Corrige migração que perdia o prefixo da tabela e a lógica de schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher

- **[Controle de acesso]**
  - Corrigido problema em que a troca de funções não surtia efeito. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie

  - Erro quando o escopo de dados é definido como dados próprios e a tabela não possui um campo de criador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie

- **[Cliente WEB]** Substitui todas as instâncias de ctx.state.currentRole (função única) por ctx.state.currentRoles (suporta múltiplas funções). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie

- **[Ação: Edição em lote]** Corrige problema em que o workflow não pode ser acionado no envio de edição em lote ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Gerenciador de fonte de dados]** a troca de fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Notificação: Mensagem no aplicativo]**
  - Diferencia a cor de fundo da lista de mensagens no aplicativo dos cartões de mensagem para melhorar a hierarquia visual e a legibilidade. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

  - Evita que a consulta de configuração de destinatários errados consulte todos os usuários ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66

- **[Ação: Solicitação personalizada]** erro de validação de permissão no lado do servidor para solicitação personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Auth: Chaves de API]** remoção da união da lista de funções do plugin de chaves de API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie

- **[Bloco: template]** Comportamento incorreto de "Salvar como template" no cliente móvel ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust

- **[Workflow: Evento de ação personalizada]** Remove `only` no caso de teste E2E por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** Resolve problema com URLs assinados S3 Pro inacessíveis por @chenos

- **[Workflow: Aprovação]**
  - Evita travamento da página quando não há solicitante na tabela do processo de aprovação por @mytharcher

  - Corrige dados de associação não sendo exibidos no formulário de aprovação por @mytharcher

  - Corrige erro lançado ao aprovar em fonte de dados externa por @mytharcher
