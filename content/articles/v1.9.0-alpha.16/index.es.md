---
title: "NocoBase v1.9.0-alpha.16: Soporte para rotar imágenes al previsualizar"
description: "Nota de la versión v1.9.0-alpha.16"
---

### 🚀 Mejoras

- **[cliente]**
  - Soporte para rotar imágenes al previsualizarlas ([#7523](https://github.com/nocobase/nocobase/pull/7523)) por @mytharcher

  - Se añadió soporte de localización para tooltips y títulos de elementos de grupo ([#7485](https://github.com/nocobase/nocobase/pull/7485)) por @katherinehhh

- **[Adaptador de cola RabbitMQ]** Mejora en el manejo de conexiones RabbitMQ y la lógica de procesamiento de mensajes por @sdp-ncd

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió el problema por el cual los submenús de la barra lateral no se resaltaban correctamente ([#7520](https://github.com/nocobase/nocobase/pull/7520)) por @duannyuuu

  - Se corrigió el problema por el cual el popover de configuración del icono del menú quedaba oculto ([#7515](https://github.com/nocobase/nocobase/pull/7515)) por @zhangzhonghe

- **[Notificación: Mensaje en la aplicación]** Se corrigió el problema por el cual los mensajes recientes no se mostraban al abrir la ventana emergente de notificaciones ([#7514](https://github.com/nocobase/nocobase/pull/7514)) por @mytharcher

- **[Flujo de trabajo]** Se corrigió el problema por el cual la condición de la lista de flujos de trabajo era incorrecta al cargar el contexto de campos asociados en la configuración del flujo de trabajo vinculado ([#7516](https://github.com/nocobase/nocobase/pull/7516)) por @mytharcher

- **[Flujo de trabajo: Nodo de bucle]** Se corrigió el problema por el cual el proceso avanzaba incorrectamente al siguiente elemento incluso cuando no se cumplían las condiciones del nodo de bucle ([#7521](https://github.com/nocobase/nocobase/pull/7521)) por @mytharcher

- **[Flujo de trabajo: Aprobación]**
  - Se corrigió el problema por el cual ocurría un error al eliminar datos de una fuente de datos externa por @mytharcher

  - Se corrigió el problema por el cual los campos de fórmula en el formulario de aprobación no se actualizaban automáticamente por @mytharcher
