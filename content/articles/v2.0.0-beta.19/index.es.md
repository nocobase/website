---
title: "NocoBase v2.0.0-beta.19: DingTalk permite vincular usuario con `unionId`"
description: "Nota de la versión v2.0.0-beta.19"
---

### 🎉 Nuevas funciones

- **[Auth: DingTalk]** Permite vincular usuario con `unionId` por @2013xile

### 🚀 Mejoras

- **[client]** Ajusta la configuración del ancho de columna a selección desplegable en subtabla editable en línea ([#8561](https://github.com/nocobase/nocobase/pull/8561)) por @katherinehhh

- **[Campo de colección: Markdown(Vditor)]** Se añadió una opción de configuración para establecer el modo de edición predeterminado en los ajustes del componente. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) por @Cyx649312038

- **[Multi-espacio]** Control de permisos multi-espacio accede a ACL por @jiannx

- **[IA: Base de conocimiento]** Se optimizó la salida de compilación para reducir el tamaño del paquete de plugin-ai-knowledge-base. por @cgyrock

### 🐛 Corrección de errores

- **[client]**
  - Se corrigió un problema por el cual el uso de "Creación rápida" del selector de registros de asociación en el formulario de edición sobrescribía los datos existentes del formulario. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) por @gchust

  - Se corrigieron problemas de espacios vacíos en el diseño de cuadrícula ([#8535](https://github.com/nocobase/nocobase/pull/8535)) por @zhangzhonghe

  - Se corrigió la necesidad de actualizar la página para agregar un registro hijo después de habilitar la tabla jerárquica ([#8574](https://github.com/nocobase/nocobase/pull/8574)) por @katherinehhh

  - Se corrigió que el ancho de columna no se actualizara en subtabla (edición en línea); la entrada de texto multilínea no se redimensionaba con el ancho de columna ([#8573](https://github.com/nocobase/nocobase/pull/8573)) por @katherinehhh

  - Se corrigió un problema por el cual el menú "Formulario (Añadir nuevo)" se mostraba incorrectamente en la ventana emergente de la acción "Crear nuevo". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) por @gchust

- **[motor de flujo]**
  - Se corrigió un problema por el cual algunas bibliotecas de terceros no podían importarse correctamente en bloques JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) por @gchust

  - Se corrigió un problema por el cual enviar el formulario después de cambiar de página no actualizaba la página. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) por @gchust

- **[Plantillas de UI]** Se corrigió un error al reabrir y enviar una plantilla emergente guardada para el formulario "Añadir nuevo" del campo de asociación. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) por @gchust

- **[Campo de colección: Adjunto (URL)]** Se corrigió que la configuración de visualización del nombre de archivo del campo de URL de adjunto no funcionara en el formulario de edición ([#8571](https://github.com/nocobase/nocobase/pull/8571)) por @katherinehhh

- **[Empleados IA]** Se corrigió un problema por el cual el nodo LLM fallaba al enviar mensajes ([#8569](https://github.com/nocobase/nocobase/pull/8569)) por @2013xile

- **[Acción: Importar registros]** Se corrigió la vulnerabilidad de la acción de importación ([#8544](https://github.com/nocobase/nocobase/pull/8544)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema donde los parámetros y la carga útil eran incorrectos al activar un flujo de trabajo personalizado por @mytharcher

- **[Multi-espacio]**
  - Se añadió un script de migración para eliminar x-ready-pretty en el campo de espacio por @jiannx

  - Se eliminó el atributo read-pretty para el campo de espacio por @jiannx

- **[Flujo de trabajo: Aprobación]** Se corrigió un problema de rendimiento causado por el campo JSON en la carga de listas (MySQL) por @mytharcher
