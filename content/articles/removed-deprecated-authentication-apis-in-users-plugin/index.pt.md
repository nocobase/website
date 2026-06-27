---
title: "Removido: APIs de autenticação obsoletas no plugin Users"
description: "Saiba sobre a remoção de APIs de autenticação obsoletas no plugin Users do NocoBase. Esta atualização substitui as APIs antigas pelo novo plugin Auth, melhorando a segurança e a funcionalidade. Entenda as mudanças, novos endpoints e como fazer a transição de forma suave. Leitura essencial para desenvolvedores que gerenciam autenticação de usuários no NocoBase."
---

Na versão v0.10 lançada em junho, a funcionalidade de autenticação de usuários no plugin User (`@nocobase/plugin-users`) foi substituída pelo plugin Auth (`@nocobase/plugin-auth`). As APIs relacionadas à autenticação, como login e cadastro, fornecidas pelo plugin User foram descontinuadas. Para mais detalhes, consulte [NocoBase 0.10: Novos recursos no segundo trimestre#alterações na api de login/cadastro](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

As APIs relacionadas à autenticação no plugin de usuário foram removidas, conforme detalhado em [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
