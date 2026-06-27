---
title: "NocoBase v1.8.0-alpha.12: Soporte para agregar opciones de pool desde env"
description: "Nota de la versión v1.8.0-alpha.12"
---

### 🚀 Mejoras

- **[database]** Soporte para añadir opciones de pool desde variables de entorno ([#7133](https://github.com/nocobase/nocobase/pull/7133)) por @mytharcher

- **[Workflow]**
  - Mejora del rendimiento de carga de la lista de ejecuciones excluyendo el campo JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) por @mytharcher

  - Añadida API de registro para pruebas de nodos ([#7129](https://github.com/nocobase/nocobase/pull/7129)) por @mytharcher

- **[Workflow: Aprobación]** Cambio de tiempo a absoluto en la línea de tiempo por @mytharcher

### 🐛 Corrección de errores

- **[utils]** Problema de filtrado en DateOnly o Datetime (sin zona horaria) usando la variable Día exacto ([#7113](https://github.com/nocobase/nocobase/pull/7113)) por @katherinehhh

- **[cli]**
  - Error indefinido al descargar plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) por @jiannx

  - Ajuste de la copia de licencia al instalar el plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) por @jiannx

- **[cliente]**
  - Tolerancia a fallos para configuraciones basadas en 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) por @mytharcher

  - La configuración del campo displayName en la vista conectada no tenía efecto ([#7130](https://github.com/nocobase/nocobase/pull/7130)) por @aaaaaajie

  - Configuración de la interfaz de usuario del nodo manual de Workflow: las reglas de enlace no pueden seleccionar variables del formulario actual ([#7125](https://github.com/nocobase/nocobase/pull/7125)) por @zhangzhonghe

- **[Workflow]** Corrección del error lanzado por importación cíclica ([#7134](https://github.com/nocobase/nocobase/pull/7134)) por @mytharcher

- **[plugin-comercial]**
  - El modo de desarrollo no muestra la ventana emergente de licencia por @jiannx

  - Cierre temporal de la ventana emergente de verificación de licencia por @jiannx

  - Ajuste de la lógica de verificación de licencia y soporte para coincidencia de nombres de dominio pan por @jiannx

- **[Política de contraseñas]** Soporte para bloquear permanentemente cuentas de usuario por @2013xile

- **[Workflow: Subflujo]** Corrección de problema en modo clúster por @mytharcher

- **[Workflow: Aprobación]**
  - Añadida configuración de diseño de formulario por @mytharcher

  - Eliminación de campos no filtrables del filtro por @mytharcher
