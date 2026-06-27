---
title: "Actualizaciones semanales de NocoBase: soporte de paginación en subtablas, optimización del flujo de trabajo y más"
description: "Actualizaciones semanales de NocoBase 2024-10-24"
---

Resume los registros de actualización semanal del producto. Las últimas versiones se pueden consultar en [nuestro blog](https://www.nocobase.com/en/blog/tags/release-notes).

Actualmente, NocoBase se actualiza con dos ramas: `main` y `next`.

* `main`: La versión más estable hasta la fecha, recomendada para instalación;
* `next`: Versión alfa, que incluye algunas funciones nuevas no publicadas. Esta versión puede no ser completamente estable y es adecuada para que desarrolladores o evaluadores prueben nuevas funciones con anticipación o realicen pruebas de compatibilidad.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Fecha de publicación: 2024-10-13*

### 🐛 Corrección de errores

- **[cliente]** el campo relacional obligatorio sigue activando un error de validación después de seleccionar un valor con una variable en el ámbito de datos ([#5399](https://github.com/nocobase/nocobase/pull/5399)) por @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Fecha de publicación: 2024-10-17*

### 🚀 Mejoras

- **[Flujo de trabajo]** añadir sugerencia relacionada con el campo de asociación al modo por lotes del nodo de actualización ([#5426](https://github.com/nocobase/nocobase/pull/5426)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**

  - corregir el problema del panel de editar perfil que queda cubierto por la subpágina ([#5409](https://github.com/nocobase/nocobase/pull/5409)) por @zhangzhonghe
  - Las variables del nodo de flujo de trabajo no muestran los campos de colección heredados ([#5415](https://github.com/nocobase/nocobase/pull/5415)) por @chenos
  - la paginación no se restablece después de limpiar los datos del filtro en el bloque de filtrado de tabla ([#5411](https://github.com/nocobase/nocobase/pull/5411)) por @katherinehhh
- **[Gestor de archivos]** eliminar el límite de 20 elementos al cargar almacenamientos en la configuración de la colección de plantillas de archivos ([#5430](https://github.com/nocobase/nocobase/pull/5430)) por @mytharcher
- **[Acción: Duplicar registro]** Corregir el problema por el cual la ventana emergente de edición masiva no muestra contenido ([#5412](https://github.com/nocobase/nocobase/pull/5412)) por @zhangzhonghe
- **[Visualización de datos]** Corregir el problema de que los valores predeterminados no se muestran en el bloque de filtro de gráfico ([#5405](https://github.com/nocobase/nocobase/pull/5405)) por @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Fecha de publicación: 2024-10-21*

### 🎉 Nuevas funciones

- **[prueba]** Los campos de asociación en los formularios de filtro admiten la configuración de si se permite la selección múltiple ([#5451](https://github.com/nocobase/nocobase/pull/5451)) por @zhangzhonghe
- **[cliente]** Añadir una variable llamada "Objeto padre" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) por @zhangzhonghe
  Referencia: [Objeto padre](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Corrección de errores

- **[cliente]**

  - Corregir que los parámetros de variable de búsqueda de URL no se analizan ([#5454](https://github.com/nocobase/nocobase/pull/5454)) por @zhangzhonghe
  - Corregir error de borrado de datos al seleccionar datos de asociación con ámbito de datos en subtablas anidadas ([#5441](https://github.com/nocobase/nocobase/pull/5441)) por @katherinehhh
  - corregir el color de fondo de la fila de tabla seleccionada ([#5445](https://github.com/nocobase/nocobase/pull/5445)) por @mytharcher
- **[Bloque: Mapa]** eliminar la configuración del nivel de zoom para los campos de mapa en la columna de la tabla ([#5457](https://github.com/nocobase/nocobase/pull/5457)) por @katherinehhh
- **[Gestor de archivos]** corregir la llamada al hook de la regla de almacenamiento en campos de solo lectura ([#5447](https://github.com/nocobase/nocobase/pull/5447)) por @mytharcher
- **[Fuente de datos: Principal]** corregir caso de e2e fallido debido a un cambio de componente ([#5437](https://github.com/nocobase/nocobase/pull/5437)) por @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Fecha de publicación: 2024-10-21*

### 🚀 Mejoras

- **[Flujo de trabajo: nodo de correo]** añadir marcador de posición al nodo de correo ([#5470](https://github.com/nocobase/nocobase/pull/5470)) por @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Fecha de publicación: 2024-10-22*

### 🐛 Corrección de errores

- **[Colección: Árbol]** Corregir el problema por el cual la colección de ruta para la colección de árbol de herencia no se crea automáticamente ([#5486](https://github.com/nocobase/nocobase/pull/5486)) por @2013xile
- **[Calendario]** mostrar la barra de paginación con datos en la tabla ([#5480](https://github.com/nocobase/nocobase/pull/5480)) por @katherinehhh
- **[Gestor de archivos]** corregir que el archivo no se puede subir debido al hook de regla. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) por @mytharcher
- **[Campo de colección: Fórmula]** Corregir cálculo incorrecto de fórmula en subtabla anidada de varios niveles ([#5469](https://github.com/nocobase/nocobase/pull/5469)) por @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Fecha de publicación: 2024-10-23*

### 🚀 Mejoras

- **[cliente]** Ajustar la sugerencia en el panel de configuración de vinculación de flujo de trabajo a un botón ([#5494](https://github.com/nocobase/nocobase/pull/5494)) por @mytharcher

### 🐛 Corrección de errores

- **[Gestor de archivos]** corregir la subida y eliminación de registros de archivos dentro de un bloque de asociación ([#5493](https://github.com/nocobase/nocobase/pull/5493)) por @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Fecha de publicación: 2024-10-16*

### 🎉 Nuevas funciones

- **[sdk]** Permite almacenar información del cliente en sessionStorage configurando la variable de entorno `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) por @2013xile
- **[Campo de colección: Adjunto (URL)]** Añadir campo de Adjunto (URL) por @katherinehhh

### 🚀 Mejoras

- **[cliente]**

  - optimizar la depuración remota ([#5394](https://github.com/nocobase/nocobase/pull/5394)) por @chenos
  - optimización de estilo para centrar el icono cuando los botones de acción usan solo icono ([#5413](https://github.com/nocobase/nocobase/pull/5413)) por @katherinehhh
  - cerrar automáticamente la ventana emergente de mensaje al actualizar el registro ([#5408](https://github.com/nocobase/nocobase/pull/5408)) por @katherinehhh
- **[Flujo de trabajo: nodo de solicitud HTTP]** Soporte para SSE (Eventos enviados por el servidor) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) por @chenos

### 🐛 Corrección de errores

- **[Formularios públicos]** Corregir problema al hacer clic en la configuración del formulario público ([#5392](https://github.com/nocobase/nocobase/pull/5392)) por @katherinehhh
- **[cliente]**

  - Corregir el problema de no mostrar el valor en el cuadro de entrada de valor predeterminado ([#5400](https://github.com/nocobase/nocobase/pull/5400)) por @zhangzhonghe
  - Corregir el error de no encontrar el campo de asociación cuando se establecen reglas de vinculación para la subtabla ([#5402](https://github.com/nocobase/nocobase/pull/5402)) por @zhangzhonghe
  - corregir la vista previa incorrecta de miniaturas cuando el tipo de archivo no es compatible por defecto ([#5401](https://github.com/nocobase/nocobase/pull/5401)) por @mytharcher
- **[Localización]** Corregir el problema por el cual las traducciones en el plugin de localización no surten efecto después de publicar ([#5416](https://github.com/nocobase/nocobase/pull/5416)) por @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Fecha de publicación: 2024-10-18*

### 🎉 Nuevas funciones

- **[Flujo de trabajo: nodo de bucle]** añadir más opciones de control a la configuración del nodo de bucle ([#5342](https://github.com/nocobase/nocobase/pull/5342)) por @mytharcher
  Referencia: [Nodo de bucle](https://docs.nocobase.com/handbook/workflow-loop)
- **[Flujo de trabajo]** Añadir botón de ejecución de prueba para nodos de flujo de trabajo y API para implementar la función de prueba ([#5407](https://github.com/nocobase/nocobase/pull/5407)) por @mytharcher
- **[Componente de campo: máscara]** Añadir componente de campo `mask`, soporta mostrar datos de campo como cadena enmascarada por @gchust
  Referencia: [Máscara](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Mejoras

- **[cliente]** permitir restablecer el título de la columna de la tabla al valor predeterminado ([#5439](https://github.com/nocobase/nocobase/pull/5439)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** corregido que las opciones del componente de campo no se han traducido correctamente ([#5442](https://github.com/nocobase/nocobase/pull/5442)) por @gchust
- **[Flujo de trabajo: nodo de solicitud HTTP]** corregir mensaje de error heredado en el nodo de solicitud ([#5443](https://github.com/nocobase/nocobase/pull/5443)) por @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Fecha de publicación: 2024-10-23*

### 🚀 Mejoras

- **[cliente]** subtabla soporta paginación ([#5450](https://github.com/nocobase/nocobase/pull/5450)) por @katherinehhh
- **[Bloque: Kanban]** Añadir soporte para habilitar o deshabilitar la ordenación por arrastrar y soltar en el bloque Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) por @katherinehhh
- **[Calendario]** mostrar ventana emergente de creación al seleccionar una ranura del calendario ([#5483](https://github.com/nocobase/nocobase/pull/5483)) por @gu-zhichao
- **[Gestor de múltiples aplicaciones]** soporte para la variable de entorno USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) por @chenos
- **[Flujo de trabajo]** Añadir componente de conjunto de campos tipo tarjeta ([#5464](https://github.com/nocobase/nocobase/pull/5464)) por @mytharcher

### 🐛 Corrección de errores

- **[cliente]** el valor de la variable se pierde después de actualizar la ventana emergente del bloque markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) por @katherinehhh
- **[Visualización de datos]** Corregir problemas al usar una fuente de datos Oracle externa para el plugin de visualización de datos, por ejemplo, problemas de formato de fecha ([#5436](https://github.com/nocobase/nocobase/pull/5436)) por @2013xile
- **[Gestor de archivos]** corregir que el archivo no se puede subir debido al hook de regla. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) por @mytharcher

## Acerca de NocoBase

NocoBase es una plataforma privada, de código abierto y sin código que ofrece control total y escalabilidad infinita. Permite a los equipos adaptarse rápidamente a los cambios mientras reduce significativamente los costos. Evite años de desarrollo e inversión sustancial implementando NocoBase en minutos.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

¡Descubra NocoBase en 3 minutos!

## 👇 Obtenga NocoBase

[**Página de inicio**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentación**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
