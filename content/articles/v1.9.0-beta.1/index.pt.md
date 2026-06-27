---
title: "NocoBase v1.9.0-beta.1: Adicionar fila de eventos para processar mensagens na fila"
description: "Nota de lançamento da v1.9.0-beta.1"
---

### 🎉 Novas Funcionalidades

- **[servidor]** Adicionar fila de eventos para processar mensagens em fila ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

### 🚀 Melhorias

- **[Workflow]** Mover componentes comuns para o plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Após alterações de campo, escopos de dados que dependem deste campo devem limpar automaticamente os valores selecionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe

  - Corrigir o problema onde definir a largura da coluna da tabela é ineficaz ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe

  - Corrigir o problema de erro com formulários de filtro no popup do botão Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe

  - Corrigido um erro que ocorria ao salvar uma relação um-para-um em um campo de configuração. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie

- **[indefinido]** Corrigir e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher

- **[Calendário]** definir o dia de início da semana padrão como 'segunda-feira' no bloco de calendário ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh

- **[Workflow]** Corrigir o problema onde são necessários múltiplos deslizes para a esquerda para retornar à página anterior em dispositivos móveis ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe

- **[Gerenciador de arquivos]**
  - Corrigir erro de build devido ao pacote ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher

  - Corrigir detecção de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher

- **[Workflow: Nó manual]** Corrigir importação incorreta de variável ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher

- **[Formulários públicos]** corrigir problema onde o campo Apenas Data falhava ao selecionar data no formulário público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh

- **[Workflow: Aprovação]**
  - Remover transação de correção de esquema devido a timeout por @mytharcher

  - Corrigir associações não carregadas após retirada por @mytharcher

  - Corrigir erro lançado quando aprovação é excluída por @mytharcher

  - Corrigir atualização de associação ao enviar por @mytharcher
