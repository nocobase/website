---
title: "NocoBase v2.0.0-alpha.52: Unterstützung für Hinzufügen/Auswählen/Trennen von Einstellungen in n-zu-n-Unterformularen hinzugefügt"
description: "Versionshinweise zu v2.0.0-alpha.52"
---

### 🎉 Neue Funktionen

- **[Client]** Unterstützung für Hinzufügen/Auswählen/Trennen-Einstellungen in n-zu-m-Unterformularen hinzugefügt ([#8099](https://github.com/nocobase/nocobase/pull/8099)) von @katherinehhh

- **[Datenquelle: REST-API]** Option `Fehlermeldungstransformator` in der Konfiguration der RESTful-API-Datenquelle hinzugefügt von @cgyrock

### 🚀 Verbesserungen

- **[Auth]** [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) behoben ([#8128](https://github.com/nocobase/nocobase/pull/8128)) von @2013xile

- **[Aktion: Datensätze importieren]**
  - Auswahl der ID für Importfelder ermöglicht ([#8133](https://github.com/nocobase/nocobase/pull/8133)) von @katherinehhh

  - Auswahl der ID für Importfelder ermöglicht ([#8132](https://github.com/nocobase/nocobase/pull/8132)) von @katherinehhh

- **[Workflow: Genehmigung]** API geändert, um ein einzelnes Genehmigungselement abzurufen, und Code vereinfacht von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Behoben: Deaktivierter Zustand von Kindern blockiert nicht mehr die Auswahl von Beziehungsfeldern ([#8131](https://github.com/nocobase/nocobase/pull/8131)) von @katherinehhh

  - Behoben: Problem, bei dem die `RemoteSelect`-Komponente fälschlicherweise einen Datensatz lädt, wenn der Wert null ist ([#8137](https://github.com/nocobase/nocobase/pull/8137)) von @mytharcher

  - Behoben: Problem, bei dem die UI-Komponentenbreite bei Auswahl von „Vergangenheit“ oder „Zukunft“ für Datumsfilterfelder inkonsistent war. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) von @gchust

  - Behoben: Problem, bei dem Standardfeldbezeichnungen in Filterformularblöcken nicht korrekt in mehreren Sprachen übersetzt werden konnten. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) von @gchust

  - Behoben: Problem, bei dem die Titel- und Beschreibungsstile von JS-Blöcken inkonsistent mit anderen Blöcken waren. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) von @gchust

  - Behoben: Verschachtelte Untertabelle in Unterformular zeigt keine Daten an ([#8117](https://github.com/nocobase/nocobase/pull/8117)) von @katherinehhh

  - Behoben: Problem mit Zeilenumbrüchen im Tooltip von Langtextfeldern ([#8122](https://github.com/nocobase/nocobase/pull/8122)) von @katherinehhh

  - Behoben: Problem, bei dem die auswählbaren Daten für Assoziationsfelder im Filterformularblock falsch waren. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) von @gchust

  - Behoben: Problem, bei dem die auswählbaren Optionen bei Verwendung der Operatoren „ist einer von“ oder „ist keiner von“ für die Filterung von Optionsfeldern nicht vollständig aufgelistet wurden. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) von @gchust

  - Behoben: Problem, bei dem benutzerdefinierte Feldkonfigurationen im Filterformular nicht korrekt vorausgefüllt wurden und einige Einstellungen nicht wirkten. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) von @gchust

  - Behoben: Problem, bei dem das Löschen der Filterwerte für „Zwischen“-Zeit und erneutes Auslösen des Filters einen Fehler verursachte. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) von @gchust

  - Behoben: Problem, bei dem der Zahlenfeldwert in der Filteraktion nicht korrekt vorausgefüllt wurde. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) von @gchust

  - Behoben: Problem, bei dem einige Feldoperatoren in Filterformularen Daten nicht korrekt filterten. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) von @gchust

  - Behoben: Problem, bei dem das Filtern nach Kontrollkästchenfeldern keine Wirkung zeigte. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) von @gchust

- **[Flow-Engine]**
  - Behoben: Falsche Konvertierung bei Verwendung des Integer-Typs als Enum-Optionen ([#8138](https://github.com/nocobase/nocobase/pull/8138)) von @chenos

  - Behoben: Fehlschlagen von umschaltbaren Untermodell-Menüpunkten, wenn `useModel` weggelassen wird, durch Ableitung aus `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) von @zhangzhonghe

- **[Server]** Behoben: Problem, dass ausgelöste Workflows nach dem Importieren von Daten nicht zur Verarbeitungswarteschlange hinzugefügt wurden, wodurch sichergestellt wird, dass Workflows unmittelbar nach dem Import wie erwartet ausgeführt werden ([#8121](https://github.com/nocobase/nocobase/pull/8121)) von @mytharcher

- **[Benachrichtigung: E-Mail]** Behoben: Einschränkung der E-Mail-Benachrichtigungsverbindung ([#8119](https://github.com/nocobase/nocobase/pull/8119)) von @jiannx

- **[Sammlungsfeld: Formel]** Behoben: Problem, dass in Formelfeldern in der Filteraktion und im Filterformularblock keine Eingabewerte eingegeben werden konnten. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) von @gchust

- **[Multi-Space]** Behoben: Erstellung anderer Felder in der Systemkollektion von @jiannx
