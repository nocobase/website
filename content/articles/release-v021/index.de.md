---
title: "NocoBase 0.21: Multi-DataSource-Unterstützung für Diagramme und Workflows"
description: "NocoBase 0.21 führt Multi-DataSource-Unterstützung für Diagramme und Workflows ein, optimierte Workflow-Trigger-Ereignisse und mehrere neue Feldtypen, was die Flexibilität und Leistung verbessert."
---

## Ankündigung

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Neue Funktionen

### Multi-Datenquellen-Unterstützung für Diagramme

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Weitere Informationen finden Sie in der Dokumentation [Datenvisualisierung]](https://docs.nocobase.com/handbook/data-visualization)

### Multi-Datenquellen-Unterstützung für Workflows

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Weitere Informationen finden Sie in der Dokumentation [Workflow]](https://docs.nocobase.com/handbook/workflow)

### Optimierung der Workflow-Trigger-Ereignisse

Änderungen der Triggernamen:

| Ursprünglicher Name            | Geändert in              |
| ----------------------------- | ------------------------ |
| Formularereignisse, Aktionsereignisse | Nach-Aktions-Ereignisse  |
| Geplante Aufgaben             | Geplante Ereignisse      |
| Anfrage-Interceptor           | Vor-Aktions-Ereignisse   |
| Genehmigung                   | Genehmigungsereignisse   |

Verbesserungen der Trigger-Modus-Konfiguration für die folgenden Ereignisse:

#### Nach-Aktions-Ereignisse

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Weitere Informationen finden Sie in der Dokumentation [Workflow - Nach-Aktions-Ereignisse]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Vor-Aktions-Ereignisse

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Weitere Informationen finden Sie in der Dokumentation [Workflow - Vor-Aktions-Ereignisse]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Benutzerdefiniertes Branding-Plugin

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Weitere Informationen finden Sie in der Dokumentation [Benutzerdefiniertes Branding]](https://docs.nocobase.com/handbook/custom-brand)

### Unterstützung für nanoid-Feld

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Weitere Informationen finden Sie in der Dokumentation [nanoid-Feld]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Unterstützung für uuid-Feld

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Weitere Informationen finden Sie in der Dokumentation [uuid-Feld]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Unterstützung für Unix-Timestamp-Feld

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Weitere Informationen finden Sie in der Dokumentation [Unix-Timestamp-Feld]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Zahlenfeld unterstützt Formatierungskonfiguration

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Weitere Informationen finden Sie in der Dokumentation [Feld konfigurieren / Spezifische Eigenschaftseinstellungen / Zahlenkomponente]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Unterstützung für Subpfad-Bereitstellung

Umgebungsvariable `APP_PUBLIC_PATH` hinzugefügt, um die Bereitstellung unter einem Unterpfad zu unterstützen. Beispiel:

```
APP_PUBLIC_PATH=/nocobase/
```

Lokaler Zugriff über die URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Beispiel für einen nginx-Proxy:

```
server {
    listen 80;
    server_name your_domain.com;  # Ersetzen Sie your_domain.com durch Ihre Domain

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Jetzt können Sie über http://your\_domain.com/nocobase/ darauf zugreifen.

### Block-Leistungsoptimierung

#### Unterstützung für Skelett-Bildschirm-Effekt

Block-Karten

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Kanban-Karten

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Tabellenzellen

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Verteilte Verarbeitung der Blockkonfiguration

Bisher führten Änderungen an einem beliebigen Schema auf der gesamten Seite dazu, dass die gesamte Seite neu gerendert wurde. Jetzt ist das Schema jedes Blocks unabhängig.

```
<SchemaComponent distributed schema={} />
```

Die Grid-Komponente unterstützt ebenfalls die verteilte Verarbeitung.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Inkompatible Änderungen

### Verschiedene useProps des UI-Schemas durch x-use-decorator-props und x-use-component-props ersetzt

x-use-decorator-props und x-use-component-props sind nicht-intrusiv und werden von allen Komponenten unterstützt.
