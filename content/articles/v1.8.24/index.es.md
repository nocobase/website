---
title: "NocoBase v1.8.24: el flujo de trabajo permite volver a cualquier nodo en el proceso de aprobación"
description: "Nota de la versión v1.8.24"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Soporte para volver a cualquier nodo en el proceso de aprobación por @mytharcher

### 🚀 Mejoras

- **[servidor]** Uso del registrador estándar del sistema para la cola de mensajes ([#7480](https://github.com/nocobase/nocobase/pull/7480)) por @mytharcher

- **[cliente]** Eliminación del popover de puntos suspensivos de la lista de archivos ([#7479](https://github.com/nocobase/nocobase/pull/7479)) por @mytharcher

- **[Flujo de trabajo]** Optimización del proceso de preparación del flujo de trabajo para admitir el uso de datos de nodos precargados ([#7476](https://github.com/nocobase/nocobase/pull/7476)) por @mytharcher

- **[Editor de temas]** Se añadió soporte para la personalización del color del menú lateral ([#7483](https://github.com/nocobase/nocobase/pull/7483)) por @duannyuuu

- **[Adaptador de cola Redis]** Uso del registrador estándar del sistema para el adaptador de cola de mensajes Redis por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el problema donde el componente Popover se superponía/cubría ([#7491](https://github.com/nocobase/nocobase/pull/7491)) por @zhangzhonghe

  - Verificación incorrecta de 'no vacío' para campos numéricos en reglas de vinculación ([#7477](https://github.com/nocobase/nocobase/pull/7477)) por @katherinehhh

  - Los campos de solo lectura (select/multiselect/date/richtext) seguían siendo editables en formularios públicos ([#7484](https://github.com/nocobase/nocobase/pull/7484)) por @katherinehhh

- **[Flujo de trabajo]** Se corrigió un posible error relacionado con el almacenamiento en caché de registros del flujo de trabajo ([#7490](https://github.com/nocobase/nocobase/pull/7490)) por @mytharcher

- **[Cifrado de solicitudes HTTP]** Se corrigió el problema donde los parámetros de solicitud no admitían el tipo nativo URLSearchParams por @mytharcher

- **[Fuente de datos: API REST]** Se corrigieron las reglas de validación de URL de la API REST por @katherinehhh

- **[Flujo de trabajo: Aprobación]** Se corrigió el problema donde el texto de estado en la notificación de finalización de aprobación no estaba traducido por @mytharcher
