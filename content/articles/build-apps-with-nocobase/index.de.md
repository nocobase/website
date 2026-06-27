---
title: "Wie erstellt man Apps mit NocoBase?"
description: "Lass uns erkunden, wie man eine Haustierverfolgungs-App mit NocoBase erstellt!"
---

📝 Hinweis: Dieser Artikel wurde zuletzt am 23. Januar 2026 aktualisiert. Wir aktualisieren die Informationen regelmäßig, um sicherzustellen, dass Sie die neuesten Erkenntnisse haben! 😊

Dieser Blog wurde von Don Freeman von [Freeman Tech Consulting](https://freemantechconsulting.com/) verfasst und ursprünglich auf [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com) veröffentlicht. Freeman Tech Consulting ist ein Full-Service-Softwareentwicklungsunternehmen, das bei No-Code-Bereitstellungen, Web-App-Entwicklung, Cloud-Infrastrukturdesign/-aufbau, GRC-Management, Datenanalyse und vielem mehr helfen kann.

## 🌟Was ist NocoBase?

**NocoBase** ist eine KI-gestützte No-Code (Zero-Code) / Low-Code-Plattform, die entwickelt wurde, um die Erstellung datengesteuerter Anwendungen zu vereinfachen. Sie bieten kostenpflichtige Versionen an, bei denen das NocoBase-Logo entfernt wird. Es ist Open Source, sodass Sie, wenn Sie dazu beitragen möchten, dies problemlos auf GitHub tun können. Sie bieten ein Plugin-System, um die Funktionalität der Plattform bei Bedarf zu erweitern.

## 🚀 NocoBase lokal bereitstellen

### **Was wird benötigt, um NocoBase lokal auszuführen?**

* **Docker**
* **Docker Compose**
* **Eine PostgreSQL-Datenbank** In diesem Blog werden wir eine mit Docker Compose ausführen, aber in einer echten Produktionsumgebung sollten Sie eine dedizierte PostgreSQL-Datenbank haben.

### **NocoBase lokal ausführen**

* Die Schritte zum lokalen Ausführen von NocoBase finden Sie auf ihrer Website [hier](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Erstellen Sie zunächst ein Verzeichnis, in dem Sie arbeiten werden. Wechseln Sie in Ihrem Terminal in dieses Verzeichnis. Danach müssen Sie eine Docker-Compose-Datei erstellen. Ich habe die aus den obigen Referenzen (Erste Schritte auf der NocoBase-Website) verwendet und leicht modifiziert.

---

💬 Hey, du liest den NocoBase-Blog. NocoBase ist die erweiterbarste KI-gestützte No-Code/Low-Code-Entwicklungsplattform zum Erstellen von Unternehmensanwendungen, internen Tools und allen Arten von Systemen. Sie ist vollständig selbst gehostet, plugin-basiert und entwicklerfreundlich. → [NocoBase auf GitHub erkunden](https://github.com/nocobase/nocobase)

---

***Das folgende Docker Compose zeigt die lokale Ausführung einer PostgreSQL-Datenbank, aber es wird empfohlen, in einer echten Produktionsumgebung eine dedizierte Datenbank zu verwenden.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Nachdem Sie dies im lokalen Verzeichnis erstellt haben, führen Sie den folgenden Befehl aus, um die benötigten Images zu pullen.

![pull the needed images.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Führen Sie nun den folgenden Befehl aus, um die Container im Hintergrund zu starten.

![start the containers.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Jetzt können Sie unter http://localhost:13000 auf NocoBase zugreifen.

## 🐶 Erstellen der NocoBase-App: Haustierverfolgungsanwendung

![Pet Tracking Application.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

In diesem Beispiel erstellen wir eine Haustierverfolgungsanwendung 🐕 🐈! Diese Anwendung verfolgt Haustierbesitzer und die Informationen ihrer Haustiere. Zuerst müssen wir das Datenmodell für unsere Anwendung definieren. Das ist in NocoBase super einfach.

### **NocoBase-Datenmodell**

**🔍 Finden Sie den Datenmodell-Editor**

Klicken Sie in der NocoBase-Benutzeroberfläche auf das kleine Zahnrad ⚙️ in der oberen rechten Ecke und dann auf `Datenquellen`. Dadurch wird der Datenmodell-Editor geöffnet. Dort sehen Sie die Standard-Datenquelle, die main heißen sollte. Klicken Sie für die Hauptdatenquelle auf `Konfigurieren`.

**Sammlungen erstellen**

Jetzt können wir Sammlungen innerhalb der Hauptdatenquelle erstellen. Diese Sammlungen enthalten die Daten für unsere Anwendung. Für dieses Beispiel erstellen wir zwei Sammlungen. Eine für die Haustierbesitzer und eine für die Haustiere.

**Sammlung Haustierbesitzer**

Klicken Sie auf dem Sammlungsbildschirm auf die Schaltfläche `Neue Sammlung`. Geben Sie der Sammlung dann einen `Anzeigenamen für die Sammlung` von Haustierbesitzer und einen `Sammlungsnamen` von petowner.

Fügen wir nun die benötigten Felder zur Haustierbesitzer-Sammlung hinzu. Klicken Sie auf dem Sammlungsbildschirm neben der Sammlung Haustierbesitzer auf `Felder konfigurieren`. Mit der Schaltfläche `Feld hinzufügen` können Sie die benötigten Felder zur Sammlung hinzufügen. Die Haustierbesitzer-Sammlung wird die folgenden Felder haben.

* **Vorname** *Schnittstelle für einzeiliges Textfeld*
* **Nachname** *Schnittstelle für einzeiliges Textfeld*
* **E-Mail** *E-Mail-Feld-Schnittstelle*

**Sammlung Haustier**

Jetzt können wir diese Schritte für die Haustier-Sammlung wiederholen. Die Haustier-Sammlung wird die folgenden Felder haben.

* **Name** *Schnittstelle für einzeiliges Textfeld*
* **Haustiertyp** *Schnittstelle für Mehrfachauswahlfeld*
* **Geburtsdatum** *Datums-/Uhrzeit-Feld-Schnittstelle*

**🔗 Verknüpfen Sie die Haustierbesitzer-Sammlung mit der Haustier-Sammlung**

Um die Haustierbesitzer-Sammlung mit der Haustier-Sammlung zu verknüpfen, gehen Sie zurück zur **Haustier**-Sammlung und klicken Sie auf dem Sammlungskonfigurationsbildschirm auf die Schaltfläche `Feld hinzufügen`. Suchen Sie den Schnittstellentyp Eins-zu-Viele. Geben Sie der Beziehung einen Anzeigenamen, wählen Sie pet als `Zielsammlung` und dann ID als `Zielschlüssel`.

**🥳 Datenmodell ist fertig!!!**

Das war's für die Einrichtung des Datenmodells. Hier ist mein Beispiel für das Haustier-Datenmodell.

![pet data model.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Erstellen der NocoBase-Benutzeroberfläche**

**🏠 Erstellen Sie die Startseite**

Nachdem unser Datenmodell nun vollständig ist, können wir schnell eine Benutzeroberfläche zur Interaktion mit diesem Datenmodell erstellen. Gehen Sie zurück zur Hauptseite der Anwendung. Dort sollten Sie oben auf der Seite den Menüpunkt `Neues Menü hinzufügen` sehen. Klicken Sie darauf und dann auf `Seite`. Geben Sie der Seite den Namen Startseite. Dann sollten Sie etwas Ähnliches wie dies sehen.

![Create the Home Page.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Erstellen Sie eine Liste der Haustierbesitzer**

Jetzt fügen wir eine Liste von Karten hinzu, um mit unserer Haustierbesitzer-Sammlung interagieren zu können. Klicken Sie auf `Block hinzufügen` → `Rasterkarte` → `PetOwner`. Dadurch können wir unsere Haustierbesitzer in einem Raster von Karten anzeigen. Klicken Sie auf `Felder konfigurieren`, um die Felder Vorname, Nachname und E-Mail hinzuzufügen.

**➕ Haustierbesitzer hinzufügen**

Jetzt müssen wir in der Lage sein, Haustierbesitzer zu erstellen. Klicken Sie in der oberen rechten Ecke des Blocks auf `Aktion konfigurieren` (**nicht** auf die `Aktion konfigurieren` in der Karte). Klicken Sie dann auf `Neu hinzufügen`. Dadurch wird eine Schaltfläche mit der Aufschrift Neu hinzufügen erstellt. Klicken Sie auf diese Schaltfläche, um zu konfigurieren, was beim Hinzufügen eines Haustierbesitzers getan werden kann.

**🍿 Popup „Neuen Haustierbesitzer hinzufügen“**

Klicken Sie im Popup auf `Block hinzufügen` → `Formular` → `Aktuelle Sammlung`. Klicken Sie auf `Felder konfigurieren` und fügen Sie Vorname, Nachname und E-Mail hinzu. Dadurch können Sie diese Werte beim Erstellen eines neuen Haustierbesitzers ausfüllen. Klicken Sie abschließend auf `Aktion konfigurieren` → `Absenden`. Klicken Sie außerhalb des Popups, um es zu schließen.

**➕ Neues Haustier hinzufügen**

Nachdem wir nun die Möglichkeit haben, Haustierbesitzer anzuzeigen und zu erstellen, müssen wir ihre Haustiere hinzufügen können. Gehen Sie nun zurück zur **Startseite**, klicken Sie auf die `Aktion konfigurieren` *innerhalb der Karte* und klicken Sie auf Popup. Dadurch wird ein Link in der Karte namens Popup erstellt. Klicken Sie darauf. Klicken Sie im Popup auf `Block hinzufügen` → `Formular (neu hinzufügen)` → `Verknüpfte Datensätze` → `Haustiere`. Klicken Sie in diesem neuen Block auf `Felder konfigurieren` und fügen Sie Name, Haustiertyp und Geburtsdatum hinzu. Dadurch können Sie diese Werte beim Erstellen eines neuen Haustieres ausfüllen. Klicken Sie abschließend auf `Aktion konfigurieren` → `Absenden`.

**📜 Vorhandene Haustiere auflisten**

Klicken Sie nun direkt unter diesem neuen Block auf `Block hinzufügen` → `Liste` → `Verknüpfte Datensätze` → `Haustiere`. Klicken Sie in diesem neuen Block auf `Felder konfigurieren` und fügen Sie Name, Haustiertyp und Geburtsdatum hinzu. Das Popup sollte ungefähr so aussehen. Ich hatte bereits ein Haustier in meiner Datenbank, daher kann es etwas anders aussehen.

![List Existing Pets.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Klicken Sie außerhalb des Popups, um es zu schließen. Jetzt haben wir die Möglichkeit, Haustiere zu erstellen und anzuzeigen. Ihre Benutzeroberfläche sollte jetzt ungefähr so aussehen.

![UI.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Testen Sie es aus**

Klicken Sie nun auf die orangefarbene Schaltfläche „UI-Editor“, um den UI-Editor zu verlassen. Sie können mit der Benutzeroberfläche herumspielen und Haustiere und Haustierbesitzer erstellen.

In diesem Blog wurden viele Teile ausgelassen, darunter die Authentifizierung von Benutzern, komplexere Benutzeroberflächen, die Bereitstellung einer Produktionsumgebung usw. Möglicherweise werde ich diese in späteren Blogs behandeln.

💡 Weiterlesen:

* [Building an AI Assistant with Langflow and AstraDB: From Architecture to Integration with NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Simplified Architecture Governance: Building an Application Catalog with NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
