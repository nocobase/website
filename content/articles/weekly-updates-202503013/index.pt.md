---
title: "Atualizações Semanais do NocoBase: Autenticação de Dois Fatores (2FA)"
description: "As atualizações desta semana incluem: compatibilidade com configurações históricas de controle de acesso por botão, plugin de integração de IA e muito mais."
---

Resuma os logs de atualização semanal do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**Nesta semana, lançamos a [versão NocoBase 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0), que traz implantação em modo cluster, otimização de políticas de segurança, otimizações no Gerenciador de Migração e muitos outros novos recursos.**

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. Destina-se principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleto ou instável, destinado principalmente ao desenvolvimento interno e iteração rápida. Adequado para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendado para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Data de lançamento: 05/03/2025*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Carregamento preguiçoso do resultado do job para melhor performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher
- **[Fluxo de trabalho: Nó de agregação]** Adicionar processo de arredondamento para número agregado baseado em tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - Componentes de subformulário não alinhados com o formulário principal quando o rótulo está oculto ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Bloco de associação não renderizando em pop-up dentro de herança de coleção ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - Corrige erro ao criar coleção de arquivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
- **[Fluxo de trabalho]** Corrige acl para obter job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Data de lançamento: 06/03/2025*

#### 🚀 Melhorias

- **[cliente]** Adicionar tratamento de debounce aos botões ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038

#### 🐛 Correções de bugs

- **[banco de dados]** Corrige erro ao recuperar registros de coleção de relação se a chave de origem nos campos de relação for uma string numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Data de lançamento: 06/03/2025*

#### 🐛 Correções de bugs

- **[cliente]**
  - Problema relacionado a fuso horário causando uma hora a menos no seletor de data ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - Configuração de ordenação ausente para campos de coleção herdada ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Data de lançamento: 07/03/2025*

#### 🎉 Novos recursos

- **[Visualização de dados]** Suporte à ordenação NULLS em consultas de gráfico ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Permitir pular para acionar fluxo de trabalho de coleção em evento de banco de dados ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher

#### 🐛 Correções de bugs

- **[Ação: Importar registros Pro]** Usar opção adicional para determinar se deve acionar o fluxo de trabalho ou não por @mytharcher
- **[Ação: Exportar registros Pro]** Ação de exportação Pro sem parâmetros de ordenação por @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Data de lançamento: 09/03/2025*

#### 🐛 Correções de bugs

- **[servidor]** Cache incorreto do navegador após executar o comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[Fluxo de trabalho: Aprovação]** Evitar que a configuração de destinatários errada consulte todos os usuários por @mytharcher
- **[WeCom]** corrigir link de prompt de login e erro de login do DingTalk por @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Data de lançamento: 11/03/2025*

#### 🐛 Correções de bugs

- **[cliente]**

  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6415](https://github.com/nocobase/nocobase/pull/6415)) por @zhangzhonghe
  - Dados não atualizando em janelas pop-up abertas através de botões de Link ([#6411](https://github.com/nocobase/nocobase/pull/6411)) por @zhangzhonghe
  - Alterações de valor do campo de seleção múltipla e perda de opção ao excluir registros de subtabela ([#6405](https://github.com/nocobase/nocobase/pull/6405)) por @katherinehhh
- **[Notificação: Mensagem no aplicativo]** Diferenciar a cor de fundo da lista de mensagens no aplicativo dos cartões de mensagem para melhorar a hierarquia visual e a legibilidade. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) por @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Data de lançamento: 07/03/2025*

#### 🎉 Novos recursos

- **[cliente]** Adicionar configuração de dica de ferramenta a itens de menu e cabeçalhos de tabela ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038
- **[Visualização de dados]** Suporte à ordenação NULLS em consultas de gráfico ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile
- **[Integração de IA]** Novo plugin: Integração de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
  Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Integração de IA (EE)]** Novo plugin: Integração de IA (EE) por @2013xile
  Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Melhorias

- **[cliente]**

  - Adicionar tratamento de debounce aos botões ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038
  - Tornar o menu responsivo à largura da tela ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe
- **[Fluxo de trabalho]** Permitir pular para acionar fluxo de trabalho de coleção em evento de banco de dados ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher
- **[Fluxo de trabalho: Nó de agregação]** Adicionar processo de arredondamento para número agregado baseado em tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher
- **[Ação: Importar registros Pro]** suportar opções avançadas no botão de importação Pro por @katherinehhh
- **[Fluxo de trabalho: JavaScript]** Suporte para exigir pacote a partir de caminho absoluto por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** tentar recarregar armazenamentos se não encontrar o armazenamento por @jiannx

#### 🐛 Correções de bugs

- **[cliente]**

  - Tradução personalizada do título do menu é inválida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe
  - Problema relacionado a fuso horário causando uma hora a menos no seletor de data ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - Configuração de ordenação ausente para campos de coleção herdada ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh
  - Menu suspenso de configuração de armazenamento do campo de anexo não exibindo opções ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh
  - Componentes de subformulário não alinhados com o formulário principal quando o rótulo está oculto ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Bloco de associação não renderizando em pop-up dentro de herança de coleção ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - Resolver problema de barra de rolagem ao abrir aba de página com bloco de altura total ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh
  - Corrige erro ao criar coleção de arquivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
- **[banco de dados]** Corrige erro ao recuperar registros de coleção de relação se a chave de origem nos campos de relação for uma string numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile
- **[cliente WEB]**

  - Adicionar páginas de aba na tabela de gerenciamento de rotas não surte efeito ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe
  - Após adicionar uma página à tabela de rotas, a página aparece em branco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe
- **[Usuários]**

  - Erro "Sem permissões" quando usuários sem permissões de gerenciamento de usuários visualizam seu próprio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile
  - Erro "Sem permissões" ao atualizar configurações do sistema no gerenciamento de usuários ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile
- **[Controle de acesso]** Na tabela de gerenciamento de permissões, o nome da página da aba está vazio ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe
- **[Integração de IA]** Problema onde o `baseURL` padrão para o provedor LLM é `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile
- **[Fluxo de trabalho]** Corrige acl para obter job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir localidade e coleção modificável após execução por @mytharcher
- **[Ação: Importar registros Pro]** Usar opção adicional para determinar se deve acionar o fluxo de trabalho ou não por @mytharcher
- **[Ação: Exportar registros Pro]** Ação de exportação Pro sem parâmetros de ordenação por @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Data de lançamento: 10/03/2025*

#### 🚀 Melhorias

- **[Autenticação: Chaves de API]** Adicionar teste de configuração de segurança de token para autenticação de chave de API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66

#### 🐛 Correções de bugs

- **[servidor]** Cache incorreto do navegador após executar o comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[autenticação]** Lidar com usuário inexistente com erro 401 e atualizar mensagens de localidade ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66
- **[cliente WEB]** A página fica em branco após alternar funções ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie
- **[Editor de tema]** a troca de tema falha após várias trocas consecutivas ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir parâmetro de ordem ao adicionar destinatário por @mytharcher
  - Evitar que a configuração de destinatários errada consulte todos os usuários por @mytharcher
- **[WeCom]** corrigir link de prompt de login e erro de login do DingTalk por @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Data de lançamento: 11/03/2025*

#### 🎉 Novos recursos

- **[cliente]** compatível com configurações históricas de controle de acesso a botões ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh
- **[Fluxo de trabalho: Evento pós-ação]** Suporte para usar nó final para determinar status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher
- **[Fluxo de trabalho: Mensagem de resposta]** Suporte para ser usado em gatilho de ação por @mytharcher

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Corrigir API 401 quando não logado ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Ajustar UI da central de tarefas do fluxo de trabalho ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher
- **[Gerenciador de e-mail]** Usar mesma estrutura e estilo de elemento globalmente para botão da barra de ferramentas por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Ajustar UI da central de tarefas por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - Incapacidade de mover a página para um grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe
  - Menus de nível profundo não estão exibindo ícone ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe
  - Problema de contexto de tema do FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh
- **[Fluxo de trabalho: Nó manual]** Evitar conflito em chave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher
- **[Gerenciador de fonte de dados]** erro ao editar campos em fonte de dados externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh
- **[Autenticação]** Usuário sem funções deve redirecionar para página de mensagem de erro. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66
- **[Fluxo de trabalho: Evento de ação personalizada]** configuração de regra de vinculação ausente para o botão 'Acionar Fluxo de Trabalho' por @katherinehhh
- **[Gerenciador de backup]** Dados de chave de criptografia ausentes durante a restauração do backup por @gchust
- **[Fluxo de trabalho: Aprovação]** Evitar conflito em chave única por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Data de lançamento: 07/03/2025*

#### 🎉 Novos recursos

- **[cliente]**

  - Adicionar configuração de dica de ferramenta a itens de menu e cabeçalhos de tabela ([#6346](https://github.com/nocobase/nocobase/pull/6346)) por @Cyx649312038
  - Campo de hora suporta formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh
- **[Visualização de dados]** Suporte à ordenação NULLS em consultas de gráfico ([#6383](https://github.com/nocobase/nocobase/pull/6383)) por @2013xile
- **[Integração de IA]** Novo plugin: Integração de IA ([#6283](https://github.com/nocobase/nocobase/pull/6283)) por @2013xile
  Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Verificação]** Suportar vinculação de usuário de vários tipos de verificação, como SMS e autenticadores TOTP, e verificação de identidade em cenários necessários. Permitir desenvolvimento e extensão de métodos de verificação. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) por @2013xile
  Referência: [Verificação](https://docs.nocobase.com/handbook/verification)
- **[Integração de IA (EE)]** Novo plugin: Integração de IA (EE) por @2013xile
  Referência: [Integração de IA](https://docs.nocobase.com/handbook/ai/service)
- **[Autenticação de dois fatores (2FA)]** Novos plugins: Autenticação de dois fatores e Verificação: Autenticador TOTP por @2013xile
  Referência: [Autenticação de dois fatores (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Verificação: Autenticador TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Melhorias

- **[cliente]**

  - Adicionar tratamento de debounce aos botões ([#6351](https://github.com/nocobase/nocobase/pull/6351)) por @Cyx649312038
  - Tornar o menu responsivo à largura da tela ([#6331](https://github.com/nocobase/nocobase/pull/6331)) por @zhangzhonghe
- **[servidor]** Atualizar koa para 2.15.4; atualizar @koa/cors para 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile
- **[Fluxo de trabalho]**

  - Permitir pular para acionar fluxo de trabalho de coleção em evento de banco de dados ([#6379](https://github.com/nocobase/nocobase/pull/6379)) por @mytharcher
  - Carregamento preguiçoso do resultado do job para melhor performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher
- **[Bloco: template]** Suportar salvar bloco de dados como template de bloco a partir da página ([#6348](https://github.com/nocobase/nocobase/pull/6348)) por @gchust
- **[Fluxo de trabalho: Nó de agregação]** Adicionar processo de arredondamento para número agregado baseado em tipo double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) por @mytharcher
- **[Ação: Importar registros Pro]** suportar opções avançadas no botão de importação Pro por @katherinehhh
- **[Fluxo de trabalho: JavaScript]** Suporte para exigir pacote a partir de caminho absoluto por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** tentar recarregar armazenamentos se não encontrar o armazenamento por @jiannx

#### 🐛 Correções de bugs

- **[cliente]**

  - Tradução personalizada do título do menu é inválida ([#6377](https://github.com/nocobase/nocobase/pull/6377)) por @zhangzhonghe
  - Configuração de ordenação ausente para campos de coleção herdada ([#6372](https://github.com/nocobase/nocobase/pull/6372)) por @katherinehhh
  - Formatação incorreta do campo de hora no formulário de filtro ([#6374](https://github.com/nocobase/nocobase/pull/6374)) por @katherinehhh
  - Problema relacionado a fuso horário causando uma hora a menos no seletor de data ([#6359](https://github.com/nocobase/nocobase/pull/6359)) por @katherinehhh
  - Menu suspenso de configuração de armazenamento do campo de anexo não exibindo opções ([#6365](https://github.com/nocobase/nocobase/pull/6365)) por @katherinehhh
  - Componentes de subformulário não alinhados com o formulário principal quando o rótulo está oculto ([#6357](https://github.com/nocobase/nocobase/pull/6357)) por @katherinehhh
  - Corrige erro ao criar coleção de arquivos ([#6363](https://github.com/nocobase/nocobase/pull/6363)) por @mytharcher
  - Resolver problema de barra de rolagem ao abrir aba de página com bloco de altura total ([#6347](https://github.com/nocobase/nocobase/pull/6347)) por @katherinehhh
  - Páginas com favicon personalizado piscam brevemente o favicon do NocoBase durante o carregamento ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
  - Bloco de associação não renderizando em pop-up dentro de herança de coleção ([#6303](https://github.com/nocobase/nocobase/pull/6303)) por @katherinehhh
  - Botão adicionar novo aparece ao passar o mouse no modo somente leitura do campo de associação ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[autenticação]** Evitar renovar o token durante a autorização WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66
- **[banco de dados]** Corrige erro ao recuperar registros de coleção de relação se a chave de origem nos campos de relação for uma string numérica ([#6360](https://github.com/nocobase/nocobase/pull/6360)) por @2013xile
- **[cliente WEB]**

  - Após adicionar uma página à tabela de rotas, a página aparece em branco ([#6366](https://github.com/nocobase/nocobase/pull/6366)) por @zhangzhonghe
  - Adicionar páginas de aba na tabela de gerenciamento de rotas não surte efeito ([#6362](https://github.com/nocobase/nocobase/pull/6362)) por @zhangzhonghe
- **[Controle de acesso]** Na tabela de gerenciamento de permissões, o nome da página da aba está vazio ([#6364](https://github.com/nocobase/nocobase/pull/6364)) por @zhangzhonghe
- **[Usuários]**

  - Erro "Sem permissões" quando usuários sem permissões de gerenciamento de usuários visualizam seu próprio perfil ([#6382](https://github.com/nocobase/nocobase/pull/6382)) por @2013xile
  - Erro "Sem permissões" ao atualizar configurações do sistema no gerenciamento de usuários ([#6380](https://github.com/nocobase/nocobase/pull/6380)) por @2013xile
  - Uma UI de erro pisca brevemente quando a tabela de gerenciamento de permissões do usuário carrega pela primeira vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe
- **[Integração de IA]** Problema onde o `baseURL` padrão para o provedor LLM é `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) por @2013xile
- **[Fluxo de trabalho]** Corrige acl para obter job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) por @mytharcher
- **[Bloco: Mapa]** Configurações do campo de mapa estão ausentes/não visíveis ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Mobile]** Erro de página: Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe
- **[Bloco: Painel de ação]** Definir a altura do painel de ação é inválido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe
- **[Fluxo de trabalho: Evento de ação personalizada]**

  - Corrigir localidade e coleção modificável após execução por @mytharcher
  - Corrigir migração para botões legados vinculados ao fluxo de trabalho de ação personalizada por @mytharcher
- **[Marca personalizada]** Páginas com favicon personalizado piscam brevemente o favicon do NocoBase durante o carregamento por @zhangzhonghe
- **[Ação: Importar registros Pro]**

  - Usar opção adicional para determinar se deve acionar o fluxo de trabalho ou não por @mytharcher
  - Botão de importação de bloco de associação, detecção de registro duplicado não mostra dados no menu suspenso do campo por @katherinehhh
- **[Ação: Exportar registros Pro]**

  - Ação de exportação Pro sem parâmetros de ordenação por @katherinehhh
  - Remover opção 'adicionar bloco' nas configurações do botão de anexo de exportação por @katherinehhh
- **[Impressão de template]** Falha na restauração do local quando os plugins de impressão de template e gerenciador de backup estavam ambos habilitados por @gchust
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir migração para blocos legados por @mytharcher
  - Corrigir erro causado por `.toJSON()` por @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Data de lançamento: 11/03/2025*

#### 🎉 Novos recursos

- **[cliente]** compatível com configurações históricas de controle de acesso a botões ([#6376](https://github.com/nocobase/nocobase/pull/6376)) por @katherinehhh
- **[Fluxo de trabalho: Mensagem de resposta]** Suporte para ser usado em gatilho de ação por @mytharcher

#### 🚀 Melhorias

- **[Autenticação: Chaves de API]** Adicionar teste de configuração de segurança de token para autenticação de chave de API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) por @sheldon66
- **[Fluxo de trabalho: Nó manual]** Ajustar UI da central de tarefas do fluxo de trabalho ([#6272](https://github.com/nocobase/nocobase/pull/6272)) por @mytharcher

#### 🐛 Correções de bugs

- **[servidor]** Cache incorreto do navegador após executar o comando `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) por @gchust
- **[cliente]**

  - Problema de contexto de tema do FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) por @katherinehhh
  - Ao usar o operador '$anyOf', a regra de vinculação é inválida ([#6400](https://github.com/nocobase/nocobase/pull/6400)) por @zhangzhonghe
- **[autenticação]** Lidar com usuário inexistente com erro 401 e atualizar mensagens de localidade ([#6381](https://github.com/nocobase/nocobase/pull/6381)) por @sheldon66
- **[Bloco: template]** Opção Salvar como template não foi exibida no bloco de dados da página ([#6398](https://github.com/nocobase/nocobase/pull/6398)) por @gchust
- **[Fluxo de trabalho: Nó manual]** Evitar conflito em chave única ([#6407](https://github.com/nocobase/nocobase/pull/6407)) por @mytharcher
- **[Gerenciador de fonte de dados]** erro ao editar campos em fonte de dados externa ([#6402](https://github.com/nocobase/nocobase/pull/6402)) por @katherinehhh
- **[Editor de tema]** a troca de tema falha após várias trocas consecutivas ([#6387](https://github.com/nocobase/nocobase/pull/6387)) por @katherinehhh
- **[cliente WEB]** A página fica em branco após alternar funções ([#6388](https://github.com/nocobase/nocobase/pull/6388)) por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]**

  - Evitar que a configuração de destinatários errada consulte todos os usuários por @mytharcher
  - Corrigir parâmetro de ordem ao adicionar destinatário por @mytharcher
- **[WeCom]** corrigir link de prompt de login e erro de login do DingTalk por @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Data de lançamento: 11/03/2025*

#### 🎉 Novos recursos

- **[Fluxo de trabalho: Evento pós-ação]** Suporte para usar nó final para determinar status ([#6399](https://github.com/nocobase/nocobase/pull/6399)) por @mytharcher

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Corrigir API 401 quando não logado ([#6412](https://github.com/nocobase/nocobase/pull/6412)) por @mytharcher
- **[Gerenciador de e-mail]** Usar mesma estrutura e estilo de elemento globalmente para botão da barra de ferramentas por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Ajustar UI da central de tarefas por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - Incapacidade de mover a página para um grupo ([#6413](https://github.com/nocobase/nocobase/pull/6413)) por @zhangzhonghe
  - Menus de nível profundo não estão exibindo ícone ([#6410](https://github.com/nocobase/nocobase/pull/6410)) por @zhangzhonghe
- **[Autenticação]** Usuário sem funções deve redirecionar para página de mensagem de erro. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) por @sheldon66
- **[Fluxo de trabalho: Evento de ação personalizada]** configuração de regra de vinculação ausente para o botão 'Acionar Fluxo de Trabalho' por @katherinehhh
- **[Gerenciador de backup]** Dados de chave de criptografia ausentes durante a restauração do backup por @gchust
- **[Fluxo de trabalho: Aprovação]** Evitar conflito em chave única por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, open-source e sem código que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças enquanto reduz significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
