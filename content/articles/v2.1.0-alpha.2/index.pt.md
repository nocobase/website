---
title: "NocoBase v2.1.0-alpha.2: Adicionar controle ACL para APIs de aprovação"
description: "Nota de lançamento da v2.1.0-alpha.2"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Aprovação]** Adicionar controle ACL para APIs de aprovação por @mytharcher
- **[Auth: DingTalk]** Permite vincular usuário com `unionId` por @2013xile

### 🚀 Melhorias

- **[IA: Base de conhecimento]** Saída de build otimizada para reduzir o tamanho do pacote do plugin-ai-knowledge-base. por @cgyrock
- **[Multi-espaço]** Controle de permissão multi-espaço acessa ACL por @jiannx
- **[Ação: Exportar registros Pro]** Melhorar o escopo de dados da ação de exportação com base em registros selecionados ou filtros de recurso por @katherinehhh
- **[Workflow: Aprovação]**

  - Remover suporte para campos JS por @zhangzhonghe
  - Simplificar parâmetros na consulta e melhorar o desempenho por @mytharcher
  - Implementar controle de acesso para APIs para evitar operações de dados não autorizadas por @mytharcher
  - Adicionar lógica de reparo para públicos sincronizados após migração por @mytharcher
- **[Auth: DingTalk]** Usar `userid` como chave padrão para associação de usuário, mantendo a compatibilidade com autenticadores existentes que dependem de mobile por @2013xile

### 🐛 Correções de Bugs

- **[Multi-espaço]**

  - adicionar script de migração para remover x-ready-pretty no campo de espaço por @jiannx
  - Espaço relacionado ao adicionar dados associados por @jiannx
  - Cor do seletor de espaço segue o tema por @jiannx
  - remover o atributo read-pretty para o campo de espaço por @jiannx
- **[Componente de campo: máscara]** Corrigir um problema onde o popup de configurações do campo de máscara não conseguia carregar todas as funções de usuário corretamente. por @gchust
- **[Ação: Importar registros Pro]**

  - Corrigir o problema onde o workflow acionado por importação assíncrona atrasava para executar por @mytharcher
  - Corrigir números de contagem no resultado da importação e tradução de mensagens por @mytharcher
- **[IA: Base de conhecimento]** Corrigir o problema onde o sistema não consegue iniciar após o build por @cgyrock
- **[Fonte de dados: API REST]** Adicionar tolerância a falhas para o contexto da requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher
- **[Workflow: Evento de ação personalizada]** Corrigir o problema onde parâmetros e payload estão incorretos ao acionar workflow personalizado por @mytharcher
- **[Ação: Exportar registros Pro]** Corrigir erro quando sub-aplicações executam tarefas assíncronas de importação/exportação enquanto a aplicação principal não tem o plugin import/export pro habilitado por @cgyrock
- **[Workflow: Webhook]**

  - Corrigir o problema onde erro 404 é lançado ao postar para URL de webhook em sub-app por @mytharcher
  - Corrigir o problema onde dados do corpo estão ausentes quando a análise do corpo não está configurada por @mytharcher
- **[Workflow: Subfluxo]** Corrigir caminho da rota do link do workflow por @mytharcher
- **[Impressão de modelo]**

  - corrigir problema de exibição da lista de campos na configuração da ação de impressão de modelo por @katherinehhh
  - corrigir campos com a mesma chave levando a erros de renderização por @jiannx
  - Corrigir problema de pop-up de configuração de modelo obscurecido por @zhangzhonghe
  - remover botões de rodapé da configuração do modelo de impressão por @katherinehhh
  - Corrigida lógica incorreta de permissão do botão de impressão quando as funções eram unidas. por @jiannx
  - suportar campo de espaço por @jiannx
  - exibir campos de espaço na versão 2.0 por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir o problema onde o modo de renomeação de arquivos não funciona por @mytharcher
- **[Visualização de dados: ECharts]** Corrigir erro de ortografia do ECharts por @heziqiang
- **[Workflow: Aprovação]**

  - Corrigir o problema onde erro é lançado ao aprovar registro excluído por @mytharcher
  - Corrigir erro lançado ao executar no modo antes de salvar por @mytharcher
  - Corrigir o problema onde dados de aprovação não aparecem no popup de detalhes do registro se o modo do workflow estiver definido como "Antes de salvar" por @mytharcher
  - Adicionar tolerância a falhas no workflow excluído, para evitar erro de carregamento na lista de tarefas por @mytharcher
  - Corrigir o problema onde valores estão ausentes no popup de detalhes de "Minha aplicação" por @mytharcher
  - Corrigir o problema onde erro é lançado no popup de registro de aprovação 1.x por @mytharcher
  - Corrigir problema de desempenho causado pelo campo JSON no carregamento de lista (MySQL) por @mytharcher
  - Corrigir id incorreto para carregar registro de detalhes por @mytharcher
  - Corrigir o problema onde concorrência faz a execução ser retomada repetidamente por @mytharcher
  - Corrigir erro de build causado por dependências ausentes por @mytharcher
  - Corrigir o problema onde o registro incorreto foi carregado devido a parâmetros errados por @mytharcher
  - Corrigir o problema onde retornar uma aprovação para o nó anterior, mas retornava ao início por @mytharcher
  - Corrigir erro lançado ao adicionar função ao usuário se o workflow de públicos estiver desabilitado por @mytharcher
  - Corrigir bloco de valor não exibido causado pela falta do componente `ValueBlock.Result` por @mytharcher
  - Corrigir o problema onde campos não são exibidos nos cartões de tarefa de aprovação por @zhangzhonghe
  - Corrigir o problema onde campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher
- **[Gerenciador de e-mail]**

  - corrigir cadeia de conversação por @jiannx
  - Corrigir link de resposta do Outlook ocasionalmente desconectado por @jiannx
  - corpo não recolhe quando o texto está selecionado. corrigir falha ao baixar anexo por @jiannx
  - Corrigido o problema de e-mails na mesma caixa de correio entre vários usuários e desempenho otimizado por @jiannx
  - adicionar filtros ao gerenciamento por @jiannx
  - mostrar botão de responder a todos e escopo de dados suporta filtragem de mensagens filhas. por @jiannx
  - Corrigir o problema onde o popup de configuração de e-mail está obscurecido por @zhangzhonghe
- **[WeCom]** Corrigir um problema onde usuários não podem ser registrados automaticamente quando o mobile está ausente por @2013xile
- **[Gerenciador de migração]** Corrigido um possível congelamento de processo causado pelo registro de declarações SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
