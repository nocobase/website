---
title: "NocoBase v2.1.0-beta.45: Mejoras en la aplicación gestionada y la gestión de complementos en la CLI"
description: "Nota de la versión v2.1.0-beta.45"
---

### 🎉 Nuevas Funcionalidades

- **[undefined]** Mejora en la gestión de aplicaciones y plugins administrados en la CLI, incluyendo manejo del entorno basado en appPath, importación de plugins, sincronización de plugins con licencia y actualizaciones de documentación relacionada. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) por @chenos
  Referencia: [Documentación CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Inicio rápido](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Bloque: Gantt]** Se añadió una opción para que los bloques Gantt se centren en la fecha actual por defecto. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) por @jiannx
- **[IdP: OAuth]** Se añadió soporte base para el inicio de sesión único (SSO) de aplicaciones en despliegues multi-aplicación. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) por @2013xile
- **[App SSO]** Se añadió un plugin App SSO para el inicio de sesión automático entre aplicaciones. por @2013xile
- **[Multi-espacio]** Se añadió soporte para cliente v2 en el plugin multi-espacio, incluyendo cambio de espacio y gestión de espacios. por @jiannx
- **[Supervisor de aplicaciones]** Se añadieron ajustes de App SSO para sub-aplicaciones. por @2013xile

### 🚀 Mejoras

- **[servidor]** El cliente moderno ahora se sirve bajo `/v/` en lugar de `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) por @Molunerfinn
- **[ai]** Se actualizó la versión de `xlsx` para evitar problemas de seguridad. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) por @mytharcher
- **[Filtro multi-palabra clave]** Se migró el filtro multi-palabra clave al cliente v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) por @gchust
- **[Flujo de trabajo]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en la ejecución de estos. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) por @mytharcher
- **[Plantillas de UI]** Se migraron las plantillas de UI al cliente v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) por @gchust
- **[Departamentos]** Se añadió una página de ajustes v2 para gestionar departamentos, miembros de departamento y asignaciones de usuarios a departamentos. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) por @jiannx
- **[Auth: SAML 2.0]** Las redirecciones de inicio de sesión SAML/CAS ahora siguen el prefijo del cliente moderno. por @Molunerfinn
- **[Acción: Importar registros Pro]** Se actualizó la versión de `xlsx` para evitar problemas de seguridad. por @mytharcher
- **[Flujo de trabajo: Subflujo]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en las instrucciones de subflujo. por @mytharcher
- **[Auth: OIDC]** La redirección de inicio de sesión OIDC ahora sigue el prefijo del cliente moderno. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Se eliminó el acoplamiento de transacciones del historial de flujos de trabajo en las instrucciones de aprobación. por @mytharcher

### 🐛 Corrección de Errores

- **[cliente]**
  - Se corrigió el problema donde los campos vinculados ocultos aún conservaban valores antiguos. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) por @zhangzhonghe
  - Se corrigió el error al guardar un campo de relación de árbol en una plantilla de formulario referenciada. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) por @zhangzhonghe
- **[cliente-v2]**
  - Se corrigió que las columnas de tabla v2 se volvieran invisibles cuando el ancho de columna personalizado se establecía en 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) por @katherinehhh
  - Se ajustaron todos los selectores de campos de relación para limitar los campos de asociación a un máximo de dos niveles. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) por @jiannx
- **[Acción: Importar registros]** Se corrigió que los registros importados recibieran valores de orden duplicados. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) por @2013xile
- **[Motor de flujo]** Se corrigió un problema donde convertir un bloque de plantilla de referencia a copia provocaba un error. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) por @gchust
- **[Colección: SQL]** Se bloqueó el acceso de colecciones SQL a metadatos sensibles de PostgreSQL. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) por @2013xile
- **[Flujo de trabajo]** Se corrigió el envío duplicado de ejecución de flujos de trabajo bajo workers concurrentes. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) por @mytharcher
- **[Bloque: Mapa]** Se corrigió un problema donde los valores de campos de mapa se convertían incorrectamente al alternar entre modos de visualización de texto y mapa en páginas de detalle. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) por @hongboji
- **[Flujo de trabajo: Evento de acción personalizada]** Se corrigió que faltara la acción de activación del flujo de trabajo en la lista de botones del panel de acciones del área de trabajo. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) por @katherinehhh
- **[Empleados AI]**
  - Los nodos de empleados AI en flujos de trabajo ahora pueden usar el modelo por defecto. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) por @cgyrock
  - Se ocultaron los errores sin procesar del proveedor LLM de los mensajes del frontend. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) por @cgyrock
- **[Gestor de fuentes de datos]** Se corrigió la localización de campos multi-espacio en el gestor de fuentes de datos v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) por @jiannx
- **[Fuente de datos: API REST]** Se corrigieron fallos de compilación en la declaración del plugin de fuente de datos API REST causados por discrepancias en las declaraciones de tipo del gestor de fuentes de datos cliente-v2. por @katherinehhh
- **[Política de contraseñas]** Se corrigió que los fallos de inicio de sesión ocultaran el error real con "argument #1 unsupported type undefined" cuando el error subyacente no tiene código de estado. por @Molunerfinn
- **[Flujo de trabajo: Aprobación]** Se corrigió el problema donde los títulos de campos personalizados no se mostraban en los detalles del formulario de aprobación. por @zhangzhonghe
