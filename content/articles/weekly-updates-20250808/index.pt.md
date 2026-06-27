---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: adição de opções de configuração relacionadas a assinaturas, suporte do gerenciador de e-mail para ressincronização e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Data de lançamento: 2025-08-05*

#### 🐛 Correções de Bugs

- **[client]** Corrige o problema onde strings brutas de variáveis são enviadas com o formulário ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
- **[Workflow: Aprovação]** Adiciona título de tarefa para itens adicionados e delegados por @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Data de lançamento: 2025-08-04*

#### 🎉 Novos Recursos

- **[Auth: SAML 2.0]** Adiciona opções de configuração relacionadas à assinatura por @2013xile

#### 🚀 Melhorias

- **[Workflow: JavaScript]** Altera o cache para cache de aplicativo para evitar bugs no modo cluster por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige tooltip que mostra [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Ao usar variáveis para definir valores padrão de campo em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string original da variável ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
- **[Collection: Árvore]** Corrige a lógica de sincronização de caminho de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Data de lançamento: 2025-08-01*

#### 🎉 Novos Recursos

- **[client]** Adicionada opção "Foco automático" para os componentes Input, TextArea, URL e InputNumber que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige item de pré-visualização de arquivo em url nulo ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Adiciona URL completa ao arquivo local ao pré-visualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
- **[utils]** Manipulação incorreta de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[undefined]** Adiciona novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[Gerenciador de arquivos]** Corrige permissão de campo de armazenamento ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Workflow]** Corrige resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
- **[Workflow: Nó de cálculo dinâmico]** Corrige erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Workflow: Subfluxo]** Corrige fluxo suspenso por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Data de lançamento: 2025-08-06*

#### 🐛 Correções de Bugs

- **[Gerenciador de e-mail]** suporta ressincronização por @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Data de lançamento: 2025-08-06*

#### 🚀 Melhorias

- **[Workflow]** O título do workflow no cartão de tarefa não será mais exibido com um tachado, mesmo se a versão correspondente estiver desabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Visualização de dados]** problema de variável de data no valor padrão do campo de data no bloco de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Workflow: Cópia (CC)]** Corrige blocos que não podem ser removidos ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Gerenciador de e-mail]** Distingue manualmente entre encaminhamento e resposta por @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Data de lançamento: 2025-08-05*

#### 🎉 Novos Recursos

- **[client]** Adicionada opção "Foco automático" para os componentes Input, TextArea, URL e InputNumber que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativada ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Auth: SAML 2.0]** Adiciona opções de configuração relacionadas à assinatura por @2013xile

#### 🚀 Melhorias

- **[Workflow: JavaScript]** Altera o cache para cache de aplicativo para evitar bugs no modo cluster por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige o problema onde strings brutas de variáveis são enviadas com o formulário ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Corrige tooltip que mostra [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Ao usar variáveis para definir valores padrão de campo em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string original da variável ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
- **[undefined]** Adiciona novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[Collection: Árvore]** Corrige a lógica de sincronização de caminho de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Visualizador de arquivos do Office]** Suporta arquivos `.docx`, `.xlsx` e `.pptx` apenas com URL para serem pré-visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Workflow: Nó de cálculo dinâmico]** Corrige erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Workflow: Aprovação]** Adiciona título de tarefa para itens adicionados e delegados por @mytharcher
- **[Gerenciador de e-mail]** Suporta o mesmo e-mail para múltiplas pessoas por @jiannx
