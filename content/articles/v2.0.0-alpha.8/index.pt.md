---
title: "NocoBase v2.0.0-alpha.8: Melhoria na função de pesquisa web do plugin-ai"
description: "Nota de lançamento da v2.0.0-alpha.8"
---

### 🎉 Novos Recursos

- **[Agentes de IA]** Melhora a função de pesquisa web do plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) por @cgyrock

### 🚀 Melhorias

- **[cliente]** Para obter um tipo MIME de arquivo mais preciso, utiliza o pacote `mime` para detectar o tipo MIME de arquivos no cliente ([#7551](https://github.com/nocobase/nocobase/pull/7551)) por @mytharcher

- **[mecanismo-de-fluxo]**
  - Suporte a variável popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) por @gchust

  - Melhora a experiência de edição de código com snippets mais ricos e conclusões de código sensíveis ao contexto para vários cenários ([#7559](https://github.com/nocobase/nocobase/pull/7559)) por @gchust

  - Fluxos de trabalho automáticos padronizados para serem acionados consistentemente pelo evento "beforeRender", garantindo operação previsível e unificada entre processos. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) por @gchust

- **[Fluxo de Trabalho]** Adiciona opção `keepBranch` ao excluir nó ([#7571](https://github.com/nocobase/nocobase/pull/7571)) por @mytharcher

- **[Visualização de dados]** Expande tipos de gráfico; Otimiza UI e experiência interativa. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) por @heziqiang

- **[Fluxo de Trabalho: Aprovação]** Refatora configuração de ramificação para adaptar-se a mudanças no kernel por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problemas de exibição anormal de página ao alternar paginação de tabela ([#7572](https://github.com/nocobase/nocobase/pull/7572)) por @zhangzhonghe

  - Não é possível configurar valor de campo de atribuição para ações `Atualizar` e `Atualizar em lote` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) por @gchust

  - Corrige o problema em que imagens não eram exibidas corretamente quando rotacionadas e redimensionadas durante a pré-visualização ([#7573](https://github.com/nocobase/nocobase/pull/7573)) por @mytharcher

- **[Fluxo de Trabalho: Aprovação]** Corrige o problema de erros no script de migração devido a tabelas inexistentes quando o aplicativo não está instalado por @mytharcher

- **[Autenticação: LDAP]** Corrige falha de bind LDAP com DNs não-ASCII (UTF-8) no Active Directory por @2013xile
