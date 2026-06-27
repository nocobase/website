---
title: "Vereinfachen Sie das Hinzufügen und Aktualisieren von Plugins"
description: "Erfahren Sie, wie das neueste Update von NocoBase die Plugin-Verwaltung vereinfacht und eine einfachere Installation und Aktualisierung ermöglicht."
---

Um die Plugin-Verwaltung zu verbessern, haben wir kürzlich bedeutende Aktualisierungen am Plugin-Manager-Modul vorgenommen. Die wichtigsten Verbesserungen konzentrieren sich auf den Prozess des Hinzufügens und Aktualisierens von Plugins. Bitte beachten Sie, dass diese Funktionen nur in Version 1.4.0-alpha und höher verfügbar sind. Der aktuelle `main`-Branch ist v1.3. Um diese neuen Funktionen zu erleben, wechseln Sie bitte zum `next`-Branch (v1.4).

Die spezifischen Aktualisierungen in dieser Version [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) sind wie folgt:

## Plugin-Liste wird nun direkt von lokalen Plugins gelesen

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

Die Plugin-Liste liest nicht mehr aus der Datenbank-Plugin-Tabelle, sondern direkt aus den folgenden Umgebungsvariablen oder Verzeichnissen:

* Umgebungsvariablen
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Plugin-Verzeichnisse
  * `packages/plugins`: Plugins in der Entwicklung, müssen Quellcode enthalten.
  * `storage/plugins`: Unabhängige Plugins, müssen das kompilierte Plugin enthalten.

Plugins sind als npm-Pakete mit der folgenden Verzeichnisstruktur organisiert:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## Plugin-Paket extrahieren

Extrahieren Sie das Plugin-Paket direkt in das angegebene Verzeichnis, und die Plugin-Manager-Oberfläche erkennt es automatisch. Zum Beispiel:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Dieser Befehl stellt sicher, dass das Plugin in `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` extrahiert wird, ohne das `package`-Verzeichnis einzuschließen. Die korrekte Verzeichnisstruktur sollte sein:

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## Zusammenführung des Prozesses zum Hinzufügen und Aktualisieren von Plugins.

Verwenden Sie in der Oberfläche die Schaltfläche "Hinzufügen & Aktualisieren" oben rechts, um Plugins hinzuzufügen oder zu aktualisieren.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

Sie können auch den Befehl `pm add` verwenden, um Plugins hinzuzufügen oder zu aktualisieren. Der Prozess ist wie folgt:

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Installationsprozess für kommerzielle Plugins

Kein Download einzelner Plugins erforderlich; konfigurieren Sie einfach die folgenden Umgebungsvariablen:

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # Service-Plattform-Benutzername
NOCOBASE_PKG_PASSWORD=your-password   # Service-Plattform-Passwort
```

Während der Anwendungsinstallation oder -aktualisierung werden Plugins automatisch heruntergeladen und aktualisiert (Version automatisch erkannt).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Zum Beispiel das Upgrade-Befehlsprotokoll:

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

Für Intranet-Server können Sie den lokalen `storage/plugins`-Ordner auf den Server hochladen und dann den NocoBase-Installations- oder Upgrade-Befehl ausführen.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# or
yarn nocobase upgrade
```

## Plugin löschen

Da die Plugin-Liste nicht mehr aus der Datenbank-Plugin-Tabelle, sondern direkt von lokalen Plugins gelesen wird, ist das Löschen eines Plugins so einfach wie das Löschen des Plugin-Ordners. Mit anderen Worten, das Entfernen des Plugin-Ordners entfernt effektiv das Plugin.
