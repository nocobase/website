---
title: "Atualizações Semanais do NocoBase: Suporte ao modelo Gemini-3"
description: "A atualização desta semana inclui: Suporte ao modelo Gemini-3 com assinatura de pensamento de chamada de função, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Data de lançamento: 2026-01-10*

### 🚀 Melhorias

- **[cliente]** Melhora o desempenho da renderização da lista do gerenciador de plugins alterando para CSS nativo webkit para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Corrige o problema onde a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Corrige o problema onde o modo de renomeação de arquivos não funcionava por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrige o bloco de valor não sendo exibido devido à falta do componente `ValueBlock.Result` por @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Data de lançamento: 2026-01-09*

### 🚀 Melhorias

- **[Fluxo de trabalho: Aprovação]** Simplifica parâmetros na consulta e melhora o desempenho por @mytharcher

### 🐛 Correções de Bugs

- **[Fluxo de trabalho: Webhook]** Corrige o problema onde um erro 404 era lançado ao fazer POST para a URL do webhook em sub-aplicativo por @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Data de lançamento: 2026-01-08*

### 🚀 Melhorias

- **[Controle de acesso]** Melhora as verificações de permissão ao modificar campos de associação aninhados ([#7856](https://github.com/nocobase/nocobase/pull/7856)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige campos de associação de fontes de dados externas não carregando dados de associação em blocos de formulário ([#8356](https://github.com/nocobase/nocobase/pull/8356)) por @katherinehhh
  - Corrige o problema onde os campos de associação não estão corretos no componente `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) por @mytharcher
- **[logger]** Corrige informações de erro extras sendo descartadas ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[Fluxo de trabalho: Nó de loop]** Corrige o problema onde o nó com falha em uma ramificação de condição não consegue passar o status para o nó de ramificação superior ([#8360](https://github.com/nocobase/nocobase/pull/8360)) por @mytharcher
- **[Fonte de dados: Principal]** Os metadados da coleção de visualização devem incluir opções de campo de origem ([#8337](https://github.com/nocobase/nocobase/pull/8337)) por @2013xile
- **[Fluxo de trabalho]**

  - Corrige problema de regra de vinculação no bloco de detalhes do nó CC do fluxo de trabalho ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Adiciona ID de instância ao ID Snowflake dos jobs, para evitar problema de conflito de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
  - Corrige o problema onde a página de execução trava quando o fluxo de trabalho é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Ação: Importar registros]** Corrige mensagem de erro incorreta quando um erro de restrição única é acionado durante a importação XLSX assíncrona ([#8342](https://github.com/nocobase/nocobase/pull/8342)) por @cgyrock
- **[Controle de acesso]**

  - Permite que campos de associação se associem usando as chaves de destino ([#8352](https://github.com/nocobase/nocobase/pull/8352)) por @2013xile
  - Corrige um problema onde a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
- **[Fonte de dados: API REST]** Adiciona tolerância a falhas para o contexto da requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher
- **[Ação: Exportar registros Pro]** Corrige erro quando sub-aplicativos executam tarefas assíncronas de importação/exportação enquanto o aplicativo principal não habilita o plugin de importação/exportação pro por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Corrige o problema onde os campos de filtro não funcionam corretamente no centro de tarefas por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Data de lançamento: 2026-01-14*

### 🚀 Melhorias

- **[cliente]** Suporta especificar quando executar o fluxo de eventos. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) por @gchust
- **[Funcionários de IA]**

  - Otimiza o botão de entrada de IA ([#8414](https://github.com/nocobase/nocobase/pull/8414)) por @heziqiang
  - Oculta o construtor de IA na lista de entrada.<br/> Otimiza o fluxo de integração LLM.<br/> Atualiza a documentação sobre o modelo de IA gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) por @heziqiang
- **[Notificação: Mensagem no aplicativo]** Corrige problema de desempenho ao enviar mensagens no aplicativo para um grande número de usuários ([#8402](https://github.com/nocobase/nocobase/pull/8402)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - componente de entrada de número não exibe valor ([#8410](https://github.com/nocobase/nocobase/pull/8410)) por @chenos
  - corrige dados de seleção em cascata não limpos após envio bem-sucedido no formulário de criação ([#8403](https://github.com/nocobase/nocobase/pull/8403)) por @katherinehhh
  - corrige problema com o botão de envio onde pular validação obrigatória não funciona quando a confirmação está habilitada ([#8400](https://github.com/nocobase/nocobase/pull/8400)) por @katherinehhh
  - resolve problema com o botão de envio aparecendo no popup de seleção de arquivos do campo de associação um-para-um ([#8398](https://github.com/nocobase/nocobase/pull/8398)) por @katherinehhh
  - corrige problema onde a configuração de layout no bloco de cartão de grade não surte efeito ([#8399](https://github.com/nocobase/nocobase/pull/8399)) por @katherinehhh
  - corrige impedir atribuição quando caracteres chineses são inseridos no campo numérico ([#8397](https://github.com/nocobase/nocobase/pull/8397)) por @katherinehhh
- **[Campo de coleção: Muitos para muitos (array)]** Corrige erro ao anexar relações muitos-para-muitos(array) de segundo nível em consultas de associação ([#8406](https://github.com/nocobase/nocobase/pull/8406)) por @cgyrock
- **[Multi-espaço]**

  - Espaço relacionado ao adicionar dados associados por @jiannx
  - Cor do seletor de espaço segue o tema por @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Data de lançamento: 2026-01-12*

### 🚀 Melhorias

- **[cliente]** Melhora o desempenho da renderização da lista do gerenciador de plugins alterando para CSS nativo webkit para elipse de texto ([#8391](https://github.com/nocobase/nocobase/pull/8391)) por @mytharcher

### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]** Corrige o problema onde a URL do arquivo era gerada incorretamente para arquivos enviados ao armazenamento S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) por @mytharcher
- **[Fluxo de trabalho]** Corrige o problema onde o ID do esquema não é atualizado no nó duplicado ([#8396](https://github.com/nocobase/nocobase/pull/8396)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** Corrige o problema onde o modo de renomeação de arquivos não funcionava por @mytharcher
- **[Impressão de modelo]** Corrige problema de pop-up de configuração de template obscurecido por @zhangzhonghe
- **[Fluxo de trabalho: Aprovação]** Corrige o bloco de valor não sendo exibido devido à falta do componente `ValueBlock.Result` por @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Data de lançamento: 2026-01-09*

### 🚀 Melhorias

- **[cli]** suporta configuração de URL base CDN via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) por @chenos
- **[Funcionários de IA]** Suporta Anthropic e Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]** corrige lógica de refinamento para targetKey opcional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]** Corrige o problema onde o registro incorreto foi carregado devido a parâmetros errados por @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Data de lançamento: 2026-01-09*

### 🎉 Novos Recursos

- **[teste]** adiciona controle de concorrência em nível de processo para o gerenciador de tarefas base ([#8343](https://github.com/nocobase/nocobase/pull/8343)) por @cgyrock
- **[Funcionários de IA]** Suporta modelo Gemini-3 com assinatura de pensamento de chamada de função ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Melhorias

- **[mecanismo de fluxo]** Adiciona `rowOrder` ao GridModel para garantir ordenação consistente de linhas ([#8371](https://github.com/nocobase/nocobase/pull/8371)) por @zhangzhonghe
- **[Funcionários de IA]**

  - Suporta edição personalizada e atualização automática de prompts do sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang
  - Melhora o tratamento de erros de IA para serviços e modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang
- **[Gerenciador de arquivos]** Adiciona opções de requisição para buscar arquivo OSS no lado do servidor se parâmetros ou cabeçalhos adicionais forem necessários ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde um campo de associação ainda podia abrir um popup após alternar do componente seletor de registro para o componente de seleção. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust
  - Corrigido o problema onde as regras de vinculação não eram reexecutadas após alterar a paginação para bloco de detalhes, bloco de formulário de edição e bloco de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust
  - Corrigido um problema onde os campos configurados de sub-tabela/sub-formulário não eram exibidos durante a alternância de ida e volta dos componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust
- **[logger]** Corrige informações de erro extras sendo descartadas ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[Bloco: template (obsoleto)]** Corrigido um problema onde a página de edição para templates herdados (v1) não podia ser acessada. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) por @gchust
- **[Fluxo de trabalho]**

  - Adiciona ID de instância ao ID Snowflake dos jobs, para evitar problema de conflito de ID em modo cluster ([#8382](https://github.com/nocobase/nocobase/pull/8382)) por @mytharcher
  - Corrige problema de regra de vinculação no bloco de detalhes do nó CC do fluxo de trabalho ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Corrige o problema onde a página de execução trava quando o fluxo de trabalho é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Controle de acesso]** Corrige um problema onde a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
- **[Fonte de dados: API REST]** Adiciona tolerância a falhas para o contexto da requisição, para evitar erro lançado quando o método não está no contexto por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Data de lançamento: 2026-01-08*

### 🎉 Novos Recursos

- **[Funcionários de IA]** Suporta modelo Gemini-3 com assinatura de pensamento de chamada de função ([#8377](https://github.com/nocobase/nocobase/pull/8377)) por @heziqiang

### 🚀 Melhorias

- **[Funcionários de IA]**

  - Melhora o tratamento de erros de IA para serviços e modelos LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) por @heziqiang
  - Suporta edição personalizada e atualização automática de prompts do sistema ([#8378](https://github.com/nocobase/nocobase/pull/8378)) por @heziqiang
- **[Gerenciador de arquivos]** Adiciona opções de requisição para buscar arquivo OSS no lado do servidor se parâmetros ou cabeçalhos adicionais forem necessários ([#8372](https://github.com/nocobase/nocobase/pull/8372)) por @mytharcher

### 🐛 Correções de Bugs

- **[logger]** Corrige informações de erro extras sendo descartadas ao imprimir logs do sistema ([#8367](https://github.com/nocobase/nocobase/pull/8367)) por @cgyrock
- **[cliente]**

  - Corrigido um problema onde um campo de associação ainda podia abrir um popup após alternar do componente seletor de registro para o componente de seleção. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) por @gchust
  - Corrigido o problema onde as regras de vinculação não eram reexecutadas após alterar a paginação para bloco de detalhes, bloco de formulário de edição e bloco de lista. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) por @gchust
  - Corrigido um problema onde os campos configurados de sub-tabela/sub-formulário não eram exibidos durante a alternância de ida e volta dos componentes de campo. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) por @gchust
- **[Fluxo de trabalho]**

  - Corrige problema de regra de vinculação no bloco de detalhes do nó CC do fluxo de trabalho ([#8381](https://github.com/nocobase/nocobase/pull/8381)) por @zhangzhonghe
  - Corrige o problema onde a página de execução trava quando o fluxo de trabalho é excluído ([#8361](https://github.com/nocobase/nocobase/pull/8361)) por @mytharcher
- **[Controle de acesso]** Corrige um problema onde a fonte de dados é resolvida incorretamente ao processar permissões para campos de associação ([#8370](https://github.com/nocobase/nocobase/pull/8370)) por @2013xile
