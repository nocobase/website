---
title: "NocoBase 0.14: Neuer Plugin-Manager, unterstützt das Hinzufügen von Plugins über die Benutzeroberfläche"
description: "NocoBase 0.14 führt einen neuen Plugin-Manager ein, der das Hinzufügen von Plugins über die Benutzeroberfläche ermöglicht, Downloads aus der npm-Registry, lokale Uploads und URL-Downloads unterstützt und so die Flexibilität der Plugin-Verwaltung erhöht."
---

Dieses Release ermöglicht Plug-and-Play-Plugins in Produktionsumgebungen. Sie können jetzt direkt über die Benutzeroberfläche Plugins hinzufügen und unterstützen das Herunterladen aus der npm-Registry (die privat sein kann), lokale Uploads und URL-Downloads.

## Neue Funktionen

### Neue Plugin-Manager-Oberfläche

![Neue Plugin-Manager-Oberfläche](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Hochgeladene Plugins befinden sich im Verzeichnis storage/plugins.

Das Verzeichnis storage/plugins wird zum Hochladen von Plugins verwendet und ist als npm-Pakete organisiert.

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

### Plugin-Updates

Derzeit können nur Plugins unter storage/plugins aktualisiert werden, wie hier gezeigt:

![Plugin-Updates](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Hinweis: Um die Wartung und Aktualisierung zu erleichtern und eine Nichtverfügbarkeit der Storage-Plugins aufgrund von Upgrades zu vermeiden, können Sie das neue Plugin direkt in storage/plugins ablegen und dann den Upgrade-Vorgang durchführen.

## Inkompatible Änderungen

### Änderungen an Plugin-Namen

* Die Umgebungsvariable PLUGIN\_PACKAGE\_PREFIX wird nicht mehr bereitgestellt.
* Plugin-Namen und Paketnamen werden vereinheitlicht, alte Plugin-Namen können weiterhin als Aliase existieren.

### Verbesserungen an pm.add

```
# Verwenden Sie packageName anstelle von pluginName, suchen Sie lokal, Fehler, wenn nicht gefunden
pm add packageName

# Nur von remote herunterladen, wenn eine Registry angegeben ist, kann auch eine Version angegeben werden
pm add packageName --registry=xx --auth-token=yy --version=zz

# Sie können auch eine lokale Zip-Datei bereitstellen, mehrmals hinzufügen und durch die letzte ersetzen
pm add /a/plugin.zip

# Remote-Zip, durch denselben Namen ersetzen
pm add http://url/plugin.zip
```

### Änderungen an der Nginx-Konfiguration

Fügen Sie den Speicherort `/static/plugins/` hinzu

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

Weitere Informationen finden Sie in der vollständigen Version von [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Plugin-Entwicklungsleitfaden

[Entwickeln Sie das erste Plugin](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  Release](https://blog.nocobase.com/tags/release)
