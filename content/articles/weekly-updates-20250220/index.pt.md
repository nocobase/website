---
title: "Atualizações Semanais do NocoBase: Suporte para Acionamento de Evento de Ação Personalizada em Lote ou Global"
description: "As atualizações desta semana incluem: suporte para acionar ações personalizadas globalmente ou em lote, extensão de campos predefinidos em coleções e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Data de lançamento: 2025-02-14*

#### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Remover registro de erro do console para novas tentativas de conexão SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) por @sheldon66

#### 🐛 Correções de Bugs

- **[cliente]**

  - configuração de arrastar ausente no modal de operação de criação rápida de dados de relação ([#6201](https://github.com/nocobase/nocobase/pull/6201)) por @katherinehhh
  - problema com a formatação de números de alta precisão não sendo aplicada ([#6202](https://github.com/nocobase/nocobase/pull/6202)) por @katherinehhh
  - Corrige um problema em que limpar um campo de associação em um formulário não limpa realmente o valor do campo ao enviar o formulário ([#5540](https://github.com/nocobase/nocobase/pull/5540)) por @zhangzhonghe
  - Bloco não atualiza após o envio do formulário ([#6206](https://github.com/nocobase/nocobase/pull/6206)) por @zhangzhonghe
  - valor do campo vinculado persistindo no envio após a redefinição do campo de relação ([#6207](https://github.com/nocobase/nocobase/pull/6207)) por @katherinehhh
  - ação de atualização sendo exibida para linhas sem permissões de atualização na tabela ([#6204](https://github.com/nocobase/nocobase/pull/6204)) por @katherinehhh
- **[Campo de coleção: Ordenação]** Corrige tipo de campo de ordenação não registrado em fonte de dados externa ([#6212](https://github.com/nocobase/nocobase/pull/6212)) por @mytharcher
- **[Autenticação]** Problema de autenticação WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) por @2013xile
- **[Campo de coleção: Anexo(URL)]** Corrige URL de requisição obsoleta no hook por @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Data de lançamento: 2025-02-17*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Não é possível abrir o popup do link do campo na página incorporada ([#6222](https://github.com/nocobase/nocobase/pull/6222)) por @gchust
  - No formulário de edição, o valor do campo de associação exibido não muda quando o campo associado é atualizado ([#6210](https://github.com/nocobase/nocobase/pull/6210)) por @Cyx649312038
- **[Mobile]** Dados do menu móvel estão incompletos na tabela de configuração de permissões ([#6219](https://github.com/nocobase/nocobase/pull/6219)) por @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Data de lançamento: 2025-02-17*

#### 🐛 Correções de Bugs

- **[cliente]**

  - problema com a barra de rolagem horizontal na página ([#6232](https://github.com/nocobase/nocobase/pull/6232)) por @katherinehhh
  - Ao fechar a subpágina, múltiplas requisições de dados do bloco são acionadas ([#6233](https://github.com/nocobase/nocobase/pull/6233)) por @zhangzhonghe
  - Chave única ausente para o submenu de campos de associação na interface do usuário ([#6230](https://github.com/nocobase/nocobase/pull/6230)) por @gchust
- **[Visualização de dados]** Ocorre um erro de filtragem quando o nome da fonte de dados contém um hífen `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) por @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Data de lançamento: 2025-02-18*

#### 🚀 Melhorias

- **[Campo de coleção: Markdown(Vditor)]** Vditor CDN usa recursos locais ([#6229](https://github.com/nocobase/nocobase/pull/6229)) por @chenos

#### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Nó de loop]** Corrige saída do loop mais cedo quando o nó está pendente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Data de lançamento: 2025-02-14*

#### 🐛 Correções de Bugs

- **[Autenticação]** Melhora a lógica de atualização concorrente de token e tratamento de erros de autenticação. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) por @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Data de lançamento: 2025-02-15*

#### 🐛 Correções de Bugs

- **[WeCom]** Problema de login automático no cliente WeCom por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Data de lançamento: 2025-02-16*

#### 🎉 Novos Recursos

- **[cliente]** Suporte à extensão de operadores de filtro do frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Suporte ao acionamento de evento de ação personalizada para registros globais ou em lote por @mytharcher

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Move as configurações de fluxo de trabalho vinculado para o plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Data de lançamento: 2025-02-16*

#### 🎉 Novos Recursos

- **[cliente]** suporte à extensão de campos predefinidos em coleções ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
- **[Calendário]** Suporte para a extensão de campos opcionais para os plugins Kanban, Calendário e Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
