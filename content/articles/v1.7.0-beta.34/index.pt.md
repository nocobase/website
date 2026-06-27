---
title: "NocoBase v1.7.0-beta.34: Melhoria da Funcionalidade de Importação"
description: "Nota de lançamento da v1.7.0-beta.34"
---

### 🎉 Novas Funcionalidades

- **[indefinido]** Novo suporte para Gitpod permite iniciar o ambiente de desenvolvimento com um clique e começar a desenvolver rapidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
- **[Ação: Importar registros Pro]**

  - Suporte para definir registros únicos por múltiplos campos ao importar configurações por @aaaaaajie
  - Suporte para configurações de sobrescrita de células vazias e ignorá-las ao importar configurações por @aaaaaajie
- **[Campo de coleção: Código]** Adicionar configuração de altura para o campo do editor de código por @mytharcher
- **[Gerenciador de e-mail]**

  - suporte para marcar e-mail como a fazer e adicionar nota por @jiannx
  - suporte para rótulos e configurações combinadas por @jiannx

### 🚀 Melhorias

- **[cliente]**

  - melhorar estilos para o componente de filtro de intervalo de datas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - Corrigir problema onde controles de formulário ocultos capturavam a tecla Tab, melhorando significativamente a eficiência da operação do formulário ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obrigatórios antes de exibir a caixa de diálogo de confirmação ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
  - ajustar a exibição do conteúdo da opção de filtro de data ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[indefinido]** Atualizar versão do Node para 20 no CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - configuração de visibilidade dos dois-pontos do rótulo do formulário não funcionando ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - Redimensionamento de bloco por arrasto não funcionando ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - i18n do componente de atribuição de campo não funcionando ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - verificação de condição noneOf falhou em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - variáveis de condição aninhadas em regras de vinculação não renderizando corretamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - Corrigir o problema com o botão de cópia no pop-up de erro copiando como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - análise incorreta de variável de data no limite de intervalo de datas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
- **[banco de dados]** Corrigida a geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[indefinido]** Usar Node 20 devido aos requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** Problema de largura do componente do campo markdown-vditor após zoom in e out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes ao req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar os dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Gerenciador de fonte de dados]** Resolver problema com a ordenação por arrasto e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Fluxo de trabalho: Evento de ação personalizada]** Evitar erro causado pela ordem de carregamento do plugin por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigir parâmetros de upload duplicados por @mytharcher
  - Corrigir URL de visualização e parâmetro de upload por @mytharcher
- **[Bloco: Formulário de várias etapas]** Corrigir tipos por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir ID de registro incorreto para ViewAction por @mytharcher
  - Corrigir localidade por @mytharcher
  - Corrigir appends e cálculo de dados antes de enviar o processo de aprovação por @mytharcher
- **[Gerenciador de e-mail]**

  - correção: remover coluna de ação por @jiannx
  - correção de erro no modal de adicionar nota por @jiannx
  - correção das permissões da API das coleções mailMessageNotes e mailMessageLabels por @jiannx
