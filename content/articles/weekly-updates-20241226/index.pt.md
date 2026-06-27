---
title: "Atualizações Semanais do NocoBase: Suporte para configurar formulários de perfil de usuário"
description: "As atualizações desta semana incluem: suporte para configurar formulários de perfil de usuário, bem como formulários de criação e edição no gerenciamento de usuários, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Data de lançamento: 2024-12-18*

#### 🚀 Melhorias

- **[client]** Tornar mais componentes compatíveis com o item de configuração 'Transbordamento de conteúdo com reticências' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) por @zhangzhonghe
- **[database]** Adicionar firstOrCreate e updateOrCreate ao repositório de relacionamentos ([#5894](https://github.com/nocobase/nocobase/pull/5894)) por @chareice

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigir parâmetro x-data-source ausente no template de requisição duplicada para bloco de fonte de dados externa ([#5882](https://github.com/nocobase/nocobase/pull/5882)) por @katherinehhh
  - Corrigir problema de barra de rolagem horizontal na tabela dentro do plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) por @katherinehhh
  - Corrigir o problema em que opções extras 'N/A' aparecem às vezes nos menus suspensos de campos de associação ([#5878](https://github.com/nocobase/nocobase/pull/5878)) por @zhangzhonghe
  - Corrigir problema de criação de visão PG, resolver erro ao selecionar visões entre esquemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) por @katherinehhh
  - Corrigir problema com estilos de grupo em blocos de formulário quando o layout está definido como horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) por @katherinehhh
- **[Usuários]**

  - Corrigir o problema em que o formulário não é redefinido após adicionar ou editar um usuário no gerenciamento de usuários. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) por @2013xile
  - Corrigir os problemas em que as configurações de paginação são redefinidas após editar e enviar perfis de usuário no gerenciamento de usuários após uma troca de página ou uma alteração no tamanho da página. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigir os problemas de filtragem com a Collection de fonte de dados externa ([#5890](https://github.com/nocobase/nocobase/pull/5890)) por @chareice
- **[Formulários públicos]** Corrigir problema em que a troca de tema global afeta o tema da página de visualização do formulário público ([#5883](https://github.com/nocobase/nocobase/pull/5883)) por @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Data de lançamento: 2024-12-19*

#### 🚀 Melhorias

- **[Collection: SQL]** Proibir o uso de palavras-chave e funções perigosas em SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) por @2013xile
- **[Editor de tema]** Otimizar a validação da API para edição de perfil de usuário e atualizações de senha ([#5912](https://github.com/nocobase/nocobase/pull/5912)) por @2013xile

#### 🐛 Correções de Bugs

- **[Fonte de dados: Principal]** Corrigido problemas de carregamento de chave estrangeira ([#5903](https://github.com/nocobase/nocobase/pull/5903)) por @chareice
- **[Collection: SQL]** Corrigir o problema em que os campos desaparecem após atualizar uma Collection SQL. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) por @chareice
- **[Gerenciador de backup]** Corrigido restauração de backup não funcionando no Windows por @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Data de lançamento: 2024-12-21*

#### 🐛 Correções de Bugs

- **[Visualização de dados]** Corrigir o erro ao filtrar com associações muitos-para-muitos aninhadas na consulta de gráfico. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) por @2013xile
- **[Fluxo de trabalho: Nó de agregação]** Corrigir resultado de agregação incorreto causado por transação ([#5916](https://github.com/nocobase/nocobase/pull/5916)) por @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Data de lançamento: 2024-12-25*

#### 🐛 Correções de Bugs

- **[servidor]** Collections não eram criadas automaticamente ao ativar o plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) por @chenos
- **[client]** Corrigir pesquisa de campo de propriedade em regras de vinculação não correspondendo aos dados corretos ([#5925](https://github.com/nocobase/nocobase/pull/5925)) por @katherinehhh
- **[Fluxo de trabalho]**

  - Corrigir gatilho de agendamento em campo de data sem fuso horário ([#5938](https://github.com/nocobase/nocobase/pull/5938)) por @mytharcher
  - Corrigir tradução da variável de escopo de data ([#5919](https://github.com/nocobase/nocobase/pull/5919)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Data de lançamento: 2024-12-21*

#### 🚀 Melhorias

- **[Visualização de dados]** Adicionar parâmetro offset à consulta de gráficos ([#5911](https://github.com/nocobase/nocobase/pull/5911)) por @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Data de lançamento: 2024-12-21*

#### 🐛 Correções de Bugs

- **[Visualização de dados]** Corrigir o erro ao filtrar com associações muitos-para-muitos aninhadas na consulta de gráfico. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) por @2013xile
- **[Fluxo de trabalho: Nó de agregação]** Corrigir resultado de agregação incorreto causado por transação ([#5916](https://github.com/nocobase/nocobase/pull/5916)) por @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Data de lançamento: 2024-12-23*

#### 🎉 Novos Recursos

- **[client]** Adicionar intervalo de data limitado ao componente de campo de data ([#5852](https://github.com/nocobase/nocobase/pull/5852)) por @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Data de lançamento: 2024-12-24*

#### 🐛 Correções de Bugs

- **[build]** Corrigido problema de carregamento após definir a variável de ambiente `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) por @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Data de lançamento: 2024-12-19*

#### 🎉 Novos Recursos

- **[client]** Suportar seleção de dados existentes em subformulário para campo de associação muitos-para-muitos ([#5849](https://github.com/nocobase/nocobase/pull/5849)) por @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Data de lançamento: 2024-12-25*

#### 🎉 Novos Recursos

- **[Usuários]** Suportar configuração de formulários de perfil de usuário, bem como formulários de criação e edição no gerenciamento de usuários. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) por @2013xile

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
