---
title: "Aufbau eines KI-Assistenten mit Langflow und AstraDB: Von der Architektur zur Integration mit NocoBase"
description: "Dieser Artikel zeigt, wie man NocoBase, LangFlow und AstraDB integriert, um einen KI-Assistenten zu erstellen, der durch Datenvektorisierung und semantische Suche Erkenntnisse generiert und mithilfe der RAG-Technologie Ergebnisse optimiert, um Datenmanagement und intelligente Abruffähigkeiten zu verbessern."
---

📝 **Hinweis:** Dieser Artikel wurde zuletzt am 23. Januar 2026 aktualisiert. Wir aktualisieren die Informationen regelmäßig, um sicherzustellen, dass Sie die neuesten Erkenntnisse haben! 😊

Dieser Blogbeitrag wurde von Leandro Martins erstellt und ursprünglich veröffentlicht unter [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Einleitung**

Ziel dieses Artikels ist es, die Erstellung eines KI-Assistenten zu demonstrieren, der die Tools **NocoBase, LangFlow und VectorDB** integriert. Als Grundlage verwende ich das System, das ich in **NocoBase** entwickle und das zur Verwaltung von Architekturdaten dient. Ich füge einen KI-Assistenten hinzu, um Erkenntnisse aus den in diesem System enthaltenen Daten zu generieren, wie z. B. **Anwendungen, API-Katalog, Lösungsdesign und Stories**.

Für diesen Artikel verwenden wir die folgenden Technologien:

* **NocoBase, PostgreSQL und Docker**, bereits konfiguriert (in diesem Artikel zeige ich, wie man sie installiert).
* **LangFlow**, lokal verwendet, dessen Installation hier via Docker zu finden ist.
* **Vektordatenbank**, durch Eröffnung eines Kontos bei **AstraDB**, der in diesem Artikel verwendeten Vektordatenbank.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform für den Bau von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

## **Architekturüberblick**

![Architekturüberblick.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Dieses Diagramm zeigt, wie neue Daten (oder aktualisierte Daten) in **Embeddings** umgewandelt und in der **Vektordatenbank** gespeichert werden.

1. **Benutzer → NocoBase-Plattform**
   Der Benutzer interagiert mit der NocoBase-Plattform (z. B. Hinzufügen oder Aktualisieren eines Datensatzes in einer Sammlung).
2. **CRUD auslösen**
   Eine CRUD-Aktion (Create, Read, Update, Delete) in NocoBase löst ein Ereignis oder einen internen Workflow aus.
3. **Workflow (NocoBase)**
   NocoBase hat einen Workflow, der auf Datenänderungen reagiert. Wenn dieser die Erstellung oder Änderung eines Datensatzes erkennt, initiiert er den nächsten Schritt.
4. **API-Flow: Daten laden**
   Der NocoBase-Workflow ruft eine API oder einen externen Dienst von LangFlow auf, um die Daten zu senden, die in Embeddings umgewandelt werden sollen.
5. **LangFlow — Daten zu Embedding**
   LangFlow empfängt die Daten und wandelt den Inhalt mithilfe von Sprachmodellen in Vektoren (Embeddings) um. Diese Embeddings repräsentieren die Bedeutung oder den Kontext des Textes numerisch und ermöglichen semantische Suchen.
6. **Vektor-DB (AstraDB)**
   Die Embeddings werden dann in der Vektordatenbank (AstraDB) gespeichert, wobei jedes Embedding mit dem ursprünglichen Inhalt (z. B. einem Dokument, einem Datensatz, einem Text) verknüpft wird.

![diagram.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Dieses Diagramm veranschaulicht auch, wie der Benutzer semantische Abfragen an die Vektordatenbank durchführt und relevante Ergebnisse erhält.

1. **Benutzer → NocoBase-Plattform**
   Der Benutzer interagiert erneut mit der NocoBase-Plattform, diesmal jedoch über ein eingebettetes Chat-Widget (oder eine andere Suchoberfläche).
2. **Widget Chat Embedded**
   Der Benutzer gibt eine Frage oder einen Prompt ein. Zum Beispiel: *"Zeige mir Informationen zu Anwendung X."* Dieses Widget sendet eine Anfrage an LangFlow, der die Abfrage verarbeitet.
3. **LangFlow — Daten zu Embedding**
   LangFlow wandelt den Prompt des Benutzers in ein Embedding um, das die Suchabsicht im Vektorformat darstellt.
4. **Vektor-DB (AstraDB) — Ähnlichkeitssuche**
   Das Embedding des Prompts wird verwendet, um in AstraDB nach den ähnlichsten Vektoren zu suchen (d. h. den Inhalten, die semantisch am nächsten sind).
5. **Suchergebnis im Modell verfeinern**
   Basierend auf den von AstraDB zurückgegebenen Ergebnissen verfeinert LangFlow das Suchergebnis mithilfe von OpenAI-Modellen (oder einem anderen LLM).
6. **Antwort an den Benutzer**
   Das endgültige Ergebnis (Texte, Dokumente oder generierte Antwort) wird an das NocoBase-Chat-Widget zurückgegeben, das die Antwort dem Benutzer anzeigt.

## **Anwendung mit NocoBase**

Für diesen Artikel verwende ich dieselbe zuvor erstellte Anwendung. Es ist eine Anwendung, die entwickelt wurde, um die Funktionen von NocoBase zu demonstrieren, in die ich den KI-Assistenten implementieren werde. Untenstehend ist ein Bild, das veranschaulicht, wie der Assistent funktionieren wird.

Die Idee ist, durch Fragen Erkenntnisse über Funktionalitäten zu gewinnen. Die verfügbaren Funktionalitäten sind: Anwendungen, API-Katalog, Lösungsdesign und Stories.

![Anwendung mit NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **Was sind LangFlow und AstraDB?**

LangFlow ist ein Open-Source-Tool, das von brasilianischen Entwicklern entwickelt wurde und eine grafische Oberfläche zum Erstellen, Visualisieren und Debuggen von Workflows mit Sprachmodellen bietet. Basierend auf dem LangChain-Ökosystem erleichtert LangFlow die Erstellung von Pipelines zur Verarbeitung natürlicher Sprache (NLP) und generativen KI-Anwendungen interaktiv, sodass Entwickler verschiedene Komponenten – wie API-Aufrufe, Texttransformationen und Geschäftslogik – ohne intensives Programmieren verbinden können.

![LangFlow und AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

In diesem Artikel werden wir AstraDB verwenden, wo wir unsere vektorisierten Daten speichern werden. Um Vektordatenbanken besser zu verstehen, hier ein [Artikel](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681), den ich geschrieben habe. Denken Sie auch daran, dass LangFlow den Wechsel zu anderen Vektordatenbanken ermöglicht.

**AstraDB**, ursprünglich bekannt als verteilter Datenbankdienst basierend auf Apache Cassandra, hat seine Fähigkeiten erweitert, um die Speicherung unstrukturierter Daten und Vektorsuchen zu handhaben. Diese Vektordatenbankfunktionalität ist besonders nützlich für maschinelle Lernanwendungen, semantische Suche, Empfehlungssysteme und Aufgaben mit hochdimensionalen Daten.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Installation von LangFlow**

Um **LangFlow** via Docker zu installieren, führen Sie einfach den folgenden Befehl aus und greifen Sie dann unter **[localhost:7860](http://localhost:7860/)** auf das System zu:

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Installation von LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Konfiguration von AstraDB**

Nachdem Sie ein Konto bei AstraDB erstellt haben, können Sie die Datenbank und Sammlung mit den Daten wie unten gezeigt einrichten.

Der Prozess ist recht einfach:

1. Wählen Sie einen **Anbieter**
2. Wählen Sie eine **Region**
3. Erstellen Sie die **Datenbank**

![Konfiguration von AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Für die Sammlung, da sie vektorisierte Daten speichert, ist es entscheidend, die Embedding-Funktion zu konfigurieren, die dem LLM-Modell entspricht, das für die Vektorisierung der Daten verantwortlich ist.

Es gibt mehrere Modelle zur Embedding-Generierung, wie die von OpenAI, Nvidia und Google. In diesem Fall verwenden wir das Modell text-embedding-ada-002 zur Datenkonvertierung.

![Konfiguration von AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Laden von Daten in die Vektordatenbank**

Dieser Schritt speist unsere Vektordatenbank mit den zu durchsuchenden Daten.

1. Der LangFlow-Workflow empfängt die Daten über eine URL.
2. Verarbeitet den Text
3. Konvertiert ihn mit text-embedding-ada-002 in das Vektorformat
4. Speichert ihn in AstraDB in der konfigurierten Sammlung.

![Laden von Daten in die Vektordatenbank.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Wichtige Punkte**

* Es ist notwendig, das AstraDB-Token in der Komponente zu definieren, die für die Datenbankverbindung verantwortlich ist. Um das Token zu generieren, rufen Sie einfach die Sammlung in AstraDB auf und klicken Sie auf Token generieren. Das Bild unten zeigt den Bildschirm mit der entsprechenden Schaltfläche.

![Wichtige Punkte.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Datenbanküberblick**: Die Quelldatei befindet sich in [meinem Repository](https://github.com/leandro-jm).
* Für das von uns verwendete Modell ist es notwendig, Guthaben hinzuzufügen, um auf die OpenAI-API zuzugreifen. Die folgende Dokumentation erklärt, wie dieser Prozess abgeschlossen wird. Nach dem Hinzufügen von Guthaben müssen Sie ein Token generieren und es in der Komponente definieren, die für die Embedding-Generierung verantwortlich ist. Hier ist ein Link mit Anweisungen zu diesem Prozess. Denken Sie daran, dass es verschiedene Modelle zur Generierung von Embeddings gibt.

Zum Testen verwenden Sie einfach Postman und rufen die URL auf, die Sie unter API > cURL in LangFlow erhalten können. Unten ist ein Beispiel für eine Anfrage mit Postman.

![Wichtige Punkte.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Durchführung einer Recherche mit einem Modell

Dieser Schritt ist für das Abrufen von Daten aus der Vektordatenbank und deren Verfeinerung durch **RAG (Retrieval-Augmented Generation)** verantwortlich.

![Durchführung einer Recherche mit einem Modell.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

In dieser Phase ist es auch notwendig, die OpenAI- und AstraDB-Tokens in ihren jeweiligen Komponenten zu definieren. Die Quelldatei befindet sich in [meinem Repository](https://github.com/leandro-jm).

Zum Testen verwenden Sie einfach den Chat, der in LangFlow im Reiter Playground verfügbar ist.

## **Konfiguration des Workflows in NocoBase**

In diesem Schritt erstellen wir Trigger in unserer Anwendung, um die Daten zu senden, die vektorisiert werden müssen. Mit anderen Worten: Wann immer neue Daten eingefügt werden, werden sie zur Verarbeitung an die LangFlow-API gesendet.

Um dies zu erreichen, verwenden wir die Workflow-Funktion von NocoBase. Weitere Details zu Workflows finden Sie unter diesem [Link](https://docs.nocobase.com/handbook/workflow).

![Konfiguration des Workflows in NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Wir werden einen Workflow erstellen, um Daten aus der Sammlung unserer Anwendung an die vektorisierte Sammlung zu senden.

**Schritte:**

Erstellen Sie einen neuen Workflow wie unten gezeigt, Collection Event.

![Konfiguration des Workflows in NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Definieren Sie den **Trigger** als Einfügung in die **Anwendungs**-Sammlung, wie unten gezeigt.

![Konfiguration des Workflows in NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Erstellen Sie einen neuen **Request-Knoten**, um die Daten der Anwendung zur Vektorisierung zu senden. In diesem Artikel verwenden wir **Titel** und **Beschreibung** als Beispiele, aber es können je nach Geschäftsregeln beliebige Informationen gesendet werden.

![Konfiguration des Workflows in NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

Der **Benachrichtigungsschritt** ist optional und muss nicht ausgeführt werden.

## **Hinzufügen des Chat-Widgets in NocoBase**

Rufen Sie zunächst LangFlow auf und kopieren Sie den Chat-Widget-Code aus der API-Option, wie im Bild unten gezeigt.

![Hinzufügen des Chat-Widgets in NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

Im zweiten Schritt erstellen Sie einfach eine Seite und fügen eine iframe-Komponente hinzu. Weitere Details zu dieser Komponente finden Sie unter diesem [Link](https://docs.nocobase.com/handbook/block-iframe).

**Wo:**

* **Modus:** HTML
* **HTML:** Der folgende Code, wobei **flow\_id** und **host\_url** durch die Werte von LangFlow ersetzt werden.

![Hinzufügen des Chat-Widgets in NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Testen des Chats**

Gehen wir nun zurück zum erstellten Menü, testen unseren Assistenten und überprüfen die Antwort, wie im folgenden Beispiel gezeigt.

![Testen des Chats.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Fazit**

In diesem Artikel haben wir die Erstellung eines KI-Assistenten demonstriert, der in NocoBase, LangFlow und AstraDB integriert ist und so die Vektorisierung und den intelligenten Datenabruf ermöglicht.

Mit diesem Ansatz konnten wir einen Assistenten implementieren, der in der Lage ist, wertvolle Erkenntnisse aus registrierten Daten zu generieren, wobei RAG-Techniken (Retrieval-Augmented Generation) zur Verfeinerung der Suchergebnisse eingesetzt werden.

Dies ist erst der Anfang dessen, was diese Architektur bieten kann. Mit kleinen Anpassungen ist es möglich, Funktionalitäten zu erweitern, neue KI-Modelle zu integrieren und das Benutzererlebnis zu verbessern. 🚀

**Verwandte Lektüre:**

* [Entwicklung eines Plugins zum Senden von WhatsApp-Nachrichten in NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Vereinfachte Architektur-Governance: Erstellen eines Anwendungskatalogs mit NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [So sichern und wiederherstellen Sie NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Wie erstelle ich Apps mit NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [So laden Sie ein Docker-Image auf einen Intranet-Server hoch](https://www.nocobase.com/en/blog/load-docker-image)
