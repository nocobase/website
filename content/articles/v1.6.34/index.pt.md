---
title: "NocoBase v1.6.34: Suporte para definir registros únicos por múltiplos campos ao importar configurações"
description: "Nota de lançamento da v1.6.34"
---

### 🎉 Novas Funcionalidades

- **[Ação: Importar registros Pro]**
  - Suporte para definir registros únicos por múltiplos campos ao configurar importações por @aaaaaajie

  - Suporte para configurações de sobrescrita de células em branco e ignorá-las ao configurar importações por @aaaaaajie

### 🚀 Melhorias

- **[indefinido]** Atualizar versão do Node para 20 no CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Falha na verificação da condição noneOf em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh

  - Configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh

- **[indefinido]** Usar Node 20 devido aos requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher

- **[banco de dados]** Corrigida a geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie

- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie

- **[Gerenciador de fonte de dados]** Resolver problema com a ordenação por arrastar e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos

- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes ao req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos

- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66

- **[Fluxo de trabalho: Evento de ação personalizada]** Evitar erro causado pela ordem de carregamento do plugin por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]**
  - Corrigir URL de pré-visualização e parâmetro de upload por @mytharcher

  - Corrigir parâmetros de upload duplicados por @mytharcher

- **[Bloco: Formulário de múltiplas etapas]** Corrigir tipos por @mytharcher

- **[Fluxo de trabalho: Aprovação]**
  - Corrigir ID de registro incorreto para ViewAction por @mytharcher

  - Corrigir appends e cálculo de dados antes de enviar o processo de aprovação por @mytharcher
