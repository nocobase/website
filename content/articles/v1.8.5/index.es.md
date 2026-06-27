---
title: "NocoBase v1.8.5: Añadir más interfaces calculables"
description: "Nota de la versión v1.8.5"
---

### 🚀 Mejoras

- **[Campo de colección: Fórmula]** Se añaden más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher

- **[Flujo de trabajo]** Se usa registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Soporte para eliminar la aprobación cuando se eliminan los datos relacionados por @mytharcher

### 🐛 Corrección de errores

- **[cliente]**
  - Problema por el cual los campos de archivos adjuntos no se podían seleccionar como variables en la regla de vinculación ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe

  - Se corrige el problema por el cual los componentes de selección desplegable son bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe

  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para un campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh

  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe

  - Error al asignar valores en el bloque de lista usando el campo de ordenación kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh

  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe

  - Acción emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe

- **[acl]** Se corrige el error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie

- **[Gestor de múltiples aplicaciones]** Se corrigen las opciones de autenticación en una posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher

- **[Autenticación]** Se corrige el problema por el cual la página de inicio de sesión no se puede desplazar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe

- **[Flujo de trabajo: Aprobación]** Se corrigen las asociaciones al enviar la aprobación por @mytharcher
