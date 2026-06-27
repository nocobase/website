---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: Suporte ao modo de gatilho \"Antes dos dados serem salvos\", adição de suporte à paginação na subtabela e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Data de lançamento: 2025-11-05*

### 🚀 Melhorias

- **[banco de dados]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher
- **[Workflow]** Suportar bloco de dados no workflow para usar o menu de configurações de detalhes consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher

### 🐛 Correções de Bugs

- **[servidor]** Isolar o canal Pub-Sub por nome do aplicativo ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
- **[cliente]** Corrigir "Estouro máximo de tamanho de pilha de chamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
- **[banco de dados]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Workflow]** Corrigido um problema onde o despachante do workflow no modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar ao consumo desnecessário de eventos da fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
- **[Mobile (obsoleto)]** Corrigir o problema onde o popup de valor padrão do campo de data no celular não conseguia selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe
- **[Workflow: Aprovação]** Corrigir erro lançado ao duplicar workflow de aprovação por @mytharcher
- **[Gerenciador de e-mail]** collection mailMessages adicionar índices por @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Data de lançamento: 2025-11-04*

### 🚀 Melhorias

- **[Workflow: Aprovação]** Adicionar notificação para designado delegado e adicionado por @mytharcher

### 🐛 Correções de Bugs

- **[Workflow]** Corrigir um problema onde, no modo de divisão de serviço, executar manualmente um workflow contendo um nó de interrupção permaneceria travado em um status pendente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
- **[Gerenciador de e-mail]** adicionar migração para índices por @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Data de lançamento: 2025-11-04*

### 🐛 Correções de Bugs

- **[Workflow: Aprovação]** Criar nós de aprovação em branches paralelas não é mais suportado para evitar problemas causados pelo status do processo por @mytharcher
- **[Gerenciador de e-mail]** adicionar logs de sincronização por @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Data de lançamento: 2025-11-03*

### 🎉 Novos Recursos

- **[Workflow: Aprovação]** Suportar modo de gatilho "Antes dos dados serem salvos" por @mytharcher

### 🚀 Melhorias

- **[servidor]** Adicionar log do gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile
- **[Workflow: nó de notificação]** Adicionar opção `ignoreFail` para nó de notificação, que permite continuar o workflow quando o envio da notificação falha ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir configuração de regra de vinculação de leitura de código QR no painel de ações ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh
  - Corrigir falha na regra de vinculação do bloco iframe dentro do modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh
- **[banco de dados]** Pular sincronização de valor padrão para colunas JSON do MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile
- **[Workflow]**

  - Corrigir o problema onde, no modo de divisão de serviço, o manuseio inadequado da fila pendente na memória fazia com que alguns workflows não fossem executados ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher
  - Corrigir valor do status de execução ao criar com adiado ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher
  - Corrigir o problema onde, após excluir um nó que inicia a ramificação, a chave do primeiro nó retido dentro do branch era alterada incorretamente para um novo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher
- **[Controle de acesso]** Corrigir ordem dos middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile
- **[Gerenciador de arquivos]** Corrigir o problema do arquivo `.msg` não poder ser enviado corretamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher
- **[Workflow: Nó manual]** Corrigir o problema onde as tarefas manuais desaparecem após o workflow ser desabilitado ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher
- **[Campo de coleção: divisões administrativas da China]** A importação de dados falha quando a cidade e a área têm o mesmo nome ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile
- **[Workflow: Aprovação]**

  - Corrigir o problema de tradução do texto de status nas notificações de conclusão de aprovação, usando o idioma padrão do sistema para tradução quando o usuário não definiu uma preferência de idioma por @mytharcher
  - Corrigir localidades por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Data de lançamento: 2025-11-05*

### 🚀 Melhorias

- **[banco de dados]** Adicionar a opção `multipleStatements` à instância de conexão MariaDB para suportar a invocação de múltiplas instruções em uma única consulta ([#7781](https://github.com/nocobase/nocobase/pull/7781)) por @mytharcher

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** Corrigido um problema onde os botões de ação no bloco de tabela não eram atualizados corretamente após a troca de páginas, garantindo que sua funcionalidade corresponda aos dados da página atual. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) por @gchust
- **[cliente]**

  - Corrigir "Estouro máximo de tamanho de pilha de chamadas" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) por @zhangzhonghe
  - corrigir reticências do campo de título do campo de associação não aplicadas ([#7778](https://github.com/nocobase/nocobase/pull/7778)) por @katherinehhh
  - a regra de vinculação da ação de atualizar registro não está funcionando ([#7774](https://github.com/nocobase/nocobase/pull/7774)) por @gchust
- **[banco de dados]** Detecção incorreta de campo de índice quando os nomes dos campos usam o estilo snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) por @2013xile
- **[Mobile (obsoleto)]** Corrigir o problema onde o popup de valor padrão do campo de data no celular não conseguia selecionar uma data ([#7783](https://github.com/nocobase/nocobase/pull/7783)) por @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Data de lançamento: 2025-11-05*

### 🎉 Novos Recursos

- **[cliente]** adicionar suporte a paginação para subtabela ([#7754](https://github.com/nocobase/nocobase/pull/7754)) por @katherinehhh

### 🚀 Melhorias

- **[indefinido]** atualizar a documentação em inglês do plugin de gráfico ([#7748](https://github.com/nocobase/nocobase/pull/7748)) por @heziqiang
- **[telemetria]** Adicionar métricas de telemetria para número de sub-aplicativos online, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) por @2013xile
- **[Workflow]** Suportar bloco de dados no workflow para usar o menu de configurações de detalhes consolidados ([#7771](https://github.com/nocobase/nocobase/pull/7771)) por @mytharcher
- **[Gerenciador de multi-aplicativos (obsoleto)]]** Habilitada a inicialização assíncrona para sub-aplicativos usando uma fila ([#7749](https://github.com/nocobase/nocobase/pull/7749)) por @2013xile
- **[Visualização de dados]** adicionar opções de formato de hora para dados de gráfico ([#7763](https://github.com/nocobase/nocobase/pull/7763)) por @heziqiang
- **[Workflow: Aprovação]** Adicionar notificação para designado delegado e adicionado por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigido um problema onde os rótulos dos tipos enum em componentes relacionados a variáveis não eram exibidos no idioma correto. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) por @gchust
  - Corrigir indicador de campo obrigatório ausente após definir validação de frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) por @katherinehhh
  - corrigir problema ao limpar data sem fuso horário no formulário de edição ([#7759](https://github.com/nocobase/nocobase/pull/7759)) por @katherinehhh
  - Corrigir validação de campo obrigatório para regras de vinculação ([#7756](https://github.com/nocobase/nocobase/pull/7756)) por @zhangzhonghe
  - resolver problema de Data Inválida ao excluir Data Especificada no filtro… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) por @katherinehhh
  - Corrigir falha de validação obrigatória para o campo Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) por @katherinehhh
  - Adicionar configuração de escopo de dados para campos de relacionamento em formulários de filtro ([#7761](https://github.com/nocobase/nocobase/pull/7761)) por @zhangzhonghe
  - corrigir problema de formato de hora em campos de subtabela ([#7750](https://github.com/nocobase/nocobase/pull/7750)) por @katherinehhh
- **[mecanismo de fluxo]**

  - quando o valor do filtro de campo é definido como falso, a solicitação com escopo de dados está incorreta ([#7766](https://github.com/nocobase/nocobase/pull/7766)) por @gchust
  - não é possível resolver o valor do campo de associação da variável do objeto atual do subformulário ([#7751](https://github.com/nocobase/nocobase/pull/7751)) por @gchust
  - corrigir: resolver problema de parâmetro de solicitação de página após excluir dados na última página ([#7755](https://github.com/nocobase/nocobase/pull/7755)) por @katherinehhh
- **[servidor]** Isolar o canal Pub-Sub por nome do aplicativo ([#7762](https://github.com/nocobase/nocobase/pull/7762)) por @mytharcher
- **[Bloco: GridCard]** corrigir problema de duplicação de dados entre bloco de lista e cartão de grade ([#7773](https://github.com/nocobase/nocobase/pull/7773)) por @katherinehhh
- **[Gerenciador de multi-aplicativos (obsoleto)]]** Coleção incorreta para métrica de status do sub-aplicativo ([#7772](https://github.com/nocobase/nocobase/pull/7772)) por @2013xile
- **[Workflow]**

  - Corrigido um problema onde o despachante do workflow no modo cluster falhava ao identificar corretamente estados ociosos, o que poderia levar ao consumo desnecessário de eventos da fila antes do plugin estar pronto ([#7768](https://github.com/nocobase/nocobase/pull/7768)) por @mytharcher
  - Corrigir um problema onde, no modo de divisão de serviço, executar manualmente um workflow contendo um nó de interrupção permaneceria travado em um status pendente ([#7767](https://github.com/nocobase/nocobase/pull/7767)) por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigir erro lançado ao duplicar workflow de aprovação por @mytharcher
  - Criar nós de aprovação em branches paralelas não é mais suportado para evitar problemas causados pelo status do processo por @mytharcher
- **[Gerenciador de e-mail]**

  - adicionar logs de sincronização por @jiannx
  - adicionar migração para índices por @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Data de lançamento: 2025-11-03*

### 🎉 Novos Recursos

- **[Workflow: Aprovação]** Suportar modo de gatilho "Antes dos dados serem salvos" por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** não é possível carregar os campos da variável do formulário atual ([#7745](https://github.com/nocobase/nocobase/pull/7745)) por @gchust
- **[Workflow: Aprovação]** Corrigir localidades por @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Data de lançamento: 2025-11-02*

### 🚀 Melhorias

- **[Workflow: nó de notificação]** Adicionar opção `ignoreFail` para nó de notificação, que permite continuar o workflow quando o envio da notificação falha ([#7736](https://github.com/nocobase/nocobase/pull/7736)) por @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Data de lançamento: 2025-11-02*

### 🐛 Correções de Bugs

- **[cliente]**

  - Resolvido um problema onde a variável do campo de associação no formulário atual não podia ser identificada corretamente, garantindo o processamento preciso de dados em formulários. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) por @gchust
  - Resolvido um problema onde atribuir um array como valor ou valor padrão a um campo "toOne" resultava em erro. Isso garante o manuseio adequado dos resultados da resolução de variáveis, melhorando a estabilidade e precisão do sistema. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) por @gchust
- **[Controle de acesso]** Corrigir ordem dos middlewares de `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) por @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Data de lançamento: 2025-11-01*

### 🚀 Melhorias

- **[mecanismo de fluxo]** Melhorada a mensagem de erro exibida quando a cópia do UID falha, fornecendo instruções mais claras para resolver o problema. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) por @gchust

### 🐛 Correções de Bugs

- **[mecanismo de fluxo]** as etapas do fluxo de evento não devem ser exibidas nos menus de configuração ([#7723](https://github.com/nocobase/nocobase/pull/7723)) por @gchust
- **[cliente]** Corrigido um problema onde campos não filtráveis eram listados incorretamente nas opções de filtro, garantindo que apenas campos aplicáveis apareçam para seleção. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) por @gchust
- **[Workflow]** Corrigir valor do status de execução ao criar com adiado ([#7721](https://github.com/nocobase/nocobase/pull/7721)) por @mytharcher
- **[Funcionários de IA]** Comportamento de pesquisa web otimizado e dicas de usuário para Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) por @cgyrock
- **[Ação: Exportar registros]** resolver problema com a exibição da lista de campos exportáveis na ação de exportação ([#7714](https://github.com/nocobase/nocobase/pull/7714)) por @katherinehhh
- **[Ação: Importar registros]** resolver problema com a exibição da lista de campos em Campos importáveis ([#7710](https://github.com/nocobase/nocobase/pull/7710)) por @katherinehhh
- **[Ação: Importar registros Pro]** resolver problema com a exibição da lista de campos em Campos importáveis por @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Data de lançamento: 2025-10-31*

### 🎉 Novos Recursos

- **[cliente]** Fluxo de Evento: Introduzidas novas ações predefinidas para aprimorar as opções de personalização para manipulação de eventos, permitindo que os usuários otimizem workflows e melhorem a eficiência ([#7672](https://github.com/nocobase/nocobase/pull/7672)) por @zhangzhonghe

### 🚀 Melhorias

- **[Funcionários de IA]** Melhorar a lógica de interação do funcionário de IA e otimizar o fluxo de configuração de tarefas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]** resolver problema de UI ao excluir campo de associação na coleção ([#7706](https://github.com/nocobase/nocobase/pull/7706)) por @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Data de lançamento: 2025-10-30*

### 🚀 Melhorias

- **[indefinido]** atualizar documento de visão geral do gráfico ([#7702](https://github.com/nocobase/nocobase/pull/7702)) por @heziqiang
- **[cliente]** suportar jsx no editor de código JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) por @gchust
- **[Funcionários de IA]** Funcionário de IA pode consultar dados autonomamente com base nos metadados do bloco de tabela ([#7703](https://github.com/nocobase/nocobase/pull/7703)) por @cgyrock

### 🐛 Correções de Bugs

- **[cliente]**

  - Corrigir falha na regra de vinculação do bloco iframe dentro do modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) por @katherinehhh
  - Corrigir configuração de regra de vinculação de leitura de código QR no painel de ações ([#7693](https://github.com/nocobase/nocobase/pull/7693)) por @katherinehhh
- **[banco de dados]** Pular sincronização de valor padrão para colunas JSON do MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) por @2013xile
- **[Workflow]** Corrigir o problema onde, no modo de divisão de serviço, o manuseio inadequado da fila pendente na memória fazia com que alguns workflows não fossem executados ([#7692](https://github.com/nocobase/nocobase/pull/7692)) por @mytharcher
