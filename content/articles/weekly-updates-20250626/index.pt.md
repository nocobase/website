---
title: "Atualizações Semanais do NocoBase: Fontes de Dados Externas Suportam Carregamento Sob Demanda de Coleções"
description: "As atualizações desta semana incluem: adição de variável de registros de aprovação ao resultado do nó, suporte ao campo BIT no SQL Server para fontes de dados externas e mais."
---

Resuma os registros de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Data de lançamento: 24/06/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - Limitação de intervalo incorreta em campos de data com hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
  - Quando as variáveis do parâmetro de consulta da URL estão vazias, as condições de escopo de dados não são removidas ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
- **[Mobile]** Corrige problema de z-index do popup no mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Calendário]** Problema com campo de data no formulário de criação rápida do bloco de calendário ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Data de lançamento: 20/06/2025*

#### 🐛 Correções de Bugs

- **[Fluxo de Trabalho]**

  - Corrige verificação executada incorretamente em números inteiros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corrige estatísticas em cascata excluídas por versão de fluxo de trabalho não atual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
- **[Ação: Importar registros]** Resolve problema de falha de login após importação em lote de nomes de usuário e senhas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Fluxo de Trabalho: Aprovação]** Apenas participantes podem visualizar (obter) detalhes da aprovação por @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Data de lançamento: 18/06/2025*

#### 🐛 Correções de Bugs

- **[client]**

  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - Função de alinhamento de texto da coluna da tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
- **[Fluxo de Trabalho]** Corrige verificação executada incorretamente em números inteiros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Gerenciador de arquivos]** Corrige campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Data de lançamento: 19/06/2025*

#### 🎉 Novos Recursos

- **[Fluxo de Trabalho: Aprovação]** Adiciona variável de registros de aprovação ao resultado do nó por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Função de alinhamento de texto da coluna da tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
- **[Gerenciador de arquivos]** Corrige campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Fluxo de Trabalho]** Corrige verificação executada incorretamente em números inteiros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Data de lançamento: 25/06/2025*

#### 🎉 Novos Recursos

- **[Gerenciador de fontes de dados]** ✨ Suporte para carregamento sob demanda de coleções de fontes de dados externas ([#6979](https://github.com/nocobase/nocobase/pull/6979)) por @aaaaaajie
- **[Fluxo de Trabalho: Nó de requisição HTTP]** Suporte para requisição `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) por @shushu992
- **[Fonte de dados: SQL Server externo]** Suporte para carregamento sob demanda de coleções de fontes de dados externas por @aaaaaajie

#### 🐛 Correções de Bugs

- **[client]**

  - Quando as variáveis do parâmetro de consulta da URL estão vazias, as condições de escopo de dados não são removidas ([#7104](https://github.com/nocobase/nocobase/pull/7104)) por @zhangzhonghe
  - Limitação de intervalo incorreta em campos de data com hora ([#7107](https://github.com/nocobase/nocobase/pull/7107)) por @katherinehhh
- **[Mobile]** Corrige problema de z-index do popup no mobile ([#7110](https://github.com/nocobase/nocobase/pull/7110)) por @zhangzhonghe
- **[Calendário]** Problema com campo de data no formulário de criação rápida do bloco de calendário ([#7106](https://github.com/nocobase/nocobase/pull/7106)) por @katherinehhh
- **[Fluxo de Trabalho: Aprovação]**

  - Corrige API de variável legada que lança erro por @mytharcher
  - Corrige estilos mobile por @mytharcher
  - Corrige erro lançado quando a coleção relacionada à aprovação é excluída por @mytharcher
- **[Gerenciador de e-mail]** anexo não é exibido por @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Data de lançamento: 20/06/2025*

#### 🎉 Novos Recursos

- **[client]** Suporte ao campo BIT do SQL Server para fontes de dados externas. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) por @aaaaaajie
- **[Fluxo de Trabalho: Aprovação]** Adiciona variável de registros de aprovação ao resultado do nó por @mytharcher

#### 🚀 Melhorias

- **[client]** Ocultar automaticamente a barra de ações do bloco de cartão em grade quando vazia ([#7069](https://github.com/nocobase/nocobase/pull/7069)) por @zhangzhonghe
- **[Verificação]** Remover opções de verificador da resposta da API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) por @2013xile
- **[Fluxo de Trabalho]** Ajustar API de `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) por @mytharcher
- **[Fluxo de Trabalho: Evento pré-ação]** Ajustar API de variável por @mytharcher
- **[Fluxo de Trabalho: Aprovação]** Ajustar API de variável por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - Função de alinhamento de texto da coluna da tabela não está funcionando ([#7094](https://github.com/nocobase/nocobase/pull/7094)) por @zhangzhonghe
  - Atribuir valores de campo: Incapacidade de limpar dados para campos de relação ([#7086](https://github.com/nocobase/nocobase/pull/7086)) por @zhangzhonghe
  - Usar escopo de variável independente para cada campo ([#7012](https://github.com/nocobase/nocobase/pull/7012)) por @mytharcher
  - Condição de estilo em campos de coluna de subtabela não aplicada corretamente ([#7083](https://github.com/nocobase/nocobase/pull/7083)) por @katherinehhh
  - Filtragem através de campos de coleção de relacionamento em formulários de filtro é inválida ([#7070](https://github.com/nocobase/nocobase/pull/7070)) por @zhangzhonghe
  - Variáveis de parâmetro de consulta da URL não funcionam no valor padrão do campo de formulário público ([#7084](https://github.com/nocobase/nocobase/pull/7084)) por @katherinehhh
  - Mensagem de validação obrigatória na subtabela persiste ao trocar de página ([#7080](https://github.com/nocobase/nocobase/pull/7080)) por @katherinehhh
  - Erro ao clicar no botão de filtro ([#7100](https://github.com/nocobase/nocobase/pull/7100)) por @zhangzhonghe
- **[database]** suportar atualizações de associação em updateOrCreate e firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) por @chenos
- **[Fluxo de Trabalho]**

  - Corrige estatísticas em cascata excluídas por versão de fluxo de trabalho não atual ([#7103](https://github.com/nocobase/nocobase/pull/7103)) por @mytharcher
  - Corrige verificação executada incorretamente em números inteiros grandes ([#7099](https://github.com/nocobase/nocobase/pull/7099)) por @mytharcher
  - Corrige verificação executada incorretamente em números inteiros grandes ([#7091](https://github.com/nocobase/nocobase/pull/7091)) por @mytharcher
- **[Ação: Importar registros]** Resolve problema de falha de login após importação em lote de nomes de usuário e senhas ([#7076](https://github.com/nocobase/nocobase/pull/7076)) por @aaaaaajie
- **[Campo de coleção: Muitos para muitos (array)]** Atualizar um campo muitos para muitos (array) lança um erro quando o campo `updatedBy` está presente ([#7089](https://github.com/nocobase/nocobase/pull/7089)) por @2013xile
- **[Gerenciador de arquivos]** Corrige campo de anexos que não pode ser atualizado no processo de aprovação ([#7093](https://github.com/nocobase/nocobase/pull/7093)) por @mytharcher
- **[Formulários públicos]** Formulários públicos: Corrige problema de acesso não autorizado no envio do formulário ([#7085](https://github.com/nocobase/nocobase/pull/7085)) por @zhangzhonghe
- **[Campo de coleção: Sequência]** Corrige cálculo de sequência bigint baseada em string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) por @mytharcher
- **[Fluxo de Trabalho: Aprovação]**

  - Usar comparação em vez de lógica implícita para evitar problemas de tipo por @mytharcher
  - Apenas participantes podem visualizar (obter) detalhes da aprovação por @mytharcher
- **[Gerenciador de e-mail]** erro de exclusão de e-mail por @jiannx
