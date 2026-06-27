---
title: "Gobernanza de Arquitectura Simplificada: Construyendo un Catálogo de Aplicaciones con NocoBase"
description: "El objetivo es demostrar el potencial y la facilidad de NocoBase para desarrollar aplicaciones web sin necesidad de codificación."
---

📝 **Nota:** Este artículo se actualizó por última vez el 23 de enero de 2026. Actualizamos la información periódicamente para garantizar que tengas las últimas novedades. 😊

Este blog fue producido por Leandro Martins y se publicó originalmente en [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

El objetivo es demostrar el potencial y la facilidad de [NocoBase](https://www.nocobase.com/) para desarrollar aplicaciones web sin necesidad de programar. Como caso práctico, crearé un catálogo de aplicaciones para ayudar con la gobernanza de la arquitectura. Este caso implicará modelado, instalación, creación de tablas, menús, formularios, gráficos y flujos de trabajo utilizando las funciones de NocoBase.

Para este artículo, utilizaremos las siguientes tecnologías: NocoBase, Postgres y Docker.

---

💬 Oye, estás leyendo el blog de NocoBase. NocoBase es la plataforma de desarrollo low-code/sin código más extensible impulsada por IA para crear aplicaciones empresariales, herramientas internas y todo tipo de sistemas. Es completamente autogestionada, basada en plugins y amigable para desarrolladores. → [Explora NocoBase en GitHub](https://github.com/nocobase/nocobase)

---

## **¿Qué es NocoBase?**

[NocoBase](https://www.nocobase.com/) es una plataforma de código abierto escrita en JavaScript, que utiliza NodeJS, TypeScript y AntDesign, diseñada para crear aplicaciones personalizadas sin necesidad de programar. Es una solución backend low-code que permite la creación visual de tablas, formularios personalizados, automatización de flujos de trabajo e interfaces a medida.

![¿Qué es NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Aspectos destacados de NocoBase**:

* **Comunidad activa**: Un foro muy activo para apoyar el desarrollo de plugins y la resolución de problemas.
* **Código revisado constantemente**: Actualizaciones frecuentes con contribuciones en GitHub, con más de 13k estrellas.
* **Compatibilidad con bases de datos**: Soporta bases de datos relacionales principales como Postgres y MySQL.
* **Modelado visual de datos**: Define tablas y datos visualmente usando el plugin de Base de Datos Principal.
* **Amplia biblioteca de plugins**: Ofrece una amplia gama de plugins gratuitos y de pago, con la capacidad de desarrollar plugins personalizados.

* **Empleados de IA integrados en el sistema**: Integra sin problemas capacidades de IA en interfaces de usuario, flujos de trabajo empresariales y contextos de datos, permitiendo que la IA se aplique de manera práctica en escenarios empresariales reales.

![Aspectos destacados de NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Resumen del caso práctico**

Para mostrar algunas de las funciones de NocoBase, crearemos un caso práctico llamado *Portal de Arquitectura*. Este portal está diseñado para organizar datos sobre las aplicaciones de una organización, con las siguientes funcionalidades:

* **Catálogo de aplicaciones**.
* **Recordatorios de actualizaciones**, como actualizaciones de versiones y renovaciones de certificados.
* **Catálogo de API** para los sistemas de la organización.
* **Gráficos** para una visualización de datos informativa.

![Resumen del caso práctico.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Etapas de desarrollo**

### **Modelado de los datos**

El primer paso es mapear y definir los campos que incluiremos en el Portal de Arquitectura. A continuación, se muestra un ejemplo:

```
1. Catálogo de Aplicaciones

Aplicaciones:
id: Identificador único.
name: Nombre de la aplicación.
description: Descripción detallada de la aplicación.
stack: Tecnologías utilizadas.
owner: Persona o equipo responsable.
created_at: Fecha de creación.
last_updated: Fecha de la última actualización.

Recordatorios (Vinculados a Aplicaciones):
id: Identificador único.
application_id: Referencia a la aplicación.
type: Tipo de recordatorio (ej., actualización de versión, renovación de certificado).
description: Descripción del recordatorio.
scheduled_date: Fecha programada para el recordatorio.
status: Estado (ej., Pendiente, Completado).

2. Catálogo de API

APIs:
id: Identificador único.
Application_id: Referencia al sistema correspondiente.
name: Nombre de la API.
description: Descripción funcional de la API.
documentation_url: Enlace a la documentación oficial.
last_updated: Fecha de la última actualización.
version: Versión actual.
```

### **Instalación de NocoBase**

Para la [instalación](https://docs.nocobase.com/welcome/getting-started/installation) y configuración, opté por usar la versión Docker localmente. Otras opciones de instalación incluyen npm o fuente Git.

A continuación, se muestra el código YAML para Docker Compose. Después de instalar Docker, navega al directorio del archivo YAML y ejecuta el siguiente comando:

```
docker compose up -d
```

Esto iniciará NocoBase en tu máquina en el puerto `13000`. Abre [`http://localhost:13000`](http://localhost:13000/) en tu navegador web. Las credenciales predeterminadas son [`admin@nocobase.com`](mailto:admin@nocobase.com) y `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # La clave secreta de la aplicación, utilizada para generar tokens de usuario, etc.
      # Si se cambia APP_KEY, los tokens antiguos también dejarán de ser válidos.
      # Puede ser cualquier cadena aleatoria, y asegúrate de que no esté expuesta.
      - APP_KEY=your-secret-key
      # Tipo de base de datos, soporta postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Host de la base de datos, se puede reemplazar con la IP de un servidor de base de datos existente
      - DB_HOST=postgres
      # Nombre de la base de datos
      - DB_DATABASE=nocobase
      # Usuario de la base de datos
      - DB_USER=nocobase
      # Contraseña de la base de datos
      - DB_PASSWORD=nocobase
      # Zona horaria
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Si se utiliza un servidor de base de datos existente, el servicio postgres se puede omitir
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Creación de tablas y datos**

Usando el plugin **Administrador de fuentes de datos**, podemos crear colecciones (tablas) y definir campos. El proceso es simple y sigue el modelo descrito anteriormente. A continuación, se muestran algunas referencias y enlaces para obtener más detalles sobre el plugin [aquí](https://www.nocobase.com/en/plugins)).

![Creación de tablas y datos.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Creación de tablas y datos.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Creación de menús**

Al hacer clic en el icono con forma de lápiz en el lado derecho de la pantalla, puedes crear menús superiores y laterales, como se muestra en la imagen. Vamos a replicarlo como se muestra en la imagen.

![Creación de menús.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Creación de formularios**

Crear formularios (CRUD) también es muy sencillo. NocoBase utiliza bloques para crear tablas, formularios, detalles, listas, gráficos, tarjetas y más. Después de seleccionar el tipo de bloque, simplemente elige qué colección (tabla) deseas vincular a este bloque, y el componente (bloque) vinculado a la colección aparece mágicamente. Cada bloque tiene su propia configuración de personalización. Para más detalles sobre los bloques, consulta aquí.

![Creación de formularios.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Creación de gráficos**

Crear gráficos también es simple. Solo agrega un bloque llamado *Gráfico* y selecciona la colección que deseas usar como fuente de datos, como se muestra en la imagen a continuación.

![Creación de gráficos.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Una vez seleccionado el bloque, puedes configurar las propiedades del gráfico. La imagen a continuación muestra las opciones de configuración del gráfico, lo que te permite definir indicadores, agrupaciones, filtros, varios tipos de gráficos y títulos, entre otras propiedades disponibles. Aquí, puedes explorar todas las posibilidades de configuración.

![Creación de gráficos.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Creación de un flujo de trabajo programado para recordatorios**

NocoBase te permite crear flujos de trabajo automatizados para realizar varios tipos de tareas a través de eventos. Los tres tipos de desencadenantes son: *Evento de colección, Evento programado y Evento posterior a la acción.* Usando estos desencadenantes, puedes crear acciones dentro del sistema, como enviar notificaciones, insertar datos en otras tablas o realizar solicitudes a una API externa. A continuación, se muestra un ejemplo de flujo de trabajo para enviar notificaciones dentro de la aplicación.

![Flujo de trabajo.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

En nuestro caso, crearemos un flujo de trabajo para enviar una notificación el día en que está programado un recordatorio. Será un **Evento programado** para ejecutarse todos los días a una hora específica, como se muestra en las imágenes a continuación.

![Flujo de trabajo.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Flujo de trabajo.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

Además de configurar la programación, debes configurar el flujo de trabajo para consultar la colección **Recordatorios**, obtener los recordatorios del día, recorrer cada uno y enviar notificaciones para cada recordatorio, como se muestra en la imagen a continuación. El proceso es simple: solo agrega estas acciones haciendo clic en el botón "+" y configurándolas.

![Flujo de trabajo.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Después de completar la configuración, simplemente activa el flujo de trabajo haciendo clic en el botón "Activar" en la esquina superior derecha. Para ver los resultados de la ejecución, haz clic en "…" en la esquina superior derecha y selecciona **Historial de ejecuciones**, como se muestra en la imagen a continuación.

![Flujo de trabajo.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Conclusión**

Como se ha demostrado, NocoBase ofrece numerosas funciones para acelerar el desarrollo de aplicaciones. Dependiendo de la escala y los requisitos, proporciona flexibilidad para crear aplicaciones, con capacidades adicionales como gestión de archivos, internacionalización, soporte móvil y edición de temas. Incluso puedes desarrollar tus propios plugins o comprar los comerciales disponibles en el marketplace.

Lecturas relacionadas:

* [¿Cómo crear aplicaciones con NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Las 8 mejores plataformas de desarrollo sin código en 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [Las 12 mejores herramientas de código abierto sin código con más estrellas en GitHub](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Los 15 mejores proyectos de código abierto low-code con más estrellas en GitHub](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Las 6 mejores herramientas sin código para desarrolladores](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Las 7 mejores plataformas de desarrollo rápido de código abierto](https://www.nocobase.com/en/blog/rapid-development-platform)
