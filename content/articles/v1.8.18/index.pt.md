---
title: "NocoBase v1.8.18: Copiar o ID da instância mais recente a cada vez nas configurações de licença"
description: "Nota de lançamento da v1.8.18"
---

### 🚀 Melhorias

- **[Workflow]** Menu de seleção de nós atualizado para exibir opções em layout de duas colunas, melhorando a densidade de informações e permitindo que os usuários vejam mais opções de uma só vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher

- **[Configurações de licença]** Nas configurações de licença, copie o ID da instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

### 🐛 Correções de Bugs

- **[cliente]**
  - tratar o número 0 como vazio durante a validação de vazio de regra de vínculo ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh

  - Corrigir quebra de linha do texto do botão de link ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher

- **[Mobile]** formato de exibição incorreto do campo de data no mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh

- **[Visualizador de Arquivos do Office]** Corrigir erro ao enviar arquivo para o campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher

- **[Workflow]** Corrigir erro e desaparecimento de dados do formulário ao editar categoria do workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher

- **[Workflow: nó de e-mail]** Corrigir problema onde o nó de e-mail pode não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher

- **[Workflow: Evento de ação personalizada]** Limpar as linhas selecionadas após acionar ações com sucesso em múltiplos registros por @mytharcher

- **[Impressão de modelo]** Impressão de campos de seleção de rádio em múltiplas linhas de dados por @jiannx

- **[Workflow: Aprovação]** Corrigir problema onde o carregamento de dados de fonte de dados externa em registros de aprovação resultava em erro 404 por @mytharcher
