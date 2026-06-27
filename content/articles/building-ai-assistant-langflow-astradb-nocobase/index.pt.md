---
title: "Construindo um Assistente de IA com Langflow e AstraDB: Da Arquitetura à Integração com NocoBase"
description: "Este artigo demonstra como integrar NocoBase, LangFlow e AstraDB para criar um assistente de IA, gerando insights por meio de vetorização de dados e busca semântica, e otimizando resultados usando tecnologia RAG para aprimorar o gerenciamento de dados e as capacidades de recuperação inteligente."
---

📝 Nota: Este artigo foi atualizado pela última vez em 23 de janeiro de 2026. Atualizamos regularmente as informações para garantir que você tenha as últimas novidades! 😊

Este blog foi produzido por Leandro Martins e publicado originalmente em [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Introdução**

O objetivo deste artigo é demonstrar a criação de um assistente de IA integrando as ferramentas **NocoBase, LangFlow e VectorDB**. Como base, usarei o sistema que venho desenvolvendo no **NocoBase**, usado para gerenciar dados de arquitetura, adicionando um assistente de IA para gerar insights a partir dos dados contidos neste sistema, como **Aplicações, Catálogo de APIs, Design de Solução e Histórias**.

Para este artigo, usaremos as seguintes tecnologias:

* **NocoBase, PostgreSQL e Docker**, previamente configurados (neste artigo, mostrarei como instalá-los).
* **LangFlow**, usado localmente, cuja instalação pode ser encontrada aqui via Docker.
* **Banco de dados vetorial**, criando uma conta no **AstraDB**, que será o banco de dados vetorial usado neste artigo.

---

💬 Ei, você está lendo o blog da NocoBase. NocoBase é a plataforma de desenvolvimento no-code/low-code mais extensível, com tecnologia de IA, para construir aplicações empresariais, ferramentas internas e todos os tipos de sistemas. É totalmente auto-hospedada, baseada em plugins e amigável para desenvolvedores. → [Explore o NocoBase no GitHub](https://github.com/nocobase/nocobase)

---

## **Visão Geral da Arquitetura**

![Visão Geral da Arquitetura.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Este diagrama mostra como novos dados (ou dados atualizados) são transformados em **embeddings** e armazenados no **banco de dados vetorial**.

1. **Usuário → Plataforma NocoBase**
   O usuário interage com a plataforma NocoBase (por exemplo, adicionando ou atualizando um registro em uma coleção).
2. **Disparar CRUD**
   Uma ação CRUD (Criar, Ler, Atualizar, Deletar) no NocoBase dispara um evento ou um fluxo de trabalho interno.
3. **Fluxo de Trabalho (NocoBase)**
   O NocoBase tem um fluxo de trabalho configurado para responder a alterações de dados. Quando detecta a criação ou modificação de um registro, inicia o próximo passo.
4. **Fluxo da API: Carregar Dados**
   O fluxo de trabalho do NocoBase chama uma API ou serviço externo do LangFlow para enviar os dados que serão transformados em embeddings.
5. **LangFlow — Dados para Embedding**
   O LangFlow recebe os dados e, usando modelos de linguagem, converte o conteúdo em vetores (embeddings). Esses embeddings representam o significado ou contexto do texto numericamente, permitindo buscas semânticas.
6. **Vector DB (AstraDB)**
   Os embeddings são então armazenados no banco de dados vetorial (AstraDB), associando cada embedding ao conteúdo original (por exemplo, um documento, um registro, um texto).

![diagrama.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Este diagrama também ilustra como o usuário realiza consultas semânticas no banco de dados vetorial, recebendo resultados relevantes.

1. **Usuário → Plataforma NocoBase**
   O usuário interage novamente com a plataforma NocoBase, mas desta vez usando um Widget de Chat Incorporado (ou outra interface de busca).
2. **Widget Chat Incorporado**
   O usuário digita uma pergunta ou prompt. Por exemplo: *"Mostre-me informações sobre a aplicação X."* Este widget envia uma requisição para o LangFlow, que processa a consulta.
3. **LangFlow — Dados para Embedding**
   O LangFlow converte o prompt do usuário em um embedding, que representa a intenção da busca em formato vetorial.
4. **Vector DB (AstraDB) — Busca por Similaridade**
   O embedding do prompt é usado para buscar no AstraDB os vetores mais similares (ou seja, os conteúdos semanticamente mais próximos).
5. **Refinar Resultado da Busca no Modelo**
   Com base nos resultados retornados pelo AstraDB, o LangFlow refina o resultado da busca usando modelos da OpenAI (ou outro LLM).
6. **Resposta ao Usuário**
   O resultado final (textos, documentos ou resposta gerada) é retornado ao widget de chat do NocoBase, exibindo a resposta ao usuário.

## **Aplicação Usando NocoBase**

Para este artigo, usarei a mesma aplicação criada anteriormente. É uma aplicação desenvolvida para demonstrar as funcionalidades do NocoBase, na qual implementarei o assistente de IA. Abaixo está uma imagem ilustrando como o assistente funcionará.

A ideia é obter insights sobre funcionalidades através de perguntas. As funcionalidades disponíveis são: Aplicações, Catálogo de APIs, Design de Solução e Histórias.

![Aplicação Usando NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **O que são LangFlow e AstraDB?**

LangFlow é uma ferramenta de código aberto desenvolvida por criadores brasileiros, oferecendo uma interface gráfica para construir, visualizar e depurar fluxos de trabalho envolvendo modelos de linguagem. Baseado no ecossistema LangChain, o LangFlow facilita a criação de pipelines de processamento de linguagem natural (PLN) e aplicações de IA generativa de forma interativa, permitindo que desenvolvedores conectem diferentes componentes — como chamadas de API, transformações de texto e lógica de negócios — sem codificação intensiva.

![LangFlow e AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

Neste artigo, usaremos o AstraDB, onde armazenaremos nossos dados vetorizados. Para entender melhor os bancos de dados vetoriais, aqui está um [artigo](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) que escrevi. Além disso, lembre-se de que o LangFlow permite alternar para outros bancos de dados vetoriais.

**AstraDB**, originalmente conhecido como um serviço de banco de dados distribuído baseado no Apache Cassandra, expandiu suas capacidades para lidar com armazenamento de dados não estruturados e buscas vetoriais. Essa funcionalidade de banco de dados vetorial é particularmente útil para aplicações de aprendizado de máquina, busca semântica, sistemas de recomendação e tarefas com dados de alta dimensionalidade.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Instalando o LangFlow**

Para instalar o **LangFlow** via Docker, basta executar o seguinte comando e depois acessar o sistema em **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Instalando o LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Configurando o AstraDB**

Após criar uma conta no AstraDB, você pode configurar o banco de dados e a coleção com os dados, conforme mostrado abaixo.

O processo é bastante simples:

1. Escolha um **provedor**
2. Selecione uma **região**
3. Crie o **banco de dados**

![Configurando o AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Para a coleção, como ela armazena dados vetorizados, é crucial configurar o recurso de Embedding, que corresponde ao modelo LLM responsável por vetorizar os dados.

Existem vários modelos para geração de embeddings, como os da OpenAI, Nvidia e Google. Neste caso, usaremos o modelo text-embedding-ada-002 para conversão de dados.

![Configurando o AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Carregando Dados no Banco de Dados Vetorial**

Esta etapa alimenta nosso banco de dados vetorial com os dados a serem pesquisados.

1. O fluxo de trabalho do LangFlow recebe os dados via uma URL.
2. Processa o texto
3. Converte para o formato vetorial usando text-embedding-ada-002
4. Armazena no AstraDB na coleção configurada.

![Carregando Dados no Banco de Dados Vetorial.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Pontos Importantes**

* É necessário definir o Token do AstraDB no componente responsável pela conexão com o banco de dados. Para gerar o token, basta acessar a coleção no AstraDB e clicar em Gerar Token. A imagem abaixo mostra a tela com o botão correspondente.

![Pontos Importantes.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Visão Geral do Banco de Dados**: O arquivo fonte pode ser encontrado no [meu repositório](https://github.com/leandro-jm).
* Para o modelo que estamos usando, é necessário adicionar créditos para acessar a API da OpenAI. A documentação a seguir explica como concluir este processo. Após adicionar créditos, você deve gerar um token e defini-lo no componente responsável pela geração de embeddings. Aqui está um link com instruções sobre este processo. Lembre-se de que existem vários modelos disponíveis para gerar embeddings.

Para testar, basta usar o Postman, chamando a URL que pode ser obtida em API > cURL no LangFlow. Abaixo está um exemplo de requisição usando o Postman.

![Pontos Importantes.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Realizando Pesquisa Usando um Modelo

Esta etapa é responsável por recuperar dados do banco de dados vetorial e refiná-los através de **RAG (Retrieval-Augmented Generation).**

![Realizando Pesquisa Usando um Modelo.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

Nesta etapa, também é necessário definir os tokens da OpenAI e do AstraDB em seus respectivos componentes. O arquivo fonte pode ser encontrado no [meu repositório](https://github.com/leandro-jm).

Para testá-lo, basta usar o Chat, disponível dentro do LangFlow na aba Playground.

## **Configurando Fluxo de Trabalho no NocoBase**

Nesta etapa, criaremos gatilhos em nossa aplicação para enviar os dados que precisam ser vetorizados. Em outras palavras, sempre que novos dados forem inseridos, eles serão enviados para a API do LangFlow para processamento.

Para isso, usaremos o recurso de Fluxo de Trabalho do NocoBase. Para mais detalhes sobre fluxos de trabalho, acesse o [link](https://docs.nocobase.com/handbook/workflow).

![Configurando Fluxo de Trabalho no NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Criaremos um fluxo de trabalho para enviar dados da coleção da nossa aplicação para a coleção vetorizada.

**Passos:**

Crie um novo fluxo de trabalho conforme mostrado abaixo, Evento de Coleção.

![Configurando Fluxo de Trabalho no NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Defina o **Gatilho** como uma inserção na coleção **Aplicação**, conforme mostrado abaixo.

![Configurando Fluxo de Trabalho no NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Crie um novo **nó de Requisição** para enviar os dados da aplicação para vetorização. Neste artigo, usaremos **Título** e **Descrição** como exemplos, mas qualquer informação pode ser enviada de acordo com as regras de negócio.

![Configurando Fluxo de Trabalho no NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

A **etapa de Notificação** é opcional e não precisa ser executada.

## **Adicionando o Widget de Chat no NocoBase**

Primeiro, acesse o LangFlow e copie o código do Widget de Chat da opção API, conforme mostrado na imagem abaixo.

![Adicionando o Widget de Chat no NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

Na segunda etapa, basta criar uma página e adicionar um componente iframe. Para mais detalhes sobre este componente, você pode verificar o [link](https://docs.nocobase.com/handbook/block-iframe).

**Onde:**

* **Modo:** HTML
* **HTML:** O código abaixo, substituindo o **flow\_id** e **host\_url** de acordo com os valores do LangFlow.

![Adicionando o Widget de Chat no NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Testando o Chat**

Agora, vamos voltar ao menu criado, testar nosso Assistente e verificar a resposta, conforme mostrado no exemplo abaixo.

![Testando o Chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Conclusão**

Neste artigo, demonstramos a criação de um assistente de IA integrado com NocoBase, LangFlow e AstraDB, permitindo a vetorização e recuperação inteligente de dados.

Com esta abordagem, conseguimos implementar um assistente capaz de gerar insights valiosos a partir de dados registrados, usando técnicas de RAG (Retrieval-Augmented Generation) para refinar os resultados da busca.

Este é apenas o começo do que esta arquitetura pode oferecer. Com pequenas adaptações, é possível expandir funcionalidades, integrar novos modelos de IA e melhorar a experiência do usuário. 🚀

**Leitura relacionada:**

* [Desenvolvendo um Plugin para Enviar Mensagens WhatsApp no NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Governança de Arquitetura Simplificada: Construindo um Catálogo de Aplicações com NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Como Fazer Backup e Restaurar o NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Como construir aplicativos com NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Como enviar uma imagem Docker para um servidor de intranet](https://www.nocobase.com/en/blog/load-docker-image)
