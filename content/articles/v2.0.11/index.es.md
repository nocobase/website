---
title: "NocoBase v2.0.11: Soporte para datos de contexto personalizados para pasar variables al desencadenador de acciones personalizadas en subflujo"
description: "Nota de la versión v2.0.11"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: evento de acción personalizada]** Soporte para datos de contexto personalizados para pasar variables al activador de acciones personalizadas en subflujos ([#8758](https://github.com/nocobase/nocobase/pull/8758)) por @mytharcher

### 🚀 Mejoras

- **[cliente]** Mostrar un mensaje de aviso cuando no hay datos disponibles para el bloque de formulario de edición o el bloque de detalles. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) por @gchust

- **[motor de flujo]** Se corrigió un problema por el cual el nuevo código runjs analizaba expresiones de variables antes de la ejecución. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) por @gchust

### 🐛 Corrección de Errores

- **[cliente]**
  - Corregir la navegación del enlace emergente que se revertía después de cerrar la vista ([#8752](https://github.com/nocobase/nocobase/pull/8752)) por @zhangzhonghe

  - Se deshabilitó la adición de bloques para registros asociados muchos a muchos (array) para evitar errores. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) por @gchust

  - Se corrigió un problema por el cual el bloque de datos original no se actualizaba después de editar datos en la ventana emergente del campo de asociación. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) por @gchust

  - Corregir el recorte de pestañas y garantizar el ancho mínimo de pestaña en modo de diseño ([#8771](https://github.com/nocobase/nocobase/pull/8771)) por @zhangzhonghe

  - Corregir la validación para campos obligatorios ocultos por enlace en modo de configuración ([#8773](https://github.com/nocobase/nocobase/pull/8773)) por @zhangzhonghe

  - Corregir las actualizaciones retrasadas de la interfaz de usuario para la alternancia de ocultación de columnas de subtabla y la eliminación consecutiva de columnas ([#8755](https://github.com/nocobase/nocobase/pull/8755)) por @zhangzhonghe

  - corregir la aparición de dos verificaciones obligatorias en el formulario de actualización de registro ([#8761](https://github.com/nocobase/nocobase/pull/8761)) por @jiannx

- **[base de datos]**
  - Se corrigió la falta de la opción 'Paginación simple' en la plantilla de vista de la colección. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) por @cgyrock

  - La regla de validación de precisión para campos numéricos no está teniendo efecto ([#8768](https://github.com/nocobase/nocobase/pull/8768)) por @2013xile

- **[indefinido]** Se corrigió un problema por el cual, después de la actualización, el sistema indicaba que no se podía encontrar plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) por @gchust

- **[Acción: Exportar registros]** Se corrigió el problema por el cual los campos de tipo numérico en archivos de Excel se mostraban como cadenas de texto ([#8774](https://github.com/nocobase/nocobase/pull/8774)) por @cgyrock

- **[Bloque: Lista]** Se corrigió un problema por el cual los campos del bloque de lista no podían usar la variable del registro actual. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) por @gchust

- **[Flujo de trabajo]** Corregir el problema donde el marcador de posición de arrastre de nodo se mostraba incorrectamente al arrastrar bloques en el nodo de aprobación ([#8763](https://github.com/nocobase/nocobase/pull/8763)) por @mytharcher

- **[Plantillas de interfaz de usuario]**
  - Se corrigió un problema por el cual reutilizar la plantilla de bloque de registro actual para el bloque de detalles y el bloque de formulario de edición podía causar que los datos no se cargaran correctamente. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) por @gchust

  - Se corrigió un problema por el cual los cambios en las propiedades realizados en el flujo de eventos de un bloque de plantilla no surtían efecto. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) por @gchust

- **[Fuente de datos: Principal]**
  - La actualización del valor predeterminado de un campo JSON no surte efecto ([#8767](https://github.com/nocobase/nocobase/pull/8767)) por @2013xile

  - Error de sincronización de campos ([#8766](https://github.com/nocobase/nocobase/pull/8766)) por @2013xile

- **[Empleados de IA]**
  - Se corrigieron problemas por los cuales dashscope/deepseek/kimi no podían leer los archivos de documentos subidos. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) por @cgyrock

  - Se corrigió el error de llamada a herramienta al usar el modelo de razonamiento deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) por @cgyrock

- **[Multi-espacio]** Corregir el error de permiso de espacio al crear datos con la clave principal por @jiannx
