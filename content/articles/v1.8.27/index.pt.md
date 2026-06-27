---
title: "NocoBase v1.8.27: Suporte para girar imagem durante a visualização"
description: "Nota de lançamento da v1.8.27"
---

### 🚀 Melhorias

- **[client]** Suporte para girar imagem durante a visualização ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher

- **[Workflow]** Separação da lógica relacionada à distribuição em um dispatcher independente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que os submenus da barra lateral não destacavam corretamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu

- **[Workflow: Nó de loop]** Corrigido o problema em que o processo avançava incorretamente para o próximo item mesmo quando as condições do nó de loop não eram satisfeitas ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher

- **[Workflow]**
  - Corrigido o problema de execução duplicada devido ao manuseio inadequado da fila ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher

  - Corrigido o problema em que a condição da lista de workflows estava incorreta ao carregar o contexto de campo associado na configuração do workflow vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher

  - Corrigido o problema em que tarefas agendadas baseadas em campos de data não eram acionadas após o início ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
