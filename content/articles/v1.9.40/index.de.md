---
title: "NocoBase v1.9.40: Weitere Dateitypen zur Vorschau auf Microsoft hinzugefügt"
description: "Versionshinweise zu v1.9.40"
---

### 🚀 Verbesserungen

- **[Office-Dateivorschau]** Weitere Dateitypen für die Vorschau unter Microsoft hinzugefügt ([#8500](https://github.com/nocobase/nocobase/pull/8500)) von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem das nanoid-Feld nach dem Absenden des Formulars nicht neu generiert wurde ([#8491](https://github.com/nocobase/nocobase/pull/8491)) von @katherinehhh

  - Doppelte Pflichtfeld-Validierungsmeldung beim Leeren eines Kaskadenfelds behoben ([#8476](https://github.com/nocobase/nocobase/pull/8476)) von @katherinehhh

- **[Datenbank]**
  - Fehler beim Filtern mit dem `empty`-Operator nach dem Neuladen einer Sammlung behoben ([#8496](https://github.com/nocobase/nocobase/pull/8496)) von @2013xile

  - Fehlerbehebung: Tiefenaktualisierung von verschachtelten Assoziationen ([#8492](https://github.com/nocobase/nocobase/pull/8492)) von @chenos

- **[Dateimanager]** Problem behoben, bei dem der aus dem Request-Body ermittelte Dateiname unerwartet dekodiert wurde ([#8481](https://github.com/nocobase/nocobase/pull/8481)) von @mytharcher

- **[Datenquelle: Hauptdatenbank]** Problem behoben, bei dem das Löschen von Datensätzen aus einem Viele-zu-Viele-Verknüpfungstabellenblock die Einschränkung `onDelete: 'restrict'` des Assoziationsfelds nicht berücksichtigte ([#8493](https://github.com/nocobase/nocobase/pull/8493)) von @2013xile

- **[Block: Iframe]** Fehler beim Hinzufügen von aggregierten Variablen zu Iframe behoben ([#8482](https://github.com/nocobase/nocobase/pull/8482)) von @zhangzhonghe

- **[Workflow: Webhook]** Problem behoben, bei dem Body-Daten fehlten, wenn die Body-Analyse nicht konfiguriert war von @mytharcher

- **[Vorlagendruck]** Falsche Druckknopf-Berechtigungslogik bei vereinigten Rollen korrigiert. von @jiannx

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem Parallelität die wiederholte Ausführung der Ausführung verursachte von @mytharcher

  - Problem behoben, bei dem eine Genehmigung an den vorherigen Knoten zurückgegeben wurde, aber zum Start zurückkehrte von @mytharcher

- **[Migrationsmanager]** Potenzielles Einfrieren des Prozesses behoben, das durch die Protokollierung übermäßig großer SQL-Anweisungen in Migrationsfehlerausnahmen verursacht wurde von @cgyrock
