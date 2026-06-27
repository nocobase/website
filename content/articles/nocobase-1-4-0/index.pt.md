---
title: "NocoBase v1.4.0 Lançado Oficialmente"
description: "Formulários públicos, novas fontes de dados e mais funcionalidades."
---

## Principais Novas Funcionalidades

### Simplificação do processo de adicionar e atualizar plugins

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* A lista de plugins agora é lida diretamente do diretório local.
* Unificação dos processos de adicionar e atualizar plugins.
* Interface suporta ativação em lote de plugins.
* Processo de download e atualização de plugins comerciais simplificado.

Documentação de referência:

* [Instalação e Atualização de Plugins](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Notas de Versão / Simplificação do processo de adicionar e atualizar plugins](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Notificação

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Notificação: Mensagem no aplicativo**
  Permite que os usuários recebam notificações de mensagens em tempo real dentro do aplicativo NocoBase;
* **Notificação: E-mail**
  Usado para enviar notificações por e-mail com transporte SMTP integrado. Detalhes;
* **Notificação: WeCom**
  Envia notificações através do canal WeCom.

Documentação de referência:

* [Gerenciador de Notificações](https://docs.nocobase.com/handbook/notification-manager)

### Sincronização de Dados do Usuário

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Documentação de referência:

* [Sincronização de Dados do Usuário](https://docs.nocobase.com/handbook/user-data-sync)

### Gerenciador de Backup

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Documentação de referência:

* [Gerenciador de Backups](https://docs.nocobase.com/handbook/backups)

### Formulários Públicos

Compartilhe formulários públicos externamente para coletar informações de usuários anônimos.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Documentação de referência:

* [Formulários Públicos](https://docs.nocobase.com/handbook/public-forms)

### Fonte de Dados: KingbaseES

Use o banco de dados KingbaseES como fonte de dados, seja como banco de dados principal ou externo.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Documentação de referência:

* [Fonte de Dados: Banco de Dados KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### Fonte de Dados: Oracle Externo

Use bancos de dados Oracle externos como fonte de dados.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Documentação de referência:

* [Fonte de Dados Externa: Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Campo de Coleção: Anexos (URL)

Suporta anexos baseados em URL.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Documentação de referência:

* [Campo de Tabela de Dados: Anexos (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Componente de Campo: Máscara

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Documentação de referência:

* [Componente de campo: Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### Fluxo de Trabalho: JavaScript

Os nós JavaScript permitem que os usuários executem JavaScript dentro de um fluxo de trabalho. O script pode usar variáveis de nós upstream no processo como parâmetros, e o valor de retorno do script pode ser usado em nós downstream.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Documentação de referência:

* [Nó de Fluxo de Trabalho - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Visualização de Dados: ECharts

Adicionado ECharts, suportando gráficos de funil, radar e mais, e fornecendo configurações mais amigáveis ao usuário.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Documentação de referência:

* [Visualização de Dados: Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Bloco: Formulário de múltiplas etapas

Divida o formulário com muitos campos em várias etapas para aliviar a carga sobre os usuários.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Documentação de referência:

* [Bloco: Formulário de múltiplas etapas](https://docs.nocobase.com/handbook/block-multi-step-from)

### Bloco: Painel de Ações

Projetado para abrigar várias ações rápidas, atualmente suporta:

* Link
* Ler código QR
* Popup
* Solicitação personalizada

Suporta layouts de grade e lista.

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Documentação de referência:

* [Bloco: Painel de Ações](https://docs.nocobase.com/handbook/block-action-panel)

## Funcionalidades Removidas

### Plugin de Backup e Restauração Obsoleto

Desde o NocoBase v0.19, introduzimos o plugin `@nocobase/plugin-backup-restore` para backup e restauração de aplicativos. No entanto, o feedback dos usuários revelou várias limitações em sua funcionalidade:

1. Incapacidade de fazer backup e restaurar metadados em nível de banco de dados, como valores padrão de campos de banco de dados e índices únicos.
2. Não conseguia lidar com objetos de banco de dados como visões, procedimentos armazenados, funções e triggers durante o backup ou restauração.
3. Exigia configuração individual de `dumpRules` para cada plugin, muitas vezes necessitando de lógica personalizada dos desenvolvedores de plugins para evitar falhas no processo de backup ou restauração.
4. O design complexo do agrupamento de backup aumentava a carga cognitiva e poderia levar a falhas de backup ou perda de dados se não fosse selecionado corretamente.
5. O processo de backup e restauração ocorria na camada de aplicação, o que significava que falharia se o aplicativo não pudesse iniciar.

Após consideração cuidadosa, a partir da versão v1.4, decidimos descontinuar este plugin. Para a nova solução de backup, consulte a documentação abaixo.

Documentação de Referência:

* [Como Fazer Backup e Restaurar o NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
