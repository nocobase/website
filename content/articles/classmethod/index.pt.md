---
title: "Além das Planilhas: Gerenciamento de Dados de Funcionários da Classmethod com NocoBase"
description: "A Classmethod construiu um sistema centralizado de gerenciamento de informações de funcionários com o NocoBase, superando as planilhas para alcançar operações estruturadas e escaláveis — transformando a experiência interna em valor para o cliente."
---

## Introdução

Ao abandonar as planilhas, a [Classmethod](https://classmethod.jp/) utilizou o NocoBase para criar uma plataforma de gerenciamento de informações de funcionários com estrutura clara e controles de acesso flexíveis.

Este sistema não apenas simplificou suas operações internas, mas também as capacitará a entregar soluções técnicas mais eficazes para seus clientes.

![Classmethod.PNG](https://static-docs.nocobase.com/Classmethod-o0zgj9.PNG)

## Sobre a Classmethod

A [Classmethod](https://classmethod.jp/) Inc. é uma das principais provedoras de serviços de TI do Japão, mais conhecida por seu suporte abrangente à AWS — incluindo otimização de custos, segurança, implementação e operações contínuas.

Além da AWS, a Classmethod também oferece serviços em adoção de nuvem, infraestrutura de dados, soluções de IA generativa, desenvolvimento de aplicativos e integração SaaS, trabalhando com grandes plataformas como Google Cloud, Cloudflare, Informatica e Snowflake.

Muitos desenvolvedores podem conhecer a Classmethod por seu conhecido site de mídia tech, o [DevelopersIO](https://dev.classmethod.jp/). Fiel à sua reputação, a equipe é altamente técnica, ágil e orientada à execução.

## O Desafio do Gerenciamento de Informações: Quando o Excel Simplesmente Não é Suficiente

À medida que o negócio da Classmethod cresceu, sua estrutura de equipe se tornou cada vez mais complexa — agora com cerca de 500 funcionários no Japão e mais de 850 em todo o grupo. A força de trabalho inclui não apenas funcionários em tempo integral, mas também colaboradores de meio período, parceiros de trabalho paralelo, prestadores de serviços e parceiros, espalhados pelo Japão e exterior.

Com esse crescimento, a Classmethod começou a buscar melhores maneiras de gerenciar sua organização:

1. Como gerenciar funcionários em diferentes países e tipos de contratação com um único padrão unificado?
2. Como automatizar processos como integração, desligamento ou transferências internas — abrangendo entrada de dados, permissões de acesso e notificações?
3. Como a empresa pode rastrear centralmente as certificações, experiências profissionais e registros de treinamento de todos para apoiar atribuições de trabalho mais inteligentes, desenvolvimento de talentos e contratações?
4. Como o gerenciamento sistemático pode não apenas aumentar a eficiência operacional, mas também fornecer a engenheiros juniores experiência real em operações e desenvolvimento — mantendo os custos do sistema sob controle?

Agora, imagine tentar lidar com tudo isso usando apenas Excel ou Google Sheets. É fácil ver como os problemas se acumulariam rapidamente. Na verdade, esses são exatamente os pontos de dor que a equipe da Classmethod enfrentou em primeira mão:

| **Gerenciando com Excel e Google Sheets**                              | Principais Desafios                                                                                                           |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ⚠️ Registros de licenças de software eram mantidos no Excel          | ❌ As atribuições de licenças eram frequentemente imprecisas — contas não utilizadas ainda tinham licenças ativas              |
| ⚠️ Cada departamento geria sua própria planilha do Google             | ❌ As auditorias se tornaram lentas e onerosas tanto para usuários quanto para TI                                              |
| ⚠️ Permissões de acesso a dados eram rastreadas em planilhas separadas | ❌ Definições de dados inconsistentes dificultavam o compartilhamento e gerenciamento de informações, e as permissões eram fáceis de errar |
| ⚠️ Informações complexas precisavam ser verificadas manualmente com PROCV | ❌ Encontrar informações entre departamentos era difícil, retardando os fluxos de trabalho                                      |
| ⚠️ Cada integração, transferência ou desligamento exigia atualizações manuais | ❌ A integração podia levar até 10 dias úteis, criando uma experiência ruim para novos contratados                            |

Mais importante ainda, à medida que a equipe crescia e os processos se tornavam mais complexos, esses problemas só pioravam. Sem um sistema centralizado e automatizado, a carga sobre a equipe administrativa aumentava — e toda a organização sofria com respostas mais lentas e dados menos confiáveis.

É por isso que a Classmethod decidiu buscar uma solução mais sistemática e flexível: uma que pudesse centralizar o gerenciamento de dados, suportar configurações específicas de negócios e permitir automação ao longo do tempo.

## Processo de Seleção do Sistema

Quando a Classmethod decidiu ir além das planilhas, a equipe avaliou uma variedade de ferramentas, incluindo Airtable e NocoDB. Essas soluções se destacaram por sua facilidade de uso, interfaces intuitivas e algum nível de extensibilidade. No final, porém, a equipe escolheu o NocoBase por algumas razões claras: ele oferecia a flexibilidade, o controle e o alinhamento com as necessidades da Classmethod que outras ferramentas não conseguiam igualar.

Aqui está o que foi mais importante em sua decisão:

**1. Implantação flexível e de código aberto**

Como uma empresa orientada por tecnologia, a Classmethod prefere executar sistemas críticos em seu próprio ambiente AWS para atender aos requisitos de segurança e conformidade. O NocoBase é totalmente de código aberto e implantável em qualquer lugar, sem restrições de SaaS.

**2. Sem taxas por usuário — ideal para "muitos visualizadores, poucos editores"**

Embora apenas um pequeno grupo insira dados, muitos departamentos precisam de acesso. Com preços por usuário, os custos aumentariam rapidamente. O modelo de código aberto do NocoBase evita esse problema completamente.

**3. Controle de acesso granular**

O NocoBase suporta configurações de visibilidade em nível de registro e campo para diferentes usuários — essencial para acesso seguro e hierárquico a dados em um sistema de gerenciamento de funcionários.

**4. Separação da interface do usuário e estrutura de dados para interfaces personalizadas**

Diferentes equipes precisam ver informações diferentes. Com o NocoBase, a interface do usuário e o modelo de dados são configurados independentemente, facilitando a criação de interfaces flexíveis e personalizadas.

**5. Mecanismo de fluxo de trabalho integrado — sem necessidade de automação externa**

A lógica de negócios, como criar automaticamente contas para novos contratados ou revogar permissões temporárias, pode ser tratada inteiramente com fluxos de trabalho integrados, sem necessidade de ferramentas de automação de terceiros ou scripts personalizados.

**6. Geração automática de API para fácil integração**

Cada nova coleção de dados no NocoBase vem com APIs geradas automaticamente, facilitando muito para as equipes de engenharia automatizarem scripts e sincronizarem dados.

Em resumo, o NocoBase pode não ter a lista de recursos mais longa, mas entrega exatamente o que a Classmethod mais precisa: segurança, autonomia, flexibilidade e controle total sobre desenvolvimento e operações.

## NocoBase em Ação: Impacto Inicial

Assim que o plano foi definido, a Classmethod rapidamente implantou e modelou seus dados com o NocoBase. A equipe de engenharia implementou o NocoBase em seu próprio ambiente AWS e configurou coleções de dados principais refletindo a organização — abrangendo funcionários, departamentos, licenças de software, ativos da empresa, contas de sistema (como Slack e GitHub) e certificações. Usuários de negócios também podiam atualizar campos e ajustar o layout da interface conforme necessário.

Os dados iniciais foram importados via CSV, e as atualizações futuras foram automatizadas usando scripts Python e as APIs geradas automaticamente pelo NocoBase. Ao vincular todos os dados por meio de campos relacionais, a equipe alcançou um gerenciamento de informações verdadeiramente estruturado.

Após a implantação, o novo sistema gerou grandes ganhos de eficiência:

* Os dados não estavam mais espalhados por planilhas de diferentes departamentos, o que reduziu bastante os problemas de sincronização e conflitos de versão
* O gerenciamento de licenças SaaS foi automatizado, tornando as auditorias de TI muito mais eficientes
* Tarefas como revogar permissões temporárias, confirmar atribuições de dispositivos e enviar alertas de expiração foram cada vez mais automatizadas
* As equipes de negócios podiam ajustar campos e interfaces por conta própria — sem mais esperar por engenheiros, e a manutenção se tornou muito mais leve
* Os dados de talentos (certificações, treinamento, experiência) agora eram estruturados, facilitando o gerenciamento de transferências internas e contratações

![Gerenciamento de Funcionários.png](https://static-docs.nocobase.com/image_1-93c06z.png)

![Gerenciamento de Funcionários2.png](https://static-docs.nocobase.com/image_2-i5s50v.png)

Mais importante ainda, este novo sistema prepara o terreno para o crescimento futuro. Seja integrando novos sistemas, expandindo fluxos de trabalho ou adicionando capacidades de IA, o NocoBase oferece a flexibilidade e o poder técnico que a Classmethod precisa para continuar evoluindo.

## Melhoria Contínua: Transformando Sucesso Interno em Valor para o Cliente

A Classmethod agora migrou totalmente seu gerenciamento diário de informações de funcionários para o NocoBase e está avançando com automação e integração, como:

* Acionar fluxos de trabalho de aprovação quando novos dados são adicionados ou atualizados
* Enviar notificações para outras equipes via Slack
* Exportar dados para sistemas externos (como Google Sheets ou plataformas integradas)
* Solicitar automaticamente renovações de licenças antes que expirem
* Confirmar a propriedade de ativos (para laptops, crachás de segurança, etc.)
* Revogar automaticamente permissões temporárias
* Enviar lembretes de expiração de licenças por meio de fluxos de trabalho automatizados
* Integrar com modelos de linguagem grandes através de seu servidor MCP

A equipe também está trabalhando para visualizar melhor os dados dos funcionários — como certificações, históricos de trabalho e registros de treinamento — para melhorar contratações, desenvolvimento de talentos e compartilhamento interno de conhecimento.

Com o NocoBase, a Classmethod centralizou e automatizou seu gerenciamento de RH, ao mesmo tempo em que acumulou valiosa experiência prática em desenvolvimento e operação de sistemas.

Como uma empresa de serviços de TI orientada por tecnologia, a Classmethod está comprometida em transformar a experiência prática em valor real para os clientes. Agora, eles estão aplicando essas práticas comprovadas em projetos de clientes — ajudando mais empresas a construir sistemas flexíveis e controláveis para os ambientes complexos de hoje.

Como diz em seu site: Torne a tecnologia o núcleo do seu negócio e impulsione maior qualidade e velocidade com excelência técnica e resultados reais.

**Leitura relacionada:**

* [Como uma Fábrica de Móveis Construiu Seu Próprio ERP — Sem Necessidade de Codificação](https://www.nocobase.com/en/blog/olmon)
* [De Designer a Construtor: A Transformação Digital da L&A com NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Como a KIGLAND Escalou a Produção de Máscaras de Anime Personalizadas com Ferramentas de Código Aberto](https://www.nocobase.com/en/blog/kigland)
* [Como um Escritório de Advocacia com Mais de 400 Advogados Simplifica o Gerenciamento de Comissões com NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Desenvolvimento Rápido com NocoBase: Impulsionando a Transformação Digital na Construção Civil](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [A Atualização para Manufatura Inteligente da Orchisky: Por Que Eles Escolheram o NocoBase](https://www.nocobase.com/en/blog/Orchisky)
