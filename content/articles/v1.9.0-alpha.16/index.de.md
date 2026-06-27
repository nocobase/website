---
title: "NocoBase v1.9.0-alpha.16: Unterstützung zum Drehen von Bildern bei der Vorschau"
description: "Versionshinweise zu v1.9.0-alpha.16"
---

### 🚀 Verbesserungen

- **[Client]**
  - Unterstützung zum Drehen von Bildern bei der Vorschau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) von @mytharcher

  - Lokalisierungsunterstützung für Tooltip und Gruppenelementtitel hinzugefügt ([#7485](https://github.com/nocobase/nocobase/pull/7485)) von @katherinehhh

- **[RabbitMQ-Warteschlangenadapter]** Verbesserung der RabbitMQ-Verbindungsverwaltung und Nachrichtenverarbeitungslogik von @sdp-ncd

### 🐛 Fehlerbehebungen

- **[Client]**
  - Problem behoben, bei dem Untermenüs in der Seitenleiste nicht korrekt hervorgehoben werden konnten ([#7520](https://github.com/nocobase/nocobase/pull/7520)) von @duannyuuu

  - Problem behoben, bei dem das Popover zur Menüsymbolkonfiguration verdeckt wurde ([#7515](https://github.com/nocobase/nocobase/pull/7515)) von @zhangzhonghe

- **[Benachrichtigung: In-App-Nachricht]** Problem behoben, bei dem beim Öffnen des Benachrichtigungs-Popups keine aktuellen Nachrichten angezeigt wurden ([#7514](https://github.com/nocobase/nocobase/pull/7514)) von @mytharcher

- **[Workflow]** Problem behoben, bei dem die Workflow-Listenbedingung beim Laden des assoziierten Feldkontexts in der gebundenen Workflow-Konfiguration falsch war ([#7516](https://github.com/nocobase/nocobase/pull/7516)) von @mytharcher

- **[Workflow: Schleifenknoten]** Problem behoben, bei dem der Prozess fälschlicherweise zum nächsten Element fortschritt, selbst wenn die Bedingungen des Schleifenknotens nicht erfüllt waren ([#7521](https://github.com/nocobase/nocobase/pull/7521)) von @mytharcher

- **[Workflow: Genehmigung]**
  - Problem behoben, bei dem beim Löschen von Daten aus einer externen Datenquelle ein Fehler auftrat von @mytharcher

  - Problem behoben, bei dem sich Formelfelder im Genehmigungsformular nicht automatisch aktualisierten von @mytharcher
