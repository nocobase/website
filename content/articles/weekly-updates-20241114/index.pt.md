---
title: "Atualizações Semanais do NocoBase: Melhorias na usabilidade do fluxo de trabalho"
description: "Atualizações Semanais do NocoBase 2024-11-14"
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

Atualmente, o NocoBase é atualizado com dois branches: `main` e `next`.

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão alfa, incluindo alguns novos recursos não lançados. Esta versão pode não ser completamente estável e é adequada para desenvolvedores ou testadores experimentarem novos recursos com antecedência ou realizarem testes de compatibilidade.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Data de lançamento: 2024-11-06*

### 🐛 Correções de Bugs

- **[client]** Permissão para o campo de tabela de associação na tabela é baseada na permissão do campo de associação correspondente ([#5569](https://github.com/nocobase/nocobase/pull/5569)) por @katherinehhh
- **[Ação: Exportar registros]** Corrigir exportação com i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) por @chareice
- **[Ação: Importar registros]** Corrigir problema com importação de associação "pertence a" ([#5417](https://github.com/nocobase/nocobase/pull/5417)) por @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Data de lançamento: 2024-11-08*

### 🚀 Melhorias

- **[Autenticação]** Otimizar mensagem de erro para login e registro ([#5612](https://github.com/nocobase/nocobase/pull/5612)) por @2013xile

### 🐛 Correções de Bugs

- **[client]**
  - Corrigir problemas de valor padrão em subtabela ([#5607](https://github.com/nocobase/nocobase/pull/5607)) por @zhangzhonghe
  - Corrigir problema com suporte a pesquisa difusa para campos de associação com campo de título do tipo string ([#5611](https://github.com/nocobase/nocobase/pull/5611)) por @katherinehhh
- **[Autenticação]** Corrigir o problema em que os usuários não conseguem alterar a senha ao fazer login com um autenticador sem senha ([#5609](https://github.com/nocobase/nocobase/pull/5609)) por @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Data de lançamento: 2024-11-11*

### 🚀 Melhorias

- **[client]** Suporte para ocultar itens de menu ([#5624](https://github.com/nocobase/nocobase/pull/5624)) por @chenos
- **[server]** Adicionar variável de ambiente DB_SQL_BENCHMARK ([#5615](https://github.com/nocobase/nocobase/pull/5615)) por @chareice

### 🐛 Correções de Bugs

- **[client]** Suporte para coleção de arquivos como destino de associação um-para-muitos ([#5619](https://github.com/nocobase/nocobase/pull/5619)) por @mytharcher
- **[Ação: Importar registros]** Corrigido o problema em que dados de relacionamento muitos-para-muitos não podiam ser importados através do campo id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) por @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Data de lançamento: 2024-11-13*

### 🚀 Melhorias

- **[client]** Suporte para campos um-para-um e muitos-para-muitos (array) usarem coleção de arquivos ([#5637](https://github.com/nocobase/nocobase/pull/5637)) por @mytharcher
- **[avaliadores]** Usar Formula.js como avaliador padrão no nó de cálculo ([#5626](https://github.com/nocobase/nocobase/pull/5626)) por @mytharcher

### 🐛 Correções de Bugs

- **[client]** Corrigir problema de redefinição que reverte o título do botão de filtro para o padrão ([#5635](https://github.com/nocobase/nocobase/pull/5635)) por @katherinehhh
- **[Ação: Importar registros]** Corrigido o problema em que dados de relacionamento muitos-para-muitos não podiam ser importados através do campo id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) por @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Data de lançamento: 2024-11-07*

### 🎉 Novos Recursos

- **[client]** Suporte a opções de configuração para ocultar colunas de tabela ([#5597](https://github.com/nocobase/nocobase/pull/5597)) por @zhangzhonghe

### 🚀 Melhorias

- **[Gerenciador de fonte de dados]** Ajustar categorias de tabela para serem carregadas da fonte de dados principal e removê-las do global ([#5602](https://github.com/nocobase/nocobase/pull/5602)) por @katherinehhh
- **[Gerenciador de notificações]** Atualizar estrutura da mensagem para incluir destinatários nos dados de log de notificação ([#5603](https://github.com/nocobase/nocobase/pull/5603)) por @sheldon66

### 🐛 Correções de Bugs

- **[client]** Corrigir problema de barra de rolagem da tabela no modo não-config ([#5599](https://github.com/nocobase/nocobase/pull/5599)) por @katherinehhh
- **[Ação: Importar registros]** Corrigir importação com campo de data ([#5606](https://github.com/nocobase/nocobase/pull/5606)) por @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Data de lançamento: 2024-11-11*

### 🎉 Novos Recursos

- **[client]** Suporte a propriedades delimitadoras para componente de expressão variável ([#5620](https://github.com/nocobase/nocobase/pull/5620)) por @mytharcher
- **[Workflow]** Suporte para mover nós downstream para novos branches ao criar nó com branches ([#5570](https://github.com/nocobase/nocobase/pull/5570)) por @mytharcher

### 🚀 Melhorias

- **[client]**
  - Otimizar lista de campos: remover campos de relação e tag Duplicado ([#5616](https://github.com/nocobase/nocobase/pull/5616)) por @katherinehhh
  - Suporte a `getFilterTargetKey()` da classe `Collection` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) por @mytharcher
- **[Fonte de dados: Principal]** Refatorar a API collections:list para melhorar o desempenho ([#5610](https://github.com/nocobase/nocobase/pull/5610)) por @chareice
- **[Gerenciador de notificações]** Melhorar UI do gerenciador de canais de notificação ([#5621](https://github.com/nocobase/nocobase/pull/5621)) por @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Data de lançamento: 2024-11-11*

### 🎉 Novos Recursos

- **[WeCom]**
  - Suporte para login automático ao visitar páginas do aplicativo no navegador WeCom por @chenzhizdt
  - Suporte para usar Markdown e cartão de modelo em notificação por @chenzhizdt

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, oferecendo controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
