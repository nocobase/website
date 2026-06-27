---
title: "NocoBase v1.8.0-beta.7: Soporte para copiar contenido de campos de texto con un solo clic"
description: "Nota de la versión v1.8.0-beta.7"
---

### 🎉 Nuevas Funcionalidades

- **[Copia de texto]** Soporte para copiar el contenido de campos de texto con un solo clic ([#6954](https://github.com/nocobase/nocobase/pull/6954)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[servidor]** No se pueden leer propiedades de undefined (leyendo 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) por @chenos

- **[cliente]**
  - El selector de campos de asociación no limpia los datos seleccionados después del envío ([#7067](https://github.com/nocobase/nocobase/pull/7067)) por @katherinehhh

  - Después de crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie

- **[Control de acceso]** Se corrigió un problema donde la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie

- **[Flujo de trabajo: Nodo de bucle]** Se corrige la ejecución de la rama del bucle cuando la condición no se cumple ([#7063](https://github.com/nocobase/nocobase/pull/7063)) por @mytharcher

- **[Administrador de fuentes de datos]** Los cambios de alcance ahora se aplican inmediatamente a todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige la variable de URL de redirección que no se analizaba por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrige la variable de activación al filtrar por tipo por @mytharcher

  - Se corrige que las estadísticas de tareas pendientes no se actualizaban cuando se cancelaba la ejecución por @mytharcher
