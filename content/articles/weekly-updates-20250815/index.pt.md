---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana trazem desempenho otimizado na alternância de guias pop-up, correções de bugs e muito mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Data de lançamento: 2025-08-12*

#### 🚀 Melhorias

- **[client]**

  - Adicionado suporte à variável de data "anteontem" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) por @katherinehhh
  - Otimizado o desempenho ao alternar abas de pop-up ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Workflow]**

  - Corrigido caso de teste instável ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher
  - O título do workflow no cartão de tarefa não será mais exibido com tachado, mesmo se a versão correspondente estiver desabilitada ([#7339](https://github.com/nocobase/nocobase/pull/7339)) por @mytharcher
- **[Visualizador de Arquivos Office]** Adicionado suporte para visualização de arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher
- **[Gerenciador de Backup]** Melhorado o desempenho da operação de backup do banco de dados MySQL por @gchust

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema em que o layout de formulário com várias colunas não convertia para layout de coluna única em dispositivos móveis ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
  - Corrigido erro ao excluir coleções em massa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
  - Corrigido problema em que o escopo de dados salvo anteriormente não era pré-selecionado ao configurar permissões individualmente. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
- **[Workflow]**

  - Refatorado o menu "Adicionar Nó" e corrigido os problemas de desempenho de renderização do canvas do workflow que ele causava ([#7363](https://github.com/nocobase/nocobase/pull/7363)) por @mytharcher
  - Corrigido o problema de condições de filtro incorretas ao recuperar um único item de tarefa ([#7366](https://github.com/nocobase/nocobase/pull/7366)) por @mytharcher
  - Corrigido o problema de correspondência de palavras-chave na seleção de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher
  - Evitado erro lançado ao publicar na fila de eventos durante a parada ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Corrigido o problema em que as mensagens no site eram recebidas, mas não exibidas em um pop-up ([#7364](https://github.com/nocobase/nocobase/pull/7364)) por @mytharcher
- **[Mobile]** Resolvido um problema em que o seletor de data em dispositivos móveis era exibido incorretamente quando limites de intervalo de data eram aplicados ([#7362](https://github.com/nocobase/nocobase/pull/7362)) por @katherinehhh
- **[Gerenciador de Arquivos]** Adicionado campo `storageId` à coleção de arquivos para suportar configuração de permissão ([#7351](https://github.com/nocobase/nocobase/pull/7351)) por @mytharcher
- **[Workflow: Nó paralelo]** Corrigido a suspensão do nó paralelo após retomar no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Workflow: Cópia]** Corrigido problema em que blocos não podiam ser removidos ([#7338](https://github.com/nocobase/nocobase/pull/7338)) por @mytharcher
- **[Visualizador de Arquivos Office]** Suporte para arquivos `.docx`, `.xlsx` e `.pptx` com apenas URL para serem visualizados ([#7336](https://github.com/nocobase/nocobase/pull/7336)) por @mytharcher
- **[Visualização de dados]** Problema de variável de data no valor padrão do campo de data no bloco de filtro de gráfico ([#7291](https://github.com/nocobase/nocobase/pull/7291)) por @katherinehhh
- **[Workflow: Aprovação]**

  - Corrigido regras de vinculação não funcionando no bloco de detalhes original da aprovação por @mytharcher
  - Corrigido atualização de associações ao enviar rascunho por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Data de lançamento: 2025-08-09*

#### 🐛 Correções de Bugs

- **[Gerenciador de Email]** editor rico suporta quebras de linha suaves por @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Data de lançamento: 2025-08-09*

#### 🚀 Melhorias

- **[Workflow]** Corrigido caso de teste instável ([#7349](https://github.com/nocobase/nocobase/pull/7349)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]** Corrigido o problema em que o layout de formulário com várias colunas não convertia para layout de coluna única em dispositivos móveis ([#7355](https://github.com/nocobase/nocobase/pull/7355)) por @zhangzhonghe
- **[Workflow]** Corrigido o problema de correspondência de palavras-chave na seleção de campo ([#7356](https://github.com/nocobase/nocobase/pull/7356)) por @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Data de lançamento: 2025-08-08*

#### 🚀 Melhorias

- **[client]** Otimizado o desempenho ao alternar abas de pop-up ([#7353](https://github.com/nocobase/nocobase/pull/7353)) por @zhangzhonghe
- **[Visualizador de Arquivos Office]** Adicionado suporte para visualização de arquivos `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigido problema em que o escopo de dados salvo anteriormente não era pré-selecionado ao configurar permissões individualmente ([#7288](https://github.com/nocobase/nocobase/pull/7288)) por @aaaaaajie
  - Corrigido erro ao excluir coleções em massa ([#7345](https://github.com/nocobase/nocobase/pull/7345)) por @aaaaaajie
- **[Workflow]** Evitado erro lançado ao publicar na fila de eventos durante a parada ([#7348](https://github.com/nocobase/nocobase/pull/7348)) por @mytharcher
- **[Workflow: Nó paralelo]** Corrigido a suspensão do nó paralelo após retomar no MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) por @mytharcher
- **[Workflow: Aprovação]**

  - Corrigido atualização de associações ao enviar rascunho por @mytharcher
  - Corrigido regras de vinculação não funcionando no bloco de detalhes original da aprovação por @mytharcher
