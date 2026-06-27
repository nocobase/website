---
title: "NocoBase v1.3.40-beta: Agregar opción de omitir verificación SSL"
description: "Nota de la versión v1.3.40-beta"
---

### 🎉 Nuevas Funcionalidades

- **[Auth: OIDC]** Añadida una opción para permitir omitir la verificación SSL por @2013xile

### 🚀 Mejoras

- **[client]** mostrar casilla de verificación desmarcada deshabilitada para campos no seleccionados ([#5503](https://github.com/nocobase/nocobase/pull/5503)) por @katherinehhh

### 🐛 Corrección de Errores

- **[database]** Corregido el problema donde los operadores de cadena "contiene" y "no contiene" no manejaban correctamente los valores `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) por @2013xile

- **[client]** Corregida la regla de enlace para evaluar correctamente las variables de parámetros de URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) por @katherinehhh

- **[Bloque: Mapa]** Corregido el problema donde algunos mapas se mostraban incorrectamente cuando existen múltiples mapas debido a múltiples llamadas al método `load` de AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) por @Cyx649312038
