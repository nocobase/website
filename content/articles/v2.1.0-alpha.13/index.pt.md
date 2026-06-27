---
title: "NocoBase v2.1.0-alpha.13: adicionar variáveis js ao fluxo de eventos"
description: "Nota de lançamento da v2.1.0-alpha.13"
---

### 🎉 Novas Funcionalidades

- **[client]** adicionar variáveis js ao fluxo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

### 🚀 Melhorias

- **[client]** suporte para definir estilos de campo através do runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx

- **[flow-engine]** Melhorar a validação de esquema para a api de construção de ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[Workflow: Evento de pré-ação]** Adicionar regras de validação para gatilhos e nós ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher

- **[Workflow]** Adicionar variável para o parâmetro de tamanho da página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Workflow: Webhook]** Adicionar validação para criação de API de gatilho / nó por @mytharcher

- **[Workflow: Subfluxo]**
  - Adicionar validação para criação de API de nó por @mytharcher

  - Adicionar lógica defensiva para evitar travamentos do workflow quando ocorrer uma exceção por @mytharcher

- **[Workflow: Aprovação]** Adicionar validação para API de gatilho / nó por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigida a exceção ao adicionar nós filhos à tabela em árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[server]** Evitar processar mensagens síncronas após o aplicativo ser parado ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

- **[Ação: Exportar registros]** Limitar a configuração de importação e exportação de campos relacionados de múltiplas camadas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx

- **[Visualização de dados]** corrigida a anormalidade nas estatísticas de dados do gráfico da função raiz após ativar o plugin de espaço ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx

- **[Ação: Importar registros]** corrigido o problema de falha na importação após abrir o plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx

- **[Workflow: JavaScript]** Corrigir problemas de segurança ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher

- **[Funcionários de IA]** Ajustar o espaçamento entre os componentes do cartão de ferramentas na Conversa de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock

- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro ao disparar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Ação: Importar registros Pro]** limitar a configuração de importação e exportação de campos relacionados de múltiplas camadas por @jiannx

- **[Gerenciador de e-mail]** Corrigida a assinatura sendo sobrescrita ao usar modelos por @jiannx
