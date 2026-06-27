---
title: "NocoBase v1.7.0-beta.34: Mejora de la funcionalidad de importación"
description: "Nota de la versión v1.7.0-beta.34"
---

### 🎉 Nuevas Funcionalidades

- **[indefinido]** Nuevo soporte para Gitpod que permite iniciar el entorno de desarrollo con un solo clic y comenzar a desarrollar rápidamente. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) por @kerwin612
- **[Acción: Importar registros Pro]**

  - Soporte para definir registros únicos mediante múltiples campos al configurar la importación por @aaaaaajie
  - Soporte para configurar la sobrescritura de celdas en blanco e ignorarlas al configurar la importación por @aaaaaajie
- **[Campo de colección: Código]** Añadida configuración de altura para el campo del editor de código por @mytharcher
- **[Gestor de correo electrónico]**

  - soporte para marcar correos como pendientes y añadir notas por @jiannx
  - soporte para etiquetas y configuración combinada por @jiannx

### 🚀 Mejoras

- **[cliente]**

  - mejorar estilos para el componente de filtro de rango de fechas ([#6939](https://github.com/nocobase/nocobase/pull/6939)) por @katherinehhh
  - Corregido problema donde los controles ocultos del formulario capturaban la tecla tab, mejorando significativamente la eficiencia de operación del formulario ([#6942](https://github.com/nocobase/nocobase/pull/6942)) por @kerwin612
  - validar campos obligatorios antes de mostrar el diálogo de confirmación ([#6931](https://github.com/nocobase/nocobase/pull/6931)) por @katherinehhh
  - ajustar la visualización del contenido de la opción de filtro de fecha ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh
- **[indefinido]** Actualizar versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**

  - la configuración de visibilidad de los dos puntos en la etiqueta del formulario no funciona ([#6947](https://github.com/nocobase/nocobase/pull/6947)) por @katherinehhh
  - Redimensionar bloque arrastrando no funciona ([#6944](https://github.com/nocobase/nocobase/pull/6944)) por @chenos
  - la internacionalización del componente de asignación de campos no funciona ([#6945](https://github.com/nocobase/nocobase/pull/6945)) por @katherinehhh
  - fallo en la verificación de la condición noneOf en reglas de vinculación ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh
  - variables de condición anidadas en reglas de vinculación no se renderizan correctamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh
  - la configuración de altura del bloque no se aplica en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh
  - Corregido el problema con el botón de copiar en la ventana emergente de error que copiaba como [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) por @kerwin612
  - análisis incorrecto de variables de fecha en el límite de rango de fechas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh
- **[base de datos]** Corregida la generación automática de uuid o nanoid que no funcionaba en asociaciones muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie
- **[indefinido]** Usar Node 20 debido a los requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher
- **[Campo de colección: Markdown(Vditor)]** problema de ancho del componente del campo markdown-vditor después de hacer zoom in y out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) por @katherinehhh
- **[Documentación de la API]** Añadir información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos
- **[Notificación: Mensaje en la aplicación]** Resuelto un problema donde la acción "marcar todo como leído" en mensajes dentro de la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66
- **[Gestor de fuentes de datos]** Resuelto problema con la ordenación por arrastrar y soltar que no funcionaba ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos
- **[Acción: Exportar registros]** Corregido un problema donde las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie
- **[Flujo de trabajo: Evento de acción personalizada]** Evitar error causado por el orden de carga del plugin por @mytharcher
- **[Almacenamiento de archivos: S3(Pro)]**

  - Corregidos parámetros de subida duplicados por @mytharcher
  - Corregida URL de vista previa y parámetro de subida por @mytharcher
- **[Bloque: Formulario multipaso]** Corregir tipos por @mytharcher
- **[Flujo de trabajo: Aprobación]**

  - Corregido ID de registro incorrecto para ViewAction por @mytharcher
  - Corregir locale por @mytharcher
  - Corregir appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher
- **[Gestor de correo electrónico]**

  - corrección: eliminar columna de acción por @jiannx
  - corrección de error en el modal de añadir nota por @jiannx
  - corrección de permisos de API de las colecciones mailMessageNotes y mailMessageLabels por @jiannx
