---
title: "NocoBase v1.4.4: Corrección de errores"
description: "Nota de la versión v1.4.4"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el problema de que los campos de fuentes de datos externas no se mostraban en el bloque de tabla ([#5825](https://github.com/nocobase/nocobase/pull/5825)) por @katherinehhh

  - Se corrige el problema de visualización de campos heredados en la configuración de formularios ([#5822](https://github.com/nocobase/nocobase/pull/5822)) por @katherinehhh

  - Se corrige que los campos heredados no aparezcan en la lista de campos y no se puedan sobrescribir ([#5800](https://github.com/nocobase/nocobase/pull/5800)) por @katherinehhh

- **[Visualización de datos]** Se corrige el problema al formatear campos de fecha con zona horaria en MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) por @2013xile

- **[Flujo de trabajo]**
  - Se corrige la transacción entre fuentes de datos que provocaba errores en eventos de colección ([#5818](https://github.com/nocobase/nocobase/pull/5818)) por @mytharcher

  - Se corrige la omisión del tipo de fecha en la configuración de programación basada en campos de fecha ([#5816](https://github.com/nocobase/nocobase/pull/5816)) por @mytharcher

- **[Campo de colección: Muchos a muchos (array)]** Se corrige el problema de que la actualización de campos m2m array en colecciones de relación única no surtía efecto ([#5820](https://github.com/nocobase/nocobase/pull/5820)) por @2013xile

- **[Calendario]**
  - Se corrige el error al hacer clic en una fecha en blanco del calendario ([#5803](https://github.com/nocobase/nocobase/pull/5803)) por @katherinehhh

  - Se corrige el problema de que al cerrar una ventana emergente abierta a través del 'Bloque de calendario' se cerraban todas las ventanas emergentes ([#5793](https://github.com/nocobase/nocobase/pull/5793)) por @zhangzhonghe

- **[Formularios públicos]** Se corrige la ruta incorrecta de escaneo del código QC en el formulario público de subaplicación ([#5799](https://github.com/nocobase/nocobase/pull/5799)) por @katherinehhh
