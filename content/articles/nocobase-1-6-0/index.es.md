---
title: "NocoBase v1.6.0 lanzado oficialmente"
description: "Modo de implementación en clúster, optimización de políticas de seguridad y Manager de migración, lo que ha llevado a una mejora integral en rendimiento, seguridad y experiencia de usuario."
---

## Nuevas Funcionalidades

### Modo Clúster

La edición Enterprise admite el despliegue en modo clúster mediante plugins relevantes. Cuando la aplicación se ejecuta en modo clúster, puede aprovechar múltiples instancias y el procesamiento multinúcleo para mejorar su rendimiento al manejar el acceso concurrente.

![Captura de pantalla del modo clúster](https://static-docs.nocobase.com/20241231010814.png)

Referencia: [Despliegue - Modo Clúster](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Política de Contraseñas

Se establece una política de contraseñas para todos los usuarios, que incluye reglas para la complejidad de las contraseñas, períodos de validez y estrategias de seguridad de inicio de sesión, junto con la gestión de cuentas bloqueadas.

![Captura de pantalla de la política de contraseñas](https://static-docs.nocobase.com/202412281329313.png)

Referencia: [Política de Contraseñas](https://docs.nocobase.com/handbook/password-policy)

### Política de Tokens

La Política de Seguridad de Tokens es una configuración funcional diseñada para proteger la seguridad del sistema y mejorar la experiencia del usuario. Incluye tres elementos de configuración principales: "validez de la sesión", "período de validez del token" y "límite de renovación de token caducado".

![Captura de pantalla de la política de tokens](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Referencia: [Política de Tokens](https://docs.nocobase.com/handbook/token-policy)

### Restricción por IP

NocoBase permite a los administradores configurar una lista blanca o negra de IP para el acceso de usuarios, con el fin de restringir conexiones externas no autorizadas o bloquear direcciones IP maliciosas conocidas, reduciendo así los riesgos de seguridad. También admite la consulta de registros de denegación de acceso para identificar IPs de riesgo.

![Captura de pantalla de la restricción por IP](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Referencia: [Restricción por IP](https://docs.nocobase.com/handbook/IP-restriction)

### Variables y Secretos

Se proporciona configuración y gestión centralizada de variables de entorno y secretos para el almacenamiento de datos sensibles, reutilización de configuraciones, aislamiento de entornos, y más.

![Captura de pantalla de variables de entorno](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Referencia: [Variables y Secretos](https://docs.nocobase.com/handbook/environment-variables)

### Gestor de Migraciones

Esta funcionalidad permite migrar configuraciones de aplicación de un entorno a otro.

![Captura de pantalla del gestor de migraciones](https://static-docs.nocobase.com/20250107105005.png)

Referencia:

- [Gestor de Migraciones](https://docs.nocobase.com/handbook/migration-manager)
- [Gestión de Lanzamientos](https://docs.nocobase.com/handbook/release-management)

### Gestión de Rutas

- **Datos de Menú Separados y Renombrados a Rutas**: Los datos del menú se han desacoplado del UI Schema y renombrados como "rutas". Se dividen en dos tablas, desktopRoutes y mobileRoutes, que corresponden a rutas de escritorio y móviles respectivamente.
- **Optimización del Menú Frontend con Soporte de Colapso y Adaptabilidad**: El menú frontend ahora admite funcionalidad de colapso y diseño adaptable para una experiencia de usuario mejorada.

![Captura de pantalla de la gestión de rutas](https://static-docs.nocobase.com/20250107115449.png)

Referencia: [Rutas](https://docs.nocobase.com/handbook/routes)

### Roles y Permisos

- Admite la configuración de permisos de acciones.
  ![Captura de pantalla de roles y permisos 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Admite la configuración de permisos de pestañas.

![Captura de pantalla de roles y permisos 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Gestión de Usuarios

Admite la personalización de los formularios de perfil de usuario.

![Captura de pantalla de la gestión de usuarios](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Flujo de Trabajo

Se ha añadido una entrada para el centro de tareas pendientes del flujo de trabajo en la barra de herramientas global, proporcionando notificaciones en tiempo real para nodos manuales y tareas de aprobación pendientes.

![Captura de pantalla del flujo de trabajo](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Flujo de Trabajo: Eventos de Acción Personalizados

Admite el disparo de eventos de acción personalizados tanto a nivel global como en acciones por lotes.

![Captura de pantalla de eventos de acción personalizados](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Flujo de Trabajo: Aprobación

- Admite la transferencia de responsabilidades de aprobación y la adición de aprobadores extra.
  ![Captura de pantalla del formulario de aprobación](https://static-docs.nocobase.com/20241226232013.png)
- Permite a los aprobadores modificar el contenido de la solicitud al enviar una aprobación.
  ![Captura de pantalla de modificación de aprobación](https://static-docs.nocobase.com/20241226232124.png)
- Admite la configuración de un bloque de información básica dentro de la interfaz de aprobación.
- Optimiza el estilo y la interacción al iniciar aprobaciones y ver tareas pendientes, con estas mejoras también integradas en el centro de tareas pendientes del proceso global.
  ![Captura de pantalla del centro de tareas pendientes de aprobación](https://static-docs.nocobase.com/20250310161203.png)
- Ya no se distingue la ubicación desde donde se inicia la aprobación; el bloque del centro de aprobaciones puede iniciar y procesar todas las aprobaciones.

### Flujo de Trabajo: Nodo de Mapeo de Variables JSON

Se ha añadido un nuevo nodo dedicado para mapear datos JSON de los resultados de nodos anteriores en variables.

![Captura de pantalla del nodo de mapeo de variables JSON](https://static-docs.nocobase.com/20250113173635.png)

Referencia: [Mapeo de Variables JSON](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Mejoras de Capacidad y Ejemplos de Plugins


| Extensión                         | Ejemplo de Plugin                                                |
| --------------------------------- | ---------------------------------------------------------------- |
| Campos Predefinidos Personalizados de Fuente de Datos | @nocobase-sample/plugin-data-source-main-custom-preset-fields    |
| Campo de Color de Registro de Calendario     | @nocobase-sample/plugin-calendar-register-color-field            |
| Campo de Título de Registro de Calendario     | @nocobase-sample/plugin-calendar-register-title-field            |
| Campo de Expresión de Registro de Fórmula | @nocobase-sample/plugin-field-formula-register-expression-field  |
| Campo de Grupo de Registro de Kanban       | @nocobase-sample/plugin-kanban-register-group-field              |
| Registrar Operador de Filtro          | @nocobase-sample/plugin-register-filter-operator                 |
| Extensión de Almacenamiento de Archivos            | @nocobase-sample/plugin-file-storage-demo                        |

## Cambios Importantes

### Actualización a la Política de Tokens

En la versión 1.6, se introdujo una nueva [Política de Tokens](https://docs.nocobase.com/handbook/token-policy). Cuando falla la autenticación, se devolverá un error 401 junto con una redirección a la página de inicio de sesión. Este comportamiento difiere de versiones anteriores. Para omitir la comprobación, consulte los siguientes ejemplos:

Solicitud Frontend:

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

Middleware Backend:

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### La Función de Prueba Unitaria agent.login Cambió de Síncrona a Asíncrona

Debido a varias operaciones asíncronas requeridas en el proceso de autenticación, la función de prueba login ahora es asíncrona. Ejemplo:

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### Nueva API de Extensión para Elementos de Configuración del Centro de Usuario

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Ejemplo:

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
