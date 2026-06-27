---
title: "NocoBase v1.7.20: Correções de Bugs"
description: "Nota de Lançamento da v1.7.20"
---

### 🐛 Correções de Bugs

- **[cliente]**
  - Após alterações em campos, escopos de dados que dependem deste campo devem limpar automaticamente os valores selecionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe

  - Corrige o problema em que a definição da largura da coluna da tabela não era efetiva ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe

  - Corrige o problema de erro com formulários de filtro no popup do botão Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe

  - Corrigido um erro que ocorria ao salvar uma relação um-para-um em um campo de configuração. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie

- **[indefinido]** Corrige e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher

- **[Gerenciador de arquivos]**
  - Corrige detecção de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher

  - Corrige erro de build devido a pacote ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher

- **[Formulários públicos]** corrige problema em que o campo Apenas Data falhava ao selecionar data em formulário público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh

- **[Workflow]** Corrige o problema em que múltiplos deslizes para a esquerda eram necessários para retornar à página anterior em dispositivos móveis ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe

- **[Visualização de dados]** Problema de paginação em tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile

- **[Workflow: Aprovação]**
  - Corrige associações não carregadas após retirada por @mytharcher

  - Remove transação de correção de esquema devido a timeout por @mytharcher

  - Corrige erro lançado quando aprovação é excluída por @mytharcher

  - Corrige atualização de associação ao enviar por @mytharcher
