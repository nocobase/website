---
title: "Anunciando o NocoBase 2.0-beta"
description: "Após 8 semanas de refinamento intensivo, o NocoBase 2.0 entrou na fase beta estável. Esta versão traz otimizações profundas para o Funcionário de IA, Visualização 2.0 e Aprovação 2.0, além de introduzir os novos Modelos de UI e a Arquitetura Multi-App."
---

Após 8 semanas de trabalho árduo da equipe NocoBase e de todos os colaboradores, o NocoBase 2.0-beta foi lançado conforme o planejado. Esta versão inclui refinamentos extensivos e testes dos novos recursos do NocoBase 2.0, levando o 2.0 a uma fase mais estável. Convidamos os primeiros usuários a usar esta versão para testes de produção e fornecer feedback oportuno sobre quaisquer problemas ou sugestões.

O 2.0-rc será lançado antes de 11 de fevereiro de 2026, com testes mais abrangentes e novos recursos adicionais. Fique ligado.

## Novos Recursos

### Funcionários de IA

Fizemos melhorias significativas nos Funcionários de IA, incluindo:

- Capacidades otimizadas dos Funcionários de IA integrados
- Suporte para acesso a fontes de dados externas
- Suporte para consulta de grandes volumes de dados
- Preservação da formatação original no conteúdo da conversa
- Mensagens de erro melhoradas

Manual do Usuário: [Funcionários de IA](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### Modelos de UI

O beta 2.0 introduz um novo recurso de Modelos de UI. Cada tipo de modelo suporta cópia e referência, incluindo:

- Modelos de Bloco
- Modelos de Campo
- Modelos de Pop-up

Notavelmente, os Modelos de Pop-up permitem salvar todo o conteúdo do pop-up (todas as abas e blocos em subpáginas) como um modelo, reduzindo significativamente o trabalho repetitivo da versão 1.x.

Manual do Usuário: [Modelos de UI](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

O Gerenciamento Multi-App é a solução unificada de gerenciamento de aplicativos do NocoBase para criar e gerenciar múltiplas instâncias de aplicativos NocoBase fisicamente isoladas em um ou mais ambientes de execução. Através do Supervisor de Aplicativos, os usuários podem criar e manter vários aplicativos a partir de um ponto de entrada unificado, atendendo às necessidades de diferentes negócios e escalas. O NocoBase suporta três arquiteturas de implantação:

- **Aplicativo Único**: Implante apenas uma instância do NocoBase onde todas as funções de negócio, dados e usuários são executados no mesmo aplicativo.
- **Multi-App com Memória Compartilhada**: Vários aplicativos podem ser executados simultaneamente dentro de uma instância do NocoBase. Cada aplicativo é independente, pode se conectar ao seu próprio banco de dados e pode ser criado, iniciado e parado individualmente, mas eles compartilham o mesmo processo e espaço de memória. Os usuários ainda precisam manter apenas uma instância do NocoBase.
- **Implantação Híbrida Multi-Ambiente**: Implante um NocoBase como um centro de gerenciamento unificado, enquanto implanta várias instâncias do NocoBase como ambientes de execução de aplicativos para executar aplicativos de negócios. Diferentes aplicativos podem ser executados em diferentes nós ou clusters.

Manual do Usuário: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Espaço

O plugin Multi-Espaço permite o isolamento lógico para criar múltiplos espaços de dados independentes dentro de uma única instância de aplicativo, adequado para cenários como operações multi-fábrica ou multi-loja com processos de negócios e configurações de sistema altamente consistentes.

Manual do Usuário: [Multi-Espaço](https://v2.docs.nocobase.com/multi-app/multi-space)

### Visualização de Dados 2.0

A versão 1.x fornecia plugins básicos de visualização de dados baseados em Ant Design Charts e ECharts para visualização fundamental de dados. No entanto, ficava aquém no tratamento de gráficos complexos, interações personalizadas e cenários de vinculação de dados.

O NocoBase 2.0 introduz um novo plugin de visualização de dados baseado em ECharts, suportando modo de configuração visual, bem como modos SQL e JSON. Suporta eventos, facilitando o tratamento de gráficos complexos, vinculação de vários gráficos e cenários de detalhamento de dados.

Não se preocupe se SQL e JSON são muito complexos — o Funcionário de IA Nathan está aqui para ajudar.

Manual do Usuário: [Visualização de Dados](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Fluxo de Trabalho

#### Novo Nó "Ramificação Multi-Condição"

Semelhante às instruções `switch / case` ou `if / else if` em linguagens de programação. O sistema avalia várias condições configuradas em sequência e executa apenas a ramificação que satisfaz uma condição. Este nó substituirá algumas funcionalidades do nó "Ramificação Paralela". Recomendamos substituir fluxos de trabalho que usam nós de condição e paralelo pelo novo nó "Ramificação Multi-Condição".

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Manual do Usuário: [Ramificação Multi-Condição](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Aprovação 2.0

A maioria das configurações de bloco no plugin de Aprovação foi refatorada usando o FlowEngine, suportando configuração e uso mais flexíveis. Vários novos recursos também foram adicionados.

Manual do Usuário: [Aprovação](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Opção para Exibir Instantâneo de Dados ou Estado Mais Recente na Interface de Processamento de Aprovação

* **Instantâneo**
  Durante o processo de aprovação, o solicitante e os aprovadores veem o estado do registro como estava quando entraram e, após o envio, só podem ver os registros que modificaram — eles não verão as atualizações feitas por outros posteriormente.
* **Mais Recente**
  Durante o processo de aprovação, o solicitante e os aprovadores sempre veem a versão mais recente do registro ao longo do processo, independentemente do estado do registro antes de sua ação. Após o término do processo, eles verão a versão final do registro.

#### Suporte para Configurar o Escopo de Dados do Iniciador

Você pode configurar permissões baseadas no escopo do usuário para determinar quais usuários podem iniciar a aprovação.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### Na Central de Tarefas, Suporte para Configurar Campos de Dados de Negócios nos Cartões de Lista "Meus Iniciados" e "Minhas Aprovações"

O cartão "Meus Iniciados" permite a configuração flexível de informações de aprovação e campos de dados de negócios.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

O cartão "Minhas Aprovações" permite a configuração flexível de tarefas de aprovação e campos de dados de negócios.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Gerenciador de E-mail 2.0

O plugin Gerenciador de E-mail foi refatorado usando o FlowEngine, permitindo que os Funcionários de IA participem perfeitamente do resumo, análise e composição de e-mails. Novos recursos como salvamento automático de rascunhos também foram adicionados.

Manual do Usuário: [Gerenciador de E-mail](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Histórico de Registros

O plugin Histórico de Registros rastreia alterações de dados salvando automaticamente instantâneos e registros de diferenças para operações de criação, atualização e exclusão, ajudando os usuários a rastrear rapidamente alterações de dados e auditar operações.

Manual do Usuário: [Histórico de Registros](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Soluções

O NocoBase 2.0 fornece modelos de solução prontos para uso para construir rapidamente sistemas de negócios.

### Sistema de Tickets Inteligente

Uma plataforma de gerenciamento de tickets orientada por IA, com:

- **Acesso Unificado Multi-Fonte**: Formulários públicos, portal do cliente, análise de e-mail, API/Webhook
- **Equipe de Funcionários de IA**: Sam (roteamento), Grace (respostas), Max (conhecimento), Lexi (tradução)...
- **Monitoramento SLA Completo**: Prioridade de quatro níveis P0-P3 com alertas de escalonamento automático
- **Autocirculação de Conhecimento**: Tickets tornam-se automaticamente artigos de conhecimento após a resolução

Documentação da Solução: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Gerenciamento de Clientes (Prévia)

> **Nota da Versão**: A versão atual é baseada na 1.x com parte da interface do usuário frontend adaptada para 2.0, **apenas para aprendizado e pré-visualização**.

O NocoBase CRM é uma plataforma de gerenciamento de relacionamento com o cliente sem código, flexível e poderosa, cobrindo:

- **Gerenciamento de Clientes**: Informações do cliente, contatos, classificação de clientes
- **Funil de Vendas**: Gerenciamento de leads, acompanhamento de oportunidades, funil de vendas
- **Gerenciamento de Pedidos**: Cotações, pedidos, contratos
- **Análise de Dados**: Painéis, relatórios, visualização de dados

Documentação da Solução: https://v2.docs.nocobase.com/solution/crm/

Demonstração ao Vivo: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta vs 1.x

### Legenda

- ✅ Suportado: Recursos da 1.x adaptados na 2.0
- 🆕 Novo recurso: Novos recursos na 2.0
- ✨ Aprimorado: Recursos melhorados em comparação com a 1.0
- 🔄 Em andamento: Recursos em desenvolvimento
- 🚀 Otimizando: Suportado, mas precisa de melhorias
- ❌ Não suportado: Recursos não suportados na 2.0
- ⚠️ Obsoleto: Recursos obsoletos
- P0/P1/P2: Prioridade do recurso
  - P0: Em breve
  - P1: Será suportado antes do lançamento oficial da 2.0
  - P2: Será suportado após o lançamento oficial da 2.0

### Construtor de Interface

#### Rotas e Menus


| Categoria      | Recurso           | Status         | Prioridade | Notas |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Adicionar item de menu | Grupo             | ✅ Suportado   | -        | -     |
| Adicionar item de menu | Página clássica (v1) | ✅ Suportado   | -        | -     |
| Adicionar item de menu | Página moderna (v2)  | 🆕 Novo recurso | -        | -     |
| Adicionar item de menu | Link              | ✅ Suportado   | -        | -     |

#### Páginas


| Categoria      | Recurso            | Status           | Prioridade | Notas |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Configurações da página | Exibir título da página | ✅ Suportado     | -        | -     |
| Configurações da página | Editar título da página    | ✅ Suportado     | -        | -     |
| Configurações da página | Ativar abas da página   | ✅ Suportado     | -        | -     |
| Configurações da página | Copiar link incorporado | ❌ Não suportado | -        | -     |
| Configurações da página | Ativar cabeçalho da página | ⚠️ Obsoleto  | -        | -     |
| Layout de arrastar   | Layout de arrastar bloco  | ✨ Aprimorado      | -        | -     |

#### Adicionar Blocos

##### Blocos de dados


| Recurso         | Status           | Prioridade | Notas |
| --------------- | ---------------- | -------- | ----- |
| Tabela           | ✅ Suportado     | -        | -     |
| Formulário (Editar)     | ✅ Suportado     | -        | -     |
| Formulário (Adicionar novo)  | ✅ Suportado     | -        | -     |
| Detalhes         | ✅ Suportado     | -        | -     |
| Lista            | ✅ Suportado     | -        | -     |
| Cartão de grade       | ✅ Suportado     | -        | -     |
| Comentários        | ✅ Suportado     | -        | -     |
| Mapa             | ✅ Suportado     | -        | -     |
| Gráficos          | ✨ Aprimorado      | -        | -     |
| Calendário            | ❌ Não suportado | -        | -     |
| Gantt           | ❌ Não suportado | -        | -     |
| Kanban          | ❌ Não suportado | -        | -     |
| Formulário de várias etapas | ❌ Não suportado | -        | -     |

##### Blocos de filtro


| Recurso  | Status           | Prioridade | Notas |
| -------- | ---------------- | -------- | ----- |
| Formulário     | ✨ Aprimorado      | -        | -     |
| Colapso | ❌ Não suportado | -        | -     |
| Árvore     | ❌ Não suportado | -        | -     |

##### Outros blocos


| Recurso             | Status           | Prioridade | Notas |
| ------------------- | ---------------- | -------- | ----- |
| Modelo de bloco      | 🆕 Novo recurso   | -        | -     |
| Bloco JS            | 🆕 Novo recurso   | -        | -     |
| Iframe              | ✅ Suportado     | -        | -     |
| Painel de ações        | ✅ Suportado     | -        | -     |
| Markdown            | ✨ Aprimorado      | -        | -     |
| Histórico de registros      | 🆕 Novo recurso   | -        | -     |
| E-mail               | ✅ Suportado     | -        | -     |
| Fluxo de trabalho > Tarefa    | ❌ Não suportado | -        | -     |
| Fluxo de trabalho > Aprovação | 🔄 Em andamento   | P0       | -     |

#### Abas


| Categoria     | Recurso  | Status         | Prioridade | Notas |
| ------------ | -------- | -------------- | -------- | ----- |
| Configurações da aba | Editar aba | ✅ Suportado   | -        | -     |
| Configurações da aba | Copiar UID | 🆕 Novo recurso | -        | -     |
| Configurações da aba | Excluir   | ✅ Suportado   | -        | -     |

#### Bloco de Tabela


| Categoria                       | Recurso                      | Status           | Prioridade | Notas |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Configurações da tabela                 | Título e descrição          | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Regras de vinculação de bloco          | ✨ Aprimorado      | -        | -     |
| Configurações da tabela                 | Altura do bloco                 | ❌ Não suportado | P1       | -     |
| Configurações da tabela                 | Ativar classificação por arrastar e soltar | ❌ Não suportado | P1       | -     |
| Configurações da tabela                 | Campo de classificação por arrastar e soltar  | ❌ Não suportado | P1       | -     |
| Configurações da tabela                 | Modo de carregamento de dados            | ❌ Não suportado | P1       | -     |
| Configurações da tabela                 | Ativar edição rápida            | 🆕 Novo recurso   | -        | -     |
| Configurações da tabela                 | Mostrar números de linha             | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Tamanho da página                    | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Escopo de dados                   | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Classificação padrão              | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Ativar tabela em árvore            | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Expandir todas as linhas por padrão   | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Densidade da tabela                | ✅ Suportado     | -        | -     |
| Configurações da tabela                 | Salvar como modelo             | 🆕 Novo recurso   | -        | -     |
| Configurações da tabela                 | Copiar UID                     | 🆕 Novo recurso   | -        | -     |
| Configurações da tabela                 | Excluir                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Adicionar novo                      | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Excluir                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Filtrar                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Link                         | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Pop-up                        | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Atualizar                      | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Edição em massa                    | ❌ Não suportado | P1       | -     |
| Ações da tabela > Ações globais | Atualização em massa                  | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Exportar                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Importar                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações globais | Solicitação personalizada               | ❌ Não suportado | P2       | -     |
| Ações da tabela > Ações globais | Configurações de coluna              | ❌ Não suportado | -        | -     |
| Ações da tabela > Ações globais | Funcionários de IA                 | 🆕 Novo recurso   | -        | -     |
| Ações da tabela > Ações globais | Ação JS                    | 🆕 Novo recurso   | -        | -     |
| Ações da tabela > Ações de linha    | Visualizar                         | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Editar                         | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Atualizar registro                | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Excluir                       | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Pop-up                        | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Link                         | ✅ Suportado     | -        | -     |
| Ações da tabela > Ações de linha    | Duplicar                    | ❌ Não suportado | P2       | -     |
| Ações da tabela > Ações de linha    | Solicitação personalizada               | ❌ Não suportado | P2       | -     |
| Ações da tabela > Ações de linha    | Funcionários de IA                 | 🆕 Novo recurso   | -        | -     |
| Ações da tabela > Ações de linha    | Ação JS                    | 🆕 Novo recurso   | -        | -     |
| Colunas da tabela                  | Exibir campos da coleção    | ✅ Suportado     | -        | -     |
| Colunas da tabela                  | Exibir campos de associação   | ✅ Suportado     | -        | -     |
| Colunas da tabela > Outras colunas  | Campo JS                     | 🆕 Novo recurso   | -        | -     |
| Colunas da tabela > Outras colunas  | Coluna JS                    | 🆕 Novo recurso   | -        | -     |
| Colunas da tabela > Outras colunas  | Ações                      | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Título da coluna                 | ✅ Suportado     | -        | -     |
| Configurações da coluna da tabela          | Dica de ferramenta                      | ✅ Suportado     | -        | -     |
| Configurações da coluna da tabela          | Largura da coluna                 | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Ativar edição rápida            | 🆕 Novo recurso   | -        | -     |
| Configurações da coluna da tabela          | Classificável                     | ✅ Suportado     | -        | -     |
| Configurações da coluna da tabela          | Fixo                        | ✅ Suportado     | -        | -     |
| Configurações da coluna da tabela          | Estilo                        | ❌ Não suportado | P2       | -     |
| Configurações da coluna da tabela          | Modo de exibição                 | 🆕 Novo recurso   | -        | -     |
| Configurações da coluna da tabela          | Exibir botão de cópia          | ❌ Não suportado | -        | -     |
| Configurações da coluna da tabela          | Reticências em texto longo    | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Componente de campo              | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Modo de renderização                  | 🆕 Novo recurso   | -        | -     |
| Configurações da coluna da tabela          | Ativar clique para abrir         | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Pop-up de edição                   | ✨ Aprimorado      | -        | -     |
| Configurações da coluna da tabela          | Copiar UID                     | 🆕 Novo recurso   | -        | -     |
| Configurações da coluna da tabela          | Excluir                       | ✅ Suportado     | -        | -     |
| Configurações da coluna da tabela          | Ocultar coluna                  | ⚠️ Obsoleto  | -        | -     |
| Configurações da coluna da tabela          | Conectar blocos de dados          | ⚠️ Obsoleto  | -        | -     |
| Configurações da coluna da tabela          | Salvar como modelo de referência   | ⚠️ Obsoleto  | -        | -     |
| Configurações da coluna da tabela          | Salvar como modelo herdado   | ⚠️ Obsoleto  | -        | -     |

#### Bloco de Formulário de Adicionar e Editar


| Categoria                                     | Recurso                               | Status           | Prioridade | Notas |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Configurações do formulário                                | Título e descrição                   | ✅ Suportado     | -        | -     |
| Configurações do formulário                                | Altura do bloco                          | ❌ Não suportado | P1       | -     |
| Configurações do formulário                                | Modelos de dados do formulário                   | ❌ Não suportado | -        | -     |
| Configurações do formulário                                | Valores iniciais do formulário                   | 🔄 Em andamento   | P1       | -     |
| Configurações do formulário                                | Layout                                | ✅ Suportado     | -        | -     |
| Configurações do formulário                                | Regras de vinculação de bloco                   | ✨ Aprimorado      | -        | -     |
| Configurações do formulário                                | Regras de vinculação de campo                   | 🔄 Em andamento   | P2       | -     |
| Configurações do formulário                                | Escopo de dados                            | ✅ Suportado     | -        | -     |
| Configurações do formulário                                | Ativar rascunhos                         | 🆕 Novo recurso   | -        | -     |
| Configurações do formulário                                | Salvar como modelo                      | 🆕 Novo recurso   | -        | -     |
| Configurações do formulário                                | Converter referência para duplicata        | 🆕 Novo recurso   | -        | -     |
| Configurações do formulário                                | Converter campos de referência para duplicata | 🆕 Novo recurso   | -        | -     |
| Configurações do formulário                                | Copiar UID                              | 🆕 Novo recurso   | -        | -     |
| Configurações do formulário                                | Excluir                                | ✅ Suportado     | -        | -     |
| Configurações do formulário                                | Salvar como modelo de referência            | ⚠️ Obsoleto  | -        | -     |
| Configurações do formulário                                | Salvar como modelo herdado            | ⚠️ Obsoleto  | -        | -     |
| Itens de campo do formulário                             | Exibir campos da coleção             | ✅ Suportado     | -        | -     |
| Itens de campo do formulário                             | Exibir campos de associação            | ❌ Não suportado | P2       | -     |
| Itens de campo do formulário > Outros                    | Modelo de campo                        | 🆕 Novo recurso   | -        | -     |
| Itens de campo do formulário > Outros                    | Item JS                               | 🆕 Novo recurso   | -        | -     |
| Itens de campo do formulário > Outros                    | Divisor                               | ✨ Aprimorado      | -        | -     |
| Itens de campo do formulário > Outros                    | Markdown                              | ✨ Aprimorado      | -        | -     |
| Configurações do item de campo do formulário                     | Mostrar rótulo                            | ✅ Suportado     | -        | -     |
| Configurações do item de campo do formulário                     | Rótulo                                 | ✅ Suportado     | -        | -     |
| Configurações do item de campo do formulário                     | Dica de ferramenta                               | ✅ Suportado     | -        | -     |
| Configurações do item de campo do formulário                     | Descrição                           | ✅ Suportado     | -        | -     |
| Configurações do item de campo do formulário                     | Valor padrão                         | 🚀 Otimizando    | P0       | -     |
| Configurações do item de campo do formulário                     | Validação                            | ✨ Aprimorado      | -        | -     |
| Configurações do item de campo do formulário                     | Obrigatório                              | ✅ Suportado     | -        | -     |
| Configurações do item de campo do formulário                     | Modo de exibição                          | ✨ Aprimorado      | -        | -     |
| Configurações do item de campo do formulário > SubFormulário           | Múltiplo                              | ❌ Não suportado | P1       | -     |
| Configurações do item de campo do formulário > SubFormulário           | Regras de vinculação de campo                   | 🔄 Em andamento   | P2       | -     |
| Configurações do item de campo do formulário > SubTabela          | Regras de vinculação de campo                   | ❌ Não suportado | P2       | -     |
| Configurações do item de campo do formulário > SubFormulário (Popover) | -                                     | ❌ Não suportado | -        | -     |
| Configurações do item de campo do formulário                     | Copiar UID                              | 🆕 Novo recurso   | -        | -     |
| Configurações do item de campo do formulário                     | Excluir                                | ✅ Suportado     | -        | -     |
| Ações do formulário                                 | Enviar                                | 🚀 Otimizando    | P1       | -     |
| Ações do formulário                                 | Acionar fluxo de trabalho                      | ✅ Suportado     | -        | -     |
| Ações do formulário                                 | Pop-up                                 | ❌ Não suportado | P1       | -     |
| Ações do formulário                                 | Solicitação personalizada                        | ❌ Não suportado | P2       | -     |
| Ações do formulário                                 | Funcionários de IA                          | 🆕 Novo recurso   | -        | -     |
| Ações do formulário                                 | Ação JS                             | 🆕 Novo recurso   | -        | -     |

#### Bloco de Detalhes


| Categoria                                                | Recurso                    | Status           | Prioridade | Notas |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Configurações de detalhes                                        | Título e descrição        | ✅ Suportado     | -        | -     |
| Configurações de detalhes                                        | Altura do bloco               | ❌ Não suportado | P1       | -     |
| Configurações de detalhes                                        | Regras de vinculação de bloco        | ✨ Aprimorado      | -        | -     |
| Configurações de detalhes                                        | Modo de carregamento de dados          | ❌ Não suportado | P1       | -     |
| Configurações de detalhes                                        | Layout                     | ✅ Suportado     | -        | -     |
| Configurações de detalhes                                        | Escopo de dados                 | ✅ Suportado     | -        | -     |
| Configurações de detalhes                                        | Classificação padrão            | ✅ Suportado     | -        | -     |
| Configurações de detalhes                                        | Regras de vinculação de campo        | 🚀 Otimizando    | -        | -     |
| Configurações de detalhes                                        | Salvar como modelo           | 🆕 Novo recurso   | -        | -     |
| Configurações de detalhes                                        | Copiar UID                   | 🆕 Novo recurso   | -        | -     |
| Configurações de detalhes                                        | Excluir                     | ✅ Suportado     | -        | -     |
| Configurações de detalhes                                        | Salvar como modelo de referência | ⚠️ Obsoleto  | -        | -     |
| Configurações de detalhes                                        | Salvar como modelo herdado | ⚠️ Obsoleto  | -        | -     |
| Ações de detalhes                                         | Visualizar                       | 🆕 Novo recurso   | -        | -     |
| Ações de detalhes                                         | Editar                       | ✅ Suportado     | -        | -     |
| Ações de detalhes                                         | Abrir pop-up                 | ✅ Suportado     | -        | -     |
| Ações de detalhes                                         | Atualizar registro              | ✅ Suportado     | -        | -     |
| Ações de detalhes                                         | Excluir                     | ✅ Suportado     | -        | -     |
| Ações de detalhes                                         | Link                       | 🆕 Novo recurso   | -        | -     |
| Ações de detalhes                                         | Impressão de modelo             | ✅ Suportado     | -        | -     |
| Ações de detalhes                                         | Imprimir                      | ❌ Não suportado | -        | -     |
| Ações de detalhes                                         | Solicitação personalizada             | ❌ Não suportado | P2       | -     |
| Ações de detalhes                                         | Acionar fluxo de trabalho           | 🆕 Novo recurso   | -        | -     |
| Ações de detalhes                                         | Funcionários de IA               | 🆕 Novo recurso   | -        | -     |
| Ações de detalhes                                         | Ação JS                  | 🆕 Novo recurso   | -        | -     |
| Campos de detalhes                                          | Exibir campos da coleção  | ✅ Suportado     | -        | -     |
| Campos de detalhes                                          | Exibir campos de associação | ✅ Suportado     | -        | -     |
| Campos de detalhes > Outros                                 | Modelo de campo             | 🆕 Novo recurso   | -        | -     |
| Campos de detalhes > Outros                                 | Campo JS                   | 🆕 Novo recurso   | -        | -     |
| Campos de detalhes > Outros                                 | Item JS                   | 🆕 Novo recurso   | -        | -     |
| Campos de detalhes > Outros                                 | Divisor                    | ✅ Suportado     | -        | -     |
| Campos de detalhes > Outros                                 | Markdown                   | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes                                   | Mostrar nome do campo            | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes                                   | Nome do campo                 | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes                                   | Dica de ferramenta                    | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes                                   | Descrição                | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes                                   | Estilo                      | ❌ Não suportado | P2       | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Campo de título                | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Estilo                      | ❌ Não suportado | P2       | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Modo de exibição               | 🆕 Novo recurso   | -        | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Reticências em texto longo  | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Ativar clique para abrir       | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes > Exibição do título (campo clicável) | Configurações do pop-up             | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes > SubTabela                        | Tamanho da página                  | ✅ Suportado     | -        | -     |
| Configurações do item de detalhes > SubTabela                        | Definir regras de classificação          | ❌ Não suportado | -        | -     |
| Configurações do item de detalhes > SubTabela                        | Ativar números de linha         | ❌ Não suportado | -        | -     |
| Configurações do item de detalhes > SubTabela                        | Regras de vinculação              | ❌ Não suportado | -        | -     |
| Configurações do item de detalhes > SubDetalhes                      | Regras de vinculação              | ❌ Não suportado | -        | -     |
| Configurações do item de detalhes > SubDetalhes                      | Layout                     | ❌ Não suportado | -        | -     |
| Configurações do item de detalhes > Texto grande                      | Reticências em texto longo  | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes > Texto grande                      | Modo de renderização                | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes > Pré-visualização                         | -                          | ✨ Aprimorado      | -        | -     |
| Configurações do item de detalhes                                   | Copiar UID                   | 🆕 Novo recurso   | -        | -     |
| Configurações do item de detalhes                                   | Excluir                     | ✅ Suportado     | -        | -     |

#### Bloco de Lista


| Categoria                      | Recurso                               | Status           | Prioridade | Notas |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Configurações da lista                 | Título e descrição                   | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Altura do bloco                          | ❌ Não suportado | P1       | -     |
| Configurações da lista                 | Regras de vinculação de bloco                   | ✨ Aprimorado      | -        | -     |
| Configurações da lista                 | Tamanho da página                             | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Escopo de dados                            | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Classificação padrão                       | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Modo de carregamento de dados                     | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Layout                                | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Salvar como modelo                      | 🆕 Novo recurso   | -        | -     |
| Configurações da lista                 | Converter referência para duplicata        | 🆕 Novo recurso   | -        | -     |
| Configurações da lista                 | Converter campos de referência para duplicata | 🆕 Novo recurso   | -        | -     |
| Configurações da lista                 | Copiar UID                              | 🆕 Novo recurso   | -        | -     |
| Configurações da lista                 | Excluir                                | ✅ Suportado     | -        | -     |
| Configurações da lista                 | Salvar como modelo de referência            | ⚠️ Obsoleto  | -        | -     |
| Configurações da lista                 | Salvar como modelo herdado            | ⚠️ Obsoleto  | -        | -     |
| Ações da lista > Ações globais | Adicionar novo                               | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Excluir                                | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Filtrar                                | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Link                                  | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Pop-up                                 | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Atualizar                               | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Atualização em massa                           | 🚀 Otimizando    | -        | -     |
| Ações da lista > Ações globais | Exportar                                | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Importar                                | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Exportar anexos                    | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Enviar e-mail                            | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Impressão de modelo                        | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Acionar fluxo de trabalho                      | ✅ Suportado     | -        | -     |
| Ações da lista > Ações globais | Solicitação personalizada                        | ❌ Não suportado | P2       | -     |
| Ações da lista > Ações globais | Funcionários de IA                          | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações globais | Ação JS                             | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações de linha    | Visualizar                                  | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Excluir                                | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Editar                                  | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Link                                  | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Pop-up                                 | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Atualizar registro                         | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Impressão de modelo                        | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Acionar fluxo de trabalho                      | ✅ Suportado     | -        | -     |
| Ações da lista > Ações de linha    | Solicitação personalizada                        | ❌ Não suportado | P2       | -     |
| Ações da lista > Ações de linha    | Funcionários de IA                          | 🆕 Novo recurso   | -        | -     |
| Ações da lista > Ações de linha    | Ação JS                             | 🆕 Novo recurso   | -        | -     |
| Campos da lista                   | Exibir campos da coleção             | ✅ Suportado     | -        | -     |
| Campos da lista                   | Exibir campos de associação            | ✅ Suportado     | -        | -     |
| Campos da lista > Outros          | Campo JS                              | 🆕 Novo recurso   | -        | -     |
| Campos da lista > Outros          | Item JS                               | 🆕 Novo recurso   | -        | -     |
| Campos da lista > Outros          | Divisor                               | ✅ Suportado     | -        | -     |
| Campos da lista > Outros          | Markdown                              | 🆕 Novo recurso   | -        | -     |

#### Outros Blocos


| Recurso               | Status           | Prioridade | Notas |
| --------------------- | ---------------- | -------- | ----- |
| Bloco de cartão de grade       | ✅ Suportado     | -        | -     |
| Bloco de comentários        | ✅ Suportado     | -        | -     |
| Bloco de mapa             | ✅ Suportado     | -        | -     |
| Bloco de gráficos          | ✨ Aprimorado      | -        | -     |
| Bloco de calendário        | ❌ Não suportado | -        | -     |
| Bloco Gantt           | ❌ Não suportado | -        | -     |
| Bloco Kanban          | ❌ Não suportado | -        | -     |
| Bloco de formulário de várias etapas | ❌ Não suportado | -        | -     |
| Formulário de filtro           | ✨ Aprimorado      | -        | -     |
| Colapso de filtro       | ❌ Não suportado | -        | -     |
| Filtro de árvore           | ❌ Não suportado | -        | -     |
| Modelo de bloco        | 🆕 Novo recurso   | -        | -     |
| Bloco JS              | 🆕 Novo recurso   | -        | -     |
| Iframe                | ✅ Suportado     | -        | -     |
| Painel de ações          | ✅ Suportado     | -        | -     |
| Markdown              | ✨ Aprimorado      | -        | -     |
| Histórico de registros        | 🆕 Novo recurso   | -        | -     |
| E-mail                  | ✅ Suportado     | -        | -     |
| Fluxo de trabalho              | 🔄 Em andamento   | P0       | -     |

#### Painel de Ações


| Categoria              | Recurso                   | Status           | Prioridade | Notas |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Configurações do painel de ações | Título e descrição       | ✅ Suportado     | -        | -     |
| Configurações do painel de ações | Altura do bloco              | ❌ Não suportado | P1       | -     |
| Configurações do painel de ações | Regras de vinculação de bloco       | ✨ Aprimorado      | -        | -     |
| Configurações do painel de ações | Layout                    | ✅ Suportado     | -        | -     |
| Configurações do painel de ações | Reticências em texto longo | ✅ Suportado     | -        | -     |
| Configurações do painel de ações | Salvar como modelo          | 🆕 Novo recurso   | -        | -     |
| Configurações do painel de ações | Copiar UID                  | 🆕 Novo recurso   | -        | -     |
| Configurações do painel de ações | Excluir                    | ✅ Suportado     | -        | -     |
| Ações               | Pop-up                     | ✅ Suportado     | -        | -     |
| Ações               | Link                      | ✅ Suportado     | -        | -     |
| Ações               | Escanear código QR              | ✅ Suportado     | -        | -     |
| Ações               | Atualizar registro             | ❌ Não suportado | P2       | -     |
| Ações               | Solicitação personalizada            | ❌ Não suportado | P2       | -     |
| Ações               | Acionar fluxo de trabalho          | ❌ Não suportado | P2       | -     |
| Ações               | Ação JS                 | 🆕 Novo recurso   | -        | -     |

#### Campos

##### Modo Somente Leitura


| Categoria           | Recurso             | Status           | Prioridade | Notas |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Campo clicável    | Exibição de texto        | ✅ Suportado     | -        | -     |
| Campo clicável    | Exibição de número      | ✅ Suportado     | -        | -     |
| Campo clicável    | Exibição de data        | ✅ Suportado     | -        | -     |
| Campo clicável    | Exibição de hora        | ✅ Suportado     | -        | -     |
| Campo clicável    | Exibição de enumeração        | ✅ Suportado     | -        | -     |
| Campo clicável    | Exibição de relação    | ✅ Suportado     | -        | -     |
| Exibição de texto grande | Exibição de rich text   | ✅ Suportado     | -        | -     |
| Exibição de texto grande | Exibição de Markdown    | ✅ Suportado     | -        | -     |
| Exibição de texto grande | Exibição de bloco de código  | ❌ Não suportado | P1       | -     |
| Exibição de texto grande | Campo JSON          | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo URL           | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo de pré-visualização       | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo de caixa de seleção      | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo de ícone          | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo de cor         | ✅ Suportado     | -        | -     |
| Exibição de campo      | Cálculo de fórmula | ✅ Suportado     | -        | -     |
| Exibição de campo      | Código automático           | ✅ Suportado     | -        | -     |
| Campo de relação     | SubDetalhes          | 🔄 Em andamento   | P0       | -     |
| Campo de relação     | SubTabela            | 🔄 Em andamento   | P0       | -     |
| Exibição de campo      | Exibição de mapa         | ✅ Suportado     | -        | -     |
| Exibição de campo      | Campo JS            | ✅ Suportado     | -        | -     |
| Exibição de campo      | TableOID            | ✅ Suportado     | -        | -     |
| Exibição de campo      | Região da China        | ❌ Não suportado | -        | -     |
| Exibição de campo      | Código QR             | ❌ Não suportado | -        | -     |

##### Modo de Edição


| Recurso                  | Status           | Prioridade | Notas |
| ------------------------ | ---------------- | -------- | ----- |
| Entrada de linha única        | ✅ Suportado     | -        | -     |
| Entrada de número             | ✅ Suportado     | -        | -     |
| Entrada de porcentagem         | ✅ Suportado     | -        | -     |
| Entrada de senha           | ✅ Suportado     | -        | -     |
| Entrada NanoID             | ✅ Suportado     | -        | -     |
| Entrada de texto de várias linhas    | ✅ Suportado     | -        | -     |
| Editor de rich text         | ✅ Suportado     | -        | -     |
| Editor de código              | ❌ Não suportado | -        | -     |
| Editor Markdown          | ✅ Suportado     | -        | -     |
| Entrada JSON               | ✅ Suportado     | -        | -     |
| Seletor                 | ✅ Suportado     | -        | -     |
| Botão de opção                    | ✅ Suportado     | -        | -     |
| Caixa de seleção                 | ✅ Suportado     | -        | -     |
| Grupo de caixas de seleção           | ✅ Suportado     | -        | -     |
| Seletor de data              | ✅ Suportado     | -        | -     |
| Seletor de cor             | ✅ Suportado     | -        | -     |
| Seletor de ícone              | ✅ Suportado     | -        | -     |
| Seletor de hora              | ✅ Suportado     | -        | -     |
| Seletor de registro (dropdown) | ✅ Suportado     | -        | -     |
| Seletor de registro (pop-up)    | ✅ Suportado     | -        | -     |
| Seletor de registro (cascata)  | ✅ Suportado     | -        | -     |
| Gerenciador de arquivos             | ✅ Suportado     | -        | -     |
| Seletor de coleção      | 🔄 Em andamento   | P2       | -     |
| Região da China             | ❌ Não suportado | -        | -     |
| Código QR                  | ❌ Não suportado | -        | -     |
| Escanear para inserir            | ❌ Não suportado | -        | -     |
| SubFormulário                  | 🚀 Otimizando    | P0       | -     |
| SubTabela (simples)        | 🚀 Otimizando    | P0       | -     |
| SubTabela (avançada)      | 🔄 Em andamento   | P1       | -     |
| Seletor de mapa               | ✅ Suportado     | -        | -     |
| Campo JS                 | ✅ Suportado     | -        | -     |

#### Ações


| Recurso            | Status           | Prioridade | Notas |
| ------------------ | ---------------- | -------- | ----- |
| Pop-up              | ✅ Suportado     | -        | -     |
| Visualizar               | ✅ Suportado     | -        | -     |
| Filtrar             | ✅ Suportado     | -        | -     |
| Adicionar                | ✅ Suportado     | -        | -     |
| Adicionar sub-registro     | ✅ Suportado     | -        | -     |
| Link               | ✅ Suportado     | -        | -     |
| Editar               | ✅ Suportado     | -        | -     |
| Excluir             | ✅ Suportado     | -        | -     |
| Atualizar            | ✅ Suportado     | -        | -     |
| Atualizar registro      | 🚀 Otimizando    | P1       | -     |
| Enviar             | 🚀 Otimizando    | P1       | -     |
| Carregar             | ✅ Suportado     | -        | -     |
| Acionar fluxo de trabalho   | ✅ Suportado     | -        | -     |
| Edição em massa          | ❌ Não suportado | P1       | -     |
| Atualização em massa        | ✅ Suportado     | -        | -     |
| Solicitação personalizada     | ❌ Não suportado | -        | -     |
| Copiar               | ❌ Não suportado | -        | -     |
| Imprimir              | ❌ Não suportado | -        | -     |
| Impressão de modelo     | ✅ Suportado     | -        | -     |
| Importar             | ✅ Suportado     | -        | -     |
| Exportar             | ✅ Suportado     | -        | -     |
| Exportar anexos | ✅ Suportado     | -        | -     |
| Escanear código QR       | ✅ Suportado     | -        | -     |
| Funcionários de IA       | 🆕 Novo recurso   | -        | -     |
| Ação JS          | 🆕 Novo recurso   | -        | -     |

#### Recursos Avançados


| Categoria             | Recurso                    | Status                        | Prioridade | Notas |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| Modelos de UI         | Bloco                      | 🆕 Novo recurso                | -        | -     |
| Modelos de UI         | Pop-up                      | 🆕 Novo recurso                | -        | -     |
| Modelos de UI         | Campo                      | 🆕 Novo recurso                | -        | -     |
| Modelos de UI > Campo | Campo de formulário                 | 🆕 Novo recurso                | -        | -     |
| Modelos de UI > Campo | Campo de detalhes              | 🆕 Novo recurso                | -        | -     |
| Modelos de UI > Campo | Campo de aprovação             | 🆕 Novo recurso                | -        | -     |
| UI e permissões   | UI e permissões         | ✨ Aprimorado                   | -        | -     |
| Fluxo de eventos           | Eventos do fluxo de eventos          | 🆕 Novo recurso, 🚀 Otimizando | P1       | -     |
| Fluxo de eventos           | Ações do fluxo de eventos         | 🆕 Novo recurso, 🚀 Otimizando | P1       | -     |
| Regras de vinculação        | Regras de vinculação              | 🚀 Otimizando                 | P1       | -     |
| Variáveis            | Usuário atual               | 🚀 Otimizando                 | P1       | -     |
| Variáveis            | Função atual (identificador)  | ✅ Suportado                  | -        | -     |
| Variáveis            | Espaço atual (identificador) | ❌ Não suportado              | P1       | -     |
| Variáveis            | Chave de API                    | ✅ Suportado                  | -        | -     |
| Variáveis            | Parâmetros de consulta de URL       | ✅ Suportado                  | -        | -     |
| Variáveis            | Dispositivo atual             | 🆕 Novo recurso                | -        | -     |
| Variáveis            | Registro atual             | ✅ Suportado                  | -        | -     |
| Variáveis            | Formulário atual               | ✅ Suportado                  | -        | -     |
| Variáveis            | Objeto atual             | ❌ Não suportado              | P1       | -     |
| Variáveis            | Pop-up atual              | 🚀 Otimizando                 | P1       | -     |
| Variáveis            | Registros selecionados atuais   | ❌ Não suportado              | P2       | -     |
| Variáveis            | Variáveis de data             | 🔄 Em andamento                | P1       | -     |
| Variáveis            | Variáveis e chaves         | 🔄 Em andamento                | P1       | -     |
| JavaScript           | Executar JavaScript             | 🆕 Novo recurso                | -        | -     |

### Status do Plugin


| Nome do Plugin                                      | Status do Plugin                    | Prioridade | Notas                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ Não suportado                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ Não suportado                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ Não suportado                 | -        | Classificação por arrastar e soltar de registros não suportada  |
| @nocobase/plugin-file-previewer-office           | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ Não suportado                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-data-visualization instead |
| @nocobase/plugin-field-component-mask            | ⚠️ Obsoleto                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-ui-layout instead          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Obsoleto                  | -        | Use @nocobase/plugin-app-supervisor instead     |
| @nocobase/plugin-app-supervisor                  | 🆕 Novo recurso                   | P0       | Em breve                                     |
| @nocobase/plugin-ai                              | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 Novo recurso, ❌ Não suportado | P2       | Planejado                                         |
| @nocobase/plugin-ui-templates                    | 🆕 Novo recurso                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Suportado                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Suportado                     | -        | -                                               |
