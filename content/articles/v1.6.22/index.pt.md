---
title: "NocoBase v1.6.22: Atualização de dependências e remoção do suporte a SQLite"
description: "Nota de lançamento da v1.6.22"
---

### 🚀 Melhorias

- **[create-nocobase-app]** Atualização de dependências e remoção do suporte a SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos

- **[Gerenciador de arquivos]** Exposição da API de utilitários ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher

- **[Workflow]** Adição de tipos de data ao conjunto de tipos de variáveis ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher

### 🐛 Correções de bugs

- **[client]**
  - Problema de dificuldade em excluir ícones da barra de navegação superior no mobile ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe

  - Após conectar por meio de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias ([#6634](https://github.com/nocobase/nocobase/pull/6634)) por @zhangzhonghe

  - Problema de alternância do seletor no campo de data do botão de filtro ([#6695](https://github.com/nocobase/nocobase/pull/6695)) por @katherinehhh

  - Problema do botão de recolher no menu esquerdo ser obscurecido pela janela pop-up do workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe

  - Restrições de opções de ação ausentes ao reabrir regras de vinculação ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh

  - Botão de exportação exibido sem permissão de exportação ([#6689](https://github.com/nocobase/nocobase/pull/6689)) por @katherinehhh

  - Campos obrigatórios ocultos por regras de vinculação não devem afetar o envio do formulário ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe

- **[server]** appVersion gerada incorretamente pelo create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos

- **[build]** Correção de erro lançado no comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher

- **[Workflow]** Correção de erro lançado ao executar evento agendado em subfluxo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Suporte para execução no modo de múltiplos registros por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** Adição da lógica multer para upload no lado do servidor por @mytharcher
