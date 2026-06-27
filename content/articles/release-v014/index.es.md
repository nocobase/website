---
title: "NocoBase 0.14: Nuevo gestor de plugins, permite añadir plugins a través de la interfaz de usuario"
description: "NocoBase 0.14 presenta un nuevo gestor de plugins que permite añadir plugins a través de la interfaz de usuario, compatible con descargas desde el registro npm, cargas locales y descargas desde URL, mejorando la flexibilidad en la gestión de plugins."
---

Esta versión permite usar plugins plug-and-play en entornos de producción. Ahora puedes añadir plugins directamente a través de la interfaz de usuario, con soporte para descarga desde el registro npm (que puede ser privado), carga local y descarga por URL.

## Nuevas funciones

### Nueva interfaz del gestor de plugins

![Nueva interfaz del gestor de plugins](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Los plugins subidos se ubican en el directorio storage/plugins.

El directorio storage/plugins se utiliza para subir plugins y está organizado como paquetes npm.

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### Actualizaciones de plugins

Actualmente, solo se pueden actualizar los plugins que están en storage/plugins, como se muestra aquí:

![Actualizaciones de plugins](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Nota: Para facilitar el mantenimiento y la actualización, y evitar que los plugins de storage no estén disponibles debido a una actualización, puedes colocar el nuevo plugin directamente en storage/plugins y luego realizar la operación de actualización.

## Cambios incompatibles

### Cambios en los nombres de los plugins

* La variable de entorno PLUGIN\_PACKAGE\_PREFIX ya no se proporciona.
* Los nombres de los plugins y los nombres de los paquetes están unificados; los nombres antiguos de los plugins aún pueden existir como alias.

### Mejoras en pm.add

```
# Usa packageName en lugar de pluginName, busca localmente, da error si no se encuentra
pm add packageName

# Descarga desde remoto solo si se proporciona el registro, también se puede especificar la versión
pm add packageName --registry=xx --auth-token=yy --version=zz

# También puedes proporcionar un zip local, añadir varias veces y reemplazarlo con el último
pm add /a/plugin.zip

# Zip remoto, reemplázalo con el mismo nombre
pm add http://url/plugin.zip
```

### Cambios en la configuración de Nginx

Añadir la ubicación `/static/plugins/`

```
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

Más información en la versión completa de [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Guía de desarrollo de plugins

[Desarrolla el primer plugin](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  release](https://blog.nocobase.com/tags/release)
