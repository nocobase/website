---
title: "Resposta em Subsegundo em Escala: Classact Executa NocoBase no Kubernetes"
description: "A Classact implantou o NocoBase no Kubernetes, alcançando resposta em subsegundo para centenas de milhares de registros, cobrindo gestão de RH e conformidade, e aumentando significativamente a eficiência e a experiência do usuário."
---

## **Sobre a Classact**

A [Classact Co., Ltd](https://www.classact.co.jp/). é uma provedora de serviços de infraestrutura de TI que oferece suporte técnico e alocação de engenheiros. É também uma das primeiras empresas no Japão a receber a certificação Proxmox Gold Partner, com vasta experiência em virtualização e data centers. Ao mesmo tempo em que oferece soluções de TI de alta disponibilidade para clientes, a Classact também tem trabalhado para otimizar seus próprios sistemas e processos internos, garantindo eficiência operacional e conformidade.

Como muitas empresas, as necessidades digitais da Classact vão além de suas equipes técnicas. Departamentos como administração, RH e vendas também exigem sistemas confiáveis para gerenciar recrutamento, operações de funcionários, treinamento e conformidade com a segurança da informação.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Desafios e Requisitos**

Antes de adotar o NocoBase, a Classact dependia principalmente da ferramenta de código aberto Exment para o gerenciamento de banco de dados interno.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

No entanto, à medida que as operações de negócios escalavam e o volume de dados crescia, os problemas de desempenho do Exment começaram a afetar o uso diário:

* **Carregamento lento de páginas**: Em grandes conjuntos de dados, uma única página podia levar de 5 a 10 segundos para carregar, diminuindo significativamente os fluxos de trabalho.
* **Experiência do usuário ruim**: Longos tempos de espera geravam reclamações frequentes dos funcionários e reduziam a disposição para usar o sistema.
* **Escalabilidade limitada**: O sistema não tinha a flexibilidade para acomodar as crescentes necessidades do negócio ou suportar novos cenários de aplicação.

Ao mesmo tempo, diferentes equipes estavam experimentando outras ferramentas. Algumas adotaram o ClickUp para gerenciamento de tarefas, enquanto a Classact também avaliou o Airtable e o NocoDB.

Através dessa exploração, a Classact esclareceu seus requisitos para uma nova solução:

* **Alto desempenho**: Lidar com centenas de milhares de registros mantendo tempos de resposta rápidos.
* **Flexibilidade**: Permitir que os departamentos adaptem rapidamente as aplicações às suas necessidades específicas.
* **Controle empresarial**: Suportar implantações auto-hospedadas e privadas, garantindo controle total dos dados.

Esses requisitos levaram a Classact a escolher o NocoBase como a solução mais adequada.

## **Implantação e Validação**

Antes de entrar em produção, a Classact testou o NocoBase em um ambiente de homologação. A equipe importou centenas de milhares de registros para simular cenários reais de negócios, focando no desempenho de consultas e carregamento de páginas. Os resultados mostraram que o NocoBase manteve um desempenho estável mesmo com grandes conjuntos de dados, atendendo plenamente às expectativas.

Com base nessa validação, a empresa implantou o NocoBase em seu cluster Kubernetes auto-gerenciado para garantir estabilidade de nível empresarial. A equipe técnica também adquiriu vários plugins, o que acelerou o desenvolvimento de aplicações e permitiu a rápida implementação de sistemas de gestão de operações de funcionários e treinamento que estavam anteriormente parados.

Essa abordagem de implantação e validação não apenas confirmou a confiabilidade do NocoBase em termos de desempenho e escalabilidade, mas também permitiu que a Classact migrasse com risco mínimo e avançasse rapidamente em sua transformação digital interna.

## **Cobertura de Aplicações**

Após a implantação, a Classact rapidamente construiu e lançou uma série de aplicações para apoiar diferentes aspectos das operações internas. Essas aplicações cobriam processos de negócios comuns, como RH, serviços ao funcionário e gestão de ativos, bem como áreas mais especializadas, como conformidade com ISMS e programas de mentoria.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Gestão de Recursos Humanos**

Manutenção de dados de funcionários, relatórios e notificações de treinamento, atividades de recrutamento (registros e notificações de entrevistas), atribuição de cargos e funções, eleições de representantes de funcionários e acompanhamento de certificações profissionais.

* **Serviços ao Funcionário**

Atualizações de informações (ex.: endereço ou rota de deslocamento), solicitações de benefícios, reembolsos de despesas, compras de equipamentos e livros, pedidos de cartões de visita, consultas médicas e comunicação de eventos de celebração ou luto.

* **Gestão de Ativos e Tarefas**

Gerenciamento de sistemas internos e ativos de equipamentos, juntamente com o acompanhamento de tarefas diárias.

* **Aprendizado e Desenvolvimento**

Gerenciamento de licenças de e-learning, gerenciamento de programas de mentoria e relatórios para apoiar o crescimento contínuo dos funcionários.

* **Segurança da Informação e Conformidade**

Gestão de operações de ISMS para atender aos padrões de segurança da informação.

* **Coleta de Dados e Engajamento**

Formulários públicos para coleta de informações de candidatos, pesquisas com funcionários e feedback interno.

A maioria dos sistemas empresariais cobre apenas um único cenário, forçando as organizações a depender de múltiplas ferramentas para gerenciar diferentes processos em paralelo. **O NocoBase quebra essa limitação, permitindo que a Classact construa e combine aplicações livremente dentro de uma única plataforma.**

Com essa abordagem, a Classact criou uma plataforma de gestão interna integrada e adaptada às suas necessidades, com uma flexibilidade muito maior do que as soluções tradicionais.

## **Resultados**

Ao adotar o NocoBase, a Classact alcançou melhorias significativas tanto no desempenho quanto na experiência do usuário:

* **Otimização de desempenho**: Os tempos de carregamento de página caíram de 5 a 10 segundos para apenas 1 a 2 segundos, melhorando muito a eficiência diária.
* **Maior satisfação do usuário**: A redução dos tempos de espera aliviou a frustração e a resistência, gerando feedback consistentemente positivo dos funcionários.
* **Visualização**: Gráficos, filtros flexíveis e opções de exibição tornaram a análise de dados muito mais intuitiva.
* **Otimização de processos**: Os recursos de fluxo de trabalho simplificaram ainda mais processos de negócios complexos.

A Classact também compartilhou feedback positivo sobre sua experiência com o NocoBase:

> *“O que mais valorizamos no NocoBase é sua estabilidade e escalabilidade. Mesmo com grandes conjuntos de dados, ele oferece consistentemente um desempenho estável. Os recursos de gráficos nos fornecem visualização de dados intuitiva, o plugin LDAP permite integração perfeita com o Active Directory, os formulários públicos facilitam a coleta de dados de candidatos e funcionários, e as funções de fluxo de trabalho simplificaram enormemente nossos processos internos.”* — **Hidetoshi Honma, CEO da Classact**

## **Conclusão**

A experiência da Classact mostra que o NocoBase não apenas oferece tempos de resposta abaixo de um segundo com conjuntos de dados na casa das centenas de milhares, mas também, por meio da implantação em Kubernetes e sua arquitetura de plugins, suporta necessidades complexas de múltiplos departamentos e processos em uma única plataforma.

Ao contrário dos sistemas tradicionais isolados, o NocoBase fornece uma arquitetura orientada a modelos, extensível e combinável. Isso permite que as empresas evoluam continuamente seus sistemas internos a um custo menor, mantendo espaço para expansão futura.


**Mais Histórias de Clientes:**

* [Fábrica Digital da BIEL Crystal: Alimentando 1,85 Bilhões de Unidades por Ano](https://www.nocobase.com/en/blog/bielcrystal)
* [Como a Distinct HealthCare Usa o NocoBase para Construir um Sistema de Cuidados Personalizados de Longo Prazo](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Uma Jornada Sem Código Dentro da SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [O que fez a principal imobiliária do Japão migrar do Salesforce para o NocoBase de código aberto?](https://www.nocobase.com/en/blog/century-21)
* [Como a Second-Brain construiu um sistema de IA para instituições financeiras com o NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [Como a Marca Nº1 de Gravadores de Voz com IA Construiu Seus Sistemas Internos](https://www.nocobase.com/en/blog/plaud)
