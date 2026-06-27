---
title: "NocoBase v1.7.12: agregar opciones \"vacío\" y \"no vacío\" a las reglas de vinculación de campos de casilla de verificación"
description: "Nota de la versión v1.7.12"
---

### 🚀 Mejoras

- **[cliente]** Se añaden las opciones "vacío" y "no vacío" a las reglas de vinculación de campos de tipo casilla de verificación ([#7073](https://github.com/nocobase/nocobase/pull/7073)) por @katherinehhh

### 🐛 Corrección de errores

- **[cliente]** Tras crear el campo de relación inversa, la opción "Crear campo de relación inversa en la tabla de datos de destino" en la configuración del campo de asociación no estaba marcada. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) por @aaaaaajie

- **[Gestor de fuentes de datos]** Los cambios de ámbito ahora se aplican inmediatamente a todos los roles relacionados. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) por @aaaaaajie

- **[Control de acceso]** Se corrigió un problema por el cual la aplicación bloqueaba la entrada cuando no existía un rol predeterminado ([#7059](https://github.com/nocobase/nocobase/pull/7059)) por @aaaaaajie

- **[Flujo de trabajo: Evento de acción personalizada]** Se corrige la variable de URL de redireccionamiento que no se analizaba por @mytharcher
