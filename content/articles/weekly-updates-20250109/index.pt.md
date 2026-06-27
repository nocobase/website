---
title: "Atualizações Semanais do NocoBase: Suporte para Importação e Exportação de Grandes Volumes de Dados"
description: "As atualizações desta semana incluem: suporte para importação e exportação de grandes volumes de dados, e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Data de lançamento: 06/01/2025*

#### 🚀 Melhorias

- **[Workflow: kit de teste]** Corrige a precisão dos campos de data na coleção de teste ([#5983](https://github.com/nocobase/nocobase/pull/5983)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige problema de barra de rolagem ao definir altura total para bloco de dados em subpágina ([#5989](https://github.com/nocobase/nocobase/pull/5989)) por @katherinehhh
  - Corrige problema de alinhamento quando os botões da coluna de ação estão ocultos ([#5987](https://github.com/nocobase/nocobase/pull/5987)) por @katherinehhh
  - Corrige problema com exclusão em lote de campos de sistema e gerais no gerenciador de coleções ([#5988](https://github.com/nocobase/nocobase/pull/5988)) por @katherinehhh
  - Corrige o problema em que a variável 'parâmetros de pesquisa de URL' não funciona na página mobile ([#5968](https://github.com/nocobase/nocobase/pull/5968)) por @Cyx649312038
- **[server]** Corrige uma possível falha do aplicativo durante a restauração de backup ([#5981](https://github.com/nocobase/nocobase/pull/5981)) por @gchust
- **[Mobile]** Corrige o problema de botões inferiores ficarem obscurecidos em dispositivos móveis ([#5991](https://github.com/nocobase/nocobase/pull/5991)) por @zhangzhonghe
- **[Visualização de dados]** Corrige o problema em que "variáveis de pop-up atuais" usadas em gráficos em subpáginas ficavam vazias após atualizar a página ([#5984](https://github.com/nocobase/nocobase/pull/5984)) por @2013xile
- **[Bloco: Kanban]** Corrige campos da coleção pai não carregados no kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) por @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Data de lançamento: 06/01/2025*

#### 🐛 Correções de Bugs

- **[client]** Corrige o seletor de intervalo de datas no formulário/ação de filtro que não mostra o seletor de hora quando showTime está definido ([#5994](https://github.com/nocobase/nocobase/pull/5994)) por @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Data de lançamento: 09/01/2025*

#### 🎉 Novos Recursos

- **[client]** Adiciona método app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) por @chenos

#### 🚀 Melhorias

- **[client]**

  - Permite ordenar workflows ao vincular ao botão de ação ([#6017](https://github.com/nocobase/nocobase/pull/6017)) por @mytharcher
  - Altera links de referência dos avaliadores para o site de documentação ([#6021](https://github.com/nocobase/nocobase/pull/6021)) por @mytharcher
  - Suporta maxTagCount: 'responsive' no componente de seleção múltipla suspensa ([#6007](https://github.com/nocobase/nocobase/pull/6007)) por @katherinehhh
  - Define hora final padrão para o componente de escopo de tempo no bloco de filtro como 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) por @katherinehhh
- **[Ação: Edição em lote]** Refatora o botão de envio do formulário de edição em lote: remove atribuição de campo e regra de vinculação ([#6008](https://github.com/nocobase/nocobase/pull/6008)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[client]**

  - Corrige validação obrigatória não funcionando após excluir dados no editor de rich text ([#6006](https://github.com/nocobase/nocobase/pull/6006)) por @katherinehhh
  - Corrige problema de desalinhamento quando os botões da coluna de ação estão ocultos ([#6014](https://github.com/nocobase/nocobase/pull/6014)) por @katherinehhh
  - Corrige problema do botão Criar Coleções ao clicar na aba Coleções na página de API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) por @katherinehhh
  - Corrige problema onde targetKey não pode selecionar campo NanoID em um-para-muitos ([#5999](https://github.com/nocobase/nocobase/pull/5999)) por @katherinehhh
  - Corrige estilo do botão de configuração no tema compacto ([#6001](https://github.com/nocobase/nocobase/pull/6001)) por @katherinehhh
  - Corrige estilo do componente de lista ([#5998](https://github.com/nocobase/nocobase/pull/5998)) por @mytharcher
  - Corrige o problema em que os cabeçalhos incluídos nas requisições do cliente estavam sendo sobrescritos ([#6009](https://github.com/nocobase/nocobase/pull/6009)) por @2013xile
  - Corrige foreignKey, targetKey e sourceKey para suportar filtragem por caracteres chineses ([#5997](https://github.com/nocobase/nocobase/pull/5997)) por @katherinehhh
- **[Ação: Importar registros]** corrige importação com associações muitos-para-muitos que usam target key diferente ([#6024](https://github.com/nocobase/nocobase/pull/6024)) por @chareice
- **[Bloco: Mapa]** Corrige campo de mapa no bloco de detalhes que deve renderizar como bloco de mapa ([#6010](https://github.com/nocobase/nocobase/pull/6010)) por @katherinehhh
- **[Incorporar NocoBase]** O token para incorporação entra em conflito com a autenticação por @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Data de lançamento: 31/12/2024*

#### 🎉 Novos Recursos

- **[[Ação: Importar registros(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Melhora as capacidades de importação de dados com suporte para importações assíncronas, importação de milhões de registros, identificação e processamento de dados duplicados, atualizações de dados e acionadores de workflow.
- **[[Ação: Exportar registros(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Melhora as capacidades de exportação de dados com suporte para exportações assíncronas, exportação de milhões de registros e exportação de anexos.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Data de lançamento: 04/01/2025*

#### 🐛 Correções de Bugs

- **[client]** Corrige o problema em que subtabelas vazias exibem uma linha de dados vazia no iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) por @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Data de lançamento: 08/01/2025*

#### 🐛 Correções de Bugs

- **[client]** Corrige o problema em que as linhas da tabela não podem ser arrastadas e ordenadas ([#6013](https://github.com/nocobase/nocobase/pull/6013)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Data de lançamento: 02/01/2025*

#### 🎉 Novos Recursos

- **[Workflow: Nó manual]** Adiciona uma entrada global fixa para todos os tipos de tarefas de workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) por @mytharcher
- **[Política de senha]** Adiciona um novo plugin: Política de senha, usado para definir as regras de senha e a política de bloqueio de login para todos os usuários por @2013xile
  Referência: [Política de senha e bloqueio de usuário](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Melhorias

- **[client]** Adiciona uma palavra-chave de filtro "Segurança" para o gerenciador de plugins ([#5977](https://github.com/nocobase/nocobase/pull/5977)) por @2013xile
- **[Workflow: Evento de ação personalizada]** Altera a API de execução manual por @mytharcher

#### 🐛 Correções de Bugs

- **[Workflow]** Corrige `onChange` não funcionando no componente `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) por @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Data de lançamento: 06/01/2025*

#### 🚀 Melhorias

- **[Mobile]** Suporta exibir o número da página atual para tabela no mobile ([#5946](https://github.com/nocobase/nocobase/pull/5946)) por @katherinehhh
- **[Gerenciador de arquivos]** suporte para outros plugins de armazenamento ([#5930](https://github.com/nocobase/nocobase/pull/5930)) por @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Data de lançamento: 08/01/2025*

#### 🎉 Novos Recursos

- **[Variáveis de ambiente]** Suporta configurar variáveis de ambiente dinâmicas e segredos ([#5966](https://github.com/nocobase/nocobase/pull/5966)) por @katherinehhh

#### 🚀 Melhorias

- **[client]** adiciona mais ícones ao IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) por @katherinehhh
- **[Campo de coleção: Anexo(URL)]** Filtra coleções de arquivos associadas ao plugin-file-storage-s3-pro. por @jiannx

#### 🐛 Correções de Bugs

- **[Campo de coleção: Anexo(URL)]** Corrige API alterada no hook do componente por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
