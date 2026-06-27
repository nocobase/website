---
title: "Atualizações Semanais do NocoBase: Adicionar Gerenciamento de Rotas"
description: "As atualizações desta semana incluem: suporte à configuração de permissões para abas de página, adição da página de gerenciamento de rotas e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Data de lançamento: 2025-02-20*

#### 🎉 Novos Recursos

- **[Workflow]** Suporte para estender grupo de instrução no workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) por @mytharcher
  Referência: [Extends Node Group](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Correções de Bugs

- **[client]**

  - problema de popup de ação de associar bloco de associação no mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) por @katherinehhh
  - incompatibilidade de formato do seletor no campo de formulário de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  - Exibir o componente `<Variable.TextArea />` corretamente no modo desabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
  - Corrigir arquivos perdidos após o upload ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
- **[Workflow]**

  - Corrigir detalhes de estilo na tela do workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  - Suporte para acionar workflow ao alterar a senha ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Data de lançamento: 2025-02-21*

#### 🚀 Melhorias

- **[Workflow]** Ocultar o ID do nó do cartão do nó na tela do workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Atualizar a versão do AWS SDK para corrigir o bug de upload do MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Data de lançamento: 2025-02-22*

#### 🐛 Correções de Bugs

- **[client]** Corrigir arquivo enviado perdido quando um por um ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
- **[Workflow: Evento pré-ação]** Corrigir mensagem de erro do nó de mensagem de resposta não exibida por @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Data de lançamento: 2025-02-24*

#### 🐛 Correções de Bugs

- **[Gerenciador de backup]** O ícone de exclusão da caixa de diálogo de operação de restauração do local não está funcionando por @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Data de lançamento: 2025-02-24*

#### 🚀 Melhorias

- **[Gerenciador de arquivos]**

  - Aumentar o comprimento da URL para 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher
  - Os nomes dos arquivos durante o upload mudarão de aleatório para o nome original com um sufixo aleatório. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos
- **[Bloco: Painel de ações]** Otimizar estilos mobile ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[cli]** Melhorar a lógica interna do comando de upgrade do nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Data de lançamento: 2025-02-26*

#### 🚀 Melhorias

- **[Gerenciador de backup]** Permitir restaurar backup para um aplicativo mesmo que esteja faltando alguns plugins por @gchust

#### 🐛 Correções de Bugs

- **[client]** componente de campo de texto rico não pode ser completamente limpo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh
- **[Gerenciador de arquivos]**

  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corrigir tipo de coluna `path` da coleção de arquivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher
  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Data de lançamento: 2025-02-27*

#### 🎉 Novos Recursos

* [Workflow] Suporte para estender grupo de instrução no workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) por @mytharcher
  Referência: [Extends Node Group](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow: Evento de ação personalizada] Suporte para acionamento global ou em lote de evento de ação personalizada ([#272](https://github.com/nocobase/pro-plugins/pull/272)) por @mytharcher
* **[client]**

  * Suporte para extensão de campos predefinidos em coleções ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh
  * Suporte para estender operadores de filtro do frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh
  * Suporte para configurar propriedade de descrição no bloco ([#6015](https://github.com/nocobase/nocobase/pull/6015)) por @katherinehhh
  * Adicionar schemaSetting para mostrar nome do arquivo para anexos ([#5995](https://github.com/nocobase/nocobase/pull/5995)) por @katherinehhh
* **[Calendário]** Suporte para extensão de campos opcionais para plugins de Kanban, Calendário e Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh
* **[Localização]** Localização para rotas de desktop e mobile ([#6180](https://github.com/nocobase/nocobase/pull/6180)) por @2013xile
* **[Bloco: Painel de ações]** Suporte para configurar o número de ícones por linha no painel de ações mobile ([#6046](https://github.com/nocobase/nocobase/pull/6046)) por @katherinehhh
* **[Cliente WEB]** Suporte para configuração de permissão para abas de página e adicionar página de gerenciamento de rotas ([#5955](https://github.com/nocobase/nocobase/pull/5955)) por @zhangzhonghe
  Referência: [Routes](https://docs.nocobase.com/handbook/routes)
* **[Autenticação]** Suporte para configuração de segurança de token ([#5948](https://github.com/nocobase/nocobase/pull/5948)) por @sheldon66
  Referência: [Token security policy](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow: Nó manual]** Adicionar coluna de título de tarefa no bloco de tarefas ([#6051](https://github.com/nocobase/nocobase/pull/6051)) por @mytharcher
* **[Variáveis e segredos]** Suporte para configurar variáveis de ambiente dinâmicas e segredos ([#5966](https://github.com/nocobase/nocobase/pull/5966)) por @katherinehhh

#### 🚀 Melhorias

* [Campo de coleção: Markdown(Vditor)] CDN do Vditor usa recursos locais ([#6229](https://github.com/nocobase/nocobase/pull/6229)) por @chenos
* [Workflow] Ocultar o ID do nó do cartão do nó na tela do workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher
* **[client]** Expansão e melhoria do centro pessoal do usuário ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh
* **[client]**

  * O título da página usa por padrão o título da rota ([#6188](https://github.com/nocobase/nocobase/pull/6188)) por @zhangzhonghe
  * Adicionar mais ícones ao IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) por @katherinehhh
* **[server]**

  * Mover AesEncryptor para o core ([#6132](https://github.com/nocobase/nocobase/pull/6132)) por @chenos
  * 1. Adicionar middleware do servidor para extrair o endereço IP do cliente.
    2. Resolver problemas de recarga infinita quando um IP é bloqueado.
    3. Adicionar o cabeçalho HTTP `X-Forwarded-For` no proxy para permitir o encaminhamento para depuração local ([#6069](https://github.com/nocobase/nocobase/pull/6069)) por @sheldon66
* **[Workflow]** Mover configurações de workflow vinculado para o plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher
* **[Gerenciador de fonte de dados]** Modificar o login da função de teste para assíncrono e atualizar os casos de teste relevantes ([#6181](https://github.com/nocobase/nocobase/pull/6181)) por @sheldon66

#### 🐛 Correções de Bugs

* [client]

  * Não é possível abrir popup de link de campo em página incorporada ([#6222](https://github.com/nocobase/nocobase/pull/6222)) por @gchust
  * Ao fechar a subpágina, múltiplas solicitações de dados de bloco são acionadas ([#6233](https://github.com/nocobase/nocobase/pull/6233)) por @zhangzhonghe
  * incompatibilidade de formato do seletor no campo de formulário de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  * Chave única ausente para submenu de campos de associação na interface do usuário ([#6230](https://github.com/nocobase/nocobase/pull/6230)) por @gchust
  * Exibir o componente `<Variable.TextArea />` corretamente no modo desabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
  * problema de barra de rolagem horizontal na página ([#6232](https://github.com/nocobase/nocobase/pull/6232)) por @katherinehhh
  * Caractere de tag html corrigido no campo de entrada de configuração do canal de e-mail. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66
  * problema de popup de ação de associar bloco de associação no mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) por @katherinehhh
  * Corrigir arquivos perdidos após o upload ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
  * Pular erro de autenticação para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66
* [Workflow: Nó de loop] Corrigir saída do loop mais cedo quando o nó está pendente ([#6236](https://github.com/nocobase/nocobase/pull/6236)) por @mytharcher
* [Gerenciador de arquivos] Atualizar a versão do AWS SDK para corrigir o bug de upload do MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher
* [Mobile] Dados do menu mobile estão incompletos na tabela de configuração de permissão ([#6219](https://github.com/nocobase/nocobase/pull/6219)) por @zhangzhonghe
* [Workflow]

  * Corrigir detalhes de estilo na tela do workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  * Suporte para acionar workflow ao alterar a senha ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher
* [Visualização de dados] Ocorre um erro de filtragem quando o nome da fonte de dados contém um hífen `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) por @2013xile
* [Workflow: Evento pré-ação] Corrigir mensagem de erro do nó de mensagem de resposta não exibida ([#277](https://github.com/nocobase/pro-plugins/pull/277)) por @mytharcher
* **[client]** Corrigir arquivo enviado perdido quando um por um ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
* **[client]** Corrigir opção "Selecionar de dados existentes" ainda aparecendo ao desabilitar "Permitir múltiplos" em subformulário de relação muitos-para-muitos ([#6167](https://github.com/nocobase/nocobase/pull/6167)) por @katherinehhh
* **[auth]** Atualizar lógica do middleware de autenticação do cliente para evitar falha na atualização do token devido à concorrência ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66
* **[Cliente WEB]**

  * Permissões de rota anormais após upgrade ([#6177](https://github.com/nocobase/nocobase/pull/6177)) por @zhangzhonghe
  * Remover título de aba de página padrão ([#6178](https://github.com/nocobase/nocobase/pull/6178)) por @zhangzhonghe
* **[Gerenciador de fonte de dados]** Usar loginWithJti para atualizar casos de teste relacionados à autenticação e evitar erros ([#6175](https://github.com/nocobase/nocobase/pull/6175)) por @sheldon66
* **[Gerenciador de multi-aplicativos]** Apenas sub-aplicativos que começam com o aplicativo principal são atualizados com ele ([#6133](https://github.com/nocobase/nocobase/pull/6133)) por @chenos
* **[Autenticação]** Atualizar regras de migração para tokens emitidos e configuração de política de token ([#6107](https://github.com/nocobase/nocobase/pull/6107)) por @sheldon66
* **[Workflow]** Corrigir tipo de valor para o componente DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
