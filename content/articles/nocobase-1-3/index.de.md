---
title: "NocoBase 1.3: REST-API-Datenquelle, Mobile v2 und weitere Funktionen"
description: "NocoBase 1.3 führt REST-API- und MSSQL-Datenquellen ein, Unterstützung für das Öffnen von Pop-ups über URLs, dynamische Konfiguration von Feldkomponenten, verbesserte mobile Version, WeCom-Authentifizierung, Viele-zu-Viele-Arrays und einen neuen Datumsberechnungsknoten in Workflows."
---

Ab Version 1.3 bietet NocoBase zwei Hauptzweige: **main** und **next**.

- **main**-Zweig (Beta-Version) konzentriert sich auf Fehlerbehebungen und bietet eine stabile Version für Benutzer.
- **next**-Zweig (Alpha-Version) enthält einige unveröffentlichte neue Funktionen. Diese Version ist instabil und für Entwickler oder Tester gedacht, um neue Funktionen frühzeitig zu testen oder Kompatibilitätstests durchzuführen.

Die neuen Funktionen in der 1.3 Beta umfassen:

## Kern

### Unterstützung zum Öffnen von Pop-ups über URLs

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Referenzdokumentation:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Unterstützung zum Öffnen von Pop-ups als Seite

Eine neue Option "Seite" wurde für Pop-up-Operationen hinzugefügt.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Referenzdokumentation:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Felder unterstützen die Konfiguration von Stilattributen

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Referenzdokumentation:

- [Feldeinstellungen / Stil](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown und iframe HTML unterstützen die Handlebars-Template-Engine

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Referenzdokumentation:

- [Markdown Handlebars-Template-Engine](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Iframe HTML Handlebars-Template-Engine](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Unterstützung für dynamische Konfiguration von Feldkomponenten

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Referenzdokumentation:

- [Feldeinstellungen / Feldkomponente](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Plugin-Beispiele / Feldkomponente mit Wert](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### REST-API-Datenquelle

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Referenzdokumentation:

- [Datenquelle / REST-API-Datenquelle](https://docs.nocobase.com/handbook/data-source-rest-api)

### MSSQL-Externe Datenquelle

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Referenzdokumentation:

- [Datenquelle / Externe Datenbank / Externes MSSQL](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Referenzdokumentation:

- [Mobil](https://docs.nocobase.com/handbook/mobile)

### Viele-zu-viele (Array)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Referenzdokumentation:

- [Viele-zu-viele (Array)](https://docs.nocobase.com/handbook/field-m2m-array)

### Authentifizierung: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Referenzdokumentation:

- [Authentifizierung: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Workflow: Datumsberechnungsknoten

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Referenzdokumentation:

- [Workflow: Datumsberechnungsknoten](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Wichtige Änderungen

### Umgebungsvariable `DB_TIMEZONE` in `TZ` geändert

Die neue Umgebungsvariable `TZ` wurde hinzugefügt, um die Zeitzone der Anwendung festzulegen. Der Standardwert ist die Zeitzone des Betriebssystems. Die alte `DB_TIMEZONE` bleibt kompatibel, ist aber veraltet.

Referenz:

- [Umgebungsvariable / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
