---
title: "NocoBase v2.1.0-alpha.25: Soporte para eliminar aprobaciones en borrador"
description: "Nota de la versión v2.1.0-alpha.25"
---

### 🎉 Nuevas Funcionalidades

- **[Flujo de trabajo: Aprobación]** Soporte para eliminar borradores de aprobación por @mytharcher

### 🚀 Mejoras

- **[sin definir]** Actualizar la documentación de IA para requerir NocoBase >= 2.1.0-beta.20 y recomendar la última versión beta. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) por @Molunerfinn

- **[Empleados IA]** Actualizar la configuración de tareas rápidas de empleados IA para usar el mismo componente de configuración de habilidades que la configuración del nodo de empleado IA en flujos de trabajo ([#9246](https://github.com/nocobase/nocobase/pull/9246)) por @cgyrock

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió un problema por el cual los valores predeterminados no se aplicaban al volver a añadir un registro después de haberlo eliminado de una subtabla. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

  - Filtrar bloques opcionales no esenciales en la ventana emergente de selección de campos relacionados ([#9224](https://github.com/nocobase/nocobase/pull/9224)) por @jiannx

- **[Acción: Importar registros]** Se corrigió el problema por el cual la importación de xlsx fallaba y lanzaba un error de encabezado no coincidente ([#9253](https://github.com/nocobase/nocobase/pull/9253)) por @mytharcher

- **[Configuración de licencia]** Actualizar el mensaje de éxito al guardar la licencia ([#9251](https://github.com/nocobase/nocobase/pull/9251)) por @jiannx

- **[Empleados IA]** Se corrigió el problema por el cual las variables en el prompt del sistema de los empleados IA no surtían efecto ([#9256](https://github.com/nocobase/nocobase/pull/9256)) por @cgyrock

- **[IdP: OAuth]** Se corrigieron fallos de inicio de sesión en CLI de OAuth y se restringió el registro dinámico a URLs de callback locales ([#9248](https://github.com/nocobase/nocobase/pull/9248)) por @2013xile

- **[IA: Base de conocimiento]** Se corrigió el problema por el cual eliminar documentos de la base de conocimiento no eliminaba los datos vectoriales asociados por @cgyrock

- **[Acción: Importar registros Pro]** Se corrigió el problema por el cual la importación de xlsx fallaba y lanzaba un error de encabezado no coincidente por @mytharcher
