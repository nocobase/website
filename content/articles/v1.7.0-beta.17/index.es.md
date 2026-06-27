---
title: "NocoBase v1.7.0-beta.17: Soporte para actualizar datos en otros bloques de datos después de actualizar datos en un bloque"
description: "Nota de la versión v1.7.0-beta.17"
---

### 🎉 Nuevas Funcionalidades

- **[Departamentos]** Los plugins de Departamento, URL de Adjunto y mensaje de respuesta de Flujo de Trabajo ahora son gratuitos ([#6663](https://github.com/nocobase/nocobase/pull/6663)) por @chenos

- **[Acción: Actualización por lotes]** Soporte para refrescar datos en otros bloques de datos después de actualizar datos en un bloque ([#6591](https://github.com/nocobase/nocobase/pull/6591)) por @zhangzhonghe

### 🚀 Mejoras

- **[Flujo de Trabajo]** Soporte para URL emergente fija para tareas de flujo de trabajo ([#6640](https://github.com/nocobase/nocobase/pull/6640)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Al cambiar al menú de grupo, no se debe saltar a una página que ya ha sido ocultada en el menú ([#6654](https://github.com/nocobase/nocobase/pull/6654)) por @zhangzhonghe

  - El formulario de filtro no debe mostrar el aviso de "Cambios sin guardar" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) por @zhangzhonghe

  - Corregido el problema de que las imágenes de vista previa quedaban ocultas ([#6651](https://github.com/nocobase/nocobase/pull/6651)) por @zhangzhonghe

  - En el formulario de filtro, al hacer clic en el botón de filtro, si hay campos que no han pasado la validación, el filtrado se sigue ejecutando ([#6659](https://github.com/nocobase/nocobase/pull/6659)) por @zhangzhonghe

  - La opción "permitir múltiples" no funciona para el campo de relación ([#6661](https://github.com/nocobase/nocobase/pull/6661)) por @katherinehhh

  - En el bloque de formulario, el valor predeterminado de la configuración del campo se muestra primero como la cadena de variable original y luego desaparece ([#6649](https://github.com/nocobase/nocobase/pull/6649)) por @zhangzhonghe

- **[Campo de colección: Adjunto (URL)]** solo se permiten colecciones de archivos con acceso URL público ([#6664](https://github.com/nocobase/nocobase/pull/6664)) por @katherinehhh

- **[Almacenamiento de archivos: S3(Pro)]**
  - Configuración individual de baseurl y público, mejora la UX de configuración de almacenamiento S3 Pro por @jiannx

  - Organizar idioma por @jiannx

- **[Flujo de Trabajo: Aprobación]** Soporte para URL fija para elementos de aprobación en el centro de tareas por @mytharcher

- **[Gestor de migraciones]** la opción de omitir copia de seguridad automática se vuelve inválida si aparece la ventana emergente de variable de entorno durante la migración por @gchust
