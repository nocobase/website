---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "A atualização desta semana inclui: consulta de contagem da API de lista otimizada, suporte a fluxo de trabalho para testar nós de notificação e muito mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Data de lançamento: 03/09/2025*

#### 🚀 Melhorias

- **[database]** Otimizada a consulta de contagem da API de lista para reduzir o consumo de recursos. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) por @aaaaaajie
- **[Notificação: Mensagem no aplicativo]** Suporte para configurar o atraso de fechamento automático para notificações de mensagens no aplicativo ([#7472](https://github.com/nocobase/nocobase/pull/7472)) por @mytharcher
- **[Fluxo de trabalho: nó de notificação]** Suporte para testar o nó de notificação ([#7470](https://github.com/nocobase/nocobase/pull/7470)) por @mytharcher

#### 🐛 Correções de bugs

- **[cliente]**

  - erro de renderização de campo de associação ao alternar para componente de tag no bloco de formulário de edição ([#7468](https://github.com/nocobase/nocobase/pull/7468)) por @katherinehhh
  - problema de limite de tempo quando a data selecionada é igual a minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) por @katherinehhh
- **[Mobile]** campo de data móvel sem fuso horário não exibindo data e hora corretamente ([#7473](https://github.com/nocobase/nocobase/pull/7473)) por @katherinehhh
- **[Formulários públicos]** valor padrão do campo de formulário público não aplicado ao usar variáveis ([#7467](https://github.com/nocobase/nocobase/pull/7467)) por @katherinehhh
- **[Ação: Importar registros]** Corrigido o número de linha incorreto exibido quando dados duplicados são importados ([#7440](https://github.com/nocobase/nocobase/pull/7440)) por @aaaaaajie
- **[Coleção: Árvore]** Remover eventos do banco de dados relacionados à coleção após excluir uma coleção em árvore ([#7459](https://github.com/nocobase/nocobase/pull/7459)) por @2013xile
- **[Fluxo de trabalho: Evento de ação personalizada]** Corrigido o problema em que eventos de ação personalizada não podiam ser executados manualmente imediatamente após a inicialização por @mytharcher
- **[Fluxo de trabalho: Subfluxo]** Corrigido o problema de subprocessos serem retomados e executados várias vezes por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Para usuários que não são o aprovador atual, o botão de visualização correspondente na tabela de fluxo do processo não será exibido por @mytharcher
