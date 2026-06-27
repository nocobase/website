---
title: "NocoBase v1.9.0-beta.16: Suporte ao modo de gatilho \"Antes de salvar dados\""
description: "Nota de lançamento da v1.9.0-beta.16"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Suporte ao modo de gatilho "Antes dos dados serem salvos" por @mytharcher

### 🚀 Melhorias

- **[servidor]** Adicionar log de gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile

- **[Workflow: nó de notificação]** Adicionar opção `ignoreFail` para o nó de notificação, que permite continuar o workflow quando o envio da notificação falha ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigir configuração da regra de vinculação da leitura de código QR no painel de ações ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh

  - Corrigir falha da regra de vinculação do bloco iframe dentro de modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh

- **[banco de dados]** Ignorar sincronização de valor padrão para colunas JSON do MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile

- **[Workflow]**
  - Corrigir o problema em que, no modo de divisão de serviço, o manuseio inadequado da fila de pendências em memória fazia com que alguns workflows não fossem executados ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher

  - Corrigir o valor do status de execução ao criar com adiamento ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher

  - Corrigir o problema em que, após excluir um nó que inicia uma ramificação, a chave do primeiro nó retido dentro da ramificação era alterada incorretamente para um novo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

- **[Controle de acesso]** Corrigir ordem dos middlewares do `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile

- **[Gerenciador de arquivos]** Corrigir o problema de arquivos `.msg` não serem enviados corretamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Workflow: nó manual]** Corrigir o problema em que tarefas manuais desaparecem após o workflow ser desativado ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher

- **[Campo de coleção: divisões administrativas da China]** Falha na importação de dados quando a cidade e a área têm o mesmo nome ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Workflow: Aprovação]**
  - Corrigir o problema de tradução do texto de status nas notificações de conclusão de aprovação, usando o idioma padrão do sistema para tradução quando o usuário não definiu uma preferência de idioma por @mytharcher

  - Corrigir localizações por @mytharcher
