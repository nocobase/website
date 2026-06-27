---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para exibição de tabelas definidas por plugins na fonte de dados principal, execuções de teste para nós e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Data de lançamento: 24/07/2025*

#### 🎉 Novos Recursos

* **[Auth: SAML 2.0]** Suporte ao redirecionamento automático para a URL SSO quando o usuário não está autenticado por @2013xile
* **[servidor]** Suporte à configuração do limite de tamanho do corpo da requisição via variável de ambiente ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
* **[Workflow: Nó paralelo]** Adicionado modo "Todos resolvidos" para o nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
* **[Adaptador de fila Redis]** Adicionado adaptador Redis para fila de eventos por @mytharcher

#### 🚀 Melhorias

* **[Workflow]** Adicionado tipo constante json para variável de teste ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
* **[Integração de IA]** Removido `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
* **[Workflow: Cálculo JSON]** Tornar o nó de consulta JSON testável por @mytharcher
* **[servidor]** Tornar a fila de memória concorrente disponível quando o processamento de itens não está completo ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
* **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
* **[Workflow: Nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
* **[Adaptador de fila Redis]** Tornar a fila concorrente disponível quando o processamento de itens não está completo para o adaptador Redis por @mytharcher

#### 🐛 Correções de Bugs

* **[cliente]**
  * pesquisa difusa não funciona no campo de seleção de associação ao usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  * variável de objeto atual ausente nas regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  * Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
  * Corrigido problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  * Após alterações de campo, os campos de associação que dependem deste campo não limparam seus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  * problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
* **[banco de dados]**
  * Resolver falha de paginação simples automática causada pela convenção de nomenclatura de tabelas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  * Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  * Corrigido problema onde a ordenação padrão por chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL no bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
* **[auth]** Corrigido o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
* **[Gerenciador de fonte de dados]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
* **[Ação: Edição em lote]** Incapaz de realizar edição em massa e atualização em massa no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
* **[Workflow]** Corrigida versão errada da dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
* **[Fonte de dados: Oracle externo]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção por @aaaaaajie
* **[Workflow: Aprovação]** A URL do botão Link aponta para um popup na página atual, mas clicar mostra um erro 404 por @zhangzhonghe
* **[Gerenciador de e-mail]** a coleção de relacionamento de mensagens e rótulos é excepcional sob mysql por @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Data de lançamento: 18/07/2025*

#### 🎉 Novos Recursos

- **[Workflow: nó de cálculo de data]** Suporte para executar nó de teste por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Seletor de cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Workflow]** Tornar a comparação compatível para valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - regras de estilo não funcionam na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
  - Evitar que campos não associados sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
- **[Workflow: Subfluxo]** Corrigido erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Data de lançamento: 24/07/2025*

#### 🎉 Novos Recursos

- **[servidor]** Suporte à configuração do limite de tamanho do corpo da requisição via variável de ambiente ([#7273](https://github.com/nocobase/nocobase/pull/7273)) por @aaaaaajie
- **[Workflow: Nó paralelo]** Adicionado modo "Todos resolvidos" para o nó paralelo ([#7263](https://github.com/nocobase/nocobase/pull/7263)) por @mytharcher
- **[Auth: SAML 2.0]** Suporte ao redirecionamento automático para a URL SSO quando o usuário não está autenticado por @2013xile
- **[Adaptador de fila Redis]** Adicionado adaptador Redis para fila de eventos por @mytharcher
- **[Workflow: nó de cálculo de data]** Suporte para executar nó de teste por @mytharcher

#### 🚀 Melhorias

- **[servidor]** Tornar a fila de memória concorrente disponível quando o processamento de itens não está completo ([#7267](https://github.com/nocobase/nocobase/pull/7267)) por @mytharcher
- **[banco de dados]** Ativa automaticamente a paginação simples quando o conjunto de dados excede um limite ([#7227](https://github.com/nocobase/nocobase/pull/7227)) por @aaaaaajie
- **[cliente]** Seletor de cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Integração de IA]** Removido `await` para invocar `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) por @mytharcher
- **[Workflow: Nó manual]** storePopupContext suporta salvar contexto padrão ([#7264](https://github.com/nocobase/nocobase/pull/7264)) por @zhangzhonghe
- **[Workflow]**
  - Adicionado tipo constante json para variável de teste ([#7274](https://github.com/nocobase/nocobase/pull/7274)) por @mytharcher
  - Usar registro em log em vez de lançar erro quando a execução não deve ser executada devido ao status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher
  - Tornar a comparação compatível para valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher
- **[Campo de coleção: Fórmula]** Adicionar mais interfaces calculáveis ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher
- **[Adaptador de fila Redis]** Tornar a fila concorrente disponível quando o processamento de itens não está completo para o adaptador Redis por @mytharcher
- **[Workflow: Cálculo JSON]** Tornar o nó de consulta JSON testável por @mytharcher
- **[Workflow: Aprovação]** Suporte para excluir aprovação quando dados relacionados são excluídos por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - pesquisa difusa não funciona no campo de seleção de associação ao usar fórmula como campo de título ([#7280](https://github.com/nocobase/nocobase/pull/7280)) por @katherinehhh
  - variável de objeto atual ausente nas regras de vinculação de subtabela ([#7266](https://github.com/nocobase/nocobase/pull/7266)) por @katherinehhh
  - Após alterações de campo, os campos de associação que dependem deste campo não limparam seus valores ([#7262](https://github.com/nocobase/nocobase/pull/7262)) por @zhangzhonghe
  - Corrigido problema onde campos Markdown não eram renderizados corretamente na visualização de detalhes. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) por @aaaaaajie
  - Configuração do campo de título do seletor de dados é inválida ([#7251](https://github.com/nocobase/nocobase/pull/7251)) por @zhangzhonghe
  - Evitar que campos não associados sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
  - regras de estilo não funcionam na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - problema de exibição quando variáveis de data obsoletas são usadas em campos de data de dados históricos ([#7253](https://github.com/nocobase/nocobase/pull/7253)) por @katherinehhh
  - problema de exibição para campos de associação em regras de vinculação ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh
  - Corrigido erro: Não é possível resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
- **[banco de dados]**
  - Resolver falha de paginação simples automática causada pela convenção de nomenclatura de tabelas. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) por @aaaaaajie
  - Corrigido problema onde a ordenação padrão por chave primária causa falha no carregamento da lista ao usar fonte de dados externa MSSQL no bloco de tabela. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) por @aaaaaajie
  - Corrigida falha ao exportar grandes conjuntos de dados do PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) por @aaaaaajie
  - Corrigido erro ao ativar paginação simples para tabelas de fonte de dados externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[auth]** Corrigido o problema onde um `secret` vazio na configuração da sub-aplicação impede o login ([#7239](https://github.com/nocobase/nocobase/pull/7239)) por @2013xile
- **[Workflow]** Corrigida versão errada da dependência ([#7258](https://github.com/nocobase/nocobase/pull/7258)) por @mytharcher
- **[Ação: Edição em lote]** Incapaz de realizar edição em massa e atualização em massa no seletor de dados ([#7250](https://github.com/nocobase/nocobase/pull/7250)) por @zhangzhonghe
- **[Gerenciador de fonte de dados]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção ([#7249](https://github.com/nocobase/nocobase/pull/7249)) por @aaaaaajie
- **[Campo de coleção: Ordenação]** seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Fonte de dados: Oracle externo]** Corrigida preservação de atributos de fonte de dados externa na configuração de coleção por @aaaaaajie
- **[Workflow: Subfluxo]** Corrigido erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher
- **[Workflow: Aprovação]**
  - Corrigidos múltiplos níveis de associações ao enviar aprovação por @mytharcher
  - A URL do botão Link aponta para um popup na página atual, mas clicar mostra um erro 404 por @zhangzhonghe
  - Corrigidas associações ao enviar aprovação por @mytharcher
  - Adicionada tolerância a falhas para aprovação excluída na lista de registros por @mytharcher
  - Corrigida exceção ao excluir registro por @mytharcher
- **[Gerenciador de e-mail]** a coleção de relacionamento de mensagens e rótulos é excepcional sob mysql por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Data de lançamento: 18/07/2025*

#### 🎉 Novos Recursos

- **[Fonte de dados: Principal]** Suporte à exibição de tabelas definidas por plugin na fonte de dados principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie
- **[Workflow: nó de cálculo de data]** Suporte para executar nó de teste por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Seletor de cores: Adicionar quatro cores recomendadas ([#7226](https://github.com/nocobase/nocobase/pull/7226)) por @zhangzhonghe
- **[Workflow]** Tornar a comparação compatível para valores de data ([#7237](https://github.com/nocobase/nocobase/pull/7237)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**
  - regras de estilo não funcionam na coluna de ação da tabela ([#7225](https://github.com/nocobase/nocobase/pull/7225)) por @katherinehhh
  - Evitar que campos não associados sejam selecionados em appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) por @mytharcher
  - Corrigido erro: Não é possível resolver 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) por @zhangzhonghe
  - Ao excluir um menu, os dados correspondentes na tabela uiSchemas não são excluídos ([#7232](https://github.com/nocobase/nocobase/pull/7232)) por @zhangzhonghe
- **[banco de dados]** Corrigido erro ao ativar paginação simples para tabelas de fonte de dados externa ([#7222](https://github.com/nocobase/nocobase/pull/7222)) por @aaaaaajie
- **[Campo de coleção: Ordenação]** seleção de campo de ordenação ausente ao duplicar registros ([#7116](https://github.com/nocobase/nocobase/pull/7116)) por @katherinehhh
- **[Workflow: Subfluxo]** Corrigido erro lançado quando o sinal de recall chega, mas a execução pendente não está na instância atual por @mytharcher
- **[Workflow: Aprovação]**
  - Corrigidos múltiplos níveis de associações ao enviar aprovação por @mytharcher
  - Adicionada tolerância a falhas para aprovação excluída na lista de registros por @mytharcher
- **[Gerenciador de e-mail]** desempenho otimizado da lista de mensagens de e-mail por @jiannx
