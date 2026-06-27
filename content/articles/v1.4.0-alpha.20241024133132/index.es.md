---
title: "NocoBase v1.4.0-alpha.20241024133132: Soporte para agregar grupos en formularios y bloques de detalle"
description: "Nota de la versión v1.4.0-alpha.20241024133132"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Soporte para agregar grupos en formularios y bloques de detalle ([#5498](https://github.com/nocobase/nocobase/pull/5498)) por @katherinehhh

- **[Calendario]** plugin-calendar añade configuración de vista predeterminada y configuraciones de internacionalización ([#5487](https://github.com/nocobase/nocobase/pull/5487)) por @Cyx649312038

- **[Fuente de datos: KingbaseES]** Soporte para usar la base de datos Kingbase como fuente de datos principal o externa (modo pg) por @chareice
Referencia: [Fuente de datos - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Mejoras

- **[base de datos]** Soporte para la lógica de carga estática de plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) por @chareice

- **[cliente]** Mejora del rendimiento de renderizado de bloques de tabla (tiempo de renderizado inicial reducido aproximadamente un 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) por @zhangzhonghe

- **[Móvil]** El cliente móvil ahora soporta el bloque de formulario de filtro ([#5482](https://github.com/nocobase/nocobase/pull/5482)) por @katherinehhh

- **[Gestor de copias de seguridad]**
  - Cambiar la configuración predeterminada de `Respaldar archivos de almacenamiento local` a verdadero por @gchust

  - Revertir los datos de la base de datos si la acción de restauración falla por @gchust

### 🐛 Corrección de Errores

- **[servidor]** El evento afterLoad de la aplicación no se activaba después de la instalación ([#5506](https://github.com/nocobase/nocobase/pull/5506)) por @chenos

- **[Formularios públicos]** registro del fragmento ACL para formulario público ([#5505](https://github.com/nocobase/nocobase/pull/5505)) por @katherinehhh

- **[Gestor de copias de seguridad]** corregido: después de restaurar una sub-aplicación, la aplicación principal fallaba si la sub-aplicación usaba un esquema diferente por @gchust
