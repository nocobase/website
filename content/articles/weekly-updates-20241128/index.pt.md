---
title: "Atualizações Semanais do NocoBase: Otimizar plugin REST API"
description: "As atualizações desta semana incluem: otimizar plugin REST API, suporte para ativação em massa de plugins na interface e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Data de lançamento: 21/11/2024*

### 🚀 Melhorias

- **[Workflow]**

  - Remover limite de página no nó de consulta ([#5694](https://github.com/nocobase/nocobase/pull/5694)) por @mytharcher
  - Alterar execuções para não serem excluídas quando o workflow for excluído ([#5666](https://github.com/nocobase/nocobase/pull/5666)) por @mytharcher
- **[Fonte de dados: API REST]** Otimizar descrições de texto do plugin de API REST por @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Data de lançamento: 21/11/2024*

### 🐛 Correções de Bugs

- **[build]** Reverter a ferramenta de build do cliente de `rspack` de volta para `vite` para corrigir o problema em que o comando `yarn dev` reporta um erro após executar o comando create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) por @gchust
- **[cliente]** Corrigir problema em que a coluna fixada à direita não se alinha à direita quando há menos colunas ([#5690](https://github.com/nocobase/nocobase/pull/5690)) por @katherinehhh
- **[Mobile]** Corrigir o problema em que o modal 'Atribuir valores de campo' fica obscurecido na página de configuração mobile ([#5701](https://github.com/nocobase/nocobase/pull/5701)) por @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Data de lançamento: 21/11/2024*

### 🐛 Correções de Bugs

- **[cliente]**

  - Remover botão "Sincronizar do Banco de Dados" na visualização de coleção de fonte de dados externa ([#5696](https://github.com/nocobase/nocobase/pull/5696)) por @katherinehhh
  - Adicionar fallback para valor não-string usado em `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) por @mytharcher
- **[Calendário]** Corrigir eventos não exibidos no bloco de calendário quando as datas de início e término abrangem meses ([#5699](https://github.com/nocobase/nocobase/pull/5699)) por @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Data de lançamento: 24/11/2024*

### 🐛 Correções de Bugs

- **[cliente]**
  - Corrigir problema de largura do rótulo para campos de associação em layouts horizontais ([#5709](https://github.com/nocobase/nocobase/pull/5709)) por @katherinehhh
  - Corrigir vinculação de dados de associação em subtabelas aninhadas dentro de subformulário de múltiplas camadas ([#5710](https://github.com/nocobase/nocobase/pull/5710)) por @katherinehhh
  - Corrigir problema de largura do rótulo para campos de associação em layouts horizontais ([#5709](https://github.com/nocobase/nocobase/pull/5709)) por @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Data de lançamento: 26/11/2024*

### 🚀 Melhorias

- **[cliente]** Suportar ativação em massa de plugins na interface ([#5730](https://github.com/nocobase/nocobase/pull/5730)) por @chenos

### 🐛 Correções de Bugs

- **[cliente]** Corrigir problema de largura mínima do rótulo da subtabela no modo horizontal ([#5719](https://github.com/nocobase/nocobase/pull/5719)) por @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Data de lançamento: 27/11/2024*

### 🎉 Novos Recursos

- **[Autenticação]** Permite adicionar mais campos da coleção de usuários no formulário de cadastro ([#5741](https://github.com/nocobase/nocobase/pull/5741)) por @2013xile

### 🐛 Correções de Bugs

- **[cliente]** Corrigir rótulo da opção selecionada não carregado na primeira renderização. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) por @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Data de lançamento: 27/11/2024*

### 🐛 Correções de Bugs

- **[Notificação: Mensagem no aplicativo]** Remover lógica de corte de string do título da mensagem no aplicativo. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) por @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Data de lançamento: 23/11/2024*

### 🐛 Correções de Bugs

- **[build]** Corrigir o problema de execução do `yarn dev` após create-nocobase-app resultar em erro ([#5708](https://github.com/nocobase/nocobase/pull/5708)) por @gchust

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Página Inicial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
