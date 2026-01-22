📝 Note: This article was last updated on Jan. 23, 2026. We regularly update the information to ensure you have the latest insights! 😊

This blog was produced by Leandro Martins and was originally published at [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Introduction**

The objective of this article is to demonstrate the creation of an AI assistant integrating the tools **NocoBase, LangFlow, and VectorDB**. As a foundation, I will use the system I have been developing in **NocoBase**, used to manage architecture data, adding an AI assistant to generate insights from the data contained in this system, such as **Applications, API Catalog, Solution Design, and Stories**.

For this article, we will use the following technologies:

* **NocoBase, PostgreSQL, and Docker**, previously configured (in this article, I will show how to install them).
* **LangFlow**, used locally, whose installation can be found here via Docker.
* **Vector database**, by opening an account in **AstraDB**, which will be the vector database used in this article.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

## **Architecture Overview**

![Architecture Overview.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

This diagram shows how new data (or updated data) is transformed into **embeddings** and stored in the **vector database**.

1. **User → NocoBase Platform**
   The user interacts with the NocoBase platform (e.g., adding or updating a record in a collection).
2. **Trigger CRUD**
   A CRUD action (Create, Read, Update, Delete) in NocoBase triggers an event or an internal workflow.
3. **Workflow (NocoBase)**
   NocoBase has a workflow configured to respond to data changes. When it detects the creation or modification of a record, it initiates the next step.
4. **API Flow: Load Data**
   The NocoBase workflow calls an API or external service from LangFlow to send the data that will be transformed into embeddings.
5. **LangFlow — Data to Embedding**
   LangFlow receives the data and, using language models, converts the content into vectors (embeddings). These embeddings represent the meaning or context of the text numerically, enabling semantic searches.
6. **Vector DB (AstraDB)**
   The embeddings are then stored in the vector database (AstraDB), associating each embedding with the original content (e.g., a document, a record, a text).

![diagram.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

This diagram also illustrates how the user performs semantic queries on the vector database, receiving relevant results.

1. **User → NocoBase Platform**
   The user interacts again with the NocoBase platform, but this time using an Embedded Chat Widget (or another search interface).
2. **Widget Chat Embedded**
   The user types a question or prompt. For example: *"Show me information about application X."* This widget sends a request to LangFlow, which processes the query.
3. **LangFlow — Data to Embedding**
   LangFlow converts the user's prompt into an embedding, which represents the search intent in vector format.
4. **Vector DB (AstraDB) — Similarity Search**
   The embedding from the prompt is used to search AstraDB for the most similar vectors (i.e., the contents that are semantically closest).
5. **Refine Result Search in Model**
   Based on the results returned by AstraDB, LangFlow refines the search result using OpenAI models (or another LLM).
6. **Response to User**
   The final result (texts, documents, or generated response) is returned to the NocoBase chat widget, displaying the response to the user.

## **Application Using NocoBase**

For this article, I will use the same application previously created. It is an application developed to demonstrate the features of NocoBase, in which I will implement the AI assistant. Below is an image illustrating how the assistant will work.

The idea is to obtain insights about functionalities through questions. The available functionalities are: Applications, API Catalog, Solution Design, and Stories.

![Application Using NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **What are LangFlow and AstraDB?**

LangFlow is an open-source tool developed by Brazilian creators, offering a graphical interface to build, visualize, and debug workflows involving language models. Based on the LangChain ecosystem, LangFlow facilitates the creation of natural language processing (NLP) pipelines and generative AI applications interactively, allowing developers to connect different components — such as API calls, text transformations, and business logic — without intensive coding.

![LangFlow and AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

In this article, we will use AstraDB, where we will store our vectorized data. To better understand vector databases, here is an [article](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) I wrote. Also, remember that LangFlow allows switching to other vector databases.

**AstraDB**, originally known as a distributed database service based on Apache Cassandra, has expanded its capabilities to handle unstructured data storage and vector searches. This vector database functionality is particularly useful for machine learning applications, semantic search, recommendation systems, and high-dimensional data tasks.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Installing LangFlow**

To install **LangFlow** via Docker, simply run the following command and then access the system at **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Installing LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Configuring AstraDB**

After creating an account on AstraDB, you can set up the database and collection with the data, as shown below.

The process is quite simple:

1. Choose a **provider**
2. Select a **region**
3. Create the **database**

![Configuring AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

For the collection, since it stores vectorized data, it is crucial to configure the Embedding feature, which corresponds to the LLM model responsible for vectorizing the data.

There are several models for embedding generation, such as those from OpenAI, Nvidia, and Google. In this case, we will use the text-embedding-ada-002 model for data conversion.

![Configuring AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Loading Data into the Vector Database**

This step feeds our vector database with the data to be searched.

1. The LangFlow workflow receives the data via a URL.
2. Processes the text
3. Converts it to vector format using text-embedding-ada-002
4. Stores it in AstraDB in the configured collection.

![Loading Data into the Vector Database.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Important Points**

* It is necessary to define the AstraDB Token in the component responsible for the database connection. To generate the token, simply access the collection in AstraDB and click Generate Token. The image below shows the screen with the corresponding button.

![Important Points.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Database Overview**: The source file can be found in [my repository](https://github.com/leandro-jm).
* For the model we are using, it is necessary to add credits to access the OpenAI API. The following documentation explains how to complete this process. After adding credits, you must generate a token and define it in the component responsible for embedding generation. Here is a link with instructions on this process. Remember that there are various models available for generating embeddings.

To test, simply use Postman, calling the URL that can be obtained from API > cURL in LangFlow. Below is an example of a request using Postman.

![Important Points.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Conducting Research Using a Model

This step is responsible for retrieving data from the vector database and refining it through **RAG (Retrieval-Augmented Generation).**

![Conducting Research Using a Model.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

At this stage, it is also necessary to define the OpenAI and AstraDB tokens in their respective components. The source file can be found in [my repository](https://github.com/leandro-jm).

To test it, simply use the Chat, available inside LangFlow in the Playground tab.

## **Configuring Workflow in NocoBase**

In this step, we will create triggers in our application to send the data that needs to be vectorized. In other words, whenever new data is inserted, it will be sent to the LangFlow API for processing.

To achieve this, we will use the Workflow feature of NocoBase. For more details on workflows, access the [link](https://docs.nocobase.com/handbook/workflow).

![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

We will create a workflow to send data from our application's collection to the vectorized collection.

**Steps:**

Create a new workflow as shown below, Collection Event.

![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Define the **Trigger** as an insertion in the **Application** collection, as shown below.

![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Create a new **Request node** to send the application's data for vectorization. In this article, we will use **Title** and **Description** as examples, but any information can be sent according to business rules.

![Configuring Workflow in NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

The **Notification step** is optional and does not need to be executed.

## **Adding the Chat Widget in NocoBase**

First, access LangFlow and copy the Chat Widget code from the API option, as shown in the image below.

![Adding the Chat Widget in NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

In the second step, simply create a page and add an iframe component. For more details about this component, you can check the [link](https://docs.nocobase.com/handbook/block-iframe).

**Where:**

* **Mode:** HTML
* **HTML:** The code below, replacing the **flow\_id** and **host\_url** according to the values from LangFlow.

![Adding the Chat Widget in NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Testing the Chat**

Now, let's go back to the created menu, test our Assistant, and check the response, as shown in the example below.

![Testing the Chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Conclusion**

In this article, we demonstrated the creation of an AI assistant integrated with NocoBase, LangFlow, and AstraDB, enabling vectorization and intelligent data retrieval.

With this approach, we were able to implement an assistant capable of generating valuable insights from registered data, using RAG (Retrieval-Augmented Generation) techniques to refine search results.

This is just the beginning of what this architecture can offer. With small adaptations, it is possible to expand functionalities, integrate new AI models, and enhance the user experience. 🚀

**Related reading:**

* [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Simplified Architecture Governance: Building an Application Catalog with NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [How to Backup and Restore NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [How to build apps with NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [How to upload a Docker image to an intranet server](https://www.nocobase.com/en/blog/load-docker-image)
