---
title: "NocoBase v2.0.0-alpha.25: Experiencia de codificación con IA optimizada"
description: "Nota de la versión v2.0.0-alpha.25"
---

### 🚀 Mejoras

- **[server]** Añadir registro de puerta de enlace ([#7683](https://github.com/nocobase/nocobase/pull/7683)) por @2013xile

- **[motor de flujo]** Permitir definir el contexto de variables en la definición de pasos del flujo ([#7674](https://github.com/nocobase/nocobase/pull/7674)) por @gchust

- **[Visualización de datos]**
  - Añadir sugerencia para ejecutar la consulta antes de configurar las opciones del gráfico ([#7685](https://github.com/nocobase/nocobase/pull/7685)) por @heziqiang

  - Actualizar los datos del gráfico al hacer clic en el botón de vista previa global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) por @heziqiang

- **[Empleados IA]** Experiencia de codificación con IA optimizada, incluyendo el uso de empleados IA para revisar, diagnosticar y corregir código. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) por @cgyrock

- **[Gestor de fuentes de datos]** Ajustar el orden de las columnas de tipo de campo e interfaz, y añadir un paso de confirmación al realizar modificaciones. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) por @2013xile

- **[Flujo de trabajo]** Completar la configuración del flujo de trabajo vinculado para el botón de acción de actualización de registro ([#7668](https://github.com/nocobase/nocobase/pull/7668)) por @mytharcher

- **[Gestor de múltiples aplicaciones (obsoleto)]** mejorar el supervisor de aplicaciones ([#7661](https://github.com/nocobase/nocobase/pull/7661)) por @chenos

### 🐛 Corrección de errores

- **[cliente]**
  - Se resolvió un problema por el cual los usuarios no podían establecer valores predeterminados para campos mostrados en modo de solo lectura. Esto garantiza una configuración de campo más fluida cuando los campos no son editables. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) por @gchust

  - Corregir problemas conocidos con las reglas de vinculación de subformularios ([#7698](https://github.com/nocobase/nocobase/pull/7698)) por @zhangzhonghe

  - El menú de campos del bloque js no se puede cargar en el bloque de formulario de filtro ([#7690](https://github.com/nocobase/nocobase/pull/7690)) por @gchust

- **[motor de flujo]** selección incorrecta del contexto del registro emergente actual al editar el ámbito de datos de un campo asociado dentro de un formulario de edición ([#7675](https://github.com/nocobase/nocobase/pull/7675)) por @gchust

- **[Flujo de trabajo: Nodo manual]** Corregir el problema por el cual las tareas manuales desaparecen después de deshabilitar el flujo de trabajo ([#7687](https://github.com/nocobase/nocobase/pull/7687)) por @mytharcher

- **[Empleados IA]** Se corrigió un problema por el cual los bloques con recursos API asociados no obtenían los datos correspondientes al ser seleccionados. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) por @cgyrock

- **[Flujo de trabajo]** Corregir el problema por el cual, después de eliminar un nodo que inicia una ramificación, la clave del primer nodo retenido dentro de la rama se cambiaba incorrectamente a un nuevo valor ([#7665](https://github.com/nocobase/nocobase/pull/7665)) por @mytharcher

- **[Campo de colección: divisiones administrativas de China]** La importación de datos falla cuando la ciudad y el área tienen el mismo nombre ([#7673](https://github.com/nocobase/nocobase/pull/7673)) por @2013xile

- **[Gestor de archivos]** Corregir el problema por el cual el archivo `.msg` no se podía cargar correctamente ([#7662](https://github.com/nocobase/nocobase/pull/7662)) por @mytharcher

- **[Motor de flujo]** no se pueden resolver variables en la acción de campos de conjunto de vinculación ([#7684](https://github.com/nocobase/nocobase/pull/7684)) por @gchust

- **[Visualización de datos]** usar la API sql:runById para obtener datos de consulta en la inicialización ([#7677](https://github.com/nocobase/nocobase/pull/7677)) por @heziqiang

- **[Flujo de trabajo: Aprobación]** Corregir el problema de traducción del texto de estado en las notificaciones de finalización de aprobación, utilizando el idioma predeterminado del sistema para la traducción cuando el usuario no ha establecido una preferencia de idioma por @mytharcher
