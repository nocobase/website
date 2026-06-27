---
title: "Atualizações Semanais do NocoBase: Suporte a Variáveis de Agregação Personalizadas"
description: "As atualizações desta semana incluem: adição de uma fila de eventos para processar mensagens na fila e suporte ao carregamento sob demanda de coleções de fontes de dados externas."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Nesta semana, lançamos o [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), com autenticação aprimorada, suporte para variáveis de estatísticas personalizadas, gerenciamento de e-mail atualizado e interação otimizada para fluxos de trabalho e dispositivos móveis.**

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. Destina-se principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Data de lançamento: 09/07/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - A exibição do campo de caixa de seleção está incorreta na coleção de campos de associação dentro do formulário ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe
  - Corrige o problema em que clicar em botões não conseguia abrir pop-ups ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe
- **[Fluxo de trabalho: Nó manual]** Corrige erro lançado ao usar variável ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher
- **[Impressão de modelo]** Adiciona script de migração para o campo rootDataType por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige branch aprovada não executada quando não há responsável por @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Data de lançamento: 07/07/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - Após alterações de campo, os escopos de dados que dependem deste campo devem limpar automaticamente os valores selecionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corrige o problema em que definir a largura da coluna da tabela era ineficaz ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corrige o problema de erro com formulários de filtro no pop-up do botão Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
  - Corrige um erro que ocorria ao salvar uma relação um-para-um em um campo de configuração. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
- **[undefined]** Corrige e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Gerenciador de arquivos]**

  - Corrige detecção de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
  - Corrige erro de build devido ao pacote ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
- **[Formulários públicos]** corrige problema em que o campo Apenas Data falhava ao selecionar data no formulário público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Fluxo de trabalho]** Corrige o problema em que vários deslizes para a esquerda eram necessários para retornar à página anterior em dispositivos móveis ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Visualização de dados]** Problema de paginação da tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Fluxo de trabalho: Aprovação]**

  - Corrige associações não carregadas após retirada por @mytharcher
  - Remove transação de correção de esquema devido a timeout por @mytharcher
  - Corrige erro lançado quando aprovação é excluída por @mytharcher
  - Corrige atualização de associação ao enviar por @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Data de lançamento: 03/07/2025*

#### 🚀 Melhorias

- **[database]** Suporte para adicionar opções de pool a partir de env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Fluxo de trabalho]**

  - Melhora o desempenho de carregamento da lista de execuções excluindo o campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Adiciona API de log para teste de nós ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Gerenciador de multi-aplicativos]** adiciona suporte a filtro no gerenciamento de multi-aplicativos ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Altera o tempo para absoluto na linha do tempo por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Definir o displayName do campo na visão conectada não tinha efeito ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - Problema de estilo de cor de fundo na subtabela no bloco de detalhes ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - Configuração de UI do nó manual do fluxo de trabalho: regras de vinculação não podem selecionar variáveis do formulário atual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
  - Valor padrão do campo de associação sobrescreve dados existentes na subtabela ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
  - markdown não refletia alterações em tempo real ao referenciar variáveis $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
  - Tolerância a falhas para configurações baseadas em 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
- **[utils]** problema de filtragem em DateOnly ou Datetime (sem fuso horário) usando variável de dia exato ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[Fluxo de trabalho]** Corrige erro lançado por importação cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[Política de senha]** Suporte para bloquear permanentemente contas de usuário por @2013xile
- **[Fluxo de trabalho: Subfluxo]** Corrige problema no modo cluster por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Remove campos não filtráveis do filtro por @mytharcher
  - Adiciona configurações de layout de formulário por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Data de lançamento: 07/07/2025*

#### 🎉 Novos Recursos

- **[servidor]** Adiciona fila de eventos para processar mensagens na fila ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Move componentes comuns para o plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Após alterações de campo, os escopos de dados que dependem deste campo devem limpar automaticamente os valores selecionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corrige o problema em que definir a largura da coluna da tabela era ineficaz ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corrige o problema de erro com formulários de filtro no pop-up do botão Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
  - Corrige um erro que ocorria ao salvar uma relação um-para-um em um campo de configuração. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
- **[undefined]** Corrige e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Calendário]** define o dia de início da semana como 'segunda-feira' no bloco de calendário ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh
- **[Fluxo de trabalho]** Corrige o problema em que vários deslizes para a esquerda eram necessários para retornar à página anterior em dispositivos móveis ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Gerenciador de arquivos]**

  - Corrige erro de build devido ao pacote ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
  - Corrige detecção de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrige importação incorreta de variável ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher
- **[Formulários públicos]** corrige problema em que o campo Apenas Data falhava ao selecionar data no formulário público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Remove transação de correção de esquema devido a timeout por @mytharcher
  - Corrige associações não carregadas após retirada por @mytharcher
  - Corrige erro lançado quando aprovação é excluída por @mytharcher
  - Corrige atualização de associação ao enviar por @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Data de lançamento: 03/07/2025*

#### 🎉 Novos Recursos

- **[client]**

  - Suporte ao campo BIT no SQL Server para fontes de dados externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
  - Suporte a variáveis de agregação personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
    Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** suporte a autorização comercial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) por @jiannx
- **[Gerenciador de fonte de dados]** ✨ Suporte ao carregamento sob demanda de coleções de fontes de dados externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Configurações de licença]** adiciona configuração de licença e valida a licença antes de baixar plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) por @jiannx
- **[Autenticação]** Suporte à função "Esqueci a Senha" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) por @zhangzhonghe
  Referência: [Esqueci a senha](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Ação: Atualização em lote]** Suporte à atualização de dados em outros blocos de dados após a atualização de dados em um bloco ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe
- **[Fonte de dados: SQL Server externo]**

  - Adicionado suporte ao campo BIT do SQL Server em fontes de dados externas por @aaaaaajie
  - Suporte ao carregamento sob demanda de coleções de fontes de dados externas por @aaaaaajie
- **[Variáveis personalizadas]** Suporte a variáveis de agregação personalizadas por @zhangzhonghe
  Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gerenciador de e-mail]**

  - suporte para excluir e-mail por @jiannx
  - suporte para configuração de intervalo de sincronização de e-mail por @jiannx
  - suporte para envio em massa por @jiannx

#### 🚀 Melhorias

- **[client]**

  - Suporte ao preenchimento de campos de entrada via leitura de código QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) por @katherinehhh
  - Determina se deve exibir os componentes móveis com base no tipo de dispositivo, em vez da largura da página ([#6611](https://github.com/nocobase/nocobase/pull/6611)) por @zhangzhonghe
  - suporte à localização para o conteúdo do bloco Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) por @katherinehhh
  - Determina se deve exibir o layout móvel com base no tipo de dispositivo, em vez da largura da página ([#6600](https://github.com/nocobase/nocobase/pull/6600)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Melhora o desempenho da criação de tarefas durante a exportação ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie
- **[Móvel]** Adapta o estilo do pop-up de notificação para dispositivos móveis ([#6557](https://github.com/nocobase/nocobase/pull/6557)) por @zhangzhonghe
- **[Gerenciador de e-mail]**

  - suporte para resposta e encaminhamento separados de e-mails dentro do mesmo assunto por @jiannx
  - implementação de esquema e envio de e-mail com suporte a IA por @jiannx
  - suporta o valor de envio padrão em pop-up, suporta pesquisa difusa para destinatários e corrige problemas por @jiannx
  - completa a função de envio em massa por @jiannx
  - melhoria funcional e correção de problemas por @jiannx

#### 🐛 Correções de Bugs

- **[cli]**

  - Ajusta a cópia da licença ao instalar o plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx
  - erro indefinido no download de plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx
- **[client]**

  - Após limpar o valor do badge, a UI não é atualizada ([#7055](https://github.com/nocobase/nocobase/pull/7055)) por @zhangzhonghe
  - Erro ao clicar no botão de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
  - Corrige o problema em que os dados do usuário atual estão vazios ([#7016](https://github.com/nocobase/nocobase/pull/7016)) por @zhangzhonghe
  - O conteúdo exibido incorretamente em páginas abertas através de links pop-up ([#6990](https://github.com/nocobase/nocobase/pull/6990)) por @zhangzhonghe
  - Passa outras props para o componente Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) por @sheldon66
  - A ação Salvar como modelo falhará se contiver campo de associação ([#6543](https://github.com/nocobase/nocobase/pull/6543)) por @gchust
- **[database]** torna o operador eq para campos de string compatível com o tipo número ([#7062](https://github.com/nocobase/nocobase/pull/7062)) por @chenos
- **[build]** corrige o erro de tempo de execução do cliente em plugin-workflow-javascript, erro de processo indefinido ([#6859](https://github.com/nocobase/nocobase/pull/6859)) por @jiannx
- **[Visualização de dados]** Problema de paginação da tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrige um problema em que a combinação de carregamento sob demanda de fonte de dados e configuração de prefixo de tabela causava um erro "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
- **[plugin-service-platform]** ajusta o texto da licença por @jiannx
- **[Variáveis personalizadas]** Após limpar o valor do badge, a UI não é atualizada por @zhangzhonghe
- **[Gerenciador de e-mail]**

  - anexo não exibido por @jiannx
  - erro de exclusão de e-mail por @jiannx
  - falha ao excluir e-mail por @jiannx
  - pop-up de configuração não exibido por @jiannx
  - gaveta de resposta não visível por @jiannx
  - pesquisa difusa de destinatário suporta campos associados por @jiannx
  - adiciona o campo "id" ao mailmessagelabelsMailmessages por @jiannx
  - pesquisa difusa de e-mail para criar filtros únicos por @jiannx
  - múltiplas chaves primárias para a tabela "mailmessagelabels_mailmessages" por @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Data de lançamento: 03/07/2025*

#### 🚀 Melhorias

- **[database]** Suporte para adicionar opções de pool a partir de env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher
- **[Fluxo de trabalho]**

  - Melhora o desempenho de carregamento da lista de execuções excluindo o campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher
  - Adiciona API de log para teste de nós ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher
- **[Gerenciador de multi-aplicativos]** adiciona suporte a filtro no gerenciamento de multi-aplicativos ([#7124](https://github.com/nocobase/nocobase/pull/7124)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Altera o tempo para absoluto na linha do tempo por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - markdown não refletia alterações em tempo real ao referenciar variáveis $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
  - Problema de estilo de cor de fundo na subtabela no bloco de detalhes ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - Configuração de UI do nó manual do fluxo de trabalho: regras de vinculação não podem selecionar variáveis do formulário atual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe
  - Definir o displayName do campo na visão conectada não tinha efeito ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie
  - Valor padrão do campo de associação sobrescreve dados existentes na subtabela ([#7120](https://github.com/nocobase/nocobase/pull/7120)) por @katherinehhh
  - Tolerância a falhas para configurações baseadas em 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher
- **[utils]** problema de filtragem em DateOnly ou Datetime (sem fuso horário) usando variável de dia exato ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh
- **[Fluxo de trabalho]** Corrige erro lançado por importação cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher
- **[Política de senha]** Suporte para bloquear permanentemente contas de usuário por @2013xile
- **[Fluxo de trabalho: Subfluxo]** Corrige problema no modo cluster por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Remove campos não filtráveis do filtro por @mytharcher
  - Adiciona configurações de layout de formulário por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Data de lançamento: 07/07/2025*

#### 🎉 Novos Recursos

- **[servidor]** Adiciona fila de eventos para processar mensagens na fila ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Move componentes comuns para o plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Após alterações de campo, os escopos de dados que dependem deste campo devem limpar automaticamente os valores selecionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe
  - Corrige o problema em que definir a largura da coluna da tabela era ineficaz ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe
  - Corrige um erro que ocorria ao salvar uma relação um-para-um em um campo de configuração. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie
  - Corrige o problema de erro com formulários de filtro no pop-up do botão Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe
- **[undefined]** Corrige e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher
- **[Gerenciador de arquivos]**

  - Corrige erro de build devido ao pacote ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher
  - Corrige detecção de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher
- **[Formulários públicos]** corrige problema em que o campo Apenas Data falhava ao selecionar data no formulário público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh
- **[Calendário]** define o dia de início da semana como 'segunda-feira' no bloco de calendário ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh
- **[Fluxo de trabalho: Nó manual]** Corrige importação incorreta de variável ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher
- **[Fluxo de trabalho]** Corrige o problema em que vários deslizes para a esquerda eram necessários para retornar à página anterior em dispositivos móveis ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]**

  - Corrige atualização de associação ao enviar por @mytharcher
  - Corrige erro lançado quando aprovação é excluída por @mytharcher
  - Corrige associações não carregadas após retirada por @mytharcher
- **[Gerenciador de e-mail]**

  - após selecionar linhas, define "Lido" e "Não lido" por @jiannx
  - conteúdo de sub-e-mail não pode ser filtrado por @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Data de lançamento: 04/07/2025*

#### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Aprovação]** Remove transação de correção de esquema devido a timeout por @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Data de lançamento: 03/07/2025*

#### 🚀 Melhorias

- **[Gerenciador de e-mail]** suporte para resposta e encaminhamento separados de e-mails dentro do mesmo assunto por @jiannx

#### 🐛 Correções de Bugs

- **[client]**

  - Problema de estilo de cor de fundo na subtabela no bloco de detalhes ([#7144](https://github.com/nocobase/nocobase/pull/7144)) por @katherinehhh
  - markdown não refletia alterações em tempo real ao referenciar variáveis $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) por @katherinehhh
- **[Visualização de dados]** Problema de paginação da tabela ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrige um problema em que a combinação de carregamento sob demanda de fonte de dados e configuração de prefixo de tabela causava um erro "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) por @aaaaaajie
