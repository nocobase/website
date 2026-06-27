---
title: "NocoBase v2.0.46: Corrección de errores"
description: "Nota de la versión v2.0.46"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual los valores predeterminados no se aplicaban al volver a añadir un registro después de haberlo eliminado de una subtabla. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) por @gchust

  - Se estableció la altura máxima del popover y protecciones de desplazamiento para que el área de envío permanezca accesible ([#9226](https://github.com/nocobase/nocobase/pull/9226)) por @jiannx

- **[Autenticación]** Se corrigió un problema por el cual las sesiones antiguas permanecían activas después de cambiar la contraseña ([#9261](https://github.com/nocobase/nocobase/pull/9261)) por @2013xile

- **[Fuente de datos: MariaDB externo]** Se corrigió un caso de prueba que fallaba debido a una importación incorrecta del módulo por @mytharcher
