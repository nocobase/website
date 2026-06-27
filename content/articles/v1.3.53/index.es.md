---
title: "NocoBase v1.3.53: Exportar hook esencial"
description: "Nota de la versión v1.3.53"
---

### 🚀 Mejoras

- **[cliente]**
  - Exportar hook esencial ([#5702](https://github.com/nocobase/nocobase/pull/5702)) por @mytharcher

  - El plugin de región de China se elimina de los plugins integrados ([#5693](https://github.com/nocobase/nocobase/pull/5693)) por @katherinehhh

- **[Workflow: Evento previo a la acción]** Eliminar registro de advertencia en el interceptor de solicitudes por @mytharcher

### 🐛 Corrección de errores

- **[cli]** El modo demonio no elimina los archivos sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) por @chenos

- **[cliente]**
  - Corregir problema con campos de asociación que se afectan entre sí cuando varios campos de asociación tienen la misma colección de destino ([#5744](https://github.com/nocobase/nocobase/pull/5744)) por @katherinehhh

  - Corregir problema de alineación de casillas de verificación en subtabla ([#5735](https://github.com/nocobase/nocobase/pull/5735)) por @katherinehhh

  - Corregir problema de visualización del campo de clave foránea en el selector de datos ([#5734](https://github.com/nocobase/nocobase/pull/5734)) por @katherinehhh

  - Corregir ajuste de feedbackLayout para mejorar los mensajes de validación en subtabla ([#5700](https://github.com/nocobase/nocobase/pull/5700)) por @katherinehhh

- **[servidor]** Cargar plugins en orden de dependencias ([#5706](https://github.com/nocobase/nocobase/pull/5706)) por @chenos

- **[Bloque: Mapa]** Corregir error al cambiar niveles de zoom en Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) por @katherinehhh

- **[Fuente de datos: Principal]** Corregir nombre de campo inferido en colección de vista ([#5729](https://github.com/nocobase/nocobase/pull/5729)) por @chareice

- **[Gestor de archivos]** Cuando el endpoint no está vacío, forcePathStyle se establece en true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) por @chenos
