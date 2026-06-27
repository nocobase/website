---
title: "NocoBase v2.1.0-alpha.36: Adicionado suporte ao cliente v2 para blocos Markdown"
description: "Nota de lançamento da v2.1.0-alpha.36"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Markdown]** Adicionado suporte a client v2 para blocos Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx

- **[Bloco: Lista]** Blocos de lista agora suportam client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

### 🚀 Melhorias

- **[flow-engine]** Adicionada mensagem de confirmação de alterações não salvas ao fechar a página de configuração do fluxo de eventos com dados não salvos presentes. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

- **[cli]** Melhorada a experiência do prompt da CLI do NocoBase ao migrar fluxos de trabalho de configuração e gerenciamento para o Inquirer, e corrigidos problemas relacionados à instalação, skills e execução no Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos

- **[Gerenciador de fontes de dados]** Otimizada a API de modelagem de dados para suportar criação de coleções de comentários com IA, configuração de campos de relação para fontes de dados externas e definição de regras de validação de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile

- **[Bloco: GridCard]** Plugin de cartão em grade atualizado para suportar client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx

- **[Bloco: iframe]** Adicionado suporte v2 para o bloco iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

### 🐛 Correções de Bugs

- **[client]**
  - Corrigidos campos de relação somente leitura em subtabelas que não apareciam ou não eram clicáveis após atualização. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx

  - Adicionada a configuração "Após envio bem-sucedido" para ações de envio de formulário. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx

- **[client-v2]** Corrigido problema em que a lista de opções do campo de título estava vazia para campos de relação em blocos de tabela ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh

- **[flow-engine]** Corrigidos submenus de campos de relação instáveis em menus de submodelos ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx

- **[Gerenciador de arquivos]** Corrigido upload do gerenciador de arquivos `tx-cos` que estava perdendo metadados de tamanho de arquivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Campo de coleção: Assinatura]** Resolvido problema de exibição da caixa de assinatura em dispositivos móveis por @chenzhizdt
