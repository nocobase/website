---
title: "NocoBase 2.0 Lançado Oficialmente"
description: "Esta versão traz melhorias sistemáticas nas capacidades de IA, arquitetura de aplicativos, experiência de edição de dados e fluxo de eventos do frontend, além da adaptação completa das páginas e recursos principais do V2."
---

NocoBase 2.0 é uma grande atualização focada na **criação de aplicações complexas e implantação em escala**. Esta versão traz melhorias sistemáticas nas capacidades de IA, arquitetura de aplicações, experiência de edição de dados e fluxo de eventos do frontend, juntamente com a adaptação completa das páginas V2 e recursos principais.

## Novos Recursos

### Funcionários de IA

As capacidades de IA agora estão integradas ao núcleo como um cidadão de primeira classe, com extensibilidade através do sistema de plugins:

- Integrado ao núcleo com extensibilidade baseada em plugins
- Dependências do LangChain atualizadas e otimizadas para melhor estabilidade e escalabilidade
- Fluxo de interação do funcionário de IA simplificado, reduzindo as barreiras de configuração e uso

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**Referência:**

- [Funcionários de IA](https://v2.docs.nocobase.com/ai-employees)

### Supervisor de Aplicações

O plugin Supervisor de Aplicações fornece **descoberta, agendamento e gerenciamento unificados de múltiplas instâncias de aplicações NocoBase**, adequado para cenários de implantação multi-aplicação e multi-ambiente.

- Descoberta automática de aplicações e gerenciamento centralizado
- Mecanismo de memória compartilhada para melhor colaboração entre instâncias
- Implantação híbrida multi-ambiente para requisitos complexos de entrega

**Memória Compartilhada**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**Implantação Híbrida Multi-Ambiente**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**Referência:**

- [Gerenciamento Multi-Aplicação](https://v2.docs.nocobase.com/multi-app/multi-app)

### Aprimoramento da Tela do Fluxo de Trabalho

#### Reordenação de Nós por Arrastar e Soltar

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### Copiar e Colar Nós

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### Subtabela (Edição em Linha / Edição em Pop-up)

Para atender a diferentes níveis de complexidade na edição de dados relacionados, o NocoBase oferece dois modos de edição de subtabela:

- **Subtabela (Edição em Linha)**: Edite dados relacionados diretamente na tabela para operações eficientes, ideal para entrada rápida de dados e atualizações em lote
- **Subtabela (Edição em Pop-up)**: Edite dados através de formulários pop-up com suporte para tipos de campo mais complexos e lógica de validação, adequado para cenários de alta complexidade

**Subtabela (Edição em Linha)**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**Subtabela (Edição em Pop-up)**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**Referência:**

- [Subtabela (Edição em Linha)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [Subtabela (Edição em Pop-up)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### Atribuição de Campo

O novo mecanismo de atribuição de campo unifica e aprimora a **lógica de inicialização e gravação** para dados de formulário, melhorando a clareza e consistência:

- **Entrada de configuração de atribuição de campo unificada**, reduzindo a complexidade da configuração dispersa
- A lógica de atribuição de campo **não depende mais do tipo de componente do campo**, tornando o comportamento dos dados mais estável e previsível
- Suporte para **atribuição em nível de campo em campos de relação**, permitindo modelagem complexa de dados relacionais
- Modos de atribuição de **valor padrão** e **valor constante**, cobrindo cenários de inicialização e substituição
- O "valor padrão de campo" legado está obsoleto; migre para o novo mecanismo de atribuição de campo

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**Referência:** Atribuição de Campo (documentação em breve)

### Ordem de Execução do Fluxo de Eventos

O fluxo de eventos é executado estritamente na hierarquia **Evento → Fluxo → Etapa**, com hooks correspondentes acionados antes e depois de cada nível para controle e extensão refinados.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**Referência:**

- [Fluxo de Eventos](https://v2.docs.nocobase.com/interface-builder/event-flow)

## Recursos Adaptados para 2.0

### Edição em Massa

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**Referência:**

- [Edição em Massa](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### Duplicar

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**Referência:**

- [Duplicar](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### Altura do Bloco

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**Referência:**

- [Altura do Bloco](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### Ordenação por Arrastar Linhas da Tabela

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**Referência:**

- [Ordenação por Arrasto](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### Método de Carregamento de Dados

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**Referência:**

- [Método de Carregamento de Dados](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### Exibindo Campos de Relação em Formulários

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**Referência:**

- [Formulário](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### Suporte à Localização da Página (V2)

As páginas V2 agora suportam totalmente a localização em **páginas, blocos, ações e campos**.

Após ativar o plugin de localização, o sistema coleta automaticamente as entradas de tradução ausentes e as exibe na lista de gerenciamento de localização para manutenção centralizada.

Em blocos JS, use `ctx.t()` para recuperar texto localizado com interpolação de variáveis:

```js
const label = ctx.t('Seu nome é {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Aprovação 2.0

Todos os fluxos de trabalho de aprovação recém-criados usam o layout baseado em blocos 2.0. As configurações 1.x existentes permanecem suportadas. Para alternar uma aprovação 1.x para o layout 2.0, selecione a versão v2 e reconfigure a interface. Observe que, uma vez alternado, não pode ser revertido para 1.x.

#### Configurar Interface do Iniciador

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### Configurar Interface do Aprovador

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### Cópia (CC) 2.0

Todos os nós CC recém-criados usam o layout baseado em blocos 2.0 para a visualização do destinatário. As configurações 1.x existentes permanecem suportadas. Para alternar um CC 1.x para o layout 2.0, selecione a versão v2 e reconfigure a interface. Observe que, uma vez alternado, não pode ser revertido para 1.x.

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## Ainda Não Disponível no 2.0

Os seguintes recursos ainda não estão disponíveis no 2.0 e serão atualizados em versões futuras:

| Recurso                           | Alternativa Atual       |
| --------------------------------- | ----------------------- |
| Solicitação Personalizada         | Nó de Solicitação do Fluxo de Trabalho |
| Impressão do Navegador            | Ação JS                 |
| Formulário de Múltiplas Etapas    | Bloco JS                |
| Bloco de Filtro em Árvore         | Bloco JS                |
| Bloco de Calendário               | Bloco JS                |
| Variável Personalizada            | Fluxo de Eventos        |
| Bloco de Gantt                    | Bloco JS                |
| Bloco Kanban                      | Bloco JS                |
| Cópia de Texto                    | Fluxo de Eventos        |
| Configurações de Coluna           | Ação JS                 |
| Regra de Vinculação de Estilo     | Fluxo de Eventos        |
| Atalho para Copiar Texto          | Fluxo de Eventos        |
| Campo de Código QR                | Campo JS                |
| Escanear para Inserir             | Fluxo de Eventos        |
| Incorporar NocoBase               | —                       |
| Campo de Região Administrativa da China | —                 |
| Campo de Código                   | —                       |
| Formulário Público                | —                       |
| Tarefa do Nó Manual do Fluxo de Trabalho | —                 |
| Após Envio Bem-sucedido           | Fluxo de Eventos        |
| Modelo de Dados                   | Fluxo de Eventos        |
