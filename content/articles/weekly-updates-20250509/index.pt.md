---
title: "Atualizações Semanais do NocoBase: Impressão de Modelos Suporta Imagens e Códigos de Barras"
description: "As atualizações desta semana incluem: suporte para renderização dinâmica de imagens e códigos de barras em modelos de documentos, suporte a variáveis no título e conteúdo da confirmação secundária, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Data de lançamento: 2025-05-07*

#### 🎉 Novos Recursos

- **[Bloco: iframe]** Bloco iframe suporta configurar o atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe
- **[Impressão de modelo]** Recurso: Suporta opções `{ label, value }` Select na impressão de modelo. por @sheldon66

#### 🐛 Correções de Bugs

- **[client]**

  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - múltiplas mensagens de erro exibidas quando a regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - problema ao configurar regras de vinculação em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - Corrige o problema onde subcampos de campo um-para-muitos não podem ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - problema de estilo da barra de paginação da subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
  - Seletor de tabela no formulário de filtro, estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
- **[database]**

  - Corrige associação belongs-to não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
  - Corrige casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
- **[Campo de coleção: Anexo(URL)]** campos de anexo (URL) não devem permitir configuração de valor em regra de vinculação ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
- **[Workflow: Evento de ação personalizada]** problema de vinculação de ação de workflow acionado por @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Data de lançamento: 2025-05-08*

#### 🐛 Correções de Bugs

- **[client]**
  - incapaz de arrastar outros botões para o botão duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - falha ao enviar campo de associação múltipla ao mostrar campos da coleção de associação ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Data de lançamento: 2025-05-04*

#### 🎉 Novos Recursos

- **[client]** suporta variáveis no título e conteúdo da confirmação secundária ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh
- **[Impressão de modelo]**

  - Suporte para renderização dinâmica de imagens e códigos de barras em modelos de documento. por @sheldon66
  - Recurso: Suporta opções `{ label, value }` Select na impressão de modelo. por @sheldon66
- **[Bloco: Árvore]** bloco de árvore de filtro suporta regra de vinculação por @katherinehhh
- **[Visualização de dados: ECharts]** Adiciona configuração "Inverter eixo Y" para gráficos de barras por @2013xile

#### 🚀 Melhorias

- **[client]** otimiza o estilo do botão adicionar da subtabela e alinha o paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
- **[Gerenciador de arquivos]** Adiciona opção de timeout OSS padrão para 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Política de senha]** Altera a expiração padrão da senha para nunca expirar por @2013xile

#### 🐛 Correções de Bugs

- **[database]**

  - Corrige casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
  - Evita erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
- **[client]**

  - quando a seleção de variável requer carregamento assíncrono, o último menu selecionado é perdido. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust
  - Corrige o problema onde subcampos de campo um-para-muitos não podem ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - problema ao configurar regras de vinculação em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - múltiplas mensagens de erro exibidas quando a regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) por @katherinehhh
- **[Autenticação]** Não permite alterar o nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Ação: Solicitação personalizada]** resposta da solicitação personalizada definida como variável não exibindo corretamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Data de lançamento: 2025-05-06*

#### 🚀 Melhorias

- **[client]** Componente RichText suporta props modules e formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx

#### 🐛 Correções de Bugs

- **[Verificação]** Corrige problemas do script de migração ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile
- **[Workflow: Evento de ação personalizada]** problema de vinculação de ação de workflow acionado por @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Data de lançamento: 2025-05-07*

#### 🎉 Novos Recursos

- **[Bloco: iframe]** Bloco iframe suporta configurar o atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Data de lançamento: 2025-05-08*

#### 🐛 Correções de Bugs

- **[client]**

  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - Seletor de tabela no formulário de filtro, estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - falha ao enviar campo de associação múltipla ao mostrar campos da coleção de associação ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh
  - incapaz de arrastar outros botões para o botão duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - problema de estilo da barra de paginação da subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
- **[database]** Corrige associação belongs-to não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
- **[Campo de coleção: Anexo(URL)]** campos de anexo (URL) não devem permitir configuração de valor em regra de vinculação ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Data de lançamento: 2025-05-08*

#### 🎉 Novos Recursos

- **[client]**

  - suporta variáveis no título e conteúdo da confirmação secundária ([#6787](https://github.com/nocobase/nocobase/pull/6787)) por @katherinehhh
  - suporta configurar regras de vinculação em blocos para mostrar/esconder dinamicamente ([#6636](https://github.com/nocobase/nocobase/pull/6636)) por @katherinehhh
- **[undefined]** adiciona publish ci para license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) por @jiannx
- **[Bloco: iframe]** Bloco iframe suporta configurar o atributo allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) por @zhangzhonghe
- **[Autenticação]** Suporta a função "Esqueci a senha" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referência: [Esqueci a senha](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Gerenciador de arquivos]** Recurso: Adiciona API `getFileStream` para suporte a streaming de arquivos. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) por @sheldon66
- **[Ação: Solicitação personalizada]** suporta variável de resposta na mensagem de sucesso da ação de solicitação personalizada ([#6694](https://github.com/nocobase/nocobase/pull/6694)) por @katherinehhh
- **[Impressão de modelo]** Recurso: Suporta opções `{ label, value }` Select na impressão de modelo. por @sheldon66
- **[Bloco: Árvore]** bloco de árvore de filtro suporta regra de vinculação por @katherinehhh
- **[Visualização de dados: ECharts]** Adiciona configuração "Inverter eixo Y" para gráficos de barras por @2013xile

#### 🚀 Melhorias

- **[client]**

  - Componente RichText suporta props modules e formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) por @jiannx
  - otimiza o estilo do botão adicionar da subtabela e alinha o paginador na mesma linha ([#6790](https://github.com/nocobase/nocobase/pull/6790)) por @katherinehhh
  - mostra o título do botão com tooltip ao passar o mouse sobre o ícone da ação ([#6761](https://github.com/nocobase/nocobase/pull/6761)) por @katherinehhh
  - mantém a funcionalidade de modelo de referência ([#6743](https://github.com/nocobase/nocobase/pull/6743)) por @gchust
  - Ajusta mensagem de upload ([#6757](https://github.com/nocobase/nocobase/pull/6757)) por @mytharcher
- **[utils]** Aumenta a altura da lista de campos do botão de filtro e ordena/categoriza os campos ([#6779](https://github.com/nocobase/nocobase/pull/6779)) por @zhangzhonghe
- **[Gerenciador de arquivos]** Adiciona opção de timeout OSS padrão para 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) por @mytharcher
- **[Visualização de dados]** Adiciona API estendida para configuração de interface de campo ([#6742](https://github.com/nocobase/nocobase/pull/6742)) por @2013xile
- **[Política de senha]** Altera a expiração padrão da senha para nunca expirar por @2013xile
- **[WeCom]** Prioriza e-mail corporativo sobre e-mail pessoal ao atualizar o e-mail do usuário por @2013xile

#### 🐛 Correções de Bugs

- **[database]**

  - Importação falhou devido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
  - Corrige associação belongs-to não carregada em appends quando a chave estrangeira é bigInt no MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) por @mytharcher
  - Corrige casos de teste ([#6811](https://github.com/nocobase/nocobase/pull/6811)) por @mytharcher
  - Evita erro lançado quando o tipo de dado não é string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) por @mytharcher
  - adiciona unavailableActions à coleção sql e coleção view ([#6765](https://github.com/nocobase/nocobase/pull/6765)) por @katherinehhh
- **[client]**

  - falha ao enviar campo de associação múltipla ao mostrar campos da coleção de associação ([#6833](https://github.com/nocobase/nocobase/pull/6833)) por @katherinehhh
  - incapaz de arrastar outros botões para o botão duplicar ([#6822](https://github.com/nocobase/nocobase/pull/6822)) por @katherinehhh
  - Seletor de tabela no formulário de filtro, estilo anormal ([#6827](https://github.com/nocobase/nocobase/pull/6827)) por @zhangzhonghe
  - Quando o componente de campo de relação do formulário de filtro é alterado para um seletor de dados, não há item de configuração "Permitir seleção múltipla" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) por @zhangzhonghe
  - Em subpáginas aninhadas, a lista de blocos não é exibida ao passar o mouse sobre o botão "Adicionar bloco" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) por @zhangzhonghe
  - problema de estilo da barra de paginação da subtabela no modo somente leitura ([#6830](https://github.com/nocobase/nocobase/pull/6830)) por @katherinehhh
  - problema ao configurar regras de vinculação em subformulário (popup) dentro de subtabela ([#6803](https://github.com/nocobase/nocobase/pull/6803)) por @katherinehhh
  - quando a seleção de variável requer carregamento assíncrono, o último menu selecionado é perdido. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) por @gchust
  - múltiplas mensagens de erro exibidas quando a regra de validação é violada em campos de formulário ([#6805](https://github.com/nocobase/nocobase/pull/6805)) por @katherinehhh
  - Corrige o problema onde subcampos de campo um-para-muitos não podem ser selecionados como opções de filtro em formulários de filtro ([#6809](https://github.com/nocobase/nocobase/pull/6809)) por @zhangzhonghe
  - Passa outras props para o componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - campo de associação não enviando dados ao exibir campo da coleção relacionada ([#6798](https://github.com/nocobase/nocobase/pull/6798)) por @katherinehhh
  - No formulário de filtro, alternar o operador de campo e depois atualizar a página causa um erro ([#6781](https://github.com/nocobase/nocobase/pull/6781)) por @zhangzhonghe
  - No bloco de colapso, clicar no botão limpar na caixa de pesquisa do campo de relação não deve excluir o intervalo de dados ([#6782](https://github.com/nocobase/nocobase/pull/6782)) por @zhangzhonghe
  - problema de alinhamento do botão adicionar registro filho na tabela em árvore ([#6791](https://github.com/nocobase/nocobase/pull/6791)) por @katherinehhh
  - Proíbe mover menus antes ou depois das abas da página ([#6777](https://github.com/nocobase/nocobase/pull/6777)) por @zhangzhonghe
  - Bloco de tabela exibe dados duplicados ao filtrar ([#6792](https://github.com/nocobase/nocobase/pull/6792)) por @zhangzhonghe
  - problema de operador de parâmetro de consulta url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) por @katherinehhh
  - apenas a ação de exportação na coleção view é suportada quando writableView é false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) por @katherinehhh
  - Dados incorretos recuperados para campos de array muitos-para-muitos de tabelas relacionadas em formulários ([#6744](https://github.com/nocobase/nocobase/pull/6744)) por @2013xile
  - criação inesperada de dados de associação ao exibir campo de associação em sub-formulário/sub-tabela no formulário de criação ([#6727](https://github.com/nocobase/nocobase/pull/6727)) por @katherinehhh
- **[create-nocobase-app]** Corrige temporariamente problema do mariadb fazendo downgrade para 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) por @chenos
- **[Ação: Exportar registros]** Corrige o erro de exportação de textos longos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Campo de coleção: Anexo(URL)]** campos de anexo (URL) não devem permitir configuração de valor em regra de vinculação ([#6831](https://github.com/nocobase/nocobase/pull/6831)) por @katherinehhh
- **[Verificação]** Corrige problemas do script de migração ([#6820](https://github.com/nocobase/nocobase/pull/6820)) por @2013xile
- **[Autenticação]** Não permite alterar o nome do autenticador ([#6808](https://github.com/nocobase/nocobase/pull/6808)) por @2013xile
- **[Ação: Solicitação personalizada]** resposta da solicitação personalizada definida como variável não exibindo corretamente ([#6793](https://github.com/nocobase/nocobase/pull/6793)) por @katherinehhh
- **[Bloco: Painel de ação]** ícone do painel de ação ausente quando apenas ícone está habilitado ([#6773](https://github.com/nocobase/nocobase/pull/6773)) por @katherinehhh
- **[Workflow: Evento de ação personalizada]** problema de vinculação de ação de workflow acionado por @katherinehhh
- **[Workflow: nó de cálculo de data]** Corrige erro em navegador legado sem API `Intl` por @mytharcher
- **[Impressão de modelo]** Correção: Corrige lógica de validação de permissão para evitar ações não autorizadas. por @sheldon66
- **[Armazenamento de arquivos: S3(Pro)]** expiração da url de acesso inválida por @jiannx
- **[Bloco: Árvore]** Após conectar através de uma chave estrangeira, clicar para acionar a filtragem resulta em condições de filtro vazias por @zhangzhonghe
