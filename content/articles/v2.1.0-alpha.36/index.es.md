---
title: "NocoBase v2.1.0-alpha.36: Se agregó soporte de cliente v2 para bloques Markdown"
description: "Nota de la versión v2.1.0-alpha.36"
---

### 🎉 Nuevas Funcionalidades

- **[Bloque: Markdown]** Se añadió soporte para cliente v2 en bloques Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) por @jiannx

- **[Bloque: Lista]** Los bloques de lista ahora son compatibles con cliente v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) por @jiannx

### 🚀 Mejoras

- **[flow-engine]** Se añadió un mensaje de confirmación de cambios no guardados al cerrar la página de configuración de flujos de eventos con datos sin guardar. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) por @gchust

- **[cli]** Se mejoró la experiencia del asistente de línea de comandos de NocoBase migrando los flujos de configuración y gestión a Inquirer, y se corrigieron problemas relacionados con la instalación, habilidades y el tiempo de ejecución en Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) por @chenos

- **[Gestor de fuentes de datos]** Se optimizó la API de modelado de datos para admitir la creación de colecciones de comentarios con IA, configurar campos de relación para fuentes de datos externas y establecer reglas de validación de campos ([#9480](https://github.com/nocobase/nocobase/pull/9480)) por @2013xile

- **[Bloque: GridCard]** Se actualizó el plugin de tarjeta de cuadrícula para ser compatible con cliente v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) por @jiannx

- **[Bloque: iframe]** Se añadió soporte v2 para el bloque iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) por @jiannx

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió que los campos de relación de solo visualización en subtablas no se mostraran o no fueran cliqueables después de actualizar. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) por @jiannx

  - Se añadió la configuración "Después del envío exitoso" para las acciones de envío de formularios. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) por @jiannx

- **[cliente-v2]** Se corrigió el problema por el cual la lista de opciones del campo de título estaba vacía para campos de relación en bloques de tabla ([#9490](https://github.com/nocobase/nocobase/pull/9490)) por @katherinehhh

- **[flow-engine]** Se corrigieron los submenús inestables de campos de relación en menús de submodelos ([#9417](https://github.com/nocobase/nocobase/pull/9417)) por @jiannx

- **[Gestor de archivos]** Se corrigió que las subidas de `tx-cos` del gestor de archivos no incluyeran metadatos de tamaño de archivo. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) por @mytharcher

- **[Campo de colección: Firma]** Se resolvió el problema de visualización del cuadro de firma en dispositivos móviles por @chenzhizdt
