---
title: "NocoBase v1.7.0-alpha.15: Soporte para variables de agregación personalizadas"
description: "Nota de la versión v1.7.0-alpha.15"
---

### 🎉 Nuevas Funcionalidades

- **[client]** Soporte para variables de agregación personalizadas ([#6916](https://github.com/nocobase/nocobase/pull/6916)) por @zhangzhonghe
Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** Soporte para desplazamiento personalizado en filtros de campo de fecha ([#6854](https://github.com/nocobase/nocobase/pull/6854)) por @katherinehhh

- **[Campo de colección: Código]** Añadida configuración de altura para el editor de código por @mytharcher

- **[Acción: Importar registros Pro]**
  - Soporte para definir registros únicos mediante múltiples campos en la configuración de importación por @aaaaaajie

  - Soporte para configurar la sobrescritura de celdas en blanco e ignorarlas en la configuración de importación por @aaaaaajie

- **[Variables personalizadas]** Soporte para variables de agregación personalizadas por @zhangzhonghe
Referencia: [Variables personalizadas](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Gestor de correo electrónico]**
  - Soporte para marcar correos como pendientes y añadir notas por @jiannx

  - Soporte para etiquetas y configuración combinada por @jiannx

### 🚀 Mejoras

- **[client]** Ajuste en la visualización del contenido de las opciones de filtro de fecha ([#6928](https://github.com/nocobase/nocobase/pull/6928)) por @katherinehhh

- **[undefined]** Actualización de la versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

- **[Calendario]** Soporte para botón de actualización configurable en el bloque de calendario ([#6920](https://github.com/nocobase/nocobase/pull/6920)) por @katherinehhh

- **[Acción: Importar registros]**
  - Optimización del rendimiento de importación XLSX ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie

  - Optimización del rendimiento de importación XLSX ([#6850](https://github.com/nocobase/nocobase/pull/6850)) por @aaaaaajie

- **[Acción: Exportar registros]** Optimización del rendimiento para exportación a XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) por @aaaaaajie

- **[Bloque: iframe]** Mejora en la lógica de asignación de variables de fecha ([#6828](https://github.com/nocobase/nocobase/pull/6828)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** Corrección de locales en-US basados en claves zh-CN por @mytharcher

- **[Acción: Exportar registros Pro]** Optimización del rendimiento para exportación a XLSX por @aaaaaajie

- **[Flujo de trabajo: Aprobación]** Soporte para realizar todas las tareas pendientes en el centro de tareas del flujo de trabajo por @mytharcher

- **[Gestor de correo electrónico]** Implementación de esquema para envío de correos y soporte para IA por @jiannx

### 🐛 Corrección de Errores

- **[database]** Corregida la generación automática de uuid o nanoid que no funcionaba en asociaciones muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie

- **[client]**
  - Fallo en la verificación de condición noneOf en reglas de vinculación ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh

  - La configuración de altura del bloque no se aplicaba en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh

  - Variables de condición anidadas en reglas de vinculación no se renderizaban correctamente ([#6929](https://github.com/nocobase/nocobase/pull/6929)) por @katherinehhh

  - Análisis incorrecto de variables de fecha en el límite de rango de fechas ([#6930](https://github.com/nocobase/nocobase/pull/6930)) por @katherinehhh

  - Verificación incorrecta de valor vacío para campo de asociación toMany en regla de vinculación ([#6905](https://github.com/nocobase/nocobase/pull/6905)) por @katherinehhh

  - Error de renderizado causado por formato de estilo inválido al añadir campo de asociación ([#6903](https://github.com/nocobase/nocobase/pull/6903)) por @katherinehhh

  - Falta la variable de objeto actual en regla de vinculación dentro de subtabla ([#6907](https://github.com/nocobase/nocobase/pull/6907)) por @katherinehhh

- **[undefined]** Uso de Node 20 debido a requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher

- **[Gestor de fuentes de datos]** Resuelto problema con la ordenación por arrastrar y soltar que no funcionaba ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos

- **[Documentación de API]** Añadida información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos

- **[Notificación: Mensaje en la aplicación]** Resuelto un problema donde la acción "marcar todo como leído" en mensajes en la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66

- **[Acción: Exportar registros]** Corregido un problema donde las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie

- **[Campo de colección: Markdown(Vditor)]** El campo markdown (Vditor) no se adaptaba al tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) por @katherinehhh

- **[Colección: Árbol]** Evitar actualizaciones incorrectas de prefijos de ruta similares durante las actualizaciones de ruta ([#6913](https://github.com/nocobase/nocobase/pull/6913)) por @2013xile

- **[Flujo de trabajo: Nodo de correo]** Manejo de campo 'to' indefinido y mejora en el procesamiento de destinatarios de correo. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) por @sheldon66

- **[Verificación]** Corregido nombre en inglés incorrecto: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) por @2013xile

- **[Gestor de archivos]**
  - Corregida inyección de colección de cliente y parámetro de carga ([#6909](https://github.com/nocobase/nocobase/pull/6909)) por @mytharcher

  - Corregida regla de coincidencia de vista previa ([#6902](https://github.com/nocobase/nocobase/pull/6902)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]**
  - Evitar error causado por el orden de carga del plugin por @mytharcher

  - Corregido que el manejador de errores no pudiera ser emparejado por clase por @mytharcher

  - Corregido que el botón actuara incorrectamente después de unos pocos clics por @mytharcher

- **[Filtro de múltiples palabras clave]** Eliminar espacios en blanco de ambos lados de cada palabra clave por @zhangzhonghe

- **[Autenticación de dos factores (2FA)]** Requerir un verificador configurado al habilitar 2FA por @2013xile

- **[Almacenamiento de archivos: S3(Pro)]**
  - Corregidos parámetros de carga duplicados por @mytharcher

  - Corregida URL de vista previa y parámetro de carga por @mytharcher

- **[Impresión de plantillas]** Mejorada la lógica hasChildren en useFieldsTree para incluir verificación de enum en uiSchema. por @sheldon66

- **[Bloque: Formulario de múltiples pasos]** Corregidos tipos por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregida configuración regional por @mytharcher

  - Corregidos appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher

  - Corregido cálculo de appends de asociación por @mytharcher

  - Corregido ID de registro incorrecto para ViewAction por @mytharcher

- **[Gestor de correo electrónico]**
  - corregido permiso de API de colecciones mailMessageNotes y mailMessageLabels por @jiannx

  - corregido error en modal de añadir nota por @jiannx

  - corregido: eliminar columna de acción por @jiannx
