---
title: "NocoBase v1.9.32: Corrección de desbordamiento de pila causado por bucle infinito en la carga diferida de campos de asociación de visualización"
description: "Nota de la versión v1.9.32"
---

### 🎉 Nuevas Funcionalidades

- **[Workflow]** Se añaden nuevas variables de sistema en el flujo de trabajo, incluyendo `instanceId` y `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]** Se corrige un desbordamiento de pila causado por un bucle infinito en la carga diferida de campos de asociación de visualización ([#8262](https://github.com/nocobase/nocobase/pull/8262)) por @zhangzhonghe

- **[Acción: Importar registros]** Se corrige el problema por el cual el índice de fila en el mensaje de error siempre es 1 cuando se produce un error en la acción de importación ([#8244](https://github.com/nocobase/nocobase/pull/8244)) por @mytharcher

- **[Workflow: Nodo manual]** Se corrige el problema por el cual se produce un error al cancelar la ejecución de un flujo de trabajo eliminado ([#8258](https://github.com/nocobase/nocobase/pull/8258)) por @mytharcher

- **[Campo de colección: Secuencia]** Se corrige un error cuando el comando de reparación de campo-secuencia encuentra una colección inexistente en el entorno actual. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) por @cgyrock

- **[Acción: Importar registros Pro]** Se corrige la lógica de verificación de unicidad que generaba un error cuando el valor del campo único es nulo por @mytharcher

- **[Workflow: Aprobación]** Se corrige la reversión duplicada de la misma transacción por @mytharcher
