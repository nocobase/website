---
title: "Atualizações Semanais｜Adicionar variáveis JS ao fluxo de eventos"
description: "Este é um resumo das atualizações e melhorias de recursos do NocoBase de 27 de março a 2 de abril de 2026."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Data de lançamento: 01/04/2026*

### 🚀 Melhorias

- **[Funcionários de IA]** Otimizar prompts para deepseek ao lidar com tipos de arquivo não suportados ([#9003](https://github.com/nocobase/nocobase/pull/9003)) por @cgyrock
- **[Fluxo de trabalho]** Alterar o tamanho do interruptor ativado para pequeno ([#9010](https://github.com/nocobase/nocobase/pull/9010)) por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigido o problema em que a cópia dos campos associados na tabela não era exibida corretamente na primeira renderização. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) por @jiannx
- **[mecanismo de fluxo]** Corrigir menus de configurações cortados em pop-up ([#9005](https://github.com/nocobase/nocobase/pull/9005)) por @gchust
- **[Notificação: Mensagem no aplicativo]** Corrigir lista de permissões de ação para atualizações de mensagens no aplicativo para evitar atualizações não autorizadas por não proprietários. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) por @mytharcher
- **[Funcionários de IA]** Corrigido o problema de comportamento anormal da pesquisa na web ao usar o LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) por @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Data de lançamento: 30/03/2026*

### 🚀 Melhorias

- **[Fluxo de trabalho: JavaScript]** Adicionar `isolated-vm` como mecanismo de execução JavaScript padrão para o nó JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) por @mytharcher
  Referência: [Nó JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Correções de Bugs

- **[cliente]** Corrigida mensagem de confirmação secundária incorreta ao fechar pop-up multinível após modificar dados do formulário. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) por @gchust
- **[Fluxo de trabalho: Nó SQL]** Corrigir problema de segurança no nó SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) por @mytharcher
- **[Funcionários de IA]** Adicionar verificação de propriedade à API de conversa de IA ([#8993](https://github.com/nocobase/nocobase/pull/8993)) por @cgyrock
- **[Fluxo de trabalho: Aprovação]** Corrigir limite de versão de migrações legadas para evitar erro ao iniciar na implantação da versão mais recente por @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Data de lançamento: 30/03/2026*

### 🚀 Melhorias

- **[indefinido]** Ruído de log reduzido durante a inicialização do servidor ao silenciar comandos unzip para LibreOffice e Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) por @Rishabh1925

### 🐛 Correções de Bugs

- **[cliente]** Corrigir o problema em que o espaço na expressão de variável faz com que o rótulo não seja exibido ([#8988](https://github.com/nocobase/nocobase/pull/8988)) por @mytharcher
- **[mecanismo de fluxo]** Corrigido um problema em que os itens de menu não podiam ser selecionados quando a largura do componente de UI no estado de configuração era muito pequena. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) por @gchust
- **[Visualização de dados]** Ao usar filtros baseados em variáveis, os gráficos falham ao resolver os valores das variáveis corretamente na renderização inicial ([#8964](https://github.com/nocobase/nocobase/pull/8964)) por @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Data de lançamento: 27/03/2026*

### 🐛 Correções de Bugs

- **[Ação: Importar registros]** corrigido o problema de falha na importação após abrir o plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Visualização de dados]** corrigida a estatística anormal de dados do gráfico de função raiz após habilitar o plugin de espaço ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Fluxo de trabalho: JavaScript]** Corrigir problemas de segurança ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Funcionários de IA]** Ajustar a lacuna entre os componentes do cartão de ferramentas na Conversa de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Ação: Exportar registros]** Limitar configuração de importação e exportação de campos relacionados de várias camadas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Ação: Importar registros Pro]** limitar configuração de importação e exportação de campos relacionados de várias camadas por @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Data de lançamento: 26/03/2026*

### 🚀 Melhorias

- **[Fluxo de trabalho]** Adicionar variável para parâmetro de tamanho de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Fluxo de trabalho: Subfluxo]** Adicionar lógica defensiva para evitar travamentos do fluxo de trabalho quando ocorrer exceção por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigida a exceção ao adicionar nós filhos à tabela de árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[servidor]** Evitar lidar com sync-message após o aplicativo parar ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro ao acionar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Gerenciador de e-mail]** Corrigida assinatura sendo sobrescrita ao usar modelos por @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Data de lançamento: 27/03/2026*

### 🎉 Novos Recursos

- **[cliente]** Adicionar variáveis JS ao fluxo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

### 🚀 Melhorias

- **[cliente]** suportar configuração de estilos de campo através de runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx
- **[mecanismo de fluxo]** Melhorar validação de esquema para api de construção de ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust
- **[Fluxo de trabalho: Evento de pré-ação]** Adicionar regras de validação para gatilhos e nós ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher
- **[Fluxo de trabalho]** Adicionar variável para parâmetro de tamanho de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher
- **[Fluxo de trabalho: Webhook]** Adicionar validação para criação de API de gatilho / nó por @mytharcher
- **[Fluxo de trabalho: Subfluxo]**

  - Adicionar validação para criação de API de nó por @mytharcher
  - Adicionar lógica defensiva para evitar travamentos do fluxo de trabalho quando ocorrer exceção por @mytharcher
- **[Fluxo de trabalho: Aprovação]** Adicionar validação para API de gatilho / nó por @mytharcher

### 🐛 Correções de Bugs

- **[cliente]** Corrigida a exceção ao adicionar nós filhos à tabela de árvore na janela pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx
- **[servidor]** Evitar lidar com sync-message após o aplicativo parar ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher
- **[Ação: Exportar registros]** Limitar configuração de importação e exportação de campos relacionados de várias camadas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx
- **[Visualização de dados]** corrigida a estatística anormal de dados do gráfico de função raiz após habilitar o plugin de espaço ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx
- **[Ação: Importar registros]** corrigido o problema de falha na importação após abrir o plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx
- **[Fluxo de trabalho: JavaScript]** Corrigir problemas de segurança ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher
- **[Funcionários de IA]** Ajustar a lacuna entre os componentes do cartão de ferramentas na Conversa de IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock
- **[Mecanismo de fluxo]** Remover evento legado copiado do repositório uiSchema para evitar erro ao acionar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher
- **[Autenticação]** corrigir acl para suportar parâmetros de filtragem de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx
- **[Ação: Importar registros Pro]** limitar configuração de importação e exportação de campos relacionados de várias camadas por @jiannx
- **[Gerenciador de e-mail]** Corrigida assinatura sendo sobrescrita ao usar modelos por @jiannx
