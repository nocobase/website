---
title: "NocoBase 1.0.0-alpha.15: Novos Plugins e Interação Aprimorada de 'Configurar Ações'"
description: "NocoBase v1.0.0-alpha.15 introduz autenticação LDAP, gatilhos de ação personalizados, suporte a Gantt e Kanban, e mais. Esta atualização também melhora a interação de 'Configurar Ações' e corrige vários bugs para melhorar o desempenho da plataforma."
---

## Novos recursos

### Plugin de autenticação: autenticação LDAP

Permite que usuários façam login no NocoBase usando suas credenciais do servidor LDAP. Para mais informações, consulte a documentação [Autenticação: LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Plugin de fluxo de trabalho: gatilho de ação personalizada

Quando as ações CRUD não atendem às suas necessidades, você pode usar o gatilho de ação personalizada do fluxo de trabalho para orquestrar sua própria lógica de processamento de dados. Para mais informações, consulte a documentação [Fluxo de trabalho / Gatilho de ação personalizada](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### Bloco de tabela suporta colunas fixas

![](https://static-docs.nocobase.com/202405191512587.png)

### Suporte para adicionar Gantt e Kanban em janelas pop-up

![](https://static-docs.nocobase.com/202405191512280.png)

### Bloco de detalhes suporta regras de vinculação

Permite configurar as propriedades de visibilidade e ocultação dos campos.

![](https://static-docs.nocobase.com/202405191513781.png)

### Nó de requisição HTTP do fluxo de trabalho suporta dados no formato `application/www-x-form-urlencoded`

![](https://static-docs.nocobase.com/202405191514472.png)

### Caixas de entrada do nó de requisição HTTP do fluxo de trabalho suportam templates de string

![](https://static-docs.nocobase.com/202405191514748.png)

### Exemplos de plugins para desenvolvimento

Veja a documentação de [exemplos de plugins](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Melhorias

### Interação de “Configurar ações” melhorada

Todas as ações são exibidas em uma única lista no menu suspenso, não distinguindo mais entre “Ativar ações” e “Personalizar”.

* Ações que só podem ser adicionadas uma vez: Essas ações mantêm o efeito de alternância.
* Ações que podem ser adicionadas repetidamente: Essas ações não usam mais a interação de alternância e podem ser adicionadas várias vezes.
* Ações similares mescladas
  * “Adicionar novo” e “Adicionar registro”
  * “Enviar” e “Salvar registro”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Formato de dados unificado para o resultado do nó de requisição HTTP do fluxo de trabalho:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Manual do fluxo de trabalho reorganizado

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Correções

### Plugin de log agora mostra apenas logs do aplicativo atual

Quando há múltiplos aplicativos:

* O plugin de log exibe apenas a lista de arquivos de log do aplicativo atual.
* As pastas de fluxo de trabalho e requisição personalizada são colocadas dentro da pasta do aplicativo.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Outras correções importantes incluem:

* Gráficos não convertiam campos de data para o fuso horário do cliente ao consultar dados agregados por campo de data. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* Problema de atualização de visualização, onde a visualização precisava ser saída e reentrada após sincronizar com o banco de dados. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* Bloco de tabela em árvore não recolhia todos os nós ao adicionar um nó filho. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* Configurações do campo de título da tabela de dados eram inválidas. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Campo Bigint perdia precisão no modo somente leitura. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Arquivos de log abertos não eram fechados após parar um sub-aplicativo. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Bug na seleção do modelo de dados de relacionamento do nó de agregação do fluxo de trabalho. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* Opção de ignorar erros era ineficaz no modo síncrono para o nó de requisição HTTP do fluxo de trabalho. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* Caixa de entrada de valor do nó de requisição HTTP do fluxo de trabalho transbordava. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Caracteres especiais causavam travamento do nó de requisição HTTP do fluxo de trabalho. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Corrigido problema onde a configuração de marginBlock no editor de temas afetava o espaçamento dos campos do formulário. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Corrigido problema onde clicar na opção “Licença” no canto superior direito da página redirecionava incorretamente. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Corrigido problema onde o operador de campo era inválido ao salvar um formulário de filtro como template de bloco. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
