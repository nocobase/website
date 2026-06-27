---
title: "NocoBase v2.0.61: Suporte aprimorado de preenchimento automático para algumas funções RunJS integradas"
description: "Nota de lançamento da v2.0.61"
---

### 🚀 Melhorias

- **[client]** Melhorado o suporte a autocompletar para algumas funções RunJS integradas. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) por @gchust
- **[undefined]** Atualizada a documentação do Embed NocoBase para o plugin de código aberto. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) por @zhangzhonghe
  Referência: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Correções de Bugs

- **[flow-engine]**

  - Corrigido o problema em que a página travava ao definir valores de campo para um subformulário. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) por @gchust
  - Corrigido um problema em que o pop-up exibia dados de UI desatualizados após alternar o interruptor do modo de configuração de UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) por @gchust
- **[client]**

  - Corrigido o comportamento incorreto da regra de vinculação de ação de registro em blocos de tabela. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) por @gchust
  - Corrigido o problema em que os dados do campo de relação selecionado não eram exibidos no celular. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) por @zhangzhonghe
  - Corrigido o problema em que os campos se tornavam somente leitura ao serem exibidos novamente após serem ocultados por regras de vinculação. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) por @katherinehhh
- **[cli]** Corrigido o template nginx para servir assets `.mjs` com o tipo MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) por @mytharcher
- **[database]** Corrigido um problema em que a importação de valores de senha numéricos podia falhar. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) por @2013xile
- **[AI employees]** Corrigida a validação da URL base do provedor de IA. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) por @cgyrock
- **[Flow engine]**

  - Corrigido um problema em que arrastar abas de pop-up para reordená-las não funcionava. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) por @gchust
  - Corrigido um problema em que modificar um bloco após duplicar seu template podia afetar inadvertidamente o conteúdo do bloco original. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) por @gchust
- **[Notificação: Mensagem no aplicativo]** Corrigido um risco de injeção de SQL no filtro de timestamp do canal de notificação no aplicativo. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) por @mytharcher
- **[Configurações de licença]** Corrigido o problema em que a página de configurações de licença podia travar por muito tempo quando a verificação de login do pkg estava lenta ou inacessível. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) por @hongboji
- **[Workflow: JavaScript]** Esclarecido que o modo de suporte ao módulo JavaScript do Workflow não é seguro e não é um limite de permissão. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) por @mytharcher
  Referência: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Controle de acesso]** Corrigidas permissões incompletas no primeiro login quando uma função unificada era a função padrão. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) por @2013xile
- **[Gerenciador de arquivos]** Corrigida a validação do caminho de armazenamento de arquivos local para evitar que caminhos inseguros escapem da raiz de armazenamento configurada. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) por @mytharcher
- **[Política de senha]** Corrigido um problema em que a validação da política de senha podia falhar para valores de senha numéricos. por @2013xile
