---
title: "Vereinfachte Architektur-Governance: Aufbau eines Anwendungskatalogs mit NocoBase"
description: "Das Ziel ist es, das Potenzial und die Einfachheit von NocoBase für die Entwicklung von Webanwendungen ohne Programmierung zu demonstrieren."
---

📝 **Hinweis:** Dieser Artikel wurde zuletzt am 23. Januar 2026 aktualisiert. Wir aktualisieren die Informationen regelmäßig, um sicherzustellen, dass Sie die neuesten Erkenntnisse haben! 😊

Dieser Blog wurde von Leandro Martins erstellt und ursprünglich veröffentlicht unter [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

Das Ziel ist es, das Potenzial und die Einfachheit von [NocoBase](https://www.nocobase.com/) für die Entwicklung von Webanwendungen ohne Programmierung zu demonstrieren. Als Fallstudie werde ich einen Anwendungskatalog erstellen, der bei der Architektur-Governance hilft. Dieser Fall umfasst die Modellierung, Installation, Tabellenerstellung, Menüs, Formulare, Diagramme und Workflows unter Verwendung von NocoBase-Funktionen.

Für diesen Artikel verwenden wir die folgenden Technologien: NocoBase, Postgres und Docker.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform für den Bau von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

## **Was ist NocoBase?**

[NocoBase](https://www.nocobase.com/) ist eine Open-Source-Plattform, geschrieben in JavaScript, unter Verwendung von NodeJS, TypeScript und AntDesign, die entwickelt wurde, um benutzerdefinierte Anwendungen ohne Programmierkenntnisse zu erstellen. Es ist eine Low-Code-Backend-Lösung, die die visuelle Erstellung von Tabellen, benutzerdefinierten Formularen, Workflow-Automatisierung und maßgeschneiderten Oberflächen ermöglicht.

![Was ist NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Wichtige Highlights von NocoBase**:

* **Aktive Community**: Ein sehr aktives Forum zur Unterstützung der Plugin-Entwicklung und Fehlerbehebung.
* **Ständig überprüfter Code**: Häufige Updates mit Beiträgen auf GitHub, mit über 13k Sternen.
* **Datenbankkompatibilität**: Unterstützt wichtige relationale Datenbanken wie Postgres und MySQL.
* **Visuelle Datenmodellierung**: Definieren Sie Tabellen und Daten visuell mit dem Main Database Plugin.
* **Umfangreiche Plugin-Bibliothek**: Bietet eine breite Palette von kostenlosen und kostenpflichtigen Plugins, mit der Möglichkeit, benutzerdefinierte Plugins zu entwickeln.

* **KI-Mitarbeiter im System integriert**: Integrieren Sie KI-Fähigkeiten nahtlos in Benutzeroberflächen, Geschäftsworkflows und Datenkontexte, sodass KI in realen Unternehmensszenarien praktisch eingesetzt werden kann.

![Wichtige Highlights von NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Überblick über die Fallstudie**

Um einige der Funktionen von NocoBase zu demonstrieren, erstellen wir eine Fallstudie namens *Architecture Portal*. Dieses Portal ist darauf ausgelegt, Daten über die Anwendungen einer Organisation zu organisieren und bietet die folgenden Funktionen:

* **Anwendungskatalog**.
* **Erinnerungen an Aktualisierungen**, wie Versions-Upgrades und Zertifikatsverlängerungen.
* **API-Katalog** für die Systeme der Organisation.
* **Diagramme** für aufschlussreiche Datenvisualisierung.

![Überblick über die Fallstudie.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Entwicklungsstufen**

### **Modellierung der Daten**

Der erste Schritt ist die Abbildung und Definition der Felder, die wir in das Architecture Portal aufnehmen werden. Nachfolgend ein Beispiel:

```
1. Anwendungskatalog

Anwendungen:
id: Eindeutige Kennung.
name: Anwendungsname.
description: Detaillierte Beschreibung der Anwendung.
stack: Verwendete Technologien.
owner: Verantwortliche Person oder Team.
created_at: Erstellungsdatum.
last_updated: Datum der letzten Aktualisierung.

Erinnerungen (Verknüpft mit Anwendungen):
id: Eindeutige Kennung.
application_id: Referenz auf die Anwendung.
type: Erinnerungstyp (z. B. Versionsupdate, Zertifikatsverlängerung).
description: Beschreibung der Erinnerung.
scheduled_date: Geplantes Datum für die Erinnerung.
status: Status (z. B. Ausstehend, Abgeschlossen).

2. API-Katalog

APIs:
id: Eindeutige Kennung.
Application_id: Referenz auf das entsprechende System.
name: API-Name.
description: Funktionale Beschreibung der API.
documentation_url: Link zur offiziellen Dokumentation.
last_updated: Datum der letzten Aktualisierung.
version: Aktuelle Version.
```

### **Installation von NocoBase**

Für die [Installation](https://docs.nocobase.com/welcome/getting-started/installation) und Konfiguration habe ich mich für die lokale Verwendung der Docker-Version entschieden. Andere Installationsoptionen sind npm oder Git-Quelle.

Unten ist der YAML-Code für Docker Compose. Nach der Installation von Docker navigieren Sie zum YAML-Dateiverzeichnis und führen den folgenden Befehl aus:

```
docker compose up -d
```

Dadurch wird NocoBase auf Ihrem Rechner unter Port `13000` gestartet. Öffnen Sie [`http://localhost:13000`](http://localhost:13000/) in Ihrem Webbrowser. Die Standard-Anmeldedaten sind [`admin@nocobase.com`](mailto:admin@nocobase.com) und `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # Der geheime Schlüssel der Anwendung, der zum Generieren von Benutzer-Tokens usw. verwendet wird.
      # Wenn APP_KEY geändert wird, werden auch alte Tokens ungültig.
      # Es kann eine beliebige zufällige Zeichenfolge sein, und stellen Sie sicher, dass sie nicht offengelegt wird.
      - APP_KEY=your-secret-key
      # Datenbanktyp, unterstützt postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Datenbank-Host, kann durch die IP eines vorhandenen Datenbankservers ersetzt werden
      - DB_HOST=postgres
      # Datenbankname
      - DB_DATABASE=nocobase
      # Datenbankbenutzer
      - DB_USER=nocobase
      # Datenbankpasswort
      - DB_PASSWORD=nocobase
      # Zeitzone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Wenn ein vorhandener Datenbankserver verwendet wird, kann der postgres-Dienst weggelassen werden
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Erstellen von Tabellen und Daten**

Mit dem **Data Source Manager**-Plugin können wir Collections (Tabellen) erstellen und Felder definieren. Der Prozess ist einfach und folgt dem oben beschriebenen Modell. Nachfolgend finden Sie einige Referenzen und Links für weitere Details zum Plugin [hier](https://www.nocobase.com/en/plugins)).

![Erstellen von Tabellen und Daten.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Erstellen von Tabellen und Daten.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Erstellen von Menüs**

Durch Klicken auf das stiftähnliche Symbol auf der rechten Seite des Bildschirms können Sie obere und seitliche Menüs erstellen, wie im Bild gezeigt. Lassen Sie uns dies wie im Bild dargestellt nachbilden.

![Erstellen von Menüs.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Erstellen von Formularen**

Das Erstellen von Formularen (CRUD) ist ebenfalls sehr einfach. NocoBase verwendet Blöcke, um Tabellen, Formulare, Details, Listen, Diagramme, Karten und mehr zu erstellen. Nachdem Sie den Blocktyp ausgewählt haben, wählen Sie einfach aus, welche Collection (Tabelle) Sie mit diesem Block verknüpfen möchten, und die mit der Collection verknüpfte Komponente (Block) erscheint wie von Zauberhand. Jeder Block hat seine eigenen Anpassungseinstellungen. Weitere Details zu Blöcken finden Sie hier.

![Erstellen von Formularen.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Erstellen von Diagrammen**

Das Erstellen von Diagrammen ist ebenfalls einfach. Fügen Sie einfach einen Block namens *Diagramm* hinzu und wählen Sie die Collection aus, die Sie als Datenquelle verwenden möchten, wie im Bild unten gezeigt.

![Erstellen von Diagrammen.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Sobald der Block ausgewählt ist, können Sie die Diagrammeigenschaften konfigurieren. Das Bild unten zeigt die Konfigurationsoptionen des Diagramms, mit denen Sie Indikatoren, Gruppierungen, Filter, verschiedene Diagrammtypen und Titel sowie andere verfügbare Eigenschaften definieren können. Hier können Sie alle Konfigurationsmöglichkeiten erkunden.

![Erstellen von Diagrammen.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Erstellen eines geplanten Workflows für Erinnerungen**

NocoBase ermöglicht es Ihnen, automatisierte Workflows zu erstellen, um verschiedene Arten von Aufgaben durch Ereignisse auszuführen. Die drei Arten von Triggern sind: *Collection Event, Scheduled Event und Post-Action Event.* Mit diesen Triggern können Sie Aktionen innerhalb des Systems erstellen, wie das Senden von Benachrichtigungen, das Einfügen von Daten in andere Tabellen oder das Senden von Anfragen an eine externe API. Nachfolgend ein Beispiel-Workflow zum Senden von Benachrichtigungen innerhalb der Anwendung.

![Workflow.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

In unserem Fall erstellen wir einen Workflow, um am Tag einer geplanten Erinnerung eine Benachrichtigung zu senden. Dies wird ein **Scheduled Event** sein, das jeden Tag zu einer bestimmten Zeit ausgeführt wird, wie in den Bildern unten gezeigt.

![Workflow.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Workflow.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

Zusätzlich zur Konfiguration des Zeitplans müssen Sie den Workflow so einrichten, dass er die **Erinnerungen**-Collection abfragt, die Erinnerungen für den Tag abruft, jede einzelne durchläuft und für jede Erinnerung Benachrichtigungen sendet, wie im Bild unten gezeigt. Der Vorgang ist einfach: Fügen Sie diese Aktionen einfach durch Klicken auf die Schaltfläche "+" hinzu und konfigurieren Sie sie.

![Workflow.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Nach Abschluss der Konfiguration aktivieren Sie den Workflow einfach durch Klicken auf die Schaltfläche "Ein" in der oberen rechten Ecke. Um die Ausführungsergebnisse anzuzeigen, klicken Sie auf "…" in der oberen rechten Ecke und wählen Sie **Ausführungsverlauf**, wie im Bild unten gezeigt.

![Workflow.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Fazit**

Wie gezeigt, bietet NocoBase zahlreiche Funktionen, um die Anwendungsentwicklung zu beschleunigen. Je nach Umfang und Anforderungen bietet es Flexibilität für den Bau von Anwendungen, mit zusätzlichen Fähigkeiten wie Dateiverwaltung, Internationalisierung, mobiler Unterstützung und Themenbearbeitung. Sie können sogar Ihre eigenen Plugins entwickeln oder kommerzielle Plugins aus dem Marktplatz erwerben.

Verwandte Lektüre:

* [Wie man Apps mit NocoBase erstellt?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Die 8 leistungsstärksten No-Code-Entwicklungsplattformen im Jahr 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [Die Top 12 Open-Source-No-Code-Tools mit den meisten GitHub-Sternen](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Top 15 Open-Source-Low-Code-Projekte mit den meisten GitHub-Sternen](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Top 6 No-Code-Tools für Entwickler](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Top 7 Open-Source-Schnellentwicklungsplattformen](https://www.nocobase.com/en/blog/rapid-development-platform)
