---
title: "Atualizações Semanais do NocoBase: Otimizações e Correções de Bugs"
description: "As atualizações desta semana incluem: permitir a revisão de mais de um rascunho, adicionar mais configurações de tamanho integradas para imagens de status de leitura e outras melhorias."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Data de lançamento: 2025-05-09*

#### 🐛 Correções de Bugs

- **[database]** Falha na importação devido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
- **[client]** Os campos ocultos ainda são exibidos ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
- **[Ação: Exportar registros]** Corrige o erro ao exportar textos longos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Fluxo de trabalho: Evento pós-ação]** Corrige variável de usuário atuado não acessível no template Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[Bloco: Painel de ações]** A cor do Painel de ações está incorreta no modo escuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Ação: Exportar registros Pro]** Corrige o erro ao exportar textos longos. por @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Data de lançamento: 2025-05-13*

#### 🚀 Melhorias

- **[Fluxo de trabalho]** Permitir revisão de mais de um rascunho ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Ação: Exportar registros]** Corrigida a exportação de valores vazios em associações aninhadas e url de anexo ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
- **[Fluxo de trabalho: Nó manual]** Corrige contagem de números de estatísticas errada em tarefas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Fluxo de trabalho: kit de teste]** Corrige casos de teste com falha devido ao plugin de pré-configuração necessário ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Visualização de dados]** Corrige erro ao filtrar campos m2m aninhados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Fluxo de trabalho: Subfluxo]** Corrige gatilho indefinido causando travamento da página por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]** expiração da url de acesso inválida por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige contagem de números de estatísticas errada em tarefas por @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Data de lançamento: 2025-05-15*

#### 🚀 Melhorias

- **[client]** adiciona mais configurações de tamanho embutidas para imagem de status de leitura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[Gerenciador de arquivos]**

  - Corrige tipos ([#6873](https://github.com/nocobase/nocobase/pull/6873)) por @mytharcher
  - Corrige criação de registro de arquivo sem permissão de chave estrangeira ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Ação: Exportar registros]** melhora o desempenho ao excluir campos nas configurações de campo de importação/exportação ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
- **[Visualização de dados]** Blocos de gráfico não são exibidos quando adicionados a popups acionados por ações em nível de bloco ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
- **[Ação: Exportar registros Pro]** melhora o desempenho ao excluir campos nas configurações de campo de importação/exportação pro por @katherinehhh
- **[Armazenamento de arquivos: S3(Pro)]]** Altera para usar campo de coleção para localizar armazenamento por @mytharcher
- **[Gerenciador de backup]** Corrige erro de tipo na compilação por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Data de lançamento: 2025-05-15*

#### 🎉 Novos Recursos

- **[client]** regra de vinculação de ação suporta variáveis do 'formulário atual' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) por @katherinehhh
- **[undefined]** Adiciona o log do plugin de importação por @aaaaaajie
- **[Ação: Importar registros]** Adiciona o log do plugin de importação ([#6841](https://github.com/nocobase/nocobase/pull/6841)) por @aaaaaajie

#### 🚀 Melhorias

- **[client]** adiciona mais configurações de tamanho embutidas para imagem de status de leitura ([#6868](https://github.com/nocobase/nocobase/pull/6868)) por @katherinehhh
- **[Campo de coleção: Anexo(URL)]** adiciona mais tamanhos embutidos ao campo de URL de anexo para status de leitura ([#6871](https://github.com/nocobase/nocobase/pull/6871)) por @katherinehhh
- **[Fluxo de trabalho]** Permitir revisão de mais de um rascunho ([#6851](https://github.com/nocobase/nocobase/pull/6851)) por @mytharcher

#### 🐛 Correções de Bugs

- **[client]**

  - problema de vinculação de botão no bloco de detalhes ([#6867](https://github.com/nocobase/nocobase/pull/6867)) por @katherinehhh
  - limpa o valor do lado direito quando o operador muda na regra de vinculação ([#6862](https://github.com/nocobase/nocobase/pull/6862)) por @katherinehhh
  - avaliação incorreta de operadores para variáveis de data em condições de vinculação ([#6825](https://github.com/nocobase/nocobase/pull/6825)) por @katherinehhh
  - operador ausente ao alternar nas regras de vinculação ([#6857](https://github.com/nocobase/nocobase/pull/6857)) por @katherinehhh
  - incompatibilidade de análise de variável com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - melhoria no estilo do componente de valor da regra de vinculação ([#6836](https://github.com/nocobase/nocobase/pull/6836)) por @katherinehhh
  - incompatibilidade de análise de variável com dados {{title}} na confirmação secundária ([#6838](https://github.com/nocobase/nocobase/pull/6838)) por @katherinehhh
  - Os campos ocultos ainda são exibidos ([#6844](https://github.com/nocobase/nocobase/pull/6844)) por @zhangzhonghe
- **[database]** Falha na importação devido a valores de campo de texto. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) por @aaaaaajie
- **[Visualização de dados]**

  - Blocos de gráfico não são exibidos quando adicionados a popups acionados por ações em nível de bloco ([#6864](https://github.com/nocobase/nocobase/pull/6864)) por @2013xile
  - Corrige erro ao filtrar campos m2m aninhados ([#6855](https://github.com/nocobase/nocobase/pull/6855)) por @2013xile
- **[Ação: Exportar registros]**

  - melhora o desempenho ao excluir campos nas configurações de campo de importação/exportação ([#6861](https://github.com/nocobase/nocobase/pull/6861)) por @katherinehhh
  - Corrigida a exportação de valores vazios em associações aninhadas e url de anexo ([#6845](https://github.com/nocobase/nocobase/pull/6845)) por @aaaaaajie
  - Corrige o erro ao exportar textos longos. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) por @aaaaaajie
- **[Gerenciador de arquivos]** Corrige criação de registro de arquivo sem permissão de chave estrangeira ([#6863](https://github.com/nocobase/nocobase/pull/6863)) por @mytharcher
- **[Fluxo de trabalho]** Corrige navegação de volta não funcionando ao abrir link de popup diretamente no centro de tarefas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) por @mytharcher
- **[Ação: Duplicar registro]** modal fecha no primeiro clique de entrada ao editar dados duplicados ([#6848](https://github.com/nocobase/nocobase/pull/6848)) por @katherinehhh
- **[Bloco: template]** Após salvar como um template herdado, erro ao abrir o popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) por @gchust
- **[Fluxo de trabalho: kit de teste]** Corrige casos de teste com falha devido ao plugin de pré-configuração necessário ([#6839](https://github.com/nocobase/nocobase/pull/6839)) por @mytharcher
- **[Fluxo de trabalho: Evento pós-ação]** Corrige variável de usuário atuado não acessível no template Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) por @mytharcher
- **[Fluxo de trabalho: Nó manual]** Corrige contagem de números de estatísticas errada em tarefas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) por @mytharcher
- **[Bloco: Painel de ações]** A cor do Painel de ações está incorreta no modo escuro ([#6842](https://github.com/nocobase/nocobase/pull/6842)) por @zhangzhonghe
- **[Ação: Exportar registros Pro]**

  - melhora o desempenho ao excluir campos nas configurações de campo de importação/exportação pro por @katherinehhh
  - Corrige o erro ao exportar textos longos. por @aaaaaajie
- **[Fluxo de trabalho: Subfluxo]** Corrige gatilho indefinido causando travamento da página por @mytharcher
- **[Impressão de template]**

  - Corrige problema de formatadores não encontrados. por @sheldon66
  - Corrige formatador não encontrado por @sheldon66
- **[Armazenamento de arquivos: S3(Pro)]**

  - Altera para usar campo de coleção para localizar armazenamento por @mytharcher
  - expiração da url de acesso inválida por @jiannx
- **[Fluxo de trabalho: Aprovação]** Corrige contagem de números de estatísticas errada em tarefas por @mytharcher
