---
title: "NocoBase v1.8.0-alpha.8: Soporte para copiar contenido de campos de texto con un solo clic"
description: "Nota de la versión v1.8.0-alpha.8"
---

### 🎉 Nuevas funciones

- **[Copia de texto]** Soporte para copiar el contenido de campos de texto con un solo clic ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

- **[Gestor de correo electrónico]** Soporte para eliminar correos electrónicos por @jiannx

### 🚀 Mejoras

- **[cliente]**
  - Se añadieron las opciones "vacío" y "no vacío" a las reglas de vinculación de campos de casilla de verificación ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh

  - El ancho del contenedor del logotipo se adapta al tipo de contenido (168px fijo para imágenes, ancho automático para texto) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) por @Cyx649312038

- **[Gestor de tareas asíncronas]** Mejora del rendimiento en la creación de tareas durante la exportación ([#7078](https://github.com/nocobase/nocobase/pull/7078)) por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Se añadió una opción de campo adicional para la lista de reasignados por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Pérdida del punto decimal al cambiar el componente de cantidad de máscara a inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) por @katherinehhh

  - Renderizado incorrecto de Markdown (Vditor) en subtablas ([#7074](https://github.com/nocobase/nocobase/pull/7074)) por @katherinehhh

  - Después de crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie

  - El selector de campos de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[Control de acceso]** Se corrigió un problema por el cual la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie

- **[Gestor de fuentes de datos]** Los cambios de ámbito ahora surten efecto inmediatamente para todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie

- **[Flujo de trabajo: Nodo de bucle]** Se corrigió la ejecución de la rama del bucle cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió que la variable de la URL de redirección no se analizaba por @mytharcher

- **[Flujo de trabajo: Aprobación]** Se corrigió que las estadísticas de tareas pendientes no se actualizaban cuando se cancelaba la ejecución por @mytharcher

- **[Gestor de correo electrónico]** Fallo al eliminar correo electrónico por @jiannx

- **[Gestor de copias de seguridad]** Error de comando desconocido al restaurar copias de seguridad de MySQL en la plataforma Windows por @gchust
