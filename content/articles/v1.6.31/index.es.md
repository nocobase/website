---
title: "NocoBase v1.6.31: Agregar todas las claves de configuración regional en-US faltantes"
description: "Nota de la versión v1.6.31"
---

### 🚀 Mejoras

- **[Flujo de trabajo]** Se añadieron todas las claves de localización en-US que faltaban ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Corrección de errores

- **[base de datos]** Manejar celdas con cadenas vacías durante la importación de campos para evitar errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie

- **[cliente]**
  - La tabla de registros de selección de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh

  - Los datos de asociación no se enviaban al exponer campos de asociación en subFormulario ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh

  - Los campos de ordenación arrastrables no mostraban correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh

- **[Flujo de trabajo]** Corregido el límite de pila que funcionaba incorrectamente para el evento de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher

- **[Bloque: Panel de acciones]** Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66

- **[Flujo de trabajo: Nodo manual]** Corregido error de renderizado al mostrar elemento no procesado ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corregido el ámbito de los asignados delegados y añadido a otros asignados por @mytharcher
