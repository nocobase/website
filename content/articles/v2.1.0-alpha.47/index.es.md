---
title: "NocoBase v2.1.0-alpha.47: Se agregó una opción para que los bloques de Gantt se centren en el día de hoy de forma predeterminada."
description: "Nota de la versión v2.1.0-alpha.47"
---

### 🎉 Nuevas Funcionalidades

- **[undefined]** Mejora en la gestión de aplicaciones y plugins administrados en la CLI, incluyendo manejo del entorno basado en appPath, importación de plugins, sincronización de plugins con licencia y actualizaciones de documentación relacionada. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
  Referencia: [Documentación CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Inicio rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloque: Gantt]** Se añadió una opción para que los bloques Gantt se centren en la fecha actual por defecto. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
- **[Multi-espacio]** Se añadió soporte para cliente v2 en el plugin multi-espacio, incluyendo cambio de espacio y gestión de espacios. por @jiannx

### 🚀 Mejoras

- **[Flujo de trabajo]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en la ejecución de estos. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
- **[Plantillas de UI]** Se migraron las plantillas de UI al cliente v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Filtro multi-palabra clave]** Se migró el filtro multi-palabra clave al cliente v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Flujo de trabajo: Subflujo]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en las instrucciones de subflujo. por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en las instrucciones de aprobación. por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** Se corrigió el problema donde los campos vinculados ocultos aún conservaban valores antiguos. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) por @zhangzhonghe
- **[Acción: Importar registros]** Se corrigió que los registros importados recibieran valores de orden duplicados. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) por @2013xile
- **[Motor de flujo]** Se corrigió un error al convertir un bloque de plantilla de referencia a copia. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) por @gchust
- **[Bloque: Mapa]** Se corrigió un problema donde los valores de campos de mapa se convertían incorrectamente al alternar entre modos de visualización de texto y mapa en páginas de detalle. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) por @hongboji
- **[Flujo de trabajo]** Se corrigió la ejecución duplicada de flujos de trabajo bajo trabajadores concurrentes. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) por @mytharcher
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema donde los títulos de campos personalizados no se mostraban en los detalles del formulario de aprobación. por @zhangzhonghe
