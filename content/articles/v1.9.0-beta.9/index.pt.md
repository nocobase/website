---
title: "NocoBase v1.9.0-beta.9: Blocos de tabela suportam adicionar um botão 'Configurações de coluna'"
description: "Nota de lançamento da v1.9.0-beta.9"
---

### 🎉 Novas Funcionalidades

- **[client]**

  - Blocos de tabela agora suportam adicionar um botão 'Configurações de coluna' para configurar a ordem e visibilidade das colunas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
  - Suporte a regras de validação de campo ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
- **[Fonte de dados: Principal]**

  - Suporte à leitura de tabelas da fonte de dados principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
  - Suporte à exibição de tabelas definidas por plugins na fonte de dados principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

### 🚀 Melhorias

- **[client]** Suporte para girar imagem durante a pré-visualização ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
- **[snowflake-id]** Altera os IDs de tabelas do sistema com chaves primárias auto-incrementais, mas sem identificadores únicos, para IDs de 53 bits no estilo Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Workflow]** Separa a lógica relacionada à distribuição em um distribuidor independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher
- **[Adaptador de fila RabbitMQ]** melhora o tratamento de conexão RabbitMQ e a lógica de processamento de mensagens por @sdp-ncd
- **[Gerenciador de e-mail]**

  - suporta sincronização em lote por @jiannx
  - editor rico suporta redimensionamento de imagem por @jiannx

### 🐛 Correções de Bugs

- **[client]**

  - Corrige um problema onde o botão "Configurações de coluna" carregava colunas da tabela dentro do diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  - Corrige o problema onde submenus da barra lateral não conseguiam destacar corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
- **[Workflow]**

  - Corrige o problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  - Corrige o problema onde a condição da lista de workflows estava incorreta ao carregar o contexto de campo associado na configuração do workflow vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  - Corrige o problema onde tarefas agendadas baseadas em campos de data não disparavam após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
- **[Workflow: Nó de loop]** Corrigido o problema onde o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Gerenciador de e-mail]**

  - Assunto de e-mail com lixo por @jiannx
  - assunto com lixo por @jiannx
  - editor rico suporta quebras de linha suaves por @jiannx
  - Suporta o mesmo e-mail para várias pessoas por @jiannx
  - desempenho otimizado da lista de mensagens de e-mail por @jiannx
  - após selecionar linhas, definir "Lido" e "Não lido" por @jiannx
  - adiciona campo rawId para otimização de desempenho por @jiannx
  - atributo ref em html causa exceção de renderização por @jiannx
  - conteúdo de submail não pode ser filtrado por @jiannx
  - suporta ressincronização por @jiannx
  - Distingue manualmente entre encaminhamento e resposta por @jiannx
