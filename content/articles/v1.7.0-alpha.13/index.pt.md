---
title: "NocoBase v1.7.0-alpha.13: suporte a variáveis no título e conteúdo da confirmação secundária"
description: "Nota de lançamento da v1.7.0-alpha.13"
---

### 🎉 Novas Funcionalidades

- **[client]**
  - suporte a variáveis no título e conteúdo da confirmação secundária ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh

  - suporte à configuração de regras de vínculo em blocos para exibição/ocultação dinâmica ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh

- **[undefined]** adicionar ci de publicação para kit de licença ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx

- **[Bloco: iframe]** Bloco Iframe suporta a configuração do atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

- **[Autenticação]** Suporte à função "Esqueci a senha" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
Referência: [Esqueci a senha](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Gerenciador de arquivos]** Funcionalidade: Adicionar API `getFileStream` para suporte a streaming de arquivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66

- **[Ação: Solicitação personalizada]** suporte a variável de resposta na mensagem de sucesso da ação de solicitação personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh

- **[Impressão de modelo]** Funcionalidade: Suporte a opções Select `{ label, value }` na impressão de modelos. por @sheldon66

- **[Bloco: Árvore]** bloco de árvore de filtro suporta regra de vínculo por @katherinehhh

- **[Visualização de dados: ECharts]** Adicionar configuração "Inverter eixo Y" para gráficos de barras por @2013xile

### 🚀 Melhorias

- **[client]**
  - Componente RichText suporta props modules e formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx

  - otimizar estilo do botão adicionar em subtabela e alinhar paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh

  - mostrar título do botão com tooltip ao passar o mouse sobre o ícone da ação ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh

  - manter funcionalidade de modelo de referência ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust

  - Ajustar mensagem de upload ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher

- **[utils]** Aumentar a altura da lista de campos do botão de filtro e ordenar/categorizar os campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe

- **[Gerenciador de arquivos]** Adicionar opção de timeout OSS padrão de 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher

- **[Visualização de dados]** Adicionar API estendida para configuração de interface de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile

- **[Política de senha]** Alterar expiração padrão de senha para nunca expirar por @2013xile

- **[WeCom]** Priorizar e-mail corporativo sobre e-mail pessoal ao atualizar o e-mail do usuário por @2013xile

### 🐛 Correções de Bugs

- **[database]**
  - Importação falhou devido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie

  - Corrigir associação belongs-to não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher

  - Corrigir casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher

  - Evitar erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher

  - adicionar unavailableActions à coleção sql e coleção de visualização ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh

- **[client]**
  - campo de associação múltipla falhou ao enviar ao mostrar campos da coleção de associação ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

  - incapaz de arrastar outros botões para o botão duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh

  - Seletor de tabela no formulário de filtro, estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe

  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe

  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe

  - problema de estilo da barra de paginação da subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh

  - problema com a configuração de regras de vínculo em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh

  - quando a seleção de variável requer carregamento assíncrono, o último menu selecionado é perdido. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust

  - múltiplas mensagens de erro exibidas quando a regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh

  - Corrigir o problema em que subcampos de campo um-para-muitos não podem ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe

  - Passar outras props para o componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh

  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh

  - No formulário de filtro, alternar o operador de campo e depois atualizar a página causa um erro ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe

  - No bloco de colapso, clicar no botão limpar na caixa de pesquisa de campo de relação não deve excluir o intervalo de dados ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe

  - problema de alinhamento do botão adicionar registro filho na tabela em árvore ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh

  - Proibir mover menus antes ou depois das abas da página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe

  - Bloco de tabela exibe dados duplicados ao filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe

  - problema de operador de parâmetro de consulta url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh

  - apenas a ação de exportar na coleção de visualização é suportada quando writableView é false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh

  - Dados incorretos recuperados para campos de array muitos-para-muitos de tabelas relacionadas em formulários ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile

  - criação inesperada de dados de associação ao exibir campo de associação em sub-formulário/sub-tabela no formulário de criação ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh

- **[create-nocobase-app]** Corrigir temporariamente problema do mariadb fazendo downgrade para 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos

- **[Ação: Exportar registros]** Corrigir o erro de exportação de textos longos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie

- **[Campo de coleção: Anexo(URL)]** campos de anexo (URL) não devem permitir configuração de valor em regra de vínculo ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

- **[Verificação]** Corrigir problemas do script de migração ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile

- **[Autenticação]** Não permitir alterar o nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile

- **[Ação: Solicitação personalizada]** resposta de solicitação personalizada definida como variável não exibindo corretamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh

- **[Bloco: Painel de ações]** ícone do painel de ações ausente quando apenas ícone está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh

- **[Fluxo de trabalho: Evento de ação personalizada]** problema de vínculo de ação de fluxo de trabalho acionado por @katherinehhh

- **[Fluxo de trabalho: nó de cálculo de data]** Corrigir erro em navegador legado sem API `Intl` por @mytharcher

- **[Impressão de modelo]** Correção: Lógica de validação de permissão corrigida para evitar ações não autorizadas. por @sheldon66

- **[Armazenamento de arquivos: S3(Pro)]** expiração de url de acesso inválida por @jiannx

- **[Bloco: Árvore]** Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias por @zhangzhonghe
