在6月份发布的 v0.10 版本中，用户插件 (`@nocobase/plugin-users`) 提供的用户认证功能已经由认证插件 (`@nocobase/plugin-auth`) 取代，用户插件提供的登录、注册等接口也被废弃，参考 [NocoBase 0.10：第二季度的新特性#登录、注册接口的变更](https://blog-cn.nocobase.com/posts/release-v010#%E7%99%BB%E5%BD%95%E6%B3%A8%E5%86%8C%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%8F%98%E6%9B%B4)。

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

现在用户插件中的用户认证相关接口已经被**移除**，参考 [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
