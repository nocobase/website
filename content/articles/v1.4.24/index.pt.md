---
title: "NocoBase v1.4.24: componente datePicker com entrada somente leitura"
description: "Nota de lançamento da v1.4.24"
---

### 🚀 Melhorias

- **[client]** componente datePicker com entrada somente leitura ([#6061](https://github.com/nocobase/nocobase/pull/6061)) por @Cyx649312038

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido carregamento incorreto de campos de associação modal em bloco de tabela ([#6060](https://github.com/nocobase/nocobase/pull/6060)) por @katherinehhh

  - Corrigido problema de estilo em sub-tabela no bloco de detalhes ([#6049](https://github.com/nocobase/nocobase/pull/6049)) por @katherinehhh

  - Corrigido formato do campo numérico no modo readPretty afetando o modo de edição ([#6050](https://github.com/nocobase/nocobase/pull/6050)) por @katherinehhh

  - Corrigido problema de estilo no cabeçalho da tabela no ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) por @katherinehhh

- **[database]** corrigido problema ao inicializar campo de ordenação com chave primária ([#6059](https://github.com/nocobase/nocobase/pull/6059)) por @chareice

- **[Visualização de dados]** Removida a cláusula `LIMIT` ao usar funções agregadas sem definir dimensões em consultas de gráficos ([#6062](https://github.com/nocobase/nocobase/pull/6062)) por @2013xile

- **[Gerenciador de backup]** Corrigido erro de download de backup para usuários logados apenas em sub-aplicativo por @gchust
