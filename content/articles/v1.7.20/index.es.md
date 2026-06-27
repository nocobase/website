---
title: "NocoBase v1.7.20: Corrección de errores"
description: "Nota de la versión v1.7.20"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Tras cambios en un campo, los ámbitos de datos que dependen de este campo deben borrar automáticamente los valores seleccionados ([#7161](https://github.com/nocobase/nocobase/pull/7161)) por @zhangzhonghe

  - Se corrige el problema de que el ajuste del ancho de columna de la tabla no tiene efecto ([#7158](https://github.com/nocobase/nocobase/pull/7158)) por @zhangzhonghe

  - Se corrige el error con los formularios de filtro en la ventana emergente del botón Duplicar ([#7154](https://github.com/nocobase/nocobase/pull/7154)) por @zhangzhonghe

  - Se corrigió un error que ocurría al guardar una relación uno a uno en un campo de configuración. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) por @aaaaaajie

- **[indefinido]** Se corrige e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) por @mytharcher

- **[Gestor de archivos]**
  - Se corrige la detección de mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) por @mytharcher

  - Se corrige el error de compilación debido al paquete ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) por @mytharcher

- **[Formularios públicos]** Se corrige el problema por el que el campo Solo fecha no podía seleccionar una fecha en el formulario público. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) por @katherinehhh

- **[Flujo de trabajo]** Se corrige el problema de que se requieren múltiples deslizamientos hacia la izquierda para volver a la página anterior en dispositivos móviles ([#7165](https://github.com/nocobase/nocobase/pull/7165)) por @zhangzhonghe

- **[Visualización de datos]** Problema de paginación en tablas ([#7151](https://github.com/nocobase/nocobase/pull/7151)) por @2013xile

- **[Flujo de trabajo: Aprobación]**
  - Se corrigen las asociaciones no cargadas después de retirar la solicitud por @mytharcher

  - Se elimina la transacción de parcheo del esquema debido a tiempo de espera por @mytharcher

  - Se corrige el error lanzado al eliminar una aprobación por @mytharcher

  - Se corrige la actualización de asociación al enviar por @mytharcher
