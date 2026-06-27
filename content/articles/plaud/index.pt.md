---
title: "Como a Marca Nº 1 de Gravadores de Voz com IA Construiu Seus Sistemas Internos"
description: "Enfrentando o crescimento dos negócios, a PLAUD, a marca nº 1 mundial de gravadores de voz com IA, escolheu a plataforma de código aberto sem código NocoBase para construir sistemas de atendimento ao cliente e operações, atendendo aos requisitos de flexibilidade e controle, enquanto melhora a eficiência do trabalho."
---

## Introdução

Em 2023, o [PLAUD NOTE](https://www.plaud.ai/) fez sua primeira aparição em uma plataforma de crowdfunding — e instantaneamente se destacou como o primeiro gravador de IA do mundo equipado com ChatGPT. Com design de hardware inovador e poderosas capacidades de IA, rapidamente conquistou a atenção global.

Ainda na fase de pré-venda, gerou quase \$6 milhões e conquistou 35.000 assinantes pagantes, tornando-se rapidamente um sucesso estrondoso no mundo do hardware de IA.

![PLAUD NOTE](https://static-docs.nocobase.com/1-hv0ztl.gif)

O burburinho não parou por aí —

Em menos de dois anos, a PLAUD acumulou 700.000 usuários em 168 países, foi destaque nas principais mídias de tecnologia globais e conquistou importantes prêmios internacionais de design, como Red Dot, iF e Good Design.

![PLAUD](https://static-docs.nocobase.com/2.0-n0gu0c.PNG)

Em 2024, a receita ultrapassou os \$70 milhões, o tamanho da equipe dobrou e a empresa atingiu um crescimento de 10x pelo segundo ano consecutivo.

Mas, com a explosão das vendas e a entrada constante de novos usuários, surgiu uma questão difícil:

O sistema interno era forte o suficiente para acompanhar esse crescimento acelerado?

## Além de um Gravador de Voz

A maioria das pessoas conhece a PLAUD pelo seu gravador ultrafino, do tamanho de um cartão — o PLAUD NOTE.

Mas o PLAUD NOTE não é um gravador de voz comum. Assim que a gravação termina, ele transcreve automaticamente o áudio, resume e até rascunha conteúdo pronto para publicação usando IA.

![Além de um Gravador de Voz](https://static-docs.nocobase.com/3.0-ty43po.PNG)

Para criadores de conteúdo, é mais que um dispositivo — é um assistente de escrita com IA que você pode levar para qualquer lugar.

O que alimenta esse hardware é uma plataforma de software em constante evolução. Dentro do aplicativo PLAUD, há uma comunidade crescente onde os usuários podem enviar, editar e compartilhar modelos de transcrição adaptados para diferentes áreas — como direito, saúde e educação — facilitando o trabalho de todos com conteúdo de voz.

O hardware é apenas o ponto de partida. O que realmente diferencia a PLAUD é a plataforma por trás dele — projetada para ajudar o conteúdo a fluir e crescer por meio da colaboração dos usuários.

## **Como Construir Sistemas Rapidamente do Zero?**

Com o aumento da demanda, as necessidades internas da PLAUD se tornaram mais complexas.

A equipe de suporte precisava de acesso rápido a dados de usuários e ferramentas para resolver problemas de conta.

A equipe de operações queria melhores maneiras de gerenciar o conteúdo do aplicativo e supervisionar os modelos da comunidade.

Mas, naquela época, nenhuma dessa infraestrutura existia.

> "Não tínhamos nada disso — só quando as necessidades começaram a se acumular é que começamos a descobrir como atendê-las", disse Lucas, Gerente de Produto da PLAUD.

Embora as equipes de produto e engenharia da PLAUD sejam de classe mundial, seu foco estava totalmente na inovação. Reconstruir sistemas internos não era a prioridade — mas suporte e operações impactam diretamente a experiência do usuário e não podiam ficar para trás.

Então, em vez de depender de ferramentas SaaS rígidas, a PLAUD escolheu um caminho diferente: eles usaram a plataforma no-code de código aberto **NocoBase** para construir um sistema sob medida para suas necessidades.

Eles não estavam especificamente procurando por uma "ferramenta no-code". Acontece que a NocoBase atendeu perfeitamente aos seus três requisitos principais.

* **Do zero ao lançamento rápido:** Sem herança legada, apenas construir o que é necessário
* **Flexível por design:** Modelos de dados e lógica totalmente personalizáveis, sem dependência de fornecedor
* **Produto em primeiro lugar:** Gerenciado pela equipe de produto, com suporte mínimo de desenvolvimento

Em apenas alguns dias, a equipe tinha um sistema funcional — e eles vêm melhorando desde então.

## **Uma Plataforma, Dois Sistemas Principais**

Até agora, a PLAUD usou a NocoBase para construir dois sistemas-chave. Um atende à equipe de atendimento ao cliente, e o outro apoia a equipe de operações.

**Sistema de Atendimento ao Cliente: Informações Centralizadas do Usuário**

O backend de atendimento ao cliente da PLAUD é usado principalmente para:

* Consultar informações básicas do usuário e como ele se cadastrou.
* Verificar o status da conta e quais benefícios foram adquiridos.
* Realizar ações no backend, como alterar status ou sinalizar registros.

O sistema se conecta ao banco de dados principal da empresa usando um plugin de fonte de dados externa. Ele vincula dados entre diferentes tabelas. Isso permite que a equipe de atendimento ao cliente encontre e gerencie informações em um só lugar dentro da NocoBase, aumentando significativamente sua eficiência.

> "Agora podemos encontrar todas as informações dos nossos usuários diretamente no sistema. Os dados se conectam diretamente usando SQL."
>
> – Lucas, Gerente de Produto da PLAUD

**Sistema de Operações: Gerenciamento de Conteúdo da Comunidade de Modelos**

Para operações, a equipe construiu um sistema de revisão para sua comunidade de modelos usando a NocoBase. Este sistema gerencia modelos de conteúdo enviados pelos usuários, como modelos de voz para texto para áreas como saúde, vendas, direito e educação.

O sistema suporta:

* Captura automática de conteúdo do modelo.
* Configuração de fluxos de trabalho de revisão e gerenciamento de seus status.
* Publicação automática de modelos aprovados na comunidade do aplicativo.

![Sistema de Operações](https://static-docs.nocobase.com/4.0-cpa6sz.jfif)

Toda a configuração exigiu muito pouca contribuição de desenvolvedores. Foi configurada principalmente pela equipe de produto. Alguns plugins e ajuda técnica foram necessários apenas para tarefas complexas de dados, como conversão de JSON.

## **Apenas duas pessoas, e todo o sistema funcionou perfeitamente**

Quando a equipe da PLAUD fala sobre a NocoBase, três palavras surgem repetidamente: flexível, eficiente e no controle.

Todo o sistema de suporte ao cliente e operações foi construído principalmente pelo gerente de produto, com ajuda ocasional de desenvolvedores apenas para conexões de API ou ajustes de plugins.

Essa configuração tirou a pressão da equipe de desenvolvimento e permitiu que a visão do produto tomasse forma mais rapidamente, com ciclos de iteração mais curtos.

> "A NocoBase é usada em toda a empresa, mas a configuração real? Só eu e um colega. Os desenvolvedores entraram apenas quando precisávamos conectar interfaces."
>
> — Lucas, Gerente de Produto da PLAUD

O que mais se destacou foi a poderosa modelagem de dados da NocoBase.

A lógica de negócios da PLAUD envolve relacionamentos complexos entre várias tabelas, juntamente com controle de acesso rigoroso.

Graças à estrutura orientada a modelos da NocoBase, eles puderam definir campos de forma flexível, configurar lógica relacional e vincular facilmente dados entre módulos — tornando todo o sistema muito mais utilizável.

> "Precisávamos de muitos relacionamentos entre tabelas, e a NocoBase realmente acertou em cheio nessa parte."
>
> — Lucas, Gerente de Produto da PLAUD

E com sua arquitetura baseada em plugins, a NocoBase também deu à equipe uma base sólida para expansão futura — nos seus próprios termos.

## **De sucesso viral a sucesso duradouro**

Em menos de dois anos, a PLAUD passou de causar impacto com seu produto de estreia para administrar uma plataforma completa. No ano passado, eles lançaram o NotePin — um gravador de IA vestível de próxima geração.

![NotePin](https://static-docs.nocobase.com/5.0-rdpv09.png)

Mas por trás dessa evolução rápida não estavam apenas hardware de ponta ou modelos poderosos. O que realmente fez a diferença foi o julgamento preciso da PLAUD e a velocidade na construção dos sistemas certos.

Eles não investiram pesado em soluções SaaS ou montaram uma enorme equipe de desenvolvimento. Em vez disso, adotaram uma abordagem mais enxuta e autodirigida — construindo uma plataforma personalizada de operações e suporte com ferramentas de código aberto que se encaixavam perfeitamente no seu negócio.

No centro de tudo está uma capacidade-chave: ser capaz de criar um sistema flexível e controlável com recursos mínimos — para que a equipe permaneça ágil mesmo quando as coisas acontecem rapidamente.

Olhando para o futuro, a NocoBase continuará apoiando a PLAUD em sua jornada — desbloqueando ainda mais possibilidades onde o software encontra o hardware.

**Leitura relacionada:**

* [Além das Planilhas: Gestão de Dados de Funcionários da Classmethod com NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Como uma Fábrica de Móveis Construiu Seu Próprio ERP — Sem Precisa de Codificação](https://www.nocobase.com/en/blog/olmon)
* [De Designer a Construtor: A Transformação Digital da L&A com NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Como a KIGLAND Escalou a Produção de Máscaras de Anime Personalizadas com Ferramentas de Código Aberto](https://www.nocobase.com/en/blog/kigland)
* [Como um Escritório com Mais de 400 Advogados Simplifica a Gestão de Comissões com NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Desenvolvimento Rápido com NocoBase: Impulsionando a Transformação Digital na Construção Civil](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
