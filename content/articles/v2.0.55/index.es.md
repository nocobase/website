---
title: "NocoBase v2.0.55: Aviso sobre nombre de tabla duplicado al guardar en base de datos vectorial"
description: "Nota de la versión v2.0.55"
---

### 🚀 Mejoras

- **[Empleados de IA]** Aviso al duplicar nombre de tabla al guardar en base de datos vectorial ([#9497](https://github.com/nocobase/nocobase/pull/9497)) por @cgyrock

- **[IA: Base de conocimiento]** Aviso al duplicar nombre de tabla al guardar en base de datos vectorial por @cgyrock

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual las variables de registro de ventana emergente actual no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

  - Se corrigió un problema por el cual los valores de campos JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

- **[Gestor de archivos]** Se corrigió la falta de metadatos de tamaño de archivo en las subidas `tx-cos` del gestor de archivos. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Fuente de datos: Principal]** Se corrigió el problema por el cual las opciones de campo se escribían en el esquema después de sincronizar campos ([#9505](https://github.com/nocobase/nocobase/pull/9505)) por @2013xile

- **[Cliente WEB]** Limpiar datos de bloques después de eliminar menús. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) por @gchust

- **[Empleados de IA]** Se corrigieron errores de lectura de archivos OSS de empleados de IA ([#9493](https://github.com/nocobase/nocobase/pull/9493)) por @cgyrock

- **[Acción: Importar registros]** Se corrigió el problema por el cual el registro importado en campos similares a fechas mostraba una fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Acción: Exportar registros Pro]** Se corrigió el problema por el cual se generaba un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió el manejo de la zona horaria para importaciones xlsx Pro por @mytharcher
