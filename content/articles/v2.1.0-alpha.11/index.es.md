---
title: "NocoBase v2.1.0-alpha.11: agregar acción de elemento JS"
description: "Nota de la versión v2.1.0-alpha.11"
---

### 🎉 Nuevas Funcionalidades

- **[cliente]** Añadir acción de elemento JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) por @jiannx

- **[Empleados IA]** Se ha añadido la capacidad SKILLS a los empleados IA. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) por @cgyrock

- **[Gestor de fuentes de datos]** Soporte para carga bajo demanda de herramientas MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) por @2013xile

### 🚀 Mejoras

- **[motor-de-flujo]** Mejora la validación de esquemas para la API de construcción de UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) por @gchust

- **[cliente]** Optimiza el diseño horizontal de las acciones de formulario ([#8869](https://github.com/nocobase/nocobase/pull/8869)) por @jiannx

- **[app]** Añade un flujo de trabajo de desarrollo basado en Rsbuild para client-v1 manteniendo la compatibilidad con el desarrollo local de plugins y la topología actual `/v2/` ([#8902](https://github.com/nocobase/nocobase/pull/8902)) por @Molunerfinn

- **[Campo de colección: divisiones administrativas de China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) por @jiannx

- **[Flujo de trabajo]** Añade validación para todos los disparadores y nodos ([#8930](https://github.com/nocobase/nocobase/pull/8930)) por @mytharcher

- **[Flujo de trabajo: Aprobación]** Corrige el problema de rendimiento causado por el campo JSON al cargar la lista de registros de aprobación por @mytharcher

### 🐛 Corrección de Errores

- **[motor-de-flujo]** Sincroniza el estado con la configuración del campo cuando se elimina un campo de formulario ([#8857](https://github.com/nocobase/nocobase/pull/8857)) por @jiannx

- **[resourcer]** Corrige un problema por el cual las fuentes de datos externas no se cargan correctamente. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) por @2013xile

- **[base de datos]** Usa advertencia en lugar de error cuando alguno de los parámetros append no es válido ([#8923](https://github.com/nocobase/nocobase/pull/8923)) por @mytharcher

- **[servidor]** Cambia el momento de cierre de Pub-Sub a `beforeStop`, para evitar que se envíen o manejen mensajes después de cerrar la base de datos ([#8934](https://github.com/nocobase/nocobase/pull/8934)) por @mytharcher

- **[Variables personalizadas]** omitir notificación de autenticación ([#8942](https://github.com/nocobase/nocobase/pull/8942)) por @chenos

- **[Empleados IA]** Corrige casos de prueba fallidos en el módulo de IA del paquete core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) por @cgyrock

- **[Localización]** Evita la solicitud localizationTexts:missing cuando se deniega el permiso ([#8903](https://github.com/nocobase/nocobase/pull/8903)) por @chenos

- **[Acción: Importar registros Pro]** Corrige el problema por el cual la opción "Activar flujo de trabajo" no funciona cuando no está marcada por @mytharcher

- **[Fuente de datos: Oracle externo]** Corrige un error que ocurre al cargar la fuente de datos externa de Oracle por @2013xile

- **[Flujo de trabajo: Aprobación]** Corrige problemas de traducción, selección de nodo y destino de retorno en el botón de retorno del formulario de aprobación v2 por @zhangzhonghe
