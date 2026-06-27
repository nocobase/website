---
title: "Atualizações Semanais do NocoBase: Suporte a Regras de Vinculação no Bloco de Detalhes"
description: "As atualizações desta semana incluem: suporte a regras de vinculação no bloco de detalhes para ocultar (valor reservado) e mais."
---

Resuma os logs de atualização semanais do produto. As versões mais recentes podem ser conferidas em [nosso blog](https://www.nocobase.com/en/blog/tags/release-notes).

**O NocoBase é atualmente atualizado com três branches: `main`, `next` e `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: A versão mais estável até o momento, recomendada para instalação;
* `next`: Versão beta, contém novos recursos futuros e foi testada preliminarmente. Pode haver alguns problemas conhecidos ou desconhecidos. É destinada principalmente a usuários de teste para coletar feedback e otimizar ainda mais as funções. Ideal para usuários de teste que desejam experimentar novos recursos antecipadamente e dar feedback;
* `develop`: Versão alfa, contém o código de recurso mais recente, pode estar incompleta ou instável, destinada principalmente ao desenvolvimento interno e iteração rápida. Adequada para usuários técnicos interessados no que há de mais moderno no produto, mas com possíveis problemas e funções incompletas. Não é para uso em produção.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Data de lançamento: 2025-01-10*

#### 🚀 Melhorias

- **[cliente]** Suporte a regras de vinculação no bloco de detalhes para ocultar (valor reservado) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige caminho público ausente nos caminhos de arquivos de ícones ([#6034](https://github.com/nocobase/nocobase/pull/6034)) por @chenos
  - Corrige o problema em que as regras de vinculação de formulário falham quando dependem de valores de campo de subtabelas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe
  - Corrige campo incorreto da variável 'Registro atual' em subdetalhes ([#6030](https://github.com/nocobase/nocobase/pull/6030)) por @zhangzhonghe
- **[Gerenciador de backup]** Corrige falha no download de backup quando o env API_BASE_PATH não é /api por @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Data de lançamento: 2025-01-11*

#### 🚀 Melhorias

- **[avaliadores]** Atualiza a versão da biblioteca formula.js para 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) por @mytharcher
- **[Workflow]** Corrige a API de logger do plugin de workflow ([#6036](https://github.com/nocobase/nocobase/pull/6036)) por @mytharcher

#### 🐛 Correções de Bugs

- **[Workflow]** Adiciona lógica defensiva para evitar disparo duplicado ([#6022](https://github.com/nocobase/nocobase/pull/6022)) por @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Data de lançamento: 2025-01-13*

#### 🐛 Correções de Bugs

- **[cliente]** Corrige o problema em que a coluna de ações fixas não funciona corretamente em tabelas ([#6048](https://github.com/nocobase/nocobase/pull/6048)) por @zhangzhonghe
- **[Usuários]** Desabilita o preenchimento automático do navegador ao definir senhas para usuários no gerenciamento de usuários ([#6041](https://github.com/nocobase/nocobase/pull/6041)) por @2013xile
- **[Workflow]** Corrige o evento agendado baseado em campo de data que não dispara após a inicialização do aplicativo ([#6042](https://github.com/nocobase/nocobase/pull/6042)) por @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Data de lançamento: 2025-01-14*

#### 🚀 Melhorias

- **[cliente]** Componente datePicker com entrada somente leitura ([#6061](https://github.com/nocobase/nocobase/pull/6061)) por @Cyx649312038

#### 🐛 Correções de Bugs

- **[cliente]**

  - Corrige carregamento incorreto de campos de associação modal no bloco de tabela ([#6060](https://github.com/nocobase/nocobase/pull/6060)) por @katherinehhh
  - Corrige problema de estilo em subtabela no bloco de detalhes ([#6049](https://github.com/nocobase/nocobase/pull/6049)) por @katherinehhh
  - Corrige a formatação do campo numérico no modo readPretty afetando o modo de edição ([#6050](https://github.com/nocobase/nocobase/pull/6050)) por @katherinehhh
  - Corrige problema de estilo no cabeçalho da célula da tabela no ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) por @katherinehhh
- **[banco de dados]** Corrige um problema ao inicializar o campo de ordenação com chave primária ([#6059](https://github.com/nocobase/nocobase/pull/6059)) por @chareice
- **[Visualização de dados]** Remove a cláusula `LIMIT` ao usar funções agregadas sem definir dimensões em consultas de gráfico ([#6062](https://github.com/nocobase/nocobase/pull/6062)) por @2013xile
- **[Gerenciador de backup]** Corrige erro de download de backup para usuários logados apenas no sub-aplicativo por @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Data de lançamento: 2025-01-10*

#### 🚀 Melhorias

- **[cliente]** Remove regras de vinculação do botão Associar ([#6016](https://github.com/nocobase/nocobase/pull/6016)) por @katherinehhh

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que as regras de vinculação de formulário falham quando dependem de valores de campo de subtabelas ([#5876](https://github.com/nocobase/nocobase/pull/5876)) por @zhangzhonghe
  - Continua renderizando a página após a conclusão da solicitação de verificação de autenticação ([#6020](https://github.com/nocobase/nocobase/pull/6020)) por @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Data de lançamento: 2025-01-14*

#### 🐛 Correções de Bugs

- **[cliente]**
  - Corrige o problema em que as atribuições de campo para botões de formulário em nós manuais de workflow são inválidas ([#6054](https://github.com/nocobase/nocobase/pull/6054)) por @zhangzhonghe
  - Corrige a variável de popup atual ausente no modal de link de campo habilitado ([#6045](https://github.com/nocobase/nocobase/pull/6045)) por @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Data de lançamento: 2025-01-09*

#### 🎉 Novos Recursos

- **[cliente]** Adiciona schemaSetting para mostrar o nome do arquivo para anexos ([#5995](https://github.com/nocobase/nocobase/pull/5995)) por @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Data de lançamento: 2025-01-14*

#### 🚀 Melhorias

- **[Workflow: Cálculo JSON]** Altera o nome do nó de consulta JSON para Cálculo JSON por @mytharcher

#### 🐛 Correções de Bugs

- **[Workflow]** Corrige o tipo de valor para o componente DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) por @mytharcher

## Sobre o NocoBase

NocoBase é uma plataforma privada, de código aberto e sem código, que oferece controle total e escalabilidade infinita. Ela capacita as equipes a se adaptarem rapidamente às mudanças, reduzindo significativamente os custos. Evite anos de desenvolvimento e investimento substancial implantando o NocoBase em minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Descubra o NocoBase em 3 Minutos!

## 👇 Obtenha o NocoBase

[**Site Oficial**](https://www.nocobase.com/)

[**Demonstração**](https://demo.nocobase.com/new)

[**Documentação**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
