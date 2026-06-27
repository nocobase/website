---
title: "NocoBase v2.1.0-beta.7: Actualización del prompt de usuario del chatbox de IA"
description: "Nota de la versión v2.1.0-beta.7"
---

### 🎉 Nuevas Funcionalidades

- **[Empleados IA]** Actualización del prompt de usuario en el chatbox de IA ([#8725](https://github.com/nocobase/nocobase/pull/8725)) por @heziqiang

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el problema por el cual el componente CollectionField no se renderizaba dentro del componente DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) por @mytharcher

  - Se corrigió un problema por el cual el bloque de datos no se actualizaba al cambiar de menú. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) por @gchust

- **[motor-de-flujo]** Se corrigió un problema por el cual ctx.exit no podía terminar la ejecución de flujos de eventos definidos por el usuario. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) por @gchust

- **[base-de-datos]** Se corrigió un fallo en la verificación de expresiones regulares personalizadas en v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) por @jiannx

- **[servidor]** Se resolvió un problema de caché añadiendo un hash a los recursos ([#8730](https://github.com/nocobase/nocobase/pull/8730)) por @chenos

- **[Control de acceso]** La instancia de base de datos utilizada al configurar los metadatos de ACL es incorrecta ([#8747](https://github.com/nocobase/nocobase/pull/8747)) por @2013xile

- **[Empleados IA]**
  - Se corrigió un error en el chat de empleados IA cuando la base de conocimiento estaba habilitada ([#8746](https://github.com/nocobase/nocobase/pull/8746)) por @cgyrock

  - Se corrigió un problema de renderizado en la configuración de la fuente de datos de IA. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) por @cgyrock

- **[Motor de flujo]** Se corrigió un error en la eliminación SQL ([#8745](https://github.com/nocobase/nocobase/pull/8745)) por @chenos

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió el problema por el cual el flujo de trabajo de acción personalizada se bloqueaba al ejecutarse como subflujo ([#8738](https://github.com/nocobase/nocobase/pull/8738)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema por el cual el resultado de la consulta no se mostraba debido a nodos filtrados por tipo por @mytharcher

  - Se añadió un parámetro faltante para evitar que las asociaciones no se actualicen al enviar una nueva aprobación por @mytharcher

  - Se corrigió el problema por el cual se lanzaba un error al ejecutar manualmente el flujo de trabajo de aprobación por @mytharcher

  - Se corrigió el error lanzado debido a la ausencia del valor de `dataAfter` al añadir o delegar por @mytharcher

  - Se corrigió un problema de ACL por el cual el valor de la asociación no debería crearse o actualizarse cuando el usuario no tiene permiso por @mytharcher

  - Se sanearon los valores de asociación en las acciones de aprobación para evitar cualquier manipulación de datos más allá del permiso por @mytharcher

  - Se corrigió el problema por el cual el parámetro appends filtraba según ACL por @mytharcher
