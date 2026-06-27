---
title: "NocoBase v1.6.21: Adicionar API de atraso para cenários que abrem sem atraso"
description: "Nota de lançamento da v1.6.21"
---

### 🚀 Melhorias

- **[client]** Adiciona API de atraso para cenários que abrem sem atraso ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

- **[create-nocobase-app]** Atualiza algumas dependências para as versões mais recentes ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

### 🐛 Correções de Bugs

- **[client]**
  - Corrige erro ao passar o mouse sobre bloco de template referenciado na configuração do nó de aprovação ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - Campo de associação personalizado não exibindo configurações do componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - Corrige localidade para o componente de upload ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - Carregamento preguiçoso de componente de interface ausente causa erro de renderização ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Adiciona componente nativo Password ao HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

  - Campos herdados exibidos na lista de atribuição de campos da coleção atual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh

- **[database]** Corrige erro de build no CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

- **[build]** Saída de build incorreta quando plugin depende de algumas bibliotecas AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust

- **[Ação: Importar registros]** Corrige erro ao importar campo de hora xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Workflow: Nó manual]** Corrige constante de status de tarefa manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Bloco: iframe]** Barra de rolagem vertical aparece quando bloco iframe está configurado com altura total ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh

- **[Workflow: Evento de ação personalizada]** Corrige casos de teste por @mytharcher

- **[Gerenciador de backup]** Erro de tempo limite ao tentar restaurar um backup não criptografado com senha por @gchust
