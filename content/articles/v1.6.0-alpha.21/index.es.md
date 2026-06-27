---
title: "NocoBase v1.6.0-alpha.21: corregir error de la aplicación cuando no existe la configuración de restricción de IP"
description: "Nota de la versión v1.6.0-alpha.21"
---

### 🎉 Nuevas Funcionalidades

- **[Restricción de IP]** Se corrige el error de la aplicación cuando la configuración de restricción de IP no existe. por @sheldon66

### 🐛 Correcciones de Errores

- **[auth]** Se actualiza la lógica del middleware de autenticación del cliente para evitar fallos en la actualización del token debido a la concurrencia. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) por @sheldon66
