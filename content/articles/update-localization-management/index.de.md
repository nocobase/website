---
title: "Update (Lokalisierungsverwaltung): Text-Namespaces nach Modulen organisieren"
description: "Optimieren Sie Ihre Lokalisierungsverwaltung mit NocoBases modulbasierten Text-Namespaces. Diese Anleitung beschreibt den neuen Ansatz zur Organisation von Übersetzungstexten nach Modulen, beseitigt Deduplizierungsprobleme und verbessert die Anpassung. Erfahren Sie mehr über die Änderungen, Migrationsschritte und die Auswirkungen auf Ihren Entwicklungsprozess."
---

## Hintergrund

* Das Lokalisierungsverwaltungs-Plugin synchronisiert Originaltexte, indem es sie im selben Namensraum (Modul) platziert. Wenn in verschiedenen Plugins identische Texte vorkommen, werden Duplikate entfernt und die Übersetzung aus [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) für die weitere Verwendung beibehalten.
* Der NocoBase-Client erstellt eine `i18n`-Instanz mit der Option `fallbackNS: "client"` ([Referenz](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). Daher können bei der Plugin-Entwicklung bestimmte Texte, die bereits in `packages/core/client/src/locale` vorhanden sind, in den Locale-Dateien des Plugins weggelassen werden.

Diese beiden Einstellungen führen jedoch zu einem Problem. Dieselben Originaltexte können nur mit einer Übersetzung verknüpft werden und können sich nicht über Namensräume hinweg unterscheiden. Wenn ein Benutzer beispielsweise Inhalte mit demselben Text wie eine vorhandene Übersetzung erstellt, wie z. B. „Users“ mit der chinesischen Übersetzung „用户“, wird dieser in der „zh-CN“-Umgebung als „用户“ angezeigt. Dies geschieht selbst dann, wenn der Benutzer es vorzieht, den Originaltext anstelle der Übersetzung anzuzeigen.

## Änderung

Übersetzungstexte werden basierend auf ihren entsprechenden Modulen (Menüs, Sammlungen & Felder, verschiedene Plugins) kategorisiert, ohne Deduplizierung. Auf der Seite zur Lokalisierungsverwaltung können Texte mithilfe eines Dropdown-Menüs durch Auswahl des entsprechenden Moduls gefiltert werden.

![Seite zur Lokalisierungsverwaltung](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Wie man migriert

Befolgen Sie den normalen [Upgrade-Prozess](https://docs.nocobase.com/welcome/getting-started/upgrading), um das System zu aktualisieren. Wechseln Sie dann zur entsprechenden Sprachumgebung und synchronisieren Sie auf der Seite zur Lokalisierungsverwaltung die Übersetzungstexte, indem Sie auf die Schaltfläche **„Sync“** klicken.

![Wie man migriert](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Bahnbrechende Änderungen

### Übersetzungstexte werden nicht mehr dedupliziert

Doppelte Texte über Module hinweg erfordern separate Übersetzungen.

![Übersetzungstexte werden nicht mehr dedupliziert](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### `fallbackNS`-Option aus der `i18n`-Instanz entfernt

Die `i18n`-Instanz des Clients enthält nicht mehr die Option `fallbackNS: "client"`.

Für Plugin-Entwickler: Wenn Sprachdateien in einem Plugin einige Texte auslassen, die bereits im Core-Client vorhanden sind, müssen diese ergänzt werden. Wenn Sie weiterhin Inhalte aus `packages/core/client/src/locale` wiederverwenden möchten, übergeben Sie bei der Verwendung die entsprechenden Parameter, zum Beispiel:

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
