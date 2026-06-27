---
title: "NocoBase v1.6.0-beta.17: Adicionar configuração de dica de ferramenta ao item de menu e cabeçalhos de tabela"
description: "Nota de lançamento da v1.6.0-beta.17"
---

### 🎉 Novas Funcionalidades

- **[client]** Adicionar configuração de dica de ferramenta (tooltip) a itens de menu e cabeçalhos de tabela ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038

- **[Visualização de dados]** Suporte à ordenação NULLS em consultas de gráficos ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

- **[Integração com IA]** Novo plugin: Integração com IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
Referência: [Integração com IA](https://docs.nocobase.com/handbook/ai/service)
- **[Integração com IA (EE)]** Novo plugin: Integração com IA (EE) por @2013xile
Referência: [Integração com IA](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Melhorias

- **[client]**
  - Adicionar tratamento de debounce a botões ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

  - Tornar o menu responsivo à largura da tela ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe

- **[Workflow]** Permitir ignorar a ativação do workflow da coleção em eventos de banco de dados ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

- **[Workflow: Nó de Agregação]** Adicionar processo de arredondamento para números agregados baseados em tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

- **[Ação: Importar registros Pro]** Suporte a opções avançadas no botão de importação Pro por @katherinehhh

- **[Workflow: JavaScript]** Suporte para exigir pacote a partir de caminho absoluto por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]]** Tentar recarregar armazenamentos se o armazenamento não for encontrado por @jiannx

### 🐛 Correções de Bugs

- **[client]**
  - Tradução personalizada do título do menu é inválida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe

  - Problema relacionado a fuso horário causando uma hora a menos no seletor de data ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh

  - Configuração de ordenação ausente para campos de coleção herdada ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

  - Menu suspenso de configuração de armazenamento do campo de anexo não exibindo opções ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh

  - Componentes de subformulário não alinhados com o formulário principal quando o rótulo está oculto ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh

  - Bloco de associação não renderizando em pop-up dentro de herança de coleção ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh

  - Corrigir problema de barra de rolagem ao abrir aba de página com bloco de altura total ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh

  - Corrigir erro lançado ao criar coleção de arquivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher

- **[database]** Corrigir erro ao recuperar registros de coleção de relação se a chave de origem nos campos de relação for uma string numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

- **[Cliente WEB]**
  - Adicionar páginas de aba na tabela de gerenciamento de rotas não surte efeito ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe

  - Após adicionar uma página à tabela de rotas, a página aparece em branco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe

- **[Usuários]**
  - Erro "Sem permissões" quando usuários sem permissão de gerenciamento de usuários visualizam seu próprio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile

  - Erro "Sem permissões" ao atualizar configurações do sistema no gerenciamento de usuários ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile

- **[Controle de acesso]** Na tabela de gerenciamento de permissões, o nome da aba da página está vazio ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe

- **[Integração com IA]** Problema onde o `baseURL` padrão para o provedor LLM é `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile

- **[Workflow]** Corrigir acl para obter job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Corrigir localidade e coleção modificáveis após a execução por @mytharcher

- **[Ação: Importar registros Pro]** Usar opção adicional para determinar se deve ou não acionar o workflow por @mytharcher

- **[Ação: Exportar registros Pro]** Ação de exportação Pro faltando parâmetros de ordenação por @katherinehhh
