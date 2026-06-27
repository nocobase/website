---
title: "Atualizações Semanais do NocoBase: Otimização e Correções de Bugs"
description: "As atualizações desta semana incluem: suporte ao uso de um título de tarefa consistente para todos os nós de aprovação no mesmo fluxo de trabalho, impressão de modelo suportando array muitos-para-muitos e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/timeline).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É principalmente para usuários de teste coletarem feedback e otimizarem ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, principalmente para desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é recomendada para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Data de lançamento: 2025-08-19*

#### 🚀 Melhorias

- **[Workflow]** Menu de seleção de nós atualizado para exibir opções em um layout de duas colunas, melhorando a densidade de informações e permitindo que os usuários vejam mais opções de uma só vez ([#7396](https://github.com/nocobase/nocobase/pull/7396)) por @mytharcher
- **[Configurações de licença]** Nas configurações de licença, copiar o ID da instância mais recente a cada vez ([#7387](https://github.com/nocobase/nocobase/pull/7387)) por @jiannx

#### 🐛 Correções de bugs

- **[client]**

  - tratar o número 0 como vazio durante a validação de vazio da regra de vinculação ([#7404](https://github.com/nocobase/nocobase/pull/7404)) por @katherinehhh
  - Corrigir a quebra de linha do texto do botão de link ([#7406](https://github.com/nocobase/nocobase/pull/7406)) por @mytharcher
- **[Mobile]** formato de exibição incorreto do campo de data no mobile ([#7412](https://github.com/nocobase/nocobase/pull/7412)) por @katherinehhh
- **[Visualizador de arquivos do Office]** Corrigir erro gerado ao enviar arquivo para o campo de URL de anexo ([#7405](https://github.com/nocobase/nocobase/pull/7405)) por @mytharcher
- **[Workflow]** Corrigir erro gerado e dados do formulário desaparecidos ao editar categoria do workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) por @mytharcher
- **[Workflow: nó de e-mail]** Corrigir o problema em que o nó de e-mail pode não retomar a execução corretamente ([#7409](https://github.com/nocobase/nocobase/pull/7409)) por @mytharcher
- **[Workflow: evento de ação personalizada]** Limpar as linhas selecionadas após acionar ações com sucesso em vários registros por @mytharcher
- **[Impressão de modelo]** Impressão de campos de seleção de rádio em várias linhas de dados por @jiannx
- **[Workflow: Aprovação]** Corrigir o problema em que o carregamento de dados de fonte de dados externa em registros de aprovação resultava em um erro 404 por @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Data de lançamento: 2025-08-15*

#### 🎉 Novos recursos

- **[Workflow: Aprovação]** Suporte para usar um título de tarefa consistente para todos os nós de aprovação no mesmo workflow por @mytharcher

#### 🚀 Melhorias

- **[Autenticação]** Removido o parâmetro de token da URL após um login bem-sucedido ([#7386](https://github.com/nocobase/nocobase/pull/7386)) por @2013xile
- **[Impressão de modelo]** suporte para campo m2m array por @jiannx

#### 🐛 Correções de bugs

- **[Mobile]** Corrigir o problema em que os dados de envio do formulário no diálogo de aprovação mobile estão incorretos ([#7389](https://github.com/nocobase/nocobase/pull/7389)) por @zhangzhonghe
- **[Workflow]** Corrigir a tradução do título da página no centro de tarefas do workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) por @mytharcher
- **[Calendário]** dica de ferramenta do item de evento do calendário mostrando [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) por @katherinehhh
- **[Notificação: Mensagem no aplicativo]** Corrigir traduções ([#7384](https://github.com/nocobase/nocobase/pull/7384)) por @mytharcher
- **[Gerenciador de arquivos]** Remover a dica para o limite de tamanho de upload de arquivo ([#7391](https://github.com/nocobase/nocobase/pull/7391)) por @mytharcher
- **[Armazenamento de arquivos: S3(Pro)]**

  - Descontinuar o parâmetro problemático `attachmentField` por @mytharcher
  - Corrigir o problema em que o método de autenticação IAM não podia ser usado para fazer upload de arquivos por @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Data de lançamento: 2025-08-14*

#### 🚀 Melhorias

- **[Notificação: Mensagem no aplicativo]** Remover logs SQL emitidos via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) por @2013xile

#### 🐛 Correções de bugs

- **[servidor]** Algumas requisições não possuem `ctx.action`, causando erros no middleware de log de auditoria ([#7369](https://github.com/nocobase/nocobase/pull/7369)) por @2013xile
- **[Campo de coleção: Fórmula]** Corrigir o problema em que a entrada de fórmula não passava na validação devido ao tipo de variável ([#7373](https://github.com/nocobase/nocobase/pull/7373)) por @mytharcher
- **[Gerenciador de backup]** backups de arquivos grandes podiam mostrar "bem-sucedido" antes de realmente terminar por @gchust
