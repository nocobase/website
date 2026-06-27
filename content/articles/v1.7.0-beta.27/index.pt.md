---
title: "NocoBase v1.7.0-beta.27: suporte a variáveis no título e conteúdo da confirmação secundária"
description: "Nota de lançamento da v1.7.0-beta.27"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte a variáveis no título e conteúdo da confirmação secundária ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh

- **[Impressão de modelo]**
  - Suporte para renderização dinâmica de imagens e códigos de barras em modelos de documentos. por @sheldon66

  - Funcionalidade: Suporte a opções `{ label, value }` Select na impressão de modelos. por @sheldon66

- **[Bloco: Árvore]** bloco de árvore de filtro suporta regra de vinculação por @katherinehhh

- **[Visualização de dados: ECharts]** Adicionada configuração "Inverter eixo Y" para gráficos de barras por @2013xile

### 🚀 Melhorias

- **[client]** otimizar estilo do botão de adicionar em subtabela e alinhar paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

- **[Gerenciador de arquivos]** Adicionar opção de timeout OSS com padrão de 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Política de senhas]** Alterar expiração padrão de senha para nunca expirar por @2013xile

### 🐛 Correções de Bugs

- **[database]**
  - Corrigir casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

  - Evitar erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

- **[client]**
  - quando a seleção de variável requer carregamento assíncrono, o último menu selecionado é perdido. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust

  - Corrigir o problema onde subcampos de campo um-para-muitos não podem ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - problema ao configurar regras de vinculação em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - múltiplas mensagens de erro exibidas quando a regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh

- **[Autenticação]** Impedir alteração do nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Ação: Requisição personalizada]** resposta de requisição personalizada definida como variável não exibindo corretamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh
