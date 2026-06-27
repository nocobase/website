---
title: "NocoBase v1.9.0-alpha.2: Soporte para configurar secreto de autenticación independiente para sub-aplicaciones"
description: "Nota de la versión v1.9.0-alpha.2"
---

### 🎉 Nuevas Funcionalidades

- **[Gestor de múltiples aplicaciones]** Soporte para configurar un secreto de autenticación independiente para subaplicaciones ([#7197](https://github.com/nocobase/nocobase/pull/7197)) por @mytharcher

- **[Flujo de trabajo: CC]** Añadir nodo CC al flujo de trabajo ([#7201](https://github.com/nocobase/nocobase/pull/7201)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Añadir inicializador para el desencadenante por @mytharcher

### 🚀 Mejoras

- **[Campo de colección: Fórmula]** Añadir más interfaces calculables ([#7215](https://github.com/nocobase/nocobase/pull/7215)) por @mytharcher

- **[Flujo de trabajo]**
  - Usar registro en lugar de lanzar error cuando la ejecución no debería ejecutarse debido al estado ([#7217](https://github.com/nocobase/nocobase/pull/7217)) por @mytharcher

  - Convertir operandos a cadena antes de la comparación de cadenas en el cálculo lógico ([#7190](https://github.com/nocobase/nocobase/pull/7190)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Optimizar el tamaño de fuente para la página de mensajes móviles ([#7199](https://github.com/nocobase/nocobase/pull/7199)) por @zhangzhonghe

- **[Gestor de múltiples aplicaciones]**
  - Añadir opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

  - Añadir opciones de base de datos y autorización para subaplicaciones ([#7184](https://github.com/nocobase/nocobase/pull/7184)) por @mytharcher

- **[Campo de colección: Código]** Añadir configuración de sangría por @mytharcher

- **[Flujo de trabajo: Aprobación]** Soporte para eliminar la aprobación cuando se eliminan los datos relacionados por @mytharcher

- **[Autenticación: DingTalk]** Soporte para configurar el protocolo y el número de puerto de la URL de devolución de llamada por @2013xile

### 🐛 Corrección de Errores

- **[cliente]**
  - Problema por el cual los campos de archivos adjuntos no se podían seleccionar como variables en la regla de vinculación ([#7213](https://github.com/nocobase/nocobase/pull/7213)) por @zhangzhonghe

  - Colapso de filtro: El filtro no se activa durante la inicialización de la página después de establecer valores predeterminados para los campos ([#7206](https://github.com/nocobase/nocobase/pull/7206)) por @zhangzhonghe

  - Problema de visualización para campos de asociación en reglas de vinculación ([#7220](https://github.com/nocobase/nocobase/pull/7220)) por @katherinehhh

  - La asignación de valores falla en el formulario de edición cuando se establecen tanto el valor como las opciones para el campo de selección ([#7209](https://github.com/nocobase/nocobase/pull/7209)) por @katherinehhh

  - Error al asignar valores en el bloque de lista usando el campo de ordenación Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) por @katherinehhh

  - Acción emergente: La visualización de la página no cumple con las expectativas después de cambiar de pestaña ([#7212](https://github.com/nocobase/nocobase/pull/7212)) por @zhangzhonghe

  - El título de la pestaña del navegador no se sincroniza al cambiar entre submenús ([#7207](https://github.com/nocobase/nocobase/pull/7207)) por @zhangzhonghe

  - Corregir el problema por el cual los componentes de selección desplegable son bloqueados por el teclado en iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) por @zhangzhonghe

  - La visualización del campo de casilla de verificación es incorrecta en la colección de campos de asociación dentro del formulario ([#7176](https://github.com/nocobase/nocobase/pull/7176)) por @zhangzhonghe

  - Corregir el problema por el cual al hacer clic en los botones no se pueden abrir ventanas emergentes ([#7180](https://github.com/nocobase/nocobase/pull/7180)) por @zhangzhonghe

- **[acl]** Corregir error al eliminar un rol en modo de unión de roles que incluye el rol raíz. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) por @aaaaaajie

- **[base de datos]** Se corrigió un problema por el cual los campos de las vistas no se mostraban en los bloques. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) por @aaaaaajie

- **[Gestor de múltiples aplicaciones]** Corregir opciones de autenticación en posición inesperada ([#7210](https://github.com/nocobase/nocobase/pull/7210)) por @mytharcher

- **[Notificación: Mensaje en la aplicación]** Corregir la marca de tiempo BigInt en formato de cadena que causa un problema con dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) por @mytharcher

- **[Autenticación]** Corregir el problema por el cual la página de inicio de sesión no se puede desplazar ([#7159](https://github.com/nocobase/nocobase/pull/7159)) por @zhangzhonghe

- **[Acción: Solicitud personalizada]** Problema de análisis de variables en la URL durante la navegación de ruta después de una solicitud personalizada exitosa ([#7186](https://github.com/nocobase/nocobase/pull/7186)) por @katherinehhh

- **[Bloque: Kanban]** corregir problemas de UI de subtabla en Kanban y agregar soporte para la configuración del ancho de columna de Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) por @katherinehhh

- **[Flujo de trabajo: Nodo manual]** Corregir error lanzado al usar variable ([#7177](https://github.com/nocobase/nocobase/pull/7177)) por @mytharcher

- **[Impresión de plantilla]** agregar script de migración al campo rootDataType por @jiannx

- **[Flujo de trabajo: Aprobación]**
  - Corregir asociaciones al enviar aprobación por @mytharcher

  - Corregir excepción al eliminar registro por @mytharcher

  - Corregir que la rama aprobada no se ejecute cuando no hay asignado por @mytharcher

  - Para evitar error cuando el usuario no existe por @mytharcher

  - Corregir errores de bloque y asociación por @mytharcher

  - Agregar `try/catch` en la migración al actualizar el esquema de UI por @mytharcher

  - Recargar asociación en el registro por @mytharcher
