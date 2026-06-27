---
title: "NocoBase v1.6.34: Soporte para definir registros únicos mediante múltiples campos al importar configuraciones"
description: "Nota de la versión v1.6.34"
---

### 🎉 Nuevas Funcionalidades

- **[Acción: Importar registros Pro]**
  - Soporte para definir registros únicos mediante múltiples campos al configurar la importación por @aaaaaajie

  - Soporte para configurar la sobrescritura de celdas en blanco e ignorarlas al configurar la importación por @aaaaaajie

### 🚀 Mejoras

- **[indefinido]** Actualizar la versión de Node a 20 para CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Fallo en la verificación de la condición noneOf en reglas de vinculación ([#6934](https://github.com/nocobase/nocobase/pull/6934)) por @katherinehhh

  - La configuración de altura del bloque no se aplica en tiempo real ([#6904](https://github.com/nocobase/nocobase/pull/6904)) por @katherinehhh

- **[indefinido]** Usar Node 20 debido a los requisitos del paquete commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) por @mytharcher

- **[base de datos]** Corregida la generación automática de uuid o nanoid que no funcionaba en asociaciones muchos a muchos ([#6912](https://github.com/nocobase/nocobase/pull/6912)) por @aaaaaajie

- **[Acción: Exportar registros]** Corregido un problema por el cual las relaciones anidadas no se exportaban correctamente. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) por @aaaaaajie

- **[Gestor de fuentes de datos]** Resuelto problema con la ordenación por arrastrar y soltar que no funcionaba ([#6937](https://github.com/nocobase/nocobase/pull/6937)) por @chenos

- **[Documentación de la API]** Añadida información de sub-aplicación faltante a req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) por @chenos

- **[Notificación: Mensaje en la aplicación]** Resuelto un problema por el cual la acción "marcar todo como leído" en mensajes dentro de la aplicación podía afectar los datos de otros usuarios. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) por @sheldon66

- **[Flujo de trabajo: Evento de acción personalizada]** Evitar error causado por el orden de carga del plugin por @mytharcher

- **[Almacenamiento de archivos: S3(Pro)]**
  - Corregida la URL de vista previa y el parámetro de carga por @mytharcher

  - Corregidos parámetros de carga duplicados por @mytharcher

- **[Bloque: Formulario de varios pasos]** Corregidos tipos por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Corregido el id de registro incorrecto para ViewAction por @mytharcher

  - Corregidos appends y cálculo de datos antes de enviar el proceso de aprobación por @mytharcher
