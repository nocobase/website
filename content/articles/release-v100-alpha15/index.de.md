---
title: "NocoBase 1.0.0-alpha.15: Neue Plugins und verbesserte Interaktion bei 'Aktionen konfigurieren'"
description: "NocoBase v1.0.0-alpha.15 führt LDAP-Authentifizierung, benutzerdefinierte Aktionsauslöser, Gantt- und Kanban-Unterstützung und mehr ein. Dieses Update verbessert auch die Interaktion bei 'Aktionen konfigurieren' und behebt verschiedene Fehler, um die Plattformleistung zu steigern."
---

## Neue Funktionen

### Auth-Plugin: LDAP-Authentifizierung

Ermöglicht Benutzern die Anmeldung bei NocoBase mit ihren LDAP-Server-Anmeldeinformationen. Weitere Informationen finden Sie in der Dokumentation [Authentifizierung: LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Workflow-Plugin: Benutzerdefinierter Aktions-Trigger

Wenn CRUD-Aktionen nicht ausreichen, können Sie den benutzerdefinierten Aktions-Trigger des Workflows verwenden, um Ihre eigene Datenverarbeitungslogik zu orchestrieren. Weitere Informationen finden Sie in der Dokumentation [Workflow / Benutzerdefinierter Aktions-Trigger](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### Tabellenblock unterstützt fixierte Spalten

![](https://static-docs.nocobase.com/202405191512587.png)

### Unterstützt das Hinzufügen von Gantt- und Kanban-Blöcken in Pop-up-Fenstern

![](https://static-docs.nocobase.com/202405191512280.png)

### Der Detailblock unterstützt Verknüpfungsregeln

Ermöglicht die Konfiguration der Sichtbarkeitseigenschaften von Feldern.

![](https://static-docs.nocobase.com/202405191513781.png)

### Workflow-HTTP-Request-Knoten unterstützt `application/www-x-form-urlencoded`-Formatdaten

![](https://static-docs.nocobase.com/202405191514472.png)

### Eingabefelder des Workflow-HTTP-Request-Knotens unterstützen String-Templates

![](https://static-docs.nocobase.com/202405191514748.png)

### Plugin-Beispiele für die Entwicklung

Dokumentation zu [Plugin-Beispielen](https://docs.nocobase.com/plugin-samples) anzeigen.

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Verbesserungen

### Verbesserte Interaktion "Aktionen konfigurieren"

Alle Aktionen werden in einer einzigen Liste im Dropdown-Menü angezeigt, ohne Unterscheidung zwischen "Aktionen aktivieren" und "Anpassen".

* Aktionen, die nur einmal hinzugefügt werden können: Diese Aktionen behalten den Schaltereffekt bei.
* Aktionen, die wiederholt hinzugefügt werden können: Diese Aktionen verwenden nicht mehr die Schalterinteraktion und können mehrmals hinzugefügt werden.
* Ähnliche Aktionen wurden zusammengeführt
  * "Neu hinzufügen" und "Datensatz hinzufügen"
  * "Absenden" und "Datensatz speichern"

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Vereinheitlichtes Datenformat für das Ergebnis des Workflow-HTTP-Request-Knotens:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Workflow-Handbuch neu organisiert

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Fehlerbehebungen

### Log-Plugin zeigt jetzt nur noch Logs der aktuellen Anwendung an

Wenn mehrere Anwendungen vorhanden sind:

* Das Log-Plugin zeigt nur die Logdateiliste für die aktuelle Anwendung an.
* Workflow- und benutzerdefinierte Request-Ordner werden im Anwendungsordner platziert.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Weitere wichtige Fehlerbehebungen umfassen:

* Diagramme konvertierten Datumsfelder bei der Abfrage aggregierter Daten nach Datumsfeld nicht in die Client-Zeitzone. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* Ansichtsaktualisierungsproblem: Die Ansicht musste nach der Synchronisierung mit der Datenbank verlassen und erneut aufgerufen werden. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* Der Baumtabellenblock klappte beim Hinzufügen eines untergeordneten Knotens nicht alle Knoten zu. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* Die Einstellungen für das Titelfeld der Datentabelle waren ungültig. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Bigint-Feld verlor im schreibgeschützten Modus an Genauigkeit. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Offene Logdateien wurden nach dem Stoppen einer Unteranwendung nicht geschlossen. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Fehler bei der Auswahl des Beziehungsdatenmodells im Workflow-Aggregatknoten. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* Die Option "Fehler ignorieren" war im synchronen Modus für den Workflow-HTTP-Request-Knoten wirkungslos. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* Das Werteingabefeld des Workflow-HTTP-Request-Knotens lief über. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Sonderzeichen führten dazu, dass der Workflow-HTTP-Request-Knoten hängen blieb. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Problem behoben, bei dem die Einstellung von marginBlock im Theme-Editor den Abstand der Formularfelder beeinflusste. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Problem behoben, bei dem das Klicken auf die Option "Lizenz" in der oberen rechten Ecke der Seite falsch weiterleitete. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Problem behoben, bei dem der Feldoperator ungültig war, wenn ein Filterformular als Blockvorlage gespeichert wurde. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
