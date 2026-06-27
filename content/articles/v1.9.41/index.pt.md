---
title: "NocoBase v1.9.41: Corrigir caminho de rota do link de fluxo de trabalho"
description: "Nota de lançamento da v1.9.41"
---

### 🚀 Melhorias

- **[client]** Suporte para desabilitar parâmetros de acréscimo redundantes padrão para `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) por @2013xile

### 🐛 Correções de Bugs

- **[Workflow]** Adiciona tolerância a falhas no componente de seleção de registros da coleção, para evitar erro ao excluir uma coleção ([#8528](https://github.com/nocobase/nocobase/pull/8528)) por @mytharcher

- **[Gerenciador de arquivos]** Caminho de arquivo seguro para armazenamento local, para evitar acesso a caminhos fora da raiz do documento ([#8539](https://github.com/nocobase/nocobase/pull/8539)) por @mytharcher

- **[Workflow: Subfluxo]** Corrige o caminho da rota do link do workflow por @mytharcher
