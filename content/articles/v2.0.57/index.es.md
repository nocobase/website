---
title: "NocoBase v2.0.57: Se corrigió la salida de ofuscación del servidor de plugins para evitar globales del navegador en paquetes de tiempo de ejecución de Node.js"
description: "Nota de la versión v2.0.57"
---

### 🐛 Corrección de errores

- **[build]** Se corrigió la salida de ofuscación del servidor de complementos para evitar variables globales del navegador en los paquetes de tiempo de ejecución de Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) por @Molunerfinn

- **[Workflow: Nodo manual]** Se corrigió que los guardados temporales de tareas de flujo de trabajo manual no persistieran los valores del formulario enviado. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) por @mytharcher

- **[Empleados de IA]** Se corrigió la descripción incorrecta del nombre de la herramienta en el mensaje de contexto de trabajo ([#9567](https://github.com/nocobase/nocobase/pull/9567)) por @cgyrock

- **[Gestor de archivos]** Se renderizan de forma segura las vistas previas de PDF con PDF.js en lugar de la representación de PDF sin procesar basada en iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) por @mytharcher

- **[Auth: OIDC]** Se corrigió la fuga de tokens cuando las devoluciones de llamada de inicio de sesión SSO reciben una URL de redireccionamiento externa por @2013xile

- **[Workflow: Aprobación]**
  - Se corrigió el problema de que la API `jobs:resume` no es compatible con el nodo de aprobación por @mytharcher

  - Se corrigió la retirada de aprobación para actualizar los datos comerciales enviados respetando los permisos de actualización de la colección de origen. por @mytharcher

  - Se corrigieron las tareas de aprobación obsoletas cuando los flujos de trabajo de aprobación se terminan por fallos en nodos que no son de aprobación. por @mytharcher
