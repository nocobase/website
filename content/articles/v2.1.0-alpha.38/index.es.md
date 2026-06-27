---
title: "NocoBase v2.1.0-alpha.38: Se corrigió un problema por el cual las variables de registro emergente actual no se podían resolver en los flujos de eventos de los botones de acción"
description: "Nota de la versión v2.1.0-alpha.38"
---

### 🐛 Corrección de errores

- **[cliente]**
  - Se corrigió un problema por el cual las variables de registro de ventanas emergentes actuales no se podían resolver en los flujos de eventos de los botones de acción. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) por @gchust

  - Se corrigió un problema por el cual los valores de los campos JS en subformularios no se establecían correctamente durante el envío del formulario. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) por @gchust

- **[motor de flujo]** Se corrigió un mensaje de error incorrecto en la consola del navegador. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) por @gchust

- **[Flujo de trabajo: JavaScript]** Se corrigió la carga del paquete en tiempo de ejecución QuickJS del flujo de trabajo JavaScript en compilaciones de producción. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) por @mytharcher

- **[Acción: Importar registros]** Se corrigió el problema por el cual los registros importados en campos tipo fecha mostraban una fecha incorrecta ([#9463](https://github.com/nocobase/nocobase/pull/9463)) por @mytharcher

- **[Acción: Importar registros Pro]** Se corrigió el manejo de la zona horaria para importaciones xlsx Pro por @mytharcher

- **[Acción: Exportar registros Pro]** Se corrigió el problema por el cual se generaba un error al exportar un adjunto desde un campo de URL de adjunto por @mytharcher
