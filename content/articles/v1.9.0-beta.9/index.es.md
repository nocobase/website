---
title: "NocoBase v1.9.0-beta.9: Los bloques de tabla admiten agregar un botón de 'Configuración de columna'"
description: "Nota de la versión v1.9.0-beta.9"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]**

  - Los bloques de tabla admiten agregar un botón de 'Configuración de columnas' para configurar el orden y la visibilidad de las columnas ([#7204](https://github.com/nocobase/nocobase/pull/7204)) por @kerwin612
  - Soporte para reglas de validación de campos ([#7297](https://github.com/nocobase/nocobase/pull/7297)) por @aaaaaajie
- **[Fuente de datos: Principal]**

  - Soporte para leer tablas desde la fuente de datos principal ([#7238](https://github.com/nocobase/nocobase/pull/7238)) por @aaaaaajie
  - Soporte para mostrar tablas definidas por complementos en la fuente de datos principal. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) por @aaaaaajie

### 🚀 Mejoras

- **[cliente]** Soporte para rotar imágenes al previsualizar ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher
- **[snowflake-id]** Cambiar los IDs de las tablas del sistema con claves primarias autoincrementales pero sin identificadores únicos a IDs similares a Snowflake de 53 bits ([#7465](https://github.com/nocobase/nocobase/pull/7465)) por @2013xile
- **[Workflow]** Dividir la lógica relacionada con el despacho en un despachador independiente ([#7535](https://github.com/nocobase/nocobase/pull/7535)) por @mytharcher
- **[Adaptador de cola RabbitMQ]** Mejorar el manejo de la conexión RabbitMQ y la lógica de procesamiento de mensajes por @sdp-ncd
- **[Gestor de correo electrónico]**

  - Soporta sincronización por lotes por @jiannx
  - El editor enriquecido soporta redimensionamiento de imágenes por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**

  - Corregir un problema donde el botón "Configuración de columnas" cargaba las columnas de la tabla dentro del diálogo modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) por @kerwin612
  - Corregir el problema donde los submenús de la barra lateral no se resaltaban correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu
- **[Workflow]**

  - Corregir el problema de ejecución duplicada debido a un manejo inadecuado de la cola ([#7533](https://github.com/nocobase/nocobase/pull/7533)) por @mytharcher
  - Corregir el problema donde la condición de la lista de workflow era incorrecta al cargar el contexto del campo asociado en la configuración del workflow vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher
  - Corregir el problema donde las tareas programadas basadas en campos de fecha no se activaban después del inicio ([#7524](https://github.com/nocobase/nocobase/pull/7524)) por @mytharcher
- **[Workflow: Nodo de bucle]** Corregido el problema donde el proceso avanzaba incorrectamente al siguiente elemento incluso cuando las condiciones del nodo de bucle no se cumplían ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher
- **[Gestor de correo electrónico]**

  - Asunto de correo basura por @jiannx
  - asunto basura por @jiannx
  - El editor enriquecido soporta saltos de línea suaves por @jiannx
  - Soporta el mismo correo para múltiples personas por @jiannx
  - Rendimiento óptimo de la lista de mensajes de correo por @jiannx
  - Después de seleccionar filas, establecer "Leído" y "No leído" por @jiannx
  - Agregar campo rawId para optimización de rendimiento por @jiannx
  - El atributo ref en HTML causa excepción de renderizado por @jiannx
  - El contenido del submail no se puede filtrar por @jiannx
  - Soporte para resincronización por @jiannx
  - Distinguir manualmente entre reenvío y respuesta por @jiannx
