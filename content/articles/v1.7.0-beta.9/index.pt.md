---
title: "NocoBase v1.7.0-beta.9: Suporte à união de funções de usuário"
description: "Nota de lançamento da v1.7.0-beta.9"
---

### 🎉 Novas Funcionalidades

- **[acl]** Suporte à união de funções de usuário ([#6301](https://github.com/nocobase/nocobase/pull/6301)) por @aaaaaajie

- **[client]**
  - Suporte à extensão de campos predefinidos em coleções ([#6183](https://github.com/nocobase/nocobase/pull/6183)) por @katherinehhh

  - Suporte à extensão de operadores de filtro no frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) por @katherinehhh

- **[Verificação]** Suporte à vinculação de vários tipos de verificação pelo usuário, como SMS e autenticadores TOTP, e verificação de identidade em cenários obrigatórios. Permite o desenvolvimento e extensão de métodos de verificação. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
Referência: [Verificação](https://docs.nocobase.com/handbook/verification)
- **[Calendário]** Suporte à extensão de campos opcionais para os plugins Kanban, Calendário e Campo de Fórmula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) por @katherinehhh

- **[Bloco: template]** Adicionar plugin `Bloco: template`, fornecendo suporte a templates para blocos baseado em mecanismo de herança. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust

- **[plugin-demo-platform]** Definir skipAuthCheck da rota "/new" como true. por @sheldon66

- **[Autenticação de dois fatores (2FA)]** Novos plugins: Autenticação de dois fatores e Verificação: Autenticador TOTP por @2013xile
Referência: [Autenticação de dois fatores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificação: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Melhorias

- **[client]**
  - Adicionar skipAuthCheck ao router.add para evitar redirecionamento para login em páginas públicas. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) por @sheldon66

  - Atualizar dependências relacionadas ao ant design para 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) por @gchust

- **[utils]** Adaptação de página desktop para dispositivos móveis ([#6393](https://github.com/nocobase/nocobase/pull/6393)) por @zhangzhonghe

- **[Formulários públicos]** definir o título da página do formulário público como o título configurado no momento da criação ([#6538](https://github.com/nocobase/nocobase/pull/6538)) por @katherinehhh

- **[Gerenciador de arquivos]**
  - adicionar código backend para gerar URL de pré-visualização de arquivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx

  - Alterar API de tipo de armazenamento e adicionar API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher

- **[Bloco: template]** Suporte para salvar bloco de dados como template de bloco a partir da página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust

- **[Workflow]** Mover configurações de workflow vinculado para o plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]**
  - Problema de arrastar e soltar botão de linha em tabela ([#6544](https://github.com/nocobase/nocobase/pull/6544)) por @katherinehhh

  - Incapacidade de usar a variável 'Usuário Atual' ao adicionar uma página de link ([#6536](https://github.com/nocobase/nocobase/pull/6536)) por @zhangzhonghe

  - Vinculação de intervalo de dados do campo relacional não está efetiva ([#6530](https://github.com/nocobase/nocobase/pull/6530)) por @zhangzhonghe

  - Remover a opção 'Permitir seleção múltipla' de campos de seleção única em formulários de filtro ([#6515](https://github.com/nocobase/nocobase/pull/6515)) por @zhangzhonghe

  - Erro no comando `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) por @gchust

  - Campos ausentes na configuração da regra de vinculação ([#6488](https://github.com/nocobase/nocobase/pull/6488)) por @katherinehhh

  - Conteúdo não é exibido completamente em navegadores móveis ([#6446](https://github.com/nocobase/nocobase/pull/6446)) por @zhangzhonghe

  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe

  - Formatação incorreta do campo de hora no formulário de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh

  - Estilo de entrada incorreto para configuração de valor padrão do formulário ([#6490](https://github.com/nocobase/nocobase/pull/6490)) por @gchust

- **[utils]** Bug conhecido de 'responsividade desktop' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe

- **[acl]** Corrigido o problema onde campos de relacionamento não são exibidos sob a união de funções. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) por @aaaaaajie

- **[Coleção: Árvore]** Problema de migração para plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) por @2013xile

- **[Ação: Solicitação personalizada]** Incapacidade de baixar arquivos codificados em UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) por @2013xile

- **[Variáveis e segredos]** Botões não estão sendo exibidos na gaveta de criar novas variáveis ([#6485](https://github.com/nocobase/nocobase/pull/6485)) por @gchust

- **[Cliente WEB]** Substituir todas as instâncias de ctx.state.currentRole (função única) por ctx.state.currentRoles (suporta múltiplas funções). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) por @aaaaaajie

- **[Controle de acesso]**
  - Erro quando o escopo de dados é definido como dados próprios e a tabela não possui um campo de criador. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) por @aaaaaajie

  - Corrigido problema onde a troca de funções não surtia efeito. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) por @aaaaaajie

- **[Bloco: template]**
  - Opção 'Salvar como template' não estava sendo exibida no bloco de dados da página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust

  - Comportamento incorreto de 'Salvar como template' no cliente móvel ([#6420](https://github.com/nocobase/nocobase/pull/6420)) por @gchust

  - Exigir login ao acessar formulário público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust

- **[Auth: Chaves de API]** Remoção da união da lista de funções do plugin de chaves de API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) por @aaaaaajie

- **[Bloco: Formulário multi-etapas]** o botão de envio tem a mesma cor em seu estado padrão e destacado por @jiannx

- **[Workflow: Aprovação]** Problema de estilo com o diálogo pop-up 'Aplicar novo' por @zhangzhonghe
