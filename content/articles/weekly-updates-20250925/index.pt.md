---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "A atualização desta semana inclui: suporte para girar imagens durante a pré-visualização, adição de suporte de localização para dicas de ferramentas e títulos de itens de grupo, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Data de lançamento: 2025-09-20*

#### 🚀 Melhorias

- **[cliente]** adicionar suporte de localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Calendário]** suportar exibição de mapeamento de localidade para cabeçalhos de calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir o problema onde o popover de configuração do ícone do menu está sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
- **[Notificação: Mensagem no aplicativo]**

  - Corrigir o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
  - Corrigir o problema onde mensagens recentes não são exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir o problema onde a lógica de inscrição incorreta na fila de tarefas em segundo plano no fluxo de trabalho causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher
  - Corrigir o problema onde os campos de fórmula no formulário de aprovação não são atualizados automaticamente por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Data de lançamento: 2025-09-20*

#### 🚀 Melhorias

- **[auth]** Suportar o uso de `.` em nomes de usuário ([#7504](https://github.com/nocobase/nocobase/pull/7504)) por @2013xile
- **[cliente]** adicionar suporte de localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Fluxo de trabalho: Nó manual]** Suportar visualização e retomada de tarefas manuais pendentes dentro de fluxos de trabalho desabilitados ([#7493](https://github.com/nocobase/nocobase/pull/7493)) por @mytharcher
- **[Calendário]** suportar exibição de mapeamento de localidade para cabeçalhos de calendário ([#7508](https://github.com/nocobase/nocobase/pull/7508)) por @katherinehhh
- **[Editor de tema]** Adicionar suporte para personalização de cor do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu
- **[Adaptador de fila Redis]** Usar o registrador padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir o problema onde o popup de configuração do ícone do botão está sendo coberto/sobreposto ([#7506](https://github.com/nocobase/nocobase/pull/7506)) por @zhangzhonghe
  - Corrigir o problema onde o popover de configuração do ícone do menu está sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
  - Corrigir o problema onde o componente Popover está sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe
- **[Notificação: Mensagem no aplicativo]**

  - Corrigir o problema de análise incorreta do link de notificação ([#7509](https://github.com/nocobase/nocobase/pull/7509)) por @mytharcher
  - Corrigir o problema onde mensagens recentes não são exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Fluxo de trabalho]**

  - Corrigir um erro potencial relacionado ao cache de log do fluxo de trabalho ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher
  - Corrigir o problema onde a lógica de inscrição incorreta na fila de tarefas em segundo plano no fluxo de trabalho causava o tratamento incorreto da mensagem de execução ([#7507](https://github.com/nocobase/nocobase/pull/7507)) por @mytharcher
- **[Fonte de dados: API REST]** corrigir regras de validação de URL da API REST por @katherinehhh
- **[Criptografia de solicitação HTTP]** Corrigir o problema onde os parâmetros da solicitação não suportam o tipo nativo URLSearchParams por @mytharcher
- **[Impressão de modelo]** suportar campo chinaRegions por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde os campos de fórmula no formulário de aprovação não são atualizados automaticamente por @mytharcher
  - Corrigir o problema onde ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Data de lançamento: 2025-09-24*

#### 🚀 Melhorias

- **[cliente]**

  - Suportar rotação de imagem ao visualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
  - adicionar suporte de localização para tooltip e título de item de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh
- **[Adaptador de fila RabbitMQ]** melhorar o tratamento de conexão RabbitMQ e a lógica de processamento de mensagens por @sdp-ncd

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir o problema onde os submenus da barra lateral não podem ser destacados corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
  - Corrigir o problema onde o popover de configuração do ícone do menu está sendo obscurecido ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe
- **[Notificação: Mensagem no aplicativo]** Corrigir o problema onde mensagens recentes não são exibidas ao abrir o popup de notificação ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir o problema onde a condição da lista de fluxo de trabalho está incorreta ao carregar o contexto do campo associado na configuração do fluxo de trabalho vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
- **[Fluxo de trabalho: Nó de loop]** Corrigido o problema onde o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir o problema onde ocorria um erro ao excluir dados de uma fonte de dados externa por @mytharcher
  - Corrigir o problema onde os campos de fórmula no formulário de aprovação não são atualizados automaticamente por @mytharcher
