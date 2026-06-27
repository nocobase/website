---
title: "Atualizações Semanais do NocoBase: Adicionar novo canal de notificação"
description: "Atualizações Semanais do NocoBase 2024-11-07"
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

O NocoBase é atualmente atualizado com dois branches: `main` e `next`.

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão alfa, incluindo alguns novos recursos não lançados. Esta versão pode não ser completamente estável e é adequada para desenvolvedores ou testadores experimentarem novos recursos com antecedência ou realizarem testes de compatibilidade.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Data de lançamento: 2024-11-05*

### 🚀 Melhorias

- **[cliente]** a precisão numérica pode ser configurada para 8 dígitos ([#5552](https://github.com/nocobase/nocobase/pull/5552)) por @chenos

### 🐛 Correções de Bugs

- **[cliente]** Corrige o estilo de vinculação não atualizando no formulário. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) por @sheldon66
- **[Auth: Chaves de API]** Corrige o caminho da URL para a página de configurações de chaves de API ([#5562](https://github.com/nocobase/nocobase/pull/5562)) por @2013xile
- **[Mobile]** Corrige o problema de imagens de pré-visualização serem cobertas pela página ([#5535](https://github.com/nocobase/nocobase/pull/5535)) por @zhangzhonghe
- **[Bloco: Mapa]** corrige a renderização do mapa em sub-detalhes e a exibição incorreta de valor para campos vazios ([#5526](https://github.com/nocobase/nocobase/pull/5526)) por @katherinehhh
- **[Coleção: Árvore]** Corrige erros ao atualizar a coleção de caminhos ([#5551](https://github.com/nocobase/nocobase/pull/5551)) por @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Data de lançamento: 2024-11-05*

### 🎉 Novos Recursos

- **[Auth: OIDC]** Adiciona uma opção "ativar logout iniciado pelo RP" por @2013xile

### 🐛 Correções de Bugs

- **[cliente]** Corrige problema de filtro ao definir campo de seleção única como campo de título na seleção de associação ([#5581](https://github.com/nocobase/nocobase/pull/5581)) por @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Data de lançamento: 2024-10-31*

### 🎉 Novos Recursos

- **[WeCom]** Adiciona canal de notificação WeCom por @chenzhizdt

### 🚀 Melhorias

- **[cliente]** restaura o valor padrão quando o título do campo é limpo ([#5549](https://github.com/nocobase/nocobase/pull/5549)) por @katherinehhh
- **[Gerenciador de notificações]**

  - Adiciona componentes UserSelect e UserAddition para simplificar o desenvolvimento de canais de notificação ([#5553](https://github.com/nocobase/nocobase/pull/5553)) por @2013xile
  - adiciona API para obter o registro de tipos de canal do plugin de notificação ([#5531](https://github.com/nocobase/nocobase/pull/5531)) por @mytharcher
  - ajusta o nome do registro de tipos de canal do plugin de notificação ([#5532](https://github.com/nocobase/nocobase/pull/5532)) por @mytharcher
  - adiciona API do plugin gerenciador de notificações para obter todos os tipos registrados ([#5529](https://github.com/nocobase/nocobase/pull/5529)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Melhora a UI da mensagem no aplicativo e adiciona alguns logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) por @sheldon66

### 🐛 Correções de Bugs

- **[banco de dados]**

  - corrige a atualização de opções de coleção com chave de destino de filtro ([#5558](https://github.com/nocobase/nocobase/pull/5558)) por @chareice
  - corrige o valor errado de primaryKeyField no sequelize ao trabalhar com múltiplas chaves de destino de filtro ([#5556](https://github.com/nocobase/nocobase/pull/5556)) por @chareice
- **[cliente]**

  - Corrige o problema onde componentes esqueleto em blocos de tabela não desaparecem ([#5548](https://github.com/nocobase/nocobase/pull/5548)) por @zhangzhonghe
  - Corrige problemas com ação de exclusão, reticências de texto e exibição de novos dados em sub-tabela ([#5523](https://github.com/nocobase/nocobase/pull/5523)) por @katherinehhh
- **[Gerenciador de fonte de dados]** Corrige a remoção de fonte de dados em status de falha ([#5554](https://github.com/nocobase/nocobase/pull/5554)) por @chareice
- **[Notificação: Email]**

  - corrige a consulta para usuários por ids na notificação por email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) por @mytharcher
  - corrige assunto perdido na notificação por email baseada em ids de usuário ([#5534](https://github.com/nocobase/nocobase/pull/5534)) por @mytharcher
  - corrige o caminho do campo de reação no formulário dinâmico da notificação por email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) por @mytharcher
- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema onde o componente de seleção para um campo muitos para muitos (array) tem apenas uma opção ([#5544](https://github.com/nocobase/nocobase/pull/5544)) por @2013xile
- **[Gerenciador de notificações]** corrige falha na página devido ao tipo de canal errado ([#5528](https://github.com/nocobase/nocobase/pull/5528)) por @mytharcher
- **[Workflow: Nó SQL]** Corrige sse causando timeout em "waitForLoadState('networkidle')" ([#5524](https://github.com/nocobase/nocobase/pull/5524)) por @hongboji
- **[Componente de campo: máscara]** Corrigido o problema de dados originais não poderem ser exibidos ao clicar se o componente estiver em estado somente leitura por @gchust
- **[Workflow: Evento de ação personalizada]** Corrige sse causando timeout em "waitForLoadState('networkidle')" por @hongboji
- **[WeCom]** Corrige o problema de resposta 404 não encontrada ao entrar no aplicativo a partir da bancada de trabalho do WeCom por @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Data de lançamento: 2024-11-04*

### 🎉 Novos Recursos

- **[cliente]**
  - [tabela] Adiciona ação 'popup' para configurar ações ([#5580](https://github.com/nocobase/nocobase/pull/5580)) por @bignof
  - "Campos de configuração" suportam filtragem de campos ([#5471](https://github.com/nocobase/nocobase/pull/5471)) por @katherinehhh

### 🚀 Melhorias

- **[cliente]** adiciona suporte para parâmetros de Layout (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) por @katherinehhh
- **[Gerenciador de multi-aplicativos]** inicialização rápida assíncrona de sub-aplicativos ([#5571](https://github.com/nocobase/nocobase/pull/5571)) por @chenos
- **[Coleção: Árvore]** Melhora a lógica de carregamento de coleção com atributo de esquema ([#5541](https://github.com/nocobase/nocobase/pull/5541)) por @chareice

### 🐛 Correções de Bugs

- **[cliente]**
  - o campo de pesquisa deve ser pesquisado com base no texto traduzido ([#5572](https://github.com/nocobase/nocobase/pull/5572)) por @katherinehhh
  - Corrige problema ao adicionar dados à sub-tabela após exclusão ([#5566](https://github.com/nocobase/nocobase/pull/5566)) por @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Data de lançamento: 2024-11-05*

### 🐛 Correções de Bugs

- **[cliente]** remove a caixa de pesquisa ao adicionar bloco à página ([#5577](https://github.com/nocobase/nocobase/pull/5577)) por @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Data de lançamento: 2024-11-06*

### 🐛 Correções de Bugs

- **[cliente]** Corrige erro de resolução ao configurar campos após adicionar uma nova fonte de dados ([#5576](https://github.com/nocobase/nocobase/pull/5576)) por @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Data de lançamento: 2024-11-06*

### 🎉 Novos Recursos

- **[utils]** suporte para usar handlebars no conteúdo da mensagem ([#5559](https://github.com/nocobase/nocobase/pull/5559)) por @mytharcher
- **[cliente]** bloco de tabela suporta configurações de tamanho ([#5563](https://github.com/nocobase/nocobase/pull/5563)) por @katherinehhh
- **[Notificação: Mensagem no aplicativo]** suporte a mensagens no aplicativo para cliente mobile ([#5560](https://github.com/nocobase/nocobase/pull/5560)) por @sheldon66

### 🚀 Melhorias

- **[Gerenciador de notificações]** Adiciona destinatários aos logs de notificação ([#5561](https://github.com/nocobase/nocobase/pull/5561)) por @sheldon66

### 🐛 Correções de Bugs

- **[cliente]** Corrige erro ao abrir popup no kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) por @zhangzhonghe
- **[Controle de acesso]** Corrige meta acl com múltiplas chaves de destino de filtro ([#5598](https://github.com/nocobase/nocobase/pull/5598)) por @chareice

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
