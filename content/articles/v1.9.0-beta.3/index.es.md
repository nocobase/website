---
title: "NocoBase v1.9.0-beta.3: Soporte para configurar secreto de autenticación independiente para sub-aplicaciones"
description: "Nota de la versión v1.9.0-beta.3"
---

### 🎉 Nuevas Funcionalidades

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para subaplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher

- **[Flujo de trabajo: CC]** Añadir nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Añadir inicializador para disparador por @mytharcher

### 🚀 Mejoras

- **[Notificación: Mensaje en la aplicación]** Optimizar tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe

- **[Flujo de trabajo]** Convertir operandos a cadena antes de la comparación de cadenas en el cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher

- **[Gestor de múltiples aplicaciones]**
  - Añadir opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

  - Añadir opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

- **[Campo de colección: Código]** Añadir configuración de sangría por @mytharcher

- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y número de puerto de la URL de callback por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - Problema por el cual los campos de archivos adjuntos no podían seleccionarse como variables en la regla de vinculación ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe

  - Error al asignar valores en el bloque de lista usando el campo de ordenación Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh

  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe

  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para el campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh

  - Acción emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe

  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe

  - Corregir el problema donde los componentes de selección desplegable son bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe

- **[acl]** Corregir error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie

- **[Autenticación]** Corregir el problema donde la página de inicio de sesión no puede desplazarse ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe

- **[Gestor de múltiples aplicaciones]** Corregir opciones de autenticación en posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Corregir problema de dayjs con marca de tiempo BigInt en formato de cadena ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher

- **[Acción: Solicitud personalizada]** Problema de análisis de variables en la URL durante la navegación de ruta después de una solicitud personalizada exitosa ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh

- **[Bloque: Kanban]** Corregir problemas de UI de subtabla en Kanban y añadir soporte para configuración de ancho de columna Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh

- **[Flujo de trabajo: Aprobación]**
  - Añadir `try/catch` en la migración al actualizar el esquema de UI por @mytharcher

  - Corregir errores de bloque y asociación por @mytharcher

  - Recargar asociación en el registro por @mytharcher

  - Para evitar error cuando el usuario no existe por @mytharcher
