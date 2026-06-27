---
title: "NocoBase v2.1.0-alpha.15: Adicionar bloco de filtro em árvore"
description: "Nota de lançamento da v2.1.0-alpha.15"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Árvore]** Adicionar bloco de filtro em árvore ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx

- **[Autenticação: Chaves de API]** adicionar comandos `pm list` e `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos

- **[Funcionários de IA]**
  - Adicionada uma ferramenta de consulta de dados e ferramenta de relatório de análise de negócios para funcionários de IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile

  - Adicionar uma ferramenta de busca web baseada em LLM para funcionários de IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock

- **[Gerenciador de migração]** suporte ao comando de migração por @chenos

- **[Gerenciador de e-mail]** gmail suporta envio de e-mails com aliases por @jiannx

### 🐛 Correções de Bugs

- **[mecanismo-de-fluxo]** Corrigido o problema em que campos muitos-para-um de fontes de dados externas não podiam ser adicionados no bloco de tabela ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx

- **[cliente]**
  - corrigir erro ao adicionar campo muitos-para-muitos em subtabela ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx

  - Corrigido um problema em que o pop-up de seleção de registro a partir do botão de seleção de uma subtabela não conseguia resolver corretamente os valores das variáveis do item pai. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust

  - Corrigido um problema em que uma mensagem de confirmação de alterações não salvas incorreta aparecia para a ação de edição em massa ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust

  - Corrigido um problema em que um pop-up de confirmação secundária incorreto aparecia ao enviar o formulário após criar um registro através de uma subtabela em pop-up. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust

  - Corrigido o problema em que ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust

- **[gerenciador-de-fonte-de-dados]** Corrigido um problema em que alguns tipos de campo não eram atualizados corretamente após sincronizar campos do banco de dados ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile

- **[Gerenciador de notificações]** Otimizar o desempenho do envio de notificações no aplicativo em cenários de fluxo de trabalho ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher

- **[Campo de coleção: Código]** Corrigir a interface de usuário dos campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile

- **[Fluxo de trabalho: Nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do fluxo de trabalho para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta, e adicionado log de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher

- **[Funcionários de IA]**
  - Corrigido o problema em que abortar o raciocínio dos funcionários de IA causava a queda do serviço ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock

  - Corrigir falha no upload de documentos do funcionário de IA sob acesso a subcaminho com APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock

  - Corrigido o problema ao usar modelos deepseek ou minmax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
