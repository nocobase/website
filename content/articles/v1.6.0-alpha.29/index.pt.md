---
title: "NocoBase v1.6.0-alpha.29: suporte à configuração de permissão para ações"
description: "Nota de lançamento da v1.6.0-alpha.29"
---

### 🎉 Novas Funcionalidades

- **[client]** suporte à configuração de permissão para ações ([#6254](https://github.com/nocobase/nocobase/pull/6254)) por @katherinehhh

- **[Bloco: template]** Adicionado plugin `Bloco: template`, fornecendo suporte a templates para blocos baseados em mecanismo de herança. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust

- **[Workflow: evento de ação personalizada]** ação de gatilho de workflow suporta controle de acesso por @katherinehhh

### 🚀 Melhorias

- **[client]**
  - Atualização da definição de tipos do React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) por @gchust

  - Expansão e melhoria do centro pessoal do usuário ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh

- **[Gerenciador de arquivos]**
  - Aumento do comprimento da URL para 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher

  - Adicionado código backend para gerar URL de pré-visualização de arquivo ([#6281](https://github.com/nocobase/nocobase/pull/6281)) por @jiannx

  - Nomes de arquivos durante o upload mudarão de aleatório para o nome original com um sufixo aleatório. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos

  - Adicionado código backend para gerar URL de pré-visualização de arquivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx

  - Alteração da API de tipo de armazenamento e adição de API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

  - Alteração da API de tipo de armazenamento e adição de API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

- **[Bloco: Painel de ações]** Otimização de estilos mobile ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe

- **[Workflow]** Ocultar ID do nó no cartão do nó na tela do workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher

- **[Armazenamento de arquivos: S3(Pro)]**
  - Ajuste da API de armazenamento com base no repositório principal por @mytharcher

  - Suporte à configuração da opção thumbnailRule por @jiannx

- **[Gerenciador de backup]** Permitir restaurar backup em uma aplicação mesmo que faltem alguns plugins por @gchust

### 🐛 Correções de Bugs

- **[devtools]** Garantir que o cabeçalho X-Forwarded-For seja definido apenas se req.ip não for undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66

- **[client]**
  - Posição incorreta após arrastar o menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe

  - Erro ao criar bloco de comentário sem coleção de comentários ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh

  - Erro ocorre ao clicar no nó do bloco de árvore ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe

  - Após clicar no menu esquerdo, a subpágina é fechada anormalmente ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe

  - Não limpar o valor do campo quando o valor da expressão estiver vazio ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe

  - Componente de campo de texto rico não pode ser completamente limpo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh

  - Incapacidade de mover a página para um grupo ([#6289](https://github.com/nocobase/nocobase/pull/6289)) por @zhangzhonghe

  - Pular erro de autenticação para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66

  - Corrigir arquivo enviado perdido quando um por um ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher

  - Corrigido caractere de tag html no campo de entrada do formulário de configuração do canal de e-mail. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66

  - Corrigir arquivos perdidos após o upload ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher

  - Incompatibilidade de formato do seletor no campo de formulário de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh

  - Mostrar componente `<Variable.TextArea />` corretamente no modo desabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher

- **[create-nocobase-app]** Erro ocorre no cliente web após executar `create-nocobase-app` seguido por `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) por @gchust

- **[auth]** Pular verificação de autenticação do usuário quando o token é chave de API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) por @sheldon66

- **[cli]** Melhoria da lógica interna do comando de upgrade do nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos

- **[Gerenciador de arquivos]**
  - Corrigir migração para coleção herdada ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher

  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher

  - Corrigir tipo da coluna `path` da coleção de arquivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher

  - Atualizar versão do AWS SDK para corrigir bug de upload do MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher

- **[Bloco: template]** Exigir login ao acessar formulário público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust

- **[Controle de acesso]** Registros de dados incorretos ao usar campos muitos-para-muitos como escopo de dados em permissões de coleção ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile

- **[Bloco: Kanban]** Filtragem de dados incorreta no bloco Kanban popup usando variáveis de registro popup ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh

- **[Campo de coleção: Sequência]** Corrigir campo de sequência não desabilitado quando em modo somente leitura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher

- **[Workflow: kit de teste]** Corrigir casos de teste E2E com base em novas funcionalidades ([#6296](https://github.com/nocobase/nocobase/pull/6296)) por @mytharcher

- **[Formulários públicos]** Pular verificação de autenticação no formulário público ([#6284](https://github.com/nocobase/nocobase/pull/6284)) por @chenos

- **[Autenticação]** Remover wrapper NavigateIfNotSignIn desnecessário do AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) por @sheldon66

- **[Workflow]**
  - Corrigir detalhes de estilo na tela do workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher

  - Suporte para acionar workflow ao alterar senha ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher

- **[Workflow: evento de ação personalizada]**
  - Corrigir erro de build por @mytharcher

  - Corrigir casos de teste E2E por @mytharcher

  - Corrigir inicializador de workflow de gatilho por @mytharcher

  - Corrigir erro de build por @mytharcher

- **[Workflow: evento pré-ação]** Corrigir mensagem de erro do nó de mensagem de resposta não exibida por @mytharcher

- **[Workflow: JavaScript]** Suporte para exigir módulos do NocoBase por @mytharcher

- **[Gerenciador de e-mail]** tornar pública a coleção mailmessage e corrigir perda de dados do modal por @jiannx

- **[Armazenamento de arquivos: S3(Pro)]**
  - Atualizar versão do AWS SDK para corrigir bug de upload do MinIO. por @mytharcher

  - definir o valor padrão de forcePathStyleForAccess como virtual por @jiannx

- **[Bloco: formulário de múltiplas etapas]** erro de ordenação de itens após arrastar por @jiannx

- **[Bloco: Árvore]** Erro ocorre ao clicar no nó do bloco de árvore por @zhangzhonghe

- **[Gerenciador de backup]** O ícone de exclusão do diálogo de operação de restauração a partir do local não está funcionando por @gchust

- **[Workflow: Aprovação]**
  - Corrigir migração não executada devido ao número da versão por @mytharcher

  - Corrigir casos de teste E2E com base em novas funcionalidades por @mytharcher
