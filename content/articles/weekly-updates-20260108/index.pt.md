---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Suporte a componentes de manutenção definidos por plugins quando o aplicativo entra em status de manutenção, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Data de lançamento: 2026-01-04*

### 🎉 Novos Recursos

- **[client]** Suporte a componentes de manutenção definidos por plugin quando o aplicativo entra em status de manutenção ([#8252](https://github.com/nocobase/nocobase/pull/8252)) por @cgyrock
- **[Gerenciador de arquivos]** Suporte à configuração do método de renomeação de arquivos ([#8231](https://github.com/nocobase/nocobase/pull/8231)) por @JAVA-LW
- **[Armazenamento de arquivos: S3(Pro)]** Adicionar opção de modo de renomeação para armazenamento S3 Pro por @mytharcher

### 🚀 Melhorias

- **[Gerenciador de migração]** Verificações de migração aprimoradas, suporte a download de SQL, formatação de log e visibilidade do processo de execução por @cgyrock

### 🐛 Correções de Bugs

- **[database]**

  - Incluir escopo de through ao consultar relacionamentos m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) por @2013xile
  - Corrigir `appends` de objeto em `OptionsParser` e aumentar `arrayLimit` para parâmetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher
- **[client]** Corrigir o problema de erro lançado nas configurações do bloco de formulário de filtro do campo m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) por @mytharcher
- **[Gerenciador de tarefas assíncronas]** Corrigir idioma do cancelamento de tarefa em segundo plano ([#8245](https://github.com/nocobase/nocobase/pull/8245)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir o problema de erro ao fazer upload de arquivo maior que 5MB para AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) por @mytharcher
- **[Workflow]** Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa ([#8207](https://github.com/nocobase/nocobase/pull/8207)) por @cgyrock
- **[Coleção: Árvore]** Atualizar caminhos após criar em lote nós de coleção de árvore ([#8267](https://github.com/nocobase/nocobase/pull/8267)) por @2013xile
- **[Fonte de dados: PostgreSQL Externo]** Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa por @cgyrock
- **[Fonte de dados: Oracle Externo]** Corrigido eventos de banco de dados se tornando inválidos após atualizar a fonte de dados externa por @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Data de lançamento: 2026-01-07*

### 🚀 Melhorias

- **[Workflow: Aprovação]** Simplificar parâmetros na consulta e melhorar o desempenho por @mytharcher

### 🐛 Correções de Bugs

- **[sdk]** Melhorar a implementação de compartilhamento de token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos
- **[client]** corrigir campos de associação de fontes de dados externas não carregando dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
- **[Workflow: Nó de loop]** Corrigir o problema onde o nó com falha no branch de condição não consegue passar o status para o nó de branch superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Controle de acesso]** Permitir que campos de associação se associem usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
- **[Workflow: Webhook]** Corrigir o problema onde o erro 404 é lançado ao postar para URL de webhook em sub-aplicativo por @mytharcher
- **[Gerenciador de e-mail]** Corrigir link de resposta do Outlook ocasionalmente desconectado por @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Data de lançamento: 2026-01-06*

### 🚀 Melhorias

- **[client]** Redimensionar automaticamente textarea no formulário de tarefa de edição de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang
- **[Workflow: Aprovação]** Adicionar lógica de reparo para públicos de sincronização após migração por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigido um problema onde as permissões de campo e ação não eram recalculadas após a paginação em blocos de detalhes, lista e formulário. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust
- **[Workflow: Aprovação]** Corrigir erro de build causado por dependências ausentes por @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Data de lançamento: 2026-01-05*

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Corrigir mensagem de erro incorreta quando um erro de restrição única é acionado durante a importação XLSX assíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Ação: Exportar registros Pro]** Corrigir erro quando sub-aplicativos executam tarefas de importação/exportação assíncronas enquanto o aplicativo principal não habilita o plugin de importação/exportação pro por @cgyrock
- **[Gerenciador de e-mail]** mostrar botão de responder a todos e escopo de dados suporta filtragem de mensagens filhas. por @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Data de lançamento: 2026-01-05*

### 🚀 Melhorias

- **[Controle de acesso]** Melhorar verificações de permissão ao modificar campos de associação aninhados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Correções de Bugs

- **[client]** Corrigir o problema onde os campos de associação não estão corretos no componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
- **[Fonte de dados: Principal]** Metadados da coleção de visualização devem incluir opções de campo de origem ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Workflow: Aprovação]** Corrigir o problema onde os campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Data de lançamento: 2026-01-04*

### 🐛 Correções de Bugs

- **[flow-engine]** Corrigir um problema onde a poluição de estado poderia ocorrer ao abrir popups várias vezes. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust
- **[database]** Corrigir `appends` de objeto em `OptionsParser` e aumentar `arrayLimit` para parâmetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Data de lançamento: 2026-01-07*

### 🚀 Melhorias

- **[client]**

  - evitar re-renderização completa da tabela ao atualizar uma célula ([#8349](https://github.com/nocobase/nocobase/pull/8349)) por @katherinehhh
  - Redimensionar automaticamente textarea no formulário de tarefa de edição de IA. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) por @heziqiang
- **[Workflow: Aprovação]**

  - Adicionar lógica de reparo para públicos de sincronização após migração por @mytharcher
  - Simplificar parâmetros na consulta e melhorar o desempenho por @mytharcher

### 🐛 Correções de Bugs

- **[client]**

  - Corrigido um problema onde as permissões de campo e ação não eram recalculadas após a paginação em blocos de detalhes, lista e formulário. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) por @gchust
  - corrigir campos de associação de fontes de dados externas não carregando dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
- **[sdk]** Melhorar a implementação de compartilhamento de token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) por @chenos
- **[Controle de acesso]** Permitir que campos de associação se associem usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
- **[Workflow: Nó de loop]** Corrigir o problema onde o nó com falha no branch de condição não consegue passar o status para o nó de branch superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Workflow: Webhook]** Corrigir o problema onde o erro 404 é lançado ao postar para URL de webhook em sub-aplicativo por @mytharcher
- **[Workflow: Aprovação]** Corrigir erro de build causado por dependências ausentes por @mytharcher
- **[Gerenciador de e-mail]** Corrigir link de resposta do Outlook ocasionalmente desconectado por @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Data de lançamento: 2026-01-05*

### 🚀 Melhorias

- **[Controle de acesso]** Melhorar verificações de permissão ao modificar campos de associação aninhados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**

  - corrigir lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
  - Corrigir o problema onde os campos de associação não estão corretos no componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
  - corrigir parâmetros de filtro incorretos para o campo de relação Select em subtabela editável ([#8335](https://github.com/nocobase/nocobase/pull/8335)) por @katherinehhh
- **[flow-engine]** Corrigir um problema onde a poluição de estado poderia ocorrer ao abrir popups várias vezes. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) por @gchust
- **[database]** Corrigir `appends` de objeto em `OptionsParser` e aumentar `arrayLimit` para parâmetros ([#8328](https://github.com/nocobase/nocobase/pull/8328)) por @mytharcher
- **[Ação: Importar registros]** Corrigir mensagem de erro incorreta quando um erro de restrição única é acionado durante a importação XLSX assíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Fonte de dados: Principal]** Metadados da coleção de visualização devem incluir opções de campo de origem ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Ação: Exportar registros Pro]** Corrigir erro quando sub-aplicativos executam tarefas de importação/exportação assíncronas enquanto o aplicativo principal não habilita o plugin de importação/exportação pro por @cgyrock
- **[Workflow: Aprovação]** Corrigir o problema onde os campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher
- **[Gerenciador de e-mail]** mostrar botão de responder a todos e escopo de dados suporta filtragem de mensagens filhas. por @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Data de lançamento: 2025-12-25*

### 🚀 Melhorias

- **[flow-engine]**
  - Otimizar problemas de desempenho ao alternar modos de configuração ([#8241](https://github.com/nocobase/nocobase/pull/8241)) por @zhangzhonghe
  - Suportar o objeto FormData no ambiente runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) por @gchust

### 🐛 Correções de Bugs

- **[client]** Corrigir estouro de pilha causado por loop infinito no carregamento preguiçoso de campos de associação de exibição ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe
