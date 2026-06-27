---
title: "Atualizações Semanais do NocoBase: Melhorias de desempenho"
description: "As atualizações desta semana incluem: Otimização do painel de ações e componentes de formulário público para adaptação móvel, e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Data de lançamento: 2024-12-05*

#### 🚀 Melhorias

- **[teste]** Permitir login com nome da função em casos de teste ([#5794](https://github.com/nocobase/nocobase/pull/5794)) por @mytharcher
- **[Notificação: Mensagem no aplicativo]** Atualizar títulos para URLs de detalhes em formulários de mensagem no aplicativo e arquivos de localização ([#5742](https://github.com/nocobase/nocobase/pull/5742)) por @sheldon66

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que o token não é limpo após um usuário sem função encontrar um erro de login e clicar no botão "Entrar com outra conta" ([#5790](https://github.com/nocobase/nocobase/pull/5790)) por @2013xile
  - Perda de cabeçalhos de requisição em requisições silenciosas ([#5795](https://github.com/nocobase/nocobase/pull/5795)) por @chenos
  - Página em branco quando o usuário não tem função ([#5797](https://github.com/nocobase/nocobase/pull/5797)) por @chenos
  - Corrige problema de barra de rolagem em subtabela com tamanho pequeno no tema compacto ([#5796](https://github.com/nocobase/nocobase/pull/5796)) por @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Data de lançamento: 2024-12-08*

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problema com campos de fonte de dados externa não sendo exibidos no bloco de tabela ([#5825](https://github.com/nocobase/nocobase/pull/5825)) por @katherinehhh
  - Corrige problema de exibição para campos herdados na configuração do formulário ([#5822](https://github.com/nocobase/nocobase/pull/5822)) por @katherinehhh
  - Corrige campos herdados que não aparecem na lista de campos e não podem ser sobrescritos ([#5800](https://github.com/nocobase/nocobase/pull/5800)) por @katherinehhh
- **[Visualização de dados]** Corrige o problema ao formatar campos de data com fuso horário no MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) por @2013xile
- **[Fluxo de trabalho]**
  - Corrige transação entre fontes de dados que causa erro de evento de coleção ([#5818](https://github.com/nocobase/nocobase/pull/5818)) por @mytharcher
  - Corrige tipo de data ausente na configuração de agendamento baseada em campo de data ([#5816](https://github.com/nocobase/nocobase/pull/5816)) por @mytharcher
- **[Campo de coleção: Muitos para muitos (array)]** Corrige o problema em que a atualização de campos de array m2m em coleção de relação única não surte efeito ([#5820](https://github.com/nocobase/nocobase/pull/5820)) por @2013xile
- **[Calendário]**
  - Corrige erro ao clicar em uma data em branco no calendário ([#5803](https://github.com/nocobase/nocobase/pull/5803)) por @katherinehhh
  - Corrige o problema em que fechar um pop-up aberto através do 'Bloco de Calendário' faz com que todos os pop-ups fechem ([#5793](https://github.com/nocobase/nocobase/pull/5793)) por @zhangzhonghe
- **[Formulários públicos]** Corrige caminho de escaneamento de código QR incorreto no formulário público de sub-aplicação ([#5799](https://github.com/nocobase/nocobase/pull/5799)) por @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Data de lançamento: 2024-12-08*

#### 🐛 Correções de Bugs

- **[Controle de acesso]** Atualizar a página quando a função do usuário estiver incorreta ([#5821](https://github.com/nocobase/nocobase/pull/5821)) por @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Data de lançamento: 2024-12-08*

#### 🐛 Correções de Bugs

- **[Ação: Importar registros]** corrige importação de dados com tabela em associações ([#5833](https://github.com/nocobase/nocobase/pull/5833)) por @chareice
- **[Controle de acesso]** Corrige o problema de usar campos para consultar o relacionamento no ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) por @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Data de lançamento: 2024-12-09*

#### 🐛 Correções de Bugs

- **[Mobile]** Corrige problema de exibição da cor de fundo no mobile ([#5809](https://github.com/nocobase/nocobase/pull/5809)) por @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Data de lançamento: 2024-12-10*

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige problema de template de dados no formulário de filtro configurado no seletor de registro de campo de associação ([#5837](https://github.com/nocobase/nocobase/pull/5837)) por @katherinehhh
  - Corrige problema com templates de string Markdown não carregando dados de dados de associação (Fonte de dados externa) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) por @katherinehhh
- **[Sincronização de dados do usuário]** Pular tipos de dados não suportados durante a sincronização em vez de lançar um erro. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) por @chenzhizdt
- **[Gerenciador de backup]**
  - Corrigido pop-up lento da janela de download para arquivos de backup grandes por @gchust
  - Corrigido o problema em que restaurar um backup de sub-aplicação faz com que todas as aplicações reiniciem por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Data de lançamento: 2024-12-06*

#### 🚀 Melhorias

- **[cliente]** Otimizar lógica recursiva em useMenuSearch para melhor desempenho ([#5784](https://github.com/nocobase/nocobase/pull/5784)) por @katherinehhh
- **[Formulários públicos]** Otimizar painel de ação e componentes de formulário público para adaptação mobile ([#5788](https://github.com/nocobase/nocobase/pull/5788)) por @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Data de lançamento: 2024-12-10*

#### 🎉 Novos Recursos

- **[cliente]** Suporte à configuração de texto, ícone e tipo para botões adicionar e selecionar em subtabela ([#5778](https://github.com/nocobase/nocobase/pull/5778)) por @katherinehhh
- **[Calendário]** Plugin de calendário adiciona modo de abertura de evento ([#5808](https://github.com/nocobase/nocobase/pull/5808)) por @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Data de lançamento: 2024-12-11*

#### 🐛 Correções de Bugs

- **[Mobile]** Corrige adaptação mobile do componente de data na sub-página ([#5859](https://github.com/nocobase/nocobase/pull/5859)) por @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Data de lançamento: 2024-12-11*

#### 🚀 Melhorias

- **[cliente]** Remover componente de esqueleto de linha de tabela ([#5751](https://github.com/nocobase/nocobase/pull/5751)) por @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Data de lançamento: 2024-12-09*

#### 🚀 Melhorias

- **[cliente]** Remover componentes Formily da tabela para melhorar o desempenho ao alternar a paginação da tabela ([#5738](https://github.com/nocobase/nocobase/pull/5738)) por @zhangzhonghe

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que os campos não são exibidos após adicioná-los em um subformulário ([#5827](https://github.com/nocobase/nocobase/pull/5827)) por @zhangzhonghe
  - Corrige o problema em que alterar o valor de um campo de associação no bloco de detalhes não é atualizado imediatamente ([#5826](https://github.com/nocobase/nocobase/pull/5826)) por @zhangzhonghe
  - Corrige o problema em que clicar em links não abre um pop-up quando 'Ativar link' está ativado pela primeira vez ([#5812](https://github.com/nocobase/nocobase/pull/5812)) por @zhangzhonghe
  - Prevenir múltiplas chamadas de API ao fechar o pop-up ([#5804](https://github.com/nocobase/nocobase/pull/5804)) por @zhangzhonghe
  - Corrige o problema em que o login mobile redireciona para a página desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) por @zhangzhonghe
  - Corrige botão de ação de configuração que deve estar alinhado à esquerda ([#5798](https://github.com/nocobase/nocobase/pull/5798)) por @katherinehhh
- **[build]** Corrigido cache incorreto de arquivos js do frontend após a construção do plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) por @gchust

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obter NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
