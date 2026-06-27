---
title: "NocoBase v1.6.21: Añadir API de retardo para escenarios que se abren sin retardo"
description: "Nota de la versión v1.6.21"
---

### 🚀 Mejoras

- **[client]** Añadir API de retardo para escenarios que se abren sin retardo ([#6681](https://github.com/nocobase/nocobase/pull/6681)) por @mytharcher

- **[create-nocobase-app]** Actualizar algunas dependencias a las últimas versiones ([#6673](https://github.com/nocobase/nocobase/pull/6673)) por @chenos

### 🐛 Corrección de errores

- **[client]**
  - Corregir error lanzado al pasar el ratón sobre un bloque de plantilla referenciado en la configuración del nodo de aprobación ([#6691](https://github.com/nocobase/nocobase/pull/6691)) por @mytharcher

  - El campo de asociación personalizado no muestra la configuración del componente de campo ([#6692](https://github.com/nocobase/nocobase/pull/6692)) por @katherinehhh

  - Corregir locale para el componente de carga ([#6682](https://github.com/nocobase/nocobase/pull/6682)) por @mytharcher

  - La carga diferida de un componente de interfaz faltante provoca un error de renderizado ([#6683](https://github.com/nocobase/nocobase/pull/6683)) por @gchust

  - Añadir componente Password nativo a HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) por @mytharcher

  - Campos heredados mostrados en la lista de asignación de campos de la colección actual ([#6666](https://github.com/nocobase/nocobase/pull/6666)) por @katherinehhh

- **[database]** Corregido error de compilación de CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) por @aaaaaajie

- **[build]** La salida de compilación es incorrecta cuando el plugin depende de algunas librerías AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) por @gchust

- **[Acción: Importar registros]** Corregido un error al importar el campo de tiempo xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) por @aaaaaajie

- **[Flujo de trabajo: Nodo manual]** Corregir constante de estado de tarea manual ([#6676](https://github.com/nocobase/nocobase/pull/6676)) por @mytharcher

- **[Bloque: iframe]** Aparece barra de desplazamiento vertical cuando el bloque iframe está configurado a altura completa ([#6675](https://github.com/nocobase/nocobase/pull/6675)) por @katherinehhh

- **[Flujo de trabajo: Evento de acción personalizada]** Corregir casos de prueba por @mytharcher

- **[Gestor de copias de seguridad]** Se produce un error de tiempo de espera al intentar restaurar una copia de seguridad no cifrada con una contraseña por @gchust
