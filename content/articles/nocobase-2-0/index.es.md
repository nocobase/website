---
title: "NocoBase 2.0: Conoce a tus empleados de IA"
description: "¡Ahora es el momento de presentar oficialmente NocoBase 2.0-alpha!"
---

NocoBase 1.0-alpha se lanzó el 28 de abril de 2024, marcando el inicio de nuestro viaje comercial.
En el último año, hemos recibido comentarios de miles de usuarios, contribuciones de código de desarrolladores de todo el mundo y pedidos comerciales de cientos de empresas en más de 50 países.

Agradecemos sinceramente a cada usuario, colaborador y cliente de pago por su confianza y apoyo.

Durante los últimos seis meses, mientras iterábamos y mejorábamos continuamente la versión 1.x, también hemos dedicado un tiempo significativo a pensar, discutir y desarrollar la próxima generación de NocoBase.

Ahora, es el momento de presentar oficialmente **¡NocoBase 2.0-alpha!**

## Empleados de IA

El año pasado ha sido testigo de rápidos avances en IA, con grandes modelos que muestran capacidades notables, incluso asombrosas, en muchos dominios.

Como usuarios intensivos de IA nosotros mismos, hemos integrado la IA directamente en NocoBase 2.0 en forma de **Empleados de IA**: colegas inteligentes que trabajan dentro de tu sistema.

Los Empleados de IA en NocoBase **no son chatbots**, ni agentes aislados.

Están **integrados sin problemas** en tu sistema empresarial, capaces de comprender el contexto y ejecutar tareas directamente.

* Aparecen donde los necesites, junto a tus tablas y formularios, listos para ayudar.
* Pueden resumir correos electrónicos, analizar datos, organizar contenido no estructurado y rellenar formularios automáticamente, diseñar modelos de datos o incluso escribir código JavaScript.
* Recuperan automáticamente datos contextuales y estructuras de página para la ejecución inteligente de tareas.
* Cada uno tiene habilidades, herramientas y bases de conocimiento únicas.
* Puedes crear un número ilimitado de Empleados de IA para formar tu propio equipo de IA.

[Más información sobre Empleados de IA](https://v2.docs.nocobase.com/ai-employees)

[Probar la Demo](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Un Nuevo Sistema de Páginas 2.0

Si bien NocoBase siempre se ha basado en plugins, la versión 1.x tenía limitaciones al tratar con interacciones dinámicas, diseños flexibles o lógica personalizada en el frontend.

Era difícil lograr tales requisitos sin un costo significativo.

NocoBase 2.0 introduce un **sistema de páginas completamente reestructurado** diseñado para soportar necesidades de frontend personalizadas y complejas de manera eficiente.

### RUNJS

**RunJS** proporciona una forma ligera de extender y personalizar la lógica o el estilo de la interfaz de usuario, sin necesidad de crear plugins ni modificar el código fuente.

Dentro del diseñador de páginas, puedes escribir JavaScript directamente para:

* Personalizar el contenido renderizado (campos, bloques, columnas, elementos, etc.)
* Definir interacciones personalizadas (acciones de botones, disparadores de eventos)
* Combinar con datos contextuales para comportamientos dinámicos

RunJS es compatible con:

* Bloque JS
* Acción JS
* Campo JS
* Elemento JS
* Reglas de enlace
* Flujos de eventos

[Más información sobre RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Flujo de Eventos

En NocoBase 1.x, el sistema de reglas de enlace permitía una orquestación de lógica limitada, restringida a un solo bloque.

NocoBase 2.0 introduce el **Flujo de Eventos**, una mejora importante en la configuración de la lógica del frontend.

Un Flujo de Eventos consta de:

* **Eventos desencadenantes**, como antes de renderizar, al hacer clic o al cambiar un valor
* **Condiciones de activación**
* **Pasos de acción**, como mostrar notificaciones, actualizar bloques de destino o ejecutar JavaScript

[Más información sobre el Flujo de Eventos](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Diseño de Cuadrícula

En la versión 1.x, los bloques y campos usaban un diseño de arrastre flexible de ancho completo, lo que limitaba la precisión y la estética.

NocoBase 2.0 introduce un **nuevo sistema de diseño de cuadrícula**, que permite que cada elemento se alinee con unidades de cuadrícula para un control más refinado.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Bloques y Modales Reutilizables

En 1.x, las funciones de copia/referencia para bloques eran limitadas y propensas a errores, y no se podían referenciar modales completos.

NocoBase 2.0 redefine esto por completo, permitiendo una **referencia y duplicación flexibles** tanto de bloques como de modales, reduciendo drásticamente el esfuerzo de configuración.

[Más información sobre Referencias y Copias de Bloques](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[Más información sobre Referencias de Modales](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Experiencia de Bloque Mejorada

Basándonos en los comentarios de los usuarios, NocoBase 2.0 trae muchas mejoras a los componentes de bloque.

Por ejemplo, las tablas ahora admiten **edición en línea** directamente dentro de las celdas, sin necesidad de ventanas emergentes.

Más mejoras están en camino.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Mejor Rendimiento

NocoBase 2.0 ofrece un rendimiento frontend significativamente mejorado en comparación con 1.x.

## FlowEngine

El nuevo sistema de páginas en 2.0 funciona con **FlowEngine**, un motor frontend low-code de próxima generación que combina **Modelos** y **Flujos**.

Simplifica la lógica del frontend, mejora la reutilización y la mantenibilidad.

Al aprovechar la naturaleza configurable de Flow, aporta orquestación sin código a los componentes del frontend y la lógica de negocio.

Desarrollar frontends de plugins en 1.x a menudo implicaba desafíos complejos. Con FlowEngine, estos ahora se simplifican enormemente.

[Más información sobre FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Aplicación y Multi-Espacio

La versión 1.x admitía una capacidad básica de múltiples aplicaciones, pero todas las aplicaciones compartían un solo proceso y no podían ser monitorizadas o gestionadas individualmente.

NocoBase 2.0 introduce **una arquitectura Multi-App y Multi-Espacio completamente nueva**.

* **Plugin Multi-App** *(en desarrollo)*
  Permite la creación y gestión dinámica de múltiples aplicaciones independientes sin necesidad de implementaciones separadas.
  Cada aplicación se ejecuta como una instancia independiente con su propia base de datos, plugins y configuración, ya sea en procesos aislados o compartidos.
  La aplicación principal puede monitorizar y gestionar el uso de recursos y el estado de las sub-aplicaciones, ideal para escenarios multi-tenant.
* **Plugin Multi-Espacio**
  Permite el aislamiento lógico dentro de una sola instancia, perfecto para escenarios como configuraciones de múltiples sucursales o múltiples fábricas.
  La lógica de negocio, los flujos de trabajo y las configuraciones se mantienen consistentes, mientras que los datos permanecen completamente aislados.

[Más información sobre Multi-Espacio](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Nueva Visualización de Datos

El plugin de gráficos de 1.x se basaba en Ant Design Charts y ECharts, adecuado para casos simples pero limitado para visualizaciones complejas, interactivas o vinculadas.

NocoBase 2.0 introduce un **nuevo Plugin de Visualización de Datos** construido completamente sobre ECharts, que admite:

* Modo de configuración visual
* Modos SQL y JSON
* Interacción basada en eventos
* Vinculación de múltiples gráficos y desglose

Y si SQL o JSON parecen demasiado complejos, tu Empleado de IA **Nathan** puede ayudar.

[Más información sobre Visualización de Datos](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Sincronización de la Estructura de la Base de Datos y Cambio de Tipos de Campo

En la versión 1.x, las tablas y los campos solo se podían crear a través del Administrador de Fuentes de Datos de NocoBase y los tipos de campo no se podían cambiar después.

NocoBase 2.0 ahora permite:

* Sincronizar tablas y campos existentes desde tu base de datos principal
* Cambiar los tipos de campo después de la creación

Esto significa que puedes usar directamente un esquema de base de datos existente como tu fuente de datos principal.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Plugins Adicionales

### Historial de Registros

El plugin Historial de Registros rastrea automáticamente los cambios de datos (inserciones, actualizaciones, eliminaciones), guardando instantáneas y diferencias para fines de auditoría y reversión.

[Más información sobre Historial de Registros](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Borradores de Formularios

El plugin Borradores de Formularios guarda automáticamente los datos del borrador mientras los usuarios completan los formularios, evitando la pérdida accidental.

### Nuevo Gestor de Correo Electrónico

Reconstruido con FlowEngine, el nuevo Gestor de Correo Electrónico integra perfectamente a los Empleados de IA para resumir, analizar y redactar correos electrónicos.

También introduce el guardado automático de borradores y otras mejoras.

[Más información sobre el Gestor de Correo Electrónico](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Actualización de 1.x a 2.0

Actualizar de 1.x a 2.0 es sencillo: solo sigue la [guía oficial](https://v2.docs.nocobase.com/get-started/upgrading/docker).

Sin embargo, ten en cuenta que **NocoBase 2.0 está actualmente en alpha**, por lo que se espera cierta inestabilidad.

Gracias a la **arquitectura desacoplada entre la interfaz de usuario y los datos** de NocoBase, tus aplicaciones 1.x existentes permanecerán completamente intactas.

Al crear nuevas páginas, ahora puedes elegir entre los tipos **v1** y **v2**: selecciona v2 para acceder a las nuevas funciones de NocoBase 2.0.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
