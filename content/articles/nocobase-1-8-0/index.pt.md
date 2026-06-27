---
title: "Anunciando NocoBase v1.8.0"
description: "Processo de autenticação aprimorado, suporte a variáveis estatísticas personalizadas e atualizações no gerenciamento de e-mail, otimizando a experiência do fluxo de trabalho e a interação móvel"
---

## Novo Recurso

### Esqueci a Senha – Recuperação por E-mail Suportada

Os usuários agora podem recuperar suas senhas por e-mail. Ative esse recurso em **Configurações > Autenticação > Esqueci a Senha**, configure um canal de notificação por e-mail e personalize o e-mail de redefinição de senha (suporta variáveis e formato HTML).

![Esqueci a Senha – Recuperação por E-mail Suportada.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Referência: [Esqueci a Senha](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Variáveis de Agregação Personalizadas

Suporta a criação de variáveis estatísticas como contagem, soma e média. Essas variáveis podem ser usadas em badges de menu, rótulos de página e outras áreas para tornar a interface mais intuitiva e rica em informações.

![Variáveis de Agregação Personalizadas.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Referência: [Variáveis Personalizadas](https://docs.nocobase.com/handbook/custom-variables)

### Gerenciamento de E-mail

O módulo de gerenciamento de e-mail foi totalmente atualizado, agora suportando exclusão de e-mails, envio em lote, configuração de intervalo de sincronização e várias melhorias na experiência do usuário.

![Gerenciamento de E-mail.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Fontes de Dados

Suporta o campo BIT do SQL Server em fontes de dados externas e permite o carregamento sob demanda de tabelas de dados de fontes externas.

![Fontes de Dados.png](https://static-docs.nocobase.com/image-rml96b.png)

### Cópia de Texto

Suporta cópia com um clique do conteúdo de campos de texto.

![Cópia de Texto.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Workflow: Nó de Requisição HTTP] Suporte para Tipo `multipart/form-data`

Ao configurar um nó de Requisição HTTP em um workflow, agora você pode selecionar o tipo de conteúdo `multipart/form-data`. Uma vez ativado, o corpo da requisição aceita submissões form-data—incluindo campos `file`—para suportar uploads de arquivos e cenários semelhantes.

![Workflow.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Workflow: Aprovação] Resultados do Nó de Aprovação Suportam Geração de Variáveis de Registro de Aprovação

Os resultados da execução do nó de aprovação agora podem ser usados como variáveis em nós subsequentes, com registro automático de status e dados relacionados.

![Workflow: Aprovação](https://static-docs.nocobase.com/20250614095052.png)

Referência: [Resultados do Nó](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Melhorias

### Entrada por Leitura para Preenchimento

O componente genérico de entrada de texto agora inclui uma opção **Ativar Leitura**. Quando ativada, um botão de leitura aparece no lado direito do campo de entrada, permitindo que os dados sejam inseridos via dispositivos de leitura. Você também pode configurar se a entrada manual é permitida.

![Entrada por Leitura para Preenchimento.png](https://static-docs.nocobase.com/image-u7gfro.png)

Referência: [Ativar leitura](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Suporte a Localização no Bloco Markdown

O conteúdo Markdown agora suporta localização usando a sintaxe `{{t 'xxx'}}` para inserir texto multilíngue.

![Suporte a Localização no Bloco Markdown.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Referência: [Localização](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Links de Menu Suportam Abertura em Nova Janela

Uma nova opção **"Abrir em nova janela"** foi adicionada para links de menu, permitindo personalizar como os links são abertos.

![Links de Menu Suportam Abertura em Nova Janela.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Bloco de Calendário Suporta Configuração do Dia de Início da Semana

Agora você pode personalizar o dia de início da semana na visualização do calendário, escolhendo entre domingo ou segunda-feira para se adequar a diferentes preferências e hábitos regionais.

![Bloco de Calendário Suporta Configuração do Dia de Início da Semana.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Referência: [Dia de início da semana](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Modo de Visualização Markdown (Vditor) Suporta Zoom ao Clicar em Imagem

No modo de visualização, as imagens dentro do conteúdo Markdown podem ser clicadas para ampliar, melhorando a experiência de leitura.

![Modo de Visualização Markdown (Vditor) Suporta Zoom ao Clicar em Imagem.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Aprimoramento Abrangente da Funcionalidade e Performance do Módulo de Workflow

- Suporte à filtragem de workflows por mais campos para melhorar a eficiência da busca
- Otimização dos estilos de exibição móvel para melhorar a experiência do usuário
- Exclusão do carregamento de campos JSON para melhorar significativamente a performance de carregamento da lista de planos de execução
- Adição de uma nova API de log para execuções de teste de nós
- Ajuste da interface da API do método `getCollectionFieldOptions` para aumentar a flexibilidade

![Módulo de Workflow.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Aprimoramentos de Funcionalidade e Melhorias de Experiência no Processo de Aprovação

- Adicionada Opção de Configuração para Listas de Seleção de Pessoal de Transferência e Adição de Assinatura, Suportando Exibição de Mais Informações de Campo para Auxiliar na Seleção Mais Precisa
- Ajuste da Exibição de Tempo na Linha do Tempo para Tempo Absoluto para Melhorar a Legibilidade
- Importação de Tabelas de Dados Relacionadas à Aprovação do Plugin de Workflow para Evitar que Tabelas Locais Sejam Sobrescritas
- Ajuste da Estrutura da Interface da API de Variáveis para Aumentar a Flexibilidade e Consistência

![Processo de Aprovação.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Suporte à Configuração de Opções do Pool de Conexão do Banco de Dados Via Variáveis de Ambiente

Os parâmetros do pool de conexão do banco de dados podem ser configurados de forma flexível através de variáveis de ambiente para melhorar a flexibilidade de implantação.

![Suporte à Configuração de Opções do Pool de Conexão do Banco de Dados Via Variáveis de Ambiente.png](https://static-docs.nocobase.com/image-tz87as.png)

### Bloco de Comentários Suporta Paginação

Suporta carregamento paginado de comentários para melhorar a performance de carregamento e a experiência de leitura em cenários com grandes volumes de dados.

![Bloco de Comentários Suporta Paginação.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Melhorias na Experiência Móvel

- Popups de Notificação Adaptados aos Estilos Móveis
- Lógica de Detecção de Layout Móvel Otimizada para Melhorar a Precisão da Responsividade
