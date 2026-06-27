---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: adição de suporte a filtros no gerenciamento de múltiplos aplicativos, otimização de estilos móveis e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Atualmente, o NocoBase é atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. Destina-se principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Data de lançamento: 26/06/2025*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Otimizar estilo mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
- **[Formulários públicos]** Otimizar o desempenho dos componentes de data em formulários públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe

#### 🐛 Correções de bugs

- **[Fluxo de trabalho]** Corrigir parâmetros de carregamento de registro em tarefas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
- **[Cliente WEB]** Corrigir problema em que blocos abaixo de páginas não eram exibidos após definir permissões de menu de função ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir nome da variável do solicitante no gatilho por @mytharcher
  - Corrigir estilos mobile por @mytharcher
  - Corrigir erro lançado quando a coleção relacionada à aprovação é excluída por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Data de lançamento: 27/06/2025*

#### 🎉 Novos recursos

- **[Fluxo de trabalho: Nó de requisição HTTP]** Suporte a requisição `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992

#### 🚀 Melhorias

- **[Fluxo de trabalho]**

  - Otimizar estilo mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
  - Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher
- **[Formulários públicos]** Otimizar o desempenho dos componentes de data em formulários públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento pré-ação]** Ajustar api de variáveis por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Ajustar API de variáveis por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - Limitação de intervalo incorreta em campos de data com hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
  - Quando as variáveis do parâmetro de consulta de URL estão vazias, as condições de escopo de dados não são removidas ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
- **[Fluxo de trabalho]**

  - Corrigir parâmetros de carregamento de registro em tarefas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
  - Corrigir verificação executada incorretamente em número inteiro grande ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corrigir estatísticas em cascata excluídas por versão de fluxo de trabalho não atual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
- **[Mobile]** Corrigir problema de z-index em popup mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Cliente WEB]** Corrigir problema em que blocos abaixo de páginas não eram exibidos após definir permissões de menu de função ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Calendário]** Problema de campo de data no formulário de criação rápida do bloco de calendário ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh
- **[Ação: Importar registros]** Resolver problema de falha de login após importação em lote de nomes de usuário e senhas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir erro lançado quando a coleção relacionada à aprovação é excluída por @mytharcher
  - Corrigir estilos mobile por @mytharcher
  - Corrigir nome da variável do solicitante no gatilho por @mytharcher
  - Apenas participantes podem visualizar (obter) detalhes da aprovação por @mytharcher
  - Corrigir API de variável legada que lança erro por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Data de lançamento: 02/07/2025*

#### 🚀 Melhorias

- **[banco de dados]** Suporte para adicionar opções de pool a partir de env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Fluxo de trabalho]**

  - Melhorar o desempenho de carregamento da lista de execuções excluindo campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Adicionar API de log para teste de nó ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Alterar hora para absoluto na linha do tempo por @mytharcher

#### 🐛 Correções de bugs

- **[utils]** Problema de filtragem em DateOnly ou Datetime (sem fuso horário) usando variável de dia exato ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[cli]**

  - Erro indefinido no download de plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
  - Ajustar a cópia da licença ao instalar o plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
- **[cliente]**

  - Tolerância a falhas para configurações baseadas em 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
  - A definição de displayName do campo na visualização conectada não teve efeito ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - Configuração de UI do nó manual do fluxo de trabalho: regras de vinculação não podem selecionar variáveis do formulário atual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
- **[Fluxo de trabalho]** Corrigir erro lançado por importação cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[plugin-commercial]**

  - Modo develop não mostra popup de licença por @jiannx
  - Fechar temporariamente o pop-up de verificação de licença por @jiannx
  - Ajustar a lógica de verificação de licença e suportar correspondência de nome de domínio pan por @jiannx
- **[Política de senha]** Suporte para bloquear permanentemente contas de usuário por @2013xile
- **[Fluxo de trabalho: Subfluxo]** Corrigir problema no modo cluster por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Adicionar configurações de layout de formulário por @mytharcher
  - Remover campos não filtráveis do filtro por @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Data de lançamento: 27/06/2025*

#### 🎉 Novos recursos

- **[Configurações de licença]** adicionar configuração de licença e validar licença antes de baixar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx

#### 🚀 Melhorias

- **[Gerenciador de multi-apps]** adicionar suporte a filtro no gerenciamento de multi-apps ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Fluxo de trabalho]** Otimizar estilo mobile ([#7040](https://github.com/nocobase/nocobase/pull/7040)) por @mytharcher
- **[Formulários públicos]** Otimizar o desempenho dos componentes de data em formulários públicos ([#7117](https://github.com/nocobase/nocobase/pull/7117)) por @zhangzhonghe
- **[plugin-commercial]** criptografar envio de log e melhorar a exibição de informações de licença por @jiannx

#### 🐛 Correções de bugs

- **[cliente]** valor padrão do campo de associação substitui dados existentes na subtabela ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
- **[Fluxo de trabalho]** Corrigir parâmetros de carregamento de registro em tarefas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) por @mytharcher
- **[Cliente WEB]** Corrigir problema em que blocos abaixo de páginas não eram exibidos após definir permissões de menu de função ([#7112](https://github.com/nocobase/nocobase/pull/7112)) por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Corrigir nome da variável do solicitante no gatilho por @mytharcher
