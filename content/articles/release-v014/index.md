This release enables plug-and-play plugins in production environments. You can now add plugins directly through the UI, and support downloading from the npm registry (which can be private), local uploads, and URL downloads.

## New features

### New plugin manager interface

![New plugin manager interface](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Uploaded plugins are located in the storage/plugins directory.

The storage/plugins directory is used to upload plugins, and is organized as npm packages.

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

### Plugin updates

Currently, only plugins under storage/plugins can be updated, as shown here:

![Plugin updates](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Note: In order to facilitate maintenance and upgrading, and to avoid unavailability of the storage plugins due to upgrading, you can put the new plugin directly into storage/plugins and then perform the upgrade operation.

## Incompatible changes

### Changes to plugin names

* PLUGIN\_PACKAGE\_PREFIX environment variable is no longer provided.
* Plugin names and package names are unified, old plugin names can still exist as aliases.

### Improvements to pm.add

```
# Use packageName instead of pluginName, lookup locally, error if not found
pm add packageName

# Download from remote only if registry is provided, can also specify version
pm add packageName --registry=xx --auth-token=yy --version=zz

# You can also provide a local zip, add multiple times and replace it with the last one
pm add /a/plugin.zip

# Remote zip, replace it with the same name
pm add http://url/plugin.zip
```

### Nginx configuration changes

Add `/static/plugins/` location

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

More see full version of [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Plugin development guide

[Develop the first plugin](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  release](https://blog.nocobase.com/tags/release)
