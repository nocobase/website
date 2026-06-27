---
title: "NocoBase v2.1.0-beta.34: Adicionado suporte client-v2 para o plugin Kanban"
description: "Nota de lançamento da v2.1.0-beta.34"
---

### 🎉 Novas Funcionalidades

- **[Bloco: Kanban]** Adicionado suporte client-v2 para o plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) por @jiannx

### 🚀 Melhorias

- **[cli]** Melhorada a experiência do prompt da CLI do NocoBase ao migrar fluxos de configuração e gerenciamento para o Inquirer, e corrigidos problemas relacionados à instalação, skills e execução no Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos

- **[Funcionários de IA]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[Gerenciador de notificações]** Alterada a estratégia de fila para otimizar o desempenho de envio ([#9407](https://github.com/nocobase/nocobase/pull/9407)) por @mytharcher

- **[Fluxo de trabalho: Evento de ação personalizada]** Migrados os plugins block-workbench e workflow-custom-action-trigger para client v2, incluindo seus modelos de ação e fluxo do leitor de QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) por @jiannx

- **[Autenticação]** Implementada a página de configurações de Authenticators no client-v2 e disponibilizados componentes reutilizáveis de tabela, entrada de variável e primitivos de formulário do client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) por @Molunerfinn

- **[IA: Base de conhecimento]** Aviso sobre nome de tabela duplicado ao salvar no banco de dados vetorial por @cgyrock

- **[Auth: SAML 2.0]** Adicionadas entradas client-v2 para os plugins de autenticação CAS e SAML para que funcionem com a página de login v2 e as configurações de Authenticators. por @Molunerfinn

### 🐛 Correções de Bugs

- **[client-v2]**
  - Corrigida a falha ao carregar a rota v2 do plugin Kanban porque as dependências dnd-kit não eram fornecidas pelo cliente. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) por @jiannx

  - O componente compartilhado de Tabela v2 agora mostra o seletor de tamanho de página por padrão, correspondendo ao comportamento do v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) por @Molunerfinn

- **[client]**
  - Corrigido um problema onde os valores de campos JS em subformulários não eram definidos corretamente durante o envio do formulário. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

  - Corrigido um problema onde as variáveis do registro do popup atual não podiam ser resolvidas nos fluxos de eventos do botão de ação. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

- **[mecanismo de fluxo]** Corrigida mensagem de erro incorreta no console do navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust

- **[Funcionários de IA]**
  - Corrigido problema onde as permissões de função do operador não estavam sendo aplicadas nos nós de funcionários de IA ([#9513](https://github.com/nocobase/nocobase/pull/9513)) por @cgyrock

  - Corrigidos erros de leitura de arquivos OSS do funcionário de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Documentação da API]** Corrigida a documentação da API de coleções para que os parâmetros de consulta não interfiram mais entre si ([#9442](https://github.com/nocobase/nocobase/pull/9442)) por @jiannx

- **[Fonte de dados: Principal]** Corrigido o problema onde as opções de campo são gravadas no schema após a sincronização dos campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Fluxo de trabalho: JavaScript]** Corrigido o carregamento do pacote de runtime QuickJS do fluxo de trabalho JavaScript em builds de produção. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher

- **[Cliente WEB]** Limpar dados dos blocos após remover menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

- **[Ação: Importar registros]** Corrigido o problema onde o registro importado em campos do tipo data mostrava a data errada ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Ação: Importar registros Pro]** corrigido o tratamento de fuso horário para importações xlsx pro por @mytharcher

- **[Auth: SAML 2.0]** Corrigido o interceptor de redirecionamento automático SAML que causava oscilação no shell do aplicativo e abertura dupla de gavetas em cada navegação. por @Molunerfinn

- **[Ação: Exportar registros Pro]** Corrigido o problema onde um erro era lançado ao exportar anexo do campo de URL de anexo por @mytharcher
