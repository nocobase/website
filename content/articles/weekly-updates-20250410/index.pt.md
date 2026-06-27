---
title: "Atualizações Semanais do NocoBase: Otimizar lógica de salvamento de tarefas"
description: "As atualizações desta semana incluem: suporte para pesquisa de campos no componente Filtro, suporte para variáveis globais na configuração de armazenamento e muito mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Data de lançamento: 03/04/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - Propriedade x-disabled não estava funcionando em campos de formulário ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh
  - Problema de exibição do rótulo do campo para evitar truncamento por dois pontos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh
- **[database]** Ao excluir registros um-para-muitos, tanto `filter` quanto `filterByTk` são passados e `filter` inclui um campo de associação, o `filterByTk` é ignorado ([#6606](https://github.com/nocobase/nocobase/pull/6606)) por @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Data de lançamento: 09/04/2025*

#### 🚀 Melhorias

- **[utils]** Adicionar extensão de duração para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher
- **[client]**

  - Suporte para pesquisar campo no componente Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher
  - Adicionar API `trim` para `Input` e `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher
- **[Error handler]** Suporte a título personalizado no componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66
- **[IP restriction]** Atualizar conteúdo da mensagem de restrição de IP. por @sheldon66
- **[File storage: S3(Pro)]** Suporte a variáveis globais na configuração de armazenamento por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Regra com condição 'any' não funciona quando a lista de condições está vazia ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh
  - Problema de dados com bloco Gantt em coleção de árvore ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh
  - Os campos de relacionamento no formulário de filtro reportam um erro após a página ser atualizada porque x-data-source não é carregado ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe
  - Falha na análise de variável quando os parâmetros de URL contêm caracteres chineses ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh
- **[Users]** Problema com a análise do esquema do formulário de perfil do usuário ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile
- **[Mobile]** Campo de seleção única com filtro 'contains' no celular não suporta seleção múltipla ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh
- **[Action: Export records]** Parâmetros de filtro ausentes ao exportar dados após alterar a paginação ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh
- **[Email manager]** Corrigir permissão de gerenciamento de e-mail que não conseguia visualizar a lista de e-mails por @jiannx
- **[File storage: S3(Pro)]** Lançar erro para o usuário ao fazer upload do logotipo para o armazenamento S3 Pro (definido como padrão) por @mytharcher
- **[Workflow: Approval]** Corrigir `updatedAt` alterado após migração por @mytharcher
- **[Migration manager]** Hora de criação do log de migração exibida incorretamente em alguns ambientes por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Data de lançamento: 09/04/2025*

#### 🎉 Novos Recursos

- **[UI schema storage]** Módulo de localização adicionado para UISchema, permitindo traduções personalizadas para título e descrição do esquema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) por @chenos

#### 🚀 Melhorias

- **[utils]** Adicionar extensão de duração para dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) por @mytharcher
- **[client]**

  - Suporte para pesquisar campo no componente Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) por @mytharcher
  - Adicionar API `trim` para `Input` e `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) por @mytharcher
- **[Workflow]** Otimizar lógica de salvamento de job ([#6613](https://github.com/nocobase/nocobase/pull/6613)) por @mytharcher
- **[Error handler]** Suporte a título personalizado no componente AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) por @sheldon66
- **[IP restriction]** Atualizar conteúdo da mensagem de restrição de IP. por @sheldon66
- **[File storage: S3(Pro)]** Suporte a variáveis globais na configuração de armazenamento por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Os campos de relacionamento no formulário de filtro reportam um erro após a página ser atualizada porque x-data-source não é carregado ([#6619](https://github.com/nocobase/nocobase/pull/6619)) por @zhangzhonghe
  - Problema de dados com bloco Gantt em coleção de árvore ([#6617](https://github.com/nocobase/nocobase/pull/6617)) por @katherinehhh
  - Área em branco entre o título da página de configuração do modelo de bloco e o menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) por @gchust
  - Regra com condição 'any' não funciona quando a lista de condições está vazia ([#6628](https://github.com/nocobase/nocobase/pull/6628)) por @katherinehhh
  - Propriedade x-disabled não estava funcionando em campos de formulário ([#6610](https://github.com/nocobase/nocobase/pull/6610)) por @katherinehhh
  - Falha na análise de variável quando os parâmetros de URL contêm caracteres chineses ([#6618](https://github.com/nocobase/nocobase/pull/6618)) por @katherinehhh
  - Problema de exibição do rótulo do campo para evitar truncamento por dois pontos ([#6599](https://github.com/nocobase/nocobase/pull/6599)) por @katherinehhh
- **[Action: Export records]** Parâmetros de filtro ausentes ao exportar dados após alterar a paginação ([#6633](https://github.com/nocobase/nocobase/pull/6633)) por @katherinehhh
- **[Users]** Problema com a análise do esquema do formulário de perfil do usuário ([#6635](https://github.com/nocobase/nocobase/pull/6635)) por @2013xile
- **[Mobile]** Campo de seleção única com filtro 'contains' no celular não suporta seleção múltipla ([#6629](https://github.com/nocobase/nocobase/pull/6629)) por @katherinehhh
- **[Access control]** Corrigir lógica de cálculo de união de funções ([#6605](https://github.com/nocobase/nocobase/pull/6605)) por @aaaaaajie
- **[Block: template]** Modificar e excluir os mesmos campos do modelo e do bloco, após criar um bloco a partir do modelo, pode causar erros de renderização ([#6626](https://github.com/nocobase/nocobase/pull/6626)) por @gchust
- **[Email manager]**

  - Corrigir await ausente para a próxima chamada. por @jiannx
  - Corrigir permissão de gerenciamento de e-mail que não conseguia visualizar a lista de e-mails por @jiannx
- **[File storage: S3(Pro)]**

  - Corrigir await ausente para a próxima chamada. por @jiannx
  - Lançar erro para o usuário ao fazer upload do logotipo para o armazenamento S3 Pro (definido como padrão) por @mytharcher
- **[Workflow: Approval]** Corrigir `updatedAt` alterado após migração por @mytharcher
- **[Migration manager]** Hora de criação do log de migração exibida incorretamente em alguns ambientes por @gchust
