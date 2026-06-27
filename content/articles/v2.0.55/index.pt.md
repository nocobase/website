---
title: "NocoBase v2.0.55: Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial"
description: "Nota de lançamento da v2.0.55"
---

### 🚀 Melhorias

- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigido um problema onde variáveis de registro do pop-up atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

  - Corrigido um problema onde valores de campos JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

- **[Gerenciador de arquivos]** Corrigido uploads do gerenciador de arquivos `tx-cos` com metadados de tamanho de arquivo ausentes. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Fonte de dados: Principal]** Corrigido o problema onde as opções de campo são gravadas no esquema após a sincronização de campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Cliente WEB]** Limpar dados dos blocos após remover menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

- **[Funcionários de IA]** Corrigido erros de leitura de arquivos OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Ação: Importar registros]** Corrigido o problema onde o registro importado em campos do tipo data mostrava a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Ação: Exportar registros Pro]** Corrigido o problema onde um erro era lançado ao exportar anexo do campo de URL de anexo por @mytharcher

- **[Ação: Importar registros Pro]** corrigido o tratamento de fuso horário para importações xlsx pro por @mytharcher
