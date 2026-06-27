---
title: "Atualizações Semanais｜Melhore a capacidade dos funcionários de IA de analisar documentos carregados"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 16 a 23 de abril de 2026."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Data de lançamento: 22/04/2026*

### 🎉 Novos Recursos

- **[Auth: OIDC]** atributo de mapeamento suporta campos personalizados por @chenzhizdt
- **[DingTalk]** DingTalk: notificações, login automático no DingTalk e sincronização de usuários. por @chenzhizdt

### 🚀 Melhorias

- **[ai]** Funcionário de IA e base de conhecimento agora suportam tipos de arquivo adicionais para upload (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) por @cgyrock
- **[undefined]** Adicionar tradução para árabe na seção de guia e navegação ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane

### 🐛 Correções de Bugs

- **[data-source-manager]** Correção para campos de porcentagem sendo redefinidos para numérico ao ressincronizar fontes de dados externas ([#9178](https://github.com/nocobase/nocobase/pull/9178)) por @jiannx
- **[client]**

  - Corrigido o problema em que o valor padrão não entrava em vigor após criar um registro. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) por @gchust
  - Corrigido o problema em que o botão Adicionar aba estava muito próximo da borda direita ([#9177](https://github.com/nocobase/nocobase/pull/9177)) por @zhangzhonghe
- **[Departamentos]** Corrigido um problema em que a sincronização repetida de departamentos não conseguia atualizar a ordem de classificação do departamento ([#9173](https://github.com/nocobase/nocobase/pull/9173)) por @2013xile
- **[Fonte de dados: Principal]** Corrigida a sincronização de campos do banco de dados para visualizações conectadas quando o nome da coleção difere do nome da visualização do banco de dados ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Workflow: JavaScript]** Corrigir problema de segurança da execução de script no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[IA: Base de conhecimento]** Corrigir problema em que o banco de dados vetorial não é sincronizado ao excluir documentos da base de conhecimento. por @cgyrock
- **[WeCom]** Corrigida a ordem de departamento ausente ao sincronizar departamentos do WeCom por @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Data de lançamento: 20/04/2026*

### 🐛 Correções de Bugs

- **[client]** Corrigido um problema em que a atualização de valores de subtabela através da atribuição de campo resultava em contaminação de dados. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
- **[data-source-manager]** Corrigido um problema em que campos de sequência podiam ser alterados para string após a sincronização do banco de dados ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
- **[Gerenciador de arquivos]** Retornar nulo quando a URL de pré-visualização estiver ausente ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765
- **[Workflow: JavaScript]** Corrigir problema de segurança da execução de script no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[Departamentos]**

  - Corrigidas listas de departamentos no gerenciamento de departamentos não seguindo a ordem do campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
  - Corrigidos valores de departamento principal ausentes ou desatualizados após salvar departamentos de usuário ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Data de lançamento: 18/04/2026*

### 🚀 Melhorias

- **[Departamentos]** Exibir o campo de chave estrangeira `parentId` da coleção de departamentos na interface do usuário ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile

### 🐛 Correções de Bugs

- **[data-source-manager]** Corrigida a sincronização de campo de coleção de arquivos removendo o campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile
- **[client]**

  - Corrigido um problema em que o componente de campo de associação estava incorreto nas configurações de valor de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Corrigir a altura e largura excessivas das abas no modo de configuração de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
- **[database]** Corrigidos riscos de injeção de SQL no carregamento antecipado de árvore recursiva e na inicialização de classificação com escopo ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[Visualização de dados]** Corrigida a classificação do bloco de gráfico para usar medidas e dimensões com alias em consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile
- **[Coleção: SQL]** Corrigida a validação SQL ausente nas atualizações de coleção SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Data de lançamento: 16/04/2026*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Melhorar a capacidade dos funcionários de IA de analisar documentos carregados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Melhorias

- **[logger]** Adicionar informação `referer` aos logs de requisição ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[undefined]** Sincronizar documentos traduzidos de variável de ambiente e modo cluster com as atualizações chinesas mais recentes. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
- **[Funcionários de IA]** Após a seleção do bloco do funcionário de IA, preencher o anexo do formulário na área de upload ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Workflow: Nó manual]** Usar `simplePagination` nas coleções relacionadas a tarefas do workflow para melhor desempenho da lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Workflow: Aprovação]** Usar `simplePagination` na coleção `approvals` e `approvalRecords` para melhor desempenho da lista por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que as opções opcionais de campos de seleção única na configuração de regras de campo estavam vazias ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Corrigidas configurações incorretas de valor padrão para subtabela no formulário. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
- **[Notificação: Mensagem no aplicativo]** Corrigir o problema em que o componente de seleção de destinatário não funciona corretamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[Funcionários de IA]** Corrigir o problema em que as configurações de baseURL do serviço LLM do google-gen-ai não surtiam efeito ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gerenciador de e-mail]** Remover prompt de fechamento de formulário após o e-mail ser enviado com sucesso por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Data de lançamento: 20/04/2026*

### 🎉 Novos Recursos

- **[Calendário]** bloco de calendário v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx
- **[Funcionários de IA]** Melhorar a capacidade dos funcionários de IA de analisar documentos carregados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock
- **[Bloco: Árvore]** Adicionar bloco de filtro de árvore ([#9016](https://github.com/nocobase/nocobase/pull/9016)) por @jiannx
- **[Gerenciador de e-mail]** gmail suporta envio de e-mails com aliases por @jiannx

### 🚀 Melhorias

- **[undefined]**

  - Adicionar tradução para árabe na seção de guia e navegação ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane
  - Sincronizar documentos traduzidos de variável de ambiente e modo cluster com as atualizações chinesas mais recentes. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
  - Adicionar tradução para árabe na página inicial da documentação ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
  - Adicionada consistência de TOC nos READMEs localizados ([#9038](https://github.com/nocobase/nocobase/pull/9038)) por @gaston98765
  - Adicionar Índice ao README em francês ([#9037](https://github.com/nocobase/nocobase/pull/9037)) por @saraTabbane
  - Docs: adicionar tradução para árabe das páginas de introdução de primeiros passos ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
- **[logger]** Adicionar informação `referer` aos logs de requisição ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[client]** adicionar interruptor de verificação obrigatória de formulário ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx
- **[database]** Otimizar consultas de contagem de repositório habilitando distinct apenas quando includes estão presentes. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) por @mytharcher
- **[Departamentos]** Exibir o campo de chave estrangeira `parentId` da coleção de departamentos na interface do usuário ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile
- **[Funcionários de IA]** Após a seleção do bloco do funcionário de IA, preencher o anexo do formulário na área de upload ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Workflow: Nó manual]** Usar `simplePagination` nas coleções relacionadas a tarefas do workflow para melhor desempenho da lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Workflow: Aprovação]** Usar `simplePagination` na coleção `approvals` e `approvalRecords` para melhor desempenho da lista por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema em que a atualização de valores de subtabela através da atribuição de campo resultava em contaminação de dados. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
  - Corrigir a altura e largura excessivas das abas no modo de configuração de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
  - Corrigido um problema em que o componente de campo de associação estava incorreto nas configurações de valor de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Corrigido o problema em que as opções opcionais de campos de seleção única na configuração de regras de campo estavam vazias ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Corrigidas configurações incorretas de valor padrão para subtabela no formulário. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
  - corrigir erro de campo muitos-para-muitos adicionado pela subtabela ([#9070](https://github.com/nocobase/nocobase/pull/9070)) por @jiannx
  - Corrigido um problema em que o popup de captura de registro do botão de seleção de uma subtabela não conseguia resolver corretamente os valores de variáveis do item pai. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) por @gchust
- **[data-source-manager]**

  - Corrigido um problema em que campos de sequência podiam ser alterados para string após a sincronização do banco de dados ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
  - Corrigida a sincronização de campo de coleção de arquivos removendo o campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile
- **[database]** Corrigidos riscos de injeção de SQL no carregamento antecipado de árvore recursiva e na inicialização de classificação com escopo ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[undefined]** Corrigir erro de renderização no bloco de recurso personalizado quando o recurso não existe ([#9095](https://github.com/nocobase/nocobase/pull/9095)) por @Molunerfinn
- **[utils]** Adicionar controle de segurança para envio de requisição HTTP do servidor, para evitar possível SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referência: [Variáveis de ambiente](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - Corrigido o problema de que campos muitos-para-um de fontes de dados externas não podiam ser adicionados no bloco de tabela ([#9068](https://github.com/nocobase/nocobase/pull/9068)) por @jiannx
  - Corrigir o erro de observador aleatório quando a visibilidade da página muda ([#9067](https://github.com/nocobase/nocobase/pull/9067)) por @zhangzhonghe
- **[Fonte de dados: Principal]** Corrigida a sincronização de campos do banco de dados para visualizações conectadas quando o nome da coleção difere do nome da visualização do banco de dados ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Gerenciador de arquivos]** Retornar nulo quando a URL de pré-visualização estiver ausente ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765
- **[Departamentos]**

  - Corrigidos valores de departamento principal ausentes ou desatualizados após salvar departamentos de usuário ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile
  - Corrigidas listas de departamentos no gerenciamento de departamentos não seguindo a ordem do campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
- **[Workflow: JavaScript]** Corrigir problema de segurança da execução de script no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[Coleção: SQL]** Corrigida a validação SQL ausente nas atualizações de coleção SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile
- **[Visualização de dados]** Corrigida a classificação do bloco de gráfico para usar medidas e dimensões com alias em consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile
- **[Notificação: Mensagem no aplicativo]** Corrigir o problema em que o componente de seleção de destinatário não funciona corretamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[Funcionários de IA]** Corrigir o problema em que as configurações de baseURL do serviço LLM do google-gen-ai não surtiam efeito ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gerenciador de notificações]** Otimizar o desempenho de envio de notificações no aplicativo em cenários de workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) por @mytharcher
- **[Controle de acesso]** Corrigido um problema em que limpar valores de relação com um array vazio podia falhar sob ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) por @2013xile
- **[Campo de coleção: Código]** Corrigir a interface de usuário dos campos de código ([#9061](https://github.com/nocobase/nocobase/pull/9061)) por @2013xile
- **[Gerenciador de e-mail]** Remover prompt de fechamento de formulário após o e-mail ser enviado com sucesso por @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Data de lançamento: 20/04/2026*

### 🎉 Novos Recursos

- **[Workflow]** Adicionar campo de log para jobs, a fim de mostrar o conteúdo do log de alguns nós para depuração ([#9165](https://github.com/nocobase/nocobase/pull/9165)) por @mytharcher

### 🚀 Melhorias

- **[undefined]** Adicionar tradução para árabe na seção de guia e navegação ([#9141](https://github.com/nocobase/nocobase/pull/9141)) por @saraTabbane
- **[cli]** Saída de ajuda do CLI da API gerada melhorada e agrupamento de comandos ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) por @2013xile

### 🐛 Correções de Bugs

- **[client]** Corrigido um problema em que a atualização de valores de subtabela através da atribuição de campo resultava em contaminação de dados. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) por @gchust
- **[data-source-manager]** Corrigido um problema em que campos de sequência podiam ser alterados para string após a sincronização do banco de dados ([#9143](https://github.com/nocobase/nocobase/pull/9143)) por @2013xile
- **[cli]** Corrigidas falhas de login OAuth do CLI no Windows causadas por URLs de autorização longas ([#9159](https://github.com/nocobase/nocobase/pull/9159)) por @2013xile
- **[Departamentos]** Corrigidos valores de departamento principal ausentes ou desatualizados após salvar departamentos de usuário ([#9156](https://github.com/nocobase/nocobase/pull/9156)) por @2013xile
- **[Fonte de dados: Principal]** Corrigida a sincronização de campos do banco de dados para visualizações conectadas quando o nome da coleção difere do nome da visualização do banco de dados ([#9155](https://github.com/nocobase/nocobase/pull/9155)) por @2013xile
- **[Gerenciador de arquivos]** Retornar nulo quando a URL de pré-visualização estiver ausente ([#9104](https://github.com/nocobase/nocobase/pull/9104)) por @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Data de lançamento: 19/04/2026*

### 🎉 Novos Recursos

- **[cli-v1]** resolver caminho de armazenamento a partir de env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) por @chenos
- **[Calendário]** bloco de calendário v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) por @jiannx

### 🚀 Melhorias

- **[cli]** Melhorado fallback de ajuda `nb api` e mensagens de aviso unificadas para falhas de inicialização em tempo de execução ([#9153](https://github.com/nocobase/nocobase/pull/9153)) por @2013xile
- **[Departamentos]** Exibir o campo de chave estrangeira `parentId` da coleção de departamentos na interface do usuário ([#9130](https://github.com/nocobase/nocobase/pull/9130)) por @2013xile

### 🐛 Correções de Bugs

- **[client]** Corrigir a altura e largura excessivas das abas no modo de configuração de página ([#9144](https://github.com/nocobase/nocobase/pull/9144)) por @zhangzhonghe
- **[database]** Corrigidos riscos de injeção de SQL no carregamento antecipado de árvore recursiva e na inicialização de classificação com escopo ([#9133](https://github.com/nocobase/nocobase/pull/9133)) por @2013xile
- **[Workflow: JavaScript]** Corrigir problema de segurança da execução de script no modo `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) por @mytharcher
- **[IdP: OAuth]** Corrigidas falhas de registro de cliente OAuth e renovação de token após reinicialização do serviço ([#9139](https://github.com/nocobase/nocobase/pull/9139)) por @2013xile
- **[Departamentos]** Corrigidas listas de departamentos no gerenciamento de departamentos não seguindo a ordem do campo `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) por @2013xile
- **[Coleção: SQL]** Corrigida a validação SQL ausente nas atualizações de coleção SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) por @2013xile
- **[Visualização de dados]** Corrigida a classificação do bloco de gráfico para usar medidas e dimensões com alias em consultas agregadas ([#9131](https://github.com/nocobase/nocobase/pull/9131)) por @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Data de lançamento: 17/04/2026*

### 🐛 Correções de Bugs

- **[data-source-manager]** Corrigida a sincronização de campo de coleção de arquivos removendo o campo `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) por @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Data de lançamento: 17/04/2026*

### 🎉 Novos Recursos

- **[cli]** refatorar CLI do NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) por @chenos
- **[Funcionários de IA]** Melhorar a capacidade dos funcionários de IA de analisar documentos carregados ([#9126](https://github.com/nocobase/nocobase/pull/9126)) por @cgyrock

### 🚀 Melhorias

- **[undefined]**

  - Sincronizar documentos traduzidos de variável de ambiente e modo cluster com as atualizações chinesas mais recentes. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) por @mytharcher
  - Docs: adicionar tradução para árabe das páginas de introdução de primeiros passos ([#9044](https://github.com/nocobase/nocobase/pull/9044)) por @gaston98765
  - Adicionar tradução para árabe na página inicial da documentação ([#9043](https://github.com/nocobase/nocobase/pull/9043)) por @gaston98765
- **[logger]** Adicionar informação `referer` aos logs de requisição ([#9110](https://github.com/nocobase/nocobase/pull/9110)) por @2013xile
- **[client]** adicionar interruptor de verificação obrigatória de formulário ([#9060](https://github.com/nocobase/nocobase/pull/9060)) por @jiannx
- **[Workflow: Nó manual]** Usar `simplePagination` nas coleções relacionadas a tarefas do workflow para melhor desempenho da lista ([#9117](https://github.com/nocobase/nocobase/pull/9117)) por @mytharcher
- **[Funcionários de IA]** Após a seleção do bloco do funcionário de IA, preencher o anexo do formulário na área de upload ([#9127](https://github.com/nocobase/nocobase/pull/9127)) por @cgyrock
- **[Workflow: Aprovação]** Usar `simplePagination` na coleção `approvals` e `approvalRecords` para melhor desempenho da lista por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que as opções opcionais de campos de seleção única na configuração de regras de campo estavam vazias ([#9119](https://github.com/nocobase/nocobase/pull/9119)) por @jiannx
  - Corrigido um problema em que o componente de campo de associação estava incorreto nas configurações de valor de campo. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) por @gchust
  - Corrigidas configurações incorretas de valor padrão para subtabela no formulário. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) por @gchust
- **[utils]** Adicionar controle de segurança para envio de requisição HTTP do servidor, para evitar possível SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) por @mytharcher
  Referência: [Variáveis de ambiente](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Nó de loop]** Corrigir validações de nós de workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigir o problema em que o componente de seleção de destinatário não funciona corretamente ([#9123](https://github.com/nocobase/nocobase/pull/9123)) por @mytharcher
- **[IdP: OAuth]** Corrigido acesso OAuth para requisições regulares de API ([#9120](https://github.com/nocobase/nocobase/pull/9120)) por @2013xile
- **[Funcionários de IA]**

  - Corrigida classificação de consulta agregada descartada por ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) por @2013xile
  - Corrigir o problema em que as configurações de baseURL do serviço LLM do google-gen-ai não surtiam efeito ([#9107](https://github.com/nocobase/nocobase/pull/9107)) por @cgyrock
- **[Gerenciador de e-mail]** Remover prompt de fechamento de formulário após o e-mail ser enviado com sucesso por @jiannx
