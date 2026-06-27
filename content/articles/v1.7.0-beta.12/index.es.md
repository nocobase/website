---
title: "NocoBase v1.7.0-beta.12: Añadir un callback onScanSuccess"
description: "Nota de la versión v1.7.0-beta.12"
---

### 🎉 Novedades

- **[Bloque: Panel de acciones]** se añadió una devolución de llamada onScanSuccess para manejar escaneos exitosos y salir de la interfaz de la cámara. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) por @sheldon66

### 🚀 Mejoras

- **[Gestor de tareas asíncronas]** optimización de los botones de importación/exportación en Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) por @chenos

- **[Acción: Exportar registros Pro]** optimización de los botones de importación/exportación en Pro por @katherinehhh

- **[Gestor de migraciones]** permitir omitir la copia de seguridad y restauración automáticas para la migración por @gchust

### 🐛 Corrección de errores

- **[cliente]** conflicto de vinculación entre campos de asociación con el mismo nombre en diferentes subtablas dentro del mismo formulario ([#6577](https://github.com/nocobase/nocobase/pull/6577)) por @katherinehhh

- **[Calendario]** datos faltantes en fechas límite en la vista semanal del calendario ([#6587](https://github.com/nocobase/nocobase/pull/6587)) por @katherinehhh

- **[Control de acceso]** asignación incorrecta del rol actual durante el inicio de sesión ([#6581](https://github.com/nocobase/nocobase/pull/6581)) por @aaaaaajie

- **[Acción: Edición por lotes]** Al hacer clic en el botón de edición por lotes, configurar la ventana emergente y luego abrirla de nuevo, la ventana emergente aparece en blanco ([#6578](https://github.com/nocobase/nocobase/pull/6578)) por @zhangzhonghe

- **[Bloque: Formulario de varios pasos]** se corrigió el error de que el restablecimiento del formulario no funcionaba cuando el campo estaba asociado con otro campo por @jiannx

- **[Flujo de trabajo: Aprobación]** Se corrige que la configuración del nodo de aprobación sea incorrecta después de cambiar el esquema por @mytharcher
