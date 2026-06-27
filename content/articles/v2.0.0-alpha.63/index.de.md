---
title: "NocoBase v2.0.0-alpha.63: Automatische Größenanpassung des Textbereichs im KI-Bearbeitungsaufgabenformular"
description: "Versionshinweise zu v2.0.0-alpha.63"
---

### 🚀 Verbesserungen

- **[Client]**
  - Vollständiges Neu-Rendern der Tabelle beim Aktualisieren einer Zelle verhindern ([#8349](https://github.com/nocobase/nocobase/pull/8349)) von @katherinehhh

  - Automatische Größenanpassung des Textbereichs im KI-Bearbeitungsaufgaben-Formular. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) von @heziqiang

- **[Workflow: Genehmigung]**
  - Reparaturlogik für synchronisierte Zielgruppen nach der Migration hinzugefügt von @mytharcher

  - Parameter in Abfragen vereinfacht und Leistung verbessert von @mytharcher

### 🐛 Fehlerbehebungen

- **[Client]**
  - Ein Problem behoben, bei dem Feld- und Aktionsberechtigungen nach dem Paginieren in Detail-, Listen- und Formularblöcken nicht neu berechnet wurden. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) von @gchust

  - Problem behoben, bei dem Verknüpfungsfelder aus externen Datenquellen in Formularblöcken keine Verknüpfungsdaten luden ([#8356](https://github.com/nocobase/nocobase/pull/8356)) von @katherinehhh

- **[SDK]** Verbesserte Implementierung der Token-Freigabe ([#8357](https://github.com/nocobase/nocobase/pull/8357)) von @chenos

- **[Zugriffskontrolle]** Verknüpfungsfeldern erlauben, über die Zielschlüssel zu verknüpfen ([#8352](https://github.com/nocobase/nocobase/pull/8352)) von @2013xile

- **[Workflow: Schleifenknoten]** Problem behoben, bei dem ein fehlgeschlagener Knoten in einem Bedingungszweig den Status nicht an den übergeordneten Verzweigungsknoten weitergeben konnte ([#8360](https://github.com/nocobase/nocobase/pull/8360)) von @mytharcher

- **[Workflow: Webhook]** Problem behoben, bei dem ein 404-Fehler ausgelöst wurde, wenn eine POST-Anfrage an eine Webhook-URL in einer Unter-App gesendet wurde von @mytharcher

- **[Workflow: Genehmigung]** Build-Fehler behoben, der durch fehlende Abhängigkeiten verursacht wurde von @mytharcher

- **[E-Mail-Manager]** Problem behoben, bei dem der Outlook-Antwortlink gelegentlich getrennt wurde von @jiannx
