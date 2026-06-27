---
title: "NocoBase v1.5.0 offiziell veröffentlicht"
description: "Kernoptimierungen, Import/Export großer Datenmengen, E-Mail-Verwaltung, Vorlagendruck und andere Funktionen verbessern die Systemleistung und Benutzererfahrung umfassend."
---

## Kernoptimierungen

### Links in einzeiligen Textfeldern aktivieren

Der Öffnungsmodus unterstützt Drawer, Dialog und Seite.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Verknüpfungsblock unterstützt Aktionen zum Verknüpfen/Verknüpfung aufheben

Sie können jetzt Verknüpfungs- und Verknüpfungsaufhebungsaktionen direkt im Verknüpfungsblock durchführen.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Workflow debuggen

Sie können jetzt Workflows während der Konfiguration direkt auslösen, um sie zu debuggen.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Verbesserte mobile Interaktion für Datumskomponenten

Verbesserte Interaktionserfahrung für datumsbezogene Komponenten auf mobilen Geräten.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Frontend-Leistungsoptimierungen

* Optimierte anfängliche Bildschirmladegeschwindigkeit.
* Das Frontend-Build-Tool wurde auf **rspack** geändert.
* Reduzierte Bundle-Größe der Einstiegsdateien für verschiedene Plugin-Pakete.
* Verbesserte Rendering-Leistung für große Datentabellen.
* Reduziertes Ruckeln bei Menüübergängen.
* Einführung von On-Demand-Lademethoden mit den neuen Bibliotheken `lazy` und `useLazy`.

Nachfolgend eine kurze Einführung zur Verwendung von `lazy` und `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Exportieren einer einzelnen Komponente:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Exportieren mehrerer Komponenten:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Exportieren einer Standardkomponente:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Rückgabe eines Hooks:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Rückgabe einer Bibliothek:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Neue Plugins

### Import Pro

Unterstützt asynchrone Importvorgänge, die in einem separaten Thread ausgeführt werden. Diese Funktion ermöglicht den Import großer Datenmengen mit verbesserter Leistung.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Referenz: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Ermöglicht asynchrone Exportvorgänge, die in einem separaten Thread ausgeführt werden, und unterstützt den Export großer Datenmengen sowie den Export von Anhängen.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Referenz: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Vorlagendruck

Mit dem Plugin für Vorlagendruck können Sie Vorlagendateien mit Word, Excel oder PowerPoint bearbeiten (unterstützt die Formate `.docx`, `.xlsx` und `.pptx`). Durch das Setzen von Platzhaltern und logischen Strukturen in der Vorlage können Sie dynamisch Dateien in vorgegebenen Formaten wie `.docx`, `.xlsx`, `.pptx` und sogar `.pdf` generieren. Diese Funktionalität ist weit verbreitet für die Erstellung verschiedener Geschäftsdokumente, einschließlich Angeboten, Rechnungen, Verträgen und mehr.

**Hauptfunktionen**

* **Multi-Format-Unterstützung**: Kompatibel mit Word-, Excel- und PowerPoint-Vorlagen, um unterschiedliche Anforderungen an die Dokumentenerstellung zu erfüllen.
* **Dynamische Datenbefüllung**: Befüllt Dokumentinhalte automatisch basierend auf definierten Platzhaltern und Logik.
* **Flexibles Vorlagenmanagement**: Einfaches Hinzufügen, Bearbeiten, Löschen und Kategorisieren von Vorlagen für eine bessere Wartung und Nutzung.
* **Umfangreiche Vorlagensyntax**: Unterstützt grundlegende Ersetzung, Array-Zugriff, Schleifen, bedingte Ausgabe und andere Vorlagensyntax für komplexe Dokumentenerstellung.
* **Formatierer-Unterstützung**: Bietet bedingte Ausgaben, Datumsformatierung, Zahlenformatierung und mehr, um die Klarheit und Professionalität von Dokumenten zu verbessern.
* **Effiziente Ausgabeoptionen**: Unterstützt die direkte PDF-Generierung für einfaches Teilen und Drucken.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Referenz: [Vorlagendruck](https://docs.nocobase.com/handbook/action-template-print)

### Audit-Logger

Dieses Plugin zeichnet Benutzeraktivitäten sowie Ressourcen-Operationsverläufe im System auf und verfolgt sie.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Referenz: [Audit-Logger](https://docs.nocobase.com/handbook/audit-logger)

### Workflow: Unterworkflow

Diese Funktion ermöglicht es einem Workflow, einen anderen Prozess aufzurufen. Sie können Variablen aus dem aktuellen Workflow als Eingabe für den Unterworkflow verwenden und dann die Ausgabe des Unterworkflows als Variablen in nachfolgenden Knoten nutzen.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Referenz: [Workflow: Unterworkflow](https://docs.nocobase.com/handbook/workflow-subflow)

### E-Mail-Manager

Integrieren Sie Ihre Google- oder Microsoft-E-Mail-Konten in NocoBase, um E-Mails zu senden, zu empfangen, anzuzeigen und zu verwalten. Darüber hinaus können E-Mails direkt in Seiten eingebettet werden.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Referenz: [E-Mail-Manager](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Dateispeicher: S3 (Pro)

Unterstützt Dateispeichertypen, die mit dem S3-Protokoll kompatibel sind, einschließlich Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO und mehr. Dieses Plugin unterstützt auch direkte Datei-Uploads und privaten Zugriff.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Referenz: [Dateispeicher: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
