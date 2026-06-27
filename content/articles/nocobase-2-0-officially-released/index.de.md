---
title: "NocoBase 2.0 offiziell veröffentlicht"
description: "Dieses Release bringt systematische Verbesserungen der KI-Fähigkeiten, der Anwendungsarchitektur, der Datenbearbeitungserfahrung und des Frontend-Ereignisflusses sowie eine vollständige Anpassung der V2-Seiten und Kernfunktionen."
---

NocoBase 2.0 ist ein bedeutendes Upgrade, das sich auf die **Entwicklung komplexer Anwendungen und die Skalierung von Bereitstellungen** konzentriert. Dieses Release bringt systematische Verbesserungen der KI-Fähigkeiten, der Anwendungsarchitektur, der Datenbearbeitungserfahrung und des Frontend-Ereignisflusses sowie die vollständige Anpassung von V2-Seiten und Kernfunktionen.

## Neue Funktionen

### KI-Mitarbeiter

KI-Funktionen sind nun als erstklassige Bürger in den Kern integriert und über das Plugin-System erweiterbar:

- Integration in den Kern mit plugin-basierter Erweiterbarkeit
- Aktualisierte und optimierte LangChain-Abhängigkeiten für bessere Stabilität und Skalierbarkeit
- Vereinfachter Interaktionsablauf für KI-Mitarbeiter, Senkung der Konfigurations- und Nutzungsbarrieren

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**Referenz:**

- [KI-Mitarbeiter](https://v2.docs.nocobase.com/ai-employees)

### App-Supervisor

Das App-Supervisor-Plugin bietet **einheitliche Erkennung, Planung und Verwaltung mehrerer NocoBase-Anwendungsinstanzen** und eignet sich für Multi-App- und Multi-Umgebungs-Bereitstellungsszenarien.

- Automatische Anwendungserkennung und zentrale Verwaltung
- Gemeinsamer Speichermechanismus für verbesserte Zusammenarbeit zwischen Instanzen
- Multi-Umgebungs-Hybridbereitstellung für komplexe Auslieferungsanforderungen

**Gemeinsamer Speicher**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**Multi-Umgebungs-Hybridbereitstellung**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**Referenz:**

- [Multi-App-Verwaltung](https://v2.docs.nocobase.com/multi-app/multi-app)

### Verbesserung der Workflow-Leinwand

#### Drag-and-Drop-Neuordnung von Knoten

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### Kopieren und Einfügen von Knoten

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### Untertabelle (Inline-Bearbeitung / Popup-Bearbeitung)

Um unterschiedliche Komplexitätsgrade bei der Bearbeitung verknüpfter Daten zu erfüllen, bietet NocoBase zwei Untertabellen-Bearbeitungsmodi:

- **Untertabelle (Inline-Bearbeitung)**: Verknüpfte Daten direkt in der Tabelle bearbeiten für effiziente Operationen, ideal für schnelle Dateneingabe und Batch-Updates
- **Untertabelle (Popup-Bearbeitung)**: Daten über Popup-Formulare bearbeiten mit Unterstützung für komplexere Feldtypen und Validierungslogik, geeignet für Szenarien mit hoher Komplexität

**Untertabelle (Inline-Bearbeitung)**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**Untertabelle (Popup-Bearbeitung)**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**Referenz:**

- [Untertabelle (Inline-Bearbeitung)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [Untertabelle (Popup-Bearbeitung)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### Feldzuweisung

Der neue Feldzuweisungsmechanismus vereinheitlicht und verbessert die **Initialisierungs- und Schreiblogik** für Formulardaten und erhöht so Klarheit und Konsistenz:

- **Vereinheitlichter** Konfigurationseintrag für Feldzuweisungen, Reduzierung der Komplexität verteilter Konfiguration
- Feldzuweisungslogik **hängt nicht mehr vom Feldkomponententyp ab**, wodurch das Datenverhalten stabiler und vorhersagbarer wird
- Unterstützung für **feldbezogene Zuweisung bei Relationsfeldern**, Ermöglichung komplexer relationaler Datenmodellierung
- Sowohl **Standardwert**- als auch **Konstantwert**-Zuweisungsmodi, die Initialisierungs- und Überschreibungsszenarien abdecken
- Legacy-"Feldstandardwert" ist veraltet; bitte migrieren Sie zum neuen Feldzuweisungsmechanismus

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**Referenz:** Feldzuweisung (Dokumentation folgt in Kürze)

### Ausführungsreihenfolge des Ereignisflusses

Der Ereignisfluss wird streng in der Hierarchie **Ereignis → Fluss → Schritt** ausgeführt, mit entsprechenden Hooks, die vor und nach jeder Ebene ausgelöst werden, für eine feinkörnige Steuerung und Erweiterung.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**Referenz:**

- [Ereignisfluss](https://v2.docs.nocobase.com/interface-builder/event-flow)

## An 2.0 Angepasste Funktionen

### Stapelbearbeitung

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**Referenz:**

- [Stapelbearbeitung](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### Duplizieren

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**Referenz:**

- [Duplizieren](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### Blockhöhe

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**Referenz:**

- [Blockhöhe](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### Drag-and-Drop-Sortierung von Tabellenzeilen

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**Referenz:**

- [Drag-Sortierung](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### Datenlademethode

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**Referenz:**

- [Datenlademethode](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### Anzeigen von Relationsfeldern in Formularen

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**Referenz:**

- [Formular](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### Seite (V2) Lokalisierungsunterstützung

V2-Seiten unterstützen jetzt die Lokalisierung vollständig über **Seiten, Blöcke, Aktionen und Felder** hinweg.

Nach der Aktivierung des Lokalisierungs-Plugins sammelt das System automatisch fehlende Übersetzungseinträge und zeigt sie in der Lokalisierungsverwaltungsliste zur zentralen Wartung an.

Verwenden Sie in JS-Blöcken `ctx.t()`, um lokalisierten Text mit Variableninterpolation abzurufen:

```js
const label = ctx.t('Ihr Name ist {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Genehmigung 2.0

Alle neu erstellten Genehmigungs-Workflows verwenden das 2.0-blockbasierte Layout. Bestehende 1.x-Konfigurationen werden weiterhin unterstützt. Um eine 1.x-Genehmigung auf das 2.0-Layout umzustellen, wählen Sie die v2-Version und konfigurieren Sie die Oberfläche neu. Beachten Sie, dass ein Wechsel zurück zu 1.x nicht möglich ist.

#### Konfigurieren der Initiator-Oberfläche

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### Konfigurieren der Genehmiger-Oberfläche

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### CC (Carbon Copy) 2.0

Alle neu erstellten CC-Knoten verwenden das 2.0-blockbasierte Layout für die Ansicht des Empfängers. Bestehende 1.x-Konfigurationen werden weiterhin unterstützt. Um eine 1.x-CC auf das 2.0-Layout umzustellen, wählen Sie die v2-Version und konfigurieren Sie die Oberfläche neu. Beachten Sie, dass ein Wechsel zurück zu 1.x nicht möglich ist.

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## In 2.0 Noch Nicht Verfügbar

Die folgenden Funktionen sind in 2.0 noch nicht verfügbar und werden in zukünftigen Versionen aktualisiert:

| Funktion                           | Aktuelle Alternative   |
| --------------------------------- | --------------------- |
| Benutzerdefinierte Anfrage        | Workflow-Anfrageknoten |
| Browser-Druck                     | JS-Aktion             |
| Mehrschritt-Formular              | JS-Block              |
| Baumfilter-Block                  | JS-Block              |
| Kalender-Block                    | JS-Block              |
| Benutzerdefinierte Variable       | Ereignisfluss         |
| Gantt-Block                       | JS-Block              |
| Kanban-Block                      | JS-Block              |
| Text kopieren                     | Ereignisfluss         |
| Spalteneinstellungen              | JS-Aktion             |
| Stil-Verknüpfungsregel            | Ereignisfluss         |
| Text kopieren Tastenkürzel        | Ereignisfluss         |
| QR-Code-Feld                      | JS-Feld               |
| Scannen zur Eingabe               | Ereignisfluss         |
| NocoBase einbetten                | —                    |
| China Verwaltungsregion Feld      | —                    |
| Code-Feld                         | —                    |
| Öffentliches Formular             | —                    |
| Workflow-Manueller Knoten Aufgabe | —                    |
| Nach erfolgreicher Übermittlung   | Ereignisfluss         |
| Datenvorlage                      | Ereignisfluss         |
