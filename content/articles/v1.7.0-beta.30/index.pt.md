---
title: "NocoBase v1.7.0-beta.30: Correções de Bugs"
description: "Nota de Lançamento da v1.7.0-beta.30"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - Seletor de tabela no formulário de filtro com estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - Campo de associação múltipla falhou ao enviar ao exibir campos da coleção de associação ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

  - Incapacidade de arrastar outros botões para o botão de duplicação ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh

  - Problema de estilo na barra de paginação de subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

- **[banco de dados]** Corrige associação "pertence a" não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

- **[Campo de coleção: Anexo (URL)]** campos de anexo (URL) não devem permitir configuração de valor em regra de vinculação ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
