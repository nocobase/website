---
title: "NocoBase v1.7.0-alpha.14: suporte à autorização comercial"
description: "Nota de lançamento da v1.7.0-alpha.14"
---

### 🎉 Novas Funcionalidades

- **[client]**

  - Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
    Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Regra de vinculação de ação suporta variáveis do 'formulário atual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[build]** suporta autorização comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[undefined]** Adiciona o log do plugin de importação por @aaaaaajie
- **[Ação: Importar registros]** Adiciona o log do plugin de importação ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie
- **[plugin-commercial]** suporta comercial por @jiannx
- **[Filtro de múltiplas palavras-chave]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impressão de modelo]**

  - Adiciona suporte para impressão em lote na impressão de modelo. por @sheldon66
  - Adiciona suporte para impressão em lote na impressão de modelo. por @sheldon66

### 🚀 Melhorias

- **[undefined]** Construir a imagem docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[client]**

  - Otimiza o problema de páginas ficarem cada vez mais lentas com o uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
  - adiciona mais configurações de tamanho embutidas para imagem de status de leitura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Workflow]**

  - Adiciona todas as chaves de localidade en-US ausentes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher
  - Permite revisar mais de um rascunho ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher
- **[Campo de coleção: Anexo(URL)]** adiciona mais tamanhos embutidos ao campo de URL de anexo para status de leitura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Gerenciador de e-mail]**

  - corrige erro de sincronização e outros problemas de usabilidade por @jiannx
  - adiciona gerenciamento de rascunhos, suporta visualização de e-mails por subordinados por @jiannx

### 🐛 Correções de Bugs

- **[client]**

  - regra de vinculação desabilitada não funciona para botão de ação ([#6896](https://github.com/nocobase/nocobase/pull/6896)) por @katherinehhh
  - página não redirecionada corretamente após excluir o último item ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - componente cascata em modal não carrega dados de associação inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - tabela de registro de seleção de associação não filtrava registro já associado ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - dados de associação não enviados ao expor campos de associação em subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - variáveis do formulário atual ausentes no escopo de dados da tabela seletora de dados ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - campos de ordenação arrastável não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - limpa o valor do lado direito quando o operador muda na regra de vinculação ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - operador ausente ao alternar em regras de vinculação ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - problema de vinculação de botão no bloco de detalhes ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - avaliação incorreta de operadores para variáveis de data em condições de vinculação ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - Os campos ocultos ainda são exibidos ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
  - incompatibilidade de análise de variáveis com dados {{title}} em confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - incompatibilidade de análise de variáveis com dados {{title}} em confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - melhoria no estilo do componente de valor da regra de vinculação ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
- **[database]** lida com células de string vazia durante a importação de campo para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[build]** corrige o erro de tempo de execução do cliente em plugin-workflow-javascript, processo undefine error ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Gerenciador de arquivos]**

  - Corrige URL de pré-visualização em arquivos não-imagem ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
  - Corrige tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corrige criação de registro de arquivo sem permissão de chave estrangeira ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Bloco: Painel de ação]**

  - Lê o basename da rota do scanner para adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
  - A cor do Painel de ação está incorreta no modo escuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Integração de IA]** Conteúdo não é exibido ao alternar entre as páginas de configuração do serviço LLM e configuração de validação ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Workflow: Nó manual]**

  - Corrige caso de teste devido à remoção do plugin da lista embutida ([#6895](https://github.com/nocobase/nocobase/pull/6895)) por @mytharcher
  - Corrige erro de renderização ao mostrar item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
  - Corrige contagem de números de estatísticas errada em tarefas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Workflow]**

  - Corrige limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
  - Corrige navegação de volta não funcionando ao abrir diretamente link popup no centro de tarefas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Visualização de dados]**

  - Blocos de gráfico não são exibidos quando adicionados a popups acionados por ações em nível de bloco ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corrige erro ao filtrar campos m2m aninhados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Ação: Exportar registros]**

  - melhora o desempenho ao excluir campos nas configurações de campo de importação/exportação ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corrigido   exportação de valores vazios em associações aninhadas e url de anexo ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Bloco: template]** Após salvar como um template herdado, erro ao abrir o popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Ação: Duplicar registro]** modal fecha no primeiro clique de entrada ao editar dados duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Workflow: test kit]** Corrige casos de teste com falha devido ao plugin de pré-requisito obrigatório ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Workflow: Evento pós-ação]** Corrige variável de usuário atuado não acessível no template Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[plugin-commercial]**

  - corrige log comercial enviado para crm e tradução de texto por @jiannx
  - 使用原型链实现 withCommercial 函数 por @jiannx
- **[Ação: Exportar registros Pro]**

  - melhora o desempenho ao excluir campos nas configurações de campo do import/export pro por @katherinehhh
  - Corrige o erro de exportação de textos longos. por @aaaaaajie
- **[Workflow: Subfluxo]** Corrige trigger indefinido causando travamento da página por @mytharcher
- **[Impressão de modelo]**

  - Corrige problema de formatadores não encontrados. por @sheldon66
  - Corrige formatador não encontrado por @sheldon66
- **[Armazenamento de arquivos: S3(Pro)]**

  - url de acesso expirado inválido por @jiannx
  - Altera para usar campo de coleção para localizar armazenamento por @mytharcher
- **[Workflow: Aprovação]**

  - Corrige contagem de números de estatísticas errada em tarefas por @mytharcher
  - Corrige escopo de designados de delegado e adiciona a outros designados por @mytharcher
- **[Gerenciador de e-mail]**

  - corrige erro ts por @jiannx
  - api de lista suporta mesclagem de assunto por @jiannx
- **[Gerenciador de backup]** Corrige erro de tipo na construção por @mytharcher
