---
title: "NocoBase 0.10: Neue Funktionen im zweiten Quartal"
description: "NocoBase 0.10 verbessert die relationale Feldkomponente durch Unterstützung mehrerer Komponentenwechsel und fügt eine Funktion zum schnellen Erstellen relationaler Daten mit zwei Schnellerstellungsmodi und weiteren Aktualisierungen hinzu."
---

## Neue Funktionen im zweiten Quartal

- Verbesserungen an Assoziationsfeld-Komponenten, Unterstützung für mehrere Komponentenwechsel
  - Auswahl
  - Datensatzauswahl
  - Unterformular/Unterdetails
  - Untertabelle
  - Dateimanager
  - Titel (schreibgeschützt)
- Schnellerstellung von relationalen Daten, unterstützt zwei Schnellerstellungsmodi
  - Hinzufügen im Dropdown-Menü, um schnell einen neuen Datensatz basierend auf dem Titelfeld zu erstellen
  - Hinzufügen in einem Popup-Fenster, um komplexe Hinzufügeformulare zu konfigurieren
- Duplizieren-Aktion, unterstützt zwei Modi
  - Direkt duplizieren
  - In das Formular kopieren und weiter ausfüllen
- Formulardatenvorlagen
- Filterdatenbereich unterstützt Variablen
- Listenblock
- Rasterkartenblock
- Mobiler Client-Plugin
- Benutzerauthentifizierungs-Plugin, Unterstützung für verschiedene Authentifizierungsmethoden
  - E-Mail/Passwort
  - SMS
  - OIDC
  - SAML
- Workflow-Knoten
  - Manueller Knoten-Upgrade, Unterstützung für Hinzufügen und Bearbeiten aus bestehenden Sammlungen
  - Schleifenknoten
  - Aggregatknoten
- Dateimanager
  - Bereitstellung einer Dateisammlungsvorlage
  - Bereitstellung einer Dateimanager-Komponente

## Aktualisieren von Anwendungen

### Aktualisieren für Docker Compose

Keine Änderung, Upgrade-Referenz [Aktualisieren für Docker Compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Aktualisieren für Git-Quellcode

v0.10 hat ein großes Upgrade der Abhängigkeiten, daher müssen Sie vor dem Upgrade die folgenden Verzeichnisse löschen, um Fehler beim Upgrade des Quellcodes zu vermeiden

```bash
# .umi-Cache entfernen
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Kompilierte Dateien löschen
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Abhängigkeiten entfernen
yarn rimraf -rf node_modules
```

Weitere Details finden Sie unter [Aktualisieren für Git-Quellcode](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone)

### Aktualisieren für create-nocobase-app

Es wird empfohlen, dass `yarn create` die neue Version erneut herunterlädt und die `.env`-Konfiguration ändert. Weitere Details finden Sie im [Leitfaden für Hauptversions-Upgrades](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Bevorstehende veraltete und potenziell inkompatible Änderungen

### Untertabellen-Feldkomponente

Nicht kompatibel mit der neuen Version, Blockfelder müssen entfernt und neu zugewiesen werden (nur UI-Neuzuweisung)

### Änderungen der Anhang-Upload-API

Neben der integrierten Anhangstabelle können Benutzer auch benutzerdefinierte Dateisammlungen erstellen. Die Upload-API für Anhänge wurde von `/api/attachments:upload` auf `/api/<file-collection>:create` geändert. Upload ist veraltet, aber noch kompatibel mit v0.10, wird aber entfernt.

### Änderungen der signin/signup-API

Der NocoBase-Kernel bietet ein leistungsfähigeres [auth-Modul](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) mit den folgenden Änderungen an den APIs für Benutzeranmeldung, Registrierung, Verifizierung und Abmeldung:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Hinweis: Die oben genannten Benutzeroberflächen, die veraltet sind, sind noch kompatibel mit v0.10, werden aber in der nächsten Hauptversion entfernt.

### Anpassungen der Datumsfeld-Filterung

Wenn zuvor datumsbezogene Filterungen im Datenbereich konfiguriert wurden, müssen diese gelöscht und neu konfiguriert werden.

## Upgrade-Leitfaden für Drittanbieter-Plugins

### Abhängigkeiten-Upgrade

Zu den Abhängigkeiten gehören hauptsächlich

- `react` Upgrade auf v18
- `react-dom` Upgrade auf v18
- `react-router` Upgrade auf v6.11
- `umi` Upgrade auf v4
- `dumi` Upgrade auf v2

Die `package.json`-Abhängigkeiten sollten auf die neueste Version geändert werden, z.B:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Code-Änderungen

Da react-router aktualisiert wurde, muss auch der zugehörige Code geändert werden. Die wichtigsten Änderungen umfassen:

### Layout-Komponente

Die Layout-Komponente muss `<Outlet />` anstelle von `props.children` verwenden.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

Wenn Sie `React.cloneElement` verwenden, um die Routenkomponente zu rendern, müssen Sie dies wie folgt ändern:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Ändern Sie die Routenkomponente, um den Wert aus `useOutletContext` zu erhalten

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirect

`<Redirect>` wird zu `<Navigate replace />` geändert.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` wird zu `useHistory` geändert.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` wird zu `useLocation` geändert.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` wird zu `useSearchParams()` geändert.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Alle folgenden Routenpfade sind in v6 gültig:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Die folgenden RegExp-artigen Routenpfade sind in v6 nicht gültig:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Weitere API-Änderungen finden Sie unter [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
