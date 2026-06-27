---
title: "Atualizações Semanais do NocoBase: Alguns Plugins Comerciais Convertidos para Código Aberto"
description: "As atualizações desta semana incluem: os plugins comerciais para departamento, URL de anexo e mensagem de resposta de fluxo de trabalho agora são fornecidos gratuitamente."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Data de lançamento: 2025-04-11*

#### 🚀 Melhorias

- **[cliente]**

  - Adicionar API de fallback de tipo padrão para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher
  - Otimizar prompts para páginas não configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó de atraso]** Suporte ao uso de variável para duração ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Adicionar configurações de atualização para o botão de fluxo de trabalho de gatilho por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - sobreposição da descrição da subtabela com o botão adicionar novo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh
  - sublinhado tracejado causado pelo layout de formulário horizontal em modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh
- **[Armazenamento de arquivos: S3(Pro)]** Corrigir falta de await para a próxima chamada. por @jiannx
- **[Gerenciador de e-mail]** Corrigir falta de await para a próxima chamada. por @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Data de lançamento: 2025-04-14*

#### 🐛 Correções de bugs

- **[cliente]**
  - Corrigir o problema de imagens de pré-visualização ficarem obscurecidas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe
  - No bloco de formulário, o valor padrão da configuração do campo será exibido primeiro como a string de variável original e depois desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Data de lançamento: 2025-04-14*

#### 🎉 Novos recursos

- **[Departamentos]** Tornar os plugins de Departamento, URL de Anexo e mensagem de resposta do Fluxo de trabalho gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

#### 🐛 Correções de bugs

- **[cliente]**

  - O formulário de filtro não deve exibir o prompt "Alterações não salvas" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe
  - Opção "permitir múltiplos" não funcionando para campo de relação ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh
  - No formulário de filtro, quando o botão de filtro é clicado, se houver campos que não passaram na validação, a filtragem ainda é acionada ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe
  - Alternar para o menu de grupo não deve pular para uma página que já foi ocultada no menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe
- **[Armazenamento de arquivos: S3(Pro)]**

  - Organizar idioma por @jiannx
  - Configurações individuais de baseurl e públicas, melhorar UX de configuração de armazenamento S3 pro por @jiannx
- **[Gerenciador de migração]** a opção de pular backup automático torna-se inválida se o popup de variável de ambiente aparecer durante a migração por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Data de lançamento: 2025-04-10*

#### 🚀 Melhorias

- **[Fluxo de trabalho: Nó de atraso]** Suporte ao uso de variável para duração ([#6621](https://github.com/nocobase/nocobase/pull/6621)) por @mytharcher

#### 🐛 Correções de bugs

- **[Fluxo de trabalho]** Corrigir OOM ao criar job com id inteiro inseguro ([#6637](https://github.com/nocobase/nocobase/pull/6637)) por @mytharcher
- **[Bloco: template]** quando o template referenciado usado pelo bloco de página foi excluído, salvar como template falha ([#6638](https://github.com/nocobase/nocobase/pull/6638)) por @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Data de lançamento: 2025-04-12*

#### 🚀 Melhorias

- **[cliente]**

  - Adicionar API de fallback de tipo padrão para `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) por @mytharcher
  - Otimizar prompts para páginas não configuradas ([#6641](https://github.com/nocobase/nocobase/pull/6641)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento de ação personalizada]** Adicionar configurações de atualização para o botão de fluxo de trabalho de gatilho por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - título do drawer de edição do nó do fluxo de trabalho exibe [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) por @katherinehhh
  - sobreposição da descrição da subtabela com o botão adicionar novo ([#6646](https://github.com/nocobase/nocobase/pull/6646)) por @katherinehhh
  - estilo incorreto de entrada de variável ([#6645](https://github.com/nocobase/nocobase/pull/6645)) por @gchust
  - sublinhado tracejado causado pelo layout de formulário horizontal em modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) por @katherinehhh
- **[Fluxo de trabalho]** Corrigir informações de estatísticas de fluxos de trabalho não carregadas quando o aplicativo inicia ([#6642](https://github.com/nocobase/nocobase/pull/6642)) por @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Data de lançamento: 2025-04-15*

#### 🎉 Novos recursos

- **[Departamentos]** Tornar os plugins de Departamento, URL de Anexo e mensagem de resposta do Fluxo de trabalho gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos
- **[Ação: Atualização em lote]** Suporte à atualização de dados em outros blocos de dados após atualizar dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Suporte a URL fixa de popup para tarefas de fluxo de trabalho ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - Alternar para o menu de grupo não deve pular para uma página que já foi ocultada no menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe
  - O formulário de filtro não deve exibir o prompt "Alterações não salvas" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe
  - Corrigir o problema de imagens de pré-visualização ficarem obscurecidas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe
  - No formulário de filtro, quando o botão de filtro é clicado, se houver campos que não passaram na validação, a filtragem ainda é acionada ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe
  - Opção "permitir múltiplos" não funcionando para campo de relação ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh
  - No bloco de formulário, o valor padrão da configuração do campo será exibido primeiro como a string de variável original e depois desaparecerá ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe
- **[Campo de coleção: Anexo(URL)]** permitir apenas coleções de arquivos com acesso público à URL ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh
- **[Armazenamento de arquivos: S3(Pro)]**

  - Configurações individuais de baseurl e públicas, melhorar UX de configuração de armazenamento S3 pro por @jiannx
  - Organizar idioma por @jiannx
- **[Fluxo de trabalho: Aprovação]** Suporte a URL fixa para itens de aprovação no centro de tarefas por @mytharcher
- **[Gerenciador de migração]** a opção de pular backup automático torna-se inválida se o popup de variável de ambiente aparecer durante a migração por @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Data de lançamento: 2025-04-16*

#### 🎉 Novos recursos

- **[Campo de coleção: Código]** Adicionar interface de código por @mytharcher

#### 🚀 Melhorias

- **[create-nocobase-app]** Atualizar algumas dependências para as versões mais recentes ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

#### 🐛 Correções de bugs

- **[cliente]**

  - campos herdados mostrados na lista de atribuição de campo da coleção atual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh
  - problema de estilo na entrada de variável ao definir valor padrão ([#6668](https://github.com/nocobase/nocobase/pull/6668)) por @katherinehhh
- **[build]** a saída do build está incorreta quando o plugin depende de algumas bibliotecas AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust
- **[Bloco: iframe]** barra de rolagem vertical aparece quando o bloco iframe está definido para altura total ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh
- **[Controle de acesso]** Corrigir erro lançado ao serializar o modelo de função para cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) por @mytharcher
- **[Fluxo de trabalho]** Corrigir erro de migração lançado do MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) por @mytharcher
- **[Gerenciador de e-mail]** corrigir falha ao sincronizar, sem exibição de assunto e outros pequenos bugs por @jiannx
