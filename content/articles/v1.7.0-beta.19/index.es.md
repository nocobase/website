---
title: "NocoBase v1.7.0-beta.19: Soporte de variables en el lado izquierdo de las condiciones de reglas de vinculación"
description: "Nota de la versión v1.7.0-beta.19"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** soporte para variables en el lado izquierdo de las condiciones de reglas de vinculación ([#6609](https://github.com/nocobase/nocobase/pull/6609)) por @katherinehhh

- **[Flujo de trabajo: nodo de cálculo de fecha]** Añadida la función `changeTimezone` para cambiar el valor de la zona horaria con fines de formato por @mytharcher

### 🚀 Mejoras

- **[cliente]**
  - soporte para registros de tabla seleccionados en solicitudes personalizadas ([#6647](https://github.com/nocobase/nocobase/pull/6647)) por @katherinehhh

  - Añadida API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

### 🐛 Corrección de Errores

- **[base de datos]** Corregido error de compilación en CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

- **[cliente]**
  - Corregido error al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - Problema de visualización de descripciones de campo en el flujo de trabajo ([#6680](https://github.com/nocobase/nocobase/pull/6680)) por @katherinehhh

  - Corregida la configuración regional para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - El campo de asociación personalizado no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - Compatibilidad de reglas de vinculación con datos heredados ([#6686](https://github.com/nocobase/nocobase/pull/6686)) por @katherinehhh

  - La carga diferida de un componente de interfaz faltante provoca un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Añadido componente nativo Password al HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

- **[Flujo de trabajo: nodo manual]** Corregida la constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Acción: Importar registros]** Corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Flujo de trabajo: evento de acción personalizada]** Corregidos casos de prueba por @mytharcher

- **[Gestor de copias de seguridad]** Se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust
