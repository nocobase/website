---
title: "NocoBase 0.20: Unterstützung für mehrere Datenquellen"
description: "NocoBase 0.20 führt Unterstützung für mehrere Datenquellen ein, Anpassungen der Sammlungsverwaltung, Nicht-ID-Primärschlüssel, verbesserte Benutzer- und Berechtigungsschnittstellen sowie neue Workflow-Knoten für mehr Flexibilität und Leistung."
---

## Neue Funktionen

### Unterstützung für mehrere Datenquellen

Das Plugin „[Data Source Manager](https://docs.nocobase.com/handbook/data-source-manager)“ wurde hinzugefügt, um alle Collections und Felder für Datenquellen zu verwalten. Der Data Source Manager bietet eine zentrale Oberfläche zur Verwaltung von Datenquellen, jedoch keine Möglichkeit, auf Datenquellen zuzugreifen. Es muss in Verbindung mit verschiedenen Datenquellen-Plugins verwendet werden. Derzeit werden folgende Datenquellen unterstützt:

* [Hauptdatenbank](https://docs.nocobase.com/handbook/data-source-main): Die NocoBase-Hauptdatenbank, die relationale Datenbanken wie MySQL, PostgreSQL, SQLite usw. unterstützt.
* [Externe MySQL-Datenquelle](https://docs.nocobase.com/handbook/data-source-external-mysql): Zugriff auf eine bestehende MySQL-Datenbank als Datenquelle.
* [Externe MariaDB-Datenquelle](https://docs.nocobase.com/handbook/data-source-external-mariadb): Zugriff auf eine bestehende MariaDB-Datenbank als Datenquelle.
* [Externe PostgreSQL-Datenquelle](https://docs.nocobase.com/handbook/data-source-external-postgres): Zugriff auf eine bestehende PostgreSQL-Datenbank als Datenquelle.

Darüber hinaus können weitere Datenquellen erweitert werden, bei denen es sich um gängige Datenbanktypen oder Plattformen handeln kann, die APIs (SDKs) bereitstellen.

![Data Source Manager](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Anpassung der Collections-Verwaltung

Der ursprüngliche „Collection Manager“ wurde nach „Datenquelle > Hauptdatenbank > Konfiguration“ verschoben.

![Konfiguration der Hauptdatenbank](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Unterstützung für Nicht-ID-Felder als Primärschlüssel und Beziehungseinschränkungen

Beim Erstellen einer Collection kann ausgewählt werden, kein ID-Feld zu erstellen.

![Vordefinierte Felder](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Ganzzahlfelder können als Primärschlüssel verwendet werden.

![Ganzzahlfelder können als Primärschlüssel verwendet werden](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Einzeilige Textfelder können ebenfalls als Primärschlüssel verwendet werden.

![Einzeilige Textfelder können ebenfalls als Primärschlüssel verwendet werden](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Beziehungseinschränkungen unterstützen die Auswahl anderer Felder mit gesetzten Unique-Indizes als Nicht-Primärschlüsselfelder.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Anpassung der Drag-and-Drop-Sortierung

Ein Feld vom Typ „Sortierung“ wurde hinzugefügt. Sortierfelder werden beim Erstellen von Collections nicht mehr automatisch generiert und müssen manuell erstellt werden.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Wenn ein Feld als Gruppe ausgewählt wird, wird vor dem Sortieren gruppiert.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Wenn die Drag-and-Drop-Sortierung in einem Tabellenblock aktiviert wird, muss das Sortierfeld ausgewählt werden.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Beim Erstellen eines Kanban-Blocks muss das Sortierfeld ausgewählt werden.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Anpassung der Benutzer- und Berechtigungsoberflächen

Eine Benutzerverwaltungsoberfläche wurde hinzugefügt und die Benutzer- und Rollenverwaltung unter einem Menü zusammengefasst.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Die Rollenverwaltungsoberfläche wurde angepasst, um die Verwaltung von benutzerassoziierten Rollen, Berechtigungen, Abteilungen usw. zu erleichtern.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Die ursprünglichen „Aktionsberechtigungen“ wurden auf die Registerkarte „Datenquelle“ verschoben.

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Abteilungs-Plugin

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Organisieren Sie Benutzer nach Abteilungen, legen Sie hierarchische Beziehungen fest, verknüpfen Sie Rollen zur Steuerung von Berechtigungen und verwenden Sie Abteilungen als Variablen in Workflows und Ausdrücken.

### Workflow: Genehmigung

Das Genehmigungs-Plugin bietet spezielle Workflow-Typen (Trigger) „Genehmigung starten“ und „Genehmigungs“-Knoten für diesen Prozess. In Kombination mit den einzigartigen benutzerdefinierten Datentabellen und benutzerdefinierten Blöcken von NocoBase können verschiedene Genehmigungsszenarien schnell und flexibel erstellt und verwaltet werden.

Genehmigungskonfiguration

![Genehmigungskonfiguration](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Genehmigungsprozess

![Genehmigungsprozess](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Weitere Details finden Sie in der Dokumentation: [Workflow-Genehmigung](https://docs.nocobase.com/handbook/workflow-approval)

### Workflow: Prozess beenden-Knoten

Dieser Knoten beendet die aktuelle Ausführung des Workflows sofort, wenn er ausgeführt wird, und endet mit dem im Knoten konfigurierten Status. Er wird typischerweise für die Steuerung spezifischer Logikabläufe verwendet, um den aktuellen Workflow nach Erfüllung bestimmter logischer Bedingungen zu verlassen, ohne mit der nachfolgenden Verarbeitung fortzufahren. Er kann mit dem return-Befehl in Programmiersprachen verglichen werden, der verwendet wird, um die aktuell ausgeführte Funktion zu verlassen.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Weitere Details finden Sie in der Dokumentation: [Prozess beenden-Knoten](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Workflow: Benutzerdefinierter Variablenknoten

Variablen können im Workflow deklariert oder zuvor deklarierten Variablen Werte zugewiesen werden, typischerweise um temporäre Daten im Workflow zu speichern. Er eignet sich für Szenarien, in denen Berechnungsergebnisse für die spätere Verwendung außerhalb des Zweigs (z. B. Schleifen, Parallelität usw.) gespeichert werden müssen.

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Weitere Details finden Sie in der Dokumentation: [Benutzerdefinierter Variablenknoten](https://docs.nocobase.com/handbook/workflow-variable)

### Workflow: Request Interceptor

Das Request Interceptor-Plugin bietet einen Mechanismus zum Abfangen von Operationen auf Formularen, wobei das Abfangereignis ausgelöst wird, nachdem die entsprechende Formularoperation übermittelt und bevor sie verarbeitet wird. Wenn im nachfolgenden Prozessablauf nach dem Auslösen ein „Prozess beenden“-Knoten ausgeführt wird oder andere Knoten nicht ausgeführt werden (Fehler oder andere unvollständige Ausführungen), wird die Formularoperation abgefangen, andernfalls wird die geplante Operation normal ausgeführt. Es kann für Geschäftsvalidierungen oder Logikprüfungen verwendet werden, um vom Client übermittelte Erstellungs-, Aktualisierungs- und Löschoperationen zu genehmigen oder abzufangen.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Weitere Details finden Sie in der Dokumentation: [Request Interceptor](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Workflow: Antwortnachricht-Knoten

Der Antwortnachricht-Knoten wird verwendet, um dem Client in bestimmten Arten von Workflows (z. B. Request Interception und Formularereignisse) Feedback mit benutzerdefinierten Nachrichten zu geben.

Knotenkonfiguration

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Hinweismeldung

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Weitere Details finden Sie in der Dokumentation: [Antwortnachricht-Knoten](https://docs.nocobase.com/handbook/workflow-response-message)

## Inkompatible Änderungen

### APIs mit Namenskonflikten

In dieser Kernel-Änderung stehen einige neue Versionen von APIs im Konflikt mit den Namen der alten Version. Diese in Konflikt stehenden alten Versionen von APIs werden in dieser Version beibehalten, jedoch einheitlich mit dem Suffix `_deprecated` versehen.

| Ursprüngliche API                    | Veraltete API                    | Neue API                                                                                                    |
| ------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                   | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                        | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                   | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager                 | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Wenn Sie die oben genannten zugehörigen APIs verwenden, haben Sie zwei Möglichkeiten zur Änderung:

* Einfacher Austausch: Ersetzen Sie die ursprüngliche API durch die mit dem Suffix `_deprecated`, z. B. ersetzen Sie `useCollection()` durch `useRecord_deprecated()`.
* Verwenden Sie die neue API gemäß der neuen Dokumentation: Obwohl die Namen der neuen APIs mit den alten APIs identisch sind, gibt es Unterschiede bei Parametern und Rückgabewerten. Sie müssen die neue Dokumentation konsultieren, um den entsprechenden Code anzupassen.

### Andere APIs, die angepasst werden müssen

* `registerTemplate()` geändert zu `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` geändert zu `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` geändert zu `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` geändert zu `useCollectionManager_deprecated()`
* Erweitern Sie Collections mit `ExtendCollectionsProvider`
* `RecordProvider` erfordert die explizite Übergabe des parent-Parameters, wenn nötig

## Änderungsbeispiele

### Erweiterung der Collection-Vorlage

#### Definition

Zuvor als Objekt definiert, muss es jetzt in eine Klasse geändert werden. Beispiel:

Vorher:

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

Jetzt:

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Die ursprünglichen Objekteigenschaften werden zu Klassenmitgliedern.

#### Registrierung

Zuvor über `registerTemplate` registriert, muss jetzt über die `dataSourceManager.addCollectionTemplates` des Plugins registriert werden. Beispiel:

Vorher:

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Jetzt:

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Erweiterung des Feld-Interfaces

#### Definition

Zuvor als Objekt definiert, muss es jetzt in eine Klasse geändert werden. Beispiel:

Vorher:

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

Jetzt:

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

Die ursprünglichen Objekteigenschaften werden zu Klassenmitgliedern.

#### Registrierung

Zuvor über `registerField` registriert, muss jetzt über die `dataSourceManager.addFieldInterfaces` des Plugins registriert werden und erfordert keine erneute Übergabe von `CollectionManagerProvider`. Beispiel:

Vorher:

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

Jetzt:

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Erweiterung der Feld-Interface-Gruppe

Zuvor über `registerGroup` registriert, muss jetzt über die `dataSourceManager.addFieldInterfaceGroups` des Plugins registriert werden. Beispiel:

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

### `useContext(CollectionManagerContext)` geändert zu `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Collections erweitern, `ExtendCollectionsProvider` anstelle von `CollectionManagerProvider` verwenden

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Änderungen an RecordProvider

Bisher wurde, wenn die parent-Eigenschaft nicht übergeben wurde, automatisch der Wert des letzten RecordProvider als parent abgerufen. Jetzt muss parent explizit übergeben werden, und wenn parent nicht übergeben wird, ist der Wert von parent undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Wenn es keinen historischen Ballast gibt, können Sie auch direkt CollectionRecordProvider als Ersatz verwenden.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Unterschied zwischen RecordProvider und CollectionRecordProvider
>
> * RecordProvider ist veraltet und wird in Zukunft entfernt.
> * RecordProvider trägt den alten RecordContext, CollectionRecordProvider nicht.
