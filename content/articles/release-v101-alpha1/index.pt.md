---
title: "NocoBase v1.0.1-alpha.1: Blocos suportam configurações de altura"
description: "NocoBase v1.0.1-alpha.1 apresenta novos recursos como configurações de altura de blocos, ações de links de URL e suporte a variáveis para iframes, juntamente com várias melhorias e correções de bugs para aprimorar a funcionalidade e o desempenho da plataforma."
---

## Novos recursos

### Blocos suportam configurações de altura ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Documento de referência:

* [Definir altura do bloco](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Ação de link: navegar para a URL especificada ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Suporta a configuração de variáveis na URL ou nos parâmetros de busca.

<video controls="" height="250" width="100%"></video>

Documento de referência:

* [Ação de link](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Adicionada uma nova variável chamada "Parâmetros de busca da URL" ([#4506](https://github.com/nocobase/nocobase/pull/4506))

A variável só está disponível quando há uma string de consulta na URL da página, tornando mais conveniente o uso em conjunto com a [ação de link](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Documento de referência:

* [Parâmetros de busca da URL](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Ação de link](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe suporta variáveis ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Documento de referência:

* [Bloco iframe](https://docs.nocobase.com/handbook/block-iframe)

### Armazenamentos de arquivos suportam configuração de tamanho e tipo de arquivo ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Documento de referência:

* [Armazenamento de Arquivos](https://docs.nocobase.com/handbook/file-manager/storage)

### Workflow: nós de variáveis suportam seleção de caminho parcial de objetos de dados como valor das variáveis

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### Campos de URL suportam pré-visualização ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Atualmente, suporta apenas pré-visualização de imagens.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Visualização de dados: Suporte para variáveis "Parâmetros de consulta da URL" e "Função atual" ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Melhorias

### Otimização da função de importação e exportação ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Melhorada a estabilidade da função de importação e exportação, aumentando o limite de importação e exportação para 2000 registros. Suporta lógica estendida de importação e exportação para tipos de campo personalizados.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Evitar operação acidental desabilitando a opção de variável de data ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Exceto para "hora atual", as variáveis que representam datas são intervalos (arrays) em vez de momentos (strings). Elas podem ser usadas para filtragem, mas não podem ser usadas diretamente como valores padrão.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Otimização da interação de atribuição de regras de vinculação ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Campos de seleção múltipla não mostram opções de atribuição. Se um campo de seleção única for selecionado e atribuído, mudar para um campo de seleção múltipla limpará a configuração.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Ajuste do ícone no canto superior direito da coluna de ação no bloco de tabela ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Refinamento do fallback de erro para diferentes componentes no frontend para evitar que a página inteira se torne inutilizável devido a um erro de frontend.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Coletar informações de depuração e baixar logs rapidamente quando ocorre um erro de frontend ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Outros

* Modificar o limite de comprimento do nome de usuário para 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Não ocultar campos de chave estrangeira ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Correções de bugs

### O escopo de dados no diálogo de configuração de permissão não deve suportar as variáveis "Formulário atual" e "Registro de pop-up atual" ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Suportar a seleção do valor de uma variável diretamente como valor padrão para um campo de associação ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Corrigir o problema de erro ao adicionar a ação "Solicitação personalizada" várias vezes ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Outros

* Corrigir o problema de o conteúdo na subtabela não ser limpo após o envio do formulário. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Corrigir o problema de uso anormal da variável "Objeto atual" na subtabela. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Adicionar opção 'Definir nível de zoom padrão' para campos de mapa. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Corrigir o problema de o bloco não ser exibido ao adicionar um bloco usando modelos de bloco em uma janela pop-up. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Corrigir o problema de estilo dos modelos de dados de formulário. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Workflow: estilo da caixa de expressão desapareceu no nó de cálculo. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Workflow: tipo de campo incorreto ao criar no formulário personalizado do nó manual. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Workflow: problema de permissão ao acionar evento de ação personalizada. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Workflow: configuração de profundidade incorreta de pré-carregamento de associação para múltiplas fontes de dados. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Bug da biblioteca `json-templates`. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Gerenciador de arquivos: erro ao fazer upload ou excluir arquivo no COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* Regra de vinculação de formulário exibe [object Object] ao atribuir um valor de 0,00 a um campo numérico. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Subtabela está sem o item de configuração de controle para o botão adicionar novo. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Botão de envio no formulário de edição de tabela está sem o item de configuração de regra de vinculação. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Visualização de dados: corrigir o problema de componentes de campo invisíveis ao definir valores padrão para campos de filtro de gráfico ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Autenticação: corrigir o problema de a página de registro não ser encontrada para o autenticador básico recém-criado. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Localização: corrigir o problema de os títulos das páginas não serem traduzidos ao traduzir os textos do menu. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Mapa: corrigir o problema de o AMap mostrar um erro de chave apesar da configuração correta. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
