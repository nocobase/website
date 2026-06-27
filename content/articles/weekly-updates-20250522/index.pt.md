---
title: "Atualizações Semanais do NocoBase: Adicionar Suporte para Impressão em Massa na Impressão de Modelos"
description: "As atualizações desta semana incluem: campos de texto de linha única suportam filtragem por múltiplas palavras-chave, adicionar suporte para impressão em massa na impressão de modelos e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Data de lançamento: 2025-05-18*

#### 🚀 Melhorias

- **[Workflow]** Adicionar todas as chaves de localidade en-US que estavam faltando ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

#### 🐛 Correções de Bugs

- **[database]** tratar células de string vazia durante a importação de campo para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[client]**

  - tabela de registro de seleção de associação não filtrou registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - dados de associação não enviados ao expor campos de associação no subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - campos de classificação arrastável não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
- **[Workflow]** Corrigir limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Bloco: Painel de ações]** Ler o nome base da rota do scanner para se adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Workflow: Nó manual]** Corrigir erro de renderização ao mostrar item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Workflow: Aprovação]** Corrigir escopo de destinatários do delegado e adicionar a outros destinatários por @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Data de lançamento: 2025-05-20*

#### 🐛 Correções de Bugs

- **[client]**
  - página não redirecionada corretamente após excluir o último item ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - componente cascata em modal não carregando dados de associação inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Data de lançamento: 2025-05-19*

#### 🎉 Novos Recursos

- **[client]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filtro de múltiplas palavras-chave]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impressão de modelo]** Adicionar suporte para impressão em lote na impressão de modelo. por @sheldon66

#### 🚀 Melhorias

- **[Workflow]** Adicionar todas as chaves de localidade en-US que estavam faltando ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - componente cascata em modal não carregando dados de associação inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - dados de associação não enviados ao expor campos de associação no subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - campos de classificação arrastável não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - variáveis de formulário atual ausentes no escopo de dados da tabela seletora de dados ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - tabela de registro de seleção de associação não filtrou registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
- **[database]** tratar células de string vazia durante a importação de campo para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[Workflow: Nó manual]** Corrigir erro de renderização ao mostrar item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
- **[Bloco: Painel de ações]** Ler o nome base da rota do scanner para se adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
- **[Integração de IA]** Conteúdo não é exibido ao alternar entre as páginas de configuração do serviço LLM e configuração de validação ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Workflow]** Corrigir limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
- **[Workflow: Aprovação]** Corrigir escopo de destinatários do delegado e adicionar a outros destinatários por @mytharcher
- **[Gerenciador de backup]** Corrigir erro de tipo na compilação por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Data de lançamento: 2025-05-21*

#### 🎉 Novos Recursos

- **[client]**

  - Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem ([#6685](https://github.com/nocobase/nocobase/pull/6685)) por @zhangzhonghe
    Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - regra de vinculação de ação suporta variáveis de 'formulário atual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[build]** suportar autorização comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[undefined]** Adicionar o log do plugin de importação por @aaaaaajie
- **[Ação: Importar registros]** Adicionar o log do plugin de importação ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie
- **[plugin-commercial]** suportar comercial por @jiannx
- **[Filtro de múltiplas palavras-chave]** Campos de texto de linha única suportam a inserção de múltiplas palavras-chave para filtragem por @zhangzhonghe
  Referência: [Filtro de múltiplas palavras-chave](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Impressão de modelo]**

  - Adicionar suporte para impressão em lote na impressão de modelo. por @sheldon66
  - Adicionar suporte para impressão em lote na impressão de modelo. por @sheldon66

#### 🚀 Melhorias

- **[undefined]** Construir a imagem docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[client]**

  - Otimizar o problema de páginas ficando cada vez mais lentas com o uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
  - adicionar mais configurações de tamanho integradas para imagem de status de leitura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Workflow]**

  - Adicionar todas as chaves de localidade en-US que estavam faltando ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher
  - Permitir revisão de mais de um rascunho ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher
- **[Campo de coleção: Anexo(URL)]** adicionar mais tamanhos integrados ao campo de URL de anexo para status de leitura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Gerenciador de e-mail]**

  - corrigir erro de sincronização e outros problemas de uso não fáceis por @jiannx
  - adicionar gerenciamento de rascunho, suportar visualização de e-mail por subordinados por @jiannx

#### 🐛 Correções de Bugs

- **[client]**

  - regra de vinculação desabilitada não funcionando para botão de ação ([#6896](https://github.com/nocobase/nocobase/pull/6896)) por @katherinehhh
  - página não redirecionada corretamente após excluir o último item ([#6892](https://github.com/nocobase/nocobase/pull/6892)) por @katherinehhh
  - componente cascata em modal não carregando dados de associação inicialmente ([#6886](https://github.com/nocobase/nocobase/pull/6886)) por @katherinehhh
  - tabela de registro de seleção de associação não filtrou registros já associados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh
  - dados de associação não enviados ao expor campos de associação no subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh
  - variáveis de formulário atual ausentes no escopo de dados da tabela seletora de dados ([#6882](https://github.com/nocobase/nocobase/pull/6882)) por @katherinehhh
  - campos de classificação arrastável não exibindo opções disponíveis corretamente ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh
  - limpar valor do lado direito quando o operador muda na regra de vinculação ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - operador ausente ao alternar em regras de vinculação ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - problema de vinculação de botão no bloco de detalhes ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - avaliação incorreta de operadores para variáveis de data em condições de vinculação ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - Os campos ocultos ainda são exibidos ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
  - incompatibilidade de análise de variável com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - incompatibilidade de análise de variável com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - melhoria no estilo do componente de valor da regra de vinculação ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
- **[database]** tratar células de string vazia durante a importação de campo para evitar erros ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie
- **[build]** corrigir o erro de tempo de execução do cliente no plugin-workflow-javascript, erro de processo indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Gerenciador de arquivos]**

  - Corrigir URL de pré-visualização em arquivos que não são de imagem ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
  - Corrigir tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corrigir criação de registro de arquivo sem permissão de chave estrangeira ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Bloco: Painel de ações]**

  - Ler o nome base da rota do scanner para se adaptar ao ambiente desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66
  - A cor do Painel de ações está incorreta no modo escuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Integração de IA]** Conteúdo não é exibido ao alternar entre as páginas de configuração do serviço LLM e configuração de validação ([#6887](https://github.com/nocobase/nocobase/pull/6887)) por @2013xile
- **[Workflow: Nó manual]**

  - Corrigir caso de teste devido ao plugin removido da lista integrada ([#6895](https://github.com/nocobase/nocobase/pull/6895)) por @mytharcher
  - Corrigir erro de renderização ao mostrar item não processado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher
  - Corrigir contagem de números de estatísticas errada em tarefas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Workflow]**

  - Corrigir limite de pilha funcionando incorretamente para evento de coleção ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher
  - Corrigir navegação de volta não funcionando ao abrir diretamente link popup no centro de tarefas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Visualização de dados]**

  - Blocos de gráfico não são exibidos quando adicionados a popups acionados a partir de ações de nível de bloco ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corrigir erro ao filtrar campos m2m aninhados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Ação: Exportar registros]**

  - melhorar o desempenho ao excluir campos nas configurações de campo de importação/exportação ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corrigido   exportação de valores vazios em associações aninhadas e url de anexo ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Bloco: template]** Após salvar como um template herdado, erro ao abrir o popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Ação: Duplicar registro]** modal fecha no primeiro clique de entrada ao editar dados duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Workflow: kit de teste]** Corrigir casos de teste com falha devido ao plugin de pré-requisito necessário ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Workflow: Evento pós-ação]** Corrigir variável de usuário atuado não acessível no template Hanldebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[plugin-commercial]**

  - corrigir log comercial enviado para crm e tradução de texto por @jiannx
  - 使用原型链实现 withCommercial 函数 por @jiannx
- **[Ação: Exportar registros Pro]**

  - melhorar o desempenho ao excluir campos nas configurações de campo de importação/exportação pro por @katherinehhh
  - Corrigir o erro de exportação de textos longos. por @aaaaaajie
- **[Workflow: Subfluxo]** Corrigir gatilho indefinido causando travamento da página por @mytharcher
- **[Impressão de modelo]**

  - Corrigir problema de formatadores não encontrados. por @sheldon66
  - Corrigir formatador não encontrado por @sheldon66
- **[Armazenamento de arquivos: S3(Pro)]**

  - url de acesso expiração inválida por @jiannx
  - Alterar para usar campo de coleção para localizar armazenamento por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigir contagem de números de estatísticas errada em tarefas por @mytharcher
  - Corrigir escopo de destinatários do delegado e adicionar a outros destinatários por @mytharcher
- **[Gerenciador de e-mail]**

  - corrigir erro de ts por @jiannx
  - api de lista suportar mesclagem de assunto por @jiannx
- **[Gerenciador de backup]** Corrigir erro de tipo na compilação por @mytharcher
