---
title: "NocoBase v2.0.11: Suporte a dados de contexto personalizados para passar variáveis para o gatilho de ação personalizada em subfluxo"
description: "Nota de lançamento da v2.0.11"
---

### 🎉 Novas Funcionalidades

- **[Workflow: Evento de ação personalizada]** Suporte a dados de contexto personalizados para passar variáveis para o gatilho de ação personalizada em sub-fluxos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Melhorias

- **[client]** Exibir uma mensagem de aviso quando não houver dados disponíveis para o bloco de Formulário de Edição ou o bloco de Detalhes. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

- **[flow-engine]** Corrigido um problema onde o novo código runjs analisava expressões de variáveis antes da execução. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

### 🐛 Correções de Bugs

- **[client]**
  - Corrigida a navegação do link do popup sendo revertida após o fechamento da visualização ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Desabilitada a adição de blocos para registros associados muitos-para-muitos (array) para evitar erros. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Corrigido um problema onde o bloco de dados original não era atualizado após editar dados no popup do campo de associação. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - Corrigido o corte de abas e garantida a largura mínima das abas no modo de design ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Corrigida a validação para campos obrigatórios ocultos por link no modo de configuração ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Corrigidas atualizações atrasadas da interface para alternar ocultação de colunas de subtabela e exclusão consecutiva de colunas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - Corrigidas duas verificações obrigatórias aparecendo no formulário de atualização de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[database]**
  - Corrigida a opção 'Paginação Simples' ausente no modelo de visualização da coleção. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - A regra de validação de precisão para campos numéricos não estava funcionando ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

- **[undefined]** Corrigido um problema onde, após a atualização, o sistema avisava que plugin-block-reference não pôde ser encontrado. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[Ação: Exportar registros]** Corrigido o problema onde campos do tipo numérico em arquivos excel eram exibidos como strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Bloco: Lista]** Corrigido um problema onde campos do bloco de lista não podiam usar a variável do registro atual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Workflow]** Corrigido o problema onde o placeholder de arrastar nó era exibido incorretamente ao arrastar blocos no nó de aprovação ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Modelos de UI]**
  - Corrigido um problema onde reutilizar o modelo de bloco de registro atual para o bloco de detalhes e o bloco de formulário de edição podia causar falha no carregamento correto dos dados. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Corrigido um problema onde alterações nas propriedades feitas no fluxo de eventos de um bloco de modelo não surtiam efeito. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Fonte de dados: Principal]**
  - Atualizar o valor padrão de um campo JSON não estava funcionando ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Erro de sincronização de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Funcionários de IA]**
  - Corrigidos problemas onde dashscope/deepseek/kimi não conseguiam ler arquivos de documentos enviados. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

  - Corrigido erro de chamada de ferramenta ao usar o modelo de raciocínio deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

- **[Multi-espaço]** Corrigido o erro de permissão de espaço ao criar dados com a chave primária por @jiannx
