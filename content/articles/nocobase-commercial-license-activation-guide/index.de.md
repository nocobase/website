---
title: "NocoBase Commercial License Aktivierungsanleitung"
description: "Eine Anleitung zur Aktivierung Ihrer NocoBase-Commercial-Lizenz. Erfahren Sie, wie Sie Ihre kommerziellen Funktionen schnell und sicher mit der neuen Methode „Instanz-ID“ und „Lizenzschlüssel“ aktivieren."
---

## **NocoBase Commercial License Aktivierungsanleitung**

Um die Benutzererfahrung zu verbessern und die Sicherheit zu erhöhen, haben wir unseren kommerziellen Lizenzierungs- und Aktivierungsprozess umfassend aktualisiert. Die neue Autorisierungsmethode ersetzt den bisherigen Ansatz, Benutzernamen und Passwörter in Konfigurationsdateien einzugeben, und führt einen Mechanismus ein, der auf "Instanz-ID" und "Lizenzschlüssel" basiert.

Die Kernvorteile der neuen Lösung sind:

* **Erhöhte Sicherheit**: Ihre Kontoinformationen müssen nicht mehr im Klartext gespeichert werden, wodurch das Risiko der Offenlegung sensibler Daten reduziert wird.
* **Vereinfachter Prozess**: Die Autorisierung wird direkt an Ihre NocoBase-Instanz gebunden, was die Lizenzverwaltung und -aktualisierung intuitiver und bequemer macht.
* **Erhöhte Flexibilität**: Wenn sich Ihre Bereitstellungsumgebung ändert, können Sie die Autorisierung einfach neu generieren, um sich schnell an die neue Umgebung anzupassen.
* **Lizenzschutz**: Durch die Backend-Lizenzverwaltung und Statusüberwachung können Sie die tatsächliche Nutzung Ihrer Lizenz überwachen, unbefugte Anwendungen rechtzeitig erkennen und behandeln und so Missbrauch von kommerziellen Lizenzen verhindern.

Diese Anleitung führt Sie durch den vollständigen neuen Aktivierungsprozess für die NocoBase Commercial License.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Schritt-für-Schritt-Anleitung zur Lizenzaktivierung**

Stellen Sie vor dem Start sicher, dass Sie die NocoBase Community Edition erfolgreich installiert haben und diese ausgeführt wird.

### **Schritt 1: Lizenzseite aufrufen und Instanz-ID kopieren**

1. Navigieren Sie in Ihrer lokalen NocoBase-Anwendung zu `Systemeinstellungen` -> `Lizenzeinstellungen`.
2. Auf dieser Seite sehen Sie eine **Instanz-ID**-Zeichenfolge, die eindeutige Kennung Ihrer aktuellen Ausführungsumgebung. Klicken Sie auf das Kopiersymbol rechts daneben.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Schritt 2: Anwendung auf der Serviceplattform erstellen und Instanz-ID zuordnen**

1. Melden Sie sich auf der NocoBase Serviceplattform an und klicken Sie auf der Verwaltungsseite "Anwendungen" auf die Schaltfläche "Hinzufügen".
2. Füllen Sie im Popup-Formular Ihre Anwendungsinformationen aus, fügen Sie die im vorherigen Schritt kopierte `Instanz-ID` in das Eingabefeld `Instanz-ID` ein und senden Sie das Formular ab.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Schritt 3: Lizenzschlüssel abrufen**

1. Kehren Sie nach erfolgreicher Erstellung der Anwendung zur Lizenzliste zurück, suchen Sie den entsprechenden Eintrag und klicken Sie in der Aktionsspalte auf die Schaltfläche "Lizenz anzeigen".
2. Klicken Sie im Popup mit den Lizenzdetails auf die Schaltfläche "Kopieren", um den **Lizenzschlüssel** zu erhalten, der zu Ihrer Instanz passt.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Schritt 4: Lizenzschlüssel in NocoBase konfigurieren**

1. Kehren Sie zu Ihrer lokalen NocoBase-Seite `Lizenzeinstellungen` zurück.
2. Fügen Sie den soeben kopierten `Lizenzschlüssel` in das Eingabefeld `Lizenzschlüssel` ein und klicken Sie auf die Schaltfläche "Absenden".
3. Nach erfolgreichem Speichern zeigt das System die Meldung "Lizenzschlüssel erfolgreich gespeichert, bitte starten Sie den Server neu" an. Dies bedeutet, dass der Lizenzschlüssel erfolgreich konfiguriert wurde und auf den Neustart wartet.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Schritt 5: Aktivierung abschließen und kommerzielle Version sowie kommerzielle Plugins herunterladen**

Starten Sie Ihren NocoBase-Dienst neu, um die Lizenz anzuwenden und automatisch die kommerzielle Version und die kommerziellen Plugins herunterzuladen.

* **Für Docker-Bereitstellung**: Führen Sie den Neustartbefehl `docker compose restart app` aus.
* **Für Quellcode- oder `create-nocobase-app`-Bereitstellung**: Führen Sie den Befehl `yarn nocobase pkg download-pro` im Stammverzeichnis des Projekts aus.

Nachdem der Dienst neu gestartet und die Plugins erfolgreich heruntergeladen wurden, ist Ihre kommerzielle Lizenz aktiviert. Wenn Sie die Lizenz ändern müssen, können Sie die Seite mit den Lizenzeinstellungen erneut aufrufen, auf die Schaltfläche "Schlüssel ändern" klicken und den obigen Vorgang wiederholen.

---

## **So zeigen Sie Lizenzinformationen an**

Nach der Lizenzaktivierung können Sie jederzeit auf das Lizenzinformationssymbol in der oberen rechten Ecke der NocoBase-Oberfläche klicken, um detaillierte Informationen zur aktuellen Lizenz anzuzeigen, einschließlich Lizenzversion, Ablaufdatum, Domain-Übereinstimmungsstatus und Liste der autorisierten Plugins.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Bereitstellungs- und Lizenz-Schnellcheckliste

Bei Problemen können Sie diese Checkliste zur schnellen Fehlerbehebung heranziehen:

- [ ]  **Schritt 1: Instanz-ID abrufen**
  - [ ]  NocoBase Community Edition / Nicht lizenzierte Edition wird erfolgreich ausgeführt.
  - [ ]  `Instanz-ID` wurde vollständig von der Seite `Lizenzeinstellungen` kopiert.
- [ ]  **Schritt 2: Lizenzschlüssel generieren**
  - [ ]  Anwendung wurde auf der Serviceplattform erstellt.
  - [ ]  Die beim Erstellen der Anwendung eingefügte `Instanz-ID` ist die aktuellste und korrekte.
  - [ ]  `Lizenzschlüssel` wurde vollständig aus "Lizenz anzeigen" kopiert.
- [ ]  **Schritt 3: Aktivierung**
  - [ ]  `Lizenzschlüssel` wurde zurück in NocoBase eingefügt und erfolgreich gespeichert.
  - [ ]  **Container-Neustart oder `download-pro`-Befehl wurde je nach Bereitstellungsmethode ausgeführt.** (Viele Benutzer überspringen diesen Schritt!)
- [ ]  **Überprüfung**
  - [ ]  Das Popup mit den Lizenzinformationen zeigt den Status als "Aktiv" an.

## Häufig gestellte Fragen (FAQ)

Während der Installation oder Nutzung können die folgenden Meldungen auftreten. Bitte befolgen Sie die entsprechenden Lösungen:

### 1. `License key mismatch` - Lizenzschlüssel stimmt nicht mit der Umgebung überein

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[F]Warum erhalte ich nach der Konfiguration `License key mismatch`?

[A]Ihre Ausführungsumgebung hat sich möglicherweise geändert, was dazu führt, dass die "`Instanz-ID`" aktualisiert wurde, Ihre Anwendung jedoch noch den alten "`Lizenzschlüssel`" verwendet.
**Lösung**: Befolgen Sie strikt **Schritt 1** dieser Anleitung, um die neueste `Instanz-ID` aus Ihrer **aktuellen Umgebung** zu erhalten, und führen Sie dann den weiteren Prozess durch, um einen neuen "Schlüssel" zu generieren.

### 2. `Invalid license key` - Lizenzschlüssel ist abgelaufen

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[F]Was bedeutet `Invalid license key`?

[A]Ihr `Lizenzschlüssel` ist möglicherweise abgelaufen oder wurde aus anderen Gründen von der Plattform als ungültig markiert.
**Lösung**: Bitte kontaktieren Sie uns oder überprüfen Sie den Status Ihrer Lizenz auf der Serviceplattform. Generieren Sie bei Bedarf den `Lizenzschlüssel` neu und konfigurieren Sie ihn.

### 3. `Invalid license key format` - Formatfehler des Lizenzschlüssels

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[F]Was soll ich bei `Invalid license key format` tun?

[A]Der von Ihnen eingefügte `Lizenzschlüssel` ist unvollständig oder hat ein falsches Format, sodass das System ihn nicht analysieren kann.
**Lösung**: Kehren Sie zur Serviceplattform zurück, stellen Sie sicher, dass Sie den `Lizenzschlüssel` vollständig kopiert haben, fügen Sie ihn dann erneut ein und speichern Sie ihn.

### 4. Dialogfeld für Lizenzinformationen erscheint beim Zugriff auf das System erzwungenermaßen

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[F]Warum erscheint das Dialogfeld für Lizenzinformationen immer?

[A]Dieses Popup deutet normalerweise auf einen Fehler bei der Lizenzüberprüfung hin. Mögliche Ursachen sind:

- Der `Lizenzschlüssel` ist beschädigt oder stimmt nicht mit der lokalen Umgebung überein
- Die Lizenz ist abgelaufen oder ungültig
- Der `Lizenzschlüssel` stimmt nicht mit der Version der von Ihnen ausgeführten kommerziellen Plugins überein

**Lösung**: Die direkteste Lösung ist, den **Lizenzkonfigurationsprozess vollständig erneut durchzuführen**: Holen Sie sich die neueste `Instanz-ID`, generieren Sie einen neuen `Lizenzschlüssel` und setzen Sie ihn im lokalen System.

### 5. Probleme im Zusammenhang mit der Umgebungsmigration

[F]Ich habe meinen Server / meine Datenbank migriert, und die kommerziellen Plugins funktionieren nicht mehr. Was soll ich tun?

[A]Dies ist dasselbe Problem wie oben. Der Server oder die Datenbank sind Schlüsselinformationen, die den "Ausweis (`Instanz-ID`)" bilden. Wenn sie sich ändern, ändert sich die `Instanz-ID`.

**Lösung**: Wie oben: Holen Sie sich die neue `Instanz-ID`, generieren Sie einen neuen `Lizenzschlüssel` und reaktivieren Sie ihn. Der gesamte Prozess ist wie das Aktualisieren Ihrer ID-Adresse nach einem Umzug.

### 6. Plugin wird nicht wirksam

[F]Ich habe neu gestartet, warum funktionieren die kommerziellen Plugins immer noch nicht?

[A]Wenn Sie bestätigt haben, dass die `Lizenzschlüssel`-Konfiguration korrekt ist, versuchen Sie die folgende Fehlerbehebung:

1. **Netzwerk prüfen**: Stellen Sie sicher, dass Ihr Server auf das npm-Repository von NocoBase zugreifen kann.
2. **Protokolle prüfen**: Überprüfen Sie die NocoBase-Startprotokolle auf Plugin-Download-Fehler oder Lizenzüberprüfungsfehler.
3. **Manuelle Ausführung**: Wenn Sie eine Quellcode-Bereitstellung verwenden, führen Sie den Befehl `yarn nocobase pkg download-pro` erneut manuell aus und beobachten Sie die Ausgabe in der Befehlszeile.

### 7. Kommerzielle Plugins werden nach der Aktivierung auf einem laufenden System nicht angezeigt?

**[F]** Ich habe das NocoBase-System gestartet und dann den Lizenzschlüssel in den Einstellungen eingegeben. Die Aktivierung war erfolgreich, warum werden die kommerziellen Plugins nicht angezeigt?

**[A]** Dies ist ein erwartetes Verhalten und eine sehr häufige Frage. NocoBase ist so konzipiert, dass es die Lizenz **beim Start des Dienstes** überprüft und die entsprechenden Plugins lädt. Wenn Sie die Aktivierung durchgeführt haben, während das System bereits lief, müssen Sie den **NocoBase-Dienst neu starten**, um das Herunterladen und Aktivieren der kommerziellen Plugins auszulösen.

Einfach ausgedrückt ist die Lizenz wie ein "Ausweis" für NocoBase, aber es muss "erneut zur Tür hineingehen" (neu starten), um diesen Ausweis zu überprüfen und zu verwenden.

Bitte führen Sie den Neustart entsprechend Ihrer Bereitstellungsmethode durch:

* **Für Docker-Bereitstellung**: Führen Sie den Neustartbefehl `docker compose restart app` aus.
* **Für Quellcode- oder `create-nocobase-app`-Bereitstellung**: Stoppen Sie zuerst den laufenden Dienst in Ihrem Terminal (normalerweise durch Drücken von `Strg+C`) und führen Sie dann den Startbefehl erneut aus, z. B. `yarn start`.

### 8. Vergleich zwischen alter und neuer Autorisierungsmethode

[F]Wie unterscheidet sich dieser Prozess von der vorherigen Methode mit Benutzername/Passwort?

[A]Die alte Methode hat Ihr Kontopasswort direkt in der Umgebung offengelegt, was nicht sicher genug war. Das neue `Lizenzschlüssel`-System bietet mehrere Vorteile:

1. **Sicherer**: Sie müssen Ihr Hauptkontopasswort nicht offenlegen, sondern verwenden nur Schlüssel, die an bestimmte Umgebungen gebunden sind.
2. **Flexibler**: Sie können verschiedene `Lizenzschlüssel` für verschiedene Kunden oder Projekte generieren, was die Verwaltung erleichtert.
3. **Übersichtlicher**: Lizenzinformationen sind auf einen Blick klar, alle Details werden auf der Serviceplattform aufgezeichnet.
