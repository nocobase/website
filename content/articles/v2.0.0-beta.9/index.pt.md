---
title: "NocoBase v2.0.0-beta.9: Melhora o desempenho da renderização da lista do gerenciador de plugins ao alterar para CSS nativo do WebKit para elipse de texto"
description: "Nota de lançamento da v2.0.0-beta.9"
---

### 🚀 Melhorias

- **[cliente]** Melhora o desempenho da renderização da lista do gerenciador de plugins ao alterar para CSS nativo webkit para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Corrige o problema em que a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Fluxo de trabalho]** Corrige o problema em que o ID do esquema não era atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** Corrige o problema em que o modo de renomeação de arquivos não funcionava por @mytharcher

- **[Impressão de modelo]** Corrige o problema de pop-up da configuração do modelo obscurecido por @zhangzhonghe

- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o bloco de valor não era exibido devido à ausência do componente `ValueBlock.Result` por @mytharcher
