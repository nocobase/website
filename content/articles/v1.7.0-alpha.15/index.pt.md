---
title: "NocoBase v1.7.0-alpha.15: Suporte a variáveis de agregação personalizadas"
description: "Nota de lançamento da v1.7.0-alpha.15"
---

### 🎉 Novas Funcionalidades

- **[client]** Suporte a variáveis de agregação personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** Suporte a deslocamento personalizado em filtros de campo de data ([#6854](https://github.com/nocobase/nocobase/pull/6854)) por @katherinehhh

- **[Campo de coleção: Código]** Adicionar configurações de altura para o campo do editor de código por @mytharcher

- **[Ação: Importar registros Pro]**
  - Suporte à definição de registros únicos por múltiplos campos ao importar configurações por @aaaaaajie

  - Suporte a configurações para sobrescrever células em branco e ignorá-las ao importar configurações por @aaaaaajie

- **[Variáveis personalizadas]** Suporte a variáveis de agregação personalizadas por @zhangzhonghe
Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gerenciador de e-mail]**
  - suporte a marcar e-mail como tarefa e adicionar nota por @jiannx

  - suporte a rótulos e configurações de combinação por @jiannx

### 🚀 Melhorias

- **[client]** ajustar exibição do conteúdo da opção de filtro de data ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh

- **[undefined]** Atualizar versão do Node para 20 no CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

- **[Calendário]** suporte a botão de atualização configurável no bloco de calendário ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh

- **[Ação: Importar registros]**
  - Otimizar desempenho de importação xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie

  - Otimizar desempenho de importação xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie

- **[Ação: Exportar registros]** Otimização de desempenho para exportação para XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) por @aaaaaajie

- **[Bloco: iframe]** melhorar lógica de atribuição de variáveis de data ([#6828](https://github.com/nocobase/nocobase/pull/6828)) por @katherinehhh

- **[Workflow: Evento de ação personalizada]** Corrigir localidades en-US com base nas chaves zh-CN por @mytharcher

- **[Ação: Exportar registros Pro]** Otimização de desempenho para exportação para XLSX por @aaaaaajie

- **[Workflow: Aprovação]** Suporte para realizar todas as tarefas no centro de tarefas do workflow por @mytharcher

- **[Gerenciador de e-mail]** implementação de esquema seguida de envio de e-mail e suporte a IA por @jiannx

### 🐛 Correções de Bugs

- **[database]** Corrigido problema de geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie

- **[client]**
  - Verificação de condição noneOf falhou em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh

  - Configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh

  - Variáveis de condição aninhadas em regras de vinculação não renderizando corretamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh

  - Análise incorreta de variável de data no limite de intervalo de datas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh

  - Verificação incorreta de valor vazio para campo de associação toMany em regra de vinculação ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh

  - Erro de renderização causado por formato de estilo inválido ao adicionar campo de associação ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh

  - Variável de objeto atual ausente em regra de vinculação dentro de subtabela ([#6907](https://github.com/nocobase/nocobase/pull/6907)) por @katherinehhh

- **[undefined]** Usar Node 20 devido a requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher

- **[Gerenciador de fonte de dados]** Resolver problema com ordenação por arrastar e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos

- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes em req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos

- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66

- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie

- **[Campo de coleção: Markdown(Vditor)]** campo markdown (Vditor) não se adaptando ao tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh

- **[Coleção: Árvore]** Evitar atualizações incorretas de prefixos de caminho semelhantes durante atualizações de caminho ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile

- **[Workflow: nó de e-mail]** Tratar campo 'to' indefinido e melhorar processamento de destinatários de e-mail. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66

- **[Verificação]** Corrigir nomenclatura incorreta em inglês: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) por @2013xile

- **[Gerenciador de arquivos]**
  - Corrigir injeção de coleção do cliente e parâmetro de upload ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher

  - Corrigir regra de correspondência de pré-visualização ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher

- **[Workflow: Evento de ação personalizada]**
  - Evitar erro causado pela ordem de carregamento do plugin por @mytharcher

  - Corrigir manipulador de erro que não podia ser correspondido por classe por @mytharcher

  - Corrigir botão executando incorretamente após alguns cliques por @mytharcher

- **[Filtro de múltiplas palavras-chave]** Remover espaços em branco de ambos os lados de cada palavra-chave por @zhangzhonghe

- **[Autenticação de dois fatores (2FA)]** Exigir que um verificador seja configurado ao ativar 2FA por @2013xile

- **[Armazenamento de arquivos: S3(Pro)]**
  - Corrigir parâmetros de upload duplicados por @mytharcher

  - Corrigir URL de pré-visualização e parâmetro de upload por @mytharcher

- **[Impressão de modelo]** Melhorar lógica hasChildren em useFieldsTree para incluir verificação de enum uiSchema. por @sheldon66

- **[Bloco: Formulário de múltiplas etapas]** Corrigir tipos por @mytharcher

- **[Workflow: Aprovação]**
  - Corrigir localidade por @mytharcher

  - Corrigir appends e cálculo de dados antes de enviar processo de aprovação por @mytharcher

  - Corrigir cálculo de appends de associação por @mytharcher

  - Corrigir ID de registro incorreto para ViewAction por @mytharcher

- **[Gerenciador de e-mail]**
  - corrigir permissão da API das coleções mailMessageNotes e mailMessageLabels por @jiannx

  - corrigir erro do modal de adicionar nota por @jiannx

  - corrigir: remover coluna de ação por @jiannx
