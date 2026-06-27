---
title: "NocoBase v1.6.38: Corrección de errores"
description: "Nota de la versión v1.6.38"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrige el problema por el cual los bloques creados en ventanas emergentes tenían una colección incorrecta ([#6961](https://github.com/nocobase/nocobase/pull/6961)) por @zhangzhonghe

  - Se corrige el problema por el cual los valores predeterminados del formulario de filtro no eran válidos en subpáginas ([#6960](https://github.com/nocobase/nocobase/pull/6960)) por @zhangzhonghe

  - No se podían expandir los campos de colección de asociación desde fuentes de datos externas en el ámbito de la tabla de datos de roles ([#6958](https://github.com/nocobase/nocobase/pull/6958)) por @katherinehhh

  - Se corrige el problema por el cual la opción 'Contenido desbordado con puntos suspensivos' no funcionaba para campos de relación ([#6967](https://github.com/nocobase/nocobase/pull/6967)) por @zhangzhonghe

  - Se corrige el problema por el cual los valores de los campos de texto de una línea se mostraban como un arreglo en el modo de lectura fácil ([#6968](https://github.com/nocobase/nocobase/pull/6968)) por @zhangzhonghe

- **[Autenticación]** Problema de rendimiento causado por la limpieza de tokens caducados ([#6981](https://github.com/nocobase/nocobase/pull/6981)) por @2013xile

- **[Administrador de archivos]** Se corrige la configuración de tiempo de espera de Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) por @mytharcher

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige el inicializador para el banco de trabajo omitido por @mytharcher

- **[Auth: OIDC]** El texto del botón de inicio de sesión no se estaba localizando por @2013xile
