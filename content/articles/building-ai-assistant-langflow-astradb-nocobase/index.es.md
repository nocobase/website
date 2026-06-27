---
title: "Construyendo un asistente de IA con Langflow y AstraDB: Desde la arquitectura hasta la integración con NocoBase"
description: "Este artículo demuestra cómo integrar NocoBase, LangFlow y AstraDB para crear un asistente de IA, generando información a través de la vectorización de datos y la búsqueda semántica, y optimizando los resultados mediante la tecnología RAG para mejorar la gestión de datos y las capacidades de recuperación inteligente."
---

📝 Nota: Este artículo se actualizó por última vez el 23 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

Este blog fue producido por Leandro Martins y se publicó originalmente en [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Introducción**

El objetivo de este artículo es demostrar la creación de un asistente de IA integrando las herramientas **NocoBase, LangFlow y VectorDB**. Como base, utilizaré el sistema que he estado desarrollando en **NocoBase**, utilizado para gestionar datos de arquitectura, añadiendo un asistente de IA para generar información a partir de los datos contenidos en este sistema, como **Aplicaciones, Catálogo de API, Diseño de Soluciones e Historias**.

Para este artículo, utilizaremos las siguientes tecnologías:

* **NocoBase, PostgreSQL y Docker**, previamente configurados (en este artículo, mostraré cómo instalarlos).
* **LangFlow**, usado localmente, cuya instalación se puede encontrar aquí a través de Docker.
* **Base de datos vectorial**, abriendo una cuenta en **AstraDB**, que será la base de datos vectorial utilizada en este artículo.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo sin código/bajo código más extensible impulsada por IA para construir aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

## **Descripción general de la arquitectura**

![Descripción general de la arquitectura.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Este diagrama muestra cómo los datos nuevos (o actualizados) se transforman en **embeddings** y se almacenan en la **base de datos vectorial**.

1. **Usuario → Plataforma NocoBase**
   El usuario interactúa con la plataforma NocoBase (por ejemplo, añadiendo o actualizando un registro en una colección).
2. **Desencadenar CRUD**
   Una acción CRUD (Crear, Leer, Actualizar, Eliminar) en NocoBase desencadena un evento o un flujo de trabajo interno.
3. **Flujo de trabajo (NocoBase)**
   NocoBase tiene un flujo de trabajo configurado para responder a los cambios de datos. Cuando detecta la creación o modificación de un registro, inicia el siguiente paso.
4. **Flujo API: Cargar datos**
   El flujo de trabajo de NocoBase llama a una API o servicio externo de LangFlow para enviar los datos que se transformarán en embeddings.
5. **LangFlow — Datos a Embedding**
   LangFlow recibe los datos y, utilizando modelos de lenguaje, convierte el contenido en vectores (embeddings). Estos embeddings representan el significado o contexto del texto numéricamente, permitiendo búsquedas semánticas.
6. **Vector DB (AstraDB)**
   Los embeddings se almacenan luego en la base de datos vectorial (AstraDB), asociando cada embedding con el contenido original (por ejemplo, un documento, un registro, un texto).

![diagrama.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Este diagrama también ilustra cómo el usuario realiza consultas semánticas en la base de datos vectorial, recibiendo resultados relevantes.

1. **Usuario → Plataforma NocoBase**
   El usuario interactúa nuevamente con la plataforma NocoBase, pero esta vez utilizando un Widget de Chat Integrado (u otra interfaz de búsqueda).
2. **Widget Chat Integrado**
   El usuario escribe una pregunta o indicación. Por ejemplo: *"Muéstrame información sobre la aplicación X."* Este widget envía una solicitud a LangFlow, que procesa la consulta.
3. **LangFlow — Datos a Embedding**
   LangFlow convierte la indicación del usuario en un embedding, que representa la intención de búsqueda en formato vectorial.
4. **Vector DB (AstraDB) — Búsqueda de similitud**
   El embedding de la indicación se utiliza para buscar en AstraDB los vectores más similares (es decir, los contenidos semánticamente más cercanos).
5. **Refinar resultado de búsqueda en el modelo**
   Basándose en los resultados devueltos por AstraDB, LangFlow refina el resultado de la búsqueda utilizando modelos de OpenAI (u otro LLM).
6. **Respuesta al usuario**
   El resultado final (textos, documentos o respuesta generada) se devuelve al widget de chat de NocoBase, mostrando la respuesta al usuario.

## **Aplicación usando NocoBase**

Para este artículo, usaré la misma aplicación creada anteriormente. Es una aplicación desarrollada para demostrar las características de NocoBase, en la que implementaré el asistente de IA. A continuación se muestra una imagen que ilustra cómo funcionará el asistente.

La idea es obtener información sobre funcionalidades a través de preguntas. Las funcionalidades disponibles son: Aplicaciones, Catálogo de API, Diseño de Soluciones e Historias.

![Aplicación usando NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **¿Qué son LangFlow y AstraDB?**

LangFlow es una herramienta de código abierto desarrollada por creadores brasileños, que ofrece una interfaz gráfica para construir, visualizar y depurar flujos de trabajo que involucran modelos de lenguaje. Basado en el ecosistema LangChain, LangFlow facilita la creación de pipelines de procesamiento de lenguaje natural (NLP) y aplicaciones de IA generativa de forma interactiva, permitiendo a los desarrolladores conectar diferentes componentes — como llamadas a API, transformaciones de texto y lógica de negocio — sin necesidad de codificación intensiva.

![LangFlow y AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

En este artículo, usaremos AstraDB, donde almacenaremos nuestros datos vectorizados. Para comprender mejor las bases de datos vectoriales, aquí hay un [artículo](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) que escribí. Además, recuerda que LangFlow permite cambiar a otras bases de datos vectoriales.

**AstraDB**, conocido originalmente como un servicio de base de datos distribuida basado en Apache Cassandra, ha ampliado sus capacidades para manejar el almacenamiento de datos no estructurados y búsquedas vectoriales. Esta funcionalidad de base de datos vectorial es particularmente útil para aplicaciones de aprendizaje automático, búsqueda semántica, sistemas de recomendación y tareas de datos de alta dimensión.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Instalando LangFlow**

Para instalar **LangFlow** a través de Docker, simplemente ejecuta el siguiente comando y luego accede al sistema en **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Instalando LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Configurando AstraDB**

Después de crear una cuenta en AstraDB, puedes configurar la base de datos y la colección con los datos, como se muestra a continuación.

El proceso es bastante simple:

1. Elige un **proveedor**
2. Selecciona una **región**
3. Crea la **base de datos**

![Configurando AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Para la colección, dado que almacena datos vectorizados, es crucial configurar la función de Embedding, que corresponde al modelo LLM responsable de vectorizar los datos.

Existen varios modelos para la generación de embeddings, como los de OpenAI, Nvidia y Google. En este caso, usaremos el modelo text-embedding-ada-002 para la conversión de datos.

![Configurando AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Cargando datos en la base de datos vectorial**

Este paso alimenta nuestra base de datos vectorial con los datos que se buscarán.

1. El flujo de trabajo de LangFlow recibe los datos a través de una URL.
2. Procesa el texto
3. Lo convierte a formato vectorial usando text-embedding-ada-002
4. Lo almacena en AstraDB en la colección configurada.

![Cargando datos en la base de datos vectorial.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Puntos importantes**

* Es necesario definir el Token de AstraDB en el componente responsable de la conexión a la base de datos. Para generar el token, simplemente accede a la colección en AstraDB y haz clic en Generar Token. La imagen a continuación muestra la pantalla con el botón correspondiente.

![Puntos importantes.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Resumen de la base de datos**: El archivo fuente se puede encontrar en [mi repositorio](https://github.com/leandro-jm).
* Para el modelo que estamos usando, es necesario añadir créditos para acceder a la API de OpenAI. La siguiente documentación explica cómo completar este proceso. Después de añadir créditos, debes generar un token y definirlo en el componente responsable de la generación de embeddings. Aquí hay un enlace con instrucciones sobre este proceso. Recuerda que hay varios modelos disponibles para generar embeddings.

Para probar, simplemente usa Postman, llamando a la URL que se puede obtener desde API > cURL en LangFlow. A continuación se muestra un ejemplo de una solicitud usando Postman.

![Puntos importantes.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Realizando investigación usando un modelo

Este paso es responsable de recuperar datos de la base de datos vectorial y refinarlos a través de **RAG (Generación Aumentada por Recuperación).**

![Realizando investigación usando un modelo.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

En esta etapa, también es necesario definir los tokens de OpenAI y AstraDB en sus respectivos componentes. El archivo fuente se puede encontrar en [mi repositorio](https://github.com/leandro-jm).

Para probarlo, simplemente usa el Chat, disponible dentro de LangFlow en la pestaña Playground.

## **Configurando el flujo de trabajo en NocoBase**

En este paso, crearemos desencadenantes en nuestra aplicación para enviar los datos que necesitan ser vectorizados. En otras palabras, cada vez que se inserten nuevos datos, se enviarán a la API de LangFlow para su procesamiento.

Para lograr esto, usaremos la función de Flujo de trabajo de NocoBase. Para más detalles sobre los flujos de trabajo, accede al [enlace](https://docs.nocobase.com/handbook/workflow).

![Configurando el flujo de trabajo en NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Crearemos un flujo de trabajo para enviar datos de la colección de nuestra aplicación a la colección vectorizada.

**Pasos:**

Crea un nuevo flujo de trabajo como se muestra a continuación, Evento de Colección.

![Configurando el flujo de trabajo en NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Define el **Desencadenante** como una inserción en la colección **Aplicación**, como se muestra a continuación.

![Configurando el flujo de trabajo en NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Crea un nuevo **nodo de Solicitud** para enviar los datos de la aplicación para vectorización. En este artículo, usaremos **Título** y **Descripción** como ejemplos, pero se puede enviar cualquier información según las reglas de negocio.

![Configurando el flujo de trabajo en NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

El **paso de Notificación** es opcional y no es necesario ejecutarlo.

## **Añadiendo el widget de chat en NocoBase**

Primero, accede a LangFlow y copia el código del Widget de Chat desde la opción API, como se muestra en la imagen a continuación.

![Añadiendo el widget de chat en NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

En el segundo paso, simplemente crea una página y añade un componente iframe. Para más detalles sobre este componente, puedes consultar el [enlace](https://docs.nocobase.com/handbook/block-iframe).

**Donde:**

* **Modo:** HTML
* **HTML:** El código a continuación, reemplazando el **flow\_id** y **host\_url** según los valores de LangFlow.

![Añadiendo el widget de chat en NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Probando el chat**

Ahora, volvamos al menú creado, probemos nuestro Asistente y verifiquemos la respuesta, como se muestra en el ejemplo a continuación.

![Probando el chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Conclusión**

En este artículo, demostramos la creación de un asistente de IA integrado con NocoBase, LangFlow y AstraDB, permitiendo la vectorización y recuperación inteligente de datos.

Con este enfoque, pudimos implementar un asistente capaz de generar información valiosa a partir de los datos registrados, utilizando técnicas de RAG (Generación Aumentada por Recuperación) para refinar los resultados de búsqueda.

Este es solo el comienzo de lo que esta arquitectura puede ofrecer. Con pequeñas adaptaciones, es posible ampliar las funcionalidades, integrar nuevos modelos de IA y mejorar la experiencia del usuario. 🚀

**Lecturas relacionadas:**

* [Desarrollando un Plugin para Enviar Mensajes de WhatsApp en NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Gobernanza de Arquitectura Simplificada: Construyendo un Catálogo de Aplicaciones con NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Cómo Hacer Copias de Seguridad y Restaurar NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Cómo construir aplicaciones con NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Cómo subir una imagen Docker a un servidor de intranet](https://www.nocobase.com/en/blog/load-docker-image)
