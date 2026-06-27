---
title: "NocoBase v2.1.0-alpha.13: agregar variables js al flujo de eventos"
description: "Nota de la versión v2.1.0-alpha.13"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** añadir variables js al flujo de eventos ([#8938](https://github.com/nocobase/nocobase/pull/8938)) por @jiannx

### 🚀 Mejoras

- **[cliente]** soporte para configurar estilos de campo mediante runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) por @jiannx

- **[motor de flujo]** Mejorar la validación de esquemas para la API de construcción de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[Flujo de trabajo: Evento previo a la acción]** Añadir reglas de validación para disparadores y nodos ([#8971](https://github.com/nocobase/nocobase/pull/8971)) por @mytharcher

- **[Flujo de trabajo]** Añadir variable para el parámetro de tamaño de página ([#8951](https://github.com/nocobase/nocobase/pull/8951)) por @mytharcher

- **[Flujo de trabajo: Webhook]** Añadir validación para la API de creación de disparadores/nodos por @mytharcher

- **[Flujo de trabajo: Subflujo]**
  - Añadir validación para la API de creación de nodos por @mytharcher

  - Añadir lógica defensiva para evitar bloqueos del flujo de trabajo cuando ocurre una excepción por @mytharcher

- **[Flujo de trabajo: Aprobación]** Añadir validación para la API de disparadores/nodos por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** Corregida la excepción al añadir nodos hijos a la tabla de árbol en la ventana emergente ([#8872](https://github.com/nocobase/nocobase/pull/8872)) por @jiannx

- **[servidor]** Evitar procesar mensajes de sincronización después de que la aplicación se haya detenido ([#8940](https://github.com/nocobase/nocobase/pull/8940)) por @mytharcher

- **[Acción: Exportar registros]** Limitar la configuración de importación y exportación de campos relacionados de múltiples capas ([#8893](https://github.com/nocobase/nocobase/pull/8893)) por @jiannx

- **[Visualización de datos]** corregida la estadística anormal de datos del gráfico del rol raíz después de habilitar el plugin de espacio ([#8969](https://github.com/nocobase/nocobase/pull/8969)) por @jiannx

- **[Acción: Importar registros]** corregido el problema de fallo en la importación después de abrir plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) por @jiannx

- **[Flujo de trabajo: JavaScript]** Corregir problemas de seguridad ([#8967](https://github.com/nocobase/nocobase/pull/8967)) por @mytharcher

- **[Empleados IA]** Ajustar el espacio entre los componentes de tarjetas de herramientas en la Conversación IA ([#8965](https://github.com/nocobase/nocobase/pull/8965)) por @cgyrock

- **[Motor de flujo]** Eliminar evento heredado copiado del repositorio uiSchema para evitar errores al disparar ([#8957](https://github.com/nocobase/nocobase/pull/8957)) por @mytharcher

- **[Autenticación]** corregir acl para soportar parámetros de filtrado de estado personalizados ([#8918](https://github.com/nocobase/nocobase/pull/8918)) por @jiannx

- **[Acción: Importar registros Pro]** limitar la configuración de importación y exportación de campos relacionados de múltiples capas por @jiannx

- **[Gestor de correo electrónico]** Corregida la firma que se sobrescribía al usar plantillas por @jiannx
