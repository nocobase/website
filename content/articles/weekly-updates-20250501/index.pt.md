---
title: "Atualizações Semanais do NocoBase: Blocos Suportam Regras de Vinculação"
description: "As atualizações desta semana incluem: blocos suportam regras de vinculação para exibição dinâmica, suporte a variável de resposta na mensagem de sucesso da ação de solicitação personalizada e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Data de lançamento: 2025-04-23*

#### 🚀 Melhorias

- **[cli]** Otimizar a lógica interna do comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos
- **[Impressão de modelo]** Substituído o controle de ação da fonte de dados pelo controle de acesso baseado em função do cliente. por @sheldon66

#### 🐛 Correções de Bugs

- **[cli]** Atualizar automaticamente o package.json na atualização ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos
- **[cliente]**

  - filtro ausente para dados já associados ao adicionar dados de associação ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh
  - regra de vinculação do botão 'Adicionar Filho' da tabela em árvore faltando 'registro atual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh
- **[Ação: Importar registros]** Corrigir as exceções de importação e exportação que ocorrem ao definir permissões de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie
- **[Bloco: Gantt]** Bloco de gráfico de Gantt sobrepondo meses no cabeçalho do calendário para a visualização mensal ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh
- **[Ação: Exportar registros Pro]**

  - botão de exportação pro perdendo parâmetros de filtro após ordenar coluna da tabela por @katherinehhh
  - Corrigir as exceções de importação e exportação que ocorrem ao definir permissões de campo. por @aaaaaajie
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir dados de resposta do arquivo enviado por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir pré-carregamento de campos de associação para registros por @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Data de lançamento: 2025-04-24*

#### 🚀 Melhorias

- **[cliente]** Ajustar mensagem de upload ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - apenas a ação de exportação na coleção de visualização é suportada quando writableView é falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - criação inesperada de dados de associação ao exibir campo de associação em sub-formulário/sub-tabela no formulário de criação ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh
  - Dados incorretos recuperados para campos de array muitos-para-muitos de tabelas relacionadas em formulários ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Data de lançamento: 2025-04-29*

#### 🎉 Novos Recursos

- **[indefinido]** adicionar ci de publicação para kit de licença ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx
- **[Visualização de dados: ECharts]** Adicionar configuração "Inverter eixo Y" para gráficos de barras por @2013xile

#### 🚀 Melhorias

- **[utils]** Aumentar a altura da lista de campos do botão de filtro e ordenar/categorizar os campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe
- **[cliente]** otimizar estilo do botão adicionar subtabela e alinhar paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
- **[Gerenciador de arquivos]** Adicionar opção de tempo limite OSS padrão para 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Política de senha]** Alterar expiração padrão da senha para nunca expirar por @2013xile
- **[WeCom]** Priorizar e-mail corporativo sobre e-mail pessoal ao atualizar o e-mail do usuário por @2013xile

#### 🐛 Correções de Bugs

- **[cliente]**

  - No bloco de recolhimento, clicar no botão limpar na caixa de pesquisa do campo de relacionamento não deve excluir o intervalo de dados ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - Proibir mover menus antes ou depois das abas da página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe
  - Bloco de tabela exibe dados duplicados ao filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - No formulário de filtro, alternar o operador do campo e depois atualizar a página causa um erro ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
- **[banco de dados]**

  - Evitar erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
  - adicionar unavailableActions à coleção sql e coleção de visualização ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[create-nocobase-app]** Corrigir temporariamente problema do mariadb fazendo downgrade para 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[Autenticação]** Não permitir alterar o nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Impressão de modelo]** Correção: Lógica de validação de permissão correta para evitar ações não autorizadas. por @sheldon66
- **[Armazenamento de arquivos: S3(Pro)]** expiração da url de acesso inválida por @jiannx
- **[Bloco: Árvore]** Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias por @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Data de lançamento: 2025-04-24*

#### 🚀 Melhorias

- **[cli]** Otimizar a lógica interna do comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos

#### 🐛 Correções de Bugs

- **[cliente]** problema de exibição com regras de vinculação em dados de associação multinível ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Data de lançamento: 2025-04-24*

#### 🎉 Novos Recursos

- **[Ação: Solicitação personalizada]** suportar variável de resposta na mensagem de sucesso da ação de solicitação personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh

#### 🚀 Melhorias

- **[cliente]** Ajustar mensagem de upload ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - Dados incorretos recuperados para campos de array muitos-para-muitos de tabelas relacionadas em formulários ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile
  - apenas a ação de exportação na coleção de visualização é suportada quando writableView é falso ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - criação inesperada de dados de associação ao exibir campo de associação em sub-formulário/sub-tabela no formulário de criação ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Data de lançamento: 2025-04-25*

#### 🎉 Novos Recursos

- **[cliente]** suportar configuração de regras de vinculação em blocos para mostrar/esconder dinamicamente ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh

#### 🚀 Melhorias

- **[cliente]** manter funcionalidade de modelo de referência ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust
- **[Visualização de dados]** Adicionar API estendida para configuração de interface de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile

#### 🐛 Correções de Bugs

- **[create-nocobase-app]** Corrigir temporariamente problema do mariadb fazendo downgrade para 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[banco de dados]** adicionar unavailableActions à coleção sql e coleção de visualização ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[cliente]** problema do operador do parâmetro de consulta url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh
- **[Bloco: Painel de ação]** ícone do painel de ação ausente quando apenas ícone está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh
- **[Fluxo de trabalho: nó de cálculo de data]** Corrigir erro em navegador legado sem API `Intl` por @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Data de lançamento: 2025-04-28*

#### 🎉 Novos Recursos

- **[Gerenciador de arquivos]** Recurso: Adicionar API `getFileStream` para suporte a streaming de arquivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66

#### 🚀 Melhorias

- **[cliente]** mostrar título do botão com dica de ferramenta ao passar o mouse sobre o ícone da ação ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh
- **[WeCom]** Priorizar e-mail corporativo sobre e-mail pessoal ao atualizar o e-mail do usuário por @2013xile

#### 🐛 Correções de Bugs

- **[Armazenamento de arquivos: S3(Pro)]** expiração da url de acesso inválida por @jiannx
- **[Impressão de modelo]** Correção: Lógica de validação de permissão correta para evitar ações não autorizadas. por @sheldon66
- **[Bloco: Árvore]** Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias por @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Data de lançamento: 2025-04-28*

#### 🎉 Novos Recursos

- **[indefinido]** adicionar ci de publicação para kit de licença ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

#### 🚀 Melhorias

- **[utils]** Aumentar a altura da lista de campos do botão de filtro e ordenar/categorizar os campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[cliente]**
  - No bloco de recolhimento, clicar no botão limpar na caixa de pesquisa do campo de relacionamento não deve excluir o intervalo de dados ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - No formulário de filtro, alternar o operador do campo e depois atualizar a página causa um erro ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
  - Bloco de tabela exibe dados duplicados ao filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - problema de alinhamento do botão adicionar registro filho na tabela em árvore ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh
  - Proibir mover menus antes ou depois das abas da página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Data de lançamento: 2025-04-24*

#### 🚀 Melhorias

- **[cli]** Otimizar a lógica interna do comando `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) por @chenos
- **[create-nocobase-app]** Atualizar dependências e remover suporte SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) por @chenos
- **[Mobile]** Otimizar a velocidade de abertura do popup do seletor de data móvel ([#6735](https://github.com/nocobase/nocobase/pull/6735)) por @zhangzhonghe
- **[Bloco: modelo]** suportar converter bloco de modelo em bloco normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) por @gchust
- **[Gerenciador de arquivos]** Expor API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) por @mytharcher
- **[Editor de tema]** Permitir definir largura da barra lateral na configuração do tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) por @chenos
- **[Fluxo de trabalho]** Adicionar tipos de data ao conjunto de tipos de variáveis ([#6717](https://github.com/nocobase/nocobase/pull/6717)) por @mytharcher
- **[Impressão de modelo]** Substituído o controle de ação da fonte de dados pelo controle de acesso baseado em função do cliente. por @sheldon66

#### 🐛 Correções de Bugs

- **[cliente]**

  - problema de exibição com regras de vinculação em dados de associação multinível ([#6755](https://github.com/nocobase/nocobase/pull/6755)) por @katherinehhh
  - regra de vinculação do botão 'Adicionar Filho' da tabela em árvore faltando 'registro atual' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) por @katherinehhh
  - Problema com a atualização de blocos de dados após envio bem-sucedido ([#6748](https://github.com/nocobase/nocobase/pull/6748)) por @zhangzhonghe
  - O problema do botão de recolhimento no menu esquerdo ser obscurecido pela janela pop-up do fluxo de trabalho ([#6733](https://github.com/nocobase/nocobase/pull/6733)) por @zhangzhonghe
  - O problema dos ícones da barra de navegação superior móvel serem difíceis de excluir ([#6734](https://github.com/nocobase/nocobase/pull/6734)) por @zhangzhonghe
  - exibição de valor incorreta para "Habilitar coluna de índice" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) por @katherinehhh
  - condição de campo de data e hora não funcionando em regras de vinculação ([#6728](https://github.com/nocobase/nocobase/pull/6728)) por @katherinehhh
  - restrições de opção de ação ausentes ao reabrir regras de vinculação ([#6723](https://github.com/nocobase/nocobase/pull/6723)) por @katherinehhh
  - Campos obrigatórios ocultos por regras de vinculação não devem afetar o envio do formulário ([#6709](https://github.com/nocobase/nocobase/pull/6709)) por @zhangzhonghe
  - filtro ausente para dados já associados ao adicionar dados de associação ([#6750](https://github.com/nocobase/nocobase/pull/6750)) por @katherinehhh
- **[servidor]** appVersion gerado incorretamente por create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) por @chenos
- **[cli]** Atualizar automaticamente o package.json na atualização ([#6747](https://github.com/nocobase/nocobase/pull/6747)) por @chenos
- **[build]** Corrigir erro lançado no comando tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) por @mytharcher
- **[Bloco: Gantt]** Bloco de gráfico de Gantt sobrepondo meses no cabeçalho do calendário para a visualização mensal ([#6753](https://github.com/nocobase/nocobase/pull/6753)) por @katherinehhh
- **[Ação: Importar registros]** Corrigir as exceções de importação e exportação que ocorrem ao definir permissões de campo. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) por @aaaaaajie
- **[Bloco: modelo]** modelos de bloco não podem ser usados no ambiente mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) por @gchust
- **[Fluxo de trabalho]** Corrigir erro lançado ao executar evento agendado em subfluxo ([#6721](https://github.com/nocobase/nocobase/pull/6721)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Suportar execução no modo de múltiplos registros por @mytharcher
- **[Ação: Exportar registros Pro]**

  - Corrigir as exceções de importação e exportação que ocorrem ao definir permissões de campo. por @aaaaaajie
  - botão de exportação pro perdendo parâmetros de filtro após ordenar coluna da tabela por @katherinehhh
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigir dados de resposta do arquivo enviado por @mytharcher
  - Adicionar lógica multer make para upload do lado do servidor por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir pré-carregamento de campos de associação para registros por @mytharcher
