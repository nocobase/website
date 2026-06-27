---
title: "Supprimé : API d'authentification obsolètes dans le plugin Utilisateurs"
description: "Découvrez la suppression des API d'authentification obsolètes dans le plugin Utilisateurs de NocoBase. Cette mise à jour remplace les anciennes API par le nouveau plugin Auth, améliorant la sécurité et les fonctionnalités. Comprenez les changements, les nouveaux points de terminaison et comment effectuer une transition en douceur. Lecture essentielle pour les développeurs gérant l'authentification des utilisateurs dans NocoBase."
---

Dans la version v0.10 publiée en juin, la fonctionnalité d'authentification utilisateur du plugin Utilisateur (`@nocobase/plugin-users`) a été remplacée par le plugin Auth (`@nocobase/plugin-auth`). Les API liées à l'authentification, comme la connexion et l'inscription, fournies par le plugin Utilisateur ont été dépréciées. Pour plus de détails, consultez [NocoBase 0.10 : Nouvelles fonctionnalités du deuxième trimestre#modifications des api de connexion/inscription](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Les API liées à l'authentification dans le plugin utilisateur ont désormais été supprimées, comme détaillé dans [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
