---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: adição de um tipo de template inline para configuração de notificações e suporte a títulos de tarefas consistentes em todos os nós de aprovação no mesmo fluxo de trabalho."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser consultadas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Data de lançamento: 27/08/2025*

#### 🐛 Correções de Bugs

- **[Fluxo de Trabalho]** Corrigido o problema em que o pop-up de detalhes não era exibido devido a uma configuração de rota incorreta no centro de tarefas ([#7452](https://github.com/nocobase/nocobase/pull/7452)) por @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Data de lançamento: 26/08/2025*

#### 🐛 Correções de Bugs

- **[Gerenciador de Arquivos]** Corrigido o erro ao editar o campo `storage` na coleção de arquivos. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) por @mytharcher
- **[Fluxo de Trabalho: Nó paralelo]** Corrigido o problema em que a determinação incorreta de status em nós de ramificação paralela no modo "Executar todas as ramificações" causava conclusão prematura ([#7445](https://github.com/nocobase/nocobase/pull/7445)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Adicionada a variável de status para modelos personalizados em notificações de conclusão de aprovação por @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Data de lançamento: 25/08/2025*

#### 🚀 Melhorias

- **[Fluxo de Trabalho]** Ajustada a API de variáveis do fluxo de trabalho para suportar a pré-definição de uma lista de variáveis adicional ([#7439](https://github.com/nocobase/nocobase/pull/7439)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Suporte ao uso de variáveis relacionadas à aprovação em notificações personalizadas por @mytharcher
  - Suporte à atualização do status de aprovação após o nó final encerrar a execução por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema em que, em certos cenários, editar um registro no pop-up do seletor de registros móvel causava um erro ([#7444](https://github.com/nocobase/nocobase/pull/7444)) por @zhangzhonghe
  - validação obrigatória não funcionando para campos de anexo em subtabela ([#7431](https://github.com/nocobase/nocobase/pull/7431)) por @katherinehhh
  - Corrigido o problema em que o ícone era exibido incorretamente quando a URL no campo de URL do anexo continha parâmetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
- **[banco de dados]**

  - Corrigido um erro de sintaxe MySQL que ocorria ao carregar mais mensagens no aplicativo. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) por @aaaaaajie
  - Corrigido problema de precisão para campos Numéricos exportados ([#7421](https://github.com/nocobase/nocobase/pull/7421)) por @aaaaaajie
- **[indefinido]** Corrigido problema com filtragem apenas por campo de data em fonte externa MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) por @aaaaaajie
- **[Ação: Importar registros]** Corrigido um problema em que a importação falhava quando a chave primária da tabela era um texto de linha única ([#7416](https://github.com/nocobase/nocobase/pull/7416)) por @aaaaaajie
- **[Fluxo de Trabalho]**

  - Completadas as opções para excluir automaticamente o status de execução do fluxo de trabalho ([#7436](https://github.com/nocobase/nocobase/pull/7436)) por @mytharcher
  - Corrigidos problemas relacionados ao menu móvel nas tarefas do fluxo de trabalho ([#7419](https://github.com/nocobase/nocobase/pull/7419)) por @mytharcher
- **[Ação: Importar registros Pro]** Corrigido resultado de atualização inesperado ao usar chave primária de string na importação xlsx. por @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Data de lançamento: 22/08/2025*

#### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Adicionado tipo de modelo inline para configuração de notificação por @mytharcher

#### 🚀 Melhorias

- **[cliente]** Suporte à exibição de ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[banco de dados]** Otimizada a performance da consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[Móvel]** Otimizado o componente de pop-up móvel ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[banco de dados]** Corrigido problema em que a leitura de tabela externa Postgres incluía visualizações de outros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[Bloco: template]** Resolvido um problema em que os blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Ação: Importar registros Pro]** Não permitir a atribuição de campos de relação durante a detecção de duplicatas na importação. por @aaaaaajie
- **[Fluxo de Trabalho: Aprovação]** Corrigido o problema em que a lista de usuários estava vazia durante a aprovação conjunta por @mytharcher
- **[Gerenciador de Migração]** Ignorar os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Data de lançamento: 22/08/2025*

#### 🎉 Novos Recursos

- **[cliente]** Adicionada opção "Foco automático" para componentes Input, TextArea, URL e InputNumber que foca automaticamente o campo de entrada durante a renderização inicial da página quando ativado ([#7320](https://github.com/nocobase/nocobase/pull/7320)) por @zhangzhonghe
- **[Gerenciador de tarefas assíncronas]** Suporte para dividir serviços de tarefas assíncronas por ambiente e fila de eventos ([#7241](https://github.com/nocobase/nocobase/pull/7241)) por @mytharcher
- **[Visualizador de Arquivos do Office]** Suporte para visualizar arquivos do Office via visualização ao vivo da Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) por @mytharcher
- **[Autenticação: SAML 2.0]** Adicionadas opções de configuração relacionadas à assinatura por @2013xile
- **[Fluxo de Trabalho: Aprovação]**

  - Adicionado tipo de modelo inline para configuração de notificação por @mytharcher
  - Suporte para usar um título de tarefa consistente para todos os nós de aprovação no mesmo fluxo de trabalho por @mytharcher

#### 🚀 Melhorias

- **[banco de dados]** Otimizada a performance da consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[cliente]**

  - Suporte à exibição de ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
  - adicionado suporte à variável de data "anteontem" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Otimizada a performance ao alternar abas de pop-up ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
  - Não fechar o menu automaticamente após a seleção ([#7252](https://github.com/nocobase/nocobase/pull/7252)) por @kerwin612
- **[Móvel]** Otimizado o componente de pop-up móvel ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Fluxo de Trabalho]**

  - Atualizado o menu de seleção de nós para exibir opções em um layout de duas colunas para melhorar a densidade de informações e permitir que os usuários vejam mais opções de uma só vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
  - Corrigido caso de teste instável ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - Mostrar título normal quando desabilitado ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
  - Reduzir a quantidade de jobs a carregar ao preparar a execução ([#7284](https://github.com/nocobase/nocobase/pull/7284)) por @mytharcher
- **[Configurações de licença]** Nas configurações de licença, copiar o ID de Instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Autenticação]** Removido o parâmetro token da URL após um login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Notificação: Mensagem no aplicativo]**

  - Removidos logs SQL emitidos via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
  - Alterada a mensagem no aplicativo de SSE para WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) por @mytharcher
- **[Visualizador de Arquivos do Office]** Adicionado suporte para visualizar arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Ação: Importar registros Pro]** Suporte para dividir serviços de importação/exportação por ambiente e fila de eventos por @mytharcher
- **[Fluxo de Trabalho: JavaScript]** Alterado cache para cache de aplicativo para evitar bugs em modo cluster por @mytharcher
- **[Impressão de template]** suporte a array de campo m2m por @jiannx
- **[Gerenciador de backup]** melhorada a performance para operação de backup de banco de dados MySQL por @gchust
- **[Autenticação: DingTalk]** No cliente DingTalk, definir o título da barra de navegação como uma string vazia em vez de exibir "Carregando..." por @2013xile
- **[Gerenciador de Migração]** Suporte para dividir serviço de migração por ambiente e fila de eventos por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido o problema em que o ícone era exibido incorretamente quando a URL no campo de URL do anexo continha parâmetros de consulta ([#7432](https://github.com/nocobase/nocobase/pull/7432)) por @mytharcher
  - tratar o número 0 como vazio durante a validação de vazio da regra de vinculação ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Corrigido texto do botão de link quebrando linha ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
  - Corrigido o problema em que o layout de formulário de múltiplas colunas não convertia para layout de coluna única em dispositivos móveis ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Corrigido erro ao excluir coleções em massa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Corrigido problema em que o escopo de dados salvo anteriormente não era pré-selecionado ao configurar permissões individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Corrigido o problema em que strings brutas de variáveis são enviadas com o formulário ([#7337](https://github.com/nocobase/nocobase/pull/7337)) por @zhangzhonghe
  - Ao usar variáveis para definir valores padrão de campo em formulários de filtro, se o valor da variável estiver vazio, a caixa de entrada exibirá a string da variável original ([#7335](https://github.com/nocobase/nocobase/pull/7335)) por @zhangzhonghe
  - Corrigido tooltip mostrando [object Object] ao passar o mouse no painel de ações ([#7322](https://github.com/nocobase/nocobase/pull/7322)) por @katherinehhh
  - Corrigido problema de loop infinito ao analisar valores padrão de campo ([#7301](https://github.com/nocobase/nocobase/pull/7301)) por @zhangzhonghe
  - Corrigido item de pré-visualização de arquivo em url nulo ([#7315](https://github.com/nocobase/nocobase/pull/7315)) por @mytharcher
  - Corrigido problema em que a tabela em árvore não podia ser expandida ([#7309](https://github.com/nocobase/nocobase/pull/7309)) por @zhangzhonghe
  - Adicionar URL completa ao arquivo local ao pré-visualizar ([#7314](https://github.com/nocobase/nocobase/pull/7314)) por @mytharcher
  - Corrigido comportamento inesperado na classificação por arrastar e soltar de linhas da tabela ([#6959](https://github.com/nocobase/nocobase/pull/6959)) por @ChimingLiu
  - problema de exibição do campo de data no pop-up do seletor de dados de campo de associação do formulário de filtro ([#7290](https://github.com/nocobase/nocobase/pull/7290)) por @katherinehhh
- **[banco de dados]** Corrigido problema em que a leitura de tabela externa Postgres incluía visualizações de outros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[servidor]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[indefinido]** Adicionar novo plugin ao preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) por @mytharcher
- **[utils]** manipulação incorreta de fuso horário para parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) por @katherinehhh
- **[Bloco: template]** Resolvido um problema em que os blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Móvel]**

  - formato de exibição incorreto do campo de data no móvel ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Corrigido o problema em que os dados de envio do formulário no diálogo de aprovação móvel estavam incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
  - Resolvido um problema em que o seletor de data em dispositivos móveis exibia incorretamente quando limites de intervalo de data eram aplicados ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Fluxo de Trabalho]**

  - Corrigido erro lançado e dados do formulário desaparecidos ao editar categoria do fluxo de trabalho ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Corrigida a tradução do título da página no centro de tarefas do fluxo de trabalho ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
  - Refatorado o menu "Adicionar Nó" e corrigidos os problemas de performance de renderização do canvas do fluxo de trabalho que ele causava ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Corrigido o problema de condições de filtro incorretas ao recuperar um único item de tarefa ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Corrigido o problema de correspondência de palavras-chave na seleção de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Evitar erro lançado causado pela publicação na fila de eventos ao parar ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
  - Corrigido resultado `undefined` quando o processador sai ([#7317](https://github.com/nocobase/nocobase/pull/7317)) por @mytharcher
  - Corrigido problema de ID BigInt no MySQL ao salvar job ([#7292](https://github.com/nocobase/nocobase/pull/7292)) por @mytharcher
- **[Fluxo de Trabalho: nó de e-mail]** Corrigido o problema em que o nó de e-mail poderia não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Visualizador de Arquivos do Office]**

  - Corrigido erro lançado ao fazer upload de arquivo para campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
  - Suporte para arquivos `.docx`, `.xlsx` e `.pptx` com apenas URL serem visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Gerenciador de Arquivos]**

  - Removida a dica para o limite de tamanho de upload de arquivo ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
  - Adicionado campo `storageId` à coleção de arquivos para suportar configuração de permissão ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
  - Corrigida permissão do campo storage ([#7316](https://github.com/nocobase/nocobase/pull/7316)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]**

  - Corrigidas traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
  - Corrigido o problema em que mensagens no site eram recebidas mas não exibidas em um pop-up ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Calendário]** tooltip do item de evento do calendário mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Campo de coleção: Fórmula]** Corrigido o problema em que a entrada de fórmula não passava na validação devido ao tipo de variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Fluxo de Trabalho: Nó paralelo]** Corrigida suspensão do nó paralelo após retomar no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Fluxo de Trabalho: Cópia]** Corrigido problema em que blocos não podiam ser removidos ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualização de dados]** problema de variável de data no valor padrão do campo de data no bloco de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Coleção: Árvore]** Corrigida a lógica de sincronização de caminho de coleções em árvore ([#7330](https://github.com/nocobase/nocobase/pull/7330)) por @ChimingLiu
- **[Fluxo de Trabalho: Nó de requisição HTTP]** Corrigido bug de condição de corrida ([#7310](https://github.com/nocobase/nocobase/pull/7310)) por @mytharcher
- **[Fluxo de Trabalho: Nó de cálculo dinâmico]** Corrigido erro causado por API legada ([#7321](https://github.com/nocobase/nocobase/pull/7321)) por @mytharcher
- **[Ação: Exportar registros]** Corrigida formatação incorreta de campos de relação aninhados ao exportar para Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) por @aaaaaajie
- **[Ação: Importar registros Pro]** Não permitir a atribuição de campos de relação durante a detecção de duplicatas na importação. por @aaaaaajie
- **[Fonte de dados: SQL Server Externo]** Corrigido formato de armazenamento inconsistente para campos MSSQL datetime (sem fuso horário) de fontes de dados externas por @aaaaaajie
- **[Fluxo de Trabalho: Evento de ação personalizada]** Limpar as linhas selecionadas após acionar ações com sucesso em múltiplos registros por @mytharcher
- **[Fluxo de Trabalho: Subfluxo]** Corrigido fluxo suspenso por @mytharcher
- **[Impressão de template]** Impressão de campos de seleção de rádio em múltiplas linhas de dados por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigido o problema em que o método de autenticação IAM não podia ser usado para fazer upload de arquivos por @mytharcher
  - Descontinuado o parâmetro problemático `attachmentField` por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Corrigido o problema em que carregar dados de fonte de dados externa em registros de aprovação resultava em erro 404 por @mytharcher
  - Adicionado título de tarefa para itens adicionados e delegados por @mytharcher
  - Corrigido erro lançado do seletor de responsável dentro de fonte de dados externa por @mytharcher
  - Corrigido o problema em que a lista de usuários estava vazia durante a aprovação conjunta por @mytharcher
  - Corrigida atualização de associações ao enviar rascunho por @mytharcher
  - Corrigidas regras de vinculação não funcionando no bloco de detalhes original da aprovação por @mytharcher
- **[Gerenciador de backup]** backups de arquivos grandes podiam mostrar "bem-sucedido" antes de realmente terminar por @gchust
- **[Gerenciador de Migração]** Ignorar os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Data de lançamento: 22/08/2025*

#### 🎉 Novos Recursos

- **[cliente]** Suporte a regra de validação de campo ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
- **[Fluxo de Trabalho: Aprovação]**

  - Adicionado tipo de modelo inline para configuração de notificação por @mytharcher
  - Suporte para usar um título de tarefa consistente para todos os nós de aprovação no mesmo fluxo de trabalho por @mytharcher

#### 🚀 Melhorias

- **[banco de dados]** Otimizada a performance da consulta ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[cliente]** Suporte à exibição de ícones identificados por strings no componente Select quando em modo somente leitura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[Móvel]** Otimizado o componente de pop-up móvel ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe
- **[Fluxo de Trabalho]** Atualizado o menu de seleção de nós para exibir opções em um layout de duas colunas para melhorar a densidade de informações e permitir que os usuários vejam mais opções de uma só vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
- **[Configurações de licença]** Nas configurações de licença, copiar o ID de Instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx
- **[Notificação: Mensagem no aplicativo]** Removidos logs SQL emitidos via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile
- **[Autenticação]** Removido o parâmetro token da URL após um login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Impressão de template]** suporte a array de campo m2m por @jiannx

#### 🐛 Correções de Bugs

- **[banco de dados]** Corrigido problema em que a leitura de tabela externa Postgres incluía visualizações de outros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[cliente]**

  - tratar o número 0 como vazio durante a validação de vazio da regra de vinculação ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Corrigido um problema em que o botão "Configurações de coluna" carregava colunas da tabela dentro do diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  - Corrigido texto do botão de link quebrando linha ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
- **[servidor]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[Bloco: template]** Resolvido um problema em que os blocos de e-mail não eram visíveis quando colocados dentro de um bloco de template herdado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Fluxo de Trabalho: nó de e-mail]** Corrigido o problema em que o nó de e-mail poderia não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Móvel]**

  - formato de exibição incorreto do campo de data no móvel ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
  - Corrigido o problema em que os dados de envio do formulário no diálogo de aprovação móvel estavam incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
- **[Fluxo de Trabalho]**

  - Corrigido erro lançado e dados do formulário desaparecidos ao editar categoria do fluxo de trabalho ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
  - Corrigida a tradução do título da página no centro de tarefas do fluxo de trabalho ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
- **[Visualizador de Arquivos do Office]** Corrigido erro lançado ao fazer upload de arquivo para campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigidas traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
- **[Campo de coleção: Fórmula]** Corrigido o problema em que a entrada de fórmula não passava na validação devido ao tipo de variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Gerenciador de Arquivos]** Removida a dica para o limite de tamanho de upload de arquivo ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
- **[Calendário]** tooltip do item de evento do calendário mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Ação: Importar registros Pro]** Não permitir a atribuição de campos de relação durante a detecção de duplicatas na importação. por @aaaaaajie
- **[Fluxo de Trabalho: Evento de ação personalizada]** Limpar as linhas selecionadas após acionar ações com sucesso em múltiplos registros por @mytharcher
- **[Impressão de template]** Impressão de campos de seleção de rádio em múltiplas linhas de dados por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]**

  - Descontinuado o parâmetro problemático `attachmentField` por @mytharcher
  - Corrigido o problema em que o método de autenticação IAM não podia ser usado para fazer upload de arquivos por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Corrigido o problema em que carregar dados de fonte de dados externa em registros de aprovação resultava em erro 404 por @mytharcher
  - Corrigido o problema em que a lista de usuários estava vazia durante a aprovação conjunta por @mytharcher
- **[Gerenciador de backup]** backups de arquivos grandes podiam mostrar "bem-sucedido" antes de realmente terminar por @gchust
- **[Gerenciador de Migração]** Ignorar os comandos `\restrict` e `\unrestrict` gerados pelo pg_dump mais recente ao criar arquivos de migração para resolver erros de restauração. por @2013xile
