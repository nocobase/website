---
title: "NocoBase v1.7.0-beta.2: suporte à configuração de opções de campo selecionáveis em regras de vinculação"
description: "Nota de lançamento da v1.7.0-beta.2"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - Bloco de tabela suporta ocultar a coluna de índice (visível por padrão) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) por @katherinehhh

  - Suporte à configuração de opções de campos selecionáveis em regras de vinculação ([#6338](https://github.com/nocobase/nocobase/pull/6338)) por @katherinehhh

  - Suporte à configuração de escopo de data (mín/máx) para campos de tempo em regras de vinculação ([#6356](https://github.com/nocobase/nocobase/pull/6356)) por @katherinehhh

- **[Bloco: Painel de ações]** Suporte à quebra de linha para o título da ação no painel de ações ([#6433](https://github.com/nocobase/nocobase/pull/6433)) por @katherinehhh

### 🐛 Correções de Bugs

- **[client]**
  - Número de página incorreto ao adicionar dados após alteração do tamanho da página na subtabela ([#6437](https://github.com/nocobase/nocobase/pull/6437)) por @katherinehhh

  - O estilo do logotipo está inconsistente com o anterior ([#6444](https://github.com/nocobase/nocobase/pull/6444)) por @zhangzhonghe

  - Alteração no valor do campo de seleção múltipla e perda de opções ao excluir registros da subtabela ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh

  - A seleção de intervalo do campo de data exclui a data máxima ([#6418](https://github.com/nocobase/nocobase/pull/6418)) por @katherinehhh

  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe

  - Dados não atualizados em janelas pop-up abertas através de botões de Link ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe

- **[Ação: Edição em lote]** Corrige o fluxo de trabalho que não pode ser acionado no envio de edição em lote ([#6440](https://github.com/nocobase/nocobase/pull/6440)) por @mytharcher

- **[Visualização de dados]** Campos removidos aparecem ao adicionar campos de filtro personalizados ([#6450](https://github.com/nocobase/nocobase/pull/6450)) por @2013xile

- **[Gerenciador de fontes de dados]** A troca de fonte de dados no gerenciamento de funções não carrega as coleções correspondentes ([#6431](https://github.com/nocobase/nocobase/pull/6431)) por @katherinehhh

- **[Ação: Solicitação personalizada]** Erro de validação de permissão no lado do servidor para solicitação personalizada ([#6438](https://github.com/nocobase/nocobase/pull/6438)) por @katherinehhh

- **[Gerenciador de arquivos]** Corrige alguns problemas do gerenciador de arquivos ([#6436](https://github.com/nocobase/nocobase/pull/6436)) por @mytharcher

- **[Notificação: Mensagem no aplicativo]**
  - Evita que a consulta de configuração de destinatários errados busque todos os usuários ([#6424](https://github.com/nocobase/nocobase/pull/6424)) por @sheldon66

  - Diferencia a cor de fundo da lista de mensagens no aplicativo dos cartões de mensagem para melhorar a hierarquia visual e a legibilidade. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

- **[Fluxo de trabalho: Nó manual]**
  - Altera o limite de versão da migração para `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) por @mytharcher

  - Corrige a migração que perdia o prefixo da tabela e a lógica do esquema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) por @mytharcher
