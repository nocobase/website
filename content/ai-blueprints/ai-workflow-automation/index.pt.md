## Introdução

Use o seu AI agent favorito e o NocoBase para criar rapidamente um sistema de automação de fluxos de trabalho com IA personalizável, confiável e continuamente evolutivo, para gerenciar eventos de acionamento de negócio, verificações de condições, processamento por IA, atualizações de dados, resultados de execução e histórico de execuções de fluxos de trabalho.

Você pode copiar o prompt abaixo e deixar o seu AI agent gerar a estrutura básica do sistema de automação de fluxos de trabalho com IA no NocoBase e, em seguida, ajustar visualmente acionadores, condições, nós de IA e ações subsequentes.

Este sistema é adequado para cenários como sugestões de estoque, classificação de tickets, análise de cláusulas contratuais, geração de resumos na base de conhecimento, publicação de conteúdo, sincronização de ativos, sugestões de integração de colaboradores e qualquer caso em que a IA deva participar automaticamente de processos de negócio.

**Lista de fluxos de trabalho com IA:**

![](https://static-docs.nocobase.com/ai-workflow-automation-1-acl4wp-c-pv69l8.png)

**Resultados de execução do fluxo de trabalho:**

![](https://static-docs.nocobase.com/ai-workflow-automation-2-l0iqn5.png)

**Canvas visual do fluxo de trabalho:**

![](https://static-docs.nocobase.com/ai-workflow-automation-3-nvlnbj-c-o66xrw.png)

## Que problemas um sistema de automação de fluxos de trabalho com IA resolve?

Muitas equipes já usam IA para gerar conteúdo, resumir informações ou fornecer sugestões, mas essas ações geralmente ficam restritas a conversas pontuais. Os usuários precisam copiar dados manualmente, acionar a IA, verificar os resultados e gravar a saída de volta no sistema de negócio — todo o processo ainda depende de trabalho manual.

Com um sistema de automação de fluxos de trabalho com IA, a IA pode participar diretamente dos seus processos de negócio existentes. Por exemplo, quando um registro de estoque muda, uma sugestão de reabastecimento é gerada automaticamente; quando um artigo da base de conhecimento é criado, um resumo é gerado automaticamente; quando um ticket é enviado, seu tipo é classificado automaticamente; quando um contrato entra na fase de aprovação, as mudanças de cláusulas são resumidas automaticamente.

Cada fluxo de trabalho pode ser acionado por um evento de negócio e executar etapas de cálculo, verificação de condições, LLM, AI agent, atualização de registros ou criação de registros na ordem configurada. A entrada, as instruções, a saída e o status final de gravação da IA são todos mantidos nos registros de execução.

Dessa forma, a IA não é mais apenas uma ferramenta de chat independente — ela se torna um nó de execução automatizada dentro do processo de negócio. As equipes podem ver claramente por que cada fluxo de trabalho foi acionado, o que a IA processou, quais resultados produziu e se os dados foram atualizados com sucesso.

## Funcionalidades principais

### Gestão de fluxos de trabalho com IA

- **Gestão centralizada de fluxos de trabalho:** Visualize nomes de fluxos de trabalho, tipos de acionador, status de ativação e contagens totais de execução em um único lugar.
- **Controle de ativação e desativação:** Ative ou desative fluxos de trabalho específicos rapidamente conforme a necessidade do negócio.
- **Visão geral de execuções:** Acompanhe o número de fluxos de trabalho ativados, fluxos de trabalho com IA e execuções acumuladas para entender o uso da automação.

### Eventos de negócio e modos de execução

- **Acionadores por evento de dados:** Inicia fluxos de trabalho automaticamente quando registros são criados, atualizados ou outros eventos de coleção ocorrem.
- **Execução manual:** Execute um fluxo específico manualmente para testes ou para processar dados de negócio específicos.
- **Execuções assíncronas:** Move tarefas de IA de longa duração para o plano de fundo para reduzir o impacto na operação atual do usuário.

### Orquestração visual de fluxos

- **Canvas de nós:** Conecte acionadores, nós de processamento e nós de término em um canvas visual para ver o fluxo completo de relance.
- **Ramificações condicionais:** Decida se deve acionar a IA — e qual ação subsequente executar — com base em valores de campos ou regras de negócio.
- **Configuração da ordem de execução:** Combine de forma flexível nós de cálculo, condição, processamento por IA e operação de dados.

### Nós de IA e de processamento de dados

- **Nós LLM:** Tratam tarefas bem definidas como resumo de conteúdo, classificação, extração de informações e geração de texto.
- **Nós de AI agent:** Concluem processamentos de negócio mais abrangentes com base em papéis, prompts e ferramentas pré-configurados.
- **Nós de operação de dados:** Criam registros, atualizam campos e gravam resultados gerados pela IA de volta nos dados de negócio.

### Resultados de execução e rastreamento de histórico

- **Detalhes completos de execução:** Exibe entrada do acionador, instruções da IA, saída do modelo, status dos nós e o resultado final de gravação.
- **Filtragem do histórico de execuções:** Revise o tempo de execução, os parâmetros de entrada e o status de cada execução por fluxo de trabalho.
- **Diagnóstico de problemas:** Use entradas e saídas no nível de nó para determinar se uma falha ocorreu na condição, na chamada à IA ou na atualização de dados.

### Testes e manutenção contínua

- **Execuções de teste manual:** Execute um fluxo de trabalho antes de ativá-lo para verificar condições, saída da IA e gravação de dados.
- **Versionamento de fluxos de trabalho:** Mantenha diferentes versões de configuração para ajustes contínuos e reversão.
- **Extensão flexível de nós:** Adicione novas condições, capacidades de IA e ações subsequentes conforme o negócio evolui, sem reconstruir o fluxo inteiro.

## Por que criar um sistema de automação de fluxos de trabalho com IA e NocoBase?

Se você construir do zero com o vibe coding comum, cada novo cenário de automação com IA geralmente significa reimplementar escuta de eventos, consultas de dados, chamadas ao modelo, lógica de condição, tratamento de erros e gravação de resultados. Conforme os fluxos se multiplicam, o código se torna mais complexo e as execuções se tornam difíceis de rastrear.

O NocoBase já fornece as capacidades fundamentais de um sistema de negócio — modelos de dados, fluxos de trabalho, verificações de condições, atualizações de registros, permissões e histórico de operações. Você pode incluir nós de LLM ou AI agent diretamente nessas capacidades, deixando a IA trabalhar com dados e processos de negócio reais em vez de ficar fora do sistema.

Por exemplo, após um registro de estoque ser criado, uma sugestão de estoque pode ser gerada automaticamente; após um artigo da base de conhecimento ser adicionado, um resumo pode ser gerado automaticamente; após o status de um contrato mudar, a IA pode resumir a mudança de etapa e criar um registro de auditoria. Todos esses fluxos podem ser visualizados e ajustados no canvas visual.

A entrada, as instruções da IA, a saída e o status de atualização de dados de cada execução são registrados, facilitando a revisão de resultados e a localização de problemas pelas equipes. Para equipes que valorizam rastreabilidade, manutenibilidade e iteração de longo prazo, o NocoBase é a melhor escolha para criar automação de fluxos de trabalho com IA que entra em uso real no negócio.

## FAQ

1. **Em que a automação de fluxos de trabalho com IA difere dos fluxos de trabalho comuns?**

Fluxos de trabalho comuns executam principalmente regras predeterminadas, como verificações de condições, envio de notificações, criação de registros ou atualização de campos.

Fluxos de trabalho com IA podem adicionar nós de LLM ou AI agent ao fluxo, permitindo que o sistema execute resumos, classificações, extração de informações, geração de conteúdo e recomendações com base no contexto de negócio. A IA lida com as tarefas não estruturadas, enquanto o fluxo de trabalho controla as condições de acionamento, a ordem de execução e a gravação de resultados.

2. **Em que os fluxos de trabalho com IA diferem de scripts de automação gerados por vibe coding?**

O vibe coding pode produzir rapidamente um script de automação, mas conforme os cenários de negócio crescem, acionamento de eventos, chamadas ao modelo, permissões de dados, tratamento de erros, registro e manutenção de versões exigem desenvolvimento repetido.

O NocoBase posiciona os nós de IA dentro de seu modelo de dados e sistema de fluxo de trabalho existentes. As equipes podem configurar acionadores, ramificações condicionais, processamento por IA e operações de dados em um canvas visual e revisar cada execução — mais adequado para gerenciar automação de negócio em execução contínua do que manter scripts isolados de uso único.

3. **Quais eventos de negócio podem acionar fluxos de trabalho com IA?**

Fluxos de trabalho com IA podem ser acionados automaticamente por eventos de coleção como criação ou atualização de registros, ou executados manualmente pelos usuários.

Por exemplo, gerar uma sugestão de reabastecimento após um registro de estoque ser atualizado, classificar o tipo de problema após um ticket ser criado, gerar um resumo após um artigo da base de conhecimento ser adicionado, ou analisar automaticamente mudanças de cláusulas após um contrato entrar em uma etapa específica.

4. **Posso definir condições antes de chamar a IA?**

Sim. Você pode primeiro verificar se os dados atendem às condições especificadas antes de entrar em um nó de LLM ou AI agent.

Por exemplo, gerar uma sugestão de reabastecimento apenas quando o estoque cair abaixo do nível de segurança, chamar a análise da IA apenas para tickets de alta prioridade, ou criar um registro de auditoria apenas após um contrato entrar na fase de aprovação. Isso reduz chamadas desnecessárias ao modelo e mantém o fluxo alinhado com as regras reais de negócio.

5. **Os resultados gerados pela IA podem ser gravados de volta no sistema de negócio diretamente?**

Sim. Após a IA concluir o processamento, o fluxo pode continuar com nós de atualização de registros ou criação de registros, salvando resumos, classificações, sugestões, tags ou resultados de análise nas tabelas correspondentes.

Por exemplo, gravar sugestões de estoque de volta nos registros de estoque, salvar resultados de classificação de tickets nos campos do ticket, ou criar um novo registro de auditoria com base nos resultados de análise de contratos.

6. **Posso ver quais entradas a IA usou e quais resultados gerou em cada execução?**

Sim. Os detalhes de execução mostram a entrada do acionador, as instruções usadas pelos nós de IA, a saída do modelo, os resultados dos nós subsequentes e o status final de gravação de dados.

Isso significa que as equipes podem ver não apenas se um fluxo foi bem-sucedido, mas também por que a IA produziu um resultado específico — útil para validar saídas, refinar prompts e solucionar anomalias.

7. **Como localizar problemas quando um fluxo de trabalho com IA falha?**

Cada execução mantém seu tempo de execução, status dos nós, parâmetros de entrada e resultados de saída. As equipes podem usar o histórico de execuções para determinar se uma falha ocorreu na condição de acionamento, no cálculo, na verificação de condição, na chamada à IA ou na etapa de atualização de dados.

Em comparação com scripts independentes que mostram apenas uma mensagem de erro final, esse registro de execução no nível de nó é muito mais adequado para depurar processos de negócio de longa duração.

8. **Posso usar nós LLM e AI agents juntos?**

Sim. Nós LLM são adequados para tarefas de conteúdo bem definidas e de propósito único, como resumo, classificação, extração ou geração de texto.

AI agents podem ser configurados com papéis, prompts e ferramentas disponíveis, adequados para tarefas que combinam dados de negócio com múltiplas etapas de operação. As equipes podem escolher um com base na complexidade do fluxo, ou combinar ambos em diferentes fluxos de trabalho.

9. **Claude Code, Codex, Cursor ou OpenCode podem ajudar a criar esses fluxos de trabalho?**

Sim. AI agents de programação como Claude Code, Codex, Cursor e OpenCode podem se conectar ao NocoBase e gerar estruturas de dados, nós de fluxo de trabalho, lógica de condição e páginas relacionadas a partir de prompts em linguagem natural.

Após os fluxos de trabalho serem gerados, as equipes ainda podem visualizá-los, testá-los e ajustá-los na interface visual do NocoBase, em vez de depender da IA para continuar reescrevendo o código.

10. **Posso controlar quem pode visualizar, executar ou modificar fluxos de trabalho com IA?**

Sim. O NocoBase pode controlar por perfil quais registros de execução os usuários podem visualizar, quais fluxos podem executar manualmente e se podem modificar a configuração do fluxo de trabalho.

Por exemplo, usuários comuns de negócio podem apenas ver resultados relacionados a eles mesmos, administradores de processos podem revisar o histórico de execuções e ajustar nós, e administradores do sistema podem gerenciar configurações de modelo, versões de fluxo de trabalho e permissões.

11. **Fluxos de trabalho com IA podem ser iterados e mantidos a longo prazo?**

Sim. Conforme as regras de negócio mudam, você pode continuar ajustando condições de acionamento, prompts, modelos, lógica de ramificação e ações subsequentes, ou adicionar nós e trocar abordagens de processamento.

Versões de fluxo de trabalho, histórico de execuções e resultados de nós ajudam as equipes a verificar o efeito das mudanças, evitando a necessidade de reconstruir um script de automação inteiro a cada mudança de requisito.

12. **Fluxos de trabalho com IA são adequados para uso corporativo real?**

Sim — especialmente para cenários de automação que precisam de operação estável, processos rastreáveis e resultados verificáveis.

O NocoBase pode combinar gestão de permissões, versionamento de fluxos de trabalho, histórico de execuções, logs de operação, logs de auditoria, SSO corporativo, APIs e extensões por plugins conforme necessário. Em comparação com demonstrações de automação com IA de uso único, é muito mais adequado para processos de negócio que exigem manutenção contínua e expansão gradual.
