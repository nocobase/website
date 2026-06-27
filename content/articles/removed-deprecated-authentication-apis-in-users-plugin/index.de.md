---
title: "Entfernt: Veraltete Authentifizierungs-APIs im Users-Plugin"
description: "Erfahren Sie mehr über die Entfernung veralteter Authentifizierungs-APIs im NocoBase Users-Plugin. Dieses Update ersetzt alte APIs durch das neue Auth-Plugin und verbessert Sicherheit und Funktionalität. Verstehen Sie die Änderungen, neuen Endpunkte und wie Sie reibungslos umsteigen. Unverzichtbare Lektüre für Entwickler, die Benutzerauthentifizierung in NocoBase verwalten."
---

In der im Juni veröffentlichten Version v0.10 wurde die Benutzerauthentifizierungsfunktionalität im User-Plugin (`@nocobase/plugin-users`) durch das Auth-Plugin (`@nocobase/plugin-auth`) ersetzt. Die vom User-Plugin bereitgestellten authentifizierungsbezogenen APIs wie Anmelden und Registrieren wurden als veraltet markiert. Weitere Details finden Sie unter [NocoBase 0.10: Neue Funktionen im zweiten Quartal#Änderungen der Anmelde-/Registrierungs-API](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Die authentifizierungsbezogenen APIs im User-Plugin wurden nun entfernt, wie in [PR-3122](https://github.com/nocobase/nocobase/pull/3122) beschrieben.
