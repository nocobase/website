---
title: "NocoBase 0.10: Nuevas funciones en el segundo trimestre"
description: "NocoBase 0.10 mejora el componente de campo relacional al admitir múltiples cambios de componente y agrega la funcionalidad de creación rápida de datos relacionales con dos modos de creación rápida y otras actualizaciones."
---

## Novedades del segundo trimestre

- Mejoras en el componente de campo de asociación, soporte para múltiples cambios de componente
  - Selector
  - Selector de registro
  - Subformulario/Subdetalle
  - Subtabla
  - Gestor de archivos
  - Título (solo lectura)
- Creación rápida de datos relacionales, compatible con dos modos de creación rápida
  - Añadir en menú desplegable para crear rápidamente un nuevo registro basado en el campo de título
  - Añadir en ventana emergente para configurar formularios de añadido complejos
- Acción de duplicado, compatible con dos modos
  - Duplicado directo
  - Copiar en el formulario y continuar rellenando
- Plantillas de datos de formulario
- El ámbito de filtrado de datos admite variables
- Bloque de lista
- Bloque de tarjeta de cuadrícula
- Plugin de cliente móvil
- Plugin de autenticación de usuario, compatible con diferentes métodos de autenticación
  - Correo electrónico/Contraseña
  - SMS
  - OIDC
  - SAML
- Nodos de flujo de trabajo
  - Actualización del nodo manual, compatible con añadir y editar desde colecciones existentes
  - Nodo de bucle
  - Nodo de agregación
- Gestor de archivos
  - Proporciona plantilla de colección de archivos
  - Proporciona componente de gestor de archivos

## Actualización de aplicaciones

### Actualización para Docker compose

Sin cambios, consulte la referencia [Actualización para Docker compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Actualización para código fuente Git

v0.10 tiene una actualización importante de dependencias, por lo que para evitar errores al actualizar el código fuente, debe eliminar los siguientes directorios antes de actualizar

```bash
# Eliminar caché de .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Eliminar archivos compilados
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Eliminar dependencias
yarn rimraf -rf node_modules
```

Consulte [Actualización para código fuente Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone) para más detalles

### Actualización para create-nocobase-app

Se recomienda que `yarn create` vuelva a descargar la nueva versión y modifique la configuración de `.env`. Para más detalles, consulte la [guía de actualización de versión principal](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Cambios próximos obsoletos y potencialmente incompatibles

### Componente de campo de subtabla

No compatible con la nueva versión, los campos de bloque deben eliminarse y reasignarse (solo reasignación de UI)

### Cambios en la API de carga de archivos adjuntos

Además de la tabla de archivos adjuntos incorporada, los usuarios también pueden personalizar la colección de archivos. La API de carga de archivos adjuntos ha cambiado de `/api/attachments:upload` a `/api/<file-collection>:create`. La carga está obsoleta, aún es compatible con v0.10 pero se eliminará.

### Cambios en la API de inicio de sesión/registro

El núcleo de nocobase proporciona un [módulo de autenticación](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) más potente con los siguientes cambios en las API de inicio de sesión, registro, verificación y cierre de sesión de usuario:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Nota: La interfaz de usuarios anterior, que está obsoleta, aún es compatible con v0.10, pero se eliminará en la próxima versión principal.

### Ajustes en el filtrado de campos de fecha

Si previamente se configuró un filtrado relacionado con fechas en el rango de datos, debe eliminarse y reconfigurarse.

## Guía de actualización de plugins de terceros

### Actualización de dependencias

Las dependencias incluyen principalmente

- `react` actualizado a v18
- `react-dom` actualizado a v18
- `react-router` actualizado a v6.11
- `umi` actualizado a v4
- `dumi` actualizado a v2

Las dependencias de `package.json` deben cambiarse a la última versión, por ejemplo:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Cambios de código

Debido a que react-router se ha actualizado, el código relacionado también debe cambiarse. Los principales cambios incluyen

### Componente de diseño

El componente de diseño debe usar `<Outlet />` en lugar de `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

Si usa `React.cloneElement` para renderizar el componente de ruta, debe cambiarlo así:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Cambie el componente de ruta para obtener el valor de `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirección

`<Redirect>` se cambia a `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` se cambia a `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` se cambia a `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` se cambia a `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Todas las siguientes son rutas de ruta válidas en v6:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Las siguientes rutas de ruta de estilo RegExp no son válidas en v6:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Para más cambios de API, consulte [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
