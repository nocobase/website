---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para exibição de mapeamento de localidade nos cabeçalhos do calendário, correções de bugs e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Data de lançamento: 2025-09-17*

#### 🚀 Melhorias

- **[auth]** Suporte ao uso de `.` em nomes de usuário ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile

#### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que o popup de configuração do ícone do botão estava sendo coberto/sobreposto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
- **[Impressão de modelo]** suporte ao campo chinaRegions por @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Data de lançamento: 2025-09-13*

#### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Suporte para retornar a qualquer nó no processo de aprovação por @mytharcher

#### 🚀 Melhorias

- **[servidor]** Usar o logger padrão do sistema para a fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[cliente]** Removido o popover de reticências da lista de arquivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher
- **[Fluxo de Trabalho]** Otimizado o processo de preparação do fluxo de trabalho para suportar o uso de dados de nós pré-carregados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher
- **[Editor de temas]** Adicionado suporte para personalização de cor do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de fila Redis]** Usar o logger padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema em que o componente Popover estava sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - Verificação incorreta de 'não vazio' para campos numéricos em regra de vinculação ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh
  - select/multiselect/date/richtext somente leitura ainda editáveis no formulário público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Fluxo de Trabalho]** Corrigido um erro potencial relacionado ao cache de log do fluxo de trabalho ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Criptografia de requisição HTTP]** Corrigido o problema em que os parâmetros da requisição não suportavam o tipo nativo URLSearchParams por @mytharcher
- **[Fonte de dados: API REST]** corrigidas as regras de validação de URL da API REST por @katherinehhh
- **[Fluxo de Trabalho: Aprovação]** Corrigido o problema em que o texto de status na notificação de conclusão da aprovação não era traduzido por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Data de lançamento: 2025-09-17*

#### 🚀 Melhorias

- **[auth]** Suporte ao uso de `.` em nomes de usuário ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[servidor]** Usar o logger padrão do sistema para a fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher
- **[snowflake-id]** Alterar os IDs das tabelas do sistema com chaves primárias auto-incrementais, mas sem identificadores únicos, para IDs de 53 bits no estilo Snowflake ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Calendário]** suporte à exibição de mapeamento de localidade para cabeçalhos de calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Fluxo de Trabalho: Nó manual]** Suporte para visualizar e retomar tarefas manuais pendentes dentro de fluxos de trabalho desabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Editor de temas]** Adicionado suporte para personalização de cor do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de fila Redis]** Usar o logger padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema em que o popup de configuração do ícone do botão estava sendo coberto/sobreposto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Corrigido o problema em que o componente Popover estava sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
  - select/multiselect/date/richtext somente leitura ainda editáveis no formulário público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh
- **[Fluxo de Trabalho]**

  - Corrigido o problema em que a lógica de inscrição incorreta na fila de tarefas em segundo plano no fluxo de trabalho causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
  - Corrigido um erro potencial relacionado ao cache de log do fluxo de trabalho ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigido o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
- **[Fonte de dados: API REST]** corrigidas as regras de validação de URL da API REST por @katherinehhh
- **[Criptografia de requisição HTTP]** Corrigido o problema em que os parâmetros da requisição não suportavam o tipo nativo URLSearchParams por @mytharcher
- **[Impressão de modelo]** suporte ao campo chinaRegions por @jiannx
- **[Gerenciador de e-mail]** Corrigido o problema de assunto com lixo eletrônico por @jiannx
