---
title: "NocoBase v1.9.0-alpha.1: Añadir cola de eventos para procesar mensajes en cola"
description: "Nota de la versión v1.9.0-alpha.1"
---

### 🎉 Nuevas funciones

- **[server]** Añadir cola de eventos para procesar mensajes en cola ([#6819](https://github.com/nocobase/nocobase/pull/6819)) por @mytharcher

### 🚀 Mejoras

- **[Workflow]** Mover componentes comunes al plugin base ([#7140](https://github.com/nocobase/nocobase/pull/7140)) por @mytharcher

### 🐛 Corrección de errores

- **[client]**
  - Tras cambios en un campo, los ámbitos de datos que dependen de este campo deben borrar automáticamente los valores seleccionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe

  - Corregir el problema de que el ajuste del ancho de columna de la tabla no funciona ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe

  - Se corrigió un error que ocurría al guardar una relación uno a uno en un campo de configuración. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie

  - Corregir el problema de error con los formularios de filtro en la ventana emergente del botón Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe

- **[undefined]** Corregir e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher

- **[Gestor de archivos]**
  - Corregir error de compilación debido al paquete ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher

  - Corregir detección de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher

- **[Formularios públicos]** corregir problema donde el campo Solo fecha fallaba al seleccionar fecha en el formulario público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh

- **[Calendario]** establecer el día de inicio de la semana por defecto como 'lunes' en el bloque de calendario ([#7171](https://github.com/nocobase/nocobase/pull/7171)) por @katherinehhh

- **[Workflow: Nodo manual]** Corregir importación incorrecta de variable ([#7156](https://github.com/nocobase/nocobase/pull/7156)) por @mytharcher

- **[Workflow]** Corregir el problema de que se requieren múltiples deslizamientos hacia la izquierda para volver a la página anterior en dispositivos móviles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe

- **[Workflow: Aprobación]**
  - Corregir actualización de asociación al enviar por @mytharcher

  - Corregir error lanzado cuando se elimina una aprobación por @mytharcher

  - Corregir asociaciones no cargadas después de retirar por @mytharcher

- **[Gestor de correo electrónico]**
  - después de seleccionar filas, establecer "Leído" y "No leído" por @jiannx

  - el contenido del subcorreo no se puede filtrar por @jiannx
