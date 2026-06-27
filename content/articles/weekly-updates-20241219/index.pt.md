---
title: "Atualizações Semanais do NocoBase: Otimização da experiência móvel"
description: "As atualizações desta semana incluem: otimização da interação móvel, correções de bugs e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Data de lançamento: 2024-12-12*

#### 🐛 Correções de Bugs

- **[sdk]** Remover o locale padrão ([#5867](https://github.com/nocobase/nocobase/pull/5867)) por @chenos
- **[client]**

  - Corrigir o problema onde variáveis de campo de associação aninhada no escopo de dados têm valores vazios ([#5866](https://github.com/nocobase/nocobase/pull/5866)) por @zhangzhonghe
  - Corrigir o aparecimento da barra de rolagem quando há menos colunas com uma coluna fixa à direita ([#5864](https://github.com/nocobase/nocobase/pull/5864)) por @katherinehhh
  - Corrigir a posição incorreta do estilo do componente `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) por @mytharcher
- **[Gerenciador de Backup]** Corrigida a falha no download do backup para sub-aplicativos com domínio personalizado por @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Data de lançamento: 2024-12-12*

#### 🎉 Novos Recursos

- **[Ação: Solicitação personalizada]** Suporte ao uso da variável 'Formulário atual' em botões de solicitação personalizada ([#5871](https://github.com/nocobase/nocobase/pull/5871)) por @zhangzhonghe

#### 🚀 Melhorias

- **[Visualização de dados]** Permite usar chaves estrangeiras na configuração de consulta de gráficos ([#5869](https://github.com/nocobase/nocobase/pull/5869)) por @2013xile

#### 🐛 Correções de Bugs

- **[client]** Corrigir problema onde o seletor de tabela de arquivos não é exibido no modo de não configuração ao usar seleção de arquivos ([#5874](https://github.com/nocobase/nocobase/pull/5874)) por @katherinehhh
- **[Controle de acesso]** Corrigidos problemas relacionados a registros de replicação após configurar permissões ([#5839](https://github.com/nocobase/nocobase/pull/5839)) por @chareice
- **[Fluxo de trabalho]** Corrigir timeout de transação ao excluir execução automaticamente ([#5870](https://github.com/nocobase/nocobase/pull/5870)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Data de lançamento: 2024-12-13*

#### 🚀 Melhorias

- **[Autenticação]** Otimizar a lógica de obtenção de metadados de ações de auditoria. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) por @chenzhizdt

#### 🐛 Correções de Bugs

- **[Visualização de dados]** Corrigir a altura inicial do bloco de gráfico ([#5879](https://github.com/nocobase/nocobase/pull/5879)) por @2013xile
- **[Fluxo de trabalho]** Corrigir erro lançado ao retomar nó assíncrono na execução manual do fluxo de trabalho ([#5877](https://github.com/nocobase/nocobase/pull/5877)) por @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Data de lançamento: 2024-12-15*

#### 🎉 Novos Recursos

- **[Mobile]** Adicionar interruptor global para controlar todos os botões de voltar no mobile (ativado por padrão) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[Sincronização de dados do usuário]** Corrigir problemas de exibição dos botões de sincronização e tarefas. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) por @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Data de lançamento: 2024-12-18*

#### 🚀 Melhorias

- **[Mobile]** Adaptar componente de seleção de intervalo de data e hora para mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[Fonte de dados: Principal]** Corrigir o problema onde os campos do sistema no bloco de formulário de filtro não podem ser editados ([#5885](https://github.com/nocobase/nocobase/pull/5885)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Data de lançamento: 2024-12-11*

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigir o problema onde o título da aba do navegador não atualiza após trocar de página ([#5857](https://github.com/nocobase/nocobase/pull/5857)) por @zhangzhonghe
  - Corrigir o problema onde atualizar a página na página de gerenciamento de fonte de dados redireciona para a página inicial ([#5855](https://github.com/nocobase/nocobase/pull/5855)) por @zhangzhonghe
  - Corrigir o problema de dados não serem alterados após a paginação em sub-tabela ([#5856](https://github.com/nocobase/nocobase/pull/5856)) por @zhangzhonghe
  - Corrigir o problema onde os dados da função não são exibidos na tabela de gerenciamento de usuários ([#5846](https://github.com/nocobase/nocobase/pull/5846)) por @zhangzhonghe
  - Corrigir o problema onde campos de associação em modelos de referência às vezes não exibem dados ([#5848](https://github.com/nocobase/nocobase/pull/5848)) por @zhangzhonghe
  - Corrigir o problema onde o botão 'Solicitação Personalizada' não fica imediatamente visível após ser adicionado ([#5845](https://github.com/nocobase/nocobase/pull/5845)) por @zhangzhonghe
  - Impedir que páginas ocultas afetem interações com outras páginas ([#5836](https://github.com/nocobase/nocobase/pull/5836)) por @zhangzhonghe
  - Corrigir o problema onde blocos adicionados em uma janela pop-up não são exibidos ao reabrir o pop-up ([#5838](https://github.com/nocobase/nocobase/pull/5838)) por @zhangzhonghe
- **[server]** Definir as ações disponíveis padrão para o ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) por @chenos

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
