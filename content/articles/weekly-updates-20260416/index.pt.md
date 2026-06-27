---
title: "Atualizações Semanais｜Adicionar bloco de filtro em árvore"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 09 a 16 de abril de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Data de lançamento: 2026-04-14*

### 🚀 Melhorias

- **[indefinido]**

  - Adicionar Índice ao README em Francês ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
  - Adicionada consistência do Índice nos READMEs localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Adicionar tradução para árabe na página inicial da documentação ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
  - Docs: adicionar tradução para árabe nas páginas de introdução de primeiros passos ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
- **[client]** adicionar chave de verificação de obrigatoriedade do formulário ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx

### 🐛 Correções de Bugs

- **[utils]** Adicionar controle de segurança para envio de requisições HTTP do servidor, para evitar possível SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referência: [Variáveis de ambiente](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Data de lançamento: 2026-04-10*

### 🐛 Correções de Bugs

- **[client]** corrigir erro ao adicionar campo muitos-para-muitos na subtabela ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
- **[flow-engine]** Corrigido o problema de que campos muitos-para-um de fontes de dados externas não podiam ser adicionados no bloco de tabela ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
- **[Gerenciador de notificações]** Otimizar o desempenho do envio de notificações no aplicativo em cenários de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Data de lançamento: 2026-04-09*

### 🐛 Correções de Bugs

- **[client]** Corrigido um problema onde o popup de seleção de registro do botão de seleção de uma subtabela não conseguia resolver corretamente os valores das variáveis do item pai. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
- **[Campo de coleção: Código]** Corrigir a interface de UI dos campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Data de lançamento: 2026-04-14*

### 🚀 Melhorias

- **[indefinido]**

  - Adicionada consistência do Índice nos READMEs localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Adicionar Índice ao README em Francês ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
- **[server]** Documentação da API swagger do gerenciador de plugins melhorada ([#9080](https://github.com/nocobase/nocobase/pull/9080)) por @2013xile

### 🐛 Correções de Bugs

- **[Funcionários de IA]** Corrigido o problema onde as mensagens de erro não eram exibidas nas conversas dos funcionários de IA ([#9097](https://github.com/nocobase/nocobase/pull/9097)) por @cgyrock
- **[Controle de acesso]** atualizar acl swagger para servidor mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) por @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Data de lançamento: 2026-04-10*

### 🎉 Novos Recursos

- **[Bloco: Árvore]** Adicionar bloco de filtro de árvore ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Auth: Chaves de API]** adicionar comandos `pm list` e `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) por @chenos
- **[Funcionários de IA]**

  - Adicionada uma ferramenta de consulta de dados e ferramenta de relatório de análise de negócios para funcionários de IA ([#9040](https://github.com/nocobase/nocobase/pull/9040)) por @2013xile
  - Adicionar uma ferramenta de pesquisa web baseada em LLM para funcionários de IA ([#9032](https://github.com/nocobase/nocobase/pull/9032)) por @cgyrock
- **[Gerenciador de migração]** suportar comando de migração por @chenos
- **[Gerenciador de e-mail]** gmail suporta envio de e-mails com aliases por @jiannx

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigido o problema de que campos muitos-para-um de fontes de dados externas não podiam ser adicionados no bloco de tabela ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
- **[client]**

  - corrigir erro ao adicionar campo muitos-para-muitos na subtabela ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
  - Corrigido um problema onde o popup de seleção de registro do botão de seleção de uma subtabela não conseguia resolver corretamente os valores das variáveis do item pai. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
  - Corrigido um problema onde uma mensagem de confirmação de alterações não salvas incorreta aparecia para a ação de edição em massa ([#9054](https://github.com/nocobase/nocobase/pull/9054)) por @gchust
  - Corrigido um problema onde um popup de confirmação secundário incorreto aparecia ao enviar o formulário após criar um registro através de uma subtabela em popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) por @gchust
  - Corrigido o problema onde ctx.request não conseguia sobrescrever o cabeçalho Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) por @gchust
- **[data-source-manager]** Corrigido um problema onde alguns tipos de campo não eram atualizados corretamente após sincronizar campos do banco de dados ([#9046](https://github.com/nocobase/nocobase/pull/9046)) por @2013xile
- **[Gerenciador de notificações]** Otimizar o desempenho do envio de notificações no aplicativo em cenários de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher
- **[Campo de coleção: Código]** Corrigir a interface de UI dos campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile
- **[Workflow: Nó de requisição HTTP]** Sanitizados os resultados do nó de requisição do workflow para evitar expor a configuração da requisição, novos nós padronizados para retornar apenas dados de resposta, e adicionado log de depuração para requisições com falha. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigido o problema onde abortar o raciocínio dos funcionários de IA causava a queda do serviço ([#9031](https://github.com/nocobase/nocobase/pull/9031)) por @cgyrock
  - Corrigir falha no upload de documentos do funcionário de IA sob acesso de subcaminho com APP_PUBLIC_PATH configurado. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) por @cgyrock
  - Corrigido o problema ao usar modelos Deepseek ou MiniMax no dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) por @cgyrock
