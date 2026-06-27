---
title: "Eliminado: APIs de autenticación obsoletas en el plugin de Usuarios"
description: "Conozca la eliminación de las APIs de autenticación obsoletas en el plugin de Usuarios de NocoBase. Esta actualización reemplaza las APIs antiguas con el nuevo plugin Auth, mejorando la seguridad y funcionalidad. Comprenda los cambios, los nuevos endpoints y cómo realizar una transición sin problemas. Lectura esencial para desarrolladores que gestionan la autenticación de usuarios en NocoBase."
---

En la versión v0.10 lanzada en junio, la funcionalidad de autenticación de usuarios en el plugin de Usuarios (`@nocobase/plugin-users`) ha sido reemplazada por el plugin Auth (`@nocobase/plugin-auth`). Las API relacionadas con la autenticación, como inicio de sesión y registro, proporcionadas por el plugin de Usuarios han quedado obsoletas. Para más detalles, consulte [NocoBase 0.10: Nuevas funciones en el segundo trimestre#cambios en la api de inicio de sesión/registro](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Las API relacionadas con la autenticación en el plugin de usuarios ahora han sido eliminadas, según se detalla en [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
