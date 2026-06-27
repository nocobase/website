---
title: "Anunciando NocoBase v1.9.0"
description: "Validação de dados e agendamento de tarefas aprimorados, suportando desacoplamento de serviços e desligamento gracioso para melhorar a estabilidade e flexibilidade geral do sistema."
---

## Novo Recurso

### Regras de Validação de Campos

Suporta a configuração de múltiplas regras de validação para campos — como obrigatório, formato, comprimento, intervalo e expressões personalizadas.
Os dados de entrada são validados automaticamente ao enviar o formulário, garantindo precisão e consistência.
As regras de validação podem ser configuradas de forma flexível nas configurações do campo.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Referência: [Validação de campo](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Bloco de Tabela Suporta Configurações de Coluna

O bloco de tabela agora inclui um recurso de Configurações de Coluna, permitindo que os usuários ajustem a ordem, visibilidade e posição fixa das colunas sem entrar no modo de edição — tornando a exibição de dados mais flexível e amigável.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Modo de Gatilho Antes dos Dados Serem Salvos para Aprovações

As aprovações agora suportam um modo de gatilho Antes dos Dados Serem Salvos — quando ativado, os dados não serão armazenados quando a aprovação iniciar e só serão salvos após a aprovação ser aprovada.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Gatilho de Aprovação Expõe Variável de ID da Aprovação

O gatilho de aprovação agora expõe a variável de ID da aprovação, permitindo que seja referenciada em fluxos de trabalho e processos de automação para configuração mais flexível e rastreamento de dados.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Gerenciador de Tarefas Assíncronas] Suporte para Divisão de Serviços via Variáveis de Ambiente e Filas

Apresenta um novo mecanismo de divisão de serviços, permitindo que serviços de tarefas assíncronas e fluxos de trabalho sejam executados independentemente através da variável de ambiente `WORKER_MODE` — possibilitando implantação multi-nó e otimização de desempenho.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Referência: [Divisão de Serviços](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Nova Fila de Eventos para Manipular Mensagens da Fila

Adiciona uma fila de eventos dedicada para manipular mensagens da fila do sistema, melhorando o processamento de tarefas assíncronas e a confiabilidade.

Referência: [Modo Cluster: Fila de Mensagens](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Suporte ao Ciclo de Vida de Desligamento Gracioso

Apresenta o tratamento de desligamento gracioso.
Quando o processo da aplicação recebe um sinal SIGTERM ou SIGINT, agora inicia uma sequência de desligamento adequada para evitar problemas de operações em andamento.

## Melhorias

### Tabelas do Sistema Usam IDs Estilo Snowflake de 53 bits

Atualiza os IDs das tabelas do sistema que anteriormente usavam chaves primárias auto-incrementais sem unicidade global para IDs estilo Snowflake de 53 bits para identificação globalmente única.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Visualizar e Retomar Tarefas de Fluxos de Trabalho Desativados

Blocos de tarefas manuais agora exibem tarefas pendentes mesmo de fluxos de trabalho desativados e permitem que os usuários continuem processando-as.

### Aprimoramentos no Gerenciador de E-mail

* Os dados de e-mail suportam ressincronização
* Permite redimensionar imagens inseridas no editor de e-mail.
* O editor de rich text agora suporta quebras de linha suaves, melhorando a experiência de formatação de e-mail.
* Desempenho da lista de e-mails melhorado para operações mais suaves.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Otimização do Módulo de Fluxo de Trabalho

* Desempenho de consulta otimizado na execução da fila do fluxo de trabalho, introduzindo campos separados e índices para recuperação de dados mais rápida.

![Módulo de Fluxo de Trabalho.png](https://static-docs.nocobase.com/image-5b3byb.png)
