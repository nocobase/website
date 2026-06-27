---
title: "NocoBase v1.8.19: Agregar tipo de plantilla en línea para la configuración de notificaciones"
description: "Nota de la versión v1.8.19"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow: Aprobación]** Añadir tipo de plantilla en línea para la configuración de notificaciones por @mytharcher

### 🚀 Mejoras

- **[cliente]** Soporte para mostrar iconos identificados por cadenas de texto en el componente Select cuando está en modo de solo lectura ([#7420](https://github.com/nocobase/nocobase/pull/7420)) por @mytharcher
- **[base de datos]** Optimización del rendimiento de consultas ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) por @aaaaaajie
- **[Móvil]** Optimización del componente de ventana emergente móvil ([#7414](https://github.com/nocobase/nocobase/pull/7414)) por @zhangzhonghe

### 🐛 Corrección de Errores

- **[base de datos]** Se corrigió el problema donde la lectura de tablas externas de Postgres incluía vistas de otros esquemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) por @aaaaaajie
- **[Bloque: plantilla]** Se resolvió un problema donde los bloques de correo no eran visibles al colocarse dentro de un bloque de plantilla heredado ([#7430](https://github.com/nocobase/nocobase/pull/7430)) por @gchust
- **[Acción: Importar registros Pro]** Se deshabilitó la asignación de campos de relación durante la detección de duplicados en la importación. por @aaaaaajie
- **[Workflow: Aprobación]** Se corrigió el problema donde la lista de usuarios estaba vacía durante la cofirma por @mytharcher
- **[Gestor de migraciones]** Se omiten los comandos `\restrict` y `\unrestrict` generados por la última versión de pg_dump al crear archivos de migración para resolver errores de restauración. por @2013xile
