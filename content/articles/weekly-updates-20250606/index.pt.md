---
title: "Atualizações Semanais do NocoBase: Adicionar Gerenciamento de Categorias de Fluxo de Trabalho"
description: "As atualizações desta semana incluem: suporte para multiplicação e divisão nas configurações de transformação de gráficos, aprimoramento da funcionalidade de importação e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Nesta semana, lançamos o [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0), que introduz gerenciamento de permissões aprimorado, desempenho otimizado do sistema e plugins de código aberto para melhorar de forma abrangente a funcionalidade e a experiência do usuário.**

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Data de lançamento: 2025-05-29*

#### 🎉 Novos Recursos

- **[indefinido]**
  - Adicionar suporte ao Gitpod para inicialização do ambiente de desenvolvimento com um clique ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612

#### 🚀 Melhorias

- **[cliente]**
  - Otimizar interação da tecla Tab no formulário ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - suporte para configurar se os links do menu abrem em uma nova janela ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - validar campos obrigatórios antes de mostrar diálogo de confirmação ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**

  - paginar dados do dropdown de campo de associação com tamanho de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Posição de destaque incorreta ao arrastar linhas da tabela ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - Redimensionamento de bloco por arrasto não funcionando ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - i18n do componente de atribuição de campo não funcionando ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - Mensagens de erro não podem ser copiadas corretamente ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
- **[Campo de coleção: Markdown(Vditor)]** problema de largura do componente do campo markdown-vditor após zoom in e out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Corrigir conteúdo de tradução por @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Data de lançamento: 2025-05-29*

#### 🚀 Melhorias

- **[Auth: OIDC]** Ignorar maiúsculas/minúsculas ao corresponder usuário por e-mail por @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Data de lançamento: 2025-05-30*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir a ordem dos campos na lista suspensa do botão de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - variável de vinculação de subtabela busca dados de associação ao limpar em vez de usar o valor do formulário ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - campo de associação em subtabela acionando requisição quando variável de iteração com valor vazio ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
- **[Editor de tema]** Ocultar opção de troca de tema e corrigir estilo do popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Corrigir erro quando consulta de escopo de responsáveis com condição de associação por @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Data de lançamento: 2025-06-03*

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir o problema onde blocos criados em popups têm coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corrigir problema onde valores padrão do formulário de filtro são inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - incapaz de expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - Corrigir o problema onde a opção 'Conteúdo excedente com reticências' é ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - Corrigir o problema onde valores de campo de texto de linha única são exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir inicializador perdido para bancada de trabalho por @mytharcher
- **[Auth: OIDC]** Texto do botão de login não sendo localizado por @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Data de lançamento: 2025-06-04*

#### 🎉 Novos Recursos

- **[Visualização de dados]** Suporte para multiplicação e divisão na configuração de transformação de gráfico ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark

#### 🚀 Melhorias

- **[Formulários públicos]** Suporte para usar parâmetro de URL como variável ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]** Corrigir inicializador lançando erro ao usar fonte de dados externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Data de lançamento: 2025-06-04*

#### 🎉 Novos Recursos

- **[indefinido]** Adicionar novo plugin "Botão de cópia de entrada" para campos de texto de linha única ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Fluxo de trabalho]** Adicionar gerenciamento de categorias de fluxo de trabalho ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher

#### 🚀 Melhorias

- **[cliente]** suporte para configurar se os links do menu abrem em uma nova janela ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
- **[Ação: Importar registros Pro]** Otimizar desempenho de importação xlsx por @aaaaaajie
- **[Auth: OIDC]** Ignorar maiúsculas/minúsculas ao corresponder usuário por e-mail por @2013xile
- **[Fluxo de trabalho: Aprovação]** Importar coleções de fluxo de trabalho do plugin de fluxo de trabalho para evitar duplicação por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Campos e ações só entram em vigor após atualizar a página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corrigir o problema onde blocos criados em popups têm coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Não é possível selecionar variáveis ao definir valores padrão para campos de associação ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - Corrigir o problema onde valores de campo de texto de linha única são exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - incapaz de expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - Corrigir o problema onde a opção 'Conteúdo excedente com reticências' é ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - Corrigir problema onde valores padrão do formulário de filtro são inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - problema onde o popup do campo de associação de seleção fecha na primeira entrada ao adicionar novos dados ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - campo de associação em subtabela acionando requisição quando variável de iteração com valor vazio ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - Corrigir a ordem dos campos na lista suspensa do botão de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - dados de regras de validação de formulário perdidos ao recolher painel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - valores selecionados são redefinidos ao atualizar opções de dropdown de seleção múltipla via regras de vinculação ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - variável de vinculação de subtabela busca dados de associação ao limpar em vez de usar o valor do formulário ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - paginar dados do dropdown de campo de associação com tamanho de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - seletor de data não atualizado após alternar de "está entre" de volta para "é" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - Posição de destaque incorreta ao arrastar linhas da tabela ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Fluxo de trabalho]** Corrigir erro lançado ao filtrar fluxos de trabalho ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Editor de tema]** Ocultar opção de troca de tema e corrigir estilo do popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir inicializador perdido para bancada de trabalho por @mytharcher
- **[Auth: OIDC]** Texto do botão de login não sendo localizado por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrigir erro quando consulta de escopo de responsáveis com condição de associação por @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Data de lançamento: 2025-06-04*

#### 🚀 Melhorias

- **[Impressão de modelo]** Adicionar mais logs. por @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Data de lançamento: 2025-06-04*

#### 🎉 Novos Recursos

- **[Visualização de dados]** Suporte para multiplicação e divisão na configuração de transformação de gráfico ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark

#### 🚀 Melhorias

- **[Formulários públicos]** Suporte para usar parâmetro de URL como variável ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]** Corrigir inicializador lançando erro ao usar fonte de dados externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Data de lançamento: 2025-06-04*

#### 🎉 Novos Recursos

- **[indefinido]**

  - Novo suporte para Gitpod permite iniciar o ambiente de desenvolvimento com um clique e começar a desenvolver rapidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
  - Adicionar novo plugin "Botão de cópia de entrada" para campos de texto de linha única ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Visualização de dados]** Suporte para multiplicação e divisão na configuração de transformação de gráfico ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark
- **[Fluxo de trabalho]** Adicionar gerenciamento de categorias de fluxo de trabalho ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher
- **[Gerenciador de e-mail]** suporte para envio em massa por @jiannx

#### 🚀 Melhorias

- **[cliente]**

  - melhorar estilos para componente de filtro de intervalo de datas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - suporte para configurar se os links do menu abrem em uma nova janela ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - Corrigir problema onde controles de formulário ocultos capturavam a tecla Tab, melhorando significativamente a eficiência da operação do formulário ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obrigatórios antes de mostrar diálogo de confirmação ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
- **[Formulários públicos]** Suporte para usar parâmetro de URL como variável ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher
- **[Ação: Importar registros Pro]** Otimizar desempenho de importação xlsx por @aaaaaajie
- **[Impressão de modelo]** Adicionar mais logs. por @sheldon66
- **[Auth: OIDC]** Ignorar maiúsculas/minúsculas ao corresponder usuário por e-mail por @2013xile
- **[Fluxo de trabalho: Aprovação]** Importar coleções de fluxo de trabalho do plugin de fluxo de trabalho para evitar duplicação por @mytharcher
- **[Gerenciador de e-mail]** completar função de envio em massa por @jiannx

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corrigir o problema onde blocos criados em popups têm coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corrigir o problema onde valores de campo de texto de linha única são exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - Corrigir a ordem dos campos na lista suspensa do botão de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - Campos e ações só entram em vigor após atualizar a página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corrigir o problema onde a opção 'Conteúdo excedente com reticências' é ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - problema onde o popup do campo de associação de seleção fecha na primeira entrada ao adicionar novos dados ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - campo de associação em subtabela acionando requisição quando variável de iteração com valor vazio ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - dados de regras de validação de formulário perdidos ao recolher painel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - Corrigir problema onde valores padrão do formulário de filtro são inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - i18n do componente de atribuição de campo não funcionando ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - incapaz de expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - seletor de data não atualizado após alternar de "está entre" de volta para "é" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - variável de vinculação de subtabela busca dados de associação ao limpar em vez de usar o valor do formulário ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - valores selecionados são redefinidos ao atualizar opções de dropdown de seleção múltipla via regras de vinculação ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - Posição de destaque incorreta ao arrastar linhas da tabela ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - configuração de visibilidade de dois pontos do rótulo do formulário não funcionando ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - paginar dados do dropdown de campo de associação com tamanho de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Corrigir o problema com o botão de cópia no pop-up de erro copiando como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - Não é possível selecionar variáveis ao definir valores padrão para campos de associação ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - Redimensionamento de bloco por arrasto não funcionando ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
- **[Fluxo de trabalho: Nó manual]** Corrigir inicializador lançando erro ao usar fonte de dados externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher
- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir erro lançado ao filtrar fluxos de trabalho ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Editor de tema]** Ocultar opção de troca de tema e corrigir estilo do popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Campo de coleção: Markdown(Vditor)]** problema de largura do componente do campo markdown-vditor após zoom in e out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir inicializador perdido para bancada de trabalho por @mytharcher
- **[Auth: OIDC]** Texto do botão de login não sendo localizado por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrigir erro quando consulta de escopo de responsáveis com condição de associação por @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Data de lançamento: 2025-06-04*

#### 🐛 Correções de Bugs

- **[cliente]** Corrigir campos não exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
