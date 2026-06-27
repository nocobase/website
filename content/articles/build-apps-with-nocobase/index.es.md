---
title: "¿Cómo crear aplicaciones con NocoBase?"
description: "¡Exploremos cómo crear una aplicación de seguimiento de mascotas con NocoBase!"
---

📝 Nota: Este artículo se actualizó por última vez el 23 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

Este blog fue producido por Don Freeman de [Freeman Tech Consulting](https://freemantechconsulting.com/) y se publicó originalmente en [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com). Freeman Tech Consulting es una empresa de ingeniería de software de servicio completo que puede ayudar con implementaciones No Code, desarrollo de aplicaciones web, diseño/construcción de infraestructura en la nube, gestión GRC, análisis de datos y mucho más.

## 🌟¿Qué es NocoBase?

**NocoBase** es una plataforma de IA sin código (código cero) / low-code diseñada para facilitar la creación de aplicaciones basadas en datos. Ofrecen versiones de pago donde se elimina el logotipo de NocoBase. Es de código abierto, por lo que si deseas contribuir, puedes hacerlo fácilmente en GitHub. Proporcionan un sistema de plugins para ampliar la funcionalidad de la plataforma cuando sea necesario.

## 🚀 Desplegar NocoBase Localmente

### **¿Qué se necesita para ejecutar NocoBase localmente?**

* **Docker**
* **Docker compose**
* **Una base de datos PostgreSQL** En este blog ejecutaremos una con docker compose, pero en un entorno de producción real querrías tener una base de datos PostgreSQL dedicada.

### **Ejecutar NocoBase Localmente**

* Hay pasos para ejecutar NocoBase localmente en su sitio web [aquí](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Primero, crea un directorio donde trabajarás. En tu terminal, cambia a ese directorio. Después, necesitas crear un archivo docker compose. Usé el de las referencias anteriores de inicio rápido en el sitio web de NocoBase y lo modifiqué ligeramente.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo low-code/sin código impulsada por IA más extensible para construir aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. →[ Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

***El docker compose a continuación muestra la ejecución de una base de datos PostgreSQL localmente, pero se sugiere tener una base de datos dedicada en un entorno de producción real.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Después de crear esto en el directorio local, ejecuta el siguiente comando para descargar las imágenes necesarias.

![descargar las imágenes necesarias.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Ahora ejecuta el siguiente comando para iniciar los contenedores en segundo plano.

![iniciar los contenedores.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Ahora puedes acceder a NocoBase en http://localhost:13000

## 🐶 Construyendo la Aplicación NocoBase: Aplicación de Seguimiento de Mascotas

![Aplicación de Seguimiento de Mascotas.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

En este ejemplo, construiremos una aplicación de seguimiento de mascotas 🐕 🐈! Esta aplicación rastreará a los dueños de mascotas y la información de sus mascotas. Primero necesitamos definir el modelo de datos para nuestra aplicación. Esto es súper fácil en NocoBase.

### **Modelo de Datos de NocoBase**

**🔍 Encontrar el Editor de Modelo de Datos**

En la interfaz de usuario de NocoBase, puedes hacer clic en el pequeño engranaje ⚙️ en la esquina superior derecha y luego hacer clic en `Fuentes de datos`. Esto abrirá el editor del modelo de datos. Una vez allí, verás la fuente de datos predeterminada que debería llamarse main. Haz clic en `Configurar` para la fuente de datos main.

**Crear Colecciones**

Ahora podemos crear colecciones dentro de la fuente de datos main. Estas colecciones almacenarán los datos de nuestra aplicación. Para este ejemplo, crearemos dos colecciones. Una para los dueños de mascotas y otra para las mascotas.

**Colección de Dueño de Mascota**

En la pantalla de Colecciones, haz clic en el botón `Nueva Colección`. Luego, asigna a la colección un `Nombre para mostrar de la colección` de Dueño de Mascota y un `Nombre de la colección` de petowner.

Ahora agreguemos los campos que necesitamos a la colección de dueño de mascota. Desde la pantalla de la colección, haz clic en `Configurar Campos` junto a la colección Dueño de Mascota. Con el botón `Agregar Campo`, puedes agregar los campos que necesitamos a la colección. La colección de dueño de mascota tendrá los siguientes campos.

* **Nombre** *Interfaz de campo de texto de una línea*
* **Apellido** *Interfaz de campo de texto de una línea*
* **Correo electrónico** *Interfaz de campo de correo electrónico*

**Colección de Mascota**

Ahora podemos repetir estos mismos pasos para la colección de mascota. La colección de mascota tendrá los siguientes campos.

* **Nombre** *Interfaz de campo de texto de una línea*
* **Tipo de Mascota** *Interfaz de campo de selección múltiple*
* **Fecha de nacimiento** *Interfaz de campo de fecha y hora*

**🔗 Vincular la Colección de Dueño de Mascota a la Colección de Mascota**

Para vincular la colección de Dueño de Mascota a la colección de Mascota, vuelve a la colección de **Mascota** y haz clic en el botón `Agregar Campo` en la pantalla de configuración de la colección. Busca el Tipo de Interfaz Uno a Muchos. Asigna un nombre para mostrar a la relación, selecciona pet como `Colección de destino` y luego ID como `Clave de destino`.

**🥳 ¡¡¡El modelo de datos está listo!!!**

Eso es todo para la configuración del modelo de datos. Aquí está mi ejemplo para el modelo de datos de mascota.

![modelo de datos de mascota.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Construyendo la Interfaz de Usuario de NocoBase**

**🏠 Crear la Página de Inicio**

Ahora que tenemos nuestro modelo de datos completo, podemos construir rápidamente una interfaz de usuario para interactuar con ese modelo de datos. Vuelve a la página principal de la aplicación y deberías ver el elemento `Agregar Nuevo Menú` en la parte superior de la página. Haz clic en él y luego haz clic en `página`. Asigna a la página el nombre de Inicio y luego deberías ver algo similar a esto.

![Crear la Página de Inicio.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Crear Lista de Dueños de Mascotas**

Ahora agregaremos una lista de tarjetas para permitirnos interactuar con nuestra colección de dueños de mascotas. Haz clic en `Agregar Bloque` → `Cuadrícula de Tarjetas` → `PetOwner`. Esto nos permite mostrar nuestros dueños de mascotas en una cuadrícula de tarjetas. Haz clic en `Configurar Campos` para agregar los campos Nombre, Apellido y Correo electrónico.

**➕ Agregar Dueños de Mascotas**

Ahora necesitamos poder crear dueños de mascotas. Haz clic en `Configurar Acción` en la esquina superior derecha del bloque (**no** en `Configurar Acción` dentro de la tarjeta). Luego haz clic en `Agregar Nuevo`. Esto crea un botón que dice Agregar Nuevo. Haz clic en ese botón para configurar lo que se puede hacer al agregar un dueño de mascota.

**🍿 Ventana emergente Agregar Nuevo Dueño de Mascota**

Dentro de la ventana emergente, haz clic en `Agregar Bloque` → `Formulario` → `Colección Actual`. Haz clic en `Configurar Campos` y agrega Nombre, Apellido y Correo electrónico. Esto te permite completar estos valores al crear un nuevo dueño de mascota. Finalmente, haz clic en `Configurar Acción` → `Enviar`. Haz clic fuera de la ventana emergente para cerrarla.

**➕ Agregar Nueva Mascota**

Ahora que tenemos la capacidad de ver y crear nuevos dueños de mascotas, necesitamos poder agregar sus mascotas. Ahora, de vuelta en la **Página de Inicio**, haz clic en `Configurar Acción` *dentro de la tarjeta* y haz clic en popup. Esto creará un enlace en la tarjeta llamado popup, haz clic en él. Dentro de la ventana emergente, haz clic en `Agregar Bloque` → `Formulario (agregar nuevo)` → `Registros Asociados` → `Pets`. Dentro de este nuevo bloque, haz clic en `Configurar Campos` y agrega Nombre, Tipo de Mascota, Fecha de nacimiento. Esto te permite completar estos valores al crear una nueva mascota. Finalmente, haz clic en `Configurar Acción` → `Enviar`.

**📜 Listar Mascotas Existentes**

Ahora, justo debajo de este nuevo bloque, haz clic en `Agregar Bloque` → `Lista` → `Registros Asociados` → `Pets`. Dentro de este nuevo bloque, haz clic en `Configurar Campos` y agrega Nombre, Tipo de Mascota y Fecha de nacimiento. La ventana emergente debería verse algo así. Ya tenía una mascota en mi base de datos, por lo que puede verse ligeramente diferente.

![Listar Mascotas Existentes.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Haz clic fuera de la ventana emergente para cerrarla. Ahora tenemos la capacidad de crear y ver mascotas. Tu interfaz de usuario ahora debería verse algo así.

![IU.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Probar**

Ahora haz clic en el botón naranja del Editor de IU para salir del Editor de IU. Puedes jugar con la interfaz de usuario y crear Mascotas y Dueños de Mascotas.

Este blog omitió muchas partes, incluyendo la autenticación de usuarios, interfaces de usuario más complejas, el despliegue de un entorno de producción, etc. Puede que las cubra en blogs posteriores.

💡 Leer más:

* [Construyendo un Asistente de IA con Langflow y AstraDB: Desde la Arquitectura hasta la Integración con NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Desarrollando un Plugin para Enviar Mensajes de WhatsApp en NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Gobernanza de Arquitectura Simplificada: Construyendo un Catálogo de Aplicaciones con NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
