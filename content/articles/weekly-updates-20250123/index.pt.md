---
title: "Atualizações Semanais do NocoBase: Melhorando a Extensibilidade do Armazenamento de Arquivos"
description: "As atualizações desta semana incluem: melhoria na extensibilidade do armazenamento de arquivos, correções de bugs e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Data de lançamento: 2025-01-16*

#### 🚀 Melhorias

- **[client]** Melhora a extensibilidade do armazenamento de arquivos ([#6071](https://github.com/nocobase/nocobase/pull/6071)) por @chenos
- **[Workflow]** Corrige o componente de campo repetido na configuração de agendamento ([#6067](https://github.com/nocobase/nocobase/pull/6067)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Mobile]** Corrige o problema dos botões inferiores ficarem ocultos em dispositivos móveis ([#6068](https://github.com/nocobase/nocobase/pull/6068)) por @zhangzhonghe
- **[Workflow: Evento de ação personalizada]** Corrige o contexto para coleção http por @mytharcher
- **[Gerenciador de backup]** Corrige um possível erro de backup quando o plugin collection-fdw não está habilitado por @gchust
- **[Departamentos]** Corrige a impossibilidade de acionar o evento de ação personalizada na coleção de departamentos por @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Data de lançamento: 2025-01-16*

#### 🚀 Melhorias

- **[client]** Permite adicionar descrições para coleções SQL ([#6081](https://github.com/nocobase/nocobase/pull/6081)) por @2013xile
- **[resourcer]** Permite objeto vazio como valores em ação ([#6070](https://github.com/nocobase/nocobase/pull/6070)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Localização]** Evita requisição à API ao tentar excluir uma tradução vazia ([#6078](https://github.com/nocobase/nocobase/pull/6078)) por @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Data de lançamento: 2025-01-18*

#### 🐛 Correções de Bugs

- **[client]** Corrige o problema onde os dados do bloco estão vazios na janela pop-up na página incorporada ([#6086](https://github.com/nocobase/nocobase/pull/6086)) por @zhangzhonghe
- **[Workflow]** Corrige o despacho que não processa na fase de preparação ([#6087](https://github.com/nocobase/nocobase/pull/6087)) por @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Data de lançamento: 2025-01-21*

#### 🐛 Correções de Bugs

- **[client]** O valor padrão do campo de associação não foi atualizado ([#6103](https://github.com/nocobase/nocobase/pull/6103)) por @chenos
- **[Ação: Editar em lote]** Remove o modelo de dados do formulário das configurações do formulário de ação de edição em lote ([#6098](https://github.com/nocobase/nocobase/pull/6098)) por @katherinehhh
- **[Verificação]** Corrige a possibilidade de editar o ID do provedor ([#6097](https://github.com/nocobase/nocobase/pull/6097)) por @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Data de lançamento: 2025-01-21*

#### 🎉 Novos Recursos

- **[Bloco: Painel de ações]** Suporta configurar o número de ícones por linha no painel de ações móvel ([#6106](https://github.com/nocobase/nocobase/pull/6106)) por @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Data de lançamento: 2025-01-16*

#### 🚀 Melhorias

- **[Gerenciador de backup]** Mensagens de erro melhoradas para falhas de restauração por @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Data de lançamento: 2025-01-16*

#### 🐛 Correções de Bugs

- **[client]** Corrige o problema onde os valores padrão para campos de associação não estão surtindo efeito no modo de Leitura Fácil ([#6066](https://github.com/nocobase/nocobase/pull/6066)) por @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Data de lançamento: 2025-01-17*

#### 🐛 Correções de Bugs

- **[Sincronização de dados do usuário]** Corrige o problema onde o botão "repetir" não é exibido na lista de tarefas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) por @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Data de lançamento: 2025-01-17*

#### 🚀 Melhorias

- **[Workflow]** Altera o nome da API para nomes mais razoáveis ([#6082](https://github.com/nocobase/nocobase/pull/6082)) por @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Data de lançamento: 2025-01-21*

#### 🎉 Novos Recursos

- **[Workflow]** Adiciona configuração de limite de pilha para workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) por @citlalinda

#### 🚀 Melhorias

- **[Workflow: Nó de loop]** Corrige estilos ([#6095](https://github.com/nocobase/nocobase/pull/6095)) por @mytharcher
- **[Gerenciador de arquivos]** Suporte para outros plugins de armazenamento ([#6096](https://github.com/nocobase/nocobase/pull/6096)) por @jiannx
  Referência: [Armazenamento de Arquivos: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: kit de teste]** Ajusta o estilo da tela do workflow para tornar o conteúdo mais compacto ([#6088](https://github.com/nocobase/nocobase/pull/6088)) por @mytharcher
- **[Workflow: Nó de consulta JSON]** Adiciona ícone aos nós por @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Data de lançamento: 2025-01-19*

#### 🎉 Novos Recursos

- **[client]** Suporta a configuração da propriedade de descrição no bloco ([#6015](https://github.com/nocobase/nocobase/pull/6015)) por @katherinehhh
- **[Autenticação]** Suporta configuração de segurança de token. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) por @sheldon66
  Referência: [Política de segurança de token](https://docs.nocobase.com/handbook/token-policy)
- **[Workflow: Nó manual]** Adiciona coluna de título da tarefa no bloco de tarefas ([#6051](https://github.com/nocobase/nocobase/pull/6051)) por @mytharcher

#### 🚀 Melhorias

- **[Workflow: Evento de ação personalizada]** Altera a API de execução manual por @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Data de lançamento: 2025-01-19*

#### 🎉 Novos Recursos

- **[Bloco: Painel de ações]** Suporta configurar o número de ícones por linha no painel de ações móvel ([#6046](https://github.com/nocobase/nocobase/pull/6046)) por @katherinehhh

## Sobre o NocoBase

O NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ele capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
