---
title: "Erster Optimierungsprozess für NocoBase-Server-APIs"
description: "Entdecken Sie den umfassenden Optimierungsprozess für die serverseitigen APIs von NocoBase. Dieser detaillierte Leitfaden behandelt Leistungstests, Codeanalyse und strategische Verbesserungen zur Steigerung der API-Effizienz. Erfahren Sie mehr über die Auswirkungen verschiedener Middleware- und Caching-Strategien auf die Leistung und erkunden Sie die erzielten signifikanten Verbesserungen. Ideal für Entwickler, die die API-Leistung in komplexen Szenarien optimieren möchten."
---

## Hintergrund

Ein Benutzer meldete eine unzureichende Systemdurchsatzleistung für NocoBase über ein [GitHub-Issue](https://github.com/nocobase/nocobase/issues/2912). Angesichts der schnellen Iteration unseres Produkts priorisiert das Team derzeit Verbesserungen der Systemfunktionalität, mit weniger Fokus auf spezifische Optimierungen für die Leistung. Da NocoBase jedoch in die Produktion geht und seine Benutzerbasis erweitert, treten Leistungsprobleme auf. Es ist zwingend erforderlich, dass wir unseren Fokus verstärken und Optimierungsbemühungen einleiten.

Sicherlich sind für ein Produkt wie NocoBase reale Anwendungsszenarien tendenziell komplex, und es gibt erhebliche Unterschiede in den Benutzergewohnheiten. Leistungsoptimierung erfordert spezifische, phasenweise Analysen für verschiedene Szenarien. Es ist nicht machbar, alle Probleme in einem einzigen Optimierungsdurchgang umfassend zu adressieren.

Dieser Optimierungsdurchgang konzentriert sich darauf, eine erste Bewertung der serverseitigen API-Leistung des Systems zu liefern, gefolgt von gezielten grundlegenden Verbesserungen.

## Leistungstests

### Erläuterung

NocoBase verwendet das zugrunde liegende Framework Koa + Sequelize. Wir haben mehrere Testszenarien entworfen, die als Benchmarks für vergleichende Analysen dienen:

* **Koa + Sequelize:** Dies repräsentiert das grundlegende Framework und spiegelt das theoretische Optimum wider, obwohl reale Szenarien einige Kompromisse mit sich bringen könnten.
* **Koa + @nocobase/database:** @nocobase/database ist eine auf Sequelize basierende Abstraktionsschicht für Datenbankoperationen.
* **Koa + @nocobase/resourcer:** @nocobase/resourcer fungiert als Routing- und Dispatch-Schicht.
* **Koa + @nocobase/server:** @nocobase/server dient als NocoBase-Server.
* **Koa + Nocobase:** Dies ist das vollständige NocoBase-Programm, einschließlich integrierter Plugins.

Dieser Leistungstest ist keine Simulation einer Produktionsumgebung für erschöpfende Auslastungstests. Stattdessen konzentriert er sich auf geschichtete Tests, um Daten zu vergleichen und die Hauptfaktoren zu identifizieren, die die API-Leistung beeinflussen. Die Tests wurden hauptsächlich auf meinem persönlichen Computer mit den folgenden Spezifikationen durchgeführt:

* **Betriebssystem:** MacOS 14.0
* **CPU:** 10 Kerne
* **Arbeitsspeicher:** 32 GB
* **Datenbank:** PostgreSQL (Docker, neueste Version)
* **NocoBase-Ausführung:** `yarn start -d`

Der getestete API-Endpunkt ist `/api/users:list`, äquivalent zur Ausführung von `select ... limit 20` und `count`-Anweisungen auf der Tabelle `users`. Der spezifische Code kann [hier](https://github.com/nocobase/nocobase/tree/main/benchmark) eingesehen werden.

Jedes Testszenario wurde mit dem Befehl `wrk -t20 -c20 -d1m` evaluiert.

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

Datenbank-CPU > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL nutzt typischerweise nur einen CPU-Kern, was darauf hindeutet, dass der Leistungsengpass in der Datenbank liegt.

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

Datenbank-CPU > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

Die Leistung hat etwas nachgelassen, ist aber akzeptabel, und die Datenbank läuft im Allgemeinen an ihrer Kapazitätsgrenze.

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

Die Leistung hat sich weiter verschlechtert, und die Datenbank hat ihre volle Kapazität nicht erreicht. Die Gründe werden wir später analysieren.

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

Im Vergleich der Testdaten mit Koa + @nocobase/resourcer gibt es eine Leistungsminderung von etwa 50 %, was darauf hindeutet, dass sich der primäre Leistungsengpass von der Datenbank auf das Programm selbst verlagert hat.

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

Die Gesamtleistung von NocoBase hat deutlich nachgelassen, wie vor dem Test erwartet. Dies liegt daran, dass die Schnittstellen zahlreiche Plugin-Middleware durchlaufen, die Authentifizierung, Berechtigungsprüfungen und Datenbankabfragen umfassen. Insbesondere wurde bis zu diesem Zeitpunkt kein Caching implementiert, was einen zentralen Optimierungsschwerpunkt in der aktuellen Phase darstellt.

## Code-Analyse und Optimierung

### Sequelize -> database -> resourcer

Der Übergang vom zugrunde liegenden Sequelize zur Datenbank und dann zum Resourcer verursacht zwar auf jeder Ebene einen gewissen Leistungs-Overhead, ist aber für einen einzelnen Prozess akzeptabel. Dies ist hauptsächlich auf die zusätzliche Kapselung der Codelogik zurückzuführen. Da der aktuelle Optimierungsschwerpunkt nicht darauf liegt, eine vollständige Lösung auf einmal zu erreichen, wird dieser Teil vorerst so belassen, und alle notwendigen Anpassungen werden in Zukunft separat behandelt.

### resourcer -> server

Beim Übergang vom Resourcer zum Server beträgt die Leistungsverschlechterung mehr als die Hälfte, was auf ein definitives Problem in diesem Bereich hindeutet. Beginnen wir daher mit der Analyse hier. Der Server führt im Vergleich zum Resourcer zusätzliche anwendungsspezifische Middleware ein (siehe [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). Bei der Überprüfung des Codes erscheint die meiste Logik relativ einfach, ohne offensichtliche Bereiche, die die Leistung signifikant beeinträchtigen. Folglich habe ich beschlossen, Daten zum Zeitaufwand der Middleware zu sammeln, um weitere Erkenntnisse zu gewinnen.

#### perf\_hooks

NodeJS stellt APIs für Leistungstests über [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance) bereit. Diese APIs bieten eine umfangreichere Reihe von Metriken als einfache Berechnungen der Ausführungszeit. In unserem Kontext liegt der Fokus weiterhin auf der genauen Untersuchung der Zeit, die in jeder Middleware verbracht wird. Durch die Verwendung von `perf_hooks.createHistogram` zur Erstellung von Histogrammen können wir Auslastungstests durchführen und die Ausführungszeiten jeder Middleware sorgfältig protokollieren. Dieser Ansatz ermöglicht es uns, wichtige Statistiken wie minimale, maximale und mediane Ausführungszeiten über den Zeitraum des Auslastungstests abzuleiten. Zum Beispiel:

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Nach dem Sortieren der Ergebnisse stechen zwei Middleware-Komponenten hervor, die die Leistung merklich beeinträchtigen: Logging und `i18n`.

#### Logging

Standardmäßig gibt NocoBase Logs gleichzeitig in Dateien und auf dem Terminal aus. Siehe die Node.js-Dokumentation zur [Prozess-E/A](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Warnung**: Synchrone Schreibvorgänge blockieren die Ereignisschleife, bis der Schreibvorgang abgeschlossen ist.

In meiner Testumgebung sind beide Ausgaben wahrscheinlich synchron, und da jede Anfrage und Antwort protokolliert wird, hat dies zwangsläufig einige Auswirkungen auf die Leistung. In Anbetracht der Tatsache, dass Schnittstellenlogs unerlässlich sind, werden wir die aktuelle Konfiguration vorerst beibehalten. In einer Produktionsumgebung ist es jedoch üblich, nur Dateilogs zu behalten. Daher können wir in zukünftigen Tests in Betracht ziehen, Terminal-Logs zu deaktivieren, um etwas Leistungs-Overhead zu reduzieren. In der Produktion ist auch die Anpassung der Log-Level nach Bedarf eine praktikable Option.

#### i18n

Die `i18n`-Middleware, die für die Verwaltung lokalisierter Ressourcen zuständig ist, zeigte einen erheblichen Zeitaufwand, wobei der Hauptengpass in der folgenden Codezeile identifiziert wurde:

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

Der aktuelle Ansatz, eine i18n-Instanz zur Isolierung von Sprachressourcen in verschiedenen Anfragen zu klonen, ist zeitaufwändig. Zur Optimierung kann ein Singleton-Muster basierend auf der Sprache implementiert werden, das die Wiederverwendung vorhandener Instanzen für dieselbe Sprache ermöglicht, anstatt sie für jede Anfrage neu zu laden.

### server -> NocoBase

Beim Übergang von einem einfachen Server zum vollständigen NocoBase gibt es einen signifikanten Leistungsabfall. Wie bereits erwähnt, enthält das vollständige NocoBase zahlreiche integrierte Plugins, die viele Routen-Layer-Middleware einführen, einschließlich Authentifizierung und Berechtigungen. Nach den zuvor besprochenen Methoden haben wir `perf_hooks` verwendet, um die Zeit zu messen, die in diesen Middlewares verbracht wird. Die Ergebnisse heben die beiden einflussreichsten Middlewares und ihre Hauptausführungslogik hervor:

* `authManager.middleware` - Middleware für Benutzerauthentifizierung
  1. Überprüfen, ob das Benutzer-Token auf der Blacklist steht.
  2. Abrufen der aktuell verwendeten Authentifizierungsmethode.
  3. Abrufen von Benutzerinformationen basierend auf der Authentifizierungsmethode.
* `acl.setCurrentRole` - Middleware zum Setzen von Rolleninformationen im Berechtigungsmodul
  * Abrufen zugehöriger Rolleninformationen basierend auf der aktuellen Benutzer-ID und Setzen der Benutzerrolle.

Beide Middlewares führen in ihrer Hauptlogik für jede Anfrage Datenbankabfragen durch. Um dies zu adressieren, führen wir Caching ein.

#### Caching-Strategie

##### Speicher

NocoBase verwendet derzeit sowohl In-Memory- als auch Redis-Caching. Für relativ statische Daten, wie System-Authentifizierungsmethoden, speichern wir sie im Arbeitsspeicher. Daten, die sich auf Benutzerinformationen beziehen, folgen der Standard-Speicherkonfiguration, sodass Benutzer Redis als Standard-Speichermethode wählen können.

##### On-Demand-Caching + Hook-Updates

Daten wie Authentifizierungsmethoden, Benutzerinformationen und Rollen fallen typischerweise in die Kategorie leseintensiv und schreibarm. Wir implementieren eine On-Demand-Caching-Strategie, bei der die erste Anfrage eine Datenbankabfrage auslöst und die Ergebnisse zwischengespeichert werden. Nachfolgende Anfragen verwenden die zwischengespeicherten Ergebnisse. Um die Datenkonsistenz zu gewährleisten, führen wir Hooks ein, die auf Datenbankänderungen lauschen und diese mit dem Cache synchronisieren.

##### Bloom-Filter

Für Abfragen der Token-Blacklist, bei denen wir Benutzer-Token mit denen auf der Blacklist vergleichen müssen, ist On-Demand-Caching nicht geeignet. Stattdessen laden wir beim Programmstart die Blacklist-Tokens vorab in den Cache. Um Speicherplatz zu sparen, verwenden wir einen Bloom-Filter zum Caching der Blacklist. Der Bloom-Filter kann genau bestimmen, ob ein Wert nicht vorhanden ist, mit einer Wahrscheinlichkeit, die Existenz eines Wertes falsch einzuschätzen. Zunächst prüft der Bloom-Filter, ob ein Benutzer-Token auf der Blacklist ist. Wenn der Bloom-Filter die Existenz anzeigt, führen wir zur Genauigkeit eine sekundäre Datenbankabfrage durch.

##### LRU

Der In-Memory-Cache von NocoBase verwendet standardmäßig die Least Recently Used (LRU)-Strategie für die Cache-Verdrängung. Benutzer können Cache-Richtlinien konfigurieren, z. B. eine Obergrenze für den Cache-Speicherplatz festlegen. Für Redis-Benutzer können je nach Bedarf benutzerdefinierte Cache-Strategien wie LRU oder LFU konfiguriert werden.

#### Andere Optimierungen

Zusätzlich zu den zuvor erwähnten Middleware-Optimierungen beeinträchtigen einige Middlewares wie db2resource und ACLMiddleware ebenfalls die Leistung. Um mögliche Leistungsengpässe weiter zu analysieren, und da es derzeit keine einfachen Optimierungsaufgaben gibt, planen wir, den Inspector zu aktivieren, um das CPU-Profil des Systems während der Laufzeit zu untersuchen.

```
# Inspector aktivieren
NODE_ARGS=--inspect yarn start
```

Durch kontinuierliches Senden von Anfragen an die API mit wrk und Erfassen des CPU-Profils in Chrome DevTools über einen bestimmten Zeitraum können wir ähnliche Ergebnisse wie die folgenden erhalten.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

Bei der Untersuchung des Profils haben wir festgestellt, dass bestimmte Logiken in db2resource zum Parsen von Routen, wie die Verwendung von pathToRegexp, einen merklichen Einfluss auf die Leistung haben, was die in früheren Tests beobachtete weitere Leistungsverschlechterung auf der Routing-Ebene erklärt. In der ACLMiddleware zeigten auch Operationen im Zusammenhang mit der Berechtigungsbehandlung, wie miniMatch, längere Ausführungszeiten. Für diese Aspekte haben wir einige erste Optimierungen implementiert, wie z. B. das Zwischenspeichern von Variablen für sich wiederholende Berechnungen. Umfangreichere Optimierungen werden in zukünftigen Iterationen adressiert.

## Zusammenfassung

### Optimierungsergebnisse

In diesem Optimierungsdurchgang konzentrierten wir uns auf:

* Verwendung von Variablen zum Zwischenspeichern zeitaufwändiger Operationen in Middleware, wie z. B. der Erstellung von `i18n`-Instanzen und Berechtigungsprüfungen.
* Einführung geeigneter Caching-Mechanismen für Middleware-Operationen, die häufige Datenbankabfragen beinhalten.

Darüber hinaus empfehlen wir, die Log-Ausgabestufe und -Methode in der Produktionsumgebung basierend auf den Anforderungen anzupassen, um die Auswirkungen der Log-Protokollierung auf die API-Leistung zu mildern.

Nach der Implementierung dieser Optimierungen ergab ein erneuter Test der vollständigen NocoBase-Anwendung signifikante Verbesserungen der API-Leistung.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Kontinuierliche Optimierung

Der Optimierungsprozess in diesem Durchgang hat gewisse Einschränkungen:

Einerseits haben wir nur einfache Anfragen getestet. In realen Geschäftsszenarien können Aspekte wie Filterung, Variablenparsing, komplexe Transaktionen usw. zusätzliche Leistungsherausforderungen darstellen, die eine weitere Optimierung erfordern.

Andererseits haben wir uns auf die Optimierung der Teile konzentriert, die die Leistung signifikant beeinträchtigen, sodass in anderen Bereichen noch Verbesserungspotenzial besteht.

In Zukunft werden wir die Leistung von NocoBase weiter optimieren. Wenn Sie bei der Nutzung auf Leistungsprobleme stoßen, zögern Sie bitte nicht, uns konkrete Fälle zur Analyse und Optimierung zur Verfügung zu stellen. Ihr Feedback wird bei der Bewältigung realer Nutzungsszenarien wertvoll sein.

## Referenzen

* [Caching Best Practices | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Bloom filter](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [Performance measurement APIs | Node.js v21.4.0 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Debugging - Getting Started | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
