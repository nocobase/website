---
title: "Atualizações Semanais do NocoBase: Suporte a paginação em subtabelas, otimização de fluxo de trabalho e mais"
description: "Atualizações Semanais do NocoBase 2024-10-24"
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

O NocoBase é atualmente atualizado com dois branches: `main` e `next`.

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão alfa, incluindo alguns novos recursos não lançados. Esta versão pode não ser completamente estável e é adequada para desenvolvedores ou testadores experimentarem novos recursos com antecedência ou realizarem testes de compatibilidade.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Data de lançamento: 2024-10-13*

### 🐛 Correções de Bugs

- **[cliente]** campo relacional obrigatório ainda aciona erro de validação após selecionar um valor com uma variável no escopo de dados ([#5399](https://github.com/nocobase/nocobase/pull/5399)) por @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Data de lançamento: 2024-10-17*

### 🚀 Melhorias

- **[Workflow]** adicionar dica relacionada ao campo de associação no modo lote do nó de atualização ([#5426](https://github.com/nocobase/nocobase/pull/5426)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - corrigir o problema do drawer Editar perfil ser coberto pela subpágina ([#5409](https://github.com/nocobase/nocobase/pull/5409)) por @zhangzhonghe
  - Variáveis do nó do Workflow não exibem campos de coleção herdados ([#5415](https://github.com/nocobase/nocobase/pull/5415)) por @chenos
  - paginação não sendo redefinida após limpar dados do filtro no bloco de filtragem de tabela ([#5411](https://github.com/nocobase/nocobase/pull/5411)) por @katherinehhh
- **[Gerenciador de arquivos]** remover o limite de 20 itens para carregar armazenamentos na configuração de coleção de modelos de arquivo ([#5430](https://github.com/nocobase/nocobase/pull/5430)) por @mytharcher
- **[Ação: Duplicar registro]** Corrigir o problema onde o popup de edição em massa não exibe conteúdo ([#5412](https://github.com/nocobase/nocobase/pull/5412)) por @zhangzhonghe
- **[Visualização de dados]** Corrigir o problema de valores padrão não serem exibidos no bloco de filtro do gráfico ([#5405](https://github.com/nocobase/nocobase/pull/5405)) por @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Data de lançamento: 2024-10-21*

### 🎉 Novos Recursos

- **[teste]** Campos de associação em formulários de filtro suportam configurar se a seleção múltipla é permitida ([#5451](https://github.com/nocobase/nocobase/pull/5451)) por @zhangzhonghe
- **[cliente]** Adicionar uma variável chamada "Objeto pai" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) por @zhangzhonghe
  Referência: [Objeto pai](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir parâmetros de pesquisa de URL de variáveis não sendo analisados ([#5454](https://github.com/nocobase/nocobase/pull/5454)) por @zhangzhonghe
  - Corrigir bug de limpeza de dados ao selecionar dados de associação com escopo de dados em subtabelas aninhadas ([#5441](https://github.com/nocobase/nocobase/pull/5441)) por @katherinehhh
  - corrigir cor de fundo selecionada da linha da tabela ([#5445](https://github.com/nocobase/nocobase/pull/5445)) por @mytharcher
- **[Bloco: Mapa]** remover configuração de nível de zoom para campos de mapa na coluna da tabela ([#5457](https://github.com/nocobase/nocobase/pull/5457)) por @katherinehhh
- **[Gerenciador de arquivos]** corrigir chamada do hook de regra de armazenamento em campos read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) por @mytharcher
- **[Fonte de dados: Principal]** corrigir falha no caso e2e devido a alteração de componente ([#5437](https://github.com/nocobase/nocobase/pull/5437)) por @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Data de lançamento: 2024-10-21*

### 🚀 Melhorias

- **[Workflow: nó de e-mail]** adicionar placeholder ao nó de e-mail ([#5470](https://github.com/nocobase/nocobase/pull/5470)) por @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Data de lançamento: 2024-10-22*

### 🐛 Correções de Bugs

- **[Coleção: Árvore]** Corrigir o problema onde a coleção de caminho para a coleção de árvore de herança não é criada automaticamente ([#5486](https://github.com/nocobase/nocobase/pull/5486)) por @2013xile
- **[Calendário]** mostrar barra de paginação com dados na tabela ([#5480](https://github.com/nocobase/nocobase/pull/5480)) por @katherinehhh
- **[Gerenciador de arquivos]** corrigir arquivo não poder ser enviado devido ao hook de regra. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) por @mytharcher
- **[Campo de coleção: Fórmula]** Corrigir cálculo incorreto de fórmula em subtabela aninhada de múltiplos níveis ([#5469](https://github.com/nocobase/nocobase/pull/5469)) por @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Data de lançamento: 2024-10-23*

### 🚀 Melhorias

- **[cliente]** Ajustar dica no painel de configuração de vinculação de workflow para um botão ([#5494](https://github.com/nocobase/nocobase/pull/5494)) por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** corrigir upload e destruição de registro de arquivo dentro de um bloco de associação ([#5493](https://github.com/nocobase/nocobase/pull/5493)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Data de lançamento: 2024-10-16*

### 🎉 Novos Recursos

- **[sdk]** Permite armazenar informações do cliente no sessionStorage definindo a variável de ambiente `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) por @2013xile
- **[Campo de coleção: Anexo (URL)]** Adicionar Campo de Anexo (URL) por @katherinehhh

### 🚀 Melhorias

- **[cliente]**

  - otimizar depuração remota ([#5394](https://github.com/nocobase/nocobase/pull/5394)) por @chenos
  - otimização de estilo para centralizar ícone quando botões de ação usam apenas ícone ([#5413](https://github.com/nocobase/nocobase/pull/5413)) por @katherinehhh
  - atualizar popup de mensagem de fechamento automático de registro ([#5408](https://github.com/nocobase/nocobase/pull/5408)) por @katherinehhh
- **[Workflow: nó de requisição HTTP]** Suporte para SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) por @chenos

### 🐛 Correções de Bugs

- **[Formulários públicos]** Corrigir problema ao clicar em configurações no formulário público ([#5392](https://github.com/nocobase/nocobase/pull/5392)) por @katherinehhh
- **[cliente]**

  - Corrigir o problema de não exibir o valor na caixa de entrada de valor padrão ([#5400](https://github.com/nocobase/nocobase/pull/5400)) por @zhangzhonghe
  - Corrigir o erro de não encontrar o campo de associação quando regras de vinculação são definidas para a subtabela ([#5402](https://github.com/nocobase/nocobase/pull/5402)) por @zhangzhonghe
  - corrigir visualização incorreta de miniatura quando o tipo de arquivo não é suportado por padrão ([#5401](https://github.com/nocobase/nocobase/pull/5401)) por @mytharcher
- **[Localização]** Corrigir o problema onde as traduções no plugin de localização não surtem efeito após a publicação ([#5416](https://github.com/nocobase/nocobase/pull/5416)) por @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Data de lançamento: 2024-10-18*

### 🎉 Novos Recursos

- **[Workflow: nó de loop]** adicionar mais opções de controle à configuração do nó de loop ([#5342](https://github.com/nocobase/nocobase/pull/5342)) por @mytharcher
  Referência: [Nó de loop](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Adicionar botão de execução de teste para nós de workflow e API para implementar a função de teste ([#5407](https://github.com/nocobase/nocobase/pull/5407)) por @mytharcher
- **[Componente de campo: máscara]** Adicionar componente de campo `mask`, suporta exibir dados do campo como string mascarada por @gchust
  Referência: [Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Melhorias

- **[cliente]** permitir que o título da coluna da tabela seja redefinido para o padrão ([#5439](https://github.com/nocobase/nocobase/pull/5439)) por @katherinehhh

### 🐛 Correções de Bugs

- **[cliente]** corrigido que as opções do componente de campo não foram traduzidas corretamente ([#5442](https://github.com/nocobase/nocobase/pull/5442)) por @gchust
- **[Workflow: nó de requisição HTTP]** corrigir mensagem de erro legada no nó de requisição ([#5443](https://github.com/nocobase/nocobase/pull/5443)) por @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Data de lançamento: 2024-10-23*

### 🚀 Melhorias

- **[cliente]** subTable suporta paginação ([#5450](https://github.com/nocobase/nocobase/pull/5450)) por @katherinehhh
- **[Bloco: Kanban]** Adicionar suporte para ativar ou desativar a classificação por arrastar e soltar no bloco Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) por @katherinehhh
- **[Calendário]** mostrar popup de criação ao selecionar slot do calendário ([#5483](https://github.com/nocobase/nocobase/pull/5483)) por @gu-zhichao
- **[Gerenciador de múltiplos aplicativos]** suporte para a variável de ambiente USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) por @chenos
- **[Workflow]** Adicionar componente de conjunto de campos estilo cartão ([#5464](https://github.com/nocobase/nocobase/pull/5464)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** valor da variável é perdido após atualizar popup do bloco markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) por @katherinehhh
- **[Visualização de dados]** Corrigir problemas ao usar fonte de dados Oracle externa para o plugin de visualização de dados, por exemplo, problemas de formatação de data ([#5436](https://github.com/nocobase/nocobase/pull/5436)) por @2013xile
- **[Gerenciador de arquivos]** corrigir arquivo não poder ser enviado devido ao hook de regra. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
