---
title: "Anunciando NocoBase v1.8.0"
description: "Proceso de autenticación mejorado, soporte para variables estadísticas personalizadas y actualizaciones en la gestión de correo electrónico, optimizando la experiencia del flujo de trabajo y la interacción móvil"
---

## Nueva funcionalidad

### Olvido de contraseña: recuperación por correo electrónico compatible

Los usuarios ahora pueden recuperar sus contraseñas mediante correo electrónico. Active esta función en **Ajustes > Autenticación > Olvido de contraseña**, configure un canal de notificación por correo electrónico y personalice el correo de restablecimiento de contraseña (admite variables y formato HTML).

![Olvido de contraseña: recuperación por correo electrónico compatible.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Referencia: [Olvido de contraseña](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Variables de agregación personalizadas

Admite la creación de variables estadísticas como recuento, suma y promedio. Estas variables se pueden usar en insignias de menú, etiquetas de página y otras áreas para hacer la interfaz más intuitiva y rica en información.

![Variables de agregación personalizadas.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Referencia: [Variables personalizadas](https://docs.nocobase.com/handbook/custom-variables)

### Gestión de correo electrónico

El módulo de gestión de correo electrónico se ha actualizado por completo, ahora admite eliminación de correos, envío por lotes, configuración de intervalos de sincronización y varias mejoras en la experiencia del usuario.

![Gestión de correo electrónico.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Fuentes de datos

Admite el campo BIT de SQL Server en fuentes de datos externas y permite la carga bajo demanda de tablas de datos desde fuentes externas.

![Fuentes de datos.png](https://static-docs.nocobase.com/image-rml96b.png)

### Copia de texto

Admite la copia con un solo clic del contenido de campos de texto.

![Copia de texto.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Flujo de trabajo: nodo de solicitud HTTP] Soporte para el tipo `multipart/form-data`

Al configurar un nodo de solicitud HTTP en un flujo de trabajo, ahora puede seleccionar el tipo de contenido `multipart/form-data`. Una vez activado, el cuerpo de la solicitud acepta envíos form-data, incluidos campos `file`, para admitir la carga de archivos y escenarios similares.

![Flujo de trabajo.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Flujo de trabajo: Aprobación] Los resultados del nodo de aprobación admiten la generación de variables de registro de aprobación

Los resultados de la ejecución del nodo de aprobación ahora se pueden usar como variables en nodos posteriores, registrando automáticamente el estado y los datos relacionados.

![Flujo de trabajo: Aprobación](https://static-docs.nocobase.com/20250614095052.png)

Referencia: [Resultados del nodo](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Mejoras

### Entrada de relleno por escaneo

El componente genérico de entrada de texto ahora incluye una opción **Habilitar escaneo**. Cuando está activada, aparece un botón de escaneo en el lado derecho del campo de entrada, lo que permite ingresar datos mediante dispositivos de escaneo. También puede configurar si se permite la entrada manual.

![Entrada de relleno por escaneo.png](https://static-docs.nocobase.com/image-u7gfro.png)

Referencia: [Habilitar escaneo](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Soporte de localización en el bloque Markdown

El contenido de Markdown ahora admite localización usando la sintaxis `{{t 'xxx'}}` para insertar texto multilingüe.

![Soporte de localización en el bloque Markdown.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Referencia: [Localización](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Los enlaces del menú admiten abrir en una nueva ventana

Se ha añadido una nueva opción **"Abrir en una nueva ventana"** para los enlaces del menú, lo que permite personalizar cómo se abren los enlaces.

![Los enlaces del menú admiten abrir en una nueva ventana.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### El bloque de calendario admite la configuración del día de inicio de la semana

Ahora puede personalizar el día de inicio de la semana en la vista del calendario, eligiendo entre domingo o lunes para adaptarse a diferentes preferencias y hábitos regionales.

![El bloque de calendario admite la configuración del día de inicio de la semana.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Referencia: [Día de inicio de la semana](https://docs.nocobase.com/handbook/calendar#week-start-day)

### El modo de vista de Markdown (Vditor) admite hacer clic en la imagen para ampliar

En el modo de vista, las imágenes dentro del contenido de Markdown se pueden hacer clic para ampliar, mejorando la experiencia de lectura.

![El modo de vista de Markdown (Vditor) admite hacer clic en la imagen para ampliar.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Mejora integral de la funcionalidad y el rendimiento del módulo de flujo de trabajo

- Soporte para filtrar flujos de trabajo por más campos para mejorar la eficiencia de búsqueda
- Optimizar los estilos de visualización móvil para mejorar la experiencia del usuario
- Excluir la carga de campos JSON para mejorar significativamente el rendimiento de carga de la lista de planes de ejecución
- Agregar una nueva API de registro para ejecuciones de prueba de nodos
- Ajustar la interfaz API del método `getCollectionFieldOptions` para mejorar la flexibilidad

![Módulo de flujo de trabajo.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Mejoras de funcionalidad y experiencia en el proceso de aprobación

- Se agregó una opción de configuración para las listas de selección de personal de transferencia y firma adicional, que admite la visualización de más información de campo para ayudar a una selección más precisa
- Se ajustó la visualización de la hora en la línea de tiempo a hora absoluta para mejorar la legibilidad
- Se importaron tablas de datos relacionadas con la aprobación desde el complemento de flujo de trabajo para evitar que las tablas locales se sobrescriban
- Se ajustó la estructura de la interfaz API de variables para mejorar la flexibilidad y la coherencia

![Proceso de aprobación.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Soporte para configurar opciones del grupo de conexiones de base de datos mediante variables de entorno

Los parámetros del grupo de conexiones de la base de datos se pueden configurar de forma flexible a través de variables de entorno para mejorar la flexibilidad de la implementación.

![Soporte para configurar opciones del grupo de conexiones de base de datos mediante variables de entorno.png](https://static-docs.nocobase.com/image-tz87as.png)

### El bloque de comentarios admite paginación

Admite la carga paginada de comentarios para mejorar el rendimiento de carga y la experiencia de lectura en escenarios con grandes volúmenes de datos.

![El bloque de comentarios admite paginación.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Mejoras en la experiencia móvil

- Ventanas emergentes de notificación adaptadas a estilos móviles
- Lógica de detección de diseño móvil optimizada para mejorar la precisión de la capacidad de respuesta
