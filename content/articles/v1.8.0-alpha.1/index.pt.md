---
title: "NocoBase v1.8.0-alpha.1: Adicionar gerenciamento de categorias de fluxo de trabalho"
description: "Nota de lançamento da v1.8.0-alpha.1"
---

### 🎉 Novas Funcionalidades

- **[indefinido]**

  - Novo suporte ao Gitpod permite iniciar o ambiente de desenvolvimento com um clique e começar a desenvolver rapidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
  - Adicionado novo plugin "Botão de Copiar Entrada" para campos de texto de linha única ([#6894](https://github.com/nocobase/nocobase/pull/6894)) por @kerwin612
- **[Visualização de dados]** Suporte a multiplicação e divisão na configuração de transformação de gráficos ([#6788](https://github.com/nocobase/nocobase/pull/6788)) por @bugstark
- **[Fluxo de trabalho]** Adicionado gerenciamento de categorias de fluxo de trabalho ([#6965](https://github.com/nocobase/nocobase/pull/6965)) por @mytharcher
- **[Gerenciador de e-mail]** suporte a envio em massa por @jiannx

### 🚀 Melhorias

- **[cliente]**

  - melhorados estilos para o componente de filtro de intervalo de datas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - suporte à configuração de links de menu abrirem em nova janela ([#6918](https://github.com/nocobase/nocobase/pull/6918)) por @katherinehhh
  - Corrigido problema onde controles de formulário ocultos capturavam a tecla Tab, melhorando significativamente a eficiência na operação do formulário ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obrigatórios antes de exibir diálogo de confirmação ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
- **[Formulários públicos]** Suporte ao uso de parâmetro de URL como variável ([#6973](https://github.com/nocobase/nocobase/pull/6973)) por @mytharcher
- **[Ação: Importar registros Pro]** Otimizado desempenho de importação xlsx por @aaaaaajie
- **[Impressão de modelo]** Adicionados mais logs. por @sheldon66
- **[Autenticação: OIDC]** Ignorar maiúsculas/minúsculas ao corresponder usuário por e-mail por @2013xile
- **[Fluxo de trabalho: Aprovação]** Importar coleções de fluxo de trabalho do plugin de fluxo de trabalho para evitar duplicação por @mytharcher
- **[Gerenciador de e-mail]** completada função de envio em massa por @jiannx

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido campos não sendo exibidos em modelos de bloco causados por requisições de API duplicadas ([#6957](https://github.com/nocobase/nocobase/pull/6957)) por @zhangzhonghe
  - Corrigido problema onde blocos criados em pop-ups tinham coleção incorreta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe
  - Corrigido problema onde valores de campo de texto de linha única eram exibidos como um array no modo de leitura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe
  - Corrigida a ordem dos campos na lista suspensa do botão de filtro ([#6962](https://github.com/nocobase/nocobase/pull/6962)) por @zhangzhonghe
  - Campos e ações só entram em vigor após atualizar a página ([#6977](https://github.com/nocobase/nocobase/pull/6977)) por @zhangzhonghe
  - Corrigido problema onde a opção 'Conteúdo excedente com reticências' era ineficaz para campos de relação ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe
  - problema onde o pop-up do campo de associação de seleção fechava na primeira entrada ao adicionar novos dados ([#6971](https://github.com/nocobase/nocobase/pull/6971)) por @katherinehhh
  - campo de associação em subtabela disparando requisição quando variável de iteração com valor vazio ([#6969](https://github.com/nocobase/nocobase/pull/6969)) por @katherinehhh
  - dados de regras de validação de formulário perdidos ao recolher painel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) por @katherinehhh
  - Corrigido problema onde valores padrão do formulário de filtro são inválidos em subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe
  - i18n do componente de atribuição de campo não funcionando ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - impossível expandir campos de coleção de associação de fontes de dados externas no escopo da tabela de dados de função ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh
  - seletor de data não atualizado após alternar de "está entre" para "é" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) por @katherinehhh
  - variável de vinculação de subtabela busca dados de associação ao limpar em vez de usar o valor do formulário ([#6963](https://github.com/nocobase/nocobase/pull/6963)) por @katherinehhh
  - valores selecionados são redefinidos ao atualizar opções de menu suspenso de múltipla escolha via regras de vinculação ([#6953](https://github.com/nocobase/nocobase/pull/6953)) por @katherinehhh
  - Posição de destaque incorreta ao arrastar linhas da tabela ([#6952](https://github.com/nocobase/nocobase/pull/6952)) por @chenos
  - configuração de visibilidade de dois-pontos no rótulo do formulário não funcionando ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - paginar dados suspensos do campo de associação com tamanho de página de 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) por @katherinehhh
  - Corrigido problema com o botão de copiar no pop-up de erro copiando como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - Não é possível selecionar variáveis ao definir valores padrão para campos de associação ([#6974](https://github.com/nocobase/nocobase/pull/6974)) por @zhangzhonghe
  - Redimensionamento de bloco por arrasto não funcionando ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
- **[Fluxo de trabalho: Nó manual]** Corrigido inicializador lançando erro ao usar fonte de dados externa ([#6983](https://github.com/nocobase/nocobase/pull/6983)) por @mytharcher
- **[Autenticação]** Problema de desempenho causado pela limpeza de tokens expirados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile
- **[Gerenciador de arquivos]** Corrigida configuração de timeout do Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher
- **[Fluxo de trabalho]** Corrigido erro lançado ao filtrar fluxos de trabalho ([#6978](https://github.com/nocobase/nocobase/pull/6978)) por @mytharcher
- **[Editor de tema]** Ocultar opção de alternância de tema e corrigir estilo do pop-up ([#6964](https://github.com/nocobase/nocobase/pull/6964)) por @zhangzhonghe
- **[Campo de coleção: Markdown(Vditor)]** problema de largura do componente de campo markdown-vditor após aumentar e diminuir zoom ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido inicializador para bancada de trabalho perdido por @mytharcher
- **[Autenticação: OIDC]** Texto do botão de login não sendo localizado por @2013xile
- **[Fluxo de trabalho: Aprovação]** Corrigido erro quando a consulta de escopo dos aprovadores usa condição de associação por @mytharcher
