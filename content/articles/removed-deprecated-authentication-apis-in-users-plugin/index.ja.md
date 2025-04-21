2024年6月にリリースされたv0.10バージョンでは、ユーザープラグイン（`@nocobase/plugin-users`）におけるユーザー認証機能がAuthプラグイン（`@nocobase/plugin-auth`）に置き換えられました。ユーザープラグインが提供していたログインやサインアップなどの認証関連APIは非推奨とされました。詳細については、[NocoBase 0.10：第二四半期の新機能#サインイン・サインアップAPIの変更](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes)を参照してください。

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

ユーザープラグインにおける認証関連APIは現在、[PR-3122](https://github.com/nocobase/nocobase/pull/3122)に詳述されていますように、削除されました。