---
title: "NocoBase v1.9.36: Melhora o desempenho da renderização da lista do gerenciador de plugins ao alterar para CSS nativo do WebKit para elipse de texto"
description: "Nota de lançamento da v1.9.36"
---

### 🚀 Melhorias

- **[client]** Melhora o desempenho da renderização da lista do gerenciador de plugins alterando para CSS nativo do webkit para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Corrige o problema em que a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]** Corrige o problema em que o modo de renomeação de arquivos não funcionava por @mytharcher

- **[Fluxo de trabalho: Aprovação]** Corrige o problema em que o bloco de valor não era exibido devido à ausência do componente `ValueBlock.Result` por @mytharcher
