---
title: "NocoBase v2.1.0-beta.43: Atualize a documentação do Embed NocoBase para o plugin de código aberto"
description: "Nota de lançamento da v2.1.0-beta.43"
---

### 🎉 Novas Funcionalidades

- **[client-v2]** Adicionado `TypedVariableInput` para que os campos de porta SMTP e modo seguro do plugin de e-mail v2 aceitem tanto uma constante tipada quanto uma variável `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) por @Molunerfinn

- **[Controle de acesso]** Migradas as páginas de configuração de Usuários e Funções e Permissões para a v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) por @jiannx

### 🚀 Melhorias

- **[undefined]** Atualizada a documentação do Embed NocoBase para o plugin de código aberto ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
Referência: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Melhorado o suporte a autocomplete para algumas funções RunJS embutidas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust

- **[cli]** Melhoradas as orientações de inicialização e auto atualização ([#9633](https://github.com/nocobase/nocobase/pull/9633)) por @chenos

### 🐛 Correções de Bugs

- **[client]**
  - Corrigido o problema em que blocos podiam ser exibidos incorretamente como excluídos após atualizar a página ([#9662](https://github.com/nocobase/nocobase/pull/9662)) por @zhangzhonghe

  - Corrigido o comportamento incorreto da regra de vinculação de ação de registro no bloco de tabela. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust

  - (regra de vinculação) corrigido o problema de campos se tornarem somente leitura quando exibidos após terem sido ocultados ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh

- **[cli]** Corrigido o template nginx para servir assets `.mjs` com o tipo MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher

- **[database]** Corrigido um problema em que a importação de valores de senha numéricos podia falhar ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile

- **[flow-engine]**
  - Corrigido um problema em que o popup exibia dados de UI desatualizados após alternar o interruptor do modo de configuração de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust

  - Corrigido o problema em que a busca por campos era limpa ao passar o mouse sobre campos de associação ([#9646](https://github.com/nocobase/nocobase/pull/9646)) por @zhangzhonghe

- **[client-v2]** preservar valores de campo atribuídos ([#9640](https://github.com/nocobase/nocobase/pull/9640)) por @katherinehhh

- **[Gerenciador de arquivos]** Corrigida a validação do caminho de armazenamento de arquivos local para evitar que caminhos inseguros escapem da raiz de armazenamento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher

- **[Bloco: Gantt]** Melhorado o posicionamento do tooltip do gantt para evitar cobrir as barras de tarefa e alinhadas as etiquetas das tarefas de forma consistente dentro e fora das barras ([#9638](https://github.com/nocobase/nocobase/pull/9638)) por @jiannx

- **[Controle de acesso]** Corrigidas permissões incompletas no primeiro login quando a função unificada é a padrão ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile

- **[Configurações de licença]** Corrigido o problema da página de configurações de licença travar por muito tempo quando a verificação de login do pkg está lenta ou inacessível ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji

- **[Workflow: JavaScript]** Esclarecido que o modo de suporte a módulos JavaScript do Workflow é inseguro e não representa uma fronteira de permissão ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
Referência: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Política de senha]** Corrigido um problema em que a validação da política de senha podia falhar para valores de senha numéricos por @2013xile
