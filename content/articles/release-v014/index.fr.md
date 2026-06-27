---
title: "NocoBase 0.14 : Nouveau gestionnaire de plugins, prise en charge de l'ajout de plugins via l'interface utilisateur"
description: "NocoBase 0.14 introduit un nouveau gestionnaire de plugins qui permet d'ajouter des plugins via l'interface utilisateur, prend en charge les téléchargements depuis le registre npm, les téléchargements locaux et les téléchargements par URL, améliorant ainsi la flexibilité de la gestion des plugins."
---

Cette version permet d'utiliser des plugins prêts à l'emploi dans des environnements de production. Vous pouvez désormais ajouter des plugins directement via l'interface utilisateur, et prendre en charge le téléchargement depuis le registre npm (qui peut être privé), les téléchargements locaux et les téléchargements par URL.

## Nouvelles fonctionnalités

### Nouvelle interface du gestionnaire de plugins

![Nouvelle interface du gestionnaire de plugins](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Les plugins téléchargés se trouvent dans le répertoire storage/plugins.

Le répertoire storage/plugins est utilisé pour télécharger les plugins, et est organisé sous forme de packages npm.

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

### Mises à jour des plugins

Actuellement, seuls les plugins dans storage/plugins peuvent être mis à jour, comme illustré ici :

![Mises à jour des plugins](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Remarque : Pour faciliter la maintenance et la mise à niveau, et pour éviter l'indisponibilité des plugins de stockage due à une mise à niveau, vous pouvez placer le nouveau plugin directement dans storage/plugins, puis effectuer l'opération de mise à niveau.

## Changements incompatibles

### Modifications des noms de plugins

* La variable d'environnement PLUGIN\_PACKAGE\_PREFIX n'est plus fournie.
* Les noms de plugins et les noms de packages sont unifiés ; les anciens noms de plugins peuvent toujours exister en tant qu'alias.

### Améliorations de pm.add

```
# Utilisez packageName au lieu de pluginName, recherche locale, erreur si introuvable
pm add packageName

# Téléchargement à distance uniquement si un registre est fourni, vous pouvez également spécifier une version
pm add packageName --registry=xx --auth-token=yy --version=zz

# Vous pouvez également fournir un zip local, ajouter plusieurs fois et le remplacer par le dernier
pm add /a/plugin.zip

# Zip distant, remplacez-le par le même nom
pm add http://url/plugin.zip
```

### Modifications de la configuration Nginx

Ajoutez l'emplacement `/static/plugins/`

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

Voir la version complète de [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Guide de développement de plugins

[Développer le premier plugin](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  version](https://blog.nocobase.com/tags/release)
