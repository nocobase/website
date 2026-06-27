---
title: "NocoBase 0.16: Neuer Cache-Manager"
description: "NocoBase 0.16 führt einen neuen Cache-Manager ein, der Memory- und Redis-Speicher unterstützt, Node v18 erfordert und die Methoden zur Cache-Erstellung sowie Umgebungsvariablen aktualisiert."
---

## Neue Funktionen

Die vorherige Version des Caches hatte eine schlechte Benutzerfreundlichkeit (nur Memory-Cache unterstützt). v0.16 wurde überarbeitet und bietet nun integrierte Memory- und Redis-Stores sowie die Unterstützung für benutzerdefinierte Stores. Details zur Verwendung finden Sie in der [API-Dokumentation](https://docs.nocobase.com/api/cache/cache-manager).

## Bahnbrechende Änderungen

### Minimale Node-Version auf 18 geändert

Node v16 wird nicht mehr gewartet, die Mindestversion wurde auf v18 geändert.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Aktualisierung der Cache-Erstellungsmethode

Veraltet: Verwenden Sie `createCache` zur Cache-Erstellung.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Der Cache wird jetzt von `CacheManager` verwaltet und mit `app.cacheManager` erstellt.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // Eindeutiger Name des Caches
  store: "memory", // Eindeutiger Name der Cache-Methode
  // Weitere Konfiguration
  max: 2000,
  ttl: 60 * 1000,
});
```

### Aktualisierung der Umgebungsvariablen

Bisherige Umgebungsvariablen des Caches erforderten einen JSON-String zur Konfiguration.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Neue Umgebungsvariablen zur Konfiguration des Caches:

```
# Eindeutiger Name der Standard-Cache-Methode, memory oder redis
CACHE_DEFAULT_STORE=memory
# Maximale Anzahl von Elementen im Memory-Cache
CACHE_MEMORY_MAX=2000
# Redis, optional
CACHE_REDIS_URL=redis://localhost:6379
```

## Vollständiges Änderungsprotokoll

* refactor(cache): Cache verbessern [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: Basis-URL des lokalen Speichers [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: Tabellendefinition anzeigen [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: MariaDB-Unterstützung [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): kleinere Fehlerbehebungen im Client [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: View-Inferenz [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: Sortierung nach assoziierter Collection [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
