---
title: "NocoBase 0.20: Soporte para múltiples fuentes de datos"
description: "NocoBase 0.20 introduce soporte para múltiples fuentes de datos, ajustes en la gestión de colecciones, claves primarias no ID, interfaces mejoradas de usuario y permisos, y nuevos nodos de flujo de trabajo para mayor flexibilidad y rendimiento."
---

## Nuevas Funcionalidades

### Soporte para Múltiples Fuentes de Datos

Se ha añadido el plugin "[Gestor de Fuentes de Datos](https://docs.nocobase.com/handbook/data-source-manager)", utilizado para gestionar todas las colecciones y campos de las fuentes de datos. El plugin Gestor de Fuentes de Datos proporciona una interfaz centralizada para gestionar las fuentes de datos y no proporciona la capacidad de acceder a ellas. Debe usarse junto con varios plugins de fuentes de datos. Las fuentes de datos actualmente soportadas incluyen:

* [Base de Datos Principal](https://docs.nocobase.com/handbook/data-source-main): Base de datos principal de NocoBase, compatible con bases de datos relacionales como MySQL, PostgreSQL, SQLite, etc.
* [Fuente de Datos MySQL Externa](https://docs.nocobase.com/handbook/data-source-external-mysql): Accede a una base de datos MySQL existente como fuente de datos.
* [Fuente de Datos MariaDB Externa](https://docs.nocobase.com/handbook/data-source-external-mariadb): Accede a una base de datos MariaDB existente como fuente de datos.
* [Fuente de Datos PostgreSQL Externa](https://docs.nocobase.com/handbook/data-source-external-postgres): Accede a una base de datos PostgreSQL existente como fuente de datos.

Además, se pueden ampliar más fuentes de datos, que pueden ser tipos comunes de bases de datos o plataformas que proporcionan API (SDK).

![Gestor de Fuentes de Datos](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Ajuste en la Gestión de Colecciones

Se ha movido el "Gestor de Colecciones" original a "Fuente de Datos > Base de Datos Principal > Configuración".

![Configuración de la Base de Datos Principal](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Soporte para Campos No ID como Clave Primaria y Restricciones de Relación

Al crear una colección, puedes optar por no crear un campo ID.

![Campos Predefinidos](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Los campos de tipo entero se pueden usar como claves primarias.

![Los campos de tipo entero se pueden usar como claves primarias](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Los campos de texto de una sola línea también se pueden usar como claves primarias.

![Los campos de texto de una sola línea también se pueden usar como claves primarias](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Las restricciones de relación admiten la selección de otros campos con índice Único configurado como campos no clave primaria.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Ajuste en la Ordenación por Arrastrar y Soltar

Se ha añadido un campo de tipo "Orden". Los campos de ordenación ya no se generan automáticamente al crear colecciones y deben crearse manualmente.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Al seleccionar un campo como grupo, se agrupará antes de ordenar.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Al habilitar la ordenación por arrastrar y soltar en un bloque de tabla, debes seleccionar el campo de ordenación.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Al crear un bloque Kanban, debes seleccionar el campo de ordenación.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Ajuste en las Interfaces de Usuario y Permisos

Se ha añadido una interfaz de gestión de usuarios y se han unificado la gestión de usuarios y roles bajo un mismo menú.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Se ha ajustado la interfaz de gestión de roles para facilitar la gestión de roles, permisos, departamentos, etc., asociados a los usuarios.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Se han movido los "Permisos de Acción" originales a la pestaña "Fuente de Datos".

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin de Departamento

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Organiza a los usuarios por departamentos, establece relaciones jerárquicas, vincula roles para controlar permisos y utiliza los departamentos como variables en flujos de trabajo y expresiones.

### Flujo de Trabajo: Aprobación

El plugin de aprobación proporciona tipos de flujo de trabajo (disparadores) dedicados "Iniciar Aprobación" y nodos de "Aprobación" para este proceso. Combinado con las tablas de datos personalizadas y bloques personalizados únicos de NocoBase, se pueden crear y gestionar varios escenarios de aprobación de forma rápida y flexible.

Configuración de aprobación

![Configuración de Aprobación](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Proceso de aprobación

![Proceso de Aprobación](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Se pueden encontrar más detalles en la documentación: [Aprobación de Flujo de Trabajo](https://docs.nocobase.com/handbook/workflow-approval)

### Flujo de Trabajo: Nodo de Fin de Proceso

Este nodo finaliza inmediatamente la ejecución actual del flujo de trabajo cuando se ejecuta y finaliza con el estado configurado en el nodo. Se utiliza normalmente para el control de flujo lógico específico, para salir del flujo de trabajo actual después de cumplir ciertas condiciones lógicas, sin continuar con el procesamiento posterior. Se puede comparar con el comando return en los lenguajes de programación, utilizado para salir de la función que se está ejecutando actualmente.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Se pueden encontrar más detalles en la documentación: [Nodo de Fin de Proceso](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Flujo de Trabajo: Nodo de Variable Personalizada

Se pueden declarar variables en el flujo de trabajo o asignar valores a variables declaradas previamente, normalmente se utiliza para almacenar datos temporales en el flujo de trabajo. Es adecuado para escenarios donde se necesitan almacenar resultados de cálculo para su uso posterior fuera de la rama (como bucles, paralelismo, etc.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Se pueden encontrar más detalles en la documentación: [Nodo de Variable Personalizada](https://docs.nocobase.com/handbook/workflow-variable)

### Flujo de Trabajo: Interceptor de Solicitudes

El plugin de interceptor de solicitudes proporciona un mecanismo para interceptar operaciones en formularios, donde el evento de intercepción se activa después de que se envía la operación del formulario correspondiente y antes de que se procese. Si se ejecuta un nodo "Fin de Proceso" en el flujo de proceso posterior después de la activación, o si otros nodos fallan al ejecutarse (errores u otras ejecuciones incompletas), la operación del formulario será interceptada; de lo contrario, la operación programada se ejecutará normalmente. Se puede utilizar para validación de negocio o comprobaciones lógicas para aprobar o interceptar operaciones de creación, actualización y eliminación enviadas por el cliente.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Se pueden encontrar más detalles en la documentación: [Interceptor de Solicitudes](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Flujo de Trabajo: Nodo de Mensaje de Respuesta

El nodo de mensaje de respuesta se utiliza para proporcionar retroalimentación al cliente con mensajes personalizados en tipos específicos de flujos de trabajo (como la intercepción de solicitudes y eventos de formulario).

Configuración del nodo

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Mensaje de aviso

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Se pueden encontrar más detalles en la documentación: [Nodo de Mensaje de Respuesta](https://docs.nocobase.com/handbook/workflow-response-message)

## Cambios Incompatibles

### APIs con Nombres en Conflicto

En este cambio del núcleo, algunas APIs de la nueva versión entran en conflicto con los nombres de la versión anterior. Estas APIs de la versión anterior en conflicto se conservarán en esta versión, pero se les añadirá el sufijo `_deprecated` de manera uniforme.

| API Original                         | API Obsoleta                     | Nueva API                                                                                                     |
| ------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                   | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                        | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                   | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager                 | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Si estás utilizando las API relacionadas anteriores, tienes dos formas de realizar el cambio:

* Reemplazo simple: Reemplaza la API original por la que tiene el sufijo `_deprecated`, por ejemplo, reemplaza `useCollection()` por `useRecord_deprecated()`.
* Usa la nueva API según la nueva documentación: Aunque los nombres de las nuevas API son los mismos que los de las antiguas, existen diferencias en los parámetros y valores de retorno. Debes consultar la nueva documentación para ajustar el código correspondiente.

### Otras APIs que Requieren Ajuste

* `registerTemplate()` cambió a `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` cambió a `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` cambió a `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` cambió a `useCollectionManager_deprecated()`
* Extiende colecciones usando `ExtendCollectionsProvider`
* `RecordProvider` requiere pasar explícitamente el parámetro parent cuando sea necesario

## Ejemplos de Cambio

### Extensión de Plantilla de Colección

#### Definición

Anteriormente definido como un objeto, ahora debe cambiarse a una clase. Por ejemplo:

Antes:

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

Ahora:

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Las propiedades del objeto original se convierten en miembros de la clase.

#### Registro

Anteriormente registrado a través de `registerTemplate`, ahora debe registrarse a través de `dataSourceManager.addCollectionTemplates` del plugin. Por ejemplo:

Antes:

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Ahora:

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Extensión de Interfaz de Campo

#### Definición

Anteriormente definido como un objeto, ahora debe cambiarse a una clase. Por ejemplo:

Antes:

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

Ahora:

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

Las propiedades del objeto original se convierten en miembros de la clase.

#### Registro

Anteriormente registrado a través de `registerField`, ahora debe registrarse a través de `dataSourceManager.addFieldInterfaces` del plugin y no requiere pasar `CollectionManagerProvider` nuevamente. Por ejemplo:

Antes:

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

Ahora:

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Extensión de Grupo de Interfaz de Campo

Anteriormente registrado a través de `registerGroup`, ahora debe registrarse a través de `dataSourceManager.addFieldInterfaceGroups` del plugin. Por ejemplo:

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` Cambió a `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Extender Colecciones, Usar `ExtendCollectionsProvider` en Lugar de `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Cambios en RecordProvider

Anteriormente, cuando no se pasaba la propiedad parent, se recuperaba automáticamente el valor del último RecordProvider como parent. Ahora, el parent debe pasarse explícitamente, y cuando no se pasa parent, el valor de parent será undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Si no hay bagaje histórico, también puedes usar directamente CollectionRecordProvider para reemplazarlo.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Diferencia Entre RecordProvider y CollectionRecordProvider
>
> * RecordProvider está obsoleto y se eliminará en el futuro.
> * RecordProvider lleva el antiguo RecordContext, mientras que CollectionRecordProvider no.
