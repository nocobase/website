---
title: "Atualizações Semanais｜Atualizar prompt do usuário do chatbox de IA"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 6 a 12 de março de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*Data de lançamento: 2026-03-12*

### 🐛 Correções de Bugs

- **[Gerenciador de e-mail]** Ajustes nos destinatários de responder e responder a todos, corrigindo falha ao adicionar campo de tabela e outros problemas por @jiannx
- **[Gerenciador de migração]** Corrige o problema em que as tabelas do sistema não podiam ser selecionadas em regras personalizadas por @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*Data de lançamento: 2026-03-12*

### 🚀 Melhorias

- **[Gerenciador de migração]** Melhorias nas verificações de migração, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige o problema em que campos personalizados nos valores de campo do formulário de Filtro não renderizam o tipo de entrada de valor correto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Corrige o problema em que o botão de recolher do formulário de filtro v2 para de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Corrigido o problema em que a página de gerenciamento de modelo de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Dados de sub formulário e sub tabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
- **[Controle de acesso]** usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
- **[Modelos de UI]**

  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Corrigido o problema em que os registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como modelo. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema em que os responsáveis não seguem a ordem configurada no nó por @mytharcher
  - Corrige rótulos não traduzidos nos detalhes do processamento de aprovação por @zhangzhonghe
- **[Gerenciador de migração]**

  - Corrige erro de compilação por @mytharcher
  - Corrige a descrição de migração ausente e define a hora atual como padrão por @cgyrock
  - Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
  - Ajusta o diretório temporário para storage, para suportar uso em modo cluster por @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*Data de lançamento: 2026-03-10*

### 🎉 Novos Recursos

- **[cliente]** Suporte ao botão de acionar fluxo de trabalho para configurar fluxo pós-sucesso ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher

### 🚀 Melhorias

- **[Fluxo de trabalho]** Mostrar todos os tipos de nó no menu de adição mesmo que não estejam disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[IA: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema em que o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Corrigido o problema em que as regras de vinculação de campo no bloco de detalhes não surtiam efeito durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
- **[Visualizador de arquivos do Office]** Alterar a altura do modal para um valor adequado para mostrar mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Modelos de UI]** Corrigido o problema em que o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de eventos de clique em linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*Data de lançamento: 2026-03-09*

### 🚀 Melhorias

- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança da API do LockManager no repositório principal por @mytharcher
- **[Gerenciador de backup]** Adiciona bloqueio para backup agendado em nós de cluster por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Blocos V2 agora mostram apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Corrige problema de estilo do botão voltar em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
- **[gerenciador de bloqueio]** Corrige problema de condição de corrida do gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[servidor]** Corrigido o problema de erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
- **[Controle de acesso]** Corrigido erro de modificação de dados da fonte de dados da API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
- **[Ação: Exportar registros]** corrigido problema em que o campo belongsToArray ficava em branco no excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*Data de lançamento: 2026-03-06*

### 🎉 Novos Recursos

- **[Fluxo de trabalho: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o gatilho de ação personalizada em subfluxo ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Melhorias

- **[cliente]** Mostrar uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
- **[mecanismo de fluxo]** Corrigido um problema em que o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige navegação de link pop-up sendo revertida após fechar visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Corrigido um problema em que o bloco de dados original não atualizava após editar dados no pop-up do campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - Corrige corte de aba e garante largura mínima da aba no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Corrige validação para campos obrigatórios ocultos por vinculação no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Corrige atualizações de UI atrasadas para alternância de ocultação de coluna de subtabela e exclusão consecutiva de coluna ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - corrige duas verificações obrigatórias aparecendo no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[banco de dados]**

  - Corrigida opção 'Paginação Simples' ausente no modelo de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - A regra de validação de precisão para campos numéricos não está surtindo efeito ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
- **[indefinido]** Corrigido um problema em que, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[Ação: Exportar registros]** Corrigido o problema em que campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Bloco: Lista]** Corrigido um problema em que os campos do bloco de lista não podiam usar a variável de registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Fluxo de trabalho]** Corrige o problema em que o placeholder de arrastar nó era exibido incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Modelos de UI]**

  - Corrigido um problema em que reutilizar o modelo de bloco de registro atual para bloco de detalhes e bloco de formulário de edição podia fazer com que os dados não fossem carregados corretamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Corrigido um problema em que as alterações nas propriedades feitas no fluxo de eventos de um bloco de modelo não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Fonte de dados: Principal]**

  - Atualizar o valor padrão de um campo JSON não surte efeito ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Funcionários de IA]**

  - Corrigidos problemas em que dashscope/deepseek/kimi não conseguiam ler arquivos de documentos enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
- **[Multi-espaço]** Corrige o erro de permissão de espaço ao criar dados com a chave primária por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Data de lançamento: 2026-03-12*

### 🎉 Novos Recursos

- **[cliente]** Suporte ao botão de acionar fluxo de trabalho para configurar fluxo pós-sucesso ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher
- **[Campo de coleção: Código]** field-code suporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Fluxo de trabalho: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o gatilho de ação personalizada em subfluxo ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Melhorias

- **[cliente]** Mostrar uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
- **[mecanismo de fluxo]** Corrigido um problema em que o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust
- **[Fluxo de trabalho]** Mostrar todos os tipos de nó no menu de adição mesmo que não estejam disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[Ação: Solicitação personalizada]** Streaming de eventos suporta solicitações personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[IA: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock
- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança da API do LockManager no repositório principal por @mytharcher
- **[Gerenciador de backup]** Adiciona bloqueio para backup agendado em nós de cluster por @mytharcher
- **[Gerenciador de migração]** Melhorias nas verificações de migração, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Dados de sub formulário e sub tabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
  - Corrige o problema em que o botão de recolher do formulário de filtro v2 para de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Corrige o problema em que campos personalizados nos valores de campo do formulário de Filtro não renderizam o tipo de entrada de valor correto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Corrigido o problema em que a página de gerenciamento de modelo de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Corrigido o problema em que o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Corrigido o problema em que as regras de vinculação de campo no bloco de detalhes não surtiam efeito durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
  - Corrige problema de estilo do botão voltar em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
  - Blocos V2 agora mostram apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Corrige validação para campos obrigatórios ocultos por vinculação no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Corrige corte de aba e garante largura mínima da aba no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Corrige atualizações de UI atrasadas para alternância de ocultação de coluna de subtabela e exclusão consecutiva de coluna ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Corrige navegação de link pop-up sendo revertida após fechar visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Corrigido um problema em que o bloco de dados original não atualizava após editar dados no pop-up do campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - corrige duas verificações obrigatórias aparecendo no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[servidor]** Corrigido o problema de erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
- **[gerenciador de bloqueio]** Corrige problema de condição de corrida do gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[banco de dados]**

  - Corrigida opção 'Paginação Simples' ausente no modelo de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - A regra de validação de precisão para campos numéricos não está surtindo efeito ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
- **[indefinido]** Corrigido um problema em que, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[Controle de acesso]**

  - usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
  - Corrigido erro de modificação de dados da fonte de dados da API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
- **[Modelos de UI]**

  - Corrigido o problema em que os registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como modelo. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Corrigido o problema em que o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de eventos de clique em linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
  - Corrigido um problema em que reutilizar o modelo de bloco de registro atual para bloco de detalhes e bloco de formulário de edição podia fazer com que os dados não fossem carregados corretamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Corrigido um problema em que as alterações nas propriedades feitas no fluxo de eventos de um bloco de modelo não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Visualizador de arquivos do Office]** Alterar a altura do modal para um valor adequado para mostrar mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Ação: Exportar registros]**

  - corrigido problema em que o campo belongsToArray ficava em branco no excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
  - Corrigido o problema em que campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Bloco: Lista]** Corrigido um problema em que os campos do bloco de lista não podiam usar a variável de registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Fonte de dados: Principal]**

  - Atualizar o valor padrão de um campo JSON não surte efeito ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Fluxo de trabalho]** Corrige o problema em que o placeholder de arrastar nó era exibido incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Funcionários de IA]**

  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
  - Corrigidos problemas em que dashscope/deepseek/kimi não conseguiam ler arquivos de documentos enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
- **[Multi-espaço]** Corrige o erro de permissão de espaço ao criar dados com a chave primária por @jiannx
- **[Fluxo de trabalho: Aprovação]**

  - Corrige rótulos não traduzidos nos detalhes do processamento de aprovação por @zhangzhonghe
  - Corrige o problema em que os responsáveis não seguem a ordem configurada no nó por @mytharcher
- **[Gerenciador de migração]**

  - Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
  - Corrige erro de compilação por @mytharcher
  - Corrige a descrição de migração ausente e define a hora atual como padrão por @cgyrock
  - Ajusta o diretório temporário para storage, para suportar uso em modo cluster por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Data de lançamento: 2026-03-12*

### 🎉 Novos Recursos

- **[cliente]** Suporte ao botão de acionar fluxo de trabalho para configurar fluxo pós-sucesso ([#8726](https://github.com/nocobase/nocobase/pull/8726)) por @mytharcher
- **[Campo de coleção: Código]** field-code suporta 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) por @jiannx
- **[Fluxo de trabalho: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o gatilho de ação personalizada em subfluxo ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher
- **[Funcionários de IA]** Atualizar prompt de usuário do chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🚀 Melhorias

- **[cliente]**

  - Mostrar uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust
  - Refatorar configurações de layout do admin e aplicação para arquitetura de host de modelo com salvaguardas de compatibilidade v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) por @zhangzhonghe
  - suporte à configuração de resumo para tabela ([#8721](https://github.com/nocobase/nocobase/pull/8721)) por @chenos
- **[mecanismo de fluxo]** Corrigido um problema em que o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust
- **[Fluxo de trabalho]** Mostrar todos os tipos de nó no menu de adição mesmo que não estejam disponíveis ([#8828](https://github.com/nocobase/nocobase/pull/8828)) por @mytharcher
- **[Ação: Solicitação personalizada]** Streaming de eventos suporta solicitações personalizadas ([#8749](https://github.com/nocobase/nocobase/pull/8749)) por @jiannx
- **[Funcionários de IA]** Atualizar prompt de usuário do chatbox de IA ([#8717](https://github.com/nocobase/nocobase/pull/8717)) por @heziqiang
- **[Incorporar NocoBase]** Fornecer API sanitize para filtrar valores de associação em ação ([#8688](https://github.com/nocobase/nocobase/pull/8688)) por @mytharcher
- **[IA: Base de conhecimento]** Lógica de carregamento de documentos da base de conhecimento refatorada. por @cgyrock
- **[Adaptador de bloqueio Redis]** Refatoração devido à mudança da API do LockManager no repositório principal por @mytharcher
- **[Gerenciador de backup]** Adiciona bloqueio para backup agendado em nós de cluster por @mytharcher
- **[Gerenciador de migração]** Melhorias nas verificações de migração, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[indefinido]** Corrigido um problema em que, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust
- **[cliente]**

  - Dados de sub formulário e sub tabela não exibidos devido à verificação de permissão ([#8846](https://github.com/nocobase/nocobase/pull/8846)) por @chenos
  - Corrige o problema em que o botão de recolher do formulário de filtro v2 para de funcionar após ordenar campos ([#8843](https://github.com/nocobase/nocobase/pull/8843)) por @zhangzhonghe
  - Corrige o problema em que campos personalizados nos valores de campo do formulário de Filtro não renderizam o tipo de entrada de valor correto ([#8823](https://github.com/nocobase/nocobase/pull/8823)) por @zhangzhonghe
  - Corrigido o problema em que a página de gerenciamento de modelo de referência (v1) estava sem as ações de filtro e atualização. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) por @gchust
  - Corrigido o problema em que o bloco de detalhes de uma coleção SQL encontrava um erro ao carregar dados. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) por @gchust
  - Corrigido o problema em que as regras de vinculação de campo no bloco de detalhes não surtiam efeito durante a renderização inicial. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) por @gchust
  - Blocos V2 agora mostram apenas ações suportadas pela fonte de dados atual ([#8803](https://github.com/nocobase/nocobase/pull/8803)) por @zhangzhonghe
  - Corrige problema de estilo do botão voltar em subpáginas v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) por @zhangzhonghe
  - Corrige navegação de link pop-up sendo revertida após fechar visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe
  - Corrige validação para campos obrigatórios ocultos por vinculação no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe
  - Corrige corte de aba e garante largura mínima da aba no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe
  - Corrige atualizações de UI atrasadas para alternância de ocultação de coluna de subtabela e exclusão consecutiva de coluna ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe
  - Corrigido um problema em que o bloco de dados original não atualizava após editar dados no pop-up do campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust
  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust
  - Corrigido um problema em que o bloco de dados não atualizava ao alternar menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust
  - Corrige o problema em que o componente CollectionField não renderizava no componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher
  - corrige duas verificações obrigatórias aparecendo no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx
- **[servidor]**

  - Corrigido o problema de erro em consultas de dados de fontes de dados não relacionadas a banco de dados ([#8776](https://github.com/nocobase/nocobase/pull/8776)) por @cgyrock
  - Resolver problema de cache anexando hash aos assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos
- **[gerenciador de bloqueio]** Corrige problema de condição de corrida do gerenciador de bloqueio ([#8734](https://github.com/nocobase/nocobase/pull/8734)) por @mytharcher
- **[banco de dados]**

  - Corrigida opção 'Paginação Simples' ausente no modelo de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock
  - A regra de validação de precisão para campos numéricos não está surtindo efeito ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile
  - Corrige falha na verificação regular personalizada de campo no v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx
- **[mecanismo de fluxo]** Corrigido um problema em que ctx.exit não conseguia encerrar a execução de fluxos de eventos definidos pelo usuário. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust
- **[Controle de acesso]**

  - usar collection.filterTargetKey em vez de Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) por @chenos
  - Corrigido erro de modificação de dados da fonte de dados da API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) por @cgyrock
  - Instância de banco de dados usada ao definir metadados ACL está incorreta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile
- **[Modelos de UI]**

  - Corrigido o problema em que os registros de associação não podiam ser carregados corretamente após salvar o bloco de detalhes como modelo. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) por @gchust
  - Corrigido o erro de renderização para o bloco de referência do painel de ações. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) por @gchust
  - Corrigido o problema em que o fluxo de eventos do bloco de referência no bloco de tabela não podia ser configurado com um fluxo de eventos de clique em linha. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) por @gchust
  - Corrigido um problema em que reutilizar o modelo de bloco de registro atual para bloco de detalhes e bloco de formulário de edição podia fazer com que os dados não fossem carregados corretamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust
  - Corrigido um problema em que as alterações nas propriedades feitas no fluxo de eventos de um bloco de modelo não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust
- **[Visualizador de arquivos do Office]** Alterar a altura do modal para um valor adequado para mostrar mais conteúdo do arquivo ([#8835](https://github.com/nocobase/nocobase/pull/8835)) por @mytharcher
- **[Ação: Exportar registros]**

  - corrigido problema em que o campo belongsToArray ficava em branco no excel exportado ([#8787](https://github.com/nocobase/nocobase/pull/8787)) por @cgyrock
  - Corrigido o problema em que campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock
- **[Fluxo de trabalho]** Corrige o problema em que o placeholder de arrastar nó era exibido incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher
- **[Bloco: Lista]** Corrigido um problema em que os campos do bloco de lista não podiam usar a variável de registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust
- **[Fonte de dados: Principal]**

  - Atualizar o valor padrão de um campo JSON não surte efeito ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile
  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile
- **[Funcionários de IA]**

  - Corrigidos problemas em que dashscope/deepseek/kimi não conseguiam ler arquivos de documentos enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock
  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock
  - Corrigido erro de chat do funcionário de IA enquanto a base de conhecimento estava ativada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock
  - Corrigido problema de renderização da configuração da fonte de dados de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock
  - Resolver problema em que a mensagem de IA renderiza com comprimento 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) por @heziqiang
- **[Mecanismo de fluxo]** corrigir erro de destruição sql ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrige o problema em que o fluxo de trabalho de ação personalizada trava quando executado como subfluxo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher
- **[Fluxo de trabalho: JavaScript]** Corrige casos de teste que não passam no windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) por @mytharcher
- **[Visualização de dados]** corrigir i18n para texto de entrada do plugin de gráfico ([#8716](https://github.com/nocobase/nocobase/pull/8716)) por @heziqiang
- **[Multi-espaço]** Corrige o erro de permissão de espaço ao criar dados com a chave primária por @jiannx
- **[Impressão de modelo]** Corrige o problema em que a API ACL mudou, mas não foi adaptada ao plugin por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrige o problema em que os responsáveis não seguem a ordem configurada no nó por @mytharcher
  - Corrige o problema em que o resultado da consulta não era mostrado devido a nós filtrados por tipo por @mytharcher
  - Corrige o problema em que o parâmetro appends era filtrado por ACL por @mytharcher
  - Corrige problema de ACL em que o valor de associação não deve ser criado ou atualizado quando o usuário não tem permissão por @mytharcher
  - Adiciona parâmetro ausente para evitar que associações não sejam atualizadas ao enviar nova aprovação por @mytharcher
  - Corrige rótulos não traduzidos nos detalhes do processamento de aprovação por @zhangzhonghe
  - Corrige erro lançado causado pelo valor de `dataAfter` ausente quando adicionado ou delegado por @mytharcher
  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
  - Corrige o problema em que o erro é lançado ao executar o fluxo de trabalho de aprovação manualmente por @mytharcher
  - Sanitizar valores de associação em ações de aprovação, para evitar qualquer manipulação de dados além da permissão por @mytharcher
- **[Gerenciador de e-mail]** Corrige análise de formato de ID de conteúdo de imagem por @jiannx
- **[Gerenciador de migração]**

  - Corrige a descrição de migração ausente e define a hora atual como padrão por @cgyrock
  - Corrige erro de compilação por @mytharcher
  - Ajusta o diretório temporário para storage, para suportar uso em modo cluster por @mytharcher
  - Corrigido um potencial congelamento de processo causado pelo registro de instruções SQL excessivamente grandes incluídas em exceções de erro de migração por @cgyrock
