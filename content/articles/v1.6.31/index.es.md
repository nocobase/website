---
title: "NocoBase v1.6.31: Añadir todas las claves de localización en-US faltantes"
description: "Notas de la versión v1.6.31"
---

### 🚀 Mejoras

- **[Workflow]** Añadir todas las claves de localización en-US faltantes ([#6885](https://github.com/nocobase/nocobase/pull/6885)) por @mytharcher

### 🐛 Correcciones de errores

- **[database]** Manejar celdas con cadenas vacías durante la importación de campos para prevenir errores ([#6880](https://github.com/nocobase/nocobase/pull/6880)) por @aaaaaajie

- **[client]**
  - La tabla de selección de registros de asociación no filtraba los registros ya asociados ([#6874](https://github.com/nocobase/nocobase/pull/6874)) por @katherinehhh

  - Los datos de asociación no se enviaban al exponer campos de asociación en subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) por @katherinehhh

  - Los campos de ordenación arrastrables no mostraban correctamente las opciones disponibles ([#6875](https://github.com/nocobase/nocobase/pull/6875)) por @katherinehhh

- **[Workflow]** Corregir el funcionamiento incorrecto del límite de pila para eventos de colección ([#6876](https://github.com/nocobase/nocobase/pull/6876)) por @mytharcher

- **[Bloque: Panel de acciones]** Leer el nombre base de la ruta desde el escáner para adaptarse al entorno de escritorio. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) por @sheldon66

- **[Workflow: Nodo manual]** Corregir error de renderizado al mostrar elementos no procesados ([#6879](https://github.com/nocobase/nocobase/pull/6879)) por @mytharcher

- **[Workflow: Aprobación]** Corregir el ámbito de los asignados para delegados y añadir a otros asignados por @mytharcher


