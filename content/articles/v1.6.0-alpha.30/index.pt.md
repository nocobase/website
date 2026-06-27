---
title: "NocoBase v1.6.0-alpha.30: campo de hora suporta formato de hora"
description: "Nota de lançamento da v1.6.0-alpha.30"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Adicionar configuração de dica de ferramenta a itens de menu e cabeçalhos de tabela ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038

  - Campo de hora suporta formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

- **[Visualização de dados]** Suporte à ordenação NULLS em consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

- **[Integração de IA]** Novo plugin: Integração de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Verificação]** Suporte à vinculação de usuário a vários tipos de verificação, como SMS e autenticadores TOTP, e verificação de identidade em cenários obrigatórios. Habilite o desenvolvimento e extensão de métodos de verificação. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
Referência: [Verificação](https://docs.nocobase.com/handbook/verification)
- **[Integração de IA (EE)]** Novo plugin: Integração de IA (EE) por @2013xile
Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Autenticação de dois fatores (2FA)]** Novos plugins: Autenticação de dois fatores e Verificação: Autenticador TOTP por @2013xile
Referência: [Autenticação de dois fatores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificação: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Melhorias

- **[client]**
  - Adicionar tratamento de debounce a botões ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

  - Tornar o menu responsivo à largura da tela ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe

- **[server]** Atualizar koa para 2.15.4; atualizar @koa/cors para 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile

- **[Workflow]**
  - Permitir ignorar a ativação do workflow de coleta em evento de banco de dados ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

  - Carregamento preguiçoso do resultado do job para melhor desempenho ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

- **[Bloco: template]** Suporte para salvar bloco de dados como template de bloco a partir da página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust

- **[Workflow: Nó de agregação]** Adicionar processo de arredondamento para número agregado baseado em tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

- **[Ação: Importar registros Pro]** suporte a opções avançadas no botão de importação Pro por @katherinehhh

- **[Workflow: JavaScript]** Suporte para exigir pacote a partir de caminho absoluto por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** tentar recarregar armazenamentos se não encontrar o armazenamento por @jiannx

### 🐛 Correções de Bugs

- **[client]**
  - Tradução personalizada do título do menu é inválida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe

  - Configuração de ordenação ausente para campos de coleção herdada ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

  - Formatação incorreta do campo de hora no formulário de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh

  - Problema relacionado a fuso horário causando uma hora a menos no seletor de data ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh

  - Dropdown de configuração de armazenamento do campo de anexo não exibindo opções ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh

  - Componentes de subformulário não alinhados com o formulário principal quando o rótulo está oculto ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh

  - Corrigir erro lançado ao criar coleção de arquivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher

  - Resolver problema de barra de rolagem ao abrir aba de página com bloco de altura total ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh

  - Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe

  - Bloco de associação não renderizando em popup dentro de herança de coleção ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh

  - Botão "adicionar novo" aparece ao passar o mouse no modo somente leitura do campo de associação ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh

- **[auth]** Evitar renovar o token durante a autorização WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66

- **[database]** Corrigir erro ao recuperar registros de coleção de relação se a chave de origem nos campos de relação for uma string numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

- **[Cliente WEB]**
  - Após adicionar uma página à tabela de rotas, a página aparece em branco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe

  - Adicionar abas de página na tabela de gerenciamento de rotas não tem efeito ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe

- **[Controle de acesso]** Na tabela de gerenciamento de permissões, o nome da aba da página está vazio ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe

- **[Usuários]**
  - Erro "Sem permissões" quando usuários sem permissões de gerenciamento de usuários visualizam seu próprio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile

  - Erro "Sem permissões" ao atualizar configurações do sistema no gerenciamento de usuários ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile

  - Uma UI de erro pisca brevemente quando a tabela de gerenciamento de permissões do usuário carrega pela primeira vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe

- **[Integração de IA]** Problema onde o `baseURL` padrão para o provedor LLM é `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile

- **[Workflow]** Corrigir acl para obter job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

- **[Bloco: Mapa]** Configurações para campo de mapa estão ausentes/não visíveis ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe

- **[Mobile]** Erro de página: Não é possível ler propriedades de null (lendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe

- **[Bloco: Painel de ação]** Definir a altura do painel de ação é inválido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

- **[Workflow: Evento de ação personalizada]**
  - Corrigir locale e coleção modificáveis após execução por @mytharcher

  - Corrigir migração para botões legados vinculados a workflow de ação personalizada por @mytharcher

- **[Marca personalizada]** Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento por @zhangzhonghe

- **[Ação: Importar registros Pro]**
  - Usar opção adicional para determinar se deve acionar o workflow ou não por @mytharcher

  - Botão de importação de bloco de associação: detecção de registro duplicado não mostra dados no dropdown de campo por @katherinehhh

- **[Ação: Exportar registros Pro]**
  - Ação de exportação Pro ausente de parâmetros de ordenação por @katherinehhh

  - Remover opção 'adicionar bloco' nas configurações do botão de exportação de anexo por @katherinehhh

- **[Impressão de template]** Restauração do local falhou quando os plugins de impressão de template e gerenciador de backup estavam ambos habilitados por @gchust

- **[Workflow: Aprovação]**
  - Corrigir migração para blocos legados por @mytharcher

  - Corrigir erro causado por `.toJSON()` por @mytharcher
