---
title: "NocoBase v1.7.0-alpha.4: Soporte para campos de texto largo como campos de título para campos de asociación"
description: "Nota de la versión v1.7.0-alpha.4"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**
  - Soporte para campos de texto largo como campos de título para campos de asociación ([#6495](https://github.com/nocobase/nocobase/pull/6495)) por @katherinehhh

  - Soporte para ajustes de estilo de campo: tamaño de fuente, peso de fuente y estilo de fuente ([#6489](https://github.com/nocobase/nocobase/pull/6489)) por @katherinehhh

- **[Variables y secretos]** Soporte para variables de entorno en la URL de botones de enlace ([#6494](https://github.com/nocobase/nocobase/pull/6494)) por @katherinehhh

- **[Flujo de trabajo: Nodo de agregación]** Soporte para configurar la precisión del resultado de agregación ([#6491](https://github.com/nocobase/nocobase/pull/6491)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Soporte para coincidencia difusa en campos seleccionados en el botón de filtro ([#6496](https://github.com/nocobase/nocobase/pull/6496)) por @katherinehhh

- **[Notificación: Correo electrónico]** Añadir descripción de configuración del campo seguro. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) por @sheldon66

- **[Flujo de trabajo: Nodo de correo]** Añadir descripción de configuración del campo seguro. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) por @sheldon66

- **[Calendario]** Plugin de calendario con ajustes opcionales para habilitar o deshabilitar la creación rápida de eventos ([#6391](https://github.com/nocobase/nocobase/pull/6391)) por @Cyx649312038

- **[Cliente WEB]** Añadir mensaje de confirmación secundaria para Limpiar Caché ([#6505](https://github.com/nocobase/nocobase/pull/6505)) por @katherinehhh

- **[Gestor de correo electrónico]** Soporte para reautorizar y seleccionar automáticamente la cuenta al enviar un correo electrónico por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**
  - Transparencia del botón de acción que causa problemas de visualización de configuración al pasar el ratón ([#6529](https://github.com/nocobase/nocobase/pull/6529)) por @katherinehhh

  - Error de envío del campo de hora en configuración regional china (sintaxis de entrada no válida para tipo time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) por @katherinehhh

  - La altura de la subtabla en el formulario se establece junto con la altura del formulario ([#6518](https://github.com/nocobase/nocobase/pull/6518)) por @katherinehhh

  - La regla de enlace de campo oculto por defecto con valor retenido no funciona ([#6503](https://github.com/nocobase/nocobase/pull/6503)) por @katherinehhh

  - El botón "Añadir hijo" no muestra el modo solo icono ([#6504](https://github.com/nocobase/nocobase/pull/6504)) por @katherinehhh

- **[servidor]** El comando de actualización puede causar errores en el flujo de trabajo ([#6524](https://github.com/nocobase/nocobase/pull/6524)) por @gchust

- **[utilidades]** Error conocido de 'responsive de escritorio' ([#6476](https://github.com/nocobase/nocobase/pull/6476)) por @zhangzhonghe

- **[evaluadores]** Revertir decimales redondeados a 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) por @mytharcher

- **[Autenticación]**
  - Recortar opciones del autenticador ([#6527](https://github.com/nocobase/nocobase/pull/6527)) por @2013xile

  - X-Authenticator faltante ([#6526](https://github.com/nocobase/nocobase/pull/6526)) por @chenos

- **[Bloque: Mapa]**
  - Problema de gestión de claves del bloque de mapa que causa fallos en las solicitudes debido a caracteres invisibles ([#6521](https://github.com/nocobase/nocobase/pull/6521)) por @katherinehhh

  - Los campos de clave secreta no activan la validación en la gestión del mapa ([#6509](https://github.com/nocobase/nocobase/pull/6509)) por @katherinehhh

- **[Gestor de archivos]**
  - No se puede acceder a los archivos almacenados en COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) por @chenos

  - Codificar URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) por @chenos

- **[Cliente WEB]** La ruta en la tabla de gestión de rutas es diferente de la ruta real ([#6483](https://github.com/nocobase/nocobase/pull/6483)) por @zhangzhonghe

- **[Bloque: Panel de acciones]** Problema de diseño en el panel de acciones móvil después de ocultar botones debido al control de permisos ([#6502](https://github.com/nocobase/nocobase/pull/6502)) por @katherinehhh

- **[Fuente de datos: Principal]** No se puede crear una vista de MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) por @aaaaaajie

- **[Flujo de trabajo]** Corregir el conteo de tareas heredadas después de eliminar el flujo de trabajo ([#6493](https://github.com/nocobase/nocobase/pull/6493)) por @mytharcher

- **[Acción: Exportar registros Pro]** No se pueden exportar archivos adjuntos por @chenos

- **[Gestor de copias de seguridad]**
  - Los archivos subidos no se han restaurado al crear una subaplicación desde una plantilla de copia de seguridad por @gchust

  - La restauración puede causar errores de ejecución del flujo de trabajo por @gchust

  - Fallo en la restauración de la base de datos MySQL causado por superposición del conjunto GTID por @gchust

- **[WeCom]** Resolver variables de entorno y secretos al recuperar la configuración de notificación. por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Corregir error en la tabla de procesos cuando se elimina un trabajo por @mytharcher

  - Cambiar la aprobación devuelta como pendiente por @mytharcher

  - Corregir error lanzado al añadir resultado de nodo de consulta por @mytharcher

  - Corregir botón de acción faltante en la tabla de procesos por @mytharcher

  - Problema de estilo con el diálogo emergente 'Aplicar nuevo' por @zhangzhonghe
