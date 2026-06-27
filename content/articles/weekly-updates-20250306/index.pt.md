---
title: "Atualizações Semanais do NocoBase: Suporte à Configuração de Permissões para Ações"
description: "As atualizações desta semana incluem: suporte à configuração de permissões para ações, campo de tempo com suporte a formato de hora e muito mais."
---

Resuma os logs de atualização semanal do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Data de lançamento: 27/02/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - erro ao criar bloco de comentário sem coleção de comentários ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Ocorre um erro ao clicar no nó do bloco de árvore ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe
  - Após clicar no menu esquerdo, a subpágina é fechada anormalmente ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe
  - Não limpar o valor do campo quando o valor da expressão estiver vazio ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe
- **[Campo de coleção: Sequência]** Corrigir campo de sequência não desabilitado quando no modo somente leitura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher
- **[Gerenciador de arquivos]** Corrigir migração para coleção herdada ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher
- **[Controle de acesso]** Registros de dados incorretos ao usar campos muitos-para-muitos como escopo de dados em permissões de coleção ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile
- **[Bloco: Kanban]** Filtragem de dados incorreta no bloco Kanban em pop-up usando variáveis de registro do pop-up ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh
- **[Bloco: Árvore]** Ocorre um erro ao clicar no nó do bloco de árvore por @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Data de lançamento: 27/02/2025*

#### 🐛 Correções de Bugs

- **[Bloco: Painel de ações]** Definir a altura do painel de ações é inválido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Data de lançamento: 01/03/2025*

#### 🐛 Correções de Bugs

- **[client]** botão "adicionar novo" aparece ao passar o mouse no modo somente leitura do campo de associação ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[Ação: Exportar registros Pro]** remover opção 'adicionar bloco' nas configurações do botão de anexo de exportação por @katherinehhh
- **[Ação: Importar registros Pro]** detecção de registro duplicado do botão de importação do bloco de associação não mostra dados no menu suspenso de campo por @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Data de lançamento: 03/03/2025*

#### 🐛 Correções de Bugs

- **[client]** Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
- **[Bloco: Mapa]** As configurações para o campo de mapa estão ausentes/não visíveis ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Marca personalizada]** Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento por @zhangzhonghe
- **[Impressão de modelo]** Falha ao restaurar do local quando os plugins de impressão de modelo de ação e gerenciador de backup estavam ambos habilitados por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Data de lançamento: 27/02/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - erro ao criar bloco de comentário sem coleção de comentários ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Posição incorreta após arrastar o menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe
- **[Workflow: Evento de ação personalizada]** Corrigir erro de compilação por @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Data de lançamento: 04/03/2025*

#### 🎉 Novos Recursos

- **[client]** campo de hora suporta formato de hora ([#6329](https://github.com/nocobase/nocobase/pull/6329)) por @katherinehhh

#### 🚀 Melhorias

- **[server]** Atualizar koa para 2.15.4; atualizar @koa/cors para 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) por @2013xile
- **[Workflow]** Carregar resultado de trabalho lentamente para melhor desempenho ([#6344](https://github.com/nocobase/nocobase/pull/6344)) por @mytharcher

#### 🐛 Correções de Bugs

- **[auth]** Evitar renovar o token durante a autorização WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) por @sheldon66
- **[client]**

  - Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento ([#6337](https://github.com/nocobase/nocobase/pull/6337)) por @zhangzhonghe
  - botão "adicionar novo" aparece ao passar o mouse no modo somente leitura do campo de associação ([#6322](https://github.com/nocobase/nocobase/pull/6322)) por @katherinehhh
- **[devtools]** Garantir que o cabeçalho X-Forwarded-For seja definido apenas se req.ip não for indefinido. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66
- **[Bloco: Mapa]** As configurações para o campo de mapa estão ausentes/não visíveis ([#6336](https://github.com/nocobase/nocobase/pull/6336)) por @zhangzhonghe
- **[Mobile]** Erro de página: Não é possível ler propriedades de null (lendo 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) por @zhangzhonghe
- **[Usuários]** Uma UI de erro pisca brevemente quando a tabela de gerenciamento de permissão do usuário carrega pela primeira vez ([#6324](https://github.com/nocobase/nocobase/pull/6324)) por @zhangzhonghe
- **[Bloco: Painel de ações]** Definir a altura do painel de ações é inválido ([#6321](https://github.com/nocobase/nocobase/pull/6321)) por @zhangzhonghe
- **[Ação: Importar registros Pro]** detecção de registro duplicado do botão de importação do bloco de associação não mostra dados no menu suspenso de campo por @katherinehhh
- **[Ação: Exportar registros Pro]** remover opção 'adicionar bloco' nas configurações do botão de anexo de exportação por @katherinehhh
- **[Workflow: Evento de ação personalizada]** Corrigir migração para botões legados vinculados ao workflow de ação personalizada por @mytharcher
- **[Marca personalizada]** Páginas com favicon personalizado exibem brevemente o favicon do NocoBase durante o carregamento por @zhangzhonghe
- **[Impressão de modelo]** Falha ao restaurar do local quando os plugins de impressão de modelo de ação e gerenciador de backup estavam ambos habilitados por @gchust
- **[Workflow: Aprovação]**

  - Corrigir erro causado por `.toJSON()` por @mytharcher
  - Corrigir migração não executada devido ao número da versão por @mytharcher
  - Corrigir migração para blocos legados por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Data de lançamento: 27/02/2025*

#### 🎉 Novos Recursos

- **[client]** suportar configuração de permissão para ação ([#6254](https://github.com/nocobase/nocobase/pull/6254)) por @katherinehhh
- **[Bloco: template]** Adicionar plugin `Bloco: template`, fornecendo suporte a template para blocos baseado em mecanismo de herança. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) por @gchust
- **[Workflow: Evento de ação personalizada]** ação de gatilho de workflow suporta controle de acesso por @katherinehhh

#### 🚀 Melhorias

- **[client]**

  - Atualizar definições de tipos do React ([#6278](https://github.com/nocobase/nocobase/pull/6278)) por @gchust
  - Expansão e melhoria do centro pessoal do usuário ([#6213](https://github.com/nocobase/nocobase/pull/6213)) por @katherinehhh
- **[Gerenciador de arquivos]**

  - Aumentar comprimento da URL para 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) por @mytharcher
  - adicionar código backend para gerar URL de pré-visualização de arquivo ([#6281](https://github.com/nocobase/nocobase/pull/6281)) por @jiannx
  - Os nomes dos arquivos durante o upload mudarão de aleatório para o nome original com um sufixo aleatório. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) por @chenos
  - adicionar código backend para gerar URL de pré-visualização de arquivo ([#6223](https://github.com/nocobase/nocobase/pull/6223)) por @jiannx
  - Alterar API de tipo de armazenamento e adicionar API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
  - Alterar API de tipo de armazenamento e adicionar API de plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) por @mytharcher
- **[Bloco: Painel de ações]** Otimizar estilos mobile ([#6270](https://github.com/nocobase/nocobase/pull/6270)) por @zhangzhonghe
- **[Workflow]** Ocultar ID do nó do cartão do nó na tela do workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Ajustar API de armazenamento com base no repositório principal por @mytharcher
  - Suportar configuração da opção thumbnailRule por @jiannx
- **[Gerenciador de backup]** Permitir restaurar backup para uma aplicação mesmo que faltem alguns plugins por @gchust

#### 🐛 Correções de Bugs

- **[devtools]** Garantir que o cabeçalho X-Forwarded-For seja definido apenas se req.ip não for indefinido. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) por @sheldon66
- **[client]**

  - Posição incorreta após arrastar o menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) por @zhangzhonghe
  - erro ao criar bloco de comentário sem coleção de comentários ([#6309](https://github.com/nocobase/nocobase/pull/6309)) por @katherinehhh
  - Ocorre um erro ao clicar no nó do bloco de árvore ([#6314](https://github.com/nocobase/nocobase/pull/6314)) por @zhangzhonghe
  - Após clicar no menu esquerdo, a subpágina é fechada anormalmente ([#6305](https://github.com/nocobase/nocobase/pull/6305)) por @zhangzhonghe
  - Não limpar o valor do campo quando o valor da expressão estiver vazio ([#6300](https://github.com/nocobase/nocobase/pull/6300)) por @zhangzhonghe
  - componente de campo de texto rico não pode ser completamente limpo ([#6287](https://github.com/nocobase/nocobase/pull/6287)) por @katherinehhh
  - Não é possível mover a página para um grupo ([#6289](https://github.com/nocobase/nocobase/pull/6289)) por @zhangzhonghe
  - Pular erro de autenticação para CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) por @sheldon66
  - Corrigir arquivo enviado perdido quando um por um ([#6260](https://github.com/nocobase/nocobase/pull/6260)) por @mytharcher
  - Corrigido caractere de tag html no campo de entrada do formulário de configuração do canal de e-mail. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) por @sheldon66
  - Corrigir arquivos perdidos após o upload ([#6247](https://github.com/nocobase/nocobase/pull/6247)) por @mytharcher
  - incompatibilidade de formato do seletor no campo de formulário de filtro ([#6234](https://github.com/nocobase/nocobase/pull/6234)) por @katherinehhh
  - Mostrar componente `<Variable.TextArea />` corretamente no modo desabilitado ([#6197](https://github.com/nocobase/nocobase/pull/6197)) por @mytharcher
- **[create-nocobase-app]** Ocorre um erro no cliente web após executar `create-nocobase-app` seguido por `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) por @gchust
- **[auth]** Pular verificação de autenticação do usuário quando o token é chave de API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) por @sheldon66
- **[cli]** Melhorar lógica interna do comando de upgrade do nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) por @chenos
- **[Gerenciador de arquivos]**

  - Corrigir migração para coleção herdada ([#6310](https://github.com/nocobase/nocobase/pull/6310)) por @mytharcher
  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corrigir migração e adicionar casos de teste ([#6288](https://github.com/nocobase/nocobase/pull/6288)) por @mytharcher
  - Corrigir tipo de coluna `path` da coleção de arquivos ([#6294](https://github.com/nocobase/nocobase/pull/6294)) por @mytharcher
  - Atualizar versão do AWS SDK para corrigir bug de upload do MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) por @mytharcher
- **[Bloco: template]** Exigir login ao acessar formulário público ([#6258](https://github.com/nocobase/nocobase/pull/6258)) por @gchust
- **[Controle de acesso]** Registros de dados incorretos ao usar campos muitos-para-muitos como escopo de dados em permissões de coleção ([#6304](https://github.com/nocobase/nocobase/pull/6304)) por @2013xile
- **[Bloco: Kanban]** Filtragem de dados incorreta no bloco Kanban em pop-up usando variáveis de registro do pop-up ([#6290](https://github.com/nocobase/nocobase/pull/6290)) por @katherinehhh
- **[Campo de coleção: Sequência]** Corrigir campo de sequência não desabilitado quando no modo somente leitura ([#6274](https://github.com/nocobase/nocobase/pull/6274)) por @mytharcher
- **[Workflow: kit de teste]** Corrigir casos de teste E2E com base em novos recursos ([#6296](https://github.com/nocobase/nocobase/pull/6296)) por @mytharcher
- **[Formulários públicos]** Pular verificação de autenticação no formulário público ([#6284](https://github.com/nocobase/nocobase/pull/6284)) por @chenos
- **[Autenticação]** Remover wrapper NavigateIfNotSignIn desnecessário do AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) por @sheldon66
- **[Workflow]**

  - Corrigir detalhes de estilo na tela do workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) por @mytharcher
  - Suportar acionar workflow ao alterar senha ([#6248](https://github.com/nocobase/nocobase/pull/6248)) por @mytharcher
- **[Workflow: Evento de ação personalizada]**

  - Corrigir erro de compilação por @mytharcher
  - Corrigir casos de teste E2E por @mytharcher
  - Corrigir inicializador de workflow de gatilho por @mytharcher
  - Corrigir erro de compilação por @mytharcher
- **[Workflow: Evento de pré-ação]** Corrigir mensagem de erro do nó de mensagem de resposta não exibida por @mytharcher
- **[Workflow: JavaScript]** Suportar exigir módulos do NocoBase por @mytharcher
- **[Gerenciador de e-mail]** coleção mailmessage pública e corrigir perda de dados do modal por @jiannx
- **[Armazenamento de arquivos: S3(Pro)]**

  - Atualizar versão do AWS SDK para corrigir bug de upload do MinIO. por @mytharcher
  - definir o valor padrão de forcePathStyleForAccess como virtual por @jiannx
- **[Bloco: Formulário de múltiplas etapas]** erro de ordenação de itens após arrastar por @jiannx
- **[Bloco: Árvore]** Ocorre um erro ao clicar no nó do bloco de árvore por @zhangzhonghe
- **[Gerenciador de backup]** O ícone de exclusão da caixa de diálogo de operação de restauração do local não está funcionando por @gchust
- **[Workflow: Aprovação]**

  - Corrigir migração não executada devido ao número da versão por @mytharcher
  - Corrigir casos de teste E2E com base em novos recursos por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
