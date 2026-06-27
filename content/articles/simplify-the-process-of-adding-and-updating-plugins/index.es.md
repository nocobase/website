---
title: "Simplifica el proceso de agregar y actualizar plugins"
description: "Aprende cómo la última actualización de NocoBase simplifica la gestión de plugins, facilitando la instalación y las actualizaciones."
---

Para mejorar la experiencia de gestión de plugins, hemos realizado actualizaciones significativas en el módulo del gestor de plugins. Las principales mejoras se centran en el proceso de adición y actualización de plugins. Tenga en cuenta que estas funciones solo están disponibles en la versión 1.4.0-alpha y superiores. La rama `main` actual es v1.3. Para experimentar estas nuevas funciones, cambie a la rama `next` (v1.4).

Las actualizaciones específicas en esta versión [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) son las siguientes:

## La lista de plugins ahora se lee directamente desde los plugins locales

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

La lista de plugins ya no se lee de la tabla de plugins de la base de datos, sino directamente de las siguientes variables de entorno o directorios:

* Variables de entorno
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Directorios de plugins
  * `packages/plugins`: Plugins en desarrollo, deben incluir el código fuente.
  * `storage/plugins`: Plugins independientes, deben incluir el plugin compilado.

Los plugins se organizan como paquetes npm con la siguiente estructura de directorios:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## Extraer paquete de plugin

Extraiga directamente el paquete del plugin en el directorio especificado, y la interfaz del gestor de plugins lo detectará automáticamente. Por ejemplo:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Este comando asegura que el plugin se extraiga en `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` sin incluir el directorio `package`. La estructura de directorios correcta debería ser:

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## Fusionar el proceso de añadir y actualizar plugins.

En la interfaz, use el botón "Añadir y actualizar" en la esquina superior derecha para añadir o actualizar.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

También puede usar el comando `pm add` para añadir o actualizar plugins. El proceso es el siguiente:

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Proceso de instalación para plugins comerciales

No es necesario descargar plugins uno por uno; solo configure las siguientes variables de entorno:

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # nombre de usuario de la plataforma de servicio
NOCOBASE_PKG_PASSWORD=your-password   # contraseña de la plataforma de servicio
```

Durante la instalación o actualización de la aplicación, los plugins se descargarán y actualizarán automáticamente (versión auto-detectada).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Por ejemplo, el registro del comando de actualización:

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

Para servidores de intranet, puede cargar la carpeta `storage/plugins` local en el servidor y luego ejecutar el comando de instalación o actualización de NocoBase.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# o
yarn nocobase upgrade
```

## Eliminar plugin

Dado que la lista de plugins ya no se lee de la tabla de plugins de la base de datos, sino directamente de los plugins locales, eliminar un plugin es tan simple como eliminar la carpeta del plugin. En otras palabras, eliminar la carpeta del plugin elimina efectivamente el plugin.
