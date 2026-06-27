---
title: "NocoBase 1.0.0-alpha.15: Nuevos complementos y mejora en la interacción de 'Configurar acciones'"
description: "NocoBase v1.0.0-alpha.15 introduce autenticación LDAP, disparadores de acciones personalizados, soporte para diagramas de Gantt y Kanban, y más. Esta actualización también mejora la interacción de 'Configurar acciones' y aborda varias correcciones de errores para mejorar el rendimiento de la plataforma."
---

## Nuevas funciones

### Plugin de autenticación: autenticación LDAP

Permite a los usuarios iniciar sesión en NocoBase usando sus credenciales del servidor LDAP. Para más información, consulta la documentación [Autenticación: LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Plugin de flujo de trabajo: disparador de acción personalizada

Cuando las acciones CRUD no satisfacen tus necesidades, puedes usar el disparador de acción personalizada del flujo de trabajo para orquestar tu propia lógica de procesamiento de datos. Para más información, consulta la documentación [Flujo de trabajo / Disparador de acción personalizada](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### El bloque de tabla admite columnas fijas

![](https://static-docs.nocobase.com/202405191512587.png)

### Soporte para añadir Gantt y Kanban en ventanas emergentes

![](https://static-docs.nocobase.com/202405191512280.png)

### El bloque de detalles admite reglas de vinculación

Permite configurar las propiedades de visibilidad y ocultación de los campos.

![](https://static-docs.nocobase.com/202405191513781.png)

### El nodo de solicitud HTTP del flujo de trabajo admite datos en formato `application/www-x-form-urlencoded`

![](https://static-docs.nocobase.com/202405191514472.png)

### Los cuadros de entrada del nodo de solicitud HTTP del flujo de trabajo admiten plantillas de cadena

![](https://static-docs.nocobase.com/202405191514748.png)

### Ejemplos de plugins para desarrollo

Consulta la documentación de [ejemplos de plugins](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Mejoras

### Interacción mejorada de "Configurar acciones"

Todas las acciones se muestran en una sola lista en el menú desplegable, sin distinguir entre "Activar acciones" y "Personalizar".

* Acciones que solo se pueden añadir una vez: Estas acciones conservan el efecto de conmutación.
* Acciones que se pueden añadir repetidamente: Estas acciones ya no usan la interacción de conmutación y se pueden añadir varias veces.
* Acciones similares fusionadas
  * "Añadir nuevo" y "Añadir registro"
  * "Enviar" y "Guardar registro"

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Formato de datos unificado para el resultado del nodo de solicitud HTTP del flujo de trabajo:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Reorganización del manual del flujo de trabajo

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Correcciones

### El plugin de registro ahora solo muestra los registros de la aplicación actual

Cuando hay múltiples aplicaciones:

* El plugin de registro solo muestra la lista de archivos de registro para la aplicación actual.
* Las carpetas de flujo de trabajo y solicitudes personalizadas se colocan dentro de la carpeta de la aplicación.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Otras correcciones importantes incluyen:

* Los gráficos no convertían los campos de fecha a la zona horaria del cliente al consultar datos agregados por campo de fecha. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* Problema de actualización de vista, donde era necesario salir y volver a entrar a la vista después de sincronizar con la base de datos. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* El bloque de tabla de árbol no colapsaba todos los nodos al añadir un nodo hijo. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* La configuración del campo de título de la tabla de datos no era válida. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* El campo Bigint perdía precisión en modo de solo lectura. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Los archivos de registro abiertos no se cerraban después de detener una subaplicación. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Error de selección del modelo de datos de relación en el nodo de agregación del flujo de trabajo. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* La opción de ignorar errores no era efectiva en modo síncrono para el nodo de solicitud HTTP del flujo de trabajo. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* El cuadro de entrada de valor del nodo de solicitud HTTP del flujo de trabajo se desbordaba. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Los caracteres especiales causaban que el nodo de solicitud HTTP del flujo de trabajo se colgara. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Se corrigió el problema donde configurar marginBlock en el editor de temas afectaba el espaciado de los campos del formulario. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Se corrigió el problema donde al hacer clic en la opción "Licencia" en la esquina superior derecha de la página redirigía incorrectamente. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Se corrigió el problema donde el operador de campo no era válido al guardar un formulario de filtro como plantilla de bloque. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
