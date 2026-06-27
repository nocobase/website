---
title: "NocoBase v1.8.0-beta.9: Ocultar automaticamente a barra de ações do bloco de cartão de grade quando vazia"
description: "Nota de lançamento da v1.8.0-beta.9"
---

### 🚀 Melhorias

- **[cliente]**
  - Oculta automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe

  - A largura do contêiner do logotipo se adapta ao tipo de conteúdo (168px fixo para imagens, largura automática para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Verificação]** Remove as opções de verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**
  - Mensagem de validação obrigatória na subtabela persiste ao trocar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh

  - Condição de estilo nos campos de coluna da subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh

  - Ponto decimal perdido após alternar o componente de valor de máscara para inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Variáveis de parâmetro de consulta de URL não funcionando no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh

  - Filtragem através de campos de coleção de relacionamento em formulários de filtro é inválida ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe

  - Renderização incorreta de Markdown (Vditor) na subtabela ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

- **[banco de dados]** Suporte a atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos

- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) gera um erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile

- **[Campo de coleção: Sequência]** Corrige o cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher

- **[Formulários públicos]** Formulários públicos: Corrige problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
