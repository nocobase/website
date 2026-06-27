---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "A atualização desta semana inclui: adicionar opções de `transformador de mensagens de erro` na configuração da fonte de dados da API RESTful, permitir escolher se deseja mostrar o snapshot ou o registro mais recente na interface do processo de aprovação, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Data de lançamento: 04/12/2025*

### 🐛 Correções de Bugs

- **[Fluxo de Trabalho: Aprovação]**
  - Corrige o problema quando a listagem de aprovações causa OOM (Out of Memory) por @mytharcher
  - Corrige o problema em que a janela pop-up do aprovador não exibe um título por @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Data de lançamento: 04/12/2025*

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** Campos importados não correspondem aos campos definidos nas configurações de ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) por @2013xile
- **[Fluxo de Trabalho]** Corrige o problema em que a página de execução lança erro quando os jobs em um nó são indefinidos ([#8066](https://github.com/nocobase/nocobase/pull/8066)) por @mytharcher
- **[Controle de acesso]** Adiciona middleware para verificações de permissão em operações de associação para fonte de dados externa ([#8062](https://github.com/nocobase/nocobase/pull/8062)) por @2013xile
- **[Fluxo de Trabalho: Aprovação]**
  - Corrige o problema de erro de permissão lançado ao carregar aprovações relacionadas ao registro no drawer de detalhes por @mytharcher
  - Corrige o problema em que os registros de aprovação não são incluídos no resultado do job no branch de retorno por @mytharcher
  - Corrige o problema em que o processo está incorreto ao ramificar com ordem e contra-assinatura por @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Data de lançamento: 02/12/2025*

### 🐛 Correções de Bugs

- **[cliente]** Corrige o problema de oscilação da caixa de seleção suspensa da regra de vinculação ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
- **[acl]** Corrige um problema em que as meta informações da ACL estão incorretas quando os escopos de permissão da fonte de dados externa usam variáveis relacionadas ao usuário atual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[Editor de temas]** Habilita o alternador de temas em dispositivos móveis ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Gerenciador de múltiplos aplicativos]** Configurações de nível de log não aplicadas a sub-aplicativos ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Data de lançamento: 02/12/2025*

### 🎉 Novos Recursos

- **[Fonte de dados: API REST]** adiciona opção `transformador de mensagem de erro` na configuração da fonte de dados da API RESTful por @cgyrock

### 🚀 Melhorias

- **[cliente]**
  - mostra opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - otimiza mensagens de validação para subtabela ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
- **[Fluxo de Trabalho]** Adiciona contexto de fonte de dados "principal" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Usa componente comum para reduzir código duplicado por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrige bug de carregamento lento no Variable.Input, que pode fazer com que o menu de opções de variáveis seja renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
- **[Ação: Importar registros]** Corrige o problema em que um erro é lançado quando o campo no xlsx importado tem valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Fluxo de Trabalho]** Corrige o problema em que a fila é fechada antes da publicação de mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Fluxo de Trabalho: Subfluxo]** Corrige o problema em que o fluxo de trabalho selecionado exibe "N/A" quando a contagem de fluxos de trabalho é maior que 200 por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**
  - Corrige problema de permissão ao obter `approvalRecords.reassignee` devido à alteração do `RemoteSelect` por @mytharcher
  - Corrige o problema em que a ação de impressão não funciona ao atualizar a página com o modal aberto por @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Data de lançamento: 28/11/2025*

### 🐛 Correções de Bugs

- **[cliente]**
  - Evita erro lançado ao abrir configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - resolve erro ao adicionar registros filhos no bloco de tabela em árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
- **[Departamentos]** Corrige o problema em que os campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Coleção: Árvore]** Corrige falhas de atualização da tabela de caminho causadas pela pesquisa incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigido o problema em que o campo de array m2m na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Fluxo de Trabalho: Aprovação]**
  - Corrige ausência de dados do solicitante no contexto da execução após o usuário reenviar por @mytharcher
  - Corrige o problema em que o comentário no resultado do job é nulo após o usuário enviar aprovação com comentário por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Data de lançamento: 02/12/2025*

### 🚀 Melhorias

- **[cliente]**
  - suporta configuração Permitir Múltiplos no componente de upload de anexos ([#8052](https://github.com/nocobase/nocobase/pull/8052)) por @katherinehhh
  - mostra opções recolhidas ao passar o mouse no componente Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) por @katherinehhh
  - mostra opções recolhidas ao passar o mouse no componente Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) por @katherinehhh
- **[Funcionários de IA]** adiciona campo de provedor ausente ao formulário Adicionar LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) por @heziqiang
- **[Fluxo de Trabalho]** Adiciona contexto de fonte de dados "principal" para UserSelect, a fim de fornecer um componente mais comum que possa ser usado em outros lugares ([#8010](https://github.com/nocobase/nocobase/pull/8010)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problema em que N/A é exibido após desabilitar permitir múltiplos na seleção de registro de associação muitos-para-muitos ([#8050](https://github.com/nocobase/nocobase/pull/8050)) por @katherinehhh
  - Corrige o problema de oscilação da caixa de seleção suspensa da regra de vinculação ([#8018](https://github.com/nocobase/nocobase/pull/8018)) por @zhangzhonghe
  - Corrigido um problema em que alternar um campo de data para um campo de hora na ação de filtro causava um erro de renderização. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) por @gchust
  - Corrigido um problema em que o menu do registro atual aparecia ao adicionar um bloco de comentário. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) por @gchust
  - Corrige falha ao excluir registro no bloco seletor de registro ([#8023](https://github.com/nocobase/nocobase/pull/8023)) por @katherinehhh
  - Corrigido um problema em que o estilo padrão do campo JS no bloco de detalhes estava incorreto. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) por @gchust
  - corrige bloco de tabela em árvore não consegue expandir nós filhos ([#8011](https://github.com/nocobase/nocobase/pull/8011)) por @katherinehhh
  - corrige arrasto de coluna da subtabela não funcionando ([#8026](https://github.com/nocobase/nocobase/pull/8026)) por @katherinehhh
  - corrige largura da coluna da subtabela não aplicada ([#8027](https://github.com/nocobase/nocobase/pull/8027)) por @katherinehhh
  - Resolvido um problema que causava erros ao carregar dados para campos de associação em janelas pop-up, garantindo uma exibição e funcionalidade de dados mais suaves. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) por @gchust
  - corrige problema de estilo do popover do campo de exibição markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) por @katherinehhh
  - Corrigido um problema em que os títulos padrão dos pop-ups de ação de editar e criar novo estavam incorretos. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) por @gchust
  - Corrige bug de carregamento lento no Variable.Input, que pode fazer com que o menu de opções de variáveis seja renderizado incorretamente ([#8009](https://github.com/nocobase/nocobase/pull/8009)) por @mytharcher
  - Corrigido um problema em que a variável de registro do pop-up atual não podia ser resolvida corretamente no pop-up aberto pelo campo de associação. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) por @gchust
- **[acl]** Corrige um problema em que as meta informações da ACL estão incorretas quando os escopos de permissão da fonte de dados externa usam variáveis relacionadas ao usuário atual ([#8013](https://github.com/nocobase/nocobase/pull/8013)) por @2013xile
- **[mecanismo de fluxo]**
  - corrige registro de comentário falha ao salvar após edição ([#8035](https://github.com/nocobase/nocobase/pull/8035)) por @katherinehhh
  - Corrigido um problema em que os blocos de dados não eram atualizados ao fechar um pop-up clicando no botão de envio do formulário dentro do pop-up. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) por @gchust
- **[Editor de temas]** Habilita o alternador de temas em dispositivos móveis ([#8046](https://github.com/nocobase/nocobase/pull/8046)) por @zhangzhonghe
- **[Gerenciador de múltiplos aplicativos (obsoleto)]** Configurações de nível de log não aplicadas a sub-aplicativos ([#8045](https://github.com/nocobase/nocobase/pull/8045)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrige erros ao atualizar senhas para fontes de dados externas ([#8024](https://github.com/nocobase/nocobase/pull/8024)) por @cgyrock
- **[Ação: Importar registros]** Corrige o problema em que um erro é lançado quando o campo no xlsx importado tem valor `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) por @mytharcher
- **[Fluxo de Trabalho]** Corrige o problema em que a fila é fechada antes da publicação de mensagens ([#8003](https://github.com/nocobase/nocobase/pull/8003)) por @mytharcher
- **[Comentários]**
  - Corrige falha ao excluir registro no bloco de comentário por @katherinehhh
  - Corrige exibição de aviso quando o bloco de comentário é usado em uma coleção que não é de comentário por @katherinehhh
- **[Multi-espaço]** Dispositivos móveis suportam alternância de espaço por @jiannx
- **[Fluxo de Trabalho: Subfluxo]** Corrige o problema em que o fluxo de trabalho selecionado exibe "N/A" quando a contagem de fluxos de trabalho é maior que 200 por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**
  - Corrige erro lançado ao criar bloco de informações de aprovação por @mytharcher
  - Adiciona migração para evitar erro de registro duplicado ao adicionar índice por @mytharcher
  - Corrige o problema em que a ação de impressão não funciona ao atualizar a página com o modal aberto por @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Data de lançamento: 29/11/2025*

### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Permite escolher se deve mostrar o snapshot ou o registro mais recente na interface do processo de aprovação por @mytharcher

### 🚀 Melhorias

- **[cliente]** otimiza mensagens de validação para subtabela ([#8001](https://github.com/nocobase/nocobase/pull/8001)) por @katherinehhh
- **[Telemetria: Prometheus]** Atualiza `@opentelemetry/exporter-prometheus` por @2013xile
- **[Ação: Importar registros Pro]** Mensagens de erro aprimoradas para tarefas assíncronas para fornecer aos usuários motivos específicos para falhas de tarefas por @mytharcher

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** Corrigido um problema em que a variável de registro atual não podia ser acionada corretamente para resolução no bloco de detalhes. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) por @gchust
- **[cliente]** Corrige problemas de seleção e exclusão de bloco de tabela para chaves compostas ([#7978](https://github.com/nocobase/nocobase/pull/7978)) por @katherinehhh
- **[Ação: Exportar registros]** corrige campos de sistema ausentes na lista de campos exportáveis ([#8002](https://github.com/nocobase/nocobase/pull/8002)) por @katherinehhh
- **[Coleção: Árvore]** Corrige falhas de atualização da tabela de caminho causadas pela pesquisa incorreta do campo pai da árvore ([#8000](https://github.com/nocobase/nocobase/pull/8000)) por @2013xile
- **[Campo de coleção: Muitos para muitos (array)]** Corrigido o problema em que o campo de array m2m na subtabela não podia ser atualizado ([#7998](https://github.com/nocobase/nocobase/pull/7998)) por @cgyrock
- **[Departamentos]** Corrige o problema em que os campos associados ao departamento não podiam ser editados ([#7462](https://github.com/nocobase/nocobase/pull/7462)) por @heziqiang
- **[Fluxo de Trabalho: Aprovação]** Corrige problema de permissão ao obter `approvalRecords.reassignee` devido à alteração do `RemoteSelect` por @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Data de lançamento: 28/11/2025*

### 🎉 Novos Recursos

- **[Bloco: Mapa]** adiciona bloco de mapa 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) por @katherinehhh
- **[Autenticação: OIDC]** Suporta redirecionamento automático para a URL SSO quando não autenticado por @heziqiang

### 🐛 Correções de Bugs

- **[cliente]**
  - Evita erro lançado ao abrir configurações de valor padrão ([#7997](https://github.com/nocobase/nocobase/pull/7997)) por @mytharcher
  - resolve erro ao adicionar registros filhos no bloco de tabela em árvore de associação ([#7989](https://github.com/nocobase/nocobase/pull/7989)) por @katherinehhh
  - corrige problema de exibição quando o campo markdown é elipsado no modo HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) por @katherinehhh
  - corrige resultados de pesquisa incompletos no seletor em cascata ([#7990](https://github.com/nocobase/nocobase/pull/7990)) por @katherinehhh
  - Corrige o problema em que o estado da guia da página e a rota não correspondem ([#7991](https://github.com/nocobase/nocobase/pull/7991)) por @zhangzhonghe
  - corrige remote select não mostrando o rótulo correto para valor não-objeto ([#7975](https://github.com/nocobase/nocobase/pull/7975)) por @katherinehhh
- **[banco de dados]** Correção: remove o processamento UTC na conversão de tempo para campos somente de hora para evitar deslocamentos induzidos por fuso horário. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) por @ChimingLiu
- **[Fluxo de Trabalho]**
  - Corrige o problema em que execuções preparadas não são enviadas para a fila antes de parar ([#7981](https://github.com/nocobase/nocobase/pull/7981)) por @mytharcher
  - Corrige o problema em que alguns menus de tarefas do fluxo de trabalho não são exibidos ([#7980](https://github.com/nocobase/nocobase/pull/7980)) por @mytharcher
  - Corrige o problema em que o link da tarefa leva a uma página de erro ([#7983](https://github.com/nocobase/nocobase/pull/7983)) por @mytharcher
- **[Visualização de dados]** As configurações de campos de filtro para coleções de fonte de dados externa não exibem propriedades específicas ([#7982](https://github.com/nocobase/nocobase/pull/7982)) por @2013xile
- **[Gerenciador de fonte de dados]** Corrigida falha na atualização da senha da fonte de dados quando a senha do banco de dados é alterada ([#7977](https://github.com/nocobase/nocobase/pull/7977)) por @cgyrock
- **[Ação: Importar registros]** Corrigido o problema ao importar dados em tabela em árvore ([#7976](https://github.com/nocobase/nocobase/pull/7976)) por @cgyrock
- **[Fluxo de Trabalho: Nó manual]** Corrige o problema em que a contagem de tarefas manuais não está correta ([#7984](https://github.com/nocobase/nocobase/pull/7984)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**
  - Corrige ausência de dados do solicitante no contexto da execução após o usuário reenviar por @mytharcher
  - Corrige o problema em que o comentário no resultado do job é nulo após o usuário enviar aprovação com comentário por @mytharcher
