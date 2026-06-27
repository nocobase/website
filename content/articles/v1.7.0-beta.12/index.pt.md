---
title: "NocoBase v1.7.0-beta.12: Adicionar um callback onScanSuccess"
description: "Nota de lançamento da v1.7.0-beta.12"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Painel de ações]** adiciona um callback onScanSuccess para lidar com escaneamentos bem-sucedidos e sair da interface da câmera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

### 🚀 Melhorias

- **[Gerenciador de tarefas assíncronas]** otimiza botões de importação/exportação no Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos

- **[Ação: Exportar registros Pro]** otimiza botões de importação/exportação no Pro por @katherinehhh

- **[Gerenciador de migração]** permite pular backup e restauração automáticos para migração por @gchust

### 🐛 Correções de Bugs

- **[cliente]** conflito de vinculação entre campos de associação com mesmo nome em diferentes sub-tabelas dentro do mesmo formulário ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh

- **[Calendário]** dados ausentes em datas limite na visualização semanal do calendário ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh

- **[Controle de acesso]** Atribuição incorreta da função atual durante o login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie

- **[Ação: Edição em lote]** Clicar no botão de edição em lote, configurar a janela pop-up e abri-la novamente resulta em janela em branco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

- **[Bloco: Formulário de múltiplas etapas]** corrigido o bug em que a redefinição do formulário era inválida quando o campo estava associado a outro campo por @jiannx

- **[Fluxo de trabalho: Aprovação]** Corrige configuração incorreta do nó de aprovação após alteração do esquema por @mytharcher
