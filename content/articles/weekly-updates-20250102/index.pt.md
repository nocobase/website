---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: otimização do fluxo de trabalho, correções de bugs e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Data de lançamento: 26/12/2024*

#### 🐛 Correções de Bugs

- **[client]** Corrigido problema de conversão de precisão do campo UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) por @chenos
- **[Ação: Duplicar registro]** Corrigido problema em que o campo de associação o2o não exibia o campo de coleção de destino configurado em blocos de detalhes e formulários ([#5921](https://github.com/nocobase/nocobase/pull/5921)) por @katherinehhh
- **[Gerenciador de Backup]** Corrigido erro de backup quando a versão do mysqldump é inferior a 8 por @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Data de lançamento: 31/12/2024*

#### 🎉 Novos Recursos

- **[client]** Suporte ao uso da variável "Registros selecionados da tabela" em campos de array m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) por @2013xile

#### 🚀 Melhorias

- **[undefined]** Plugin de tema habilitado por padrão ([#5957](https://github.com/nocobase/nocobase/pull/5957)) por @zhangzhonghe
- **[Fonte de dados: Principal]** Adicionada validação de conflito de nomes para impedir que usuários criem Coleções com o mesmo nome de Coleções do sistema ([#5962](https://github.com/nocobase/nocobase/pull/5962)) por @chareice
- **[Fluxo de trabalho]** Evitar o uso indevido de variáveis de intervalo de datas na maioria dos lugares, exceto no componente de filtro ([#5954](https://github.com/nocobase/nocobase/pull/5954)) por @mytharcher

#### 🐛 Correções de Bugs

- **[database]**

  - Corrigido um problema na ação destroy onde filterByTk com parâmetro filter não conseguia excluir dados ([#5976](https://github.com/nocobase/nocobase/pull/5976)) por @chareice
  - Os métodos firstOrCreate e updateOrCreate do repositório perdem contexto ([#5973](https://github.com/nocobase/nocobase/pull/5973)) por @chenos
- **[client]**

  - Corrigido problema ao adicionar um campo de relacionamento um-para-um no formulário ([#5975](https://github.com/nocobase/nocobase/pull/5975)) por @katherinehhh
  - Corrigido problema com atribuição de campo em subtabela ao reselecionar dados após excluir dados ([#5958](https://github.com/nocobase/nocobase/pull/5958)) por @katherinehhh
  - Corrigido o erro do bloco de tabela causado por dados contendo campos chamados 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) por @zhangzhonghe
- **[Fonte de dados: Principal]** Corrigidos problemas de suporte legado com o campo unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) por @chareice
- **[Fluxo de trabalho]** Corrigido erro de lançamento do bloco de subdetalhes na configuração da UI do nó manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) por @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Data de lançamento: 27/12/2024*

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigido o problema de exibição inesperada de células de tabela em plugins de terceiros ([#5934](https://github.com/nocobase/nocobase/pull/5934)) por @zhangzhonghe
  - Corrigido o problema em que o botão de excluir estava desabilitado na página de gerenciamento de modelos de bloco ([#5922](https://github.com/nocobase/nocobase/pull/5922)) por @zhangzhonghe
- **[Verificação]** Corrigidos campos de formulário vazios ao abrir a gaveta de edição na página de configurações de Verificação ([#5949](https://github.com/nocobase/nocobase/pull/5949)) por @chenos
- **[Fluxo de trabalho: Evento de ação personalizada]**

  - Corrigida falha em caso de teste no SQLite por @mytharcher
  - Corrigidos casos de teste do gatilho de ação personalizada por @mytharcher
- **[Fluxo de trabalho: Evento de pré-ação]** Corrigidos casos de teste do interceptador de requisições por @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Data de lançamento: 31/12/2024*

#### 🐛 Correções de Bugs

- **[client]**

  - Corrigido seletor de intervalo de datas no formulário/ação de filtro que não mostrava o seletor de hora quando showTime estava definido ([#5956](https://github.com/nocobase/nocobase/pull/5956)) por @katherinehhh
  - Corrigido o problema em que clicar em campos de associação não abria o diálogo popup ([#5972](https://github.com/nocobase/nocobase/pull/5972)) por @zhangzhonghe
- **[Fluxo de trabalho: Mensagem de resposta]** Corrigido nome de parâmetro errado usado por @mytharcher

### v1.5.0-beta.20

*Data de lançamento: 31/12/2024*

#### 🎉 Novos Recursos

- **[[Ação: Importar registros(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Aprimora as capacidades de importação de dados com suporte para importações assíncronas, importação de milhões de registros, identificação e processamento de dados duplicados, atualização de dados e acionamento de fluxos de trabalho.
- **[[Ação: Exportar registros(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Aprimora as capacidades de exportação de dados com suporte para exportações assíncronas, exportação de milhões de registros e exportação de anexos.

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
