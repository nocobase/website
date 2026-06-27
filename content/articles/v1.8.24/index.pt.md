---
title: "NocoBase v1.8.24: fluxo de trabalho suporta retornar a qualquer nó no processo de aprovação"
description: "Nota de lançamento da v1.8.24"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Suporte para retornar a qualquer nó no processo de aprovação por @mytharcher

### 🚀 Melhorias

- **[servidor]** Uso do logger padrão do sistema para fila de mensagens ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher

- **[cliente]** Remoção do popover de reticências da lista de arquivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher

- **[Workflow]** Otimização do processo de preparação do workflow para suportar o uso de dados de nós pré-carregados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher

- **[Editor de temas]** Adicionado suporte para personalização de cores do menu lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu

- **[Adaptador de fila Redis]** Uso do logger padrão do sistema para o adaptador de fila de mensagens Redis por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido o problema onde o componente Popover estava sendo sobreposto/coberto ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe

  - Verificação incorreta de 'não vazio' para campos numéricos em regras de vinculação ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh

  - Campos select/multiselect/date/richtext em modo somente leitura ainda editáveis em formulário público ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh

- **[Workflow]** Corrigido um erro potencial relacionado ao cache de logs do workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher

- **[Criptografia de requisição HTTP]** Corrigido o problema onde os parâmetros da requisição não suportavam o tipo nativo URLSearchParams por @mytharcher

- **[Fonte de dados: API REST]** Corrigidas as regras de validação de URL da API REST por @katherinehhh

- **[Workflow: Aprovação]** Corrigido o problema onde o texto de status na notificação de conclusão da aprovação não era traduzido por @mytharcher
