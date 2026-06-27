---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte para variáveis de agregação personalizadas, deslocamento personalizado em filtros de campo de data e muito mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Data de lançamento: 2025-05-23*

#### 🚀 Melhorias

- **[indefinido]** Construir a imagem docker completa ([#6898](https://github.com/nocobase/nocobase/pull/6898)) por @chenos
- **[cliente]** Otimizar o problema de páginas ficando cada vez mais lentas com o uso ([#6888](https://github.com/nocobase/nocobase/pull/6888)) por @zhangzhonghe
- **[Calendário]** suportar botão de atualização configurável no bloco de calendário ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir localidades en-US com base nas chaves zh-CN por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Suporte para fazer todas as tarefas pendentes no centro de tarefas do fluxo de trabalho por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - erro de renderização causado por formato de estilo inválido ao adicionar campo de associação ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh
  - verificação incorreta de valor vazio para campo de associação toMany em regra de vinculação ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh
- **[Campo de coleção: Markdown(Vditor)]** campo markdown (Vditor) não se adaptando ao tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh
- **[Coleção: Árvore]** Evitar atualizações incorretas em prefixos de caminho semelhantes durante atualizações de caminho ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile
- **[Gerenciador de arquivos]**

  - Corrigir regra de correspondência de pré-visualização ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher
  - Corrigir injeção de coleção do cliente e parâmetro de upload ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher
  - Corrigir URL de pré-visualização em arquivos não-imagem ([#6889](https://github.com/nocobase/nocobase/pull/6889)) por @mytharcher
- **[Fluxo de trabalho: nó de e-mail]** Lidar com campo 'to' indefinido e melhorar o processamento de destinatários de e-mail. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66
- **[Fluxo de trabalho: Evento de ação personalizada]**

  - Corrigir execução incorreta do botão após alguns cliques por @mytharcher
  - Corrigir manipulador de erro que não pode ser correspondido por classe por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Corrigir cálculo de appends de associação por @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Data de lançamento: 2025-05-27*

#### 🎉 Novos Recursos

- **[Ação: Importar registros Pro]**
  - Suporte para definir registros únicos por múltiplos campos ao importar configurações por @aaaaaajie
  - Suporte para configurações de sobrescrita de células em branco e ignorá-las ao importar configurações por @aaaaaajie

#### 🚀 Melhorias

- **[indefinido]** Atualizar versão do Node para 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - falha na verificação de condição noneOf em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
- **[indefinido]** Usar Node 20 devido aos requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[banco de dados]** Corrigida a geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Gerenciador de fonte de dados]** Resolver problema com a ordenação por arrastar e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar os dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Fluxo de trabalho: Evento de ação personalizada]** Evitar erro causado pela ordem de carregamento do plugin por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigir url de pré-visualização e parâmetro de upload por @mytharcher
  - Corrigir parâmetros de upload duplicados por @mytharcher
- **[Bloco: Formulário multi-etapas]** Corrigir tipos por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir id de registro incorreto para ViewAction por @mytharcher
  - Corrigir appends e cálculo de dados antes de enviar o processo de aprovação por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Data de lançamento: 2025-05-28*

#### 🎉 Novos Recursos

- **[indefinido]** Novo suporte para Gitpod permite iniciar o ambiente de desenvolvimento com um clique e começar a desenvolver rapidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
- **[Ação: Importar registros Pro]**

  - Suporte para definir registros únicos por múltiplos campos ao importar configurações por @aaaaaajie
  - Suporte para configurações de sobrescrita de células em branco e ignorá-las ao importar configurações por @aaaaaajie
- **[Campo de coleção: Código]** Adicionar configurações de altura para o campo editor de código por @mytharcher
- **[Gerenciador de e-mail]**

  - suporte para marcar e-mail como tarefa e adicionar nota por @jiannx
  - suporte para rótulos e configurações de combinação por @jiannx

#### 🚀 Melhorias

- **[cliente]**

  - melhorar estilos para componente de filtro de intervalo de datas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - Corrigir problema onde controles de formulário ocultos capturavam a tecla Tab, melhorando significativamente a eficiência da operação do formulário ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obrigatórios antes de mostrar diálogo de confirmação ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
  - ajustar exibição do conteúdo da opção de filtro de data ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[indefinido]** Atualizar versão do Node para 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

#### 🐛 Correções de Bugs

- **[cliente]**

  - configuração de visibilidade dos dois pontos do rótulo do formulário não funcionando ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - Redimensionamento de bloco por arrasto não funcionando ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - i18n do componente de atribuição de campo não funcionando ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - falha na verificação de condição noneOf em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - variáveis de condição aninhadas em regras de vinculação não renderizando corretamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - Corrigir o problema com o botão de cópia no pop-up de erro copiando como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - análise incorreta de variável de data no limite de intervalo de datas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
- **[banco de dados]** Corrigida a geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[indefinido]** Usar Node 20 devido aos requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Campo de coleção: Markdown(Vditor)]** problema de largura do componente do campo markdown-vditor após aumentar e diminuir o zoom ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar os dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Gerenciador de fonte de dados]** Resolver problema com a ordenação por arrastar e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Fluxo de trabalho: Evento de ação personalizada]** Evitar erro causado pela ordem de carregamento do plugin por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigir parâmetros de upload duplicados por @mytharcher
  - Corrigir url de pré-visualização e parâmetro de upload por @mytharcher
- **[Bloco: Formulário multi-etapas]** Corrigir tipos por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir id de registro incorreto para ViewAction por @mytharcher
  - Corrigir localidade por @mytharcher
  - Corrigir appends e cálculo de dados antes de enviar o processo de aprovação por @mytharcher
- **[Gerenciador de e-mail]**

  - corrigir: remover coluna de ação por @jiannx
  - corrigir erro do modal de adicionar nota por @jiannx
  - corrigir permissão da api das coleções mailMessageNotes e mailMessageLabels por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Data de lançamento: 2025-05-28*

#### 🎉 Novos Recursos

- **[cliente]** Suporte para variáveis de agregação personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
  Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** suporte para deslocamento personalizado em filtros de campo de data ([#6854](https://github.com/nocobase/nocobase/pull/6854)) por @katherinehhh
- **[Campo de coleção: Código]** Adicionar configurações de altura para o campo editor de código por @mytharcher
- **[Ação: Importar registros Pro]**

  - Suporte para definir registros únicos por múltiplos campos ao importar configurações por @aaaaaajie
  - Suporte para configurações de sobrescrita de células em branco e ignorá-las ao importar configurações por @aaaaaajie
- **[Variáveis personalizadas]** Suporte para variáveis de agregação personalizadas por @zhangzhonghe
  Referência: [Variáveis personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gerenciador de e-mail]**

  - suporte para marcar e-mail como tarefa e adicionar nota por @jiannx
  - suporte para rótulos e configurações de combinação por @jiannx

#### 🚀 Melhorias

- **[cliente]** ajustar exibição do conteúdo da opção de filtro de data ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[indefinido]** Atualizar versão do Node para 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher
- **[Calendário]** suportar botão de atualização configurável no bloco de calendário ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh
- **[Ação: Importar registros]**

  - Otimizar desempenho de importação xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie
  - Otimizar desempenho de importação xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie
- **[Ação: Exportar registros]** Otimização de desempenho para exportação para XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) por @aaaaaajie
- **[Bloco: iframe]** melhorar lógica de atribuição de variável de data ([#6828](https://github.com/nocobase/nocobase/pull/6828)) por @katherinehhh
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigir localidades en-US com base nas chaves zh-CN por @mytharcher
- **[Ação: Exportar registros Pro]** Otimização de desempenho para exportação para XLSX por @aaaaaajie
- **[Fluxo de trabalho: Aprovação]** Suporte para fazer todas as tarefas pendentes no centro de tarefas do fluxo de trabalho por @mytharcher
- **[Gerenciador de e-mail]** implementação de esquema, então envio de e-mail e suporte a IA por @jiannx

#### 🐛 Correções de Bugs

- **[banco de dados]** Corrigida a geração automática de uuid ou nanoid não funcionando em associação muitos-para-muitos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[cliente]**

  - falha na verificação de condição noneOf em regras de vinculação ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - configuração de altura do bloco não aplicada em tempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - variáveis de condição aninhadas em regras de vinculação não renderizando corretamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - análise incorreta de variável de data no limite de intervalo de datas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
  - verificação incorreta de valor vazio para campo de associação toMany em regra de vinculação ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh
  - erro de renderização causado por formato de estilo inválido ao adicionar campo de associação ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh
  - variável de objeto atual ausente em regra de vinculação dentro de subtabela ([#6907](https://github.com/nocobase/nocobase/pull/6907)) por @katherinehhh
- **[indefinido]** Usar Node 20 devido aos requisitos do pacote commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Gerenciador de fonte de dados]** Resolver problema com a ordenação por arrastar e soltar não funcionando ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Documentação da API]** Adicionar informações de sub-aplicativo ausentes a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificação: Mensagem no aplicativo]** Resolvido um problema onde a ação "marcar tudo como lido" em mensagens no aplicativo poderia afetar os dados de outros usuários. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Ação: Exportar registros]** Corrigido um problema onde relacionamentos aninhados falhavam ao exportar corretamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Campo de coleção: Markdown(Vditor)]** campo markdown (Vditor) não se adaptando ao tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh
- **[Coleção: Árvore]** Evitar atualizações incorretas em prefixos de caminho semelhantes durante atualizações de caminho ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile
- **[Fluxo de trabalho: nó de e-mail]** Lidar com campo 'to' indefinido e melhorar o processamento de destinatários de e-mail. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66
- **[Verificação]** Corrigir nomenclatura incorreta em inglês: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) por @2013xile
- **[Gerenciador de arquivos]**

  - Corrigir injeção de coleção do cliente e parâmetro de upload ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher
  - Corrigir regra de correspondência de pré-visualização ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher
- **[Fluxo de trabalho: Evento de ação personalizada]**

  - Evitar erro causado pela ordem de carregamento do plugin por @mytharcher
  - Corrigir manipulador de erro que não pode ser correspondido por classe por @mytharcher
  - Corrigir execução incorreta do botão após alguns cliques por @mytharcher
- **[Filtro de múltiplas palavras-chave]** Remover espaços em branco de ambos os lados de cada palavra-chave por @zhangzhonghe
- **[Autenticação de dois fatores (2FA)]** Exigir que um verificador seja configurado ao ativar 2FA por @2013xile
- **[Armazenamento de arquivos: S3(Pro)]**

  - Corrigir parâmetros de upload duplicados por @mytharcher
  - Corrigir url de pré-visualização e parâmetro de upload por @mytharcher
- **[Impressão de modelo]** Aprimorar lógica hasChildren em useFieldsTree para incluir verificação de enum do uiSchema. por @sheldon66
- **[Bloco: Formulário multi-etapas]** Corrigir tipos por @mytharcher
- **[Fluxo de trabalho: Aprovação]**

  - Corrigir localidade por @mytharcher
  - Corrigir appends e cálculo de dados antes de enviar o processo de aprovação por @mytharcher
  - Corrigir cálculo de appends de associação por @mytharcher
  - Corrigir id de registro incorreto para ViewAction por @mytharcher
- **[Gerenciador de e-mail]**

  - corrigir permissão da api das coleções mailMessageNotes e mailMessageLabels por @jiannx
  - corrigir erro do modal de adicionar nota por @jiannx
  - corrigir: remover coluna de ação por @jiannx
