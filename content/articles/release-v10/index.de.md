---
title: "Großes Update! NocoBase V1.0 offiziell veröffentlicht"
description: "Entdecken Sie die wichtigsten Updates in NocoBase V1.0, einschließlich neuer Funktionen, Plugins und erheblicher Leistungsverbesserungen. Erfahren Sie, wie dieser Meilenstein die Stabilität, Sicherheit und Funktionalität für Entwickler verbessert. Erhalten Sie detaillierte Einblicke in den neuen Theme-Editor, Verbesserungen der Datenvisualisierung und das vollständige Änderungsprotokoll. Verstehen Sie den Upgrade-Prozess, insbesondere wenn Sie SSO-Plugins verwenden, und erkunden Sie die Auswirkungen dieser Änderungen auf Ihre Projekte."
---

## Meilenstein V1.0

Nach 3 Jahren Entwicklung hat NocoBase sein erstes großes Versions-Upgrade erreicht und wechselt von Version 0.x zu 1.0. Dies markiert einen bedeutenden Meilenstein.

* In der 0.x-Phase: Die Kern-API und -Funktionen durchliefen schnelle Änderungen, wobei jede neue Version potenziell inkompatible Änderungen einführte.
* In der 1.x-Phase: Die Kern-API hat sich stabilisiert, und NocoBase wird sich darauf konzentrieren, neue Plugins hinzuzufügen, die Sicherheit zu optimieren und die Leistung zu verbessern, während die Stabilität erhalten bleibt.

## Neue Funktionen

* Der Theme-Editor kann den Seiten- und Modal-Padding, den Blockabstand und den Block-Eckenradius konfigurieren.
* Beim Hinzufügen von Blöcken unterstützen Sammlungen die Filterung.
* Beziehungsdatensätze unterstützen die Sortierung.
* Verbesserte Interaktivität der Datenvisualisierung.
* Unterstützung für das Hinzufügen von Diagrammblöcken auf mobilen Geräten.
* Diagrammfilterblöcke unterstützen die Festlegung des Felddatenbereichs.
* Weitere Variablen hinzugefügt, [siehe Details](https://docs.nocobase.com/handbook/ui/variables).
* Blöcke aus beliebigen Sammlungen können in Popups hinzugefügt werden.
* Workflows: "Post-Action-Ereignis" kann durch Schaltflächen innerhalb von Assoziationsblöcken ausgelöst werden.
* Automatische Aktualisierung der Daten im übergeordneten Container, wenn sich Daten innerhalb eines Popups ändern.
* Deutliche Leistungsverbesserungen in Tabellenblöcken.
* Wesentliche Steigerung der Testabdeckung.

## Neue Plugins

* Feld: Markdown (Vditor)
  * Wird verwendet, um Markdown zu speichern und mit dem Vditor-Editor darzustellen. Unterstützt gängige Markdown-Syntax sowie das Hochladen von Bildern, Aufnahmen usw. Es ermöglicht auch die sofortige Darstellung, bei der das, was Sie sehen, dem entspricht, was Sie erhalten.
* Kommentare
  * Stellt eine Kommentarsammlungsvorlage und einen Block bereit, um Kommentarfunktionalität für jede Sammlung hinzuzufügen.

## Vollständiges Änderungsprotokoll

* feat(plugin-workflow): Liste nach Synchronisation aktualisieren #4177
* feat(plugin-workflow): Workflow-Schlüssel als Tooltip im Titel anzeigen #4178
* test(plugin-workflow): Testfälle hinzufügen #4199
* chore: API-Cache-Header steuern #4203
* feat: Vditor-Abhängigkeit lokal laden #4190
* test: Input-Number-Separator-Test #4204
* fix: Zahlenfeld sollte Separator-Einstellung unterstützen #4197
* fix(plugin-workflow): Erfahrung verfeinern #4195
* chore: Warnhinweise für Import & Export optimieren #4196
* refactor: Externe Datenquellen-Sammlungsmanager #4193
* fix: Umgebungsfehler #4191
* fix: Leerer Operator mit Assoziationsfeld #4189
* chore: e2e hinzufügen #4184
* fix: Vditor-Version #4183
* refactor: Formulardatenvorlagen-Lokalisierung verbessern #4188
* test: Automatisierte Tests hinzufügen #4098
* chore: Datenquellen-Logger-Instanz #4181
* chore: Datenbankinstanz im Beziehungs-Repository abrufen #4179
* chore: e2e für Variablen hinzufügen #4152
* chore: Debug-Nachricht für Sammlungsdefinition #4176
* chore: unsupportedFields in Ansichtssammlung #4155
* feat: plugin-field-markdown-vditor hinzufügen #4065
* fix: Bulk-Edit-Formular-ACL-Aktionsfehler #4166
* fix: Automatische Erstellung von UUID-Fremdschlüsseln im Beziehungsfeld #4160
* fix(plugin-fm): Irreführenden Größenbeschränkungshinweis korrigieren #4153
* fix(users): users:updateProfile verbessern #4162
* fix(client): API-URL abrufen #4161
* feat: plugin-ui-routes-storage entfernen #4140
* fix: cytoscape-Version sperren #4158
* refactor: Sammlungsvorlage unterstützt presetFieldsDisabled #4159
* fix: Grid-Schema #4157
* Client-Unit-Test #4150
* fix: belongsToMany-Assoziation aktualisieren, wenn Zielschlüssel kein Primärschlüssel ist #4146
* refactor: Formulardatenvorlagen-Lokalisierung verbessern #4148
* fix(database): Spaltenname im Array-Feld #4110
* test: e2e-Test für Aktualisierung bei Aktion #4147
* fix(custom-request): Konfiguration des Inhaltstyps unterstützen #4144
* chore: Aktuelle Datensatzvariable aus dem Formular als veraltet markieren #4063
* feat(Theme): Einige Tokens hinzufügen #4137
* fix(client): Einige Warnungen beheben #4143
* style: tableActionColumn-Stil verbessern #4138
* fix: actionBar-Stil verbessern #4123
* chore: Warnmeldung bei Löschkonflikt #4141
* fix(plugin-workflow-manual): Knoten durchlassen, wenn kein Bearbeiter vorhanden #4139
* chore: Datasource-Manager-API #4124
* fix(plugin-workflow-manual): Fehler beim Parsen der Bearbeiter beheben #4125
* fix: Assoziationsfeld in Sammlung laden #4122
* perf: Alle Skeleton-Animationen entfernen #4113
* test: e2e hinzufügen #4121
* chore(data-vi): API anpassen #4116
* fix: scheduleEventTrigger #4114
* feat(plugin-workflow): Prüfung für intervallsweises Auslösen hinzufügen #4119
* feat: filterOtherRecordsCollection für DataBlockInitializer hinzufügen #4117
* refactor: CollectionField optimieren #4111
* fix: Sortierfeld-Migration verbessern #4112
* fix: Feldkomponente #4102
* fix: Assoziationsauswahl unterstützt Hinzufügemodus #4108
* fix: createdBy & updatedBy Zieloption #4109
* fix(linkage-rule): Verknüpfungsregel unterstützt leere Bedingung #4103
* fix: SanitizedCollectionProvider hinzufügen #4100
* fix: Baum-Sammlungsziel-Fehler #4105
* fix: ClearCollectionFieldContext hinzufügen #4101
* feat: Formularblock verbessern #4099
* chore: Sortierbare Optionen zum Sortierfeld migrieren #4011
* feat: Sortieroption in appends unterstützen #4056
* feat(data-vi): Ermöglicht Kreisdiagramm, negative Zahlen zu akzeptieren, behebt T-4075 #4094
* fix(data-vi): Zahl wird nach Präzisionstransformation zu String #4092
* fix: URL-Parameter codieren #4055
* test(plugin-workflow): Testfall für doppelt ausgelösten Zeitplan-Workflow hinzufügen #3817
* perf(LinkageRules): Verzögerungsprobleme lösen #4090
* fix(subTable): Option "Neue Daten hinzufügen zulassen" sollte nicht angezeigt werden #4086
* fix: Fehlende Felder #4083
* fix: Tabellenauswahl-Seitenzahlfehler #4078
* fix: Seite zurücksetzen beim Festlegen des Blockdatenbereichs #4081
* fix: Benutzerdefinierte Anforderungsrollenliste #4074
* fix: ISO-Woche parsen #4068
* fix(sourceId): Fehler vermeiden #4077
* fix(sql-collection): Schnittstelle kann beim Festlegen von Feldern nicht ausgewählt werden #4079
* fix: Mit Quellfeld laden #4075
* fix: Löschung von Operationsverknüpfungsregeln wird nicht in Echtzeit wirksam #4058
* fix(core): Rundungsfehler im Formelauswerter beheben #4070
* test: e2e für Datenlademodus hinzufügen #4069
* fix(filterForm): Doppelte Namen vermeiden #4071
* chore: Blocktitel optimieren #4040
* fix: Standardwert in Ansicht synchronisieren #4067
* fix(defaultValue): Problem beheben, dass Standardwerte nach Seitenaktualisierung verschwinden #4066
* refactor: Gantt-Block #4059
* fix: Untertabellen-Großfeld sollte variablen Standardwert unterstützen #4062
* chore(Theme): Standardschriftgröße des Kompaktthemas auf 16 setzen #4064
* test: e2e für Aktionen hinzufügen #4053
* fix(variable): Fehlende Variablen und ungültige Übersetzungen #4054
* test: Backend-Unit-Tests hinzufügen #4000
* fix: Karten-Element verbessern #4036
* chore(acl): Registrierung von Assoziationsfeldaktionen deaktivieren #4014
* fix(variable): Fehler bei übergeordneter Datensatzvariable im Datenbereich beheben #4039
* test(e2e): Behauptungen zu Feldwerten hinzufügen #4034
* feat(Variable): Neue Variable hinzufügen #4025
* feat: e2e mit Pro-Plugins ausführen #3890
* fix: Fehler #4038
* fix: Array-Operator mit CamelCase-Feld #4032
* fix: scopeKeyOptions sollten in Echtzeit abgerufen werden #4029
* fix(addText): Sollte FormItemSchemaToolbar anstelle von BlockSchema… verwenden #3963
* feat: Einmaligen Hook im Datasource-Manager registrieren #4024
* fix: Snippets #4030
* fix: vitest einzelner Fehler #4031
* feat(data-vi): Verbesserte Benutzererfahrungen (siehe PR) #4013
* test: Frontend-Unit-Test hinzufügen #3991
* feat: Option "Andere" im Popup unterstützen #4015
* fix(collection-manager): Keine Aktualisierung nach Überschreiben des Feldes #4022
* chore: Export- & Import-Warnungen hinzufügen #4027
* refactor: Datenquelle von Drittanbietern unterstützt Sortierfeld-Gruppensortierungsbearbeitung #4023
* fix(plugin-acl): pm.acl.roles Snippet #4026
* test: e2e-Test für Assoziationsnamenblock #4021
* fix: API-URL abrufen #4020
* fix(Sub-details): Initialisierer-Schaltfläche wird nicht angezeigt, wenn der Feldwert leer ist #4019
* fix: Initialisierer verwendet useAassociationName #4018
* fix(auth): CAS-Login-Fehler bei Verwendung von Unterverzeichnis-Bereitstellung #4017
* fix(TreeTable): Fehler beim Hinzufügen von Kindern #4008
* fix: Entfernen des aktiven Feldes sollte den Wert nicht löschen #4012
* fix(plugin-acl): Datenquellen-Rollen-Snippet #4016
* fix: Nach Auswahl aller, Bulk-Update fordert für nicht ausgewählte Daten auf #4010
* refactor: Baumtabelle ist standardmäßig nicht aktiviert #4001
* feat(plugin-workflow-action-trigger): Unterstützung für Assoziationsaktionen zum Auslösen #4007
* Update application.ts #4006
* fix: Tag-Feld-Einstellung #4009
* fix(users): Telefonvalidierung aufgrund falscher Prüfung ausländischer Telefonnummern entfernen #4005
* fix: Fehler bei der Berechtigungsprüfung für Assoziationsblockaktionen #3994
* refactor: Felder für Tabellensortierung können keine Sortierfelder mit scopekey auswählen #3984
* fix(Form): Ungültiger parentRecord #3998
* fix(plugin-workflow): Lokalisierung anpassen #3993
* fix: Untertabelle unterstützt allowSelectExistingRecord-Einstellung #4004
* fix(auth): Registrierungsseite nicht gefunden bei direktem Aufruf der URL #4002
* chore(database): Nullwert setzen, wenn Feld eindeutig ist und Wert leerer String ist #3997
* chore(gateway): Fehler mit Ursachenmeldung melden #3999
* chore(error-handler): Meldung anzeigen, die den Fehler verursacht #3996
* fix: Wiederherstellung mit Tabellennamen in CamelCase #3995
* refactor(plugin-workflow): Kommentare anpassen #3990
* fix: Gantt einklappen & ausklappen #3982
* fix(BulkForm): Sollte erforderlich sein beim Wechsel zu 'Geändert zu' #3965
* fix: Aktion verschieben #3985
* refactor: Sortierfeld sollte keinen defaultValue haben #3986
* chore: Klassennamen von Plugins aktualisieren #3981
* feat(plugin-workflow-sync): Synchronisation hinzufügen, wenn Multi-App-Share-Collection aktiviert ist #3969
* fix(localization): Falsche Lokalisierung beim ersten Betreten #3968
* chore: API-Kommentare anpassen und hinzufügen #3951
* refactor: Konfiguration der Auswahloptionen #3964
* fix(GridCard): Anzahl der in einer Zeile angezeigten Spalten festlegen #3960
* refactor: Nur numerische Formelfelder unterstützen Formatierung #3962
* chore(plugin-workflow): Kommentare hinzufügen #3959
* chore: Legacy-Formel-Plugins entfernen #3939
* fix(LinkageRules): Sollte sofort wirksam sein #3958
* fix(Picker): Sollte Option "Neue Daten hinzufügen zulassen" anzeigen #3957
* fix(connect-data-blocks): Sollte sofort im Dropdown-Menü angezeigt werden #3953
* fix: Linker Menütitel ändern #3956
* fix: Vorlagenlisten-Provider-Fehler #3950
* refactor: nanoid & uuid autoFill #3955
* feat: getParentJsonSchema im UI-Schema-Repository #3690
* fix: uuid & nano id Feldwert mit Sequelize-Validierung speichern #3952
* fix: throughCollection unterstützt Fuzzy-Suche #3949
* fix: getSourceKeyByAssocation #3947
* fix(RichText): Stil vereinheitlichen #3946
* fix(connectDataBlocks): Sollte FilterBlockProvider zum Grid hinzufügen #3944
* chore: appVersion zum Schema hinzufügen #3936
* fix: collectionFieldInterfaceSelect #3945
* fix: sourceId von Vorlagen korrigieren #3941
* fix(collection manager): Sammlungsmanager primarykey & nanoid & uuid unterstützen Index-Einstellung #3943
* fix(plugin-formula-field): Komponentenkontext korrigieren #3937
* fix: nanoid availableTypes #3942
* fix: Automatische Generierung von Standardwerten #3940
* fix: Formelfeld-Berechnungsfehler #3938
* fix: Formelfeld unterstützt Formatierung #3928
* refactor: Tab-Initialisierer-Benennung vereinheitlichen #3932
* fix: zIndex zum Lightbox-Overlay-Stil hinzufügen #3934
* fix(Table): Problem beheben, dass der Inhalt des Assoziationsfeldes nicht angezeigt wird #3930
* fix(evaluators): Array-Abflachung korrigieren #3931
* refactor: Hauptdatenquellen-Ansichtssammlung unterstützt filterTargetKey #3818
* fix: Formelfeld-Berechnungsfehler #3929
* fix: Ansichtssammlung gehört zu Assoziation mit Quelloptionen laden #3912
* fix: Unverändertes Bearbeitungsformular sollte beim Schließen des Modals keine ungespeicherte Warnung anzeigen #3920
* fix(Collapse): Fehler für chinaRegions beheben #3925
* fix: Zahlenanzeigeformat #3924
* fix(defaultValue): Sollte sofort wirksam sein, wenn Standardwert gesetzt wird #3923
* feat: Aktion unterstützt refreshDataBlockRequest-Konfiguration #3882
* refactor: formBlockProvider & detailBlockProvider #3898
* feat(data-vi): Ermöglicht das Hinzufügen von Diagrammen für mobile Clients #3922
* chore: API-Kommentare hinzufügen #3919
* fix: Pagination korrigieren #3921
* test(plugin-error-handler): Middleware #3909
* fix: Plugin aktualisieren #3895
* fix: Gantt-Block-Seitenzahl #3918
* fix: Quell-ID null #3917
* fix(Table): Pagination korrigieren #3916
* fix: Korrekte sourceId abrufen #3897
* fix(DataScope): Problem beheben, dass nach dem Speichern keine sofortige Wirkung eintritt #3910
* fix: Auswahlfeldoptionen initialValue #3911
* fix: Externer Link-Klick #3908
* fix(inputNumber): Genauigkeitsverlust bei inputNumber #3902
* feat(plugin-workflow-action-trigger): Globale Aktionsereignisse hinzufügen #3883
* docs: API-Kommentar hinzufügen #3868
* fix: vitest-Konfigurationsfehler #3907
* fix: Tabellenfixierungsfehler #3901
* fix: Listendaten undefinierter Fehler #3905
* fix: Lazy-Render-Fehler #3886
* fix: Fehlende Sortierparameter #3906
* refactor: useProps in x-use-component-props ändern #3853
* fix(withDynamicSchemaProps): Deep Merge in Shallow Merge ändern #3899
* fix: Historienblock-Schaltfläche "Drucken" hinzufügen, Klick auf Drucken-Schaltfläche führt zu Fehler #3900
* fix: tar-Fehler #3891
* chore: bigInt als String-Typ zurückgeben #3887
* feat(data-vi): Datenbereich für Diagrammfilterfelder #3894
* feat: Menü "Neu hinzufügen" anpassen #3884
* fix(plugin-custom-request): Dialog der Bearbeitungsschaltfläche korrigieren #3893
* fix: fieldNames fehlen beim Festlegen des Datenbereichs #3892
* fix: deps-Prüfungsfehler bei dev beim Hinzufügen eines Produktions-Plugins #3848
* fix: Workflow-Tabs nicht vorhanden #3889
* fix: Assoziationsfeld unterstützt Datenbereichsverknüpfung #3888
* fix: templateBlockProvider unterstützt Assoziationsfeld-Anhang #3866
* chore: Hauptdatenquellen-API #3880
* feat: vitest mit Coverage ausführen #3802
* fix: Doppelte Menüschlüssel vermeiden #3885
* fix(data-vi): Doppelachsen-Diagramm wird abnormal angezeigt #3881
* fix: Aktualisierung ablehnen, wenn Filter leeres Objekt ist #3777
* chore: Feld mit Primärschlüsselattribut aktualisieren #3852
* refactor: uuid & nanoid unterstützen Standardwertkonfiguration #3830
* feat: Tabellenleistung #3791
* fix: setFormValueChanged undefiniert #3879
* fix(client): deaktiviert in Filter-Dynamikkomponente korrigieren #3874
* fix(plugin-workflow-parallel): Lokalisierung korrigieren #3876
* fix(formula-field): Formelfeld setzt Formularwertänderung #3873
* fix: formBlockProvider-Blockanzeige #3877
* refactor(plugin-workflow): Änderung zu #3871
* fix: Kanban-Karten-Modalanzeige abnormal #3863
* fix: filterTargetKey unterstützt nur Ansichtssammlung #3872

## Plugin-Änderungen

Die folgenden Plugins werden nicht mehr als Open-Source-Version bereitgestellt (Benutzer, die sie in Produktionsumgebungen verwendet haben, kontaktieren Sie uns bitte für Upgrades):

* @nocobase/plugin-auth-cas: Authentifiziert Identität über das CAS-Protokoll.
* @nocobase/plugin-auth-odic: Authentifiziert Identität über das OIDC (OpenID Connect)-Protokoll.
* @nocobase/plugin-auth-saml: Authentifiziert Identität über SAML 2.0.

Die folgenden Plugins wurden als veraltet markiert und werden in zukünftigen Versionen entfernt:

* @nocobase/plugin-audit-logs: Veraltet, vorübergehend nicht entfernt, wird in der neuen Version nicht installiert.
* @nocobase/plugin-snapshot-field: Veraltet, vorübergehend nicht entfernt, wird in der neuen Version nicht installiert.
* @nocobase/plugin-charts: Verwenden Sie stattdessen @nocobase/plugin-data-visualization.
* @nocobase/plugin-excel-formula-field: Verwenden Sie stattdessen @nocobase/plugin-field-formula.
* @nocobase/plugin-math-formula-field: Verwenden Sie stattdessen @nocobase/plugin-field-formula.
* @nocobase/plugin-ui-routes-storage: Veraltet, Frontend-Routen können direkt im Frontend erweitert werden.

Die vollständige Liste der Plugins finden Sie unter: [https://www.nocobase.com/plugins.html](https://www.nocobase.com/plugins.html)

## Code-Kommentare

Um eine bessere Entwicklungserfahrung zu bieten, haben wir Kommentare zu einigen speziellen APIs hinzugefügt:

* `@internal`: Wird normalerweise verwendet, um interne Implementierungsdetails oder Methoden zu kennzeichnen, die nicht für die öffentliche Nutzung bestimmt sind, sondern für die interne Verwendung im Code existieren.
* `@experimental`: Wird verwendet, um experimentelle Funktionen oder APIs zu kennzeichnen. Diese APIs befinden sich noch in der Entwicklungs- und Testphase, können erheblichen Änderungen unterliegen oder sogar in zukünftigen Versionen entfernt oder ersetzt werden.
* `@deprecated`: Wird verwendet, um veraltete Funktionen, Methoden oder APIs im Code zu kennzeichnen. Obwohl sie noch verfügbar sind, können sie in zukünftigen Versionen entfernt werden, oder es sind möglicherweise bessere alternative Lösungen verfügbar.

## Lizenzvereinbarung

NocoBase ist unter AGPL-3.0 und kommerziellen Lizenzen dual-lizenziert. Einzelheiten finden Sie in der [NocoBase-Lizenzvereinbarung](https://cn.nocobase.com/agreement-cn.html).

## Upgrade-Anleitung

* Sichern Sie vor dem Upgrade immer Ihre Datenbank! Sichern Sie immer Ihre Datenbank! Sichern Sie immer Ihre Datenbank!
* Sie können auch den gesamten Projektcode sichern.

Da die drei SSO-Plugins Auth: CAS, Auth: OIDC, Auth: SAML aus dem Open-Source-Code entfernt wurden, wird das Upgrade in zwei Fälle unterteilt.

### Wenn Sie keine SSO-Plugins verwenden

Bitte folgen Sie der [konventionellen Methode](https://docs.nocobase.com/welcome/getting-started/upgrading) für das Upgrade.

### Wenn Sie SSO-Plugins verwenden

Bitte führen Sie das Upgrade gemäß den folgenden Schritten durch:

#### 1. Aktualisieren Sie die Anwendung

Lesen Sie die [NocoBase-Upgrade-Übersicht](https://docs.nocobase.com/welcome/getting-started/upgrading) und aktualisieren Sie NocoBase auf die neueste Version.

Wenn Sie zuvor CAS-, OIDC- oder SAML-Plugins aktiviert hatten, werden während des Upgrades die folgenden Eingabeaufforderungen angezeigt:

Eingabeaufforderung im Befehlszeilen-Upgrade-Terminal:

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Eingabeaufforderung in der Docker-Version-Oberfläche:

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. Plugins entfernen oder Plugin-Version 1.0 erhalten?

***Wenn Sie sich dafür entscheiden, die Plugins zu entfernen und mit dem Upgrade fortzufahren:***

Entfernen Sie die Plugins gemäß den Eingabeaufforderungen

```
# Hauptanwendung
yarn pm remove cas oidc saml --force
# Wenn es sich um eine Unteranwendung handelt, fügen Sie den Parameter --app hinzu
yarn pm remove cas oidc saml --force --app=sub-app1
```

Fahren Sie mit dem Upgrade fort

```
yarn nocobase upgrade
```

***Wenn Sie sich dafür entscheiden, die Plugins auf Version 1.0 zu aktualisieren***

Kontaktieren Sie das NocoBase-Team, um Version 1.0 der Plugins zu erhalten, und fahren Sie mit dem Upgrade fort.

#### 3. Upgrade-Prozess für CAS-, OIDC- und SAML-Plugins

Zu diesem Zeitpunkt ist die Anwendungsoberfläche nicht mehr zugänglich, daher müssen wir manuell upgraden.

1. Melden Sie sich mit Ihrem Konto bei [service.nocobase.com](https://service.nocobase.com/) an, um die neueste Version der Plugins herunterzuladen.
2. Entpacken Sie die Plugins in das angegebene Verzeichnis
   * CAS-Plugin entpacken nach `./storage/plugins/@nocobase/plugin-auth-cas`
   * OIDC-Plugin entpacken nach `./storage/plugins/@nocobase/plugin-auth-oidc`
   * SAML-Plugin entpacken nach `./storage/plugins/@nocobase/plugin-auth-saml`
3. Aktualisieren Sie die Anwendung
   * Für die Docker-Version starten Sie einfach den Container neu
   * Für die Quellcode- oder create-nocobase-app-Version
     1. Abhängigkeiten herunterladen `yarn install`
     2. Upgrade-Befehl ausführen `yarn nocobase upgrade`
     3. Anwendung neu starten
